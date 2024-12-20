import { MySqlIUserRepository } from "../../repositories/implementations/MySqlIUserRepository"; 
import { AuthenticateController } from "./AuthenticateController";
import { AuthenticateUseCase } from "./AuthenticateUseCase";

const mysqlUserRepository = new MySqlIUserRepository();

const authenticateUseCase = new AuthenticateUseCase(mysqlUserRepository);
const authenticateController = new AuthenticateController(authenticateUseCase);

export { authenticateController };