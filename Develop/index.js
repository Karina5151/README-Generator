// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        message: 'What is the project title?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Enter a brief description of your project:',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What is the installation process?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'What is the usage for this project?',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'What license does this project use?',
        name: 'license',
        choices: ['BSD', 'MIT', 'IBM', 'GNU', '']
      },
      {
        type: 'input',
        message: 'Who are the contributors of this project?',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'What tests are included?',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitHubUsername',
      },
      {
        type: 'input',
        message: 'What is the project repo name in GitHub?',
        name: 'repo',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
];


// TODO: Create a function to write README file
function writeToFile(title, data) {

}

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
