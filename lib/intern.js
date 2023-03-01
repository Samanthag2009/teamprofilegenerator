//import employee path
const Intern = require('./intern');

//code to define and export the intern class

class Intern extends Employee {
    constructor(name, id, birthday, email, school) {
        super(name, id, birthday, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
//Over-ride for role
    getRole() {
        return "Intern";
    }
}

//export Intern subclass

module.exports = Intern;