INSERT INTO departments (department_name) VALUES
('Quality Assurance'),
('Human Resources'),
('Property Management'),
('Accounting'),
('Development');

INSERT INTO roles (role_title, role_salary, department_id) VALUES
('Chief Executive Officer', 200000, NULL), 
('QA Engineer', 80000, 1),
('HR Manager', 90000, 2),
('Property Manager', 70000, 3),
('Accountant', 60000, 4),
('Software Developer', 100000, 5),
('QA Lead', 95000, 1),
('HR Assistant', 50000, 2),
('Property Assistant', 40000, 3),
('Senior Accountant', 80000, 4),
('Lead Developer', 120000, 5),
('Project Manager', 110000, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES 
('Jonny', 'Miller', 11, 9),
('Angelina', 'Voight', 6, 11),
('Jesse', 'Bradford', 6, 11),
('Matthew', 'Lillard', 2, 9),
('Laurence', 'Mason', 3, 9),
('Renoly', 'Santiago', 7, 12),
('Fisher', 'Stevens', 3, 1),
('Alberta', 'Watson', 8, 3),
('Iain', 'Softley', 1, NULL),
('Darren', 'Lee', 4, 9),
('Alex', 'Shegstad', 6, 1),
('Peter', 'Kim', 12, 1),
('Ethan', 'Browne', 9, 10),
('Lorraine', 'Bracco', 5, 1),
('Wendell', 'Pierce', 10, 1),
('Michael', 'Gaston', 6, 1),
('Marc', 'Anthony', 8, 5);
