import { Component, Inject } from '@angular/core';

var sampleImg = require("./../../../img/sample.jpg");

@Component({
  selector: 'main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss']
})

export class MainComponent  {
  sampleImg: String = sampleImg;
}
