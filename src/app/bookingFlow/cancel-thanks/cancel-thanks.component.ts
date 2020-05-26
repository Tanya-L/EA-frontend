import {Component, OnInit} from '@angular/core';
import * as Phone from '../../components/contact/assets/headphones.png';


@Component({
  selector: 'app-cancel-thanks',
  templateUrl: './cancel-thanks.component.html',
  styleUrls: ['./cancel-thanks.component.css']
})
export class CancelThanksComponent implements OnInit {
  public phone: string = Phone.default;

  constructor() {
  }

  ngOnInit() {
  }

}
