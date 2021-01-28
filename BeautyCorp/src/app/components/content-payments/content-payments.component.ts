import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-content-payments',
  templateUrl: './content-payments.component.html',
  styleUrls: ['./content-payments.component.scss']
})
export class ContentPaymentsComponent implements OnInit {

  orderDetail:any;
  deleteProduct(_index,detail){
    this.orderDetail.splice(_index, 1);
  }

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.currentOrderDetail.subscribe(order => this.orderDetail=order);
  }

}
