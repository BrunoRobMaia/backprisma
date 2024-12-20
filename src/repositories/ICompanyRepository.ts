import { Company } from "@prisma/client";

export interface ICompanyRepository {
  findById(id: number): Promise<Company | null>;
  save(company: Omit<Company, "id">): Promise<Company>;
  update(id: number, company: Partial<Company>): Promise<void>;
  delete(id: number): Promise<void>;
}
