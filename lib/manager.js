// importing the Employee class
const Employee = require('./employee');

// declaring the subclass Manager
class Manager extends Employee {
    // initial object construction with name, id, email, and office number
    constructor(name, id, email, officeNumber) {
        // using the super call function to take all data from the superclass
        super(name, id, email);
        this.officeNumber = officeNumber;
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

    getRole() {
        return 'Manager';
    }
}

// exporting the Manager class
module.exports = Manager;
