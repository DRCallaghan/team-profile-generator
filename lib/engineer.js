// importing the Employee class
const Employee = require('./employee');

// declaring the subclass Engineer
class Engineer extends Employee {
    // initial object construction with name, id, email, and office number
    constructor(name, id, email, github) {
        // using the super call function to take all data from the superclass
        super(name, id, email);
        this.github = github;
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

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

// exporting the Engineer class
module.exports = Engineer;
