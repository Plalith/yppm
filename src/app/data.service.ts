import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class DataService {

  result:any;
  tm:any;
  login=false;
  constructor(private _http: Http) { }

  getupdates() {
    return this._http.get("/api/updates").map(result => 
      {
        this.result = result.json();
      });
  }

  gettm() {
    return this._http.get("/api/gettm").map(res => 
    {
      this.tm = res.json();
    });
  }

  updatedelete(id) {
    return this._http.post("/api/updatedelete", {'id':id}).map(res => {
      console.log(res);
    });
  }


}
