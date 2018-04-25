import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-prayerreq',
  templateUrl: './prayerreq.component.html',
  styleUrls: ['./prayerreq.component.css']
})
export class PrayerreqComponent implements OnInit {
  report:String="";
  constructor(private http: Http) { this.report=""; }

  ngOnInit() {
  }

  post(form: NgForm) {
    this.http.post('/api/prayerreq', {
      'name':form.value.name,
      'mob':form.value.mob,
      'message':form.value.message
    }).subscribe(result=>{
      console.log(result);
      form.reset();
      this.report="your request posted successfully ! Our Team Will call you Shortly";
    });
  }

}
