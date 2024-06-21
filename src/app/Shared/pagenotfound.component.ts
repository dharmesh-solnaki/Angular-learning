import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `<h1 class="mt-5 ">404 Page Not Found</h1>
    <a  routerLink="/" class="btn btn-info">
      Go to HomePage
    </a>`
})
export class PageNotFoundComponent {
  constructor() {}
}
