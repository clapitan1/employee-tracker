const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user: "root",
    password: "Bluebelle1!",
    database: "employee_db",
});

connection.connect((err) => {
    if(err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
});

function start() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "action",
                message: "What would you like to do?",
                choices: [
                    "View all departments",
                    "View all roles",
                    "View all employees",
                    "Add a department",
                    "Add a role",
                    "Add an employee",
                    "Update an employee role",
                    "Exit",
                ],
            },
        ])
        .then((answer) => {
            switch (answer.action) {
                case "View all departments":
                    viewDepartments();
                    break;

                case "View all roles":
                    viewRoles();
                    break;

                case "View all employees":
                    viewEmployees();
                    break;

                case "Add a department":
                    addDepartment();
                    break;

                case "Add a role":
                    addRole();
                    break;

                case "Add an employee":
                    addEmployee();
                    break;

                case "Update an employee role":
                    updateEmployeeRole();
                    break;

                case "Exit":
                    connection.end();
                    break;
            }
        });
}

function viewDepartments() {
    const query = "SELECT * FROM department";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
}

function viewRoles() {
    const query = "SELECT role.id, role.title, department.name AS department, role.salary FROM role INNER JOIN department ON role.department_id = department.id";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
}

function viewEmployees() {
    const query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.manager_id = manager.id";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
}

function addDepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the name of the department?",
            },
        ])
        .then((answer) => {
            const query = "INSERT INTO department SET ?";
            connection.query(query, { name: answer.name }, (err, res) => {
                if (err) throw err;
                console.log(res.affectedRows + " department added!\n");
                start();
            });
        });
}

function addRole() {
    const query = "SELECT * FROM department";
    connection.query(query, (err, res) => {
        if (err) {
            throw err;
        }
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "title",
                    message: "What is the title of the role?",
                },
                {
                    type: "inpit",
                    name: "salary",
                    message: "What is the salary for this role?",
                },
                {
                    type: "list",
                    name: "department",
                    message: "Which department does this role belong to?",
                    choices: res.map((department) => department.name),
                },
            ])
            .then((asnwer) => {
                const department = res.find(
                    (department) => department.name === answer.department
                );

                const query = "INSERT INTO role SET ?";
                const values = {
                    title: answer.title,
                    salary: answer.salary,
                    department_id: department.id,
                };

                connection.query(query, values, (err, res) => {
                    if (err) {
                        throw err;
                    }
                    console.log('${answer.title} role has been added!');
                    startApp();
                });
            });
    });
}