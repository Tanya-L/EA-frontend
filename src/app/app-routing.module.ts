import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './layouts/home/home.component';
import {ContactComponent} from './components/contact/contact.component';
import {OmOssComponent} from './components/om-oss/om-oss.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ServiceComponent} from './components/service/service.component';
import {BookingComponent} from './bookingFlow/booking/booking.component';
import {CancelThanksComponent} from './bookingFlow/cancel-thanks/cancel-thanks.component';
import {BookingThanksComponent} from './bookingFlow/booking-thanks/booking-thanks.component';
import {AdminBookingComponent} from './adminFlow/admin-booking/admin-booking.component';
import {LoginComponent} from './adminFlow/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {path: 'om-oss', component: OmOssComponent, pathMatch: 'full' },
  {path: 'contact', component: ContactComponent, pathMatch: 'full' },
  {path: 'service', component: ServiceComponent, pathMatch: 'full'},
  {path: 'booking', component: BookingComponent, pathMatch: 'full'},
  {path: 'admin', component: AdminBookingComponent, pathMatch: 'full'},
  {path: 'admin/login', component: LoginComponent, pathMatch: 'full'},
  {path: 'cancel-thanks', component: CancelThanksComponent, pathMatch: 'full'},
  {path: 'booking-thanks', component: BookingThanksComponent, pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
