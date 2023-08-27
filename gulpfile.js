const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

const scssInput = 'public/styles/app.scss';
const cssOutput = 'public/styles/';

gulp.task('compile-scss', function() {
  return gulp
    .src(scssInput)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(cssOutput));
});

gulp.task('watch', function() {
  gulp.watch(scssInput, gulp.series('compile-scss'));
});

gulp.task('default', gulp.series('watch'));
