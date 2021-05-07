import { VenomChatService } from './chatServices/implementations/VenomChatService';

import { StartAllSessionsUseCase } from './useCases/StartAllSessions';
import { StartClientInstanceUseCase } from './useCases/StartClientInstance';
import { CreateClientController, CreateClientUseCase } from './useCases/CreateClient';
import {
  SendMarketingMessagesController,
  SendMarketingMessagesUseCase,
} from './useCases/SendMarketingMessages';
import { create } from 'venom-bot';

const venomChatService = new VenomChatService();

const startAllSessionsUseCase = new StartAllSessionsUseCase();
const startClientInstanceUseCase = new StartClientInstanceUseCase(venomChatService);
const createClientUseCase = new CreateClientUseCase(venomChatService);
const sendMarketingMessagesUseCase = new SendMarketingMessagesUseCase(venomChatService);

const createClientController = new CreateClientController(createClientUseCase);
const sendMarketingMessagesController = new SendMarketingMessagesController(
  sendMarketingMessagesUseCase,
);

startAllSessionsUseCase.execute();

export {
  venomChatService,
  startAllSessionsUseCase,
  startClientInstanceUseCase,
  createClientController,
  createClientUseCase,
  sendMarketingMessagesController,
  sendMarketingMessagesUseCase,
};
