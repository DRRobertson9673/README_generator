const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        name: "title",
        message: "Please enter your project title",
        type: "input"
    },
    {
        name: "description",
        message: "Please enter a description for your project",
        type: "input"
    },
    {
        name: "installation",
        message: "How should your project be installed?",
        type: "input"
    },
    {
        name: "usage",
        message: "How is your project used?",
        type: "input"
    },
    {
        name: "license",
        message: "What license does your project have?",
        choices: ["MIT", "GPLv2", "Apache", "GPLv3", "Other", "None"],
        type: "list"
    },
    {
        name: "contributing",
        message: "Who contributed to your project?",
        type: "input"
    },
    {
        name: "gitHub",
        message: "What is your GitHub username?",
        type: "input"
    },
    {
        name: "email",
        message: "What is your email address?",
        type: "input"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', readmeData, (err) =>
        err ? console.error(err) : console.log('Your README has been created!'))
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            readmeData = generateMarkdown(answers);
            writeToFile()
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log('tsty error');
                // Prompt couldn't be rendered in the current environment
            } else {
                console.log("something went wrong")
                // Something else went wrong
            }
        });
}

// function call to initialize program
init();