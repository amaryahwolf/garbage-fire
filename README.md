# Garbage Fire

## [Deployed Application](https://garbage-fire.herokuapp.com/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This application is for avid reality television watchers who desire a community-based social network to share their thoughts and opinions on various shows. It provides an opportunity for reality show watchers to create a niche community and engage in discourse. It uses Node, Express, MySQL, Sequelize, Handlebars, bcrypt, sessions, Bootstrap, Google Fonts and Font Awesome.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To run the application, simply enter the URL in any browser. <br>
To install the application locally, ensure that [Node.js](https://nodejs.org/en/download/) is installed, then clone the repository from Github. Connect a [MySQL workbench](https://www.mysql.com/products/workbench/) to the application through the config/connection.js file, and create a databse in the workbench using the schema.sql file in the db folder. Run the installation script ```npm run install```, followed by the seed script ```npm run seed``` and lastly the start script ```npm run start```. View the application in any browser at http://localhost:3001/.

## Usage
The application homepage presents a carousel of reality television shows featured throughout the application, as well as an option to browse shows by rating. After signing up or logging in, the user can then browse shows through the feed ('Digs'), read comments, add comments and add shows to their profile ('My Trash') using the + button beside each show title. Through the user's profile, they can view their collection of shows, add coments, and delete the show from their profile using the trash can button beside each show title.
![Screenshot of application](./public/assets/garbage-fire-screenshot.png)

## Credits
Collaborators:<br>
[Amaryah Wolf](https://github.com/amaryahwolf) <br>
[Amber Greenberg](https://github.com/ambamm)<br>
[Sky Kim](https://github.com/sjk777)

## License
This application is covered under the MIT license.

## Contributing
[Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)

## Tests
N/A

## Questions
For additional questions, reach us at our Github profiles linked above under Credits.

