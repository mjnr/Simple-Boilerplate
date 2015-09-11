// --------------------------------
//	Gulpfile
// --------------------------------
//
//	Available tasks:
//	`gulp`
//	`gulp compile:html`
//	`gulp compile:css`
//	`gulp optimize:images`
//	`gulp build:javascript`
//
// --------------------------------

// --------------------------------
// Load modules
// --------------------------------

var gulp = require("gulp"),
	browserify = require("browserify"),
	source = require("vinyl-source-stream"),
	browserSync = require("browser-sync"),
	reload = browserSync.reload,
	autoprefixer = require("autoprefixer-stylus"),
	jeet = require("jeet"),
	poststylus = require("poststylus"),
	rucksack = require("rucksack-css"),
	rupture = require("rupture"),
	plugins = require("gulp-load-plugins")({
		lazy: false,
		camelize: true
	}),
	paths = {
		dev: "src/",
		dest: "assets/",
		bower: "bower_components/"
	};

// --------------------------------
// Task: compile:html
// --------------------------------

gulp.task("compile:html", function(){
	gulp.src(paths.dev + "views/pages/**/*.html")
	.pipe(plugins.plumber())
	.pipe(plugins.nunjucksHtml({
		searchPaths: [paths.dev + "views/"]
	}))
	.pipe(plugins.minifyHtml())
	.pipe(gulp.dest("./"))
	.pipe(plugins.notify({ message: "Successfully compiled templates", onLast: true }))
});

// --------------------------------
// Task: compile:css
// --------------------------------

gulp.task("compile:css", function(){
	gulp.src(paths.dev + "styles/*.styl")
	.pipe(plugins.plumber())
	.pipe(plugins.sourcemaps.init())
	.pipe(plugins.stylus({
		use: [poststylus(rucksack), autoprefixer(), jeet(), rupture()],
		compress: true
	}))
	.pipe(plugins.sourcemaps.write("."))
	.pipe(gulp.dest(paths.dest + "css/"))
	.pipe(plugins.notify({ message: "Successfully compiled styles", onLast: true }))
});

// --------------------------------
// Task: require:javascript
// --------------------------------

gulp.task("build:javascript", function(){
	return browserify({ entries: ["src/scripts/main"], debug: true })
	.bundle()
	.pipe(plugins.plumber())
	.pipe(source("build.js"))
	.pipe(plugins.streamify(plugins.uglify()))
	.pipe(gulp.dest(paths.dest + "javascript/"))
	.pipe(plugins.notify({ message: "Successfully generated package", onLast: true }))
});

// --------------------------------
// Task: optimize:images
// --------------------------------

gulp.task("optimize:images", function(){
	gulp.src(paths.dev + "images/**/*.{png,jpg,gif}")
	.pipe(plugins.plumber())
	.pipe(plugins.imagemin({
		optimizationLevel: 7,
		progressive: true,
		multipass: true
	}))
	.pipe(gulp.dest(paths.dest + "images/"))
	.pipe(plugins.notify({ message: "Successfully optimized images", onLast: true }))
});

// --------------------------------
// Task: BrowserSync
// --------------------------------

gulp.task("browser-sync", function(){
	browserSync({
		server: "./"
	})
});

// --------------------------------
// Task: Default
// --------------------------------

gulp.task("default", ["compile:html","compile:css","build:javascript","optimize:images","browser-sync"], function(){
	gulp.watch(paths.dev + "views/**/*.html", ["compile:html"]).on("change", reload);
	gulp.watch(paths.dev + "styles/**/*.styl", ["compile:css"]).on("change", reload);
	gulp.watch(paths.dev + "scripts/**/*.js", ["build:javascript"]).on("change", reload);
});