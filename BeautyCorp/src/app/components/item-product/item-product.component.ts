import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss']
})
export class ItemProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  quantity:number=1;
i=1
  plus(){
    if(this.i !=5){
      this.i++;
      this.quantity=this.i;
    }
  }
  minus(){
    if(this.i !=1){
      this.i--;
      this.quantity=this.i;
    }
  }

}
