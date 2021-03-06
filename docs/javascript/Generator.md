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

``` javascript
 function* GeneratorFn() {
      yield '1'
      yield '2'
      return '3'
      yield '4'
    }
var a = GeneratorFn();
console.log(a);//函数本身
console.log(a.next());// 1
console.log(a.next());// 2
console.log(a.next());// 3
console.log(a.next());// underfined
```
如果yield和return一起执行，return的值会作为最后的返回值，return后面的yield不执行。



传参写法
```javascript
function* showNumbers() {
    var one = yield 1;
    var two = yield 2 * one;
    yield 3 * two;
}

var show = showNumbers();

show.next().value // 1
show.next().value // NaN
show.next(2).value // 6
```




异步处理

```javascript
var urls = ['url1', 'url2', 'url3'];

function* request(urls) {
    var data;

    for (var i = 0, j = urls.length; i < j; ++i) {
        data = yield req(urls[i], data);
    }
}

var r = request(urls);
r.next();

function log(url, data, cb) {
    setTimeout(function() {
        cb(url);
    }, 1000);
    
}


function req(url, data) {
    var p = new Promise(function(resolve, reject) {
        log(url, data, function(rs) {
            if (!rs) {
                reject();
            } else {
                resolve(rs);
            }
        });
    });

    p.then(function(data) {
        console.log(data);
        r.next(data);
    }).catch(function() {
        
    });
}
```


for ... of 代替next（）
```javascript
function* showNumbers() {
    yield 1;
    yield 2;
    return 3;
}

var show = showNumbers();

for (var n of show) {
    console.log(n) // 1 2
}
```
