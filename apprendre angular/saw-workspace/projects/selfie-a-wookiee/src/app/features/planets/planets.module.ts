import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPlanetsComponent } from './list-planets/list-planets.component';
import { PageListPlanetsComponent } from './page-list-planets/page-list-planets.component';



@NgModule({
  declarations: [
    ListPlanetsComponent,
    PageListPlanetsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageListPlanetsComponent
  ]
})
export class PlanetsModule { }
