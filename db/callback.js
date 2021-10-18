const inquirer = require("inquirer");
const db = require("./connection");
class DB {
  constructor(db) {
    this.db = db;
  }
  findAllDepartments() {
    return this.db.promise().query("SELECT * FROM departments");
  }
  findAllRoles() {
      return this.db.promise().query("SELECT * FROM roles");
  }
  findAllEmployees() {
      return this.db.promise().query("SELECT * FROM employees");
  }
  addNewDepartment = () => {
    inquirer.prompt([
      {
        type: "input",
        name: "newDep",
        message: "What Department would you like to add?"
      }
    ])
      // .then(answer => {
      //   const sql = `INSERT INTO DEPARTMENT (name)
      //                 VALUE (?)`;
      //   connection.query(sql, answer.newDep, (err, result) => {
      //     if (err) throw err;
      //     console.log('ADDED ' + answer.newDep + ' to department table');
      //     findAllDepartments();
      //   })
      // })
  }
}
module.exports = new DB(db);
