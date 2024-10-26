# Films List Project

## Introduction

This project was bootstrapped with Create React App. This README was generated with the help of ChatGPT.

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js: This project requires Node.js version 14 or later. You can download Node.js from the [official website](https://nodejs.org/). To check your Node.js version, run the following command in your terminal:

```bash
node -v
```

## Installation

First step is clone the repository and install the dependencies:

```bash
git clone https://github.com/<your-github-url>/films_catalog.git
cd films_catalog
npm install
```

## Running the project

To run the project:

```bash
npm start
```

Then, open http://localhost:3000 in the browser to see the result.

## Building the Project

To build the project for deployment:

```bash
npm run build
```

## Trade-offs and Reasoning

Given the constraints and goals of this test project, several important decisions were made:

#### Absence of state manager

This project is a small-scale test application that currently utilizes React's built-in state management and prop drilling to pass data through the component hierarchy. While this approach is sufficient for the project's current scope, introducing a state management library such as Redux or Context API could enhance maintainability and scalability in the future. These tools would help manage state more centrally and reduce the complexity associated with prop drilling, making the application more robust as it grows, but for now it is not mandatory.

#### CSS Methodologies

This project doesn't use any CSS methodologies like BEM to organize styles. Although the current CSS setup might serve smaller projects, using a methodology like BEM could increase maintainability as the project grows.


#### Accessibility

Accessibility options, such as aria-label attributes and roles, are currently not implemented. This is certainly a limitation of the site, and full accessibility support is a goal for future development.

It should be noted that this project was a testing app, and the decisions made reflect that.

## Future Improvements

Currently, the application faces an issue where searching for a term again while on a different page does not automatically reset to the first page. This could be optimized by caching the search results for each page, thus avoiding redundant requests and fetching data from the cache instead. Additionally, incorporating the current page number as a URL parameter would enhance user experience by allowing the sharing of URLs that preserve search context, though this was not an initial requirement. Future thorough testing might reveal more areas for improvement, enhancing the application’s performance and user interaction capabilities.
Also, the code implements very simple error handling that just logs the error stack trace and there is no proper handling on UI side, however it was not requirement.


## References

The project was referenced by some code from react-paginate package (https://www.npmjs.com/package/react-paginate). Specifically the styles are taken from https://github.com/AdeleD/react-paginate/blob/master/theme/basic/react-paginate.css

