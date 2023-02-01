import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSelfiesComponent } from './list-selfies/list-selfies.component';
import { PageListSelfiesComponent } from './pages/page-list-selfies/page-list-selfies.component';
import { EditSelfiesComponent } from './edit-selfies/edit-selfies.component';
import { SelfiesRoutingModule } from './selfies-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListSelfiesComponent,
    PageListSelfiesComponent,
    EditSelfiesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SelfiesRoutingModule
  ],
  exports: [
    PageListSelfiesComponent,
    EditSelfiesComponent
  ]
})
export class SelfiesModule { }
