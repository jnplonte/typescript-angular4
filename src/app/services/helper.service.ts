import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {
  constructor (){

  }

  secondsToHms(sec){
    sec = Number(sec);

    let h = Math.floor(sec / 3600), hText = '', m = Math.floor(sec % 3600 / 60), s = Math.floor(sec % 3600 % 60);
    if(h >= 1){
      hText = `00${h}`.slice(-2) + " Hours ";
    }
    return hText + `00${m}`.slice(-2) + " Minutes " + `00${s}`.slice(-2) + " Seconds ";
  }
}
