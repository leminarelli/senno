"use strict";

// Set options as a parameter, environment variable, or rc file.
require            = require("esm")(module/*, options*/);

const gulp         = require('gulp');
const concat       = require('gulp-concat');
const uglify       = require('gulp-uglify');
const plumber      = require('gulp-plumber');
const sass         = require('gulp-sass');
const wait         = require('gulp-wait');
const minifyCss    = require('gulp-minify-css');
const stripDebug   = require('gulp-strip-debug');
const autoprefixer = require('gulp-autoprefixer');
const svgsprite    = require('gulp-svg-sprite');
const shell        = require('gulp-shell');
const browserSync  = require('browser-sync').create();

const _            = require('lodash');
const debounce     = require('./cmodules/debounce');

let env            = require('dotenv').config();
let Timer          = require('./cmodules/timer');

/*
** ROLLUP
*/

const rollup              = require('rollup');
const rollupConfig        = require('./rollup.config');
/*
**
*/

const paths = {
  src: './src'
  , dest: './public'
}

const dirs = {
  src: paths.src
  , dest: paths.dest
  , vendorsJs: `${ paths.src }/vendors`
};

// const shellCmd = ["rollup -c -w"];
// const shellCmdNoWatch = ["rollup -c"];

const Reset = "\x1b[0m"

const fontStyle = {
  Bright: "\x1b[1m"
  , Dim: "\x1b[2m"
  , Underscore: "\x1b[4m"
  , Blink: "\x1b[5m"
  , Reverse: "\x1b[7m"
  , Hidden: "\x1b[8m"

}

const fgColors = {
  Black: "\x1b[30m"
  , Red: "\x1b[31m"
  , Green: "\x1b[32m"
  , Yellow: "\x1b[33m"
  , Blue: "\x1b[34m"
  , Magenta: "\x1b[35m"
  , Cyan: "\x1b[36m"
  , White: "\x1b[37m"
}

const bgColors = {
  Black: "\x1b[40m"
  , Red: "\x1b[41m"
  , Green: "\x1b[42m"
  , Yellow: "\x1b[43m"
  , Blue: "\x1b[44m"
  , Magenta: "\x1b[45m"
  , Cyan: "\x1b[46m"
  , White: "\x1b[47m"
}

String.prototype.color = function(fgColor = "", bgColor = "", style = "") {
  return `${fgColor}${bgColor}${style}${this}${Reset}`;
}

const log = function(string, time) {
  console.log('%s %s%s'
    , (new Date()).toISOString().color(fgColors.Magenta)
    , string.color(fgColors.Green)
    , time ? ` after ${ time }` : ''
  );
}
const logError = function(string) {
  console.log('%s %s%s'
    , (new Date()).toISOString().color(fgColors.Magenta)
    , string.color(fgColors.Red)
  );
}

const gulpVendors = function(callback) {
  log('Starting vendors js...');
  let src = `${ dirs.vendorsJs }`;
  return gulp.src([
    `${src}/holder.js`,
    `${src}/jquery-3.3.1.min.js`,
    `${src}/jquery.easing.min.js`,
    `${src}/popper.min.js`,
    `${src}/bootstrap-material-design.js`,
    `${src}/moment.min.js`,
    `${src}/bootstrap-datetimepicker.min.js`,
    `${src}/jets.min.js`,
    `${src}/d3.v4.min.js`,
    `${src}/RadarChart.js`,
    `${src}/Matrix.js`,
    `${src}/echarts.min.js`,
    `${src}/echarts-map-world.js`,
    `${src}/lodash.min.js`,
    `${src}/jquery.textselect.js`,
    `${src}/redactor.js`,
    `${src}/redactor.limiter.js`,
    `${src}/redactor.fontFamily.js`,
    `${src}/redactor.fontFamily.js`,
    `${src}/materialize.js`,
    `${src}/autosize.min.js`,
    `${src}/pnotify.custom.min.js`,
    `${src}/iugu.v2.js`,
  ])
  .pipe(plumber())
  .pipe(stripDebug())
  .pipe(uglify())
  .pipe(concat(`vendors.js`))
  .on('error', function (err) {
    logError(err.toString());
  })
  .on('end', () => {
    log('Finished vendors js!');
    _.isFunction(callback) ? callback() : void 0;
  })
  .pipe(gulp.dest(`${dirs.dest}/javascripts`));
}

const gulpSass = debounce((callback) => {
  log("Sass started...");
  return gulp.src(`${dirs.src}/styles/**/*.scss`)
    .pipe(plumber())
    .pipe(wait(200))
    .pipe(sass({
      includePaths: [],
      onSuccess: function(){
        log("Sass generated")
      },
      style: 'expanded',
      sourceComments: 'normal'
    }))
    .pipe(autoprefixer({
        grid: true
    }))
    .on('error', function (err) { logError(err.toString()); })
    .on('end', () => {
        log("Sass generated!");
        _.isFunction(callback) ? callback() : void 0;
    })
    .pipe(gulp.dest(`${dirs.dest}/stylesheets`))
    .pipe(browserSync.stream());
}, 500);

