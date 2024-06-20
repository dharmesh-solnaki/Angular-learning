import { Component } from '@angular/core';
import { Observable, Subscription, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styles: [
  ]
})
export class OfFromComponent {


  shownMsg:string[]=[];
  sourceSub:Subscription
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  const Obs1 = of('dharmesh','hardik','jay')
  Obs1.subscribe(res=>{
    this.shownMsg.push(res)
  })

  const  source = interval(100);
  this.sourceSub = source.pipe(take(10), toArray()).subscribe(res=>console.log(res))

  //custome observeale
  const  customObs = Observable.create((observer)=>{
    observer.next('data emit 1')

    observer.complete()
  })
  
  customObs.subscribe((res)=> console.log(res))

  
}
}
