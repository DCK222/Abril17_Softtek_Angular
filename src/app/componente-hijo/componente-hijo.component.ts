import { Component, Input } from '@angular/core';
import { ComponentePadreComponent } from '../componente-padre/componente-padre.component';

@Component({
  selector: 'app-componente-hijo',
  standalone: true,
  imports: [ComponentePadreComponent],
  templateUrl: './componente-hijo.component.html',
  styleUrl: './componente-hijo.component.css'
})
export class ComponenteHijoComponent {
@Input() mensajeP : string = " "; 
}
