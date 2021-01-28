import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

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
  subtotal:number;
  quantity: number=1;
  promotionPrice:number;
  itemProduct:any=[];


  //Cerrar modal
  closeModal(){
    this.close.emit(false);
  }
  sendProduct(){
    this.itemProduct.push({status:true,subtotal:this.subtotal,quantity:this.quantity,
      promotionPrice:this.promotionPrice, ...this.detailProduct});
      this.data.changeOrderDetail(this.itemProduct);
      this.close.emit(false);
  }
  calcularSub(){
    this.subtotal=this.quantity*this.promotionPrice;
  }

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.promotionPrice= this.detailProduct.price*(100-this.detailProduct.discount)/100;
    this.calcularSub();
  }

  
  add() {
      this.quantity++;
      this.calcularSub();
  }
  reduce(){
    this.quantity--;
    this.calcularSub();
  }
  // minus() {
  //   if (this.i != 1) {
  //     this.i--;
  //     this.quantity = this.i;
  //     this.price = this.quantity * this.priceS;
  //   }
  //   this.calcularSub();
  // }
  // buy(id, name, price, imgUrl) {
  //   console.log(id, name, price, imgUrl);
  //   const productsLocal = JSON.parse(localStorage.getItem("products"));
  //   if(productsLocal){
  //     let arrProducts = productsLocal.products;
  //     let flag=true;
  //     for(let e=0;e<arrProducts.length;e++){
  //       if(arrProducts[e].id==id){
  //         arrProducts[e].qty+=this.quantity;
  //         flag=false;
  //         break;
  //       }
  //     }
  //     if(flag){
  //       arrProducts.push({id, name, price, imgUrl,qty:this.quantity});
  //       productsLocal.products=arrProducts;
  //     }    
  //     localStorage.setItem("products",JSON.stringify(productsLocal));
  //   }else{
  //     let product=new Array();
  //     product[0]={id, name, price, imgUrl,qty:this.quantity};
  //     const products= {products:product};
  //     console.log(products);
  //     localStorage.setItem("products",JSON.stringify(products));
  //   }
    
  // }
}