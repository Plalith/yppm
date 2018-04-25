import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-addupdate',
  templateUrl: './addupdate.component.html',
  styleUrls: ['./addupdate.component.css']
})
export class AddupdateComponent implements OnInit {
  announcement:String;
  report:String="";
  constructor(private _http: Http) { }

  ngOnInit() {
    this.report="";
  }
  addupdate(form: NgForm) {
    console.log("click");

    this._http.post("/api/addupdate", {'name':form.value.announcement, 'date':new Date().toLocaleDateString() })
    .subscribe(result=>{
      console.log(result.json());
      form.reset();
      this.report="Update Successfully Added"
    });
    
  }
}
