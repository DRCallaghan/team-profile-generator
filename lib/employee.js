// declaring the primary class employee
class Employee {
    // initial object construction with name, id, and email
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // creating a method to return the name, id, email, and role of any employee
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
        return 'Employee';
    }
}

// exporting the Employee class
module.exports = Employee;
