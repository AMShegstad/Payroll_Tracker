import inquirer from "inquirer";
import Queries from "./Query.js";
import readlineSync from "readline-sync";
import Role from "./Role.js";
import { QueryResult } from "pg";
import Employee from "./Employee.js";

export default class CommandLine {
  // Run inquirer to retrieve user input and execute commands.
  static async chooseDepartment(departments: Promise<any[]>): Promise<number> {
    // Code to select a specific Department, and return its id attribute.
    const deptId = await inquirer
      .prompt([
        {
          type: "list",
          name: "departmentSelection",
          message: "Please select a department: ",
          choices: (
            await departments
          ).map((department) => {
            return {
              name: `${department.department_name}`,
              value: department.id,
            };
          }),
        },
      ])
      .then((answers) => {
        return answers.departmentSelection.id;
      });
    return deptId;
  }

  static async chooseRole(roles: Promise<any[]>): Promise<number> {
    // Code to select a specific Role, and return its id attribute.
    const roleId = await inquirer
      .prompt([
        {
          type: "list",
          name: "roleSelection",
          message: "Please select a role: ",
          choices: (
            await roles
          ).map((role) => {
            return {
              name: `${role.role_id}: ${role.role_title}`,
              value: role.role_id,
            };
          }),
        },
      ])
      .then((answers) => {
        return answers.roleSelection;
      });
    return roleId;
  }

  static async chooseEmployee(employees: Promise<any[]>): Promise<number> {
    // Code to select a specific Employee, and return its id attribute.
    const employeeId = await inquirer
      .prompt([
        {
          type: "list",
          name: "employeeSelection",
          message: "Please select an employee: ",
          choices: (
            await employees
          ).map((employee) => {
            return {
              name: `${employee.first_name} ${employee.last_name}`,
              value: employee.employee_id,
            };
          }),
        },
      ])
      .then((answers) => {
        return answers.employeeSelection;
      });
    return employeeId;
  }

  static async chooseManager(managers: Promise<any[]>): Promise<number> {
    // Code to select a specific Employee, and return its id attribute.
    const managerId = await inquirer
      .prompt([
        {
          type: "list",
          name: "managerSelection",
          message: "Please select a manager: ",
          choices: (
            await managers
          ).map((manager) => {
            return {
              name: `${manager.first_name} ${manager.last_name}`,
              value: manager.employee_id,
            }
          }),
        },
      ])
      .then((answers) => {
        return answers.managerSelection;
      });
    return managerId;
  }

