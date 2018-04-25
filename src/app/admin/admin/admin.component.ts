import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private ds: DataService, private router: Router) {
    if(!this.ds.login) {
      this.router.navigateByUrl('/login');
    }
   }

  ngOnInit() {
  }

}
