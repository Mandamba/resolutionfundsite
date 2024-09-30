// src/main.ts

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

import { Carousel, initTWE } from 'tw-elements';

initTWE({ Carousel });

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
