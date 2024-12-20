import {Request, Response} from 'express'
import { EditUserUseCase } from './EditUserUseCase'

export class EditUserController {
  constructor(private editUserUseCase: EditUserUseCase){}

  async handle(request: Request, response: Response): Promise<any>{
    const id = Number(request.params.id)
    const data = request.body
    
    try {
      await this.editUserUseCase.execute(id, data)
      return response.status(204).send()
    } catch (err) {
      console.log(err)
      return response.status(400).json({
        message: (err as Error).message || "Erro inesperado"
      })
    }
  }
}