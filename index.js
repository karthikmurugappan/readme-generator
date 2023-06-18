// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const md = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please provide the title for the project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation notes',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions to effectively use project',
    },
    {
        type: 'input',
        name: 'license',
        message: "Please select a license",
        choices: [
        {
            name: 'MIT',
            value: {
                name: 'MIT',
                badgeID: 'MIT',
                link: 'https://opensource.org/licenses/MIT',
            },
        },
        {
            name: 'Apache',
            value: {
                name: 'Apache',
                badgeID: 'Apache_2.0',
                link: 'https://opensource.org/licenses/MIT',
            },
        },
        {
            name: 'GNU',
            value: {
                name: 'GNU',
                badgeID: 'GPLv3',
                link: 'https://www.gnu.org/licenses/gpl-3.0',
            },
        },
        {
            name: 'none',
            value: {
                name: 'none',
                badgeID: 'none',
                link: 'none',
            },
        },
        ],
    },
    {
        type: 'list',
        name: 'collaborators',
        message: "Did you work with any collaborators",
        choices: ['Yes', 'No'],
    },
    {
        type: 'input',
        name: 'collabNames',
        message: 'Please list the names of the collaborators',
        when: (response) => response.collaborators === 'Yes',
    },
    {
        type: 'input',
        name: 'github',
        message: "Please provide your GitHub username",
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your Email',
    },

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