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

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
  }

}
