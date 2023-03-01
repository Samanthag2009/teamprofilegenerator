//Manager
            //extend employee
            //officeNumber
            //getRole() //overridden to return "manager"
//import employee path
const Manager = require('./manager');

//code to define and export the manager class

class Manager extends Employee {
    constructor(name, id, birthday, email, officeNumber) {
        super(name, id, birthday, email);
        this.officeNumber= officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
//Over-ride for role
    getRole() {
        return "Manager";
    }
}

//export manager subclass

module.exports = Manager;