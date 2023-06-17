// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const md = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, md.generateMarkdown(data), (err) => 
        err ? console.log(err) : console.log("Success")
    );
}

// TODO: Create a function to initialize app
async function init() {
    inquirer.prompt(questions)
        .then((response) => {
            writeToFile('README-Generated.md', response);
        })
}

// Function call to initialize app
init();