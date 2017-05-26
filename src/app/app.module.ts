import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import { MainComponent } from './components/main/main.component';

import { BgcheckDirective } from './directives/bgcheck.directive';

import { ConfigService } from './services/config.service';
import { HelperService } from './services/helper.service';

const appRoutes: Routes = [
  { path: '',
    component: MainComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  JsonpModule,
                  RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, MainComponent, PageNotFoundComponent, BgcheckDirective ],
  providers:    [ {provide: 'configService', useFactory: () => ConfigService.getInstance()},
                  {provide: 'helperService', useClass: HelperService} ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
