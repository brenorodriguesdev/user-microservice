import { Column, PrimaryGeneratedColumn } from 'typeorm'
import { Address } from '../../data/entities/address'

export class AddressEntity implements Address {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  idUser: number

  @Column()
  address: string

  addressNumber: string
  @Column()
  neighborhood: string

  @Column()
  complement: string
}
