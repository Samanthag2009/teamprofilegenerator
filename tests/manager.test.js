//import path to intern.js
const { exportAllDeclaration } = require('@babel/types');
const { it } = require('node:test');
const { describe } = require('yargs');
const Manager = require('../lib/manager.js');


//Create testing suite for intern.js
describe('Manager', () => {
//Create a test to insure that fields are returning: school and role as "intern"
    describe('Office Number', () => 
    {
        it('should return "Office Number"', () => 
        {
            const manager = new Manager('42');
            expect(manager.officeNumber).toBe('42'); 
        })
    });
    //describe other properties
    describe('role', () => 
    {
       it('should return "Manager role"', () => {

        const manager = new Manager('42', 'Manager')
        expect(intern.role).toBe('Manager')
       }) 
    });
    
    
});