"use strict";

import gulpLoadPlugins from "gulp-load-plugins";

let plugins = gulpLoadPlugins({
	lazy: false,
	camelize: true
});

export default {
	production: !!plugins.util.env.production,
	dev: "./src/",
	dest: "./assets/",
	bower: "./bower_components/"
};
