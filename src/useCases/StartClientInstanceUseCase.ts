import { inject, injectable } from 'tsyringe';

import { IChatService } from '../infra/chatServices/IChatService';
import { IStartClientInstanceDTO } from './interfaces/IStartClientInstanceDTO';

@injectable()
export class StartClientInstanceUseCase {
  constructor(
    @inject('ChatService')
    private chatService: IChatService,
  ) {}

  public execute = async ({ session }: IStartClientInstanceDTO): Promise<void> => {
    this.chatService.startInstance(session);
  };
}
