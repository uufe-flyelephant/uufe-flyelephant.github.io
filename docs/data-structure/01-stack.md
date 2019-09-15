## 栈 Stack

栈是**后进先出（LIFO）**原则的有序集合。栈限制插入和删除只能在一个位置上进行，该位置是栈的末端，称为栈顶（top），对栈的基本操作有 Push（进栈）和 Pop（出栈）。

```javascript
class Stack {
    items = []
    push(element(s))
    pop()
    peek()  // 仅返回栈顶的元素，但不对栈做任何修改
    isEmpty()
    clear()
    size()
}
```

JS 原生数组天然对栈的支持，使用 ES6 语法声明 Stack 类（如 `examples` 中 Demo），但其中变量 items 外部可访问和修改，不能声明私有变量。
使用 ES6 中的 Symbol 和 WeakMap类型，不可变，可以用作对象的属性。

实际应用：  
在回溯问题中，使用栈来存储访问过的任务或路径、撤销的操作。  
十进制转二进制（任意进制转换）、平衡圆括号、汉诺塔问题。