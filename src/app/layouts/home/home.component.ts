import { Component, OnInit } from '@angular/core';
import * as Phone from "../../components/contact/assets/headphones.png";
import * as Mail from "../../components/contact/assets/mail.png";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../components/contact/contact.component.css']
})
export class HomeComponent implements OnInit {
  public phone: string = Phone.default;
  public mail: string = Mail.default;
  constructor() { }

  ngOnInit() {
  }

}
