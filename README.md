# Nightwatch-Cucumber Framework

To do an e2e(End to End) test of web application we can make use of this
Nightwatch-Cucumber Framework, which will support both angular and non-angular applications.


# Setup Steps

Checkout the fresh code on the physical machine using git clone, perform the following on the root folder of the project(where package.json) exists

```
$ npm install
```

This will do the following:
- Install build-time dependencies (`npm install`).

Once it is done, now the basic setup is done to run tests.

# Acceptance Tests

You can run the test by executing in 4 ways

1) `npm run test:e2e `
2) `node_modules/.bin/nightwatch `
3) `node_modules/.bin/nightwatch --env <environment name - browser name> ex: dev-chrome | dev-firefox | dev-ie `
4)  `npm run test:e2e --env <environment name - browser name> ex: dev-chrome | dev-firefox | dev-ie `

>Note: If no environment and browser name is specified, like running the command as "npm run test:e2e", then it will take the default settings i.e., chrome as default browser and localhost as default environment.

```

On running the above commands we can see the tests running

# HTML reports:

HTML report generation is enabled by default. It's default location is /reports/cucumber.html. You can disable or change this using configuration object.

# Framework Structure:
 We are using BDD Framework with Page object model approach where it will be easy to distinguish all the files used in a structured way,

```
├── Tests
│   ├── e2e
│   │   ├── common
│   │   │   ├── settings.js
│   │   │   └── ...
│   │   ├── featureFiles
│   │   │   ├── ABC_News.feature
│   │   │   ├── ABC_Radio.feature
│   │   │   ├── .....
│   │   │   └── .....
│   │   │   └── step_definitions
│   │   │   │   ├── ABC_News_steps.js
│   │   │   │   ├── ABC_Radio_steps.js
│   │   │   │   ├── .....
│   │   │   │   └── .....s
│   │   ├── pages
│   │   │   ├── ABC_News_PageElements.js
│   │   │   ├── ABC_Radio_PageElements.js
│   │   │   └── ...
│   │   └── support
│   │   │   ├── env.js
│   │   │   └── ...
├── package.json
├── cucumber.js
├── nightwatch.conf.js
├── README.md
