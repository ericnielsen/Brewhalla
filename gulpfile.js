var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');

gulp.task('start',function() {
    nodemon ({
        script: 'server.js'
    }).on('start',['test']);
});

gulp.task('test',function(){
    return gulp.src('test.js')
        .pipe(mocha());
});

gulp.task('compress', function() {
    return gulp.src("*.js")
        .pipe(uglify())
        .pipe(gulp.dest("public/dist/"));
});


gulp.task('default', ['start', 'compress']);