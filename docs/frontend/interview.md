# Interview

## HTML

1. **DOCTYPE 的作用是什么？**

> IE5.5 引入了文档模式的概念，而这个概念是通过使用文档类型（DOCTYPE）切换实现的。 `<!DOCTYPE>` 声明位于 HTML 文档中的第一行，处于 `<html>` 标签之前。告知浏览器的解析器用什么文档标准解析这个文档。 DOCTYPE 不存在或格式不正确会导致文档以兼容模式呈现。

**答：** <!DOCTYPE> 声明一般位于文档的第一行，它的作用主要是告诉浏览器以什么样的模式来解析文档。一般指定了之后会以标准模式来进行文档解析，否则就以兼容模式进行解析。在标准模式下，浏览器的解析规则都是按照最新的标准进行解析的。而在兼容模式下，浏览器会以向后兼容的方式来模拟老式浏览器的行为，以保证一些老的网站的正确访问。

在 HTML5 之后不再需要指定 DTD 文档，因为 HTML5 以前的 HTML 文档都是基于 SGML 的，所以需要通过指定 DTD 来定义文
档中允许的属性以及一些规则。而 HTML5 不再基于 SGML 了，所以不再需要使用 DTD。

2. **标准模式与兼容模式各有什么区别？**

**答：**

-   标准模式的渲染方式和 JS 引擎的解析方式都是以该浏览器支持的最高标准运行。
-   兼容模式中，页面以宽松的向后兼容的方式显示，模拟老式浏览器的行为以防止站点无法工作。

3. **行内元素和块级元素的定义。**

**答：** HTML4 中，元素被分成两大类: inline （内联元素）与 block（块级元素）。

-   行内元素只占据它对应标签的边框所包含的空间。

-   块级元素占据其父元素（容器）的整个宽度，因此创建了一个“块”。

常见的行内元素有： `a` `b` `span` `img` `strong` `sub` `sup` `button` `input` `label` `select` `textarea`

常见的块级元素有： `div` `ul` `ol` `li` `dl` `dt` `dd` `h1` `h2` `h3` `h4` `h5` `h6` `p`

4. **页面导入样式时，使用 link 和 @import 有什么区别？**

**答：**

-   从属关系区别。 @import 是 CSS 提供的语法规则，只有导入样式表的作用；link 是 HTML 提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性、引入网站图标等。

-   加载顺序区别。加载页面时，link 标签引入的 CSS 被同时加载；@import 引入的 CSS 将在页面加载完毕后被加载。

-   兼容性区别。@import 是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；link 标签作为 HTML 元素，不存在兼容性问题。

-   DOM 可控性区别。可以通过 JS 操作 DOM ，插入 link 标签来改变样式；由于 DOM 方法是基于文档的，无法使用 @import 的方式插入样式。

5. **谈谈如何减少回流？（浏览器绘制过程）**

**答：**

-   使用 transform 替代 top

-   不要把节点的属性值放在一个循环里当成循环里的变量

-   不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局

-   把 DOM 离线后修改。如：使用 documentFragment 对象在内存里操作 DOM

-   不要一条一条地修改 DOM 的样式。与其这样，还不如预先定义好 css 的 class，然后修改 DOM 的 className。

## CSS

1. **介绍一下标准的 CSS 的盒子模型？低版本 IE 的盒子模型有什么不同的？**

> 盒模型：内容（content）、填充（padding）、边界（margin）、边框（border）四个部分

**答：** 共有两种盒子模型：IE 盒模型（border-box）、W3C 标准盒模型（content-box）

IE 盒模型和 W3C 标准盒模型的区别：

-   W3C 标准盒模型： width，height 只包含内容 content，不包含 border 和 padding
-   IE 盒模型： width，height 包含 content、border 和 padding，即 content + padding + border。

> 在 ie8+ 浏览器中使用哪个盒模型可以由 box-sizing（CSS 新增的属性）控制，默认值为 content-box，即标准盒模型；如果将 box-sizing 设为 border-box 则用的是 IE 盒模型。

> 在 ie678 浏览器中 DOCTYPE 缺失会将盒子模型解释为 IE 盒子模型。若在页面中声明了 DOCTYPE 类型，所有的浏览器都会把盒模型解释为 W3C 盒模型。

