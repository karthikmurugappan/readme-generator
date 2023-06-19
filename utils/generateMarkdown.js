function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#License)
4. [Collaborators](#Collaborators)
5. [Testing](#Testing)
6. [Contact](#Contact)

## Installation <a name = "Installation"></a>
${data.installation}

## Usage <a name = "Usage"></a>
${data.usage}

## License <a name = "License"></a>
${data.license}

## Collaborators <a name = "Collaborators"></a>
${data.collabNames}

## Testing <a name = "Testing"></a>
${data.testing}

## Contact <a name = "Contact"></a>
If you have any questions or concerns, please Email me at: ${data.email}. Feel free to check my Github Profile as well: [${data.github}](https://github.com/${data.github}).
`
}

module.exports = {generateMarkdown};