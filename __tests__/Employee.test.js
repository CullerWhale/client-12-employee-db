// const { TestWatcher } = require('jest');
// const { hasUncaughtExceptionCaptureCallback } = require('process');
// const { expect, jest } = require('@jest/globals');

//mock engineer data
const Engineer = require('../lib/Engineer.js');
jest.mock('../lib/Engineer.js');
console.log(new Engineer());




const Employee = require('../lib/Employee.js');
const { expect, test } = require('@jest/globals');
test ('creates an employee object', () => {
    const employee = new Employee('Cullen');

    expect(employee.name).toBe("Cullen");

    // expect(employee.engineer).toEqual(
    //     expect.arrayContaining([expect.any(Object)])
    //   );

    // expect(employee.getName()).toHaveProperty('name');
});


test('gets name from employee or returns false', () => {
    const employee = new Employee('Alfred');
    // const employeeName = employee.name;

    // expect(employee.getName()).toEqual(expect.any(Array));
    expect(employee.getName()).toEqual('Alfred');

});