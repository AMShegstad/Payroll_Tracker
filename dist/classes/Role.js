export default class Role {
    //role_id: number;
    title;
    salary;
    department_id;
    manager_id;
    constructor(
    //role_id: number,
    title, salary, department_id, manager_id) {
        //this.role_id = role_id;
        this.title = title;
        this.salary = salary;
        this.department_id = department_id;
        this.manager_id = manager_id;
    }
    getTitle() {
        return this.title;
    }
    getSalary() {
        return this.salary;
    }
    getDepartmentId() {
        return this.department_id;
    }
    getManagerId() {
        return this.manager_id;
    }
}
