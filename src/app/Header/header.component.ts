import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Router } from '@angular/router';
import { confirmMessages } from '../Shared/constants';

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
  get loginStatus(): boolean {
    return localStorage.getItem('authToken') ? true : false;
  }

  constructor(private _router: Router) {}

  ngOnInit(): void {}
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  onLogout() {
    const ans = confirm(confirmMessages.LOGOUT_CONFIRMATION);
    if (ans) {
      localStorage.removeItem('authToken');      
      this._router.navigate(['/login']);
    }
  }
}
