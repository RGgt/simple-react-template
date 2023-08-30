import { ICounterService } from './ICounterService';
import { ILoggingService } from './ILoggingService';
import { INotificationsService } from './INotificationsService';

export class CounterService implements ICounterService {
  public static inject = [
    'ILoggingService',
    'INotificationsService',
    'NotificationService_Port',
    'NotificationService_ApiKey',
  ] as const;
  constructor(
    private loggingService: ILoggingService,
    private notificationService: INotificationsService,
    private remotePort: number,
    private remoteApiKey: string,
  ) {
    console.log(
      'counter service instantiated',
      loggingService,
      notificationService,
      remotePort,
      remoteApiKey,
    );
  }
  public incrementCounter(count: number, increment: number): number {
    const message = `incrementing counter to ${
      count + increment
    } but also logging and notifying a remote server: http://remoteServer:${
      this.remotePort
    }/remoteApi/notifyIncrements. Secret key: '${this.remoteApiKey}'`;
    this.loggingService.log(message);
    this.notificationService.sendNotification(message);
    return count + increment;
  }
}
