var path = require('path');
const webpack = require('webpack');


const commonChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
	names: ['vendor', 'manifest'],
	filename: 'common.js'
});


module.exports = {
	entry: {
		app: './index.js',
		vendor: ['loadsh', 'bootstrap', 'whateverDependency']
	},

	output: {
		filename: '[name].bundle.js',
		path: path.join(_dirname, 'dist')	
	},

	 module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [['es2015']]
                }
            }, 
        ]
    }
};



//https://devheroes.io/webpack-2-para-iniciantes-o-que-e-porque-usar-e-como-iniciar/
//https://medium.com/@oieduardorabelo/o-que-h%C3%A1-de-novo-no-webpack-2-81ad9fa08927
//https://blog.codecasts.com.br/ecossistema-javascript-parte-01-plataformas-7a611608b58
//https://blog.codecasts.com.br/single-page-applications-onde-vivem-e-o-que-comem-4fc9a44f3de
//http://167.114.118.4/servlet/redirect.srv/sruj/swydxrbzivetd/p1/using-es6-in-the-browser-with-babel-6-and-webpack/
//https://medium.com/tableless/introdu%C3%A7%C3%A3o-ao-webpack-2-39e4c97d5b8c

