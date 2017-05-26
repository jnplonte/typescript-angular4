import { inject, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';

import { HelperService } from './../services/helper.service';

describe('Service: HelperService', function () {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ HelperService ]
    });
  });

  beforeEach(inject([HelperService], s => {
    service = s;
  }));

  it('should check if the helper service is define', () => {
    expect(service.secondsToHms()).toBeDefined();
  });
});
