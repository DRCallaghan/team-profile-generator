// Including packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const startingQuestions = [
    // team manager
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the name of the Manager on your team? (Required)',
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
        name: 'managerId',
        message: 'What is the employee ID of the Manager on your team? (Required)',
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
        name: 'managerEmail',
        message: 'What is the email address of the Manager on your team? (Required)',
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
        name: 'managerOffice',
        message: 'What is the office number of the Manager on your team? (Required)',
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

const engineerQuestions = [
    // engineer
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the name of the engineer on your team? (Required)',
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
        name: 'engineerId',
        message: 'What is the employee ID of the engineer on your team? (Required)',
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
        name: 'engineerEmail',
        message: 'What is the email address of the engineer on your team? (Required)',
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
        name: 'engineerGithub',
        message: 'What is the github username of the engineer on your team? (Required)',
        validate: engineerGithub => {
            if (typeof engineerGithub == 'string') {
                return true;
            } else {
                console.log('A github username is required for your engineer.');
                return false;
            }
        }
    }
]

const internQuestions = [
    // intern
    {
        type: 'input',
        name: 'internName',
        message: 'What is the name of the intern on your team? (Required)',
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
        name: 'internId',
        message: 'What is the employee ID of the intern on your team? (Required)',
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
        name: 'internEmail',
        message: 'What is the email address of the intern on your team? (Required)',
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
        name: 'internSchool',
        message: 'What is the School of the intern on your team? (Required)',
        validate: internSchool => {
            if (typeof internSchool == 'string') {
                return true;
            } else {
                console.log('A School is required for your intern.');
                return false;
            }
        }
    },
]

const loopQuestion = [
    // choose another employee to add or close program
    {
        type: 'list',
        name: 'proceed',
        message: 'Please choose another employee type to add, finish, or close the program without finishing.',
        choices: [
            'Add Engineer',
            'Add Intern',
            'Finish',
            'Close without Finishing'
        ],
        default: 0
    }
]

let loopPrompt = () => {
    inquirer
        .prompt(loopQuestion)
        .then((loopResponse) => {
            if (loopResponse.proceed === 'Add Engineer') {
                engineerPrompt();
            } else if (loopResponse.proceed === 'Add Intern') {
                internPrompt();
            } else if (loopResponse.proceed === 'Finish') {
                createHtml();
            }
        })
}

let engineerPrompt = () => {
    inquirer
        .prompt(engineerQuestions)
        .then((engineerResponse) => {
            console.log(engineerResponse);
            loopPrompt();
        });
}

let internPrompt = () => {
    inquirer
        .prompt(internQuestions)
        .then((internResponse) => {
            console.log(internResponse);
            loopPrompt();
        });
}

let init = () => {
    inquirer
        .prompt(startingQuestions)
        .then((response) => {
            console.log(response);
            let myManager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice);
            console.log(myManager);
        });
}

init();
