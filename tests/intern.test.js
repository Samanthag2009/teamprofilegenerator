//import path to intern.js
const { exportAllDeclaration } = require('@babel/types');
const { it } = require('node:test');
const { describe } = require('yargs');
const Intern = require('../lib/intern');


//Create testing suite for intern.js
describe('Engineer', () => {
//Create a test to insure that fields are returning: school and role as "intern"
    describe('School', () => 
    {
        it('should return "School"', () => 
        {
            const intern = new Intern('Texas State');
            expect(intern.school).toBe('Texas State'); 
        })
    });
    //describe other properties
    describe('role', () => 
    {
       it('should return "Intern role"', () => {

        const intern = new Intern('Texas State', 'Intern')
        expect(intern.role).toBe('Intern')
       }) 
    });
    
    
});