import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import BookingService from '../booking/booking.service';
import {UnbookFormData} from '../unbook-form-data';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent implements OnInit {
  formModel: UnbookFormData = new UnbookFormData('', '');
  isCancelError = false;
  public error = '';
  constructor(private bookingService: BookingService,
              private router: Router) { }

  ngOnInit() {
  }

  onCancel(event) {
      event.preventDefault();
      this.isCancelError = false;
      const formData = new FormData(event.target);
      this.bookingService.cancelAppointment(formData.get('bookingCode')).then(response => {
        if (response.result) {
          this.router.navigate(['/cancel-thanks']) ;
        } else {
          this.isCancelError = true;
          this.error = this.bookingService.getError(response.reason);
        }
      });
    }

}
