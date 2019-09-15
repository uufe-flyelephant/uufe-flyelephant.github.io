## 队列 Queue

队列是**先进先出（FIFO）**原则的有序集合。队列在尾部添加新元素，并从顶部移除元素，最新添加的元素必须排在队列的末尾。一个常见的例子就是文档打印队列。

```javascript
class Queue {
    items = []
    enqueue(element(s)) // 入列
    dequeue() // 出列，移除队列排在最前面的项，并返回被移除的元素
    front() // 返回队列中第一个元素，队列不做变动，仅返回元素信息
    isEmpty()   // 队列是否为空
    size()  // 返回队列包含的元素个数
}
```

优先队列

在队列的基础上，元素的添加和移除时基于优先级的。  
头等舱和商务舱乘客的优先级高于经济舱乘客，老人和孕妇、带小孩的妇女优先。医院优先处理病情较重的患者。

对于优先队列，可有两种方式实现。一是设置优先级，然后在正确的位置添加元素；二是或者用入列操作添加元素，然后按优先级以移除。

循环队列

击鼓传花游戏

JavaScript 任务队列
事件循环

[Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)