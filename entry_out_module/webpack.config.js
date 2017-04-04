//注:
//1.不再需要显示引入webpack模块
//2.引用文件路径尽量使用./
//3.webpack2默认支持es6 import解析 但是对于let 箭头函数并没有转换
//3.1 webpack2认为es6是个好的语言 不需要转换 如果要低版支持 需要自己配置es2015
//4.webpack2 建议使用__dirname(当前文件的完整绝对路径)进行路径配置，防止不同系统上 路径的错误


//例子1 =>只是做为程序的入口和出口为例子编译 没有任何效果
/*module.exports = {
	entry:'./js/first.js', //编译入口
	output:{//编译出口
		filename:'dest/1.js'
	}
}*/

//例子2
/*module.exports = {
	//数组入口  合并为一个文件
	entry:['./js/second.js','./js/second2.js'],
	output:{
		filename:'dest/2.js'
	}
}*/

//例子3 会将两个文件编译 最后生成成一个文件 
//但是会报错 因为a和b是单独的两个文件 不会合并
//会爆红色的错误
/*module.exports = {
	//对象入口  合并为一个文件
	entry:{a:'./js/second.js',b:'./js/second2.js'},
	output:{
		filename:'dest/3.js'
	}
}*/

//例子4 将两个文件编译 最终生成两个文件
//多入口配置
/*module.exports = {
	//对象入口  合并为一个文件
	entry:{a:'./js/second.js',b:'./js/second2.js'},
	output:{
		//filename 可以使用 []来对配置的文件输出名字进行定义
		//[name]原有名字   （就是支持对象配置）
		//[hash]哈希值(不理解就是随机数  不支持对象配置)  
		//[chunkhash] 原有块的名称 （支持对象配置）
		filename:'dest/[name].js'
	}
}*/

//例子5 配置path
/*module.exports = {
	entry:'./js/second.js',
	output:{
		//path用于设置生成文件的路径
		path:'/home/',
		filename:'[name].js' //如果非块级 默认main 参考例4的entry配置
	}
}*/

//例子6
/*module.exports = {
	entry:'./js/second.js',
	output:{
		//path虽然可以在当前结构下生成目录，但是建议使用__dirname绝对路径进行配置 保证各个系统完善运行
		//__dirname + '/名称'    __dirname 结尾是当前父级目录 所以拼接的时候注意添加 “/”
		path:__dirname+'/home3',
		filename:'index.js'
	}
}*/


//例子7
module.exports = {
	entry:'./js/second.js',
	output:{
		path:__dirname+'/homeIndex/js/plugins',
		//在实际中 path路径通常很长，可以通过publicPath进行缩短引用路径
		//如配置完成后  在界面引用为 src="/plugins/index.js"
		//目前个人只能通过webpack-dev-server实现 > 
		//有点鸡肋 不过可以程序和引用文件分离便于cdn部署
		//后期匹配webpack-dev-server的例子进行描述
		publicPath:'/plugins/',
		//chunkFilename 用于在未配置在entry中 但是通过依赖关系引入的模块进行命名
		//如果不进行设置 引用的名称会随机定义  可读性差
		chunkFilename:'[name].js', //其实写不写随意
		filename:'index.js'
	}
}