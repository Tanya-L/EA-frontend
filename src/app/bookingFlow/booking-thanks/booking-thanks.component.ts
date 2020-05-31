import { Component, OnInit } from '@angular/core';
import * as Phone from '../../components/contact/assets/headphones.png';
import BookingService from '../booking/booking.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-booking-thanks',
  templateUrl: './booking-thanks.component.html',
  styleUrls: ['./booking-thanks.component.css']
})
export class BookingThanksComponent implements OnInit {
  public phone: string = Phone.default;

  constructor(private bookingService: BookingService,
              private router: Router) { }

  ngOnInit() {
    if (!this.bookingService.selectedTimeSlot) {
      this.router.navigate(['/booking']);
    }
  }


}
