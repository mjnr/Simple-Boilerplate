"use strict";

import gulp from "gulp";
import config from "./config"
import gulpLoadPlugins from "gulp-load-plugins";
import autoprefixer from "autoprefixer-stylus";
import jeet from "jeet";
import poststylus from "poststylus";
import rucksack from "rucksack-css";
import rupture from "rupture";

let plugins = gulpLoadPlugins({
	lazy: false,
	camelize: true
});

export default () => {
  return gulp.src(`${config.dev}styles/*.styl`)
  .pipe(plugins.plumber())
  .pipe(plugins.stylint())
  .pipe(config.production ? plugins.sourcemaps.init() : plugins.util.noop())
  .pipe(plugins.stylus({
    url: {
      name: "embedurl",
      paths: [`${config.dest}images`],
      limit: false
    },
    use: [poststylus(rucksack), autoprefixer(), jeet(), rupture()],
    compress: config.production ? true : false
  }))
  .pipe(config.production ? plugins.sourcemaps.write(".") : plugins.util.noop())
  .pipe(gulp.dest(`${config.dest}css/`));
}
