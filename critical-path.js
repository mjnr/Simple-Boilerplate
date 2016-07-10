const glob     = require('glob'),
	  critical = require('critical'),
	  config   = require('./package.json').config;

function generateCriticalPath(err, files) {
	if (err) {
		throw err;
	}

	files.forEach((file, index) => {
		var page = file.split(config.dist).pop();

		critical.generate({
			inline: true,
			minify: true,
			base: config.dist,
			src: page,
			dest: config.dist + page,
			width: 1300,
			height: 900
		});
	});
}

glob(config.dist + '**/*.html', generateCriticalPath);