2. **CSS 选择器有哪些？**

**答：**

-   id 选择器（`#myid`）
-   类选择器（`.myclassname`）
-   标签选择器（`div`,`h1`,`p`）
-   后代选择器（`h1 p`）
-   相邻后代选择器（子）选择器（`ul>li`）
-   兄弟选择器（`li~a`）
-   相邻兄弟选择器（`li+a`）
-   属性选择器（`a[rel="external"]`）
-   伪类选择器（`a:hover`,`li:nth-child`）
-   伪元素选择器（`::before`、`::after`）
-   通配符选择器（`*`）

3. **`::before` 和`:after` 中双冒号和单冒号有什么区别？解释一下伪元素的作用。**

**答：** 单冒号（:）用于 CSS3 伪类，双冒号（::）用于 CSS3 伪元素。（伪元素由双冒号和伪元素名称组成）
双冒号是在当前规范中引入的，用于区分伪类和伪元素。

> 不过浏览器需要同时支持旧的已经存在的伪元素写法，比如`:first-line`、`:first-letter`、`:before`、`:after` 等，而新的在 CSS3 中引入的伪元素则不允许再支持旧的单冒号的写法。

想让插入的内容出现在其它内容前，使用`::before`，否者，使用`::after`；
在代码顺序上，`::after` 生成的内容也比`::before` 生成的内容靠后。
如果按堆栈视角，`::after` 生成的内容会在`::before` 生成的内容之上。

4. **CSS 中哪些属性可以继承？**

**答：**

-   字体系列属性：font、font-family、font-weight、font-size、font-style、font-variant、font-stretch、font-size-adjust

-   文本系列属性：text-indent、text-align、text-shadow、line-height、word-spacing、letter-spacing、
    text-transform、direction、color

-   表格布局属性：caption-side border-collapse empty-cells

-   列表属性：list-style-type、list-style-image、list-style-position、list-style

-   光标属性：cursor

-   元素可见性：visibility

-   还有一些不常用的：speak，page，设置嵌套引用的引号类型 quotes 等属性

> 当一个属性不是继承属性时，可以使用 inherit 关键字指定一个属性应从父元素继承它的值，inherit 关键字用于显式地指定继承性，可用于任何继承性/非继承性属性。

6. **CSS 优先级算法如何计算？**

**答：** CSS 的优先级是根据样式声明的特殊性值来判断的。

选择器的特殊性值分为四个等级，如下：

-   标签内选择符 x,0,0,0
-   ID 选择符 0,x,0,0
-   class 选择符/属性选择符/伪类选择符 0,0,x,0
-   元素和伪元素选择符 0,0,0,x

计算方法：

-   每个等级的初始值为 0
-   每个等级的叠加为选择器出现的次数相加
-   不可进位，比如 0,99,99,99
-   依次表示为：0,0,0,0
-   每个等级计数之间没关联
-   等级判断从左向右，如果某一位数值相同，则判断下一位数值
-   如果两个优先级相同，则最后出现的优先级高，!important 也适用
-   通配符选择器的特殊性值为：0,0,0,0
-   继承样式优先级最低，通配符样式优先级高于继承样式
-   !important（权重），它没有特殊性值，但它的优先级是最高的，为了方便记忆，可以认为它的特殊性值为 1,0,0,0,0。

计算实例：

```css
#demo a {
	color: orange;
} /* 特殊性值：0,1,0,1 */

div#demo a {
	color: red;
} /* 特殊性值：0,1,0,2 */
```

> 注意：

-   样式应用时，css 会先查看规则的权重（!important），加了权重的优先级最高，当权重相同的时候，会比较规则的特殊性。

-   特殊性值越大的声明优先级越高。

-   相同特殊性值的声明，根据样式引入的顺序，后声明的规则优先级高（距离元素出现最近的）

-   部分浏览器由于字节溢出问题出现的进位表现不做考虑

## JavaScript

1. **介绍 js 的基本数据类型。**

