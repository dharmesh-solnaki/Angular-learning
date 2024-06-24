import { Component, ElementRef, ViewChild } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeConstants, validationRegexes } from '../Shared/constants';
import { validatePasswords } from '../Shared/Validators/passwordMatch';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: [
    `
      input.ng-invalid.ng-touched {
        border-color: red;
      }
    `,
  ],
})
export class EmployeeComponent {
  employees: Employee[] = [];
  editableEmployee: Employee = null;
  columns: string[] = [
    'firstName',
    'lastName',
    'email',
    'phone',
    'gender',
    'city',
    'actions',
  ];
  hasAction: string[] = ['actions'];

  employeeForm: FormGroup;
  employeeId: number;
  formSubmitType: string;
  @ViewChild('addEmployeeCloseBtn') closebtn: ElementRef;

  constructor(
    private _employeeservice: EmployeeService,
    private _formBuilder: FormBuilder
  ) {
    this.employeeForm = this._formBuilder.group(
      {
        firstName: ['', [Validators.required, Validators.maxLength(20)]],
        lastName: ['', [Validators.required, Validators.maxLength(20)]],
        email: [
          '',
          [
            Validators.required,
            Validators.maxLength(50),
            Validators.pattern(validationRegexes.EMAIL_REGEX),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20),
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20),
          ],
        ],
        phone: [
          '',
          [
            Validators.required,
            Validators.maxLength(10),
            Validators.pattern(validationRegexes.MOBILE_REGEX),
          ],
        ],
        age: [
          '',
          [
            Validators.required,
            Validators.min(16),
            Validators.max(60),
            Validators.pattern(validationRegexes.AGE_REGEX),
          ],
        ],
        gender: ['', Validators.required],
        city: ['', Validators.required],
      },
      {
        validator: validatePasswords('password', 'confirmPassword'),
      }
    );
  }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this._employeeservice.getAllEmployees().subscribe(
      (res) => (this.employees = res),
      (err) => console.error('Error Hadler ', err)
    );
  }

  hadleClickType(type: string, item) {
    if (type != 'edit') {
      this.employeeForm.reset();
      this.formSubmitType = EmployeeConstants.ADD_EMPLOYEE;
      return;
    }
    this.employeeForm.patchValue({
      firstName: item.firstName,
      lastName: item.lastName,
      email: item.email,
      phone: item.phone,
      gender: item.gender,
      city: item.city,
    });
    this.employeeId = item.id;
    this.formSubmitType = EmployeeConstants.EDIT_EMPLOYEE;
  }

  postEmployee() {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }
    const newEmployee = new Employee(
      this.employeeForm.value.firstName,
      this.employeeForm.value.lastName,
      this.employeeForm.value.email,
      this.employeeForm.value.phone,
      this.employeeForm.value.gender,
      this.employeeForm.value.city
    );

    if (this.formSubmitType == EmployeeConstants.ADD_EMPLOYEE) {
      this._employeeservice.createNewEmployee(newEmployee).subscribe(
        (res) => this.employees.push(res),
        (err) => console.error('Error Hadler ', err)
      );
      this.employeeForm.reset();
      alert('New Employee Added Successfully');
    } else {
      this._employeeservice
        .updateEmployee(this.employeeId, newEmployee)
        .subscribe(
          () => this.getAllEmployees(),
          (err) => console.error('Error Hadler ', err)
        );
      alert('Employee updated Successfully');
    }

    this.closebtn.nativeElement.click();
  }

  hasError(field: string, error: string) {
    const control = this.employeeForm.get(field);
    return control?.hasError(error) && control?.touched;
  }

  deleteEmployee(id: number) {
    const ans = confirm('Are you sure , you want to delete this record?');
    if (ans) {
      this._employeeservice.deleteEmployee(id).subscribe(
        () => this.getAllEmployees(),
        (err) => console.error('Error Hadler ', err)
      );
      alert('Employee deleted Successfully');
    }
  }

  canExit() {
    const res = confirm(
      'you may have unsaved changes are you sure you want to leave the page?'
    );
    return res;
  }

  hadleTheFocus(field: string) {
    const inputValue = this.employeeForm.controls[field].value;
    const isvalid = new RegExp('/D/g');
    if (!isvalid.test(inputValue) && inputValue) {
      this.employeeForm.controls[field].setValue(
        inputValue.replace(/[^0-9]/g, '')
      );
    }
  }

  checkTheRegex() {}
}
