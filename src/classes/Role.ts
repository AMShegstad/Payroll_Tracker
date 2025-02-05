export default class Role {

    //role_id: number;
    title: string;
    salary: number;
    department_id: number;
    manager_id: number;
    
    constructor(
        //role_id: number,
        title: string, 
        salary: number, 
        department_id: number,
         manager_id: number
        ) {
        //this.role_id = role_id;
        this.title = title;
        this.salary = salary;
        this.department_id = department_id;
        this.manager_id = manager_id;
    }

    getTitle(): string {
        return this.title;
    }

     getSalary(): number {
        return this.salary;
     }

     getDepartmentId(): number {
        return this.department_id;
     }

     getManagerId(): number {
        return this.manager_id;
     }



}