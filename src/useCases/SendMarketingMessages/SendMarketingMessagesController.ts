import { Request, Response } from 'express';

import { SendMarketingMessagesUseCase } from './SendMarketingMessagesUseCase';
import { ICreateClientRequestBody } from './interfaces/ISendMarketingMessagesRequest';

export class SendMarketingMessagesController {
  constructor(private sendMarketingMessagesUseCase: SendMarketingMessagesUseCase) {}

  public handle = async (request: Request, response: Response): Promise<void> => {
    const { session, message, clientNumbers }: ICreateClientRequestBody = request.body;

    try {
      this.sendMarketingMessagesUseCase.execute({
        client: session,
        message,
        clientNumbers,
      });

      response.status(200).json({ message: 'Sending messages' });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: error.message || 'Internal server error' });
    }
  };
}
