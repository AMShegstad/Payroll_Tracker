DROP DATABASE IF EXISTS payroll_db;
CREATE DATABASE payroll_db;
\c payroll_db;

SELECT current_database();

CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    department_name VARCHAR(50) unique NOT NULL
);

CREATE TABLE roles (
    role_id SERIAL PRIMARY KEY,
    role_title VARCHAR(50) UNIQUE NOT NULL,
    role_salary DECIMAL NOT NULL,
    department_id INTEGER,
    FOREIGN KEY (department_id) REFERENCES departments(id)
    ON DELETE CASCADE
);

CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES roles(role_id) ON DELETE SET NULL,
    FOREIGN KEY (manager_id) REFERENCES employees(employee_id) ON DELETE CASCADE
);