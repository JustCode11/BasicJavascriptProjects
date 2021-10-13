const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return src('sass/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(dest('style'))
}

function watchTask() {
    watch(['sass/**/*.scss', '*.html'], buildStyles);
}

exports.default = series(buildStyles, watchTask);