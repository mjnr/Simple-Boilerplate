// --------------------------------
// Task Watch
// --------------------------------

"use strict";

import gulp   from "gulp";
import config from "./config";

export default () => {
	gulp.watch(`${config.dev}views/**/*.html`, ["compile:template"]);
	gulp.watch(`${config.dev}styles/**/*.styl`, ["compile:styles"]);
	gulp.watch(`${config.dev}scripts/**/*.js`, ["lint:javascript", "bundle:javascript"]);
};
