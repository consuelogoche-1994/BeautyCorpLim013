import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
declare const M: any;

@Component({
  selector: 'app-home-esika',
  templateUrl: './home-esika.component.html',
  styleUrls: ['./home-esika.component.scss']
})
export class HomeEsikaComponent implements OnInit {
  options:any={indicators: true};
  productsTop:any;
  constructor(private firestoreService: FirebaseService) { }

  ngOnInit(): void {
    //iniciar navBar
    M.AutoInit();
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, this.options);

    this.firestoreService.getProductsFilter().subscribe((catsSnapshot) => {
      this.productsTop = [];
      catsSnapshot.forEach((catData: any) => {
        this.productsTop.push({id: catData.payload.doc.id, ...catData.payload.doc.data()});
      })
      // this.productsTop=this.productsTop.splice(0,4);
    });
  }

}
