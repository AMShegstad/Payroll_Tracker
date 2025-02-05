export default class Department {

    department_name: string;
    department_id: number;

    constructor(
        department_name: string,
        department_id: number
    ) {
        this.department_name = department_name;
        this.department_id = department_id;
    }

    getDepartmentName(): string {
        return this.department_name;
    }
}