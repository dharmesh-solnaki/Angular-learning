import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  Subscription,
  debounceTime,
  filter,
  fromEvent,
  map,
  switchMap,
  tap,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
})
export class FromEventComponent implements OnDestroy, OnInit {
  constructor(private _designUtilityService: DesignUtilityService) {}

  @ViewChild('addBtn') addBtn: ElementRef;
  @ViewChild('searchRef') searchtext: ElementRef;
  seacrhSubscription: Subscription;

  users: any[] = [];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      this._designUtilityService.print('Video' + count++, 'elContainer');
    });

    const seacrhObs = fromEvent(this.searchtext.nativeElement, 'input').pipe(
      debounceTime(1000),
      filter((event: any) => event.target.value != ''),
      switchMap((event: any) => {
        return ajax(`https://reqres.in/api/users?page=${event.target.value}`);
      }),
      map((response: any) => {
        return response.response.data;
      })
    );

    this.seacrhSubscription = seacrhObs.subscribe((value: any) => {
      this.users = value;
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.seacrhSubscription) {
      this.seacrhSubscription.unsubscribe();
    }
  }
}
