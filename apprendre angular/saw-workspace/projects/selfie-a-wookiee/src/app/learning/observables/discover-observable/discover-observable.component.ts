import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscription, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-discover-observable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discover-observable.component.html',
  styleUrls: ['./discover-observable.component.css']
})
export class DiscoverObservableComponent implements OnInit, OnDestroy {
  private subscriptionParent = new Subscription();

  ngOnDestroy(): void {
    this.subscriptionParent.unsubscribe(); // foreach pour chaque subscription enfante
  }

  ngOnInit(): void {
    console.info('----------------------------------');

    console.info('Code synchrone');
    console.info('Code synchrone 1');

    // setTimeout(() => {
    //   console.info('apres timeout');
    // }, 0);

    const callbackPromise = (item: any) => console.info('PROMESSE', item);

    // Code eager => dès que j'ai instancié ma promesse, elle s'exécute
    const promise = new Promise((resolve, reject) => {
      console.info('0. PROMESSE START');

      setTimeout(() => {
        const result = 180/18;
        resolve(result);
      }, 1000);

      console.info('0. PROMESSE END');
    }).then(callbackPromise);

    // Code Lazy => si aucun subscribe => rien ne s'exécute !
    const obs$ = new Observable<number>(subscriber => {
      console.info('0. OBSERVABLE START');

      // setTimeout(() => {
      //   const result = 180/18;
      //   subscriber.next(result);
      //   subscriber.complete();
      // }, 1000);

      let compteur = 0;
      const id = setInterval(() => {
        subscriber.next(compteur);
        compteur ++;

        if (compteur === 10) {
          clearInterval(id);
          subscriber.complete();
        }
      }, 1000);

      // clearInterval(id);
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);

      console.info('0. OBSERVABLE END');
    });
    const callbackPourLeNext = (item: number) => console.info('OBSERVABLE', item);
    let sub = obs$.subscribe(callbackPourLeNext,
                             err => console.error(err),
                             () => console.info('Cest fini !!'));





    this.subscriptionParent.add(sub);

    sub = obs$.subscribe();
    this.subscriptionParent.add(sub);

    console.info('************************************');
  }


}
