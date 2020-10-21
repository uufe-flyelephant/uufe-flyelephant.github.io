# Class
## 构造函数 & super的理解
示例： 以下代码，在控制台 watch 一下 this 变量
``` js
// 以下代码，在控制台 watch 一下 this 变量
class Creature {
    constructor(name) {
        debugger; // this: Person实例
        this.name = name;
        debugger; // this: Person实例
    }
	move(){
		console.log('i can move')
	}
}
class Animal extends Creature{
    constructor(name) {
        debugger; // this: undefined. 在super()前不能使用变量this, 不然报错
		super(name)
        debugger; // this: Person实例
    }
	move(){
		console.log('i can move')
	}
}
class Person extends Animal{
    constructor(name) {
        debugger; // this: undefined. 在super()前不能使用变量this, 不然报错
		super(name)
        debugger; // this: Person实例
    }
}
var p = new Person('1')
```
