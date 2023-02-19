// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-brightgreen.svg)

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
  ${data.installation ? data.installation : 'N/A'}

  ## Usage
  ${data.usage ? data.usage : 'N/A'}

  ## License
  ${data.license ? data.license : 'N/A'}

  ## Contributing
  If you would like to contribute to the project you can do the following:
  ${data.contributing ? data.contributing : 'N/A'}

  ## Tests
  ${data.test ? data.test : 'N/A'}

  ## Questions
  You can find my GitHUb here: [${data.gitHub}](https://github.com/${data.gitHub})

  If you have any questions please email me here: ${data.email}
`;
}

module.exports = generateMarkdown;