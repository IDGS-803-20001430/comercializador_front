import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-barra',
  standalone: false,
  templateUrl: './barra.component.html',
  styleUrl: './barra.component.css'
})
export class BarraComponent {
  sidebarVisible: boolean = false;
  public items!: any [] | undefined;
  constructor(private router: Router){}

  ngOnInit(): void {
    this.items = [
      {
          items: [
              {
                  label: 'Inicio',
                  icon: 'pi pi-home',
                  route: '/'
              },
              {
                  label: 'Productos',
                  icon: 'pi pi-barcode',
                  route: '/productos'
              },
              {
                  label: 'Contacto',
                  icon: 'pi pi-info-circle',
                  route: '/contacto'
              },
              
          ]
      }
  ];
  }
}
