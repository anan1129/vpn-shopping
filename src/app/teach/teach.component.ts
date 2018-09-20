import { Component, OnInit } from '@angular/core';
const $=window['$'];

@Component({
  selector: 'app-teach',
  templateUrl: './teach.component.html',
  styleUrls: ['./teach.component.scss']
})
export class TeachComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    $('body').on('activate.bs.scrollspy', function (e) {
      console.log(e);
      // do something…
    });
  }
}
