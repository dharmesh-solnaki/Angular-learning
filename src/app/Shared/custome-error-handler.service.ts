import { ErrorHandler, Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class CustomeErrorHandler implements ErrorHandler {

  constructor(private _snackBar:MatSnackBar) { }
  handleError(error: unknown) {
     this._snackBar.open(
      error.toString(),'Close',{
        duration: 2000,
      }
     )
  }
}
