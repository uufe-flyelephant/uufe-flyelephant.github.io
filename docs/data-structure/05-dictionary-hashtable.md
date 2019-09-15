## 字典和散列表

以键值对的形式来存储数据，是一种映射。

### 字典 

```javascript
class Dictionary {
    set(key, value)
    delete(key)
    get(key)
    clear()
    size()
    keys()
    values()
} 
```

ES6 中的 Map 类

### 散列表（HashTable、HashMap）

散列算法的作用是尽可能快地在数据结构中找到一个值，散列函数的作用是给定一个键值，返回值在表中的地址。

一个简单的散列算法，“lose lose”散列函数，简单地将每个键值中的每个字母的 ASCII 码值相加。

| 名称/键 |               散列函数               | 散列值 |             散列表              |
| ------- | ------------------------------------ | ------ | ------------------------------- |
| Gandalf | 71 + 97 + 110 + 100 + 97 + 108 + 102 | 685    | arr[685] = 'gandolf@email.com'  |
| John    | 74 + 111 + 104 + 110                 | 399    | arr[399] = 'johnsnow@email.com' |
| Tyrion  | 84 + 121 + 114 + 105 + 111 + 110     | 645    | arr[645] = 'tyrion@email.com'   |

```javascript
class HashTable {
    table = []
    put(key, value)
    remove(key)
    get(key)
}

var loseloseHashCode = function(key) {
    var hash = 0
    for (let i = 0; i < key.length; i++){
        hash += key.charCodeAt(i)
    }

    // 为了得到一个较小的数，用 hash 值和一个任意数做除法的余数（mod）
    return hash % 37
}
```

散列集合，不同于散列表，不是添加键值对，二是只插入值而没有键。

散列冲突  
键相同，后面添加的键值对会覆盖前面相同键的键值对。

1. 分离链接法  
为散列表的每一个位置创建一个链表并将元素存储在里面
2. 线性探测法  
当向表中某个位置加入一个新元素时，如果索引为 index 的位置已经被占据了，则试图尝试 index + 1 的位置，如果 index + 1 的位置也被占据了，则尝试 index + 2 的位置，直至找到空闲位置。

“lose lose ” 散列函数不是好的散列函数，容易产生太多的冲突，一个表现良好的散列函数应该具备：  
1. 插入和检索元素的时间（性能）
2. 较低的冲突可能性

```javascript
// djb2
function djb2HashCode(key) {
    var hash = 5381 // 初始化为一个质数，大多实现使用 5381
    for (let i = 0; i < key.length; i++){
        // 33 魔力数 magic number
        hash = hash * 33 + key.charCodeAt(i)
    }
    // 相加的和与另一个随机质数相除取余，这个质数比预估的散列表的大小要大，这里我们预估散列表大小为 1000
    return hash % 1013
} 
```

ES6 中的 Set/Map 和 WeakSet/WeakMap

* WeakSet/WeakMap 没有 entries、keys 和 values 等方法
* WeakSet/WeakMap 只能用对象作为键，除非知道键，否则没有办法取出值