interface CreateUserAddressModel {
  address: string
  addressNumber: string
  neighborhood: string
  complement: string
}

export interface CreateUserModel {
  cpfOrCnpj: string
  fullname: string
  phone: string
  address: CreateUserAddressModel
  password: string
}
