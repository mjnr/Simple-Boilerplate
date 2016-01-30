"use strict";

import gulp from "gulp";
import config from "./config"
import gulpLoadPlugins from "gulp-load-plugins";

let plugins = gulpLoadPlugins({
	lazy: false,
	camelize: true
});

export default () => {
	return gulp.src(`${config.dev}views/pages/**/*.html`)
	.pipe(plugins.nunjucksHtml({
		searchPaths: [`${config.dev}views/`],
		autoescape: true
	}))
	.pipe(config.production ? plugins.minifyHtml() : plugins.util.noop())
	.pipe(gulp.dest("./"));
}
