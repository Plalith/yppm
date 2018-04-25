import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  updates: Array<any>;

  constructor(private ds: DataService) { 
    this.ds.getupdates().subscribe(res =>{
    this.updates = this.ds.result
    });
  }

  ngOnInit() {
  }

}
