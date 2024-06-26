import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { validationRegexes } from 'src/app/Shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 
})
export class LoginComponent {
    loginForm:FormGroup
  constructor(private _fb:FormBuilder) {
   this.loginForm = this._fb.group({
    username:['',[Validators.required,Validators.maxLength(50),Validators.pattern(validationRegexes.EMAIL_REGEX)]],
    password:['',[Validators.required, Validators.minLength(8)]]
   })
  }

  loginHandler(){

    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched()
      return
    }
    console.log(this.loginForm.value)
  }

  hasError(field: string, error: string) {
    const control = this.loginForm.get(field);
    return control?.hasError(error) && control?.touched;
  }
}
