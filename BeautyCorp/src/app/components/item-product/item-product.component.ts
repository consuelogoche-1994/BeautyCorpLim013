import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss']
})
export class ItemProductComponent implements OnInit {
products:any=[];
  constructor(private firestoreService: FirebaseService) { }

  ngOnInit(): void {
  }
  quantity: number = 1;
  priceS = 60;
  price=this.priceS;
  i = 1;
  plus() {
    if (this.i != 5) {
      this.i++;
      this.quantity = this.i;
      this.price = this.quantity * this.priceS;
    }
  }
  minus() {
    if (this.i != 1) {
      this.i--;
      this.quantity = this.i;
      this.price = this.quantity * this.priceS;
    }
  }
  buy() {
    const productsLocal = JSON.parse(localStorage.getItem("products"));
    if(productsLocal){
      let arrProducts = productsLocal.products;
      arrProducts.push({name:"perfume2",qty:3});
      productsLocal.products=arrProducts;
      localStorage.setItem("products",JSON.stringify(productsLocal));
    }else{
      let product=new Array();
      product[0]={name:"perfume",qty:2};
      const products= {products:product};
      console.log(products);
      localStorage.setItem("products",JSON.stringify(products));
    }
    
  }
}