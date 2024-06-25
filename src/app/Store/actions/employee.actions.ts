import { Employee } from 'src/app/employee/employee.model';

export class GetEmployee {
  static readonly type = '[Employee] Get';  
  constructor(public searchtext:string) {}
}
export class SetEmloyee {
  static readonly type = '[Employee] Set';
  constructor(public id:number) {}
}

export class AddEmployee {
  static readonly type = '[Employee] Add';
  constructor(public payload: Employee) {}
}

export class UpdateEmployee {
  static readonly type = '[Employee] Update';
  constructor(public id: number,  public payload: Employee) {}
}

export class DeleteEmployee {
  static readonly type = '[Employee] Delete';
  constructor(public id: number) {}
}
