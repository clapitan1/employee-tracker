# employee-tracker

This is a command-line application that allows you to manage employee data. The application is built using Node.js, Inquirer, and MySQL.

index.js:

The index.js file is the main entry point of the command-line application.
It uses the inquirer and mysql packages to prompt the user for input and interact with a MySQL database.
The file contains functions to perform various operations on the database, such as viewing all departments, roles, and employees, adding a department, role, or employee, and updating an employee's role.
The functions use SQL queries to retrieve and manipulate data in the database.

SQL schema and seeds:

The SQL schema defines the structure of the database tables, including their columns and data types.
The SQL seeds populate the tables with initial data.
The schema and seeds files ensure that the database is created and populated with the necessary data when the application is run.
The department, role, and employee tables are related to each other through foreign keys, which allows for efficient retrieval of related data.

Creditfor these sites to help me create this master piece: 
1. https://www.npmjs.com/package/mysql2?activeTab=readme
2. https://www.w3schools.com/nodejs/nodejs_mysql.asp
3. https://www.w3schools.com/js/js_switch.asp
4. https://stackoverflow.com/questions/48692039/how-to-use-n-in-a-javascript-string

video demonstration:
