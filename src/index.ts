import 'reflect-metadata';

import './shared/containers';
import './jobs';
import { server } from './infra/server';

const { PORT = 3000 } = process.env;

server.listen(PORT, () => {
  console.log(`🚀 Server started at port ${PORT}`);
});
