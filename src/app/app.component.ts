import { Component, Inject} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent  {
  config;
  name = 'test';

  constructor(@Inject('configService') configService){
    this.config = configService.data;
    console.log(this.config);
  }
}
