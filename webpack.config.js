const path = require('path');

module.exports = {
	entry: './src/index.js', // entry point to our project, where webpack will take all of our js files
	output: {
		filename: 'app.js', // webpack will combine all our js files into this file
		path: path.resolve(__dirname, 'dist'), // app.js will reside in this folder
	},
	devServer: {
		// config for our development server
		contentBase: path.join(__dirname, 'dist'),
		port: 9000,
	},
	mode: 'development',
};
