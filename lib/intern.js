// importing the Employee class
const Employee = require('./employee');
const fs = require('fs');

// declaring the subclass Intern
class Intern extends Employee {
    // initial object construction with name, id, email, and office number
    constructor(name, id, email, school) {
        // using the super call function to take all data from the superclass
        super(name, id, email);
        this.school = school;
    }

    // creating methods to return all info
    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }

    generateCard = () => {
        fs.appendFile('./dist/index.html',
            `
                    <div class="intern card bg-secondary" style="width: 18rem; margin: 20px;">
                        <div class="card-body">
                            <h2 id="intern-name">${this.getName()} <span class="badge badge-primary">Intern</span></h2>
                            <ul class="list-group">
                                <li id="intern-id" class="list-group-item list-group-item-action">ID: ${this.getId()}</li>
                                <li id="intern-email" class="list-group-item list-group-item-action">
                                    Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a>
                                </li>
                                <li id="intern-office" class="list-group-item list-group-item-action">School: ${this.getSchool()}</li>
                            </ul>
                        </div>
                    </div>`,
            (err) => {
                if (err)
                    throw err;
                console.log(`\n----------------------------\nSuccessfully added to index.html!`);
            });
    }
}

// exporting the Intern class
module.exports = Intern;
