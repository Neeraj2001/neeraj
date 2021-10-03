# Calculater

It Calculates the basic Operations like Addition(+), Subtraction(-), Multiplication(*), Division(/).

## Packages to Install

* First install [npm](https://nodejs.org/en/) 


* **[Jest](https://jestjs.io/docs/getting-started)** is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.

```bash
    npm intall --save-dev jest
```
_`--save-dev` is used to save the package for development purpose (The absence of the package will not affect the work of the application).         Example: unit tests, minification..`_

to generate a basic Configuration file use

```bash
    jest --init
```

### Configuration

Add this to Scripts in package.json as

```json
   "test": "jest --coverage"
```

So we can use Code Coverage while testing the Project

* **[Jsdoc](https://jsdoc.app/)** is a markup language used to annotate JavaScript source code files. Using comments containing JSDoc, programmers can add documentation describing the application programming interface of the code they're creating.

```bash
    npm install --save-dev jsdoc
```

### Configuration

Add this to Scripts in package.json as

```json
   "jsdoc": "jsdoc -c jsdoc.json"
```
So we can just run the Jsdoc using the Command

```bash
    npm run jsdoc
```

* **[ESLint](https://eslint.org/docs/user-guide/getting-started)** is a static code analysis tool for identifying problematic patterns found in JavaScript code. Rules in ESLint are configurable, and customized rules can be defined and loaded. ESLint covers both code quality and coding style issues.

```bash
    npm install --save-dev eslint
```
### Configuration

Add this to Scripts in package.json as

```json
    "lint": "eslint ./"
```

So we can just run the lint using the Command

```bash
    npm run lint
```

You can follow up this [Page](https://dev.to/devdammak/setting-up-eslint-in-your-javascript-project-with-vs-code-2amf) to walkthrough eslint configuration

This is the sample rules that i have set for the Eslint file

```json
    "rules": {
        "semi": ["error", "always"],
        "no-use-before-define": "error",
        "linebreak-style": 0,
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "quotes": [2, "double"],
        "comma-dangle": [2, "always-multiline"]
    }
```

### **Tech Stack**
 
 * Java Script
 * JsDoc
 * Jest
 * Eslint

### **FeedBack**
 
 * If you have any feedback/Query, please reach out to me at lakshmineeraj@syscloudsoftware.com