**答：** js 一共有五种基本数据类型，分别是 `Undefined` 、`Null` 、 `Boolean` 、 `Number` 、 `String` ，还有在 ES6 中新增的 `Symbol` 和 ES10 中新增的 `BigInt` 类型。

-   Symbol 代表创建后独一无二且不可变的数据类型，它的出现我认为主要是为了解决可能出现的全局变量冲突的问题。

-   BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。

2. **JavaScript 有几种类型的值？**

**答：** JavaScript 中值的类型有 **原始数据类型** 和 **引用数据类型**

-   原始数据类型（Undefined、Null、Boolean、Number、String）存储在栈（stack）中，数据段简单，占据空间小、大小固定，属于被频繁使用数据。

-   引用数据类型（Object、Array、Function）存储在堆（heap）中，占据空间大、大小不固定，如果存储在栈中，将会影响程序运行的性能。

> 引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

3. **内部属性 `[[Class]]` 是什么？**

**答：** 所有 `typeof` 返回值为 `"object"` 的对象（如数组）都包含一个内部属性 `[[Class]]`（我们可以把它看作一个内部的分类，而非传统的面向对象意义上的类）。这个属性无法直接访问，一般通过 `Object.prototype.toString(..)` 来查看。例如：

```js
Object.prototype.toString.call([1, 2, 3]);
// "[object Array]"

Object.prototype.toString.call(/regex-literal/i);
// "[object RegExp]"

// 我们自己创建的类就不会有这份特殊待遇，因为 toString() 找不到 toStringTag 属性时只好返回默认的 Object 标签
// 默认情况类的[[Class]]返回[object Object]
class Class1 {}
Object.prototype.toString.call(new Class1()); // "[object Object]"
// 需要定制[[Class]]
class Class2 {
	get [Symbol.toStringTag]() {
		return "Class2";
	}
}
Object.prototype.toString.call(new Class2()); // "[object Class2]"
```

4. **null 和 undefined 的区别？**

**答：** Undefined 和 Null 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 undefined 和 null。

-   undefined 代表的含义是**未定义**，一般变量声明了但还没有定义的时候会返回 undefined，
-   null 代表的含义是**空对象**，主要用于赋值给一些可能会返回对象的变量，作为初始化。

> undefined 在 js 中不是一个保留字，这意味着我们可以使用 undefined 来作为一个变量名，这样的做法是非常危险的，它会影响我们对 undefined 值的判断。但是我们可以通过一些方法获得安全的 undefined 值，比如说 void 0。

> 当我们对两种类型使用 typeof 进行判断的时候，Null 类型化会返回 “object”，这是一个历史遗留的问题。当我们使用双等号对两种类型的值进行比较时会返回 true，使用三个等号时会返回 false。

5. **其他值到数字值或者布尔值的转换规则？**

**答：** 有时我们需要将非数字值当作数字来使用，比如数学运算。为此 ES5 规范定义了抽象操作 ToNumber。

-   Undefined 类型的值转换为 NaN。

-   Null 类型的值转换为 0。

-   Boolean 类型的值，true 转换为 1，false 转换为 0。

-   String 类型的值转换如同使用 Number() 函数进行转换，如果包含非数字值则转换为 NaN，空字符串为 0。

-   Symbol 类型的值不能转换为数字，会报错。

-   对象（包括数组）会首先被转换为相应的基本类型值，如果返回的是非数字的基本类型值，则再遵循以上规则将其强制转换为数字。

为了将值转换为相应的基本类型值，抽象操作 `ToPrimitive` 会首先（通过内部操作 DefaultValue）检查该值是否有 `valueOf()` 方法。如果有并且返回基本类型值，就使用该值进行强制类型转换。如果没有就使用 `toString()` 的返回值（如果存在）来进行强制类型转换。如果 `valueOf()` 和 `toString()` 均不返回基本类型值，会产生 `TypeError` 错误。

ES5 规范还定义了抽象操作 ToBoolean，列举了布尔强制类型转换所有可能出现的结果。假值主要包括： `undefined` 、 `null` 、 `false` 、 `+0` 、 `-0` 、 `NaN` 、 `""` 。

假值的布尔强制类型转换结果为 `false` 。从逻辑上说，假值列表以外的都应该是真值。

