import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, interval, map, switchMap, tap } from 'rxjs';
import { MeteoInfo, MeteoResult } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private readonly httpClient: HttpClient) { }

  getOneWithInterval(): Observable<MeteoInfo> {
    const getMeteo$ = this.getOne();

    // Niveau avancé
    return interval(20000).pipe(
      switchMap(tick => getMeteo$), // le switch map n'attend pas la fin d'exécution du dernier getMeteo$, il va relancer une nouvelle exécution du getMeteo, sans attendre
      // on aura pu attendre la fin d'exécution du dernier getMeteo$, pour en relancer un autre, avec un concatMap
      // tap(item => console.info('meteo ?', item))
    );
  }

  getOne(): Observable<MeteoInfo> {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=47.21270751953125&longitude=-1.5559659004211426&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m';
    return this.httpClient.get<MeteoResult>(url).pipe(
      map(result => {
        const meteoInfo = new MeteoInfo(result.current_weather.temperature, result.current_weather.weathercode);
        return meteoInfo;
      })
    );
  }
}
