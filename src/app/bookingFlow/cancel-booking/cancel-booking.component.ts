import { Component, OnInit } from '@angular/core';
import BookingService from '../booking/booking.service';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent implements OnInit {

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
  }

}
