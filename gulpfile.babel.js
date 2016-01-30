"use strict";

// --------------------------------
//	Gulpfile
// --------------------------------
//
//	Available tasks:
//
//	`gulp` or `gulp watch`.
//	`gulp build:javascript`.
//	`gulp build:styles`.
//
//	`gulp build`.
//	`gulp build --production`.
//
//	`gulp compile:template`
//	`gulp compile:styles`
//	`gulp lint:javascript`
//	`gulp bundle:javascript`
//
// --------------------------------

// --------------------------------
// Modules
// --------------------------------

import gulp from "gulp";
import config from "./gulp/config"
import gulpLoadPlugins from "gulp-load-plugins";
import compileTemplate from "./gulp/compile-template"
import compileStyles from "./gulp/compile-styles"
import lintCSS from "./gulp/lint-css"
import bundleJavascript from "./gulp/bundle-js"
import lintJS from "./gulp/lint-js"
import optimizeImages from "./gulp/optimize-images"
import browserSync from "browser-sync"
let reload = browserSync.reload;

let plugins = gulpLoadPlugins({
	lazy: false,
	camelize: true
});

// --------------------------------
// Tasks
// --------------------------------

gulp.task("compile:template", compileTemplate);
gulp.task("compile:styles", compileStyles);
gulp.task("lint:css", lintCSS);
gulp.task("bundle:javascript", bundleJavascript);
gulp.task("lint:javascript", lintJS);
gulp.task("optimize:images", optimizeImages);
gulp.task("browser-sync", () => {
	browserSync({
		server: "./"
	});
});

// --------------------------------
// Build and Watch Tasks
// --------------------------------

gulp.task("build:styles", ["compile:styles", "lint:css"]);
gulp.task("build:javascript", ["lint:javascript", "bundle:javascript"]);

gulp.task("watch", ["compile:template", "build:styles", "build:javascript", "optimize:images", "browser-sync"], () => {
	gulp.watch(`${config.dev}views/**/*.html`, ["compile:template"]).on("change", reload);
	gulp.watch(`${config.dev}styles/**/*.styl`, ["compile:styles"]).on("change", reload);
	gulp.watch(`${config.dev}scripts/**/*.js`, ["lint:javascript", "bundle:javascript"]).on("change", reload);
});

gulp.task("default", ["watch"]);

gulp.task("build", ["compile:template","build:styles","build:javascript","optimize:images"]);
