'use strict';

/* Dependencies */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    clean = require('gulp-clean'),
    minify = require('gulp-minify-css');

// Run all of our tasks
gulp.task('default', ['cleanJs', 'concatScripts', 'minifyScripts', 'cleanCss', 'compileSass', 'makeCss', 'watch']);

/* Scripts */
gulp.task('concatScripts', function() {
    return gulp.src([
            "assets/libs/jquery-2.2.3.js",
            "assets/libs/modernizr-custom.js",
            "bower_components/wow/dist/wow.js",
            "assets/js/main.js"
        ])
        .pipe(concat("build.js"))
        .pipe(gulp.dest("dist/js"))
});

gulp.task("minifyScripts", function(){
    return gulp.src('dist/js/build.js')
        .pipe(uglify())
        .pipe(rename('build.min.js'))
        .pipe(gulp.dest("dist/js"));
});

gulp.task('cleanJs', function () {
    return gulp.src([
            'dist/js/*.js'
        ], {read: false})
        .pipe(clean());
});

/* Styles */
gulp.task("compileSass", function(){
    gulp.src('src/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('makeCss', function() {
    return gulp.src([
            "dist/css/main.css",
            "bower_components/flexboxgrid/css/flexboxgrid.css",
            "bower_components/wow/css/libs/animate.css"
        ])
        .pipe(concat("build.min.css"))
        .pipe(minify({
            keepBreaks: true
        }))
        .pipe(gulp.dest("dist/css"));
});

gulp.task('cleanCss', function () {
    return gulp.src([
            'dist/css/*.css'
        ], {read: false})
        .pipe(clean());
});

// Check for modifications
gulp.task('watch', function() {

    // Styles
    gulp.watch('./src/scss/**/*.scss', ['compileSass']);
    gulp.watch('./dist/css/*.css', ['cleanCss', 'makeCss']);

    // Scripts
    gulp.watch('./assets/js/*.js', ['cleanJs', 'concatScripts']);
    gulp.watch('./dist/js/build.js', ['minifyScripts']);

});
