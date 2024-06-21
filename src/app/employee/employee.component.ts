import { Component, ElementRef, ViewChild } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeConstants } from '../Shared/constants';

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
    this.employeeForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      city: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this._employeeservice
      .getAllEmployees()
      .subscribe((res) => (this.employees = res));
  }

  hadleClickType(type: string, item) {
    if (type != 'edit') {
      this.employeeForm.reset();
      this.formSubmitType = EmployeeConstants.ADD_EMPLOYEE;
      return;
    } 
      this.employeeForm.controls['firstName'].setValue(item.firstName);
      this.employeeForm.controls['lastName'].setValue(item.lastName);
      this.employeeForm.controls['email'].setValue(item.email);
      this.employeeForm.controls['phone'].setValue(item.phone);
      this.employeeForm.controls['gender'].setValue(item.gender);
      this.employeeForm.controls['city'].setValue(item.city);
      this.employeeId = item.id;
      this.formSubmitType = EmployeeConstants.EDIT_EMPLOYEE;
    
  }
  postEmployee() {
    const newEmployee = new Employee(
      this.employeeForm.value.firstName,
      this.employeeForm.value.lastName,
      this.employeeForm.value.email,
      this.employeeForm.value.phone,
      this.employeeForm.value.gender,
      this.employeeForm.value.city
    );

    if (this.formSubmitType == EmployeeConstants.ADD_EMPLOYEE) {
      this._employeeservice
        .createNewEmployee(newEmployee)
        .subscribe((res) => this.employees.push(res));
      this.employeeForm.reset();
      alert('New Employee Added Successfully');
    } else {
      this._employeeservice
        .updateEmployee(this.employeeId, newEmployee)
        .subscribe((res) => this.getAllEmployees());
      alert('Employee updated Successfully');
    }
    this.closebtn.nativeElement.click();
  }
  onForminvalid() {
    alert('Please fill the correct details');
  }
  deleteEmployee(id: number) {
    const ans = confirm('Are you sure , you want to delete this record?');
    if (ans) {
      this._employeeservice
        .deleteEmployee(id)
        .subscribe((res) => this.getAllEmployees());
      alert('Employee deleted Successfully');
    }
  }
}
