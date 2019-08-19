## 一、块级元素
      
#### “块级元素”对应的英文是 block-level element，常见的块级元素有<div>、<li>和<table>等。
#### “块级元素”和“display 为 block 的元素”不是一个概念。
#### <li>的 display 值 是list-item,<table>的默认display是table,他们都属于块级元素，因为一个水平流上只能显示一个块级，多个块级换行显示。

#### 实际开发中我们会使用block 或者 table， 并不会使用list-item,其原因有三个
    1. 1个字符的比较多，其他都是5个字符;
    2. 会出现项目符号，就是li前面的圆点，可以用list-style:none消除;
    3. IE 浏览器不支持伪元素的 display 值为 list- item。这是不使用 display:list-item 清除浮动的 主因，兼容性不好。对于 IE 浏览器(包括 IE11)，普通元 素设置 display:list-item 有效，但是:before /:after 伪元素就不行;
      
#### 为什么list-item元素会出现项目符号
    最开始css的时候只有两个盒子概念，块级盒子和内联盒子，块级盒子就负责结构，内联 盒子就负责内容。后来又出现一个list-item，默认要加项目符号的盒子，这个盒子叫附加盒子，专门用来放圆点、数字这些项目符号。IE 浏览器下伪元素不支持 list-item 或许就是无法创建这个“标记盒子”导致的。
        
      

