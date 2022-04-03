import { CreateUserModel } from '../models/create-user'

export interface CreateUserUseCase {
  create: (data: CreateUserModel) => Promise<void>
}
