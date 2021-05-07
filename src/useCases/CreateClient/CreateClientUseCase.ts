import { IChatService } from '../../chatServices/IChatService';
import { ICreateClientDTO } from './interfaces/ICreateClientDTO';

export class CreateClientUseCase {
  constructor(private chatService: IChatService) {}

  public execute = async ({ session }: ICreateClientDTO): Promise<string> => {
    this.chatService.createInstance(session);

    return this.chatService.getAuthCode(session);
  };
}
