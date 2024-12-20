import { Request, Response } from 'express'
import { CreateCompanyUseCase } from './CreateCompanyUseCase'

export class CreateCompanyController {
  constructor(private createCompanyUseCase: CreateCompanyUseCase){}

  async handle(request: Request, response: Response): Promise<any> {
    const {name} = request.body

    try {
      const company = await this.createCompanyUseCase.execute({
        name
      });
      return response.status(201).send(company)
    } catch(err) {
      return response.status(400).json({
        message: (err as Error).message || "Erro inesperado"
      })
    }
  }
}