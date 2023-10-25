import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
 
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  n1 = new FormControl();
  n2 = new FormControl();
  op = new FormControl('');
  resultado = '';
 
  calcular() {
    const num1 = parseFloat(this.n1.value);
    const num2 = parseFloat(this.n2.value);
 
    if (this.op.value === 'sum') {
      this.resultado = (num1 + num2).toString();
    } else if (this.op.value === 'res') {
      this.resultado = (num1 - num2).toString();
    } else if (this.op.value === 'mul') {
      this.resultado = (num1 * num2).toString();
    } else if (this.op.value === 'div') {
      if (num2 === 0) {
        this.resultado = 'ERROR: No se puede dividir para cero';
      } else {
        this.resultado = (num1 / num2).toString();
      }
    }
  }
}

