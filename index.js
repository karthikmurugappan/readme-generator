const inquirer = require('inquirer');
const fs = require('fs');
const md = require('./utils/generateMarkdown.js');

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
        type: 'list',
        name: 'license',
        message: "Please select a license",
        choices: [
        {
            name: 'MIT',
        },
        {
            name: 'Apache',
        },
        {
            name: 'GNU General Public',
        },
        {
            name: 'Boost Software',
        },
        {
            name: 'Eclipse',
        },
        {
            name: 'none',
        },
        ],
    },
    {
        type: 'list',
        name: 'collaborators',
        message: "Did you work with any Collaborators",
        choices: ['Yes', 'No'],
    },
    {
        type: 'input',
        name: 'collabNames',
        message: 'Please list the names of the Collaborators',
        when: (response) => response.collaborators === 'Yes',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please provide Testing Instructions'
    },
    {
        type: 'input',
        name: 'github',
        message: "Please provide your GitHub Username",
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your Email',
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, md.generateMarkdown(data), (err) => 
        err ? console.log(err) : console.log("Success")
    );
}

async function init() {
    inquirer.prompt(questions)
        .then((response) => {
            writeToFile('README-Generated.md', response);
        })
}

init();