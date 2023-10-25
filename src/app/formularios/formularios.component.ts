import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent {

  nombre = new FormControl('');
  correo = new FormControl ('');

  name: string = "";
  email: string="";


  guardar(){
    this.name = this.nombre.value+"";
    this.email = this.correo.value+"";
  }
}


