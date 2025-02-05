export default class Employee {

    //employee_id: number;
    first_name: string;
    last_name: string;
    role_id: number;
    manager_id: number;

    constructor(
        //employee_id: number,
        first_name: string,
        last_name: string,
        role_id: number,
        manager_id: number
    ) {
        //this.employee_id = employee_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_id = role_id;
        this.manager_id = manager_id;
    }

    getFirstName(): string {
        return this.first_name;
    }

    getLastName(): string {
        return this.last_name;
    }

    getRoleId(): number {
        return this.role_id;
    }

    getManagerId(): number {
        return this.manager_id;
    }
}