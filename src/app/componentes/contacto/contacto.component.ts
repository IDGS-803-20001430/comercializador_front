import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  nombre: string | undefined;
  apellido: string | undefined;
  email: string | undefined;
  asunto: string | undefined;
  mensaje: string | undefined;
}
