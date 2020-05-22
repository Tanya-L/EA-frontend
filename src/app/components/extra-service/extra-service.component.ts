import { Component, OnInit } from '@angular/core';
import * as Stethoscope from 'src/app/components/extra-service/assets/043-stethoscope.png';
import * as Microscope from 'src/app/components/extra-service/assets/018-microscope.png';
import * as Advice from 'src/app/components/extra-service/assets/advice-image.png';
import * as Care from 'src/app/components/extra-service/assets/017-healthcare.png';

@Component({
  selector: 'app-extra-service',
  templateUrl: './extra-service.component.html',
  styleUrls: ['./extra-service.component.css']
})
export class ExtraServiceComponent implements OnInit {
  public stethoscope: string = Stethoscope.default;
  public microscope: string = Microscope.default;
  public advice: string = Advice.default;
  public care: string = Care.default;

  constructor() { }

  ngOnInit() {
  }

}
