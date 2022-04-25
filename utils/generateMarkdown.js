//function to generateHTML 
//accepts employee array
//for employee (map, filter) 
//create html array to hold the entire html string 

//f(x1 for engineer)
//f(x2)...
//if engineer, manager, intern, call diff function for each type of employee to output <div> using template literals (BOOT STRAP)
//inside of if: save into massive html string. (card types)


//join array together with return html.join('')

//^^put into retrun render( html.join output)

//create function to provide template (doctype, head main tags)
  //have it accept the data from html.join for one massive template literal 
  //return final html render (doc type, head, card types) 




//function to generatePage

//FAIL


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//     if (license == 'MIT License'){
//       return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  
//     } 
//     else if(license == 'Apache License 2.0') {
//       return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
//     }
  
//     else if(license == 'Mozilla Publice License 2.0' ) {
//       return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  
//     }
//     else {
//       return ''
//     }
  
//   };
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  // function renderLicenseLink(license) {
  //   if (license == 'MIT License'){
  //     return 'https://opensource.org/licenses/MIT'
  
  //   } 
  //   else if(license == 'Apache License 2.0') {
  //     return 'https://www.apache.org/licenses/LICENSE-2.0'
  //   }
  
  //   else if(license == 'Mozilla Publice License 2.0' ) {
  //     return 'https://www.mozilla.org/en-US/MPL/2.0/'
  
  //   }
  //   else {
  //     return ''
  //   }
  // };
  
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  // function renderLicenseSection(license) {
  //   if (license == 'MIT License'){
  //     return 'This project is covered under the MIT License'
  
  //   } 
  //   else if(license == 'Apache License 2.0') {
  //     return 'This project is covered under the Apache 2.0 License'
  //   }
  
  //   else if(license == 'Mozilla Publice License 2.0' ) {
  //     return 'This project is covered under the Mozilla 2.0 License'
  
  //   }
  //   else {
  //     return ''
  //   }
  // };
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(answersArray) {
    // let licenseBadge = renderLicenseBadge(answers.license); 
    // let licenseText = renderLicenseSection(answers.license);
    // let licenseLink = renderLicenseLink(answers.license)
    return `
    # ${answersArray.Manager.email}

    ## Description
    ${answers.Manager.officeNumber}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contribution](#contribution)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation 
    ${answers.userName}
    
    
    ## Usage
    ${answersArray.name}
    
  
    
    ## Contribution
    ${answers.contribution}
    The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard that we follow. 
    
    ## Tests
    ${answers.officeNumber}
    
    ## Questions
    Email: ${answers.email}
    
    Github: https://github.com/${answers.userName} `;
  }
  
  module.exports = generateMarkdown;
  