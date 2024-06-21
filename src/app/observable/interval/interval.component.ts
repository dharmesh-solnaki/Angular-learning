import { Component } from '@angular/core';
import { Subscription,  timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',

})
export class IntervalComponent {
  obsMsg:string;
  videoSubscription:Subscription
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  // const bradCastVideos = interval(1000)
  const bradCastVideos = timer(100,1000)

  this.videoSubscription =  bradCastVideos.subscribe(res=> {
    this.obsMsg = `Videos ${res}`;
    
    if(res>=5){
      this.videoSubscription.unsubscribe();
    }
   })
}
}
