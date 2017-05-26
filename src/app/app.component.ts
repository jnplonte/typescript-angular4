import { Component, Inject} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html'
})

export class AppComponent  {
  config;
  name = 'test';

  constructor(@Inject('configService') configService){
    this.config = configService.data;
    console.log(this.config);
  }
}
