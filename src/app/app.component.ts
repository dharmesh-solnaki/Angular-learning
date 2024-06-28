import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isLoading: boolean = false;

  constructor() {}

  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   setTimeout(() => {
  //     this.isLoading = false;
  //   }, 1000);
  //   this.router.navigate(['/recipes']);
   
  // }
}
