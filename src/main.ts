import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';

import { ConfigService } from './app/services/config.service';

import './style/styles.css';

if (process.env.ENV === 'production') {
  enableProdMode();
}

function getElementAttrs(el) {
  return [].slice.call(el.attributes).map((attr) => {
    return {
      name: attr.name,
      value: attr.value
    }
  });
}

function getElementValue(elmAttribute, attrVal) {
  var elemVal = '';
  for (var i = 0; i < elmAttribute.length; i++) {
    if (elmAttribute[i].name == attrVal) {
      elemVal = elmAttribute[i].value;
      break;
    }
  }
  return elemVal;
}

const elmAttribute = getElementAttrs(document.querySelector('my-app'));

ConfigService.loadInstance(getElementValue(elmAttribute, 'config')).then(() => {
  platformBrowserDynamic().bootstrapModule(AppModule);
});
