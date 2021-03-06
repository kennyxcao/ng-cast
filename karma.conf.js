// Karma configuration
// Generated on Tue Feb 21 2017 14:43:59 GMT-0800 (PST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    client: {
      mocha: {
        // change Karma's debug.html to the mocha web reporter
        reporter: 'html',
      }
    },

    preprocessors: {
      'src/templates/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      moduleName: 'templates'
    },

    // list of files / patterns to load in the browser
    files: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/sinon/pkg/sinon-1.17.7.js',
      'node_modules/lodash/lodash.js',
      'spec/lib/chai.js',
      'src/index.js',
      'src/**/*.js',
      'spec/**/*.js',
      'src/templates/*.html',
    ],

    // app, video list, video list entry, video player, search

    plugins: [
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-ng-html2js-preprocessor',
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // reporters: ['mocha'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
