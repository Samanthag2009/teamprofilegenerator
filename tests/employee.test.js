//Import path to employee.js
const { exportAllDeclaration } = require('@babel/types');
const { it } = require('node:test');
const { describe } = require('yargs');
const Employee = require('../lib/employee');


//Create testing suite for employee.js
describe('Employee', () => {
//Create a test to insure that fields are returning, including role as "Employee"
    describe('name', () => 
    {
        it('should return "Employee name"', () => 
        {
            const employee = new Employee('Sam');
            expect(employee.name).toBe('Sam'); 
        })
    });
    //describe other properties
    describe('id', () => 
    {
       it('should return "Employee ID"', () => {

        const employee = new Employee('Sam', '1234')
        expect(employee.id).toBe('1234')
       }) 
    });
    describe('birthday', () => 
    {
       it('should return "Employee birthday"', () => {

        const employee = new Employee('Sam', '1234', '02/03/1991')
        expect(employee.birthday).toBe('02/03/1991')
       })    
    });
    describe('email', () => 
    {
       it('should return "Employee email"', () => {

        const employee = new Employee('Sam', '1234', '02/03/1991', 'email@email.com')
        expect(employee.email).toBe('email@email.com')
       }) 
    });
    describe('role', () => 
    {
       it('should return "Employee role"', () => {

        const employee = new Employee('Sam', '1234', '02/03/1991', 'email@email.com', 'employee')
        expect(employee.role).toBe('employee')
       }) 
    });
    
    
})
//