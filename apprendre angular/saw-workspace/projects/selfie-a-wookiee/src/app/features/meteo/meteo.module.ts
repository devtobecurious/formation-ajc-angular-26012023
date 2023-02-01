import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffichageMeteoComponent } from './affichage-meteo/affichage-meteo.component';



@NgModule({
  declarations: [
    AffichageMeteoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AffichageMeteoComponent
  ]
})
export class MeteoModule { }
