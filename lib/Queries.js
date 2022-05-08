// const Employee = require('./Employee.js');
const connection = require('../server.js');


// const Engineer = require('../lib/Engineer.js')

class HR {
    constructor(connection) {
        this.connection = connection;
    } 

    getDepartments() {
        return this.connection.promise().query('SELECT * FROM department');
    }

    addDepartment(departmentName) {
        return this.connection.promise().query('INSERT INTO department SET department_name = ?', departmentName);
    }

    getRoles() {
        return this.connection.promise().query('SELECT * FROM roleTable');
    }

    addRole(roleName, salaryFigure, roleDepartment) {
        return this.connection.promise().query('INSERT INTO roleTable SET roleTitle = ?, salary = ?, department_id = ?', [roleName, salaryFigure, roleDepartment]);
    }

    getId() {
        return this.id;
    }

    updateEmployee(employeeUpdated,roleUpdate) {
        return this.connection.promise().query('UPDATE employeeTable SET roleId = ? WHERE id = ?', [roleUpdate, employeeUpdated]);

        //ask for first name then last name WHERE first_name = ? AND last_name = ?
        //or LIST!
    }

   
}

module.exports = HR;
