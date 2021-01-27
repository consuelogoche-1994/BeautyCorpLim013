import { Component, OnInit } from '@angular/core';
declare const M: any;

@Component({
  selector: 'app-home-esika',
  templateUrl: './home-esika.component.html',
  styleUrls: ['./home-esika.component.scss']
})
export class HomeEsikaComponent implements OnInit {
  options:any={indicators: true};
  constructor() { }

  ngOnInit(): void {
    //iniciar navBar
    M.AutoInit();
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, this.options);
  }

}
