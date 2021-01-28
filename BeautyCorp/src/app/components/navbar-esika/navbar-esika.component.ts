import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-navbar-esika',
  templateUrl: './navbar-esika.component.html',
  styleUrls: ['./navbar-esika.component.scss']
})
export class NavbarEsikaComponent implements OnInit {
  isScrollActive: boolean = false;
  orderDetail:any;
  orderDetailResult:any;
  // activar scroll al bajar pantalla
  scroll(event) {
    if (window.scrollY > 50) {
      this.isScrollActive = true;
    } else {
      this.isScrollActive = false;
    }
  }
  public products: any;

  //------------------------------delete product

  deleteProduct(_index,detail){
    this.orderDetail.splice(_index, 1);
    this.orderDetailResult.push({status:false,index:_index, ...detail});
    this.data.changeOrderDetail(this.orderDetailResult);
    
  
  }

  //............................................
  constructor(private data:DataService) { }
  ngOnInit(): void {
    this.data.currentOrderDetail.subscribe(order => this.orderDetail=order);
  }
  cart() {
    //alert("sora");
    const productsLocal = JSON.parse(localStorage.getItem("products"));
    if (productsLocal) { this.products = productsLocal.products; }

    if (document.querySelector("#shopping-cart.hidden")) {
      document.querySelector("#shopping-cart").classList.remove("hidden");
    } else {
      document.querySelector("#shopping-cart").classList.add("hidden");
    }
  }
  exit(id) {
    // document.querySelector(".item-cart").classList.add("hidden");
    const productsLocal = JSON.parse(localStorage.getItem("products"));
    let arrProducts = productsLocal.products;
    console.log("id",id,arrProducts);
    for (let e = 0; e < arrProducts.length; e++) {
      if (arrProducts[e].id == id) {
        console.log("hola entre");
        arrProducts.splice(e, 1);
        break;
      }
    }
    productsLocal.products=arrProducts;
    localStorage.setItem("products",JSON.stringify(productsLocal));
    //this.cart();

  }
}
