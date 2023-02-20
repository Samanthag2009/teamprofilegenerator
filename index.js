// command line application with user input
    //TO DO: Import appplicable modules (fs extra, inquirer, http, jest)
    const fs = require('fs-extra')
    const inq = require('inquirer')
    const readLine = require('readline')
    const express = require('express')
const { identifier } = require('@babel/types')
    const app = express()
    const port = 3000

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
    class Employee {
        constructor(name, id, birthday, email, role) {
            this.name = name
            this.id = id
            this.birthday = birthday
            this.email = email
            this.role = role
        }
    }

    const newEmployee = new Employee(
        getName(),
        getId(),
        getBirthday(),
        getEmail(),
        getRole(),
    );
    //**********TO DO**************
        //look up how to get information from input and addit to a class
   

        //Manager
            //extend employee
            //officeNumber
            //getRole() //overridden to return "manager"
        //Engineer
            //extend employee
            //github //github username
            //getGithub()
            //getRole() //overriden to return "engineer"
        //Intern
            //extend employee
            //school
            //getSchool()
            //gerRole() overridden to return "Intern"

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