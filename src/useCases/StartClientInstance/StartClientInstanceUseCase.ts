import { IChatService } from '../../chatServices/IChatService';
import { IStartClientInstanceDTO } from './interfaces/ISendMarketingMessagesDTO';
// import { sendMarketingMessagesUseCase } from '../../services';

export class StartClientInstanceUseCase {
  constructor(private chatService: IChatService) {}

  public execute = async ({ session }: IStartClientInstanceDTO): Promise<void> => {
    await this.chatService.startInstance(session);

    // only for test purpose
    // sendMarketingMessagesUseCase.execute({
    //   client: session,
    //   message: 'Olá, tudo bem?',
    //   clientNumbers: ['558186669938'],
    // });
  };
}
