import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-payments-next',
  templateUrl: './payments-next.component.html',
  styleUrls: ['./payments-next.component.scss']
})
export class PaymentsNextComponent implements OnInit {
  orderDetail:any;
  total:number=0;
  deleteProduct(_index,detail){
    this.orderDetail.splice(_index, 1);
    this.calculateTotal()
  }
  calculateTotal(){
    this.total=this.orderDetail.reduce((acum,ele)=>acum=acum+ele.subtotal,0)
  }

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.currentOrderDetail.subscribe(order => this.orderDetail=order);
    this.calculateTotal()
  }

}
