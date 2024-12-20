import { Company } from "@prisma/client";
import { prismaClient } from "../../database";
import { ICompanyRepository } from "../ICompanyRepository";

export class MySqlICompanyRepository implements ICompanyRepository {
  async findById(id: number): Promise<Company | null> {
    const companyExist = await prismaClient.company.findFirst({
      where: { id },
    });
    return companyExist;
  }
  async save(company: Omit<Company, "id">): Promise<Company> {
    const newCompany = await prismaClient.company
      .create({
        data: company,
      })
      .catch((err) => {
        console.log(err);
        throw new Error(`Erro ao criar empresa. Erro ${err}`);
      });
    console.log("Nova empresa criada", newCompany.name);
    return newCompany;
  }
  async update(id: number, company: Partial<Company>): Promise<void> {
    const updateCompany = await prismaClient.company
      .update({
        where: { id },
        data: company,
      })
      .catch((err) => {console.log(err)
        throw new Error(`Erro ao atualizar empresa. Erro ${err}`)
      });
      console.log('Empresa atualizada', updateCompany.name)
  }
  async delete(id: number): Promise<void> {
    const updateCompany = await prismaClient.company
      .update({
        where: { id },
        data: {}
      }
      )
      .catch((err) => {
        console.log("Error: ", err);
        throw new Error(`Erro ao deletar empresa. Erro: ${err}`);
      });
    console.log("Empresa deletada", updateCompany.name);
  }
}
