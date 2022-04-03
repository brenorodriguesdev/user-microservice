import { getRepository, Repository } from 'typeorm'
import { UserRepository } from '../../data/contracts/repositories/user-repository'
import { User } from '../../data/entities/user'
import { UserEntity } from '../entities/user'

export class UserRepositoryPG implements UserRepository {
  private readonly userRepository: Repository<UserEntity> = getRepository(UserEntity)
  async create (user: User): Promise<User> {
    const userCreated = await this.userRepository.save(user)
    return userCreated
  }

  async findByEmail (email: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { email } })
    return user
  }
}
