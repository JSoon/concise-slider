/*!
 * @description  concise-family - Concise components.
 * @version      1.0.0
 * @release      Thu Feb 27 2020 15:16:46 GMT+0800 (China Standard Time)
 * @author       J.Soon <serdeemail@gmail.com>
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["concise-family"]=e():(t.ConciseFamily=t.ConciseFamily||{},t.ConciseFamily["concise-family"]=e())}(this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=76)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(41))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(2),o=n(7),i=n(20);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(2),o=n(21),i=n(6),c=n(14),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(0),o=n(9).f,i=n(5),c=n(23),u=n(15),a=n(45),s=n(34);t.exports=function(t,e){var n,f,l,p,d,v=t.target,h=t.global,y=t.stat;if(n=h?r:y?r[v]||u(v,{}):(r[v]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(d=o(n,f))&&d.value:n[f],!s(h?f:v+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(n,f,p,t)}}},function(t,e,n){var r=n(2),o=n(19),i=n(20),c=n(10),u=n(14),a=n(3),s=n(21),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=c(t),e=u(e,!0),s)try{return f(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(11),o=n(13);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(1),o=n(12),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(0),o=n(5);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e){t.exports={}},function(t,e,n){var r=n(47),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(2),o=n(1),i=n(22);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),o=n(4),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e,n){var r=n(0),o=n(5),i=n(3),c=n(15),u=n(24),a=n(42),s=a.get,f=a.enforce,l=String(String).split("String");(t.exports=function(t,e,n,u){var a=!!u&&!!u.unsafe,s=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),f(n).source=l.join("string"==typeof e?e:"")),t!==r?(a?!p&&t[e]&&(s=!0):delete t[e],s?t[e]=n:o(t,e,n)):s?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u(this)}))},function(t,e,n){var r=n(25),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(0),o=n(15),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(27),o=n(28),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(44),o=n(25);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(30),o=n(18).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(3),o=n(10),i=n(48).indexOf,c=n(16);t.exports=function(t,e){var n,u=o(t),a=0,s=[];for(n in u)!r(c,n)&&r(u,n)&&s.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){var r=n(32),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(1),o=/#|\.prototype\./,i=function(t,e){var n=u[c(t)];return n==s||n!=a&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,e,n){"use strict";var r=n(50).forEach,o=n(57),i=n(58),c=o("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e,n){var r=n(13);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r=n(30),o=n(18);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){"use strict";n.r(e);n(40),n(59),n(68),n(70),n(72),n(74),n(75);e.default=function(t){var e,n,r,o,i,c=t.selector,u=t.gridNum,a=t.step,s=void 0===a?t.gridNum:a,f=t.loop,l=void 0!==f&&f,p=t.indicator,d=void 0===p||p,v=t.indicatorCtrl,h=void 0!==v&&v,y=t.indicatorType,g=void 0===y?"page":y,m=t.prevNext,b=void 0===m||m,x=t.autoResize,S=void 0!==x&&x,E=t.onCreated,w=void 0===E?function(){}:E,O=t.onBeforeSliding,L=void 0===O?function(){}:O,j=t.onAfterSliding,_=void 0===j?function(){}:j,T={},N=0,I=!0,A=!1;if(!c)throw"Slider has no id or class selector!";n=0,r=u-1;var M=document.querySelector(c),P=M.querySelector(".slider-wrapper")||M,C=P.querySelector(".slider-list-wrapper"),k=P.querySelector(".slider-list"),F=P.querySelectorAll(".slider-item"),R=document.createElement("div");R.classList.add("slider-indicator"),e="page"===g?Math.ceil(F.length/u):F.length;for(var D=0;D<e;D++){var V=document.createElement("div");V.classList.add("slider-indicator-item"),V.setAttribute("data-idx",D),R.appendChild(V)}R.firstElementChild.classList.add("active"),d&&P.appendChild(R);var G=document.createElement("div");G.innerHTML="Prev",G.classList.add("slider-prev");var q=document.createElement("div");q.innerHTML="Next",q.classList.add("slider-next"),b&&u<F.length&&(P.appendChild(G),P.appendChild(q));var H={sliderWrapper:P,sliderListWrapper:C,sliderList:k,sliderIndicator:R,sliderPrev:G,sliderNext:q,curIndicatorItemIdx:N,curVisibleStart:n,curVisibleEnd:r};function W(t){var e=t.direction,i=t.newIndicatorItemIdx;L(Object.assign(t,H)),"prev"===e?(n-=s)<0&&(n=0):"next"===e?n+=s:"locating"===e&&(n="page"===g?i*u:i),(r=n+u-1)>F.length-1&&(r=F.length-1,n=r+1-u),l&&(I&&"prev"===e&&(r=F.length-1,n=r+1-u),A&&"next"===e&&(r=(n=0)+u-1)),k.style.transform="translate3d(-".concat(n*o,"px, 0, 0)"),F.forEach((function(t,e){t.style.opacity=0,e>=n&&e<=r&&(t.style.opacity=1)})),_(Object.assign(t,H))}function z(t){var e=t.init,n=void 0!==e&&e,r=C.clientWidth,i=(o=r/u)*F.length;return k.style.width="".concat(i,"px"),F.forEach((function(t,e){t.style.width="".concat(o,"px"),e<u&&n&&(t.style.opacity=1)})),t}return w(H),z({init:!0}),k.style.display="block",k.addEventListener("transitionend",(function(t){I=0===n,A=r===F.length-1,t.target===k&&function(){"page"===g?A?N=e-1:n%u==0&&(N=n/u):N=n;R.children.forEach((function(t){return t.classList.remove("active")})),R.children[N].classList.add("active")}()})),S&&window.addEventListener("resize",(function(t){i&&clearTimeout(i),i=setTimeout((function(){z()}),1e3)})),G.addEventListener("click",(function(t){W({direction:"prev"})}),!1),q.addEventListener("click",(function(t){W({direction:"next"})}),!1),h&&(R.children.forEach((function(t){return t.style.cursor="pointer"})),R.addEventListener("click",(function(t){t.target.hasAttribute("data-idx")&&W({direction:"locating",newIndicatorItemIdx:Number(t.target.getAttribute("data-idx"))})}),!1)),T.resize=z,T}},function(t,e,n){"use strict";var r=n(8),o=n(35);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r,o,i,c=n(43),u=n(0),a=n(4),s=n(5),f=n(3),l=n(26),p=n(16),d=u.WeakMap;if(c){var v=new d,h=v.get,y=v.has,g=v.set;r=function(t,e){return g.call(v,t,e),e},o=function(t){return h.call(v,t)||{}},i=function(t){return y.call(v,t)}}else{var m=l("state");p[m]=!0,r=function(t,e){return s(t,m,e),e},o=function(t){return f(t,m)?t[m]:{}},i=function(t){return f(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(0),o=n(24),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e){t.exports=!1},function(t,e,n){var r=n(3),o=n(46),i=n(9),c=n(7);t.exports=function(t,e){for(var n=o(e),u=c.f,a=i.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||u(t,f,a(e,f))}}},function(t,e,n){var r=n(17),o=n(29),i=n(33),c=n(6);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(10),o=n(31),i=n(49),c=function(t){return function(e,n,c){var u,a=r(e),s=o(a.length),f=i(c,s);if(t&&n!=n){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(32),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e,n){var r=n(51),o=n(11),i=n(36),c=n(31),u=n(53),a=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l;return function(d,v,h,y){for(var g,m,b=i(d),x=o(b),S=r(v,h,3),E=c(x.length),w=0,O=y||u,L=e?O(d,E):n?O(d,0):void 0;E>w;w++)if((p||w in x)&&(m=S(g=x[w],w,b),t))if(e)L[w]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return w;case 2:a.call(L,g)}else if(f)return!1;return l?-1:s||f?f:L}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,e,n){var r=n(52);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(4),o=n(54),i=n(55)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(12);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(0),o=n(27),i=n(3),c=n(28),u=n(37),a=n(56),s=o("wks"),f=r.Symbol,l=a?f:f&&f.withoutSetter||c;t.exports=function(t){return i(s,t)||(u&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},function(t,e,n){var r=n(37);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){"use strict";var r=n(1);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){var r=n(2),o=n(1),i=n(3),c=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,e){if(i(u,t))return u[t];e||(e={});var n=[][t],s=!!i(e,"ACCESSORS")&&e.ACCESSORS,f=i(e,0)?e[0]:a,l=i(e,1)?e[1]:void 0;return u[t]=!!n&&!o((function(){if(s&&!r)return!0;var t={length:-1};s?c(t,1,{enumerable:!0,get:a}):t[1]=1,n.call(t,f,l)}))}},function(t,e,n){"use strict";var r=n(2),o=n(0),i=n(34),c=n(23),u=n(3),a=n(12),s=n(60),f=n(14),l=n(1),p=n(63),d=n(29).f,v=n(9).f,h=n(7).f,y=n(66).trim,g=o.Number,m=g.prototype,b="Number"==a(p(m)),x=function(t){var e,n,r,o,i,c,u,a,s=f(t,!1);if("string"==typeof s&&s.length>2)if(43===(e=(s=y(s)).charCodeAt(0))||45===e){if(88===(n=s.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(s.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+s}for(c=(i=s.slice(2)).length,u=0;u<c;u++)if((a=i.charCodeAt(u))<48||a>o)return NaN;return parseInt(i,r)}return+s};if(i("Number",!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var S,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(b?l((function(){m.valueOf.call(n)})):"Number"!=a(n))?s(new g(x(e)),n,E):x(e)},w=r?d(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;w.length>O;O++)u(g,S=w[O])&&!u(E,S)&&h(E,S,v(g,S));E.prototype=m,m.constructor=E,c(o,"Number",E)}},function(t,e,n){var r=n(4),o=n(61);t.exports=function(t,e,n){var i,c;return o&&"function"==typeof(i=e.constructor)&&i!==n&&r(c=i.prototype)&&c!==n.prototype&&o(t,c),t}},function(t,e,n){var r=n(6),o=n(62);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){var r,o=n(6),i=n(64),c=n(18),u=n(16),a=n(65),s=n(22),f=n(26),l=f("IE_PROTO"),p=function(){},d=function(t){return"<script>"+t+"<\/script>"},v=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;v=r?function(t){t.write(d("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=s("iframe")).style.display="none",a.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F);for(var n=c.length;n--;)delete v.prototype[c[n]];return v()};u[l]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[l]=t):n=v(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(2),o=n(7),i=n(6),c=n(38);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=c(e),u=r.length,a=0;u>a;)o.f(t,n=r[a++],e[n]);return t}},function(t,e,n){var r=n(17);t.exports=r("document","documentElement")},function(t,e,n){var r=n(13),o="["+n(67)+"]",i=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),u=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,e,n){var r=n(8),o=n(69);r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},function(t,e,n){"use strict";var r=n(2),o=n(1),i=n(38),c=n(33),u=n(19),a=n(36),s=n(11),f=Object.assign,l=Object.defineProperty;t.exports=!f||o((function(){if(r&&1!==f({b:1},f(l({},"a",{enumerable:!0,get:function(){l(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol();return t[n]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){e[t]=t})),7!=f({},t)[n]||"abcdefghijklmnopqrst"!=i(f({},e)).join("")}))?function(t,e){for(var n=a(t),o=arguments.length,f=1,l=c.f,p=u.f;o>f;)for(var d,v=s(arguments[f++]),h=l?i(v).concat(l(v)):i(v),y=h.length,g=0;y>g;)d=h[g++],r&&!p.call(v,d)||(n[d]=v[d]);return n}:f},function(t,e,n){var r=n(0),o=n(71),i=n(35),c=n(5);for(var u in o){var a=r[u],s=a&&a.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(t){s.forEach=i}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){var r=n(8),o=n(0),i=n(73),c=[].slice,u=function(t){return function(e,n){var r=arguments.length>2,o=r?c.call(arguments,2):void 0;return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,o)}:e,n)}};r({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:u(o.setTimeout),setInterval:u(o.setInterval)})},function(t,e,n){var r=n(17);t.exports=r("navigator","userAgent")||""},function(t,e,n){},function(t,e){
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
"document"in window.self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||function(t){"use strict";if("Element"in t){var e=t.Element.prototype,n=Object,r=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},o=Array.prototype.indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1},i=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},c=function(t,e){if(""===e)throw new i("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(e))throw new i("INVALID_CHARACTER_ERR","String contains an invalid character");return o.call(t,e)},u=function(t){for(var e=r.call(t.getAttribute("class")||""),n=e?e.split(/\s+/):[],o=0,i=n.length;o<i;o++)this.push(n[o]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},a=u.prototype=[],s=function(){return new u(this)};if(i.prototype=Error.prototype,a.item=function(t){return this[t]||null},a.contains=function(t){return-1!==c(this,t+="")},a.add=function(){var t,e=arguments,n=0,r=e.length,o=!1;do{t=e[n]+"",-1===c(this,t)&&(this.push(t),o=!0)}while(++n<r);o&&this._updateClassName()},a.remove=function(){var t,e,n=arguments,r=0,o=n.length,i=!1;do{for(t=n[r]+"",e=c(this,t);-1!==e;)this.splice(e,1),i=!0,e=c(this,t)}while(++r<o);i&&this._updateClassName()},a.toggle=function(t,e){t+="";var n=this.contains(t),r=n?!0!==e&&"remove":!1!==e&&"add";return r&&this[r](t),!0===e||!1===e?e:!n},a.toString=function(){return this.join(" ")},n.defineProperty){var f={get:s,enumerable:!0,configurable:!0};try{n.defineProperty(e,"classList",f)}catch(t){void 0!==t.number&&-2146823252!==t.number||(f.enumerable=!1,n.defineProperty(e,"classList",f))}}else n.prototype.__defineGetter__&&e.__defineGetter__("classList",s)}}(window.self),function(){"use strict";var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,r=arguments.length;for(n=0;n<r;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}t=null}())},function(t,e,n){"use strict";n.r(e);var r=n(39);e.default={slider:r.default}}]).default}));
//# sourceMappingURL=concise-family.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25jaXNlLWZhbWlseS5qcyIsInNvdXJjZVJvb3QiOiIifQ==