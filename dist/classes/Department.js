export default class Department {
    department_name;
    department_id;
    constructor(department_name, department_id) {
        this.department_name = department_name;
        this.department_id = department_id;
    }
    getDepartmentName() {
        return this.department_name;
    }
}
