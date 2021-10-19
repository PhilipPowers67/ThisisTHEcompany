const express = require("express");
const connection = require("./db/connection");
require("console.table");
const inquirer = require("inquirer");
require("mysql");
require("mysql2");
// const callback = require("./db/callback");

const PORT = process.env.PORT || 3001;
const app = express();

connection.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  prompt();
});

// BEGIN PROMPT

function prompt() {
  inquirer
    .prompt({
      type: "list",
      message: "What would you like to do?",
      name: "startingChoice",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add A Department",
        "Add New Roles",
        "Add An Employee",
        "Update An Employee Role",
        "EXIT",
      ],
    })
    .then((answers) => {
      switch (answers.startingChoice) {
        case "View All Departments":
          viewAllDepartments();
          break;

        case "View All Roles":
          viewAllRoles();
          break;

        case "View All Employees":
          viewAllEmployees();
          break;

        case "Add A Department":
          newDepartment();
          break;

        case "Add New Roles":
          addNewRole();
          break;

        case "Add An Employee":
          addNewEmployee();
          break;

        case "Update An Employee Role":
          updateEmployeeRole();
          break;

        case "EXIT":
          connection.end();
          break;
      }
    });
}

//View all Departments
function viewAllDepartments() {
  const sql = `SELECT * FROM departments`;
  connection.query(sql, (err, res) => {
    console.table(res);
    prompt();
  });
}

//View all Roles
function viewAllRoles() {
  const sql = `SELECT * FROM roles`;
  connection.query(sql, (err, res) => {
    console.table(res);
    prompt();
  });
}

//View all Employees
function viewAllEmployees() {
  const sql = `SELECT * FROM employees`;
  connection.query(sql, (err, res) => {
    console.table(res);
    prompt();
  });
}

//Add a Department
function newDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "addDep",
        message: "What department would you like to add?",
      },
    ])
    .then((answer) => {
      const sql = `INSERT INTO departments (department_name)
                 VALUES (?)`;
      connection.query(sql, answer.addDep, (err, result) => {
        if (err) throw err;
        viewAllDepartments();
      });
    });
}

function addNewEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "new_first_name",
        message: "What is this employees first name?",
      },
      {
        type: "input",
        name: "new_last_name",
        message: "What is this employees last name?",
      },
      {
        type:"input",
        name:"new_job_title",
        message:"What is this employees job title?"
      },
      {
        type: "input",
        name: "employeeRole",
        message: "What role ID does this employee have?",
      },
      {
        type: "input",
        name: "employeeManager",
        message: "Who is this employees manager?",
      },
    ])
    .then((answers) => {
      const sql = `INSERT INTO employees (first_name, last_name, job_title, roles_id, manager_id)
                 VALUES (?,?,?,?,?)`;
      const params = [
        answers.new_first_name,
        answers.new_last_name,
        answers.new_job_title,
        answers.employeeRole,
        answers.employeeManager
      ];
      connection.query(sql, params, (err, rows) => {
        if (err) {
          throw err;
        }
        viewAllEmployees();
        console.table(rows);
        prompt();
      })
    });
}

function addNewRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "new_title",
        message: "What is this new role?",
      },
      {
        type: "input",
        name: "new_salary",
        message: "What is this roles salary?",
      },
      {
        type:"input",
        name:"new_department_ID",
        message:"What is this roles department ID?"
      }
    ])
    .then((answers) => {
      const sql = `INSERT INTO roles (title, salary, department_id)
                 VALUES (?,?,?)`;
      const params = [
        answers.new_title,
        answers.new_salary,
        answers.new_department_ID
      ];
      connection.query(sql, params, (err, rows) => {
        if (err) {
          throw err;
        }
        viewAllRoles();
        console.table(rows);
        prompt();
      })
    });
}

function updateEmployeeRole() {
  
}
