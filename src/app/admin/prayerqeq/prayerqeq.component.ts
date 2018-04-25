import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-prayerqeq',
  templateUrl: './prayerqeq.component.html',
  styleUrls: ['./prayerqeq.component.css']
})
export class PrayerqeqComponent implements OnInit {
  results:any;
  constructor(private http:Http) { 
    this.http.get('/api/prayerreq').subscribe(result=>{
      this.results=result.json();
    });
  }
  delete(id:String){
    this.http.post('/api/delpr', {'id':id}).subscribe(result=>{
      this.http.get('/api/prayerreq').subscribe(result=>{
      this.results=result.json();
      });
    });
  }
  ngOnInit() {
  }

}
