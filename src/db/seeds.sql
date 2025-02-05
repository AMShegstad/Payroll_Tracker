INSERT INTO departments (id, department_name) VALUES
(1, 'Quality Assurance'),
(2, 'Human Resources'),
(3, 'Property Management'),
(4, 'Accounting'),
(5, 'Development');

INSERT INTO roles (role_id, role_title, role_salary, department_id) VALUES
(1, 'Chief Executive Officer', 200000, NULL), 
(2, 'QA Engineer', 80000, 1),
(3, 'HR Manager', 90000, 2),
(4, 'Property Manager', 70000, 3),
(5, 'Accountant', 60000, 4),
(6, 'Software Developer', 100000, 5),
(7, 'QA Lead', 95000, 1),
(8, 'HR Assistant', 50000, 2),
(9, 'Property Assistant', 40000, 3),
(10, 'Senior Accountant', 80000, 4),
(11, 'Lead Developer', 120000, 5),
(12, 'Project Manager', 110000, 1);

INSERT INTO employees (employee_id, first_name, last_name, role_id, manager_id) VALUES 
(1, 'Jonny', 'Miller', 11, 9),
(2, 'Angelina', 'Voight', 6, 11),
(3, 'Jesse', 'Bradford', 6, 11),
(4, 'Matthew', 'Lillard', 2, 9),
(5, 'Laurence', 'Mason', 3, 9),
(6, 'Renoly', 'Santiago', 7, 12),
(7, 'Fisher', 'Stevens', 3, 1),
(8, 'Alberta', 'Watson', 8, 3),
(9, 'Iain', 'Softley', 1, NULL),
(10, 'Darren', 'Lee', 4, 9),
(11, 'Alex', 'Shegstad', 6, 1),
(12, 'Peter', 'Kim', 12, 1),
(13, 'Ethan', 'Browne', 9, 10),
(14, 'Lorraine', 'Bracco', 5, 1),
(15, 'Wendell', 'Pierce', 10, 1),
(16, 'Michael', 'Gaston', 6, 1),
(17, 'Marc', 'Anthony', 8, 5);
