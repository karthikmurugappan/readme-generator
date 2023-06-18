function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents


## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## How to Contribute

## Tests

## Contact
`
}

module.exports = {generateMarkdown};