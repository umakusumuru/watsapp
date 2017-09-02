var
// modules
    gulp = require('gulp'),
    htmlclean = require('gulp-htmlclean'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    htmlmin = require('gulp-htmlmin'),
    // development mode?
    devBuild = (process.env.NODE_ENV !== 'production'),

    // folders
    folder = {
        src: 'src/',
        build: 'build/'
    };


gulp.task('copy', function() {
    gulp.src('index.html')
        .pipe(gulp.dest('services'))
});
gulp.task('log', function() {
    gutil.log('== My Log Task ==')
});
gulp.task('sass', function() {
    gulp.src('styles/main.scss')
        .pipe(sass({ style: 'expanded' }))
        .on('error', gutil.log)
        .pipe(gulp.dest('assets'))
});

gulp.task('js', function() {
    gulp.src('app/testreg/*.js')
        .pipe(uglify())
        .pipe(concat('script.js'))
        .pipe(gulp.dest('dist'))
});
gulp.task('css', function() {
    gulp.src('css/styles.css')
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist'));
});
gulp.task('connect', function() {
    connect.server({
        root: '.',
        livereload: true
    })
});
gulp.task('html', function() {
    return gulp.src(['app/testreg/testreg.html', 'testpage.html'])
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});
// just run  as gulp to run group of commands
gulp.task('default', ['coffee', 'js']);