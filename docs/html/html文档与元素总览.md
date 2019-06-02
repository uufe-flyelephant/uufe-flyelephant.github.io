## HTML文档总览

HTML 用户代理(如:浏览器) 中的每个 XML 和 HTML 文档表示为一个 Document 对象。(DOM)
Document 的详细介绍(todo:Link)

## HTML元素总览

### 语义

HTML 中的元素、属性和属性值定义有确定的语义。 例如，ol 元素表示一个有序列表， lang 属性表示内容的语言。

### 元素

HTML 元素 的节点必须实现的对应接口，并暴露给脚本。所有 HTML 元素 的接口都继承自一个基本接口，没有额外要求的元素必须使用这一接口。这就是 **HTMLElement** 接口。

解析文档，根据Tag name 来确定DOM对象的类型，步骤如下:

- 如果 name 是 applet，bgsound，blink，isindex， keygen， multicol， nextid， 或 spacer， 则返回 HTMLUnknownElement。
- 如果 name 是 acronym， basefont， big， center， nobr， noembed， noframes， plaintext， rb， rtc， strike，或 tt，则返回 HTMLElement。
- 如果 name 是 listing 或 xmp，则返回 HTMLPreElement。
- 否则，如果本规范定义了一个 local name name 对应的 元素类型 的接口，则返回那个接口。
- 如果 其他适用规范 为 name 定义了一个合适的接口， 则返回他们定义的接口。
- 如果 name 是一个 合法的 Custom Element 名字， 则返回HTMLElement。
- 返回 HTMLUnknownElement。

```
在 合法的 Custom Element 名 时， 使用 HTMLElement 而不是 HTMLUnknownElement 是为了确保任何将来可能的 升级 只造成元素原型链的线性转变， 从 HTMLElement 到一个子类，而不是后者从 HTMLUnknownElement 到一个不相关的子类。

```

### 定义

每个元素都有一个定义，包含以下信息：
- **类别**
  该元素所属的 类别 列表。 在为每个元素定义 内容模型 时用到。
- **内容模型**
  必须包含哪些内容作为子元素和后代元素的规范性描述。
- **内容属性**
  可以在该元素上指定的（除了不允许的情况）一个规范性的属性列表
- **DOM 接口**
  一个关于这样的元素必须实现的 DOM 接口的规范性的定义。
  
#### 内容模型

每个元素都有内容模型：描述了元素期望的 内容。 HTML 元素 的内容必须匹配元素内容模型的要求。 元素的 内容 是它在 DOM 中的子节点。
元素之间总是允许 ASCII 空白。用户代理将源码标记中元素之间的字符表示为 DOM 中的 Text 节点。 空的 Text 节点和 只包含那些字符序列的 Text 节点都被认为是 元素间空白。

当决定元素内容是否匹配元素内容模型的要求时必须忽略 元素间空白， 注释节点，以及处理指令节点。 在执行定义文档和元素语义的算法时也必须忽略这些节点。  

#### "nothing" 内容模型

当元素的内容模型是 nothing 时， 该元素不得包含 Text 节点（元素间空白 除外） 和元素节点。
比如: void Element

#### 内容的种类

HTML 中的每个元素都属于一个或多个 类别 一个类别中的元素有着相似的特点

- 元数据内容
- 流式内容
- 章节内容
- 标题内容
- 短语内容
- 嵌入内容
- 交互式内容

具体的元素归属，请参考: https://whatwg-cn.github.io/html/#%E5%85%83%E7%B4%A0


### 全局属性

- accesskey
- contenteditable
- dir
- draggable
- hidden
- is
- itemid
- itemprop
- itemref
- itemscope
- itemtype
- lang
- spellcheck
- style
- tabindex
- title
- translate

任何 HTML 元素 都可以指定 自定义数据属性 （例如 data-foldername 或 data-msgid）， 用于存储页面相关的自定义数据，状态，注解这样的东西。


###  ARIA 与 平台可访问性 
在 HTML 元素 上实现可访问性 API 语义的用户代理要求定义在 HTML Accessibility API Mappings 中。 https://w3c.github.io/html-aam/

---

## HTML元素

具体HTML元素介绍请参考：https://whatwg-cn.github.io/html/#the-root-element
以后会针对，单个有
