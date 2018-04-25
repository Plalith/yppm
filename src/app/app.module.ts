import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { UICarouselModule } from "ui-carousel";
import { AnnouncementsComponent } from './announcements/announcements.component';
import { PrayerreqComponent } from './prayerreq/prayerreq.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AddupdateComponent } from './admin/addupdate/addupdate.component';
import { RemoveupdateComponent } from './admin/removeupdate/removeupdate.component';
import { TrComponent } from './admin/tr/tr.component';
import { ReadComponent } from './testimonial/read/read.component';
import { WriteComponent } from './testimonial/write/write.component';
import { LoginComponent } from './admin/login/login.component';
import { RmtmComponent } from './admin/rmtm/rmtm.component';
import { PrayerqeqComponent } from './admin/prayerqeq/prayerqeq.component';

  const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'announcements', component:AnnouncementsComponent},
    {path:'prayerrequests', component:PrayerreqComponent},
    {path:'testimonial', component:TestimonialComponent, children:[
      {path:'', component:ReadComponent},
      {path:'twrite', component:WriteComponent}
    ]},
    {path:'aboutus', component:AboutusComponent},
    {path:'contactus', component:ContactusComponent},
    {path:'login', component:LoginComponent},
    {path:'admin', component:AdminComponent, children: [
      {path:'addupdate',  component:AddupdateComponent},
      {path:'removeupdate', component:RemoveupdateComponent},
      {path:'tr', component:TrComponent},
      {path:'rmtm', component:RmtmComponent},
      {path:'prayerreq', component:PrayerqeqComponent}
    ]}
  ];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AnnouncementsComponent,
    PrayerreqComponent,
    TestimonialComponent,
    AboutusComponent,
    ContactusComponent,
    AdminComponent,
    AddupdateComponent,
    RemoveupdateComponent,
    TrComponent,
    ReadComponent,
    WriteComponent,
    LoginComponent,
    RmtmComponent,
    PrayerqeqComponent
  ],
  imports: [
    BrowserModule,
    UICarouselModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
