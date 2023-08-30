import { createInjector, Scope } from 'typed-inject';
import { LoggingService } from '../services/LoggingService';
import { NotificationsService } from '../services/NotificationsService';
import { CounterService } from '../services/CounterService';

const getApiKey = () => {
  console.log('GENERATING API KEY ...');
  return 'secretKey.SomeRandomLongStreamOfCharacters';
};
const diContainer = createInjector()
  .provideClass('ILoggingService', LoggingService, Scope.Singleton)
  .provideValue('NotificationService_Port', 5173)
  .provideValue('NotificationService_ApiKey', getApiKey())
  .provideClass('INotificationsService', NotificationsService, Scope.Transient)
  .provideClass('ICounterService', CounterService);

export { diContainer };
