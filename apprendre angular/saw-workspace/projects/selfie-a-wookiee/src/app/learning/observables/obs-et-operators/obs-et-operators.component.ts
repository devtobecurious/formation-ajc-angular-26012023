import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscription, filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-obs-et-operators',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obs-et-operators.component.html',
  styleUrls: ['./obs-et-operators.component.css']
})
export class ObsEtOperatorsComponent implements OnInit, OnDestroy {
  private containerSub = new Subscription();


  ngOnDestroy(): void {
    this.containerSub.unsubscribe();
  }

  ngOnInit(): void {
    let obs$ = new Observable<number>(subscriber => {
      subscriber.next(1); // le code est synchrone et exécute le callback parent
      subscriber.next(2);
      subscriber.complete();
    });

    obs$ = obs$.pipe(
      filter(item => item % 2 == 0),
      tap(item => console.info('avant calcul', item)),
      map(item => { return item * 10; }),
      tap(item => console.info('apres calcul 1', item)),
      map(item => { return item * 100; }),
      tap(item => console.info('apres calcul 2', item)),
    );

    const sub = obs$.subscribe(item => console.info('ObsEtOperatorsComponent', item));
    this.containerSub.add(sub);
  }

}
