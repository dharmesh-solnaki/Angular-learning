import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styles: [
  ]
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}

}
