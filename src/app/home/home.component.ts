import { Component, OnInit } from '@angular/core';
import skrollr from "skrollr";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  s;

  constructor() {
    this.s = skrollr.init({
      edgeStrategy: 'set',
      easing: {
        WTF: Math.random,
        inverted: function(p) {
          console.log(p);
          return 1-p;
        }
      }
    });
  }

  ngOnInit() {

    this.s.refresh();
    console.log(this.s);
  }

}
