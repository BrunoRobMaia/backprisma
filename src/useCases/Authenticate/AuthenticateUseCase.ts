import { IUserRepository } from "../../repositories/IUserRepository";
import { IAuthenticateRequestDTO } from "./IAuthenticateDTO"; 
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

export class AuthenticateUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: IAuthenticateRequestDTO) {
    if (!data.email) {
      throw new Error('Campo obrigatório: email');
    }

    const user = await this.userRepository.findByEmail(data.email);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const secret = crypto.randomBytes(32).toString('hex');

    const token = jwt.sign(
      { id: user.id, name: user.name, email: user.email }, 
      secret, 
      { expiresIn: '1h' }
    );

    return { 
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }, 
      token 
    };
  }
}
