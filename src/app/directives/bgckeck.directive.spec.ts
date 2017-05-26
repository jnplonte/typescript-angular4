import {TestBed, ComponentFixture} from '@angular/core/testing';
import {By} from "@angular/platform-browser";
import {Component, DebugElement} from "@angular/core";

import {BgcheckDirective} from './../directives/bgcheck.directive';

@Component({
  template: `<input type="text" bgCheck />`
})

class TestContainer { }

describe('Directive: bgCheck', () => {
  let component: TestContainer;
  let fixture: ComponentFixture<TestContainer>;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TestContainer, BgcheckDirective ]
    });

    fixture = TestBed.createComponent(TestContainer);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('input'));
  });

  it('it should change backgroud color upon focus', () => {
    de.triggerEventHandler('focus', null);
    fixture.detectChanges();
    expect(de.nativeElement.style.backgroundColor).toBe('red');

    de.triggerEventHandler('blur', null);
    fixture.detectChanges();
    expect(de.nativeElement.style.backgroundColor).toBe('white');
  });
})
