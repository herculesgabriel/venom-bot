import { IChatService } from '../../chatServices/IChatService';
import { IStartClientInstanceDTO } from './interfaces/ISendMarketingMessagesDTO';

export class StartClientInstanceUseCase {
  constructor(private chatService: IChatService) {}

  public execute = async ({ session }: IStartClientInstanceDTO): Promise<void> => {
    this.chatService.startInstance(session);
  };
}
