import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, forkJoin, Observable, throwError, EMPTY } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { DataServiceInterface } from '../models/service-interface';
import { DataProductInterface } from '../models/product-interface';


@Injectable({
  providedIn: 'root'
})

export class DataApiService {
  constructor(private httpClient: HttpClient) { }

  // getProductsAll(datos: object): Observable<any[]> {
  //   return this.httpClient.post<any[]>(this.urlApiAdmin + '/get-booking/all', datos)
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     );
  // }

  getProductsAll(url) {
    return this.httpClient.get(url);
  }

  getServicesAll(url) {
    return this.httpClient.get(url);
  }

}
