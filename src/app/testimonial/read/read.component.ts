import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  tms: Array<any>;
 
   constructor(private ds : DataService) { 
     this.ds.gettm().subscribe(res=>{
       this.tms = this.ds.tm;
     });
   }
   readfn(id : string) {
     this.tms.find(item => item._id==id).read=!this.tms.find(item => item._id==id).read;
   }
   ngOnInit() {
   }
 
}
