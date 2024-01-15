import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

//proje ayağa kalkatıgında bu tsye göre çalışsın(AppComponent)
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
