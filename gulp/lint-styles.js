// --------------------------------
// Task Lint JS
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
  return gulp.src(
		[
			`${config.dev}styles/**/*.styl`,
			`!${config.dev}styles/main.styl`,
			`!${config.dev}styles/vendors/*.styl`
		]
	)
	.pipe(plugins.stylint({
		config: ".stylintrc"
	}))
};
