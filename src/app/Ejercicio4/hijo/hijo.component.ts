import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Persona {
  nombre: string;
  edad: number;
}
@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  nombre: string = '';
  edad: number = 0;

  @Output()
  emisor = new EventEmitter<Persona>();

  enviarPersona() {
    let persona: Persona = {
      nombre: this.nombre,
      edad: this.edad
    };
    this.emisor.emit(persona);
  }
}
