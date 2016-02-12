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

import gulp             from "gulp";
import browserSync      from "./gulp/browser-sync";
import watch            from "./gulp/watch";
import optimizeImages   from "./gulp/optimize-images";
import compileTemplate  from "./gulp/compile-template";
import compileStyles    from "./gulp/compile-styles";
import lintCSS          from "./gulp/lint-css";
import bundleJavascript from "./gulp/bundle-js";
import lintJS           from "./gulp/lint-js";


// --------------------------------
// Tasks
// --------------------------------

// Task browser-sync
// --------------------------------
gulp.task("browser-sync", browserSync);

// Task watch
// --------------------------------
gulp.task("watch", ["compile:template", "build:styles", "build:javascript", "optimize:images", "browser-sync"], watch);

// Task optimize:images
// --------------------------------
gulp.task("optimize:images", optimizeImages);

// Task compile:template
// --------------------------------
gulp.task("compile:template", compileTemplate);

// Task compile:styles
// --------------------------------
gulp.task("compile:styles", compileStyles);

// Task lint:css
// --------------------------------
gulp.task("lint:css", lintCSS);

// Task bundle:javascript
// --------------------------------
gulp.task("bundle:javascript", bundleJavascript);

// Task lint:javascript
// --------------------------------
gulp.task("lint:javascript", lintJS);

// Task build:styles
// --------------------------------
gulp.task("build:styles", ["compile:styles", "lint:css"]);

// Task build:javascript
// --------------------------------
gulp.task("build:javascript", ["lint:javascript", "bundle:javascript"]);

// Task build
// --------------------------------
gulp.task("build", ["compile:template", "build:styles", "build:javascript", "optimize:images"]);

// Task Default
// --------------------------------
gulp.task("default", ["watch"]);
