# Code Splitting

代码分离，将代码分离到不同的 bundle 中，然后按需加载或并行加载。通过分离出更小的 bundle 和控制资源加载优先级，会提高加载速度。

方式：
1. entry 多入口
2. CommonsChunkPlugin 去重分离 chunk
3. `System.import`（需要 babel 转换）或 `require.ensure` （CommonJS）动态导入
    ```bash
    npm i @babel/plugin-syntax-dynamic-import --save-dev
    ```

    ```javascript
    // babel.config.js
    {
        plugins: [
            "@babel/plugin-syntax-dynamic-import"
        ]
    }
    ```


react loadable component, suspence api