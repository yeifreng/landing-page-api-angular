import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductos } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private urlBase:string = 'https://fakestoreapi.com/products';

  constructor(private _http:HttpClient) {

  }

  getProducts():Observable<IProductos[]>{
    return this._http.get<IProductos[]>(this.urlBase)
  }

  getProductById(id:number):Observable<IProductos>{
    return this._http.get<IProductos>(`${this.urlBase}/${id}`)
  }
}
