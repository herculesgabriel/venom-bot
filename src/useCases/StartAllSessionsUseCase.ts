import { inject, injectable } from 'tsyringe';
import fs from 'fs';
import path from 'path';

import { IChatService } from '../infra/chatServices/IChatService';

@injectable()
export class StartAllSessionsUseCase {
  constructor(
    @inject('ChatService')
    private chatService: IChatService,
  ) {}

  public execute = async (): Promise<void> => {
    const listSessions = fs.readdirSync(path.resolve(__dirname, '..', '..', 'tokens'));

    listSessions.forEach(async (session) => {
      const sessionName = session.split('.')[0];

      this.chatService.createInstance(sessionName);
    });
  };
}
