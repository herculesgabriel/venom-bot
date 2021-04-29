import { Whatsapp } from 'venom-bot';

const startClient = (client : Whatsapp) : void => {
  let messageNumber = 0;

  client.onMessage((message) => {
    if (messageNumber === 0) {
      client.sendText(message.from, 'Olá! Qual é o seu nome?');
      messageNumber += 1;
    } else {
      client.sendText(message.from, 'É um prazer ter você aqui!');
    }
  });
};

export { startClient };
