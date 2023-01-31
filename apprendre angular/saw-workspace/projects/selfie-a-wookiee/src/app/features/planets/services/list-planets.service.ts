import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlanetItem, PlanetsResult } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // soit ici, soit en providers => pas les deux !
}) // cette technique facilite le treeshaking
export class ListPlanetsService {

  constructor(private readonly httpClient: HttpClient) { }

  getAll(): Observable<PlanetsResult> {
    // ici on ne fait aucune requete http
    // ca renvoie une observable, qui permettra la requete
    // le return est essentiel !!!
    return this.httpClient.get<PlanetsResult>('https://swapi.dev/api/planets');
  }

  addOne(item: PlanetItem) {
    return this.httpClient.post<PlanetsResult>('https://swapi.dev/api/planets', item);
  }
}
