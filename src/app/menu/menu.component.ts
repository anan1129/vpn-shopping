import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivationEnd, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private router:Router) {
    this.router.events.subscribe((e)=>{

      if(e instanceof ActivationEnd){
        console.log(e);
      }
    })

  }

  ngOnInit() {
  }

}
