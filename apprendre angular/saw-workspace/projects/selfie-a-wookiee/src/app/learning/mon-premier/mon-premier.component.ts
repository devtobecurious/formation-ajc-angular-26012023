import { Component } from '@angular/core';

type AvecTitre = {
  titre: string
};

@Component({
  selector: 'app-mon-premier',
  templateUrl: './mon-premier.component.html',
  styleUrls: ['./mon-premier.component.css']
})
export class MonPremierComponent {
  // items: { titre: string }[] = [];
  items: AvecTitre[] = [];

  constructor() {
    this.items.push(
      { titre: 'Titre 1' },
      { titre: 'Titre 2' },
      { titre: 'Titre 3' },
    );
  }
}
