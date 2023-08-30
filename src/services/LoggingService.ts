import { ILoggingService } from './ILoggingService';

export class LoggingService implements ILoggingService {
  constructor() {
    console.log('logging service instantiated');
  }
  public log(message: string) {
    console.log(`Logger: ${message}`);
  }
}
