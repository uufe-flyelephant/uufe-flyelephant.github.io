# Webpack

## 0. 背景

### 0.1 为什么需要构建工具？
* ES6、JSX 语法转换
* CSS 前缀补全、预处理器（less、sass）
* 压缩混淆
* 图片压缩
* ......

### 0.2 构建演变

```
                requirejs/seajs
ant + YUI tool    -> grunt ->    fis3/gulp -> rollup/webpack/parcel
                  任务，磁盘 IO
```

### 0.3 选择 webpack
* 社区生态丰富，官方插件丰富
* 配置灵活，插件化扩展
* 官方更新迭代快，webpack4

## 1. 概念

### 1.1. 基本概念

1. webpack  

    现代 JavaScript 应用程序的静态模块打包器(module bundler)
    * *web/node*
    * *静态，编译时模块分析*

    递归构建依赖关系图(dependency graph)，节点是模块，模块打包成一个或多个 bundle

    webpack 默认配置文件：webpack.config.js  
    通过 webpack --config 指定配置文件

    ```bash
    npm i webpack webpack-cli --save-dev
    ./node_modules/.bin/webpack -v
    ```

2. 核心概念

    * 入口(entry)  
        构建依赖图的开始模块，以此分析其余的直接或间接依赖，最后输出 bundles 文件  
        *应用程序多入口的情况*

        ```javascript
        module.exports = {
            entry: './src/main.js'
        }
        module.exports = {
            entry: {
                main: './src/main.js',
                share: './src/share/main.js',   // 多页面
                vendors: '.src/vendors.js'  // 第三方库入口
            }
        }
        ```

        *DllPlugin?*

    * 输出(output)  
        描述如何输出 webpack 创建的 bundles，如何命名、目标路径等等，只有一个输出配置

        ```javascript
        module.exports = {
            output: {
                filename: 'bundle.js',
                path: './dist'
            }
        }
        // 多入口输出使用占位符
        module.exports = {
            output: {
                filename: '[name].js',
                path: './dist'
            }
        }
        // CDN
        module.exports = {
            path: './cdn/assets/[hash]',
            publicPath: 'https://cdn.example.com/assets/[hash]/'
        }
        // build 入口注入
        __webpack_public_path__
        ```

    * loader  
        处理非 JavaScript 文件，loader 将所有类型文件转为模块，生成依赖图及最终 bundle  
        *test/use 属性配置*

        ```bash
        npm install css-loader ts-loader --save-dev 
        ```
        ```javascript
        module.exports = {
          module: {
            rules: [
              { test: /\.css$/, use: 'css-loader' },
              { test: /\.ts$/, use: 'ts-loader' }
            ]
          }
        }
        
        // 内联 loader
        import Styles from 'style-loader!css-loader?modules!./styles.css'
        ```

        1. 链式传递，流水线 pipeline，一组 loader 按相反顺序执行
        2. 同步/异步
        3. 查询参数，传递配置，或 options 配置
        4. package.json 中的 loader 字段，npm 模块导出 loader

    * 插件(plugins)  
        类似于 grunt/gulp 中的 task，如打包优化、压缩、定义环境变量等等任务  
        *需要 new 创建实例，以传入参数*

        ```javascript
        module.exports = {
          plugins: [
            new webpack.optimize.UglifyJsPlugin(),
            new HtmlWebpackPlugin({template: './src/index.html'})
          ]
        }
        ```

        插件是一个具有 apply 属性的 js 对象，会被 webpack compiler 调用，可在整个编译声明周期访问

        ```javascript
        const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

        class ConsoleLogOnBuildWebpackPlugin {
          apply(compiler) {
            compiler.hooks.run.tap(pluginName, compilation => {
              console.log("webpack 构建过程开始！");
            });
          }
        }

        // Node API
        const webpack = require('webpack'); //访问 webpack 运行时(runtime)
        const configuration = require('./webpack.config.js');

        let compiler = webpack(configuration);
        compiler.apply(new webpack.ProgressPlugin());

        compiler.run(function(err, stats) {
          // ...
        });
        ```

    * 模式
        mode: 'development' | 'production'


### 1.3. 配置(configuration)

`module.exports` 导出配置对象

### 1.4. 模块及解析

1. webpack 中的模块  

  * ES2015 import 语句
  * CommonJS require() 语句
  * AMD define 和 require 语句
  * css/sass/less 中 @import 语句
  * 样式 `url(...)` 和 html 中 `<img src=...>` 的图片链接

2. 模块解析  
  webpack 使用 [enhanced-resolve](https://github.com/webpack/enhanced-resolve) 来解析文件路径  
  * 绝对路径
  * 相对路径
  * 模块路径  
    `import "app/main"`  
    在 resolve.modules 配置项中所指定的所有目录内搜索  
    resolve.alias 配置项配置别名，resolve.extension 配置文件的扩展名，作为引用路径不指定文件扩展名时使用

### 1.5. 依赖图
依赖也包括非代码资源，如图片或 web 字体

### 1.6. manifest 与 runtime
管理所有模块的交互，在浏览器运行时，webpack 用来连接模块化的应用程序的所有代码。  
runtime 包含在模块交互时，连接模块所需的加载和解析逻辑。包括浏览器中的已加载模块的连接，以及懒加载模块的执行逻辑。  
当编译器(compiler)开始执行、解析和映射应用程序时，它会保留所有模块的详细要点。这个数据集合称为 "Manifest"，当完成打包并发送到浏览器时，会在运行时通过 Manifest 来解析和加载模块。无论你选择哪种模块语法，那些 import 或 require 语句现在都已经转换为 `__webpack_require__` 方法，此方法指向模块标识符(module identifier)。通过使用 manifest 中的数据，runtime 将能够查询模块标识符，检索出背后对应的模块。

### 1.7. 热更新

模块热替换（HMR - Hot Module Replacement）

应用程序中置换(swap in and out)模块：  
  1. 应用程序代码要求 HMR runtime 检查更新
  2. HMR runtime（异步）下载更新，然后通知应用程序代码
  3. 应用程序代码要求 HMR runtime 应用更新
  4. HMR runtime（同步）应用更新

更新的内容有两部分：
  1. 更新后的 manifest(JSON)
  2. 一个或多个更新后的 chunk (JavaScript)

*refs:*  
  [深入浅出 Webpack](http://webpack.wuhaolin.cn)