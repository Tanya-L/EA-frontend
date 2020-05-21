import { Component, OnInit } from '@angular/core';
import * as ContactFoto from 'src/app/components/contact/assets/028cat.png';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
public contactFoto: string = ContactFoto.default;

  constructor() { }

  ngOnInit() {
  }

}
