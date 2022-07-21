// Including packages needed for this application
const inquirer = require('inquirer');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const startHtml = require('./src/startHtml.js');
const endHtml = require('./src/endHtml.js');
const questions = require('./src/questions.js');
const managerQuestions = require('./src/managerQuestions.js');

let getMembers = () => {
    inquirer
        .prompt(questions)
        .then((response) => {
            if (response.proceed == 'Add an Engineer') {
                // declaring a new Engineer based on the user input
                let newEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
                // generating a new html card for that Engineer
                newEngineer.generateCard();
                // running the prompt again
                getMembers();
            } else if (response.proceed == 'Add an Intern') {
                // declaring a new Intern based on the user input
                let newIntern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
                // generating a new html card for that Intern
                newIntern.generateCard();
                // running the prompt again
                getMembers();
            } else {
                endHtml();
            }
        });
}

let init = () => {
    inquirer
        .prompt(managerQuestions)
        .then((managerResponse) => {
            getMembers();
            // declaring a new Manager based on the user input
            let newManager = new Manager(managerResponse.managerName, managerResponse.managerId, managerResponse.managerEmail, managerResponse.managerOffice);
            // generating a new html card for that Manager and starting index.html
            newManager.generateCard();
            startHtml();
        })
}

init();
