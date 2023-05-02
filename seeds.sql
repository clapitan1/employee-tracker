INSERT INTO department (id, name) VALUES
    (1, 'Sales'),
    (2, 'Engineering'),
    (3, 'Finance'),
    (4, 'Legal');

INSERT INTO role (id, title, salary, department_id) VALUES
    (1, 'Salesperson', 50000, 1),
    (2, 'Sales Manager', 80000, 1),
    (3, 'Software Engineer', 75000, 2),
    (4, 'Senior Software Engineer', 100000, 2),
    (5, 'Accountant', 60000, 3),
    (6, 'Financial Analyst', 85000, 3),
    (7, 'Lawyer', 120000, 4),
    (8, 'Legal Assistant', 55000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
    (1, 'John', 'Doe', 2, NULL),
    (2, 'Jane', 'Smith', 3, 1),
    (3, 'Bob', 'Johnson', 4, 1),
    (4, 'Alice', 'Williams', 5, 2),
    (5, 'Jack', 'Brown', 6, 3),
    (6, 'Karen', 'Davis', 7, NULL),
    (7, 'Peter', 'Lee', 8, 6);