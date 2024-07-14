import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  //Creamos una variable para que nos muestre un mensaje de carga miestras se muestra la información
  loading:boolean = true;
//Creamos una variable que recibira al producto que se traiga desde el servicio de acuerdo al ID seleccionado
  public product?:IProduct;

//Inyectamos el activedRoute y el servicio
constructor(private _route: ActivatedRoute, private _apiService:ApiService){ }

//Traemos el parametro del ID que fue seleccionado desde el componente productos y se lo asignamos al metodo getProducById del servicio
ngOnInit(): void {
  this._route.params.subscribe(params => {
    this._apiService.getProductById(params['id']).subscribe((data: IProduct) => {
      this.product = data;
      this.loading = false;
    })
  })
}

}
