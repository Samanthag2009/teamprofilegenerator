const fs = require('fs-extra')
    const inq = require('inquirer')
    const readLine = require('readline')
    const express = require('express')
const { identifier } = require('@babel/types')
    const app = express()
    const port = 3000
const readLine = require('readline')

class Employee {
    constructor(name, id, birthday, email, role) {
        this.name = name
        this.id = id
        this.birthday = birthday
        this.email = email
        this.role = role
    }
}


const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// question user
rl.question("Employee Name", (name) => {
    rl.question("Please enter Employee ID?", (id) => {
        rl.question("Employee Birthday MM/DD/YYY", (birthday) => {
            rl.question("Employee Email", (email) => {
                var answers = (`${name}`,`${id}`,`${birthday}`,`${email}`);
                console.log(`${name}`,`${id}`,`${birthday}`,`${email}`);
                    rl.close();
            });
        }); 
    });
});

const sam = new Employee(answers);

console.log(sam);