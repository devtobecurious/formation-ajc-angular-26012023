import { EventEmitter, Component, Input, OnInit, OnChanges, SimpleChanges, Output } from '@angular/core';

type AvecTitre = {
  titre: string
};

@Component({
  selector: 'app-mon-premier',
  templateUrl: './mon-premier.component.html',
  styleUrls: ['./mon-premier.component.css']
})
export class MonPremierComponent implements OnInit, OnChanges {
  @Input() titre = '';
  @Output() calculEstFini = new EventEmitter<number>();

  // items: { titre: string }[] = [];
  items: AvecTitre[] = [];

  constructor() {
    this.items.push(
      { titre: 'Titre 1' },
      { titre: 'Titre 2' },
      { titre: 'Titre 3' },
    );
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.info('C\'est parti !');
    this.calculEstFini.emit(18);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    console.log('Des changements ?', changes);

  }

  clickToEnd(): void {
    this.calculEstFini.emit(18);
  }
}
