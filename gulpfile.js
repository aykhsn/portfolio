const { src, dest, watch, parallel } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require("gulp-sass-glob");
const ejs = require('gulp-ejs');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const replace = require('gulp-replace');
const browserSync = require('browser-sync');

/**********************
 ejs
***********************/
const compileEJS = () => 
    src( ['./src/ejs/*.ejs', '!./src/ejs/*/_*.ejs'] )
      .pipe( ejs({}, {}, { ext: '.html' }) )
      .pipe( rename({ extname: '.html' }) )
      .pipe( replace(/^[ \t]*\n/gmi, '') )
      .pipe( dest('.') );

const watchEJSFiles = () =>
	watch( ['./src/ejs/*.ejs', './src/ejs/components/_*.ejs'], compileEJS );

/**********************
 sass
***********************/
const compileSass = () =>
	src( 'src/sass/*.scss' )
		.pipe( sassGlob() )
		.pipe( sass().on( 'error', sass.logError ) )
		.pipe( autoprefixer( {} ))
		.pipe( dest( 'dist/css' ));

const watchSassFiles = () =>
	watch( 'src/sass/**', compileSass );

/**********************
 Javascript
***********************/
const compileJs = () =>
	src( 'src/js/*.js' )
		.pipe( uglify() )
		.pipe(rename({
            extname: '.min.js'
        }))
		.pipe( dest( 'dist/js' ));

const watchJsFiles = () =>
	watch( 'src/js/**', compileJs );

/**********************
 assets
***********************/
const compileAssets = () =>
	src( 'src/assets/*' )
		.pipe( imagemin() )
        .pipe( dest('dist/assets') );

const watchAssetsFiles = () =>
	watch( 'src/assets/*', compileAssets );

/**********************
 browser
***********************/
const syncBrowser = () =>
	browserSync.create().init({
		port: 3000,
        server : {
            baseDir : './',
            startPath : 'index.html'
        }
    });

const reloadBrowser = () =>
	browserSync.reload({});

const watchFiles = () =>
	watch( 'dist/**', reloadBrowser );

/**********************
 exports
***********************/
exports.default = parallel( watchSassFiles, watchEJSFiles, watchJsFiles, watchAssetsFiles, syncBrowser, watchFiles );
exports.build = parallel( compileEJS, compileSass, compileJs, compileAssets );

