import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListSelfiesComponent } from './pages/page-list-selfies/page-list-selfies.component';

const routes: Routes = [
  {
    path: 'selfies',
    component: PageListSelfiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelfiesRoutingModule { }
