// TODO: Create a function that returns a license badge based on which license is passed in

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if( license === 'BSD' ) {
    return `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  } else if( license === `MIT`) {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if( license === `IBM`) {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  } else if ( license === `GNU`) {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === '') {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != '') {
    return `
This project is governed by the license: ${license}`
  } else if (license === '') {
    return ``
  }
}

// built header function
function buildHeader(text) {
  return `
## ${text}`
}

// build TOC items function
function renderTOCItem(title) {
    return `
* [${title}](#${title.toLowerCase()})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var finalMarkdown = `# ${data.title}
`;
  
// build badge area
finalMarkdown += `${renderLicenseBadge(data.license)} &nbsp;&nbsp;&nbsp;&nbsp;`

finalMarkdown += `![Repo size badge](https://img.shields.io/github/repo-size/${data.gitHubUsername}/${data.repo}?color=success) &nbsp;&nbsp;&nbsp;&nbsp;`

finalMarkdown += `![Language % badge](https://img.shields.io/github/languages/top/${data.gitHubUsername}/${data.repo}) &nbsp;&nbsp;&nbsp;&nbsp;`


// build description header
finalMarkdown += buildHeader(":memo: Description");
 
//build description content
if (data.description) { 
  finalMarkdown += `
  ${data.description}`
}

// build toc header
finalMarkdown += buildHeader(":trophy: Table of Contents");


  // for each item the user gave an answer for, create a toc item
  if (data.installation) { 
    finalMarkdown += renderTOCItem("Installation")
  }
  if (data.usage) {
    finalMarkdown += renderTOCItem("Usage")
  }
  if (data.license) {
    finalMarkdown += renderTOCItem("License")
  }
  if (data.contributing) {
    finalMarkdown += renderTOCItem("Contributing")
  }
  if (data.tests) {
    finalMarkdown += renderTOCItem("Tests")
  }
  if (data.questions) {
    finalMarkdown += renderTOCItem("Questions")
  }

  finalMarkdown += `
  
  `

  // build each individual section, only for the ones the user gave info for
  if (data.installation) {
    finalMarkdown += `

## :floppy_disk: Installation
${data.installation}
`
  }
  if (data.usage) {
    finalMarkdown += `## :key: Usage
${data.usage}
`
  }
  if (data.license) {
    finalMarkdown += `## :globe_with_meridians: License
${renderLicenseSection(data.license)}
`
  }
  if (data.contributing) {
    finalMarkdown += `## :star2: Contributing
${data.contributing}
`
  }
  if (data.tests) {
    finalMarkdown += `:white_check_mark: ## Tests
${data.tests}
`
  }
  if (data.gitHubUsername) {
    finalMarkdown += `
 ---

 ## :question: Questions

For any questions, please contact me using the information below:

:octocat: GitHub: [@${data.gitHubUsername}](https://github.com/${data.gitHubUsername})
`
  }
  if (data.email) {
    finalMarkdown += `
    :envelope: Email: ${data.email}
`
  }
  
  return finalMarkdown;
}

module.exports = generateMarkdown;
