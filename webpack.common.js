
const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
module.exports={
	entry:{
		main:'./src/index.js'
	},
	module:{
		rules:[
		{ test: /\.js$/, 
			// 排除在node_modules外，只有在js下面
			exclude: /node_modules/, 
			loader: "babel-loader" ,
			// options:{
			// 	// presets: [["@babel/preset-env",{
			// 	// 	targets: {
			// 	// 		// 67以上版本运行已经支持es6，不需要在进行转换，减小打包大小
			//  //          "chrome": "67"
			//  //        },
			// 	// 	// 用到哪个es6添加哪个,实现按需添加。减少打包文件大小
			// 	// 	useBuiltIns:'usage'
			// 	// }]]
			// 	 "plugins": [["@babel/plugin-transform-runtime",{
			// 	 	// "absoluteRuntime": false,
			//         "corejs": 2,
			//         "helpers": true,
			//         "regenerator": true,
			//         "useESModules": false,
			//         // "version": "7.0.0-beta.0"
			// 	 }]]
			// }
		},
		{
			test:/\.(jpg|png|gif|woff|svg|eot|ttf)$/,
			use:{
				// loader:'file-loader',直接生成图片
				loader:'url-loader',//生成base64位的字符串打包在js文件中
				options:{
					// placeholder 占位符
					name:'[name]_[hash].[ext]',
					outputPath:'images/',//规定生成的路径
					limit:1024//超小于此大小打包在js中，超过打包在规定生成的路径中

				}
			}
		},{
			test:/\.(woff|svg|eot|ttf)$/,
			use:{
				// loader:'file-loader',直接生成图片
				loader:'file-loader',//生成base64位的字符串打包在js文件中
			}
		},{
			test:/\.scss$/,
			use:[
			'style-loader',
			// 'css-loader',
			// css配置项
			{
				loader:'css-loader',
				options:{
					//在css里面引入别的css不会走下面的loader只会走style-loader，2代表可以走两次improt嵌套
					importLoaders:2,
					// 使用局部样式，避免全局使用
					// modules:true
				}
			},
			'sass-loader',
			'postcss-loader'
			]
		},{
			test:/\.css$/,
			use:['style-loader','css-loader','postcss-loader']
		}]
	},
	plugins:[
		
		new HtmlWebpackPlugin({
			template:'src/index.html'
		}),
		new CleanWebpackPlugin(),
		
	 ],		
	 output:{
		publicPath:'./',//可以把生成的js放在路径
		filename:'[name].js',
		path:path.resolve(__dirname, 'dist')
	}
}