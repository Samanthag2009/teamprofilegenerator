//TO DO: import path to engineer.js
const { exportAllDeclaration } = require('@babel/types');
const { it } = require('node:test');
const { describe } = require('yargs');
const Engineer = require('../lib/engineer');


//TO DO: Create testing suite for engineer.js
describe('Engineer', () => {
//Create a test to insure that fields are returning: github username, github link, and role as "Engineer"
    describe('Github Username', () => 
    {
        it('should return "Github Username"', () => 
        {
            const engineer = new Engineer('Samanthag2009');
            expect(engineer.getGithub).toBe('Samanthag2009'); 
        })
    });
    //describe other properties
    describe('Github Link', () => 
    {
       it('should return "Github profile link"', () => {

        const engineer = new Engineer('Samanthag2009', 'https://github.com/Samanthag2009')
        expect(engineer.gitHubLink).toBe('https://github.com/Samanthag2009')
       }) 
    });
    describe('role', () => 
    {
       it('should return "Engineer role"', () => {

        const engineer = new Engineer('Samanthag2009', 'https://github.com/Samanthag2009', 'engineer')
        expect(engineer.role).toBe('engineer')
       }) 
    });
    
    
});
