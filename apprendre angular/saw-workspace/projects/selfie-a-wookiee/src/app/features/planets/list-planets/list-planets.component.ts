import { Component, OnInit } from '@angular/core';
import { ListPlanetsService } from '../services/list-planets.service';
import { Observable } from 'rxjs';
import { PlanetsResult } from '../models';

@Component({
  selector: 'app-list-planets',
  templateUrl: './list-planets.component.html',
  styleUrls: ['./list-planets.component.css']
})
export class ListPlanetsComponent implements OnInit {
  public planetsResult$: Observable<PlanetsResult>;
  // private service: ListPlanetsService;
  // constructor(serviceLocal: ListPlanetsService) {
  //   this.service = serviceLocal;
  // }

  constructor(private readonly service: ListPlanetsService) {
    this.planetsResult$ = this.service.getAll(); // je ne fais rien ! c'est container pour exécuter par la suite
    // idée qui y ressemble : linq
  }

  ngOnInit(): void {
    //this.planetList$.subscribe();
  }

}