const timer = new Timer();

let rollingUp = false;
let rollUpAgain = false;

//MEMORY LEAK
//NODE_OPTIONS=--max_old_space_size=4096

 
let rollupGulp = debounce((callback) => {
  if(rollingUp) {
    rollUpAgain = true;
    return;
  }
  rollingUp = true;
  log('Starting ROLLLLLLIIIIING UUUUUPPPPP...');
  timer.start();
  rollup
    .rollup(rollupConfig)
    .then(bundle => {
      bundle.write(rollupConfig.output);

      process.env.SENNO_ENV === 'development' ? log('Reloading Pages...') : void 0;

    }).catch(err => {

      logError(err.toString());
      logError(err.stack);

    }).finally(() => {

      timer.stop();

      log('Finished ROLLLLLLIIIIING UUUUUPPPPP!', timer.getTimespanString().color(fgColors.Magenta));

      rollingUp = false;

      if(rollUpAgain) {
        rollUpAgain = false;
        rollupGulp(callback);
      } else {
        _.isFunction(callback) ? callback() : void 0;
      }

    })
}, 500)

function production() {
  gulp.src(`${dirs.dest}/javascripts/main.js`)
    .pipe(stripDebug())
    .pipe(uglify())
    .on('error', function (err) { logError(err.toString()); })
    .pipe(gulp.dest(`${dirs.dest}/javascripts`));

  gulp.src(`${dirs.dest}/stylesheets/main.css`)
    .pipe(minifyCss({ keepSpecialComments: 1, processImport: false }))
    .on('error', function (err) { logError(err.toString()); })
    .pipe(gulp.dest(`${dirs.dest}/stylesheets`));
}

gulp.task('browser-sync', function() {
  browserSync.init({
      proxy: "localhost:3000"
  });
});

//dev js
gulp.task('vendors', (callback) => {
    gulpVendors(callback);
});

//dev sass
gulp.task('sass', (callback) => {
    gulpSass(callback);
});

gulp.task('vendorsCss', () => {
  let src = `${dirs.src}/vendors/css/`;
  return gulp.src([
    `${src}/fontawesome.5.3.1.solid.css`,
    `${src}/fontawesome.5.3.1.css`,
    `${src}/bootstrap-material-design.min.css`,
    `${src}/pretty-checkbox.min.css`,
    `${src}/fileicon.css`,
    `${src}/redactor.css`,
    `${src}/bootstrap-datetimepicker.min.css`,
    `${src}/pnotify.custom.min.css`
    // `${src}/style.css`  
  ])
  .pipe(concat(`vendors.css`))
  .pipe(minifyCss({processImport: false}))
  .on('error', function (err) { logError(err.toString()); })
  .pipe(gulp.dest(`${dirs.dest}/stylesheets`));
});


gulp.task('svgsprite', () => {
  gulp.src(`${dirs.src}/img/*.svg`)
  .pipe(svgsprite({
    mode: {
      symbol: {
        dest: '.',
        sprite: 'sprite.svg',
      }
    },
    svg: {
      namespaceClassnames : false,
      namespaceIDs  : false
    }
  }))
  .on('error', function(error){
    logError(error.toString())
  })
  .pipe(gulp.dest(`${dirs.dest}/img/`));
})

// production
gulp.task('production', production);
// productionWithRollup depends on: 'rollupNoWatch' and 'sass'
gulp.task('productionWithRollup', ['rollupNoWatch', 'sass'], production);

gulp.task('rollup', (callback) => {
  rollupGulp(callback);
  return gulp.watch(rollupConfig.input, rollupGulp);
});

gulp.task('rollupNoWatch', (callback) => {
  rollupGulp(callback);
});

gulp.task('sassWatch', function(callback) {
  gulpSass(callback);
  return gulp.watch(`${dirs.src}/styles/**/*.scss`, gulpSass);
})

gulp.task('vendorsWatch', function(callback) {
  gulpVendors(callback);
  return gulp.watch(`${ dirs.vendorsJs }/**/*.js`, gulpVendors);
})

gulp.task('init', function() {
  log(`SENNO_ENV: ${ process.env.SENNO_ENV }`);
  return true;
})

gulp.task('default', ['init', 'vendorsWatch', 'sassWatch', 'rollup'], function () {

});

gulp.task('styles', ['sass'], function () {
  gulp.watch(`${dirs.src}/styles/**/*.scss`, ['sass']);
});

gulp.task('build', ['init', 'vendorsCss', 'vendors', 'sass', 'rollupNoWatch', 'productionWithRollup'], function() {
  log('Finished gulp!');
  process.exit(0);
})
