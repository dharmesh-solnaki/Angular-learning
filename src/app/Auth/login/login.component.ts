import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validationRegexes } from 'src/app/Shared/constants';
import { EmployeeService } from 'src/app/employee/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _employeeService: EmployeeService,
    private _router: Router
  ) {
    this.loginForm = this._fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.pattern(validationRegexes.EMAIL_REGEX),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  loginHandler() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this._employeeService
      .authEmployee(this.loginForm.value)
      .subscribe((res: any) => {
        if(res.response){
          localStorage.setItem('authToken', res.response);
          this._router.navigate(['/employee']);
        }
     
      },
      (err)=>{
       alert("Please provide valid credentialss")
     
      }
    
    );
    // this._employeeService.isLoaggedIn.next(true);
  }

  hasError(field: string, error: string) {
    const control = this.loginForm.get(field);
    return control?.hasError(error) && control?.touched;
  }
}
