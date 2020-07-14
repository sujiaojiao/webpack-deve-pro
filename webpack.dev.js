
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
	// mode默认production会压缩  development不会压缩,development默认没有Tree Shaking
	mode:'development',
	// development建议使用cheap-module-eval-source-map，production使用cheap-module-source-map
	devtool:'cheap-module-eval-source-map',
	// enter 入口省略了main
	// entry: './src/index.js',
	
	devServer:{
		contentBase:'./dist',//
		open:true, //自动打开浏览器
		// proxy:{//代理
		// 	'api':'http://'
		// },
		hot:true,//开启热更新只替换样式不刷新页面
		// hotOnly:true,//即使hot不生效也不更新页面
		port: 9000 //端口号
	},
	// module里面配置图片首先安装file-loader
	
	plugins:[
		new webpack.HotModuleReplacementPlugin()
		
	 ],
	 // production下不必写，自动会写好
	 optimization:{
	 	usedExports:true
	 },
}

module.exports=merge(commonConfig,devConfig);