import { Component, OnInit } from '@angular/core';
import BookingService from '../booking/booking.service';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
  }

}
