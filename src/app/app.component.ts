import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoPadreComponent } from './producto-padre/producto-padre.component';
import { CestaHijoComponent } from './cesta-padre/cesta-hijo.component';
import { ComponentePadreComponent } from "./componente-padre/componente-padre.component";
import { OpcionesSeleccionarPadreComponent } from "./opciones-seleccionar-padre/opciones-seleccionar-padre.component";
import { SeleccionarHijoComponent } from "./seleccionar-hijo/seleccionar-hijo.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CestaHijoComponent, OpcionesSeleccionarPadreComponent, SeleccionarHijoComponent]
})
export class AppComponent {
  title = 'Abril16_Angular_Softek';
}
