
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const prodConfig = {
	// mode默认production会压缩  development不会压缩,development默认没有Tree Shaking
	mode:'production',
	// development建议使用cheap-module-eval-source-map，production使用cheap-module-source-map
	devtool:'cheap-module-source-map',
	// enter 入口省略了main
	// entry: './src/index.js',
	// module里面配置图片首先安装file-loader
}
module.exports = merge(commonConfig,prodConfig);