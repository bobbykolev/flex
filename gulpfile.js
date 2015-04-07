var gulp = require('gulp'),
    sass = require('gulp-sass'),
    gulpUtil = require('gulp-util'),
    livereload = require('gulp-livereload');

gulp.task('compileSass', function(){
    return gulp.src('./sass/style.scss')
        .pipe(sass())
        .on('error', function (err) { console.log("[SASS]" + err.message); })
        .pipe(gulp.dest('./css/'));
});

gulp.task('live', function() {
    return gulp.src(['./'])
    .pipe(gulpUtil.noop())
    .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./sass/**/*.scss', ['compileSass']);
    gulp.watch(['./**/*.*', '!./node_modules/**/*.*', '!./lib/**/*.*'], ['live']);
});

gulp.task('default', ['compileSass', 'watch'], function(){});