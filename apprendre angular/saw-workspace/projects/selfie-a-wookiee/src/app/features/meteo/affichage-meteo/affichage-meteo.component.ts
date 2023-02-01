import { Component } from '@angular/core';
import { MeteoService } from '../services/meteo.service';
import { Observable } from 'rxjs';
import { MeteoInfo, MeteoResult } from '../models';

@Component({
  selector: 'app-affichage-meteo',
  templateUrl: './affichage-meteo.component.html',
  styleUrls: ['./affichage-meteo.component.css']
})
export class AffichageMeteoComponent {
  public meteo$ !: Observable<MeteoInfo>;

  constructor(private readonly service: MeteoService) {
    this.meteo$ = this.service.getOneWithInterval();
  }
}
