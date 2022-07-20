// importing the Employee class
const Employee = require('./employee');

// declaring the subclass Intern
class Intern extends Employee {
    // initial object construction with name, id, email, and office number
    constructor(name, id, email, school) {
        // using the super call function to take all data from the superclass
        super(name, id, email);
        this.school = school;
    }

    // creating methods to return all info
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

// exporting the Intern class
module.exports = Intern;
