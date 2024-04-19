import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';
interface Persona {
  nombre: string;
  edad: number;
}
@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  listaPersonas: Persona[] = [];

  validarPersona(persona: Persona) {
    if (!this.listaPersonas.some(p => p.nombre === persona.nombre && p.edad === persona.edad)) {
      this.listaPersonas.push(persona);
    } else {
      alert(`La persona ${persona.nombre} ya está en la lista`);
    }
  }

  borrarUltimaPersona() {
    this.listaPersonas.pop();
  }

  filtrarMayorDeEdad() {
    this.listaPersonas = this.listaPersonas.filter(p => p.edad > 18);
  }

  calcularDobleEdad() {
    this.listaPersonas = this.listaPersonas.map(p => ({
      nombre: p.nombre,
      edad: p.edad * 2
    }));
  }
}
