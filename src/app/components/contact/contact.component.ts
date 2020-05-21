import { Component, OnInit } from '@angular/core';
import * as Phone from 'src/app/components/contact/assets/headphones.png';
import * as Mail from 'src/app/components/contact/assets/mail.png';
import * as Pin from 'src/app/components/contact/assets/pin.png';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
public phone: string = Phone.default;
public mail: string = Mail.default;
public pin: string = Pin.default;

  constructor() { }

  ngOnInit() {
  }

}
