exports.config = {
    before: () => {
        console.log('before');

    },
    // ====================
    // Runner and framework
    // Configuration
    // ====================
    maxInstances: 1,
    runner: 'local',
    framework: 'jasmine',
    jasmineNodeOpts: {
        // Updated the timeout to 30 seconds due to possible longer appium calls
        // When using XPATH
        defaultTimeoutInterval: 120000,
    },
    sync: true,
    logLevel: 'silent',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 30000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    reporters: [
        [
            'spec',
            {
                suite: {
                    displayNumber: true // display each suite number (hierarchical)
                },
                spec: {
                    displaySuccessful: true,
                    displayPending: true, // display each pending spec
                    displayDuration: true // display each spec duration
                },
                summary: {
                    displaySuccessful: false, // display summary of all successes after execution
                    displayFailed: true, // display summary of all failures after execution
                    displayPending: false, // display summary of all pending specs after execution
                    displayDuration: true
                }
            }
        ],
        [
            'junit',
            {
                outputDir: "./test-reports/",
                outputFileFormat: (options) => 'e2e-junit.xml',
            }
        ]
    ],

    // ====================
    // Appium Configuration
    // ====================
    services: ['appium'],
    appium: {
        // command: process.cwd() + '\\node_modules\\.bin\\appium.cmd',
        // For options see
        // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
        args: {
            // For arguments see
            // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
        },
    },
    mochaOpts: {
        ui: 'bdd',
        require: [
            'tsconfig-paths/register'
        ]
    },

    port: 4723,

    // ====================
    // Some hooks
    // ====================
    beforeSession: (config, capabilities, specs) => {
        //require('@babel/register');
        console.log('beforeSession');
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.e2e.json')
        });

    },

};
