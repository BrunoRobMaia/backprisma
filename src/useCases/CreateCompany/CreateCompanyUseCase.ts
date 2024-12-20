import { ICreateCompantDTO } from "../CreateCompany/CreateCompanyDTO";
import { ICompanyRepository } from "../../repositories/ICompanyRepository";

export class CreateCompanyUseCase {
  constructor(private companyRepository: ICompanyRepository) {}

  async execute (data: ICreateCompantDTO) {
    if(!data.name) {
      throw new Error('Campo obrigatório: nome')
    }
    return await this.companyRepository.save(data)
  }
}
