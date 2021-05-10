import { container } from 'tsyringe';

import { IChatService } from '../../infra/chatServices/IChatService';
import { VenomChatService } from '../../infra/chatServices/implementations/VenomChatService';

container.registerSingleton<IChatService>(
  'ChatService',
  VenomChatService,
);
