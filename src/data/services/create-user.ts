import { CreateUserModel } from '../../domain/models/create-user'
import { CreateUserUseCase } from '../../domain/useCases/create-user'
import { Hasher } from '../contracts/cryptography/hasher'
import { AddressRepository } from '../contracts/repositories/address-repository'
import { UserRepository } from '../contracts/repositories/user-repository'

export class CreateUserService implements CreateUserUseCase {
  constructor (private readonly userRepository: UserRepository, private readonly hasher: Hasher, private readonly addressRepository: AddressRepository) {}
  async create ({
    cpfOrCnpj,
    fullname,
    email,
    phone,
    address,
    password
  }: CreateUserModel): Promise<void | Error> {
    const userAlreadyExist = await this.userRepository.findByEmail(email)
    if (!userAlreadyExist) {
      return new Error('Esse e-mail já está cadastrado!')
    }
    const passwordHashed = await this.hasher.hash(password)
    const user = await this.userRepository.create({
      email,
      cpfOrCnpj,
      fullname,
      phone,
      password: passwordHashed
    })

    await this.addressRepository.create({
      idUser: user.id,
      address: address.address,
      addressNumber: address.addressNumber,
      complement: address.complement,
      neighborhood: address.neighborhood
    })
  }
}
