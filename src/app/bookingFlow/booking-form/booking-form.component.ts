import { Component, OnInit } from '@angular/core';
import BookingService from '../booking/booking.service';
import {BookingFormData} from '../booking-form-data';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  formModel: BookingFormData = new BookingFormData('', '', '', '');
  isBookingError = false;
  constructor(private bookingService: BookingService) { }

  ngOnInit() {
  }
  triggerBooking(event) {
    this.isBookingError = false;
    event.preventDefault();
    const formData = new FormData(event.target);
    this.bookingService.bookTime(
      {
        timestamp: this.bookingService.selectedTimeSlot.date,
        booking: {
          name: 'kjsd',
          comments: 'df',
          phone: 'fr',
        }
      }
    ).then(response => {
      if (response.result) {
        location.pathname ='/booking-thanks';
      }
      else {
        this.isBookingError = true;
      }
    });
  }
}
