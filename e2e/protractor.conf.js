// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const spawn = require('child_process').spawn;
PromiseTool = require('promise-tool');
var appiumProcess;

const serverAddress = 'http://localhost:4723/wd/hub';

const androidEmulator = {
  automationName: 'UiAutomator2',
  browserName: '',
  autoWebview: true,
  autoWebviewTimeout: 20000,
  platformName: 'Android',
  deviceName: 'emulator-5554',
  'appPackage': 'io.ionic.starter',
  'appActivity': '.MainActivity',
  autoAcceptAlerts: 'true',
  autoGrantPermissions: 'true',
  newCommandTimeout: 300000
}
// https://crondev.blog/2018/04/23/e2e-tests-for-ionic-or-any-other-hybrid-app/
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  multiCapabilities: [
    androidEmulator
  ],
  framework: 'jasmine',
  SELENIUM_PROMISE_MANAGER: false,
  useAllAngular2AppRoots: true,
  random: false,
  seleniumAddress: serverAddress,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    random: false,
    print: function () { }
  },
  onPrepare() {
    var wd = require('wd'),
      protractor = require('protractor'),
      wdBridge = require('wd-bridge')(protractor, wd);
    wdBridge.initFromProtractor(exports.config);
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  },
  beforeLaunch: async () => {
    try {
      await launch_appium();
    } catch (error) {
      console.log('APPIUM KILLED BY ERROR');
      appiumProcess.kill('SIGINT');
    }
  },
  afterLaunch: async (code) => {
    // Stop appium server
    console.log('TRY KILL');
    appiumProcess.kill('SIGINT');
  }
};

function launch_appium() {
  const appium = spawn(process.cwd() + '\\node_modules\\.bin\\appium.cmd',
    ['--chromedriver-executable', process.cwd() + '\\node_modules\\.bin\\chromedriver.cmd'], {detached: true});
  appium.stdout.on('data', data => {
    // console.log(`stdout: ${data}`);
  })
  appium.stderr.on('data', data => {
    console.log(`ERROR: ${data}`);
  })
  appiumProcess = appium;
  
  // Timeout to wait for appium to startup
  return PromiseTool.setTimeout(10000);
}
