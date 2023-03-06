// command line application with user input
    //TO DO: Import appplicable modules (fs extra, inquirer, jest)
    const fs = require('fs-extra')
    const inq = require('inquirer')
    const readLine = require('readline')
    const express = require('express')
const { identifier } = require('@babel/types')
const { default: inquirer } = require('inquirer')
    const app = express()
const team = []
    
// function to build a manager
//the idea is to use prompt and then push to create an array that will then be used to generate a new HTML Document

async function newManager() {
const managerObj = await inquirer.prompt(
    [
        {
            type: 'input',
            name: 'managerName',
            message: "What is the manager's name?",
        },
        {
            type: 'input',
            name: 'managerID',
            message: "What is the manager's employee ID?",
        },
        {
            type: 'input',
            name: 'managerBirthday',
            message: "What is the manager's birthday?",
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the manager's email address?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
        },
    ]
    ) 
    const managerObj = {managerName, managerID, managerBirthday, managerEmail, officeNumber};
    const manager = new Manager(managerName, managerID, managerBirthday, managerEmail, officeNumber);
    team.push(manager)

}



//input is then generated into an HTML file
    //TO DO: create server function

    // TO DO: Create classes: (tests must all pass)
        //Employee
            //parent class with following properties and methods:
            //name
            //ID
            //Birthday
            //Email
            //getName()
            //getID()
            //getEmail()
            //getRole() //returns "Employee"
    // class Employee {
    //     constructor(name, id, birthday, email, role) {
    //         this.name = name
    //         this.id = id
    //         this.birthday = birthday
    //         this.email = email
    //         this.role = role
    //     }
    // }


    //**********TO DO**************
        //look up how to get information from input and addit to a class

// features:
//E-mail: links to default email application with to field populated
//github username: opens a profile in a new tab

//on start:
//prompted to enter
    //Team manager's name
    //employee ID
    //Email address
    //Office Number

//Then:
//Option Menu:
    //add an engineer
        //Prompt:
        //Name
        //Birthday
        //ID
        //Email
        //GitHub Username
        //>Taken back to the option menu
    //add an intern
        //Name
        //ID
        //Birthday
        //Email
        //School
        //>Taken back to option menu
    //finish building team
        //Application ends
        //Displays success message
        //HTML is generated