// questions to start the program with
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

module.exports = managerQuestions;
