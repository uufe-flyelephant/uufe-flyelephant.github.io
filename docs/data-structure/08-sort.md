## 排序

### 1. O(n^2)

1. 冒泡排序

“大的沉底”

```javascript
function bubbleSort(array) {
    if (!Array.isArray(array)) {
        return array
    }
    const length = array.length
    for (let i = 0; i < length; i++) {
        // length - i - 1
        for (let j = 0; j < length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // var temp = array[j]
                // array[j] = array[j + 1]
                // array[j + 1] = temp
                [array[j], array[j+1]] = [array[j+1], array[j]]
            }
        }
    }

    return array
}
```

2. 选择排序

“按索引排座次，小的在前，看当前索引后是否有更小值”

```javascript
function swap(array, idx1, idx2) {
    var temp = array[idx1]
    array[idx1] = array[idx2]
    array[idx2] = temp
}
function selectionSort(array) {
    if (!Array.isArray(array)) {
        return array
    }
    const length = array.length
    let idxMin
    for (let i = 0; i < length-1; i++) {
        idxMin = i
        for (let j = i; j < length; j++) {
            if (array[idxMin] > array[j]) {
                idxMin = j
            }
        }
        if (i !== idxMin) {
            swap(array, i, idxMin)
        }
    }
    return array
}
```

3. 插入排序

“顺序查看，小的一步步往回插，类似于扑克插牌”

```javascript
function insertionSort(array) {
    if (!Array.isArray(array)) {
        return array
    }
    const length = array.length
    let j, temp
    for (let i = 0; i < length; i++) {
        j = i
        temp = array[i]
        while(j > 0 && array[j-1] > temp) {
            array[j] = array[j-1]
            j--
        }
        array[j] = temp
    }
    return array
}

```

---

### 2. O(nlogn)

1. 归并排序

分治算法，“分而治之，左右数组元素比较，移动游标”

```javascript
function mergeSort(array) {
    if (!Array.isArray(array)) {
        return array
    }
    array = mergeSortRec(array)
    return array
}

function mergeSortRec(array) {
    const length = array.length
    if (length <= 1) {
        return array
    }
    const mid = Math.floor(length / 2)
    const left = array.slice(0, mid)
    const right = array.slice(mid, length)
    return merge(mergeSortRec(left), mergeSortRec(right))
}

function merge(left, right) {
    const result = []
    let iLeft = 0, iRight = 0
    while(iLeft < left.length && iRight < right.length) {
        if (left[iLeft] < right[iRight]) {
            result.push(left[iLeft++])
        } else {
            result.push(right[iRight++])
        }
    }
    while(iLeft < left.length) {
        result.push(left[iLeft++])
    }
    while(iRight < right.length) {
        result.push(right[iRight++])
    }
    return result
}
```

2. 快速排序

分治算法，“中间位置元素作参照，左右对调”

```javascript
function swap(array, idx1, idx2) {
    var temp = array[idx1]
    array[idx1] = array[idx2]
    array[idx2] = temp
}

function quickSort(array) {
    if (!Array.isArray(array)) {
        return array
    }
    quick(array, 0, array.length-1)
    return array
}

function quick(array, left, right) {
    let index
    if (array.length > 1) {
        index = partition(array, left, right)
        if (left < index-1) {
            quick(array, left, index-1)
        }
        if (index < right) {
            quick(array, index, right)
        }
    }
}

function partition(array, left, right) {
    const pivot = array[Math.floor((right+left)/2)]
    let i = left, j = right
    while(i<=j) {
        while((array[i] < pivot)) {
            i++
        }
        while((array[j] > pivot)) {
            j--
        }
        if (i<=j) {
            swap(array, i, j)
            i++
            j--
        }
    }
    return i
}
```

3. 堆排序

### 3. 分布式排序

1. 计数排序
2. 桶排序
3. 基数排序