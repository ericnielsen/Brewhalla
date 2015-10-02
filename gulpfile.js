var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var browserSync = require('browser-sync').create();

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
        .pipe(gulp.dest('public/dist/'));
});

gulp.task('minify-html', function() {
    var opts = {
        conditionals: true,
        spare:true
    };

    return gulp.src('index.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('public/dist/'));
});

gulp.task('minify-css', function() {
    return gulp.src('default.css')
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('public/dist/'));
});

gulp.task('images', function () {
    return gulp.src('image/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('public/dist/image'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "localhost:1339"
    });
});

gulp.task('default', ['start', 'compress', 'minify-html', 'minify-css', 'images', 'browser-sync']);

require('require-dir')('./gulp');

