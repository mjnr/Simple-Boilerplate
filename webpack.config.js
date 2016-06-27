const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {
	entry: {
		vendor: ['jquery'],
		main: './dev/scripts/main.js'
	},
	output: {
		filename: 'bundle.[name].js',
		publicPath: 'dist',
		path: resolve(__dirname,'dist/assets/js')
	},
	devtool: 'sourcemap',
	debug: true,
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				query: { presets: ['es2015'] },
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
