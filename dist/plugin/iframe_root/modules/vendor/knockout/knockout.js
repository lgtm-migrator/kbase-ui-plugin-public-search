/*!
 * Knockout JavaScript library v3.5.1
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
!function(e){
var t=this||(0,eval)("this"),n=t.document,a=t.navigator,r=t.jQuery,i=t.JSON
;r||"undefined"==typeof jQuery||(r=jQuery),function(e){
"function"==typeof define&&define.amd?define(["exports","require"],e):"object"==typeof exports&&"object"==typeof module?e(module.exports||exports):e(t.ko={})
}((function(o,u){function c(e,t){return(null===e||typeof e in b)&&e===t}
function s(t,n){var a;return function(){a||(a=h.a.setTimeout((function(){a=e,t()
}),n))}}function l(e,t){var n;return function(){
clearTimeout(n),n=h.a.setTimeout(e,t)}}function f(e,t){
t&&"change"!==t?"beforeChange"===t?this.pc(e):this.gb(e,t):this.qc(e)}
function d(e,t){null!==t&&t.s&&t.s()}function p(e,t){var n=this.qd,a=n[w]
;a.ra||(this.Qb&&this.mb[t]?(n.uc(t,e,this.mb[t]),
this.mb[t]=null,--this.Qb):a.I[t]||n.uc(t,e,a.J?{da:e}:n.$c(e)),e.Ja&&e.gd())}
var h=void 0!==o?o:{};h.b=function(e,t){
for(var n=e.split("."),a=h,r=0;r<n.length-1;r++)a=a[n[r]];a[n[n.length-1]]=t
},h.L=function(e,t,n){e[t]=n
},h.version="3.5.1",h.b("version",h.version),h.options={deferUpdates:!1,
useOnlyNativeEvents:!1,foreachHidesDestroyed:!1},h.a=function(){function o(e,t){
for(var n in e)l.call(e,n)&&t(n,e[n])}function u(e,t){
if(t)for(var n in t)l.call(t,n)&&(e[n]=t[n]);return e}function c(e,t){
return e.__proto__=t,e}function s(e,t,n,a){var r=e[t].match(y)||[]
;h.a.D(n.match(y),(function(e){h.a.Na(r,e,a)})),e[t]=r.join(" ")}
var l=Object.prototype.hasOwnProperty,f={__proto__:[]
}instanceof Array,d="function"==typeof Symbol,p={},b={}
;p[a&&/Firefox\/2/i.test(a.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"],
p.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" "),
o(p,(function(e,t){if(t.length)for(var n=0,a=t.length;n<a;n++)b[t[n]]=e}))
;var v,g={propertychange:!0},m=n&&function(){
for(var t=3,a=n.createElement("div"),r=a.getElementsByTagName("i");a.innerHTML="\x3c!--[if gt IE "+ ++t+"]><i></i><![endif]--\x3e",
r[0];);return 4<t?t:e}(),y=/\S+/g;return{
Jc:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],
D:function(e,t,n){for(var a=0,r=e.length;a<r;a++)t.call(n,e[a],a,e)},
A:"function"==typeof Array.prototype.indexOf?function(e,t){
return Array.prototype.indexOf.call(e,t)}:function(e,t){
for(var n=0,a=e.length;n<a;n++)if(e[n]===t)return n;return-1},
Lb:function(t,n,a){
for(var r=0,i=t.length;r<i;r++)if(n.call(a,t[r],r,t))return t[r];return e},
Pa:function(e,t){var n=h.a.A(e,t);0<n?e.splice(n,1):0===n&&e.shift()},
wc:function(e){var t=[];return e&&h.a.D(e,(function(e){0>h.a.A(t,e)&&t.push(e)
})),t},Mb:function(e,t,n){var a=[]
;if(e)for(var r=0,i=e.length;r<i;r++)a.push(t.call(n,e[r],r));return a},
jb:function(e,t,n){var a=[]
;if(e)for(var r=0,i=e.length;r<i;r++)t.call(n,e[r],r)&&a.push(e[r]);return a},
Nb:function(e,t){
if(t instanceof Array)e.push.apply(e,t);else for(var n=0,a=t.length;n<a;n++)e.push(t[n])
;return e},Na:function(e,t,n){var a=h.a.A(h.a.bc(e),t)
;0>a?n&&e.push(t):n||e.splice(a,1)},Ba:f,extend:u,setPrototypeOf:c,Ab:f?c:u,P:o,
Ga:function(e,t,n){if(!e)return e;var a,r={}
;for(a in e)l.call(e,a)&&(r[a]=t.call(n,e[a],a,e));return r},Tb:function(e){
for(;e.firstChild;)h.removeNode(e.firstChild)},Yb:function(e){
for(var t=((e=h.a.la(e))[0]&&e[0].ownerDocument||n).createElement("div"),a=0,r=e.length;a<r;a++)t.appendChild(h.oa(e[a]))
;return t},Ca:function(e,t){for(var n=0,a=e.length,r=[];n<a;n++){
var i=e[n].cloneNode(!0);r.push(t?h.oa(i):i)}return r},va:function(e,t){
if(h.a.Tb(e),t)for(var n=0,a=t.length;n<a;n++)e.appendChild(t[n])},
Xc:function(e,t){var n=e.nodeType?[e]:e;if(0<n.length){
for(var a=n[0],r=a.parentNode,i=0,o=t.length;i<o;i++)r.insertBefore(t[i],a)
;for(i=0,o=n.length;i<o;i++)h.removeNode(n[i])}},Ua:function(e,t){if(e.length){
for(t=8===t.nodeType&&t.parentNode||t;e.length&&e[0].parentNode!==t;)e.splice(0,1)
;for(;1<e.length&&e[e.length-1].parentNode!==t;)e.length--;if(1<e.length){
var n=e[0],a=e[e.length-1];for(e.length=0;n!==a;)e.push(n),n=n.nextSibling
;e.push(a)}}return e},Zc:function(e,t){
7>m?e.setAttribute("selected",t):e.selected=t},Db:function(t){
return null===t||t===e?"":t.trim?t.trim():t.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")
},Ud:function(e,t){
return e=e||"",!(t.length>e.length)&&e.substring(0,t.length)===t},
vd:function(e,t){if(e===t)return!0;if(11===e.nodeType)return!1
;if(t.contains)return t.contains(1!==e.nodeType?e.parentNode:e)
;if(t.compareDocumentPosition)return 16==(16&t.compareDocumentPosition(e))
;for(;e&&e!=t;)e=e.parentNode;return!!e},Sb:function(e){
return h.a.vd(e,e.ownerDocument.documentElement)},kd:function(e){
return!!h.a.Lb(e,h.a.Sb)},R:function(e){
return e&&e.tagName&&e.tagName.toLowerCase()},Ac:function(e){
return h.onError?function(){try{return e.apply(this,arguments)}catch(u){
throw h.onError&&h.onError(u),u}}:e},setTimeout:function(e,t){
return setTimeout(h.a.Ac(e),t)},Gc:function(e){setTimeout((function(){
throw h.onError&&h.onError(e),e}),0)},B:function(e,t,n){var a=h.a.Ac(n)
;if(n=g[t],
h.options.useOnlyNativeEvents||n||!r)if(n||"function"!=typeof e.addEventListener){
if(void 0===e.attachEvent)throw Error("Browser doesn't support addEventListener or attachEvent")
;var i=function(t){a.call(e,t)},o="on"+t
;e.attachEvent(o,i),h.a.K.za(e,(function(){e.detachEvent(o,i)}))
}else e.addEventListener(t,a,!1);else v||(v="function"==typeof r(e).on?"on":"bind"),
r(e)[v](t,a)},Fb:function(e,a){
if(!e||!e.nodeType)throw Error("element must be a DOM node when calling triggerEvent")
;var i
;if(i=!("input"!==h.a.R(e)||!e.type||"click"!=a.toLowerCase())&&("checkbox"==(i=e.type)||"radio"==i),
h.options.useOnlyNativeEvents||!r||i)if("function"==typeof n.createEvent){
if("function"!=typeof e.dispatchEvent)throw Error("The supplied element doesn't support dispatchEvent")
;(i=n.createEvent(b[a]||"HTMLEvents")).initEvent(a,!0,!0,t,0,0,0,0,0,!1,!1,!1,!1,0,e),
e.dispatchEvent(i)}else if(i&&e.click)e.click();else{
if(void 0===e.fireEvent)throw Error("Browser doesn't support triggering events")
;e.fireEvent("on"+a)}else r(e).trigger(a)},f:function(e){return h.O(e)?e():e},
bc:function(e){return h.O(e)?e.v():e},Eb:function(e,t,n){var a
;t&&("object"==typeof e.classList?(a=e.classList[n?"add":"remove"],
h.a.D(t.match(y),(function(t){a.call(e.classList,t)
}))):"string"==typeof e.className.baseVal?s(e.className,"baseVal",t,n):s(e,"className",t,n))
},Bb:function(t,n){var a=h.a.f(n);null!==a&&a!==e||(a="")
;var r=h.h.firstChild(t)
;!r||3!=r.nodeType||h.h.nextSibling(r)?h.h.va(t,[t.ownerDocument.createTextNode(a)]):r.data=a,
h.a.Ad(t)},Yc:function(e,t){if(e.name=t,7>=m)try{
var a=e.name.replace(/[&<>'"]/g,(function(e){return"&#"+e.charCodeAt(0)+";"}))
;e.mergeAttributes(n.createElement("<input name='"+a+"'/>"),!1)}catch(c){}},
Ad:function(e){
9<=m&&(e=1==e.nodeType?e:e.parentNode).style&&(e.style.zoom=e.style.zoom)},
wd:function(e){if(m){var t=e.style.width;e.style.width=0,e.style.width=t}},
Pd:function(e,t){e=h.a.f(e),t=h.a.f(t);for(var n=[],a=e;a<=t;a++)n.push(a)
;return n},la:function(e){for(var t=[],n=0,a=e.length;n<a;n++)t.push(e[n])
;return t},Da:function(e){return d?Symbol(e):e},Zd:6===m,$d:7===m,W:m,
Lc:function(e,t){
for(var n=h.a.la(e.getElementsByTagName("input")).concat(h.a.la(e.getElementsByTagName("textarea"))),a="string"==typeof t?function(e){
return e.name===t}:function(e){return t.test(e.name)
},r=[],i=n.length-1;0<=i;i--)a(n[i])&&r.push(n[i]);return r},Nd:function(e){
return"string"==typeof e&&(e=h.a.Db(e))?i&&i.parse?i.parse(e):new Function("return "+e)():null
},hc:function(e,t,n){
if(!i||!i.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js")
;return i.stringify(h.a.f(e),t,n)},Od:function(e,t,a){
var r=(a=a||{}).params||{},i=a.includeFields||this.Jc,u=e
;if("object"==typeof e&&"form"===h.a.R(e)){u=e.action
;for(var c=i.length-1;0<=c;c--)for(var s=h.a.Lc(e,i[c]),l=s.length-1;0<=l;l--)r[s[l].name]=s[l].value
}t=h.a.f(t);var f=n.createElement("form")
;for(var d in f.style.display="none",f.action=u,
f.method="post",t)(e=n.createElement("input")).type="hidden",
e.name=d,e.value=h.a.hc(h.a.f(t[d])),f.appendChild(e);o(r,(function(e,t){
var a=n.createElement("input")
;a.type="hidden",a.name=e,a.value=t,f.appendChild(a)
})),n.body.appendChild(f),a.submitter?a.submitter(f):f.submit(),
setTimeout((function(){f.parentNode.removeChild(f)}),0)}}
}(),h.b("utils",h.a),h.b("utils.arrayForEach",h.a.D),
h.b("utils.arrayFirst",h.a.Lb),
h.b("utils.arrayFilter",h.a.jb),h.b("utils.arrayGetDistinctValues",h.a.wc),
h.b("utils.arrayIndexOf",h.a.A),
h.b("utils.arrayMap",h.a.Mb),h.b("utils.arrayPushAll",h.a.Nb),
h.b("utils.arrayRemoveItem",h.a.Pa),
h.b("utils.cloneNodes",h.a.Ca),h.b("utils.createSymbolOrString",h.a.Da),
h.b("utils.extend",h.a.extend),
h.b("utils.fieldsIncludedWithJsonPost",h.a.Jc),h.b("utils.getFormFields",h.a.Lc),
h.b("utils.objectMap",h.a.Ga),
h.b("utils.peekObservable",h.a.bc),h.b("utils.postJson",h.a.Od),
h.b("utils.parseJson",h.a.Nd),
h.b("utils.registerEventHandler",h.a.B),h.b("utils.stringifyJson",h.a.hc),
h.b("utils.range",h.a.Pd),
h.b("utils.toggleDomNodeCssClass",h.a.Eb),h.b("utils.triggerEvent",h.a.Fb),
h.b("utils.unwrapObservable",h.a.f),
h.b("utils.objectForEach",h.a.P),h.b("utils.addOrRemoveItem",h.a.Na),
h.b("utils.setTextContent",h.a.Bb),
h.b("unwrap",h.a.f),Function.prototype.bind||(Function.prototype.bind=function(e){
var t=this;if(1===arguments.length)return function(){return t.apply(e,arguments)
};var n=Array.prototype.slice.call(arguments,1);return function(){
var a=n.slice(0);return a.push.apply(a,arguments),t.apply(e,a)}
}),h.a.g=new function(){var t,n,a=0,r="__ko__"+(new Date).getTime(),i={}
;return h.a.W?(t=function(t,n){var o=t[r];if(!o||"null"===o||!i[o]){
if(!n)return e;o=t[r]="ko"+a++,i[o]={}}return i[o]},n=function(e){var t=e[r]
;return!!t&&(delete i[t],e[r]=null,!0)}):(t=function(e,t){var n=e[r]
;return!n&&t&&(n=e[r]={}),n},n=function(e){return!!e[r]&&(delete e[r],!0)}),{
get:function(e,n){var a=t(e,!1);return a&&a[n]},set:function(n,a,r){
(n=t(n,r!==e))&&(n[a]=r)},Ub:function(e,n,a){return(e=t(e,!0))[n]||(e[n]=a)},
clear:n,Z:function(){return a+++r}}
},h.b("utils.domData",h.a.g),h.b("utils.domData.clear",h.a.g.clear),
h.a.K=new function(){function t(t,n){var a=h.a.g.get(t,i)
;return a===e&&n&&(a=[],h.a.g.set(t,i,a)),a}function n(e){
if(n=t(e,!1))for(var n=n.slice(0),r=0;r<n.length;r++)n[r](e)
;h.a.g.clear(e),h.a.K.cleanExternalData(e),u[e.nodeType]&&a(e.childNodes,!0)}
function a(e,t){
for(var a,r=[],i=0;i<e.length;i++)if((!t||8===e[i].nodeType)&&(n(r[r.length]=a=e[i]),
e[i]!==a))for(;i--&&-1==h.a.A(r,e[i]););}var i=h.a.g.Z(),o={1:!0,8:!0,9:!0},u={
1:!0,9:!0};return{za:function(e,n){
if("function"!=typeof n)throw Error("Callback must be a function")
;t(e,!0).push(n)},yb:function(n,a){var r=t(n,!1)
;r&&(h.a.Pa(r,a),0==r.length&&h.a.g.set(n,i,e))},oa:function(e){
return h.u.G((function(){
o[e.nodeType]&&(n(e),u[e.nodeType]&&a(e.getElementsByTagName("*")))})),e},
removeNode:function(e){h.oa(e),e.parentNode&&e.parentNode.removeChild(e)},
cleanExternalData:function(e){
r&&"function"==typeof r.cleanData&&r.cleanData([e])}}
},h.oa=h.a.K.oa,h.removeNode=h.a.K.removeNode,
h.b("cleanNode",h.oa),h.b("removeNode",h.removeNode),
h.b("utils.domNodeDisposal",h.a.K),
h.b("utils.domNodeDisposal.addDisposeCallback",h.a.K.za),
h.b("utils.domNodeDisposal.removeDisposeCallback",h.a.K.yb),function(){
var a=[0,"",""],i=[1,"<table>","</table>"],o=[3,"<table><tbody><tr>","</tr></tbody></table>"],u=[1,"<select multiple='multiple'>","</select>"],c={
thead:i,tbody:i,tfoot:i,tr:[2,"<table><tbody>","</tbody></table>"],td:o,th:o,
option:u,optgroup:u},s=8>=h.a.W;h.a.ua=function(e,i){var o;if(r){
if(r.parseHTML)o=r.parseHTML(e,i)||[];else if((o=r.clean([e],i))&&o[0]){
for(var u=o[0];u.parentNode&&11!==u.parentNode.nodeType;)u=u.parentNode
;u.parentNode&&u.parentNode.removeChild(u)}}else{
(o=i)||(o=n),u=o.parentWindow||o.defaultView||t
;var l,f=h.a.Db(e).toLowerCase(),d=o.createElement("div")
;for(l=(f=f.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/))&&c[f[1]]||a,
f=l[0],
l="ignored<div>"+l[1]+e+l[2]+"</div>","function"==typeof u.innerShiv?d.appendChild(u.innerShiv(l)):(s&&o.body.appendChild(d),
d.innerHTML=l,s&&d.parentNode.removeChild(d));f--;)d=d.lastChild
;o=h.a.la(d.lastChild.childNodes)}return o},h.a.Md=function(e,t){
var n=h.a.ua(e,t);return n.length&&n[0].parentElement||h.a.Yb(n)
},h.a.fc=function(t,n){
if(h.a.Tb(t),null!==(n=h.a.f(n))&&n!==e)if("string"!=typeof n&&(n=n.toString()),
r)r(t).html(n);else for(var a=h.a.ua(n,t.ownerDocument),i=0;i<a.length;i++)t.appendChild(a[i])
}
}(),h.b("utils.parseHtmlFragment",h.a.ua),h.b("utils.setHtml",h.a.fc),h.aa=function(){
var t={};return{Xb:function(e){
if("function"!=typeof e)throw Error("You can only pass a function to ko.memoization.memoize()")
;var n=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1)
;return t[n]=e,"\x3c!--[ko_memo:"+n+"]--\x3e"},bd:function(n,a){var r=t[n]
;if(r===e)throw Error("Couldn't find any memo with ID "+n+". Perhaps it's already been unmemoized.")
;try{return r.apply(null,a||[]),!0}finally{delete t[n]}},cd:function(e,t){
var n=[];!function e(t,n){
if(t)if(8==t.nodeType)null!=(a=h.aa.Uc(t.nodeValue))&&n.push({ud:t,Kd:a
});else if(1==t.nodeType)for(var a=0,r=t.childNodes,i=r.length;a<i;a++)e(r[a],n)
}(e,n);for(var a=0,r=n.length;a<r;a++){var i=n[a].ud,o=[i]
;t&&h.a.Nb(o,t),h.aa.bd(n[a].Kd,o),
i.nodeValue="",i.parentNode&&i.parentNode.removeChild(i)}},Uc:function(e){
return(e=e.match(/^\[ko_memo\:(.*?)\]$/))?e[1]:null}}
}(),h.b("memoization",h.aa),
h.b("memoization.memoize",h.aa.Xb),h.b("memoization.unmemoize",h.aa.bd),
h.b("memoization.parseMemoText",h.aa.Uc),
h.b("memoization.unmemoizeDomNodeAndDescendants",h.aa.cd),h.na=function(){
function e(){if(i)for(var e,t=i,n=0;u<i;)if(e=r[u++]){if(u>t){if(5e3<=++n){
u=i,h.a.Gc(Error("'Too much recursion' after processing "+n+" task groups."))
;break}t=i}try{e()}catch(a){h.a.Gc(a)}}}function a(){e(),u=i=r.length=0}
var r=[],i=0,o=1,u=0;return{scheduler:t.MutationObserver?function(e){
var t=n.createElement("div");return new MutationObserver(e).observe(t,{
attributes:!0}),function(){t.classList.toggle("foo")}
}(a):n&&"onreadystatechange"in n.createElement("script")?function(e){
var t=n.createElement("script");t.onreadystatechange=function(){
t.onreadystatechange=null,n.documentElement.removeChild(t),t=null,e()
},n.documentElement.appendChild(t)}:function(e){setTimeout(e,0)},zb:function(e){
return i||h.na.scheduler(a),r[i++]=e,o++},cancel:function(e){
(e-=o-i)>=u&&e<i&&(r[e]=null)},resetForTesting:function(){var e=i-u
;return u=i=r.length=0,e},Sd:e}
}(),h.b("tasks",h.na),h.b("tasks.schedule",h.na.zb),
h.b("tasks.runEarly",h.na.Sd),h.Ta={throttle:function(e,t){
e.throttleEvaluation=t;var n=null;return h.$({read:e,write:function(a){
clearTimeout(n),n=h.a.setTimeout((function(){e(a)}),t)}})},
rateLimit:function(e,t){var n,a,r
;"number"==typeof t?n=t:(n=t.timeout,a=t.method),
e.Hb=!1,r="function"==typeof a?a:"notifyWhenChangesStop"==a?l:s,
e.ub((function(e){return r(e,n,t)}))},deferred:function(t,n){
if(!0!==n)throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.")
;t.Hb||(t.Hb=!0,t.ub((function(n){var a,r=!1;return function(){if(!r){
h.na.cancel(a),a=h.na.zb(n);try{r=!0,t.notifySubscribers(e,"dirty")}finally{r=!1
}}}})))},notify:function(e,t){e.equalityComparer="always"==t?null:c}};var b={
undefined:1,boolean:1,number:1,string:1}
;h.b("extenders",h.Ta),h.ic=function(e,t,n){
this.da=e,this.lc=t,this.mc=n,this.Ib=!1,
this.fb=this.Jb=null,h.L(this,"dispose",this.s),
h.L(this,"disposeWhenNodeIsRemoved",this.l)},h.ic.prototype.s=function(){
this.Ib||(this.fb&&h.a.K.yb(this.Jb,this.fb),
this.Ib=!0,this.mc(),this.da=this.lc=this.mc=this.Jb=this.fb=null)
},h.ic.prototype.l=function(e){this.Jb=e,h.a.K.za(e,this.fb=this.s.bind(this))},
h.T=function(){h.a.Ab(this,v),v.qb(this)};var v={qb:function(e){e.U={change:[]},
e.sc=1},subscribe:function(e,t,n){var a=this;n=n||"change"
;var r=new h.ic(a,t?e.bind(t):e,(function(){h.a.Pa(a.U[n],r),a.hb&&a.hb(n)}))
;return a.Qa&&a.Qa(n),a.U[n]||(a.U[n]=[]),a.U[n].push(r),r},
notifySubscribers:function(e,t){
if("change"===(t=t||"change")&&this.Gb(),this.Wa(t)){
var n="change"===t&&this.ed||this.U[t].slice(0);try{h.u.xc()
;for(var a,r=0;a=n[r];++r)a.Ib||a.lc(e)}finally{h.u.end()}}},ob:function(){
return this.sc},Dd:function(e){return this.ob()!==e},Gb:function(){++this.sc},
ub:function(e){var t,n,a,r,i,o=this,u=h.O(o)
;o.gb||(o.gb=o.notifySubscribers,o.notifySubscribers=f);var c=e((function(){
o.Ja=!1,u&&r===o&&(r=o.nc?o.nc():o());var e=n||i&&o.sb(a,r)
;i=n=t=!1,e&&o.gb(a=r)}));o.qc=function(e,n){
n&&o.Ja||(i=!n),o.ed=o.U.change.slice(0),o.Ja=t=!0,r=e,c()},o.pc=function(e){
t||(a=e,o.gb(e,"beforeChange"))},o.rc=function(){i=!0},o.gd=function(){
o.sb(a,o.v(!0))&&(n=!0)}},Wa:function(e){return this.U[e]&&this.U[e].length},
Bd:function(e){if(e)return this.U[e]&&this.U[e].length||0;var t=0
;return h.a.P(this.U,(function(e,n){"dirty"!==e&&(t+=n.length)})),t},
sb:function(e,t){return!this.equalityComparer||!this.equalityComparer(e,t)},
toString:function(){return"[object Object]"},extend:function(e){var t=this
;return e&&h.a.P(e,(function(e,n){var a=h.Ta[e]
;"function"==typeof a&&(t=a(t,n)||t)})),t}}
;h.L(v,"init",v.qb),h.L(v,"subscribe",v.subscribe),
h.L(v,"extend",v.extend),h.L(v,"getSubscriptionsCount",v.Bd),
h.a.Ba&&h.a.setPrototypeOf(v,Function.prototype),h.T.fn=v,h.Qc=function(e){
return null!=e&&"function"==typeof e.subscribe&&"function"==typeof e.notifySubscribers
},h.b("subscribable",h.T),h.b("isSubscribable",h.Qc),h.S=h.u=function(){
function e(e){a.push(n),n=e}function t(){n=a.pop()}var n,a=[],r=0;return{xc:e,
end:t,cc:function(e){if(n){
if(!h.Qc(e))throw Error("Only subscribable things can act as dependencies")
;n.od.call(n.pd,e,e.fd||(e.fd=++r))}},G:function(n,a,r){try{
return e(),n.apply(a,r||[])}finally{t()}},qa:function(){if(n)return n.o.qa()},
Va:function(){if(n)return n.o.Va()},Ya:function(){if(n)return n.Ya},
o:function(){if(n)return n.o}}
}(),h.b("computedContext",h.S),h.b("computedContext.getDependenciesCount",h.S.qa),
h.b("computedContext.getDependencies",h.S.Va),
h.b("computedContext.isInitial",h.S.Ya),
h.b("computedContext.registerDependency",h.S.cc),
h.b("ignoreDependencies",h.Yd=h.u.G);var g=h.a.Da("_latestValue")
;h.ta=function(e){function t(){
return 0<arguments.length?(t.sb(t[g],arguments[0])&&(t.ya(),
t[g]=arguments[0],t.xa()),this):(h.u.cc(t),t[g])}
return t[g]=e,h.a.Ba||h.a.extend(t,h.T.fn),
h.T.fn.qb(t),h.a.Ab(t,m),h.options.deferUpdates&&h.Ta.deferred(t,!0),t};var m={
equalityComparer:c,v:function(){return this[g]},xa:function(){
this.notifySubscribers(this[g],"spectate"),this.notifySubscribers(this[g])},
ya:function(){this.notifySubscribers(this[g],"beforeChange")}}
;h.a.Ba&&h.a.setPrototypeOf(m,h.T.fn);var y=h.ta.Ma="__ko_proto__"
;m[y]=h.ta,h.O=function(e){
if((e="function"==typeof e&&e[y])&&e!==m[y]&&e!==h.o.fn[y])throw Error("Invalid object that looks like an observable; possibly from another Knockout instance")
;return!!e},h.Za=function(e){
return"function"==typeof e&&(e[y]===m[y]||e[y]===h.o.fn[y]&&e.Nc)
},h.b("observable",h.ta),
h.b("isObservable",h.O),h.b("isWriteableObservable",h.Za),
h.b("isWritableObservable",h.Za),
h.b("observable.fn",m),h.L(m,"peek",m.v),h.L(m,"valueHasMutated",m.xa),
h.L(m,"valueWillMutate",m.ya),h.Ha=function(e){
if("object"!=typeof(e=e||[])||!("length"in e))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.")
;return e=h.ta(e),h.a.Ab(e,h.Ha.fn),e.extend({trackArrayChanges:!0})},h.Ha.fn={
remove:function(e){
for(var t=this.v(),n=[],a="function"!=typeof e||h.O(e)?function(t){return t===e
}:e,r=0;r<t.length;r++){var i=t[r];if(a(i)){
if(0===n.length&&this.ya(),t[r]!==i)throw Error("Array modified during remove; cannot remove item")
;n.push(i),t.splice(r,1),r--}}return n.length&&this.xa(),n},
removeAll:function(t){if(t===e){var n=this.v(),a=n.slice(0)
;return this.ya(),n.splice(0,n.length),this.xa(),a}
return t?this.remove((function(e){return 0<=h.a.A(t,e)})):[]},
destroy:function(e){var t=this.v(),n="function"!=typeof e||h.O(e)?function(t){
return t===e}:e;this.ya();for(var a=t.length-1;0<=a;a--){var r=t[a]
;n(r)&&(r._destroy=!0)}this.xa()},destroyAll:function(t){
return t===e?this.destroy((function(){return!0})):t?this.destroy((function(e){
return 0<=h.a.A(t,e)})):[]},indexOf:function(e){var t=this();return h.a.A(t,e)},
replace:function(e,t){var n=this.indexOf(e)
;0<=n&&(this.ya(),this.v()[n]=t,this.xa())},sorted:function(e){
var t=this().slice(0);return e?t.sort(e):t.sort()},reversed:function(){
return this().slice(0).reverse()}
},h.a.Ba&&h.a.setPrototypeOf(h.Ha.fn,h.ta.fn),h.a.D("pop push reverse shift sort splice unshift".split(" "),(function(e){
h.Ha.fn[e]=function(){var t=this.v();this.ya(),this.zc(t,e,arguments)
;var n=t[e].apply(t,arguments);return this.xa(),n===t?this:n}
})),h.a.D(["slice"],(function(e){h.Ha.fn[e]=function(){var t=this()
;return t[e].apply(t,arguments)}})),h.Pc=function(e){
return h.O(e)&&"function"==typeof e.remove&&"function"==typeof e.push
},h.b("observableArray",h.Ha),
h.b("isObservableArray",h.Pc),h.Ta.trackArrayChanges=function(t,n){function a(){
function e(){if(s){var e,n=[].concat(t.v()||[])
;t.Wa("arrayChange")&&((!c||1<s)&&(c=h.a.Pb(o,n,t.Ob)),
e=c),o=n,c=null,s=0,e&&e.length&&t.notifySubscribers(e,"arrayChange")}}
u?e():(u=!0,i=t.subscribe((function(){++s
}),null,"spectate"),o=[].concat(t.v()||[]),c=null,r=t.subscribe(e))}
if(t.Ob={},n&&"object"==typeof n&&h.a.extend(t.Ob,n),t.Ob.sparse=!0,!t.zc){
var r,i,o,u=!1,c=null,s=0,l=t.Qa,f=t.hb;t.Qa=function(e){
l&&l.call(t,e),"arrayChange"===e&&a()},t.hb=function(n){
f&&f.call(t,n),"arrayChange"!==n||t.Wa("arrayChange")||(r&&r.s(),
i&&i.s(),i=r=null,u=!1,o=e)},t.zc=function(e,t,n){function a(e,t,n){
return r[r.length]={status:e,value:t,index:n}}if(u&&!s){
var r=[],i=e.length,o=n.length,l=0;switch(t){case"push":l=i;case"unshift":
for(t=0;t<o;t++)a("added",n[t],l+t);break;case"pop":l=i-1;case"shift":
i&&a("deleted",e[l],l);break;case"splice":
t=Math.min(Math.max(0,0>n[0]?i+n[0]:n[0]),i),
i=1===o?i:Math.min(t+(n[1]||0),i),o=t+o-2,l=Math.max(i,o)
;for(var f=[],d=[],p=2;t<l;++t,
++p)t<i&&d.push(a("deleted",e[t],t)),t<o&&f.push(a("added",n[p],t));h.a.Kc(d,f)
;break;default:return}c=r}}}};var w=h.a.Da("_state");h.o=h.$=function(t,n,a){
function r(){if(0<arguments.length){
if("function"!=typeof i)throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.")
;return i.apply(o.nb,arguments),this}
return o.ra||h.u.cc(r),(o.ka||o.J&&r.Xa())&&r.ha(),o.X}
if("object"==typeof t?a=t:(a=a||{},
t&&(a.read=t)),"function"!=typeof a.read)throw Error("Pass a function that returns the value of the ko.computed")
;var i=a.write,o={X:e,sa:!0,ka:!0,rb:!1,jc:!1,ra:!1,wb:!1,J:!1,Wc:a.read,
nb:n||a.owner,l:a.disposeWhenNodeIsRemoved||a.l||null,Sa:a.disposeWhen||a.Sa,
Rb:null,I:{},V:0,Ic:null}
;return r[w]=o,r.Nc="function"==typeof i,h.a.Ba||h.a.extend(r,h.T.fn),
h.T.fn.qb(r),
h.a.Ab(r,x),a.pure?(o.wb=!0,o.J=!0,h.a.extend(r,C)):a.deferEvaluation&&h.a.extend(r,E),
h.options.deferUpdates&&h.Ta.deferred(r,!0),
o.l&&(o.jc=!0,o.l.nodeType||(o.l=null)),
o.J||a.deferEvaluation||r.ha(),o.l&&r.ja()&&h.a.K.za(o.l,o.Rb=function(){r.s()
}),r};var x={equalityComparer:c,qa:function(){return this[w].V},Va:function(){
var e=[];return h.a.P(this[w].I,(function(t,n){e[n.Ka]=n.da})),e},
Vb:function(e){if(!this[w].V)return!1;var t=this.Va()
;return-1!==h.a.A(t,e)||!!h.a.Lb(t,(function(t){return t.Vb&&t.Vb(e)}))},
uc:function(e,t,n){
if(this[w].wb&&t===this)throw Error("A 'pure' computed must not be called recursively")
;this[w].I[e]=n,n.Ka=this[w].V++,n.La=t.ob()},Xa:function(){var e,t,n=this[w].I
;for(e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&(t=n[e],
this.Ia&&t.da.Ja||t.da.Dd(t.La)))return!0},Jd:function(){
this.Ia&&!this[w].rb&&this.Ia(!1)},ja:function(){var e=this[w]
;return e.ka||0<e.V},Rd:function(){this.Ja?this[w].ka&&(this[w].sa=!0):this.Hc()
},$c:function(e){if(e.Hb){
var t=e.subscribe(this.Jd,this,"dirty"),n=e.subscribe(this.Rd,this);return{da:e,
s:function(){t.s(),n.s()}}}return e.subscribe(this.Hc,this)},Hc:function(){
var e=this,t=e.throttleEvaluation
;t&&0<=t?(clearTimeout(this[w].Ic),this[w].Ic=h.a.setTimeout((function(){
e.ha(!0)}),t)):e.Ia?e.Ia(!0):e.ha(!0)},ha:function(e){var t=this[w],n=t.Sa,a=!1
;if(!t.rb&&!t.ra){if(t.l&&!h.a.Sb(t.l)||n&&n()){if(!t.jc)return void this.s()
}else t.jc=!1;t.rb=!0;try{a=this.zd(e)}finally{t.rb=!1}return a}},
zd:function(t){var n=this[w],a=!1,r=n.wb?e:!n.V;a={qd:this,mb:n.I,Qb:n.V
},h.u.xc({pd:a,od:p,o:this,Ya:r}),n.I={},n.V=0;var i=this.yd(n,a)
;return n.V?a=this.sb(n.X,i):(this.s(),
a=!0),a&&(n.J?this.Gb():this.notifySubscribers(n.X,"beforeChange"),
n.X=i,this.notifySubscribers(n.X,"spectate"),
!n.J&&t&&this.notifySubscribers(n.X),
this.rc&&this.rc()),r&&this.notifySubscribers(n.X,"awake"),a},yd:function(e,t){
try{var n=e.Wc;return e.nb?n.call(e.nb):n()}finally{
h.u.end(),t.Qb&&!e.J&&h.a.P(t.mb,d),e.sa=e.ka=!1}},v:function(e){var t=this[w]
;return(t.ka&&(e||!t.V)||t.J&&this.Xa())&&this.ha(),t.X},ub:function(e){
h.T.fn.ub.call(this,e),this.nc=function(){
return this[w].J||(this[w].sa?this.ha():this[w].ka=!1),this[w].X
},this.Ia=function(e){
this.pc(this[w].X),this[w].ka=!0,e&&(this[w].sa=!0),this.qc(this,!e)}},
s:function(){var t=this[w];!t.J&&t.I&&h.a.P(t.I,(function(e,t){t.s&&t.s()
})),t.l&&t.Rb&&h.a.K.yb(t.l,t.Rb),
t.I=e,t.V=0,t.ra=!0,t.sa=!1,t.ka=!1,t.J=!1,t.l=e,t.Sa=e,t.Wc=e,this.Nc||(t.nb=e)
}},C={Qa:function(e){var t=this,n=t[w];if(!n.ra&&n.J&&"change"==e){
if(n.J=!1,n.sa||t.Xa())n.I=null,n.V=0,t.ha()&&t.Gb();else{var a=[]
;h.a.P(n.I,(function(e,t){a[t.Ka]=e})),h.a.D(a,(function(e,a){
var r=n.I[e],i=t.$c(r.da);i.Ka=a,i.La=r.La,n.I[e]=i})),t.Xa()&&t.ha()&&t.Gb()}
n.ra||t.notifySubscribers(n.X,"awake")}},hb:function(t){var n=this[w]
;n.ra||"change"!=t||this.Wa("change")||(h.a.P(n.I,(function(e,t){t.s&&(n.I[e]={
da:t.da,Ka:t.Ka,La:t.La},t.s())})),n.J=!0,this.notifySubscribers(e,"asleep"))},
ob:function(){var e=this[w]
;return e.J&&(e.sa||this.Xa())&&this.ha(),h.T.fn.ob.call(this)}},E={
Qa:function(e){"change"!=e&&"beforeChange"!=e||this.v()}}
;h.a.Ba&&h.a.setPrototypeOf(x,h.T.fn);var k=h.ta.Ma;x[k]=h.o,h.Oc=function(e){
return"function"==typeof e&&e[k]===x[k]},h.Fd=function(e){
return h.Oc(e)&&e[w]&&e[w].wb
},h.b("computed",h.o),h.b("dependentObservable",h.o),
h.b("isComputed",h.Oc),h.b("isPureComputed",h.Fd),
h.b("computed.fn",x),h.L(x,"peek",x.v),
h.L(x,"dispose",x.s),h.L(x,"isActive",x.ja),
h.L(x,"getDependenciesCount",x.qa),h.L(x,"getDependencies",x.Va),
h.xb=function(e,t){return"function"==typeof e?h.o(e,t,{pure:!0
}):((e=h.a.extend({},e)).pure=!0,h.o(e,t))},h.b("pureComputed",h.xb),function(){
function t(a,r,i){
if(i=i||new n,"object"!=typeof(a=r(a))||null===a||a===e||a instanceof RegExp||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a
;var o=a instanceof Array?[]:{};return i.save(a,o),function(e,t){
if(e instanceof Array){for(var n=0;n<e.length;n++)t(n)
;"function"==typeof e.toJSON&&t("toJSON")}else for(n in e)t(n)}(a,(function(n){
var u=r(a[n]);switch(typeof u){case"boolean":case"number":case"string":
case"function":o[n]=u;break;case"object":case"undefined":var c=i.get(u)
;o[n]=c!==e?c:t(u,r,i)}})),o}function n(){this.keys=[],this.values=[]}
h.ad=function(e){
if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.")
;return t(e,(function(e){for(var t=0;h.O(e)&&10>t;t++)e=e();return e}))
},h.toJSON=function(e,t,n){return e=h.ad(e),h.a.hc(e,t,n)},n.prototype={
constructor:n,save:function(e,t){var n=h.a.A(this.keys,e)
;0<=n?this.values[n]=t:(this.keys.push(e),this.values.push(t))},get:function(t){
return 0<=(t=h.a.A(this.keys,t))?this.values[t]:e}}
}(),h.b("toJS",h.ad),h.b("toJSON",h.toJSON),h.Wd=function(e,t,n){function a(t){
var a=h.xb(e,n).extend({ma:"always"}),r=a.subscribe((function(e){e&&(r.s(),t(e))
}));return a.notifySubscribers(a.v()),r}
return"function"!=typeof Promise||t?a(t.bind(n)):new Promise(a)
},h.b("when",h.Wd),h.w={M:function(t){switch(h.a.R(t)){case"option":
return!0===t.__ko__hasDomDataOptionValue__?h.a.g.get(t,h.c.options.$b):7>=h.a.W?t.getAttributeNode("value")&&t.getAttributeNode("value").specified?t.value:t.text:t.value
;case"select":return 0<=t.selectedIndex?h.w.M(t.options[t.selectedIndex]):e
;default:return t.value}},cb:function(t,n,a){switch(h.a.R(t)){case"option":
"string"==typeof n?(h.a.g.set(t,h.c.options.$b,e),
"__ko__hasDomDataOptionValue__"in t&&delete t.__ko__hasDomDataOptionValue__,
t.value=n):(h.a.g.set(t,h.c.options.$b,n),
t.__ko__hasDomDataOptionValue__=!0,t.value="number"==typeof n?n:"");break
;case"select":""!==n&&null!==n||(n=e)
;for(var r,i=-1,o=0,u=t.options.length;o<u;++o)if((r=h.w.M(t.options[o]))==n||""===r&&n===e){
i=o;break}
(a||0<=i||n===e&&1<t.size)&&(t.selectedIndex=i,6===h.a.W&&h.a.setTimeout((function(){
t.selectedIndex=i}),0));break;default:null!==n&&n!==e||(n=""),t.value=n}}
},h.b("selectExtensions",h.w),
h.b("selectExtensions.readValue",h.w.M),h.b("selectExtensions.writeValue",h.w.cb),
h.m=function(){function e(e){
123===(e=h.a.Db(e)).charCodeAt(0)&&(e=e.slice(1,-1))
;var t,n=[],o=(e+="\n,").match(a),u=[],c=0;if(1<o.length){
for(var s,l=0;s=o[l];++l){var f=s.charCodeAt(0);if(44===f){if(0>=c){
n.push(t&&u.length?{key:t,value:u.join("")}:{unknown:t||u.join("")}),t=c=0,u=[]
;continue}}else if(58===f){if(!c&&!t&&1===u.length){t=u.pop();continue}}else{
if(47===f&&1<s.length&&(47===s.charCodeAt(1)||42===s.charCodeAt(1)))continue
;47===f&&l&&1<s.length?(f=o[l-1].match(r))&&!i[f[0]]&&(o=(e=e.substr(e.indexOf(s)+1)).match(a),
l=-1,
s="/"):40===f||123===f||91===f?++c:41===f||125===f||93===f?--c:t||u.length||34!==f&&39!==f||(s=s.slice(1,-1))
}u.push(s)}if(0<c)throw Error("Unbalanced parentheses, braces, or brackets")}
return n}
var t=["true","false","null","undefined"],n=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,a=RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]","g"),r=/[\])"'A-Za-z0-9_$]+$/,i={
in:1,return:1,typeof:1},o={};return{Ra:[],wa:o,ac:e,vb:function(a,r){
function i(e,a){var r;if(!l){var f=h.getBindingHandler(e)
;if(f&&f.preprocess&&!(a=f.preprocess(a,e,i)))return
;(f=o[e])&&(r=a,0<=h.a.A(t,r)?r=!1:(f=r.match(n),
r=null!==f&&(f[1]?"Object("+f[1]+")"+f[2]:r)),
f=r),f&&c.push("'"+("string"==typeof o[e]?o[e]:e)+"':function(_z){"+r+"=_z}")}
s&&(a="function(){return "+a+" }"),u.push("'"+e+"':"+a)}
var u=[],c=[],s=(r=r||{}).valueAccessors,l=r.bindingParams,f="string"==typeof a?e(a):a
;return h.a.D(f,(function(e){i(e.key||e.unknown,e.value)
})),c.length&&i("_ko_property_writers","{"+c.join(",")+" }"),u.join(",")},
Id:function(e,t){for(var n=0;n<e.length;n++)if(e[n].key==t)return!0;return!1},
eb:function(e,t,n,a,r){
e&&h.O(e)?!h.Za(e)||r&&e.v()===a||e(a):(e=t.get("_ko_property_writers"))&&e[n]&&e[n](a)
}}
}(),h.b("expressionRewriting",h.m),h.b("expressionRewriting.bindingRewriteValidators",h.m.Ra),
h.b("expressionRewriting.parseObjectLiteral",h.m.ac),
h.b("expressionRewriting.preProcessBindings",h.m.vb),
h.b("expressionRewriting._twoWayBindings",h.m.wa),
h.b("jsonExpressionRewriting",h.m),
h.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",h.m.vb),
function(){function e(e){return 8==e.nodeType&&o.test(i?e.text:e.nodeValue)}
function t(e){return 8==e.nodeType&&u.test(i?e.text:e.nodeValue)}
function a(n,a){for(var r=n,i=1,o=[];r=r.nextSibling;){
if(t(r)&&(h.a.g.set(r,s,!0),0==--i))return o;o.push(r),e(r)&&i++}
if(!a)throw Error("Cannot find closing comment tag to match: "+n.nodeValue)
;return null}function r(e,t){var n=a(e,t)
;return n?0<n.length?n[n.length-1].nextSibling:e.nextSibling:null}
var i=n&&"\x3c!--test--\x3e"===n.createComment("test").text,o=i?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,u=i?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,c={
ul:!0,ol:!0},s="__ko_matchedEndComment__";h.h={ea:{},childNodes:function(t){
return e(t)?a(t):t.childNodes},Ea:function(t){
if(e(t))for(var n=0,a=(t=h.h.childNodes(t)).length;n<a;n++)h.removeNode(t[n]);else h.a.Tb(t)
},va:function(t,n){if(e(t)){h.h.Ea(t)
;for(var a=t.nextSibling,r=0,i=n.length;r<i;r++)a.parentNode.insertBefore(n[r],a)
}else h.a.va(t,n)},Vc:function(t,n){var a
;e(t)?(a=t.nextSibling,t=t.parentNode):a=t.firstChild,
a?n!==a&&t.insertBefore(n,a):t.appendChild(n)},Wb:function(t,n,a){
a?(a=a.nextSibling,
e(t)&&(t=t.parentNode),a?n!==a&&t.insertBefore(n,a):t.appendChild(n)):h.h.Vc(t,n)
},firstChild:function(n){
if(e(n))return!n.nextSibling||t(n.nextSibling)?null:n.nextSibling
;if(n.firstChild&&t(n.firstChild))throw Error("Found invalid end comment, as the first child of "+n)
;return n.firstChild},nextSibling:function(n){
if(e(n)&&(n=r(n)),n.nextSibling&&t(n.nextSibling)){var a=n.nextSibling
;if(t(a)&&!h.a.g.get(a,s))throw Error("Found end comment without a matching opening comment, as child of "+n)
;return null}return n.nextSibling},Cd:e,Vd:function(e){
return(e=(i?e.text:e.nodeValue).match(o))?e[1]:null},Sc:function(n){
if(c[h.a.R(n)]){var a=n.firstChild;if(a)do{if(1===a.nodeType){var i,o=null
;if(i=a.firstChild)do{if(o)o.push(i);else if(e(i)){var u=r(i,!0);u?i=u:o=[i]
}else t(i)&&(o=[i])}while(i=i.nextSibling)
;if(i=o)for(o=a.nextSibling,u=0;u<i.length;u++)o?n.insertBefore(i[u],o):n.appendChild(i[u])
}}while(a=a.nextSibling)}}}
}(),h.b("virtualElements",h.h),h.b("virtualElements.allowedBindings",h.h.ea),
h.b("virtualElements.emptyNode",h.h.Ea),
h.b("virtualElements.insertAfter",h.h.Wb),h.b("virtualElements.prepend",h.h.Vc),
h.b("virtualElements.setDomNodeChildren",h.h.va),h.ga=function(){this.nd={}
},h.a.extend(h.ga.prototype,{nodeHasBindings:function(e){switch(e.nodeType){
case 1:return null!=e.getAttribute("data-bind")||h.j.getComponentNameForNode(e)
;case 8:return h.h.Cd(e);default:return!1}},getBindings:function(e,t){
var n=(n=this.getBindingsString(e,t))?this.parseBindingsString(n,t,e):null
;return h.j.tc(n,e,t,!1)},getBindingAccessors:function(e,t){
var n=(n=this.getBindingsString(e,t))?this.parseBindingsString(n,t,e,{
valueAccessors:!0}):null;return h.j.tc(n,e,t,!0)},getBindingsString:function(e){
switch(e.nodeType){case 1:return e.getAttribute("data-bind");case 8:
return h.h.Vd(e);default:return null}},parseBindingsString:function(e,t,n,a){
try{var r,i=this.nd,o=e+(a&&a.valueAccessors||"");if(!(r=i[o])){
var u,c="with($context){with($data||{}){return{"+h.m.vb(e,a)+"}}}"
;u=new Function("$context","$element",c),r=i[o]=u}return r(t,n)}catch(s){
throw s.message="Unable to parse bindings.\nBindings value: "+e+"\nMessage: "+s.message,
s}}}),h.ga.instance=new h.ga,h.b("bindingProvider",h.ga),function(){
function a(e){var t=(e=h.a.g.get(e,x))&&e.N;t&&(e.N=null,t.Tc())}
function i(e,t,n){this.node=e,this.yc=t,this.kb=[],this.H=!1,t.N||h.a.K.za(e,a),
n&&n.N&&(n.N.kb.push(e),this.Kb=n)}function o(e){return function(){return e}}
function u(e){return e()}function c(e){return h.a.Ga(h.u.G(e),(function(t,n){
return function(){return e()[n]}}))}function s(e,t,n){
return"function"==typeof e?c(e.bind(null,t,n)):h.a.Ga(e,o)}function l(e,t){
return c(this.getBindings.bind(this,e,t))}function f(e,t){
var n=h.h.firstChild(t);if(n){var a,r=h.ga.instance,i=r.preprocessNode;if(i){
for(;a=n;)n=h.h.nextSibling(a),i.call(r,a);n=h.h.firstChild(t)}
for(;a=n;)n=h.h.nextSibling(a),d(e,a)}h.i.ma(t,h.i.H)}function d(e,t){
var n=e,a=1===t.nodeType
;a&&h.h.Sc(t),(a||h.ga.instance.nodeHasBindings(t))&&(n=p(t,null,e).bindingContextForDescendants),
n&&!y[h.a.R(t)]&&f(n,t)}function p(t,n,a){var r,i=h.a.g.Ub(t,x,{}),o=i.hd
;if(!n){
if(o)throw Error("You cannot apply bindings multiple times to the same element.")
;i.hd=!0}if(o||(i.context=a),i.Zb||(i.Zb={}),n&&"function"!=typeof n)r=n;else{
var c=h.ga.instance,s=c.getBindingAccessors||l,f=h.$((function(){
return(r=n?n(a,t):s.call(c,t,a))&&(a[v]&&a[v](),a[m]&&a[m]()),r}),null,{l:t})
;r&&f.ja()||(f=null)}var d,p=a;if(r){var b=function(){return h.a.Ga(f?f():r,u)
},g=f?function(e){return function(){return u(f()[e])}}:function(e){return r[e]}
;b.get=function(e){return r[e]&&u(g(e))},b.has=function(e){return e in r
},h.i.H in r&&h.i.subscribe(t,h.i.H,(function(){var e=(0,r[h.i.H])();if(e){
var n=h.h.childNodes(t);n.length&&e(n,h.Ec(n[0]))}
})),h.i.pa in r&&(p=h.i.Cb(t,a),h.i.subscribe(t,h.i.pa,(function(){
var e=(0,r[h.i.pa])();e&&h.h.firstChild(t)&&e(t)}))),i=function(e){
var t=[],n={},a=[];return h.a.P(e,(function r(i){if(!n[i]){
var o=h.getBindingHandler(i);o&&(o.after&&(a.push(i),h.a.D(o.after,(function(t){
if(e[t]){
if(-1!==h.a.A(a,t))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+a.join(", "))
;r(t)}})),a.length--),t.push({key:i,Mc:o})),n[i]=!0}})),t
}(r),h.a.D(i,(function(n){var a=n.Mc.init,i=n.Mc.update,u=n.key
;if(8===t.nodeType&&!h.h.ea[u])throw Error("The binding '"+u+"' cannot be used with virtual elements")
;try{"function"==typeof a&&h.u.G((function(){var n=a(t,g(u),b,p.$data,p)
;if(n&&n.controlsDescendantBindings){
if(d!==e)throw Error("Multiple bindings ("+d+" and "+u+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.")
;d=u}})),"function"==typeof i&&h.$((function(){i(t,g(u),b,p.$data,p)}),null,{l:t
})}catch(o){
throw o.message='Unable to process binding "'+u+": "+r[u]+'"\nMessage: '+o.message,
o}}))}return{shouldBindDescendants:i=d===e,bindingContextForDescendants:i&&p}}
function b(t,n){return t&&t instanceof h.fa?t:new h.fa(t,e,e,n)}
var v=h.a.Da("_subscribable"),g=h.a.Da("_ancestorBindingInfo"),m=h.a.Da("_dataDependency")
;h.c={};var y={script:!0,textarea:!0,template:!0}
;h.getBindingHandler=function(e){return h.c[e]};var w={}
;h.fa=function(t,n,a,r,i){function o(){var e=f?l():l,t=h.a.f(e)
;return n?(h.a.extend(c,n),
g in n&&(c[g]=n[g])):(c.$parents=[],c.$root=t,c.ko=h),
c[v]=u,s?t=c.$data:(c.$rawData=e,
c.$data=t),a&&(c[a]=t),r&&r(c,n,t),n&&n[v]&&!h.S.o().Vb(n[v])&&n[v](),
d&&(c[m]=d),c.$data}
var u,c=this,s=t===w,l=s?e:t,f="function"==typeof l&&!h.O(l),d=i&&i.dataDependency
;i&&i.exportDependencies?o():((u=h.xb(o)).v(),
u.ja()?u.equalityComparer=null:c[v]=e)
},h.fa.prototype.createChildContext=function(e,t,n,a){
if(!a&&t&&"object"==typeof t&&(t=(a=t).as,n=a.extend),t&&a&&a.noChildContext){
var r="function"==typeof e&&!h.O(e);return new h.fa(w,this,null,(function(a){
n&&n(a),a[t]=r?e():e}),a)}return new h.fa(e,this,t,(function(e,t){
e.$parentContext=t,
e.$parent=t.$data,e.$parents=(t.$parents||[]).slice(0),e.$parents.unshift(e.$parent),
n&&n(e)}),a)},h.fa.prototype.extend=function(e,t){
return new h.fa(w,this,null,(function(t){
h.a.extend(t,"function"==typeof e?e(t):e)}),t)};var x=h.a.g.Z()
;i.prototype.Tc=function(){this.Kb&&this.Kb.N&&this.Kb.N.sd(this.node)
},i.prototype.sd=function(e){
h.a.Pa(this.kb,e),!this.kb.length&&this.H&&this.Cc()},i.prototype.Cc=function(){
this.H=!0,
this.yc.N&&!this.kb.length&&(this.yc.N=null,h.a.K.yb(this.node,a),h.i.ma(this.node,h.i.pa),
this.Tc())},h.i={H:"childrenComplete",pa:"descendantsComplete",
subscribe:function(e,t,n,a,r){var i=h.a.g.Ub(e,x,{})
;return i.Fa||(i.Fa=new h.T),
r&&r.notifyImmediately&&i.Zb[t]&&h.u.G(n,a,[e]),i.Fa.subscribe(n,a,t)},
ma:function(t,n){var a=h.a.g.get(t,x)
;if(a&&(a.Zb[n]=!0,a.Fa&&a.Fa.notifySubscribers(t,n),
n==h.i.H))if(a.N)a.N.Cc();else if(a.N===e&&a.Fa&&a.Fa.Wa(h.i.pa))throw Error("descendantsComplete event not supported for bindings on this node")
},Cb:function(e,t){var n=h.a.g.Ub(e,x,{})
;return n.N||(n.N=new i(e,n,t[g])),t[g]==n?t:t.extend((function(e){e[g]=n}))}
},h.Td=function(e){return(e=h.a.g.get(e,x))&&e.context},h.ib=function(e,t,n){
return 1===e.nodeType&&h.h.Sc(e),p(e,t,b(n))},h.ld=function(e,t,n){
return n=b(n),h.ib(e,s(t,n,e),n)},h.Oa=function(e,t){
1!==t.nodeType&&8!==t.nodeType||f(b(e),t)},h.vc=function(e,a,i){
if(!r&&t.jQuery&&(r=t.jQuery),2>arguments.length){
if(!(a=n.body))throw Error("ko.applyBindings: could not find document.body; has the document been loaded?")
}else if(!a||1!==a.nodeType&&8!==a.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node")
;d(b(e,i),a)},h.Dc=function(t){
return!t||1!==t.nodeType&&8!==t.nodeType?e:h.Td(t)},h.Ec=function(t){
return(t=h.Dc(t))?t.$data:e},h.b("bindingHandlers",h.c),h.b("bindingEvent",h.i),
h.b("bindingEvent.subscribe",h.i.subscribe),
h.b("bindingEvent.startPossiblyAsyncContentBinding",h.i.Cb),
h.b("applyBindings",h.vc),
h.b("applyBindingsToDescendants",h.Oa),h.b("applyBindingAccessorsToNode",h.ib),
h.b("applyBindingsToNode",h.ld),h.b("contextFor",h.Dc),h.b("dataFor",h.Ec)
}(),function(e){function t(t,a){
var o,u=Object.prototype.hasOwnProperty.call(r,t)?r[t]:e
;u?u.subscribe(a):((u=r[t]=new h.T).subscribe(a),n(t,(function(e,n){
var a=!(!n||!n.synchronous);i[t]={definition:e,Gd:a
},delete r[t],o||a?u.notifySubscribers(e):h.na.zb((function(){
u.notifySubscribers(e)}))})),o=!0)}function n(e,t){
a("getConfig",[e],(function(n){n?a("loadComponent",[e,n],(function(e){t(e,n)
})):t(null,null)}))}function a(t,n,r,i){i||(i=h.j.loaders.slice(0))
;var o=i.shift();if(o){var u=o[t];if(u){var c=!1
;if(u.apply(o,n.concat((function(e){c?r(null):null!==e?r(e):a(t,n,r,i)
})))!==e&&(c=!0,
!o.suppressLoaderExceptions))throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.")
}else a(t,n,r,i)}else r(null)}var r={},i={};h.j={get:function(n,a){
var r=Object.prototype.hasOwnProperty.call(i,n)?i[n]:e;r?r.Gd?h.u.G((function(){
a(r.definition)})):h.na.zb((function(){a(r.definition)})):t(n,a)},
Bc:function(e){delete i[e]},oc:a
},h.j.loaders=[],h.b("components",h.j),h.b("components.get",h.j.get),
h.b("components.clearCachedDefinition",h.j.Bc)}(),function(){
function e(e,t,n,a){function r(){0==--u&&a(o)}var o={},u=2,c=n.template
;n=n.viewModel,c?i(t,c,(function(t){h.j.oc("loadTemplate",[e,t],(function(e){
o.template=e,r()}))})):r(),n?i(t,n,(function(t){
h.j.oc("loadViewModel",[e,t],(function(e){o[s]=e,r()}))})):r()}function a(e){
switch(h.a.R(e)){case"script":return h.a.ua(e.text);case"textarea":
return h.a.ua(e.value);case"template":
if(r(e.content))return h.a.Ca(e.content.childNodes)}return h.a.Ca(e.childNodes)}
function r(e){
return t.DocumentFragment?e instanceof DocumentFragment:e&&11===e.nodeType}
function i(e,n,a){
"string"==typeof n.require?u||t.require?(u||t.require)([n.require],(function(e){
e&&"object"==typeof e&&e.Xd&&e.default&&(e=e.default),a(e)
})):e("Uses require, but no AMD loader is present"):a(n)}function o(e){
return function(t){throw Error("Component '"+e+"': "+t)}}var c={}
;h.j.register=function(e,t){if(!t)throw Error("Invalid configuration for "+e)
;if(h.j.tb(e))throw Error("Component "+e+" is already registered");c[e]=t
},h.j.tb=function(e){return Object.prototype.hasOwnProperty.call(c,e)
},h.j.unregister=function(e){delete c[e],h.j.Bc(e)},h.j.Fc={
getConfig:function(e,t){t(h.j.tb(e)?c[e]:null)},loadComponent:function(t,n,a){
var r=o(t);i(r,n,(function(n){e(t,r,n,a)}))},loadTemplate:function(e,i,u){
if(e=o(e),
"string"==typeof i)u(h.a.ua(i));else if(i instanceof Array)u(i);else if(r(i))u(h.a.la(i.childNodes));else if(i.element)if(i=i.element,
t.HTMLElement?i instanceof HTMLElement:i&&i.tagName&&1===i.nodeType)u(a(i));else if("string"==typeof i){
var c=n.getElementById(i);c?u(a(c)):e("Cannot find element with ID "+i)
}else e("Unknown element type: "+i);else e("Unknown template value: "+i)},
loadViewModel:function(e,t,n){!function e(t,n,a){
if("function"==typeof n)a((function(e){return new n(e)
}));else if("function"==typeof n[s])a(n[s]);else if("instance"in n){
var r=n.instance;a((function(){return r}))
}else"viewModel"in n?e(t,n.viewModel,a):t("Unknown viewModel value: "+n)
}(o(e),t,n)}};var s="createViewModel"
;h.b("components.register",h.j.register),h.b("components.isRegistered",h.j.tb),
h.b("components.unregister",h.j.unregister),
h.b("components.defaultLoader",h.j.Fc),h.j.loaders.push(h.j.Fc),h.j.dd=c
}(),function(){function e(e,n){if(a=e.getAttribute("params")){
var a=t.parseBindingsString(a,n,e,{valueAccessors:!0,bindingParams:!0
}),r=(a=h.a.Ga(a,(function(t){return h.o(t,null,{l:e})})),h.a.Ga(a,(function(t){
var n=t.v();return t.ja()?h.o({read:function(){return h.a.f(t())},
write:h.Za(n)&&function(e){t()(e)},l:e}):n})))
;return Object.prototype.hasOwnProperty.call(r,"$raw")||(r.$raw=a),r}return{
$raw:{}}}h.j.getComponentNameForNode=function(e){var t=h.a.R(e)
;if(h.j.tb(t)&&(-1!=t.indexOf("-")||"[object HTMLUnknownElement]"==""+e||8>=h.a.W&&e.tagName===t))return t
},h.j.tc=function(t,n,a,r){if(1===n.nodeType){
var i=h.j.getComponentNameForNode(n);if(i){
if((t=t||{}).component)throw Error('Cannot use the "component" binding on a custom element matching a component')
;var o={name:i,params:e(n,a)};t.component=r?function(){return o}:o}}return t}
;var t=new h.ga;9>h.a.W&&(h.j.register=function(e){return function(t){
return e.apply(this,arguments)}
}(h.j.register),n.createDocumentFragment=function(e){return function(){
var t,n=e(),a=h.j.dd;for(t in a);return n}}(n.createDocumentFragment))
}(),function(){var e=0;h.c.component={init:function(t,n,a,r,i){function o(){
var e=u&&u.dispose;"function"==typeof e&&e.call(u),s&&s.s(),c=u=s=null}
var u,c,s,l=h.a.la(h.h.childNodes(t))
;return h.h.Ea(t),h.a.K.za(t,o),h.o((function(){var a,r,f=h.a.f(n())
;if("string"==typeof f?a=f:(a=h.a.f(f.name),
r=h.a.f(f.params)),!a)throw Error("No component name specified")
;var d=h.i.Cb(t,i),p=c=++e;h.j.get(a,(function(e){if(c===p){
if(o(),!e)throw Error("Unknown component '"+a+"'");!function(e,t,n){
if(!(t=t.template))throw Error("Component '"+e+"' has no template");e=h.a.Ca(t),
h.h.va(n,e)}(a,e,t);var n=function(e,t,n){var a=e.createViewModel
;return a?a.call(e,t,n):t}(e,r,{element:t,templateNodes:l})
;e=d.createChildContext(n,{extend:function(e){
e.$component=n,e.$componentTemplateNodes=l}
}),n&&n.koDescendantsComplete&&(s=h.i.subscribe(t,h.i.pa,n.koDescendantsComplete,n)),
u=n,h.Oa(e,t)}}))}),null,{l:t}),{controlsDescendantBindings:!0}}
},h.h.ea.component=!0}();var T={class:"className",for:"htmlFor"};h.c.attr={
update:function(t,n){var a=h.a.f(n())||{};h.a.P(a,(function(n,a){a=h.a.f(a)
;var r=n.indexOf(":"),i=(r="lookupNamespaceURI"in t&&0<r&&t.lookupNamespaceURI(n.substr(0,r)),
!1===a||null===a||a===e)
;i?r?t.removeAttributeNS(r,n):t.removeAttribute(n):a=a.toString(),
8>=h.a.W&&n in T?(n=T[n],
i?t.removeAttribute(n):t[n]=a):i||(r?t.setAttributeNS(r,n,a):t.setAttribute(n,a)),
"name"===n&&h.a.Yc(t,i?"":a)}))}},h.c.checked={after:["value","attr"],
init:function(t,n,a){function r(){var r=t.checked,c=i()
;if(!h.S.Ya()&&(r||!u&&!h.S.qa())){var f=h.u.G(n);if(s){var p=l?f.v():f,b=d;d=c,
b!==c?r&&(h.a.Na(p,c,!0),h.a.Na(p,b,!1)):h.a.Na(p,c,r),l&&h.Za(f)&&f(p)
}else o&&(c===e?c=r:r||(c=e)),h.m.eb(f,a,"checked",c,!0)}}
var i=h.xb((function(){
return a.has("checkedValue")?h.a.f(a.get("checkedValue")):f?a.has("value")?h.a.f(a.get("value")):t.value:void 0
})),o="checkbox"==t.type,u="radio"==t.type;if(o||u){
var c=n(),s=o&&h.a.f(c)instanceof Array,l=!(s&&c.push&&c.splice),f=u||s,d=s?i():e
;u&&!t.name&&h.c.uniqueName.init(t,(function(){return!0})),h.o(r,null,{l:t
}),h.a.B(t,"click",r),h.o((function(){var a=h.a.f(n()),r=i()
;s?(t.checked=0<=h.a.A(a,r),d=r):t.checked=o&&r===e?!!a:i()===a}),null,{l:t
}),c=e}}},h.m.wa.checked=!0,h.c.checkedValue={update:function(e,t){
e.value=h.a.f(t())}},h.c.class={update:function(e,t){var n=h.a.Db(h.a.f(t()))
;h.a.Eb(e,e.__ko__cssValue,!1),e.__ko__cssValue=n,h.a.Eb(e,n,!0)}},h.c.css={
update:function(e,t){var n=h.a.f(t())
;null!==n&&"object"==typeof n?h.a.P(n,(function(t,n){n=h.a.f(n),h.a.Eb(e,t,n)
})):h.c.class.update(e,t)}},h.c.enable={update:function(e,t){var n=h.a.f(t())
;n&&e.disabled?e.removeAttribute("disabled"):n||e.disabled||(e.disabled=!0)}
},h.c.disable={update:function(e,t){h.c.enable.update(e,(function(){
return!h.a.f(t())}))}},h.c.event={init:function(e,t,n,a,r){var i=t()||{}
;h.a.P(i,(function(i){"string"==typeof i&&h.a.B(e,i,(function(e){var o,u=t()[i]
;if(u){try{var c=h.a.la(arguments);a=r.$data,c.unshift(a),o=u.apply(a,c)
}finally{!0!==o&&(e.preventDefault?e.preventDefault():e.returnValue=!1)}
!1===n.get(i+"Bubble")&&(e.cancelBubble=!0,
e.stopPropagation&&e.stopPropagation())}}))}))}},h.c.foreach={Rc:function(e){
return function(){var t=e(),n=h.a.bc(t)
;return n&&"number"!=typeof n.length?(h.a.f(t),{foreach:n.data,as:n.as,
noChildContext:n.noChildContext,includeDestroyed:n.includeDestroyed,
afterAdd:n.afterAdd,beforeRemove:n.beforeRemove,afterRender:n.afterRender,
beforeMove:n.beforeMove,afterMove:n.afterMove,templateEngine:h.ba.Ma}):{
foreach:t,templateEngine:h.ba.Ma}}},init:function(e,t){
return h.c.template.init(e,h.c.foreach.Rc(t))},update:function(e,t,n,a,r){
return h.c.template.update(e,h.c.foreach.Rc(t),n,a,r)}
},h.m.Ra.foreach=!1,h.h.ea.foreach=!0,h.c.hasfocus={init:function(e,t,n){
function a(a){e.__ko_hasfocusUpdating=!0;var r=e.ownerDocument
;if("activeElement"in r){var i;try{i=r.activeElement}catch(o){i=r.body}a=i===e}
r=t(),
h.m.eb(r,n,"hasfocus",a,!0),e.__ko_hasfocusLastValue=a,e.__ko_hasfocusUpdating=!1
}var r=a.bind(null,!0),i=a.bind(null,!1)
;h.a.B(e,"focus",r),h.a.B(e,"focusin",r),
h.a.B(e,"blur",i),h.a.B(e,"focusout",i),e.__ko_hasfocusLastValue=!1},
update:function(e,t){var n=!!h.a.f(t())
;e.__ko_hasfocusUpdating||e.__ko_hasfocusLastValue===n||(n?e.focus():e.blur(),
!n&&e.__ko_hasfocusLastValue&&e.ownerDocument.body.focus(),
h.u.G(h.a.Fb,null,[e,n?"focusin":"focusout"]))}
},h.m.wa.hasfocus=!0,h.c.hasFocus=h.c.hasfocus,
h.m.wa.hasFocus="hasfocus",h.c.html={init:function(){return{
controlsDescendantBindings:!0}},update:function(e,t){h.a.fc(e,t())}},function(){
function e(e,t,n){h.c[e]={init:function(e,a,r,i,o){var u,c,s,l,f,d={};if(t){
i=r.get("as");var p=r.get("noChildContext");d={as:i,noChildContext:p,
exportDependencies:f=!(i&&p)}}
return l=(s="render"==r.get("completeOn"))||r.has(h.i.pa),h.o((function(){
var r,i=h.a.f(a()),p=!n!=!i,b=!c
;(f||p!==u)&&(l&&(o=h.i.Cb(e,o)),p&&(t&&!f||(d.dataDependency=h.S.o()),
r=t?o.createChildContext("function"==typeof i?i:a,d):h.S.qa()?o.extend(null,d):o),
b&&h.S.qa()&&(c=h.a.Ca(h.h.childNodes(e),!0)),
p?(b||h.h.va(e,h.a.Ca(c)),h.Oa(r,e)):(h.h.Ea(e),s||h.i.ma(e,h.i.H)),u=p)
}),null,{l:e}),{controlsDescendantBindings:!0}}},h.m.Ra[e]=!1,h.h.ea[e]=!0}
e("if"),e("ifnot",!1,!0),e("with",!0)}(),h.c.let={init:function(e,t,n,a,r){
return t=r.extend(t),h.Oa(t,e),{controlsDescendantBindings:!0}}},h.h.ea.let=!0
;var N={};h.c.options={init:function(e){
if("select"!==h.a.R(e))throw Error("options binding applies only to SELECT elements")
;for(;0<e.length;)e.remove(0);return{controlsDescendantBindings:!0}},
update:function(t,n,a){function r(){return h.a.jb(t.options,(function(e){
return e.selected}))}function i(e,t,n){var a=typeof t
;return"function"==a?t(e):"string"==a?e[t]:n}function o(e,n){
if(b&&l)h.i.ma(t,h.i.H);else if(p.length){var a=0<=h.a.A(p,h.w.M(n[0]))
;h.a.Zc(n[0],a),b&&!a&&h.u.G(h.a.Fb,null,[t,"change"])}}
var u=t.multiple,c=0!=t.length&&u?t.scrollTop:null,s=h.a.f(n()),l=a.get("valueAllowUnset")&&a.has("value"),f=a.get("optionsIncludeDestroyed")
;n={};var d,p=[]
;l||(u?p=h.a.Mb(r(),h.w.M):0<=t.selectedIndex&&p.push(h.w.M(t.options[t.selectedIndex]))),
s&&(void 0===s.length&&(s=[s]),d=h.a.jb(s,(function(t){
return f||t===e||null===t||!h.a.f(t._destroy)
})),a.has("optionsCaption")&&null!==(s=h.a.f(a.get("optionsCaption")))&&s!==e&&d.unshift(N))
;var b=!1;n.beforeRemove=function(e){t.removeChild(e)
},s=o,a.has("optionsAfterRender")&&"function"==typeof a.get("optionsAfterRender")&&(s=function(t,n){
o(0,n),h.u.G(a.get("optionsAfterRender"),null,[n[0],t!==N?t:e])
}),h.a.ec(t,d,(function(n,r,o){
return o.length&&(p=!l&&o[0].selected?[h.w.M(o[0])]:[],
b=!0),r=t.ownerDocument.createElement("option"),
n===N?(h.a.Bb(r,a.get("optionsCaption")),
h.w.cb(r,e)):(o=i(n,a.get("optionsValue"),n),
h.w.cb(r,h.a.f(o)),n=i(n,a.get("optionsText"),o),h.a.Bb(r,n)),[r]
}),n,s),l||(u?p.length&&r().length<p.length:p.length&&0<=t.selectedIndex?h.w.M(t.options[t.selectedIndex])!==p[0]:p.length||0<=t.selectedIndex)&&h.u.G(h.a.Fb,null,[t,"change"]),
(l||h.S.Ya())&&h.i.ma(t,h.i.H),
h.a.wd(t),c&&20<Math.abs(c-t.scrollTop)&&(t.scrollTop=c)}
},h.c.options.$b=h.a.g.Z(),h.c.selectedOptions={init:function(e,t,n){
function a(){var a=t(),r=[];h.a.D(e.getElementsByTagName("option"),(function(e){
e.selected&&r.push(h.w.M(e))})),h.m.eb(a,n,"selectedOptions",r)}function r(){
var n=h.a.f(t()),a=e.scrollTop
;n&&"number"==typeof n.length&&h.a.D(e.getElementsByTagName("option"),(function(e){
var t=0<=h.a.A(n,h.w.M(e));e.selected!=t&&h.a.Zc(e,t)})),e.scrollTop=a}
if("select"!=h.a.R(e))throw Error("selectedOptions binding applies only to SELECT elements")
;var i;h.i.subscribe(e,h.i.H,(function(){
i?a():(h.a.B(e,"change",a),i=h.o(r,null,{l:e}))}),null,{notifyImmediately:!0})},
update:function(){}},h.m.wa.selectedOptions=!0,h.c.style={update:function(t,n){
var a=h.a.f(n()||{});h.a.P(a,(function(n,a){
if(null!==(a=h.a.f(a))&&a!==e&&!1!==a||(a=""),
r)r(t).css(n,a);else if(/^--/.test(n))t.style.setProperty(n,a);else{
n=n.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));var i=t.style[n]
;t.style[n]=a,a===i||t.style[n]!=i||isNaN(a)||(t.style[n]=a+"px")}}))}
},h.c.submit={init:function(e,t,n,a,r){
if("function"!=typeof t())throw Error("The value for a submit binding must be a function")
;h.a.B(e,"submit",(function(n){var a,i=t();try{a=i.call(r.$data,e)}finally{
!0!==a&&(n.preventDefault?n.preventDefault():n.returnValue=!1)}}))}},h.c.text={
init:function(){return{controlsDescendantBindings:!0}},update:function(e,t){
h.a.Bb(e,t())}},h.h.ea.text=!0,function(){if(t&&t.navigator){
var n,a,r,i,o,u=function(e){if(e)return parseFloat(e[1])
},c=t.navigator.userAgent
;(n=t.opera&&t.opera.version&&parseInt(t.opera.version()))||(o=u(c.match(/Edge\/([^ ]+)$/)))||u(c.match(/Chrome\/([^ ]+)/))||(a=u(c.match(/Version\/([^ ]+) Safari/)))||(r=u(c.match(/Firefox\/([^ ]+)/)))||(i=h.a.W||u(c.match(/MSIE ([^ ]+)/)))||(i=u(c.match(/rv:([^ )]+)/)))
}if(8<=i&&10>i)var s=h.a.g.Z(),l=h.a.g.Z(),f=function(e){
var t=this.activeElement;(t=t&&h.a.g.get(t,l))&&t(e)},d=function(e,t){
var n=e.ownerDocument
;h.a.g.get(n,s)||(h.a.g.set(n,s,!0),h.a.B(n,"selectionchange",f)),
h.a.g.set(e,l,t)};h.c.textInput={init:function(t,u,c){function s(e,n){
h.a.B(t,e,n)}function l(){p||(b=t.value,p=h.a.setTimeout(f,4))}function f(){
clearTimeout(p),b=p=e;var n=t.value;v!==n&&(v=n,h.m.eb(u(),c,"textInput",n))}
var p,b,v=t.value,g=9==h.a.W?l:f,m=!1
;i&&s("keypress",f),11>i&&s("propertychange",(function(e){
m||"value"!==e.propertyName||g(e)
})),8==i&&(s("keyup",f),s("keydown",f)),d&&(d(t,g),
s("dragend",l)),(!i||9<=i)&&s("input",g),
5>a&&"textarea"===h.a.R(t)?(s("keydown",l),
s("paste",l),s("cut",l)):11>n?s("keydown",l):4>r?(s("DOMAutoComplete",f),
s("dragdrop",f),s("drop",f)):o&&"number"===t.type&&s("keydown",l),s("change",f),
s("blur",f),h.o((function n(){var a=h.a.f(u())
;null!==a&&a!==e||(a=""),b!==e&&a===b?h.a.setTimeout(n,4):t.value!==a&&(m=!0,
t.value=a,m=!1,v=t.value)}),null,{l:t})}},h.m.wa.textInput=!0,h.c.textinput={
preprocess:function(e,t,n){n("textInput",e)}}}(),h.c.uniqueName={
init:function(e,t){if(t()){var n="ko_unique_"+ ++h.c.uniqueName.rd;h.a.Yc(e,n)}}
},h.c.uniqueName.rd=0,h.c.using={init:function(e,t,n,a,r){var i
;return n.has("as")&&(i={as:n.get("as"),noChildContext:n.get("noChildContext")
}),t=r.createChildContext(t,i),h.Oa(t,e),{controlsDescendantBindings:!0}}
},h.h.ea.using=!0,h.c.value={init:function(t,n,a){var r=h.a.R(t),i="input"==r
;if(!i||"checkbox"!=t.type&&"radio"!=t.type){
var o=[],u=a.get("valueUpdate"),c=!1,s=null
;u&&(o="string"==typeof u?[u]:h.a.wc(u),h.a.Pa(o,"change"))
;var l,f,d=function(){s=null,c=!1;var e=n(),r=h.w.M(t);h.m.eb(e,a,"value",r)}
;!h.a.W||!i||"text"!=t.type||"off"==t.autocomplete||t.form&&"off"==t.form.autocomplete||-1!=h.a.A(o,"propertychange")||(h.a.B(t,"propertychange",(function(){
c=!0})),h.a.B(t,"focus",(function(){c=!1})),h.a.B(t,"blur",(function(){c&&d()
}))),h.a.D(o,(function(e){var n=d;h.a.Ud(e,"after")&&(n=function(){
s=h.w.M(t),h.a.setTimeout(d,0)},e=e.substring(5)),h.a.B(t,e,n)
})),l=i&&"file"==t.type?function(){var a=h.a.f(n())
;null===a||a===e||""===a?t.value="":h.u.G(d)}:function(){
var i=h.a.f(n()),o=h.w.M(t)
;null!==s&&i===s?h.a.setTimeout(l,0):i===o&&o!==e||("select"===r?(o=a.get("valueAllowUnset"),
h.w.cb(t,i,o),o||i===h.w.M(t)||h.u.G(d)):h.w.cb(t,i))
},"select"===r?h.i.subscribe(t,h.i.H,(function(){
f?a.get("valueAllowUnset")?l():d():(h.a.B(t,"change",d),f=h.o(l,null,{l:t}))
}),null,{notifyImmediately:!0}):(h.a.B(t,"change",d),h.o(l,null,{l:t}))
}else h.ib(t,{checkedValue:n})},update:function(){}
},h.m.wa.value=!0,h.c.visible={update:function(e,t){
var n=h.a.f(t()),a="none"!=e.style.display
;n&&!a?e.style.display="":!n&&a&&(e.style.display="none")}},h.c.hidden={
update:function(e,t){h.c.visible.update(e,(function(){return!h.a.f(t())}))}
},function(e){h.c[e]={init:function(t,n,a,r,i){
return h.c.event.init.call(this,t,(function(){var t={};return t[e]=n(),t
}),a,r,i)}}
}("click"),h.ca=function(){},h.ca.prototype.renderTemplateSource=function(){
throw Error("Override renderTemplateSource")
},h.ca.prototype.createJavaScriptEvaluatorBlock=function(){
throw Error("Override createJavaScriptEvaluatorBlock")
},h.ca.prototype.makeTemplateSource=function(e,t){if("string"==typeof e){
var a=(t=t||n).getElementById(e)
;if(!a)throw Error("Cannot find template with ID "+e);return new h.C.F(a)}
if(1==e.nodeType||8==e.nodeType)return new h.C.ia(e)
;throw Error("Unknown template type: "+e)
},h.ca.prototype.renderTemplate=function(e,t,n,a){
return e=this.makeTemplateSource(e,a),this.renderTemplateSource(e,t,n,a)
},h.ca.prototype.isTemplateRewritten=function(e,t){
return!1===this.allowTemplateRewriting||this.makeTemplateSource(e,t).data("isRewritten")
},h.ca.prototype.rewriteTemplate=function(e,t,n){
t=t((e=this.makeTemplateSource(e,n)).text()),e.text(t),e.data("isRewritten",!0)
},h.b("templateEngine",h.ca),h.kc=function(){function e(e,t,n,a){e=h.m.ac(e)
;for(var r=h.m.Ra,i=0;i<e.length;i++){var o=e[i].key
;if(Object.prototype.hasOwnProperty.call(r,o)){var u=r[o]
;if("function"==typeof u){if(o=u(e[i].value))throw Error(o)
}else if(!u)throw Error("This template engine does not support the '"+o+"' binding within its templates")
}}
return n="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+h.m.vb(e,{
valueAccessors:!0
})+" } })()},'"+n.toLowerCase()+"')",a.createJavaScriptEvaluatorBlock(n)+t}
var t=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,n=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g
;return{xd:function(e,t,n){
t.isTemplateRewritten(e,n)||t.rewriteTemplate(e,(function(e){return h.kc.Ld(e,t)
}),n)},Ld:function(a,r){return a.replace(t,(function(t,n,a,i,o){
return e(o,n,a,r)})).replace(n,(function(t,n){
return e(n,"\x3c!-- ko --\x3e","#comment",r)}))},md:function(e,t){
return h.aa.Xb((function(n,a){var r=n.nextSibling
;r&&r.nodeName.toLowerCase()===t&&h.ib(r,e,a)}))}}
}(),h.b("__tr_ambtns",h.kc.md),function(){h.C={},h.C.F=function(e){if(this.F=e){
var t=h.a.R(e)
;this.ab="script"===t?1:"textarea"===t?2:"template"==t&&e.content&&11===e.content.nodeType?3:4
}},h.C.F.prototype.text=function(){
var e=1===this.ab?"text":2===this.ab?"value":"innerHTML"
;if(0==arguments.length)return this.F[e];var t=arguments[0]
;"innerHTML"===e?h.a.fc(this.F,t):this.F[e]=t};var t=h.a.g.Z()+"_"
;h.C.F.prototype.data=function(e){
if(1===arguments.length)return h.a.g.get(this.F,t+e)
;h.a.g.set(this.F,t+e,arguments[1])};var n=h.a.g.Z()
;h.C.F.prototype.nodes=function(){var t=this.F;if(0==arguments.length){
var a=h.a.g.get(t,n)||{},r=a.lb||(3===this.ab?t.content:4===this.ab?t:e)
;if(!r||a.jd){var i=this.text()
;i&&i!==a.bb&&(r=h.a.Md(i,t.ownerDocument),h.a.g.set(t,n,{lb:r,bb:i,jd:!0}))}
return r}a=arguments[0],this.ab!==e&&this.text(""),h.a.g.set(t,n,{lb:a})
},h.C.ia=function(e){this.F=e
},h.C.ia.prototype=new h.C.F,h.C.ia.prototype.constructor=h.C.ia,
h.C.ia.prototype.text=function(){if(0==arguments.length){
var t=h.a.g.get(this.F,n)||{};return t.bb===e&&t.lb&&(t.bb=t.lb.innerHTML),t.bb}
h.a.g.set(this.F,n,{bb:arguments[0]})
},h.b("templateSources",h.C),h.b("templateSources.domElement",h.C.F),
h.b("templateSources.anonymousTemplate",h.C.ia)}(),function(){function t(e,t,n){
var a;for(t=h.h.nextSibling(t);e&&(a=e)!==t;)n(a,e=h.h.nextSibling(a))}
function n(e,n){if(e.length){
var a=e[0],r=e[e.length-1],i=a.parentNode,o=h.ga.instance,u=o.preprocessNode
;if(u){if(t(a,r,(function(e,t){var n=e.previousSibling,i=u.call(o,e)
;i&&(e===a&&(a=i[0]||t),e===r&&(r=i[i.length-1]||n))})),e.length=0,!a)return
;a===r?e.push(a):(e.push(a,r),h.a.Ua(e,i))}t(a,r,(function(e){
1!==e.nodeType&&8!==e.nodeType||h.vc(n,e)})),t(a,r,(function(e){
1!==e.nodeType&&8!==e.nodeType||h.aa.cd(e,[n])})),h.a.Ua(e,i)}}function a(e){
return e.nodeType?e:0<e.length?e[0]:null}function r(e,t,r,i,u){u=u||{}
;var c=(e&&a(e)||r||{}).ownerDocument,s=u.templateEngine||o
;if(h.kc.xd(r,s,c),"number"!=typeof(r=s.renderTemplate(r,i,u,c)).length||0<r.length&&"number"!=typeof r[0].nodeType)throw Error("Template engine must return an array of DOM nodes")
;switch(c=!1,t){case"replaceChildren":h.h.va(e,r),c=!0;break;case"replaceNode":
h.a.Xc(e,r),c=!0;break;case"ignoreTargetNode":break;default:
throw Error("Unknown renderMode: "+t)}
return c&&(n(r,i),u.afterRender&&h.u.G(u.afterRender,null,[r,i[u.as||"$data"]]),
"replaceChildren"==t&&h.i.ma(e,h.i.H)),r}function i(e,t,n){
return h.O(e)?e():"function"==typeof e?e(t,n):e}var o;h.gc=function(t){
if(t!=e&&!(t instanceof h.ca))throw Error("templateEngine must inherit from ko.templateEngine")
;o=t},h.dc=function(t,n,u,c,s){
if(((u=u||{}).templateEngine||o)==e)throw Error("Set a template engine before calling renderTemplate")
;if(s=s||"replaceChildren",c){var l=a(c);return h.$((function(){
var e=n&&n instanceof h.fa?n:new h.fa(n,null,null,null,{exportDependencies:!0
}),o=i(t,e.$data,e);e=r(c,s,o,e,u),"replaceNode"==s&&(l=a(c=e))}),null,{
Sa:function(){return!l||!h.a.Sb(l)},l:l&&"replaceNode"==s?l.parentNode:l})}
return h.aa.Xb((function(e){h.dc(t,n,u,e,"replaceNode")}))
},h.Qd=function(t,a,o,u,c){function s(e,t){
h.u.G(h.a.ec,null,[u,e,f,o,l,t]),h.i.ma(u,h.i.H)}function l(e,t){
n(t,d),o.afterRender&&o.afterRender(t,e),d=null}function f(e,n){
d=c.createChildContext(e,{as:p,noChildContext:o.noChildContext,
extend:function(e){e.$index=n,p&&(e[p+"Index"]=n)}});var a=i(t,e,d)
;return r(u,"ignoreTargetNode",a,d,o)}
var d,p=o.as,b=!1===o.includeDestroyed||h.options.foreachHidesDestroyed&&!o.includeDestroyed
;if(b||o.beforeRemove||!h.Pc(a))return h.$((function(){var t=h.a.f(a)||[]
;void 0===t.length&&(t=[t]),b&&(t=h.a.jb(t,(function(t){
return t===e||null===t||!h.a.f(t._destroy)}))),s(t)}),null,{l:u});s(a.v())
;var v=a.subscribe((function(e){s(a(),e)}),null,"arrayChange");return v.l(u),v}
;var u=h.a.g.Z(),c=h.a.g.Z();h.c.template={init:function(e,t){var n=h.a.f(t())
;if("string"==typeof n||"name"in n)h.h.Ea(e);else if("nodes"in n){
if(n=n.nodes||[],
h.O(n))throw Error('The "nodes" option must be a plain, non-observable array.')
;var a=n[0]&&n[0].parentNode;a&&h.a.g.get(a,c)||(a=h.a.Yb(n),h.a.g.set(a,c,!0)),
new h.C.ia(e).nodes(a)}else{
if(!(0<(n=h.h.childNodes(e)).length))throw Error("Anonymous template defined, but no template content was provided")
;a=h.a.Yb(n),new h.C.ia(e).nodes(a)}return{controlsDescendantBindings:!0}},
update:function(t,n,a,r,i){var o=n()
;a=!0,r=null,"string"==typeof(n=h.a.f(o))?n={}:(o="name"in n?n.name:t,
"if"in n&&(a=h.a.f(n.if)),
a&&"ifnot"in n&&(a=!h.a.f(n.ifnot)),a&&!o&&(a=!1)),"foreach"in n?r=h.Qd(o,a&&n.foreach||[],n,t,i):a?(a=i,
"data"in n&&(a=i.createChildContext(n.data,{as:n.as,
noChildContext:n.noChildContext,exportDependencies:!0
})),r=h.dc(o,a,n,t)):h.h.Ea(t),
i=r,(n=h.a.g.get(t,u))&&"function"==typeof n.s&&n.s(),
h.a.g.set(t,u,!i||i.ja&&!i.ja()?e:i)}},h.m.Ra.template=function(e){
return 1==(e=h.m.ac(e)).length&&e[0].unknown||h.m.Id(e,"name")?null:"This template engine does not support anonymous templates nested within its templates"
},h.h.ea.template=!0
}(),h.b("setTemplateEngine",h.gc),h.b("renderTemplate",h.dc),
h.a.Kc=function(e,t,n){var a,r,i,o,u
;if(e.length&&t.length)for(a=r=0;(!n||a<n)&&(o=e[r]);++r){
for(i=0;u=t[i];++i)if(o.value===u.value){
o.moved=u.index,u.moved=o.index,t.splice(i,1),a=i=0;break}a+=i}
},h.a.Pb=function(){function e(e,t,n,a,r){
var i,o,u,c,s,l=Math.min,f=Math.max,d=[],p=e.length,b=t.length,v=b-p||1,g=p+b+1
;for(i=0;i<=p;i++)for(c=u,
d.push(u=[]),s=l(b,i+v),o=f(0,i-1);o<=s;o++)u[o]=o?i?e[i-1]===t[o-1]?c[o-1]:l(c[o]||g,u[o-1]||g)+1:o+1:i+1
;for(l=[],
f=[],v=[],i=p,o=b;i||o;)b=d[i][o]-1,o&&b===d[i][o-1]?f.push(l[l.length]={
status:n,value:t[--o],index:o}):i&&b===d[i-1][o]?v.push(l[l.length]={status:a,
value:e[--i],index:i}):(--o,--i,r.sparse||l.push({status:"retained",value:t[o]
}));return h.a.Kc(v,f,!r.dontLimitMoves&&10*p),l.reverse()}
return function(t,n,a){return a="boolean"==typeof a?{dontLimitMoves:a
}:a||{},n=n||[],
(t=t||[]).length<n.length?e(t,n,"added","deleted",a):e(n,t,"deleted","added",a)}
}(),h.b("utils.compareArrays",h.a.Pb),function(){function t(t,n,a,r,i){
var o=[],u=h.$((function(){var e=n(a,i,h.a.Ua(o,t))||[]
;0<o.length&&(h.a.Xc(o,e),r&&h.u.G(r,null,[a,e,i])),o.length=0,h.a.Nb(o,e)
}),null,{l:t,Sa:function(){return!h.a.kd(o)}});return{Y:o,$:u.ja()?u:e}}
var n=h.a.g.Z(),a=h.a.g.Z();h.a.ec=function(r,i,o,u,c,s){function l(e){p={Aa:e,
pb:h.ta(C++)},w.push(p),y||D.push(p)}function f(e){
p=m[e],C!==p.pb.v()&&S.push(p),p.pb(C++),h.a.Ua(p.Y,r),w.push(p)}
function d(e,t){if(e)for(var n=0,a=t.length;n<a;n++)h.a.D(t[n].Y,(function(a){
e(a,n,t[n].Aa)}))}void 0===(i=i||[]).length&&(i=[i]),u=u||{}
;var p,b,v,g,m=h.a.g.get(r,n),y=!m,w=[],x=0,C=0,E=[],T=[],N=[],S=[],D=[],_=0
;if(y)h.a.D(i,l);else{if(!s||m&&m._countWaitingForRemove){
var j=h.a.Mb(m,(function(e){return e.Aa}));s=h.a.Pb(j,i,{
dontLimitMoves:u.dontLimitMoves,sparse:!0})}var A,O,B
;for(j=0;A=s[j];j++)switch(O=A.moved,B=A.index,A.status){case"deleted":
for(;x<B;)f(x++)
;O===e&&((p=m[x]).$&&(p.$.s(),p.$=e),h.a.Ua(p.Y,r).length&&(u.beforeRemove&&(w.push(p),
_++,p.Aa===a?p=null:N.push(p)),p&&E.push.apply(E,p.Y))),x++;break;case"added":
for(;C<B;)f(x++);O!==e?(T.push(w.length),f(O)):l(A.value)}
for(;C<i.length;)f(x++);w._countWaitingForRemove=_}
h.a.g.set(r,n,w),d(u.beforeMove,S),h.a.D(E,u.beforeRemove?h.oa:h.removeNode)
;try{g=r.ownerDocument.activeElement}catch(k){}
if(T.length)for(;(j=T.shift())!=e;){
for(p=w[j],b=e;j;)if((v=w[--j].Y)&&v.length){b=v[v.length-1];break}
for(i=0;x=p.Y[i];b=x,i++)h.h.Wb(r,x,b)}for(j=0;p=w[j];j++){
for(p.Y||h.a.extend(p,t(r,o,p.Aa,c,p.pb)),i=0;x=p.Y[i];b=x,i++)h.h.Wb(r,x,b)
;!p.Ed&&c&&(c(p.Aa,p.Y,p.pb),p.Ed=!0,b=p.Y[p.Y.length-1])}
for(g&&r.ownerDocument.activeElement!=g&&g.focus(),
d(u.beforeRemove,N),j=0;j<N.length;++j)N[j].Aa=a
;d(u.afterMove,S),d(u.afterAdd,D)}
}(),h.b("utils.setDomNodeChildrenFromArrayMapping",h.a.ec),h.ba=function(){
this.allowTemplateRewriting=!1
},h.ba.prototype=new h.ca,h.ba.prototype.constructor=h.ba,
h.ba.prototype.renderTemplateSource=function(e,t,n,a){
return(t=9>h.a.W||!e.nodes?null:e.nodes())?h.a.la(t.cloneNode(!0).childNodes):(e=e.text(),
h.a.ua(e,a))
},h.ba.Ma=new h.ba,h.gc(h.ba.Ma),h.b("nativeTemplateEngine",h.ba),function(){
h.$a=function(){var e=this.Hd=function(){if(!r||!r.tmpl)return 0;try{
if(0<=r.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(e){}return 1
}();this.renderTemplateSource=function(t,a,i,o){
if(o=o||n,i=i||{},2>e)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.")
;var u=t.data("precompiled")
;return u||(u=t.text()||"",u=r.template(null,"{{ko_with $item.koBindingContext}}"+u+"{{/ko_with}}"),
t.data("precompiled",u)),t=[a.$data],a=r.extend({koBindingContext:a
},i.templateOptions),
(a=r.tmpl(u,t,a)).appendTo(o.createElement("div")),r.fragments={},a
},this.createJavaScriptEvaluatorBlock=function(e){
return"{{ko_code ((function() { return "+e+" })()) }}"
},this.addTemplate=function(e,t){
n.write("<script type='text/html' id='"+e+"'>"+t+"<\/script>")
},0<e&&(r.tmpl.tag.ko_code={open:"__.push($1 || '');"},r.tmpl.tag.ko_with={
open:"with($1) {",close:"} "})
},h.$a.prototype=new h.ca,h.$a.prototype.constructor=h.$a;var e=new h.$a
;0<e.Hd&&h.gc(e),h.b("jqueryTmplTemplateEngine",h.$a)}()}))}();