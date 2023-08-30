import { INotificationsService } from './INotificationsService';
export class NotificationsService implements INotificationsService {
  constructor() {
    console.log('notifications service instantiated');
  }
  sendNotification(body: string): void {
    console.log(`sending notification to remote server: '${body}'`);
  }
}
