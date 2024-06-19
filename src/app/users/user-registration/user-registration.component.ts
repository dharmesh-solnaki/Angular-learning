import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from 'src/app/Shared/user.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styles: [
    `
      input.ng-invalid.ng-touched {
        border-color: red;
      }
    `,
  ],
})
export class UserRegistrationComponent {
  isFormReactive: boolean = false;

  userRegistationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userservice: UserService,
    private router: Router
  ) {
    this.userRegistationForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Age: ['', [Validators.required, Validators.min(16), Validators.max(100)]], // Adjusted validators
      Gender: ['', Validators.required],
      Salary: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.isFormReactive = +this.route.snapshot.params['type'] === 1; // Simplified assignment
  }

  get Name() {
    return this.userRegistationForm.get('Name');
  }
  get Age() {
    return this.userRegistationForm.get('Age');
  }

  registerUser1(regForm: NgForm) {
    const dataobj = regForm.value;

    this.userservice.addUserToList(
      new User(
        this.userservice.getCurrntCount() + 1,
        dataobj.name,
        dataobj.salary,
        dataobj.gender,
        dataobj.age
      )
    );

    this.router.navigate(['/users']);
  }

  postUserData() {
    const dataobj = this.userRegistationForm.value;
    console.log(dataobj);
    this.userservice.addUserToList(
      new User(
        this.userservice.getCurrntCount() + 1,
        dataobj.Name,
        dataobj.Salary,
        dataobj.Gender,
        dataobj.Age
      )
    );

    this.router.navigate(['/users']);
  }

  resetForm() {
    this.userRegistationForm.reset({
      Name: 'New User',
    });
  }
}
