// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is your favorite animal?',
        name: 'animal',
      },
      {
        type: 'list',
        message: 'What is your favorite color?',
        name: 'color',
        choices: ['green', 'blue', 'purple', 'red']
      },
      {
        type: 'list',
        message: 'What is your favorite season?',
        name: 'season',
        choices: ['winter', 'summer', 'spring', 'fall']
      },
      {
        type: 'checkbox',
        message: 'Which pets do you like?',
        name: 'pets',
        choices: ['dog', 'cat', 'bunny', 'bird']
      },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then( response => {
        const createReadMe = generateMarkdown(response);

        fs.writeFile('README.md', createReadMe, (err) =>
        err ? console.log(err) : console.log('You have successfully created a Markdown File!')
        );
    });
}

// Function call to initialize app
init();
