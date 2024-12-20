import { MySqlIUserRepository } from "../../repositories/implementations/MySqlIUserRepository";
import { EditUserController } from "./EditUserController";
import { EditUserUseCase } from "./EditUserUseCase";

const mysqlUserRepository = new MySqlIUserRepository();
const editUserUseCase = new EditUserUseCase(mysqlUserRepository)
const editUserController = new EditUserController(editUserUseCase)

export {editUserController}