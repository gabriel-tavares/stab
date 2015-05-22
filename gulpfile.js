var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function() {
   gulp.src('sass/default.scss')
       .pipe(sass())
       .pipe(minifycss())
       .pipe(autoprefixer('last 20 version'))
       .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function() {
   gulp.watch('sass/**/*.scss', ['css']);
});

gulp.task('default', ['watch']);