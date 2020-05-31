import {Component, OnInit} from '@angular/core';
import BookingService from '../booking/booking.service';
import {BookingFormData} from '../booking-form-data';
import {Router} from '@angular/router';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  formModel: BookingFormData = new BookingFormData('', '', '', '');
  isBookingError = false;
  public error: string = '';

  constructor(private bookingService: BookingService,
              private router: Router) {
  }

  ngOnInit() {
    if (!this.bookingService.selectedTimeSlot) {
      this.router.navigate(['/booking']);
    }
  }

  triggerBooking(event) {
    this.isBookingError = false;
    event.preventDefault();
    const formData = new FormData(event.target);
    if (formData.get('name') && formData.get('email')) {
      this.bookingService.bookTime(
        {
          timestamp: this.bookingService.selectedTimeSlot.date,
          booking: {
            name: formData.get('name'),
            email: formData.get('email'),
            comments: formData.get('comment'),
            phone: formData.get('telephone'),
          }
        }
      ).then(response => {
        if (response.result) {
          this.router.navigate(['/booking-thanks']);
        } else {
          this.error = this.bookingService.getError(response.reason);
          this.isBookingError = true;
        }
      });
    }

  }
}
