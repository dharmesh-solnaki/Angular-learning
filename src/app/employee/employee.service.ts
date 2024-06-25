import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Employee, employeeToEmployeeDto } from './employee.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private EMPLOYEE_URL: string = environment.EMPLOYEE_BASE_URL;

  constructor(private _http: HttpClient) {}

  getAllEmployees(searchtext): Observable<Employee[]> {

    const modifiledUrl = `${this.EMPLOYEE_URL}?searchString=${searchtext}`;
    console.log(modifiledUrl)
    return this._http
      .get<Employee[]>(modifiledUrl)
      .pipe(catchError(this.handleError));
  }

  createNewEmployee(Employee: Employee): Observable<Employee> {
    const header = new HttpHeaders().set('Content-Type', 'application/Json');
    const options = { headers: header };
    const  dtoEmployee = employeeToEmployeeDto(Employee);
    return this._http
      .post<Employee>(this.EMPLOYEE_URL, dtoEmployee, options)
      .pipe(catchError(this.handleError));
  }

  updateEmployee(id: number, Employee: Employee) {
    const dtoEmployee = employeeToEmployeeDto(Employee)
    return this._http
      .put<Employee>(`${this.EMPLOYEE_URL}/${id}`, dtoEmployee)
      .pipe(catchError(this.handleError));
  }

  deleteEmployee(id: number) {
    return this._http
      .delete(`${this.EMPLOYEE_URL}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    throw Error(errorMessage);
  }
}
