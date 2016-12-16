module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        basePath: '../',
        files: [
            'lib/**/*.js',
            "spec/**/*[sS]pec.js"
        ]

    });
};