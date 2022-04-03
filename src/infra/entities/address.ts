import { Column, PrimaryGeneratedColumn } from 'typeorm'
import { Address } from '../../data/entities/address'
import { UserEntity } from './user'

export class AddressEntity implements Address {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  user: UserEntity

  @Column()
  address: string

  addressNumber: string
  @Column()
  neighborhood: string

  @Column()
  complement: string
}
