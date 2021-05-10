import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { SendMarketingMessagesUseCase } from '../../../useCases';
import { ICreateClientRequestBody } from './interfaces/ISendMarketingMessagesRequest';

export class SendMarketingMessagesController {
  public handle = async (request: Request, response: Response): Promise<void> => {
    const { session, messages, clientNumbers }: ICreateClientRequestBody = request.body;

    const sendMarketingMessagesUseCase = container.resolve(SendMarketingMessagesUseCase);

    try {
      sendMarketingMessagesUseCase.execute({
        client: session,
        messages,
        clientNumbers,
      });

      response.status(200).json({ message: 'Sending messages' });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: error.message || 'Internal server error' });
    }
  };
}
