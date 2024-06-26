import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-designcomponents',
  templateUrl: './designcomponents.component.html',
  styleUrls: ['./designcomponents.component.css'],
})



export class DesigncomponentsComponent {
  demoForm: FormGroup;
  constructor(private _fromBuilder: FormBuilder) {
    this.demoForm = this._fromBuilder.group({
      name: [''],
      gender:[''],
      note:[''],
      birthDate:[]
    })
  }
  formHandler(){
    console.log(this.demoForm.value)
  }
  
}
