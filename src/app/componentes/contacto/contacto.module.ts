import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FloatLabelModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    PanelModule,
    RadioButtonModule
  ], exports:[
    ContactoComponent
  ]
})
export class ContactoModule { }
