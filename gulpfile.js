const { src, dest, watch } = require('gulp');

const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css() {
    return src('./src/sass/**/*.sass')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(dest('./build/css'))
        .pipe(browserSync.stream());
}

function html() {
    return src('./src/*.html')
        .pipe(dest('./build'))
        .pipe(browserSync.stream());
}

function scripts() {
    return src('./src/scripts/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest('./build/scripts'))
        .pipe(browserSync.stream());
}

function dev() {

    html();
    css();
    scripts();

    browserSync.init({
        server: './build'
    });

    watch('./src/sass/**/*.sass', css);
    watch('./src/*.html', html);
    watch('./src/scripts/*.js', scripts);
}

exports.dev = dev;