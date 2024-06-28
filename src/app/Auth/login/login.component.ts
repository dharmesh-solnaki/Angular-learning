import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { alertMessages, validationRegexes } from 'src/app/Shared/constants';
import { CustomeErrorHandler } from 'src/app/Shared/custome-error-handler.service';
import { EmployeeService } from 'src/app/employee/employee.service';
import { LoginResponseModel } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
   .border-danger {
      border: 1px solid red !important; 
    }
   
   `],
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _employeeService: EmployeeService,
    private _router: Router,
    private _customeErrorHadlerService: CustomeErrorHandler
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
    this._employeeService.authEmployee(this.loginForm.value).subscribe(
      (res: LoginResponseModel) => {
        if (res.response) {
          localStorage.setItem('authToken', res.response.token);
          localStorage.setItem('authRole',res.response.role)
      
          alert(alertMessages.LOGIN_SUCCESS);
          this._router.navigate(['/employee']);
        }
      },
      (err) => {
        this.loginForm.reset();
        this._customeErrorHadlerService.handleError(err);
      }
    );
    // this._employeeService.isLoaggedIn.next(true);
  }

  hasError(field: string, error: string) {
    const control = this.loginForm.get(field);
    return control?.hasError(error) && control?.touched;
  }
}
