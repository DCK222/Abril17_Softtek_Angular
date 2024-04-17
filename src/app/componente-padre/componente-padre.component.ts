import { Component } from '@angular/core';
import { ComponenteHijoComponent } from "../componente-hijo/componente-hijo.component";

@Component({
    selector: 'app-componente-padre',
    standalone: true,
    templateUrl: './componente-padre.component.html',
    styleUrl: './componente-padre.component.css',
    imports: [ComponenteHijoComponent]
})
export class ComponentePadreComponent {
mensajePadre :string =" Hola desde el padre";
}
