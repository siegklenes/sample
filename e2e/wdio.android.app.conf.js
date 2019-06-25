const { config } = require('./wdio.shared.conf');

// ============
// Specs
// ============
config.specs = [
    './e2e/src/**/*.e2e-spec.ts',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [ // Para mais de um emulador na mesma maquina, adicionar na lista
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        maxInstances: 1,
        // For W3C the appium capabilities need to have an extension prefix
        // http://appium.io/docs/en/writing-running-appium/caps/
        // This is `appium:` for all Appium Capabilities which can be found here
        //'appium:chromedriverChromeMappingFile': 'C:\\wms\\SL-WMSIonic\\chrome.json', // Mapeia versão de chrome vs chromedriver, se necessário
        //'appium:chromedriverExecutableDir': 'C:\\wms\\SL-WMSIonic\\chromedrivers\\', // Diretório com todas as versões de chrome adicionais, appium usa chrome.json e mais uma tabela própria para achar a versão correta
        'appium:appPackage': 'io.ionic.starter',
        'appium:appActivity': '.MainActivity',
        'appium:app': '/root/tmp/app-debug.apk',// Caso deseje que o appium instale o apk
        'appium:autoAcceptAlerts': 'true',
        'appium:autoGrantPermissions': 'true',
        'appium:autoWebview': 'true',
        'appium:autoWebviewTimeout': 360000,
        'appium:deviceName': 'emulator-5554',
        'appium:orientation': 'PORTRAIT',
        // `automationName` will be manatory, see
        // https://github.com/appium/appium/releases/tag/v1.13.0
        'appium:automationName': 'UiAutomator2',
        'appium:skipServerInstallation': false,
        'appium:uiautomator2ServerLaunchTimeout': 60000,
        'appium:uiautomator2ServerInstallTimeout': 60000,
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        'appium:noReset': true,
        'appium:newCommandTimeout': 3600,
    },
];

exports.config = config;
