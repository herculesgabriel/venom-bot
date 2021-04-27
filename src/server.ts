import express from 'express';

import { routes } from './routes';

const server = express();

server.use(express.json());
server.use(routes);

const { PORT = 3000 } = process.env;

server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
