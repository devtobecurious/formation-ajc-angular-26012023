import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeteoModule } from 'projects/selfie-a-wookiee/src/app/features/meteo/meteo.module';

@Component({
  selector: 'app-menu-principal',
  standalone: true,
  imports: [
    CommonModule,
    MeteoModule
  ],
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent {

}
