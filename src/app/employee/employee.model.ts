export class Employee {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phone: string,
    public gender: string,
    public city: string,
    public id: number 
  ) {}
}

export class EmployeeDto {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phone: string,
    public gender: string,
    public city: string
  ) {}
}

export const employeeToEmployeeDto = (emp:Employee):EmployeeDto => {
  return new EmployeeDto(
    emp.firstName,
    emp.lastName,
    emp.email,
    emp.phone,
    emp.gender,
    emp.city    
  )
}