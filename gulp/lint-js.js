"use strict";

import gulp from "gulp";
import config from "./config"
import gulpLoadPlugins from "gulp-load-plugins";
import stylish from "jshint-stylish";


let plugins = gulpLoadPlugins({
	lazy: false,
	camelize: true
});

export default () => {
  return gulp.src([
    "gulpfile.js",
    "gulpfile.babel.js",
    `${config.dev}scripts/main.js`,
    `${config.dev}scripts/**/*.js`
  ]).pipe(plugins.jshint())
  .pipe(plugins.jshint.reporter(stylish));
}
