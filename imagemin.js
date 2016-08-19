'use strict';

const imagemin = require('imagemin'),
	imageminMozjpeg = require('imagemin-mozjpeg'),
	imageminPngquant = require('imagemin-pngquant'),
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

		imagemin([file], folder, {
		    plugins: [
		        imageminMozjpeg(),
		        imageminPngquant({quality: '65-80'})
		    ]
		});
	});

	console.log(`${files.length} minified images.`);
}

glob(paths.dev, optimizeImages);
