import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss']
})
export class ItemProductComponent implements OnInit {
products:any=[];
data(){
  console.log(this.products);
}
  constructor(private firestoreService: FirebaseService) { }

  ngOnInit(): void {

    this.firestoreService.getProducts().subscribe((catsSnapshot) => {
      this.products = [];
      catsSnapshot.forEach((catData: any) => {
        this.products.push({id: catData.payload.doc.id, data: catData.payload.doc.data()});
      })
    });

  }
}
