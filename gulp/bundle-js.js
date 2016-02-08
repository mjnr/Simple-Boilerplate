"use strict";

import gulp from "gulp";
import config from "./config";
import gulpLoadPlugins from "gulp-load-plugins";
import browserify from "browserify";
import source from "vinyl-source-stream";
import es from "event-stream";
import glob from "glob";
import browserSync from "browser-sync";
let reload = browserSync.reload;
let plugins = gulpLoadPlugins({
	lazy: false,
	camelize: true
});

export default done => {
  glob(`${config.dev}scripts/*.js`, (err, files) => {
		if (err) throw err;
    const bundles = files.map(file => {
      let bundles = browserify(file, {
        debug: true
      })
      .bundle();
      return bundles
      .pipe(plugins.plumber())
      .pipe(source(file.replace(`${config.dev}scripts/`, "")))
      .pipe(plugins.streamify(config.production ? plugins.uglify() : plugins.util.noop()))
      .pipe(gulp.dest(`${config.dest}javascript/`))
			.pipe(reload({stream: true}));
    });
    es.merge(bundles).on("end", done);
  })
};
