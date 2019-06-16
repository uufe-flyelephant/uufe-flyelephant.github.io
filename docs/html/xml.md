## xml
xml 可扩展标记语言，由w3c 发明。xml源于一门主要用户发布信息的，为名SGML(标准通用标记语言)的标记语言，XML 和 HTML5之前 都继承了很多SGML的特性。然而，与HTML不同，xml的预定义很少。XML没有预设元素，仅仅提供了一些规则。

这里需要注意的是: XML 是SGML 的一个子集，相比之下，HTML5 之前的HTML就是SGML的一个应用。 SVG 使用XML表达式，因此它是一个XML应用。之前的XHTML 也是XML的一个应用。**HTML5 不是一个SGML应用，它是一种独立的语言，有自己的解析规则。一些早期版本的HTML（特别是从HTML2到HTML4）基于SGML并使用了SGML解析规则。然而，很少有（如果有的话）Web浏览器能够为HTML文档实现真正的SGML解析；历史上唯一将HTML作为SGML应用程序严格处理的用户代理是验证器，结果导致混乱。因此，此版本的HTML5 觉得不在遵循SGML规范。**

一个XML文档如下：

```
<?xml version="1.0" encoding="ISO-8859-1"?>
<note>
<to>George</to>
<from>John</from>
<heading>Reminder</heading>
<body>Don't forget the meeting!</body>
</note>

```
在JSON RPC 没流行起来之前，很多前后端的传输就是通过传递XML文档来完成。2010年 左右还是在使用这种方式。 现在的WebService 等协议 还是使用XML文档来传输。AJAX技术 所依赖的 XMLHttpRequest对象，前缀也是XML。 浏览器的WebApi 为JavaScript 提供了操作xml文档的api接口，包括XPath 等高级功能（dom3）

用javascript操作xml文档的内容，将放在Dom相关的章节中描述


## xml语法
语法很简单，很容易学习和使用
- 元素
- 属性
- 实体
- PCDATA(见HTML 实体部分)
- CDATA(见HTML 实体部分)

需要注意点如下:

- 所有xml元素必须使用闭区间，这与html不同
- xml 标签对大小写敏感
    ```
        <Message>这是错误的。</message>
        <message>这是正确的。</message> 
    ```
- 属性值必须加引号
- 实体引用，这点与html 类似，详情见html实体部分，都是出于解析的考虑。
- xml 中空格会被保留
    在html 中，多个连续的空格会并合并陈一个，在xml中空格不会被删减
- xml 处理程序最基本的要求是支持，Unicode 标准的字符编码

## 有效性
除了格式正确之外，XML 还提供了另外一个级别的验证，称作 **有效性** 。

```
    <phonebook>
        <person>
            <name>xiaozhang</name>
            <number>123</number>
        </person>
         <person>
            <name>xiaozhang1</name>
            <number>1234</number>
        </person>
    </phonebook>
```
假设这个xml文档很有用，我们要把它共享给朋友。然后他视图给这个程序加一个 phone 元素，而不是number元素。

```
     <phonebook>
        <person>
            <name>xiaozhang</name>
            <phone>123</phone>
        </person>
    </phonebook>
```
虽然，这个文件的格式完全正确，但是并不符合我们预设的格式。 有效性是一个很有用的普通概念，我们需要一种机器可读的方式告诉它们什么是有效的文档。也就是说，哪些元素和属性必须以什么样的顺序出现。XML 通过引入文档类型定义（Document Type Definition，简称DTD）来实现这一点。

### 文档类型定义 （DTD）

DTD 的目的是在特定的文档中告知允许的元素和属性，以及约束它们在该文档类型中显示的顺序。DTD包含元素类型和属性列表的声明。DTD可能跨多个文件，比如SVG 1.1规范使用的模块化DTD分布在10多个文件中。可以在一个DTD文件中包含另外一个DTD文件。

**DTD与XML 组合在一起**

<!DOCTYPE ...> 是不是很熟悉。没有错 : HTML文件头，就必须有文档类型定义。
HTML 4.01 Strict:
```
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```
HTML 4.01 Transitional:
该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。
```
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"  "http://www.w3.org/TR/html4/loose.dtd">
```
在 XML 中:
```
    <?xml version="1.0" encoding="ISO-8859-1"?>
    <!DOCTYPE note SYSTEM "Note.dtd">
    <note>
        <to>Tove</to>
        <from>Jani</from>
        <heading>Reminder</heading>
        <body>Don't forget me this weekend!</body>
    </note>

```

**特别需要注意的**
HTML5 使用 <!DOCTYPE html>，如上所述，HTML5 不遵循SGML，所以不需要引入DTD。这是由于遗留原因，需要doctypes。如果省略，浏览器会使用与某些规范不兼容的不同呈现模式。在文档中包含doctype可确保浏览器尽最大努力遵循相关规范。<!DOCTYPE html> 中的html 指的是新一代HTML5技术的 校验器。 详见HTML部分。


### DTD 实例

