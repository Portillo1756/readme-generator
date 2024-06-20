// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
   {
    type: "input",
    name: "Title",
    message: "Name of your project?",
   },

  {
    type: "input",
    name: "Description",
    message: "Provide a description the purpose of your project.",
   },

   {
    type: "input",
    name: "Usage",
    message: "State the languages or technologies associated with this project.",
    choices: ["HTML", "CSS", "JavaScript", "Node.js", "Phython", "JSON", "None"],
   },

   {
    type: "checkbox",
    name: "License",
    message: "Select a license applicable to this project.",
    
   },
   
   {
    type: "input",
    name: "Contributing",
    message: "What is your GitHub username?",
   },

   {
    type: "input",
    name: "Name",
    message: "What Is Your Name?"
   },

   {
    type: "input",
    name: "Email",
    messsage: "Provide a valid email address.",
  },  
  
  {
    type: "input",
    name: "Creator",
    message: "What is your GitHub username?",
   }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.createPromptModule(questions).then((response) => {
    console.log("Creating Professional README.mD file...");
    writeToFile("./dist/README.md", generateMarkdown({...response}));
  })
}

// Function call to initialize app
init();
