import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
      .activeHiglighting {
        color: orange !important;
        font-weight: bold;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  statusText: string = 'Login';

  ngOnInit(): void {
    console.log('on innit called');
  }
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

}
