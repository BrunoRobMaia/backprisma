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

    // Verifica se o usuário existe
    const user = await this.userRepository.findByEmail(data.email);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    // Gera uma chave dinâmica de 32 bytes (segura)
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
