import { Router } from 'express';

import { CreateClientController, SendMarketingMessagesController } from './controllers';

const createClientController = new CreateClientController();
const sendMarketingMessagesController = new SendMarketingMessagesController();

const routes = Router();

routes.post('/client', createClientController.handle);
routes.post('/client/send', sendMarketingMessagesController.handle);

export { routes };
