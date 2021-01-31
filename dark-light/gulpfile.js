'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

//Gult task oluşturma
gulp.task('sass', function() {
    return gulp.src('assets/sass/app.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/css'));

})

//gulğ tast watch
gulp.task('watch', function()  {
    gulp.watch('assets/sass/**/*.scss', gulp.series('sass'));

})

//gulp tast default run
gulp.task('default', gulp.series('watch'))
