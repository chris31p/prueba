import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosComponent } from './datos/datos.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { SecuenciaComponent } from './secuencia/secuencia.component';
import { MultiplicacionComponent } from './multiplicacion/multiplicacion.component';
import { NumparesComponent } from './numpares/numpares.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosComponent,
    FormulariosComponent,
    CalculadoraComponent,
    CalificacionesComponent,
    SecuenciaComponent,
    MultiplicacionComponent,
    NumparesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
