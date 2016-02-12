// --------------------------------
// Task Optimize Images
// --------------------------------

"use strict";

import gulp            from "gulp";
import config          from "./config";
import gulpLoadPlugins from "gulp-load-plugins";

let plugins = gulpLoadPlugins({
	lazy: false,
	camelize: true
});

export default () => {
  return gulp.src(`${config.dev}images/**/*.{png,jpg,gif,svg}`)
  .pipe(plugins.plumber())
  .pipe(plugins.imagemin({
    optimizationLevel: config.production ? 7 : 3,
    progressive: true,
    interlaced: true
  }))
  .pipe(gulp.dest(`${config.dest}images/`));
};
