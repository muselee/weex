!function(t){function e(e){for(var n,l,u=e[0],p=e[1],i=e[2],s=0,f=[];s<u.length;s++)l=u[s],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(t[n]=p[n]);for(c&&c(e);f.length;)f.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,u=1;u<r.length;u++){var p=r[u];0!==o[p]&&(n=!1)}n&&(a.splice(e--,1),t=l(l.s=r[0]))}return t}var n={},o={45:0},a=[];function l(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=t,l.c=n,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(r,n,function(e){return t[e]}.bind(null,n));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],p=u.push.bind(u);u.push=e,u=u.slice();for(var i=0;i<u.length;i++)e(u[i]);var c=p;a.push([577,0]),r()}({577:function(t,e,r){"use strict";r.r(e);r(9),r(11);var n=r(1),o=r(4),a=r.n(o),l=r(12);window.location.href.includes("static")||new l({theme:"dark"}),a.a.init(n.a);var u=r(630).default;new n.a(n.a.util.extend({el:"#root"},u))},630:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return e("scroll",{staticClass:"demo-test-prompt",attrs:{}},[e("p",{staticClass:"btn weex-el weex-text",attrs:{"weex-type":"text","data-evt-click":""},on:{click:t.$stopOuterA,weex$tap:function(e){return e.stopPropagation(),t.prompt.apply(null,arguments)}}},[t._v("Modal_prompt")]),t._v(" "),e("p",{staticClass:" weex-el weex-text",attrs:{"weex-type":"text"}},[t._v("prompt回调: "+t._s(t.promptCallBackInfo))])])};n._withStripped=!0;var o=r(0),a=weex.requireModule("modal"),l={data:function(){return{promptCallBackInfo:""}},mounted:function(){},methods:{jumpPage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e;Object(o.r)(t,r)},prompt:function(){var t=this;a.prompt({message:"请输入需要显示的值",duration:.3},(function(e){a.toast({message:"prompt callback:"+e}),console.log("prompt callback",e),t.promptCallBackInfo=e}))}}},u=r(2),p=Object(u.a)(l,n,[],!1,null,null,null);e.default=p.exports}});