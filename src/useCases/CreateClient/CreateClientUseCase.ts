import { create, Whatsapp } from 'venom-bot';
import fs from 'fs';
import path from 'path';

import { startClient } from '../../venom';
import { ICreateClientDTO } from './interfaces/ICreateClientDTO';

type QrCode = { [key: string]: string };

const instances: Whatsapp[] = [];

const qrCodes: QrCode = {};

const listSessions = fs.readdirSync(path.join(__dirname, '..', '..', '..', 'tokens'));

listSessions.forEach((session) => {
  const nameSession = session.split('.')[0];
  create(nameSession)
    .then((client) => startClient(client))
    .catch((error) => console.log(error));
});

const names: {
  session: string;
  name: string;
}[] = [];

function createInstance(sessionName: string): void {
  create(sessionName, (qrCode) => {
    qrCodes[sessionName] = qrCode;
  })
    .then((client) => {
      let messageNumber = 0;
      instances.push(client);
      const currentInstance = instances.find(({ session }) => session === sessionName);

      currentInstance?.onMessage((message) => {
        if (messageNumber === 0) {
          client.sendText(message.from, 'Olá! Qual é o seu nome?');
          messageNumber += 1;
        } else {
          names.push({ session: sessionName, name: message.body });
          const foundUser = names.find((user) => user.session === sessionName);
          client.sendText(message.from, `É um prazer ter você aqui, ${foundUser?.name}`);
        }
      });
    })
    .catch((err) => console.log(err));
}

async function getQrCode(session: string): Promise<string> {
  const qrCode = qrCodes[session];

  if (!qrCode) {
    await new Promise((resolve) => setTimeout(() => resolve(''), 1500));
    return getQrCode(session);
  }

  return qrCode;
}

export class CreateClientUseCase {
  public execute = async ({ session }: ICreateClientDTO): Promise<string> => {
    createInstance(session);

    return getQrCode(session);
  };
}
