import { inject, injectable } from 'tsyringe';

import { IChatService } from '../infra/chatServices/IChatService';
import { ICreateClientDTO } from './interfaces/ICreateClientDTO';

@injectable()
export class CreateClientUseCase {
  constructor(
    @inject('ChatService')
    private chatService: IChatService,
  ) {}

  public execute = async ({ session }: ICreateClientDTO): Promise<string> => {
    this.chatService.createInstance(session);

    return this.chatService.getAuthCode(session);
  };
}
