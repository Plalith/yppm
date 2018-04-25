import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';
import { DataService } from '../../data.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  report:String="";

  constructor(private router: Router, private ds: DataService) { 
    this.report=""; 
    // if(this.ds.login) {
    //   this.router.navigateByUrl('/admin');
    // }
  }

  ngOnInit() {
  }

  login(form: NgForm) {

    if(form.value.uname==="yppm"){
      if(Md5.hashStr(form.value.password)==="15c4133803509833e767de79217c065f") {
          console.log("Ok ! Thats great You are loggedin");
          this.ds.login=true;
          this.router.navigateByUrl('/admin');
      } else {
        this.report="Entered Password is not correct Please enter Valid Password";
      }
    } else {
      this.report="Entered Username is not Correct Please Enter Valid Username";
    }
  }

}
