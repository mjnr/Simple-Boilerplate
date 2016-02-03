"use strict";

import gulp from "gulp";
import config from "./config"
import gulpLoadPlugins from "gulp-load-plugins";

let plugins = gulpLoadPlugins({
	lazy: false,
	camelize: true
});

export default () => {
  return gulp.src([
    "gulpfile.js",
    "gulpfile.babel.js",
    `${config.dev}scripts/**/*.js`
  ])
	.pipe(plugins.eslint())
  .pipe(plugins.eslint.format());
}
