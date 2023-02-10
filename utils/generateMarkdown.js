// Created a function that returns a license based on which license is passed in.
// If there is no license, application returns an empty string.
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === "Mozzila") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else if (license === "Boost") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
  else {
    return ``
  }
}

// Created a function that returns the license link.
// If there is no license, returns an empty string.
function renderLicenseLink(license) {}

// Created a function that returns the license section of README.
// If there is no license, returns an empty string.
function renderLicenseSection(license) {}

// Created a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ${renderLicenseBadge(data.license)}
 ## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contribution](#contribution)
5. [Screenshots](#screenshots)
5. [Tests](#tests)
6. [License](#license)
7. [Questions](#questions)

## Description:
${data.description} 

## Installation:
${data.installation}

## Usage:
${data.usage}

## License:
${data.license}

## Contribution:
${data.contribution}

## Screenshots:
${data.screenshots}

## Tests:
${data.tests}

## Questions:
for any questions please reach out to me at ${data.email}
or checkout my github at http://github.com/${data.github}

`;
}

module.exports = generateMarkdown;
