import { IProduct } from 'src/app/models/product.model';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

//array que recibira la lista de productos desed el servicio
  productList: any[] = [];

  //Inyectamos el servicio en el componente
  constructor(private _apiService: ApiService, private _router:Router){

  }

  //Al iniciar el componente, traera desde el servicio, la lista de productos y se le asignara al array productList
  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data:IProduct[]) => {
      this.productList = data;
    })
  }

  //Creamos un metodo para navegar al componente products-detail tomando el id que traemos del HTML
  navigate(id: number): void {
    this._router.navigate(['/products', id])
  }


}
