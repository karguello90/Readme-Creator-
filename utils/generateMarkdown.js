// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
## description
${data.description} 

## installation
${data.installation}

## usage
${data.usage}

## license
${data.license}

## contribution
${data.contribution}

## tests
${data.tests}

## questions
for any questions please reach out to me at${data.email}
or checkout my github at ${data.github}

`;
}

module.exports = generateMarkdown;
