(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{202:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"对象扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象扩展","aria-hidden":"true"}},[t._v("#")]),t._v(" 对象扩展")]),t._v(" "),s("p",[t._v("创建对象的方式有两种：声明形式和构造形式")]),t._v(" "),s("ol",[s("li",[t._v("声明形式")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"goudan"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("构造形式")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"属性描述符（数据描述符）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性描述符（数据描述符）","aria-hidden":"true"}},[t._v("#")]),t._v(" 属性描述符（数据描述符）")]),t._v(" "),s("p",[s("code",[t._v("Object.getOwnPropertyDescriptor(对象，对象属性)")])]),t._v(" "),s("p",[t._v("返回")]),t._v(" "),s("ul",[s("li",[t._v("value: 属性值")]),t._v(" "),s("li",[t._v("writable：true/false 是否可以修改属性值")]),t._v(" "),s("li",[t._v("enumerable: true/false 是否可以枚举")]),t._v(" "),s("li",[t._v("configurable: true/false 属性是否可以配置")])]),t._v(" "),s("p",[s("code",[t._v("Object.defineProperty(..)")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myObject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tmyObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" enumberable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("在创建普通属性时属性描述符会使用默认值（"),s("code",[t._v("true")]),t._v("），我们可以使用上述方法来添加一个新属性或者修改一个已有属性（如果"),s("code",[t._v("configurable:true")]),t._v("）并对特性进行设置")]),t._v(" "),s("blockquote",[s("p",[t._v("注意："),s("strong",[t._v("把"),s("code",[t._v("configurable")]),t._v("设置成"),s("code",[t._v("false")]),t._v("是单向操作，无法撤销")])]),t._v(" "),s("p",[t._v("有一个例外,当属性已经不可配置，即"),s("code",[t._v("configurable")]),t._v("为"),s("code",[t._v("false")]),t._v("，我们还是可以把"),s("code",[t._v("writable")]),t._v("由"),s("code",[t._v("true")]),t._v("改成"),s("code",[t._v("false")]),t._v(",但是无法从"),s("code",[t._v("false")]),t._v("改成"),s("code",[t._v("true")])]),t._v(" "),s("p",[t._v("除了无法修改，"),s("code",[t._v("configurable:false")]),t._v("还会禁止删除这个属性")])]),t._v(" "),s("p",[s("code",[t._v("enumerable")])]),t._v(" "),s("p",[t._v("该描述符控制的是属性是否会出现在对象的属性枚举中，比如说"),s("code",[t._v("for..in")]),t._v("循环")]),t._v(" "),s("h4",{attrs:{id:"不变性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不变性","aria-hidden":"true"}},[t._v("#")]),t._v(" 不变性")]),t._v(" "),s("p",[t._v("有时我们希望对象的属性或者对象是不可改变的")]),t._v(" "),s("ol",[s("li",[t._v("对象常量")])]),t._v(" "),s("p",[t._v("结合"),s("code",[t._v("writable：alse和configurable: false")]),t._v("就可以创建一个真正的常量属性")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("禁止扩展")])]),t._v(" "),s("p",[t._v("如果你想禁")]),t._v(" "),s("p",[t._v("止一个对象添加新属性并且保留已有属性，可以使用"),s("code",[t._v("Object.preventExtensions(..)")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventExtensions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//undefined")]),t._v("\n")])])]),s("p",[t._v("在非严格模式下，创建属性b会静默失败。在严格模式下，将会抛出TypeError错误")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("密封")])]),t._v(" "),s("p",[s("code",[t._v("Object.seal(..)")]),t._v("会创建一个密封的对象，这个方法实际上会在一个现有对象上调用"),s("code",[t._v("Object.preventExtensions(..)")]),t._v("并把现有属性标记为"),s("code",[t._v("configurable:false")])]),t._v(" "),s("p",[t._v("所以密封之后不仅不能添加新属性，也不能重新配置或者删除任何现有属性（虽然可以修改属性的值）")]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("strong",[t._v("冻结")])])]),t._v(" "),s("p",[s("code",[t._v("Object.freeze(..)")]),t._v("会创建一个冻结对象，这个方法实际上会在一个现有对象上调用"),s("code",[t._v("Object.seal(..)")]),t._v('并把所有"数据访问"属性标记为'),s("code",[t._v("writable:false")]),t._v("，这样就无法修改他们的值")]),t._v(" "),s("p",[t._v("这个方法是你可以应用在对象上的级别最高的不可变性，它会禁止对于对象及其任意直接属性的修改（不过就像我们之前说过的，这个对象引用的其他对象是不受影响的）。")]),t._v(" "),s("h4",{attrs:{id:"getter和setter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getter和setter","aria-hidden":"true"}},[t._v("#")]),t._v(" Getter和Setter")]),t._v(" "),s("p",[t._v("在ES5中可以使用"),s("code",[t._v("getter")]),t._v("和"),s("code",[t._v("setter")]),t._v("部分改写默认操作，但是只能应用在单个属性上，无法应用在整个对象上。"),s("code",[t._v("getter")]),t._v("是一个隐藏函数，会在获取属性值时调用。"),s("code",[t._v("setter")]),t._v("也是一个隐藏函数，会在设置属性时调用。")]),t._v(" "),s("blockquote",[s("p",[t._v("当你给一个属性定义"),s("code",[t._v("getter")]),t._v("、"),s("code",[t._v("sette")]),t._v("或者两者都有时，这个属性会被定义为“访问描述符”（和“数据描述符相对”）。对于访问描述符来说，"),s("code",[t._v("Javascript")]),t._v("会忽略他们的"),s("code",[t._v("value")]),t._v("和"),s("code",[t._v("writable")]),t._v("特性，取而代之的是关心"),s("code",[t._v("set")]),t._v("和"),s("code",[t._v("get")])]),t._v(" "),s("p",[t._v("（还有"),s("code",[t._v("configurable")]),t._v("和"),s("code",[t._v("enumerable")]),t._v("）特性")])]),t._v(" "),s("p",[t._v("通常来说"),s("code",[t._v("getter")]),t._v("和"),s("code",[t._v("setter")]),t._v("是成对出现的（只定义一个的话通常会出现意料之外的行为）")]),t._v(" "),s("p",[s("code",[t._v("setter")]),t._v("会覆盖单个属性默认的赋值操作")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_a_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_a_ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nobj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//4 而不是2")]),t._v("\n")])])]),s("h4",{attrs:{id:"存在性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存在性","aria-hidden":"true"}},[t._v("#")]),t._v(" 存在性")]),t._v(" "),s("p",[t._v("对象的属性访问值返回的值是"),s("code",[t._v("undefined")]),t._v("，可能有两种情况：")]),t._v(" "),s("ol",[s("li",[t._v("属性本身存储的"),s("code",[t._v("undefined")])]),t._v(" "),s("li",[t._v("属性不存在返回"),s("code",[t._v("undefined")])])]),t._v(" "),s("p",[t._v("如何判断这两种情况：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n\nobj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasOwnProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\nobj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasOwnProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n")])])]),s("p",[s("code",[t._v("in")]),t._v("操作符会检查属性（无论是否枚举）是否存在对象及其"),s("code",[t._v("[[property]]")]),t._v("原型链中。相比之下，"),s("code",[t._v("hasOwnProperty(..)")]),t._v("只会检查属性是否在"),s("code",[t._v("obj")]),t._v("对象中，不会检查原型链")]),t._v(" "),s("h4",{attrs:{id:"属性设置和屏蔽"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性设置和屏蔽","aria-hidden":"true"}},[t._v("#")]),t._v(" 属性设置和屏蔽")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("ol",[s("li",[t._v("如果"),s("code",[t._v("obj")]),t._v("包含名为a的属性，则该语句只会修改已有属性")]),t._v(" "),s("li",[t._v("如果a不存在于"),s("code",[t._v("obj")]),t._v("中，也不在于原型链上，则该属性就会被添加到"),s("code",[t._v("obj")]),t._v("中")]),t._v(" "),s("li",[t._v("如果a既出现在"),s("code",[t._v("obj")]),t._v("中，也存在于原型链上层，则``obj`中的a会屏蔽原型链上层的所有a属性（总是选择最底层）")]),t._v(" "),s("li",[t._v("如果a只存在于原型链中会出现三种情况：\n"),s("ol",[s("li",[t._v("如果在原型链上层存在a的普通数据访问属性并且没有被标记为只读（"),s("code",[t._v("writable:false")]),t._v("），那么就会直接在"),s("code",[t._v("obj")]),t._v("中添加一个a的新属性，它是屏蔽属性")]),t._v(" "),s("li",[t._v("如果在原型链上层存在a，但是它被标记为只读("),s("code",[t._v("wraitable:false")]),t._v(")，那么无法修改已有属性或者在"),s("code",[t._v("obj")]),t._v("上创建屏蔽属性，如果运行在严格模式下，代码会抛出一个错误。否则，这条语句会被忽略。总之不会发生屏蔽。")]),t._v(" "),s("li",[t._v("如果在原型链上层存在a并且它是一个"),s("code",[t._v("setter")]),t._v("，那就一定会调用这个"),s("code",[t._v("setter")]),t._v("。a不会被添加 到（或者说屏蔽与）"),s("code",[t._v("obj")]),t._v("，也不会重新定义a这个"),s("code",[t._v("setter.")])])])])])])])}],!1,null,null,null);a.default=n.exports}}]);