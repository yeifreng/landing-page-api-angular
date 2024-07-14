import { IProductos } from 'src/app/models/product.model';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

//array que recibira la lista de productos desed el servicio
  productList: any[] = [];

  //Inyectamos el servicio en el componente
  constructor(private _apiService: ApiService){

  }

  //Al iniciar el componente, traera desde el servicio, la lista de productos y se le asignara al array productList
  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data:IProductos[]) => {
      console.log(data);
      this.productList = data;
    })
  }



}
