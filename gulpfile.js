// --------------------------------
// Load modules
// --------------------------------
var gulp = require("gulp"),
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
	};

// --------------------------------
// Task: Nunjucks
// --------------------------------
gulp.task("nunjucks", function(){
	gulp.src(paths.dev + "views/pages/**/*.html")
	.pipe(plugins.plumber())
	.pipe(plugins.nunjucksHtml({
		searchPaths: [paths.dev + "views/"]
	}))
	.pipe(plugins.minifyHtml())
	.pipe(gulp.dest("./"))
	.pipe(plugins.notify({message: "Successfully compiled templates", onLast: true}))
});

// --------------------------------
// Task: Stylus
// --------------------------------
gulp.task("stylus", function(){
	gulp.src(paths.dev + "styles/*.styl")
	.pipe(plugins.plumber())
	.pipe(plugins.stylus({
		use: [poststylus(rucksack), autoprefixer(), jeet(), rupture()],
		compress: true
	}))
	.pipe(gulp.dest(paths.dest + "css"))
	.pipe(plugins.notify({message: "Successfully compiled styles", onLast: true}))
});

// --------------------------------
// Task: Imagemin
// --------------------------------
gulp.task("imagemin", function(){
	gulp.src(paths.dev + "images/**/*.{png,jpg,gif}")
	.pipe(plugins.plumber())
	.pipe(plugins.imagemin({
		optimizationLevel: 7,
		progressive: true,
		multipass: true
	}))
	.pipe(gulp.dest(paths.dest + "images/"))
	.pipe(plugins.notify({message: "Successfully optimized images", onLast: true}))
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
// Task: Watch
// --------------------------------

gulp.task("default", ["nunjucks","stylus","imagemin","browser-sync"], function(){
	gulp.watch(paths.dev + "/**/*.styl", ["stylus"]).on("change", reload);
	gulp.watch(paths.dev + "/**/*.html", ["nunjucks"]).on("change", reload);
});