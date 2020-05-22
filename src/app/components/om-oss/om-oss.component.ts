import { Component, OnInit } from '@angular/core';
import * as Phone from '../contact/assets/headphones.png';


@Component({
  selector: 'app-om-oss',
  templateUrl: './om-oss.component.html',
  styleUrls: ['./om-oss.component.css', '../contact/contact.component.css']
})
export class OmOssComponent implements OnInit {
  public phone: string = Phone.default;

  constructor() { }

  ngOnInit() {
  }

}
