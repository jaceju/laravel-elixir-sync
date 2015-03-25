'use strict';

var gulp = require('gulp');
var elixir = require('laravel-elixir');

elixir.extend('sync', function (src, dest) {

    gulp.task('sync', function () {
        return gulp.src(src)
            .pipe(gulp.dest(dest));
    });

    this.registerWatcher('sync', src);

    return this.queueTask('sync');
});
