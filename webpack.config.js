const path = require('path');

module.exports = (env, argv) => {
	return {
		mode: 'production',
		entry: {
			index : path.join(__dirname, 'src' ,'index.ts'),
		},

		output: {
      		path: path.join(__dirname, 'www'),
      		filename: 'test_npm.js',
      		library: 'test_npm',
      		libraryTarget: 'umd'
    	},
    	resolve: {
    		extensions: ['.ts', '.js'],
    		modules: [
    			"node_modules"
    		]
    	},
		module: {
			rules: [
				{
					test : /\.ts$/,
					use: [{ loader: 'ts-loader'}]
				}
			]
		},
		devServer: {
			contentBase: "www",
			port: 8080
		}
	}
};