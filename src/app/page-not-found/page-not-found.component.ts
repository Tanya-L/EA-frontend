import { Component, OnInit } from '@angular/core';
import * as NotFound from "src/app/page-not-found/assets/404.png";
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
public notFound: string = NotFound.default;

  constructor() { }

  ngOnInit() {
  }

}
