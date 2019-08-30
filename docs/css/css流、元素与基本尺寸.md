## 块级元素
      
 “块级元素”对应的英文是 block-level element，常见的块级元素有< div >、< li >和< table >等。
 “块级元素”和“display 为 block 的元素”不是一个概念。
 < li >的 display 值 是list-item,<table>的默认display是table,他们都属于块级元素，因为一个水平流上只能显示一个块级，多个块级换行显示。

 实际开发中我们会使用block 或者 table， 并不会使用list-item,其原因有三个
    1. 1个字符的比较多，其他都是5个字符;
    2. 会出现项目符号，就是li前面的圆点，可以用list-style:none消除;
    3. IE 浏览器不支持伪元素的 display 值为 list- item。这是不使用 display:list-item 清除浮动的 主因，兼容性不好。对于 IE 浏览器(包括 IE11)，普通元 素设置 display:list-item 有效，但是:before /:after 伪元素就不行;
      
#### 一、为什么list-item元素会出现项目符号
    css盒子概念:块级盒子和内联盒子，块级盒子负责结构，内联盒子负责内容。
    
    后来出现一个list-item，默认要加项目符号的盒子，这个盒子叫附加盒子，专门用来放圆点、数字这些项目符号。
    IE 浏览器下伪元素不支持 list-item 或许就是无法创建这个“标记盒子”导致的。
    在后面又出现一个display:inline-block；的盒子，其实没个盒子是由两个盒子组成的，外在盒子和内在盒子。外在盒子负责元素是可以一行显示，还是只能换行显示;内在盒子负责 宽高、内容呈现什么的。内在盒子名字过于俗气，后来改叫为容器盒子；
    display: 值为 block 实际是外在的块级盒子和内在的块级容器盒子组成，值为 inline-block 的盒子是由内联盒子和内在的块级容器盒子组成，值为inline的两个盒子均为内联盒子。
    按照理解，实际上display:block 应该等同于display:block-block;
    display:table  脑补为 display:block-table;
    
####  二、width/height 作用于内在的容器盒子

      
#### 三、width:auto 属性介绍
width:auto 是宽度的默认值，但是他的特性却又4种
1. 充分利用可用空间。  比如div、p这种标签，宽度默认是100%于父容器的。专业名称(fill-available)了解即可
2. 收缩与包裹。典型代表就是浮动、绝对定位、inline-block 元素或 table 元素， 英文称为 shrink-to-fit，直译为“收缩到合适”，
3. 收缩到最小。这个最容易出现在 table-layout 为 auto 的表格中。
4. 超出容器限制。要有width 相关设置，否则上面3种情况都不会主动 超过父级容器宽度的，还有个特殊情况，内容很长的连续的英文和数字，或者内联 元素被设置了 white-space:nowrap。
[样例1]('http://demo.cssworld.cn/3/2-1.php')
[样例2]('http://demo.cssworld.cn/3/2-2.php')

在 CSS 世界中，盒子分“内在盒子”和“外在盒子”，显示也分“内部 显示”和“外部显示”，同样地，尺寸也分“内部尺寸”和“外部尺寸”。其中“内部尺寸”英 文写作“Intrinsic Sizing”，表示尺寸由内部元素决定;还有一类叫作“外部尺寸”，英文写作
“Extrinsic Sizing”，宽度由外部元素决定。
##### 1、外部尺寸与流体特性
 1. 正常流宽度。当我们在一个容器里倒入足量的水时，水一定会均匀铺满整个容器。在页面扔一个div标签，其尺寸也会和水流一样铺满容器。这就是block容器的流特性。
[样例1]('http://demo.cssworld.cn/3/2-3.php')
 2. 格式化宽度。格式化宽度仅出现在“绝对定位模型”中，也就是出现在 position 属性值为 absolute 或 fixed 的元素中。默认情况下，绝对定位元素的宽度表现是“包 裹性”，宽度由内部尺寸决定。还有一种特殊情况，宽度由外部尺寸决定。当 div { position: absolute; left: 20px; right: 20px; }的时候，假设该div元素最近的具有定位特性的祖先元素的宽度是 1000 像素，则这个div元素的宽 度是 960(即 1000−20−20)像素。
##### 2、内部尺寸与流体特性
 判断元素是否为内部尺寸:当元素内容为空的时候，其宽度应该为0；
 1.包裹性。 button 元素。通常有两种展现形式 <button>按钮</button> <input type="button" value="按钮"> <button>标签按钮才会自动换行，<input>标签按钮，默认 white-space:pre，是不会换行的，需要将 pre 值重置为默认的 normal。
[样例1]('http://demo.cssworld.cn/3/2-4.php')
 “包裹性”对实际开发有什么作用呢?
[样例2]('http://demo.cssworld.cn/3/2-5.php')
 2.首选最小宽度。是指元素最适合的最小宽度。
  在css中图片和文字的权重大于布局，就算父级宽度为0，图文照样显示；
  东亚文字:为一个汉字的宽度，比如font-size：12，宽度就是12；
  英文:宽度由连续的英文字符单元决定，一般会以空格、短横线、问号和其他字符终止。例如display:inline-block,此时就会取display:inline-的宽度，取到字符后面的位置。
###### 首选最小宽度”对我们实际开发的作用。
[例子]('http://demo.cssworld.cn/3/2-6.php')
 3.最大宽度。 最大宽度就是元素可以有的最大宽度。
   作用就是让元素在一行显示，比如iscroll的滚动效果。
      
      
#### 四、width值作用的细节
 
  div{width:100px},是如何作用到这个div上的。
  width是作用在内在盒子上的，内在盒子有很多部分构成
  margin（透明）、border、padding、content(盒模型最里层)
  width作用在content上。
  
  div { width: 100px; padding: 20px; border: 20px solid; } 实际尺寸为什么会变大？
  
  

#### 五、CSS流体布局下的宽度分离原则

   所谓“宽度分离原则”，就是 CSS 中的 width 属性不与影响宽度的 padding/border(有
时候包括 margin)属性共存，也就是不能出现以下的组合:
  .box { width: 100px; border: 1px solid; }  或者     .box { width: 100px; padding: 20px; }
  正确写法：
  .father {
        width: 180px;
       }
  .son {
        margin: 0 20px;
        padding: 20px;
        border: 1px solid;
       }
  
  
  
  
  

