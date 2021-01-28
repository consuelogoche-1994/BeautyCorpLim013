import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss']
})
export class ItemProductComponent implements OnInit {
products:any=[];
  @Input() visible:boolean;
  @Input() detailProduct:any;
  @Output() close:EventEmitter<boolean>= new EventEmitter;
  //Cerrar modal
  closeModal(){
    this.close.emit(false);
  }

  constructor(private firestoreService: FirebaseService) { }

  ngOnInit(): void {
    console.log("data",this.detailProduct);
    console.log("hola",document.getElementById("prices"));
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
  buy(id, name, price, imgUrl) {
    console.log(id, name, price, imgUrl);
    const productsLocal = JSON.parse(localStorage.getItem("products"));
    if(productsLocal){
      let arrProducts = productsLocal.products;
      let flag=true;
      for(let e=0;e<arrProducts.length;e++){
        if(arrProducts[e].id==id){
          arrProducts[e].qty+=this.quantity;
          flag=false;
          break;
        }
      }
      if(flag){
        arrProducts.push({id, name, price, imgUrl,qty:this.quantity});
        productsLocal.products=arrProducts;
      }    
      localStorage.setItem("products",JSON.stringify(productsLocal));
    }else{
      let product=new Array();
      product[0]={id, name, price, imgUrl,qty:this.quantity};
      const products= {products:product};
      console.log(products);
      localStorage.setItem("products",JSON.stringify(products));
    }
    
  }
}