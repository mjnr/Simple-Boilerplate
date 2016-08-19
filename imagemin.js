'use strict';

const imagemin = require('imagemin'),
	path = require('path'),
	glob = require('glob'),
	conf = require('./package.json').config,
	paths = {
		dist: path.resolve(conf.images.dist),
		dev: path.resolve(conf.images.dev)
	};


function optimizeImages(err, files) {
	if (err) throw err;

	files.forEach((file) => {
		const folder = path.dirname(file).replace(paths.dev.split('/*').shift(), paths.dist);

		imagemin([file], folder);
	});
	
	console.log(`${files.length} minified images.`);
}

glob(paths.dev, optimizeImages);