6. **JavaScript 继承的几种实现方式？**

**答：**

-   **原型链：** 这种实现方式存在的缺点是，在包含有引用类型的数据时，会被所有的实例对象所共享，容易造成修改的混乱。还有就是在创建子类型的时候不能向超类型传递参数。

-   **借用构造函数：** 这种方式是通过在子类型的函数中调用超类型的构造函数来实现的，这一种方法解决了不能向超类型传递参数的缺点，但是它存在的一个问题就是无法实现函数方法的复用，并且超类型原型定义的方法子类型也没有办法访问到。

-   **组合继承：** 将原型链和借用构造函数组合起来使用。通过借用构造函数的方式来实现类型的属性的继承，通过将子类型的原型设置为超类型的实例来实现方法的继承。这种方式解决了上面的两种模式单独使用时的问题，但是由于我们是以超类型的实例来作为子类型的原型，所以调用了两次超类的构造函数，造成了子类型的原型中多了很多不必要的属性。

-   **原型式继承：** 主要思路是基于已有的对象来创建新的对象，实现的原理是，向函数中传入一个对象，然后返回一个以这个对象为原型的对象。这种继承的思路主要不是为了实现创造一种新的类型，只是对某个对象实现一种简单继承，ES5 中定义的 Object.create() 方法就是原型式继承的实现。缺点与原型链方式相同。

-   **寄生式继承：** 创建一个用于封装继承过程的函数，通过传入一个对象，然后复制一个对象的副本，然后对象进行扩展，最后返回这个对象。这个扩展的过程就可以理解是一种继承。这种继承的优点就是对一个简单对象实现继承，如果这个对象不是我们的自定义类型时。缺点是没有办法实现函数的复用。

-   **寄生式组合继承：** 组合继承的缺点就是使用超类型的实例做为子类型的原型，导致添加了不必要的原型属性。寄生式组合继承的方式是使用超类型的原型的副本来作为子类型的原型，这样就避免了创建不必要的属性。

## Vue

1. **Vue 双向数据绑定原理？**

**答：** Vue 双向数据绑定主要通过 **数据劫持** 和 **发布订阅者模式** 实现 View 和 Model 的同步更新。

首先我们通过 `Object.defineProperty()` 方法来对 Model 数据各个属性添加访问器属性，以此来实现数据的劫持，因此当 Model 中的数据发生变化的时候，我们可以通过配置的 `setter` 和 `getter` 方法来实现对 View 层数据更新的通知。

数据在 HTML 模板中一共有两种绑定情况:

-   一种是使用 v-model 来对 value 值进行绑定，
-   一种是作为文本绑定，在对模板引擎进行解析的过程中。

如果遇到元素节点，并且属性值包含 v-model 的话，我们就从 Model 中去获取 v-model 所对应的属性的值，并赋值给元素的 value 值。然后给这个元素设置一个 **监听事件** ，当 View 中元素的数据发生变化的时候触发该事件，通知 Model 中的对应的属性的值进行更新。

如果遇到了绑定的文本节点，我们使用 Model 中对应的属性的值来替换这个文本。对于文本节点的更新，我们使用了 **发布订阅者模式** ，属性作为一个主题，我们为这个节点设置一个订阅者对象，将这个订阅者对象加入这个属性主题的订阅者列表中。当 Model 层数据发生改变的时候，Model 作为发布者向主题发出通知，主题收到通知再向它的所有订阅者推送，订阅者收到通知后更改自己的数据。

2. **讲讲 Vue 的生命周期钩子。**

**答：** Vue 一共有 8 个生命阶段，分别是创建前/后、加载前/后、更新前/后、销毁前/后，每个阶段对应了一个生命周期的钩子函数。

-   `beforeCreate` ，在实例初始化之后，在数据监听和事件配置之前触发。因此在这个事件中我们是获取不到 data 数据的。

-   `created` ，在实例创建完成后触发，此时可以访问 data、methods 等属性。但这个时候组件还没有被挂载到页面中去，所以这个时候访问不到 $el 属性。一般我们可以在这个函数中进行一些页面初始化的工作，比如通过 ajax 请求数据来对页面进行初始化。

