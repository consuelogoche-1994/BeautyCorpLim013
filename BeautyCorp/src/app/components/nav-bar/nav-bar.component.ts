import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})


export class NavBarComponent implements OnInit {
  isScrollActive:boolean=false;
// activar scroll al bajar pantalla
  scroll(event){
    if(window.scrollY>200){
      this.isScrollActive=true;
    }else{
      this.isScrollActive=false;
    }
    console.log(window.scrollY);
  }

  constructor() { 
  }

  ngOnInit(): void {

  }

}
