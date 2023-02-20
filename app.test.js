//TO DO: import path to index.js
const { exportAllDeclaration } = require('@babel/types');
const { it } = require('node:test');
const { describe } = require('yargs');
const Employee = require('./index.js');


//TO DO: Create testing suite for index.js
describe('Employee', () => {
//Create a test to insure that fields are returning, including role as "Employee"
    describe('role', () => 
    {
        it('should return "Employee"', () => 
        {
            const employee = 'Employee';
            const employeeRole = new Employee();
            expect(employee.role()).toEqual('Employee'); 
        })
    })
    //describe other properties
})
//