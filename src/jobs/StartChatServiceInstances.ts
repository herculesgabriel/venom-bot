import { container } from 'tsyringe';

import { StartAllSessionsUseCase } from '../useCases';

const startAllSessionsUseCase = container.resolve(StartAllSessionsUseCase);

startAllSessionsUseCase.execute();
