import { pool } from "../db/Connection.js";
//import Department from "./Department.js";
export default class Queries {
    // a test
    static async test() {
        try {
            const test = await pool.query("SELECT 1");
            console.log("Database connection is working");
        }
        catch (err) {
            console.log("Test failed: ");
        }
    }
    static async getAllDepartments() {
        const sql = "SELECT * FROM departments";
        try {
            const result = await pool.query(sql);
            return result.rows;
        }
        catch (err) {
            console.error("Error fetching departments: ", err);
            return [];
        }
    }
    static async getAllRoles() {
        const sql = "SELECT * FROM roles";
        try {
            const result = await pool.query(sql);
            return result.rows;
        }
        catch (err) {
            console.error("Error fetching roles: ", err);
            return [];
        }
    }
    static async getAllEmployees() {
        const sql = "SELECT * FROM employees";
        try {
            const result = await pool.query(sql);
            return result.rows;
        }
        catch (err) {
            console.log("Error fetching employees: ", err);
            return [];
        }
    }
    static async addDepartment(newDept) {
        const sql = "INSERT INTO departments (department_name) VALUES ($1)";
        await pool
            .query(sql, [newDept])
            .then((result) => {
            console.log(`Successfully added ${newDept} to the database.`);
        })
            .catch((err) => {
            console.log("Error adding new department: ", err);
        });
    }
    static async addRole(role) {
        const sql = "INSERT INTO roles (role_title, role_salary, department_id) VALUES ($1, $2, $3)";
        await pool
            .query(sql, [role.title, role.salary, role.department_id])
            .then((result) => {
            console.log(`Successfully added ${role} to the database.`);
        })
            .catch((err) => {
            console.log("Error: ", err);
        });
    }
    static async addEmployee(employee) {
        await pool
            .query("INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)", [
            employee.first_name,
            employee.last_name,
            employee.role_id,
            employee.manager_id,
        ])
            .then((result) => {
            console.log(`Successfully added ${employee} to the database.`);
        })
            .catch((err) => {
            console.log("Error: ", err);
        });
    }
    static async updateEmployeeRole(employeeId, roleId) {
        await pool
            .query("UPDATE employees SET role_id = $1 WHERE employee_id = $2", [
            roleId,
            employeeId,
        ])
            .then((result) => {
            console.log(`Successful updated Employee(${employeeId}) with role_id(${roleId})`);
        })
            .catch((err) => {
            console.log("Error: ", err);
        });
    }
    static async updateEmployeeManager(employeeId, managerId) {
        await pool
            .query("UPDATE employees SET manager_id = $1 WHERE id = $2", [
            managerId,
            employeeId,
        ])
            .then((result) => {
            console.log(`Successfully updated Employee(${employeeId}) with manager_id(${managerId})`);
        })
            .catch((err) => {
            console.log("Error: ", err);
        });
    }
    static async viewEmployeesByManager(managerId) {
        const sql = "SELECT * FROM employees WHERE manager_id = $1";
        try {
            const result = await pool.query(sql, [managerId]);
            return result.rows;
        }
        catch (err) {
            console.log("Error fetching employees: ", err);
            return [];
        }
    }
    static async viewEmployeesByDepartment(department_id) {
        const getEmpsByDept = `SELECT employees.first_name, employees.last_name FROM employees JOIN roles ON employees.role_id = role.role_id WHERE roles.department = $1`;
        try {
            const result = await pool.query(getEmpsByDept, [department_id]);
            return result.rows;
        }
        catch (err) {
            console.error("Error fetching employees: ", err);
        }
    }
    static async viewEmployeesByRole(role_id) {
        const getEmployees = "SELECT * FROM employees WHERE role_id = $1";
        try {
            const result = await pool.query(getEmployees, [role_id]);
            return result.rows;
        }
        catch (err) {
            console.error("Error fetching employees: ", err);
        }
    }
    static async deleteDepartment(department_id) {
        const deleteDepartment = "DELETE FROM departments WHERE department_id = $1";
        try {
            pool.query(deleteDepartment, [department_id]);
            console.log(`Department with id#${department_id} has been deleted.`);
        }
        catch (err) {
            console.log("Error deleting department: ", err);
        }
    }
    static async deleteRole(role_id) {
        const deleteRole = "DELETE FROM roles WHERE department_id = $1";
        try {
            pool.query(deleteRole, [role_id]);
            console.log(`Department with id#${role_id} has been deleted.`);
        }
        catch (err) {
            console.log("Error deleting department: ", err);
        }
    }
    static async deleteEmployee(employee_id) {
        const deleteEmployee = "DELETE FROM employees WHERE employee_id = $1";
        try {
            pool.query(deleteEmployee, [employee_id]);
            console.log(`Department with id#${employee_id} has been deleted.`);
        }
        catch (err) {
            console.log("Error deleting department: ", err);
        }
    }
    static async viewTotalUtilizedBudgetByDepartment(department_id) {
        // Return the total utilized budget after selecting the department
        const budgetByDept = "SELECT COALESCE(SUM(roles.role_salary), 0) AS total_salary FROM roles WHERE roles.department_id = $1";
        try {
            const result = await pool.query(budgetByDept, [department_id]);
            return result.rows[0].total_salary;
        }
        catch (err) {
            console.error("Error fetching total utilized budget: ", err);
            return 0;
        }
    }
}
