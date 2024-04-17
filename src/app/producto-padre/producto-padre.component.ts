import { Component, EventEmitter, Output } from '@angular/core';
import { CestaHijoComponent } from '../cesta-padre/cesta-hijo.component';

@Component({
    selector: 'app-producto-padre',
    standalone: true,
    templateUrl: './producto-padre.component.html',
    styleUrl: './producto-padre.component.css',
    imports: [CestaHijoComponent]
})
export class ProductoPadreComponent {
@Output()
emiter: EventEmitter<string> = new EventEmitter();

productos:string[] =  ["Leche", "Pan","Café", "Azucar", "Huevos", "Platanos"];

anadirProductosCesta(producto : string){
  this.emiter.emit(producto)
}
}
