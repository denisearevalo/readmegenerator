const inquirer = require('inquirer');
const fs = require('fs');


promptUser = () => {
  return inquirer.prompt([
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your projects name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Briefly describe your project.',
    },
    // {
    //   type: 'input',
    //   name: 'tableOfContents',
    //   message: 'Table of contents:',
    // },
    {
      type: 'input',
      name: 'installation',
      message: 'What is required for installation?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How to use?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Tests',
    },// {
      //   type: 'checkbox',
      //   name: 'licenses',
      //   choices: ["IBM","MIT","NTP"],
      //   message: 'Select licenses',
      // },
    {
      type: 'input',
      name: 'licenses',
      message: 'Which license do you want?',
    },
    {
        type: 'input',
        name: 'acknowledgements',
        message: 'Enter any acknowledgments',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How to contribute?',
    },
    {
        type: 'input',
        name: 'inquiry',
        message: 'Email for questions',
    },
  ])
};

const generateReadMe=({projectName, description, installation, usage, tests, licenses, acknowledgements, contribute, inquiry}) => 
`# Project: ${projectName} 
### Table of Contents: 
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Tests](#Tests)
* [Licenses](#Licenses)
* [Acknowledgements](#Acknowledgments)
* [Contributions](#Contributions)
* [Email](#Email-for-inquiries)
### Description: 
${description} 
### Installation: 
${installation} 
### Usage: 
${usage}
### Tests: 
${tests}
### Licenses: 
![license](https://img.shields.io/badge/License-${licenses}-lightgrey.svg)
### Acknowledgments: 
${acknowledgements}
### Contributions: 
${contribute}
### Email for inquiries: 
${inquiry}`;


// function renderLicense(licenses) {
//   if (licensing === "IBM"){
//       return`[![Licensing: IPL 1.0](https://img.shields.io/badge/License-IBM-lightgrey](https://opensource.org/licenses/IBM)`
//   }
//   else if(licenseType === 'MIT') {
//     return`[![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey)(https://opensource.org/licenses/MIT)]`
//   }
//   else if(licenseType === 'NTP') {
//     return`[![License: NTP](https://img.shields.io/badge/License-NTP-lightgrey)(https://opensource.org/licenses/NTP)]`
//   }
//   return renderLicense()
// };

const init = () => {
  promptUser()
    .then((result) =>fs.writeFileSync("user.md", generateReadMe(result)))
    .then(() => console.log("Successfully generated ReadMe!"))
    .catch((err) => console.log(err));
};
init();



