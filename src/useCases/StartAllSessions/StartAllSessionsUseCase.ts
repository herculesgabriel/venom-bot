import fs from 'fs';
import path from 'path';

import {
  createClientUseCase,
  startClientInstanceUseCase /* sendMarketingMessagesUseCase */,
} from '../../services';

const listSessions = fs.readdirSync(path.join(__dirname, '..', '..', '..', 'tokens'));

export class StartAllSessionsUseCase {
  public execute = async (): Promise<void> => {
    listSessions.forEach(async (session) => {
      const sessionName = session.split('.')[0];

      await createClientUseCase.execute({ session });
      startClientInstanceUseCase.execute({ session: sessionName });

      // only for test purpose
      // sendMarketingMessagesUseCase.execute({
      //   client: session,
      //   message: 'Olá, tudo bem?',
      //   clientNumbers: ['558186669938'],
      // });
    });
  };
}
