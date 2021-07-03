// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if( license === 'BSD' ) {
    return `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  } else if( license === `MIT`) {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else {

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
This project is governed by this license: ${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const finalMarkdown = `# ${data.title}`;
  finalMarkdown += renderLicenseBadge(data.license)


  return finalMarkdown;
}

module.exports = generateMarkdown;
