// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: ['None', 'Apache License 2.0','MIT', 'GPL v3.0'],
        validate: licenseInput = () => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Select a license from the options.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please add a description of your project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please add a description of your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What steps are needed to install your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please add installation steps for your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the use of your project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('What is the use of your project?');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'How can others contribute to your project?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('How can others contribute to your project?');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test your project?',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Explain how to test your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What is your Github username so others can reach out with questions?',
        validate: questionsInput => {
            if (questionsInput) {
                return true;
            } else {
                console.log('What is your Github so others can reach out with questions?');
                return false;
            }
        }   
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('What is your email address?');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generatedREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            } 
            resolve({
                ok: true
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answer) {
        console.log(answer);
    var fileContent = generateMarkdown(answer);
    writeToFile(fileContent)
    });
}

// Function call to initialize app
init();

module.exports = questions;