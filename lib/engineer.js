// importing the Employee class
const Employee = require('./employee');
const fs = require('fs');

// declaring the subclass Engineer
class Engineer extends Employee {
    // initial object construction with name, id, email, and office number
    constructor(name, id, email, github) {
        // using the super call function to take all data from the superclass
        super(name, id, email);
        this.github = github;
    }

    // creating methods to return all info
    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
    generateCard = () => {
        fs.appendFile('../dist/index.html',
            `
                    <div class="engineer card bg-secondary" style="width: 18rem; margin: 20px;">
                        <div class="card-body">
                            <h2 id="engineer-name">${this.getName()} <span class="badge badge-primary">Engineer</span></h2>
                            <ul class="list-group">
                                <li id="engineer-id" class="list-group-item list-group-item-action">ID: ${this.getId()}</li>
                                <li id="engineer-email" class="list-group-item list-group-item-action">
                                    Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a>
                                </li>
                                <li id="engineer-office" class="list-group-item list-group-item-action">Github: <a href="https://github.com/${this.getGithub()}">${this.getGithub()}</a></li>
                            </ul>
                        </div>
                    </div>`,
            (err) => {
                if (err)
                    throw err;
                console.log(`Successfully added to index.html!\n`);
            });
    }
}

// exporting the Engineer class
module.exports = Engineer;
