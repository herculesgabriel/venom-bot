import { CreateClientUseCase } from './CreateClientUseCase';
import { CreateClientController } from './CreateClientController';

const createClientUseCase = new CreateClientUseCase();
const createClientController = new CreateClientController(createClientUseCase);

export { createClientController, createClientUseCase };