-   `beforeMount` ，在组件被挂载到页面之前触发。在 beforeMount 之前，会找到对应的 template，并编译成 render 函数。

-   `mounted` ，在组件挂载到页面之后触发。此时可以通过 DOM API 获取到页面中的 DOM 元素。

-   `beforeUpdate` ，在响应式数据更新时触发，发生在虚拟 DOM 重新渲染和打补丁之前，这个时候我们可以对可能会被移除的元素做一些操作，比如移除事件监听器。

-   `updated` ，虚拟 DOM 重新渲染和打补丁之后调用。

-   `beforeDestroy` ，在实例销毁之前调用。一般在这一步我们可以销毁定时器、解绑全局事件等。

-   `destroyed` ，在实例销毁之后调用，调用后，Vue 实例中的所有东西都会解除绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

当我们使用 keep-alive 的时候，还有两个钩子函数，分别是 `activated` 和 `deactivated` 。用 keep-alive 包裹的组件在切换时不会进行销毁，而是缓存到内存中并执行 deactivated 钩子函数，命中缓存渲染后会执行 actived 钩子函数。

3. **Vue 组件间的参数传递方式？**

**答：**

-   **父子组件间通信**

第一种方法是子组件通过 `props` 属性来接受父组件的数据，然后父组件在子组件上注册监听事件，子组件通过 `emit` 触发事
件来向父组件发送数据。

第二种是通过 `ref` 属性给子组件设置一个名字。父组件通过 `$refs` 组件名来获得子组件，子组件通过 `$parent` 获得父组件，这样也可以实现通信。

第三种是使用 `provider/inject`，在父组件中通过 `provider` 提供变量，在子组件中通过 `inject` 来将变量注入到组件中。不论子组件有多深，只要调用了 `inject` 那么就可以注入 `provider` 中的数据。

-   **兄弟组件间通信**

第一种是使用 `eventBus` 的方法，它的本质是通过创建一个空的 Vue 实例来作为消息传递的对象，通信的组件引入这个实
例，通信的组件通过在这个实例上监听和触发事件，来实现消息的传递。

第二种是通过 `$parent.$refs` 来获取到兄弟组件，也可以进行通信。

-   **任意组件间通信**

使用 `eventBus` ，其实就是创建一个事件中心，相当于中转站，可以用它来传递事件和接收事件。

> 如果业务逻辑复杂，很多组件之间需要同时处理一些公共的数据，这个时候采用上面这一些方法可能不利于项目的维护。这个时候可以使用 vuex ，vuex 的思想就是将这一些公共的数据抽离出来，将它作为一个全局的变量来管理，然后其他组件就可以对这个公共数据进行读写操作，这样达到了解耦的目的。

4. **Vue 中 computed 和 watch 的差异？**

**答：**

-   computed 是计算一个新的属性，并将该属性挂载到 Vue 实例上，而 watch 是监听已经存在且已挂载到 Vue 实例上的数据，所以用 watch 同样可以监听 computed 计算属性的变化。

-   computed 本质是一个惰性求值的观察者，具有缓存性，只有当依赖变化后，第一次访问 computed 属性，才会计算新的值。而 watch 则是当数据发生变化便会调用执行函数。

-   从使用场景上说，computed 适用一个数据被多个数据影响，而 watch 适用一个数据影响多个数据。

5. **介绍 vue-router 中的导航钩子函数。**

**答：**

-   全局的钩子函数 `beforeEach` 和 `afterEach`

beforeEach 有三个参数，to 代表要进入的路由对象，from 代表离开的路由对象。next 是一个必须要执行的函数，如果不传参数，那就执行下一个钩子函数，如果传入 false，则终止跳转，如果传入一个路径，则导航到对应的路由，如果传入 error ，则导航终止，error 传入错误的监听函数。

-   单个路由独享的钩子函数 `beforeEnter`，它是在路由配置上直接进行定义的。

-   组件内的导航钩子主要有这三种：`beforeRouteEnter`、`beforeRouteUpdate`、`beforeRouteLeave`。它们是直接在路由组件内部直接进行定义的。

6. **vue 中 key 值的作用？**

