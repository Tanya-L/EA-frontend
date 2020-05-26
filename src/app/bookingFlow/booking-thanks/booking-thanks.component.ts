import { Component, OnInit } from '@angular/core';
import * as Phone from '../../components/contact/assets/headphones.png';


@Component({
  selector: 'app-booking-thanks',
  templateUrl: './booking-thanks.component.html',
  styleUrls: ['./booking-thanks.component.css']
})
export class BookingThanksComponent implements OnInit {
  public phone: string = Phone.default;

  constructor() { }

  ngOnInit() {
  }

}
