import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private urlBase:string = 'https://fakestoreapi.com/products';

  constructor(private _http:HttpClient) {

  }

  getProducts():Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.urlBase)
  }

  getProductById(id:number):Observable<IProduct>{
    return this._http.get<IProduct>(`${this.urlBase}/${id}`)
  }
}