```
<?xml version="1.0"?>
<!DOCTYPE note [
  <!ELEMENT note (to,from,heading,body)>
  <!ELEMENT to      (#PCDATA)>
  <!ELEMENT from    (#PCDATA)>
  <!ELEMENT heading (#PCDATA)>
  <!ELEMENT body    (#PCDATA)>
]>
<note>
  <to>George</to>
  <from>John</from>
  <heading>Reminder</heading>
  <body>Don't forget the meeting!</body>
</note>

```
以上 DTD 解释如下：
- !DOCTYPE note (第二行)定义此文档是 note 类型的文档。
- !ELEMENT note (第三行)定义 note 元素有四个元素："to、from、heading,、body"
- !ELEMENT to (第四行)定义 to 元素为 "#PCDATA" 类型
- !ELEMENT from (第五行)定义 from 元素为 "#PCDATA" 类型
- !ELEMENT heading (第六行)定义 heading 元素为 "#PCDATA" 类型
- !ELEMENT body (第七行)定义 body 元素为 "#PCDATA" 类型

#### DTD 元素，属性，实体

- DTD 元素(如上)
- DTD 属性
  - 语法：``` <!ATTLIST 元素名称 属性名称 属性类型 默认值> ```
  - DTD:
        ```
            <!ELEMENT square EMPTY>
            <!ATTLIST square width CDATA "0">
        ```
        合法的 XML:

        ```
            <square width="100" />
        ```
- DTD 实体：实体表示引用特殊字符
  - 语法：```<!ENTITY 实体名称 "实体的值">```
  - DTD :
        ```
            <!ENTITY writer "Bill Gates">
            <!ENTITY copyright "Copyright W3School.com.cn">
        ```
        合法的例子：
        ```
            <author>&writer;&copyright;</author>
        ```
- 完整的例子
    ```
        <!DOCTYPE TVSCHEDULE [

        <!ELEMENT TVSCHEDULE (CHANNEL+)>
        <!ELEMENT CHANNEL (BANNER,DAY+)>
        <!ELEMENT BANNER (#PCDATA)>
        <!ELEMENT DAY (DATE,(HOLIDAY|PROGRAMSLOT+)+)>
        <!ELEMENT HOLIDAY (#PCDATA)>
        <!ELEMENT DATE (#PCDATA)>
        <!ELEMENT PROGRAMSLOT (TIME,TITLE,DESCRIPTION?)>
        <!ELEMENT TIME (#PCDATA)>
        <!ELEMENT TITLE (#PCDATA)> 
        <!ELEMENT DESCRIPTION (#PCDATA)>

        <!ATTLIST TVSCHEDULE NAME CDATA #REQUIRED>
        <!ATTLIST CHANNEL CHAN CDATA #REQUIRED>
        <!ATTLIST PROGRAMSLOT VTR CDATA #IMPLIED>
        <!ATTLIST TITLE RATING CDATA #IMPLIED>
        <!ATTLIST TITLE LANGUAGE CDATA #IMPLIED>

        ]>
    ```

### XML Schema 语言: XSD

XSD(XML Schema Definition) 是 DTD 替代者。它描述了 XML 文档的结构。总之是比 DTD 更强大。
理由如下：
- 定义可出现在文档中的元素
- 定义可出现在文档中的属性
- 定义哪个元素是子元素
- 定义子元素的次序
- 定义子元素的数目
- 定义元素是否为空，或者是否可包含文本
- 定义元素和属性的数据类型
- 定义元素和属性的默认值以及固定值
- XML Schema 基于 XML 编写
- XML Schema 支持数据类型
- XML Schema 支持命名空间

#### 实例

一个简单的XML 文档如下：
```
    <?xml version="1.0"?>
    <note>
        <to>George</to>
        <from>John</from>
        <heading>Reminder</heading>
        <body>Don't forget the meeting!</body>
    </note>
```
DTD 文件的校验
```
<!ELEMENT note (to, from, heading, body)>
<!ELEMENT to (#PCDATA)>
<!ELEMENT from (#PCDATA)>
<!ELEMENT heading (#PCDATA)>
<!ELEMENT body (#PCDATA)>
```
第 1 行定义 note 元素有四个子元素："to, from, heading, body"。
第 2-5 行定义了 to, from, heading, body 元素的类型是 "#PCDATA"。

XML Schema 的实现（一个后缀名为xsd 的文档）：

```
    <?xml version="1.0"?>
    <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
    targetNamespace="http://www.w3school.com.cn"
    xmlns="http://www.w3school.com.cn"
    elementFormDefault="qualified">
        <xs:element name="note">
            <xs:complexType>
            <xs:sequence>
            <xs:element name="to" type="xs:string"/>
            <xs:element name="from" type="xs:string"/>
            <xs:element name="heading" type="xs:string"/>
            <xs:element name="body" type="xs:string"/>
            </xs:sequence>
            </xs:complexType>
        </xs:element>
    </xs:schema>
```

XML 文档对xsd 文件的引用
```
    <?xml version="1.0"?>
    <note
    xmlns="http://www.w3school.com.cn"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.w3school.com.cn note.xsd">

        <to>George</to>
        <from>John</from>
        <heading>Reminder</heading>
        <body>Don't forget the meeting!</body>
    </note>
```

XML Schema语言的具体学习参考: http://www.w3school.com.cn/schema/index.asp

