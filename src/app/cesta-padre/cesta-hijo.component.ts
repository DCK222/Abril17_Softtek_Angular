import { Component } from '@angular/core';
import { ProductoPadreComponent } from '../producto-padre/producto-padre.component';

@Component({
  selector: 'app-cesta-hijo',
  standalone: true,
  imports: [ProductoPadreComponent],
  templateUrl: './cesta-hijo.component.html',
  styleUrl: './cesta-hijo.component.css'
})
export class CestaHijoComponent {
carrito: string[];

constructor(){
  this.carrito=[];

}
anadirProducto(producto: string){
  this.carrito.push(producto);
}
}
