import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import BookingService from '../booking/booking.service';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent implements OnInit {
  @ViewChild('#email') emailInput: ElementRef;
  email: string;

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
  }

}