以上是XML 有效性部分。靠一段落

## XML 命名空间

xml 允许开发人员创建自己的元素和属性，这样就造成了命名冲突。 ```<title>```在某个上下文环境中可能意味着一本书的名字，但是在另外一个上下文中也可能意味着人的名字。XML 规范中的命名空间提供了一种机制，开发者可以使用同一资源标识符（URI）标识特定的词汇。
比如: 
- 为了方便从 HTML 迁移到 XML,HTML5 规范把 HTML 中的元素放在 http://www.w3.org/1999/xhtml 命名空间
- SVG 使用URI http://www.w3.org/2000/svg 作为它的命名空间

这2个技术都用了 ```<a>``` 那么到底a标识什么意思，通过命名空间即可解决。


## XSL
是指 XML 文档样式表
XML 不使用预先定义的标签（我们可以使用任何喜欢的标签名），并且这些标签的意义并不都那么容易被理解。
XSL 可**描述**如何来显示 XML 文档！

XSL 包括最主要的二部分：
- XSLT
  - XSLT 指 XSL 转换（XSL Transformations）。
  - XSLT 是 XSL 中最重要的部分。
  - XSLT 可将一种 XML 文档转换为另外一种 XML 文档。
  - XSLT 使用 XPath 在 XML 文档中进行导航。
  - XPath 是一个 W3C 标准。
   ```
    XSLT = XSL 转换
    XSLT 是 XSL 中最重要的部分。
    XSLT 用于将一种 XML 文档转换为另外一种 XML 文档，或者可被浏览器识别的其他类型的文档，比如 HTML 和 XHTML。通常，XSLT 是通过把每个 XML 元素转换为 (X)HTML 元素来完成这项工作的。
    通过 XSLT，您可以向或者从输出文件添加或移除元素和属性。您也可重新排列元素，执行测试并决定隐藏或显示哪个元素，等等。
    描述转化过程的一种通常的说法是，XSLT 把 XML 源树转换为 XML 结果树。
    ```
- XPath
    ```
        XPath 是一门在 XML 文档中查找信息的语言。XPath 可用来在 XML 文档中对元素和属性进行遍历。
        XPath 是 W3C XSLT 标准的主要元素，并且 XQuery 和 XPointer 都构建于 XPath 表达之上。
        因此，对 XPath 的理解是很多高级 XML 应用的基础。
    ```

### XSL转换实例

一个普通的文档
```
    <?xml version="1.0" encoding="ISO-8859-1"?>
    <catalog>
    <cd>
        <title>Empire Burlesque</title>
        <artist>Bob Dylan</artist>
        <country>USA</country>
        <company>Columbia</company>
        <price>10.90</price>
        <year>1985</year>
    </cd>
    </catalog>
```

创建 XSL 样式表

```
<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <body>
    <h2>My CD Collection</h2>
    <table border="1">
    <tr bgcolor="#9acd32">
      <th align="left">Title</th>
      <th align="left">Artist</th>
    </tr>
    <xsl:for-each select="catalog/cd">
    <tr>
      <td><xsl:value-of select="title"/></td>
      <td><xsl:value-of select="artist"/></td>
    </tr>
    </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>
这个实例中的 match 属性的值是 XPath 表达式（举例，match="/" 定义整个文档）。
```
把 XSL 样式表链接到 XML 文档

```
<?xml version="1.0" encoding="ISO-8859-1"?>
<?xml-stylesheet type="text/xsl" href="cdcatalog.xsl"?>
<catalog>
  <cd>
    <title>Empire Burlesque</title>
    <artist>Bob Dylan</artist>
    <country>USA</country>
    <company>Columbia</company>
    <price>10.90</price>
    <year>1985</year>
  </cd>
</catalog>

```
具体语法参考：http://www.w3school.com.cn/xsl/index.asp

### XPath 实例

一个普通的xml文档
```
<?xml version="1.0" encoding="ISO-8859-1"?>
<bookstore>
<book>
  <title lang="eng">Harry Potter</title>
  <price>29.99</price>
</book>
<book>
  <title lang="eng">Learning XML</title>
  <price>39.95</price>
</book>
</bookstore>
```

选取节点: XPath 使用路径表达式在 XML 文档中选取节点。

| 表达式   |      描述      |
|----------|:-------------:|
| bookstore |  选取 bookstore 元素的所有子节点。 |
| /bookstore |    选取根元素 bookstore。注意：假如路径起始于正斜杠( / )，则此路径始终代表到某元素的绝对路径！   |
| //book | 选择属于 bookstore 元素的后代的所有 book 元素，而不管它们位于 bookstore 之下的什么位置。 |
| //@lang | 选取名为 lang 的所有属性。 |

更多语法: http://www.w3school.com.cn/xpath/index.asp

在js 中使用:
```
    下面的例子选取所有 title 节点
    xmlDoc.selectNodes('/bookstore/book/title');
```

**由于xml 的应用，在现代前端开发中，用的不是很广泛，建议不用深入。但简单了解有必要的。在有的项目中，xsd，xsl，会结合使用：用xsl 做转换，用xsd做验证。**