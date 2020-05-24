import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OmOssComponent } from './components/om-oss/om-oss.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './layouts/header/header.component';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { FooterComponent } from './layouts/footer/footer.component';
import { ServiceComponent } from './components/service/service.component';
import { ExtraServiceComponent } from './components/extra-service/extra-service.component';
import { BookingComponent } from './bookingFlow/booking/booking.component';
import { AdminComponent } from './adminFlow/admin/admin.component';
import { LoginComponent } from './adminFlow/login/login.component';
import { BookingFormComponent } from './bookingFlow/booking-form/booking-form.component';
import { CancelBookingComponent } from './bookingFlow/cancel-booking/cancel-booking.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ContactComponent,
    OmOssComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ServiceComponent,
    ExtraServiceComponent,
    BookingComponent,
    AdminComponent,
    LoginComponent,
    BookingFormComponent,
    CancelBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    JwSocialButtonsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
