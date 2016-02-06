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
import browserSync from "./gulp/browser-sync";
import watch from "./gulp/watch";
import optimizeImages from "./gulp/optimize-images";

import compileTemplate from "./gulp/compile-template";

import compileStyles from "./gulp/compile-styles";
import lintCSS from "./gulp/lint-css";

import bundleJavascript from "./gulp/bundle-js";
import lintJS from "./gulp/lint-js";


// --------------------------------
// Tasks
// --------------------------------

gulp.task("browser-sync", browserSync);
gulp.task("watch", ["compile:template", "build:styles", "build:javascript", "optimize:images", "browser-sync"], watch);
gulp.task("optimize:images", optimizeImages);

gulp.task("compile:template", compileTemplate);

gulp.task("compile:styles", compileStyles);
gulp.task("lint:css", lintCSS);

gulp.task("bundle:javascript", bundleJavascript);
gulp.task("lint:javascript", lintJS);

gulp.task("build:styles", ["compile:styles", "lint:css"]);
gulp.task("build:javascript", ["lint:javascript", "bundle:javascript"]);
gulp.task("build", ["compile:template", "build:styles", "build:javascript", "optimize:images"]);

gulp.task("default", ["watch"]);
