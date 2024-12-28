import { IUserRepository } from '../../repositories/IUserRepository';
import { IDeleteUserRequest } from './DeleteUserDTO';

export class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) { }

  async execute(data: IDeleteUserRequest) {
    const userExist = await this.userRepository.findById(data.id);
    if (!userExist) {
      throw new Error('Usuário não encontrado.');
    }
    await this.userRepository.delete(data.id);
  }
}