import { server } from './server';

const { PORT = 3000 } = process.env;

server.listen(PORT, () => {
  console.log(`🚀 Server started at port ${PORT}`);
});
