import { Component } from '@angular/core';
import { SeleccionarHijoComponent } from "../seleccionar-hijo/seleccionar-hijo.component";

@Component({
    selector: 'app-opciones-seleccionar-padre',
    standalone: true,
    templateUrl: './opciones-seleccionar-padre.component.html',
    styleUrl: './opciones-seleccionar-padre.component.css',
    imports: [SeleccionarHijoComponent]
})
export class OpcionesSeleccionarPadreComponent {
  opcionesLenguajes:string[] = ["Java" , "JavaScrip", "Python", "C++"];
  opcionesElegidas:string[] = [];
 
  anadirSeleccionar(opciones : string){
    this.opcionesElegidas.push(opciones)
  }
}
