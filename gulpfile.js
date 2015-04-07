var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload');

gulp.task('compileSass', function(){
    return gulp.src('./sass/style.scss')
        .pipe(sass())
        .on('error', function (err) { console.log("[SASS]" + err); })
        .pipe(gulp.dest('./css/'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./sass/*.scss', ['compileSass']);
});

gulp.task('default', ['compileSass', 'watch'], function(){});