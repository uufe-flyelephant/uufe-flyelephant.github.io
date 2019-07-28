## 树 Tree

根节点：树顶部的节点  
叶节点：没有子元素的节点  
子树  
深度  

二叉树：二叉树中的节点最多只能有两个子节点，一个是左侧子节点，另一个是右侧子节点  
二叉搜索树（BST）：只允许在左侧节点存储比父节点小的值，在右侧节点存储比父节点大于或等于的值

```
        11
      /    \
     7     15
    / \    / \
   5   9  13 20
```

```javascript
class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    insert(key)
    search(key) // 查找，若存在返回 true
    inOrderTraverse() // 中序遍历
    preOrderTraverse()  // 前序遍历
    postOrderTraverse() // 后序遍历
    min()
    max()
    remove(key)
}

function insert(key) {
    var newNode = new Node(key)
    if (root === null) {
        root = newNode
    } else {
        insertNode(root, newNode)
    }
}

function insertNode(node, newNode) {
    if (newNode.key < node.key) {
        if (node.left === null) {
            node.left = newNode
        } else {
            insertNode(node.left, newNode)
        }  
    } else {
        if (node.right === null) {
            node.right = newNode
        } else {
            insertNode(node.right, newNode)
        }  
    }
}
```

```
              11
         /          \
       7            15
     /    \       /    \
    5       9     13     20
  /   \   /   \   /   \   / \
 3    6  8   10  12  14  18  25
```

中序遍历  

对于 BST，中序遍历是从最小到最大的节点的顺序访问所有节点

```javascript 
function inOrderTraverse(callback) {
    inOrderTraverseNode(root, callback)
}

function inOrderTraverseNode(node, callback) {
    if (node !== null) {
        inOrderTraverseNode(node.left, callback)
        callback(node.key)
        inOrderTraverseNode(node.right, callback)
    }
}
// 3 5 6 7 8 9 10 11 12 13 14 15 18 20 25
```

先序遍历

先序遍历是以优于后代节点的顺序访问每个节点，一个应用是打印一个结构化的文档

```javascript 
function preOrderTraverse(callback) {
    preOrderTraverseNode(root, callback)
}

function preOrderTraverseNode(node, callback) {
    if (node !== null) {
        callback(node.key)
        preOrderTraverseNode(node.left, callback)
        preOrderTraverseNode(node.right, callback)
    }
}

// 11 7 5 3 6 9 8 10 15 13 12 14 20 18 25
```

后序遍历

先访问节点的后代节点，再访问节点本身，一个应用是计算一个目录和它的子目录中所有文件所占空间的大小

```javascript 
function postOrderTraverse(callback) {
    postOrderTraverseNode(root, callback)
}

function postOrderTraverseNode(node, callback) {
    if (node !== null) {
        postOrderTraverseNode(node.left, callback)
        postOrderTraverseNode(node.right, callback)
        callback(node.key)
    }
}

// 3 6 5 8 10 9 7 12 14 13 18 25 20 15 11
```

二叉搜索树中的搜索

* 最小值
* 最大值
* 搜索特定的值

```javascript
function min() {
    return minNode(root)
}

function minNode(node) {
    if (node) {
        while (node && node.left !== null) {
            node = node.left
        }
        return node.key
    }
    return null
} 

function max() {
    return maxNode(root)
}

function maxNode(node) {
    if (node) {
        while (node && node.right !== null) {
            node = node.right
        }
        return node.key
    }
    return null
} 

function search(key) {
    return searchNode(root, key)
}

function searchNode(node, key) {
    if (node === null) {
        return false
    }
    if (key < node.key) {
        return searchNode(node.left, key)
    } else if (key > node.key) {
        return searchNode(node.right, key)
    } else {
        return true
    }
} 
```

自平衡树

BST 存在一个问题，取决于你添加的节点数，树的一条边可能会非常深，也就是说，树的一条分支会有很多层，而其他的分支却只有几层。这是由于 BST 的定义导致的，比节点值小放在左侧，比节点值大放在右侧，可能会导致一路小或一路大的情况，产生不平衡。

1. AVL 树（Adelson-Velskii-Landi 树）  
添加或删除节点时，AVL 树会尝试自平衡，任意一个节点（不论深度）的左子树和右子树高度最多相差1。  
AVL 树需要我们检验它的平衡因子。

计算平衡因子

在 AVL 树中，需要对每个节点计算右子树高度（hr）和左子树高度（hl）的差值，该值（hr - hl）应为0、1或-1。否则需要平衡该 AVL 树。

```javascript
function heightNode(node) {
    if (node === null) {
        return -1
    }

    return Math.max(heightNode(node.left), heightNode(node.right) + 1)
}

if (heightNode(node.left) - heightNode(node.right) > 1) {
    // 旋转
}

if (heightNode(node.right) - heightNode(node.left) > 1) {
    // 旋转
}
```

[AVL Tree Visualization](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)