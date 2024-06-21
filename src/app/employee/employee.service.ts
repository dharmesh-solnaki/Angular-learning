import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private EMPLOYEE_URL: string = 'http://localhost:5235/api/User';

  constructor(private _http: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
    return this._http.get<Employee[]>(this.EMPLOYEE_URL);
  }
  createNewEmployee(Employee: Employee): Observable<Employee> {
    const header = new HttpHeaders().set('Content-Type', 'application/Json');
    const options = { headers: header };
    return this._http.post<Employee>(this.EMPLOYEE_URL, Employee, options);
  }
  updateEmployee(id: number, Employee: Employee) {
    return this._http.put<Employee>(`${this.EMPLOYEE_URL}/${id}`, Employee);
  }
  deleteEmployee(id: number) {
    return this._http.delete(`${this.EMPLOYEE_URL}/${id}`);
  }
}
