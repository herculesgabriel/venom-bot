import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateClientUseCase } from '../../../useCases/CreateClientUseCase';
import { ICreateClientRequestBody } from './interfaces/ICreateClientRequest';

export class CreateClientController {
  public handle = async (request: Request, response: Response): Promise<void> => {
    const { session }: ICreateClientRequestBody = request.body;

    const createClientUseCase = container.resolve(CreateClientUseCase);

    try {
      const qrCode = await createClientUseCase.execute({ session });

      response.status(200).json({ qrCode });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: error.message || 'Internal server error' });
    }
  };
}
