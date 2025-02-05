export default class Employee {
    //employee_id: number;
    first_name;
    last_name;
    role_id;
    manager_id;
    constructor(
    //employee_id: number,
    first_name, last_name, role_id, manager_id) {
        //this.employee_id = employee_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_id = role_id;
        this.manager_id = manager_id;
    }
    getFirstName() {
        return this.first_name;
    }
    getLastName() {
        return this.last_name;
    }
    getRoleId() {
        return this.role_id;
    }
    getManagerId() {
        return this.manager_id;
    }
}
