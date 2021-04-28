import { Router } from 'express';
import { create, Whatsapp } from 'venom-bot';

type QrCode = { [key: string]: string };

const routes = Router();

const sessions: Whatsapp[] = [];

const qrCodes: QrCode = {};

function createInstance(sessionName: string): void {
  create(sessionName, (qrCode) => {
    qrCodes[sessionName] = qrCode;
  })
    .then((client) => {
      sessions.push(client);
      sessions[0].onMessage((message) => client.sendText(message.from, 'Hey!'));
    })
    .catch((err) => console.log(err));
}

async function getQrCode(session: string): Promise<string> {
  const qrCode = qrCodes[session];

  if (!qrCode) {
    await new Promise((resolve) => setTimeout(() => resolve(''), 5000));
    return getQrCode(session);
  }

  return qrCode;
}

routes.route('/').get((request, response) => {
  response.status(200).json({ message: 'qrCode' });
});

routes.route('/create').post(async (request, response) => {
  const { session } = request.body;

  // iniciar nova instância
  createInstance(session);

  // retornar qr code pro usuário
  const qrCode = await getQrCode(session);

  console.log('Vou retornar');

  response.status(200).json({ code: qrCode });
});

export { routes };
