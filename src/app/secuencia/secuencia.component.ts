import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-secuencia',
  templateUrl: './secuencia.component.html',
  styleUrls: ['./secuencia.component.css']
})
export class SecuenciaComponent {

  n1 = new FormControl();
  
  num: number= 0;
  num2: number= 1;
  i: number = 0;
  num3: number = 0;  
  resultado: string = '';

 
  calcularSerie() {

    const num1 = parseInt(this.n1.value);

    for (this.i = 0; this.i < num1 - 1; this.i++) {
      if(this.i == 0){
        this.resultado = this.resultado + " " + this.num + " " + this.num2;
      }
      this.num3 = this.num;
      this.num = this.num2;
      this.num2 = this.num3 + this.num2;
      this.resultado = this.resultado + " " + this.num2;
    }
  }
}



