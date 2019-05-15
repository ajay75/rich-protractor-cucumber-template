var browserstack = require('browserstack-local');
import { browser, Config } from "protractor";

export const config: Config = {
  specs: [
    "../features/010-simple-search.feature",
  ],
  seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',

  restartBrowserBetweenTests: false,
  SELENIUM_PROMISE_MANAGER: false,
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  cucumberOpts: {
    compiler: "ts:ts-node/register",
    format: ["json:.tmp/results.json", "node_modules/cucumber-pretty" ],
    require: ["../stepdefinitions/*.ts", "../support/*.ts"],
    strict: true,
    tags: "",
},
  capabilities: {
    'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
    'browserstack.local': false,

    'os': 'Windows',
    'os_version': '10',

    'browserName': 'Edge',
    'browser_version': '18.0',
    'resolution': '1024x768',

    // 'browserName': 'Chrome',
    // 'browser_version': '74.0',
    // 'resolution': '1024x768',

    'acceptSslCerts': true,
    'build': 'version1',
    'project': 'rich-template-browserstack-single'
  },

  // Code to start browserstack local before start of test
  beforeLaunch: () => {
    console.log("Connecting local");
    return new Promise(function(resolve, reject){
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({'key': exports.config.capabilities['browserstack.key'] }, function(error) {
        if (error) return reject(error);
        console.log('Connected. Now testing...');

        resolve();
      });
    });
  },

  // Code to stop browserstack local after end of test
  afterLaunch: () => {
    return new Promise(function(resolve, reject){
      exports.bs_local.stop(resolve);
    });
  },

  onPrepare: () => {
    browser.ignoreSynchronization = true;
  }
};
