import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private urlBase:string = 'https://fakestoreapi.com/products';

  constructor(private _http:HttpClient) {

  }

  getProducts():Observable<any>{
    return this._http.get<any>(this.urlBase)
  }

  getProductById(id:number):Observable<any>{
    return this._http.get<any>(`${this.urlBase}/${id}`)
  }
}