  // Run the command line interface:
  static async chooseAction(): Promise<void> {
    inquirer
      .prompt([
        {
          type: "list",
          name: "payrollAction",
          message: "Please select an action to perform: ",
          choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee's role",
            "Update an employee's manager",
            "View employees by manager",
            "View employees by department",
            "View employees by role",
            "Delete a department",
            "Delete a role",
            "Delete an employee",
            "View total utilized budget by department",
            "Exit",
          ],
        },
      ])
      .then(async (answers) => { 
        if (answers.payrollAction === "View all departments") {
          // DONE
          // Simple call to display * from departments.
          const data = await Queries.getAllDepartments();
          console.log('Deparments:');
          for (let i = 0; i < data.length; i++) {
            console.log(`Department #${data[i].id}) ${data[i].department_name}`)
          }
          console.log();
          CommandLine.chooseAction();

          // ------------------------TESTED AND WORKING----------------------
        } else if (answers.payrollAction === "View all roles") {
          // DONE
          // Simple call to display * from roles.
          const data = await Queries.getAllRoles();
          console.log('Roles');
          for (let i = 0; i < data.length; i++) {
            console.log(`Role ID# ${data[i].role_id}) ${data[i].role_title}`);
          }
          console.log();
          CommandLine.chooseAction();
          // ------------------------TESTED AND WORKING---------------------
        } else if (answers.payrollAction === "View all employees") {
          // DONE
          // Simple call to display * from employees.
          const data = await Queries.getAllEmployees();
          console.log('Employees');
          for (let i = 0; i < data.length; i++) {
            console.log(`Employee ID: ${data[i].employee_id}) ${data[i].first_name} ${data[i].last_name}}`);
          }
          console.log();
          CommandLine.chooseAction();
          // ------------------------TESTED AND WORKING--------------------
        } else if (answers.payrollAction === "Add a department") {
          //
          // Using the readLine npm module to accept and return txt.
          const newDept = readlineSync.question(
            "Please enter the name of the department you would like to add: \n"
          );
          console.log(newDept);
          const data = await Queries.addDepartment(newDept);
          console.log();
          CommandLine.chooseAction();
          // ------------------------TESTED AND WORKING--------------------
        } else if (answers.payrollAction === "Add a role") {
          const roleTitle = readlineSync.question(
            "Please enter the name of the role you would like to add: \n"
          );
          const roleSalary = parseInt(
            readlineSync.question("Please enter the salaray for this role: \n")
          );
          // I need a new instance of inquirer here to prompt the user for the department, match the department to the department_id, and pull that id# into a variable to pass into a new Role object.
          const department_id = await CommandLine.chooseDepartment(
            Queries.getAllDepartments()
          );
          // I need to do the same thing with the manager_id, but I need to pull the employee_id from the employees table.
          const manager_id = await CommandLine.chooseManager(
            Queries.getAllEmployees()
          );
          const newRole = new Role(
            roleTitle,
            roleSalary,
            department_id,
            manager_id
          );
          Queries.addRole(newRole);
          console.log();
          CommandLine.chooseAction();
          // ------------------------TESTED AND WORKING--------------------
        } else if (answers.payrollAction === "Add an employee") {
          const empFirstName = readlineSync.question(
            "Please enter the new employee's first name: "
          );
          const empLastName = readlineSync.question(
            "Please enter the new employee's last name: "
          );
          // Create an instance of inquirer that will list the roles, allowing the user to select one. Once selected, the role id integer will be returned.
          const empRoleId: number = await CommandLine.chooseRole(Queries.getAllRoles());
          console.log(`Role ID = ${empRoleId}`);
          // Create an instance of inquirer that will list the managers, allowing the user to select one. Once selected, the manager id integer will be returned.
          const empManagerId: number = await CommandLine.chooseManager(Queries.getAllEmployees());
          console.log(`Manager ID = ${empManagerId}`);
          // Creating the Employee object.
          const newEmployee = new Employee(
            empFirstName,
            empLastName,
            empRoleId,
            empManagerId
          );
          // Debugging
          //console.log(newEmployee.first_name);
          //console.log(newEmployee.last_name);
          //console.log(newEmployee.role_id);
          //console.log(newEmployee.manager_id);
          await Queries.addEmployee(newEmployee);
          console.log();
          CommandLine.chooseAction();
          // ------------------------TESTED AND WORKING--------------------
        } else if (answers.payrollAction === "Update an employee's role") {
          // Select an employee from a list. Return the employee_ID of the selected entry
          const empToUpdate = await CommandLine.chooseEmployee(
            Queries.getAllEmployees()
          );
          // Select a role from a list. Return the role_id of the selected role.
          const newEmpRole = await CommandLine.chooseRole(
            Queries.getAllRoles()
          );
          // Run the query updating the employee listing with the new role_id
          Queries.updateEmployeeRole(empToUpdate, newEmpRole);
          console.log();
          CommandLine.chooseAction();
          // ------------------------TESTED AND WORKING--------------------
        } else if (answers.payrollAction === "Update an employee's manager") {
          // Select an employee from a list. Return the employee_ID of the selected entry.
          const employeeId = await CommandLine.chooseEmployee(
            Queries.getAllEmployees()
          );

          // Select the manager from a list. Return the employee_ID of the manager.
          const newManager = await CommandLine.chooseEmployee(
            Queries.getAllEmployees()
          );

          // Run the query updating the employees manager_ID with the employee_ID of the selected manager.
          Queries.updateEmployeeManager(employeeId, newManager);
        } else if (answers.payrollAction === "View employees by manager") {
          // Select the manager from a list of employees. Return the employee_id of the selection entry.
          const managerId = await CommandLine.chooseEmployee(
            Queries.getAllEmployees()
          );

          // Run the query returning all employees managed by the selected employee.
          Queries.viewEmployeesByManager(managerId);
        } else if (answers.payrollAction === "View employees by role") {
          // Select the role from a list. Return the role_id
          const roleId = await CommandLine.chooseRole(Queries.getAllRoles());

          // Run the query showing all employees with selected role_id.
          Queries.viewEmployeesByRole(roleId);
        } else if (answers.payrollAction === "View employees by department") {
          // Select department from list. Return the department_id
          const deptId = await CommandLine.chooseDepartment(
            Queries.getAllDepartments()
          );
          // Run the query displaying all employees in said department
          Queries.viewEmployeesByDepartment(deptId);
        } else if (answers.payrollAction === "Delete a department") {
          // Select department from a list. Return department ID
          const deptId = await CommandLine.chooseDepartment(
            Queries.getAllDepartments()
          );

          // Run query deleting department based on dept_id. I might also need to delete every employee who is also in said department.
          Queries.deleteDepartment(deptId);
        } else if (answers.payrollAction === "Delete a role") {
          // Select Role from a list. Return role_id
          const roleId = await CommandLine.chooseDepartment(
            Queries.getAllRoles()
          );
          // Run query deleting role based on dept_id. It should probably return a message stating that they have all been fired.
          Queries.deleteRole(roleId);
        } else if (answers.payrollAction === "Delete an employee") {
          // select an employee from a list. Return the employee_id
          const empId = await CommandLine.chooseEmployee(
            Queries.getAllEmployees()
          );
          // Run a query deleting the employee by said ID
          Queries.deleteEmployee(empId);
        } else if (
          answers.payrollAction === "View total utilized budget by department"
        ) {
          // Select dept from a list. Return the dept_id
          const deptId = await CommandLine.chooseDepartment(
            Queries.getAllDepartments()
          );
          // Run the query calculating the Sum of all salaries with the cooresponding deptId
          Queries.viewTotalUtilizedBudgetByDepartment(deptId);
        } else if (answers.payrollAction === "Exit") {
          console.log("Goodbye!");
          process.exit();
        }
      });
  }
}
