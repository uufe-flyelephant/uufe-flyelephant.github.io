# Generator 
## 简介 
ES6的很多属性都和Generator有关系，实际用处也很多，包含了任何需要异步的模块，比如AJAX、Filesystem，或者数组遍历。

## Generator的使用
Generator函数和普通函数区别有两个，1:function后面需要跟一个*，2:函数内部使用了yield表达式；比如
``` javascript
 function* GeneratorFn() {
      yield '1'
      yield '2'
    }
var a = GeneratorFn();
console.log(a);//函数本身
console.log(a.next());// 1
console.log(a.next());// 2
console.log(a.next());// underfined
```
这个函数运行会返回Iterator实例，然后执行Iterator实例的next()方法，这时候这个函数才开始执行，并且把yield后面的值作为对象返回，知道运行到函数末尾，最后返回underfined；


