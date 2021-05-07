import { IChatService } from '../../chatServices/IChatService';
import { ISendMarketingMessagesDTO } from './interfaces/ISendMarketingMessagesDTO';
import { formatClientNumber } from '../../utils/venomNumber';

export class SendMarketingMessagesUseCase {
  constructor(private chatService: IChatService) {}

  public execute = async ({
    client,
    message,
    clientNumbers,
  }: ISendMarketingMessagesDTO): Promise<void> => {
    for (let i = 0; i < 10; i += 1) {
      clientNumbers.forEach((number) => {
        const formattedNumber = formatClientNumber(number);
        this.chatService.sendMessage(client, formattedNumber, [message]);
      });
    }
  };
}
