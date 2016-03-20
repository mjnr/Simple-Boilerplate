// --------------------------------
// Task Watch
// --------------------------------

"use strict";

import gulp   from "gulp";
import config from "./config";
import watch  from "gulp-watch";
import batch  from "gulp-batch";

export default () => {

	const watchers = {
		"views/**/*.html" : "compile:template",
		"styles/**/*.styl" : "compile:styles",
		"scripts/**/*.js" : ["lint:javascript", "bundle:javascript"],
		"images/**/*.{png,jpg,gif,svg}" : "optimize:images"
	};

	for (let watcher in watchers) {
		watch(`${config.dev}${watcher}`, batch((event, done) => {
			gulp.start(watchers[watcher], done);
		}));
	}
};
