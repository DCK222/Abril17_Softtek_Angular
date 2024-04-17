import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-seleccionar-hijo',
  standalone: true,
  imports: [],
  templateUrl: './seleccionar-hijo.component.html',
  styleUrl: './seleccionar-hijo.component.css'
})
export class SeleccionarHijoComponent {

  @Input() 
  opciones: string[] = [];  
  @Output() 
  emiter = new EventEmitter<string>(); 

anadirSeleccionar(opciones: string) {
  this.emiter.emit(opciones);  // Emitir el valor seleccionado al padre
}
 
}
