import { User } from '../../entities/user'

export interface UserRepository {
  create: (user: User) => Promise<User>
  findByEmail: (email: string) => Promise<User | null>
}
