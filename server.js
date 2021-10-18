const express = require("express");
const connection = require("./db/connection");
require("console.table");
const inquirer = require("inquirer");
require("mysql");
require("mysql2");
const callback = require("./db/callback");
const { connect } = require("./db/connection");

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
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "startingChoice",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add A Department",
          "Add A Role",
          "Add An Employee",
          "Update An Employee Role",
        ],
      },
    ])
    .then((answers) => {
      let choice = answers.startingChoice;
      switch (choice) {
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
        case "Add a Role":
          addNewRole();
          break;
        case "Add An Employee":
          addNewEmployee();
          break;
        case "Update An Employee Role":
          updateEmployeeRole();
          break;
      }
    });
}

//View all Departments
function viewAllDepartments() {
  callback.findAllDepartments().then(([rows]) => {
    console.table(rows);
    prompt();
  });
}

//View all Roles
function viewAllRoles() {
  callback.findAllRoles().then(([rows]) => {
    console.table(rows);
    prompt();
  });
}

//View all Employees
function viewAllEmployees() {
  callback.findAllEmployees().then(([rows]) => {
    console.table(rows);
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

//Add New Employee
function addNewEmployee() {
  inquirer.prompt([
    {
      type:'input',
      name:'firstName',
      message:'What is this employees first name?'
    },
    {
      type:'input',
      name:'lastName',
      message:'What is this employees last name?'
    },
    {
      type:'list',
      name:'jobTitle',
      message:'What is this employees role?',
      choices:''
    }
  ])
}

// Add a Role
function addNewRole() {
}