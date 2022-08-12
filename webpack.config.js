const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
	},
	devtool: 'inline-source-map',
	devServer: {
	},
	// 插件
	plugins: [
		// 根据编译打包结果，自动生成 HTML 文件
		// 详细内容见 https://github.com/ampedandwired/html-webpack-plugin
		new HtmlWebpackPlugin({

			// 生成的文件名称
			filename: 'index.html',

			// 站点标题
			title: 'Document',

			// 编译结果注入的位置
			// 可配置 true | 'head' | 'body' | false
			inject: true
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		clean: true,
	},
};
