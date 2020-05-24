import { Component, OnInit } from '@angular/core';
import * as Phone from '../../components/contact/assets/headphones.png';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css', '../../components/contact/contact.component.css']
  })
export class BookingComponent implements OnInit {
  public phone: string = Phone.default;

  constructor() { }

  ngOnInit() {
  }

}
