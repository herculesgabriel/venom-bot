import { Router } from 'express';

import { CreateInstance } from './venom';

const routes = Router();

const instance = new CreateInstance();

routes.route('/').get((request, response) => {
  const qrCode = instance.getQrCode();

  response.status(200).json({ message: qrCode });
});

routes.route('/create').post(async (request, response) => {
  const { number } = request.body;

  instance.createVenomInstance();

  // let processing = true;

  // while (instance.getQrCode() === '') {
    // console.log(instance.getQrCode());
    // break;
  // }

  // createdInstances.push(instance);

  response.status(200).json({ code: instance.getQrCode() });
});

export { routes };
