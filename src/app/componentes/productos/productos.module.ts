import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    AutoCompleteModule,
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    RadioButtonModule,
  ],exports:[
    ProductosComponent
  ]
})
export class ProductosModule { }
