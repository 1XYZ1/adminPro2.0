import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy  {

  public intervalSubs: Subscription;

  constructor() { 

    // Simplificar argumento de entrada y de salida
    
    // this.retornaObservable().pipe(retry(2))
    //   .subscribe(
      //   valor => console.log('Subs: ', valor),
      //   error => console.error('Error: ', error),
      //   () => console.log('Obs terminado')
      //   )
      this.intervalSubs = this.retornaIntervalo().subscribe(console.log);

    }

    ngOnDestroy(){

      this.intervalSubs.unsubscribe();
    }
  retornaIntervalo(): Observable<number>{
    return interval(1000).pipe(
      // take(10),
      map(data => data + 1),
      filter((data: number) => (data % 2 === 0) ? true: false),

      )
    
  }

  retornaObservable(): Observable<number>{
    let i = -1;
   return new Observable<number>(observer => {
      const intervalo = setInterval(()=>{
        i++
        observer.next(i)
        if (i === 2) {
          observer.error('ERROR');
        }
        if (i === 4) {
          clearInterval(intervalo)
          observer.complete();
        }
      }, 1000)

    })
    
  }

  
}
