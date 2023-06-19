import { Component, SkipSelf } from '@angular/core';
import { Observable, Subject, Subscription, catchError, concatMap, delay, filter, from, map, of, take, tap } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstTour() {
    const observable = new Observable<number>((subscriber) => {
      
      subscriber.next(1);
      
      subscriber.next(2);
      
      subscriber.next(3);
      
      subscriber.next(4);
      
      subscriber.complete();
    });
    
    observable.subscribe({
      next(value) {
        console.log(`valeur envoyé par l'observable : ${value}`);
      },
      error(err) {
        console.error(`erreur: ${err}`);
      },
      complete() {
        console.log('observable terminé');
      },
    })
  }
  secondTour() {
    const observable = new Observable<number>((subscriber) => {
      let value = 0;
      const intervalId = setInterval(() => {
        subscriber.next(++value);
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    });

    const subscription: Subscription = observable.subscribe({
      next(value) {
        console.log(`valeur envoyé par l'observable : ${value}`);
      },
      error(err) {
        console.error(`erreur: ${err}`);
      },
      complete() {
        console.log('observable terminé');
      },
    });

    setTimeout(() => subscription.unsubscribe(), 5000);
  }
  thirdTour() {
    const observable = new Observable<number>((subscriber) => {
      const Array = [1, 2, 3, 4];
      
      try {
        for(const item of Array) {
          subscriber.next(item);
        } 
        subscriber.complete(); 
      } catch (err) {
        subscriber.error(err);
      }
    });
    
    observable.subscribe({
      next(value) {
        console.log(`valeur envoyé par l'observable : ${value}`);
      },
      error(err) {
        console.error(`erreur: ${err}`);
      },
      // complete() {
      //   console.log('observable terminé');
      // },
    });
  }
  fourthTour() {
    const array = [1, 2, 3, 4];

    const observable = from(array);

    observable.subscribe({
      next(value) {
        console.log(`valeur envoyé par l'observable: ${value}`);
      },
      // error(err) {
      //   console.error(`erreur: ${err}`);
      // },
      complete() {
        console.log(`observable terminé`)
      },
    });
  }
  fifthTour() {
    const observable = of(1, 2, 3, 4);

    observable.subscribe((value) => {
      console.log(`valeur envoyé par l'observable: ${value}`);
    });
  }
  sixthTour() {
    const observable = of(1, 2, 3, 4).pipe(
      map((value => value + 1))
    );

    observable.subscribe((value) => {
      console.log(`valeur envoyé par l'observable: ${value}`);
    });
  }
  seventhTour() {
    const observable = of(1, 2, 3, 4, 5, 6, 7, 8).pipe(
      map((value => value + 1)),
      take(3),
      delay(1000)
    );

    observable.subscribe((value) => {
      console.log(`valeur envoyé par l'observable: ${value}`);
    });
  }
  eighthTour() {
    const observable = of(1, 2, 3, 4, 5, 6, 7, 8).pipe(
      tap (value => console.log(`en cours de traitement de  ${value}`)),
      concatMap(value => of(value).pipe(delay(1000))),
      catchError(value => of(`erreur avec la valeur : ${value}`))
    );

    observable.subscribe((value) => {
      console.log(`valeur envoyé par l'observable: ${value}`);
    });
  }
  ninthTour() {
    const observable = of(1, 2, 3, 4, 5, 6, 7, 8).pipe(
      concatMap(value => of(value).pipe(delay(500))),
    );

    observable.subscribe((value) => console.log(`observateur A: ${value}`));
    observable.subscribe((value) => console.log(`observateur B: ${value}`));

    setTimeout(() =>{
      observable.subscribe((value) => console.log(`observateur C: ${value}`));
    }, 2000)
  }
  tenthTour() {
    const subject = new Subject<number>();

    const observable = of(1, 2, 3, 4, 5, 6, 7, 8).pipe(
      concatMap(value => of(value).pipe(delay(500))),
    );
    observable.subscribe(subject);

    subject.subscribe((value) => console.log(`observateur A: ${value}`));
    subject.subscribe((value) => console.log(`observateur B: ${value}`)); 

    setTimeout(() =>{
      subject.subscribe((value) => console.log(`observateur C: ${value}`));
    }, 2000)
  }
}
