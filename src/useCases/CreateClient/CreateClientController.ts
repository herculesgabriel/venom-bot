import { Request, Response } from 'express';

import { CreateClientUseCase } from './CreateClientUseCase';
import { ICreateClientRequestBody } from './interfaces/ICreateClientRequest';

export class CreateClientController {
  constructor(private createClientUseCase: CreateClientUseCase) {}

  public handle = async (request: Request, response: Response): Promise<void> => {
    const { session }: ICreateClientRequestBody = request.body;

    try {
      const qrCode = await this.createClientUseCase.execute({ session });

      response.status(200).json({ qrCode });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: error.message || 'Internal server error' });
    }
  };
}
