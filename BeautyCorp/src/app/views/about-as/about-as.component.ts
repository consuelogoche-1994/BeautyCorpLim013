import { Component, OnInit } from '@angular/core';
declare const M: any;
@Component({
  selector: 'app-about-as',
  templateUrl: './about-as.component.html',
  styleUrls: ['./about-as.component.scss']
})

export class AboutAsComponent implements OnInit {
  options:any={indicators: true};
  constructor() { }

  ngOnInit(): void {
    //iniciar navBar
    M.AutoInit();
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, this.options);
  }

}
