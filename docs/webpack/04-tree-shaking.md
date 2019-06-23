# Tree Shaking

移除 js 上下文中未引用的代码（dead-code）的过程，依赖 ES2015 模块系统中静态结构特性。

## 1. CommonJS 与 ES6 模块对比

```javascript
// commonjs
var lib
if (Math.random()) {
    lib = require('foo')
} else {
    lib = require('bar')
}

if (Math.random()) {
    exports.baz = ...
}

// static module structure
// benefit
// 1. dead code elimination during bundling

// 2. compact bundling, no custom bundle format

// lib.js
export function foo() {}
export function bar() {}

// main.js
import {foo} from './lib.js';
console.log(foo());

// rollup bundle
function foo() {}
console.log(foo());

// 3. faster lookup of imports

var lib = require('lib');
lib.someFunc(); // property lookup

import * as lib from 'lib';
lib.someFunc(); // statically resolved

// 4. variable checking
```

*refs:*  
    1. [es6 static module structure](https://exploringjs.com/es6/ch_modules.html#static-module-structure)  
    2. [ES6 模块的 17 个要点](https://robinchen.me/tech/2016/11/05/tech-es6-modules.html)
    3. [你的Tree-Shaking并没什么卵用](https://zhuanlan.zhihu.com/p/32831172)

1. production 模式默认开启 tree shaking
2. `package.json` 文件中声明 `"sideEffects"` 副作用属性，若都是 ESM，则声明值为 `false`，否则：
    ```json
    {
        "sideEffects": "./src/some-side-effectful-file.js"
    }
    ```