'use strict';
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');

gulp.task('sass', function() {
  return gulp.src('./css/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
});

gulp.task('sass:watch', function () {
  gulp.watch('./css/*.scss', ['sass']);
});

gulp.task('minify-css', function () {
  return gulp.src('css/main.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('dist/css'));
});

gulp.task('min-js', function () {
  return gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
});

gulp.task('imagemin', function () {
  return gulp.src('css/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/css/img'));
});

gulp.task('main', ['sass:watch')

gulp.task('default', ['main']);
