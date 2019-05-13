## New tests for Direct Client portal

### Installation
Make sure you have installed latest Node JS and Chrome browser. Once you clone repository, execute the following command to download all required dependencies

`npm install`

### Run Scripts
First step is to fire up the selenium server which could be done in many ways, webdriver-manager proves very handy for this.The below command should download the chrome & gecko driver binaries locally for you!

`npm run webdriver-update`

### Executing tests
In order to start all tests scenarios, open terminal in main folder and use following command:

`npm test`

To start only one test case, specify a scenario by using tag @scenario and open terminal in main folder and use following command:

`npm run scenario`

**NOTE:** Please look at animation to see how run only one test case: ![run_particular_scenario](scenario.gif)

If You want to run tests in headless mode, use following command:

`npm run ci`

To run tests on BrowserStack first set credentials to your account as environment variables:

`export BROWSERSTACK_USERNAME=your-bs-username && export BROWSERSTACK_ACCESS_KEY=your-bs-access-key`

and then run:

`npm run browserstack-single`

For Chrome crashes troubleshooting Chrome logging can be activated with:

`npm run chrome-log`

Collect Chrome logs in `.tmp/chrome` folder.

You can also run test using docker. An example could you usign following command

``docker run --rm --mount type=bind,src="`pwd`",dst="/home/circleci" angular/ngcontainer -c "npm install && npm run webdriver-update-ci && xvfb-run --server-args=\"-screen 0 1920x1080x24\" npm run ci"``

### Test Data
To check of the input data used in case tests please look at data/test-config.ts

### Technologies
* cucumber - version 5.0.3
* typescript - version 3.0.1
* protractor - version 5.4.0
* chai - version 4.1.2
* ts-node - version 7.0.1

### Status
Project is: _in progress_.

### Image Comparison functionality
To enable functionality image-comparison You should install protractor-image-comparison.

`npm install --save protractor-image-comparison`
`npm install --save-dev protractor-image-comparison`

In next step You should uncomment code in file config/config.ts in the lines 41-49.
Documentation about protractor-image-comparison You can find on https://www.npmjs.com/package/protractor-image-comparison.