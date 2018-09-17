import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-teach',
  templateUrl: './teach.component.html',
  styleUrls: ['./teach.component.scss']
})
export class TeachComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  jump(anchor){
    console.log(anchor)
    this.router.navigate(['teach'],{fragment:anchor});
  }
}
