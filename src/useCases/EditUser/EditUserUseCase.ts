import { IUserRepository } from "../../repositories/IUserRepository";
import { IEditUserRequest } from "./EditUserDTO";

export class EditUserUseCase {
  constructor(private userRepository: IUserRepository){}

  async execute(id: number, data: IEditUserRequest){
    const userExists = await this.userRepository.findById(id);
    if(!userExists){
      throw new Error('Usuário inexistente')
    }
    if(data.email){
      const userAlreadyExistEmail = await this.userRepository.findByEmail(data.email)

      if (userAlreadyExistEmail) {
        throw new Error("Email já cadastrado.");
      }
    }

    const userUpdated = await this.userRepository.update(id, data);
    return userUpdated;
  }
}