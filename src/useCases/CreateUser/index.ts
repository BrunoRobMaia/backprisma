import { MySqlIUserRepository } from "../../repositories/implementations/MySqlIUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mysqlUserRepository = new MySqlIUserRepository();

const createUserUseCase = new CreateUserUseCase(mysqlUserRepository)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }