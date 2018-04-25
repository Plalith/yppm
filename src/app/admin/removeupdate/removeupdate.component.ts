import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-removeupdate',
  templateUrl: './removeupdate.component.html',
  styleUrls: ['./removeupdate.component.css']
})
export class RemoveupdateComponent implements OnInit {
  updates:Array<any>;
  constructor(private ds:DataService, private router: Router) { 

    if(!this.ds.login) {
      this.router.navigateByUrl('/login');
    }

    this.ds.getupdates().subscribe(res=>{
      this.updates = this.ds.result;
    });
  }

  ngOnInit() {
  }
  updatedelete(id:String) {
    this.ds.updatedelete(id).subscribe((res)=>{
      console.log(res);
      this.ds.getupdates().subscribe(res=>{
        this.updates = this.ds.result;
      });
    })
  }
}
