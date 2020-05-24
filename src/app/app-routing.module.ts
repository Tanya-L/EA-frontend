import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './layouts/home/home.component';
import {ContactComponent} from './components/contact/contact.component';
import {OmOssComponent} from './components/om-oss/om-oss.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ServiceComponent} from './components/service/service.component';
import {BookingComponent} from './bookingFlow/booking/booking.component';
import {BookCalendarComponent} from './bookingFlow/book-calendar/book-calendar.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {path: 'om-oss', component: OmOssComponent, pathMatch: 'full' },
  {path: 'contact', component: ContactComponent, pathMatch: 'full' },
  {path: 'service', component: ServiceComponent, pathMatch: 'full'},
  {path: 'booking', component: BookingComponent, pathMatch: 'full'},
  {path: 'admin', component: BookCalendarComponent, pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
