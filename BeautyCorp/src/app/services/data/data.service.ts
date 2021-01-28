import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // servicio que sincroniza el cambio entre dos o mas componentes data por defecto 
  private orderDetailSource = new BehaviorSubject<any>([]);
  currentOrderDetail = this.orderDetailSource.asObservable();

  constructor() { }

  // metodo que actualiza la data sincronizada
  changeOrderDetail(orderDetail: any) {

      if(orderDetail.status===false){
        this.orderDetailSource['_value'].forEach((ele,i) => {
          if(ele.id===orderDetail.id){
            this.orderDetailSource['_value'].splice(i-1,1);
          } 
        });
      }
      else{
        this.orderDetailSource.next(this.orderDetailSource['_value'].concat(orderDetail));
      }
  }
}
