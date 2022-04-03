import { Address } from '../../entities/address'

export interface AddressRepository {
  create: (address: Address) => Promise<Address>
}
