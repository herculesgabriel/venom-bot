import { Router } from 'express';

import { createClientController } from './useCases/CreateClient';

const routes = Router();

routes.get('/', (req, res) => res.status(200).json({ message: 'Healthy!' }));

routes.post('/create', createClientController.handle);

export { routes };
