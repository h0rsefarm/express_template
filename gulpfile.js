var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', function() {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
        verbose: true
    }))
        .pipe(jscs());
});

gulp.task('inject', function() {
    var wiredep = require( 'wiredep').stream;
    var inject = require('gulp-inject');
    var injectSrc = gulp.src(['./public/css/*.css',
                              './public/js/*.js'], {read: false});
    var injectOptions = {
        ignorePath: '/public'
    };
   var options = {
       // bowerJson: require('./bower.json'), // bower.json contents. default: require('./bower.json')
       // directory: './public/lib' // directory of bower packages. default: '.bowerrc'.directory || bower_components
       ignorePath: '../../public'
    };

    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});

gulp.task('serve', ['style', 'inject'], function() {
    var options = {
        script: 'app.js', // what program to run
        delayTime: 1, // how long til it runs
        env: {
            'PORT': 3000
        },
        watch: jsFiles // what files are being watched for changes?
    };

    return nodemon(options)
        .on('restart', function(ev) {
            console.log('Restarting....');
        });
});
