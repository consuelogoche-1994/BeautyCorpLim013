import { Component, OnInit } from '@angular/core';
declare const M: any;
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //iniciar navBar
    M.AutoInit();
  }

}
