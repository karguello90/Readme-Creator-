// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer")
const fs = require("fs")
// TODO: Create an array of questions for user input
//need to add questions for installation, usage, license, contribution, tests, email, github

const questions = [
    {
       type: "input", 
       name: "title",
       message: "Please enter name of application.",
    }, 
    {
        type: "input",
        name: "description",
        message: "Please give a brief description of the application."
    }, 
    {
        type: "input",
        name: "installation",
        message: "Please inlcude any installation instructions for the application"
    }, 
    {
        type: "input",
        name: "usage",
        message: "Please inlcude any usage instructions for the application"
    }, 
    {
        type: "list",
        name: "license",
        message: "Please select a license for the application", 
        choices: ["MIT", "Apache", "Mozzila", "Boost", "NONE"]
    }, 
    {
        type: "input",
        name: "contribution",
        message: "Please select contirbutions for the application"
    }, 
    {
        type: "input",
        name: "tests",
        message: "Please select tests for the application"
    }, 
    {
        type: "input",
        name: "email",
        message: "Please include an email for the application"
    }, 

    {
        type: "input",
        name: "github",
        message: "Please include a github for the application"
    }, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response=>{
        fs.writeFileSync("readme4.md", generateMarkdown (response))
    })
}

// Function call to initialize app
init();
