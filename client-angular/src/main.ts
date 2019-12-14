<<<<<<< HEAD
import { enableProdMode } from '../node_modules/@angular/core';
import { platformBrowserDynamic } from '../node_modules/@angular/platform-browser-dynamic';
=======
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
>>>>>>> 408e9537b5b8ab21c3132c8d9a5924dde28cd7c5

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
