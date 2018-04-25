import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-rmtm',
  templateUrl: './rmtm.component.html',
  styleUrls: ['./rmtm.component.css']
})
export class RmtmComponent implements OnInit {

  tms: Array<any>;
 
  constructor(private ds: DataService, private http:Http) { 
    this.ds.gettm().subscribe(res=>{
      this.tms = this.ds.tm;
    });
  }
  readfn(id : string) {
    this.tms.find(item => item._id==id).read=!this.tms.find(item => item._id==id).read;
  }
  ngOnInit() {
  }
  delete(id: String) {
    let additem = this.tms.find(item => item._id==id);
    this.http.post('/api/removetm', {'id':additem._id}).subscribe(result=>{
      console.log(result);
      this.ds.gettm().subscribe(res=>{
        this.tms = this.ds.tm;
      });
    });
  }
}
