var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    livereload = require('gulp-livereload');

gulp.task('compileSass', function(){
    return gulp.src('./sass/style.scss')
        .pipe(sass({ compass: false, sourcemap: false, style: 'expanded' }))
        .on('error', function (err) { console.log("[SASS]" + err); })
        .pipe(gulp.dest('./css/'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./sass/*.scss', ['compileSass']);
});

gulp.task('default', ['compileSass', 'watch'], function(){});