// Including packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const managerQuestions = [
    {
        type: 'input',
        name: `managerName`,
        message: `What is the name of your Manager?`,
        // validating that a name was given
        validate: managerName => {
            if (typeof managerName == 'string') {
                return true;
            } else {
                console.log('A Manager is required for your team.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: `managerId`,
        message: `What is the employee ID of your Manager?`,
        // validating that a number was given
        validate: managerId => {
            if (/^\d+$/.test(managerId)) {
                return true;
            } else {
                console.log('An ID number is required for your Manager.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: `managerEmail`,
        message: `What is the email address of your Manager?`,
        // validating that an email was given
        validate: managerEmail => {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(managerEmail)) {
                return true;
            } else {
                console.log('An email address is required for your Manager.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: `managerOffice`,
        message: `What is the office number of your Manager?`,
        // validating that a number was given
        validate: managerOffice => {
            if (/^\d+$/.test(managerOffice)) {
                return true;
            } else {
                console.log('An office number is required for your Manager.');
                return false;
            }
        }
    }
]

const questions = [
    {
        type: 'list',
        name: 'proceed',
        message: 'Would you like to add an Engineer, add an Intern, or finish?',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish'],
        default: 2
    },
    {
        type: 'input',
        name: `engineerName`,
        message: `What is the name of this engineer?`,
        // only asking this question when the user wants to add an engineer
        when(answers) {
            return answers.proceed === 'Add an Engineer'
        },
        // validating that a string was given
        validate: engineerName => {
            if (typeof engineerName == 'string') {
                return true;
            } else {
                console.log('A engineer is required for your team.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: `engineerId`,
        message: `What is the employee ID of this engineer?`,
        // only asking this question when the user wants to add an engineer
        when(answers) {
            return answers.proceed === 'Add an Engineer'
        },
        // validating that a number was given
        validate: engineerId => {
            if (/^\d+$/.test(engineerId)) {
                return true;
            } else {
                console.log('An ID number is required for your engineer.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: `engineerEmail`,
        message: `What is the email address of this engineer?`,
        // only asking this question when the user wants to add an engineer
        when(answers) {
            return answers.proceed === 'Add an Engineer'
        },
        // validating that an email was given
        validate: engineerEmail => {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(engineerEmail)) {
                return true;
            } else {
                console.log('An email address is required for your engineer.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: `engineerGithub`,
        message: `What is the github username of this engineer?`,
        // only asking this question when the user wants to add an engineer
        when(answers) {
            return answers.proceed === 'Add an Engineer'
        },
        // validating that a string was given
        validate: engineerGithub => {
            if (typeof engineerGithub == 'string') {
                return true;
            } else {
                console.log('A github username is required for your engineer.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: `internName`,
        message: `What is the name of this intern?`,
        // only asking this question when the user wants to add an intern
        when(answers) {
            return answers.proceed === 'Add an Intern'
        },
        // validating that a string was given
        validate: internName => {
            if (typeof internName == 'string') {
                return true;
            } else {
                console.log('A intern is required for your team.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: `internId`,
        message: `What is the employee ID of this intern?`,
        // only asking this question when the user wants to add an intern
        when(answers) {
            return answers.proceed === 'Add an Intern'
        },
        // validating that a number was given
        validate: internId => {
            if (/^\d+$/.test(internId)) {
                return true;
            } else {
                console.log('An ID number is required for your intern.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: `internEmail`,
        message: `What is the email address of this intern?`,
        // only asking this question when the user wants to add an intern
        when(answers) {
            return answers.proceed === 'Add an Intern'
        },
        // validating that an email was given
        validate: internEmail => {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(internEmail)) {
                return true;
            } else {
                console.log('An email address is required for your intern.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: `internSchool`,
        message: `What school does Intern  attend?`,
        // only asking this question when the user wants to add an intern
        when(answers) {
            return answers.proceed === 'Add an Intern'
        },
        // validating that a string was given
        validate: internSchool => {
            if (typeof internSchool == 'string') {
                return true;
            } else {
                console.log('A School is required for your intern.');
                return false;
            }
        }
    }
]

// generating html based off the manager data from user responses and appending it to index.html, as well as starting the html file
let generateManagerCard = (manager) => {
    fs.appendFile('./dist/index.html',
        `<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>My Team Cards</title>
    <link rel="stylesheet" href="style.css">
    <!-- ensuring it looks good on mobile -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- adding favicon -->
    <link rel="icon" type="image/x-icon" href="https://i.imgur.com/qpV5XuE.png">
    <!-- adding google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet">
    <!-- adding bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
    <!-- adding fontawesome icons -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
    integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
</head>

<body class="bg-dark">
    <header>
        <div class="jumbotron jumbotron-fluid bg-info text-center">
            <h1>My Team</h1>
        </div>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center">
                <div class="manager card bg-secondary" style="width: 18rem; margin: 20px;">
                    <div class="card-body">
                        <h2 id="manager-name">${manager.getName()} <span class="badge badge-primary">Manager</span></h2>
                        <ul class="list-group">
                            <li id="manager-id" class="list-group-item list-group-item-action">ID: ${manager.getId()}</li>
                            <li id="manager-email" class="list-group-item list-group-item-action">
                                Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                            </li>
                            <li id="manager-office" class="list-group-item list-group-item-action">Office Number: ${manager.getOffice()}</li>
                        </ul>
                    </div>
                </div>`,
        (err) => {
            if (err)
                throw err;
            console.log(`Successfully created index.html!`);
        });
}

// generating html based off the engineer data from user responses and appending it to index.html
let generateEngineerCard = (engineer) => {
    fs.appendFile('./dist/index.html',
        `                  <div class="engineer card bg-secondary" style="width: 18rem; margin: 20px;">
                    <div class="card-body">
                        <h2 id="engineer-name">${engineer.getName()} <span class="badge badge-primary">Engineer</span></h2>
                        <ul class="list-group">
                            <li id="engineer-id" class="list-group-item list-group-item-action">ID: ${engineer.getId()}</li>
                            <li id="engineer-email" class="list-group-item list-group-item-action">
                                Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                            </li>
                            <li id="engineer-office" class="list-group-item list-group-item-action">Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                        </ul>
                    </div>
                </div>`,
        (err) => {
            if (err)
                throw err;
            console.log(`Successfully added to index.html!`);
        });
}

// generating html based off the intern data from user responses and appending it to index.html
let generateInternCard = (intern) => {
    fs.appendFile('./dist/index.html',
        `                  <div class="intern card bg-secondary" style="width: 18rem; margin: 20px;">
                    <div class="card-body">
                        <h2 id="intern-name">${intern.getName()} <span class="badge badge-primary">Intern</span></h2>
                        <ul class="list-group">
                            <li id="intern-id" class="list-group-item list-group-item-action">ID: ${intern.getId()}</li>
                            <li id="intern-email" class="list-group-item list-group-item-action">
                                Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
                            </li>
                            <li id="intern-office" class="list-group-item list-group-item-action">School: ${intern.getSchool()}</li>
                        </ul>
                    </div>
                </div>`,
        (err) => {
            if (err)
                throw err;
            console.log(`Successfully added to index.html!`);
        });
}

// running all questions after the initial manager prompt
let getMembers = () => {
    inquirer
        .prompt(questions)
        .then((response) => {
            if (response.proceed == 'Add an Engineer') {
                // declaring a new Engineer based on the user input
                let newEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
                // generating a new html card for that Engineer
                generateEngineerCard(newEngineer);
                // running the prompt again
                getMembers();
            } else if (response.proceed == 'Add an Intern') {
                // declaring a new Intern based on the user input
                let newIntern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
                // generating a new html card for that Intern
                generateInternCard(newIntern);
                // running the prompt again
                getMembers();
            } else {
                fs.appendFile('./dist/index.html',
                    `
            </div>
        </div>
    </main>
</body>

</html>`,
                    (err) => {
                        if (err)
                            throw err;
                        console.log(`Successfully finished index.html!`);
                    });
            }
        });
}

let init = () => {
    inquirer
        .prompt(managerQuestions)
        .then((managerResponse) => {
            // declaring a new Manager based on the user input
            let newManager = new Manager(managerResponse.managerName, managerResponse.managerId, managerResponse.managerEmail, managerResponse.managerOffice);
            // generating a new html card for that Manager and starting index.html
            generateManagerCard(newManager);
            getMembers();
        });
}

init();
