import { Component, EventEmitter, Output } from '@angular/core';
import { Selfie } from '../../models';

@Component({
  selector: 'app-page-list-selfies',
  templateUrl: './page-list-selfies.component.html',
  styleUrls: ['./page-list-selfies.component.css']
})
export class PageListSelfiesComponent {
  @Output() editionSelfieFromPage = new EventEmitter<Selfie>();

  recuperEdition(selfie: Selfie): void {
    this.editionSelfieFromPage.emit(selfie);
  }
}
