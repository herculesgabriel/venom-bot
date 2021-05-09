import { IChatService } from '../../chatServices/IChatService';
import { ISendMarketingMessagesDTO } from './interfaces/ISendMarketingMessagesDTO';
import { formatClientNumber } from '../../utils/venomNumber';

export class SendMarketingMessagesUseCase {
  constructor(private chatService: IChatService) {}

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
