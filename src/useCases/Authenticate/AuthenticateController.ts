import { Request, Response } from 'express';
import { AuthenticateUseCase } from './AuthenticateUseCase';

export class AuthenticateController {
  constructor(private authenticateUseCase: AuthenticateUseCase) {}

  async handle(request: Request, response: Response): Promise<any> {
    const { email } = request.body;

    try {
      const result = await this.authenticateUseCase.execute({ email });
      return response.status(200).send(result);
    } catch (err) {
      return response.status(400).json({
        message: (err as Error).message || 'Erro inesperado'
      });
    }
  }
}