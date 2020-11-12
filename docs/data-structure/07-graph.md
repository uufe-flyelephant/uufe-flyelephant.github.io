## 图

图是网络结构的抽象模型。图是一组由边连接的节点（顶点），任何二元关系都可以用图来表示。

```
G = (V, E)

V: 一组顶点
E: 一组边，连接 V 中的顶点
```

相邻顶点：由一条边连接在一起的顶点  
度：一个顶点的度是其相邻顶点的数量  
路径：顶点 v1，v2，...，vk 的一个连续序列，其中 vi 和 vi+1 是相邻的  
简单路径：不包含重复的顶点  
有向图：点对是有序的图（digraph），对应的无向图  
强连通：若图中每两个顶点间在双向上都存在路径  
加权：图的边赋予了权值，对应的未加权  
环：图含有一条从一个顶点到它自身的边 (v,v)，此时该路径也叫做环，否则叫做无环  

### 图的表示

1. 邻接矩阵（adjacency matrix）

每个节点都和一个整数相关联，该整数作为数组的索引，用一个二维数组来表示顶点之间的连接。若索引为 i 的节点和索引为 j 的节点相邻，则 `array[i][j] = 1`，否则 `array[i][j] = 0`，所以要找出顶点 v 和 w 是否相邻，使用邻接矩阵会比较快。但是，不是强连通的图（稀疏图）时，矩阵中存储很多0，比较浪费存储空间。

|     |  A  |  B  |  C  |
| --- | --- | --- | --- |
| A   | 0   | 1   | 1   |
| B   | 0   | 0   | 1   |
| C   | 0   | 0   | 0   |

```
        A
      /  \
     B   /
      \ /
       C
```

2. 邻接表

邻接表由图中每个顶点和其相邻顶点列表组成。可以用列表（数组）、链表，甚至是散列表或是字典来表示相邻顶点列表。

```
A -> B, C
B -> C
```

3. 关联矩阵

矩阵的行表示顶点，列表示边。关联矩阵通常用于边的数量比顶点多的情况下，以节省空间和内存。  
如果顶点 v 是边 e 的入射点，则 `array[v][e] = 1`，否则 `array[v][e] = 0`

|     | L1  | L2  | L3  |
| --- | --- | --- | --- |
| A   | 1   | 1   | 0   |
| B   | 1   | 0   | 1   |
| C   | 0   | 1   | 1   |

