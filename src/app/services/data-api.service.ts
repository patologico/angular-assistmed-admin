import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, forkJoin, Observable, throwError, EMPTY } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { DataServiceInterface } from '../models/service-interface';
import { DataProductInterface } from '../models/product-interface';

// for Firestore
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

// interface for ID from firebase Products
export interface ProductsId extends DataProductInterface { id: string; }

@Injectable({
  providedIn: 'root'
})

export class DataApiService {

  private productsCollection: AngularFirestoreCollection<DataProductInterface>;
  products: Observable<DataProductInterface[]>;

  constructor(private httpClient: HttpClient, private readonly afs: AngularFirestore) {
    this.productsCollection = afs.collection<DataProductInterface>('products');
    this.products = this.productsCollection.snapshotChanges().pipe(
      map(actions => actions.map( a => {
        const data = a.payload.doc.data() as DataProductInterface;
        const id = a.payload.doc.id;
        return { id, ...data};
      }))
    );
  }

  getProductsAll() {
    return this.products;
  }

  // getProductsAll(datos: object): Observable<any[]> {
  //   return this.httpClient.post<any[]>(this.urlApiAdmin + '/get-booking/all', datos)
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     );
  // }

  // begins Product Services

  // getProductsAll(url) {
  //   return this.httpClient.get(url);
  // }

  createProduct(url) {
    return this.httpClient.get(url);
  }

  readProduct(url) {
    return this.httpClient.get(url);
  }

  updateProduct(url) {
    return this.httpClient.get(url);
  }

  deleteProduct(url) {
    return this.httpClient.get(url);
  }

  // end Product Services

  getServicesAll(url) {
    return this.httpClient.get(url);
  }

  getScopeAll(url) {
    return this.httpClient.get(url);
  }

}
