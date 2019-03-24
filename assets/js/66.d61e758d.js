(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{195:function(i,n,v){"use strict";v.r(n);var t=v(0),e=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var i=this,n=i.$createElement,v=i._self._c||n;return v("div",{staticClass:"content"},[v("h3",{attrs:{id:"过渡-动画"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#过渡-动画","aria-hidden":"true"}},[i._v("#")]),i._v(" 过渡-动画")]),i._v(" "),v("h2",{attrs:{id:"过渡"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#过渡","aria-hidden":"true"}},[i._v("#")]),i._v(" 过渡")]),i._v(" "),v("ol",[v("li",[v("p",[v("code",[i._v("transition:property duration delay timing-function")])]),i._v(" "),v("p",[v("code",[i._v("transition-property")]),i._v(":过渡属性的名称")]),i._v(" "),v("ul",[v("li",[i._v("none   没有过渡属性")]),i._v(" "),v("li",[i._v("all        所有属性都过渡(默认值)")]),i._v(" "),v("li",[i._v("property    具体属性名称(property1,property2...)")])]),i._v(" "),v("p",[v("code",[i._v("transition-duration")]),i._v(":过渡属性花费的时间")]),i._v(" "),v("p",[v("code",[i._v("transition-delay:")]),i._v("过渡效果延迟时间")]),i._v(" "),v("p",[v("code",[i._v("transition-timing-function")]),i._v(":过渡效果速度曲线运动形式")]),i._v(" "),v("ul",[v("li",[i._v("linear规定以相同速度开始至结束的过渡效果")]),i._v(" "),v("li",[i._v("ease规定慢速开始，然后变快，然后慢速结束的过渡效果")]),i._v(" "),v("li",[i._v("ease-in 规定以慢速开始的过渡效果")]),i._v(" "),v("li",[i._v("ease-out规定以慢速结束的过渡效果")]),i._v(" "),v("li",[i._v("ease-in-out 规定以慢速开始和结束的过渡效果")]),i._v(" "),v("li",[i._v("贝赛尔曲线")])])]),i._v(" "),v("li",[v("p",[i._v("过度完成事件")]),i._v(" "),v("p",[v("code",[i._v("Webkit")]),i._v("内核：")]),i._v(" "),v("p",[v("code",[i._v("obj.addEventListener('webkitTransitionEnd',function(){});")])]),i._v(" "),v("p",[i._v("标准:\n"),v("code",[i._v("obj.addEventListener('transitionend',function(){});")])])])]),i._v(" "),v("h3",{attrs:{id:"动画"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#动画","aria-hidden":"true"}},[i._v("#")]),i._v(" 动画")]),i._v(" "),v("ol",[v("li",[v("p",[v("code",[i._v("animation: name duration delay timing-function iteration-count direction;")])]),i._v(" "),v("p",[v("code",[i._v("animation-name")]),i._v(": 动画名称")]),i._v(" "),v("ul",[v("li",[i._v("keyframename  自定义的名字")]),i._v(" "),v("li",[i._v("none  无动画效果")])]),i._v(" "),v("p",[v("code",[i._v("animation-duration")]),i._v(": 动画执行时间")]),i._v(" "),v("p",[v("code",[i._v("animation-delay")]),i._v(":动画效果延迟时间")]),i._v(" "),v("p",[v("code",[i._v("animation-timing-function")]),i._v(":动画速度曲线")]),i._v(" "),v("ul",[v("li",[i._v("linear/ ease / ease-in / ease-out / ease-in-out")]),i._v(" "),v("li",[i._v("贝赛尔曲线")])]),i._v(" "),v("p",[v("code",[i._v("animation-iteration-count")]),i._v(": 动画执行次数")]),i._v(" "),v("ul",[v("li",[i._v("次数数值")]),i._v(" "),v("li",[i._v("infinite无限重复")])]),i._v(" "),v("p",[v("code",[i._v("animation-direction")]),i._v(":动画执行方向 和"),v("code",[i._v("animation-iteration-count")]),i._v("一起使用")]),i._v(" "),v("ul",[v("li",[i._v("normal正常")]),i._v(" "),v("li",[i._v("alternate  动画轮流反向播放")])]),i._v(" "),v("p",[v("code",[i._v("animation-play-state")]),i._v(":动画执行状态")]),i._v(" "),v("ul",[v("li",[i._v("paused  暂停动画")]),i._v(" "),v("li",[i._v("running  运行动画")])]),i._v(" "),v("p",[v("code",[i._v("animation-fill-mode")]),i._v(":动画执行过程效果是否可见")]),i._v(" "),v("ul",[v("li",[i._v("none不改变（默认）")]),i._v(" "),v("li",[i._v("forwards 动画播放之后，动画结束状态可见（在最后一个关键帧中定义）")]),i._v(" "),v("li",[i._v("backwards 动画播放之前，动画初始状态可见")]),i._v(" "),v("li",[i._v("both 动画播放前 动画初始状态可见，同时动画播放之后，动画结束状态可见")])])]),i._v(" "),v("li",[v("p",[i._v("@keyframes:animationname {keyframes-selector {css-styles;}}规定动画")]),i._v(" "),v("p",[v("code",[i._v("animationname")]),i._v("定义动画的名称。")]),i._v(" "),v("p",[v("code",[i._v("keyframes-selector")]),i._v("动画时长的百分比")]),i._v(" "),v("ul",[v("li",[i._v("0-100% 使用百分比时，没有写100%时，它会自动补帧（恢复初始状态）")]),i._v(" "),v("li",[i._v("from（与0% 相同）")]),i._v(" "),v("li",[i._v("to（与100% 相同）可以只有to")])]),i._v(" "),v("p",[v("code",[i._v("css-styles")]),i._v("  一个或多个合法的 CSS 样式属性")])]),i._v(" "),v("li",[v("p",[i._v("动画事件")]),i._v(" "),v("p",[i._v("动画开始触发：")]),i._v(" "),v("ul",[v("li",[i._v('obj.addEventListener("webkitAnimationStart",fn);')]),i._v(" "),v("li",[i._v('obj.addEventListener("animationstart", fn);')])]),i._v(" "),v("p",[i._v("动画执行过程中触发：")]),i._v(" "),v("ul",[v("li",[i._v('obj.addEventListener("webkitAnimationIteration", fn)')]),i._v(" "),v("li",[i._v('obj.addEventListener("animationiteration", fn);')])]),i._v(" "),v("p",[i._v("动画结束触发：")]),i._v(" "),v("ul",[v("li",[i._v("obj.addEventListener('webkitAnimationEnd',fn);")]),i._v(" "),v("li",[i._v("obj.addEventListener('animationend',fn);")])])])])])}],!1,null,null,null);n.default=e.exports}}]);