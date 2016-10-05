'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    clean = require('gulp-clean'),
    gutil = require('gulp-util'),
    liveReload = require('gulp-livereload'),
    minify = require('gulp-minify-css'),
    merge = require('merge-stream'),
    ncu = require('npm-check-updates');

gulp.task('update', function () {
    ncu.run({
        // Always specify the path to the package file
        packageFile:  'package.json',
        // Any command-line option can be specified here:
        silent:       true,
        jsonUpgraded: true
    }).then(function (upgraded) {
        console.log('dependencies to upgrade:', upgraded);
        console.log('Use: ncu --upgradeAll & npm install');
    });
});

gulp.task('clean', function (done) {
    gulp.src(['dist'], {
        read: false
    })
        .pipe(clean())
        .on('end', function () {
            gutil.log('All cleaned!');
        });
        done();
});

gulp.task('clean-js', function (done) {
    gulp.src(['dist/js/*.js'], {
        read: false
    })
        .pipe(clean());
        done();
});

gulp.task('clean-css', function (done) {
    gulp.src(['dist/css/*.css'], {
        read: false
    })
        .pipe(clean());
        done();
});

gulp.task('concat-minify-js', function (done) {
    gulp.src([
        "assets/libs/jquery-2.2.3.js",
        "assets/libs/modernizr-custom.js",
        "bower_components/wow/dist/wow.js",
        "assets/js/main.js"
    ])
        .pipe(concat('build'))
        .pipe(uglify())
        .pipe(rename({
            extname: ".min.js"
        }))
        .pipe(gulp.dest('dist/js'))
        .pipe(liveReload({
            auto: false
        }))
        .on('end', function () {
            gutil.log('Scripts concatenated and merged!');
        });
    done();
});

gulp.task('concat-minify-css', function (done) {
    var sassStream = gulp.src('src/scss/main.scss')
        .pipe(sass({
            errLogToConsole: true
        }));

    var cssStream = gulp.src([
        "bower_components/flexboxgrid/dist/flexboxgrid.css",
        "bower_components/wow/css/libs/animate.css"
    ]);

    var mergedStream = merge(sassStream, cssStream)
        .pipe(concat('build.min.css'))
        .pipe(minify({
            keepBreaks: true
        }))
        .pipe(gulp.dest('dist/css'))
        .on('end', function () {
            gutil.log('Styles concatenated and merged!');
        });

    done();

    return mergedStream;
});

gulp.task('watch', function (done) {
    gulp.watch('./src/scss/**/*.scss', gulp.series('concat-minify-css'));
    gulp.watch('./assets/js/*.js', gulp.series('concat-minify-js'));
    done();
});

gulp.task('default', gulp.series('concat-minify-css',
    gulp.parallel('concat-minify-js', 'watch')
));