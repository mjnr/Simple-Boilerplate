"use strict";

import gulp from "gulp";
import browserSync from "browser-sync";
let reload = browserSync.reload;

export default () => {
	browserSync({
		server: "./"
	});
};
