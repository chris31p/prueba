import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent {

  n1 = new FormControl();
  n2 = new FormControl();
  n3 = new FormControl();
  op = new FormControl('');
  resultado = '';
  respuesta = '';

  calcularPromedio() {
    const num1 = parseFloat(this.n1.value);
    const num2 = parseFloat(this.n2.value);
    const num3 = parseFloat(this.n2.value);

      //this.resultado = Math.round(((num1 + num2 + num3) / 3)).toString();
      this.resultado = ((num1 + num2 + num3) / 3).toString();
      //this.resultado = (num1 + num2 + num3) / 3;

      if (parseFloat(this.resultado) >= 7) {
        this.respuesta = "APROBADO"
      }
      if (parseFloat(this.resultado) < 7) {
        this.respuesta = "REPROBADO";
      }

    }
  }

