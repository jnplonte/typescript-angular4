import { async, inject, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';

import { ConfigService } from './../services/config.service';

describe('Service: ConfigService', function () {
  let service;

  beforeEach(async(() => {
    ConfigService.loadInstance('./base/site/test-config.json').then(() => {
      TestBed.configureTestingModule({
        providers: [ {provide: 'configService', useFactory: () => ConfigService.getInstance()} ]
      });
    });
  }));

  it('should check if the site config is being fetch', () => {
      expect(JSON.stringify(ConfigService.getInstance())).toContain('data');
  });
});
