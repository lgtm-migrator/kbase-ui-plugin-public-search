/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, https://github.com/requirejs/requirejs/blob/master/LICENSE
 */
(function(global,setTimeout){
var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.3.3",commentRegExp=/\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,isBrowser=!("undefined"==typeof window||"undefined"==typeof navigator||!window.document),isWebWorker=!isBrowser&&"undefined"!=typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="DEFAULT_CONTEXT",isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1,eap_direct_exec=null
;function commentReplace(e,t){return t||""}function isFunction(e){
return"[object Function]"===ostring.call(e)}function isArray(e){
return"[object Array]"===ostring.call(e)}function each(e,t){var r
;if(e)for(r=0;r<e.length&&(!e[r]||!t(e[r],r,e));r+=1);}
function eachReverse(e,t){var r
;if(e)for(r=e.length-1;r>-1&&(!e[r]||!t(e[r],r,e));r-=1);}function hasProp(e,t){
return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}
function eachProp(e,t){var r;for(r in e)if(hasProp(e,r)&&t(e[r],r))break}
function mixin(e,t,r,i){return t&&eachProp(t,(function(t,n){
!r&&hasProp(e,n)||(!i||"object"!=typeof t||!t||isArray(t)||isFunction(t)||t instanceof RegExp?e[n]=t:(e[n]||(e[n]={}),
mixin(e[n],t,r,i)))})),e}function bind(e,t){return function(){
return t.apply(e,arguments)}}function scripts(){
return document.getElementsByTagName("script")}function defaultOnError(e){
throw e}function getGlobal(e){if(!e)return e;var t=global
;return each(e.split("."),(function(e){t=t[e]})),t}function makeError(e,t,r,i){
var n=new Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e)
;return n.requireType=e,n.requireModules=i,r&&(n.originalError=r),n}
if(void 0!==global.define)throw new Error('A global "define" is already established -- cannot load requirejs')
;if(void 0!==global.requirejs){
if(isFunction(global.requirejs))throw new Error("requirejs is already loaded")
;cfg=global.requirejs,delete global.requirejs}function trimDots(e){var t,r
;for(t=0;t<e.length;t++)if("."===(r=e[t]))e.splice(t,1),t-=1;else if(".."===r){
if(0===t||1===t&&".."===e[2]||".."===e[t-1])continue;t>0&&(e.splice(t-1,2),t-=2)
}}function newContext(e){var t,r,i,n,o,a={waitSeconds:7,baseUrl:"./",paths:{},
bundles:{},pkgs:{},shim:{},config:{}
},s={},u={},c={},d=[],p={},l={},f={},h={},m=1,g=1;function b(e,t,r){
var i,n,o,s,u,c,d,p,l,f,h=t&&t.split("/"),m=a.map,g=m&&m["*"]
;if(e&&(c=(e=e.split("/")).length-1,
a.nodeIdCompat&&jsSuffixRegExp.test(e[c])&&(e[c]=e[c].replace(jsSuffixRegExp,"")),
"."===e[0].charAt(0)&&h&&(e=h.slice(0,h.length-1).concat(e)),
trimDots(e),e=e.join("/")),r&&m&&(h||g)){
e:for(o=(n=e.split("/")).length;o>0;o-=1){
if(u=n.slice(0,o).join("/"),h)for(s=h.length;s>0;s-=1)if((i=getOwn(m,h.slice(0,s).join("/")))&&(i=getOwn(i,u))){
d=i,p=o;break e}!l&&g&&getOwn(g,u)&&(l=getOwn(g,u),f=o)}
!d&&l&&(d=l,p=f),d&&(n.splice(0,p,d),e=n.join("/"))}return getOwn(a.pkgs,e)||e}
function x(e){isBrowser&&each(scripts(),(function(t){
if(t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===i.contextName)return t.parentNode.removeChild(t),
!0}))}function v(e){var t=getOwn(a.paths,e)
;if(t&&isArray(t)&&t.length>1)return t.shift(),
i.require.undef(e),i.makeRequire(null,{skipMap:!0})([e]),!0}function q(e){
var t,r=e?e.indexOf("!"):-1
;return r>-1&&(t=e.substring(0,r),e=e.substring(r+1,e.length)),[t,e]}
function E(e,t,r,n){var o,a,s,u,c=null,d=t?t.name:null,l=e,f=!0,h=""
;return e||(f=!1,
e="_@r"+(m+=1)),c=(u=q(e))[0],e=u[1],c&&(c=b(c,d,n),a=getOwn(p,c)),
e&&(c?h=r?e:a&&a.normalize?a.normalize(e,(function(e){return b(e,d,n)
})):-1===e.indexOf("!")?b(e,d,n):e:(c=(u=q(h=b(e,d,n)))[0],
h=u[1],r=!0,o=i.nameToUrl(h))),{prefix:c,name:h,parentMap:t,
unnormalized:!!(s=!c||a||r?"":"_unnormalized"+(g+=1)),url:o,originalName:l,
isDefine:f,id:(c?c+"!"+h:h)+s}}function w(e){var t=e.id,r=getOwn(s,t)
;return r||(r=s[t]=new i.Module(e)),r}function y(e,t,r){var i=e.id,n=getOwn(s,i)
;!hasProp(p,i)||n&&!n.defineEmitComplete?(n=w(e)).error&&"error"===t?r(n.error):n.on(t,r):"defined"===t&&(l[i].used+=1,
r(p[i]))}function k(e,t){var r=e.requireModules,i=!1
;t?t(e):(each(r,(function(t){var r=getOwn(s,t)
;r&&(r.error=e,r.events.error&&(i=!0,r.emit("error",e)))})),i||req.onError(e))}
function S(){globalDefQueue.forEach((function(e){var t=e[0]
;"string"==typeof t&&(i.defQueueMap[t]=!0),d.push(e)})),globalDefQueue=[]}
function M(e){delete s[e],delete u[e]}function O(){
var e,r,n=1e3*a.waitSeconds,c=n&&i.startTime+n<(new Date).getTime(),d=[],l=[],f=!1,h=!0
;if(!t){if(t=!0,eachProp(u,(function(e){var t=e.map,i=t.id
;if(e.enabled&&(t.isDefine||l.push(e),
!e.error))if(!e.inited&&c)v(i)?(r=!0,f=!0):(d.push(i),
x(i));else if(!e.inited&&e.fetched&&t.isDefine&&(f=!0,!t.prefix))return h=!1})),
c&&d.length)return(e=makeError("timeout","Load timeout for modules: "+d,null,d)).contextName=i.contextName,
k(e);h&&each(l,(function(e){!function e(t,r,i){var n=t.map.id
;t.error?t.emit("error",t.error):(r[n]=!0,each(t.depMaps,(function(n,o){
var a=n.id,u=getOwn(s,a)
;!u||t.depMatched[o]||i[a]||(getOwn(r,a)?(t.defineDep(o,p[a]),
t.check()):e(u,r,i))})),i[n]=!0)}(e,{},{})
})),c&&!r||!f||!isBrowser&&!isWebWorker||o||(o=setTimeout((function(){o=0,O()
}),50)),t=!1}}function j(e){hasProp(p,e[0])||w(E(e[0],null,!0)).init(e[1],e[2])}
function T(e,t,r,i){
e.detachEvent&&!isOpera?i&&e.detachEvent(i,t):e.removeEventListener(r,t,!1)}
function R(e){var t=e.currentTarget||e.srcElement
;return T(t,i.onScriptLoad,"load","onreadystatechange"),
T(t,i.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}
}function A(){var e;for(S();d.length;){
if(null===(e=d.shift())[0])return k(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]))
;j(e)}i.defQueueMap={}}return n={require:function(e){
return e.require?e.require:e.require=i.makeRequire(e.map)},exports:function(e){
if(e.usingExports=!0,
e.map.isDefine)return e.exports?p[e.map.id]=e.exports:e.exports=p[e.map.id]={}},
module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,
config:function(){return getOwn(a.config,e.map.id)||{}},
exports:e.exports||(e.exports={})}}},(r=function(e){
this.events=getOwn(c,e.id)||{},
this.map=e,this.shim=getOwn(a.shim,e.id),this.depExports=[],
this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0
}).prototype={init:function(e,t,r,i){
i=i||{},this.inited||(this.factory=t,r?this.on("error",r):this.events.error&&(r=bind(this,(function(e){
this.emit("error",e)
}))),this.depMaps=e&&e.slice(0),this.errback=r,this.inited=!0,
this.ignore=i.ignore,i.enabled||this.enabled?this.enable():this.check())},
defineDep:function(e,t){
this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,
this.depExports[e]=t)},fetch:function(){if(!this.fetched){
this.fetched=!0,i.startTime=(new Date).getTime();var e=this.map
;if(!this.shim)return e.prefix?this.callPlugin():this.load()
;i.makeRequire(this.map,{enableBuildCallback:!0
})(this.shim.deps||[],bind(this,(function(){
return e.prefix?this.callPlugin():this.load()})))}},load:function(){
var e=this.map.url;f[e]||(f[e]=!0,i.load(this.map.id,e))},check:function(){
if(this.enabled&&!this.enabling){
var e,t,r=this.map.id,n=this.depExports,o=this.exports,a=this.factory
;if(this.inited){
if(this.error)this.emit("error",this.error);else if(!this.defining){
if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(a)){
if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{
o=i.execCb(r,a,n,o)}catch(u){e=u}else o=i.execCb(r,a,n,o)
;if(this.map.isDefine&&void 0===o&&((t=this.module)?o=t.exports:this.usingExports&&(o=this.exports)),
e)return e.requireMap=this.map,
e.requireModules=this.map.isDefine?[this.map.id]:null,
e.requireType=this.map.isDefine?"define":"require",k(this.error=e)}else o=a
;if(this.exports=o,this.map.isDefine&&!this.ignore&&(p[r]=o,l[r]={used:0,
defined:!0,errors:0,created:new Date,lastUsed:null},req.onResourceLoad)){
var s=[];each(this.depMaps,(function(e){s.push(e.normalizedMap||e)
})),req.onResourceLoad(i,this.map,s)}M(r),this.defined=!0}
this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,
this.emit("defined",this.exports),this.defineEmitComplete=!0)}
}else hasProp(i.defQueueMap,r)||this.fetch()}},callPlugin:function(){
var e=this.map,t=e.id,r=E(e.prefix)
;this.depMaps.push(r),y(r,"defined",bind(this,(function(n){
var o,u,c,d=getOwn(h,this.map.id),p=this.map.name,l=this.map.parentMap?this.map.parentMap.name:null,f=i.makeRequire(e.parentMap,{
enableBuildCallback:!0})
;if(this.map.unnormalized)return n.normalize&&(p=n.normalize(p,(function(e){
return b(e,l,!0)
}))||""),y(u=E(e.prefix+"!"+p,this.map.parentMap,!0),"defined",bind(this,(function(e){
this.map.normalizedMap=u,this.init([],(function(){return e}),null,{enabled:!0,
ignore:!0})
}))),void((c=getOwn(s,u.id))&&(this.depMaps.push(u),this.events.error&&c.on("error",bind(this,(function(e){
this.emit("error",e)}))),c.enable()))
;if(d)return this.map.url=i.nameToUrl(d),void this.load()
;if((o=bind(this,(function(e){this.init([],(function(){return e}),null,{
enabled:!0})}))).error=bind(this,(function(e){
this.inited=!0,this.error=e,e.requireModules=[t],eachProp(s,(function(e){
0===e.map.id.indexOf(t+"_unnormalized")&&M(e.map.id)})),k(e)
})),o.fromText=bind(this,(function(r,n){var s=e.name,u=E(s),c=useInteractive
;n&&(r=n),
c&&(useInteractive=!1),w(u),hasProp(a.config,t)&&(a.config[s]=a.config[t]);try{
req.exec(r)}catch(d){
return k(makeError("fromtexteval","fromText eval for "+t+" failed: "+d,d,[t]))}
c&&(useInteractive=!0),this.depMaps.push(u),i.completeLoad(s),f([s],o)
})),window.require_resources){var m=f.toUrl(e.name),g=/^(\/.*?)(\?.*)*$/.exec(m)
;if(g){var x,v=g[1],q=(g=/^(.*?)(?:\.([^.]*))?$/.exec(v))[1];switch(r.name){
case"json":case"yaml":x=window.require_resources.json[q];break;case"text":
x=window.require_resources.text[q];break;case"css":
if(x=window.require_resources.css[q]){
var S=document.getElementsByTagName("head")[0],O=document.createElement("style")
;return S.appendChild(O),O.innerText=x,void o()}}if(x)return void o(x)}}
n.load(e.name,f,o,a)}))),i.enable(r,this),this.pluginMaps[r.id]=r},
enable:function(){
u[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,(function(e,t){
var r,o,a;if("string"==typeof e){
if(e=E(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),
this.depMaps[t]=e,a=getOwn(n,e.id))return void(this.depExports[t]=a(this))
;this.depCount+=1,y(e,"defined",bind(this,(function(e){
this.undefed||(this.defineDep(t,e),this.check())
}))),this.errback?y(e,"error",bind(this,this.errback)):this.events.error&&y(e,"error",bind(this,(function(e){
this.emit("error",e)})))}
r=e.id,o=s[r],hasProp(n,r)||!o||o.enabled||i.enable(e,this)
}))),eachProp(this.pluginMaps,bind(this,(function(e){var t=getOwn(s,e.id)
;t&&!t.enabled&&i.enable(e,this)}))),this.enabling=!1,this.check()},
on:function(e,t){var r=this.events[e];r||(r=this.events[e]=[]),r.push(t)},
emit:function(e,t){each(this.events[e],(function(e){e(t)
})),"error"===e&&delete this.events[e]}},(i={config:a,contextName:e,registry:s,
defined:p,urlFetched:f,defQueue:d,defQueueMap:{},Module:r,makeModuleMap:E,
nextTick:req.nextTick,onError:k,debug:function(){return{config:a,registry:s,
defined:p,stats:l}},stats:l,configure:function(e){
if(e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/"),
"string"==typeof e.urlArgs){var t=e.urlArgs;e.urlArgs=function(e,r){
return(-1===r.indexOf("?")?"?":"&")+t}}var r=a.shim,n={paths:!0,bundles:!0,
config:!0,map:!0};eachProp(e,(function(e,t){
n[t]?(a[t]||(a[t]={}),mixin(a[t],e,!0,!0)):a[t]=e
})),e.bundles&&eachProp(e.bundles,(function(e,t){each(e,(function(e){
e!==t&&(h[e]=t)}))})),e.shim&&(eachProp(e.shim,(function(e,t){isArray(e)&&(e={
deps:e
}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=i.makeShimExports(e)),r[t]=e
})),a.shim=r),e.packages&&each(e.packages,(function(e){var t
;t=(e="string"==typeof e?{name:e
}:e).name,e.location&&(a.paths[t]=e.location),a.pkgs[t]=e.name+"/"+(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")
})),eachProp(s,(function(e,t){e.inited||e.map.unnormalized||(e.map=E(t,null,!0))
})),(e.deps||e.callback)&&i.require(e.deps||[],e.callback)},
makeShimExports:function(e){return function(){var t
;return e.init&&(t=e.init.apply(global,arguments)),
t||e.exports&&getGlobal(e.exports)}},makeRequire:function(t,r){
function o(a,u,c){var d,f
;return r.enableBuildCallback&&u&&isFunction(u)&&(u.__requireJsBuild=!0),
"string"==typeof a?isFunction(u)?k(makeError("requireargs","Invalid require call"),c):t&&hasProp(n,a)?n[a](s[t.id]):req.get?req.get(i,a,t,o):(d=E(a,t,!1,!0).id,
hasProp(p,d)?(l[d].used+=1,
l[d].lastUsed=new Date,p[d]):k(makeError("notloaded",'Module name "'+d+'" has not been loaded yet for context: '+e+(t?"":". Use require([])")))):(A(),
i.nextTick((function(){A(),(f=w(E(null,t))).skipMap=r.skipMap,f.init(a,u,c,{
enabled:!0}),O()})),o)}return r=r||{},mixin(o,{isBrowser:isBrowser,
toUrl:function(e){var r,n=e.lastIndexOf("."),o=e.split("/")[0]
;return-1!==n&&(!("."===o||".."===o)||n>1)&&(r=e.substring(n,e.length),
e=e.substring(0,n)),i.nameToUrl(b(e,t&&t.id,!0),r,!0)},defined:function(e){
return hasProp(p,E(e,t,!1,!0).id)},specified:function(e){
return e=E(e,t,!1,!0).id,hasProp(p,e)||hasProp(s,e)}}),t||(o.undef=function(e){
S();var r=E(e,t,!0),n=getOwn(s,e);n.undefed=!0,x(e),delete p[e],delete f[r.url],
delete c[e],delete l[e],eachReverse(d,(function(t,r){t[0]===e&&d.splice(r,1)})),
delete i.defQueueMap[e],n&&(n.events.defined&&(c[e]=n.events),M(e))}),o},
enable:function(e){getOwn(s,e.id)&&w(e).enable()},completeLoad:function(e){
var t,r,n,o=getOwn(a.shim,e)||{},u=o.exports;for(S();d.length;){
if(null===(r=d.shift())[0]){if(r[0]=e,t)break;t=!0}else r[0]===e&&(t=!0);j(r)}
if(i.defQueueMap={},n=getOwn(s,e),!t&&!hasProp(p,e)&&n&&!n.inited){
if(!(!a.enforceDefine||u&&getGlobal(u)))return v(e)?void 0:k(makeError("nodefine","No define call for "+e,null,[e]))
;j([e,o.deps||[],o.exportsFn])}O()},nameToUrl:function(e,t,r){
var n,o,s,u,c,d,p=getOwn(a.pkgs,e)
;if(p&&(e=p),d=getOwn(h,e))return i.nameToUrl(d,t,r)
;if(req.jsExtRegExp.test(e))u=e+(t||"");else{
for(n=a.paths,s=(o=e.split("/")).length;s>0;s-=1)if(c=getOwn(n,o.slice(0,s).join("/"))){
isArray(c)&&(c=c[0]),o.splice(0,s,c);break}
u=o.join("/"),u=("/"===(u+=t||(/^data\:|^blob\:|\?/.test(u)||r?"":".js")).charAt(0)||u.match(/^[\w\+\.\-]+:/)?"":a.baseUrl)+u
}return a.urlArgs&&!/^blob\:/.test(u)?u+a.urlArgs(e,u):u},load:function(e,t){
req.load(i,e,t)},execCb:function(e,t,r,i){return t.apply(i,r)},
onScriptLoad:function(e){
if("load"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){
interactiveScript=null;var t=R(e);i.completeLoad(t.id)}},
onScriptError:function(e){var t=R(e);if(!v(t.id)){var r=[]
;return eachProp(s,(function(e,i){
0!==i.indexOf("_@r")&&each(e.depMaps,(function(e){
if(e.id===t.id)return r.push(i),!0}))
})),k(makeError("scripterror",'Script error for "'+t.id+(r.length?'", needed by: '+r.join(", "):'"'),e,[t.id]))
}}}).require=i.makeRequire(),i}function getInteractiveScript(){
return interactiveScript&&"interactive"===interactiveScript.readyState||eachReverse(scripts(),(function(e){
if("interactive"===e.readyState)return interactiveScript=e})),interactiveScript}
void 0===global.require||isFunction(global.require)||(cfg=global.require,
delete global.require),req=function(e,t,r,i){var n,o,a=defContextName
;return isArray(e)||"string"==typeof e||(o=e,
isArray(t)?(e=t,t=r,r=i):e=[]),o&&o.context&&(a=o.context),
(n=getOwn(contexts,a))||(n=contexts[a]=req.s.newContext(a)),
o&&n.configure(o),n.require(e,t,r)},global.requirejs=req,req.config=function(e){
return req(e)},req.nextTick=void 0!==setTimeout?function(e){setTimeout(e,4)
}:function(e){e()
},global.require||(global.require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,
req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext
},req({}),each(["toUrl","undef","defined","specified"],(function(e){
req[e]=function(){var t=contexts[defContextName]
;return t.require[e].apply(t,arguments)}
})),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],
baseElement=document.getElementsByTagName("base")[0],
baseElement&&(head=s.head=baseElement.parentNode)),
req.onError=defaultOnError,req.createNode=function(e,t,r){
var i=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script")
;return i.type=e.scriptType||"text/javascript",i.charset="utf-8",i.async=!0,i
},req.load=function(e,t,r){var i,n=e&&e.config||{};if(isBrowser){
if(window.require_modules){var o=/^(\/.*?)(\?.*)*$/.exec(r);if(o){
var a=o[1],s=window.require_modules[a];if(s){eap_direct_exec={context:e,
moduleName:t};try{s(),e.completeLoad(t)}catch(u){
console.error("ERROR executing anon mod: ",u),
e.onError(makeError("scripterror","Error in direct eval of "+t,u,[t]))}return}}}
return(i=req.createNode(n,t,r)).setAttribute("data-requirecontext",e.contextName),
i.setAttribute("data-requiremodule",t),
!i.attachEvent||i.attachEvent.toString&&i.attachEvent.toString().indexOf("[native code")<0||isOpera?(i.addEventListener("load",e.onScriptLoad,!1),
i.addEventListener("error",e.onScriptError,!1)):(useInteractive=!0,
i.attachEvent("onreadystatechange",e.onScriptLoad)),
i.src=r,n.onNodeCreated&&n.onNodeCreated(i,n,t,r),
currentlyAddingScript=i,baseElement?head.insertBefore(i,baseElement):head.appendChild(i),
currentlyAddingScript=null,i}if(isWebWorker)try{
setTimeout((function(){}),0),importScripts(r),e.completeLoad(t)}catch(c){
e.onError(makeError("importscripts","importScripts failed for "+t+" at "+r,c,[t]))
}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),(function(e){
if(head||(head=e.parentNode),
dataMain=e.getAttribute("data-main"))return mainScript=dataMain,
cfg.baseUrl||-1!==mainScript.indexOf("!")||(src=mainScript.split("/"),
mainScript=src.pop(),
subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),
mainScript=mainScript.replace(jsSuffixRegExp,""),
req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),
cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0
})),global.define=function(e,t,r){var i,n
;"string"!=typeof e&&(r=t,t=e,e=null),isArray(t)||(r=t,
t=null),!t&&isFunction(r)&&(t=[],
r.length&&(r.toString().replace(commentRegExp,commentReplace).replace(cjsRequireRegExp,(function(e,r){
t.push(r)
})),t=(1===r.length?["require"]:["require","exports","module"]).concat(t))),
useInteractive&&(i=currentlyAddingScript||getInteractiveScript())&&(e||(e=i.getAttribute("data-requiremodule")),
n=contexts[i.getAttribute("data-requirecontext")]),
eap_direct_exec&&(n=eap_direct_exec.context,
e=eap_direct_exec.moduleName,eap_direct_exec=null),
n?(n.defQueue.push([e,t,r]),n.defQueueMap[e]=!0):globalDefQueue.push([e,t,r])
},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)
})(this,"undefined"==typeof setTimeout?void 0:setTimeout);