import { Column, PrimaryGeneratedColumn } from 'typeorm'
import { User } from '../../data/entities/user'

export class UserEntity implements User {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  cpfOrCnpj: string

  @Column()
  email: string

  @Column()
  fullname: string

  @Column()
  phone: string

  @Column()
  password: string
}
