import { Component, OnInit } from '@angular/core';
import * as Foto1 from '../om-oss/assets/hubert.jpg';
import * as Foto2 from '../om-oss/assets/agnes_01.jpg';



@Component({
  selector: 'app-om-oss',
  templateUrl: './om-oss.component.html',
  styleUrls: ['./om-oss.component.css', '../contact/contact.component.css']
})
export class OmOssComponent implements OnInit {
  public foto1: string = Foto1.default;
  public foto2: string = Foto2.default;

  constructor() { }

  ngOnInit() {
  }

}
