import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigService {
  private static cache = null;

  constructor(private data: any) { }

  public static loadInstance(jsonFile: string) {
      return new Promise((resolve, reject) => {
          var xobj = new XMLHttpRequest();
          xobj.overrideMimeType("application/json");
          xobj.open('GET', jsonFile, true);
          xobj.onreadystatechange = () => {
              if (xobj.readyState == 4) {
                  if (xobj.status == 200) {
                      this.cache = new ConfigService(JSON.parse(xobj.responseText));
                      resolve();
                  }
                  else {
                      reject(`Could not load file '${jsonFile}': ${xobj.status}`);
                  }
              }
          }
          xobj.send(null);
      });
  }

  public static getInstance() {
    if(this.cache){
      return this.cache;
    }else{
      return {};
    }
  }
}
