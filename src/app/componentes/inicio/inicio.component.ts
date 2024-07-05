import { Component, OnInit } from '@angular/core';
import { ComercializadoraService } from '../../servicios/comercializadora.service';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  public productoslst!: any[];
  constructor( private _comercializadoraService: ComercializadoraService){
    this.productoslst = [];
  }

  ngOnInit(): void {
    this._comercializadoraService.getListProducts().subscribe({
      next: (data) =>{
        this.productoslst = data;
        console.log(data);
      },error: (e) => {
        console.log(e);
      }
    })
  }



}
