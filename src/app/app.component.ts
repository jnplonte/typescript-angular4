import { Component, Inject} from '@angular/core';

import * as _ from 'lodash';

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
    

    var other = _.concat([1], 2, [3], [[4]]);

    console.log(this.config, other);
  }
}
