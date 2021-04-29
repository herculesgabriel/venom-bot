import { Whatsapp } from 'venom-bot';
import { formatClientNumber } from './utils/venomNumber';

type MarketingOptions = {
  client: Whatsapp;
  message: string;
  clientNumbers: string[];
}

const sendMarketingMessages = ({ client, message, clientNumbers }: MarketingOptions) : void => {
  for (let i = 0; i < 100; i += 1) {
    clientNumbers.forEach((number) => {
      client.sendText(formatClientNumber(number), message);
    });
  }
};

const startClient = (client : Whatsapp) : void => {
  let messageNumber = 0;

  client.onMessage((message) => {
    if (messageNumber === 0) {
      console.log(message.from);
      client.sendText(message.from, 'Olá! Qual é o seu nome?');
      messageNumber += 1;
    } else {
      client.sendText(message.from, 'É um prazer ter você aqui!');
    }
  });

  sendMarketingMessages({ client, message: 'olatudobemcomovai', clientNumbers: ['558185709316'] });
};

export { startClient, sendMarketingMessages };
