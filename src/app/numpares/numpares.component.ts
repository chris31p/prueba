import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-numpares',
  templateUrl: './numpares.component.html',
  styleUrls: ['./numpares.component.css']
})
export class NumparesComponent {

  n1 = new FormControl();
 
  i: number= 0;
  max: number= 20;
  temp: number = 0;
  resultado: string = '';

  calcularPares() {
       const num = parseInt(this.n1.value);
       for(this.i = 0; this.i <= this.max -1; this.i+=2){
        if (num % 2 == 0){
          this.temp = num + this.i;
          this.resultado = this.resultado + " " + this.temp;
        } else {
          this.resultado = "Ingrese únicamente números pares"
        }
       }   
}
}
