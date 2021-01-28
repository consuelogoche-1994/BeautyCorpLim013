import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment-done',
  templateUrl: './payment-done.component.html',
  styleUrls: ['./payment-done.component.scss']
})
export class PaymentDoneComponent implements OnInit {
  customerName:string;
  messege(){
    Swal.fire(
      `${this.customerName},Gracias por comprar en ésika`,
      '¡ 💄 💄 💄 💄 !',
      'success'
    )
  }

  constructor(private data : DataService) { }

  ngOnInit(): void {
    this.data.currentCustomerName.subscribe(name => this.customerName=name);
  }

}
