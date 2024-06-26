// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
   {
    type: "input",
    name: "title",
    message: "Name of your project?",
   },

  {
    type: "input",
    name: "description",
    message: "Provide a description on the purpose of your project.",
   },

   {
    type: "checkbox",
    name: "usage",
    message: "State the languages or technologies associated with this project.",
    choices: ["HTML", "CSS", "JavaScript", "Node.js", "Phython", "JSON", "None"],
   },

   {
    type: "input",
    name: "license",
    message: "Select a license applicable to this project.",
    
    type: "input",
    name: "contributing",
    message: "What is your GitHub username?",
   },

   {
    type: "input",
    name: "name",
    message: "What Is Your Name?"
   },

   {
    type: "input",
    name: "email",
    messsage: "Provide a valid email address.",
  },  

  {
    type: "input",
    name: "testing"
    message: "For testing, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate."
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log("Creating Professional README.md file...");
    writeToFile("./dist/README.md", generateMarkdown({...response}));
  })
}

// Function call to initialize app
init();