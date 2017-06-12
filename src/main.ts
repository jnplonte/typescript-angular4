import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';

import { ConfigService } from './app/services/config.service';

import './style/styles.css';

if (process.env.ENV === 'production') {
  enableProdMode();
}

ConfigService.loadInstance(document.querySelector('my-app').getAttribute('config')).then(() => {
  platformBrowserDynamic().bootstrapModule(AppModule);
});
