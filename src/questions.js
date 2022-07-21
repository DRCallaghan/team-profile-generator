// all other questions for user input. changes depending on answer to proceed
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

module.exports = questions;