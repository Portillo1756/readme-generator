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
   }

   {
    type: "input",
    name: "description",
    message: "Provide a description and purpose of your project.",
   }

   {
    type: "input",
    name: "usage",
    message: "State the languages or technologies associated with this project.",
   }

   {
    type: "checkbox",
    name: "license",
    message: "Select a license applicable to this project.",
    choices: ["HTML", "CSS", "JavaScript", "Node.js"],
   }
   
   {
    type: "input",
    name: "contributing",
    message: "What is your GitHub username?",
   }

   {
    type: "input",
    name: "email",
    messsage: "Provide a valid email address.",
  }



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
