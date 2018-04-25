import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  report:String="";
  constructor(private http: Http) { 
    this.report="";
  }

  ngOnInit() {
  }

  posttm(form: NgForm) {
    console.log(form.value.name);
    console.log(form.value.mob);
    console.log(form.value.tmessage);
    console.log(form);

    this.http.post('/api/ptm', {
      'name':form.value.name,
      "mob":form.value.mob,
      "message":form.value.tmessage
     }).subscribe((res)=>{
       console.log(res);
       form.reset();
       this.report="Thanks for sharing your testimonial with us. it will be in our site shortly";
     })
  }
}
