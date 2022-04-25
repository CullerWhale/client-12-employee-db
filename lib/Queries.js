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

    getId() {
        return this.id
    }

   
}

module.exports = HR;