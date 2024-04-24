# freeCodeCamp - Timestamp Microservice Project

## Summary

This is one of the projects that requires implementation as part of [freeCodeCamp's Back End Development and APIs Certification](https://www.freecodecamp.org/learn/back-end-development-and-apis/).

As part of the [requirements](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice) (including utilising the [boilerplate code provided by freeCodeCamp](https://github.com/freeCodeCamp/boilerplate-project-timestamp/)), this project involves implementing an application that takes a date value via API and returns a JSON object containing the following:

- a `unix` key and value (input date represented in milliseconds)
- a `utc` key and value (input date represented in the following example date format: `Thu, 01 Jan 1970 00:00:00 GMT`)

## Setup

This project uses Node.js and Express in order to run this application. As such, make sure that Node.js and npm are installed and then run the following commands in your terminal, within the project's directory:

```
npm install
npm start
```

## Usage

#### Example

```
<YOUR_PROJECT_URL>/api/2015-12-25
<YOUR_PROJECT_URL>/api/1451001600000
```

#### Output

```json
{
  "unix:" 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT" 
}
```

## Notes

The GET API call accepts an optional date value that is either in milliseconds or in `yyyy-mm-dd` date format. Any other value provided would result in an error and instead returns the following JSON object:

```json
{
    "error": "Invalid Date"
}
```

Also, if no value was provided in the API call (i.e. callling just `<YOUR_PROJECT_URL>/api`), then it would return a JSON object where the `unix` and `utc` values reflect the current date/time that the API was called.
