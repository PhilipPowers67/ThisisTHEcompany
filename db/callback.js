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
}
module.exports = new DB(db);
