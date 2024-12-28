import { MySqlIUserRepository } from '../../repositories/implementations/MySqlIUserRepository'; 
import { DeleteUserController } from './DeleteUserController';
import { DeleteUserUseCase } from './DeleteUserUseCase';

const mysqlUserRepository = new MySqlIUserRepository();
const deleteUserUseCase = new DeleteUserUseCase(mysqlUserRepository);
const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController };