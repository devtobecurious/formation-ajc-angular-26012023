import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Selfie } from '../models';

@Component({
  selector: 'app-edit-selfies',
  templateUrl: './edit-selfies.component.html',
  styleUrls: ['./edit-selfies.component.css']
})
export class EditSelfiesComponent {
  @Output('leNomDeLeventCoteTemplate') annulerEdition = new EventEmitter<boolean>();
  @Input() selfie !: Selfie;

  clickPourAnnuler(): void {
    this.annulerEdition.emit(true);
  }
}
