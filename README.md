[![Stories in Ready](https://badge.waffle.io/Samelogic/samelogic-web.png?label=ready&title=Ready)](https://waffle.io/Samelogic/samelogic-web)
[![Build Status](https://travis-ci.org/Samelogic/samelogic-web.svg?branch=master)](https://travis-ci.org/Samelogic/samelogic-web)

## Setting up

1. Install [meteor](https://www.meteor.com/install).
1. Git clone this into a directory.
1. Run `npm install` to install non meteor dependencies.
1. Create a `settings.json` file at the root with the following format:

  ```json 
  {
    "public": {
      "environment": "development"
    },
    "AWSAccessKeyId": "your key here",
    "AWSSecretAccessKey": "your secret here",
    "AWSVideoBucket": "samelogic-videos-development",
    "OxfordApiKey": "your key here"
  }
  ```
1. Run `npm start` or `meteor` to start meteor server. Visit [http://localhost:3000/](http://localhost:3000/).

## Contributing

Any push to `master` will result in a travis-ci build being deployed to heroku production environment. **PLEASE USE PULL REQUESTS**.

### Making changes via Pull Requests


## Development Guidelines

### Stack

This is a full meteorjs (javascript) stack with mongodb database. Client and Server code is shared and separated physically by the file system (`client` and `server` directories)

### Stylsheets

- Stylesheets are handled by LESS.
- Custom Bootstrap is used for everything. (see `/client/lib/styles/custom.bootstrap.less` for toggling bootstrap components)

### Build

Build is handled by NPM, which acts as a proxy to Meteor.

### Tests

No tests, we may or may not do tests.

### Deployments

#### Production

Run the following command for publishing new `settings.json` to prod servers: 

`heroku config:set METEOR_SETTINGS="$(cat settings-prod.json)" --app samelogic-web`.

Use bash shell on windows when running this command.
