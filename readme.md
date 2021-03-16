# Matching app

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)](https://forthebadge.com)

![node-current](https://img.shields.io/node/v/npm)
![npm](https://img.shields.io/npm/v/npm)
![GitHub last commit](https://img.shields.io/github/last-commit/jortdus/blok-tech)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/jortdus/blok-tech)
[![GitHub license](https://img.shields.io/github/license/pmvdbijl7/matching-app)](https://github.com/jortdus/blok-tech/blob/main/LICENSE)

Block Tech Assignement; Focus on matching features and Node.JS

## What does it do?
This app focuses on providing an experience for steam users to connect to people with the same preferences. 

A user will login using their steamID or username and in the future with openID via steam. Data retrieved from the steamAPI will be filtered and send to a database and matched to that specific user. The user can than match his profile to other users and find a match based on a few parameters. 

## Table of Contents
* [Features](#features)
* [Usage](#usage)
* [Support](#support)
* [Credits](#credits)
* [License](#license)

## Features
Retrieving information from the steamAPI.
Combining API retrieved data and user information into a scheme in a database.
Matching users based on API data.

## Usage
To clone and run this application, you need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/) (which comes with [npm](https://www.npmjs.com/)) installed on your computer. From your command line:

```bash
    # Clone this repository
    $ git clone https://github.com/jortdus/blok-tech.git
    # Go into the repository
    $ cd blok-tech

    # Install dependencies
    $ npm install

    # Run the app
    $ npm run start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Support
Don't bother me.

## Credits
This project uses the following open source packages:

+ [Node.js](https://nodejs.org/en/)
+ [Npm](https://www.npmjs.com/)
+ [Nodemon](https://nodemon.io/)
+ [Express](http://expressjs.com/)
+ [Ejs](http://ejs.co/)
+ [Body-parser](https://www.npmjs.com/package/body-parser)

## License
Matching app is released under the [MIT](https://github.com/jortdus/blok-tech/blob/main/LICENSE)
