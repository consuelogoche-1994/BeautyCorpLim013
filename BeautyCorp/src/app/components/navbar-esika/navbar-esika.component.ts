import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-esika',
  templateUrl: './navbar-esika.component.html',
  styleUrls: ['./navbar-esika.component.scss']
})
export class NavbarEsikaComponent implements OnInit {
  isScrollActive: boolean = false;
  // activar scroll al bajar pantalla
  scroll(event) {
    if (window.scrollY > 50) {
      this.isScrollActive = true;
    } else {
      this.isScrollActive = false;
    }
  }
  public products: any;
  constructor() { }
  ngOnInit(): void {

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
