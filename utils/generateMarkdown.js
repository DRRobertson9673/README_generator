// function to generate markdown for README
function generateMarkdown(data) {
  if (`${data.license}` === 'MIT') {
    let badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  return `
  # ${data.title}
  ${badge}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${data.license}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  -testHere- Run node index.js to see if the file is created
  
  ## Questions
  
  You can find my GitHUb here: [${data.gitHub}](https://github.com/${data.gitHub})

  If you have any questions please email me here: ${data.email}

`;
}}

module.exports = generateMarkdown;
