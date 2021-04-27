import { Router } from 'express';

const routes = Router();

routes.route('/')
  .get((request, response) => {
    response
      .status(200)
      .json({ message: 'OK' });
  });

export { routes };
