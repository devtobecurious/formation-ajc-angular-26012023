import { Component, EventEmitter, Output } from '@angular/core';
import { Selfie, Wookie } from '../models';

@Component({
  selector: 'app-list-selfies',
  templateUrl: './list-selfies.component.html',
  styleUrls: ['./list-selfies.component.css']
})
export class ListSelfiesComponent {
  @Output() editerSelfie = new EventEmitter<Selfie>();

  selfies: Selfie[] = [];
  wookie: Wookie = {
    prenom: 'Chewie'
  };

  constructor() {
    this.selfies.push(
      {
        wookie: this.wookie,
        dateCreation: new Date(),
        description: 'Ici bas',
        titre: 'Bienvenue à Tatooine'
      },
      {
        wookie: this.wookie,
        dateCreation: new Date(),
        description: 'Regarde, un rankor',
        titre: 'Oh non voila Jabba'
      }
    );
  }

  clickToEdit(selfie: Selfie): void {
    this.editerSelfie.emit(selfie);
  }

  clickToAdd(): void {
    this.selfies.push({
      wookie: this.wookie,
      dateCreation: new Date(),
      description: 'Ici bas',
      titre: 'Bienvenue à Tatooine'
    });
  }

  clickToDelete(nbElements: number): void {
    this.selfies.pop();
  }
}
