import { User } from './user'

export interface Address {
  id?: number
  user: User
  address: string
  addressNumber: string
  neighborhood: string
  complement: string
}
