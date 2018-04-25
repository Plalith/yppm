import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tr',
  templateUrl: './tr.component.html',
  styleUrls: ['./tr.component.css']
})
export class TrComponent implements OnInit {
  tms:Array<any>;
  constructor(private http: Http, private ds: DataService, private router: Router) {
    if(!this.ds.login) {
      this.router.navigateByUrl('/login');
    }

    this.http.get('/api/ptestimonials').subscribe(res=>{
      this.tms=res.json();
    });
   }
   readfn(id : string) {
    this.tms.find(item => item._id==id).read=!this.tms.find(item => item._id==id).read;
  }

  add(id: String) {
    let additem = this.tms.find(item => item._id==id);

    this.http.post('/api/addtestimonials', {
      'read':additem.read,
      'name':additem.name,
      'message':additem.message
    }).subscribe(result=>{
      console.log(result);
      this.http.post('/api/removeptm', {'id':additem._id}).subscribe(result=>{
        console.log(result);
        this.http.get('/api/ptestimonials').subscribe(res=>{
          this.tms=res.json();
        });
      });
    });
  }
  delete(id: String) {
    let additem = this.tms.find(item => item._id==id);
    this.http.post('/api/removeptm', {'id':additem._id}).subscribe(result=>{
      console.log(result);
      this.http.get('/api/ptestimonials').subscribe(res=>{
        this.tms=res.json();
      });
    });
  }

  ngOnInit() {
  }

}
