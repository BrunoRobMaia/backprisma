import { MySqlICompanyRepository } from "../../repositories/implementations/MySqlCompanyRepository";
import { CreateCompanyController } from "../CreateCompany/CreateCompanyController";
import { CreateCompanyUseCase } from "../CreateCompany/CreateCompanyUseCase";

const mysqlCompanyRepository = new MySqlICompanyRepository();

const createCompanyUseCase = new CreateCompanyUseCase(mysqlCompanyRepository)
const createCompanyController = new CreateCompanyController(createCompanyUseCase)

export { createCompanyController }
