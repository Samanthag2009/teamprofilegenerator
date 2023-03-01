//import employee path
const Employee = require('./employee');

//code to define and export the child engineer class

class Engineer extends Employee {
    constructor(name, id, birthday, email, github, githubLink) {
        super(name, id, birthday, email);
        this.github = github;
        this.githubLink = 'https://github.com/'+github;
    }
    getGithub() {
        return this.github;
    }
//Over-ride for role
    getRole() {
        return "Engineer";
    }
}

//export Engineer subclass

module.exports = Engineer;