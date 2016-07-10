const webpack = require('webpack'),
      path    = require('path'),
      conf    = require('./package.json').config;

module.exports = {
	entry: {
		vendor: ['jquery'],
		main: './dev/scripts/main.js'
	},
	output: {
		filename: 'bundle.[name].js',
		publicPath: 'dist',
		path: path.resolve(__dirname, 'dist/assets/js')
	},
	eslint: {
		configFile: "./.eslintrc",
		failOnError: true
	},
	devtool: 'inline-source-map',
	debug: true,
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel?presets[]=es2015', 'eslint'],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		})
	]
}
