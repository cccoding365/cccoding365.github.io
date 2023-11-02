# Interview

## HTML

1. **DOCTYPE 的作用是什么？**

> IE5.5 引入了文档模式的概念，而这个概念是通过使用文档类型（DOCTYPE）切换实现的。 `<!DOCTYPE>` 声明位于 HTML 文档中的第一行，处于 `<html>` 标签之前。告知浏览器的解析器用什么文档标准解析这个文档。 DOCTYPE 不存在或格式不正确会导致文档以兼容模式呈现。

**答：** <!DOCTYPE> 声明一般位于文档的第一行，它的作用主要是告诉浏览器以什么样的模式来解析文档。一般指定了之后会以标准模式来进行文档解析，否则就以兼容模式进行解析。在标准模式下，浏览器的解析规则都是按照最新的标准进行解析的。而在兼容模式下，浏览器会以向后兼容的方式来模拟老式浏览器的行为，以保证一些老的网站的正确访问。

在 HTML5 之后不再需要指定 DTD 文档，因为 HTML5 以前的 HTML 文档都是基于 SGML 的，所以需要通过指定 DTD 来定义文
档中允许的属性以及一些规则。而 HTML5 不再基于 SGML 了，所以不再需要使用 DTD。

## CSS

1. **介绍一下标准的 CSS 的盒子模型？低版本 IE 的盒子模型有什么不同的？**

> 盒模型：内容（content）、填充（padding）、边界（margin）、边框（border）四个部分

**答：** 共有两种盒子模型：IE 盒模型（border-box）、W3C 标准盒模型（content-box）


IE 盒模型和 W3C 标准盒模型的区别：

- W3C 标准盒模型： width，height 只包含内容 content，不包含 border 和 padding
- IE 盒模型： width，height 包含 content、border 和 padding，即 content + padding + border。

> 在 ie8+ 浏览器中使用哪个盒模型可以由 box-sizing（CSS 新增的属性）控制，默认值为 content-box，即标准盒模型；如果将 box-sizing 设为 border-box 则用的是 IE 盒模型。

>在 ie678 浏览器中 DOCTYPE 缺失会将盒子模型解释为 IE 盒子模型。若在页面中声明了 DOCTYPE 类型，所有的浏览器都会把盒模型解释为 W3C 盒模型。

## JavaScript

## Vue

## React
