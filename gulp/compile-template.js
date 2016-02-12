// --------------------------------
// Task Compile Template
// --------------------------------

"use strict";

import gulp            from "gulp";
import config          from "./config";
import gulpLoadPlugins from "gulp-load-plugins";
import browserSync     from "browser-sync";

let reload = browserSync.reload;

let plugins = gulpLoadPlugins({
	lazy: false,
	camelize: true
});

export default () => {
	plugins.nunjucksRender.nunjucks.configure(`${config.dev}views/`, {
		autoescape: true,
		throwOnUndefined: true,
		trimBlocks: true,
		lstripBlocks: true,
		watch: false
	});
	return gulp.src(`${config.dev}views/pages/**/*.html`)
	.pipe(plugins.nunjucksRender())
	.pipe(config.production ? plugins.minifyHtml() : plugins.util.noop())
	.pipe(gulp.dest("./"))
	.pipe(reload({stream: true}))
};
