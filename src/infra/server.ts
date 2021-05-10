import express from 'express';

import { routes } from './http/routes';

const server = express();

routes.get('/', (request, response) => {
  response.status(200).json({ message: 'Healthy!' });
});

server.use(express.json());
server.use(routes);

export { server };
