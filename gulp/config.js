"use strict";

var argv = require('yargs').argv;

module.exports = {
    get env() {
        return (argv.production) ? 'production' : 'development';
    },
    dirs:       {
        build: '.dist',
        js:    'dist/js',
        css:   'dist/css',
        html:  'dist/html'
    },
    files:      {
        js:   'dist/js/*.js',
        css:  'dist/css/*.css',
        html: 'dist/html/*.html'
    },
    components: {
        sass: 'src/scss/main.scss',
        js:   'assets/js/*.js',
        html: '*.html'
    },
    vendors:    {
        js:  [
            "assets/libs/jquery-2.2.3.js",
            "assets/libs/modernizr-custom.js",
            "bower_components/wow/dist/wow.js",
            "assets/js/main.js"
        ],
        css: [
            "bower_components/flexboxgrid/dist/flexboxgrid.css",
            "bower_components/wow/css/libs/animate.css"
        ]
    }
};
