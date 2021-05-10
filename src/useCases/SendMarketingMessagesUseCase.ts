import { inject, injectable } from 'tsyringe';

import { IChatService } from '../infra/chatServices/IChatService';
import { ISendMarketingMessagesDTO } from './interfaces/ISendMarketingMessagesDTO';

import { formatClientNumber } from '../utils/venomNumber';

@injectable()
export class SendMarketingMessagesUseCase {
  constructor(
    @inject('ChatService')
    private chatService: IChatService,
  ) {}

  public execute = async ({
    client,
    messages,
    clientNumbers,
  }: ISendMarketingMessagesDTO): Promise<void> => {
    clientNumbers.forEach((number) => {
      const formattedNumber = formatClientNumber(number);
      this.chatService.sendMessage(client, formattedNumber, messages);
    });
  };
}
