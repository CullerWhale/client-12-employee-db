// const fs = require('fs');
// const path = require('path');
const inquirer = require('inquirer');
// const Choices = require('inquirer/lib/objects/choices');
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// const generateMarkdown = require('./utils/generateMarkdown');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern.js');
// const Manager = require('./lib/Manager');
const connection = require('./server.js');
const HR = require('./lib/Queries');
const { execute } = require('./server.js');




// An array of questions and answers for user input
const answersArray = [];
const questions = [

  {
    type: "list",
    name: 'initialQuestion', //employeeType
    message: "What would you like to do?",
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
  },

  // ,{
  //   type: "confirm",
  //   name: 'anotherEmployee',
  //   message: "Is there another employee?",
  //   default: true
  // },
];

function startGame() {
  inquirer
    .prompt(
      /* Pass questions in here */
      questions
    )
    .then((answers) => {
      console.log(answers);
      // answersArray.push(answers);
      processAnswers(answers)

      if (answers.anotherEmployee == true) {
        startGame();
      } else {
        generatePage(answersArray);
        console.log(answersArray);
      }

    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
};




async function processAnswers(answers) {
  if (answers.initialQuestion == 'View all departments') {                                       
    // const response = await connection.promise().query('SELECT * FROM department');
    // console.table(response[0]);
    const departments = new HR(connection)
    const response = await departments.getDepartments();
    console.table(response[0]);

    startGame();

  } else if(answers.initialQuestion == 'View all roles'){     
   
    const response = await connection.promise().query('SELECT * FROM roleTable JOIN department ON department.id=roleTable.department_id');
    console.table(response[0]);
    
    startGame();

  } else if(answers.initialQuestion == 'View all employees'){                  
    const response = await connection.promise().query('SELECT m.first_name AS managerFirstName, m.last_name AS managerLastName, e.first_name, e.last_name FROM employeeTable e JOIN employeeTable m ON e.manager_id = m.id');
    console.table(response[0]);

    startGame();
    
    // add regular join statements to this for department etc...

  } else if(answers.initialQuestion == 'Add a department'){                  
    // const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    // answersArray.push(intern);
    const nameOfDepartment = await inquirer.prompt([{
      type: "input",
      name: 'departmentName',
      message: "What is the department's name?"
    }]); 
    // await connection.promise().query('INSERT INTO department SET department_name = ?', nameOfDepartment.departmentName)
    const newDepartment = new HR(connection)
    await newDepartment.addDepartment(nameOfDepartment.departmentName);
    const response = await newDepartment.getDepartments();
    console.table(response[0]);
    startGame();
    
    
  } else if(answers.initialQuestion == 'Add a role'){                  
    const roleDetails = await inquirer.prompt([{
      type: "input",
      name: 'roleName',
      message: "What is the name of the role?"
    }
    ,{
      type: "input",
      name: 'salaryFigure',
      message: "What is the salary?"
    } 
    //, {
    //   type: "input",
    //   name: 'roleDepartment',
    //   message: "What department does the role belong to?"
    // }
  
  ]); 

  const newRole = new HR(connection)
  await newRole.addRole(roleDetails.roleName);
  

  const newRoleSalary = new HR(connection)
  await newRoleSalary.addRoleSalary(roleDetails.salaryFigure);
// get department_id also

  const response = await newRole.getRoles();
  console.table(response[0]);
  //inject response into roleTable

  startGame();

  } else if(answers.initialQuestion == 'Add an employee'){                  
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    answersArray.push(intern);
    
  } else {                            //update an employee
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    answersArray.push(manager);
  }

}; 

// Create a function to write html file
const generatePage = (answers) => {

  fs.writeFile('index.html', generateMarkdown(answers), (err) => {
    if (err) {
      console.error(err);
      console.log(answers);
      console.log(answersArray);
      return
    }
    console.log('wrote to file successfully')
  })
};

startGame();