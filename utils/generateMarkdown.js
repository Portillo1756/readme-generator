// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (licence !== "none") {
    return `![Github license] (https://img.shields.io/badge/license ${license} yellowgreen.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](#license)\n`;
}
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    
    Licensed under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    by ${data.name}
    ${renderLicenseBadge(data.licence)}

    #Table of Contents
    * [Description](#Description)
    * [Usage](#Usage)
    * [License](#License)
    * [Contact-Me](#Contact-Me)
    * [Contributors](#Contributors)
    * [Testing](Testing)

    ## Description

    ${data.Description}

    ## Usage

    ${data.Usage}


    ## License

    ${data.License}

    ## Contributing

    ${data.Contributing}
  
    ## Creator
  
    ${data.Creator}

    ## Contact-Me
    * Name - ${data.Name}
    * Email - ${data.Email}
    * Github - ${data.Creator}
    `;
}

module.exports = generateMarkdown;