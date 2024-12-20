import { ICreateUserDTO } from "./CreateUserDTO"; 
import { IUserRepository } from "../../repositories/IUserRepository";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository){}

  async execute ( data: ICreateUserDTO){
    if(!data.name || !data.email){
      throw new Error('Campo obrigatorio: nome e email')
    }
    return await this.userRepository.save(data)
  }
}