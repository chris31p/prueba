import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-multiplicacion',
  templateUrl: './multiplicacion.component.html',
  styleUrls: ['./multiplicacion.component.css']
})
export class MultiplicacionComponent {

  n1 = new FormControl();
  
  i: number= 0;
  max: number= 10;
  temp: number = 0;
  resultado: string = '';

  generarTabla() {
       const num = parseInt(this.n1.value);
       for(this.i = 1; this.i <= this.max; this.i++){
        this.temp = num * this.i;
        this.resultado = this.resultado + " " + this.temp;
       }   
}
}
