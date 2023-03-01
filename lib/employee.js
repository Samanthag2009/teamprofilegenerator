// define and export the employee parent class
//define parent class Employee
class Employee {
        constructor(name, id, birthday, email, role) {
            this.name = name
            this.id = id
            this.birthday = birthday
            this.email = email
        }
        
        getName() {
            return this.name;
        }
        getId() {
            return this.id;
        }
        getBirthday() {
            return this.birthday;
        }
        getEmail() {
            return this.email;
        }
        //roles are determined seperately as child classes will need to be over-ridden
        getRole() {
            return "Employee";
        }
    }

//export parent class "Employee"
module.exports = Employee;