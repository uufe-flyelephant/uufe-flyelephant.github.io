# 基础
## 语法与类型
[MDN-REFERENCE](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
### 变量提升、函数提升
#### 示例
``` javascript
a() // 2
var a = function(){ console.log(1) }
a() // 1
function a(){  console.log(2) }
a() // 1
```
因为，上面的等于这样
``` javascript
var a // 变量提升
a = function(){ console.log(2) } // 函数提升
a() // 2 
a = function(){ console.log(1) }
a() // 1
a() // 1
```

#### ES6中const / let 没有变量提升
``` javascript
console.log(x); // ReferenceError
let x = 3;
```
todo: 用babel转成ES5的表现？？？？

### 原始类型
ES5: Undefined、Null、Boolean、Number 和 String
ES6新增: BigInt / Symbol


### 字面量
* Array: ['Lion', , 'Angel'] .  
    *不建议多加逗号，最好显示写出undefined*
* Boolean: true / false.    
    *if(new Boolean(false)){ // 会执行 }*
* Number: 
```
// 各种进制
0, 117 and -345 (decimal, base 10)
015, 0001 and -0o77 (octal, base 8) 
0x1123, 0x00111 and -0xF1A7 (hexadecimal, "hex" or base 16)
0b11, 0b0011 and -0b11 (binary, base 2)
// float
3.1415926
-.123456789
-3.1E+12
.1e-23
```
* Object: { a: {c:1}, b: 3}
* RegExp: /.*/
* String

```javascript
'one line \n another line'    

var str = 'this string \
is broken \
across multiple \
lines.'
console.log(str);   // this string is broken across multiple lines.

var poem = 
'Roses are red,\n\
Violets are blue.\n\
Sugar is sweet,\n\
and so is foo.'

var poem = 
`Roses are red, 
Violets are blue. 
Sugar is sweet, 
and so is foo.`

```

## Control flow
### 块
```js
var x = 1;
{
  var x = 2;
}
console.log(x); // outputs 2
```
```js
let x = 1;
{
  let x = 2;
}
console.log(x); // outputs 1
```
### 条件 
#### if / else / else if
* falsy value:
only: false, 0, empty strings (""), NaN, null, and undefined
```js
if (false)
if (null)
if (undefined)
if (0)
if (0n)
if (NaN)
if ('')
if ("")
if (``)
if (document.all)
```
* truthy value:
```js
if (true)
if (42)
if ([]) // !!!!!!!
if ("0") // !!!!!!!
if(new Boolean(false)) // !!!!!!!
if (new Date())
if (-42) // !!!!!!!
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```
#### switch
switch： 听说cpu执行switch比较快

## Error handling
[MDN-REFERENCE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#Exception_handling_statements)

## Loops and iteration
* for statement
* do...while statement
* while statement
* labeled statement
```js
markLoop:while (theMark == true) {
   doSomething();}
```
* break statement
    语法：break [label];
```js
var x = 0;var z = 0;
labelCancelLoops: while (true) {
  console.log('Outer loops: ' + x);
  x += 1;
  z = 1;
  while (true) {
    console.log('Inner loops: ' + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }}
```
* continue statement
    语法：continue [label];
* for...in statement
    本身及其原型链上的 enumerable 属性
* for...of statement：creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on)

## Function
[MDN-REFERENCE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
* Scope chain
* Preservation of variables
* Closures
* arguments
* Rest parameters: 
```js
function multiply(multiplier, ...theArgs) {
}
```
* Arrow functions: shorter & no seperate this

## Expressions and operators
### Assignment operators
* normal
* Compound assignment operators
![d5bb98025f979ec76a8ce0c101a13035.png](en-resource://database/1527:1)
* Destructuring
```js
var foo = ['one', 'two', 'three'];
var [one, two, three] = foo;
```
### Comparison operators
[MDN-REFERENCE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#A_model_for_understanding_equality_comparisons)
* ===
* ==
### Arithmetic operators
*  \+
*  \-
*  \*
*  /
*  ++
*  --
*  \*\*
### Bitwise operators
![8ba4ecbea74ac44333aff30c42b843ee.png](en-resource://database/1529:1)
[MDN-REFERENCE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise_operators)
### Logical operators
* &&
* ||
* !
### String operators
* \+
* \+=
### Conditional (ternary) operator
condition ? val1 : val2
### Unary operators (一元)
* delete
* typeof
* void
```js
void function test() {
  console.log('boo!');
  // expected output: "boo!"
}();

try {
  test();
}
catch(e) {
  console.log(e);
  // expected output: ReferenceError: test is not defined
}
```
### Relational operators
* in:  propNameOrNumber in objectName.   check __proto__
* instanceof

### Operator precedence
![0d515cbed88df98d6440599ceedaedfd.png](en-resource://database/1531:1)

### Expressions
* this
* Grouping operator：()
* Left-hand-side expressions： new / super 
* Spread operator
```js

var lyrics = ['head', ...parts, 'and', 'toes'];

function f(x, y, z) { }
var args = [0, 1, 2];
f(...args);

```

## Numbers and Date
[MDN-REFERENCE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates)
* 现象
![fdb001739372808eb660118407050e1b.png](en-resource://database/1533:1)
* 64位: 1 + 10 + 53
todo: 水很深

## Text formatting
[MDN-REFERENCE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting)

## Regular Expressions
[MDN-REFERENCE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

## Indexed collections
## Keyed collections
## Working with objects
## Details of the object model
## Using promises
## Iterators and generators
## Meta programming

## 闭包
[MDN-REFERENCE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

## 对象
* Keys of An Object are strings (or Symbols) 
### Data property && Accessor property
There are two types of object properties which have certain attributes: The data property and the accessor property.
![678bd16e86a1c1a4381ed6ac80fea31b.png](en-resource://database/1537:1)
![86708e974dc7b85f5e1216c956d9e0e3.png](en-resource://database/1539:1)



## 类型转换
### 原始类型间的转换
[仅参考，此处不足](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Data_type_conversion)

### 原始类型与对象 封箱、拆箱










## 严格模式
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode

## 有用记录

# ES6 ~ ESNEXT
## 找标准
## const/let
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const


# 高阶专题

# WEBAPI
# web最新趋势
webcomponent



模块化
webcomponent
v8? bookmark保存项

# todo

* ERROR TYPE
* void
* () ,Expression
* 字符集
* es5/6 modules
* proxy / reflect 
* 类型判断套路
* 标记清楚算法 js版本
2.  bigint
3.  switch 为啥比 if 快。（js 运行时）
4. grouping operator （）
5. 浮点数的二进制表示法
6. weakmap。  weakset。使用场景
7.  promise 可取消 解决方案
8.  proxy，reflect
9.  genarator。刘宝至
10.  类型数组的使用场景
11.  标记清除
12.  Promise yield generator
13.  es6 new features ( e.g. proxy reflect)
14.  es6 modules

## 宝至
* generator

## Andy
* javascript运行时
* 为啥有 变量提升 和函数提升


## other read
[awesome-javascript-reads](https://github.com/deadcoder0904/awesome-javascript-reads)




``` first meetting
up
me
down

思考all

for down:
看下ddo
1. 团队目标： 支持业务。 各个维度考虑。
1. 个人成长。我的理解、和大家的理解，达成一致
2. 关键：
3. 机制建立：事情都给出明确时间。

```


