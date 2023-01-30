import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSelfiesComponent } from './list-selfies/list-selfies.component';
import { PageListSelfiesComponent } from './pages/page-list-selfies/page-list-selfies.component';



@NgModule({
  declarations: [
    ListSelfiesComponent,
    PageListSelfiesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageListSelfiesComponent
  ]
})
export class SelfiesModule { }
