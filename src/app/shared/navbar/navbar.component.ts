import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  //Creamos una variable que recibira el valor que traiga la etiqueta cuando le demos click
  menuOpcion: string = '';

  //Metodo para asignarle el valor a la variable menuOpcion
  onOpcion(menuOpcion: string){
    this.menuOpcion = menuOpcion
  }

}
