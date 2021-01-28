import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-content-payments',
  templateUrl: './content-payments.component.html',
  styleUrls: ['./content-payments.component.scss']
})
export class ContentPaymentsComponent implements OnInit {
  total:number=0;
  orderDetail:any;
  customerName:string;
  deleteProduct(_index,detail){
    this.orderDetail.splice(_index, 1);
    this.calculateTotal();
  }
  calculateTotal(){
    this.total=this.orderDetail.reduce((acum,ele)=>acum=acum+ele.subtotal,0)
  }
  sendCustomer(){
    this.data.changeCustomerName(this.customerName);
  }

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.currentOrderDetail.subscribe(order => this.orderDetail=order);
    this.calculateTotal();
  }

}
