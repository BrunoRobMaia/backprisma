import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController{
  constructor(private deleteUserUseCase: DeleteUserUseCase){}
  async handle(request: Request, response:Response): Promise<any>{
    const data = request.params.id
    try {
      await this.deleteUserUseCase.execute({
        id: Number(data)
      })
      return response.status(200).send();
    } catch(err){
      console.log(err)
      return response.status(400).json({
        message: (err as Error).message || "Erro inesperado"
      })
    }
  }
}