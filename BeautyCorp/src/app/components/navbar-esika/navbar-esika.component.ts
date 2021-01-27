import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-esika',
  templateUrl: './navbar-esika.component.html',
  styleUrls: ['./navbar-esika.component.scss']
})
export class NavbarEsikaComponent implements OnInit {
  isScrollActive:boolean=false;
// activar scroll al bajar pantalla
  scroll(event){
    if(window.scrollY>50){
      this.isScrollActive=true;
    }else{
      this.isScrollActive=false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
