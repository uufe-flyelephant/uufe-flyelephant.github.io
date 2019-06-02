## HTML文档总览

HTML 用户代理(如:浏览器) 中的每个 XML 和 HTML 文档表示为一个 Document 对象。(DOM)
Document 的详细介绍(todo:Link)

## HTML元素总览

### 语义

HTML 中的元素、属性和属性值定义有确定的语义。 例如，ol 元素表示一个有序列表， lang 属性表示内容的语言。

### 元素

HTML 元素 的节点必须实现的对应接口，并暴露给脚本。所有 HTML 元素 的接口都继承自一个基本接口，没有额外要求的元素必须使用这一接口。这就是 **HTMLElement** 接口。

