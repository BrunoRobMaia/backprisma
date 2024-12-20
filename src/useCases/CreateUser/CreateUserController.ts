import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  constructor (private createUserUseCase: CreateUserUseCase){}

  async handle(request: Request, response: Response): Promise<any>{
    const {name, email, companyId} = request.body

    try {
      const user = await this.createUserUseCase.execute({
        name,
        email,
        companyId
      })
      return response.status(201).send(user)
    } catch(err) {
     return response.status(400).json({
      message: (err as Error).message || "Erro inesperado"
     })
    }
  }
}