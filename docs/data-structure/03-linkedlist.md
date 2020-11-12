## 链表 LinkedList

多个有序元素的存储，使用数组时，从数组的起点或中间插入或移除项的成本很高，因为需要移动元素。  
链表中的元素在内存中并不是连续放置的，每个元素由一个存储元素本身的节点和一个指向下一个元素的引用（指针）。  
对于链接，添加或移除元素的时候不需要移动其他元素。然而链表需要使用指针来存储下一个节点的引用信息。数组可以直接访问任何位置的任何元素，但访问链表中的元素时，需要从起点（表头）开始迭代列表直到找到对应的元素。

双向链表

链表中的节点，同时存储了其上一个节点和下一个节点的引用（）指针

循环链表

链表中最后一个元素的下一个元素指针（tail.next）不是 null 引用，而是指向第一个元素（head）