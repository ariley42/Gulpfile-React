'use strict';
const gulp = require('gulp'),
sass = require('gulp-sass'),
uglify = require('gulp-uglify'),
 rename = require('gulp-rename'),
 changed = require('gulp-change'),
 cleanCSS = require('gulp-clean-css'),
 sourcemaps = require('gulp-sourcemaps'),
 {src, dest} = require('gulp'),
 {series, parallel} = require('gulp'),
 watch = require('gulp-watch'),
 path = require('path');




//scss/scc
const files = {
    SCSS_SRC: './Assets/scss/**/*.scss',
    SCSS_DEST: './Assets/css', 
    htmlpath: path.join(__dirname, '../public/index.html')
}

//compile css
function style () {
    return gulp
    .src(files.SCSS_SRC)
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    
    .pipe(gulp.dest('css')
    );
};





//watch function
function watchTask() {
    return 
    watch(
        files.SCSS_SRC, files.htmlpath
        );
    
}

//expose the task
exports.watchTask = watchTask

//expose to export task
exports.style = style;
exports.default = series(
    (style), 
    (watchTask));