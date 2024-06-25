import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Employee } from 'src/app/employee/employee.model';
import {
  AddEmployee,
  DeleteEmployee,
  GetEmployee,
  SetEmloyee,
  UpdateEmployee,
} from '../actions/employee.actions';
import { EmployeeService } from 'src/app/employee/employee.service';
import { tap } from 'rxjs/operators';

export class EmployeeStateModel {
  employees: Employee[];
  employeeLoaded: boolean;
  selectedEmployee: Employee;
}

@State<EmployeeStateModel>({
  name: 'employees',
  defaults: {
    employees: [],
    employeeLoaded: false,
    selectedEmployee: null,
  },
})
@Injectable()
export class EmployeeState {
  constructor(private _empService: EmployeeService) {}

  @Selector()
  static getEmployees(state: EmployeeStateModel) {
    return state.employees;
  }

  @Selector()
  static getEmployeeLoaded(state: EmployeeStateModel) {
    return state.employeeLoaded;
  }

  @Selector()
  static getSelectedEmployee(state: EmployeeStateModel) {
    return state.selectedEmployee;
  }

  @Action(SetEmloyee)
  setSelectedEmployee(
    { getState, setState }: StateContext<EmployeeStateModel>,
    { id }: SetEmloyee
  ) {
    const empList = getState();
     const index = empList.employees.findIndex(emp=>emp.id==id)
    setState({
      ...empList,
      selectedEmployee: empList[index],
    });
  }

  @Action(GetEmployee)
  getEmployee({ getState, setState }: StateContext<EmployeeStateModel>, {searchtext}:GetEmployee ) {

    return this._empService.getAllEmployees(searchtext).pipe(
      tap((res: Employee[]) => {
        const state = getState();
        setState({
          ...state,
          employees: res,
          employeeLoaded: false,
        });
      })
    );
  }

  @Action(AddEmployee)
  addEmployee(
    { getState, patchState }: StateContext<EmployeeStateModel>,
    { payload }: AddEmployee
  ) {
    return this._empService.createNewEmployee(payload).pipe(
      tap((res: Employee) => {
        const state = getState();
        patchState({
          employees: [...state.employees, res],
        });
      })
    );
  }

  @Action(DeleteEmployee)
 deleteEmployee( {getState,setState}:StateContext<EmployeeStateModel>, {id}:DeleteEmployee){

       return this._empService.deleteEmployee(id).pipe(
        tap( () => {
            const state = getState();
            const filteredEmployees = state.employees.filter(emp=>emp.id !== id)
            setState({
                ...state,
                employees:filteredEmployees
            })
        })
       )    
 }

 @Action(UpdateEmployee)
 updateEmployee({getState,patchState}:StateContext<EmployeeStateModel>, {id ,payload}:UpdateEmployee){
   return this._empService.updateEmployee(id,payload).pipe(
        tap( res=>{
             const state = getState();
             const index = state.employees.findIndex(emp => emp.id==id)
             state.employees[index]= res
            
            patchState({
                 employees:state.employees             
            })
        })
    )
 }
}
