import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { environment } from '../environments/environment.prod';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
console.log('Running in production?', environment.production);
console.log('API URL:', environment.apiUrl);
