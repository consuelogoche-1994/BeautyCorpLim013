import { Component, OnInit } from '@angular/core';
declare const M: any;
@Component({
  selector: 'app-about-as',
  templateUrl: './about-as.component.html',
  styleUrls: ['./about-as.component.scss']
})
export class AboutAsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
        //iniciar navBar
        M.AutoInit();
  }

}
