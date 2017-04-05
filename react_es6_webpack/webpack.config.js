var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var cssOptimize = require('optimize-css-assets-webpack-plugin');
/** 例1 正常编译react +webpack */
/** 对应的index.html页面 */
// module.exports = {
//     entry: './js/main.jsx',
//     output: {
//         filename: 'bundle.js'
//     },
//     module: {
//         rules: [{
//             test: /\.jsx?$/,
//             use: [{ //使用babel-loader解析es6 
//                 loader: 'babel-loader',
//                 //将.babelrc写入当前配置中 ,也可以抽取到外部的.babelrc文件 省略配置options
//                 options: {
//                     presets: ['es2015', 'react']
//                 }
//             }]
//         }]
//     }
// }

/**例2  */
/**抽取react react-dom设置cdn访问 减少文件体积 节约本地文件访问 */
/**second.html 文件查看 */
// module.exports = {
//     entry: './js/main.jsx',
//     output: {
////生成的文件只有100行代码
//         filename: 'bundle1.js'
//     },
//     module: {
//         rules: [{
//             test: /\.jsx?$/,
//             use: [{ //使用babel-loader解析es6 
//                 loader: 'babel-loader',
//                 //将.babelrc写入当前配置中 ,也可以抽取到外部的.babelrc文件 省略配置options
//                 options: {
//                     presets: ['es2015', 'react']
//                 }
//             }]
//         }]
//     },
//     externals: {
////体积较大的文件使用公网提供的cdn服务 节约资源
//         react: 'React',
//         'react-dom': 'ReactDOM'
//     }
// }


/**例3 设置插件对编译的代码进行压缩 */
/**引入bootstrap的样式 */
/**抽取css代码 单独建立文件 */
/**设置自动扩展后缀 */

// var extractCss = new ExtractTextPlugin("demo.css");
// module.exports = {
//     entry: './js/home.jsx',
//     output: {
//         filename: 'bundle3.js'
//     },
//     module: {
//         rules: [{
//                 test: /\.jsx?$/,
//                 use: [{ //使用babel-loader解析es6 
//                     loader: 'babel-loader',
//                     //将.bab elrc写入当前配置中 ,也可以抽取到外部的.babelrc文件 省略配置options
//                     options: {
//                         presets: ['es2015', 'react']
//                     }
//                 }]
//             },
//             //解析css
//             {
//                 test: /\.(css)|(scss)$/,
//                 use: ExtractTextPlugin.extract({
//                     fallback: 'style-loader',
//                     use: 'css-loader'
//                 })
//             },
//             //使用url-loader 对bootstrap下的依赖进行解析
//             { test: /\.(eot)|(ttf)|(svg)|(woff)|(eof)|(woff2)$/, use: ['url-loader'] }

//         ]
//     },
//     resolve: {
//         alias: { //设置bootstrap的别名  引入的时候 引入boot下的某一个文件 
//             boot: path.resolve(__dirname, 'node_modules/bootstrap/dist')
//         },
//         //设置自动扩展后缀名
//         extensions: ['.js', '.jsx', '.css', '.scss']
//     },
//     plugins: [
//         //提取公用css样式
//         new ExtractTextPlugin("demo.css"),
//         //CommonsChunkPlugin 提取js公用模块 =>我使用的cdn 内部代码又少 所以没有写对应的例子
//         //压缩js文件
//         new webpack.optimize.UglifyJsPlugin({
//             compress: {
//                 warnings: false
//             }
//         }),
//         //css压缩
//         new cssOptimize({
//             assetNameRegExp: /\.css$/g,
//             cssProcessorOptions: { discardComments: { removeAll: true } },
//             canPrint: true
//         })
//     ],
//     externals: {
//         //体积较大的文件使用公网提供的cdn服务 节约资源
//         react: 'React',
//         'react-dom': 'ReactDOM'
//     }
// }



//例4 
var extractCss = new ExtractTextPlugin("demo.css");
module.exports = {
    entry: './js/home.jsx',
    output: {
        filename: 'bundle3.js'
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                use: [{ //使用babel-loader解析es6 
                    loader: 'babel-loader',
                    //将.bab elrc写入当前配置中 ,也可以抽取到外部的.babelrc文件 省略配置options
                    options: {
                        presets: ['es2015', 'react']
                    }
                }]
            },
            //解析css
            {
                test: /\.(css)|(scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            //使用url-loader 对bootstrap下的依赖进行解析
            { test: /\.(eot)|(ttf)|(svg)|(woff)|(eof)|(woff2)$/, use: ['url-loader'] }

        ]
    },
    resolve: {
        alias: { //设置bootstrap的别名  引入的时候 引入boot下的某一个文件 
            boot: path.resolve(__dirname, 'node_modules/bootstrap/dist')
        },
        //设置自动扩展后缀名
        extensions: ['.js', '.jsx', '.css', '.scss']
    },
    plugins: [
        //提取公用css样式
        new ExtractTextPlugin("demo.css"),
        //CommonsChunkPlugin 提取js公用模块 =>我使用的cdn 内部代码又少 所以没有写对应的例子
        //压缩js文件
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        //css压缩
        new cssOptimize({
            assetNameRegExp: /\.css$/g,
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        })
    ],
    externals: {
        //体积较大的文件使用公网提供的cdn服务 节约资源
        react: 'React',
        'react-dom': 'ReactDOM'
    }
}