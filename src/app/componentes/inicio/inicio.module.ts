import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    InicioComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
  ],exports:[
    InicioComponent,
  ]
})
export class InicioModule { }
