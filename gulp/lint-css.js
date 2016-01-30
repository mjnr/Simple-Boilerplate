"use strict";

import gulp from "gulp";
import config from "./config"
import gulpLoadPlugins from "gulp-load-plugins";

let plugins = gulpLoadPlugins({
	lazy: false,
	camelize: true
});

export default () => {
	return gulp.src(`${config.dest}css/*.css`)
	.pipe(plugins.csslint(".csslintrc"))
	.pipe(plugins.csslint.reporter());
}
