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
