var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function(){
    return gulp.src('sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({errLogToConsole: true, outputStyle: 'nested', sourceComments: 'map'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))

})
gulp.task('watch', function(){
gulp.watch('sass/**/*.scss', ['sass']);
})
