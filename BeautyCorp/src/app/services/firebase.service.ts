import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }
    //Obtiene todos los productos
    // public getProducts() {
    //   return this.firestore.collection('esika').snapshotChanges();
    // }
    //traer data por tipo de producto
    public getProducts(typeProduct){
    return this.firestore.collection('esika', ref => ref.where('type', '==', typeProduct)).snapshotChanges();      
    }
    //Enviar data a BD
    public sendProducts(customerName,status,detailOrder,total,address){
      return this.firestore.collection('BC-Orders').add({
        customerName,
        date:new Date(),
        status,
        detailOrder,
        total,
        address
      });
    }
    //traer data en orden 
    public getProductsFilter() {
      return this.firestore.collection('esika', ref => ref.orderBy('discount','desc').limit(4)).snapshotChanges();
    }

}
