import { create, Whatsapp } from 'venom-bot';

import { IChatService } from '../IChatService';

import { QrCode } from './types';

const instances: Whatsapp[] = [];

const qrCodes: QrCode = {};

export class VenomChatService implements IChatService {
  private findClient = (sessionName: string) => instances
    .find((instance) => instance.session === sessionName);

  public createInstance = async (sessionName: string): Promise<void> => {
    try {
      const client = await create(sessionName, (qrCode) => {
        qrCodes[sessionName] = qrCode;
      });

      instances.push(client);

      this.startInstance(sessionName);
    } catch (error) {
      console.log(error);
    }
  };

  public getAuthCode = async (session: string): Promise<string> => {
    const qrCode = qrCodes[session];

    if (!qrCode) {
      await new Promise((resolve) => setTimeout(() => resolve(''), 1500));
      return this.getAuthCode(session);
    }

    return qrCode;
  };

  public startInstance = async (session: string): Promise<void> => {
    const foundClient = this.findClient(session);

    if (!foundClient) {
      console.error('Start instance: client not found');
    }
    foundClient?.onMessage((message) => {
      foundClient?.sendText(message.from, 'Esta é uma resposta :)');
    });
  };

  public sendMessage = async (
    from: string,
    to: string,
    messages: string[],
  ): Promise<void> => {
    const foundClient = this.findClient(from);

    if (!foundClient) {
      console.error('Send message: client not found');
    }

    messages.forEach((message) => {
      foundClient?.sendText(to, message);
    });
  };
}
