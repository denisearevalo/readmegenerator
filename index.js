const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe=({projectName, description, tableOfContents, installation, usage, tests, licenses, acknowledges, contribute, inquiry}

// Use writeFileSync method to use promises instead of a callback function
promptUser = () {
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
    {
      type: 'input',
      name: 'tableOfContents',
      message: 'Table of contents:',
    },
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
    },
    {
      type: 'input',
      name: 'licenses',
      message: 'Enter licenses',
    },
    {
        type: 'input',
        name: 'acknowledgements',
        message: 'Enter any acknowledgments',
      },
    {
        type: 'input',
        name: 'contribute',
        message: 'Would you like to contribute?',
    },
    {
        type: 'input',
        name: 'inquiry',
        message: 'Got questions?',
    },
};

]).then (ans=>{
    console.log (ans);
    fs.writeFile('user.md', generateReadMe (err)=>{
        if(err){
            throw err
        }
      else (promptUser)
    })
});
