import { Component, OnInit } from '@angular/core';
import * as Gastro from 'src/app/components/service/assets/012-gastric-reflux.png';
import * as Bronko from 'src/app/components/service/assets/033-lungs.png';
import * as Kardio from 'src/app/components/service/assets/040-heart-1.png';
import * as Monitor from 'src/app/components/service/assets/0499-monitor.png';
import * as Kirurgi from 'src/app/components/service/assets/085-scalpel.png';
import * as Blood from 'src/app/components/service/assets/030-blood-sample.png';
import * as Ekg from 'src/app/components/service/assets/043-ekg-monitor.png';
import * as Molar from 'src/app/components/service/assets/081-molar.png';
import * as Syringe from 'src/app/components/service/assets/025-syringe.png';
import * as Dialys from 'src/app/components/service/assets/014-kidneys.png';
import * as Hospital from 'src/app/components/service/assets/079-hospital.png';
import * as Pasport from 'src/app/components/service/assets/001-id.png';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  public gastro: string = Gastro.default;
  public bronko: string = Bronko.default;
  public kardio: string = Kardio.default;
  public monitor: string = Monitor.default;
  public kirurgi: string = Kirurgi.default;
  public blood: string = Blood.default;
  public ekg: string = Ekg.default;
  public molar: string = Molar.default;
  public syringe: string = Syringe.default;
  public dialys: string = Dialys.default;
  public hostipal: string = Hospital.default;
  public pasport: string = Pasport.default;
  public openService = '';

  constructor() { }

  ngOnInit() {
  }

  setService(service: string) {
    this.openService = service;
  }
}
