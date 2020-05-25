import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import BookingService from '../booking/booking.service';
import {UnbookFormData} from '../unbook-form-data';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent implements OnInit {
  formModel: UnbookFormData = new UnbookFormData('', '');

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
  }

}
