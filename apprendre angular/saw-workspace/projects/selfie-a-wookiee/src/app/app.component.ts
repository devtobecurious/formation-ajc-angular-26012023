import { Component } from '@angular/core';
import { Selfie } from './features/selfies/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titreComponentAAfficher = 'selfie a wookiee';
  titrePourEnfant = 'Titre pour enfant';
  selfieAEditer: Selfie | undefined | null;

  changeTitle(value: string): void {
    let valueFromPrompt = prompt('Donne moi un titre');

    if(valueFromPrompt) { // si je rentre dans le if, je suis sur que pas null
      this.titrePourEnfant = valueFromPrompt;
    }
  }

  afficherCalcul(resultat: number): void {
    console.info(resultat);
  }

  afficherEditPanel(selfie: Selfie): void {
    this.selfieAEditer = selfie;
  }

  cancelEdit(): void {
    this.selfieAEditer = null;
  }
}
