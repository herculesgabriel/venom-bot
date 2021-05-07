import fs from 'fs';
import path from 'path';

import { createClientUseCase } from '../../services';

export class StartAllSessionsUseCase {
  public execute = async (): Promise<void> => {
    const listSessions = fs.readdirSync(path.join(__dirname, '..', '..', '..', 'tokens'));

    listSessions.forEach(async (session) => {
      const sessionName = session.split('.')[0];

      createClientUseCase.execute({ session: sessionName });
    });
  };
}
