# Unblocked Site

*This repository hosts the UnBlockEd site's react project. This application is built as a react native project.

## Requirements

As this is a react native requirement no other dependencies are required. The version of npm compatible with this site is **6.12.0**

## GitIgnore

The git ignore is configured for react, vs-code (this or web-storm are the recommended IDEs of choice). **Important** before using another IDE consult [this site](gitignore.io).

## Set-Up

If you dont have npm download it [here](https://www.npmjs.com/get-npm) or set it up via homebrew on OS X. In the working directory of the project run the terminal command **npm run start** or just **npm start** and the project will open up on the browser via localhost.


## JSX and React Compatability

The main functionality of this site is to leverage reports that are constructed in JSX. It would be ideal if the report components can be built on top the existing react project as components. I found the package vuera which seems to provide the mentioned functionality, but we need to still see how effective it is for our use case:

```bash
$ yarn add vuera
# or with npm:
$ npm i -S vuera
```
