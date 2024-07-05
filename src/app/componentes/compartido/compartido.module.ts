import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*componentes importados*/
import { BarraComponent } from './barra/barra.component';
/*importaciones de primeng*/
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MenuModule } from 'primeng/menu';
/*importacion de los routes*/
import { RouterLink, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    BarraComponent
  ],
  imports: [
    CommonModule,
    /*primeng*/
    SidebarModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
    MenuModule,
    /*route*/
    RouterLink,
    RouterOutlet
  ],exports:[
    BarraComponent
  ]
})
export class compartidoModule { }
