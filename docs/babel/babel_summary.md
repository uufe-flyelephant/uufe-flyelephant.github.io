## Babel 是什么
官网文档: https://www.babeljs.cn/docs/

**Babel 是一个 JavaScript 编译器**
Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中，Babel 能为你做的事情：

- 语法转换
- Polyfill

## 插件系统

Babel 是一个编译器。主要的包是 babel-core,负责代码解析、转换抽象语法树，然后通过各种插件做代码转换，最后根据转换后的抽象语法树生成最终的代码。现在主要关注，各种插件的功能，编译原理暂不介绍。

```
原始代码 --> [Babel Plugin] --> 转换后的代码
```

Babel, 官网提供了一个 ```repl``` 环境: 中文官网 https://www.babeljs.cn/repl  和 英文官网 https://babeljs.io/repl

在这个环境中，可以测试每个特定的插件的功能。

## Presets
**一个特定的preset可以简单理解为是一组特定的plugins的集合**

官方预设的插件:
-  @babel/preset-env
-  @babel/preset-react
-  @babel/preset-flow
-  @babel/preset-typescript
-  @babel/preset-typescript
-  @vue/app

## @babel/preset-env

默认情况下会转译所有**符合规范**的代码，处于各个stage 阶段的语法，不会包含在这个预制中。

preset-env 是智能的。只管用，不需要去管你的运行时环境哪个语法或者api 需要还是不需要。这个特性，体现在两个主要的配置项：
- useBuiltIns

    该配置项有3个可选值"usage", "entry", "false"。默认为false。
    - entry 

        需要在项目入口处，引入@babel/polyfill，babel在做代码转换的时候，会转成
        ```
            import "core-js/modules/es7.string.pad-start";
            import "core-js/modules/es7.string.pad-end";
        ```
        这个选项并不智能。
    - usage

        识别所有代码中使用到的高级API，自动在该文件头部注入相应的polyfill包。 

        ```
            // a.js
            var a = new Promise();

            // b.js
            var b = new Map();

            // .babelrc
            {
            "presets": [["@babel/env", {"useBuiltIns": "usage"}]]
            }
        ```
        转换后

        ```
            // a.js
            import "core-js/modules/es6.promise";
            var a = new Promise();

            // b.js
            import "core-js/modules/es6.map";
            var b = new Map();
        ```
        这个选项，很智能。
- targets
    ```
        {
            "presets": [
                [
                    "@babel/env",
                    {
                        "useBuiltIns": "usage",
                        "targets": {
                            "chrome": "64"
                        }
                    }
                ]
            ]
        }
    ```

    设置完targets后，babel只会引入目标环境不支持的api和语法。
    更多配置项，请参考： https://www.babeljs.cn/docs/babel-preset-env

**targets + useBuiltIns**两个配置项可以缩小代码体积


## Stage 

如上所述，Babel7 开始弃用，处于Stage阶段的预设。如果还需要使用这些预设，最少单独引入插件。

```
    {
  plugins: [
    // Stage 0
    "@babel/plugin-proposal-function-bind",

    // Stage 1
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-logical-assignment-operators",
    ["@babel/plugin-proposal-optional-chaining", { loose: false }],
    ["@babel/plugin-proposal-pipeline-operator", { proposal: "minimal" }],
    ["@babel/plugin-proposal-nullish-coalescing-operator", { loose: false }],
    "@babel/plugin-proposal-do-expressions",

    // Stage 2
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions",

    // Stage 3
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-syntax-import-meta",
    ["@babel/plugin-proposal-class-properties", { loose: false }],
    "@babel/plugin-proposal-json-strings",
  ],
}
```
  
## 配置Babel
- babel.config.js
    编程式配置
    ```
        // Javascript
        module.exports = function () {
        const presets = [ ... ];
        const plugins = [ ... ];

        return {
            presets,
            plugins
         };  
        }
    ```
- .babelrc

    ```
        // JSON
        {
        "presets": [...],
        "plugins": [...]
        }
    ```

## 插件顺序

**插件的排列顺序很重要**

这意味着如果两个转换插件都将处理“程序（Program）”的某个代码片段，则将根据转换插件或 preset 的排列顺序依次执行。
- 插件在 Presets 前运行。
- 插件顺序从前往后排列。
- Preset 顺序是颠倒的（从后往前）。

例如：

```
{
  "plugins": ["transform-decorators-legacy", "transform-class-properties"]
}
```
先执行 transform-decorators-legacy ，在执行 transform-class-properties。

重要的是，preset 的顺序是 也是颠倒的。如下设置：

```
{
  "presets": ["es2015", "react", "stage-2"]
}
```
将按如下顺序执行：stage-2、react 然后是 es2015。

官方说: 这主要的是为了确保向后兼容

## Babel-loader

babel 7.x对应的babel-loader版本为8.x。之前的babel 6.x对应的babel-loader版本为7.x。 

webpack babel-loader: https://webpack.js.org/concepts/loaders/
```
    module: {
        rules: [
            {
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-env']
                }
            }
            }
        ]
    }
```

webpack执行打包时，优先读取options中的配置。如果没有设置options属性，再从package.json同级目录中找babel配置文件。
