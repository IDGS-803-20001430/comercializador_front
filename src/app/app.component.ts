import { Component } from '@angular/core';
import { compartidoModule } from './componentes/compartido/compartido.module';
import { InicioModule } from './componentes/inicio/inicio.module';
import { ProductosModule } from './componentes/productos/productos.module';
import { ContactoModule } from './componentes/contacto/contacto.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [compartidoModule, InicioModule, ProductosModule, ContactoModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'comercializadora';
}
