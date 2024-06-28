import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {MatSnackBar, MatSnackBarModule, MatSnackBarRef} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-designcomponents',
  templateUrl: './designcomponents.component.html',
  styleUrls: ['./designcomponents.component.css'],
})

export class DesigncomponentsComponent {
    durationInSeconds = 5;
  demoForm: FormGroup;
  hobbiesArray:string[] = ['Reading' ,'Writing','Singing']
  constructor(private _fb: FormBuilder, private dialog:MatDialog,private _snackBar: MatSnackBar) {
    this.demoForm = this._fb.group({
      name: [''],
      gender:[''],
      note:[''],
      birthDate:[],
      hobbies: this._fb.array([], Validators.required),
      gender2:['']
    })
  }
  formHandler(){
    console.log(this.demoForm.value)
  }
  changeHandler(event: any, item: string) {
    const formArray: FormArray = this.demoForm.get('hobbies') as FormArray;

    if (event.checked) {
      formArray.push(this._fb.control(item)); // Add a FormControl for the checked item
    } else {
      const index = formArray.controls.findIndex(x => x.value === item);
      formArray.removeAt(index); // Remove the FormControl if unchecked
    }
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      data:"iqweuf",
    });
  }

  openSnackBar() {   
    // this._snackBar.openFromComponent(PizzaPartyAnnotatedComponent, {
    //   duration: this.durationInSeconds * 1000,
    // });

    this._snackBar.open('Cannonball!!', 'Splash', {
      horizontalPosition:'end',
      verticalPosition:'top',
    });
  }  
  
}



@Component({
  selector: 'app-snack-bar-for-test',
  templateUrl: './snackbar.template.html',
  styles: [
    `
    :host {
      display: flex;
    }

    .example-pizza-party {
      color: hotpink;
    }
  `,
  ],
  standalone: true,
  imports: [MatButtonModule, MatSnackBarModule],
})
export class PizzaPartyAnnotatedComponent {
  snackBarRef = inject(MatSnackBarRef);
}