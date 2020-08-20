/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
!function(e,r){
"function"==typeof define&&define.amd?define(r):"object"==typeof module&&module.exports?module.exports=r():e.numeral=r()
}(this,(function(){var e,r,t={},n={},i={currentLocale:"en",zeroFormat:null,
nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},o={
currentLocale:i.currentLocale,zeroFormat:i.zeroFormat,nullFormat:i.nullFormat,
defaultFormat:i.defaultFormat,scalePercentBy100:i.scalePercentBy100}
;function a(e,r){this._input=e,this._value=r}return(e=function(n){var i,l,u,s
;if(e.isNumeral(n))i=n.value();else if(0===n||void 0===n)i=0;else if(null===n||r.isNaN(n))i=null;else if("string"==typeof n)if(o.zeroFormat&&n===o.zeroFormat)i=0;else if(o.nullFormat&&n===o.nullFormat||!n.replace(/[^0-9]+/g,"").length)i=null;else{
for(l in t)if((s="function"==typeof t[l].regexps.unformat?t[l].regexps.unformat():t[l].regexps.unformat)&&n.match(s)){
u=t[l].unformat;break}i=(u=u||e._.stringToNumber)(n)}else i=Number(n)||null
;return new a(n,i)}).version="2.0.6",e.isNumeral=function(e){
return e instanceof a},e._=r={numberToFormat:function(r,t,i){
var o,a,l,u,s,c,f,m,h=n[e.options.currentLocale],d=!1,b=!1,p="",g=1e12,v=1e9,_=1e6,y="",F=!1
;if(r=r||0,
l=Math.abs(r),e._.includes(t,"(")?(d=!0,t=t.replace(/[\(|\)]/g,"")):(e._.includes(t,"+")||e._.includes(t,"-"))&&(c=e._.includes(t,"+")?t.indexOf("+"):r<0?t.indexOf("-"):-1,
t=t.replace(/[\+|\-]/g,"")),
e._.includes(t,"a")&&(a=!!(a=t.match(/a(k|m|b|t)?/))&&a[1],
e._.includes(t," a")&&(p=" "),
t=t.replace(new RegExp(p+"a[kmbt]?"),""),l>=g&&!a||"t"===a?(p+=h.abbreviations.trillion,
r/=g):l<g&&l>=v&&!a||"b"===a?(p+=h.abbreviations.billion,
r/=v):l<v&&l>=_&&!a||"m"===a?(p+=h.abbreviations.million,
r/=_):(l<_&&l>=1e3&&!a||"k"===a)&&(p+=h.abbreviations.thousand,
r/=1e3)),e._.includes(t,"[.]")&&(b=!0,
t=t.replace("[.]",".")),u=r.toString().split(".")[0],
s=t.split(".")[1],f=t.indexOf(","),
o=(t.split(".")[0].split(",")[0].match(/0/g)||[]).length,
s?(e._.includes(s,"[")?(s=(s=s.replace("]","")).split("["),
y=e._.toFixed(r,s[0].length+s[1].length,i,s[1].length)):y=e._.toFixed(r,s.length,i),
u=y.split(".")[0],y=e._.includes(y,".")?h.delimiters.decimal+y.split(".")[1]:"",
b&&0===Number(y.slice(1))&&(y="")):u=e._.toFixed(r,0,i),
p&&!a&&Number(u)>=1e3&&p!==h.abbreviations.trillion)switch(u=String(Number(u)/1e3),
p){case h.abbreviations.thousand:p=h.abbreviations.million;break
;case h.abbreviations.million:p=h.abbreviations.billion;break
;case h.abbreviations.billion:p=h.abbreviations.trillion}
if(e._.includes(u,"-")&&(u=u.slice(1),
F=!0),u.length<o)for(var x=o-u.length;x>0;x--)u="0"+u
;return f>-1&&(u=u.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+h.delimiters.thousands)),
0===t.indexOf(".")&&(u=""),
m=u+y+(p||""),d?m=(d&&F?"(":"")+m+(d&&F?")":""):c>=0?m=0===c?(F?"-":"+")+m:m+(F?"-":"+"):F&&(m="-"+m),
m},stringToNumber:function(e){var r,t,i,a=n[o.currentLocale],l=e,u={thousand:3,
million:6,billion:9,trillion:12}
;if(o.zeroFormat&&e===o.zeroFormat)t=0;else if(o.nullFormat&&e===o.nullFormat||!e.replace(/[^0-9]+/g,"").length)t=null;else{
for(r in t=1,
"."!==a.delimiters.decimal&&(e=e.replace(/\./g,"").replace(a.delimiters.decimal,".")),
u)if(i=new RegExp("[^a-zA-Z]"+a.abbreviations[r]+"(?:\\)|(\\"+a.currency.symbol+")?(?:\\))?)?$"),
l.match(i)){t*=Math.pow(10,u[r]);break}
t*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,
e=e.replace(/[^0-9\.]+/g,""),t*=Number(e)}return t},isNaN:function(e){
return"number"==typeof e&&isNaN(e)},includes:function(e,r){
return-1!==e.indexOf(r)},insert:function(e,r,t){return e.slice(0,t)+r+e.slice(t)
},reduce:function(e,r){
if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined")
;if("function"!=typeof r)throw new TypeError(r+" is not a function")
;var t,n=Object(e),i=n.length>>>0,o=0
;if(3===arguments.length)t=arguments[2];else{for(;o<i&&!(o in n);)o++
;if(o>=i)throw new TypeError("Reduce of empty array with no initial value")
;t=n[o++]}for(;o<i;o++)o in n&&(t=r(t,n[o],o,n));return t},
multiplier:function(e){var r=e.toString().split(".")
;return r.length<2?1:Math.pow(10,r[1].length)},correctionFactor:function(){
var e=Array.prototype.slice.call(arguments);return e.reduce((function(e,t){
var n=r.multiplier(t);return e>n?e:n}),1)},toFixed:function(e,r,t,n){
var i,o,a,l,u=e.toString().split("."),s=r-(n||0)
;return i=2===u.length?Math.min(Math.max(u[1].length,s),r):s,
a=Math.pow(10,i),l=(t(e+"e+"+i)/a).toFixed(i),
n>r-i&&(o=new RegExp("\\.?0{1,"+(n-(r-i))+"}$"),l=l.replace(o,"")),l}
},e.options=o,e.formats=t,e.locales=n,e.locale=function(e){
return e&&(o.currentLocale=e.toLowerCase()),o.currentLocale
},e.localeData=function(e){if(!e)return n[o.currentLocale];if(e=e.toLowerCase(),
!n[e])throw new Error("Unknown locale : "+e);return n[e]},e.reset=function(){
for(var e in i)o[e]=i[e]},e.zeroFormat=function(e){
o.zeroFormat="string"==typeof e?e:null},e.nullFormat=function(e){
o.nullFormat="string"==typeof e?e:null},e.defaultFormat=function(e){
o.defaultFormat="string"==typeof e?e:"0.0"},e.register=function(e,r,t){
if(r=r.toLowerCase(),
this[e+"s"][r])throw new TypeError(r+" "+e+" already registered.")
;return this[e+"s"][r]=t,t},e.validate=function(r,t){var n,i,o,a,l,u,s,c
;if("string"!=typeof r&&(r+="",
console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",r)),
(r=r.trim()).match(/^\d+$/))return!0;if(""===r)return!1;try{s=e.localeData(t)
}catch(f){s=e.localeData(e.locale())}
return o=s.currency.symbol,l=s.abbreviations,
n=s.delimiters.decimal,i="."===s.delimiters.thousands?"\\.":s.delimiters.thousands,
(null===(c=r.match(/^[^\d]+/))||(r=r.substr(1),
c[0]===o))&&((null===(c=r.match(/[^\d]+$/))||(r=r.slice(0,-1),
c[0]===l.thousand||c[0]===l.million||c[0]===l.billion||c[0]===l.trillion))&&(u=new RegExp(i+"{2}"),
!r.match(/[^\d.,]/g)&&(!((a=r.split(n)).length>2)&&(a.length<2?!!a[0].match(/^\d+.*\d$/)&&!a[0].match(u):1===a[0].length?!!a[0].match(/^\d+$/)&&!a[0].match(u)&&!!a[1].match(/^\d+$/):!!a[0].match(/^\d+.*\d$/)&&!a[0].match(u)&&!!a[1].match(/^\d+$/)))))
},e.fn=a.prototype={clone:function(){return e(this)},format:function(r,n){
var i,a,l,u=this._value,s=r||o.defaultFormat
;if(n=n||Math.round,0===u&&null!==o.zeroFormat)a=o.zeroFormat;else if(null===u&&null!==o.nullFormat)a=o.nullFormat;else{
for(i in t)if(s.match(t[i].regexps.format)){l=t[i].format;break}
a=(l=l||e._.numberToFormat)(u,s,n)}return a},value:function(){return this._value
},input:function(){return this._input},set:function(e){
return this._value=Number(e),this},add:function(e){
var t=r.correctionFactor.call(null,this._value,e)
;return this._value=r.reduce([this._value,e],(function(e,r,n,i){
return e+Math.round(t*r)}),0)/t,this},subtract:function(e){
var t=r.correctionFactor.call(null,this._value,e)
;return this._value=r.reduce([e],(function(e,r,n,i){return e-Math.round(t*r)
}),Math.round(this._value*t))/t,this},multiply:function(e){
return this._value=r.reduce([this._value,e],(function(e,t,n,i){
var o=r.correctionFactor(e,t)
;return Math.round(e*o)*Math.round(t*o)/Math.round(o*o)}),1),this},
divide:function(e){
return this._value=r.reduce([this._value,e],(function(e,t,n,i){
var o=r.correctionFactor(e,t);return Math.round(e*o)/Math.round(t*o)})),this},
difference:function(r){return Math.abs(e(this._value).subtract(r).value())}
},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},
abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},
ordinal:function(e){var r=e%10
;return 1==~~(e%100/10)?"th":1===r?"st":2===r?"nd":3===r?"rd":"th"},currency:{
symbol:"$"}}),e.register("format","bps",{regexps:{format:/(BPS)/,
unformat:/(BPS)/},format:function(r,t,n){var i,o=e._.includes(t," BPS")?" ":""
;return r*=1e4,
t=t.replace(/\s?BPS/,""),i=e._.numberToFormat(r,t,n),e._.includes(i,")")?((i=i.split("")).splice(-1,0,o+"BPS"),
i=i.join("")):i=i+o+"BPS",i},unformat:function(r){
return+(1e-4*e._.stringToNumber(r)).toFixed(15)}}),function(){var r={base:1e3,
suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},t={base:1024,
suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]
},n=r.suffixes.concat(t.suffixes.filter((function(e){
return r.suffixes.indexOf(e)<0}))).join("|");n="("+n.replace("B","B(?!PS)")+")",
e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(n)
},format:function(n,i,o){
var a,l,u,s=e._.includes(i,"ib")?t:r,c=e._.includes(i," b")||e._.includes(i," ib")?" ":""
;for(i=i.replace(/\s?i?b/,""),
a=0;a<=s.suffixes.length;a++)if(l=Math.pow(s.base,a),
u=Math.pow(s.base,a+1),null===n||0===n||n>=l&&n<u){c+=s.suffixes[a],l>0&&(n/=l)
;break}return e._.numberToFormat(n,i,o)+c},unformat:function(n){
var i,o,a=e._.stringToNumber(n);if(a){for(i=r.suffixes.length-1;i>=0;i--){
if(e._.includes(n,r.suffixes[i])){o=Math.pow(r.base,i);break}
if(e._.includes(n,t.suffixes[i])){o=Math.pow(t.base,i);break}}a*=o||1}return a}
})}(),e.register("format","currency",{regexps:{format:/(\$)/},
format:function(r,t,n){var i,o,a=e.locales[e.options.currentLocale],l={
before:t.match(/^([\+|\-|\(|\s|\$]*)/)[0],
after:t.match(/([\+|\-|\)|\s|\$]*)$/)[0]}
;for(t=t.replace(/\s?\$\s?/,""),i=e._.numberToFormat(r,t,n),
r>=0?(l.before=l.before.replace(/[\-\(]/,""),
l.after=l.after.replace(/[\-\)]/,"")):r<0&&!e._.includes(l.before,"-")&&!e._.includes(l.before,"(")&&(l.before="-"+l.before),
o=0;o<l.before.length;o++)switch(l.before[o]){case"$":
i=e._.insert(i,a.currency.symbol,o);break;case" ":
i=e._.insert(i," ",o+a.currency.symbol.length-1)}
for(o=l.after.length-1;o>=0;o--)switch(l.after[o]){case"$":
i=o===l.after.length-1?i+a.currency.symbol:e._.insert(i,a.currency.symbol,-(l.after.length-(1+o)))
;break;case" ":
i=o===l.after.length-1?i+" ":e._.insert(i," ",-(l.after.length-(1+o)+a.currency.symbol.length-1))
}return i}}),e.register("format","exponential",{regexps:{format:/(e\+|e-)/,
unformat:/(e\+|e-)/},format:function(r,t,n){
var i=("number"!=typeof r||e._.isNaN(r)?"0e+0":r.toExponential()).split("e")
;return t=t.replace(/e[\+|\-]{1}0/,""),
e._.numberToFormat(Number(i[0]),t,n)+"e"+i[1]},unformat:function(r){
var t=e._.includes(r,"e+")?r.split("e+"):r.split("e-"),n=Number(t[0]),i=Number(t[1])
;return i=e._.includes(r,"e-")?i*=-1:i,
e._.reduce([n,Math.pow(10,i)],(function(r,t,n,i){var o=e._.correctionFactor(r,t)
;return r*o*(t*o)/(o*o)}),1)}}),e.register("format","ordinal",{regexps:{
format:/(o)/},format:function(r,t,n){
var i=e.locales[e.options.currentLocale],o=e._.includes(t," o")?" ":""
;return t=t.replace(/\s?o/,""),o+=i.ordinal(r),e._.numberToFormat(r,t,n)+o}
}),e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},
format:function(r,t,n){var i,o=e._.includes(t," %")?" ":""
;return e.options.scalePercentBy100&&(r*=100),
t=t.replace(/\s?\%/,""),i=e._.numberToFormat(r,t,n),
e._.includes(i,")")?((i=i.split("")).splice(-1,0,o+"%"),i=i.join("")):i=i+o+"%",
i},unformat:function(r){var t=e._.stringToNumber(r)
;return e.options.scalePercentBy100?.01*t:t}}),e.register("format","time",{
regexps:{format:/(:)/,unformat:/(:)/},format:function(e,r,t){
var n=Math.floor(e/60/60),i=Math.floor((e-60*n*60)/60),o=Math.round(e-60*n*60-60*i)
;return n+":"+(i<10?"0"+i:i)+":"+(o<10?"0"+o:o)},unformat:function(e){
var r=e.split(":"),t=0
;return 3===r.length?(t+=60*Number(r[0])*60,t+=60*Number(r[1]),
t+=Number(r[2])):2===r.length&&(t+=60*Number(r[0]),t+=Number(r[1])),Number(t)}
}),e}));