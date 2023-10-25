import { Component } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {

  nombre: string = '';
  edad: string = '';

  mostrar(n:string, e:string){
    this.nombre = n;
    this.edad = (e);
  }
}
