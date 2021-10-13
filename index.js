const inquirer = require("inquirer");
const jest = require("jest");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const teamArray = [];

function promptUser(answers) {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "title",
        message: "What is the employee's title?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then(function (res) {
      console.log(res);
      if (res.title === "Manager") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is the employee's name?",
            },

            {
              type: "input",
              name: "id",
              message: "What is their ID number?",
            },

            {
              type: "input",
              name: "email",
              message: "What is their email?",
            },

            {
              type: "input",
              name: "office",
              message: "What is their office number?",
            },
          ])
          .then(function (managerResult) {
            const manager = new Manager(
              managerResult.name,
              managerResult.id,
              managerResult.email,
              managerResult.office
            );
            console.log(manager);
            teamArray.push(manager);
            addUser();
          });
      } else if (res.title === "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is the employee's name?",
            },

            {
              type: "input",
              name: "id",
              message: "What is their ID number?",
            },

            {
              type: "input",
              name: "email",
              message: "What is their email?",
            },

            {
              type: "input",
              name: "github",
              message: "What is their GitHub url?",
            },
          ])
          .then(function (engineerResult) {
            const engineer = new Engineer(
              engineerResult.name,
              engineerResult.id,
              engineerResult.email,
              engineerResult.github
            );
            console.log(engineer);
            teamArray.push(engineer);
            addUser();
          });
      } else if (res.title === "Intern") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is the employee's name?",
            },

            {
              type: "input",
              name: "id",
              message: "What is their ID number?",
            },

            {
              type: "input",
              name: "email",
              message: "What is their email?",
            },

            {
              type: "input",
              name: "school",
              message: "What school are they attending?",
            },
          ])
          .then(function (internResult) {
            const intern = new Intern(
              internResult.name,
              internResult.id,
              internResult.email,
              internResult.school
            );
            console.log(intern);
            teamArray.push(intern);
            addUser();
          });
      };
    })
     .catch(function (err) {
        console.log(err);
        
    })
};

function generateHTML() {

    console.log(teamArray)

    function renderManager() {

    };
    
};

function addUser(){
    inquirer.prompt([
        {
            type: "confirm",
            name: "add",
            message: "Add new member?"
        }
    ]).then(function(addResult){
        addResult.add ? promptUser() : generateHTML()
    })
};

promptUser();
