import { Router } from 'express';

import { createClientController, sendMarketingMessagesController } from './services';

const routes = Router();

routes.get('/', (req, res) => res.status(200).json({ message: 'Healthy!' }));

routes.post('/client', createClientController.handle);
routes.post('/client/send', sendMarketingMessagesController.handle);

export { routes };
