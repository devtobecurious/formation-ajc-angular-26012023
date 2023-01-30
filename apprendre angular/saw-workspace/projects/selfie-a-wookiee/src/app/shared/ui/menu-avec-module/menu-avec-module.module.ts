import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPrincipaleVUnComponent } from './menu-principale-v-un/menu-principale-v-un.component';



@NgModule({
  declarations: [
    MenuPrincipaleVUnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuPrincipaleVUnComponent
  ]
})
export class MenuAvecModuleModule { }
