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
import { BookingComponent } from './booking/booking.component';
import { AdminComponent } from './adminFlow/admin/admin.component';
import { BookCalendarComponent } from './book-calendar/book-calendar.component';
import { LoginComponent } from './adminFlow/login/login.component';

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
    BookCalendarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    JwSocialButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
