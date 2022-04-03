import bcrypt from 'bcrypt'
import { Hasher } from '../../data/contracts/cryptography/hasher'

export class BcryptAdapter implements Hasher {
  async hash (text: string): Promise<string> {
    return await bcrypt.hash(text, 8)
  }
}