**答：** vue 中 key 值的作用可以分为两种情况来考虑。

-   第一种情况是 v-if 中使用 key。由于 Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。因此当我们使用 v-if 来实现元素切换的时候，如果切换前后含有相同类型的元素，那么这个元素就会被复用。如果是相同的 input 元素，那么切换前后用户的输入不会被清除掉，这样是不符合需求的。因此我们可以通过使用 key 来唯一的标识一个元素，这个情况下，使用 key 的元素不会被复用。这个时候 key 的作用是用来标识一个独立的元素。

-   第二种情况是 v-for 中使用 key。用 v-for 更新已渲染过的元素列表时，它默认使用“就地复用”的策略。如果数据项的顺序发生了改变，Vue 不会移动 DOM 元素来匹配数据项的顺序，而是简单复用此处的每个元素。因此通过为每个列表项提供一个 key 值，来以便 Vue 跟踪元素的身份，从而高效的实现复用。这个时候 key 的作用是为了高效的更新渲染虚拟 DOM。

## React

1. **什么是 JSX ？**

**答：** JSX 是 ECMAScript 一个类似 XML 的语法扩展。基本上，它只是为 `React.createElement()` 函数提供语法糖，从而让在我们在 JavaScript 中，使用类 HTML 模板的语法，进行页面描述。

在下面的示例中，`<h1>` 内的文本标签会作为 JavaScript 函数返回给渲染函数。

```jsx
class App extends React.Component {
	render() {
		return (
			<div>
				<h1>{"Welcome to React world!"}</h1>
			</div>
		);
	}
}
```

以上示例 render 方法中的 JSX 将会被转换为以下内容：

```js
React.createElement(
	"div",
	null,
	React.createElement("h1", null, "Welcome to React world!"),
);
```

2. **React 中的 props 是什么？**

**答：** Props 是组件的输入。它们是单个值或包含一组值的对象，这些值在创建时使用类似于 HTML 标记属性的命名约定传递给组件。它们是从父组件传递到子组件的数据。

Props 的主要目的是提供以下组件功能：

-   将自定义数据传递到组件。
-   触发状态更改。
-   在组件的 `render()` 方法中通过 `this.props.reactProp` 使用。

例如，让我们使用 reactProp 属性创建一个元素：

```jsx
<Element reactProp={"1"} />
```

然后，reactProp 将成为附加到 React props 对象的属性，该对象最初已存在于使用 React 库创建的所有组件上。

```js
props.reactProp;
```

3. **React 中为什么不能直接更新状态？**

**答：** 如果你尝试直接改变状态，那么组件将不会重新渲染。

```jsx
// Wrong
this.state.message = "Hello world";
```

正确方法应该是使用 `setState()` 方法。它调度组件状态对象的更新。当状态更改时，组件通将会重新渲染。

```jsx
// Correct
this.setState({ message: "Hello World" });
```

> 注意： 你可以在 `constructor` 中或使用最新的 JavaScript 类属性声明语法直接设置状态对象。

4. **什么是受控组件与非受控组件？**

**答：** 在随后的用户输入中，**能够控制表单中输入元素的组件被称为受控组件**，即每个状态更改都有一个相关联的处理程序。例如，我们使用下面的 handleChange 函数将输入框的值转换成大写：

```jsx
handleChange(event) {
	this.setState({value: event.target.value.toUpperCase()})
}
```

**非受控组件是在内部存储其自身状态的组件**，当需要时，可以使用 ref 查询 DOM 并查找其当前值。这有点像传统的 HTML。在下面的 UserProfile 组件中，我们通过 ref 引用 name 输入框：

```jsx
class UserProfile extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.input = React.createRef();
	}

	handleSubmit(event) {
		alert("A name was submitted: " + this.input.current.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					{"Name:"}
					<input type="text" ref={this.input} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}
```

> 在大多数情况下，建议使用受控组件来实现表单。

5. **React 中的提升状态是什么？**

**答：** 当多个组件需要共享相同的更改数据时，建议将共享状态提升到最接近的共同祖先。这意味着，如果两个子组件共享来自其父组件的相同数据，则将状态移动到父组件，而不是在两个子组件中维护局部状态。
