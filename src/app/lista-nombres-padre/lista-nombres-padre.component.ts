import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-nombres-padre',
  standalone: true,
  imports: [],
  templateUrl: './lista-nombres-padre.component.html',
  styleUrl: './lista-nombres-padre.component.css'
})
export class ListaNombresPadreComponent {
nombresIntroducidos:string []=[];

}
