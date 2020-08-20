!function(t){
if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{
("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).dagreD3=t()
}}((function(){return function t(e,n,r){function i(a,u){if(!n[a]){if(!e[a]){
var c="function"==typeof require&&require;if(!u&&c)return c(a,!0)
;if(o)return o(a,!0);var f=new Error("Cannot find module '"+a+"'")
;throw f.code="MODULE_NOT_FOUND",f}var s=n[a]={exports:{}}
;e[a][0].call(s.exports,(function(t){return i(e[a][1][t]||t)
}),s,s.exports,t,e,n,r)}return n[a].exports}
for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a])
;return i}({1:[function(t,e,n){
/**
 * @license
 * Copyright (c) 2012-2013 Chris Pettitt
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
e.exports={graphlib:t("./lib/graphlib"),dagre:t("./lib/dagre"),
intersect:t("./lib/intersect"),render:t("./lib/render"),util:t("./lib/util"),
version:t("./lib/version")}},{"./lib/dagre":8,"./lib/graphlib":9,
"./lib/intersect":10,"./lib/render":25,"./lib/util":27,"./lib/version":28}],
2:[function(t,e,n){var r=t("./util");function i(t,e,n,i){
var o=t.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").style("stroke-width",1).style("stroke-dasharray","1,0")
;r.applyStyle(o,n[i+"Style"]),n[i+"Class"]&&o.attr("class",n[i+"Class"])}
e.exports={default:i,normal:i,vee:function(t,e,n,i){
var o=t.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 L 4 5 z").style("stroke-width",1).style("stroke-dasharray","1,0")
;r.applyStyle(o,n[i+"Style"]),n[i+"Class"]&&o.attr("class",n[i+"Class"])},
undirected:function(t,e,n,i){
var o=t.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 5 L 10 5").style("stroke-width",1).style("stroke-dasharray","1,0")
;r.applyStyle(o,n[i+"Style"]),n[i+"Class"]&&o.attr("class",n[i+"Class"])}}},{
"./util":27}],3:[function(t,e,n){
var r=t("./util"),i=t("./d3"),o=t("./label/add-label");e.exports=function(t,e){
var n,a=e.nodes().filter((function(t){return r.isSubgraph(e,t)
})),u=t.selectAll("g.cluster").data(a,(function(t){return t}))
;u.selectAll("*").remove(),
u.enter().append("g").attr("class","cluster").attr("id",(function(t){
return e.node(t).id
})).style("opacity",0),u=t.selectAll("g.cluster"),r.applyTransition(u,e).style("opacity",1),
u.each((function(t){var n=e.node(t),r=i.select(this)
;i.select(this).append("rect");var a=r.append("g").attr("class","label")
;o(a,n,n.clusterLabelPos)})),u.selectAll("rect").each((function(t){
var n=e.node(t),o=i.select(this);r.applyStyle(o,n.style)
})),n=u.exit?u.exit():u.selectAll(null)
;return r.applyTransition(n,e).style("opacity",0).remove(),u}},{"./d3":7,
"./label/add-label":18,"./util":27}],4:[function(t,e,n){"use strict"
;var r=t("./lodash"),i=t("./label/add-label"),o=t("./util"),a=t("./d3")
;e.exports=function(t,e){
var n,u=t.selectAll("g.edgeLabel").data(e.edges(),(function(t){
return o.edgeToId(t)})).classed("update",!0)
;u.exit().remove(),u.enter().append("g").classed("edgeLabel",!0).style("opacity",0),
(u=t.selectAll("g.edgeLabel")).each((function(t){var n=a.select(this)
;n.select(".label").remove()
;var o=e.edge(t),u=i(n,e.edge(t),0,0).classed("label",!0),c=u.node().getBBox()
;o.labelId&&u.attr("id",o.labelId),
r.has(o,"width")||(o.width=c.width),r.has(o,"height")||(o.height=c.height)
})),n=u.exit?u.exit():u.selectAll(null)
;return o.applyTransition(n,e).style("opacity",0).remove(),u}},{"./d3":7,
"./label/add-label":18,"./lodash":21,"./util":27}],5:[function(t,e,n){
"use strict"
;var r=t("./lodash"),i=t("./intersect/intersect-node"),o=t("./util"),a=t("./d3")
;function u(t,e){var n=(a.line||a.svg.line)().x((function(t){return t.x
})).y((function(t){return t.y}));return(n.curve||n.interpolate)(t.curve),n(e)}
e.exports=function(t,e,n){
var c=t.selectAll("g.edgePath").data(e.edges(),(function(t){return o.edgeToId(t)
})).classed("update",!0),f=function(t,e){
var n=t.enter().append("g").attr("class","edgePath").style("opacity",0)
;return n.append("path").attr("class","path").attr("d",(function(t){
var n=e.edge(t),i=e.node(t.v).elem
;return u(n,r.range(n.points.length).map((function(){return function(t){
var e=t.getBBox(),n=t.ownerSVGElement.getScreenCTM().inverse().multiply(t.getScreenCTM()).translate(e.width/2,e.height/2)
;return{x:n.e,y:n.f}}(i)})))})),n.append("defs"),n}(c,e);!function(t,e){
var n=t.exit();o.applyTransition(n,e).style("opacity",0).remove()}(c,e)
;var s=void 0!==c.merge?c.merge(f):c
;return o.applyTransition(s,e).style("opacity",1),s.each((function(t){
var n=a.select(this),r=e.edge(t)
;r.elem=this,r.id&&n.attr("id",r.id),o.applyClass(n,r.class,(n.classed("update")?"update ":"")+"edgePath")
})),s.selectAll("path.path").each((function(t){var n=e.edge(t)
;n.arrowheadId=r.uniqueId("arrowhead")
;var c=a.select(this).attr("marker-end",(function(){return"url("+function(t,e){
return t.split("#")[0]+"#"+e}(location.href,n.arrowheadId)+")"
})).style("fill","none");o.applyTransition(c,e).attr("d",(function(t){
return function(t,e){
var n=t.edge(e),r=t.node(e.v),o=t.node(e.w),a=n.points.slice(1,n.points.length-1)
;return a.unshift(i(r,a[0])),a.push(i(o,a[a.length-1])),u(n,a)}(e,t)
})),o.applyStyle(c,n.style)
})),s.selectAll("defs *").remove(),s.selectAll("defs").each((function(t){
var r=e.edge(t);(0,n[r.arrowhead])(a.select(this),r.arrowheadId,r,"arrowhead")
})),s}},{"./d3":7,"./intersect/intersect-node":14,"./lodash":21,"./util":27}],
6:[function(t,e,n){"use strict"
;var r=t("./lodash"),i=t("./label/add-label"),o=t("./util"),a=t("./d3")
;e.exports=function(t,e,n){var u,c=e.nodes().filter((function(t){
return!o.isSubgraph(e,t)})),f=t.selectAll("g.node").data(c,(function(t){return t
})).classed("update",!0)
;f.exit().remove(),f.enter().append("g").attr("class","node").style("opacity",0),
(f=t.selectAll("g.node")).each((function(t){var u=e.node(t),c=a.select(this)
;o.applyClass(c,u.class,(c.classed("update")?"update ":"")+"node"),
c.select("g.label").remove()
;var f=c.append("g").attr("class","label"),s=i(f,u),l=n[u.shape],h=r.pick(s.node().getBBox(),"width","height")
;u.elem=this,
u.id&&c.attr("id",u.id),u.labelId&&f.attr("id",u.labelId),r.has(u,"width")&&(h.width=u.width),
r.has(u,"height")&&(h.height=u.height),
h.width+=u.paddingLeft+u.paddingRight,h.height+=u.paddingTop+u.paddingBottom,
f.attr("transform","translate("+(u.paddingLeft-u.paddingRight)/2+","+(u.paddingTop-u.paddingBottom)/2+")")
;var d=a.select(this);d.select(".label-container").remove()
;var p=l(d,h,u).classed("label-container",!0);o.applyStyle(p,u.style)
;var v=p.node().getBBox();u.width=v.width,u.height=v.height
})),u=f.exit?f.exit():f.selectAll(null)
;return o.applyTransition(u,e).style("opacity",0).remove(),f}},{"./d3":7,
"./label/add-label":18,"./lodash":21,"./util":27}],7:[function(t,e,n){var r
;if(!r&&"function"==typeof t)try{r=t("d3")}catch(i){}
r||(r=window.d3),e.exports=r},{d3:60}],8:[function(t,e,n){var r
;if("function"==typeof t)try{r=t("dagre")}catch(i){}
r||(r=window.dagre),e.exports=r},{dagre:61}],9:[function(t,e,n){var r
;if("function"==typeof t)try{r=t("graphlib")}catch(i){}
r||(r=window.graphlib),e.exports=r},{graphlib:91}],10:[function(t,e,n){
e.exports={node:t("./intersect-node"),circle:t("./intersect-circle"),
ellipse:t("./intersect-ellipse"),polygon:t("./intersect-polygon"),
rect:t("./intersect-rect")}},{"./intersect-circle":11,"./intersect-ellipse":12,
"./intersect-node":14,"./intersect-polygon":15,"./intersect-rect":16}],
11:[function(t,e,n){var r=t("./intersect-ellipse");e.exports=function(t,e,n){
return r(t,e,e,n)}},{"./intersect-ellipse":12}],12:[function(t,e,n){
e.exports=function(t,e,n,r){
var i=t.x,o=t.y,a=i-r.x,u=o-r.y,c=Math.sqrt(e*e*u*u+n*n*a*a),f=Math.abs(e*n*a/c)
;r.x<i&&(f=-f);var s=Math.abs(e*n*u/c);r.y<o&&(s=-s);return{x:i+f,y:o+s}}},{}],
13:[function(t,e,n){function r(t,e){return t*e>0}e.exports=function(t,e,n,i){
var o,a,u,c,f,s,l,h,d,p,v,y,g
;if(o=e.y-t.y,u=t.x-e.x,f=e.x*t.y-t.x*e.y,d=o*n.x+u*n.y+f,
p=o*i.x+u*i.y+f,0!==d&&0!==p&&r(d,p))return
;if(a=i.y-n.y,c=n.x-i.x,s=i.x*n.y-n.x*i.y,
l=a*t.x+c*t.y+s,h=a*e.x+c*e.y+s,0!==l&&0!==h&&r(l,h))return
;if(0===(v=o*c-a*u))return;return y=Math.abs(v/2),{
x:(g=u*s-c*f)<0?(g-y)/v:(g+y)/v,y:(g=a*f-o*s)<0?(g-y)/v:(g+y)/v}}},{}],
14:[function(t,e,n){e.exports=function(t,e){return t.intersect(e)}},{}],
15:[function(t,e,n){var r=t("./intersect-line");e.exports=function(t,e,n){
var i=t.x,o=t.y,a=[],u=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY
;e.forEach((function(t){u=Math.min(u,t.x),c=Math.min(c,t.y)}))
;for(var f=i-t.width/2-u,s=o-t.height/2-c,l=0;l<e.length;l++){
var h=e[l],d=e[l<e.length-1?l+1:0],p=r(t,n,{x:f+h.x,y:s+h.y},{x:f+d.x,y:s+d.y})
;p&&a.push(p)}
if(!a.length)return console.log("NO INTERSECTION FOUND, RETURN NODE CENTER",t),t
;a.length>1&&a.sort((function(t,e){
var r=t.x-n.x,i=t.y-n.y,o=Math.sqrt(r*r+i*i),a=e.x-n.x,u=e.y-n.y,c=Math.sqrt(a*a+u*u)
;return o<c?-1:o===c?0:1}));return a[0]}},{"./intersect-line":13}],
16:[function(t,e,n){e.exports=function(t,e){
var n,r,i=t.x,o=t.y,a=e.x-i,u=e.y-o,c=t.width/2,f=t.height/2
;Math.abs(u)*c>Math.abs(a)*f?(u<0&&(f=-f),n=0===u?0:f*a/u,r=f):(a<0&&(c=-c),n=c,
r=0===a?0:c*u/a);return{x:i+n,y:o+r}}},{}],17:[function(t,e,n){
var r=t("../util");e.exports=function(t,e){
var n=t.append("foreignObject").attr("width","100000"),i=n.append("xhtml:div")
;i.attr("xmlns","http://www.w3.org/1999/xhtml");var o=e.label;switch(typeof o){
case"function":i.insert(o);break;case"object":i.insert((function(){return o}))
;break;default:i.html(o)}
r.applyStyle(i,e.labelStyle),i.style("display","inline-block"),
i.style("white-space","nowrap");var a=i.node().getBoundingClientRect()
;return n.attr("width",a.width).attr("height",a.height),n}},{"../util":27}],
18:[function(t,e,n){
var r=t("./add-text-label"),i=t("./add-html-label"),o=t("./add-svg-label")
;e.exports=function(t,e,n){var a=e.label,u=t.append("g")
;"svg"===e.labelType?o(u,e):"string"!=typeof a||"html"===e.labelType?i(u,e):r(u,e)
;var c,f=u.node().getBBox();switch(n){case"top":c=-e.height/2;break
;case"bottom":c=e.height/2-f.height;break;default:c=-f.height/2}
return u.attr("transform","translate("+-f.width/2+","+c+")"),u}},{
"./add-html-label":17,"./add-svg-label":19,"./add-text-label":20}],
19:[function(t,e,n){var r=t("../util");e.exports=function(t,e){var n=t
;return n.node().appendChild(e.label),r.applyStyle(n,e.labelStyle),n}},{
"../util":27}],20:[function(t,e,n){var r=t("../util");e.exports=function(t,e){
for(var n=t.append("text"),i=function(t){
for(var e,n="",r=!1,i=0;i<t.length;++i)if(e=t[i],r){switch(e){case"n":n+="\n"
;break;default:n+=e}r=!1}else"\\"===e?r=!0:n+=e;return n
}(e.label).split("\n"),o=0;o<i.length;o++)n.append("tspan").attr("xml:space","preserve").attr("dy","1em").attr("x","1").text(i[o])
;return r.applyStyle(n,e.labelStyle),n}},{"../util":27}],21:[function(t,e,n){
var r;if("function"==typeof t)try{r={defaults:t("lodash/defaults"),
each:t("lodash/each"),isFunction:t("lodash/isFunction"),
isPlainObject:t("lodash/isPlainObject"),pick:t("lodash/pick"),
has:t("lodash/has"),range:t("lodash/range"),uniqueId:t("lodash/uniqueId")}
}catch(i){}r||(r=window._),e.exports=r},{"lodash/defaults":289,
"lodash/each":290,"lodash/has":299,"lodash/isFunction":308,
"lodash/isPlainObject":313,"lodash/pick":331,"lodash/range":333,
"lodash/uniqueId":346}],22:[function(t,e,n){"use strict"
;var r=t("./util"),i=t("./d3");e.exports=function(t,e){
var n=t.filter((function(){return!i.select(this).classed("update")}))
;function o(t){var n=e.node(t);return"translate("+n.x+","+n.y+")"}
n.attr("transform",o),
r.applyTransition(t,e).style("opacity",1).attr("transform",o),
r.applyTransition(n.selectAll("rect"),e).attr("width",(function(t){
return e.node(t).width})).attr("height",(function(t){return e.node(t).height
})).attr("x",(function(t){return-e.node(t).width/2})).attr("y",(function(t){
return-e.node(t).height/2}))}},{"./d3":7,"./util":27}],23:[function(t,e,n){
"use strict";var r=t("./util"),i=t("./d3"),o=t("./lodash")
;e.exports=function(t,e){function n(t){var n=e.edge(t)
;return o.has(n,"x")?"translate("+n.x+","+n.y+")":""}t.filter((function(){
return!i.select(this).classed("update")
})).attr("transform",n),r.applyTransition(t,e).style("opacity",1).attr("transform",n)
}},{"./d3":7,"./lodash":21,"./util":27}],24:[function(t,e,n){"use strict"
;var r=t("./util"),i=t("./d3");e.exports=function(t,e){function n(t){
var n=e.node(t);return"translate("+n.x+","+n.y+")"}t.filter((function(){
return!i.select(this).classed("update")
})).attr("transform",n),r.applyTransition(t,e).style("opacity",1).attr("transform",n)
}},{"./d3":7,"./util":27}],25:[function(t,e,n){
var r=t("./lodash"),i=t("./d3"),o=t("./dagre").layout;e.exports=function(){
var e=t("./create-nodes"),n=t("./create-clusters"),i=t("./create-edge-labels"),f=t("./create-edge-paths"),s=t("./position-nodes"),l=t("./position-edge-labels"),h=t("./position-clusters"),d=t("./shapes"),p=t("./arrows"),v=function(t,v){
!function(t){t.nodes().forEach((function(e){var n=t.node(e)
;r.has(n,"label")||t.children(e).length||(n.label=e),
r.has(n,"paddingX")&&r.defaults(n,{paddingLeft:n.paddingX,
paddingRight:n.paddingX}),r.has(n,"paddingY")&&r.defaults(n,{
paddingTop:n.paddingY,paddingBottom:n.paddingY
}),r.has(n,"padding")&&r.defaults(n,{paddingLeft:n.padding,
paddingRight:n.padding,paddingTop:n.padding,paddingBottom:n.padding
}),r.defaults(n,a),
r.each(["paddingLeft","paddingRight","paddingTop","paddingBottom"],(function(t){
n[t]=Number(n[t])
})),r.has(n,"width")&&(n._prevWidth=n.width),r.has(n,"height")&&(n._prevHeight=n.height)
})),t.edges().forEach((function(e){var n=t.edge(e)
;r.has(n,"label")||(n.label=""),r.defaults(n,u)}))}(v)
;var y=c(t,"output"),g=c(y,"clusters"),b=c(y,"edgePaths"),_=i(c(y,"edgeLabels"),v),m=e(c(y,"nodes"),v,d)
;o(v),s(m,v),l(_,v),f(b,v,p);var x=n(g,v);h(x,v),function(t){
r.each(t.nodes(),(function(e){var n=t.node(e)
;r.has(n,"_prevWidth")?n.width=n._prevWidth:delete n.width,
r.has(n,"_prevHeight")?n.height=n._prevHeight:delete n.height,
delete n._prevWidth,delete n._prevHeight}))}(v)}
;return v.createNodes=function(t){return arguments.length?(e=t,v):e
},v.createClusters=function(t){return arguments.length?(n=t,v):n
},v.createEdgeLabels=function(t){return arguments.length?(i=t,v):i
},v.createEdgePaths=function(t){return arguments.length?(f=t,v):f
},v.shapes=function(t){return arguments.length?(d=t,v):d},v.arrows=function(t){
return arguments.length?(p=t,v):p},v};var a={paddingLeft:10,paddingRight:10,
paddingTop:10,paddingBottom:10,rx:0,ry:0,shape:"rect"},u={arrowhead:"normal",
curve:i.curveLinear};function c(t,e){var n=t.select("g."+e)
;return n.empty()&&(n=t.append("g").attr("class",e)),n}},{"./arrows":2,
"./create-clusters":3,"./create-edge-labels":4,"./create-edge-paths":5,
"./create-nodes":6,"./d3":7,"./dagre":8,"./lodash":21,"./position-clusters":22,
"./position-edge-labels":23,"./position-nodes":24,"./shapes":26}],
26:[function(t,e,n){"use strict"
;var r=t("./intersect/intersect-rect"),i=t("./intersect/intersect-ellipse"),o=t("./intersect/intersect-circle"),a=t("./intersect/intersect-polygon")
;e.exports={rect:function(t,e,n){
var i=t.insert("rect",":first-child").attr("rx",n.rx).attr("ry",n.ry).attr("x",-e.width/2).attr("y",-e.height/2).attr("width",e.width).attr("height",e.height)
;return n.intersect=function(t){return r(n,t)},i},ellipse:function(t,e,n){
var r=e.width/2,o=e.height/2,a=t.insert("ellipse",":first-child").attr("x",-e.width/2).attr("y",-e.height/2).attr("rx",r).attr("ry",o)
;return n.intersect=function(t){return i(n,r,o,t)},a},circle:function(t,e,n){
var r=Math.max(e.width,e.height)/2,i=t.insert("circle",":first-child").attr("x",-e.width/2).attr("y",-e.height/2).attr("r",r)
;return n.intersect=function(t){return o(n,r,t)},i},diamond:function(t,e,n){
var r=e.width*Math.SQRT2/2,i=e.height*Math.SQRT2/2,o=[{x:0,y:-i},{x:-r,y:0},{
x:0,y:i},{x:r,y:0
}],u=t.insert("polygon",":first-child").attr("points",o.map((function(t){
return t.x+","+t.y})).join(" "));return n.intersect=function(t){return a(n,o,t)
},u}}},{"./intersect/intersect-circle":11,"./intersect/intersect-ellipse":12,
"./intersect/intersect-polygon":15,"./intersect/intersect-rect":16}],
27:[function(t,e,n){var r=t("./lodash");e.exports={isSubgraph:function(t,e){
return!!t.children(e).length},edgeToId:function(t){
return o(t.v)+":"+o(t.w)+":"+o(t.name)},applyStyle:function(t,e){
e&&t.attr("style",e)},applyClass:function(t,e,n){
e&&t.attr("class",e).attr("class",n+" "+t.attr("class"))},
applyTransition:function(t,e){var n=e.graph();if(r.isPlainObject(n)){
var i=n.transition;if(r.isFunction(i))return i(t)}return t}};var i=/:/g
;function o(t){return t?String(t).replace(i,"\\:"):""}},{"./lodash":21}],
28:[function(t,e,n){e.exports="0.6.4"},{}],29:[function(t,e,n){!function(t,r){
r("object"==typeof n&&void 0!==e?n:t.d3=t.d3||{})}(this,(function(t){
"use strict";function e(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function n(t){
return 1===t.length&&(t=function(t){return function(n,r){return e(t(n),r)}}(t)),
{left:function(e,n,r,i){for(null==r&&(r=0),null==i&&(i=e.length);r<i;){
var o=r+i>>>1;t(e[o],n)<0?r=o+1:i=o}return r},right:function(e,n,r,i){
for(null==r&&(r=0),null==i&&(i=e.length);r<i;){var o=r+i>>>1
;t(e[o],n)>0?i=o:r=o+1}return r}}}var r=n(e),i=r.right,o=r.left;function a(t,e){
return[t,e]}function u(t){return null===t?NaN:+t}function c(t,e){
var n,r,i=t.length,o=0,a=-1,c=0,f=0
;if(null==e)for(;++a<i;)isNaN(n=u(t[a]))||(f+=(r=n-c)*(n-(c+=r/++o)));else for(;++a<i;)isNaN(n=u(e(t[a],a,t)))||(f+=(r=n-c)*(n-(c+=r/++o)))
;if(o>1)return f/(o-1)}function f(t,e){var n=c(t,e);return n?Math.sqrt(n):n}
function s(t,e){var n,r,i,o=t.length,a=-1;if(null==e){
for(;++a<o;)if(null!=(n=t[a])&&n>=n)for(r=i=n;++a<o;)null!=(n=t[a])&&(r>n&&(r=n),
i<n&&(i=n))
}else for(;++a<o;)if(null!=(n=e(t[a],a,t))&&n>=n)for(r=i=n;++a<o;)null!=(n=e(t[a],a,t))&&(r>n&&(r=n),
i<n&&(i=n));return[r,i]}var l=Array.prototype,h=l.slice,d=l.map;function p(t){
return function(){return t}}function v(t){return t}function y(t,e,n){
t=+t,e=+e,n=(i=arguments.length)<2?(e=t,t=0,1):i<3?1:+n
;for(var r=-1,i=0|Math.max(0,Math.ceil((e-t)/n)),o=new Array(i);++r<i;)o[r]=t+r*n
;return o}var g=Math.sqrt(50),b=Math.sqrt(10),_=Math.sqrt(2);function m(t,e,n){
var r=(e-t)/Math.max(0,n),i=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,i)
;return i>=0?(o>=g?10:o>=b?5:o>=_?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=g?10:o>=b?5:o>=_?2:1)
}function x(t,e,n){
var r=Math.abs(e-t)/Math.max(0,n),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i
;return o>=g?i*=10:o>=b?i*=5:o>=_&&(i*=2),e<t?-i:i}function w(t){
return Math.ceil(Math.log(t.length)/Math.LN2)+1}function M(t,e,n){
if(null==n&&(n=u),r=t.length){if((e=+e)<=0||r<2)return+n(t[0],0,t)
;if(e>=1)return+n(t[r-1],r-1,t);var r,i=(r-1)*e,o=Math.floor(i),a=+n(t[o],o,t)
;return a+(+n(t[o+1],o+1,t)-a)*(i-o)}}function E(t,e){var n,r,i=t.length,o=-1
;if(null==e){
for(;++o<i;)if(null!=(n=t[o])&&n>=n)for(r=n;++o<i;)null!=(n=t[o])&&r>n&&(r=n)
}else for(;++o<i;)if(null!=(n=e(t[o],o,t))&&n>=n)for(r=n;++o<i;)null!=(n=e(t[o],o,t))&&r>n&&(r=n)
;return r}function k(t){if(!(i=t.length))return[]
;for(var e=-1,n=E(t,A),r=new Array(n);++e<n;)for(var i,o=-1,a=r[e]=new Array(i);++o<i;)a[o]=t[o][e]
;return r}function A(t){return t.length}
t.bisect=i,t.bisectRight=i,t.bisectLeft=o,
t.ascending=e,t.bisector=n,t.cross=function(t,e,n){
var r,i,o,u,c=t.length,f=e.length,s=new Array(c*f)
;for(null==n&&(n=a),r=o=0;r<c;++r)for(u=t[r],i=0;i<f;++i,++o)s[o]=n(u,e[i])
;return s},t.descending=function(t,e){return e<t?-1:e>t?1:e>=t?0:NaN
},t.deviation=f,t.extent=s,t.histogram=function(){var t=v,e=s,n=w;function r(r){
var o,a,u=r.length,c=new Array(u);for(o=0;o<u;++o)c[o]=t(r[o],o,r)
;var f=e(c),s=f[0],l=f[1],h=n(c,s,l)
;Array.isArray(h)||(h=x(s,l,h),h=y(Math.ceil(s/h)*h,l,h))
;for(var d=h.length;h[0]<=s;)h.shift(),--d;for(;h[d-1]>l;)h.pop(),--d
;var p,v=new Array(d+1)
;for(o=0;o<=d;++o)(p=v[o]=[]).x0=o>0?h[o-1]:s,p.x1=o<d?h[o]:l
;for(o=0;o<u;++o)s<=(a=c[o])&&a<=l&&v[i(h,a,0,d)].push(r[o]);return v}
return r.value=function(e){
return arguments.length?(t="function"==typeof e?e:p(e),r):t
},r.domain=function(t){
return arguments.length?(e="function"==typeof t?t:p([t[0],t[1]]),r):e
},r.thresholds=function(t){
return arguments.length?(n="function"==typeof t?t:Array.isArray(t)?p(h.call(t)):p(t),
r):n},r},t.thresholdFreedmanDiaconis=function(t,n,r){
return t=d.call(t,u).sort(e),
Math.ceil((r-n)/(2*(M(t,.75)-M(t,.25))*Math.pow(t.length,-1/3)))
},t.thresholdScott=function(t,e,n){
return Math.ceil((n-e)/(3.5*f(t)*Math.pow(t.length,-1/3)))
},t.thresholdSturges=w,t.max=function(t,e){var n,r,i=t.length,o=-1;if(null==e){
for(;++o<i;)if(null!=(n=t[o])&&n>=n)for(r=n;++o<i;)null!=(n=t[o])&&n>r&&(r=n)
}else for(;++o<i;)if(null!=(n=e(t[o],o,t))&&n>=n)for(r=n;++o<i;)null!=(n=e(t[o],o,t))&&n>r&&(r=n)
;return r},t.mean=function(t,e){var n,r=t.length,i=r,o=-1,a=0
;if(null==e)for(;++o<r;)isNaN(n=u(t[o]))?--i:a+=n;else for(;++o<r;)isNaN(n=u(e(t[o],o,t)))?--i:a+=n
;if(i)return a/i},t.median=function(t,n){var r,i=t.length,o=-1,a=[]
;if(null==n)for(;++o<i;)isNaN(r=u(t[o]))||a.push(r);else for(;++o<i;)isNaN(r=u(n(t[o],o,t)))||a.push(r)
;return M(a.sort(e),.5)},t.merge=function(t){
for(var e,n,r,i=t.length,o=-1,a=0;++o<i;)a+=t[o].length
;for(n=new Array(a);--i>=0;)for(e=(r=t[i]).length;--e>=0;)n[--a]=r[e];return n},
t.min=E,t.pairs=function(t,e){null==e&&(e=a)
;for(var n=0,r=t.length-1,i=t[0],o=new Array(r<0?0:r);n<r;)o[n]=e(i,i=t[++n])
;return o},t.permute=function(t,e){
for(var n=e.length,r=new Array(n);n--;)r[n]=t[e[n]];return r
},t.quantile=M,t.range=y,t.scan=function(t,n){if(r=t.length){
var r,i,o=0,a=0,u=t[a]
;for(null==n&&(n=e);++o<r;)(n(i=t[o],u)<0||0!==n(u,u))&&(u=i,a=o)
;return 0===n(u,u)?a:void 0}},t.shuffle=function(t,e,n){
for(var r,i,o=(null==n?t.length:n)-(e=null==e?0:+e);o;)i=Math.random()*o--|0,
r=t[o+e],t[o+e]=t[i+e],t[i+e]=r;return t},t.sum=function(t,e){
var n,r=t.length,i=-1,o=0
;if(null==e)for(;++i<r;)(n=+t[i])&&(o+=n);else for(;++i<r;)(n=+e(t[i],i,t))&&(o+=n)
;return o},t.ticks=function(t,e,n){var r,i,o,a,u=-1
;if(n=+n,(t=+t)===(e=+e)&&n>0)return[t]
;if((r=e<t)&&(i=t,t=e,e=i),0===(a=m(t,e,n))||!isFinite(a))return[]
;if(a>0)for(t=Math.ceil(t/a),
e=Math.floor(e/a),o=new Array(i=Math.ceil(e-t+1));++u<i;)o[u]=(t+u)*a;else for(t=Math.floor(t*a),
e=Math.ceil(e*a),o=new Array(i=Math.ceil(t-e+1));++u<i;)o[u]=(t-u)/a
;return r&&o.reverse(),o
},t.tickIncrement=m,t.tickStep=x,t.transpose=k,t.variance=c,t.zip=function(){
return k(arguments)},Object.defineProperty(t,"__esModule",{value:!0})}))},{}],
30:[function(t,e,n){!function(t,r){
r("object"==typeof n&&void 0!==e?n:t.d3=t.d3||{})}(this,(function(t){
"use strict";var e=Array.prototype.slice;function n(t){return t}var r=1e-6
;function i(t){return"translate("+(t+.5)+",0)"}function o(t){
return"translate(0,"+(t+.5)+")"}function a(t){return function(e){return+t(e)}}
function u(t){var e=Math.max(0,t.bandwidth()-1)/2
;return t.round()&&(e=Math.round(e)),function(n){return+t(n)+e}}function c(){
return!this.__axis}function f(t,f){
var s=[],l=null,h=null,d=6,p=6,v=3,y=1===t||4===t?-1:1,g=4===t||2===t?"x":"y",b=1===t||3===t?i:o
;function _(e){
var i=null==l?f.ticks?f.ticks.apply(f,s):f.domain():l,o=null==h?f.tickFormat?f.tickFormat.apply(f,s):n:h,_=Math.max(d,0)+v,m=f.range(),x=+m[0]+.5,w=+m[m.length-1]+.5,M=(f.bandwidth?u:a)(f.copy()),E=e.selection?e.selection():e,k=E.selectAll(".domain").data([null]),A=E.selectAll(".tick").data(i,f).order(),S=A.exit(),j=A.enter().append("g").attr("class","tick"),N=A.select("line"),T=A.select("text")
;k=k.merge(k.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),
A=A.merge(j),
N=N.merge(j.append("line").attr("stroke","currentColor").attr(g+"2",y*d)),
T=T.merge(j.append("text").attr("fill","currentColor").attr(g,y*_).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),
e!==E&&(k=k.transition(e),A=A.transition(e),N=N.transition(e),T=T.transition(e),
S=S.transition(e).attr("opacity",r).attr("transform",(function(t){
return isFinite(t=M(t))?b(t):this.getAttribute("transform")
})),j.attr("opacity",r).attr("transform",(function(t){
var e=this.parentNode.__axis;return b(e&&isFinite(e=e(t))?e:M(t))
}))),S.remove(),
k.attr("d",4===t||2==t?p?"M"+y*p+","+x+"H0.5V"+w+"H"+y*p:"M0.5,"+x+"V"+w:p?"M"+x+","+y*p+"V0.5H"+w+"V"+y*p:"M"+x+",0.5H"+w),
A.attr("opacity",1).attr("transform",(function(t){return b(M(t))
})),N.attr(g+"2",y*d),
T.attr(g,y*_).text(o),E.filter(c).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),
E.each((function(){this.__axis=M}))}return _.scale=function(t){
return arguments.length?(f=t,_):f},_.ticks=function(){
return s=e.call(arguments),_},_.tickArguments=function(t){
return arguments.length?(s=null==t?[]:e.call(t),_):s.slice()
},_.tickValues=function(t){
return arguments.length?(l=null==t?null:e.call(t),_):l&&l.slice()
},_.tickFormat=function(t){return arguments.length?(h=t,_):h
},_.tickSize=function(t){return arguments.length?(d=p=+t,_):d
},_.tickSizeInner=function(t){return arguments.length?(d=+t,_):d
},_.tickSizeOuter=function(t){return arguments.length?(p=+t,_):p
},_.tickPadding=function(t){return arguments.length?(v=+t,_):v},_}
t.axisTop=function(t){return f(1,t)},t.axisRight=function(t){return f(2,t)
},t.axisBottom=function(t){return f(3,t)},t.axisLeft=function(t){return f(4,t)},
Object.defineProperty(t,"__esModule",{value:!0})}))},{}],31:[function(t,e,n){
!function(r,i){
"object"==typeof n&&void 0!==e?i(n,t("d3-dispatch"),t("d3-drag"),t("d3-interpolate"),t("d3-selection"),t("d3-transition")):i((r=r||self).d3=r.d3||{},r.d3,r.d3,r.d3,r.d3,r.d3)
}(this,(function(t,e,n,r,i,o){"use strict";function a(t){return function(){
return t}}function u(t,e,n){this.target=t,this.type=e,this.selection=n}
function c(){i.event.stopImmediatePropagation()}function f(){
i.event.preventDefault(),i.event.stopImmediatePropagation()}var s={name:"drag"
},l={name:"space"},h={name:"handle"},d={name:"center"};function p(t){
return[+t[0],+t[1]]}function v(t){return[p(t[0]),p(t[1])]}function y(t){
return function(e){return i.touch(e,i.event.touches,t)}}var g={name:"x",
handles:["w","e"].map(k),input:function(t,e){
return null==t?null:[[+t[0],e[0][1]],[+t[1],e[1][1]]]},output:function(t){
return t&&[t[0][0],t[1][0]]}},b={name:"y",handles:["n","s"].map(k),
input:function(t,e){return null==t?null:[[e[0][0],+t[0]],[e[1][0],+t[1]]]},
output:function(t){return t&&[t[0][1],t[1][1]]}},_={name:"xy",
handles:["n","w","e","s","nw","ne","sw","se"].map(k),input:function(t){
return null==t?null:v(t)},output:function(t){return t}},m={overlay:"crosshair",
selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",
nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},x={e:"w",
w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},w={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",
sw:"nw"},M={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1
},E={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1}
;function k(t){return{type:t}}function A(){
return!i.event.ctrlKey&&!i.event.button}function S(){
var t=this.ownerSVGElement||this
;return t.hasAttribute("viewBox")?[[(t=t.viewBox.baseVal).x,t.y],[t.x+t.width,t.y+t.height]]:[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]
}function j(){return navigator.maxTouchPoints||"ontouchstart"in this}
function N(t){for(;!t.__brush;)if(!(t=t.parentNode))return;return t.__brush}
function T(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}function C(t){
var p,_=S,C=A,O=j,P=!0,I=e.dispatch("start","brush","end"),L=6;function R(e){
var n=e.property("__brush",Y).selectAll(".overlay").data([k("overlay")])
;n.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",m.overlay).merge(n).each((function(){
var t=N(this).extent
;i.select(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])
})),
e.selectAll(".selection").data([k("selection")]).enter().append("rect").attr("class","selection").attr("cursor",m.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges")
;var r=e.selectAll(".handle").data(t.handles,(function(t){return t.type}))
;r.exit().remove(),r.enter().append("rect").attr("class",(function(t){
return"handle handle--"+t.type})).attr("cursor",(function(t){return m[t.type]
})),
e.each(z).attr("fill","none").attr("pointer-events","all").on("mousedown.brush",B).filter(O).on("touchstart.brush",B).on("touchmove.brush",q).on("touchend.brush touchcancel.brush",U).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")
}function z(){var t=i.select(this),e=N(this).selection
;e?(t.selectAll(".selection").style("display",null).attr("x",e[0][0]).attr("y",e[0][1]).attr("width",e[1][0]-e[0][0]).attr("height",e[1][1]-e[0][1]),
t.selectAll(".handle").style("display",null).attr("x",(function(t){
return"e"===t.type[t.type.length-1]?e[1][0]-L/2:e[0][0]-L/2
})).attr("y",(function(t){return"s"===t.type[0]?e[1][1]-L/2:e[0][1]-L/2
})).attr("width",(function(t){
return"n"===t.type||"s"===t.type?e[1][0]-e[0][0]+L:L
})).attr("height",(function(t){
return"e"===t.type||"w"===t.type?e[1][1]-e[0][1]+L:L
}))):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)
}function D(t,e,n){return!n&&t.__brush.emitter||new F(t,e)}function F(t,e){
this.that=t,this.args=e,this.state=t.__brush,this.active=0}function B(){
if((!p||i.event.touches)&&C.apply(this,arguments)){
var e,r,a,u,v,_,k,A,S,j,O,I=this,L=i.event.target.__data__.type,R="selection"===(P&&i.event.metaKey?L="overlay":L)?s:P&&i.event.altKey?d:h,F=t===b?null:M[L],B=t===g?null:E[L],q=N(I),U=q.extent,Y=q.selection,G=U[0][0],V=U[0][1],H=U[1][0],K=U[1][1],X=0,W=0,$=F&&B&&P&&i.event.shiftKey,Z=i.event.touches?y(i.event.changedTouches[0].identifier):i.mouse,Q=Z(I),J=Q,tt=D(I,arguments,!0).beforestart()
;"overlay"===L?(Y&&(S=!0),
q.selection=Y=[[e=t===b?G:Q[0],a=t===g?V:Q[1]],[v=t===b?H:e,k=t===g?K:a]]):(e=Y[0][0],
a=Y[0][1],v=Y[1][0],k=Y[1][1]),r=e,u=a,_=v,A=k
;var et=i.select(I).attr("pointer-events","none"),nt=et.selectAll(".overlay").attr("cursor",m[L])
;if(i.event.touches)tt.moved=it,tt.ended=at;else{
var rt=i.select(i.event.view).on("mousemove.brush",it,!0).on("mouseup.brush",at,!0)
;P&&rt.on("keydown.brush",ut,!0).on("keyup.brush",ct,!0),
n.dragDisable(i.event.view)}c(),o.interrupt(I),z.call(I),tt.start()}
function it(){var t=Z(I)
;!$||j||O||(Math.abs(t[0]-J[0])>Math.abs(t[1]-J[1])?O=!0:j=!0),J=t,S=!0,f(),ot()
}function ot(){var t;switch(X=J[0]-Q[0],W=J[1]-Q[1],R){case l:case s:
F&&(X=Math.max(G-e,Math.min(H-v,X)),
r=e+X,_=v+X),B&&(W=Math.max(V-a,Math.min(K-k,W)),u=a+W,A=k+W);break;case h:
F<0?(X=Math.max(G-e,Math.min(H-e,X)),
r=e+X,_=v):F>0&&(X=Math.max(G-v,Math.min(H-v,X)),
r=e,_=v+X),B<0?(W=Math.max(V-a,Math.min(K-a,W)),
u=a+W,A=k):B>0&&(W=Math.max(V-k,Math.min(K-k,W)),u=a,A=k+W);break;case d:
F&&(r=Math.max(G,Math.min(H,e-X*F)),
_=Math.max(G,Math.min(H,v+X*F))),B&&(u=Math.max(V,Math.min(K,a-W*B)),
A=Math.max(V,Math.min(K,k+W*B)))}
_<r&&(F*=-1,t=e,e=v,v=t,t=r,r=_,_=t,L in x&&nt.attr("cursor",m[L=x[L]])),
A<u&&(B*=-1,
t=a,a=k,k=t,t=u,u=A,A=t,L in w&&nt.attr("cursor",m[L=w[L]])),q.selection&&(Y=q.selection),
j&&(r=Y[0][0],
_=Y[1][0]),O&&(u=Y[0][1],A=Y[1][1]),Y[0][0]===r&&Y[0][1]===u&&Y[1][0]===_&&Y[1][1]===A||(q.selection=[[r,u],[_,A]],
z.call(I),tt.brush())}function at(){if(c(),i.event.touches){
if(i.event.touches.length)return;p&&clearTimeout(p),p=setTimeout((function(){
p=null}),500)
}else n.dragEnable(i.event.view,S),rt.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null)
;et.attr("pointer-events","all"),
nt.attr("cursor",m.overlay),q.selection&&(Y=q.selection),
T(Y)&&(q.selection=null,z.call(I)),tt.end()}function ut(){
switch(i.event.keyCode){case 16:$=F&&B;break;case 18:
R===h&&(F&&(v=_-X*F,e=r+X*F),B&&(k=A-W*B,a=u+W*B),R=d,ot());break;case 32:
R!==h&&R!==d||(F<0?v=_-X:F>0&&(e=r-X),
B<0?k=A-W:B>0&&(a=u-W),R=l,nt.attr("cursor",m.selection),ot());break;default:
return}f()}function ct(){switch(i.event.keyCode){case 16:$&&(j=O=$=!1,ot())
;break;case 18:R===d&&(F<0?v=_:F>0&&(e=r),B<0?k=A:B>0&&(a=u),R=h,ot());break
;case 32:
R===l&&(i.event.altKey?(F&&(v=_-X*F,e=r+X*F),B&&(k=A-W*B,a=u+W*B),R=d):(F<0?v=_:F>0&&(e=r),
B<0?k=A:B>0&&(a=u),R=h),nt.attr("cursor",m[L]),ot());break;default:return}f()}}
function q(){D(this,arguments).moved()}function U(){D(this,arguments).ended()}
function Y(){var e=this.__brush||{selection:null}
;return e.extent=v(_.apply(this,arguments)),e.dim=t,e}
return R.move=function(e,n){e.selection?e.on("start.brush",(function(){
D(this,arguments).beforestart().start()
})).on("interrupt.brush end.brush",(function(){D(this,arguments).end()
})).tween("brush",(function(){
var e=this,i=e.__brush,o=D(e,arguments),a=i.selection,u=t.input("function"==typeof n?n.apply(this,arguments):n,i.extent),c=r.interpolate(a,u)
;function f(t){i.selection=1===t&&null===u?null:c(t),z.call(e),o.brush()}
return null!==a&&null!==u?f:f(1)})):e.each((function(){
var e=this,r=arguments,i=e.__brush,a=t.input("function"==typeof n?n.apply(e,r):n,i.extent),u=D(e,r).beforestart()
;o.interrupt(e),i.selection=null===a?null:a,z.call(e),u.start().brush().end()}))
},R.clear=function(t){R.move(t,null)},F.prototype={beforestart:function(){
return 1==++this.active&&(this.state.emitter=this,this.starting=!0),this},
start:function(){
return this.starting?(this.starting=!1,this.emit("start")):this.emit("brush"),
this},brush:function(){return this.emit("brush"),this},end:function(){
return 0==--this.active&&(delete this.state.emitter,this.emit("end")),this},
emit:function(e){
i.customEvent(new u(R,e,t.output(this.state.selection)),I.apply,I,[e,this.that,this.args])
}},R.extent=function(t){
return arguments.length?(_="function"==typeof t?t:a(v(t)),R):_
},R.filter=function(t){return arguments.length?(C="function"==typeof t?t:a(!!t),
R):C},R.touchable=function(t){
return arguments.length?(O="function"==typeof t?t:a(!!t),R):O
},R.handleSize=function(t){return arguments.length?(L=+t,R):L
},R.keyModifiers=function(t){return arguments.length?(P=!!t,R):P
},R.on=function(){var t=I.on.apply(I,arguments);return t===I?R:t},R}
t.brush=function(){return C(_)},t.brushSelection=function(t){var e=t.__brush
;return e?e.dim.output(e.selection):null},t.brushX=function(){return C(g)
},t.brushY=function(){return C(b)},Object.defineProperty(t,"__esModule",{
value:!0})}))},{"d3-dispatch":36,"d3-drag":37,"d3-interpolate":45,
"d3-selection":52,"d3-transition":57}],32:[function(t,e,n){!function(r,i){
"object"==typeof n&&void 0!==e?i(n,t("d3-array"),t("d3-path")):i(r.d3=r.d3||{},r.d3,r.d3)
}(this,(function(t,e,n){"use strict"
;var r=Math.cos,i=Math.sin,o=Math.PI,a=o/2,u=2*o,c=Math.max;function f(t){
return function(e,n){
return t(e.source.value+e.target.value,n.source.value+n.target.value)}}
var s=Array.prototype.slice;function l(t){return function(){return t}}
function h(t){return t.source}function d(t){return t.target}function p(t){
return t.radius}function v(t){return t.startAngle}function y(t){
return t.endAngle}t.chord=function(){var t=0,n=null,r=null,i=null;function o(o){
var a,f,s,l,h,d,p=o.length,v=[],y=e.range(p),g=[],b=[],_=b.groups=new Array(p),m=new Array(p*p)
;for(a=0,h=-1;++h<p;){for(f=0,d=-1;++d<p;)f+=o[h][d]
;v.push(f),g.push(e.range(p)),a+=f}for(n&&y.sort((function(t,e){
return n(v[t],v[e])})),r&&g.forEach((function(t,e){t.sort((function(t,n){
return r(o[e][t],o[e][n])}))})),l=(a=c(0,u-t*p)/a)?t:u/p,f=0,h=-1;++h<p;){
for(s=f,d=-1;++d<p;){var x=y[h],w=g[x][d],M=o[x][w],E=f,k=f+=M*a;m[w*p+x]={
index:x,subindex:w,startAngle:E,endAngle:k,value:M}}_[x]={index:x,startAngle:s,
endAngle:f,value:v[x]},f+=l}for(h=-1;++h<p;)for(d=h-1;++d<p;){
var A=m[d*p+h],S=m[h*p+d];(A.value||S.value)&&b.push(A.value<S.value?{source:S,
target:A}:{source:A,target:S})}return i?b.sort(i):b}
return o.padAngle=function(e){return arguments.length?(t=c(0,e),o):t
},o.sortGroups=function(t){return arguments.length?(n=t,o):n
},o.sortSubgroups=function(t){return arguments.length?(r=t,o):r
},o.sortChords=function(t){return arguments.length?(null==t?i=null:(i=f(t))._=t,
o):i&&i._},o},t.ribbon=function(){var t=h,e=d,o=p,u=v,c=y,f=null;function g(){
var l,h=s.call(arguments),d=t.apply(this,h),p=e.apply(this,h),v=+o.apply(this,(h[0]=d,
h)),y=u.apply(this,h)-a,g=c.apply(this,h)-a,b=v*r(y),_=v*i(y),m=+o.apply(this,(h[0]=p,
h)),x=u.apply(this,h)-a,w=c.apply(this,h)-a
;if(f||(f=l=n.path()),f.moveTo(b,_),f.arc(0,0,v,y,g),
y===x&&g===w||(f.quadraticCurveTo(0,0,m*r(x),m*i(x)),
f.arc(0,0,m,x,w)),f.quadraticCurveTo(0,0,b,_),
f.closePath(),l)return f=null,l+""||null}return g.radius=function(t){
return arguments.length?(o="function"==typeof t?t:l(+t),g):o
},g.startAngle=function(t){
return arguments.length?(u="function"==typeof t?t:l(+t),g):u
},g.endAngle=function(t){
return arguments.length?(c="function"==typeof t?t:l(+t),g):c
},g.source=function(e){return arguments.length?(t=e,g):t},g.target=function(t){
return arguments.length?(e=t,g):e},g.context=function(t){
return arguments.length?(f=null==t?null:t,g):f},g
},Object.defineProperty(t,"__esModule",{value:!0})}))},{"d3-array":29,
"d3-path":46}],33:[function(t,e,n){!function(t,r){
r("object"==typeof n&&void 0!==e?n:t.d3=t.d3||{})}(this,(function(t){
"use strict";var e="$";function n(){}function r(t,e){var r=new n
;if(t instanceof n)t.each((function(t,e){r.set(e,t)
}));else if(Array.isArray(t)){var i,o=-1,a=t.length
;if(null==e)for(;++o<a;)r.set(o,t[o]);else for(;++o<a;)r.set(e(i=t[o],o,t),i)
}else if(t)for(var u in t)r.set(u,t[u]);return r}function i(){return{}}
function o(t,e,n){t[e]=n}function a(){return r()}function u(t,e,n){t.set(e,n)}
function c(){}n.prototype=r.prototype={constructor:n,has:function(t){
return e+t in this},get:function(t){return this[e+t]},set:function(t,n){
return this[e+t]=n,this},remove:function(t){var n=e+t
;return n in this&&delete this[n]},clear:function(){
for(var t in this)t[0]===e&&delete this[t]},keys:function(){var t=[]
;for(var n in this)n[0]===e&&t.push(n.slice(1));return t},values:function(){
var t=[];for(var n in this)n[0]===e&&t.push(this[n]);return t},
entries:function(){var t=[];for(var n in this)n[0]===e&&t.push({key:n.slice(1),
value:this[n]});return t},size:function(){var t=0
;for(var n in this)n[0]===e&&++t;return t},empty:function(){
for(var t in this)if(t[0]===e)return!1;return!0},each:function(t){
for(var n in this)n[0]===e&&t(this[n],n.slice(1),this)}};var f=r.prototype
;function s(t,e){var n=new c;if(t instanceof c)t.each((function(t){n.add(t)
}));else if(t){var r=-1,i=t.length
;if(null==e)for(;++r<i;)n.add(t[r]);else for(;++r<i;)n.add(e(t[r],r,t))}return n
}c.prototype=s.prototype={constructor:c,has:f.has,add:function(t){
return this[e+(t+="")]=t,this},remove:f.remove,clear:f.clear,values:f.keys,
size:f.size,empty:f.empty,each:f.each},t.nest=function(){var t,e,n,c=[],f=[]
;function s(n,i,o,a){if(i>=c.length)return null!=t&&n.sort(t),null!=e?e(n):n
;for(var u,f,l,h=-1,d=n.length,p=c[i++],v=r(),y=o();++h<d;)(l=v.get(u=p(f=n[h])+""))?l.push(f):v.set(u,[f])
;return v.each((function(t,e){a(y,e,s(t,i,o,a))})),y}return n={
object:function(t){return s(t,0,i,o)},map:function(t){return s(t,0,a,u)},
entries:function(t){return function t(n,r){if(++r>c.length)return n
;var i,o=f[r-1]
;return null!=e&&r>=c.length?i=n.entries():(i=[],n.each((function(e,n){i.push({
key:n,values:t(e,r)})}))),null!=o?i.sort((function(t,e){return o(t.key,e.key)
})):i}(s(t,0,a,u),0)},key:function(t){return c.push(t),n},sortKeys:function(t){
return f[c.length-1]=t,n},sortValues:function(e){return t=e,n},
rollup:function(t){return e=t,n}}},t.set=s,t.map=r,t.keys=function(t){var e=[]
;for(var n in t)e.push(n);return e},t.values=function(t){var e=[]
;for(var n in t)e.push(t[n]);return e},t.entries=function(t){var e=[]
;for(var n in t)e.push({key:n,value:t[n]});return e
},Object.defineProperty(t,"__esModule",{value:!0})}))},{}],34:[function(t,e,n){
!function(t,r){"object"==typeof n&&void 0!==e?r(n):r((t=t||self).d3=t.d3||{})
}(this,(function(t){"use strict";function e(t,e,n){
t.prototype=e.prototype=n,n.constructor=t}function n(t,e){
var n=Object.create(t.prototype);for(var r in e)n[r]=e[r];return n}
function r(){}
var i=.7,o=1/i,a="\\s*([+-]?\\d+)\\s*",u="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",c="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",f=/^#([0-9a-f]{3,8})$/,s=new RegExp("^rgb\\("+[a,a,a]+"\\)$"),l=new RegExp("^rgb\\("+[c,c,c]+"\\)$"),h=new RegExp("^rgba\\("+[a,a,a,u]+"\\)$"),d=new RegExp("^rgba\\("+[c,c,c,u]+"\\)$"),p=new RegExp("^hsl\\("+[u,c,c]+"\\)$"),v=new RegExp("^hsla\\("+[u,c,c,u]+"\\)$"),y={
aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,
azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,
blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,
chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,
cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,
darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,
darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,
darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,
darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,
darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,
deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,
firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,
gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,
gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,
hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,
khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,
lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,
lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,
lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,
lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,
lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,
limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,
mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,
mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,
mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,
midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,
navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,
orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,
palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,
papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,
plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,
red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,
salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,
sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,
slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,
steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,
turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,
whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function g(){
return this.rgb().formatHex()}function b(){return this.rgb().formatRgb()}
function _(t){var e,n
;return t=(t+"").trim().toLowerCase(),(e=f.exec(t))?(n=e[1].length,
e=parseInt(e[1],16),
6===n?m(e):3===n?new E(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===n?new E(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===n?new E(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=s.exec(t))?new E(e[1],e[2],e[3],1):(e=l.exec(t))?new E(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=h.exec(t))?x(e[1],e[2],e[3],e[4]):(e=d.exec(t))?x(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=p.exec(t))?j(e[1],e[2]/100,e[3]/100,1):(e=v.exec(t))?j(e[1],e[2]/100,e[3]/100,e[4]):y.hasOwnProperty(t)?m(y[t]):"transparent"===t?new E(NaN,NaN,NaN,0):null
}function m(t){return new E(t>>16&255,t>>8&255,255&t,1)}function x(t,e,n,r){
return r<=0&&(t=e=n=NaN),new E(t,e,n,r)}function w(t){
return t instanceof r||(t=_(t)),t?new E((t=t.rgb()).r,t.g,t.b,t.opacity):new E}
function M(t,e,n,r){return 1===arguments.length?w(t):new E(t,e,n,null==r?1:r)}
function E(t,e,n,r){this.r=+t,this.g=+e,this.b=+n,this.opacity=+r}function k(){
return"#"+S(this.r)+S(this.g)+S(this.b)}function A(){var t=this.opacity
;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")
}function S(t){
return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}
function j(t,e,n,r){
return r<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new C(t,e,n,r)}
function N(t){if(t instanceof C)return new C(t.h,t.s,t.l,t.opacity)
;if(t instanceof r||(t=_(t)),!t)return new C;if(t instanceof C)return t
;var e=(t=t.rgb()).r/255,n=t.g/255,i=t.b/255,o=Math.min(e,n,i),a=Math.max(e,n,i),u=NaN,c=a-o,f=(a+o)/2
;return c?(u=e===a?(n-i)/c+6*(n<i):n===a?(i-e)/c+2:(e-n)/c+4,
c/=f<.5?a+o:2-a-o,u*=60):c=f>0&&f<1?0:u,new C(u,c,f,t.opacity)}
function T(t,e,n,r){return 1===arguments.length?N(t):new C(t,e,n,null==r?1:r)}
function C(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}
function O(t,e,n){
return 255*(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)}e(r,_,{
copy:function(t){return Object.assign(new this.constructor,this,t)},
displayable:function(){return this.rgb().displayable()},hex:g,formatHex:g,
formatHsl:function(){return N(this).formatHsl()},formatRgb:b,toString:b
}),e(E,M,n(r,{brighter:function(t){
return t=null==t?o:Math.pow(o,t),new E(this.r*t,this.g*t,this.b*t,this.opacity)
},darker:function(t){
return t=null==t?i:Math.pow(i,t),new E(this.r*t,this.g*t,this.b*t,this.opacity)
},rgb:function(){return this},displayable:function(){
return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1
},hex:k,formatHex:k,formatRgb:A,toString:A})),e(C,T,n(r,{brighter:function(t){
return t=null==t?o:Math.pow(o,t),new C(this.h,this.s,this.l*t,this.opacity)},
darker:function(t){
return t=null==t?i:Math.pow(i,t),new C(this.h,this.s,this.l*t,this.opacity)},
rgb:function(){
var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*e,i=2*n-r
;return new E(O(t>=240?t-240:t+120,i,r),O(t,i,r),O(t<120?t+240:t-120,i,r),this.opacity)
},displayable:function(){
return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1
},formatHsl:function(){var t=this.opacity
;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")
}}));var P=Math.PI/180,I=180/Math.PI,L=.96422,R=.82521,z=4/29,D=6/29,F=3*D*D
;function B(t){if(t instanceof U)return new U(t.l,t.a,t.b,t.opacity)
;if(t instanceof W)return $(t);t instanceof E||(t=w(t))
;var e,n,r=H(t.r),i=H(t.g),o=H(t.b),a=Y((.2225045*r+.7168786*i+.0606169*o)/1)
;return r===i&&i===o?e=n=a:(e=Y((.4360747*r+.3850649*i+.1430804*o)/L),
n=Y((.0139322*r+.0971045*i+.7141733*o)/R)),
new U(116*a-16,500*(e-a),200*(a-n),t.opacity)}function q(t,e,n,r){
return 1===arguments.length?B(t):new U(t,e,n,null==r?1:r)}function U(t,e,n,r){
this.l=+t,this.a=+e,this.b=+n,this.opacity=+r}function Y(t){
return t>.008856451679035631?Math.pow(t,1/3):t/F+z}function G(t){
return t>D?t*t*t:F*(t-z)}function V(t){
return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function H(t){
return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function K(t){
if(t instanceof W)return new W(t.h,t.c,t.l,t.opacity)
;if(t instanceof U||(t=B(t)),
0===t.a&&0===t.b)return new W(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity)
;var e=Math.atan2(t.b,t.a)*I
;return new W(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}
function X(t,e,n,r){return 1===arguments.length?K(t):new W(t,e,n,null==r?1:r)}
function W(t,e,n,r){this.h=+t,this.c=+e,this.l=+n,this.opacity=+r}function $(t){
if(isNaN(t.h))return new U(t.l,0,0,t.opacity);var e=t.h*P
;return new U(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}e(U,q,n(r,{
brighter:function(t){
return new U(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},
darker:function(t){
return new U(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},
rgb:function(){
var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,n=isNaN(this.b)?t:t-this.b/200
;return new E(V(3.1338561*(e=L*G(e))-1.6168667*(t=1*G(t))-.4906146*(n=R*G(n))),V(-.9787684*e+1.9161415*t+.033454*n),V(.0719453*e-.2289914*t+1.4052427*n),this.opacity)
}})),e(W,X,n(r,{brighter:function(t){
return new W(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},
darker:function(t){
return new W(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},
rgb:function(){return $(this).rgb()}}))
;var Z=-.14861,Q=1.78277,J=-.29227,tt=-.90649,et=1.97294,nt=et*tt,rt=et*Q,it=Q*J-tt*Z
;function ot(t){if(t instanceof ut)return new ut(t.h,t.s,t.l,t.opacity)
;t instanceof E||(t=w(t))
;var e=t.r/255,n=t.g/255,r=t.b/255,i=(it*r+nt*e-rt*n)/(it+nt-rt),o=r-i,a=(et*(n-i)-J*o)/tt,u=Math.sqrt(a*a+o*o)/(et*i*(1-i)),c=u?Math.atan2(a,o)*I-120:NaN
;return new ut(c<0?c+360:c,u,i,t.opacity)}function at(t,e,n,r){
return 1===arguments.length?ot(t):new ut(t,e,n,null==r?1:r)}
function ut(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}e(ut,at,n(r,{
brighter:function(t){
return t=null==t?o:Math.pow(o,t),new ut(this.h,this.s,this.l*t,this.opacity)},
darker:function(t){
return t=null==t?i:Math.pow(i,t),new ut(this.h,this.s,this.l*t,this.opacity)},
rgb:function(){
var t=isNaN(this.h)?0:(this.h+120)*P,e=+this.l,n=isNaN(this.s)?0:this.s*e*(1-e),r=Math.cos(t),i=Math.sin(t)
;return new E(255*(e+n*(Z*r+Q*i)),255*(e+n*(J*r+tt*i)),255*(e+n*(et*r)),this.opacity)
}})),t.color=_,t.cubehelix=at,t.gray=function(t,e){
return new U(t,0,0,null==e?1:e)
},t.hcl=X,t.hsl=T,t.lab=q,t.lch=function(t,e,n,r){
return 1===arguments.length?K(t):new W(n,e,t,null==r?1:r)
},t.rgb=M,Object.defineProperty(t,"__esModule",{value:!0})}))},{}],
35:[function(t,e,n){!function(r,i){
"object"==typeof n&&void 0!==e?i(n,t("d3-array")):i(r.d3=r.d3||{},r.d3)
}(this,(function(t,e){"use strict";var n=Array.prototype.slice;function r(t,e){
return t-e}function i(t){return function(){return t}}function o(t,e){
for(var n,r=-1,i=e.length;++r<i;)if(n=a(t,e[r]))return n;return 0}
function a(t,e){for(var n=e[0],r=e[1],i=-1,o=0,a=t.length,c=a-1;o<a;c=o++){
var f=t[o],s=f[0],l=f[1],h=t[c],d=h[0],p=h[1];if(u(f,h,e))return 0
;l>r!=p>r&&n<(d-s)*(r-l)/(p-l)+s&&(i=-i)}return i}function u(t,e,n){var r
;return function(t,e,n){return(e[0]-t[0])*(n[1]-t[1])==(n[0]-t[0])*(e[1]-t[1])
}(t,e,n)&&function(t,e,n){return t<=e&&e<=n||n<=e&&e<=t
}(t[r=+(t[0]===e[0])],n[r],e[r])}function c(){}
var f=[[],[[[1,1.5],[.5,1]]],[[[1.5,1],[1,1.5]]],[[[1.5,1],[.5,1]]],[[[1,.5],[1.5,1]]],[[[1,1.5],[.5,1]],[[1,.5],[1.5,1]]],[[[1,.5],[1,1.5]]],[[[1,.5],[.5,1]]],[[[.5,1],[1,.5]]],[[[1,1.5],[1,.5]]],[[[.5,1],[1,.5]],[[1.5,1],[1,1.5]]],[[[1.5,1],[1,.5]]],[[[.5,1],[1.5,1]]],[[[1,1.5],[1.5,1]]],[[[.5,1],[1,1.5]]],[]]
;function s(){var t=1,a=1,u=e.thresholdSturges,s=p;function l(t){var n=u(t)
;if(Array.isArray(n))n=n.slice().sort(r);else{var i=e.extent(t),o=i[0],a=i[1]
;n=e.tickStep(o,a,n),n=e.range(Math.floor(o/n)*n,Math.floor(a/n)*n,n)}
return n.map((function(e){return h(t,e)}))}function h(e,n){var r=[],i=[]
;return function(e,n,r){var i,o,u,c,s,l,h=new Array,p=new Array
;i=o=-1,c=e[0]>=n,f[c<<1].forEach(v)
;for(;++i<t-1;)u=c,c=e[i+1]>=n,f[u|c<<1].forEach(v);f[c<<0].forEach(v)
;for(;++o<a-1;){
for(i=-1,c=e[o*t+t]>=n,s=e[o*t]>=n,f[c<<1|s<<2].forEach(v);++i<t-1;)u=c,
c=e[o*t+t+i+1]>=n,l=s,s=e[o*t+i+1]>=n,f[u|c<<1|s<<2|l<<3].forEach(v)
;f[c|s<<3].forEach(v)}i=-1,s=e[o*t]>=n,f[s<<2].forEach(v)
;for(;++i<t-1;)l=s,s=e[o*t+i+1]>=n,f[s<<2|l<<3].forEach(v);function v(t){
var e,n,a=[t[0][0]+i,t[0][1]+o],u=[t[1][0]+i,t[1][1]+o],c=d(a),f=d(u)
;(e=p[c])?(n=h[f])?(delete p[e.end],
delete h[n.start],e===n?(e.ring.push(u),r(e.ring)):h[e.start]=p[n.end]={
start:e.start,end:n.end,ring:e.ring.concat(n.ring)
}):(delete p[e.end],e.ring.push(u),
p[e.end=f]=e):(e=h[f])?(n=p[c])?(delete h[e.start],
delete p[n.end],e===n?(e.ring.push(u),r(e.ring)):h[n.start]=p[e.end]={
start:n.start,end:e.end,ring:n.ring.concat(e.ring)
}):(delete h[e.start],e.ring.unshift(a),h[e.start=c]=e):h[c]=p[f]={start:c,
end:f,ring:[a,u]}}f[s<<3].forEach(v)}(e,n,(function(t){s(t,e,n),function(t){
for(var e=0,n=t.length,r=t[n-1][1]*t[0][0]-t[n-1][0]*t[0][1];++e<n;)r+=t[e-1][1]*t[e][0]-t[e-1][0]*t[e][1]
;return r}(t)>0?r.push([t]):i.push(t)})),i.forEach((function(t){
for(var e,n=0,i=r.length;n<i;++n)if(-1!==o((e=r[n])[0],t))return void e.push(t)
})),{type:"MultiPolygon",value:n,coordinates:r}}function d(e){
return 2*e[0]+e[1]*(t+1)*4}function p(e,n,r){e.forEach((function(e){
var i,o=e[0],u=e[1],c=0|o,f=0|u,s=n[f*t+c]
;o>0&&o<t&&c===o&&(i=n[f*t+c-1],e[0]=o+(r-i)/(s-i)-.5),
u>0&&u<a&&f===u&&(i=n[(f-1)*t+c],e[1]=u+(r-i)/(s-i)-.5)}))}
return l.contour=h,l.size=function(e){if(!arguments.length)return[t,a]
;var n=Math.ceil(e[0]),r=Math.ceil(e[1])
;if(!(n>0&&r>0))throw new Error("invalid size");return t=n,a=r,l
},l.thresholds=function(t){
return arguments.length?(u="function"==typeof t?t:Array.isArray(t)?i(n.call(t)):i(t),
l):u},l.smooth=function(t){return arguments.length?(s=t?p:c,l):s===p},l}
function l(t,e,n){
for(var r=t.width,i=t.height,o=1+(n<<1),a=0;a<i;++a)for(var u=0,c=0;u<r+n;++u)u<r&&(c+=t.data[u+a*r]),
u>=n&&(u>=o&&(c-=t.data[u-o+a*r]),e.data[u-n+a*r]=c/Math.min(u+1,r-1+o-u,o))}
function h(t,e,n){
for(var r=t.width,i=t.height,o=1+(n<<1),a=0;a<r;++a)for(var u=0,c=0;u<i+n;++u)u<i&&(c+=t.data[a+u*r]),
u>=n&&(u>=o&&(c-=t.data[a+(u-o)*r]),e.data[a+(u-n)*r]=c/Math.min(u+1,i-1+o-u,o))
}function d(t){return t[0]}function p(t){return t[1]}function v(){return 1}
t.contours=s,t.contourDensity=function(){
var t=d,r=p,o=v,a=960,u=500,c=20,f=2,y=3*c,g=a+2*y>>f,b=u+2*y>>f,_=i(20)
;function m(n){var i=new Float32Array(g*b),a=new Float32Array(g*b)
;n.forEach((function(e,n,a){var u=+t(e,n,a)+y>>f,c=+r(e,n,a)+y>>f,s=+o(e,n,a)
;u>=0&&u<g&&c>=0&&c<b&&(i[u+c*g]+=s)})),l({width:g,height:b,data:i},{width:g,
height:b,data:a},c>>f),h({width:g,height:b,data:a},{width:g,height:b,data:i
},c>>f),l({width:g,height:b,data:i},{width:g,height:b,data:a},c>>f),h({width:g,
height:b,data:a},{width:g,height:b,data:i},c>>f),l({width:g,height:b,data:i},{
width:g,height:b,data:a},c>>f),h({width:g,height:b,data:a},{width:g,height:b,
data:i},c>>f);var u=_(i);if(!Array.isArray(u)){var d=e.max(i)
;u=e.tickStep(0,d,u),(u=e.range(0,Math.floor(d/u)*u,u)).shift()}
return s().thresholds(u).size([g,b])(i).map(x)}function x(t){
return t.value*=Math.pow(2,-2*f),t.coordinates.forEach(w),t}function w(t){
t.forEach(M)}function M(t){t.forEach(E)}function E(t){t[0]=t[0]*Math.pow(2,f)-y,
t[1]=t[1]*Math.pow(2,f)-y}function k(){return g=a+2*(y=3*c)>>f,b=u+2*y>>f,m}
return m.x=function(e){
return arguments.length?(t="function"==typeof e?e:i(+e),m):t},m.y=function(t){
return arguments.length?(r="function"==typeof t?t:i(+t),m):r
},m.weight=function(t){
return arguments.length?(o="function"==typeof t?t:i(+t),m):o
},m.size=function(t){if(!arguments.length)return[a,u]
;var e=Math.ceil(t[0]),n=Math.ceil(t[1])
;if(!(e>=0||e>=0))throw new Error("invalid size");return a=e,u=n,k()
},m.cellSize=function(t){if(!arguments.length)return 1<<f
;if(!((t=+t)>=1))throw new Error("invalid cell size")
;return f=Math.floor(Math.log(t)/Math.LN2),k()},m.thresholds=function(t){
return arguments.length?(_="function"==typeof t?t:Array.isArray(t)?i(n.call(t)):i(t),
m):_},m.bandwidth=function(t){if(!arguments.length)return Math.sqrt(c*(c+1))
;if(!((t=+t)>=0))throw new Error("invalid bandwidth")
;return c=Math.round((Math.sqrt(4*t*t+1)-1)/2),k()},m
},Object.defineProperty(t,"__esModule",{value:!0})}))},{"d3-array":29}],
36:[function(t,e,n){!function(t,r){
"object"==typeof n&&void 0!==e?r(n):r((t=t||self).d3=t.d3||{})
}(this,(function(t){"use strict";var e={value:function(){}};function n(){
for(var t,e=0,n=arguments.length,i={};e<n;++e){
if(!(t=arguments[e]+"")||t in i||/[\s.]/.test(t))throw new Error("illegal type: "+t)
;i[t]=[]}return new r(i)}function r(t){this._=t}function i(t,e){
return t.trim().split(/^|\s+/).map((function(t){var n="",r=t.indexOf(".")
;if(r>=0&&(n=t.slice(r+1),
t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t)
;return{type:t,name:n}}))}function o(t,e){
for(var n,r=0,i=t.length;r<i;++r)if((n=t[r]).name===e)return n.value}
function a(t,n,r){for(var i=0,o=t.length;i<o;++i)if(t[i].name===n){
t[i]=e,t=t.slice(0,i).concat(t.slice(i+1));break}return null!=r&&t.push({name:n,
value:r}),t}r.prototype=n.prototype={constructor:r,on:function(t,e){
var n,r=this._,u=i(t+"",r),c=-1,f=u.length;if(!(arguments.length<2)){
if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e)
;for(;++c<f;)if(n=(t=u[c]).type)r[n]=a(r[n],t.name,e);else if(null==e)for(n in r)r[n]=a(r[n],t.name,null)
;return this}for(;++c<f;)if((n=(t=u[c]).type)&&(n=o(r[n],t.name)))return n},
copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice()
;return new r(t)},call:function(t,e){
if((n=arguments.length-2)>0)for(var n,r,i=new Array(n),o=0;o<n;++o)i[o]=arguments[o+2]
;if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t)
;for(o=0,n=(r=this._[t]).length;o<n;++o)r[o].value.apply(e,i)},
apply:function(t,e,n){
if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t)
;for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(e,n)}
},t.dispatch=n,Object.defineProperty(t,"__esModule",{value:!0})}))},{}],
37:[function(t,e,n){!function(r,i){
"object"==typeof n&&void 0!==e?i(n,t("d3-dispatch"),t("d3-selection")):i((r=r||self).d3=r.d3||{},r.d3,r.d3)
}(this,(function(t,e,n){"use strict";function r(){
n.event.stopImmediatePropagation()}function i(){
n.event.preventDefault(),n.event.stopImmediatePropagation()}function o(t){
var e=t.document.documentElement,r=n.select(t).on("dragstart.drag",i,!0)
;"onselectstart"in e?r.on("selectstart.drag",i,!0):(e.__noselect=e.style.MozUserSelect,
e.style.MozUserSelect="none")}function a(t,e){
var r=t.document.documentElement,o=n.select(t).on("dragstart.drag",null)
;e&&(o.on("click.drag",i,!0),setTimeout((function(){o.on("click.drag",null)
}),0)),
"onselectstart"in r?o.on("selectstart.drag",null):(r.style.MozUserSelect=r.__noselect,
delete r.__noselect)}function u(t){return function(){return t}}
function c(t,e,n,r,i,o,a,u,c,f){
this.target=t,this.type=e,this.subject=n,this.identifier=r,
this.active=i,this.x=o,this.y=a,this.dx=u,this.dy=c,this._=f}function f(){
return!n.event.ctrlKey&&!n.event.button}function s(){return this.parentNode}
function l(t){return null==t?{x:n.event.x,y:n.event.y}:t}function h(){
return navigator.maxTouchPoints||"ontouchstart"in this}
c.prototype.on=function(){var t=this._.on.apply(this._,arguments)
;return t===this._?this:t},t.drag=function(){
var t,d,p,v,y=f,g=s,b=l,_=h,m={},x=e.dispatch("start","drag","end"),w=0,M=0
;function E(t){
t.on("mousedown.drag",k).filter(_).on("touchstart.drag",j).on("touchmove.drag",N).on("touchend.drag touchcancel.drag",T).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")
}function k(){if(!v&&y.apply(this,arguments)){
var e=C("mouse",g.apply(this,arguments),n.mouse,this,arguments)
;e&&(n.select(n.event.view).on("mousemove.drag",A,!0).on("mouseup.drag",S,!0),
o(n.event.view),r(),p=!1,t=n.event.clientX,d=n.event.clientY,e("start"))}}
function A(){if(i(),!p){var e=n.event.clientX-t,r=n.event.clientY-d;p=e*e+r*r>M}
m.mouse("drag")}function S(){
n.select(n.event.view).on("mousemove.drag mouseup.drag",null),a(n.event.view,p),
i(),m.mouse("end")}function j(){if(y.apply(this,arguments)){
var t,e,i=n.event.changedTouches,o=g.apply(this,arguments),a=i.length
;for(t=0;t<a;++t)(e=C(i[t].identifier,o,n.touch,this,arguments))&&(r(),
e("start"))}}function N(){var t,e,r=n.event.changedTouches,o=r.length
;for(t=0;t<o;++t)(e=m[r[t].identifier])&&(i(),e("drag"))}function T(){
var t,e,i=n.event.changedTouches,o=i.length
;for(v&&clearTimeout(v),v=setTimeout((function(){v=null
}),500),t=0;t<o;++t)(e=m[i[t].identifier])&&(r(),e("end"))}
function C(t,e,r,i,o){var a,u,f,s=r(e,t),l=x.copy()
;if(n.customEvent(new c(E,"beforestart",a,t,w,s[0],s[1],0,0,l),(function(){
return null!=(n.event.subject=a=b.apply(i,o))&&(u=a.x-s[0]||0,f=a.y-s[1]||0,!0)
})))return function h(d){var p,v=s;switch(d){case"start":m[t]=h,p=w++;break
;case"end":delete m[t],--w;case"drag":s=r(e,t),p=w}
n.customEvent(new c(E,d,a,t,p,s[0]+u,s[1]+f,s[0]-v[0],s[1]-v[1],l),l.apply,l,[d,i,o])
}}return E.filter=function(t){
return arguments.length?(y="function"==typeof t?t:u(!!t),E):y
},E.container=function(t){
return arguments.length?(g="function"==typeof t?t:u(t),E):g
},E.subject=function(t){
return arguments.length?(b="function"==typeof t?t:u(t),E):b
},E.touchable=function(t){
return arguments.length?(_="function"==typeof t?t:u(!!t),E):_},E.on=function(){
var t=x.on.apply(x,arguments);return t===x?E:t},E.clickDistance=function(t){
return arguments.length?(M=(t=+t)*t,E):Math.sqrt(M)},E
},t.dragDisable=o,t.dragEnable=a,Object.defineProperty(t,"__esModule",{value:!0
})}))},{"d3-dispatch":36,"d3-selection":52}],38:[function(t,e,n){!function(t,r){
"object"==typeof n&&void 0!==e?r(n):r((t=t||self).d3=t.d3||{})
}(this,(function(t){"use strict";var e={},n={};function r(t){
return new Function("d","return {"+t.map((function(t,e){
return JSON.stringify(t)+": d["+e+'] || ""'})).join(",")+"}")}function i(t){
var e=Object.create(null),n=[];return t.forEach((function(t){
for(var r in t)r in e||n.push(e[r]=r)})),n}function o(t,e){var n=t+"",r=n.length
;return r<e?new Array(e-r+1).join(0)+n:n}function a(t){
var e=t.getUTCHours(),n=t.getUTCMinutes(),r=t.getUTCSeconds(),i=t.getUTCMilliseconds()
;return isNaN(t)?"Invalid Date":function(t){
return t<0?"-"+o(-t,6):t>9999?"+"+o(t,6):o(t,4)
}(t.getUTCFullYear())+"-"+o(t.getUTCMonth()+1,2)+"-"+o(t.getUTCDate(),2)+(i?"T"+o(e,2)+":"+o(n,2)+":"+o(r,2)+"."+o(i,3)+"Z":r?"T"+o(e,2)+":"+o(n,2)+":"+o(r,2)+"Z":n||e?"T"+o(e,2)+":"+o(n,2)+"Z":"")
}function u(t){var o=new RegExp('["'+t+"\n\r]"),u=t.charCodeAt(0)
;function c(t,r){var i,o=[],a=t.length,c=0,f=0,s=a<=0,l=!1;function h(){
if(s)return n;if(l)return l=!1,e;var r,i,o=c;if(34===t.charCodeAt(o)){
for(;c++<a&&34!==t.charCodeAt(c)||34===t.charCodeAt(++c););
return(r=c)>=a?s=!0:10===(i=t.charCodeAt(c++))?l=!0:13===i&&(l=!0,
10===t.charCodeAt(c)&&++c),t.slice(o+1,r-1).replace(/""/g,'"')}for(;c<a;){
if(10===(i=t.charCodeAt(r=c++)))l=!0;else if(13===i)l=!0,
10===t.charCodeAt(c)&&++c;else if(i!==u)continue;return t.slice(o,r)}
return s=!0,t.slice(o,a)}
for(10===t.charCodeAt(a-1)&&--a,13===t.charCodeAt(a-1)&&--a;(i=h())!==n;){
for(var d=[];i!==e&&i!==n;)d.push(i),i=h();r&&null==(d=r(d,f++))||o.push(d)}
return o}function f(e,n){return e.map((function(e){return n.map((function(t){
return l(e[t])})).join(t)}))}function s(e){return e.map(l).join(t)}
function l(t){
return null==t?"":t instanceof Date?a(t):o.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t
}return{parse:function(t,e){var n,i,o=c(t,(function(t,o){if(n)return n(t,o-1)
;i=t,n=e?function(t,e){var n=r(t);return function(r,i){return e(n(r),i,t)}
}(t,e):r(t)}));return o.columns=i||[],o},parseRows:c,format:function(e,n){
return null==n&&(n=i(e)),[n.map(l).join(t)].concat(f(e,n)).join("\n")},
formatBody:function(t,e){return null==e&&(e=i(t)),f(t,e).join("\n")},
formatRows:function(t){return t.map(s).join("\n")},formatRow:s,formatValue:l}}
var c=u(","),f=c.parse,s=c.parseRows,l=c.format,h=c.formatBody,d=c.formatRows,p=c.formatRow,v=c.formatValue,y=u("\t"),g=y.parse,b=y.parseRows,_=y.format,m=y.formatBody,x=y.formatRows,w=y.formatRow,M=y.formatValue
;var E=new Date("2019-01-01T00:00").getHours()||new Date("2019-07-01T00:00").getHours()
;t.autoType=function(t){for(var e in t){var n,r,i=t[e].trim()
;if(i)if("true"===i)i=!0;else if("false"===i)i=!1;else if("NaN"===i)i=NaN;else if(isNaN(n=+i)){
if(!(r=i.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)))continue
;E&&r[4]&&!r[7]&&(i=i.replace(/-/g,"/").replace(/T/," ")),i=new Date(i)
}else i=n;else i=null;t[e]=i}return t
},t.csvFormat=l,t.csvFormatBody=h,t.csvFormatRow=p,
t.csvFormatRows=d,t.csvFormatValue=v,
t.csvParse=f,t.csvParseRows=s,t.dsvFormat=u,
t.tsvFormat=_,t.tsvFormatBody=m,t.tsvFormatRow=w,
t.tsvFormatRows=x,t.tsvFormatValue=M,
t.tsvParse=g,t.tsvParseRows=b,Object.defineProperty(t,"__esModule",{value:!0})
}))},{}],39:[function(t,e,n){!function(t,r){
"object"==typeof n&&void 0!==e?r(n):r((t=t||self).d3=t.d3||{})
}(this,(function(t){"use strict";function e(t){
return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function n(t){
return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var r=function t(e){function n(t){
return Math.pow(t,e)}return e=+e,n.exponent=t,n}(3),i=function t(e){
function n(t){return 1-Math.pow(1-t,e)}return e=+e,n.exponent=t,n
}(3),o=function t(e){function n(t){
return((t*=2)<=1?Math.pow(t,e):2-Math.pow(2-t,e))/2}return e=+e,n.exponent=t,n
}(3),a=Math.PI,u=a/2;function c(t){return(1-Math.cos(a*t))/2}function f(t){
return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function s(t){
return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}
var l=4/11,h=7.5625;function d(t){
return(t=+t)<l?h*t*t:t<.7272727272727273?h*(t-=.5454545454545454)*t+.75:t<.9090909090909091?h*(t-=.8181818181818182)*t+.9375:h*(t-=.9545454545454546)*t+.984375
}var p=1.70158,v=function t(e){function n(t){return t*t*((e+1)*t-e)}return e=+e,
n.overshoot=t,n}(p),y=function t(e){function n(t){return--t*t*((e+1)*t+e)+1}
return e=+e,n.overshoot=t,n}(p),g=function t(e){function n(t){
return((t*=2)<1?t*t*((e+1)*t-e):(t-=2)*t*((e+1)*t+e)+2)/2}
return e=+e,n.overshoot=t,n}(p),b=2*Math.PI,_=function t(e,n){
var r=Math.asin(1/(e=Math.max(1,e)))*(n/=b);function i(t){
return e*Math.pow(2,10*--t)*Math.sin((r-t)/n)}return i.amplitude=function(e){
return t(e,n*b)},i.period=function(n){return t(e,n)},i}(1,.3),m=function t(e,n){
var r=Math.asin(1/(e=Math.max(1,e)))*(n/=b);function i(t){
return 1-e*Math.pow(2,-10*(t=+t))*Math.sin((t+r)/n)}
return i.amplitude=function(e){return t(e,n*b)},i.period=function(n){
return t(e,n)},i}(1,.3),x=function t(e,n){
var r=Math.asin(1/(e=Math.max(1,e)))*(n/=b);function i(t){
return((t=2*t-1)<0?e*Math.pow(2,10*t)*Math.sin((r-t)/n):2-e*Math.pow(2,-10*t)*Math.sin((r+t)/n))/2
}return i.amplitude=function(e){return t(e,n*b)},i.period=function(n){
return t(e,n)},i}(1,.3)
;t.easeBack=g,t.easeBackIn=v,t.easeBackInOut=g,t.easeBackOut=y,
t.easeBounce=d,t.easeBounceIn=function(t){return 1-d(1-t)
},t.easeBounceInOut=function(t){return((t*=2)<=1?1-d(1-t):d(t-1)+1)/2
},t.easeBounceOut=d,t.easeCircle=s,t.easeCircleIn=function(t){
return 1-Math.sqrt(1-t*t)},t.easeCircleInOut=s,t.easeCircleOut=function(t){
return Math.sqrt(1- --t*t)},t.easeCubic=n,t.easeCubicIn=function(t){return t*t*t
},t.easeCubicInOut=n,t.easeCubicOut=function(t){return--t*t*t+1
},t.easeElastic=m,
t.easeElasticIn=_,t.easeElasticInOut=x,t.easeElasticOut=m,t.easeExp=f,
t.easeExpIn=function(t){return Math.pow(2,10*t-10)
},t.easeExpInOut=f,t.easeExpOut=function(t){return 1-Math.pow(2,-10*t)
},t.easeLinear=function(t){return+t
},t.easePoly=o,t.easePolyIn=r,t.easePolyInOut=o,
t.easePolyOut=i,t.easeQuad=e,t.easeQuadIn=function(t){return t*t
},t.easeQuadInOut=e,t.easeQuadOut=function(t){return t*(2-t)
},t.easeSin=c,t.easeSinIn=function(t){return 1-Math.cos(t*u)
},t.easeSinInOut=c,t.easeSinOut=function(t){return Math.sin(t*u)
},Object.defineProperty(t,"__esModule",{value:!0})}))},{}],40:[function(t,e,n){
!function(r,i){
"object"==typeof n&&void 0!==e?i(n,t("d3-dsv")):i(r.d3=r.d3||{},r.d3)
}(this,(function(t,e){"use strict";function n(t){
if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.blob()}
function r(t){if(!t.ok)throw new Error(t.status+" "+t.statusText)
;return t.arrayBuffer()}function i(t){
if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.text()}
function o(t,e){return fetch(t,e).then(i)}function a(t){return function(e,n,r){
return 2===arguments.length&&"function"==typeof n&&(r=n,
n=void 0),o(e,n).then((function(e){return t(e,r)}))}}
var u=a(e.csvParse),c=a(e.tsvParse);function f(t){
if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.json()}
function s(t){return function(e,n){return o(e,n).then((function(e){
return(new DOMParser).parseFromString(e,t)}))}}
var l=s("application/xml"),h=s("text/html"),d=s("image/svg+xml")
;t.blob=function(t,e){return fetch(t,e).then(n)},t.buffer=function(t,e){
return fetch(t,e).then(r)},t.dsv=function(t,n,r,i){
3===arguments.length&&"function"==typeof r&&(i=r,r=void 0);var a=e.dsvFormat(t)
;return o(n,r).then((function(t){return a.parse(t,i)}))
},t.csv=u,t.tsv=c,t.image=function(t,e){return new Promise((function(n,r){
var i=new Image;for(var o in e)i[o]=e[o];i.onerror=r,i.onload=function(){n(i)
},i.src=t}))},t.json=function(t,e){return fetch(t,e).then(f)
},t.text=o,t.xml=l,t.html=h,t.svg=d,Object.defineProperty(t,"__esModule",{
value:!0})}))},{"d3-dsv":38}],41:[function(t,e,n){!function(r,i){
"object"==typeof n&&void 0!==e?i(n,t("d3-quadtree"),t("d3-collection"),t("d3-dispatch"),t("d3-timer")):i(r.d3=r.d3||{},r.d3,r.d3,r.d3,r.d3)
}(this,(function(t,e,n,r,i){"use strict";function o(t){return function(){
return t}}function a(){return 1e-6*(Math.random()-.5)}function u(t){
return t.x+t.vx}function c(t){return t.y+t.vy}function f(t){return t.index}
function s(t,e){var n=t.get(e);if(!n)throw new Error("missing: "+e);return n}
function l(t){return t.x}function h(t){return t.y}var d=Math.PI*(3-Math.sqrt(5))
;t.forceCenter=function(t,e){var n;function r(){var r,i,o=n.length,a=0,u=0
;for(r=0;r<o;++r)a+=(i=n[r]).x,u+=i.y
;for(a=a/o-t,u=u/o-e,r=0;r<o;++r)(i=n[r]).x-=a,i.y-=u}
return null==t&&(t=0),null==e&&(e=0),r.initialize=function(t){n=t
},r.x=function(e){return arguments.length?(t=+e,r):t},r.y=function(t){
return arguments.length?(e=+t,r):e},r},t.forceCollide=function(t){
var n,r,i=1,f=1;function s(){
for(var t,o,s,h,d,p,v,y=n.length,g=0;g<f;++g)for(o=e.quadtree(n,u,c).visitAfter(l),
t=0;t<y;++t)s=n[t],p=r[s.index],v=p*p,h=s.x+s.vx,d=s.y+s.vy,o.visit(b)
;function b(t,e,n,r,o){var u=t.data,c=t.r,f=p+c
;if(!u)return e>h+f||r<h-f||n>d+f||o<d-f;if(u.index>s.index){
var l=h-u.x-u.vx,y=d-u.y-u.vy,g=l*l+y*y
;g<f*f&&(0===l&&(g+=(l=a())*l),0===y&&(g+=(y=a())*y),g=(f-(g=Math.sqrt(g)))/g*i,
s.vx+=(l*=g)*(f=(c*=c)/(v+c)),s.vy+=(y*=g)*f,u.vx-=l*(f=1-f),u.vy-=y*f)}}}
function l(t){if(t.data)return t.r=r[t.data.index]
;for(var e=t.r=0;e<4;++e)t[e]&&t[e].r>t.r&&(t.r=t[e].r)}function h(){if(n){
var e,i,o=n.length;for(r=new Array(o),e=0;e<o;++e)i=n[e],r[i.index]=+t(i,e,n)}}
return"function"!=typeof t&&(t=o(null==t?1:+t)),s.initialize=function(t){n=t,h()
},s.iterations=function(t){return arguments.length?(f=+t,s):f
},s.strength=function(t){return arguments.length?(i=+t,s):i
},s.radius=function(e){
return arguments.length?(t="function"==typeof e?e:o(+e),h(),s):t},s
},t.forceLink=function(t){var e,r,i,u,c,l=f,h=function(t){
return 1/Math.min(u[t.source.index],u[t.target.index])},d=o(30),p=1
;function v(n){
for(var i=0,o=t.length;i<p;++i)for(var u,f,s,l,h,d,v,y=0;y<o;++y)f=(u=t[y]).source,
l=(s=u.target).x+s.vx-f.x-f.vx||a(),
h=s.y+s.vy-f.y-f.vy||a(),l*=d=((d=Math.sqrt(l*l+h*h))-r[y])/d*n*e[y],
h*=d,s.vx-=l*(v=c[y]),s.vy-=h*v,f.vx+=l*(v=1-v),f.vy+=h*v}function y(){if(i){
var o,a,f=i.length,h=t.length,d=n.map(i,l)
;for(o=0,u=new Array(f);o<h;++o)(a=t[o]).index=o,
"object"!=typeof a.source&&(a.source=s(d,a.source)),
"object"!=typeof a.target&&(a.target=s(d,a.target)),
u[a.source.index]=(u[a.source.index]||0)+1,
u[a.target.index]=(u[a.target.index]||0)+1
;for(o=0,c=new Array(h);o<h;++o)a=t[o],
c[o]=u[a.source.index]/(u[a.source.index]+u[a.target.index]);e=new Array(h),g(),
r=new Array(h),b()}}function g(){
if(i)for(var n=0,r=t.length;n<r;++n)e[n]=+h(t[n],n,t)}function b(){
if(i)for(var e=0,n=t.length;e<n;++e)r[e]=+d(t[e],e,t)}
return null==t&&(t=[]),v.initialize=function(t){i=t,y()},v.links=function(e){
return arguments.length?(t=e,y(),v):t},v.id=function(t){
return arguments.length?(l=t,v):l},v.iterations=function(t){
return arguments.length?(p=+t,v):p},v.strength=function(t){
return arguments.length?(h="function"==typeof t?t:o(+t),g(),v):h
},v.distance=function(t){
return arguments.length?(d="function"==typeof t?t:o(+t),b(),v):d},v
},t.forceManyBody=function(){var t,n,r,i,u=o(-30),c=1,f=1/0,s=.81;function d(i){
var o,a=t.length,u=e.quadtree(t,l,h).visitAfter(v)
;for(r=i,o=0;o<a;++o)n=t[o],u.visit(y)}function p(){if(t){var e,n,r=t.length
;for(i=new Array(r),e=0;e<r;++e)n=t[e],i[n.index]=+u(n,e,t)}}function v(t){
var e,n,r,o,a,u=0,c=0;if(t.length){
for(r=o=a=0;a<4;++a)(e=t[a])&&(n=Math.abs(e.value))&&(u+=e.value,
c+=n,r+=n*e.x,o+=n*e.y);t.x=r/c,t.y=o/c}else{(e=t).x=e.data.x,e.y=e.data.y;do{
u+=i[e.data.index]}while(e=e.next)}t.value=u}function y(t,e,o,u){
if(!t.value)return!0;var l=t.x-n.x,h=t.y-n.y,d=u-e,p=l*l+h*h
;if(d*d/s<p)return p<f&&(0===l&&(p+=(l=a())*l),
0===h&&(p+=(h=a())*h),p<c&&(p=Math.sqrt(c*p)),
n.vx+=l*t.value*r/p,n.vy+=h*t.value*r/p),!0;if(!(t.length||p>=f)){
(t.data!==n||t.next)&&(0===l&&(p+=(l=a())*l),
0===h&&(p+=(h=a())*h),p<c&&(p=Math.sqrt(c*p)));do{
t.data!==n&&(d=i[t.data.index]*r/p,n.vx+=l*d,n.vy+=h*d)}while(t=t.next)}}
return d.initialize=function(e){t=e,p()},d.strength=function(t){
return arguments.length?(u="function"==typeof t?t:o(+t),p(),d):u
},d.distanceMin=function(t){return arguments.length?(c=t*t,d):Math.sqrt(c)
},d.distanceMax=function(t){return arguments.length?(f=t*t,d):Math.sqrt(f)
},d.theta=function(t){return arguments.length?(s=t*t,d):Math.sqrt(s)},d
},t.forceRadial=function(t,e,n){var r,i,a,u=o(.1);function c(t){
for(var o=0,u=r.length;o<u;++o){
var c=r[o],f=c.x-e||1e-6,s=c.y-n||1e-6,l=Math.sqrt(f*f+s*s),h=(a[o]-l)*i[o]*t/l
;c.vx+=f*h,c.vy+=s*h}}function f(){if(r){var e,n=r.length
;for(i=new Array(n),a=new Array(n),
e=0;e<n;++e)a[e]=+t(r[e],e,r),i[e]=isNaN(a[e])?0:+u(r[e],e,r)}}
return"function"!=typeof t&&(t=o(+t)),
null==e&&(e=0),null==n&&(n=0),c.initialize=function(t){r=t,f()
},c.strength=function(t){
return arguments.length?(u="function"==typeof t?t:o(+t),f(),c):u
},c.radius=function(e){
return arguments.length?(t="function"==typeof e?e:o(+e),f(),c):t
},c.x=function(t){return arguments.length?(e=+t,c):e},c.y=function(t){
return arguments.length?(n=+t,c):n},c},t.forceSimulation=function(t){
var e,o=1,a=.001,u=1-Math.pow(a,1/300),c=0,f=.6,s=n.map(),l=i.timer(p),h=r.dispatch("tick","end")
;function p(){v(),h.call("tick",e),o<a&&(l.stop(),h.call("end",e))}
function v(n){var r,i,a=t.length;void 0===n&&(n=1)
;for(var l=0;l<n;++l)for(o+=(c-o)*u,s.each((function(t){t(o)
})),r=0;r<a;++r)null==(i=t[r]).fx?i.x+=i.vx*=f:(i.x=i.fx,
i.vx=0),null==i.fy?i.y+=i.vy*=f:(i.y=i.fy,i.vy=0);return e}function y(){
for(var e,n=0,r=t.length;n<r;++n){
if((e=t[n]).index=n,null!=e.fx&&(e.x=e.fx),null!=e.fy&&(e.y=e.fy),
isNaN(e.x)||isNaN(e.y)){var i=10*Math.sqrt(n),o=n*d
;e.x=i*Math.cos(o),e.y=i*Math.sin(o)}(isNaN(e.vx)||isNaN(e.vy))&&(e.vx=e.vy=0)}}
function g(e){return e.initialize&&e.initialize(t),e}return null==t&&(t=[]),y(),
e={tick:v,restart:function(){return l.restart(p),e},stop:function(){
return l.stop(),e},nodes:function(n){return arguments.length?(t=n,y(),s.each(g),
e):t},alpha:function(t){return arguments.length?(o=+t,e):o},
alphaMin:function(t){return arguments.length?(a=+t,e):a},alphaDecay:function(t){
return arguments.length?(u=+t,e):+u},alphaTarget:function(t){
return arguments.length?(c=+t,e):c},velocityDecay:function(t){
return arguments.length?(f=1-t,e):1-f},force:function(t,n){
return arguments.length>1?(null==n?s.remove(t):s.set(t,g(n)),e):s.get(t)},
find:function(e,n,r){var i,o,a,u,c,f=0,s=t.length
;for(null==r?r=1/0:r*=r,f=0;f<s;++f)(a=(i=e-(u=t[f]).x)*i+(o=n-u.y)*o)<r&&(c=u,
r=a);return c},on:function(t,n){return arguments.length>1?(h.on(t,n),e):h.on(t)}
}},t.forceX=function(t){var e,n,r,i=o(.1);function a(t){
for(var i,o=0,a=e.length;o<a;++o)(i=e[o]).vx+=(r[o]-i.x)*n[o]*t}function u(){
if(e){var o,a=e.length
;for(n=new Array(a),r=new Array(a),o=0;o<a;++o)n[o]=isNaN(r[o]=+t(e[o],o,e))?0:+i(e[o],o,e)
}}return"function"!=typeof t&&(t=o(null==t?0:+t)),a.initialize=function(t){
e=t,u()},a.strength=function(t){
return arguments.length?(i="function"==typeof t?t:o(+t),u(),a):i
},a.x=function(e){
return arguments.length?(t="function"==typeof e?e:o(+e),u(),a):t},a
},t.forceY=function(t){var e,n,r,i=o(.1);function a(t){
for(var i,o=0,a=e.length;o<a;++o)(i=e[o]).vy+=(r[o]-i.y)*n[o]*t}function u(){
if(e){var o,a=e.length
;for(n=new Array(a),r=new Array(a),o=0;o<a;++o)n[o]=isNaN(r[o]=+t(e[o],o,e))?0:+i(e[o],o,e)
}}return"function"!=typeof t&&(t=o(null==t?0:+t)),a.initialize=function(t){
e=t,u()},a.strength=function(t){
return arguments.length?(i="function"==typeof t?t:o(+t),u(),a):i
},a.y=function(e){
return arguments.length?(t="function"==typeof e?e:o(+e),u(),a):t},a
},Object.defineProperty(t,"__esModule",{value:!0})}))},{"d3-collection":33,
"d3-dispatch":36,"d3-quadtree":48,"d3-timer":56}],42:[function(t,e,n){
!function(t,r){"object"==typeof n&&void 0!==e?r(n):r((t=t||self).d3=t.d3||{})
}(this,(function(t){"use strict";function e(t,e){
if((n=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null
;var n,r=t.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+t.slice(n+1)]}
function n(t){return(t=e(Math.abs(t)))?t[1]:NaN}
var r,i=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i
;function o(t){if(!(e=i.exec(t)))throw new Error("invalid format: "+t);var e
;return new a({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],
comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}function a(t){
this.fill=void 0===t.fill?" ":t.fill+"",
this.align=void 0===t.align?">":t.align+"",
this.sign=void 0===t.sign?"-":t.sign+"",
this.symbol=void 0===t.symbol?"":t.symbol+"",
this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,
this.comma=!!t.comma,
this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,
this.type=void 0===t.type?"":t.type+""}function u(t,n){var r=e(t,n)
;if(!r)return t+"";var i=r[0],o=r[1]
;return o<0?"0."+new Array(-o).join("0")+i:i.length>o+1?i.slice(0,o+1)+"."+i.slice(o+1):i+new Array(o-i.length+2).join("0")
}o.prototype=a.prototype,a.prototype.toString=function(){
return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type
};var c={"%":function(t,e){return(100*t).toFixed(e)},b:function(t){
return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){
return Math.round(t).toString(10)},e:function(t,e){return t.toExponential(e)},
f:function(t,e){return t.toFixed(e)},g:function(t,e){return t.toPrecision(e)},
o:function(t){return Math.round(t).toString(8)},p:function(t,e){
return u(100*t,e)},r:u,s:function(t,n){var i=e(t,n);if(!i)return t+""
;var o=i[0],a=i[1],u=a-(r=3*Math.max(-8,Math.min(8,Math.floor(a/3))))+1,c=o.length
;return u===c?o:u>c?o+new Array(u-c+1).join("0"):u>0?o.slice(0,u)+"."+o.slice(u):"0."+new Array(1-u).join("0")+e(t,Math.max(0,n+u-1))[0]
},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){
return Math.round(t).toString(16)}};function f(t){return t}
var s,l=Array.prototype.map,h=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"]
;function d(t){var e=void 0===t.grouping||void 0===t.thousands?f:function(t,e){
return function(n,r){
for(var i=n.length,o=[],a=0,u=t[0],c=0;i>0&&u>0&&(c+u+1>r&&(u=Math.max(1,r-c)),
o.push(n.substring(i-=u,i+u)),!((c+=u+1)>r));)u=t[a=(a+1)%t.length]
;return o.reverse().join(e)}
}(l.call(t.grouping,Number),t.thousands+""),i=void 0===t.currency?"":t.currency[0]+"",a=void 0===t.currency?"":t.currency[1]+"",u=void 0===t.decimal?".":t.decimal+"",s=void 0===t.numerals?f:function(t){
return function(e){return e.replace(/[0-9]/g,(function(e){return t[+e]}))}
}(l.call(t.numerals,String)),d=void 0===t.percent?"%":t.percent+"",p=void 0===t.minus?"-":t.minus+"",v=void 0===t.nan?"NaN":t.nan+""
;function y(t){
var n=(t=o(t)).fill,f=t.align,l=t.sign,y=t.symbol,g=t.zero,b=t.width,_=t.comma,m=t.precision,x=t.trim,w=t.type
;"n"===w?(_=!0,
w="g"):c[w]||(void 0===m&&(m=12),x=!0,w="g"),(g||"0"===n&&"="===f)&&(g=!0,n="0",
f="=")
;var M="$"===y?i:"#"===y&&/[boxX]/.test(w)?"0"+w.toLowerCase():"",E="$"===y?a:/[%p]/.test(w)?d:"",k=c[w],A=/[defgprs%]/.test(w)
;function S(t){var i,o,a,c=M,d=E;if("c"===w)d=k(t)+d,t="";else{var y=(t=+t)<0
;if(t=isNaN(t)?v:k(Math.abs(t),m),x&&(t=function(t){
t:for(var e,n=t.length,r=1,i=-1;r<n;++r)switch(t[r]){case".":i=e=r;break
;case"0":0===i&&(i=r),e=r;break;default:if(i>0){if(!+t[r])break t;i=0}}
return i>0?t.slice(0,i)+t.slice(e+1):t
}(t)),y&&0==+t&&(y=!1),c=(y?"("===l?l:p:"-"===l||"("===l?"":l)+c,
d=("s"===w?h[8+r/3]:"")+d+(y&&"("===l?")":""),
A)for(i=-1,o=t.length;++i<o;)if(48>(a=t.charCodeAt(i))||a>57){
d=(46===a?u+t.slice(i+1):t.slice(i))+d,t=t.slice(0,i);break}}_&&!g&&(t=e(t,1/0))
;var S=c.length+t.length+d.length,j=S<b?new Array(b-S+1).join(n):""
;switch(_&&g&&(t=e(j+t,j.length?b-d.length:1/0),j=""),f){case"<":t=c+t+d+j;break
;case"=":t=c+j+t+d;break;case"^":t=j.slice(0,S=j.length>>1)+c+t+d+j.slice(S)
;break;default:t=j+c+t+d}return s(t)}
return m=void 0===m?6:/[gprs]/.test(w)?Math.max(1,Math.min(21,m)):Math.max(0,Math.min(20,m)),
S.toString=function(){return t+""},S}return{format:y,formatPrefix:function(t,e){
var r=y(((t=o(t)).type="f",
t)),i=3*Math.max(-8,Math.min(8,Math.floor(n(e)/3))),a=Math.pow(10,-i),u=h[8+i/3]
;return function(t){return r(a*t)+u}}}}function p(e){
return s=d(e),t.format=s.format,t.formatPrefix=s.formatPrefix,s}p({decimal:".",
thousands:",",grouping:[3],currency:["$",""],minus:"-"
}),t.FormatSpecifier=a,t.formatDefaultLocale=p,
t.formatLocale=d,t.formatSpecifier=o,t.precisionFixed=function(t){
return Math.max(0,-n(Math.abs(t)))},t.precisionPrefix=function(t,e){
return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(n(e)/3)))-n(Math.abs(t)))
},t.precisionRound=function(t,e){
return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,n(e)-n(t))+1
},Object.defineProperty(t,"__esModule",{value:!0})}))},{}],43:[function(t,e,n){
!function(r,i){
"object"==typeof n&&void 0!==e?i(n,t("d3-array")):i((r=r||self).d3=r.d3||{},r.d3)
}(this,(function(t,e){"use strict";function n(){return new r}function r(){
this.reset()}r.prototype={constructor:r,reset:function(){this.s=this.t=0},
add:function(t){o(i,t,this.t),o(this,i.s,this.s),this.s?this.t+=i.t:this.s=i.t},
valueOf:function(){return this.s}};var i=new r;function o(t,e,n){
var r=t.s=e+n,i=r-e,o=r-i;t.t=e-o+(n-i)}
var a=1e-6,u=1e-12,c=Math.PI,f=c/2,s=c/4,l=2*c,h=180/c,d=c/180,p=Math.abs,v=Math.atan,y=Math.atan2,g=Math.cos,b=Math.ceil,_=Math.exp,m=Math.log,x=Math.pow,w=Math.sin,M=Math.sign||function(t){
return t>0?1:t<0?-1:0},E=Math.sqrt,k=Math.tan;function A(t){
return t>1?0:t<-1?c:Math.acos(t)}function S(t){return t>1?f:t<-1?-f:Math.asin(t)
}function j(t){return(t=w(t/2))*t}function N(){}function T(t,e){
t&&O.hasOwnProperty(t.type)&&O[t.type](t,e)}var C={Feature:function(t,e){
T(t.geometry,e)},FeatureCollection:function(t,e){
for(var n=t.features,r=-1,i=n.length;++r<i;)T(n[r].geometry,e)}},O={
Sphere:function(t,e){e.sphere()},Point:function(t,e){
t=t.coordinates,e.point(t[0],t[1],t[2])},MultiPoint:function(t,e){
for(var n=t.coordinates,r=-1,i=n.length;++r<i;)t=n[r],e.point(t[0],t[1],t[2])},
LineString:function(t,e){P(t.coordinates,e,0)},MultiLineString:function(t,e){
for(var n=t.coordinates,r=-1,i=n.length;++r<i;)P(n[r],e,0)},
Polygon:function(t,e){I(t.coordinates,e)},MultiPolygon:function(t,e){
for(var n=t.coordinates,r=-1,i=n.length;++r<i;)I(n[r],e)},
GeometryCollection:function(t,e){
for(var n=t.geometries,r=-1,i=n.length;++r<i;)T(n[r],e)}};function P(t,e,n){
var r,i=-1,o=t.length-n;for(e.lineStart();++i<o;)r=t[i],e.point(r[0],r[1],r[2])
;e.lineEnd()}function I(t,e){var n=-1,r=t.length
;for(e.polygonStart();++n<r;)P(t[n],e,1);e.polygonEnd()}function L(t,e){
t&&C.hasOwnProperty(t.type)?C[t.type](t,e):T(t,e)}var R,z,D,F,B,q=n(),U=n(),Y={
point:N,lineStart:N,lineEnd:N,polygonStart:function(){
q.reset(),Y.lineStart=G,Y.lineEnd=V},polygonEnd:function(){var t=+q
;U.add(t<0?l+t:t),this.lineStart=this.lineEnd=this.point=N},sphere:function(){
U.add(l)}};function G(){Y.point=H}function V(){K(R,z)}function H(t,e){Y.point=K,
R=t,z=e,D=t*=d,F=g(e=(e*=d)/2+s),B=w(e)}function K(t,e){
var n=(t*=d)-D,r=n>=0?1:-1,i=r*n,o=g(e=(e*=d)/2+s),a=w(e),u=B*a,c=F*o+u*g(i),f=u*r*w(i)
;q.add(y(f,c)),D=t,F=o,B=a}function X(t){return[y(t[1],t[0]),S(t[2])]}
function W(t){var e=t[0],n=t[1],r=g(n);return[r*g(e),r*w(e),w(n)]}
function $(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function Z(t,e){
return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}
function Q(t,e){t[0]+=e[0],t[1]+=e[1],t[2]+=e[2]}function J(t,e){
return[t[0]*e,t[1]*e,t[2]*e]}function tt(t){
var e=E(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=e,t[1]/=e,t[2]/=e}
var et,nt,rt,it,ot,at,ut,ct,ft,st,lt,ht,dt,pt,vt,yt,gt,bt,_t,mt,xt,wt,Mt,Et,kt,At,St=n(),jt={
point:Nt,lineStart:Ct,lineEnd:Ot,polygonStart:function(){
jt.point=Pt,jt.lineStart=It,jt.lineEnd=Lt,St.reset(),Y.polygonStart()},
polygonEnd:function(){
Y.polygonEnd(),jt.point=Nt,jt.lineStart=Ct,jt.lineEnd=Ot,q<0?(et=-(rt=180),
nt=-(it=90)):St>a?it=90:St<-a&&(nt=-90),st[0]=et,st[1]=rt},sphere:function(){
et=-(rt=180),nt=-(it=90)}};function Nt(t,e){
ft.push(st=[et=t,rt=t]),e<nt&&(nt=e),e>it&&(it=e)}function Tt(t,e){
var n=W([t*d,e*d]);if(ct){var r=Z(ct,n),i=Z([r[1],-r[0],0],r);tt(i),i=X(i)
;var o,a=t-ot,u=a>0?1:-1,c=i[0]*h*u,f=p(a)>180
;f^(u*ot<c&&c<u*t)?(o=i[1]*h)>it&&(it=o):f^(u*ot<(c=(c+360)%360-180)&&c<u*t)?(o=-i[1]*h)<nt&&(nt=o):(e<nt&&(nt=e),
e>it&&(it=e)),
f?t<ot?Rt(et,t)>Rt(et,rt)&&(rt=t):Rt(t,rt)>Rt(et,rt)&&(et=t):rt>=et?(t<et&&(et=t),
t>rt&&(rt=t)):t>ot?Rt(et,t)>Rt(et,rt)&&(rt=t):Rt(t,rt)>Rt(et,rt)&&(et=t)
}else ft.push(st=[et=t,rt=t]);e<nt&&(nt=e),e>it&&(it=e),ct=n,ot=t}function Ct(){
jt.point=Tt}function Ot(){st[0]=et,st[1]=rt,jt.point=Nt,ct=null}
function Pt(t,e){if(ct){var n=t-ot;St.add(p(n)>180?n+(n>0?360:-360):n)
}else at=t,ut=e;Y.point(t,e),Tt(t,e)}function It(){Y.lineStart()}function Lt(){
Pt(at,ut),Y.lineEnd(),p(St)>a&&(et=-(rt=180)),st[0]=et,st[1]=rt,ct=null}
function Rt(t,e){return(e-=t)<0?e+360:e}function zt(t,e){return t[0]-e[0]}
function Dt(t,e){return t[0]<=t[1]?t[0]<=e&&e<=t[1]:e<t[0]||t[1]<e}var Ft={
sphere:N,point:Bt,lineStart:Ut,lineEnd:Vt,polygonStart:function(){
Ft.lineStart=Ht,Ft.lineEnd=Kt},polygonEnd:function(){
Ft.lineStart=Ut,Ft.lineEnd=Vt}};function Bt(t,e){t*=d;var n=g(e*=d)
;qt(n*g(t),n*w(t),w(e))}function qt(t,e,n){
++lt,dt+=(t-dt)/lt,pt+=(e-pt)/lt,vt+=(n-vt)/lt}function Ut(){Ft.point=Yt}
function Yt(t,e){t*=d;var n=g(e*=d)
;Et=n*g(t),kt=n*w(t),At=w(e),Ft.point=Gt,qt(Et,kt,At)}function Gt(t,e){t*=d
;var n=g(e*=d),r=n*g(t),i=n*w(t),o=w(e),a=y(E((a=kt*o-At*i)*a+(a=At*r-Et*o)*a+(a=Et*i-kt*r)*a),Et*r+kt*i+At*o)
;ht+=a,yt+=a*(Et+(Et=r)),gt+=a*(kt+(kt=i)),bt+=a*(At+(At=o)),qt(Et,kt,At)}
function Vt(){Ft.point=Bt}function Ht(){Ft.point=Xt}function Kt(){
Wt(wt,Mt),Ft.point=Bt}function Xt(t,e){wt=t,Mt=e,t*=d,e*=d,Ft.point=Wt
;var n=g(e);Et=n*g(t),kt=n*w(t),At=w(e),qt(Et,kt,At)}function Wt(t,e){t*=d
;var n=g(e*=d),r=n*g(t),i=n*w(t),o=w(e),a=kt*o-At*i,u=At*r-Et*o,c=Et*i-kt*r,f=E(a*a+u*u+c*c),s=S(f),l=f&&-s/f
;_t+=l*a,
mt+=l*u,xt+=l*c,ht+=s,yt+=s*(Et+(Et=r)),gt+=s*(kt+(kt=i)),bt+=s*(At+(At=o)),
qt(Et,kt,At)}function $t(t){return function(){return t}}function Zt(t,e){
function n(n,r){return n=t(n,r),e(n[0],n[1])}
return t.invert&&e.invert&&(n.invert=function(n,r){
return(n=e.invert(n,r))&&t.invert(n[0],n[1])}),n}function Qt(t,e){
return[p(t)>c?t+Math.round(-t/l)*l:t,e]}function Jt(t,e,n){
return(t%=l)?e||n?Zt(ee(t),ne(e,n)):ee(t):e||n?ne(e,n):Qt}function te(t){
return function(e,n){return[(e+=t)>c?e-l:e<-c?e+l:e,n]}}function ee(t){
var e=te(t);return e.invert=te(-t),e}function ne(t,e){
var n=g(t),r=w(t),i=g(e),o=w(e);function a(t,e){
var a=g(e),u=g(t)*a,c=w(t)*a,f=w(e),s=f*n+u*r
;return[y(c*i-s*o,u*n-f*r),S(s*i+c*o)]}return a.invert=function(t,e){
var a=g(e),u=g(t)*a,c=w(t)*a,f=w(e),s=f*i-c*o
;return[y(c*i+f*o,u*n+s*r),S(s*n-u*r)]},a}function re(t){function e(e){
return(e=t(e[0]*d,e[1]*d))[0]*=h,e[1]*=h,e}
return t=Jt(t[0]*d,t[1]*d,t.length>2?t[2]*d:0),e.invert=function(e){
return(e=t.invert(e[0]*d,e[1]*d))[0]*=h,e[1]*=h,e},e}function ie(t,e,n,r,i,o){
if(n){var a=g(e),u=w(e),c=r*n
;null==i?(i=e+r*l,o=e-c/2):(i=oe(a,i),o=oe(a,o),(r>0?i<o:i>o)&&(i+=r*l))
;for(var f,s=i;r>0?s>o:s<o;s-=c)f=X([a,-u*g(s),-u*w(s)]),t.point(f[0],f[1])}}
function oe(t,e){(e=W(e))[0]-=t,tt(e);var n=A(-e[1])
;return((-e[2]<0?-n:n)+l-a)%l}function ae(){var t,e=[];return{
point:function(e,n){t.push([e,n])},lineStart:function(){e.push(t=[])},lineEnd:N,
rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},
result:function(){var n=e;return e=[],t=null,n}}}function ue(t,e){
return p(t[0]-e[0])<a&&p(t[1]-e[1])<a}function ce(t,e,n,r){
this.x=t,this.z=e,this.o=n,this.e=r,this.v=!1,this.n=this.p=null}
function fe(t,e,n,r,i){var o,a,u=[],c=[];if(t.forEach((function(t){
if(!((e=t.length-1)<=0)){var e,n,r=t[0],a=t[e];if(ue(r,a)){
for(i.lineStart(),o=0;o<e;++o)i.point((r=t[o])[0],r[1]);i.lineEnd()
}else u.push(n=new ce(r,t,null,!0)),
c.push(n.o=new ce(r,null,n,!1)),u.push(n=new ce(a,t,null,!1)),
c.push(n.o=new ce(a,null,n,!0))}})),u.length){
for(c.sort(e),se(u),se(c),o=0,a=c.length;o<a;++o)c[o].e=n=!n
;for(var f,s,l=u[0];;){for(var h=l,d=!0;h.v;)if((h=h.n)===l)return
;f=h.z,i.lineStart();do{if(h.v=h.o.v=!0,h.e){
if(d)for(o=0,a=f.length;o<a;++o)i.point((s=f[o])[0],s[1]);else r(h.x,h.n.x,1,i)
;h=h.n}else{
if(d)for(f=h.p.z,o=f.length-1;o>=0;--o)i.point((s=f[o])[0],s[1]);else r(h.x,h.p.x,-1,i)
;h=h.p}f=(h=h.o).z,d=!d}while(!h.v);i.lineEnd()}}}function se(t){if(e=t.length){
for(var e,n,r=0,i=t[0];++r<e;)i.n=n=t[r],n.p=i,i=n;i.n=n=t[0],n.p=i}}
Qt.invert=Qt;var le=n();function he(t){
return p(t[0])<=c?t[0]:M(t[0])*((p(t[0])+c)%l-c)}function de(t,e){
var n=he(e),r=e[1],i=w(r),o=[w(n),-g(n),0],u=0,h=0
;le.reset(),1===i?r=f+a:-1===i&&(r=-f-a)
;for(var d=0,p=t.length;d<p;++d)if(b=(v=t[d]).length)for(var v,b,_=v[b-1],m=he(_),x=_[1]/2+s,M=w(x),E=g(x),k=0;k<b;++k,
m=j,M=T,E=C,_=A){
var A=v[k],j=he(A),N=A[1]/2+s,T=w(N),C=g(N),O=j-m,P=O>=0?1:-1,I=P*O,L=I>c,R=M*T
;if(le.add(y(R*P*w(I),E*C+R*g(I))),u+=L?O+P*l:O,L^m>=n^j>=n){var z=Z(W(_),W(A))
;tt(z);var D=Z(o,z);tt(D);var F=(L^O>=0?-1:1)*S(D[2])
;(r>F||r===F&&(z[0]||z[1]))&&(h+=L^O>=0?1:-1)}}return(u<-a||u<a&&le<-a)^1&h}
function pe(t,n,r,i){return function(o){var a,u,c,f=n(o),s=ae(),l=n(s),h=!1,d={
point:p,lineStart:y,lineEnd:g,polygonStart:function(){
d.point=b,d.lineStart=_,d.lineEnd=m,u=[],a=[]},polygonEnd:function(){
d.point=p,d.lineStart=y,d.lineEnd=g,u=e.merge(u);var t=de(a,i)
;u.length?(h||(o.polygonStart(),
h=!0),fe(u,ye,t,r,o)):t&&(h||(o.polygonStart(),h=!0),
o.lineStart(),r(null,null,1,o),o.lineEnd()),h&&(o.polygonEnd(),h=!1),u=a=null},
sphere:function(){
o.polygonStart(),o.lineStart(),r(null,null,1,o),o.lineEnd(),o.polygonEnd()}}
;function p(e,n){t(e,n)&&o.point(e,n)}function v(t,e){f.point(t,e)}function y(){
d.point=v,f.lineStart()}function g(){d.point=p,f.lineEnd()}function b(t,e){
c.push([t,e]),l.point(t,e)}function _(){l.lineStart(),c=[]}function m(){
b(c[0][0],c[0][1]),l.lineEnd();var t,e,n,r,i=l.clean(),f=s.result(),d=f.length
;if(c.pop(),a.push(c),c=null,d)if(1&i){if((e=(n=f[0]).length-1)>0){
for(h||(o.polygonStart(),
h=!0),o.lineStart(),t=0;t<e;++t)o.point((r=n[t])[0],r[1]);o.lineEnd()}
}else d>1&&2&i&&f.push(f.pop().concat(f.shift())),u.push(f.filter(ve))}return d}
}function ve(t){return t.length>1}function ye(t,e){
return((t=t.x)[0]<0?t[1]-f-a:f-t[1])-((e=e.x)[0]<0?e[1]-f-a:f-e[1])}
var ge=pe((function(){return!0}),(function(t){var e,n=NaN,r=NaN,i=NaN;return{
lineStart:function(){t.lineStart(),e=1},point:function(o,u){
var s=o>0?c:-c,l=p(o-n)
;p(l-c)<a?(t.point(n,r=(r+u)/2>0?f:-f),t.point(i,r),t.lineEnd(),
t.lineStart(),t.point(s,r),
t.point(o,r),e=0):i!==s&&l>=c&&(p(n-i)<a&&(n-=i*a),p(o-s)<a&&(o-=s*a),
r=function(t,e,n,r){var i,o,u=w(t-n)
;return p(u)>a?v((w(e)*(o=g(r))*w(n)-w(r)*(i=g(e))*w(t))/(i*o*u)):(e+r)/2
}(n,r,o,u),
t.point(i,r),t.lineEnd(),t.lineStart(),t.point(s,r),e=0),t.point(n=o,r=u),i=s},
lineEnd:function(){t.lineEnd(),n=r=NaN},clean:function(){return 2-e}}
}),(function(t,e,n,r){var i
;if(null==t)i=n*f,r.point(-c,i),r.point(0,i),r.point(c,i),
r.point(c,0),r.point(c,-i),
r.point(0,-i),r.point(-c,-i),r.point(-c,0),r.point(-c,i);else if(p(t[0]-e[0])>a){
var o=t[0]<e[0]?c:-c;i=n*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)
}else r.point(e[0],e[1])}),[-c,-f]);function be(t){
var e=g(t),n=6*d,r=e>0,i=p(e)>a;function o(t,n){return g(t)*g(n)>e}
function u(t,n,r){var i=[1,0,0],o=Z(W(t),W(n)),u=$(o,o),f=o[0],s=u-f*f
;if(!s)return!r&&t;var l=e*u/s,h=-e*f/s,d=Z(i,o),v=J(i,l);Q(v,J(o,h))
;var y=d,g=$(v,y),b=$(y,y),_=g*g-b*($(v,v)-1);if(!(_<0)){
var m=E(_),x=J(y,(-g-m)/b);if(Q(x,v),x=X(x),!r)return x
;var w,M=t[0],k=n[0],A=t[1],S=n[1];k<M&&(w=M,M=k,k=w);var j=k-M,N=p(j-c)<a
;if(!N&&S<A&&(w=A,
A=S,S=w),N||j<a?N?A+S>0^x[1]<(p(x[0]-M)<a?A:S):A<=x[1]&&x[1]<=S:j>c^(M<=x[0]&&x[0]<=k)){
var T=J(y,(-g+m)/b);return Q(T,v),[x,X(T)]}}}function f(e,n){var i=r?t:c-t,o=0
;return e<-i?o|=1:e>i&&(o|=2),n<-i?o|=4:n>i&&(o|=8),o}return pe(o,(function(t){
var e,n,s,l,h;return{lineStart:function(){l=s=!1,h=1},point:function(d,p){
var v,y=[d,p],g=o(d,p),b=r?g?0:f(d,p):g?f(d+(d<0?c:-c),p):0
;if(!e&&(l=s=g)&&t.lineStart(),g!==s&&(!(v=u(e,y))||ue(e,v)||ue(y,v))&&(y[0]+=a,
y[1]+=a,
g=o(y[0],y[1])),g!==s)h=0,g?(t.lineStart(),v=u(y,e),t.point(v[0],v[1])):(v=u(e,y),
t.point(v[0],v[1]),t.lineEnd()),e=v;else if(i&&e&&r^g){var _
;b&n||!(_=u(y,e,!0))||(h=0,
r?(t.lineStart(),t.point(_[0][0],_[0][1]),t.point(_[1][0],_[1][1]),
t.lineEnd()):(t.point(_[1][0],_[1][1]),
t.lineEnd(),t.lineStart(),t.point(_[0][0],_[0][1])))}
!g||e&&ue(e,y)||t.point(y[0],y[1]),e=y,s=g,n=b},lineEnd:function(){
s&&t.lineEnd(),e=null},clean:function(){return h|(l&&s)<<1}}
}),(function(e,r,i,o){ie(o,t,n,i,e,r)}),r?[0,-t]:[-c,t-c])}var _e=1e9,me=-_e
;function xe(t,n,r,i){function o(e,o){return t<=e&&e<=r&&n<=o&&o<=i}
function u(e,o,a,u){var f=0,l=0
;if(null==e||(f=c(e,a))!==(l=c(o,a))||s(e,o)<0^a>0)do{
u.point(0===f||3===f?t:r,f>1?i:n)
}while((f=(f+a+4)%4)!==l);else u.point(o[0],o[1])}function c(e,i){
return p(e[0]-t)<a?i>0?0:3:p(e[0]-r)<a?i>0?2:1:p(e[1]-n)<a?i>0?1:0:i>0?3:2}
function f(t,e){return s(t.x,e.x)}function s(t,e){var n=c(t,1),r=c(e,1)
;return n!==r?n-r:0===n?e[1]-t[1]:1===n?t[0]-e[0]:2===n?t[1]-e[1]:e[0]-t[0]}
return function(a){var c,s,l,h,d,p,v,y,g,b,_,m=a,x=ae(),w={point:M,
lineStart:function(){w.point=E,s&&s.push(l=[]);b=!0,g=!1,v=y=NaN},
lineEnd:function(){c&&(E(h,d),p&&g&&x.rejoin(),c.push(x.result()))
;w.point=M,g&&m.lineEnd()},polygonStart:function(){m=x,c=[],s=[],_=!0},
polygonEnd:function(){var n=function(){
for(var e=0,n=0,r=s.length;n<r;++n)for(var o,a,u=s[n],c=1,f=u.length,l=u[0],h=l[0],d=l[1];c<f;++c)o=h,
a=d,
h=(l=u[c])[0],d=l[1],a<=i?d>i&&(h-o)*(i-a)>(d-a)*(t-o)&&++e:d<=i&&(h-o)*(i-a)<(d-a)*(t-o)&&--e
;return e}(),r=_&&n,o=(c=e.merge(c)).length
;(r||o)&&(a.polygonStart(),r&&(a.lineStart(),
u(null,null,1,a),a.lineEnd()),o&&fe(c,f,n,u,a),a.polygonEnd());m=a,c=s=l=null}}
;function M(t,e){o(t,e)&&m.point(t,e)}function E(e,a){var u=o(e,a)
;if(s&&l.push([e,a]),
b)h=e,d=a,p=u,b=!1,u&&(m.lineStart(),m.point(e,a));else if(u&&g)m.point(e,a);else{
var c=[v=Math.max(me,Math.min(_e,v)),y=Math.max(me,Math.min(_e,y))],f=[e=Math.max(me,Math.min(_e,e)),a=Math.max(me,Math.min(_e,a))]
;!function(t,e,n,r,i,o){var a,u=t[0],c=t[1],f=0,s=1,l=e[0]-u,h=e[1]-c
;if(a=n-u,l||!(a>0)){if(a/=l,l<0){if(a<f)return;a<s&&(s=a)}else if(l>0){
if(a>s)return;a>f&&(f=a)}if(a=i-u,l||!(a<0)){if(a/=l,l<0){if(a>s)return
;a>f&&(f=a)}else if(l>0){if(a<f)return;a<s&&(s=a)}if(a=r-c,h||!(a>0)){
if(a/=h,h<0){if(a<f)return;a<s&&(s=a)}else if(h>0){if(a>s)return;a>f&&(f=a)}
if(a=o-c,h||!(a<0)){if(a/=h,h<0){if(a>s)return;a>f&&(f=a)}else if(h>0){
if(a<f)return;a<s&&(s=a)}
return f>0&&(t[0]=u+f*l,t[1]=c+f*h),s<1&&(e[0]=u+s*l,e[1]=c+s*h),!0}}}}
}(c,f,t,n,r,i)?u&&(m.lineStart(),
m.point(e,a),_=!1):(g||(m.lineStart(),m.point(c[0],c[1])),
m.point(f[0],f[1]),u||m.lineEnd(),_=!1)}v=e,y=a,g=u}return w}}
var we,Me,Ee,ke=n(),Ae={sphere:N,point:N,lineStart:function(){
Ae.point=je,Ae.lineEnd=Se},lineEnd:N,polygonStart:N,polygonEnd:N};function Se(){
Ae.point=Ae.lineEnd=N}function je(t,e){we=t*=d,Me=w(e*=d),Ee=g(e),Ae.point=Ne}
function Ne(t,e){t*=d
;var n=w(e*=d),r=g(e),i=p(t-we),o=g(i),a=r*w(i),u=Ee*n-Me*r*o,c=Me*n+Ee*r*o
;ke.add(y(E(a*a+u*u),c)),we=t,Me=n,Ee=r}function Te(t){
return ke.reset(),L(t,Ae),+ke}var Ce=[null,null],Oe={type:"LineString",
coordinates:Ce};function Pe(t,e){return Ce[0]=t,Ce[1]=e,Te(Oe)}var Ie={
Feature:function(t,e){return Re(t.geometry,e)},FeatureCollection:function(t,e){
for(var n=t.features,r=-1,i=n.length;++r<i;)if(Re(n[r].geometry,e))return!0
;return!1}},Le={Sphere:function(){return!0},Point:function(t,e){
return ze(t.coordinates,e)},MultiPoint:function(t,e){
for(var n=t.coordinates,r=-1,i=n.length;++r<i;)if(ze(n[r],e))return!0;return!1},
LineString:function(t,e){return De(t.coordinates,e)},
MultiLineString:function(t,e){
for(var n=t.coordinates,r=-1,i=n.length;++r<i;)if(De(n[r],e))return!0;return!1},
Polygon:function(t,e){return Fe(t.coordinates,e)},MultiPolygon:function(t,e){
for(var n=t.coordinates,r=-1,i=n.length;++r<i;)if(Fe(n[r],e))return!0;return!1},
GeometryCollection:function(t,e){
for(var n=t.geometries,r=-1,i=n.length;++r<i;)if(Re(n[r],e))return!0;return!1}}
;function Re(t,e){return!(!t||!Le.hasOwnProperty(t.type))&&Le[t.type](t,e)}
function ze(t,e){return 0===Pe(t,e)}function De(t,e){
for(var n,r,i,o=0,a=t.length;o<a;o++){if(0===(r=Pe(t[o],e)))return!0
;if(o>0&&(i=Pe(t[o],t[o-1]))>0&&n<=i&&r<=i&&(n+r-i)*(1-Math.pow((n-r)/i,2))<u*i)return!0
;n=r}return!1}function Fe(t,e){return!!de(t.map(Be),qe(e))}function Be(t){
return(t=t.map(qe)).pop(),t}function qe(t){return[t[0]*d,t[1]*d]}
function Ue(t,n,r){var i=e.range(t,n-a,r).concat(n);return function(t){
return i.map((function(e){return[t,e]}))}}function Ye(t,n,r){
var i=e.range(t,n-a,r).concat(n);return function(t){return i.map((function(e){
return[e,t]}))}}function Ge(){
var t,n,r,i,o,u,c,f,s,l,h,d,v=10,y=v,g=90,_=360,m=2.5;function x(){return{
type:"MultiLineString",coordinates:w()}}function w(){
return e.range(b(i/g)*g,r,g).map(h).concat(e.range(b(f/_)*_,c,_).map(d)).concat(e.range(b(n/v)*v,t,v).filter((function(t){
return p(t%g)>a})).map(s)).concat(e.range(b(u/y)*y,o,y).filter((function(t){
return p(t%_)>a})).map(l))}return x.lines=function(){
return w().map((function(t){return{type:"LineString",coordinates:t}}))
},x.outline=function(){return{type:"Polygon",
coordinates:[h(i).concat(d(c).slice(1),h(r).reverse().slice(1),d(f).reverse().slice(1))]
}},x.extent=function(t){
return arguments.length?x.extentMajor(t).extentMinor(t):x.extentMinor()
},x.extentMajor=function(t){
return arguments.length?(i=+t[0][0],r=+t[1][0],f=+t[0][1],
c=+t[1][1],i>r&&(t=i,i=r,r=t),f>c&&(t=f,f=c,c=t),x.precision(m)):[[i,f],[r,c]]},
x.extentMinor=function(e){
return arguments.length?(n=+e[0][0],t=+e[1][0],u=+e[0][1],
o=+e[1][1],n>t&&(e=n,n=t,t=e),u>o&&(e=u,u=o,o=e),x.precision(m)):[[n,u],[t,o]]},
x.step=function(t){
return arguments.length?x.stepMajor(t).stepMinor(t):x.stepMinor()
},x.stepMajor=function(t){return arguments.length?(g=+t[0],_=+t[1],x):[g,_]
},x.stepMinor=function(t){return arguments.length?(v=+t[0],y=+t[1],x):[v,y]
},x.precision=function(e){
return arguments.length?(m=+e,s=Ue(u,o,90),l=Ye(n,t,m),h=Ue(f,c,90),d=Ye(i,r,m),
x):m
},x.extentMajor([[-180,-89.999999],[180,89.999999]]).extentMinor([[-180,-80.000001],[180,80.000001]])
}function Ve(t){return t}var He,Ke,Xe,We,$e=n(),Ze=n(),Qe={point:N,lineStart:N,
lineEnd:N,polygonStart:function(){Qe.lineStart=Je,Qe.lineEnd=nn},
polygonEnd:function(){
Qe.lineStart=Qe.lineEnd=Qe.point=N,$e.add(p(Ze)),Ze.reset()},result:function(){
var t=$e/2;return $e.reset(),t}};function Je(){Qe.point=tn}function tn(t,e){
Qe.point=en,He=Xe=t,Ke=We=e}function en(t,e){Ze.add(We*t-Xe*e),Xe=t,We=e}
function nn(){en(He,Ke)}var rn=1/0,on=rn,an=-rn,un=an,cn={point:function(t,e){
t<rn&&(rn=t);t>an&&(an=t);e<on&&(on=e);e>un&&(un=e)},lineStart:N,lineEnd:N,
polygonStart:N,polygonEnd:N,result:function(){var t=[[rn,on],[an,un]]
;return an=un=-(on=rn=1/0),t}}
;var fn,sn,ln,hn,dn=0,pn=0,vn=0,yn=0,gn=0,bn=0,_n=0,mn=0,xn=0,wn={point:Mn,
lineStart:En,lineEnd:Sn,polygonStart:function(){wn.lineStart=jn,wn.lineEnd=Nn},
polygonEnd:function(){wn.point=Mn,wn.lineStart=En,wn.lineEnd=Sn},
result:function(){
var t=xn?[_n/xn,mn/xn]:bn?[yn/bn,gn/bn]:vn?[dn/vn,pn/vn]:[NaN,NaN]
;return dn=pn=vn=yn=gn=bn=_n=mn=xn=0,t}};function Mn(t,e){dn+=t,pn+=e,++vn}
function En(){wn.point=kn}function kn(t,e){wn.point=An,Mn(ln=t,hn=e)}
function An(t,e){var n=t-ln,r=e-hn,i=E(n*n+r*r)
;yn+=i*(ln+t)/2,gn+=i*(hn+e)/2,bn+=i,Mn(ln=t,hn=e)}function Sn(){wn.point=Mn}
function jn(){wn.point=Tn}function Nn(){Cn(fn,sn)}function Tn(t,e){
wn.point=Cn,Mn(fn=ln=t,sn=hn=e)}function Cn(t,e){var n=t-ln,r=e-hn,i=E(n*n+r*r)
;yn+=i*(ln+t)/2,
gn+=i*(hn+e)/2,bn+=i,_n+=(i=hn*t-ln*e)*(ln+t),mn+=i*(hn+e),xn+=3*i,Mn(ln=t,hn=e)
}function On(t){this._context=t}On.prototype={_radius:4.5,
pointRadius:function(t){return this._radius=t,this},polygonStart:function(){
this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){
this._point=0},lineEnd:function(){
0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,e){
switch(this._point){case 0:this._context.moveTo(t,e),this._point=1;break;case 1:
this._context.lineTo(t,e);break;default:
this._context.moveTo(t+this._radius,e),this._context.arc(t,e,this._radius,0,l)}
},result:N};var Pn,In,Ln,Rn,zn,Dn=n(),Fn={point:N,lineStart:function(){
Fn.point=Bn},lineEnd:function(){Pn&&qn(In,Ln),Fn.point=N},
polygonStart:function(){Pn=!0},polygonEnd:function(){Pn=null},result:function(){
var t=+Dn;return Dn.reset(),t}};function Bn(t,e){Fn.point=qn,In=Rn=t,Ln=zn=e}
function qn(t,e){Rn-=t,zn-=e,Dn.add(E(Rn*Rn+zn*zn)),Rn=t,zn=e}function Un(){
this._string=[]}function Yn(t){
return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}
function Gn(t){return function(e){var n=new Vn;for(var r in t)n[r]=t[r]
;return n.stream=e,n}}function Vn(){}function Hn(t,e,n){
var r=t.clipExtent&&t.clipExtent()
;return t.scale(150).translate([0,0]),null!=r&&t.clipExtent(null),
L(n,t.stream(cn)),e(cn.result()),null!=r&&t.clipExtent(r),t}function Kn(t,e,n){
return Hn(t,(function(n){
var r=e[1][0]-e[0][0],i=e[1][1]-e[0][1],o=Math.min(r/(n[1][0]-n[0][0]),i/(n[1][1]-n[0][1])),a=+e[0][0]+(r-o*(n[1][0]+n[0][0]))/2,u=+e[0][1]+(i-o*(n[1][1]+n[0][1]))/2
;t.scale(150*o).translate([a,u])}),n)}function Xn(t,e,n){
return Kn(t,[[0,0],e],n)}function Wn(t,e,n){return Hn(t,(function(n){
var r=+e,i=r/(n[1][0]-n[0][0]),o=(r-i*(n[1][0]+n[0][0]))/2,a=-i*n[0][1]
;t.scale(150*i).translate([o,a])}),n)}function $n(t,e,n){
return Hn(t,(function(n){
var r=+e,i=r/(n[1][1]-n[0][1]),o=-i*n[0][0],a=(r-i*(n[1][1]+n[0][1]))/2
;t.scale(150*i).translate([o,a])}),n)}Un.prototype={_radius:4.5,_circle:Yn(4.5),
pointRadius:function(t){
return(t=+t)!==this._radius&&(this._radius=t,this._circle=null),this},
polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},
lineStart:function(){this._point=0},lineEnd:function(){
0===this._line&&this._string.push("Z"),this._point=NaN},point:function(t,e){
switch(this._point){case 0:this._string.push("M",t,",",e),this._point=1;break
;case 1:this._string.push("L",t,",",e);break;default:
null==this._circle&&(this._circle=Yn(this._radius)),
this._string.push("M",t,",",e,this._circle)}},result:function(){
if(this._string.length){var t=this._string.join("");return this._string=[],t}
return null}},Vn.prototype={constructor:Vn,point:function(t,e){
this.stream.point(t,e)},sphere:function(){this.stream.sphere()},
lineStart:function(){this.stream.lineStart()},lineEnd:function(){
this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},
polygonEnd:function(){this.stream.polygonEnd()}};var Zn=g(30*d)
;function Qn(t,e){return+e?function(t,e){
function n(r,i,o,u,c,f,s,l,h,d,v,g,b,_){var m=s-r,x=l-i,w=m*m+x*x
;if(w>4*e&&b--){
var M=u+d,k=c+v,A=f+g,j=E(M*M+k*k+A*A),N=S(A/=j),T=p(p(A)-1)<a||p(o-h)<a?(o+h)/2:y(k,M),C=t(T,N),O=C[0],P=C[1],I=O-r,L=P-i,R=x*I-m*L
;(R*R/w>e||p((m*I+x*L)/w-.5)>.3||u*d+c*v+f*g<Zn)&&(n(r,i,o,u,c,f,O,P,T,M/=j,k/=j,A,b,_),
_.point(O,P),n(O,P,T,M,k,A,s,l,h,d,v,g,b,_))}}return function(e){
var r,i,o,a,u,c,f,s,l,h,d,p,v={point:y,lineStart:g,lineEnd:_,
polygonStart:function(){e.polygonStart(),v.lineStart=m},polygonEnd:function(){
e.polygonEnd(),v.lineStart=g}};function y(n,r){n=t(n,r),e.point(n[0],n[1])}
function g(){s=NaN,v.point=b,e.lineStart()}function b(r,i){
var o=W([r,i]),a=t(r,i)
;n(s,l,f,h,d,p,s=a[0],l=a[1],f=r,h=o[0],d=o[1],p=o[2],16,e),e.point(s,l)}
function _(){v.point=y,e.lineEnd()}function m(){g(),v.point=x,v.lineEnd=w}
function x(t,e){b(r=t,e),i=s,o=l,a=h,u=d,c=p,v.point=b}function w(){
n(s,l,f,h,d,p,i,o,r,a,u,c,16,e),v.lineEnd=_,_()}return v}}(t,e):function(t){
return Gn({point:function(e,n){e=t(e,n),this.stream.point(e[0],e[1])}})}(t)}
var Jn=Gn({point:function(t,e){this.stream.point(t*d,e*d)}});function tr(t,e,n){
function r(r,i){return[e+t*r,n-t*i]}return r.invert=function(r,i){
return[(r-e)/t,(n-i)/t]},r}function er(t,e,n,r){
var i=g(r),o=w(r),a=i*t,u=o*t,c=i/t,f=o/t,s=(o*n-i*e)/t,l=(o*e+i*n)/t
;function h(t,r){return[a*t-u*r+e,n-u*t-a*r]}return h.invert=function(t,e){
return[c*t-f*e+s,l-f*t-c*e]},h}function nr(t){return rr((function(){return t
}))()}function rr(t){
var e,n,r,i,o,a,u,c,f,s,l=150,p=480,v=250,y=0,g=0,b=0,_=0,m=0,x=0,w=null,M=ge,k=null,A=Ve,S=.5
;function j(t){return c(t[0]*d,t[1]*d)}function N(t){
return(t=c.invert(t[0],t[1]))&&[t[0]*h,t[1]*h]}function T(){
var t=er(l,0,0,x).apply(null,e(y,g)),r=(x?er:tr)(l,p-t[0],v-t[1],x)
;return n=Jt(b,_,m),u=Zt(e,r),c=Zt(n,u),a=Qn(u,S),C()}function C(){
return f=s=null,j}return j.stream=function(t){
return f&&s===t?f:f=Jn(function(t){return Gn({point:function(e,n){var r=t(e,n)
;return this.stream.point(r[0],r[1])}})}(n)(M(a(A(s=t)))))
},j.preclip=function(t){return arguments.length?(M=t,w=void 0,C()):M
},j.postclip=function(t){return arguments.length?(A=t,k=r=i=o=null,C()):A
},j.clipAngle=function(t){
return arguments.length?(M=+t?be(w=t*d):(w=null,ge),C()):w*h
},j.clipExtent=function(t){
return arguments.length?(A=null==t?(k=r=i=o=null,Ve):xe(k=+t[0][0],r=+t[0][1],i=+t[1][0],o=+t[1][1]),
C()):null==k?null:[[k,r],[i,o]]},j.scale=function(t){
return arguments.length?(l=+t,T()):l},j.translate=function(t){
return arguments.length?(p=+t[0],v=+t[1],T()):[p,v]},j.center=function(t){
return arguments.length?(y=t[0]%360*d,g=t[1]%360*d,T()):[y*h,g*h]
},j.rotate=function(t){
return arguments.length?(b=t[0]%360*d,_=t[1]%360*d,m=t.length>2?t[2]%360*d:0,
T()):[b*h,_*h,m*h]},j.angle=function(t){
return arguments.length?(x=t%360*d,T()):x*h},j.precision=function(t){
return arguments.length?(a=Qn(u,S=t*t),C()):E(S)},j.fitExtent=function(t,e){
return Kn(j,t,e)},j.fitSize=function(t,e){return Xn(j,t,e)
},j.fitWidth=function(t,e){return Wn(j,t,e)},j.fitHeight=function(t,e){
return $n(j,t,e)},function(){
return e=t.apply(this,arguments),j.invert=e.invert&&N,T()}}function ir(t){
var e=0,n=c/3,r=rr(t),i=r(e,n);return i.parallels=function(t){
return arguments.length?r(e=t[0]*d,n=t[1]*d):[e*h,n*h]},i}function or(t,e){
var n=w(t),r=(n+w(e))/2;if(p(r)<a)return function(t){var e=g(t);function n(t,n){
return[t*e,w(n)/e]}return n.invert=function(t,n){return[t/e,S(n*e)]},n}(t)
;var i=1+n*(2*r-n),o=E(i)/r;function u(t,e){var n=E(i-2*r*w(e))/r
;return[n*w(t*=r),o-n*g(t)]}return u.invert=function(t,e){var n=o-e
;return[y(t,p(n))/r*M(n),S((i-(t*t+n*n)*r*r)/(2*r))]},u}function ar(){
return ir(or).scale(155.424).center([0,33.6442])}function ur(){
return ar().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])
}function cr(t){return function(e,n){var r=g(e),i=g(n),o=t(r*i)
;return[o*i*w(e),o*w(n)]}}function fr(t){return function(e,n){
var r=E(e*e+n*n),i=t(r),o=w(i),a=g(i);return[y(e*o,r*a),S(r&&n*o/r)]}}
var sr=cr((function(t){return E(2/(1+t))}));sr.invert=fr((function(t){
return 2*S(t/2)}));var lr=cr((function(t){return(t=A(t))&&t/w(t)}))
;function hr(t,e){return[t,m(k((f+e)/2))]}function dr(t){
var e,n,r,i=nr(t),o=i.center,a=i.scale,u=i.translate,f=i.clipExtent,s=null
;function l(){var o=c*a(),u=i(re(i.rotate()).invert([0,0]))
;return f(null==s?[[u[0]-o,u[1]-o],[u[0]+o,u[1]+o]]:t===hr?[[Math.max(u[0]-o,s),e],[Math.min(u[0]+o,n),r]]:[[s,Math.max(u[1]-o,e)],[n,Math.min(u[1]+o,r)]])
}return i.scale=function(t){return arguments.length?(a(t),l()):a()
},i.translate=function(t){return arguments.length?(u(t),l()):u()
},i.center=function(t){return arguments.length?(o(t),l()):o()
},i.clipExtent=function(t){
return arguments.length?(null==t?s=e=n=r=null:(s=+t[0][0],e=+t[0][1],n=+t[1][0],
r=+t[1][1]),l()):null==s?null:[[s,e],[n,r]]},l()}function pr(t){
return k((f+t)/2)}function vr(t,e){
var n=g(t),r=t===e?w(t):m(n/g(e))/m(pr(e)/pr(t)),i=n*x(pr(t),r)/r
;if(!r)return hr;function o(t,e){i>0?e<-f+a&&(e=-f+a):e>f-a&&(e=f-a)
;var n=i/x(pr(e),r);return[n*w(r*t),i-n*g(r*t)]}return o.invert=function(t,e){
var n=i-e,o=M(r)*E(t*t+n*n);return[y(t,p(n))/r*M(n),2*v(x(i/o,1/r))-f]},o}
function yr(t,e){return[t,e]}function gr(t,e){
var n=g(t),r=t===e?w(t):(n-g(e))/(e-t),i=n/r+t;if(p(r)<a)return yr
;function o(t,e){var n=i-e,o=r*t;return[n*w(o),i-n*g(o)]}
return o.invert=function(t,e){var n=i-e
;return[y(t,p(n))/r*M(n),i-M(r)*E(t*t+n*n)]},o}lr.invert=fr((function(t){
return t})),hr.invert=function(t,e){return[t,2*v(_(e))-f]},yr.invert=yr
;var br=1.340264,_r=-.081106,mr=893e-6,xr=.003796,wr=E(3)/2;function Mr(t,e){
var n=S(wr*w(e)),r=n*n,i=r*r*r
;return[t*g(n)/(wr*(br+3*_r*r+i*(7*mr+9*xr*r))),n*(br+_r*r+i*(mr+xr*r))]}
function Er(t,e){var n=g(e),r=g(t)*n;return[n*w(t)/r,w(e)/r]}
function kr(t,e,n,r){return 1===t&&1===e&&0===n&&0===r?Ve:Gn({
point:function(i,o){this.stream.point(i*t+n,o*e+r)}})}function Ar(t,e){
var n=e*e,r=n*n
;return[t*(.8707-.131979*n+r*(r*(.003971*n-.001529*r)-.013791)),e*(1.007226+n*(.015085+r*(.028874*n-.044475-.005916*r)))]
}function Sr(t,e){return[g(e)*w(t),w(e)]}function jr(t,e){var n=g(e),r=1+g(t)*n
;return[n*w(t)/r,w(e)/r]}function Nr(t,e){return[m(k((f+e)/2)),-t]}
Mr.invert=function(t,e){
for(var n,r=e,i=r*r,o=i*i*i,a=0;a<12&&(o=(i=(r-=n=(r*(br+_r*i+o*(mr+xr*i))-e)/(br+3*_r*i+o*(7*mr+9*xr*i)))*r)*i*i,
!(p(n)<u));++a);return[wr*t*(br+3*_r*i+o*(7*mr+9*xr*i))/g(r),S(w(r)/wr)]
},Er.invert=fr(v),Ar.invert=function(t,e){var n,r=e,i=25;do{var o=r*r,u=o*o
;r-=n=(r*(1.007226+o*(.015085+u*(.028874*o-.044475-.005916*u)))-e)/(1.007226+o*(.045255+u*(.259866*o-.311325-.005916*11*u)))
}while(p(n)>a&&--i>0)
;return[t/(.8707+(o=r*r)*(o*(o*o*o*(.003971-.001529*o)-.013791)-.131979)),r]
},Sr.invert=fr(S),jr.invert=fr((function(t){return 2*v(t)
})),Nr.invert=function(t,e){return[-e,2*v(_(t))-f]
},t.geoAlbers=ur,t.geoAlbersUsa=function(){
var t,e,n,r,i,o,u=ur(),c=ar().rotate([154,0]).center([-2,58.5]).parallels([55,65]),f=ar().rotate([157,0]).center([-3,19.9]).parallels([8,18]),s={
point:function(t,e){o=[t,e]}};function l(t){var e=t[0],a=t[1]
;return o=null,n.point(e,a),o||(r.point(e,a),o)||(i.point(e,a),o)}function h(){
return t=e=null,l}return l.invert=function(t){
var e=u.scale(),n=u.translate(),r=(t[0]-n[0])/e,i=(t[1]-n[1])/e
;return(i>=.12&&i<.234&&r>=-.425&&r<-.214?c:i>=.166&&i<.234&&r>=-.214&&r<-.115?f:u).invert(t)
},l.stream=function(n){return t&&e===n?t:t=function(t){var e=t.length;return{
point:function(n,r){for(var i=-1;++i<e;)t[i].point(n,r)},sphere:function(){
for(var n=-1;++n<e;)t[n].sphere()},lineStart:function(){
for(var n=-1;++n<e;)t[n].lineStart()},lineEnd:function(){
for(var n=-1;++n<e;)t[n].lineEnd()},polygonStart:function(){
for(var n=-1;++n<e;)t[n].polygonStart()},polygonEnd:function(){
for(var n=-1;++n<e;)t[n].polygonEnd()}}
}([u.stream(e=n),c.stream(n),f.stream(n)])},l.precision=function(t){
return arguments.length?(u.precision(t),
c.precision(t),f.precision(t),h()):u.precision()},l.scale=function(t){
return arguments.length?(u.scale(t),
c.scale(.35*t),f.scale(t),l.translate(u.translate())):u.scale()
},l.translate=function(t){if(!arguments.length)return u.translate()
;var e=u.scale(),o=+t[0],l=+t[1]
;return n=u.translate(t).clipExtent([[o-.455*e,l-.238*e],[o+.455*e,l+.238*e]]).stream(s),
r=c.translate([o-.307*e,l+.201*e]).clipExtent([[o-.425*e+a,l+.12*e+a],[o-.214*e-a,l+.234*e-a]]).stream(s),
i=f.translate([o-.205*e,l+.212*e]).clipExtent([[o-.214*e+a,l+.166*e+a],[o-.115*e-a,l+.234*e-a]]).stream(s),
h()},l.fitExtent=function(t,e){return Kn(l,t,e)},l.fitSize=function(t,e){
return Xn(l,t,e)},l.fitWidth=function(t,e){return Wn(l,t,e)
},l.fitHeight=function(t,e){return $n(l,t,e)},l.scale(1070)
},t.geoArea=function(t){return U.reset(),L(t,Y),2*U
},t.geoAzimuthalEqualArea=function(){
return nr(sr).scale(124.75).clipAngle(179.999)
},t.geoAzimuthalEqualAreaRaw=sr,t.geoAzimuthalEquidistant=function(){
return nr(lr).scale(79.4188).clipAngle(179.999)
},t.geoAzimuthalEquidistantRaw=lr,t.geoBounds=function(t){var e,n,r,i,o,a,u
;if(it=rt=-(et=nt=1/0),ft=[],L(t,jt),n=ft.length){
for(ft.sort(zt),e=1,o=[r=ft[0]];e<n;++e)Dt(r,(i=ft[e])[0])||Dt(r,i[1])?(Rt(r[0],i[1])>Rt(r[0],r[1])&&(r[1]=i[1]),
Rt(i[0],r[1])>Rt(r[0],r[1])&&(r[0]=i[0])):o.push(r=i)
;for(a=-1/0,e=0,r=o[n=o.length-1];e<=n;r=i,++e)i=o[e],(u=Rt(r[1],i[0]))>a&&(a=u,
et=i[0],rt=r[1])}
return ft=st=null,et===1/0||nt===1/0?[[NaN,NaN],[NaN,NaN]]:[[et,nt],[rt,it]]
},t.geoCentroid=function(t){lt=ht=dt=pt=vt=yt=gt=bt=_t=mt=xt=0,L(t,Ft)
;var e=_t,n=mt,r=xt,i=e*e+n*n+r*r
;return i<u&&(e=yt,n=gt,r=bt,ht<a&&(e=dt,n=pt,r=vt),
(i=e*e+n*n+r*r)<u)?[NaN,NaN]:[y(n,e)*h,S(r/E(i))*h]},t.geoCircle=function(){
var t,e,n=$t([0,0]),r=$t(90),i=$t(6),o={point:function(n,r){
t.push(n=e(n,r)),n[0]*=h,n[1]*=h}};function a(){
var a=n.apply(this,arguments),u=r.apply(this,arguments)*d,c=i.apply(this,arguments)*d
;return t=[],e=Jt(-a[0]*d,-a[1]*d,0).invert,ie(o,u,c,1),a={type:"Polygon",
coordinates:[t]},t=e=null,a}return a.center=function(t){
return arguments.length?(n="function"==typeof t?t:$t([+t[0],+t[1]]),a):n
},a.radius=function(t){return arguments.length?(r="function"==typeof t?t:$t(+t),
a):r},a.precision=function(t){
return arguments.length?(i="function"==typeof t?t:$t(+t),a):i},a
},t.geoClipAntimeridian=ge,t.geoClipCircle=be,t.geoClipExtent=function(){
var t,e,n,r=0,i=0,o=960,a=500;return n={stream:function(n){
return t&&e===n?t:t=xe(r,i,o,a)(e=n)},extent:function(u){
return arguments.length?(r=+u[0][0],
i=+u[0][1],o=+u[1][0],a=+u[1][1],t=e=null,n):[[r,i],[o,a]]}}
},t.geoClipRectangle=xe,t.geoConicConformal=function(){
return ir(vr).scale(109.5).parallels([30,30])
},t.geoConicConformalRaw=vr,t.geoConicEqualArea=ar,
t.geoConicEqualAreaRaw=or,t.geoConicEquidistant=function(){
return ir(gr).scale(131.154).center([0,13.9389])
},t.geoConicEquidistantRaw=gr,t.geoContains=function(t,e){
return(t&&Ie.hasOwnProperty(t.type)?Ie[t.type]:Re)(t,e)
},t.geoDistance=Pe,t.geoEqualEarth=function(){return nr(Mr).scale(177.158)
},t.geoEqualEarthRaw=Mr,t.geoEquirectangular=function(){
return nr(yr).scale(152.63)
},t.geoEquirectangularRaw=yr,t.geoGnomonic=function(){
return nr(Er).scale(144.049).clipAngle(60)
},t.geoGnomonicRaw=Er,t.geoGraticule=Ge,t.geoGraticule10=function(){
return Ge()()},t.geoIdentity=function(){
var t,e,n,r,i,o,a=1,u=0,c=0,f=1,s=1,l=Ve,h=null,d=Ve;function p(){
return r=i=null,o}return o={stream:function(t){return r&&i===t?r:r=l(d(i=t))},
postclip:function(r){return arguments.length?(d=r,h=t=e=n=null,p()):d},
clipExtent:function(r){
return arguments.length?(d=null==r?(h=t=e=n=null,Ve):xe(h=+r[0][0],t=+r[0][1],e=+r[1][0],n=+r[1][1]),
p()):null==h?null:[[h,t],[e,n]]},scale:function(t){
return arguments.length?(l=kr((a=+t)*f,a*s,u,c),p()):a},translate:function(t){
return arguments.length?(l=kr(a*f,a*s,u=+t[0],c=+t[1]),p()):[u,c]},
reflectX:function(t){
return arguments.length?(l=kr(a*(f=t?-1:1),a*s,u,c),p()):f<0},
reflectY:function(t){
return arguments.length?(l=kr(a*f,a*(s=t?-1:1),u,c),p()):s<0},
fitExtent:function(t,e){return Kn(o,t,e)},fitSize:function(t,e){return Xn(o,t,e)
},fitWidth:function(t,e){return Wn(o,t,e)},fitHeight:function(t,e){
return $n(o,t,e)}}},t.geoInterpolate=function(t,e){
var n=t[0]*d,r=t[1]*d,i=e[0]*d,o=e[1]*d,a=g(r),u=w(r),c=g(o),f=w(o),s=a*g(n),l=a*w(n),p=c*g(i),v=c*w(i),b=2*S(E(j(o-r)+a*c*j(i-n))),_=w(b),m=b?function(t){
var e=w(t*=b)/_,n=w(b-t)/_,r=n*s+e*p,i=n*l+e*v,o=n*u+e*f
;return[y(i,r)*h,y(o,E(r*r+i*i))*h]}:function(){return[n*h,r*h]}
;return m.distance=b,m},t.geoLength=Te,t.geoMercator=function(){
return dr(hr).scale(961/l)},t.geoMercatorRaw=hr,t.geoNaturalEarth1=function(){
return nr(Ar).scale(175.295)
},t.geoNaturalEarth1Raw=Ar,t.geoOrthographic=function(){
return nr(Sr).scale(249.5).clipAngle(90.000001)
},t.geoOrthographicRaw=Sr,t.geoPath=function(t,e){var n,r,i=4.5;function o(t){
return t&&("function"==typeof i&&r.pointRadius(+i.apply(this,arguments)),
L(t,n(r))),r.result()}return o.area=function(t){return L(t,n(Qe)),Qe.result()
},o.measure=function(t){return L(t,n(Fn)),Fn.result()},o.bounds=function(t){
return L(t,n(cn)),cn.result()},o.centroid=function(t){
return L(t,n(wn)),wn.result()},o.projection=function(e){
return arguments.length?(n=null==e?(t=null,Ve):(t=e).stream,o):t
},o.context=function(t){
return arguments.length?(r=null==t?(e=null,new Un):new On(e=t),
"function"!=typeof i&&r.pointRadius(i),o):e},o.pointRadius=function(t){
return arguments.length?(i="function"==typeof t?t:(r.pointRadius(+t),+t),o):i
},o.projection(t).context(e)
},t.geoProjection=nr,t.geoProjectionMutator=rr,t.geoRotation=re,
t.geoStereographic=function(){return nr(jr).scale(250).clipAngle(142)
},t.geoStereographicRaw=jr,t.geoStream=L,t.geoTransform=function(t){return{
stream:Gn(t)}},t.geoTransverseMercator=function(){
var t=dr(Nr),e=t.center,n=t.rotate;return t.center=function(t){
return arguments.length?e([-t[1],t[0]]):[(t=e())[1],-t[0]]
},t.rotate=function(t){
return arguments.length?n([t[0],t[1],t.length>2?t[2]+90:90]):[(t=n())[0],t[1],t[2]-90]
},n([0,0,90]).scale(159.155)
},t.geoTransverseMercatorRaw=Nr,Object.defineProperty(t,"__esModule",{value:!0})
}))},{"d3-array":29}],44:[function(t,e,n){!function(t,r){
"object"==typeof n&&void 0!==e?r(n):r((t=t||self).d3=t.d3||{})
}(this,(function(t){"use strict";function e(t,e){return t.parent===e.parent?1:2}
function n(t,e){return t+e.x}function r(t,e){return Math.max(t,e.y)}
function i(t){var e=0,n=t.children,r=n&&n.length
;if(r)for(;--r>=0;)e+=n[r].value;else e=1;t.value=e}function o(t,e){
var n,r,i,o,u,s=new f(t),l=+t.value&&(s.value=t.value),h=[s]
;for(null==e&&(e=a);n=h.pop();)if(l&&(n.value=+n.data.value),
(i=e(n.data))&&(u=i.length))for(n.children=new Array(u),
o=u-1;o>=0;--o)h.push(r=n.children[o]=new f(i[o])),r.parent=n,r.depth=n.depth+1
;return s.eachBefore(c)}function a(t){return t.children}function u(t){
t.data=t.data.data}function c(t){var e=0;do{t.height=e
}while((t=t.parent)&&t.height<++e)}function f(t){
this.data=t,this.depth=this.height=0,this.parent=null}f.prototype=o.prototype={
constructor:f,count:function(){return this.eachAfter(i)},each:function(t){
var e,n,r,i,o=this,a=[o];do{
for(e=a.reverse(),a=[];o=e.pop();)if(t(o),n=o.children)for(r=0,
i=n.length;r<i;++r)a.push(n[r])}while(a.length);return this},
eachAfter:function(t){
for(var e,n,r,i=this,o=[i],a=[];i=o.pop();)if(a.push(i),e=i.children)for(n=0,
r=e.length;n<r;++n)o.push(e[n]);for(;i=a.pop();)t(i);return this},
eachBefore:function(t){
for(var e,n,r=this,i=[r];r=i.pop();)if(t(r),e=r.children)for(n=e.length-1;n>=0;--n)i.push(e[n])
;return this},sum:function(t){return this.eachAfter((function(e){
for(var n=+t(e.data)||0,r=e.children,i=r&&r.length;--i>=0;)n+=r[i].value
;e.value=n}))},sort:function(t){return this.eachBefore((function(e){
e.children&&e.children.sort(t)}))},path:function(t){
for(var e=this,n=function(t,e){if(t===e)return t
;var n=t.ancestors(),r=e.ancestors(),i=null;t=n.pop(),e=r.pop();for(;t===e;)i=t,
t=n.pop(),e=r.pop();return i}(e,t),r=[e];e!==n;)e=e.parent,r.push(e)
;for(var i=r.length;t!==n;)r.splice(i,0,t),t=t.parent;return r},
ancestors:function(){for(var t=this,e=[t];t=t.parent;)e.push(t);return e},
descendants:function(){var t=[];return this.each((function(e){t.push(e)})),t},
leaves:function(){var t=[];return this.eachBefore((function(e){
e.children||t.push(e)})),t},links:function(){var t=this,e=[]
;return t.each((function(n){n!==t&&e.push({source:n.parent,target:n})})),e},
copy:function(){return o(this).eachBefore(u)}};var s=Array.prototype.slice
;function l(t){for(var e,n,r=0,i=(t=function(t){
for(var e,n,r=t.length;r;)n=Math.random()*r--|0,e=t[r],t[r]=t[n],t[n]=e;return t
}(s.call(t))).length,o=[];r<i;)e=t[r],n&&p(n,e)?++r:(n=y(o=h(o,e)),r=0);return n
}function h(t,e){var n,r;if(v(e,t))return[e]
;for(n=0;n<t.length;++n)if(d(e,t[n])&&v(g(t[n],e),t))return[t[n],e]
;for(n=0;n<t.length-1;++n)for(r=n+1;r<t.length;++r)if(d(g(t[n],t[r]),e)&&d(g(t[n],e),t[r])&&d(g(t[r],e),t[n])&&v(b(t[n],t[r],e),t))return[t[n],t[r],e]
;throw new Error}function d(t,e){var n=t.r-e.r,r=e.x-t.x,i=e.y-t.y
;return n<0||n*n<r*r+i*i}function p(t,e){var n=t.r-e.r+1e-6,r=e.x-t.x,i=e.y-t.y
;return n>0&&n*n>r*r+i*i}function v(t,e){
for(var n=0;n<e.length;++n)if(!p(t,e[n]))return!1;return!0}function y(t){
switch(t.length){case 1:return function(t){return{x:t.x,y:t.y,r:t.r}}(t[0])
;case 2:return g(t[0],t[1]);case 3:return b(t[0],t[1],t[2])}}function g(t,e){
var n=t.x,r=t.y,i=t.r,o=e.x,a=e.y,u=e.r,c=o-n,f=a-r,s=u-i,l=Math.sqrt(c*c+f*f)
;return{x:(n+o+c/l*s)/2,y:(r+a+f/l*s)/2,r:(l+i+u)/2}}function b(t,e,n){
var r=t.x,i=t.y,o=t.r,a=e.x,u=e.y,c=e.r,f=n.x,s=n.y,l=n.r,h=r-a,d=r-f,p=i-u,v=i-s,y=c-o,g=l-o,b=r*r+i*i-o*o,_=b-a*a-u*u+c*c,m=b-f*f-s*s+l*l,x=d*p-h*v,w=(p*m-v*_)/(2*x)-r,M=(v*y-p*g)/x,E=(d*_-h*m)/(2*x)-i,k=(h*g-d*y)/x,A=M*M+k*k-1,S=2*(o+w*M+E*k),j=w*w+E*E-o*o,N=-(A?(S+Math.sqrt(S*S-4*A*j))/(2*A):j/S)
;return{x:r+w+M*N,y:i+E+k*N,r:N}}function _(t,e,n){
var r,i,o,a,u=t.x-e.x,c=t.y-e.y,f=u*u+c*c
;f?(i=e.r+n.r,i*=i,a=t.r+n.r,i>(a*=a)?(r=(f+a-i)/(2*f),
o=Math.sqrt(Math.max(0,a/f-r*r)),
n.x=t.x-r*u-o*c,n.y=t.y-r*c+o*u):(r=(f+i-a)/(2*f),
o=Math.sqrt(Math.max(0,i/f-r*r)),n.x=e.x+r*u-o*c,n.y=e.y+r*c+o*u)):(n.x=e.x+n.r,
n.y=e.y)}function m(t,e){var n=t.r+e.r-1e-6,r=e.x-t.x,i=e.y-t.y
;return n>0&&n*n>r*r+i*i}function x(t){
var e=t._,n=t.next._,r=e.r+n.r,i=(e.x*n.r+n.x*e.r)/r,o=(e.y*n.r+n.y*e.r)/r
;return i*i+o*o}function w(t){this._=t,this.next=null,this.previous=null}
function M(t){if(!(i=t.length))return 0;var e,n,r,i,o,a,u,c,f,s,h
;if((e=t[0]).x=0,e.y=0,!(i>1))return e.r
;if(n=t[1],e.x=-n.r,n.x=e.r,n.y=0,!(i>2))return e.r+n.r
;_(n,e,r=t[2]),e=new w(e),
n=new w(n),r=new w(r),e.next=r.previous=n,n.next=e.previous=r,
r.next=n.previous=e;t:for(u=3;u<i;++u){
_(e._,n._,r=t[u]),r=new w(r),c=n.next,f=e.previous,s=n._.r,h=e._.r;do{if(s<=h){
if(m(c._,r._)){n=c,e.next=n,n.previous=e,--u;continue t}s+=c._.r,c=c.next}else{
if(m(f._,r._)){(e=f).next=n,n.previous=e,--u;continue t}h+=f._.r,f=f.previous}
}while(c!==f.next)
;for(r.previous=e,r.next=n,e.next=n.previous=n=r,o=x(e);(r=r.next)!==n;)(a=x(r))<o&&(e=r,
o=a);n=e.next}for(e=[n._],r=n;(r=r.next)!==n;)e.push(r._)
;for(r=l(e),u=0;u<i;++u)(e=t[u]).x-=r.x,e.y-=r.y;return r.r}function E(t){
return null==t?null:k(t)}function k(t){if("function"!=typeof t)throw new Error
;return t}function A(){return 0}function S(t){return function(){return t}}
function j(t){return Math.sqrt(t.value)}function N(t){return function(e){
e.children||(e.r=Math.max(0,+t(e)||0))}}function T(t,e){return function(n){
if(r=n.children){var r,i,o,a=r.length,u=t(n)*e||0;if(u)for(i=0;i<a;++i)r[i].r+=u
;if(o=M(r),u)for(i=0;i<a;++i)r[i].r-=u;n.r=o+u}}}function C(t){
return function(e){var n=e.parent;e.r*=t,n&&(e.x=n.x+t*e.x,e.y=n.y+t*e.y)}}
function O(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),
t.y1=Math.round(t.y1)}function P(t,e,n,r,i){
for(var o,a=t.children,u=-1,c=a.length,f=t.value&&(r-e)/t.value;++u<c;)(o=a[u]).y0=n,
o.y1=i,o.x0=e,o.x1=e+=o.value*f}var I={depth:-1},L={};function R(t){return t.id}
function z(t){return t.parentId}function D(t,e){return t.parent===e.parent?1:2}
function F(t){var e=t.children;return e?e[0]:t.t}function B(t){var e=t.children
;return e?e[e.length-1]:t.t}function q(t,e,n){var r=n/(e.i-t.i)
;e.c-=r,e.s+=n,t.c+=r,e.z+=n,e.m+=n}function U(t,e,n){
return t.a.parent===e.parent?t.a:n}function Y(t,e){
this._=t,this.parent=null,this.children=null,
this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=e
}function G(t,e,n,r,i){
for(var o,a=t.children,u=-1,c=a.length,f=t.value&&(i-n)/t.value;++u<c;)(o=a[u]).x0=e,
o.x1=r,o.y0=n,o.y1=n+=o.value*f}Y.prototype=Object.create(f.prototype)
;var V=(1+Math.sqrt(5))/2;function H(t,e,n,r,i,o){
for(var a,u,c,f,s,l,h,d,p,v,y,g=[],b=e.children,_=0,m=0,x=b.length,w=e.value;_<x;){
c=i-n,f=o-r;do{s=b[m++].value}while(!s&&m<x)
;for(l=h=s,y=s*s*(v=Math.max(f/c,c/f)/(w*t)),p=Math.max(h/y,y/l);m<x;++m){
if(s+=u=b[m].value,u<l&&(l=u),u>h&&(h=u),y=s*s*v,(d=Math.max(h/y,y/l))>p){s-=u
;break}p=d}g.push(a={value:s,dice:c<f,children:b.slice(_,m)
}),a.dice?P(a,n,r,i,w?r+=f*s/w:o):G(a,n,r,w?n+=c*s/w:i,o),w-=s,_=m}return g}
var K=function t(e){function n(t,n,r,i,o){H(e,t,n,r,i,o)}
return n.ratio=function(e){return t((e=+e)>1?e:1)},n}(V);var X=function t(e){
function n(t,n,r,i,o){
if((a=t._squarify)&&a.ratio===e)for(var a,u,c,f,s,l=-1,h=a.length,d=t.value;++l<h;){
for(c=(u=a[l]).children,f=u.value=0,s=c.length;f<s;++f)u.value+=c[f].value
;u.dice?P(u,n,r,i,r+=(o-r)*u.value/d):G(u,n,r,n+=(i-n)*u.value/d,o),d-=u.value
}else t._squarify=a=H(e,t,n,r,i,o),a.ratio=e}return n.ratio=function(e){
return t((e=+e)>1?e:1)},n}(V);t.cluster=function(){var t=e,i=1,o=1,a=!1
;function u(e){var u,c=0;e.eachAfter((function(e){var i=e.children
;i?(e.x=function(t){return t.reduce(n,0)/t.length}(i),e.y=function(t){
return 1+t.reduce(r,0)}(i)):(e.x=u?c+=t(e,u):0,e.y=0,u=e)}));var f=function(t){
for(var e;e=t.children;)t=e[0];return t}(e),s=function(t){
for(var e;e=t.children;)t=e[e.length-1];return t
}(e),l=f.x-t(f,s)/2,h=s.x+t(s,f)/2;return e.eachAfter(a?function(t){
t.x=(t.x-e.x)*i,t.y=(e.y-t.y)*o}:function(t){
t.x=(t.x-l)/(h-l)*i,t.y=(1-(e.y?t.y/e.y:1))*o})}return u.separation=function(e){
return arguments.length?(t=e,u):t},u.size=function(t){
return arguments.length?(a=!1,i=+t[0],o=+t[1],u):a?null:[i,o]
},u.nodeSize=function(t){
return arguments.length?(a=!0,i=+t[0],o=+t[1],u):a?[i,o]:null},u},t.hierarchy=o,
t.pack=function(){var t=null,e=1,n=1,r=A;function i(i){
return i.x=e/2,i.y=n/2,t?i.eachBefore(N(t)).eachAfter(T(r,.5)).eachBefore(C(1)):i.eachBefore(N(j)).eachAfter(T(A,1)).eachAfter(T(r,i.r/Math.min(e,n))).eachBefore(C(Math.min(e,n)/(2*i.r))),
i}return i.radius=function(e){return arguments.length?(t=E(e),i):t
},i.size=function(t){return arguments.length?(e=+t[0],n=+t[1],i):[e,n]
},i.padding=function(t){return arguments.length?(r="function"==typeof t?t:S(+t),
i):r},i},t.packEnclose=l,t.packSiblings=function(t){return M(t),t
},t.partition=function(){var t=1,e=1,n=0,r=!1;function i(i){var o=i.height+1
;return i.x0=i.y0=n,i.x1=t,i.y1=e/o,i.eachBefore(function(t,e){
return function(r){r.children&&P(r,r.x0,t*(r.depth+1)/e,r.x1,t*(r.depth+2)/e)
;var i=r.x0,o=r.y0,a=r.x1-n,u=r.y1-n
;a<i&&(i=a=(i+a)/2),u<o&&(o=u=(o+u)/2),r.x0=i,r.y0=o,r.x1=a,r.y1=u}
}(e,o)),r&&i.eachBefore(O),i}return i.round=function(t){
return arguments.length?(r=!!t,i):r},i.size=function(n){
return arguments.length?(t=+n[0],e=+n[1],i):[t,e]},i.padding=function(t){
return arguments.length?(n=+t,i):n},i},t.stratify=function(){var t=R,e=z
;function n(n){var r,i,o,a,u,s,l,h=n.length,d=new Array(h),p={}
;for(i=0;i<h;++i)r=n[i],
u=d[i]=new f(r),null!=(s=t(r,i,n))&&(s+="")&&(p[l="$"+(u.id=s)]=l in p?L:u)
;for(i=0;i<h;++i)if(u=d[i],null!=(s=e(n[i],i,n))&&(s+="")){
if(!(a=p["$"+s]))throw new Error("missing: "+s)
;if(a===L)throw new Error("ambiguous: "+s)
;a.children?a.children.push(u):a.children=[u],u.parent=a}else{
if(o)throw new Error("multiple roots");o=u}if(!o)throw new Error("no root")
;if(o.parent=I,o.eachBefore((function(t){t.depth=t.parent.depth+1,--h
})).eachBefore(c),o.parent=null,h>0)throw new Error("cycle");return o}
return n.id=function(e){return arguments.length?(t=k(e),n):t
},n.parentId=function(t){return arguments.length?(e=k(t),n):e},n
},t.tree=function(){var t=D,e=1,n=1,r=null;function i(i){var c=function(t){
for(var e,n,r,i,o,a=new Y(t,0),u=[a];e=u.pop();)if(r=e._.children)for(e.children=new Array(o=r.length),
i=o-1;i>=0;--i)u.push(n=e.children[i]=new Y(r[i],i)),n.parent=e
;return(a.parent=new Y(null,0)).children=[a],a}(i)
;if(c.eachAfter(o),c.parent.m=-c.z,c.eachBefore(a),r)i.eachBefore(u);else{
var f=i,s=i,l=i;i.eachBefore((function(t){
t.x<f.x&&(f=t),t.x>s.x&&(s=t),t.depth>l.depth&&(l=t)}))
;var h=f===s?1:t(f,s)/2,d=h-f.x,p=e/(s.x+h+d),v=n/(l.depth||1)
;i.eachBefore((function(t){t.x=(t.x+d)*p,t.y=t.depth*v}))}return i}
function o(e){var n=e.children,r=e.parent.children,i=e.i?r[e.i-1]:null;if(n){
!function(t){
for(var e,n=0,r=0,i=t.children,o=i.length;--o>=0;)(e=i[o]).z+=n,e.m+=n,
n+=e.s+(r+=e.c)}(e);var o=(n[0].z+n[n.length-1].z)/2
;i?(e.z=i.z+t(e._,i._),e.m=e.z-o):e.z=o}else i&&(e.z=i.z+t(e._,i._))
;e.parent.A=function(e,n,r){if(n){
for(var i,o=e,a=e,u=n,c=o.parent.children[0],f=o.m,s=a.m,l=u.m,h=c.m;u=B(u),
o=F(o),u&&o;)c=F(c),(a=B(a)).a=e,(i=u.z+l-o.z-f+t(u._,o._))>0&&(q(U(u,e,r),e,i),
f+=i,s+=i),l+=u.m,f+=o.m,h+=c.m,s+=a.m
;u&&!B(a)&&(a.t=u,a.m+=l-s),o&&!F(c)&&(c.t=o,c.m+=f-h,r=e)}return r
}(e,i,e.parent.A||r[0])}function a(t){t._.x=t.z+t.parent.m,t.m+=t.parent.m}
function u(t){t.x*=e,t.y=t.depth*n}return i.separation=function(e){
return arguments.length?(t=e,i):t},i.size=function(t){
return arguments.length?(r=!1,e=+t[0],n=+t[1],i):r?null:[e,n]
},i.nodeSize=function(t){
return arguments.length?(r=!0,e=+t[0],n=+t[1],i):r?[e,n]:null},i
},t.treemap=function(){var t=K,e=!1,n=1,r=1,i=[0],o=A,a=A,u=A,c=A,f=A
;function s(t){
return t.x0=t.y0=0,t.x1=n,t.y1=r,t.eachBefore(l),i=[0],e&&t.eachBefore(O),t}
function l(e){var n=i[e.depth],r=e.x0+n,s=e.y0+n,l=e.x1-n,h=e.y1-n
;l<r&&(r=l=(r+l)/2),
h<s&&(s=h=(s+h)/2),e.x0=r,e.y0=s,e.x1=l,e.y1=h,e.children&&(n=i[e.depth+1]=o(e)/2,
r+=f(e)-n,
s+=a(e)-n,(l-=u(e)-n)<r&&(r=l=(r+l)/2),(h-=c(e)-n)<s&&(s=h=(s+h)/2),t(e,r,s,l,h))
}return s.round=function(t){return arguments.length?(e=!!t,s):e
},s.size=function(t){return arguments.length?(n=+t[0],r=+t[1],s):[n,r]
},s.tile=function(e){return arguments.length?(t=k(e),s):t
},s.padding=function(t){
return arguments.length?s.paddingInner(t).paddingOuter(t):s.paddingInner()
},s.paddingInner=function(t){
return arguments.length?(o="function"==typeof t?t:S(+t),s):o
},s.paddingOuter=function(t){
return arguments.length?s.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t):s.paddingTop()
},s.paddingTop=function(t){
return arguments.length?(a="function"==typeof t?t:S(+t),s):a
},s.paddingRight=function(t){
return arguments.length?(u="function"==typeof t?t:S(+t),s):u
},s.paddingBottom=function(t){
return arguments.length?(c="function"==typeof t?t:S(+t),s):c
},s.paddingLeft=function(t){
return arguments.length?(f="function"==typeof t?t:S(+t),s):f},s
},t.treemapBinary=function(t,e,n,r,i){
var o,a,u=t.children,c=u.length,f=new Array(c+1)
;for(f[0]=a=o=0;o<c;++o)f[o+1]=a+=u[o].value;!function t(e,n,r,i,o,a,c){
if(e>=n-1){var s=u[e];return s.x0=i,s.y0=o,s.x1=a,void(s.y1=c)}
var l=f[e],h=r/2+l,d=e+1,p=n-1;for(;d<p;){var v=d+p>>>1;f[v]<h?d=v+1:p=v}
h-f[d-1]<f[d]-h&&e+1<d&&--d;var y=f[d]-l,g=r-y;if(a-i>c-o){var b=(i*g+a*y)/r
;t(e,d,y,i,o,b,c),t(d,n,g,b,o,a,c)}else{var _=(o*g+c*y)/r
;t(e,d,y,i,o,a,_),t(d,n,g,i,_,a,c)}}(0,c,t.value,e,n,r,i)
},t.treemapDice=P,t.treemapResquarify=X,
t.treemapSlice=G,t.treemapSliceDice=function(t,e,n,r,i){
(1&t.depth?G:P)(t,e,n,r,i)
},t.treemapSquarify=K,Object.defineProperty(t,"__esModule",{value:!0})}))},{}],
45:[function(t,e,n){!function(r,i){
"object"==typeof n&&void 0!==e?i(n,t("d3-color")):i((r=r||self).d3=r.d3||{},r.d3)
}(this,(function(t,e){"use strict";function n(t,e,n,r,i){var o=t*t,a=o*t
;return((1-3*t+3*o-a)*e+(4-6*o+3*a)*n+(1+3*t+3*o-3*a)*r+a*i)/6}function r(t){
var e=t.length-1;return function(r){
var i=r<=0?r=0:r>=1?(r=1,e-1):Math.floor(r*e),o=t[i],a=t[i+1],u=i>0?t[i-1]:2*o-a,c=i<e-1?t[i+2]:2*a-o
;return n((r-i/e)*e,u,o,a,c)}}function i(t){var e=t.length;return function(r){
var i=Math.floor(((r%=1)<0?++r:r)*e),o=t[(i+e-1)%e],a=t[i%e],u=t[(i+1)%e],c=t[(i+2)%e]
;return n((r-i/e)*e,o,a,u,c)}}function o(t){return function(){return t}}
function a(t,e){return function(n){return t+n*e}}function u(t,e){var n=e-t
;return n?a(t,n>180||n<-180?n-360*Math.round(n/360):n):o(isNaN(t)?e:t)}
function c(t){return 1==(t=+t)?f:function(e,n){return n-e?function(t,e,n){
return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(r){
return Math.pow(t+r*e,n)}}(e,n,t):o(isNaN(e)?n:e)}}function f(t,e){var n=e-t
;return n?a(t,n):o(isNaN(t)?e:t)}var s=function t(n){var r=c(n);function i(t,n){
var i=r((t=e.rgb(t)).r,(n=e.rgb(n)).r),o=r(t.g,n.g),a=r(t.b,n.b),u=f(t.opacity,n.opacity)
;return function(e){return t.r=i(e),t.g=o(e),t.b=a(e),t.opacity=u(e),t+""}}
return i.gamma=t,i}(1);function l(t){return function(n){
var r,i,o=n.length,a=new Array(o),u=new Array(o),c=new Array(o)
;for(r=0;r<o;++r)i=e.rgb(n[r]),a[r]=i.r||0,u[r]=i.g||0,c[r]=i.b||0
;return a=t(a),u=t(u),c=t(c),i.opacity=1,function(t){
return i.r=a(t),i.g=u(t),i.b=c(t),i+""}}}var h=l(r),d=l(i);function p(t,e){
e||(e=[]);var n,r=t?Math.min(e.length,t.length):0,i=e.slice()
;return function(o){for(n=0;n<r;++n)i[n]=t[n]*(1-o)+e[n]*o;return i}}
function v(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}
function y(t,e){
var n,r=e?e.length:0,i=t?Math.min(r,t.length):0,o=new Array(i),a=new Array(r)
;for(n=0;n<i;++n)o[n]=M(t[n],e[n]);for(;n<r;++n)a[n]=e[n];return function(t){
for(n=0;n<i;++n)a[n]=o[n](t);return a}}function g(t,e){var n=new Date
;return t=+t,e=+e,function(r){return n.setTime(t*(1-r)+e*r),n}}function b(t,e){
return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function _(t,e){var n,r={},i={}
;for(n in null!==t&&"object"==typeof t||(t={}),
null!==e&&"object"==typeof e||(e={}),e)n in t?r[n]=M(t[n],e[n]):i[n]=e[n]
;return function(t){for(n in r)i[n]=r[n](t);return i}}
var m=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,x=new RegExp(m.source,"g")
;function w(t,e){var n,r,i,o=m.lastIndex=x.lastIndex=0,a=-1,u=[],c=[];for(t+="",
e+="";(n=m.exec(t))&&(r=x.exec(e));)(i=r.index)>o&&(i=e.slice(o,i),
u[a]?u[a]+=i:u[++a]=i),
(n=n[0])===(r=r[0])?u[a]?u[a]+=r:u[++a]=r:(u[++a]=null,c.push({i:a,x:b(n,r)
})),o=x.lastIndex
;return o<e.length&&(i=e.slice(o),u[a]?u[a]+=i:u[++a]=i),u.length<2?c[0]?function(t){
return function(e){return t(e)+""}}(c[0].x):function(t){return function(){
return t}}(e):(e=c.length,function(t){for(var n,r=0;r<e;++r)u[(n=c[r]).i]=n.x(t)
;return u.join("")})}function M(t,n){var r,i=typeof n
;return null==n||"boolean"===i?o(n):("number"===i?b:"string"===i?(r=e.color(n))?(n=r,
s):w:n instanceof e.color?s:n instanceof Date?g:v(n)?p:Array.isArray(n)?y:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?_:b)(t,n)
}var E,k,A,S,j=180/Math.PI,N={translateX:0,translateY:0,rotate:0,skewX:0,
scaleX:1,scaleY:1};function T(t,e,n,r,i,o){var a,u,c
;return(a=Math.sqrt(t*t+e*e))&&(t/=a,
e/=a),(c=t*n+e*r)&&(n-=t*c,r-=e*c),(u=Math.sqrt(n*n+r*r))&&(n/=u,
r/=u,c/=u),t*r<e*n&&(t=-t,e=-e,c=-c,a=-a),{translateX:i,translateY:o,
rotate:Math.atan2(e,t)*j,skewX:Math.atan(c)*j,scaleX:a,scaleY:u}}
function C(t,e,n,r){function i(t){return t.length?t.pop()+" ":""}
return function(o,a){var u=[],c=[];return o=t(o),a=t(a),function(t,r,i,o,a,u){
if(t!==i||r!==o){var c=a.push("translate(",null,e,null,n);u.push({i:c-4,x:b(t,i)
},{i:c-2,x:b(r,o)})}else(i||o)&&a.push("translate("+i+e+o+n)
}(o.translateX,o.translateY,a.translateX,a.translateY,u,c),function(t,e,n,o){
t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),o.push({
i:n.push(i(n)+"rotate(",null,r)-2,x:b(t,e)})):e&&n.push(i(n)+"rotate("+e+r)
}(o.rotate,a.rotate,u,c),function(t,e,n,o){t!==e?o.push({
i:n.push(i(n)+"skewX(",null,r)-2,x:b(t,e)}):e&&n.push(i(n)+"skewX("+e+r)
}(o.skewX,a.skewX,u,c),function(t,e,n,r,o,a){if(t!==n||e!==r){
var u=o.push(i(o)+"scale(",null,",",null,")");a.push({i:u-4,x:b(t,n)},{i:u-2,
x:b(e,r)})}else 1===n&&1===r||o.push(i(o)+"scale("+n+","+r+")")
}(o.scaleX,o.scaleY,a.scaleX,a.scaleY,u,c),o=a=null,function(t){
for(var e,n=-1,r=c.length;++n<r;)u[(e=c[n]).i]=e.x(t);return u.join("")}}}
var O=C((function(t){
return"none"===t?N:(E||(E=document.createElement("DIV"),k=document.documentElement,
A=document.defaultView),
E.style.transform=t,t=A.getComputedStyle(k.appendChild(E),null).getPropertyValue("transform"),
k.removeChild(E),
T(+(t=t.slice(7,-1).split(","))[0],+t[1],+t[2],+t[3],+t[4],+t[5]))
}),"px, ","px)","deg)"),P=C((function(t){
return null==t?N:(S||(S=document.createElementNS("http://www.w3.org/2000/svg","g")),
S.setAttribute("transform",t),
(t=S.transform.baseVal.consolidate())?T((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):N)
}),", ",")",")"),I=Math.SQRT2;function L(t){return((t=Math.exp(t))+1/t)/2}
function R(t){return function(n,r){
var i=t((n=e.hsl(n)).h,(r=e.hsl(r)).h),o=f(n.s,r.s),a=f(n.l,r.l),u=f(n.opacity,r.opacity)
;return function(t){return n.h=i(t),n.s=o(t),n.l=a(t),n.opacity=u(t),n+""}}}
var z=R(u),D=R(f);function F(t){return function(n,r){
var i=t((n=e.hcl(n)).h,(r=e.hcl(r)).h),o=f(n.c,r.c),a=f(n.l,r.l),u=f(n.opacity,r.opacity)
;return function(t){return n.h=i(t),n.c=o(t),n.l=a(t),n.opacity=u(t),n+""}}}
var B=F(u),q=F(f);function U(t){return function n(r){function i(n,i){
var o=t((n=e.cubehelix(n)).h,(i=e.cubehelix(i)).h),a=f(n.s,i.s),u=f(n.l,i.l),c=f(n.opacity,i.opacity)
;return function(t){
return n.h=o(t),n.s=a(t),n.l=u(Math.pow(t,r)),n.opacity=c(t),n+""}}
return r=+r,i.gamma=n,i}(1)}var Y=U(u),G=U(f)
;t.interpolate=M,t.interpolateArray=function(t,e){return(v(e)?p:y)(t,e)
},t.interpolateBasis=r,
t.interpolateBasisClosed=i,t.interpolateCubehelix=Y,t.interpolateCubehelixLong=G,
t.interpolateDate=g,t.interpolateDiscrete=function(t){var e=t.length
;return function(n){return t[Math.max(0,Math.min(e-1,Math.floor(n*e)))]}
},t.interpolateHcl=B,
t.interpolateHclLong=q,t.interpolateHsl=z,t.interpolateHslLong=D,
t.interpolateHue=function(t,e){var n=u(+t,+e);return function(t){var e=n(t)
;return e-360*Math.floor(e/360)}},t.interpolateLab=function(t,n){
var r=f((t=e.lab(t)).l,(n=e.lab(n)).l),i=f(t.a,n.a),o=f(t.b,n.b),a=f(t.opacity,n.opacity)
;return function(e){return t.l=r(e),t.a=i(e),t.b=o(e),t.opacity=a(e),t+""}
},t.interpolateNumber=b,
t.interpolateNumberArray=p,t.interpolateObject=_,t.interpolateRgb=s,
t.interpolateRgbBasis=h,
t.interpolateRgbBasisClosed=d,t.interpolateRound=function(t,e){return t=+t,e=+e,
function(n){return Math.round(t*(1-n)+e*n)}
},t.interpolateString=w,t.interpolateTransformCss=O,t.interpolateTransformSvg=P,
t.interpolateZoom=function(t,e){
var n,r,i=t[0],o=t[1],a=t[2],u=e[0],c=e[1],f=e[2],s=u-i,l=c-o,h=s*s+l*l
;if(h<1e-12)r=Math.log(f/a)/I,n=function(t){
return[i+t*s,o+t*l,a*Math.exp(I*t*r)]};else{
var d=Math.sqrt(h),p=(f*f-a*a+4*h)/(2*a*2*d),v=(f*f-a*a-4*h)/(2*f*2*d),y=Math.log(Math.sqrt(p*p+1)-p),g=Math.log(Math.sqrt(v*v+1)-v)
;r=(g-y)/I,n=function(t){var e=t*r,n=L(y),u=a/(2*d)*(n*function(t){
return((t=Math.exp(2*t))-1)/(t+1)}(I*e+y)-function(t){
return((t=Math.exp(t))-1/t)/2}(y));return[i+u*s,o+u*l,a*n/L(I*e+y)]}}
return n.duration=1e3*r,n},t.piecewise=function(t,e){
for(var n=0,r=e.length-1,i=e[0],o=new Array(r<0?0:r);n<r;)o[n]=t(i,i=e[++n])
;return function(t){var e=Math.max(0,Math.min(r-1,Math.floor(t*=r)))
;return o[e](t-e)}},t.quantize=function(t,e){
for(var n=new Array(e),r=0;r<e;++r)n[r]=t(r/(e-1));return n
},Object.defineProperty(t,"__esModule",{value:!0})}))},{"d3-color":34}],
46:[function(t,e,n){!function(t,r){
"object"==typeof n&&void 0!==e?r(n):r((t=t||self).d3=t.d3||{})
}(this,(function(t){"use strict";var e=Math.PI,n=2*e,r=1e-6,i=n-r;function o(){
this._x0=this._y0=this._x1=this._y1=null,this._=""}function a(){return new o}
o.prototype=a.prototype={constructor:o,moveTo:function(t,e){
this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)},
closePath:function(){
null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},
lineTo:function(t,e){this._+="L"+(this._x1=+t)+","+(this._y1=+e)},
quadraticCurveTo:function(t,e,n,r){
this._+="Q"+ +t+","+ +e+","+(this._x1=+n)+","+(this._y1=+r)},
bezierCurveTo:function(t,e,n,r,i,o){
this._+="C"+ +t+","+ +e+","+ +n+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},
arcTo:function(t,n,i,o,a){t=+t,n=+n,i=+i,o=+o,a=+a
;var u=this._x1,c=this._y1,f=i-t,s=o-n,l=u-t,h=c-n,d=l*l+h*h
;if(a<0)throw new Error("negative radius: "+a)
;if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(d>r)if(Math.abs(h*f-s*l)>r&&a){
var p=i-u,v=o-c,y=f*f+s*s,g=p*p+v*v,b=Math.sqrt(y),_=Math.sqrt(d),m=a*Math.tan((e-Math.acos((y+d-g)/(2*b*_)))/2),x=m/_,w=m/b
;Math.abs(x-1)>r&&(this._+="L"+(t+x*l)+","+(n+x*h)),
this._+="A"+a+","+a+",0,0,"+ +(h*p>l*v)+","+(this._x1=t+w*f)+","+(this._y1=n+w*s)
}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},
arc:function(t,o,a,u,c,f){t=+t,o=+o,f=!!f
;var s=(a=+a)*Math.cos(u),l=a*Math.sin(u),h=t+s,d=o+l,p=1^f,v=f?u-c:c-u
;if(a<0)throw new Error("negative radius: "+a)
;null===this._x1?this._+="M"+h+","+d:(Math.abs(this._x1-h)>r||Math.abs(this._y1-d)>r)&&(this._+="L"+h+","+d),
a&&(v<0&&(v=v%n+n),
v>i?this._+="A"+a+","+a+",0,1,"+p+","+(t-s)+","+(o-l)+"A"+a+","+a+",0,1,"+p+","+(this._x1=h)+","+(this._y1=d):v>r&&(this._+="A"+a+","+a+",0,"+ +(v>=e)+","+p+","+(this._x1=t+a*Math.cos(c))+","+(this._y1=o+a*Math.sin(c))))
},rect:function(t,e,n,r){
this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)+"h"+ +n+"v"+ +r+"h"+-n+"Z"
},toString:function(){return this._}
},t.path=a,Object.defineProperty(t,"__esModule",{value:!0})}))},{}],
47:[function(t,e,n){!function(t,r){
"object"==typeof n&&void 0!==e?r(n):r((t=t||self).d3=t.d3||{})
}(this,(function(t){"use strict";function e(t,e,n){
return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])}function n(t,e){
return t[0]-e[0]||t[1]-e[1]}function r(t){
for(var n=t.length,r=[0,1],i=2,o=2;o<n;++o){
for(;i>1&&e(t[r[i-2]],t[r[i-1]],t[o])<=0;)--i;r[i++]=o}return r.slice(0,i)}
t.polygonArea=function(t){
for(var e,n=-1,r=t.length,i=t[r-1],o=0;++n<r;)e=i,i=t[n],o+=e[1]*i[0]-e[0]*i[1]
;return o/2},t.polygonCentroid=function(t){
for(var e,n,r=-1,i=t.length,o=0,a=0,u=t[i-1],c=0;++r<i;)e=u,
u=t[r],c+=n=e[0]*u[1]-u[0]*e[1],o+=(e[0]+u[0])*n,a+=(e[1]+u[1])*n
;return[o/(c*=3),a/c]},t.polygonContains=function(t,e){
for(var n,r,i=t.length,o=t[i-1],a=e[0],u=e[1],c=o[0],f=o[1],s=!1,l=0;l<i;++l)n=(o=t[l])[0],
(r=o[1])>u!=f>u&&a<(c-n)*(u-r)/(f-r)+n&&(s=!s),c=n,f=r;return s
},t.polygonHull=function(t){if((i=t.length)<3)return null
;var e,i,o=new Array(i),a=new Array(i)
;for(e=0;e<i;++e)o[e]=[+t[e][0],+t[e][1],e]
;for(o.sort(n),e=0;e<i;++e)a[e]=[o[e][0],-o[e][1]]
;var u=r(o),c=r(a),f=c[0]===u[0],s=c[c.length-1]===u[u.length-1],l=[]
;for(e=u.length-1;e>=0;--e)l.push(t[o[u[e]][2]])
;for(e=+f;e<c.length-s;++e)l.push(t[o[c[e]][2]]);return l
},t.polygonLength=function(t){
for(var e,n,r=-1,i=t.length,o=t[i-1],a=o[0],u=o[1],c=0;++r<i;)e=a,
n=u,e-=a=(o=t[r])[0],n-=u=o[1],c+=Math.sqrt(e*e+n*n);return c
},Object.defineProperty(t,"__esModule",{value:!0})}))},{}],48:[function(t,e,n){
!function(t,r){"object"==typeof n&&void 0!==e?r(n):r((t=t||self).d3=t.d3||{})
}(this,(function(t){"use strict";function e(t,e,n,r){
if(isNaN(e)||isNaN(n))return t;var i,o,a,u,c,f,s,l,h,d=t._root,p={data:r
},v=t._x0,y=t._y0,g=t._x1,b=t._y1;if(!d)return t._root=p,t
;for(;d.length;)if((f=e>=(o=(v+g)/2))?v=o:g=o,
(s=n>=(a=(y+b)/2))?y=a:b=a,i=d,!(d=d[l=s<<1|f]))return i[l]=p,t
;if(u=+t._x.call(null,d.data),
c=+t._y.call(null,d.data),e===u&&n===c)return p.next=d,i?i[l]=p:t._root=p,t;do{
i=i?i[l]=new Array(4):t._root=new Array(4),
(f=e>=(o=(v+g)/2))?v=o:g=o,(s=n>=(a=(y+b)/2))?y=a:b=a
}while((l=s<<1|f)==(h=(c>=a)<<1|u>=o));return i[h]=d,i[l]=p,t}
function n(t,e,n,r,i){this.node=t,this.x0=e,this.y0=n,this.x1=r,this.y1=i}
function r(t){return t[0]}function i(t){return t[1]}function o(t,e,n){
var o=new a(null==e?r:e,null==n?i:n,NaN,NaN,NaN,NaN)
;return null==t?o:o.addAll(t)}function a(t,e,n,r,i,o){
this._x=t,this._y=e,this._x0=n,
this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function u(t){for(var e={
data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}
var c=o.prototype=a.prototype;c.copy=function(){
var t,e,n=new a(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root
;if(!r)return n;if(!r.length)return n._root=u(r),n;for(t=[{source:r,
target:n._root=new Array(4)
}];r=t.pop();)for(var i=0;i<4;++i)(e=r.source[i])&&(e.length?t.push({source:e,
target:r.target[i]=new Array(4)}):r.target[i]=u(e));return n},c.add=function(t){
var n=+this._x.call(null,t),r=+this._y.call(null,t)
;return e(this.cover(n,r),n,r,t)},c.addAll=function(t){
var n,r,i,o,a=t.length,u=new Array(a),c=new Array(a),f=1/0,s=1/0,l=-1/0,h=-1/0
;for(r=0;r<a;++r)isNaN(i=+this._x.call(null,n=t[r]))||isNaN(o=+this._y.call(null,n))||(u[r]=i,
c[r]=o,i<f&&(f=i),i>l&&(l=i),o<s&&(s=o),o>h&&(h=o));if(f>l||s>h)return this
;for(this.cover(f,s).cover(l,h),r=0;r<a;++r)e(this,u[r],c[r],t[r]);return this},
c.cover=function(t,e){if(isNaN(t=+t)||isNaN(e=+e))return this
;var n=this._x0,r=this._y0,i=this._x1,o=this._y1
;if(isNaN(n))i=(n=Math.floor(t))+1,o=(r=Math.floor(e))+1;else{
for(var a,u,c=i-n,f=this._root;n>t||t>=i||r>e||e>=o;)switch(u=(e<r)<<1|t<n,
(a=new Array(4))[u]=f,f=a,c*=2,u){case 0:i=n+c,o=r+c;break;case 1:n=i-c,o=r+c
;break;case 2:i=n+c,r=o-c;break;case 3:n=i-c,r=o-c}
this._root&&this._root.length&&(this._root=f)}
return this._x0=n,this._y0=r,this._x1=i,this._y1=o,this},c.data=function(){
var t=[];return this.visit((function(e){if(!e.length)do{t.push(e.data)
}while(e=e.next)})),t},c.extent=function(t){
return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]
},c.find=function(t,e,r){
var i,o,a,u,c,f,s,l=this._x0,h=this._y0,d=this._x1,p=this._y1,v=[],y=this._root
;for(y&&v.push(new n(y,l,h,d,p)),
null==r?r=1/0:(l=t-r,h=e-r,d=t+r,p=e+r,r*=r);f=v.pop();)if(!(!(y=f.node)||(o=f.x0)>d||(a=f.y0)>p||(u=f.x1)<l||(c=f.y1)<h))if(y.length){
var g=(o+u)/2,b=(a+c)/2
;v.push(new n(y[3],g,b,u,c),new n(y[2],o,b,g,c),new n(y[1],g,a,u,b),new n(y[0],o,a,g,b)),
(s=(e>=b)<<1|t>=g)&&(f=v[v.length-1],
v[v.length-1]=v[v.length-1-s],v[v.length-1-s]=f)}else{
var _=t-+this._x.call(null,y.data),m=e-+this._y.call(null,y.data),x=_*_+m*m
;if(x<r){var w=Math.sqrt(r=x);l=t-w,h=e-w,d=t+w,p=e+w,i=y.data}}return i
},c.remove=function(t){
if(isNaN(o=+this._x.call(null,t))||isNaN(a=+this._y.call(null,t)))return this
;var e,n,r,i,o,a,u,c,f,s,l,h,d=this._root,p=this._x0,v=this._y0,y=this._x1,g=this._y1
;if(!d)return this;if(d.length)for(;;){
if((f=o>=(u=(p+y)/2))?p=u:y=u,(s=a>=(c=(v+g)/2))?v=c:g=c,
e=d,!(d=d[l=s<<1|f]))return this;if(!d.length)break
;(e[l+1&3]||e[l+2&3]||e[l+3&3])&&(n=e,h=l)}
for(;d.data!==t;)if(r=d,!(d=d.next))return this;return(i=d.next)&&delete d.next,
r?(i?r.next=i:delete r.next,
this):e?(i?e[l]=i:delete e[l],(d=e[0]||e[1]||e[2]||e[3])&&d===(e[3]||e[2]||e[1]||e[0])&&!d.length&&(n?n[h]=d:this._root=d),
this):(this._root=i,this)},c.removeAll=function(t){
for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this},c.root=function(){
return this._root},c.size=function(){var t=0;return this.visit((function(e){
if(!e.length)do{++t}while(e=e.next)})),t},c.visit=function(t){
var e,r,i,o,a,u,c=[],f=this._root
;for(f&&c.push(new n(f,this._x0,this._y0,this._x1,this._y1));e=c.pop();)if(!t(f=e.node,i=e.x0,o=e.y0,a=e.x1,u=e.y1)&&f.length){
var s=(i+a)/2,l=(o+u)/2
;(r=f[3])&&c.push(new n(r,s,l,a,u)),(r=f[2])&&c.push(new n(r,i,l,s,u)),
(r=f[1])&&c.push(new n(r,s,o,a,l)),(r=f[0])&&c.push(new n(r,i,o,s,l))}
return this},c.visitAfter=function(t){var e,r=[],i=[]
;for(this._root&&r.push(new n(this._root,this._x0,this._y0,this._x1,this._y1));e=r.pop();){
var o=e.node;if(o.length){var a,u=e.x0,c=e.y0,f=e.x1,s=e.y1,l=(u+f)/2,h=(c+s)/2
;(a=o[0])&&r.push(new n(a,u,c,l,h)),
(a=o[1])&&r.push(new n(a,l,c,f,h)),(a=o[2])&&r.push(new n(a,u,h,l,s)),
(a=o[3])&&r.push(new n(a,l,h,f,s))}i.push(e)}
for(;e=i.pop();)t(e.node,e.x0,e.y0,e.x1,e.y1);return this},c.x=function(t){
return arguments.length?(this._x=t,this):this._x},c.y=function(t){
return arguments.length?(this._y=t,this):this._y
},t.quadtree=o,Object.defineProperty(t,"__esModule",{value:!0})}))},{}],
49:[function(t,e,n){!function(t,r){
r("object"==typeof n&&void 0!==e?n:t.d3=t.d3||{})}(this,(function(t){
"use strict";function e(){return Math.random()}var n=function t(e){
function n(t,n){
return t=null==t?0:+t,n=null==n?1:+n,1===arguments.length?(n=t,t=0):n-=t,
function(){return e()*n+t}}return n.source=t,n}(e),r=function t(e){
function n(t,n){var r,i;return t=null==t?0:+t,n=null==n?1:+n,function(){var o
;if(null!=r)o=r,r=null;else do{r=2*e()-1,o=2*e()-1,i=r*r+o*o}while(!i||i>1)
;return t+n*o*Math.sqrt(-2*Math.log(i)/i)}}return n.source=t,n
}(e),i=function t(e){function n(){var t=r.source(e).apply(this,arguments)
;return function(){return Math.exp(t())}}return n.source=t,n
}(e),o=function t(e){function n(t){return function(){
for(var n=0,r=0;r<t;++r)n+=e();return n}}return n.source=t,n
}(e),a=function t(e){function n(t){var n=o.source(e)(t);return function(){
return n()/t}}return n.source=t,n}(e),u=function t(e){function n(t){
return function(){return-Math.log(1-e())/t}}return n.source=t,n}(e)
;t.randomUniform=n,
t.randomNormal=r,t.randomLogNormal=i,t.randomBates=a,t.randomIrwinHall=o,
t.randomExponential=u,Object.defineProperty(t,"__esModule",{value:!0})}))},{}],
50:[function(t,e,n){!function(r,i){
"object"==typeof n&&void 0!==e?i(n,t("d3-interpolate"),t("d3-color")):i((r=r||self).d3=r.d3||{},r.d3,r.d3)
}(this,(function(t,e,n){"use strict";function r(t){
for(var e=t.length/6|0,n=new Array(e),r=0;r<e;)n[r]="#"+t.slice(6*r,6*++r)
;return n}
var i=r("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),o=r("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),a=r("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),u=r("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),c=r("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),f=r("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),s=r("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),l=r("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),h=r("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),d=r("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab")
;function p(t){return e.interpolateRgbBasis(t[t.length-1])}
var v=new Array(3).concat("d8b365f5f5f55ab4ac","a6611adfc27d80cdc1018571","a6611adfc27df5f5f580cdc1018571","8c510ad8b365f6e8c3c7eae55ab4ac01665e","8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e","8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e","8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e","5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30","5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(r),y=p(v),g=new Array(3).concat("af8dc3f7f7f77fbf7b","7b3294c2a5cfa6dba0008837","7b3294c2a5cff7f7f7a6dba0008837","762a83af8dc3e7d4e8d9f0d37fbf7b1b7837","762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837","762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837","762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837","40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b","40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(r),b=p(g),_=new Array(3).concat("e9a3c9f7f7f7a1d76a","d01c8bf1b6dab8e1864dac26","d01c8bf1b6daf7f7f7b8e1864dac26","c51b7de9a3c9fde0efe6f5d0a1d76a4d9221","c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221","c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221","c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221","8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419","8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(r),m=p(_),x=new Array(3).concat("998ec3f7f7f7f1a340","5e3c99b2abd2fdb863e66101","5e3c99b2abd2f7f7f7fdb863e66101","542788998ec3d8daebfee0b6f1a340b35806","542788998ec3d8daebf7f7f7fee0b6f1a340b35806","5427888073acb2abd2d8daebfee0b6fdb863e08214b35806","5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806","2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08","2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(r),w=p(x),M=new Array(3).concat("ef8a62f7f7f767a9cf","ca0020f4a58292c5de0571b0","ca0020f4a582f7f7f792c5de0571b0","b2182bef8a62fddbc7d1e5f067a9cf2166ac","b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac","b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac","b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac","67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061","67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(r),E=p(M),k=new Array(3).concat("ef8a62ffffff999999","ca0020f4a582bababa404040","ca0020f4a582ffffffbababa404040","b2182bef8a62fddbc7e0e0e09999994d4d4d","b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d","b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d","b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d","67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a","67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(r),A=p(k),S=new Array(3).concat("fc8d59ffffbf91bfdb","d7191cfdae61abd9e92c7bb6","d7191cfdae61ffffbfabd9e92c7bb6","d73027fc8d59fee090e0f3f891bfdb4575b4","d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4","d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4","d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4","a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695","a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(r),j=p(S),N=new Array(3).concat("fc8d59ffffbf91cf60","d7191cfdae61a6d96a1a9641","d7191cfdae61ffffbfa6d96a1a9641","d73027fc8d59fee08bd9ef8b91cf601a9850","d73027fc8d59fee08bffffbfd9ef8b91cf601a9850","d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850","d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850","a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837","a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(r),T=p(N),C=new Array(3).concat("fc8d59ffffbf99d594","d7191cfdae61abdda42b83ba","d7191cfdae61ffffbfabdda42b83ba","d53e4ffc8d59fee08be6f59899d5943288bd","d53e4ffc8d59fee08bffffbfe6f59899d5943288bd","d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd","d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd","9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2","9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(r),O=p(C),P=new Array(3).concat("e5f5f999d8c92ca25f","edf8fbb2e2e266c2a4238b45","edf8fbb2e2e266c2a42ca25f006d2c","edf8fbccece699d8c966c2a42ca25f006d2c","edf8fbccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(r),I=p(P),L=new Array(3).concat("e0ecf49ebcda8856a7","edf8fbb3cde38c96c688419d","edf8fbb3cde38c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(r),R=p(L),z=new Array(3).concat("e0f3dba8ddb543a2ca","f0f9e8bae4bc7bccc42b8cbe","f0f9e8bae4bc7bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(r),D=p(z),F=new Array(3).concat("fee8c8fdbb84e34a33","fef0d9fdcc8afc8d59d7301f","fef0d9fdcc8afc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(r),B=p(F),q=new Array(3).concat("ece2f0a6bddb1c9099","f6eff7bdc9e167a9cf02818a","f6eff7bdc9e167a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(r),U=p(q),Y=new Array(3).concat("ece7f2a6bddb2b8cbe","f1eef6bdc9e174a9cf0570b0","f1eef6bdc9e174a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(r),G=p(Y),V=new Array(3).concat("e7e1efc994c7dd1c77","f1eef6d7b5d8df65b0ce1256","f1eef6d7b5d8df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(r),H=p(V),K=new Array(3).concat("fde0ddfa9fb5c51b8a","feebe2fbb4b9f768a1ae017e","feebe2fbb4b9f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(r),X=p(K),W=new Array(3).concat("edf8b17fcdbb2c7fb8","ffffcca1dab441b6c4225ea8","ffffcca1dab441b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(r),$=p(W),Z=new Array(3).concat("f7fcb9addd8e31a354","ffffccc2e69978c679238443","ffffccc2e69978c67931a354006837","ffffccd9f0a3addd8e78c67931a354006837","ffffccd9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(r),Q=p(Z),J=new Array(3).concat("fff7bcfec44fd95f0e","ffffd4fed98efe9929cc4c02","ffffd4fed98efe9929d95f0e993404","ffffd4fee391fec44ffe9929d95f0e993404","ffffd4fee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(r),tt=p(J),et=new Array(3).concat("ffeda0feb24cf03b20","ffffb2fecc5cfd8d3ce31a1c","ffffb2fecc5cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(r),nt=p(et),rt=new Array(3).concat("deebf79ecae13182bd","eff3ffbdd7e76baed62171b5","eff3ffbdd7e76baed63182bd08519c","eff3ffc6dbef9ecae16baed63182bd08519c","eff3ffc6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(r),it=p(rt),ot=new Array(3).concat("e5f5e0a1d99b31a354","edf8e9bae4b374c476238b45","edf8e9bae4b374c47631a354006d2c","edf8e9c7e9c0a1d99b74c47631a354006d2c","edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(r),at=p(ot),ut=new Array(3).concat("f0f0f0bdbdbd636363","f7f7f7cccccc969696525252","f7f7f7cccccc969696636363252525","f7f7f7d9d9d9bdbdbd969696636363252525","f7f7f7d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(r),ct=p(ut),ft=new Array(3).concat("efedf5bcbddc756bb1","f2f0f7cbc9e29e9ac86a51a3","f2f0f7cbc9e29e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(r),st=p(ft),lt=new Array(3).concat("fee0d2fc9272de2d26","fee5d9fcae91fb6a4acb181d","fee5d9fcae91fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(r),ht=p(lt),dt=new Array(3).concat("fee6cefdae6be6550d","feeddefdbe85fd8d3cd94701","feeddefdbe85fd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(r),pt=p(dt)
;var vt=e.interpolateCubehelixLong(n.cubehelix(300,.5,0),n.cubehelix(-240,.5,1)),yt=e.interpolateCubehelixLong(n.cubehelix(-100,.75,.35),n.cubehelix(80,1.5,.8)),gt=e.interpolateCubehelixLong(n.cubehelix(260,.75,.35),n.cubehelix(80,1.5,.8)),bt=n.cubehelix()
;var _t=n.rgb(),mt=Math.PI/3,xt=2*Math.PI/3;function wt(t){var e=t.length
;return function(n){return t[Math.max(0,Math.min(e-1,Math.floor(n*e)))]}}
var Mt=wt(r("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),Et=wt(r("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),kt=wt(r("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),At=wt(r("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"))
;t.interpolateBlues=it,
t.interpolateBrBG=y,t.interpolateBuGn=I,t.interpolateBuPu=R,
t.interpolateCividis=function(t){
return t=Math.max(0,Math.min(1,t)),"rgb("+Math.max(0,Math.min(255,Math.round(-4.54-t*(35.34-t*(2381.73-t*(6402.7-t*(7024.72-2710.57*t)))))))+", "+Math.max(0,Math.min(255,Math.round(32.49+t*(170.73+t*(52.82-t*(131.46-t*(176.58-67.37*t)))))))+", "+Math.max(0,Math.min(255,Math.round(81.24+t*(442.36-t*(2482.43-t*(6167.24-t*(6614.94-2475.67*t)))))))+")"
},
t.interpolateCool=gt,t.interpolateCubehelixDefault=vt,t.interpolateGnBu=D,t.interpolateGreens=at,
t.interpolateGreys=ct,
t.interpolateInferno=kt,t.interpolateMagma=Et,t.interpolateOrRd=B,
t.interpolateOranges=pt,
t.interpolatePRGn=b,t.interpolatePiYG=m,t.interpolatePlasma=At,
t.interpolatePuBu=G,
t.interpolatePuBuGn=U,t.interpolatePuOr=w,t.interpolatePuRd=H,
t.interpolatePurples=st,t.interpolateRainbow=function(t){
(t<0||t>1)&&(t-=Math.floor(t));var e=Math.abs(t-.5)
;return bt.h=360*t-100,bt.s=1.5-1.5*e,bt.l=.8-.9*e,bt+""
},t.interpolateRdBu=E,t.interpolateRdGy=A,
t.interpolateRdPu=X,t.interpolateRdYlBu=j,
t.interpolateRdYlGn=T,t.interpolateReds=ht,t.interpolateSinebow=function(t){
var e
;return t=(.5-t)*Math.PI,_t.r=255*(e=Math.sin(t))*e,_t.g=255*(e=Math.sin(t+mt))*e,
_t.b=255*(e=Math.sin(t+xt))*e,_t+""
},t.interpolateSpectral=O,t.interpolateTurbo=function(t){
return t=Math.max(0,Math.min(1,t)),
"rgb("+Math.max(0,Math.min(255,Math.round(34.61+t*(1172.33-t*(10793.56-t*(33300.12-t*(38394.49-14825.05*t)))))))+", "+Math.max(0,Math.min(255,Math.round(23.31+t*(557.33+t*(1225.33-t*(3574.96-t*(1073.77+707.56*t)))))))+", "+Math.max(0,Math.min(255,Math.round(27.2+t*(3211.1-t*(15327.97-t*(27814-t*(22569.18-6838.66*t)))))))+")"
},
t.interpolateViridis=Mt,t.interpolateWarm=yt,t.interpolateYlGn=Q,t.interpolateYlGnBu=$,
t.interpolateYlOrBr=tt,t.interpolateYlOrRd=nt,t.schemeAccent=o,t.schemeBlues=rt,
t.schemeBrBG=v,
t.schemeBuGn=P,t.schemeBuPu=L,t.schemeCategory10=i,t.schemeDark2=a,
t.schemeGnBu=z,
t.schemeGreens=ot,t.schemeGreys=ut,t.schemeOrRd=F,t.schemeOranges=dt,
t.schemePRGn=g,
t.schemePaired=u,t.schemePastel1=c,t.schemePastel2=f,t.schemePiYG=_,
t.schemePuBu=Y,
t.schemePuBuGn=q,t.schemePuOr=x,t.schemePuRd=V,t.schemePurples=ft,
t.schemeRdBu=M,
t.schemeRdGy=k,t.schemeRdPu=K,t.schemeRdYlBu=S,t.schemeRdYlGn=N,t.schemeReds=lt,
t.schemeSet1=s,
t.schemeSet2=l,t.schemeSet3=h,t.schemeSpectral=C,t.schemeTableau10=d,
t.schemeYlGn=Z,
t.schemeYlGnBu=W,t.schemeYlOrBr=J,t.schemeYlOrRd=et,Object.defineProperty(t,"__esModule",{
value:!0})}))},{"d3-color":34,"d3-interpolate":45}],51:[function(t,e,n){
!function(r,i){
"object"==typeof n&&void 0!==e?i(n,t("d3-collection"),t("d3-array"),t("d3-interpolate"),t("d3-format"),t("d3-time"),t("d3-time-format")):i(r.d3=r.d3||{},r.d3,r.d3,r.d3,r.d3,r.d3,r.d3)
}(this,(function(t,e,n,r,i,o,a){"use strict";function u(t,e){
switch(arguments.length){case 0:break;case 1:this.range(t);break;default:
this.range(e).domain(t)}return this}function c(t,e){switch(arguments.length){
case 0:break;case 1:this.interpolator(t);break;default:
this.interpolator(e).domain(t)}return this}
var f=Array.prototype,s=f.map,l=f.slice,h={name:"implicit"};function d(){
var t=e.map(),n=[],r=[],i=h;function o(e){var o=e+"",a=t.get(o);if(!a){
if(i!==h)return i;t.set(o,a=n.push(e))}return r[(a-1)%r.length]}
return o.domain=function(r){if(!arguments.length)return n.slice();n=[],t=e.map()
;for(var i,a,u=-1,c=r.length;++u<c;)t.has(a=(i=r[u])+"")||t.set(a,n.push(i))
;return o},o.range=function(t){return arguments.length?(r=l.call(t),o):r.slice()
},o.unknown=function(t){return arguments.length?(i=t,o):i},o.copy=function(){
return d(n,r).unknown(i)},u.apply(o,arguments),o}function p(){
var t,e,r=d().unknown(void 0),i=r.domain,o=r.range,a=[0,1],c=!1,f=0,s=0,l=.5
;function h(){var r=i().length,u=a[1]<a[0],h=a[u-0],d=a[1-u]
;t=(d-h)/Math.max(1,r-f+2*s),
c&&(t=Math.floor(t)),h+=(d-h-t*(r-f))*l,e=t*(1-f),c&&(h=Math.round(h),
e=Math.round(e));var p=n.range(r).map((function(e){return h+t*e}))
;return o(u?p.reverse():p)}return delete r.unknown,r.domain=function(t){
return arguments.length?(i(t),h()):i()},r.range=function(t){
return arguments.length?(a=[+t[0],+t[1]],h()):a.slice()
},r.rangeRound=function(t){return a=[+t[0],+t[1]],c=!0,h()
},r.bandwidth=function(){return e},r.step=function(){return t
},r.round=function(t){return arguments.length?(c=!!t,h()):c
},r.padding=function(t){return arguments.length?(f=Math.min(1,s=+t),h()):f
},r.paddingInner=function(t){return arguments.length?(f=Math.min(1,t),h()):f
},r.paddingOuter=function(t){return arguments.length?(s=+t,h()):s
},r.align=function(t){
return arguments.length?(l=Math.max(0,Math.min(1,t)),h()):l},r.copy=function(){
return p(i(),a).round(c).paddingInner(f).paddingOuter(s).align(l)
},u.apply(h(),arguments)}function v(t){var e=t.copy
;return t.padding=t.paddingOuter,
delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return v(e())},t}
function y(t){return+t}var g=[0,1];function b(t){return t}function _(t,e){
return(e-=t=+t)?function(n){return(n-t)/e}:function(t){return function(){
return t}}(isNaN(e)?NaN:.5)}function m(t){var e,n=t[0],r=t[t.length-1]
;return n>r&&(e=n,n=r,r=e),function(t){return Math.max(n,Math.min(r,t))}}
function x(t,e,n){var r=t[0],i=t[1],o=e[0],a=e[1]
;return i<r?(r=_(i,r),o=n(a,o)):(r=_(r,i),o=n(o,a)),function(t){return o(r(t))}}
function w(t,e,r){
var i=Math.min(t.length,e.length)-1,o=new Array(i),a=new Array(i),u=-1
;for(t[i]<t[0]&&(t=t.slice().reverse(),
e=e.slice().reverse());++u<i;)o[u]=_(t[u],t[u+1]),a[u]=r(e[u],e[u+1])
;return function(e){var r=n.bisect(t,e,1,i)-1;return a[r](o[r](e))}}
function M(t,e){
return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())
}function E(){var t,e,n,i,o,a,u=g,c=g,f=r.interpolate,h=b;function d(){
return i=Math.min(u.length,c.length)>2?w:x,o=a=null,p}function p(e){
return isNaN(e=+e)?n:(o||(o=i(u.map(t),c,f)))(t(h(e)))}
return p.invert=function(n){
return h(e((a||(a=i(c,u.map(t),r.interpolateNumber)))(n)))
},p.domain=function(t){
return arguments.length?(u=s.call(t,y),h===b||(h=m(u)),d()):u.slice()
},p.range=function(t){return arguments.length?(c=l.call(t),d()):c.slice()
},p.rangeRound=function(t){return c=l.call(t),f=r.interpolateRound,d()
},p.clamp=function(t){return arguments.length?(h=t?m(u):b,p):h!==b
},p.interpolate=function(t){return arguments.length?(f=t,d()):f
},p.unknown=function(t){return arguments.length?(n=t,p):n},function(n,r){
return t=n,e=r,d()}}function k(t,e){return E()(t,e)}function A(t,e,r,o){
var a,u=n.tickStep(t,e,r);switch((o=i.formatSpecifier(null==o?",f":o)).type){
case"s":var c=Math.max(Math.abs(t),Math.abs(e))
;return null!=o.precision||isNaN(a=i.precisionPrefix(u,c))||(o.precision=a),
i.formatPrefix(o,c);case"":case"e":case"g":case"p":case"r":
null!=o.precision||isNaN(a=i.precisionRound(u,Math.max(Math.abs(t),Math.abs(e))))||(o.precision=a-("e"===o.type))
;break;case"f":case"%":
null!=o.precision||isNaN(a=i.precisionFixed(u))||(o.precision=a-2*("%"===o.type))
}return i.format(o)}function S(t){var e=t.domain;return t.ticks=function(t){
var r=e();return n.ticks(r[0],r[r.length-1],null==t?10:t)
},t.tickFormat=function(t,n){var r=e()
;return A(r[0],r[r.length-1],null==t?10:t,n)},t.nice=function(r){null==r&&(r=10)
;var i,o=e(),a=0,u=o.length-1,c=o[a],f=o[u]
;return f<c&&(i=c,c=f,f=i,i=a,a=u,u=i),
(i=n.tickIncrement(c,f,r))>0?(c=Math.floor(c/i)*i,
f=Math.ceil(f/i)*i,i=n.tickIncrement(c,f,r)):i<0&&(c=Math.ceil(c*i)/i,
f=Math.floor(f*i)/i,
i=n.tickIncrement(c,f,r)),i>0?(o[a]=Math.floor(c/i)*i,o[u]=Math.ceil(f/i)*i,
e(o)):i<0&&(o[a]=Math.ceil(c*i)/i,o[u]=Math.floor(f*i)/i,e(o)),t},t}
function j(t,e){var n,r=0,i=(t=t.slice()).length-1,o=t[r],a=t[i]
;return a<o&&(n=r,r=i,i=n,n=o,o=a,a=n),t[r]=e.floor(o),t[i]=e.ceil(a),t}
function N(t){return Math.log(t)}function T(t){return Math.exp(t)}function C(t){
return-Math.log(-t)}function O(t){return-Math.exp(-t)}function P(t){
return isFinite(t)?+("1e"+t):t<0?0:t}function I(t){return function(e){
return-t(-e)}}function L(t){var e,r,o=t(N,T),a=o.domain,u=10;function c(){
return e=function(t){
return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),
function(e){return Math.log(e)/t})}(u),r=function(t){
return 10===t?P:t===Math.E?Math.exp:function(e){return Math.pow(t,e)}
}(u),a()[0]<0?(e=I(e),r=I(r),t(C,O)):t(N,T),o}return o.base=function(t){
return arguments.length?(u=+t,c()):u},o.domain=function(t){
return arguments.length?(a(t),c()):a()},o.ticks=function(t){
var i,o=a(),c=o[0],f=o[o.length-1];(i=f<c)&&(d=c,c=f,f=d)
;var s,l,h,d=e(c),p=e(f),v=null==t?10:+t,y=[];if(!(u%1)&&p-d<v){
if(d=Math.round(d)-1,p=Math.round(p)+1,c>0){
for(;d<p;++d)for(l=1,s=r(d);l<u;++l)if(!((h=s*l)<c)){if(h>f)break;y.push(h)}
}else for(;d<p;++d)for(l=u-1,s=r(d);l>=1;--l)if(!((h=s*l)<c)){if(h>f)break
;y.push(h)}}else y=n.ticks(d,p,Math.min(p-d,v)).map(r);return i?y.reverse():y
},o.tickFormat=function(t,n){
if(null==n&&(n=10===u?".0e":","),"function"!=typeof n&&(n=i.format(n)),
t===1/0)return n;null==t&&(t=10);var a=Math.max(1,u*t/o.ticks().length)
;return function(t){var i=t/r(Math.round(e(t)))
;return i*u<u-.5&&(i*=u),i<=a?n(t):""}},o.nice=function(){return a(j(a(),{
floor:function(t){return r(Math.floor(e(t)))},ceil:function(t){
return r(Math.ceil(e(t)))}}))},o}function R(t){return function(e){
return Math.sign(e)*Math.log1p(Math.abs(e/t))}}function z(t){return function(e){
return Math.sign(e)*Math.expm1(Math.abs(e))*t}}function D(t){
var e=1,n=t(R(e),z(e));return n.constant=function(n){
return arguments.length?t(R(e=+n),z(e)):e},S(n)}function F(t){
return function(e){return e<0?-Math.pow(-e,t):Math.pow(e,t)}}function B(t){
return t<0?-Math.sqrt(-t):Math.sqrt(t)}function q(t){return t<0?-t*t:t*t}
function U(t){var e=t(b,b),n=1;function r(){
return 1===n?t(b,b):.5===n?t(B,q):t(F(n),F(1/n))}return e.exponent=function(t){
return arguments.length?(n=+t,r()):n},S(e)}function Y(){var t=U(E())
;return t.copy=function(){return M(t,Y()).exponent(t.exponent())
},u.apply(t,arguments),t}var G=1e3,V=6e4,H=36e5,K=864e5,X=2592e6,W=31536e6
;function $(t){return new Date(t)}function Z(t){
return t instanceof Date?+t:+new Date(+t)}function Q(t,e,r,i,o,a,u,c,f){
var l=k(b,b),h=l.invert,d=l.domain,p=f(".%L"),v=f(":%S"),y=f("%I:%M"),g=f("%I %p"),_=f("%a %d"),m=f("%b %d"),x=f("%B"),w=f("%Y"),E=[[u,1,G],[u,5,5e3],[u,15,15e3],[u,30,3e4],[a,1,V],[a,5,3e5],[a,15,9e5],[a,30,18e5],[o,1,H],[o,3,108e5],[o,6,216e5],[o,12,432e5],[i,1,K],[i,2,1728e5],[r,1,6048e5],[e,1,X],[e,3,7776e6],[t,1,W]]
;function A(n){
return(u(n)<n?p:a(n)<n?v:o(n)<n?y:i(n)<n?g:e(n)<n?r(n)<n?_:m:t(n)<n?x:w)(n)}
function S(e,r,i,o){if(null==e&&(e=10),"number"==typeof e){
var a=Math.abs(i-r)/e,u=n.bisector((function(t){return t[2]})).right(E,a)
;u===E.length?(o=n.tickStep(r/W,i/W,e),
e=t):u?(o=(u=E[a/E[u-1][2]<E[u][2]/a?u-1:u])[1],
e=u[0]):(o=Math.max(n.tickStep(r,i,e),1),e=c)}return null==o?e:e.every(o)}
return l.invert=function(t){return new Date(h(t))},l.domain=function(t){
return arguments.length?d(s.call(t,Z)):d().map($)},l.ticks=function(t,e){
var n,r=d(),i=r[0],o=r[r.length-1],a=o<i
;return a&&(n=i,i=o,o=n),n=(n=S(t,i,o,e))?n.range(i,o+1):[],a?n.reverse():n
},l.tickFormat=function(t,e){return null==e?A:f(e)},l.nice=function(t,e){
var n=d();return(t=S(t,n[0],n[n.length-1],e))?d(j(n,t)):l},l.copy=function(){
return M(l,Q(t,e,r,i,o,a,u,c,f))},l}function J(){var t,e,n,r,i,o=0,a=1,u=b,c=!1
;function f(e){
return isNaN(e=+e)?i:u(0===n?.5:(e=(r(e)-t)*n,c?Math.max(0,Math.min(1,e)):e))}
return f.domain=function(i){
return arguments.length?(t=r(o=+i[0]),e=r(a=+i[1]),n=t===e?0:1/(e-t),f):[o,a]
},f.clamp=function(t){return arguments.length?(c=!!t,f):c
},f.interpolator=function(t){return arguments.length?(u=t,f):u
},f.unknown=function(t){return arguments.length?(i=t,f):i},function(i){
return r=i,t=i(o),e=i(a),n=t===e?0:1/(e-t),f}}function tt(t,e){
return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())
}function et(){var t=U(J());return t.copy=function(){
return tt(t,et()).exponent(t.exponent())},c.apply(t,arguments)}function nt(){
var t,e,n,r,i,o,a,u=0,c=.5,f=1,s=b,l=!1;function h(t){
return isNaN(t=+t)?a:(t=.5+((t=+o(t))-e)*(t<e?r:i),
s(l?Math.max(0,Math.min(1,t)):t))}return h.domain=function(a){
return arguments.length?(t=o(u=+a[0]),
e=o(c=+a[1]),n=o(f=+a[2]),r=t===e?0:.5/(e-t),i=e===n?0:.5/(n-e),h):[u,c,f]
},h.clamp=function(t){return arguments.length?(l=!!t,h):l
},h.interpolator=function(t){return arguments.length?(s=t,h):s
},h.unknown=function(t){return arguments.length?(a=t,h):a},function(a){
return o=a,t=a(u),e=a(c),n=a(f),r=t===e?0:.5/(e-t),i=e===n?0:.5/(n-e),h}}
function rt(){var t=U(nt());return t.copy=function(){
return tt(t,rt()).exponent(t.exponent())},c.apply(t,arguments)}
t.scaleBand=p,t.scalePoint=function(){
return v(p.apply(null,arguments).paddingInner(1))
},t.scaleIdentity=function t(e){var n;function r(t){return isNaN(t=+t)?n:t}
return r.invert=r,r.domain=r.range=function(t){
return arguments.length?(e=s.call(t,y),r):e.slice()},r.unknown=function(t){
return arguments.length?(n=t,r):n},r.copy=function(){return t(e).unknown(n)
},e=arguments.length?s.call(e,y):[0,1],S(r)},t.scaleLinear=function t(){
var e=k(b,b);return e.copy=function(){return M(e,t())},u.apply(e,arguments),S(e)
},t.scaleLog=function t(){var e=L(E()).domain([1,10]);return e.copy=function(){
return M(e,t()).base(e.base())},u.apply(e,arguments),e
},t.scaleSymlog=function t(){var e=D(E());return e.copy=function(){
return M(e,t()).constant(e.constant())},u.apply(e,arguments)
},t.scaleOrdinal=d,t.scaleImplicit=h,t.scalePow=Y,t.scaleSqrt=function(){
return Y.apply(null,arguments).exponent(.5)},t.scaleQuantile=function t(){
var e,r=[],i=[],o=[];function a(){var t=0,e=Math.max(1,i.length)
;for(o=new Array(e-1);++t<e;)o[t-1]=n.quantile(r,t/e);return c}function c(t){
return isNaN(t=+t)?e:i[n.bisect(o,t)]}return c.invertExtent=function(t){
var e=i.indexOf(t)
;return e<0?[NaN,NaN]:[e>0?o[e-1]:r[0],e<o.length?o[e]:r[r.length-1]]
},c.domain=function(t){if(!arguments.length)return r.slice();r=[]
;for(var e,i=0,o=t.length;i<o;++i)null==(e=t[i])||isNaN(e=+e)||r.push(e)
;return r.sort(n.ascending),a()},c.range=function(t){
return arguments.length?(i=l.call(t),a()):i.slice()},c.unknown=function(t){
return arguments.length?(e=t,c):e},c.quantiles=function(){return o.slice()
},c.copy=function(){return t().domain(r).range(i).unknown(e)
},u.apply(c,arguments)},t.scaleQuantize=function t(){
var e,r=0,i=1,o=1,a=[.5],c=[0,1];function f(t){
return t<=t?c[n.bisect(a,t,0,o)]:e}function s(){var t=-1
;for(a=new Array(o);++t<o;)a[t]=((t+1)*i-(t-o)*r)/(o+1);return f}
return f.domain=function(t){return arguments.length?(r=+t[0],i=+t[1],s()):[r,i]
},f.range=function(t){
return arguments.length?(o=(c=l.call(t)).length-1,s()):c.slice()
},f.invertExtent=function(t){var e=c.indexOf(t)
;return e<0?[NaN,NaN]:e<1?[r,a[0]]:e>=o?[a[o-1],i]:[a[e-1],a[e]]
},f.unknown=function(t){return arguments.length?(e=t,f):f
},f.thresholds=function(){return a.slice()},f.copy=function(){
return t().domain([r,i]).range(c).unknown(e)},u.apply(S(f),arguments)
},t.scaleThreshold=function t(){var e,r=[.5],i=[0,1],o=1;function a(t){
return t<=t?i[n.bisect(r,t,0,o)]:e}return a.domain=function(t){
return arguments.length?(r=l.call(t),
o=Math.min(r.length,i.length-1),a):r.slice()},a.range=function(t){
return arguments.length?(i=l.call(t),
o=Math.min(r.length,i.length-1),a):i.slice()},a.invertExtent=function(t){
var e=i.indexOf(t);return[r[e-1],r[e]]},a.unknown=function(t){
return arguments.length?(e=t,a):e},a.copy=function(){
return t().domain(r).range(i).unknown(e)},u.apply(a,arguments)
},t.scaleTime=function(){
return u.apply(Q(o.timeYear,o.timeMonth,o.timeWeek,o.timeDay,o.timeHour,o.timeMinute,o.timeSecond,o.timeMillisecond,a.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)
},t.scaleUtc=function(){
return u.apply(Q(o.utcYear,o.utcMonth,o.utcWeek,o.utcDay,o.utcHour,o.utcMinute,o.utcSecond,o.utcMillisecond,a.utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)
},t.scaleSequential=function t(){var e=S(J()(b));return e.copy=function(){
return tt(e,t())},c.apply(e,arguments)},t.scaleSequentialLog=function t(){
var e=L(J()).domain([1,10]);return e.copy=function(){
return tt(e,t()).base(e.base())},c.apply(e,arguments)
},t.scaleSequentialPow=et,t.scaleSequentialSqrt=function(){
return et.apply(null,arguments).exponent(.5)
},t.scaleSequentialSymlog=function t(){var e=D(J());return e.copy=function(){
return tt(e,t()).constant(e.constant())},c.apply(e,arguments)
},t.scaleSequentialQuantile=function t(){var e=[],r=b;function i(t){
if(!isNaN(t=+t))return r((n.bisect(e,t)-1)/(e.length-1))}
return i.domain=function(t){if(!arguments.length)return e.slice();e=[]
;for(var r,o=0,a=t.length;o<a;++o)null==(r=t[o])||isNaN(r=+r)||e.push(r)
;return e.sort(n.ascending),i},i.interpolator=function(t){
return arguments.length?(r=t,i):r},i.copy=function(){return t(r).domain(e)
},c.apply(i,arguments)},t.scaleDiverging=function t(){var e=S(nt()(b))
;return e.copy=function(){return tt(e,t())},c.apply(e,arguments)
},t.scaleDivergingLog=function t(){var e=L(nt()).domain([.1,1,10])
;return e.copy=function(){return tt(e,t()).base(e.base())},c.apply(e,arguments)
},t.scaleDivergingPow=rt,t.scaleDivergingSqrt=function(){
return rt.apply(null,arguments).exponent(.5)
},t.scaleDivergingSymlog=function t(){var e=D(nt());return e.copy=function(){
return tt(e,t()).constant(e.constant())},c.apply(e,arguments)
},t.tickFormat=A,Object.defineProperty(t,"__esModule",{value:!0})}))},{
"d3-array":29,"d3-collection":33,"d3-format":42,"d3-interpolate":45,
"d3-time":55,"d3-time-format":54}],52:[function(t,e,n){!function(t,r){
"object"==typeof n&&void 0!==e?r(n):r((t=t||self).d3=t.d3||{})
}(this,(function(t){"use strict";var e="http://www.w3.org/1999/xhtml",n={
svg:"http://www.w3.org/2000/svg",xhtml:e,xlink:"http://www.w3.org/1999/xlink",
xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"
};function r(t){var e=t+="",r=e.indexOf(":")
;return r>=0&&"xmlns"!==(e=t.slice(0,r))&&(t=t.slice(r+1)),n.hasOwnProperty(e)?{
space:n[e],local:t}:t}function i(t){return function(){
var n=this.ownerDocument,r=this.namespaceURI
;return r===e&&n.documentElement.namespaceURI===e?n.createElement(t):n.createElementNS(r,t)
}}function o(t){return function(){
return this.ownerDocument.createElementNS(t.space,t.local)}}function a(t){
var e=r(t);return(e.local?o:i)(e)}function u(){}function c(t){
return null==t?u:function(){return this.querySelector(t)}}function f(){return[]}
function s(t){return null==t?f:function(){return this.querySelectorAll(t)}}
function l(t){return function(){return this.matches(t)}}function h(t){
return new Array(t.length)}function d(t,e){
this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,
this._next=null,this._parent=t,this.__data__=e}d.prototype={constructor:d,
appendChild:function(t){return this._parent.insertBefore(t,this._next)},
insertBefore:function(t,e){return this._parent.insertBefore(t,e)},
querySelector:function(t){return this._parent.querySelector(t)},
querySelectorAll:function(t){return this._parent.querySelectorAll(t)}}
;function p(t,e,n,r,i,o){
for(var a,u=0,c=e.length,f=o.length;u<f;++u)(a=e[u])?(a.__data__=o[u],
r[u]=a):n[u]=new d(t,o[u]);for(;u<c;++u)(a=e[u])&&(i[u]=a)}
function v(t,e,n,r,i,o,a){var u,c,f,s={},l=e.length,h=o.length,p=new Array(l)
;for(u=0;u<l;++u)(c=e[u])&&(p[u]=f="$"+a.call(c,c.__data__,u,e),
f in s?i[u]=c:s[f]=c)
;for(u=0;u<h;++u)(c=s[f="$"+a.call(t,o[u],u,o)])?(r[u]=c,c.__data__=o[u],
s[f]=null):n[u]=new d(t,o[u]);for(u=0;u<l;++u)(c=e[u])&&s[p[u]]===c&&(i[u]=c)}
function y(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function g(t){return function(){
this.removeAttribute(t)}}function b(t){return function(){
this.removeAttributeNS(t.space,t.local)}}function _(t,e){return function(){
this.setAttribute(t,e)}}function m(t,e){return function(){
this.setAttributeNS(t.space,t.local,e)}}function x(t,e){return function(){
var n=e.apply(this,arguments)
;null==n?this.removeAttribute(t):this.setAttribute(t,n)}}function w(t,e){
return function(){var n=e.apply(this,arguments)
;null==n?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)
}}function M(t){
return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView
}function E(t){return function(){this.style.removeProperty(t)}}
function k(t,e,n){return function(){this.style.setProperty(t,e,n)}}
function A(t,e,n){return function(){var r=e.apply(this,arguments)
;null==r?this.style.removeProperty(t):this.style.setProperty(t,r,n)}}
function S(t,e){
return t.style.getPropertyValue(e)||M(t).getComputedStyle(t,null).getPropertyValue(e)
}function j(t){return function(){delete this[t]}}function N(t,e){
return function(){this[t]=e}}function T(t,e){return function(){
var n=e.apply(this,arguments);null==n?delete this[t]:this[t]=n}}function C(t){
return t.trim().split(/^|\s+/)}function O(t){return t.classList||new P(t)}
function P(t){this._node=t,this._names=C(t.getAttribute("class")||"")}
function I(t,e){for(var n=O(t),r=-1,i=e.length;++r<i;)n.add(e[r])}
function L(t,e){for(var n=O(t),r=-1,i=e.length;++r<i;)n.remove(e[r])}
function R(t){return function(){I(this,t)}}function z(t){return function(){
L(this,t)}}function D(t,e){return function(){
(e.apply(this,arguments)?I:L)(this,t)}}function F(){this.textContent=""}
function B(t){return function(){this.textContent=t}}function q(t){
return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}
function U(){this.innerHTML=""}function Y(t){return function(){this.innerHTML=t}
}function G(t){return function(){var e=t.apply(this,arguments)
;this.innerHTML=null==e?"":e}}function V(){
this.nextSibling&&this.parentNode.appendChild(this)}function H(){
this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)
}function K(){return null}function X(){var t=this.parentNode
;t&&t.removeChild(this)}function W(){var t=this.cloneNode(!1),e=this.parentNode
;return e?e.insertBefore(t,this.nextSibling):t}function $(){
var t=this.cloneNode(!0),e=this.parentNode
;return e?e.insertBefore(t,this.nextSibling):t}P.prototype={add:function(t){
this._names.indexOf(t)<0&&(this._names.push(t),
this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){
var e=this._names.indexOf(t)
;e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))
},contains:function(t){return this._names.indexOf(t)>=0}};var Z={}
;(t.event=null,
"undefined"!=typeof document)&&("onmouseenter"in document.documentElement||(Z={
mouseenter:"mouseover",mouseleave:"mouseout"}));function Q(t,e,n){
return t=J(t,e,n),function(e){var n=e.relatedTarget
;n&&(n===this||8&n.compareDocumentPosition(this))||t.call(this,e)}}
function J(e,n,r){return function(i){var o=t.event;t.event=i;try{
e.call(this,this.__data__,n,r)}finally{t.event=o}}}function tt(t){
return t.trim().split(/^|\s+/).map((function(t){var e="",n=t.indexOf(".")
;return n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),{type:t,name:e}}))}function et(t){
return function(){var e=this.__on;if(e){
for(var n,r=0,i=-1,o=e.length;r<o;++r)n=e[r],
t.type&&n.type!==t.type||n.name!==t.name?e[++i]=n:this.removeEventListener(n.type,n.listener,n.capture)
;++i?e.length=i:delete this.__on}}}function nt(t,e,n){
var r=Z.hasOwnProperty(t.type)?Q:J;return function(i,o,a){
var u,c=this.__on,f=r(e,o,a)
;if(c)for(var s=0,l=c.length;s<l;++s)if((u=c[s]).type===t.type&&u.name===t.name)return this.removeEventListener(u.type,u.listener,u.capture),
this.addEventListener(u.type,u.listener=f,u.capture=n),void(u.value=e)
;this.addEventListener(t.type,f,n),u={type:t.type,name:t.name,value:e,
listener:f,capture:n},c?c.push(u):this.__on=[u]}}function rt(t,e,n){
var r=M(t),i=r.CustomEvent
;"function"==typeof i?i=new i(e,n):(i=r.document.createEvent("Event"),
n?(i.initEvent(e,n.bubbles,n.cancelable),
i.detail=n.detail):i.initEvent(e,!1,!1)),t.dispatchEvent(i)}function it(t,e){
return function(){return rt(this,t,e)}}function ot(t,e){return function(){
return rt(this,t,e.apply(this,arguments))}}var at=[null];function ut(t,e){
this._groups=t,this._parents=e}function ct(){
return new ut([[document.documentElement]],at)}function ft(t){
return"string"==typeof t?new ut([[document.querySelector(t)]],[document.documentElement]):new ut([[t]],at)
}ut.prototype=ct.prototype={constructor:ut,select:function(t){
"function"!=typeof t&&(t=c(t))
;for(var e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i)for(var o,a,u=e[i],f=u.length,s=r[i]=new Array(f),l=0;l<f;++l)(o=u[l])&&(a=t.call(o,o.__data__,l,u))&&("__data__"in o&&(a.__data__=o.__data__),
s[l]=a);return new ut(r,this._parents)},selectAll:function(t){
"function"!=typeof t&&(t=s(t))
;for(var e=this._groups,n=e.length,r=[],i=[],o=0;o<n;++o)for(var a,u=e[o],c=u.length,f=0;f<c;++f)(a=u[f])&&(r.push(t.call(a,a.__data__,f,u)),
i.push(a));return new ut(r,i)},filter:function(t){"function"!=typeof t&&(t=l(t))
;for(var e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i)for(var o,a=e[i],u=a.length,c=r[i]=[],f=0;f<u;++f)(o=a[f])&&t.call(o,o.__data__,f,a)&&c.push(o)
;return new ut(r,this._parents)},data:function(t,e){
if(!t)return d=new Array(this.size()),f=-1,this.each((function(t){d[++f]=t})),d
;var n=e?v:p,r=this._parents,i=this._groups
;"function"!=typeof t&&(t=function(t){return function(){return t}}(t))
;for(var o=i.length,a=new Array(o),u=new Array(o),c=new Array(o),f=0;f<o;++f){
var s=r[f],l=i[f],h=l.length,d=t.call(s,s&&s.__data__,f,r),y=d.length,g=u[f]=new Array(y),b=a[f]=new Array(y)
;n(s,l,g,b,c[f]=new Array(h),d,e);for(var _,m,x=0,w=0;x<y;++x)if(_=g[x]){
for(x>=w&&(w=x+1);!(m=b[w])&&++w<y;);_._next=m||null}}
return(a=new ut(a,r))._enter=u,a._exit=c,a},enter:function(){
return new ut(this._enter||this._groups.map(h),this._parents)},exit:function(){
return new ut(this._exit||this._groups.map(h),this._parents)},
join:function(t,e,n){var r=this.enter(),i=this,o=this.exit()
;return r="function"==typeof t?t(r):r.append(t+""),
null!=e&&(i=e(i)),null==n?o.remove():n(o),r&&i?r.merge(i).order():i},
merge:function(t){
for(var e=this._groups,n=t._groups,r=e.length,i=n.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var c,f=e[u],s=n[u],l=f.length,h=a[u]=new Array(l),d=0;d<l;++d)(c=f[d]||s[d])&&(h[d]=c)
;for(;u<r;++u)a[u]=e[u];return new ut(a,this._parents)},order:function(){
for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var r,i=t[e],o=i.length-1,a=i[o];--o>=0;)(r=i[o])&&(a&&4^r.compareDocumentPosition(a)&&a.parentNode.insertBefore(r,a),
a=r);return this},sort:function(t){function e(e,n){
return e&&n?t(e.__data__,n.__data__):!e-!n}t||(t=y)
;for(var n=this._groups,r=n.length,i=new Array(r),o=0;o<r;++o){
for(var a,u=n[o],c=u.length,f=i[o]=new Array(c),s=0;s<c;++s)(a=u[s])&&(f[s]=a)
;f.sort(e)}return new ut(i,this._parents).order()},call:function(){
var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},
nodes:function(){var t=new Array(this.size()),e=-1;return this.each((function(){
t[++e]=this})),t},node:function(){
for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r=t[e],i=0,o=r.length;i<o;++i){
var a=r[i];if(a)return a}return null},size:function(){var t=0
;return this.each((function(){++t})),t},empty:function(){return!this.node()},
each:function(t){
for(var e=this._groups,n=0,r=e.length;n<r;++n)for(var i,o=e[n],a=0,u=o.length;a<u;++a)(i=o[a])&&t.call(i,i.__data__,a,o)
;return this},attr:function(t,e){var n=r(t);if(arguments.length<2){
var i=this.node()
;return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}
return this.each((null==e?n.local?b:g:"function"==typeof e?n.local?w:x:n.local?m:_)(n,e))
},style:function(t,e,n){
return arguments.length>1?this.each((null==e?E:"function"==typeof e?A:k)(t,e,null==n?"":n)):S(this.node(),t)
},property:function(t,e){
return arguments.length>1?this.each((null==e?j:"function"==typeof e?T:N)(t,e)):this.node()[t]
},classed:function(t,e){var n=C(t+"");if(arguments.length<2){
for(var r=O(this.node()),i=-1,o=n.length;++i<o;)if(!r.contains(n[i]))return!1
;return!0}return this.each(("function"==typeof e?D:e?R:z)(n,e))},
text:function(t){
return arguments.length?this.each(null==t?F:("function"==typeof t?q:B)(t)):this.node().textContent
},html:function(t){
return arguments.length?this.each(null==t?U:("function"==typeof t?G:Y)(t)):this.node().innerHTML
},raise:function(){return this.each(V)},lower:function(){return this.each(H)},
append:function(t){var e="function"==typeof t?t:a(t)
;return this.select((function(){return this.appendChild(e.apply(this,arguments))
}))},insert:function(t,e){
var n="function"==typeof t?t:a(t),r=null==e?K:"function"==typeof e?e:c(e)
;return this.select((function(){
return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)
}))},remove:function(){return this.each(X)},clone:function(t){
return this.select(t?$:W)},datum:function(t){
return arguments.length?this.property("__data__",t):this.node().__data__},
on:function(t,e,n){var r,i,o=tt(t+""),a=o.length;if(!(arguments.length<2)){
for(u=e?nt:et,null==n&&(n=!1),r=0;r<a;++r)this.each(u(o[r],e,n));return this}
var u=this.node().__on
;if(u)for(var c,f=0,s=u.length;f<s;++f)for(r=0,c=u[f];r<a;++r)if((i=o[r]).type===c.type&&i.name===c.name)return c.value
},dispatch:function(t,e){return this.each(("function"==typeof e?ot:it)(t,e))}}
;var st=0;function lt(){return new ht}function ht(){
this._="@"+(++st).toString(36)}function dt(){
for(var e,n=t.event;e=n.sourceEvent;)n=e;return n}function pt(t,e){
var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint()
;return r.x=e.clientX,
r.y=e.clientY,[(r=r.matrixTransform(t.getScreenCTM().inverse())).x,r.y]}
var i=t.getBoundingClientRect()
;return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}
ht.prototype=lt.prototype={constructor:ht,get:function(t){
for(var e=this._;!(e in t);)if(!(t=t.parentNode))return;return t[e]},
set:function(t,e){return t[this._]=e},remove:function(t){
return this._ in t&&delete t[this._]},toString:function(){return this._}
},t.clientPoint=pt,t.create=function(t){
return ft(a(t).call(document.documentElement))
},t.creator=a,t.customEvent=function(e,n,r,i){var o=t.event
;e.sourceEvent=t.event,t.event=e;try{return n.apply(r,i)}finally{t.event=o}
},t.local=lt,t.matcher=l,t.mouse=function(t){var e=dt()
;return e.changedTouches&&(e=e.changedTouches[0]),pt(t,e)
},t.namespace=r,t.namespaces=n,t.select=ft,t.selectAll=function(t){
return"string"==typeof t?new ut([document.querySelectorAll(t)],[document.documentElement]):new ut([null==t?[]:t],at)
},t.selection=ct,t.selector=c,t.selectorAll=s,t.style=S,t.touch=function(t,e,n){
arguments.length<3&&(n=e,e=dt().changedTouches)
;for(var r,i=0,o=e?e.length:0;i<o;++i)if((r=e[i]).identifier===n)return pt(t,r)
;return null},t.touches=function(t,e){null==e&&(e=dt().touches)
;for(var n=0,r=e?e.length:0,i=new Array(r);n<r;++n)i[n]=pt(t,e[n]);return i
},t.window=M,Object.defineProperty(t,"__esModule",{value:!0})}))},{}],
53:[function(t,e,n){!function(r,i){
"object"==typeof n&&void 0!==e?i(n,t("d3-path")):i((r=r||self).d3=r.d3||{},r.d3)
}(this,(function(t,e){"use strict";function n(t){return function(){return t}}
var r=Math.abs,i=Math.atan2,o=Math.cos,a=Math.max,u=Math.min,c=Math.sin,f=Math.sqrt,s=1e-12,l=Math.PI,h=l/2,d=2*l
;function p(t){return t>1?0:t<-1?l:Math.acos(t)}function v(t){
return t>=1?h:t<=-1?-h:Math.asin(t)}function y(t){return t.innerRadius}
function g(t){return t.outerRadius}function b(t){return t.startAngle}
function _(t){return t.endAngle}function m(t){return t&&t.padAngle}
function x(t,e,n,r,i,o,a,u){var c=n-t,f=r-e,l=a-i,h=u-o,d=h*c-l*f
;if(!(d*d<s))return[t+(d=(l*(e-o)-h*(t-i))/d)*c,e+d*f]}
function w(t,e,n,r,i,o,u){
var c=t-n,s=e-r,l=(u?o:-o)/f(c*c+s*s),h=l*s,d=-l*c,p=t+h,v=e+d,y=n+h,g=r+d,b=(p+y)/2,_=(v+g)/2,m=y-p,x=g-v,w=m*m+x*x,M=i-o,E=p*g-y*v,k=(x<0?-1:1)*f(a(0,M*M*w-E*E)),A=(E*x-m*k)/w,S=(-E*m-x*k)/w,j=(E*x+m*k)/w,N=(-E*m+x*k)/w,T=A-b,C=S-_,O=j-b,P=N-_
;return T*T+C*C>O*O+P*P&&(A=j,S=N),{cx:A,cy:S,x01:-h,y01:-d,x11:A*(i/M-1),
y11:S*(i/M-1)}}function M(t){this._context=t}function E(t){return new M(t)}
function k(t){return t[0]}function A(t){return t[1]}function S(){
var t=k,r=A,i=n(!0),o=null,a=E,u=null;function c(n){var c,f,s,l=n.length,h=!1
;for(null==o&&(u=a(s=e.path())),
c=0;c<=l;++c)!(c<l&&i(f=n[c],c,n))===h&&((h=!h)?u.lineStart():u.lineEnd()),
h&&u.point(+t(f,c,n),+r(f,c,n));if(s)return u=null,s+""||null}
return c.x=function(e){
return arguments.length?(t="function"==typeof e?e:n(+e),c):t},c.y=function(t){
return arguments.length?(r="function"==typeof t?t:n(+t),c):r
},c.defined=function(t){
return arguments.length?(i="function"==typeof t?t:n(!!t),c):i
},c.curve=function(t){return arguments.length?(a=t,null!=o&&(u=a(o)),c):a
},c.context=function(t){return arguments.length?(null==t?o=u=null:u=a(o=t),c):o
},c}function j(){var t=k,r=null,i=n(0),o=A,a=n(!0),u=null,c=E,f=null
;function s(n){var s,l,h,d,p,v=n.length,y=!1,g=new Array(v),b=new Array(v)
;for(null==u&&(f=c(p=e.path())),s=0;s<=v;++s){
if(!(s<v&&a(d=n[s],s,n))===y)if(y=!y)l=s,f.areaStart(),f.lineStart();else{
for(f.lineEnd(),f.lineStart(),h=s-1;h>=l;--h)f.point(g[h],b[h])
;f.lineEnd(),f.areaEnd()}
y&&(g[s]=+t(d,s,n),b[s]=+i(d,s,n),f.point(r?+r(d,s,n):g[s],o?+o(d,s,n):b[s]))}
if(p)return f=null,p+""||null}function l(){
return S().defined(a).curve(c).context(u)}return s.x=function(e){
return arguments.length?(t="function"==typeof e?e:n(+e),r=null,s):t
},s.x0=function(e){return arguments.length?(t="function"==typeof e?e:n(+e),s):t
},s.x1=function(t){
return arguments.length?(r=null==t?null:"function"==typeof t?t:n(+t),s):r
},s.y=function(t){
return arguments.length?(i="function"==typeof t?t:n(+t),o=null,s):i
},s.y0=function(t){return arguments.length?(i="function"==typeof t?t:n(+t),s):i
},s.y1=function(t){
return arguments.length?(o=null==t?null:"function"==typeof t?t:n(+t),s):o
},s.lineX0=s.lineY0=function(){return l().x(t).y(i)},s.lineY1=function(){
return l().x(t).y(o)},s.lineX1=function(){return l().x(r).y(i)
},s.defined=function(t){
return arguments.length?(a="function"==typeof t?t:n(!!t),s):a
},s.curve=function(t){return arguments.length?(c=t,null!=u&&(f=c(u)),s):c
},s.context=function(t){return arguments.length?(null==t?u=f=null:f=c(u=t),s):u
},s}function N(t,e){return e<t?-1:e>t?1:e>=t?0:NaN}function T(t){return t}
M.prototype={areaStart:function(){this._line=0},areaEnd:function(){
this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){
(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),
this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){
case 0:
this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e)
;break;case 1:this._point=2;default:this._context.lineTo(t,e)}}};var C=P(E)
;function O(t){this._curve=t}function P(t){function e(e){return new O(t(e))}
return e._curve=t,e}function I(t){var e=t.curve
;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){
return arguments.length?e(P(t)):e()._curve},t}function L(){
return I(S().curve(C))}function R(){
var t=j().curve(C),e=t.curve,n=t.lineX0,r=t.lineX1,i=t.lineY0,o=t.lineY1
;return t.angle=t.x,
delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,
t.radius=t.y,
delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,
t.lineStartAngle=function(){return I(n())
},delete t.lineX0,t.lineEndAngle=function(){return I(r())
},delete t.lineX1,t.lineInnerRadius=function(){return I(i())
},delete t.lineY0,t.lineOuterRadius=function(){return I(o())
},delete t.lineY1,t.curve=function(t){return arguments.length?e(P(t)):e()._curve
},t}function z(t,e){return[(e=+e)*Math.cos(t-=Math.PI/2),e*Math.sin(t)]}
O.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){
this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},
lineEnd:function(){this._curve.lineEnd()},point:function(t,e){
this._curve.point(e*Math.sin(t),e*-Math.cos(t))}};var D=Array.prototype.slice
;function F(t){return t.source}function B(t){return t.target}function q(t){
var r=F,i=B,o=k,a=A,u=null;function c(){
var n,c=D.call(arguments),f=r.apply(this,c),s=i.apply(this,c)
;if(u||(u=n=e.path()),
t(u,+o.apply(this,(c[0]=f,c)),+a.apply(this,c),+o.apply(this,(c[0]=s,
c)),+a.apply(this,c)),n)return u=null,n+""||null}return c.source=function(t){
return arguments.length?(r=t,c):r},c.target=function(t){
return arguments.length?(i=t,c):i},c.x=function(t){
return arguments.length?(o="function"==typeof t?t:n(+t),c):o},c.y=function(t){
return arguments.length?(a="function"==typeof t?t:n(+t),c):a
},c.context=function(t){return arguments.length?(u=null==t?null:t,c):u},c}
function U(t,e,n,r,i){t.moveTo(e,n),t.bezierCurveTo(e=(e+r)/2,n,e,i,r,i)}
function Y(t,e,n,r,i){t.moveTo(e,n),t.bezierCurveTo(e,n=(n+i)/2,r,n,r,i)}
function G(t,e,n,r,i){var o=z(e,n),a=z(e,n=(n+i)/2),u=z(r,n),c=z(r,i)
;t.moveTo(o[0],o[1]),t.bezierCurveTo(a[0],a[1],u[0],u[1],c[0],c[1])}var V={
draw:function(t,e){var n=Math.sqrt(e/l);t.moveTo(n,0),t.arc(0,0,n,0,d)}},H={
draw:function(t,e){var n=Math.sqrt(e/5)/2
;t.moveTo(-3*n,-n),t.lineTo(-n,-n),t.lineTo(-n,-3*n),
t.lineTo(n,-3*n),t.lineTo(n,-n),
t.lineTo(3*n,-n),t.lineTo(3*n,n),t.lineTo(n,n),t.lineTo(n,3*n),t.lineTo(-n,3*n),
t.lineTo(-n,n),t.lineTo(-3*n,n),t.closePath()}},K=Math.sqrt(1/3),X=2*K,W={
draw:function(t,e){var n=Math.sqrt(e/X),r=n*K
;t.moveTo(0,-n),t.lineTo(r,0),t.lineTo(0,n),t.lineTo(-r,0),t.closePath()}
},$=Math.sin(l/10)/Math.sin(7*l/10),Z=Math.sin(d/10)*$,Q=-Math.cos(d/10)*$,J={
draw:function(t,e){var n=Math.sqrt(.8908130915292852*e),r=Z*n,i=Q*n
;t.moveTo(0,-n),t.lineTo(r,i);for(var o=1;o<5;++o){
var a=d*o/5,u=Math.cos(a),c=Math.sin(a)
;t.lineTo(c*n,-u*n),t.lineTo(u*r-c*i,c*r+u*i)}t.closePath()}},tt={
draw:function(t,e){var n=Math.sqrt(e),r=-n/2;t.rect(r,r,n,n)}
},et=Math.sqrt(3),nt={draw:function(t,e){var n=-Math.sqrt(e/(3*et))
;t.moveTo(0,2*n),t.lineTo(-et*n,-n),t.lineTo(et*n,-n),t.closePath()}
},rt=-.5,it=Math.sqrt(3)/2,ot=1/Math.sqrt(12),at=3*(ot/2+1),ut={
draw:function(t,e){var n=Math.sqrt(e/at),r=n/2,i=n*ot,o=r,a=n*ot+n,u=-o,c=a
;t.moveTo(r,i),
t.lineTo(o,a),t.lineTo(u,c),t.lineTo(rt*r-it*i,it*r+rt*i),t.lineTo(rt*o-it*a,it*o+rt*a),
t.lineTo(rt*u-it*c,it*u+rt*c),
t.lineTo(rt*r+it*i,rt*i-it*r),t.lineTo(rt*o+it*a,rt*a-it*o),
t.lineTo(rt*u+it*c,rt*c-it*u),t.closePath()}},ct=[V,H,W,tt,J,nt,ut]
;function ft(){}function st(t,e,n){
t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+e)/6,(t._y0+4*t._y1+n)/6)
}function lt(t){this._context=t}function ht(t){this._context=t}function dt(t){
this._context=t}function pt(t,e){this._basis=new lt(t),this._beta=e}
lt.prototype={areaStart:function(){this._line=0},areaEnd:function(){
this._line=NaN},lineStart:function(){
this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){
switch(this._point){case 3:st(this,this._x1,this._y1);case 2:
this._context.lineTo(this._x1,this._y1)}
(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),
this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){
case 0:
this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e)
;break;case 1:this._point=2;break;case 2:
this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6)
;default:st(this,t,e)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e}
},ht.prototype={areaStart:ft,areaEnd:ft,lineStart:function(){
this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,
this._point=0},lineEnd:function(){switch(this._point){case 1:
this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:
this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),
this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),
this._context.closePath();break;case 3:
this.point(this._x2,this._y2),this.point(this._x3,this._y3),
this.point(this._x4,this._y4)}},point:function(t,e){
switch(t=+t,e=+e,this._point){case 0:this._point=1,this._x2=t,this._y2=e;break
;case 1:this._point=2,this._x3=t,this._y3=e;break;case 2:
this._point=3,this._x4=t,
this._y4=e,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+e)/6)
;break;default:st(this,t,e)}
this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e}},dt.prototype={
areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},
lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},
lineEnd:function(){
(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),
this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){
case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3
;var n=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+e)/6
;this._line?this._context.lineTo(n,r):this._context.moveTo(n,r);break;case 3:
this._point=4;default:st(this,t,e)}
this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e}},pt.prototype={
lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},
lineEnd:function(){var t=this._x,e=this._y,n=t.length-1
;if(n>0)for(var r,i=t[0],o=e[0],a=t[n]-i,u=e[n]-o,c=-1;++c<=n;)r=c/n,
this._basis.point(this._beta*t[c]+(1-this._beta)*(i+r*a),this._beta*e[c]+(1-this._beta)*(o+r*u))
;this._x=this._y=null,this._basis.lineEnd()},point:function(t,e){
this._x.push(+t),this._y.push(+e)}};var vt=function t(e){function n(t){
return 1===e?new lt(t):new pt(t,e)}return n.beta=function(e){return t(+e)},n
}(.85);function yt(t,e,n){
t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-e),t._y2+t._k*(t._y1-n),t._x2,t._y2)
}function gt(t,e){this._context=t,this._k=(1-e)/6}gt.prototype={
areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},
lineStart:function(){
this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},
lineEnd:function(){switch(this._point){case 2:
this._context.lineTo(this._x2,this._y2);break;case 3:yt(this,this._x1,this._y1)}
(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),
this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){
case 0:
this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e)
;break;case 1:this._point=2,this._x1=t,this._y1=e;break;case 2:this._point=3
;default:yt(this,t,e)}
this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,
this._y1=this._y2,this._y2=e}};var bt=function t(e){function n(t){
return new gt(t,e)}return n.tension=function(e){return t(+e)},n}(0)
;function _t(t,e){this._context=t,this._k=(1-e)/6}_t.prototype={areaStart:ft,
areaEnd:ft,lineStart:function(){
this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,
this._point=0},lineEnd:function(){switch(this._point){case 1:
this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:
this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:
this.point(this._x3,this._y3),
this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},
point:function(t,e){switch(t=+t,e=+e,this._point){case 0:
this._point=1,this._x3=t,this._y3=e;break;case 1:
this._point=2,this._context.moveTo(this._x4=t,this._y4=e);break;case 2:
this._point=3,this._x5=t,this._y5=e;break;default:yt(this,t,e)}
this._x0=this._x1,
this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}}
;var mt=function t(e){function n(t){return new _t(t,e)}
return n.tension=function(e){return t(+e)},n}(0);function xt(t,e){
this._context=t,this._k=(1-e)/6}xt.prototype={areaStart:function(){this._line=0
},areaEnd:function(){this._line=NaN},lineStart:function(){
this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},
lineEnd:function(){
(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),
this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){
case 0:this._point=1;break;case 1:this._point=2;break;case 2:
this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2)
;break;case 3:this._point=4;default:yt(this,t,e)}
this._x0=this._x1,this._x1=this._x2,
this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}}
;var wt=function t(e){function n(t){return new xt(t,e)}
return n.tension=function(e){return t(+e)},n}(0);function Mt(t,e,n){
var r=t._x1,i=t._y1,o=t._x2,a=t._y2;if(t._l01_a>s){
var u=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,c=3*t._l01_a*(t._l01_a+t._l12_a)
;r=(r*u-t._x0*t._l12_2a+t._x2*t._l01_2a)/c,
i=(i*u-t._y0*t._l12_2a+t._y2*t._l01_2a)/c}if(t._l23_a>s){
var f=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,l=3*t._l23_a*(t._l23_a+t._l12_a)
;o=(o*f+t._x1*t._l23_2a-e*t._l12_2a)/l,a=(a*f+t._y1*t._l23_2a-n*t._l12_2a)/l}
t._context.bezierCurveTo(r,i,o,a,t._x2,t._y2)}function Et(t,e){
this._context=t,this._alpha=e}Et.prototype={areaStart:function(){this._line=0},
areaEnd:function(){this._line=NaN},lineStart:function(){
this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,
this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0
},lineEnd:function(){switch(this._point){case 2:
this._context.lineTo(this._x2,this._y2);break;case 3:
this.point(this._x2,this._y2)}
(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),
this._line=1-this._line},point:function(t,e){if(t=+t,e=+e,this._point){
var n=this._x2-t,r=this._y2-e
;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}
switch(this._point){case 0:
this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e)
;break;case 1:this._point=2;break;case 2:this._point=3;default:Mt(this,t,e)}
this._l01_a=this._l12_a,
this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,
this._x0=this._x1,
this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}}
;var kt=function t(e){function n(t){return e?new Et(t,e):new gt(t,0)}
return n.alpha=function(e){return t(+e)},n}(.5);function At(t,e){
this._context=t,this._alpha=e}At.prototype={areaStart:ft,areaEnd:ft,
lineStart:function(){
this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,
this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0
},lineEnd:function(){switch(this._point){case 1:
this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:
this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:
this.point(this._x3,this._y3),
this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},
point:function(t,e){if(t=+t,e=+e,this._point){var n=this._x2-t,r=this._y2-e
;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}
switch(this._point){case 0:this._point=1,this._x3=t,this._y3=e;break;case 1:
this._point=2,this._context.moveTo(this._x4=t,this._y4=e);break;case 2:
this._point=3,this._x5=t,this._y5=e;break;default:Mt(this,t,e)}
this._l01_a=this._l12_a,
this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,
this._x0=this._x1,
this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}}
;var St=function t(e){function n(t){return e?new At(t,e):new _t(t,0)}
return n.alpha=function(e){return t(+e)},n}(.5);function jt(t,e){
this._context=t,this._alpha=e}jt.prototype={areaStart:function(){this._line=0},
areaEnd:function(){this._line=NaN},lineStart:function(){
this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,
this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0
},lineEnd:function(){
(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),
this._line=1-this._line},point:function(t,e){if(t=+t,e=+e,this._point){
var n=this._x2-t,r=this._y2-e
;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}
switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break
;case 2:
this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2)
;break;case 3:this._point=4;default:Mt(this,t,e)}
this._l01_a=this._l12_a,this._l12_a=this._l23_a,
this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,
this._x0=this._x1,this._x1=this._x2,
this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}}
;var Nt=function t(e){function n(t){return e?new jt(t,e):new xt(t,0)}
return n.alpha=function(e){return t(+e)},n}(.5);function Tt(t){this._context=t}
function Ct(t){return t<0?-1:1}function Ot(t,e,n){
var r=t._x1-t._x0,i=e-t._x1,o=(t._y1-t._y0)/(r||i<0&&-0),a=(n-t._y1)/(i||r<0&&-0),u=(o*i+a*r)/(r+i)
;return(Ct(o)+Ct(a))*Math.min(Math.abs(o),Math.abs(a),.5*Math.abs(u))||0}
function Pt(t,e){var n=t._x1-t._x0;return n?(3*(t._y1-t._y0)/n-e)/2:e}
function It(t,e,n){var r=t._x0,i=t._y0,o=t._x1,a=t._y1,u=(o-r)/3
;t._context.bezierCurveTo(r+u,i+u*e,o-u,a-u*n,o,a)}function Lt(t){
this._context=t}function Rt(t){this._context=new zt(t)}function zt(t){
this._context=t}function Dt(t){this._context=t}function Ft(t){
var e,n,r=t.length-1,i=new Array(r),o=new Array(r),a=new Array(r)
;for(i[0]=0,o[0]=2,
a[0]=t[0]+2*t[1],e=1;e<r-1;++e)i[e]=1,o[e]=4,a[e]=4*t[e]+2*t[e+1]
;for(i[r-1]=2,o[r-1]=7,
a[r-1]=8*t[r-1]+t[r],e=1;e<r;++e)n=i[e]/o[e-1],o[e]-=n,a[e]-=n*a[e-1]
;for(i[r-1]=a[r-1]/o[r-1],e=r-2;e>=0;--e)i[e]=(a[e]-i[e+1])/o[e]
;for(o[r-1]=(t[r]+i[r-1])/2,e=0;e<r-1;++e)o[e]=2*t[e+1]-i[e+1];return[i,o]}
function Bt(t,e){this._context=t,this._t=e}function qt(t,e){
if((i=t.length)>1)for(var n,r,i,o=1,a=t[e[0]],u=a.length;o<i;++o)for(r=a,
a=t[e[o]],n=0;n<u;++n)a[n][1]+=a[n][0]=isNaN(r[n][1])?r[n][0]:r[n][1]}
function Ut(t){for(var e=t.length,n=new Array(e);--e>=0;)n[e]=e;return n}
function Yt(t,e){return t[e]}function Gt(t){var e=t.map(Vt)
;return Ut(t).sort((function(t,n){return e[t]-e[n]}))}function Vt(t){
for(var e,n=-1,r=0,i=t.length,o=-1/0;++n<i;)(e=+t[n][1])>o&&(o=e,r=n);return r}
function Ht(t){var e=t.map(Kt);return Ut(t).sort((function(t,n){return e[t]-e[n]
}))}function Kt(t){for(var e,n=0,r=-1,i=t.length;++r<i;)(e=+t[r][1])&&(n+=e)
;return n}Tt.prototype={areaStart:ft,areaEnd:ft,lineStart:function(){
this._point=0},lineEnd:function(){this._point&&this._context.closePath()},
point:function(t,e){
t=+t,e=+e,this._point?this._context.lineTo(t,e):(this._point=1,
this._context.moveTo(t,e))}},Lt.prototype={areaStart:function(){this._line=0},
areaEnd:function(){this._line=NaN},lineStart:function(){
this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},
lineEnd:function(){switch(this._point){case 2:
this._context.lineTo(this._x1,this._y1);break;case 3:
It(this,this._t0,Pt(this,this._t0))}
(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),
this._line=1-this._line},point:function(t,e){var n=NaN
;if(e=+e,(t=+t)!==this._x1||e!==this._y1){switch(this._point){case 0:
this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e)
;break;case 1:this._point=2;break;case 2:
this._point=3,It(this,Pt(this,n=Ot(this,t,e)),n);break;default:
It(this,this._t0,n=Ot(this,t,e))}this._x0=this._x1,this._x1=t,this._y0=this._y1,
this._y1=e,this._t0=n}}
},(Rt.prototype=Object.create(Lt.prototype)).point=function(t,e){
Lt.prototype.point.call(this,e,t)},zt.prototype={moveTo:function(t,e){
this._context.moveTo(e,t)},closePath:function(){this._context.closePath()},
lineTo:function(t,e){this._context.lineTo(e,t)},
bezierCurveTo:function(t,e,n,r,i,o){this._context.bezierCurveTo(e,t,r,n,o,i)}
},Dt.prototype={areaStart:function(){this._line=0},areaEnd:function(){
this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){
var t=this._x,e=this._y,n=t.length
;if(n)if(this._line?this._context.lineTo(t[0],e[0]):this._context.moveTo(t[0],e[0]),
2===n)this._context.lineTo(t[1],e[1]);else for(var r=Ft(t),i=Ft(e),o=0,a=1;a<n;++o,
++a)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],t[a],e[a])
;(this._line||0!==this._line&&1===n)&&this._context.closePath(),
this._line=1-this._line,this._x=this._y=null},point:function(t,e){
this._x.push(+t),this._y.push(+e)}},Bt.prototype={areaStart:function(){
this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){
this._x=this._y=NaN,this._point=0},lineEnd:function(){
0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),
(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),
this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,e){
switch(t=+t,e=+e,this._point){case 0:
this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e)
;break;case 1:this._point=2;default:
if(this._t<=0)this._context.lineTo(this._x,e),this._context.lineTo(t,e);else{
var n=this._x*(1-this._t)+t*this._t
;this._context.lineTo(n,this._y),this._context.lineTo(n,e)}}this._x=t,this._y=e}
},t.arc=function(){var t=y,a=g,M=n(0),E=null,k=b,A=_,S=m,j=null;function N(){
var n,y,g=+t.apply(this,arguments),b=+a.apply(this,arguments),_=k.apply(this,arguments)-h,m=A.apply(this,arguments)-h,N=r(m-_),T=m>_
;if(j||(j=n=e.path()),
b<g&&(y=b,b=g,g=y),b>s)if(N>d-s)j.moveTo(b*o(_),b*c(_)),j.arc(0,0,b,_,m,!T),
g>s&&(j.moveTo(g*o(m),g*c(m)),j.arc(0,0,g,m,_,T));else{
var C,O,P=_,I=m,L=_,R=m,z=N,D=N,F=S.apply(this,arguments)/2,B=F>s&&(E?+E.apply(this,arguments):f(g*g+b*b)),q=u(r(b-g)/2,+M.apply(this,arguments)),U=q,Y=q
;if(B>s){var G=v(B/g*c(F)),V=v(B/b*c(F))
;(z-=2*G)>s?(L+=G*=T?1:-1,R-=G):(z=0,L=R=(_+m)/2),
(D-=2*V)>s?(P+=V*=T?1:-1,I-=V):(D=0,P=I=(_+m)/2)}
var H=b*o(P),K=b*c(P),X=g*o(R),W=g*c(R);if(q>s){
var $,Z=b*o(I),Q=b*c(I),J=g*o(L),tt=g*c(L);if(N<l&&($=x(H,K,J,tt,Z,Q,X,W))){
var et=H-$[0],nt=K-$[1],rt=Z-$[0],it=Q-$[1],ot=1/c(p((et*rt+nt*it)/(f(et*et+nt*nt)*f(rt*rt+it*it)))/2),at=f($[0]*$[0]+$[1]*$[1])
;U=u(q,(g-at)/(ot-1)),Y=u(q,(b-at)/(ot+1))}}
D>s?Y>s?(C=w(J,tt,H,K,b,Y,T),O=w(Z,Q,X,W,b,Y,T),j.moveTo(C.cx+C.x01,C.cy+C.y01),
Y<q?j.arc(C.cx,C.cy,Y,i(C.y01,C.x01),i(O.y01,O.x01),!T):(j.arc(C.cx,C.cy,Y,i(C.y01,C.x01),i(C.y11,C.x11),!T),
j.arc(0,0,b,i(C.cy+C.y11,C.cx+C.x11),i(O.cy+O.y11,O.cx+O.x11),!T),
j.arc(O.cx,O.cy,Y,i(O.y11,O.x11),i(O.y01,O.x01),!T))):(j.moveTo(H,K),
j.arc(0,0,b,P,I,!T)):j.moveTo(H,K),
g>s&&z>s?U>s?(C=w(X,W,Z,Q,g,-U,T),O=w(H,K,J,tt,g,-U,T),
j.lineTo(C.cx+C.x01,C.cy+C.y01),
U<q?j.arc(C.cx,C.cy,U,i(C.y01,C.x01),i(O.y01,O.x01),!T):(j.arc(C.cx,C.cy,U,i(C.y01,C.x01),i(C.y11,C.x11),!T),
j.arc(0,0,g,i(C.cy+C.y11,C.cx+C.x11),i(O.cy+O.y11,O.cx+O.x11),T),
j.arc(O.cx,O.cy,U,i(O.y11,O.x11),i(O.y01,O.x01),!T))):j.arc(0,0,g,R,L,T):j.lineTo(X,W)
}else j.moveTo(0,0);if(j.closePath(),n)return j=null,n+""||null}
return N.centroid=function(){
var e=(+t.apply(this,arguments)+ +a.apply(this,arguments))/2,n=(+k.apply(this,arguments)+ +A.apply(this,arguments))/2-l/2
;return[o(n)*e,c(n)*e]},N.innerRadius=function(e){
return arguments.length?(t="function"==typeof e?e:n(+e),N):t
},N.outerRadius=function(t){
return arguments.length?(a="function"==typeof t?t:n(+t),N):a
},N.cornerRadius=function(t){
return arguments.length?(M="function"==typeof t?t:n(+t),N):M
},N.padRadius=function(t){
return arguments.length?(E=null==t?null:"function"==typeof t?t:n(+t),N):E
},N.startAngle=function(t){
return arguments.length?(k="function"==typeof t?t:n(+t),N):k
},N.endAngle=function(t){
return arguments.length?(A="function"==typeof t?t:n(+t),N):A
},N.padAngle=function(t){
return arguments.length?(S="function"==typeof t?t:n(+t),N):S
},N.context=function(t){return arguments.length?(j=null==t?null:t,N):j},N
},t.area=j,t.areaRadial=R,t.curveBasis=function(t){return new lt(t)
},t.curveBasisClosed=function(t){return new ht(t)},t.curveBasisOpen=function(t){
return new dt(t)
},t.curveBundle=vt,t.curveCardinal=bt,t.curveCardinalClosed=mt,t.curveCardinalOpen=wt,
t.curveCatmullRom=kt,
t.curveCatmullRomClosed=St,t.curveCatmullRomOpen=Nt,t.curveLinear=E,
t.curveLinearClosed=function(t){return new Tt(t)},t.curveMonotoneX=function(t){
return new Lt(t)},t.curveMonotoneY=function(t){return new Rt(t)
},t.curveNatural=function(t){return new Dt(t)},t.curveStep=function(t){
return new Bt(t,.5)},t.curveStepAfter=function(t){return new Bt(t,1)
},t.curveStepBefore=function(t){return new Bt(t,0)
},t.line=S,t.lineRadial=L,t.linkHorizontal=function(){return q(U)
},t.linkRadial=function(){var t=q(G);return t.angle=t.x,delete t.x,t.radius=t.y,
delete t.y,t},t.linkVertical=function(){return q(Y)},t.pie=function(){
var t=T,e=N,r=null,i=n(0),o=n(d),a=n(0);function u(n){
var u,c,f,s,l,h=n.length,p=0,v=new Array(h),y=new Array(h),g=+i.apply(this,arguments),b=Math.min(d,Math.max(-d,o.apply(this,arguments)-g)),_=Math.min(Math.abs(b)/h,a.apply(this,arguments)),m=_*(b<0?-1:1)
;for(u=0;u<h;++u)(l=y[v[u]=u]=+t(n[u],u,n))>0&&(p+=l)
;for(null!=e?v.sort((function(t,n){return e(y[t],y[n])
})):null!=r&&v.sort((function(t,e){return r(n[t],n[e])
})),u=0,f=p?(b-h*m)/p:0;u<h;++u,g=s)c=v[u],s=g+((l=y[c])>0?l*f:0)+m,y[c]={
data:n[c],index:u,value:l,startAngle:g,endAngle:s,padAngle:_};return y}
return u.value=function(e){
return arguments.length?(t="function"==typeof e?e:n(+e),u):t
},u.sortValues=function(t){return arguments.length?(e=t,r=null,u):e
},u.sort=function(t){return arguments.length?(r=t,e=null,u):r
},u.startAngle=function(t){
return arguments.length?(i="function"==typeof t?t:n(+t),u):i
},u.endAngle=function(t){
return arguments.length?(o="function"==typeof t?t:n(+t),u):o
},u.padAngle=function(t){
return arguments.length?(a="function"==typeof t?t:n(+t),u):a},u
},t.pointRadial=z,t.radialArea=R,t.radialLine=L,t.stack=function(){
var t=n([]),e=Ut,r=qt,i=Yt;function o(n){
var o,a,u=t.apply(this,arguments),c=n.length,f=u.length,s=new Array(f)
;for(o=0;o<f;++o){
for(var l,h=u[o],d=s[o]=new Array(c),p=0;p<c;++p)d[p]=l=[0,+i(n[p],h,p,n)],
l.data=n[p];d.key=h}for(o=0,a=e(s);o<f;++o)s[a[o]].index=o;return r(s,a),s}
return o.keys=function(e){
return arguments.length?(t="function"==typeof e?e:n(D.call(e)),o):t
},o.value=function(t){
return arguments.length?(i="function"==typeof t?t:n(+t),o):i
},o.order=function(t){
return arguments.length?(e=null==t?Ut:"function"==typeof t?t:n(D.call(t)),o):e},
o.offset=function(t){return arguments.length?(r=null==t?qt:t,o):r},o
},t.stackOffsetDiverging=function(t,e){
if((u=t.length)>0)for(var n,r,i,o,a,u,c=0,f=t[e[0]].length;c<f;++c)for(o=a=0,
n=0;n<u;++n)(i=(r=t[e[n]][c])[1]-r[0])>0?(r[0]=o,
r[1]=o+=i):i<0?(r[1]=a,r[0]=a+=i):(r[0]=0,r[1]=i)
},t.stackOffsetExpand=function(t,e){if((r=t.length)>0){
for(var n,r,i,o=0,a=t[0].length;o<a;++o){for(i=n=0;n<r;++n)i+=t[n][o][1]||0
;if(i)for(n=0;n<r;++n)t[n][o][1]/=i}qt(t,e)}
},t.stackOffsetNone=qt,t.stackOffsetSilhouette=function(t,e){if((n=t.length)>0){
for(var n,r=0,i=t[e[0]],o=i.length;r<o;++r){
for(var a=0,u=0;a<n;++a)u+=t[a][r][1]||0;i[r][1]+=i[r][0]=-u/2}qt(t,e)}
},t.stackOffsetWiggle=function(t,e){
if((i=t.length)>0&&(r=(n=t[e[0]]).length)>0){for(var n,r,i,o=0,a=1;a<r;++a){
for(var u=0,c=0,f=0;u<i;++u){
for(var s=t[e[u]],l=s[a][1]||0,h=(l-(s[a-1][1]||0))/2,d=0;d<u;++d){var p=t[e[d]]
;h+=(p[a][1]||0)-(p[a-1][1]||0)}c+=l,f+=h*l}n[a-1][1]+=n[a-1][0]=o,c&&(o-=f/c)}
n[a-1][1]+=n[a-1][0]=o,qt(t,e)}
},t.stackOrderAppearance=Gt,t.stackOrderAscending=Ht,
t.stackOrderDescending=function(t){return Ht(t).reverse()
},t.stackOrderInsideOut=function(t){
var e,n,r=t.length,i=t.map(Kt),o=Gt(t),a=0,u=0,c=[],f=[];for(e=0;e<r;++e)n=o[e],
a<u?(a+=i[n],c.push(n)):(u+=i[n],f.push(n));return f.reverse().concat(c)
},t.stackOrderNone=Ut,t.stackOrderReverse=function(t){return Ut(t).reverse()
},t.symbol=function(){var t=n(V),r=n(64),i=null;function o(){var n
;if(i||(i=n=e.path()),
t.apply(this,arguments).draw(i,+r.apply(this,arguments)),n)return i=null,
n+""||null}return o.type=function(e){
return arguments.length?(t="function"==typeof e?e:n(e),o):t},o.size=function(t){
return arguments.length?(r="function"==typeof t?t:n(+t),o):r
},o.context=function(t){return arguments.length?(i=null==t?null:t,o):i},o
},t.symbolCircle=V,
t.symbolCross=H,t.symbolDiamond=W,t.symbolSquare=tt,t.symbolStar=J,
t.symbolTriangle=nt,
t.symbolWye=ut,t.symbols=ct,Object.defineProperty(t,"__esModule",{value:!0})}))
},{"d3-path":46}],54:[function(t,e,n){!function(r,i){
"object"==typeof n&&void 0!==e?i(n,t("d3-time")):i((r=r||self).d3=r.d3||{},r.d3)
}(this,(function(t,e){"use strict";function n(t){if(0<=t.y&&t.y<100){
var e=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return e.setFullYear(t.y),e}
return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function r(t){if(0<=t.y&&t.y<100){
var e=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L))
;return e.setUTCFullYear(t.y),e}
return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function i(t,e,n){return{
y:t,m:e,d:n,H:0,M:0,S:0,L:0}}function o(t){
var o=t.dateTime,a=t.date,c=t.time,f=t.periods,s=t.days,l=t.shortDays,h=t.months,bt=t.shortMonths,_t=d(f),mt=p(f),xt=d(s),wt=p(s),Mt=d(l),Et=p(l),kt=d(h),At=p(h),St=d(bt),jt=p(bt),Nt={
a:function(t){return l[t.getDay()]},A:function(t){return s[t.getDay()]},
b:function(t){return bt[t.getMonth()]},B:function(t){return h[t.getMonth()]},
c:null,d:L,e:L,f:B,H:R,I:z,j:D,L:F,m:q,M:U,p:function(t){
return f[+(t.getHours()>=12)]},q:function(t){return 1+~~(t.getMonth()/3)},Q:yt,
s:gt,S:Y,u:G,U:V,V:H,w:K,W:X,x:null,X:null,y:W,Y:$,Z:Z,"%":vt},Tt={
a:function(t){return l[t.getUTCDay()]},A:function(t){return s[t.getUTCDay()]},
b:function(t){return bt[t.getUTCMonth()]},B:function(t){
return h[t.getUTCMonth()]},c:null,d:Q,e:Q,f:rt,H:J,I:tt,j:et,L:nt,m:it,M:ot,
p:function(t){return f[+(t.getUTCHours()>=12)]},q:function(t){
return 1+~~(t.getUTCMonth()/3)},Q:yt,s:gt,S:at,u:ut,U:ct,V:ft,w:st,W:lt,x:null,
X:null,y:ht,Y:dt,Z:pt,"%":vt},Ct={a:function(t,e,n){var r=Mt.exec(e.slice(n))
;return r?(t.w=Et[r[0].toLowerCase()],n+r[0].length):-1},A:function(t,e,n){
var r=xt.exec(e.slice(n));return r?(t.w=wt[r[0].toLowerCase()],n+r[0].length):-1
},b:function(t,e,n){var r=St.exec(e.slice(n))
;return r?(t.m=jt[r[0].toLowerCase()],n+r[0].length):-1},B:function(t,e,n){
var r=kt.exec(e.slice(n));return r?(t.m=At[r[0].toLowerCase()],n+r[0].length):-1
},c:function(t,e,n){return It(t,o,e,n)},d:k,e:k,f:C,H:S,I:S,j:A,L:T,m:E,M:j,
p:function(t,e,n){var r=_t.exec(e.slice(n))
;return r?(t.p=mt[r[0].toLowerCase()],n+r[0].length):-1},q:M,Q:P,s:I,S:N,u:y,
U:g,V:b,w:v,W:_,x:function(t,e,n){return It(t,a,e,n)},X:function(t,e,n){
return It(t,c,e,n)},y:x,Y:m,Z:w,"%":O};function Ot(t,e){return function(n){
var r,i,o,a=[],c=-1,f=0,s=t.length
;for(n instanceof Date||(n=new Date(+n));++c<s;)37===t.charCodeAt(c)&&(a.push(t.slice(f,c)),
null!=(i=u[r=t.charAt(++c)])?r=t.charAt(++c):i="e"===r?" ":"0",
(o=e[r])&&(r=o(n,i)),a.push(r),f=c+1);return a.push(t.slice(f,c)),a.join("")}}
function Pt(t,o){return function(a){var u,c,f=i(1900,void 0,1)
;if(It(f,t,a+="",0)!=a.length)return null;if("Q"in f)return new Date(f.Q)
;if("s"in f)return new Date(1e3*f.s+("L"in f?f.L:0))
;if(o&&!("Z"in f)&&(f.Z=0),"p"in f&&(f.H=f.H%12+12*f.p),
void 0===f.m&&(f.m="q"in f?f.q:0),"V"in f){if(f.V<1||f.V>53)return null
;"w"in f||(f.w=1),
"Z"in f?(c=(u=r(i(f.y,0,1))).getUTCDay(),u=c>4||0===c?e.utcMonday.ceil(u):e.utcMonday(u),
u=e.utcDay.offset(u,7*(f.V-1)),
f.y=u.getUTCFullYear(),f.m=u.getUTCMonth(),f.d=u.getUTCDate()+(f.w+6)%7):(c=(u=n(i(f.y,0,1))).getDay(),
u=c>4||0===c?e.timeMonday.ceil(u):e.timeMonday(u),
u=e.timeDay.offset(u,7*(f.V-1)),
f.y=u.getFullYear(),f.m=u.getMonth(),f.d=u.getDate()+(f.w+6)%7)
}else("W"in f||"U"in f)&&("w"in f||(f.w="u"in f?f.u%7:"W"in f?1:0),
c="Z"in f?r(i(f.y,0,1)).getUTCDay():n(i(f.y,0,1)).getDay(),
f.m=0,f.d="W"in f?(f.w+6)%7+7*f.W-(c+5)%7:f.w+7*f.U-(c+6)%7)
;return"Z"in f?(f.H+=f.Z/100|0,f.M+=f.Z%100,r(f)):n(f)}}function It(t,e,n,r){
for(var i,o,a=0,c=e.length,f=n.length;a<c;){if(r>=f)return-1
;if(37===(i=e.charCodeAt(a++))){
if(i=e.charAt(a++),!(o=Ct[i in u?e.charAt(a++):i])||(r=o(t,n,r))<0)return-1
}else if(i!=n.charCodeAt(r++))return-1}return r}
return Nt.x=Ot(a,Nt),Nt.X=Ot(c,Nt),
Nt.c=Ot(o,Nt),Tt.x=Ot(a,Tt),Tt.X=Ot(c,Tt),Tt.c=Ot(o,Tt),{format:function(t){
var e=Ot(t+="",Nt);return e.toString=function(){return t},e},parse:function(t){
var e=Pt(t+="",!1);return e.toString=function(){return t},e},
utcFormat:function(t){var e=Ot(t+="",Tt);return e.toString=function(){return t},
e},utcParse:function(t){var e=Pt(t+="",!0);return e.toString=function(){return t
},e}}}var a,u={"-":"",_:" ",0:"0"},c=/^\s*\d+/,f=/^%/,s=/[\\^$*+?|[\]().{}]/g
;function l(t,e,n){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length
;return r+(o<n?new Array(n-o+1).join(e)+i:i)}function h(t){
return t.replace(s,"\\$&")}function d(t){
return new RegExp("^(?:"+t.map(h).join("|")+")","i")}function p(t){
for(var e={},n=-1,r=t.length;++n<r;)e[t[n].toLowerCase()]=n;return e}
function v(t,e,n){var r=c.exec(e.slice(n,n+1))
;return r?(t.w=+r[0],n+r[0].length):-1}function y(t,e,n){
var r=c.exec(e.slice(n,n+1));return r?(t.u=+r[0],n+r[0].length):-1}
function g(t,e,n){var r=c.exec(e.slice(n,n+2))
;return r?(t.U=+r[0],n+r[0].length):-1}function b(t,e,n){
var r=c.exec(e.slice(n,n+2));return r?(t.V=+r[0],n+r[0].length):-1}
function _(t,e,n){var r=c.exec(e.slice(n,n+2))
;return r?(t.W=+r[0],n+r[0].length):-1}function m(t,e,n){
var r=c.exec(e.slice(n,n+4));return r?(t.y=+r[0],n+r[0].length):-1}
function x(t,e,n){var r=c.exec(e.slice(n,n+2))
;return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function w(t,e,n){
var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n,n+6))
;return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function M(t,e,n){
var r=c.exec(e.slice(n,n+1));return r?(t.q=3*r[0]-3,n+r[0].length):-1}
function E(t,e,n){var r=c.exec(e.slice(n,n+2))
;return r?(t.m=r[0]-1,n+r[0].length):-1}function k(t,e,n){
var r=c.exec(e.slice(n,n+2));return r?(t.d=+r[0],n+r[0].length):-1}
function A(t,e,n){var r=c.exec(e.slice(n,n+3))
;return r?(t.m=0,t.d=+r[0],n+r[0].length):-1}function S(t,e,n){
var r=c.exec(e.slice(n,n+2));return r?(t.H=+r[0],n+r[0].length):-1}
function j(t,e,n){var r=c.exec(e.slice(n,n+2))
;return r?(t.M=+r[0],n+r[0].length):-1}function N(t,e,n){
var r=c.exec(e.slice(n,n+2));return r?(t.S=+r[0],n+r[0].length):-1}
function T(t,e,n){var r=c.exec(e.slice(n,n+3))
;return r?(t.L=+r[0],n+r[0].length):-1}function C(t,e,n){
var r=c.exec(e.slice(n,n+6))
;return r?(t.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function O(t,e,n){
var r=f.exec(e.slice(n,n+1));return r?n+r[0].length:-1}function P(t,e,n){
var r=c.exec(e.slice(n));return r?(t.Q=+r[0],n+r[0].length):-1}
function I(t,e,n){var r=c.exec(e.slice(n));return r?(t.s=+r[0],n+r[0].length):-1
}function L(t,e){return l(t.getDate(),e,2)}function R(t,e){
return l(t.getHours(),e,2)}function z(t,e){return l(t.getHours()%12||12,e,2)}
function D(t,n){return l(1+e.timeDay.count(e.timeYear(t),t),n,3)}
function F(t,e){return l(t.getMilliseconds(),e,3)}function B(t,e){
return F(t,e)+"000"}function q(t,e){return l(t.getMonth()+1,e,2)}
function U(t,e){return l(t.getMinutes(),e,2)}function Y(t,e){
return l(t.getSeconds(),e,2)}function G(t){var e=t.getDay();return 0===e?7:e}
function V(t,n){return l(e.timeSunday.count(e.timeYear(t)-1,t),n,2)}
function H(t,n){var r=t.getDay()
;return t=r>=4||0===r?e.timeThursday(t):e.timeThursday.ceil(t),
l(e.timeThursday.count(e.timeYear(t),t)+(4===e.timeYear(t).getDay()),n,2)}
function K(t){return t.getDay()}function X(t,n){
return l(e.timeMonday.count(e.timeYear(t)-1,t),n,2)}function W(t,e){
return l(t.getFullYear()%100,e,2)}function $(t,e){
return l(t.getFullYear()%1e4,e,4)}function Z(t){var e=t.getTimezoneOffset()
;return(e>0?"-":(e*=-1,"+"))+l(e/60|0,"0",2)+l(e%60,"0",2)}function Q(t,e){
return l(t.getUTCDate(),e,2)}function J(t,e){return l(t.getUTCHours(),e,2)}
function tt(t,e){return l(t.getUTCHours()%12||12,e,2)}function et(t,n){
return l(1+e.utcDay.count(e.utcYear(t),t),n,3)}function nt(t,e){
return l(t.getUTCMilliseconds(),e,3)}function rt(t,e){return nt(t,e)+"000"}
function it(t,e){return l(t.getUTCMonth()+1,e,2)}function ot(t,e){
return l(t.getUTCMinutes(),e,2)}function at(t,e){return l(t.getUTCSeconds(),e,2)
}function ut(t){var e=t.getUTCDay();return 0===e?7:e}function ct(t,n){
return l(e.utcSunday.count(e.utcYear(t)-1,t),n,2)}function ft(t,n){
var r=t.getUTCDay();return t=r>=4||0===r?e.utcThursday(t):e.utcThursday.ceil(t),
l(e.utcThursday.count(e.utcYear(t),t)+(4===e.utcYear(t).getUTCDay()),n,2)}
function st(t){return t.getUTCDay()}function lt(t,n){
return l(e.utcMonday.count(e.utcYear(t)-1,t),n,2)}function ht(t,e){
return l(t.getUTCFullYear()%100,e,2)}function dt(t,e){
return l(t.getUTCFullYear()%1e4,e,4)}function pt(){return"+0000"}function vt(){
return"%"}function yt(t){return+t}function gt(t){return Math.floor(+t/1e3)}
function bt(e){
return a=o(e),t.timeFormat=a.format,t.timeParse=a.parse,t.utcFormat=a.utcFormat,
t.utcParse=a.utcParse,a}bt({dateTime:"%x, %X",date:"%-m/%-d/%Y",
time:"%-I:%M:%S %p",periods:["AM","PM"],
days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
months:["January","February","March","April","May","June","July","August","September","October","November","December"],
shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
});var _t="%Y-%m-%dT%H:%M:%S.%LZ";var mt=Date.prototype.toISOString?function(t){
return t.toISOString()}:t.utcFormat(_t)
;var xt=+new Date("2000-01-01T00:00:00.000Z")?function(t){var e=new Date(t)
;return isNaN(e)?null:e}:t.utcParse(_t)
;t.isoFormat=mt,t.isoParse=xt,t.timeFormatDefaultLocale=bt,t.timeFormatLocale=o,
Object.defineProperty(t,"__esModule",{value:!0})}))},{"d3-time":55}],
55:[function(t,e,n){!function(t,r){
"object"==typeof n&&void 0!==e?r(n):r((t=t||self).d3=t.d3||{})
}(this,(function(t){"use strict";var e=new Date,n=new Date;function r(t,i,o,a){
function u(e){return t(e=0===arguments.length?new Date:new Date(+e)),e}
return u.floor=function(e){return t(e=new Date(+e)),e},u.ceil=function(e){
return t(e=new Date(e-1)),i(e,1),t(e),e},u.round=function(t){
var e=u(t),n=u.ceil(t);return t-e<n-t?e:n},u.offset=function(t,e){
return i(t=new Date(+t),null==e?1:Math.floor(e)),t},u.range=function(e,n,r){
var o,a=[];if(e=u.ceil(e),r=null==r?1:Math.floor(r),!(e<n&&r>0))return a;do{
a.push(o=new Date(+e)),i(e,r),t(e)}while(o<e&&e<n);return a
},u.filter=function(e){return r((function(n){
if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)}),(function(t,n){
if(t>=t)if(n<0)for(;++n<=0;)for(;i(t,-1),
!e(t););else for(;--n>=0;)for(;i(t,1),!e(t););}))},o&&(u.count=function(r,i){
return e.setTime(+r),n.setTime(+i),t(e),t(n),Math.floor(o(e,n))
},u.every=function(t){
return t=Math.floor(t),isFinite(t)&&t>0?t>1?u.filter(a?function(e){
return a(e)%t==0}:function(e){return u.count(0,e)%t==0}):u:null}),u}
var i=r((function(){}),(function(t,e){t.setTime(+t+e)}),(function(t,e){
return e-t}));i.every=function(t){
return t=Math.floor(t),isFinite(t)&&t>0?t>1?r((function(e){
e.setTime(Math.floor(e/t)*t)}),(function(e,n){e.setTime(+e+n*t)
}),(function(e,n){return(n-e)/t})):i:null}
;var o=i.range,a=1e3,u=6e4,c=36e5,f=864e5,s=6048e5,l=r((function(t){
t.setTime(t-t.getMilliseconds())}),(function(t,e){t.setTime(+t+e*a)
}),(function(t,e){return(e-t)/a}),(function(t){return t.getUTCSeconds()
})),h=l.range,d=r((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*a)
}),(function(t,e){t.setTime(+t+e*u)}),(function(t,e){return(e-t)/u
}),(function(t){return t.getMinutes()})),p=d.range,v=r((function(t){
t.setTime(t-t.getMilliseconds()-t.getSeconds()*a-t.getMinutes()*u)
}),(function(t,e){t.setTime(+t+e*c)}),(function(t,e){return(e-t)/c
}),(function(t){return t.getHours()})),y=v.range,g=r((function(t){
t.setHours(0,0,0,0)}),(function(t,e){t.setDate(t.getDate()+e)}),(function(t,e){
return(e-t-(e.getTimezoneOffset()-t.getTimezoneOffset())*u)/f}),(function(t){
return t.getDate()-1})),b=g.range;function _(t){return r((function(e){
e.setDate(e.getDate()-(e.getDay()+7-t)%7),e.setHours(0,0,0,0)}),(function(t,e){
t.setDate(t.getDate()+7*e)}),(function(t,e){
return(e-t-(e.getTimezoneOffset()-t.getTimezoneOffset())*u)/s}))}
var m=_(0),x=_(1),w=_(2),M=_(3),E=_(4),k=_(5),A=_(6),S=m.range,j=x.range,N=w.range,T=M.range,C=E.range,O=k.range,P=A.range,I=r((function(t){
t.setDate(1),t.setHours(0,0,0,0)}),(function(t,e){t.setMonth(t.getMonth()+e)
}),(function(t,e){
return e.getMonth()-t.getMonth()+12*(e.getFullYear()-t.getFullYear())
}),(function(t){return t.getMonth()})),L=I.range,R=r((function(t){
t.setMonth(0,1),t.setHours(0,0,0,0)}),(function(t,e){
t.setFullYear(t.getFullYear()+e)}),(function(t,e){
return e.getFullYear()-t.getFullYear()}),(function(t){return t.getFullYear()}))
;R.every=function(t){return isFinite(t=Math.floor(t))&&t>0?r((function(e){
e.setFullYear(Math.floor(e.getFullYear()/t)*t),
e.setMonth(0,1),e.setHours(0,0,0,0)}),(function(e,n){
e.setFullYear(e.getFullYear()+n*t)})):null};var z=R.range,D=r((function(t){
t.setUTCSeconds(0,0)}),(function(t,e){t.setTime(+t+e*u)}),(function(t,e){
return(e-t)/u}),(function(t){return t.getUTCMinutes()
})),F=D.range,B=r((function(t){t.setUTCMinutes(0,0,0)}),(function(t,e){
t.setTime(+t+e*c)}),(function(t,e){return(e-t)/c}),(function(t){
return t.getUTCHours()})),q=B.range,U=r((function(t){t.setUTCHours(0,0,0,0)
}),(function(t,e){t.setUTCDate(t.getUTCDate()+e)}),(function(t,e){return(e-t)/f
}),(function(t){return t.getUTCDate()-1})),Y=U.range;function G(t){
return r((function(e){
e.setUTCDate(e.getUTCDate()-(e.getUTCDay()+7-t)%7),e.setUTCHours(0,0,0,0)
}),(function(t,e){t.setUTCDate(t.getUTCDate()+7*e)}),(function(t,e){
return(e-t)/s}))}
var V=G(0),H=G(1),K=G(2),X=G(3),W=G(4),$=G(5),Z=G(6),Q=V.range,J=H.range,tt=K.range,et=X.range,nt=W.range,rt=$.range,it=Z.range,ot=r((function(t){
t.setUTCDate(1),t.setUTCHours(0,0,0,0)}),(function(t,e){
t.setUTCMonth(t.getUTCMonth()+e)}),(function(t,e){
return e.getUTCMonth()-t.getUTCMonth()+12*(e.getUTCFullYear()-t.getUTCFullYear())
}),(function(t){return t.getUTCMonth()})),at=ot.range,ut=r((function(t){
t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),(function(t,e){
t.setUTCFullYear(t.getUTCFullYear()+e)}),(function(t,e){
return e.getUTCFullYear()-t.getUTCFullYear()}),(function(t){
return t.getUTCFullYear()}));ut.every=function(t){
return isFinite(t=Math.floor(t))&&t>0?r((function(e){
e.setUTCFullYear(Math.floor(e.getUTCFullYear()/t)*t),
e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)}),(function(e,n){
e.setUTCFullYear(e.getUTCFullYear()+n*t)})):null};var ct=ut.range
;t.timeDay=g,t.timeDays=b,
t.timeFriday=k,t.timeFridays=O,t.timeHour=v,t.timeHours=y,
t.timeInterval=r,t.timeMillisecond=i,
t.timeMilliseconds=o,t.timeMinute=d,t.timeMinutes=p,
t.timeMonday=x,t.timeMondays=j,
t.timeMonth=I,t.timeMonths=L,t.timeSaturday=A,t.timeSaturdays=P,
t.timeSecond=l,t.timeSeconds=h,
t.timeSunday=m,t.timeSundays=S,t.timeThursday=E,t.timeThursdays=C,
t.timeTuesday=w,
t.timeTuesdays=N,t.timeWednesday=M,t.timeWednesdays=T,t.timeWeek=m,
t.timeWeeks=S,
t.timeYear=R,t.timeYears=z,t.utcDay=U,t.utcDays=Y,t.utcFriday=$,t.utcFridays=rt,
t.utcHour=B,
t.utcHours=q,t.utcMillisecond=i,t.utcMilliseconds=o,t.utcMinute=D,t.utcMinutes=F,
t.utcMonday=H,
t.utcMondays=J,t.utcMonth=ot,t.utcMonths=at,t.utcSaturday=Z,t.utcSaturdays=it,
t.utcSecond=l,
t.utcSeconds=h,t.utcSunday=V,t.utcSundays=Q,t.utcThursday=W,t.utcThursdays=nt,
t.utcTuesday=K,t.utcTuesdays=tt,t.utcWednesday=X,t.utcWednesdays=et,t.utcWeek=V,
t.utcWeeks=Q,t.utcYear=ut,t.utcYears=ct,Object.defineProperty(t,"__esModule",{
value:!0})}))},{}],56:[function(t,e,n){!function(t,r){
"object"==typeof n&&void 0!==e?r(n):r((t=t||self).d3=t.d3||{})
}(this,(function(t){"use strict"
;var e,n,r=0,i=0,o=0,a=0,u=0,c=0,f="object"==typeof performance&&performance.now?performance:Date,s="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){
setTimeout(t,17)};function l(){return u||(s(h),u=f.now()+c)}function h(){u=0}
function d(){this._call=this._time=this._next=null}function p(t,e,n){var r=new d
;return r.restart(t,e,n),r}function v(){l(),++r
;for(var t,n=e;n;)(t=u-n._time)>=0&&n._call.call(null,t),n=n._next;--r}
function y(){u=(a=f.now())+c,r=i=0;try{v()}finally{r=0,function(){
var t,r,i=e,o=1/0
;for(;i;)i._call?(o>i._time&&(o=i._time),t=i,i=i._next):(r=i._next,i._next=null,
i=t?t._next=r:e=r);n=t,b(o)}(),u=0}}function g(){var t=f.now(),e=t-a
;e>1e3&&(c-=e,a=t)}function b(t){
r||(i&&(i=clearTimeout(i)),t-u>24?(t<1/0&&(i=setTimeout(y,t-f.now()-c)),
o&&(o=clearInterval(o))):(o||(a=f.now(),o=setInterval(g,1e3)),r=1,s(y)))}
d.prototype=p.prototype={constructor:d,restart:function(t,r,i){
if("function"!=typeof t)throw new TypeError("callback is not a function")
;i=(null==i?l():+i)+(null==r?0:+r),this._next||n===this||(n?n._next=this:e=this,
n=this),this._call=t,this._time=i,b()},stop:function(){
this._call&&(this._call=null,this._time=1/0,b())}},t.interval=function(t,e,n){
var r=new d,i=e
;return null==e?(r.restart(t,e,n),r):(e=+e,n=null==n?l():+n,r.restart((function o(a){
a+=i,r.restart(o,i+=e,n),t(a)}),e,n),r)},t.now=l,t.timeout=function(t,e,n){
var r=new d;return e=null==e?0:+e,r.restart((function(n){r.stop(),t(n+e)}),e,n),
r},t.timer=p,t.timerFlush=v,Object.defineProperty(t,"__esModule",{value:!0})}))
},{}],57:[function(t,e,n){!function(r,i){
"object"==typeof n&&void 0!==e?i(n,t("d3-selection"),t("d3-dispatch"),t("d3-timer"),t("d3-interpolate"),t("d3-color"),t("d3-ease")):i((r=r||self).d3=r.d3||{},r.d3,r.d3,r.d3,r.d3,r.d3,r.d3)
}(this,(function(t,e,n,r,i,o,a){"use strict"
;var u=n.dispatch("start","end","cancel","interrupt"),c=[]
;function f(t,e,n,i,o,a){var f=t.__transition;if(f){if(n in f)return
}else t.__transition={};!function(t,e,n){var i,o=t.__transition;function a(t){
n.state=1,n.timer.restart(u,n.delay,n.time),n.delay<=t&&u(t-n.delay)}
function u(a){var s,l,h,d;if(1!==n.state)return f()
;for(s in o)if((d=o[s]).name===n.name){if(3===d.state)return r.timeout(u)
;4===d.state?(d.state=6,
d.timer.stop(),d.on.call("interrupt",t,t.__data__,d.index,d.group),
delete o[s]):+s<e&&(d.state=6,
d.timer.stop(),d.on.call("cancel",t,t.__data__,d.index,d.group),delete o[s])}
if(r.timeout((function(){
3===n.state&&(n.state=4,n.timer.restart(c,n.delay,n.time),c(a))
})),n.state=2,n.on.call("start",t,t.__data__,n.index,n.group),2===n.state){
for(n.state=3,
i=new Array(h=n.tween.length),s=0,l=-1;s<h;++s)(d=n.tween[s].value.call(t,t.__data__,n.index,n.group))&&(i[++l]=d)
;i.length=l+1}}function c(e){
for(var r=e<n.duration?n.ease.call(null,e/n.duration):(n.timer.restart(f),
n.state=5,1),o=-1,a=i.length;++o<a;)i[o].call(t,r)
;5===n.state&&(n.on.call("end",t,t.__data__,n.index,n.group),f())}function f(){
for(var r in n.state=6,n.timer.stop(),delete o[e],o)return;delete t.__transition
}o[e]=n,n.timer=r.timer(a,0,n.time)}(t,n,{name:e,index:i,group:o,on:u,tween:c,
time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:0})}
function s(t,e){var n=h(t,e)
;if(n.state>0)throw new Error("too late; already scheduled");return n}
function l(t,e){var n=h(t,e)
;if(n.state>3)throw new Error("too late; already running");return n}
function h(t,e){var n=t.__transition
;if(!n||!(n=n[e]))throw new Error("transition not found");return n}
function d(t,e){var n,r,i,o=t.__transition,a=!0;if(o){
for(i in e=null==e?null:e+"",
o)(n=o[i]).name===e?(r=n.state>2&&n.state<5,n.state=6,
n.timer.stop(),n.on.call(r?"interrupt":"cancel",t,t.__data__,n.index,n.group),
delete o[i]):a=!1;a&&delete t.__transition}}function p(t,e){var n,r
;return function(){var i=l(this,t),o=i.tween
;if(o!==n)for(var a=0,u=(r=n=o).length;a<u;++a)if(r[a].name===e){
(r=r.slice()).splice(a,1);break}i.tween=r}}function v(t,e,n){var r,i
;if("function"!=typeof n)throw new Error;return function(){
var o=l(this,t),a=o.tween;if(a!==r){i=(r=a).slice();for(var u={name:e,value:n
},c=0,f=i.length;c<f;++c)if(i[c].name===e){i[c]=u;break}c===f&&i.push(u)}
o.tween=i}}function y(t,e,n){var r=t._id;return t.each((function(){
var t=l(this,r);(t.value||(t.value={}))[e]=n.apply(this,arguments)
})),function(t){return h(t,r).value[e]}}function g(t,e){var n
;return("number"==typeof e?i.interpolateNumber:e instanceof o.color?i.interpolateRgb:(n=o.color(e))?(e=n,
i.interpolateRgb):i.interpolateString)(t,e)}function b(t){return function(){
this.removeAttribute(t)}}function _(t){return function(){
this.removeAttributeNS(t.space,t.local)}}function m(t,e,n){var r,i,o=n+""
;return function(){var a=this.getAttribute(t)
;return a===o?null:a===r?i:i=e(r=a,n)}}function x(t,e,n){var r,i,o=n+""
;return function(){var a=this.getAttributeNS(t.space,t.local)
;return a===o?null:a===r?i:i=e(r=a,n)}}function w(t,e,n){var r,i,o
;return function(){var a,u,c=n(this)
;if(null!=c)return(a=this.getAttribute(t))===(u=c+"")?null:a===r&&u===i?o:(i=u,
o=e(r=a,c));this.removeAttribute(t)}}function M(t,e,n){var r,i,o
;return function(){var a,u,c=n(this)
;if(null!=c)return(a=this.getAttributeNS(t.space,t.local))===(u=c+"")?null:a===r&&u===i?o:(i=u,
o=e(r=a,c));this.removeAttributeNS(t.space,t.local)}}function E(t,e){
return function(n){this.setAttribute(t,e.call(this,n))}}function k(t,e){
return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}
function A(t,e){var n,r;function i(){var i=e.apply(this,arguments)
;return i!==r&&(n=(r=i)&&k(t,i)),n}return i._value=e,i}function S(t,e){var n,r
;function i(){var i=e.apply(this,arguments);return i!==r&&(n=(r=i)&&E(t,i)),n}
return i._value=e,i}function j(t,e){return function(){
s(this,t).delay=+e.apply(this,arguments)}}function N(t,e){
return e=+e,function(){s(this,t).delay=e}}function T(t,e){return function(){
l(this,t).duration=+e.apply(this,arguments)}}function C(t,e){
return e=+e,function(){l(this,t).duration=e}}function O(t,e){
if("function"!=typeof e)throw new Error;return function(){l(this,t).ease=e}}
function P(t,e,n){var r,i,o=function(t){
return(t+"").trim().split(/^|\s+/).every((function(t){var e=t.indexOf(".")
;return e>=0&&(t=t.slice(0,e)),!t||"start"===t}))}(e)?s:l;return function(){
var a=o(this,t),u=a.on;u!==r&&(i=(r=u).copy()).on(e,n),a.on=i}}
var I=e.selection.prototype.constructor;function L(t){return function(){
this.style.removeProperty(t)}}function R(t,e,n){return function(r){
this.style.setProperty(t,e.call(this,r),n)}}function z(t,e,n){var r,i
;function o(){var o=e.apply(this,arguments);return o!==i&&(r=(i=o)&&R(t,o,n)),r}
return o._value=e,o}function D(t){return function(e){
this.textContent=t.call(this,e)}}function F(t){var e,n;function r(){
var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&D(r)),e}return r._value=t,
r}var B=0;function q(t,e,n,r){
this._groups=t,this._parents=e,this._name=n,this._id=r}function U(t){
return e.selection().transition(t)}function Y(){return++B}
var G=e.selection.prototype;q.prototype=U.prototype={constructor:q,
select:function(t){var n=this._name,r=this._id
;"function"!=typeof t&&(t=e.selector(t))
;for(var i=this._groups,o=i.length,a=new Array(o),u=0;u<o;++u)for(var c,s,l=i[u],d=l.length,p=a[u]=new Array(d),v=0;v<d;++v)(c=l[v])&&(s=t.call(c,c.__data__,v,l))&&("__data__"in c&&(s.__data__=c.__data__),
p[v]=s,f(p[v],n,r,v,p,h(c,r)));return new q(a,this._parents,n,r)},
selectAll:function(t){var n=this._name,r=this._id
;"function"!=typeof t&&(t=e.selectorAll(t))
;for(var i=this._groups,o=i.length,a=[],u=[],c=0;c<o;++c)for(var s,l=i[c],d=l.length,p=0;p<d;++p)if(s=l[p]){
for(var v,y=t.call(s,s.__data__,p,l),g=h(s,r),b=0,_=y.length;b<_;++b)(v=y[b])&&f(v,n,r,b,y,g)
;a.push(y),u.push(s)}return new q(a,u,n,r)},filter:function(t){
"function"!=typeof t&&(t=e.matcher(t))
;for(var n=this._groups,r=n.length,i=new Array(r),o=0;o<r;++o)for(var a,u=n[o],c=u.length,f=i[o]=[],s=0;s<c;++s)(a=u[s])&&t.call(a,a.__data__,s,u)&&f.push(a)
;return new q(i,this._parents,this._name,this._id)},merge:function(t){
if(t._id!==this._id)throw new Error
;for(var e=this._groups,n=t._groups,r=e.length,i=n.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var c,f=e[u],s=n[u],l=f.length,h=a[u]=new Array(l),d=0;d<l;++d)(c=f[d]||s[d])&&(h[d]=c)
;for(;u<r;++u)a[u]=e[u];return new q(a,this._parents,this._name,this._id)},
selection:function(){return new I(this._groups,this._parents)},
transition:function(){
for(var t=this._name,e=this._id,n=Y(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],c=u.length,s=0;s<c;++s)if(a=u[s]){
var l=h(a,e);f(a,t,n,s,u,{time:l.time+l.delay+l.duration,delay:0,
duration:l.duration,ease:l.ease})}return new q(r,this._parents,t,n)},
call:G.call,nodes:G.nodes,node:G.node,size:G.size,empty:G.empty,each:G.each,
on:function(t,e){var n=this._id
;return arguments.length<2?h(this.node(),n).on.on(t):this.each(P(n,t,e))},
attr:function(t,n){
var r=e.namespace(t),o="transform"===r?i.interpolateTransformSvg:g
;return this.attrTween(t,"function"==typeof n?(r.local?M:w)(r,o,y(this,"attr."+t,n)):null==n?(r.local?_:b)(r):(r.local?x:m)(r,o,n))
},attrTween:function(t,n){var r="attr."+t
;if(arguments.length<2)return(r=this.tween(r))&&r._value
;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error
;var i=e.namespace(t);return this.tween(r,(i.local?A:S)(i,n))},
style:function(t,n,r){var o="transform"==(t+="")?i.interpolateTransformCss:g
;return null==n?this.styleTween(t,function(t,n){var r,i,o;return function(){
var a=e.style(this,t),u=(this.style.removeProperty(t),e.style(this,t))
;return a===u?null:a===r&&u===i?o:o=n(r=a,i=u)}
}(t,o)).on("end.style."+t,L(t)):"function"==typeof n?this.styleTween(t,function(t,n,r){
var i,o,a;return function(){var u=e.style(this,t),c=r(this),f=c+""
;return null==c&&(this.style.removeProperty(t),
f=c=e.style(this,t)),u===f?null:u===i&&f===o?a:(o=f,a=n(i=u,c))}
}(t,o,y(this,"style."+t,n))).each(function(t,e){
var n,r,i,o,a="style."+e,u="end."+a;return function(){
var c=l(this,t),f=c.on,s=null==c.value[a]?o||(o=L(e)):void 0
;f===n&&i===s||(r=(n=f).copy()).on(u,i=s),c.on=r}
}(this._id,t)):this.styleTween(t,function(t,n,r){var i,o,a=r+""
;return function(){var u=e.style(this,t);return u===a?null:u===i?o:o=n(i=u,r)}
}(t,o,n),r).on("end.style."+t,null)},styleTween:function(t,e,n){
var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value
;if(null==e)return this.tween(r,null);if("function"!=typeof e)throw new Error
;return this.tween(r,z(t,e,null==n?"":n))},text:function(t){
return this.tween("text","function"==typeof t?function(t){return function(){
var e=t(this);this.textContent=null==e?"":e}}(y(this,"text",t)):function(t){
return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){
var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value
;if(null==t)return this.tween(e,null);if("function"!=typeof t)throw new Error
;return this.tween(e,F(t))},remove:function(){
return this.on("end.remove",function(t){return function(){var e=this.parentNode
;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}
}(this._id))},tween:function(t,e){var n=this._id;if(t+="",arguments.length<2){
for(var r,i=h(this.node(),n).tween,o=0,a=i.length;o<a;++o)if((r=i[o]).name===t)return r.value
;return null}return this.each((null==e?p:v)(n,t,e))},delay:function(t){
var e=this._id
;return arguments.length?this.each(("function"==typeof t?j:N)(e,t)):h(this.node(),e).delay
},duration:function(t){var e=this._id
;return arguments.length?this.each(("function"==typeof t?T:C)(e,t)):h(this.node(),e).duration
},ease:function(t){var e=this._id
;return arguments.length?this.each(O(e,t)):h(this.node(),e).ease},
end:function(){var t,e,n=this,r=n._id,i=n.size()
;return new Promise((function(o,a){var u={value:a},c={value:function(){
0==--i&&o()}};n.each((function(){var n=l(this,r),i=n.on
;i!==t&&((e=(t=i).copy())._.cancel.push(u),
e._.interrupt.push(u),e._.end.push(c)),n.on=e}))}))}};var V={time:null,delay:0,
duration:250,ease:a.easeCubicInOut};function H(t,e){
for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))return V.time=r.now(),
V;return n}e.selection.prototype.interrupt=function(t){
return this.each((function(){d(this,t)}))
},e.selection.prototype.transition=function(t){var e,n
;t instanceof q?(e=t._id,t=t._name):(e=Y(),
(n=V).time=r.now(),t=null==t?null:t+"")
;for(var i=this._groups,o=i.length,a=0;a<o;++a)for(var u,c=i[a],s=c.length,l=0;l<s;++l)(u=c[l])&&f(u,t,e,l,c,n||H(u,e))
;return new q(i,this._parents,t,e)};var K=[null];t.active=function(t,e){
var n,r,i=t.__transition
;if(i)for(r in e=null==e?null:e+"",i)if((n=i[r]).state>1&&n.name===e)return new q([[t]],K,e,+r)
;return null
},t.interrupt=d,t.transition=U,Object.defineProperty(t,"__esModule",{value:!0})
}))},{"d3-color":34,"d3-dispatch":36,"d3-ease":39,"d3-interpolate":45,
"d3-selection":52,"d3-timer":56}],58:[function(t,e,n){!function(t,r){
r("object"==typeof n&&void 0!==e?n:t.d3=t.d3||{})}(this,(function(t){
"use strict";function e(t){return function(){return t}}function n(t){return t[0]
}function r(t){return t[1]}function i(){this._=null}function o(t){
t.U=t.C=t.L=t.R=t.P=t.N=null}function a(t,e){var n=e,r=e.R,i=n.U
;i?i.L===n?i.L=r:i.R=r:t._=r,r.U=i,n.U=r,n.R=r.L,n.R&&(n.R.U=n),r.L=n}
function u(t,e){var n=e,r=e.L,i=n.U
;i?i.L===n?i.L=r:i.R=r:t._=r,r.U=i,n.U=r,n.L=r.R,n.L&&(n.L.U=n),r.R=n}
function c(t){for(;t.L;)t=t.L;return t}function f(t,e,n,r){
var i=[null,null],o=P.push(i)-1
;return i.left=t,i.right=e,n&&l(i,t,e,n),r&&l(i,e,t,r),
C[t.index].halfedges.push(o),C[e.index].halfedges.push(o),i}function s(t,e,n){
var r=[e,n];return r.left=t,r}function l(t,e,n,r){
t[0]||t[1]?t.left===n?t[1]=r:t[0]=r:(t[0]=r,t.left=e,t.right=n)}
function h(t,e,n,r,i){
var o,a=t[0],u=t[1],c=a[0],f=a[1],s=0,l=1,h=u[0]-c,d=u[1]-f;if(o=e-c,h||!(o>0)){
if(o/=h,h<0){if(o<s)return;o<l&&(l=o)}else if(h>0){if(o>l)return;o>s&&(s=o)}
if(o=r-c,h||!(o<0)){if(o/=h,h<0){if(o>l)return;o>s&&(s=o)}else if(h>0){
if(o<s)return;o<l&&(l=o)}if(o=n-f,d||!(o>0)){if(o/=d,d<0){if(o<s)return
;o<l&&(l=o)}else if(d>0){if(o>l)return;o>s&&(s=o)}if(o=i-f,d||!(o<0)){
if(o/=d,d<0){if(o>l)return;o>s&&(s=o)}else if(d>0){if(o<s)return;o<l&&(l=o)}
return!(s>0||l<1)||(s>0&&(t[0]=[c+s*h,f+s*d]),l<1&&(t[1]=[c+l*h,f+l*d]),!0)}}}}}
function d(t,e,n,r,i){var o=t[1];if(o)return!0
;var a,u,c=t[0],f=t.left,s=t.right,l=f[0],h=f[1],d=s[0],p=s[1],v=(l+d)/2,y=(h+p)/2
;if(p===h){if(v<e||v>=r)return;if(l>d){if(c){if(c[1]>=i)return}else c=[v,n]
;o=[v,i]}else{if(c){if(c[1]<n)return}else c=[v,i];o=[v,n]}
}else if(u=y-(a=(l-d)/(p-h))*v,a<-1||a>1)if(l>d){if(c){if(c[1]>=i)return
}else c=[(n-u)/a,n];o=[(i-u)/a,i]}else{if(c){if(c[1]<n)return}else c=[(i-u)/a,i]
;o=[(n-u)/a,n]}else if(h<p){if(c){if(c[0]>=r)return}else c=[e,a*e+u];o=[r,a*r+u]
}else{if(c){if(c[0]<e)return}else c=[r,a*r+u];o=[e,a*e+u]}
return t[0]=c,t[1]=o,!0}function p(t,e){var n=t.site,r=e.left,i=e.right
;return n===i&&(i=r,
r=n),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(n===r?(r=e[1],i=e[0]):(r=e[0],
i=e[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function v(t,e){
return e[+(e.left!==t.site)]}function y(t,e){return e[+(e.left===t.site)]}
i.prototype={constructor:i,insert:function(t,e){var n,r,i;if(t){
if(e.P=t,e.N=t.N,t.N&&(t.N.P=e),t.N=e,t.R){for(t=t.R;t.L;)t=t.L;t.L=e}else t.R=e
;n=t
}else this._?(t=c(this._),e.P=null,e.N=t,t.P=t.L=e,n=t):(e.P=e.N=null,this._=e,
n=null)
;for(e.L=e.R=null,e.U=n,e.C=!0,t=e;n&&n.C;)n===(r=n.U).L?(i=r.R)&&i.C?(n.C=i.C=!1,
r.C=!0,
t=r):(t===n.R&&(a(this,n),n=(t=n).U),n.C=!1,r.C=!0,u(this,r)):(i=r.L)&&i.C?(n.C=i.C=!1,
r.C=!0,t=r):(t===n.L&&(u(this,n),n=(t=n).U),n.C=!1,r.C=!0,a(this,r)),n=t.U
;this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null
;var e,n,r,i=t.U,o=t.L,f=t.R
;if(n=o?f?c(f):o:f,i?i.L===t?i.L=n:i.R=n:this._=n,o&&f?(r=n.C,
n.C=t.C,n.L=o,o.U=n,
n!==f?(i=n.U,n.U=t.U,t=n.R,i.L=t,n.R=f,f.U=n):(n.U=i,i=n,t=n.R)):(r=t.C,
t=n),t&&(t.U=i),!r)if(t&&t.C)t.C=!1;else{do{if(t===this._)break;if(t===i.L){
if((e=i.R).C&&(e.C=!1,i.C=!0,a(this,i),e=i.R),e.L&&e.L.C||e.R&&e.R.C){
e.R&&e.R.C||(e.L.C=!1,
e.C=!0,u(this,e),e=i.R),e.C=i.C,i.C=e.R.C=!1,a(this,i),t=this._;break}
}else if((e=i.L).C&&(e.C=!1,i.C=!0,u(this,i),e=i.L),e.L&&e.L.C||e.R&&e.R.C){
e.L&&e.L.C||(e.R.C=!1,
e.C=!0,a(this,e),e=i.L),e.C=i.C,i.C=e.L.C=!1,u(this,i),t=this._;break}
e.C=!0,t=i,i=i.U}while(!t.C);t&&(t.C=!1)}}};var g,b=[];function _(){
o(this),this.x=this.y=this.arc=this.site=this.cy=null}function m(t){
var e=t.P,n=t.N;if(e&&n){var r=e.site,i=t.site,o=n.site;if(r!==o){
var a=i[0],u=i[1],c=r[0]-a,f=r[1]-u,s=o[0]-a,l=o[1]-u,h=2*(c*l-f*s)
;if(!(h>=-L)){
var d=c*c+f*f,p=s*s+l*l,v=(l*d-f*p)/h,y=(c*p-s*d)/h,m=b.pop()||new _
;m.arc=t,m.site=i,m.x=v+a,m.y=(m.cy=y+u)+Math.sqrt(v*v+y*y),t.circle=m
;for(var x=null,w=O._;w;)if(m.y<w.y||m.y===w.y&&m.x<=w.x){if(!w.L){x=w.P;break}
w=w.L}else{if(!w.R){x=w;break}w=w.R}O.insert(x,m),x||(g=m)}}}}function x(t){
var e=t.circle;e&&(e.P||(g=e.N),O.remove(e),b.push(e),o(e),t.circle=null)}
var w=[];function M(){o(this),this.edge=this.site=this.circle=null}
function E(t){var e=w.pop()||new M;return e.site=t,e}function k(t){
x(t),T.remove(t),w.push(t),o(t)}function A(t){
var e=t.circle,n=e.x,r=e.cy,i=[n,r],o=t.P,a=t.N,u=[t];k(t)
;for(var c=o;c.circle&&Math.abs(n-c.circle.x)<I&&Math.abs(r-c.circle.cy)<I;)o=c.P,
u.unshift(c),k(c),c=o;u.unshift(c),x(c)
;for(var s=a;s.circle&&Math.abs(n-s.circle.x)<I&&Math.abs(r-s.circle.cy)<I;)a=s.N,
u.push(s),k(s),s=a;u.push(s),x(s);var h,d=u.length
;for(h=1;h<d;++h)s=u[h],c=u[h-1],l(s.edge,c.site,s.site,i)
;c=u[0],(s=u[d-1]).edge=f(c.site,s.site,null,i),m(c),m(s)}function S(t){
for(var e,n,r,i,o=t[0],a=t[1],u=T._;u;)if((r=j(u,a)-o)>I)u=u.L;else{
if(!((i=o-N(u,a))>I)){r>-I?(e=u.P,n=u):i>-I?(e=u,n=u.N):e=n=u;break}if(!u.R){e=u
;break}u=u.R}!function(t){C[t.index]={site:t,halfedges:[]}}(t);var c=E(t)
;if(T.insert(e,c),e||n){
if(e===n)return x(e),n=E(e.site),T.insert(c,n),c.edge=n.edge=f(e.site,c.site),
m(e),void m(n);if(n){x(e),x(n)
;var s=e.site,h=s[0],d=s[1],p=t[0]-h,v=t[1]-d,y=n.site,g=y[0]-h,b=y[1]-d,_=2*(p*b-v*g),w=p*p+v*v,M=g*g+b*b,k=[(b*w-v*M)/_+h,(p*M-g*w)/_+d]
;l(n.edge,s,y,k),c.edge=f(s,t,null,k),n.edge=f(t,y,null,k),m(e),m(n)
}else c.edge=f(e.site,c.site)}}function j(t,e){var n=t.site,r=n[0],i=n[1],o=i-e
;if(!o)return r;var a=t.P;if(!a)return-1/0;var u=(n=a.site)[0],c=n[1],f=c-e
;if(!f)return u;var s=u-r,l=1/o-1/f,h=s/f
;return l?(-h+Math.sqrt(h*h-2*l*(s*s/(-2*f)-c+f/2+i-o/2)))/l+r:(r+u)/2}
function N(t,e){var n=t.N;if(n)return j(n,e);var r=t.site
;return r[1]===e?r[0]:1/0}var T,C,O,P,I=1e-6,L=1e-12;function R(t,e,n){
return(t[0]-n[0])*(e[1]-t[1])-(t[0]-e[0])*(n[1]-t[1])}function z(t,e){
return e[1]-t[1]||e[0]-t[0]}function D(t,e){var n,r,o,a=t.sort(z).pop()
;for(P=[],
C=new Array(t.length),T=new i,O=new i;;)if(o=g,a&&(!o||a[1]<o.y||a[1]===o.y&&a[0]<o.x))a[0]===n&&a[1]===r||(S(a),
n=a[0],r=a[1]),a=t.pop();else{if(!o)break;A(o.arc)}if(function(){
for(var t,e,n,r,i=0,o=C.length;i<o;++i)if((t=C[i])&&(r=(e=t.halfedges).length)){
var a=new Array(r),u=new Array(r);for(n=0;n<r;++n)a[n]=n,u[n]=p(t,P[e[n]])
;for(a.sort((function(t,e){return u[e]-u[t]})),n=0;n<r;++n)u[n]=e[a[n]]
;for(n=0;n<r;++n)e[n]=u[n]}}(),e){
var u=+e[0][0],c=+e[0][1],f=+e[1][0],l=+e[1][1];!function(t,e,n,r){
for(var i,o=P.length;o--;)d(i=P[o],t,e,n,r)&&h(i,t,e,n,r)&&(Math.abs(i[0][0]-i[1][0])>I||Math.abs(i[0][1]-i[1][1])>I)||delete P[o]
}(u,c,f,l),function(t,e,n,r){var i,o,a,u,c,f,l,h,d,p,g,b,_=C.length,m=!0
;for(i=0;i<_;++i)if(o=C[i]){
for(a=o.site,u=(c=o.halfedges).length;u--;)P[c[u]]||c.splice(u,1)
;for(u=0,f=c.length;u<f;)g=(p=y(o,P[c[u]]))[0],b=p[1],h=(l=v(o,P[c[++u%f]]))[0],
d=l[1],
(Math.abs(g-h)>I||Math.abs(b-d)>I)&&(c.splice(u,0,P.push(s(a,p,Math.abs(g-t)<I&&r-b>I?[t,Math.abs(h-t)<I?d:r]:Math.abs(b-r)<I&&n-g>I?[Math.abs(d-r)<I?h:n,r]:Math.abs(g-n)<I&&b-e>I?[n,Math.abs(h-n)<I?d:e]:Math.abs(b-e)<I&&g-t>I?[Math.abs(d-e)<I?h:t,e]:null))-1),
++f);f&&(m=!1)}if(m){var x,w,M,E=1/0
;for(i=0,m=null;i<_;++i)(o=C[i])&&(M=(x=(a=o.site)[0]-t)*x+(w=a[1]-e)*w)<E&&(E=M,
m=o);if(m){var k=[t,e],A=[t,r],S=[n,r],j=[n,e]
;m.halfedges.push(P.push(s(a=m.site,k,A))-1,P.push(s(a,A,S))-1,P.push(s(a,S,j))-1,P.push(s(a,j,k))-1)
}}for(i=0;i<_;++i)(o=C[i])&&(o.halfedges.length||delete C[i])}(u,c,f,l)}
this.edges=P,this.cells=C,T=O=P=C=null}D.prototype={constructor:D,
polygons:function(){var t=this.edges;return this.cells.map((function(e){
var n=e.halfedges.map((function(n){return v(e,t[n])}))
;return n.data=e.site.data,n}))},triangles:function(){var t=[],e=this.edges
;return this.cells.forEach((function(n,r){
if(o=(i=n.halfedges).length)for(var i,o,a,u=n.site,c=-1,f=e[i[o-1]],s=f.left===u?f.right:f.left;++c<o;)a=s,
s=(f=e[i[c]]).left===u?f.right:f.left,
a&&s&&r<a.index&&r<s.index&&R(u,a,s)<0&&t.push([u.data,a.data,s.data])})),t},
links:function(){return this.edges.filter((function(t){return t.right
})).map((function(t){return{source:t.left.data,target:t.right.data}}))},
find:function(t,e,n){
for(var r,i,o=this,a=o._found||0,u=o.cells.length;!(i=o.cells[a]);)if(++a>=u)return null
;var c=t-i.site[0],f=e-i.site[1],s=c*c+f*f;do{
i=o.cells[r=a],a=null,i.halfedges.forEach((function(n){var r=o.edges[n],u=r.left
;if(u!==i.site&&u||(u=r.right)){var c=t-u[0],f=e-u[1],l=c*c+f*f
;l<s&&(s=l,a=u.index)}}))}while(null!==a)
;return o._found=r,null==n||s<=n*n?i.site:null}},t.voronoi=function(){
var t=n,i=r,o=null;function a(e){return new D(e.map((function(n,r){
var o=[Math.round(t(n,r,e)/I)*I,Math.round(i(n,r,e)/I)*I]
;return o.index=r,o.data=n,o})),o)}return a.polygons=function(t){
return a(t).polygons()},a.links=function(t){return a(t).links()
},a.triangles=function(t){return a(t).triangles()},a.x=function(n){
return arguments.length?(t="function"==typeof n?n:e(+n),a):t},a.y=function(t){
return arguments.length?(i="function"==typeof t?t:e(+t),a):i
},a.extent=function(t){
return arguments.length?(o=null==t?null:[[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]],
a):o&&[[o[0][0],o[0][1]],[o[1][0],o[1][1]]]},a.size=function(t){
return arguments.length?(o=null==t?null:[[0,0],[+t[0],+t[1]]],
a):o&&[o[1][0]-o[0][0],o[1][1]-o[0][1]]},a
},Object.defineProperty(t,"__esModule",{value:!0})}))},{}],59:[function(t,e,n){
!function(r,i){
"object"==typeof n&&void 0!==e?i(n,t("d3-dispatch"),t("d3-drag"),t("d3-interpolate"),t("d3-selection"),t("d3-transition")):i((r=r||self).d3=r.d3||{},r.d3,r.d3,r.d3,r.d3,r.d3)
}(this,(function(t,e,n,r,i,o){"use strict";function a(t){return function(){
return t}}function u(t,e,n){this.target=t,this.type=e,this.transform=n}
function c(t,e,n){this.k=t,this.x=e,this.y=n}c.prototype={constructor:c,
scale:function(t){return 1===t?this:new c(this.k*t,this.x,this.y)},
translate:function(t,e){
return 0===t&0===e?this:new c(this.k,this.x+this.k*t,this.y+this.k*e)},
apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},
applyX:function(t){return t*this.k+this.x},applyY:function(t){
return t*this.k+this.y},invert:function(t){
return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){
return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},
rescaleX:function(t){
return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},
rescaleY:function(t){
return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},
toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}}
;var f=new c(1,0,0);function s(t){for(;!t.__zoom;)if(!(t=t.parentNode))return f
;return t.__zoom}function l(){i.event.stopImmediatePropagation()}function h(){
i.event.preventDefault(),i.event.stopImmediatePropagation()}function d(){
return!i.event.ctrlKey&&!i.event.button}function p(){var t=this
;return t instanceof SVGElement?(t=t.ownerSVGElement||t).hasAttribute("viewBox")?[[(t=t.viewBox.baseVal).x,t.y],[t.x+t.width,t.y+t.height]]:[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]:[[0,0],[t.clientWidth,t.clientHeight]]
}function v(){return this.__zoom||f}function y(){
return-i.event.deltaY*(1===i.event.deltaMode?.05:i.event.deltaMode?1:.002)}
function g(){return navigator.maxTouchPoints||"ontouchstart"in this}
function b(t,e,n){
var r=t.invertX(e[0][0])-n[0][0],i=t.invertX(e[1][0])-n[1][0],o=t.invertY(e[0][1])-n[0][1],a=t.invertY(e[1][1])-n[1][1]
;return t.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),a>o?(o+a)/2:Math.min(0,o)||Math.max(0,a))
}s.prototype=c.prototype,t.zoom=function(){
var t,s,_=d,m=p,x=b,w=y,M=g,E=[0,1/0],k=[[-1/0,-1/0],[1/0,1/0]],A=250,S=r.interpolateZoom,j=e.dispatch("start","zoom","end"),N=500,T=0
;function C(t){
t.property("__zoom",v).on("wheel.zoom",D).on("mousedown.zoom",F).on("dblclick.zoom",B).filter(M).on("touchstart.zoom",q).on("touchmove.zoom",U).on("touchend.zoom touchcancel.zoom",Y).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")
}function O(t,e){
return(e=Math.max(E[0],Math.min(E[1],e)))===t.k?t:new c(e,t.x,t.y)}
function P(t,e,n){var r=e[0]-n[0]*t.k,i=e[1]-n[1]*t.k
;return r===t.x&&i===t.y?t:new c(t.k,r,i)}function I(t){
return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function L(t,e,n){
t.on("start.zoom",(function(){R(this,arguments).start()
})).on("interrupt.zoom end.zoom",(function(){R(this,arguments).end()
})).tween("zoom",(function(){
var t=this,r=arguments,i=R(t,r),o=m.apply(t,r),a=null==n?I(o):"function"==typeof n?n.apply(t,r):n,u=Math.max(o[1][0]-o[0][0],o[1][1]-o[0][1]),f=t.__zoom,s="function"==typeof e?e.apply(t,r):e,l=S(f.invert(a).concat(u/f.k),s.invert(a).concat(u/s.k))
;return function(t){if(1===t)t=s;else{var e=l(t),n=u/e[2]
;t=new c(n,a[0]-e[0]*n,a[1]-e[1]*n)}i.zoom(null,t)}}))}function R(t,e,n){
return!n&&t.__zooming||new z(t,e)}function z(t,e){
this.that=t,this.args=e,this.active=0,this.extent=m.apply(t,e),this.taps=0}
function D(){if(_.apply(this,arguments)){
var t=R(this,arguments),e=this.__zoom,n=Math.max(E[0],Math.min(E[1],e.k*Math.pow(2,w.apply(this,arguments)))),r=i.mouse(this)
;if(t.wheel)t.mouse[0][0]===r[0]&&t.mouse[0][1]===r[1]||(t.mouse[1]=e.invert(t.mouse[0]=r)),
clearTimeout(t.wheel);else{if(e.k===n)return
;t.mouse=[r,e.invert(r)],o.interrupt(this),t.start()}
h(),t.wheel=setTimeout(a,150),
t.zoom("mouse",x(P(O(e,n),t.mouse[0],t.mouse[1]),t.extent,k))}function a(){
t.wheel=null,t.end()}}function F(){if(!s&&_.apply(this,arguments)){
var t=R(this,arguments,!0),e=i.select(i.event.view).on("mousemove.zoom",c,!0).on("mouseup.zoom",f,!0),r=i.mouse(this),a=i.event.clientX,u=i.event.clientY
;n.dragDisable(i.event.view),
l(),t.mouse=[r,this.__zoom.invert(r)],o.interrupt(this),t.start()}function c(){
if(h(),!t.moved){var e=i.event.clientX-a,n=i.event.clientY-u;t.moved=e*e+n*n>T}
t.zoom("mouse",x(P(t.that.__zoom,t.mouse[0]=i.mouse(t.that),t.mouse[1]),t.extent,k))
}function f(){
e.on("mousemove.zoom mouseup.zoom",null),n.dragEnable(i.event.view,t.moved),h(),
t.end()}}function B(){if(_.apply(this,arguments)){
var t=this.__zoom,e=i.mouse(this),n=t.invert(e),r=t.k*(i.event.shiftKey?.5:2),o=x(P(O(t,r),e,n),m.apply(this,arguments),k)
;h(),
A>0?i.select(this).transition().duration(A).call(L,o,e):i.select(this).call(C.transform,o)
}}function q(){if(_.apply(this,arguments)){
var e,n,r,a,u=i.event.touches,c=u.length,f=R(this,arguments,i.event.changedTouches.length===c)
;for(l(),
n=0;n<c;++n)r=u[n],a=[a=i.touch(this,u,r.identifier),this.__zoom.invert(a),r.identifier],
f.touch0?f.touch1||f.touch0[2]===a[2]||(f.touch1=a,
f.taps=0):(f.touch0=a,e=!0,f.taps=1+!!t)
;t&&(t=clearTimeout(t)),e&&(f.taps<2&&(t=setTimeout((function(){t=null
}),N)),o.interrupt(this),f.start())}}function U(){if(this.__zooming){
var e,n,r,o,a=R(this,arguments),u=i.event.changedTouches,c=u.length
;for(h(),t&&(t=clearTimeout(t)),
a.taps=0,e=0;e<c;++e)n=u[e],r=i.touch(this,u,n.identifier),
a.touch0&&a.touch0[2]===n.identifier?a.touch0[0]=r:a.touch1&&a.touch1[2]===n.identifier&&(a.touch1[0]=r)
;if(n=a.that.__zoom,a.touch1){
var f=a.touch0[0],s=a.touch0[1],l=a.touch1[0],d=a.touch1[1],p=(p=l[0]-f[0])*p+(p=l[1]-f[1])*p,v=(v=d[0]-s[0])*v+(v=d[1]-s[1])*v
;n=O(n,Math.sqrt(p/v)),
r=[(f[0]+l[0])/2,(f[1]+l[1])/2],o=[(s[0]+d[0])/2,(s[1]+d[1])/2]}else{
if(!a.touch0)return;r=a.touch0[0],o=a.touch0[1]}
a.zoom("touch",x(P(n,r,o),a.extent,k))}}function Y(){if(this.__zooming){
var t,e,n=R(this,arguments),r=i.event.changedTouches,o=r.length
;for(l(),s&&clearTimeout(s),s=setTimeout((function(){s=null
}),N),t=0;t<o;++t)e=r[t],
n.touch0&&n.touch0[2]===e.identifier?delete n.touch0:n.touch1&&n.touch1[2]===e.identifier&&delete n.touch1
;if(n.touch1&&!n.touch0&&(n.touch0=n.touch1,
delete n.touch1),n.touch0)n.touch0[1]=this.__zoom.invert(n.touch0[0]);else if(n.end(),
2===n.taps){var a=i.select(this).on("dblclick.zoom");a&&a.apply(this,arguments)}
}}return C.transform=function(t,e,n){var r=t.selection?t.selection():t
;r.property("__zoom",v),t!==r?L(t,e,n):r.interrupt().each((function(){
R(this,arguments).start().zoom(null,"function"==typeof e?e.apply(this,arguments):e).end()
}))},C.scaleBy=function(t,e,n){C.scaleTo(t,(function(){
var t=this.__zoom.k,n="function"==typeof e?e.apply(this,arguments):e;return t*n
}),n)},C.scaleTo=function(t,e,n){C.transform(t,(function(){
var t=m.apply(this,arguments),r=this.__zoom,i=null==n?I(t):"function"==typeof n?n.apply(this,arguments):n,o=r.invert(i),a="function"==typeof e?e.apply(this,arguments):e
;return x(P(O(r,a),i,o),t,k)}),n)},C.translateBy=function(t,e,n){
C.transform(t,(function(){
return x(this.__zoom.translate("function"==typeof e?e.apply(this,arguments):e,"function"==typeof n?n.apply(this,arguments):n),m.apply(this,arguments),k)
}))},C.translateTo=function(t,e,n,r){C.transform(t,(function(){
var t=m.apply(this,arguments),i=this.__zoom,o=null==r?I(t):"function"==typeof r?r.apply(this,arguments):r
;return x(f.translate(o[0],o[1]).scale(i.k).translate("function"==typeof e?-e.apply(this,arguments):-e,"function"==typeof n?-n.apply(this,arguments):-n),t,k)
}),r)},z.prototype={start:function(){
return 1==++this.active&&(this.that.__zooming=this,this.emit("start")),this},
zoom:function(t,e){
return this.mouse&&"mouse"!==t&&(this.mouse[1]=e.invert(this.mouse[0])),
this.touch0&&"touch"!==t&&(this.touch0[1]=e.invert(this.touch0[0])),
this.touch1&&"touch"!==t&&(this.touch1[1]=e.invert(this.touch1[0])),
this.that.__zoom=e,this.emit("zoom"),this},end:function(){
return 0==--this.active&&(delete this.that.__zooming,this.emit("end")),this},
emit:function(t){
i.customEvent(new u(C,t,this.that.__zoom),j.apply,j,[t,this.that,this.args])}
},C.wheelDelta=function(t){
return arguments.length?(w="function"==typeof t?t:a(+t),C):w
},C.filter=function(t){return arguments.length?(_="function"==typeof t?t:a(!!t),
C):_},C.touchable=function(t){
return arguments.length?(M="function"==typeof t?t:a(!!t),C):M
},C.extent=function(t){
return arguments.length?(m="function"==typeof t?t:a([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),
C):m},C.scaleExtent=function(t){
return arguments.length?(E[0]=+t[0],E[1]=+t[1],C):[E[0],E[1]]
},C.translateExtent=function(t){
return arguments.length?(k[0][0]=+t[0][0],k[1][0]=+t[1][0],
k[0][1]=+t[0][1],k[1][1]=+t[1][1],C):[[k[0][0],k[0][1]],[k[1][0],k[1][1]]]
},C.constrain=function(t){return arguments.length?(x=t,C):x
},C.duration=function(t){return arguments.length?(A=+t,C):A
},C.interpolate=function(t){return arguments.length?(S=t,C):S},C.on=function(){
var t=j.on.apply(j,arguments);return t===j?C:t},C.clickDistance=function(t){
return arguments.length?(T=(t=+t)*t,C):Math.sqrt(T)},C
},t.zoomIdentity=f,t.zoomTransform=s,Object.defineProperty(t,"__esModule",{
value:!0})}))},{"d3-dispatch":36,"d3-drag":37,"d3-interpolate":45,
"d3-selection":52,"d3-transition":57}],60:[function(t,e,n){"use strict"
;Object.defineProperty(n,"__esModule",{value:!0})
;var r=t("d3-array"),i=t("d3-axis"),o=t("d3-brush"),a=t("d3-chord"),u=t("d3-collection"),c=t("d3-color"),f=t("d3-contour"),s=t("d3-dispatch"),l=t("d3-drag"),h=t("d3-dsv"),d=t("d3-ease"),p=t("d3-fetch"),v=t("d3-force"),y=t("d3-format"),g=t("d3-geo"),b=t("d3-hierarchy"),_=t("d3-interpolate"),m=t("d3-path"),x=t("d3-polygon"),w=t("d3-quadtree"),M=t("d3-random"),E=t("d3-scale"),k=t("d3-scale-chromatic"),A=t("d3-selection"),S=t("d3-shape"),j=t("d3-time"),N=t("d3-time-format"),T=t("d3-timer"),C=t("d3-transition"),O=t("d3-voronoi"),P=t("d3-zoom")
;Object.keys(r).forEach((function(t){"default"!==t&&Object.defineProperty(n,t,{
enumerable:!0,get:function(){return r[t]}})
})),Object.keys(i).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return i[t]}})})),Object.keys(o).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return o[t]}})})),Object.keys(a).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return a[t]}})})),Object.keys(u).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return u[t]}})})),Object.keys(c).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return c[t]}})})),Object.keys(f).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return f[t]}})})),Object.keys(s).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return s[t]}})})),Object.keys(l).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return l[t]}})})),Object.keys(h).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return h[t]}})})),Object.keys(d).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return d[t]}})})),Object.keys(p).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return p[t]}})})),Object.keys(v).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return v[t]}})})),Object.keys(y).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return y[t]}})})),Object.keys(g).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return g[t]}})})),Object.keys(b).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return b[t]}})})),Object.keys(_).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return _[t]}})})),Object.keys(m).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return m[t]}})})),Object.keys(x).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return x[t]}})})),Object.keys(w).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return w[t]}})})),Object.keys(M).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return M[t]}})})),Object.keys(E).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return E[t]}})})),Object.keys(k).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return k[t]}})})),Object.keys(A).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return A[t]}})})),Object.keys(S).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return S[t]}})})),Object.keys(j).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return j[t]}})})),Object.keys(N).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return N[t]}})})),Object.keys(T).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return T[t]}})})),Object.keys(C).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return C[t]}})})),Object.keys(O).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return O[t]}})})),Object.keys(P).forEach((function(t){
"default"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){
return P[t]}})})),n.version="5.14.2"},{"d3-array":29,"d3-axis":30,"d3-brush":31,
"d3-chord":32,"d3-collection":33,"d3-color":34,"d3-contour":35,"d3-dispatch":36,
"d3-drag":37,"d3-dsv":38,"d3-ease":39,"d3-fetch":40,"d3-force":41,
"d3-format":42,"d3-geo":43,"d3-hierarchy":44,"d3-interpolate":45,"d3-path":46,
"d3-polygon":47,"d3-quadtree":48,"d3-random":49,"d3-scale":51,
"d3-scale-chromatic":50,"d3-selection":52,"d3-shape":53,"d3-time":55,
"d3-time-format":54,"d3-timer":56,"d3-transition":57,"d3-voronoi":58,
"d3-zoom":59}],61:[function(t,e,n){e.exports={graphlib:t("./lib/graphlib"),
layout:t("./lib/layout"),debug:t("./lib/debug"),util:{time:t("./lib/util").time,
notime:t("./lib/util").notime},version:t("./lib/version")}},{"./lib/debug":66,
"./lib/graphlib":67,"./lib/layout":69,"./lib/util":89,"./lib/version":90}],
62:[function(t,e,n){"use strict";var r=t("./lodash"),i=t("./greedy-fas")
;e.exports={run:function(t){
var e="greedy"===t.graph().acyclicer?i(t,function(t){return function(e){
return t.edge(e).weight}}(t)):function(t){var e=[],n={},i={};function o(a){
r.has(i,a)||(i[a]=!0,n[a]=!0,r.forEach(t.outEdges(a),(function(t){
r.has(n,t.w)?e.push(t):o(t.w)})),delete n[a])}return r.forEach(t.nodes(),o),e
}(t);r.forEach(e,(function(e){var n=t.edge(e)
;t.removeEdge(e),n.forwardName=e.name,
n.reversed=!0,t.setEdge(e.w,e.v,n,r.uniqueId("rev"))}))},undo:function(t){
r.forEach(t.edges(),(function(e){var n=t.edge(e);if(n.reversed){t.removeEdge(e)
;var r=n.forwardName
;delete n.reversed,delete n.forwardName,t.setEdge(e.w,e.v,n,r)}}))}}},{
"./greedy-fas":68,"./lodash":70}],63:[function(t,e,n){
var r=t("./lodash"),i=t("./util");function o(t,e,n,r,o,a){var u={width:0,
height:0,rank:a,borderType:e},c=o[e][a-1],f=i.addDummyNode(t,"border",u,n)
;o[e][a]=f,t.setParent(f,r),c&&t.setEdge(c,f,{weight:1})}e.exports=function(t){
r.forEach(t.children(),(function e(n){var i=t.children(n),a=t.node(n)
;if(i.length&&r.forEach(i,e),r.has(a,"minRank")){
a.borderLeft=[],a.borderRight=[]
;for(var u=a.minRank,c=a.maxRank+1;u<c;++u)o(t,"borderLeft","_bl",n,a,u),
o(t,"borderRight","_br",n,a,u)}}))}},{"./lodash":70,"./util":89}],
64:[function(t,e,n){"use strict";var r=t("./lodash");function i(t){
r.forEach(t.nodes(),(function(e){o(t.node(e))
})),r.forEach(t.edges(),(function(e){o(t.edge(e))}))}function o(t){var e=t.width
;t.width=t.height,t.height=e}function a(t){t.y=-t.y}function u(t){var e=t.x
;t.x=t.y,t.y=e}e.exports={adjust:function(t){
var e=t.graph().rankdir.toLowerCase();"lr"!==e&&"rl"!==e||i(t)},
undo:function(t){var e=t.graph().rankdir.toLowerCase()
;"bt"!==e&&"rl"!==e||function(t){r.forEach(t.nodes(),(function(e){a(t.node(e))
})),r.forEach(t.edges(),(function(e){var n=t.edge(e)
;r.forEach(n.points,a),r.has(n,"y")&&a(n)}))}(t)
;"lr"!==e&&"rl"!==e||(!function(t){r.forEach(t.nodes(),(function(e){u(t.node(e))
})),r.forEach(t.edges(),(function(e){var n=t.edge(e)
;r.forEach(n.points,u),r.has(n,"x")&&u(n)}))}(t),i(t))}}},{"./lodash":70}],
65:[function(t,e,n){function r(){var t={};t._next=t._prev=t,this._sentinel=t}
function i(t){
t._prev._next=t._next,t._next._prev=t._prev,delete t._next,delete t._prev}
function o(t,e){if("_next"!==t&&"_prev"!==t)return e}
e.exports=r,r.prototype.dequeue=function(){var t=this._sentinel,e=t._prev
;if(e!==t)return i(e),e},r.prototype.enqueue=function(t){var e=this._sentinel
;t._prev&&t._next&&i(t),t._next=e._next,e._next._prev=t,e._next=t,t._prev=e
},r.prototype.toString=function(){
for(var t=[],e=this._sentinel,n=e._prev;n!==e;)t.push(JSON.stringify(n,o)),
n=n._prev;return"["+t.join(", ")+"]"}},{}],66:[function(t,e,n){
var r=t("./lodash"),i=t("./util"),o=t("./graphlib").Graph;e.exports={
debugOrdering:function(t){var e=i.buildLayerMatrix(t),n=new o({compound:!0,
multigraph:!0}).setGraph({});return r.forEach(t.nodes(),(function(e){
n.setNode(e,{label:e}),n.setParent(e,"layer"+t.node(e).rank)
})),r.forEach(t.edges(),(function(t){n.setEdge(t.v,t.w,{},t.name)
})),r.forEach(e,(function(t,e){var i="layer"+e;n.setNode(i,{rank:"same"
}),r.reduce(t,(function(t,e){return n.setEdge(t,e,{style:"invis"}),e}))})),n}}
},{"./graphlib":67,"./lodash":70,"./util":89}],67:[function(t,e,n){var r
;if("function"==typeof t)try{r=t("graphlib")}catch(i){}
r||(r=window.graphlib),e.exports=r},{graphlib:91}],68:[function(t,e,n){
var r=t("./lodash"),i=t("./graphlib").Graph,o=t("./data/list")
;e.exports=function(t,e){if(t.nodeCount()<=1)return[];var n=function(t,e){
var n=new i,a=0,u=0;r.forEach(t.nodes(),(function(t){n.setNode(t,{v:t,in:0,out:0
})})),r.forEach(t.edges(),(function(t){var r=n.edge(t.v,t.w)||0,i=e(t),o=r+i
;n.setEdge(t.v,t.w,o),
u=Math.max(u,n.node(t.v).out+=i),a=Math.max(a,n.node(t.w).in+=i)}))
;var f=r.range(u+a+3).map((function(){return new o})),s=a+1
;return r.forEach(n.nodes(),(function(t){c(f,s,n.node(t))})),{graph:n,buckets:f,
zeroIdx:s}}(t,e||a),f=function(t,e,n){var r,i=[],o=e[e.length-1],a=e[0]
;for(;t.nodeCount();){for(;r=a.dequeue();)u(t,e,n,r)
;for(;r=o.dequeue();)u(t,e,n,r)
;if(t.nodeCount())for(var c=e.length-2;c>0;--c)if(r=e[c].dequeue()){
i=i.concat(u(t,e,n,r,!0));break}}return i}(n.graph,n.buckets,n.zeroIdx)
;return r.flatten(r.map(f,(function(e){return t.outEdges(e.v,e.w)})),!0)}
;var a=r.constant(1);function u(t,e,n,i,o){var a=o?[]:void 0
;return r.forEach(t.inEdges(i.v),(function(r){var i=t.edge(r),u=t.node(r.v)
;o&&a.push({v:r.v,w:r.w}),u.out-=i,c(e,n,u)
})),r.forEach(t.outEdges(i.v),(function(r){var i=t.edge(r),o=r.w,a=t.node(o)
;a.in-=i,c(e,n,a)})),t.removeNode(i.v),a}function c(t,e,n){
n.out?n.in?t[n.out-n.in+e].enqueue(n):t[t.length-1].enqueue(n):t[0].enqueue(n)}
},{"./data/list":65,"./graphlib":67,"./lodash":70}],69:[function(t,e,n){
"use strict"
;var r=t("./lodash"),i=t("./acyclic"),o=t("./normalize"),a=t("./rank"),u=t("./util").normalizeRanks,c=t("./parent-dummy-chains"),f=t("./util").removeEmptyRanks,s=t("./nesting-graph"),l=t("./add-border-segments"),h=t("./coordinate-system"),d=t("./order"),p=t("./position"),v=t("./util"),y=t("./graphlib").Graph
;e.exports=function(t,e){var n=e&&e.debugTiming?v.time:v.notime
;n("layout",(function(){var e=n("  buildLayoutGraph",(function(){
return function(t){var e=new y({multigraph:!0,compound:!0}),n=A(t.graph())
;return e.setGraph(r.merge({},b,k(n,g),r.pick(n,_))),
r.forEach(t.nodes(),(function(n){var i=A(t.node(n))
;e.setNode(n,r.defaults(k(i,m),x)),e.setParent(n,t.parent(n))
})),r.forEach(t.edges(),(function(n){var i=A(t.edge(n))
;e.setEdge(n,r.merge({},M,k(i,w),r.pick(i,E)))})),e}(t)}))
;n("  runLayout",(function(){!function(t,e){
e("    makeSpaceForEdgeLabels",(function(){!function(t){var e=t.graph()
;e.ranksep/=2,r.forEach(t.edges(),(function(n){var r=t.edge(n)
;r.minlen*=2,"c"!==r.labelpos.toLowerCase()&&("TB"===e.rankdir||"BT"===e.rankdir?r.width+=r.labeloffset:r.height+=r.labeloffset)
}))}(t)})),e("    removeSelfEdges",(function(){!function(t){
r.forEach(t.edges(),(function(e){if(e.v===e.w){var n=t.node(e.v)
;n.selfEdges||(n.selfEdges=[]),n.selfEdges.push({e:e,label:t.edge(e)
}),t.removeEdge(e)}}))}(t)})),e("    acyclic",(function(){i.run(t)
})),e("    nestingGraph.run",(function(){s.run(t)})),e("    rank",(function(){
a(v.asNonCompoundGraph(t))})),e("    injectEdgeLabelProxies",(function(){
!function(t){r.forEach(t.edges(),(function(e){var n=t.edge(e)
;if(n.width&&n.height){var r=t.node(e.v),i={
rank:(t.node(e.w).rank-r.rank)/2+r.rank,e:e}
;v.addDummyNode(t,"edge-proxy",i,"_ep")}}))}(t)
})),e("    removeEmptyRanks",(function(){f(t)
})),e("    nestingGraph.cleanup",(function(){s.cleanup(t)
})),e("    normalizeRanks",(function(){u(t)
})),e("    assignRankMinMax",(function(){!function(t){var e=0
;r.forEach(t.nodes(),(function(n){var i=t.node(n)
;i.borderTop&&(i.minRank=t.node(i.borderTop).rank,
i.maxRank=t.node(i.borderBottom).rank,e=r.max(e,i.maxRank))
})),t.graph().maxRank=e}(t)})),e("    removeEdgeLabelProxies",(function(){
!function(t){r.forEach(t.nodes(),(function(e){var n=t.node(e)
;"edge-proxy"===n.dummy&&(t.edge(n.e).labelRank=n.rank,t.removeNode(e))}))}(t)
})),e("    normalize.run",(function(){o.run(t)
})),e("    parentDummyChains",(function(){c(t)
})),e("    addBorderSegments",(function(){l(t)})),e("    order",(function(){d(t)
})),e("    insertSelfEdges",(function(){!function(t){var e=v.buildLayerMatrix(t)
;r.forEach(e,(function(e){var n=0;r.forEach(e,(function(e,i){var o=t.node(e)
;o.order=i+n,r.forEach(o.selfEdges,(function(e){v.addDummyNode(t,"selfedge",{
width:e.label.width,height:e.label.height,rank:o.rank,order:i+ ++n,e:e.e,
label:e.label},"_se")})),delete o.selfEdges}))}))}(t)
})),e("    adjustCoordinateSystem",(function(){h.adjust(t)
})),e("    position",(function(){p(t)})),e("    positionSelfEdges",(function(){
!function(t){r.forEach(t.nodes(),(function(e){var n=t.node(e)
;if("selfedge"===n.dummy){
var r=t.node(n.e.v),i=r.x+r.width/2,o=r.y,a=n.x-i,u=r.height/2
;t.setEdge(n.e,n.label),t.removeNode(e),n.label.points=[{x:i+2*a/3,y:o-u},{
x:i+5*a/6,y:o-u},{x:i+a,y:o},{x:i+5*a/6,y:o+u},{x:i+2*a/3,y:o+u}],n.label.x=n.x,
n.label.y=n.y}}))}(t)})),e("    removeBorderNodes",(function(){!function(t){
r.forEach(t.nodes(),(function(e){if(t.children(e).length){
var n=t.node(e),i=t.node(n.borderTop),o=t.node(n.borderBottom),a=t.node(r.last(n.borderLeft)),u=t.node(r.last(n.borderRight))
;n.width=Math.abs(u.x-a.x),
n.height=Math.abs(o.y-i.y),n.x=a.x+n.width/2,n.y=i.y+n.height/2}
})),r.forEach(t.nodes(),(function(e){"border"===t.node(e).dummy&&t.removeNode(e)
}))}(t)})),e("    normalize.undo",(function(){o.undo(t)
})),e("    fixupEdgeLabelCoords",(function(){!function(t){
r.forEach(t.edges(),(function(e){var n=t.edge(e)
;if(r.has(n,"x"))switch("l"!==n.labelpos&&"r"!==n.labelpos||(n.width-=n.labeloffset),
n.labelpos){case"l":n.x-=n.width/2+n.labeloffset;break;case"r":
n.x+=n.width/2+n.labeloffset}}))}(t)
})),e("    undoCoordinateSystem",(function(){h.undo(t)
})),e("    translateGraph",(function(){!function(t){
var e=Number.POSITIVE_INFINITY,n=0,i=Number.POSITIVE_INFINITY,o=0,a=t.graph(),u=a.marginx||0,c=a.marginy||0
;function f(t){var r=t.x,a=t.y,u=t.width,c=t.height
;e=Math.min(e,r-u/2),n=Math.max(n,r+u/2),i=Math.min(i,a-c/2),o=Math.max(o,a+c/2)
}r.forEach(t.nodes(),(function(e){f(t.node(e))
})),r.forEach(t.edges(),(function(e){var n=t.edge(e);r.has(n,"x")&&f(n)})),e-=u,
i-=c,r.forEach(t.nodes(),(function(n){var r=t.node(n);r.x-=e,r.y-=i
})),r.forEach(t.edges(),(function(n){var o=t.edge(n)
;r.forEach(o.points,(function(t){t.x-=e,t.y-=i
})),r.has(o,"x")&&(o.x-=e),r.has(o,"y")&&(o.y-=i)
})),a.width=n-e+u,a.height=o-i+c}(t)
})),e("    assignNodeIntersects",(function(){!function(t){
r.forEach(t.edges(),(function(e){var n,r,i=t.edge(e),o=t.node(e.v),a=t.node(e.w)
;i.points?(n=i.points[0],
r=i.points[i.points.length-1]):(i.points=[],n=a,r=o),i.points.unshift(v.intersectRect(o,n)),
i.points.push(v.intersectRect(a,r))}))}(t)})),e("    reversePoints",(function(){
!function(t){r.forEach(t.edges(),(function(e){var n=t.edge(e)
;n.reversed&&n.points.reverse()}))}(t)})),e("    acyclic.undo",(function(){
i.undo(t)}))}(e,n)})),n("  updateInputGraph",(function(){!function(t,e){
r.forEach(t.nodes(),(function(n){var r=t.node(n),i=e.node(n)
;r&&(r.x=i.x,r.y=i.y,e.children(n).length&&(r.width=i.width,r.height=i.height))
})),r.forEach(t.edges(),(function(n){var i=t.edge(n),o=e.edge(n)
;i.points=o.points,r.has(o,"x")&&(i.x=o.x,i.y=o.y)
})),t.graph().width=e.graph().width,t.graph().height=e.graph().height}(t,e)}))
}))};var g=["nodesep","edgesep","ranksep","marginx","marginy"],b={ranksep:50,
edgesep:20,nodesep:50,rankdir:"tb"
},_=["acyclicer","ranker","rankdir","align"],m=["width","height"],x={width:0,
height:0},w=["minlen","weight","width","height","labeloffset"],M={minlen:1,
weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},E=["labelpos"]
;function k(t,e){return r.mapValues(r.pick(t,e),Number)}function A(t){var e={}
;return r.forEach(t,(function(t,n){e[n.toLowerCase()]=t})),e}},{"./acyclic":62,
"./add-border-segments":63,"./coordinate-system":64,"./graphlib":67,
"./lodash":70,"./nesting-graph":71,"./normalize":72,"./order":77,
"./parent-dummy-chains":82,"./position":84,"./rank":86,"./util":89}],
70:[function(t,e,n){var r;if("function"==typeof t)try{r={
cloneDeep:t("lodash/cloneDeep"),constant:t("lodash/constant"),
defaults:t("lodash/defaults"),each:t("lodash/each"),filter:t("lodash/filter"),
find:t("lodash/find"),flatten:t("lodash/flatten"),forEach:t("lodash/forEach"),
forIn:t("lodash/forIn"),has:t("lodash/has"),isUndefined:t("lodash/isUndefined"),
last:t("lodash/last"),map:t("lodash/map"),mapValues:t("lodash/mapValues"),
max:t("lodash/max"),merge:t("lodash/merge"),min:t("lodash/min"),
minBy:t("lodash/minBy"),now:t("lodash/now"),pick:t("lodash/pick"),
range:t("lodash/range"),reduce:t("lodash/reduce"),sortBy:t("lodash/sortBy"),
uniqueId:t("lodash/uniqueId"),values:t("lodash/values"),
zipObject:t("lodash/zipObject")}}catch(i){}r||(r=window._),e.exports=r},{
"lodash/cloneDeep":287,"lodash/constant":288,"lodash/defaults":289,
"lodash/each":290,"lodash/filter":292,"lodash/find":293,"lodash/flatten":295,
"lodash/forEach":296,"lodash/forIn":297,"lodash/has":299,
"lodash/isUndefined":318,"lodash/last":321,"lodash/map":322,
"lodash/mapValues":323,"lodash/max":324,"lodash/merge":326,"lodash/min":327,
"lodash/minBy":328,"lodash/now":330,"lodash/pick":331,"lodash/range":333,
"lodash/reduce":334,"lodash/sortBy":336,"lodash/uniqueId":346,
"lodash/values":347,"lodash/zipObject":348}],71:[function(t,e,n){
var r=t("./lodash"),i=t("./util");e.exports={run:function(t){
var e=i.addDummyNode(t,"root",{},"_root"),n=function(t){var e={}
;function n(i,o){var a=t.children(i);a&&a.length&&r.forEach(a,(function(t){
n(t,o+1)})),e[i]=o}return r.forEach(t.children(),(function(t){n(t,1)})),e
}(t),o=r.max(r.values(n))-1,a=2*o+1
;t.graph().nestingRoot=e,r.forEach(t.edges(),(function(e){t.edge(e).minlen*=a}))
;var u=function(t){return r.reduce(t.edges(),(function(e,n){
return e+t.edge(n).weight}),0)}(t)+1;r.forEach(t.children(),(function(c){
!function t(e,n,o,a,u,c,f){var s=e.children(f)
;if(!s.length)return void(f!==n&&e.setEdge(n,f,{weight:0,minlen:o}))
;var l=i.addBorderNode(e,"_bt"),h=i.addBorderNode(e,"_bb"),d=e.node(f)
;e.setParent(l,f),
d.borderTop=l,e.setParent(h,f),d.borderBottom=h,r.forEach(s,(function(r){
t(e,n,o,a,u,c,r)
;var i=e.node(r),s=i.borderTop?i.borderTop:r,d=i.borderBottom?i.borderBottom:r,p=i.borderTop?a:2*a,v=s!==d?1:u-c[f]+1
;e.setEdge(l,s,{weight:p,minlen:v,nestingEdge:!0}),e.setEdge(d,h,{weight:p,
minlen:v,nestingEdge:!0})})),e.parent(f)||e.setEdge(n,l,{weight:0,minlen:u+c[f]
})}(t,e,a,u,o,n,c)})),t.graph().nodeRankFactor=a},cleanup:function(t){
var e=t.graph()
;t.removeNode(e.nestingRoot),delete e.nestingRoot,r.forEach(t.edges(),(function(e){
t.edge(e).nestingEdge&&t.removeEdge(e)}))}}},{"./lodash":70,"./util":89}],
72:[function(t,e,n){"use strict";var r=t("./lodash"),i=t("./util");e.exports={
run:function(t){t.graph().dummyChains=[],r.forEach(t.edges(),(function(e){
!function(t,e){
var n,r,o,a=e.v,u=t.node(a).rank,c=e.w,f=t.node(c).rank,s=e.name,l=t.edge(e),h=l.labelRank
;if(f===u+1)return;for(t.removeEdge(e),o=0,++u;u<f;++o,++u)l.points=[],r={
width:0,height:0,edgeLabel:l,edgeObj:e,rank:u
},n=i.addDummyNode(t,"edge",r,"_d"),
u===h&&(r.width=l.width,r.height=l.height,r.dummy="edge-label",
r.labelpos=l.labelpos),t.setEdge(a,n,{weight:l.weight
},s),0===o&&t.graph().dummyChains.push(n),a=n;t.setEdge(a,c,{weight:l.weight},s)
}(t,e)}))},undo:function(t){r.forEach(t.graph().dummyChains,(function(e){
var n,r=t.node(e),i=r.edgeLabel
;for(t.setEdge(r.edgeObj,i);r.dummy;)n=t.successors(e)[0],
t.removeNode(e),i.points.push({x:r.x,y:r.y
}),"edge-label"===r.dummy&&(i.x=r.x,i.y=r.y,
i.width=r.width,i.height=r.height),e=n,r=t.node(e)}))}}},{"./lodash":70,
"./util":89}],73:[function(t,e,n){var r=t("../lodash")
;e.exports=function(t,e,n){var i,o={};r.forEach(n,(function(n){
for(var r,a,u=t.parent(n);u;){
if((r=t.parent(u))?(a=o[r],o[r]=u):(a=i,i=u),a&&a!==u)return void e.setEdge(a,u)
;u=r}}))}},{"../lodash":70}],74:[function(t,e,n){var r=t("../lodash")
;e.exports=function(t,e){return r.map(e,(function(e){var n=t.inEdges(e)
;if(n.length){var i=r.reduce(n,(function(e,n){var r=t.edge(n),i=t.node(n.v)
;return{sum:e.sum+r.weight*i.order,weight:e.weight+r.weight}}),{sum:0,weight:0})
;return{v:e,barycenter:i.sum/i.weight,weight:i.weight}}return{v:e}}))}},{
"../lodash":70}],75:[function(t,e,n){
var r=t("../lodash"),i=t("../graphlib").Graph;e.exports=function(t,e,n){
var o=function(t){var e;for(;t.hasNode(e=r.uniqueId("_root")););return e
}(t),a=new i({compound:!0}).setGraph({root:o}).setDefaultNodeLabel((function(e){
return t.node(e)}));return r.forEach(t.nodes(),(function(i){
var u=t.node(i),c=t.parent(i)
;(u.rank===e||u.minRank<=e&&e<=u.maxRank)&&(a.setNode(i),
a.setParent(i,c||o),r.forEach(t[n](i),(function(e){
var n=e.v===i?e.w:e.v,o=a.edge(n,i),u=r.isUndefined(o)?0:o.weight
;a.setEdge(n,i,{weight:t.edge(e).weight+u})})),r.has(u,"minRank")&&a.setNode(i,{
borderLeft:u.borderLeft[e],borderRight:u.borderRight[e]}))})),a}},{
"../graphlib":67,"../lodash":70}],76:[function(t,e,n){"use strict"
;var r=t("../lodash");function i(t,e,n){
for(var i=r.zipObject(n,r.map(n,(function(t,e){return e
}))),o=r.flatten(r.map(e,(function(e){
return r.sortBy(r.map(t.outEdges(e),(function(e){return{pos:i[e.w],
weight:t.edge(e).weight}})),"pos")})),!0),a=1;a<n.length;)a<<=1;var u=2*a-1;a-=1
;var c=r.map(new Array(u),(function(){return 0})),f=0
;return r.forEach(o.forEach((function(t){var e=t.pos+a;c[e]+=t.weight
;for(var n=0;e>0;)e%2&&(n+=c[e+1]),c[e=e-1>>1]+=t.weight;f+=t.weight*n}))),f}
e.exports=function(t,e){for(var n=0,r=1;r<e.length;++r)n+=i(t,e[r-1],e[r])
;return n}},{"../lodash":70}],77:[function(t,e,n){"use strict"
;var r=t("../lodash"),i=t("./init-order"),o=t("./cross-count"),a=t("./sort-subgraph"),u=t("./build-layer-graph"),c=t("./add-subgraph-constraints"),f=t("../graphlib").Graph,s=t("../util")
;function l(t,e,n){return r.map(e,(function(e){return u(t,e,n)}))}
function h(t,e){var n=new f;r.forEach(t,(function(t){
var i=t.graph().root,o=a(t,i,n,e);r.forEach(o.vs,(function(e,n){
t.node(e).order=n})),c(t,n,o.vs)}))}function d(t,e){r.forEach(e,(function(e){
r.forEach(e,(function(e,n){t.node(e).order=n}))}))}e.exports=function(t){
var e=s.maxRank(t),n=l(t,r.range(1,e+1),"inEdges"),a=l(t,r.range(e-1,-1,-1),"outEdges"),u=i(t)
;d(t,u);for(var c,f=Number.POSITIVE_INFINITY,p=0,v=0;v<4;++p,++v){
h(p%2?n:a,p%4>=2),u=s.buildLayerMatrix(t);var y=o(t,u)
;y<f&&(v=0,c=r.cloneDeep(u),f=y)}d(t,c)}},{"../graphlib":67,"../lodash":70,
"../util":89,"./add-subgraph-constraints":73,"./build-layer-graph":75,
"./cross-count":76,"./init-order":78,"./sort-subgraph":80}],78:[function(t,e,n){
"use strict";var r=t("../lodash");e.exports=function(t){
var e={},n=r.filter(t.nodes(),(function(e){return!t.children(e).length
})),i=r.max(r.map(n,(function(e){return t.node(e).rank
}))),o=r.map(r.range(i+1),(function(){return[]}));var a=r.sortBy(n,(function(e){
return t.node(e).rank}));return r.forEach(a,(function n(i){if(r.has(e,i))return
;e[i]=!0;var a=t.node(i);o[a.rank].push(i),r.forEach(t.successors(i),n)})),o}},{
"../lodash":70}],79:[function(t,e,n){"use strict";var r=t("../lodash")
;e.exports=function(t,e){var n={};return r.forEach(t,(function(t,e){
var i=n[t.v]={indegree:0,in:[],out:[],vs:[t.v],i:e}
;r.isUndefined(t.barycenter)||(i.barycenter=t.barycenter,i.weight=t.weight)
})),r.forEach(e.edges(),(function(t){var e=n[t.v],i=n[t.w]
;r.isUndefined(e)||r.isUndefined(i)||(i.indegree++,e.out.push(n[t.w]))
})),function(t){var e=[];function n(t){return function(e){
e.merged||(r.isUndefined(e.barycenter)||r.isUndefined(t.barycenter)||e.barycenter>=t.barycenter)&&function(t,e){
var n=0,r=0;t.weight&&(n+=t.barycenter*t.weight,r+=t.weight)
;e.weight&&(n+=e.barycenter*e.weight,r+=e.weight)
;t.vs=e.vs.concat(t.vs),t.barycenter=n/r,
t.weight=r,t.i=Math.min(e.i,t.i),e.merged=!0}(t,e)}}function i(e){
return function(n){n.in.push(e),0==--n.indegree&&t.push(n)}}for(;t.length;){
var o=t.pop();e.push(o),r.forEach(o.in.reverse(),n(o)),r.forEach(o.out,i(o))}
return r.map(r.filter(e,(function(t){return!t.merged})),(function(t){
return r.pick(t,["vs","i","barycenter","weight"])}))}(r.filter(n,(function(t){
return!t.indegree})))}},{"../lodash":70}],80:[function(t,e,n){
var r=t("../lodash"),i=t("./barycenter"),o=t("./resolve-conflicts"),a=t("./sort")
;e.exports=function t(e,n,u,c){
var f=e.children(n),s=e.node(n),l=s?s.borderLeft:void 0,h=s?s.borderRight:void 0,d={}
;l&&(f=r.filter(f,(function(t){return t!==l&&t!==h})));var p=i(e,f)
;r.forEach(p,(function(n){if(e.children(n.v).length){var i=t(e,n.v,u,c)
;d[n.v]=i,r.has(i,"barycenter")&&function(t,e){
r.isUndefined(t.barycenter)?(t.barycenter=e.barycenter,
t.weight=e.weight):(t.barycenter=(t.barycenter*t.weight+e.barycenter*e.weight)/(t.weight+e.weight),
t.weight+=e.weight)}(n,i)}}));var v=o(p,u);!function(t,e){
r.forEach(t,(function(t){t.vs=r.flatten(t.vs.map((function(t){
return e[t]?e[t].vs:t})),!0)}))}(v,d);var y=a(v,c)
;if(l&&(y.vs=r.flatten([l,y.vs,h],!0),e.predecessors(l).length)){
var g=e.node(e.predecessors(l)[0]),b=e.node(e.predecessors(h)[0])
;r.has(y,"barycenter")||(y.barycenter=0,
y.weight=0),y.barycenter=(y.barycenter*y.weight+g.order+b.order)/(y.weight+2),
y.weight+=2}return y}},{"../lodash":70,"./barycenter":74,
"./resolve-conflicts":79,"./sort":81}],81:[function(t,e,n){
var r=t("../lodash"),i=t("../util");function o(t,e,n){
for(var i;e.length&&(i=r.last(e)).i<=n;)e.pop(),t.push(i.vs),n++;return n}
e.exports=function(t,e){var n=i.partition(t,(function(t){
return r.has(t,"barycenter")})),a=n.lhs,u=r.sortBy(n.rhs,(function(t){return-t.i
})),c=[],f=0,s=0,l=0;a.sort(function(t){return function(e,n){
return e.barycenter<n.barycenter?-1:e.barycenter>n.barycenter?1:t?n.i-e.i:e.i-n.i
}}(!!e)),l=o(c,u,l),r.forEach(a,(function(t){
l+=t.vs.length,c.push(t.vs),f+=t.barycenter*t.weight,s+=t.weight,l=o(c,u,l)}))
;var h={vs:r.flatten(c,!0)};s&&(h.barycenter=f/s,h.weight=s);return h}},{
"../lodash":70,"../util":89}],82:[function(t,e,n){var r=t("./lodash")
;e.exports=function(t){var e=function(t){var e={},n=0;function i(o){var a=n
;r.forEach(t.children(o),i),e[o]={low:a,lim:n++}}
return r.forEach(t.children(),i),e}(t)
;r.forEach(t.graph().dummyChains,(function(n){
for(var r=t.node(n),i=r.edgeObj,o=function(t,e,n,r){
var i,o,a=[],u=[],c=Math.min(e[n].low,e[r].low),f=Math.max(e[n].lim,e[r].lim)
;i=n;do{i=t.parent(i),a.push(i)}while(i&&(e[i].low>c||f>e[i].lim));o=i,i=r
;for(;(i=t.parent(i))!==o;)u.push(i);return{path:a.concat(u.reverse()),lca:o}
}(t,e,i.v,i.w),a=o.path,u=o.lca,c=0,f=a[c],s=!0;n!==i.w;){if(r=t.node(n),s){
for(;(f=a[c])!==u&&t.node(f).maxRank<r.rank;)c++;f===u&&(s=!1)}if(!s){
for(;c<a.length-1&&t.node(f=a[c+1]).minRank<=r.rank;)c++;f=a[c]}
t.setParent(n,f),n=t.successors(n)[0]}}))}},{"./lodash":70}],
83:[function(t,e,n){"use strict"
;var r=t("../lodash"),i=t("../graphlib").Graph,o=t("../util");function a(t,e){
var n={};return r.reduce(e,(function(e,i){var o=0,a=0,u=e.length,f=r.last(i)
;return r.forEach(i,(function(e,s){var l=function(t,e){
if(t.node(e).dummy)return r.find(t.predecessors(e),(function(e){
return t.node(e).dummy}))}(t,e),h=l?t.node(l).order:u
;(l||e===f)&&(r.forEach(i.slice(a,s+1),(function(e){
r.forEach(t.predecessors(e),(function(r){var i=t.node(r),a=i.order
;!(a<o||h<a)||i.dummy&&t.node(e).dummy||c(n,r,e)}))})),a=s+1,o=h)})),i})),n}
function u(t,e){var n={};function i(e,i,o,a,u){var f
;r.forEach(r.range(i,o),(function(i){
f=e[i],t.node(f).dummy&&r.forEach(t.predecessors(f),(function(e){var r=t.node(e)
;r.dummy&&(r.order<a||r.order>u)&&c(n,e,f)}))}))}
return r.reduce(e,(function(e,n){var o,a=-1,u=0
;return r.forEach(n,(function(r,c){if("border"===t.node(r).dummy){
var f=t.predecessors(r);f.length&&(o=t.node(f[0]).order,i(n,u,c,a,o),u=c,a=o)}
i(n,u,n.length,o,e.length)})),n})),n}function c(t,e,n){if(e>n){var r=e;e=n,n=r}
var i=t[e];i||(t[e]=i={}),i[n]=!0}function f(t,e,n){if(e>n){var i=e;e=n,n=i}
return r.has(t[e],n)}function s(t,e,n,i){var o={},a={},u={}
;return r.forEach(e,(function(t){r.forEach(t,(function(t,e){o[t]=t,a[t]=t,u[t]=e
}))})),r.forEach(e,(function(t){var e=-1;r.forEach(t,(function(t){var c=i(t)
;if(c.length)for(var s=((c=r.sortBy(c,(function(t){return u[t]
}))).length-1)/2,l=Math.floor(s),h=Math.ceil(s);l<=h;++l){var d=c[l]
;a[t]===t&&e<u[d]&&!f(n,t,d)&&(a[d]=t,a[t]=o[t]=o[d],e=u[d])}}))})),{root:o,
align:a}}function l(t,e,n,o,a){var u={},c=function(t,e,n,o){
var a=new i,u=t.graph(),c=function(t,e,n){return function(i,o,a){
var u,c=i.node(o),f=i.node(a),s=0
;if(s+=c.width/2,r.has(c,"labelpos"))switch(c.labelpos.toLowerCase()){case"l":
u=-c.width/2;break;case"r":u=c.width/2}if(u&&(s+=n?u:-u),u=0,s+=(c.dummy?e:t)/2,
s+=(f.dummy?e:t)/2,
s+=f.width/2,r.has(f,"labelpos"))switch(f.labelpos.toLowerCase()){case"l":
u=f.width/2;break;case"r":u=-f.width/2}return u&&(s+=n?u:-u),u=0,s}
}(u.nodesep,u.edgesep,o);return r.forEach(e,(function(e){var i
;r.forEach(e,(function(e){var r=n[e];if(a.setNode(r),i){var o=n[i],u=a.edge(o,r)
;a.setEdge(o,r,Math.max(c(t,e,i),u||0))}i=e}))})),a
}(t,e,n,a),f=a?"borderLeft":"borderRight";function s(t,e){
for(var n=c.nodes(),r=n.pop(),i={};r;)i[r]?t(r):(i[r]=!0,
n.push(r),n=n.concat(e(r))),r=n.pop()}return s((function(t){
u[t]=c.inEdges(t).reduce((function(t,e){return Math.max(t,u[e.v]+c.edge(e))}),0)
}),c.predecessors.bind(c)),s((function(e){
var n=c.outEdges(e).reduce((function(t,e){return Math.min(t,u[e.w]-c.edge(e))
}),Number.POSITIVE_INFINITY),r=t.node(e)
;n!==Number.POSITIVE_INFINITY&&r.borderType!==f&&(u[e]=Math.max(u[e],n))
}),c.successors.bind(c)),r.forEach(o,(function(t){u[t]=u[n[t]]})),u}
function h(t,e){return r.minBy(r.values(e),(function(e){
var n=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY
;return r.forIn(e,(function(e,r){var o=function(t,e){return t.node(e).width
}(t,r)/2;n=Math.max(e+o,n),i=Math.min(e-o,i)})),n-i}))}function d(t,e){
var n=r.values(e),i=r.min(n),o=r.max(n);r.forEach(["u","d"],(function(n){
r.forEach(["l","r"],(function(a){var u,c=n+a,f=t[c];if(f!==e){var s=r.values(f)
;(u="l"===a?i-r.min(s):o-r.max(s))&&(t[c]=r.mapValues(f,(function(t){return t+u
})))}}))}))}function p(t,e){return r.mapValues(t.ul,(function(n,i){
if(e)return t[e.toLowerCase()][i];var o=r.sortBy(r.map(t,i));return(o[1]+o[2])/2
}))}e.exports={positionX:function(t){
var e,n=o.buildLayerMatrix(t),i=r.merge(a(t,n),u(t,n)),c={}
;r.forEach(["u","d"],(function(o){
e="u"===o?n:r.values(n).reverse(),r.forEach(["l","r"],(function(n){
"r"===n&&(e=r.map(e,(function(t){return r.values(t).reverse()})))
;var a=("u"===o?t.predecessors:t.successors).bind(t),u=s(t,e,i,a),f=l(t,e,u.root,u.align,"r"===n)
;"r"===n&&(f=r.mapValues(f,(function(t){return-t}))),c[o+n]=f}))}));var f=h(t,c)
;return d(c,f),p(c,t.graph().align)},findType1Conflicts:a,findType2Conflicts:u,
addConflict:c,hasConflict:f,verticalAlignment:s,horizontalCompaction:l,
alignCoordinates:d,findSmallestWidthAlignment:h,balance:p}},{"../graphlib":67,
"../lodash":70,"../util":89}],84:[function(t,e,n){"use strict"
;var r=t("../lodash"),i=t("../util"),o=t("./bk").positionX
;e.exports=function(t){(function(t){
var e=i.buildLayerMatrix(t),n=t.graph().ranksep,o=0;r.forEach(e,(function(e){
var i=r.max(r.map(e,(function(e){return t.node(e).height})))
;r.forEach(e,(function(e){t.node(e).y=o+i/2})),o+=i+n}))
})(t=i.asNonCompoundGraph(t)),r.forEach(o(t),(function(e,n){t.node(n).x=e}))}},{
"../lodash":70,"../util":89,"./bk":83}],85:[function(t,e,n){"use strict"
;var r=t("../lodash"),i=t("../graphlib").Graph,o=t("./util").slack
;function a(t,e){return r.forEach(t.nodes(),(function n(i){
r.forEach(e.nodeEdges(i),(function(r){var a=r.v,u=i===a?r.w:a
;t.hasNode(u)||o(e,r)||(t.setNode(u,{}),t.setEdge(i,u,{}),n(u))}))
})),t.nodeCount()}function u(t,e){return r.minBy(e.edges(),(function(n){
if(t.hasNode(n.v)!==t.hasNode(n.w))return o(e,n)}))}function c(t,e,n){
r.forEach(t.nodes(),(function(t){e.node(t).rank+=n}))}e.exports=function(t){
var e,n,r=new i({directed:!1}),f=t.nodes()[0],s=t.nodeCount();r.setNode(f,{})
;for(;a(r,t)<s;)e=u(r,t),n=r.hasNode(e.v)?o(t,e):-o(t,e),c(r,t,n);return r}},{
"../graphlib":67,"../lodash":70,"./util":88}],86:[function(t,e,n){"use strict"
;var r=t("./util").longestPath,i=t("./feasible-tree"),o=t("./network-simplex")
;e.exports=function(t){switch(t.graph().ranker){case"network-simplex":u(t);break
;case"tight-tree":!function(t){r(t),i(t)}(t);break;case"longest-path":a(t);break
;default:u(t)}};var a=r;function u(t){o(t)}},{"./feasible-tree":85,
"./network-simplex":87,"./util":88}],87:[function(t,e,n){"use strict"
;var r=t("../lodash"),i=t("./feasible-tree"),o=t("./util").slack,a=t("./util").longestPath,u=t("../graphlib").alg.preorder,c=t("../graphlib").alg.postorder,f=t("../util").simplify
;function s(t){t=f(t),a(t);var e,n=i(t)
;for(d(n),l(n,t);e=v(n);)g(n,t,e,y(n,t,e))}function l(t,e){var n=c(t,t.nodes())
;n=n.slice(0,n.length-1),r.forEach(n,(function(n){!function(t,e,n){
var r=t.node(n).parent;t.edge(n,r).cutvalue=h(t,e,n)}(t,e,n)}))}
function h(t,e,n){var i=t.node(n).parent,o=!0,a=e.edge(n,i),u=0;return a||(o=!1,
a=e.edge(i,n)),u=a.weight,r.forEach(e.nodeEdges(n),(function(r){
var a=r.v===n,c=a?r.w:r.v;if(c!==i){var f=a===o,s=e.edge(r).weight;if(u+=f?s:-s,
function(t,e,n){return t.hasEdge(e,n)}(t,n,c)){var l=t.edge(n,c).cutvalue
;u+=f?-l:l}}})),u}function d(t,e){
arguments.length<2&&(e=t.nodes()[0]),p(t,{},1,e)}function p(t,e,n,i,o){
var a=n,u=t.node(i);return e[i]=!0,r.forEach(t.neighbors(i),(function(o){
r.has(e,o)||(n=p(t,e,n,o,i))})),u.low=a,u.lim=n++,o?u.parent=o:delete u.parent,n
}function v(t){return r.find(t.edges(),(function(e){return t.edge(e).cutvalue<0
}))}function y(t,e,n){var i=n.v,a=n.w;e.hasEdge(i,a)||(i=n.w,a=n.v)
;var u=t.node(i),c=t.node(a),f=u,s=!1;u.lim>c.lim&&(f=c,s=!0)
;var l=r.filter(e.edges(),(function(e){
return s===b(t,t.node(e.v),f)&&s!==b(t,t.node(e.w),f)}))
;return r.minBy(l,(function(t){return o(e,t)}))}function g(t,e,n,i){
var o=n.v,a=n.w
;t.removeEdge(o,a),t.setEdge(i.v,i.w,{}),d(t),l(t,e),function(t,e){
var n=r.find(t.nodes(),(function(t){return!e.node(t).parent})),i=u(t,n)
;i=i.slice(1),r.forEach(i,(function(n){var r=t.node(n).parent,i=e.edge(n,r),o=!1
;i||(i=e.edge(r,n),o=!0),e.node(n).rank=e.node(r).rank+(o?i.minlen:-i.minlen)}))
}(t,e)}function b(t,e,n){return n.low<=e.lim&&e.lim<=n.lim}
e.exports=s,s.initLowLimValues=d,
s.initCutValues=l,s.calcCutValue=h,s.leaveEdge=v,s.enterEdge=y,s.exchangeEdges=g
},{"../graphlib":67,"../lodash":70,"../util":89,"./feasible-tree":85,"./util":88
}],88:[function(t,e,n){"use strict";var r=t("../lodash");e.exports={
longestPath:function(t){var e={};r.forEach(t.sources(),(function n(i){
var o=t.node(i);if(r.has(e,i))return o.rank;e[i]=!0
;var a=r.min(r.map(t.outEdges(i),(function(e){return n(e.w)-t.edge(e).minlen})))
;return a!==Number.POSITIVE_INFINITY&&null!=a||(a=0),o.rank=a}))},
slack:function(t,e){return t.node(e.w).rank-t.node(e.v).rank-t.edge(e).minlen}}
},{"../lodash":70}],89:[function(t,e,n){"use strict"
;var r=t("./lodash"),i=t("./graphlib").Graph;function o(t,e,n,i){var o;do{
o=r.uniqueId(i)}while(t.hasNode(o));return n.dummy=e,t.setNode(o,n),o}
function a(t){return r.max(r.map(t.nodes(),(function(e){var n=t.node(e).rank
;if(!r.isUndefined(n))return n})))}e.exports={addDummyNode:o,
simplify:function(t){var e=(new i).setGraph(t.graph())
;return r.forEach(t.nodes(),(function(n){e.setNode(n,t.node(n))
})),r.forEach(t.edges(),(function(n){var r=e.edge(n.v,n.w)||{weight:0,minlen:1
},i=t.edge(n);e.setEdge(n.v,n.w,{weight:r.weight+i.weight,
minlen:Math.max(r.minlen,i.minlen)})})),e},asNonCompoundGraph:function(t){
var e=new i({multigraph:t.isMultigraph()}).setGraph(t.graph())
;return r.forEach(t.nodes(),(function(n){
t.children(n).length||e.setNode(n,t.node(n))
})),r.forEach(t.edges(),(function(n){e.setEdge(n,t.edge(n))})),e},
successorWeights:function(t){var e=r.map(t.nodes(),(function(e){var n={}
;return r.forEach(t.outEdges(e),(function(e){n[e.w]=(n[e.w]||0)+t.edge(e).weight
})),n}));return r.zipObject(t.nodes(),e)},predecessorWeights:function(t){
var e=r.map(t.nodes(),(function(e){var n={}
;return r.forEach(t.inEdges(e),(function(e){n[e.v]=(n[e.v]||0)+t.edge(e).weight
})),n}));return r.zipObject(t.nodes(),e)},intersectRect:function(t,e){
var n,r,i=t.x,o=t.y,a=e.x-i,u=e.y-o,c=t.width/2,f=t.height/2
;if(!a&&!u)throw new Error("Not possible to find intersection inside of the rectangle")
;Math.abs(u)*c>Math.abs(a)*f?(u<0&&(f=-f),n=f*a/u,r=f):(a<0&&(c=-c),n=c,r=c*u/a)
;return{x:i+n,y:o+r}},buildLayerMatrix:function(t){
var e=r.map(r.range(a(t)+1),(function(){return[]}))
;return r.forEach(t.nodes(),(function(n){var i=t.node(n),o=i.rank
;r.isUndefined(o)||(e[o][i.order]=n)})),e},normalizeRanks:function(t){
var e=r.min(r.map(t.nodes(),(function(e){return t.node(e).rank})))
;r.forEach(t.nodes(),(function(n){var i=t.node(n);r.has(i,"rank")&&(i.rank-=e)
}))},removeEmptyRanks:function(t){var e=r.min(r.map(t.nodes(),(function(e){
return t.node(e).rank}))),n=[];r.forEach(t.nodes(),(function(r){
var i=t.node(r).rank-e;n[i]||(n[i]=[]),n[i].push(r)}))
;var i=0,o=t.graph().nodeRankFactor;r.forEach(n,(function(e,n){
r.isUndefined(e)&&n%o!=0?--i:i&&r.forEach(e,(function(e){t.node(e).rank+=i}))}))
},addBorderNode:function(t,e,n,r){var i={width:0,height:0}
;arguments.length>=4&&(i.rank=n,i.order=r);return o(t,"border",i,e)},maxRank:a,
partition:function(t,e){var n={lhs:[],rhs:[]};return r.forEach(t,(function(t){
e(t)?n.lhs.push(t):n.rhs.push(t)})),n},time:function(t,e){var n=r.now();try{
return e()}finally{console.log(t+" time: "+(r.now()-n)+"ms")}},
notime:function(t,e){return e()}}},{"./graphlib":67,"./lodash":70}],
90:[function(t,e,n){e.exports="0.8.5"},{}],91:[function(t,e,n){var r=t("./lib")
;e.exports={Graph:r.Graph,json:t("./lib/json"),alg:t("./lib/alg"),
version:r.version}},{"./lib":107,"./lib/alg":98,"./lib/json":108}],
92:[function(t,e,n){var r=t("../lodash");e.exports=function(t){var e,n={},i=[]
;function o(i){
r.has(n,i)||(n[i]=!0,e.push(i),r.each(t.successors(i),o),r.each(t.predecessors(i),o))
}return r.each(t.nodes(),(function(t){e=[],o(t),e.length&&i.push(e)})),i}},{
"../lodash":109}],93:[function(t,e,n){var r=t("../lodash")
;e.exports=function(t,e,n){r.isArray(e)||(e=[e])
;var i=(t.isDirected()?t.successors:t.neighbors).bind(t),o=[],a={}
;return r.each(e,(function(e){
if(!t.hasNode(e))throw new Error("Graph does not have node: "+e)
;!function t(e,n,i,o,a,u){
r.has(o,n)||(o[n]=!0,i||u.push(n),r.each(a(n),(function(n){t(e,n,i,o,a,u)
})),i&&u.push(n))}(t,e,"post"===n,a,i,o)})),o}},{"../lodash":109}],
94:[function(t,e,n){var r=t("./dijkstra"),i=t("../lodash")
;e.exports=function(t,e,n){return i.transform(t.nodes(),(function(i,o){
i[o]=r(t,o,e,n)}),{})}},{"../lodash":109,"./dijkstra":95}],95:[function(t,e,n){
var r=t("../lodash"),i=t("../data/priority-queue");e.exports=function(t,e,n,r){
return function(t,e,n,r){var o,a,u={},c=new i,f=function(t){
var e=t.v!==o?t.v:t.w,r=u[e],i=n(t),f=a.distance+i
;if(i<0)throw new Error("dijkstra does not allow negative edge weights. Bad edge: "+t+" Weight: "+i)
;f<r.distance&&(r.distance=f,r.predecessor=o,c.decrease(e,f))}
;t.nodes().forEach((function(t){var n=t===e?0:Number.POSITIVE_INFINITY;u[t]={
distance:n},c.add(t,n)}))
;for(;c.size()>0&&(o=c.removeMin(),(a=u[o]).distance!==Number.POSITIVE_INFINITY);)r(o).forEach(f)
;return u}(t,String(e),n||o,r||function(e){return t.outEdges(e)})}
;var o=r.constant(1)},{"../data/priority-queue":105,"../lodash":109}],
96:[function(t,e,n){var r=t("../lodash"),i=t("./tarjan");e.exports=function(t){
return r.filter(i(t),(function(e){
return e.length>1||1===e.length&&t.hasEdge(e[0],e[0])}))}},{"../lodash":109,
"./tarjan":103}],97:[function(t,e,n){var r=t("../lodash")
;e.exports=function(t,e,n){return function(t,e,n){var r={},i=t.nodes()
;return i.forEach((function(t){r[t]={},r[t][t]={distance:0
},i.forEach((function(e){t!==e&&(r[t][e]={distance:Number.POSITIVE_INFINITY})
})),n(t).forEach((function(n){var i=n.v===t?n.w:n.v,o=e(n);r[t][i]={distance:o,
predecessor:t}}))})),i.forEach((function(t){var e=r[t];i.forEach((function(n){
var o=r[n];i.forEach((function(n){
var r=o[t],i=e[n],a=o[n],u=r.distance+i.distance
;u<a.distance&&(a.distance=u,a.predecessor=i.predecessor)}))}))})),r
}(t,e||i,n||function(e){return t.outEdges(e)})};var i=r.constant(1)},{
"../lodash":109}],98:[function(t,e,n){e.exports={components:t("./components"),
dijkstra:t("./dijkstra"),dijkstraAll:t("./dijkstra-all"),
findCycles:t("./find-cycles"),floydWarshall:t("./floyd-warshall"),
isAcyclic:t("./is-acyclic"),postorder:t("./postorder"),preorder:t("./preorder"),
prim:t("./prim"),tarjan:t("./tarjan"),topsort:t("./topsort")}},{
"./components":92,"./dijkstra":95,"./dijkstra-all":94,"./find-cycles":96,
"./floyd-warshall":97,"./is-acyclic":99,"./postorder":100,"./preorder":101,
"./prim":102,"./tarjan":103,"./topsort":104}],99:[function(t,e,n){
var r=t("./topsort");e.exports=function(t){try{r(t)}catch(e){
if(e instanceof r.CycleException)return!1;throw e}return!0}},{"./topsort":104}],
100:[function(t,e,n){var r=t("./dfs");e.exports=function(t,e){
return r(t,e,"post")}},{"./dfs":93}],101:[function(t,e,n){var r=t("./dfs")
;e.exports=function(t,e){return r(t,e,"pre")}},{"./dfs":93}],
102:[function(t,e,n){
var r=t("../lodash"),i=t("../graph"),o=t("../data/priority-queue")
;e.exports=function(t,e){var n,a=new i,u={},c=new o;function f(t){
var r=t.v===n?t.w:t.v,i=c.priority(r);if(void 0!==i){var o=e(t)
;o<i&&(u[r]=n,c.decrease(r,o))}}if(0===t.nodeCount())return a
;r.each(t.nodes(),(function(t){c.add(t,Number.POSITIVE_INFINITY),a.setNode(t)
})),c.decrease(t.nodes()[0],0);var s=!1;for(;c.size()>0;){
if(n=c.removeMin(),r.has(u,n))a.setEdge(n,u[n]);else{
if(s)throw new Error("Input graph is not connected: "+t);s=!0}
t.nodeEdges(n).forEach(f)}return a}},{"../data/priority-queue":105,
"../graph":106,"../lodash":109}],103:[function(t,e,n){var r=t("../lodash")
;e.exports=function(t){var e=0,n=[],i={},o=[]
;return t.nodes().forEach((function(a){r.has(i,a)||function a(u){var c=i[u]={
onStack:!0,lowlink:e,index:e++}
;if(n.push(u),t.successors(u).forEach((function(t){
r.has(i,t)?i[t].onStack&&(c.lowlink=Math.min(c.lowlink,i[t].index)):(a(t),
c.lowlink=Math.min(c.lowlink,i[t].lowlink))})),c.lowlink===c.index){var f,s=[]
;do{f=n.pop(),i[f].onStack=!1,s.push(f)}while(u!==f);o.push(s)}}(a)})),o}},{
"../lodash":109}],104:[function(t,e,n){var r=t("../lodash");function i(t){
var e={},n={},i=[];if(r.each(t.sinks(),(function a(u){if(r.has(n,u))throw new o
;r.has(e,u)||(n[u]=!0,e[u]=!0,r.each(t.predecessors(u),a),delete n[u],i.push(u))
})),r.size(e)!==t.nodeCount())throw new o;return i}function o(){}
e.exports=i,i.CycleException=o,o.prototype=new Error},{"../lodash":109}],
105:[function(t,e,n){var r=t("../lodash");function i(){
this._arr=[],this._keyIndices={}}e.exports=i,i.prototype.size=function(){
return this._arr.length},i.prototype.keys=function(){
return this._arr.map((function(t){return t.key}))},i.prototype.has=function(t){
return r.has(this._keyIndices,t)},i.prototype.priority=function(t){
var e=this._keyIndices[t];if(void 0!==e)return this._arr[e].priority
},i.prototype.min=function(){
if(0===this.size())throw new Error("Queue underflow");return this._arr[0].key
},i.prototype.add=function(t,e){var n=this._keyIndices
;if(t=String(t),!r.has(n,t)){var i=this._arr,o=i.length;return n[t]=o,i.push({
key:t,priority:e}),this._decrease(o),!0}return!1
},i.prototype.removeMin=function(){this._swap(0,this._arr.length-1)
;var t=this._arr.pop()
;return delete this._keyIndices[t.key],this._heapify(0),t.key
},i.prototype.decrease=function(t,e){var n=this._keyIndices[t]
;if(e>this._arr[n].priority)throw new Error("New priority is greater than current priority. Key: "+t+" Old: "+this._arr[n].priority+" New: "+e)
;this._arr[n].priority=e,this._decrease(n)},i.prototype._heapify=function(t){
var e=this._arr,n=2*t,r=n+1,i=t
;n<e.length&&(i=e[n].priority<e[i].priority?n:i,r<e.length&&(i=e[r].priority<e[i].priority?r:i),
i!==t&&(this._swap(t,i),this._heapify(i)))},i.prototype._decrease=function(t){
for(var e,n=this._arr,r=n[t].priority;0!==t&&!(n[e=t>>1].priority<r);)this._swap(t,e),
t=e},i.prototype._swap=function(t,e){
var n=this._arr,r=this._keyIndices,i=n[t],o=n[e]
;n[t]=o,n[e]=i,r[o.key]=t,r[i.key]=e}},{"../lodash":109}],106:[function(t,e,n){
"use strict";var r=t("./lodash");e.exports=o;var i="\0";function o(t){
this._isDirected=!r.has(t,"directed")||t.directed,
this._isMultigraph=!!r.has(t,"multigraph")&&t.multigraph,
this._isCompound=!!r.has(t,"compound")&&t.compound,
this._label=void 0,this._defaultNodeLabelFn=r.constant(void 0),
this._defaultEdgeLabelFn=r.constant(void 0),
this._nodes={},this._isCompound&&(this._parent={},
this._children={},this._children["\0"]={}),
this._in={},this._preds={},this._out={},
this._sucs={},this._edgeObjs={},this._edgeLabels={}}function a(t,e){
t[e]?t[e]++:t[e]=1}function u(t,e){--t[e]||delete t[e]}function c(t,e,n,i){
var o=""+e,a=""+n;if(!t&&o>a){var u=o;o=a,a=u}
return o+""+a+""+(r.isUndefined(i)?"\0":i)}function f(t,e,n,r){
var i=""+e,o=""+n;if(!t&&i>o){var a=i;i=o,o=a}var u={v:i,w:o}
;return r&&(u.name=r),u}function s(t,e){return c(t,e.v,e.w,e.name)}
o.prototype._nodeCount=0,
o.prototype._edgeCount=0,o.prototype.isDirected=function(){
return this._isDirected},o.prototype.isMultigraph=function(){
return this._isMultigraph},o.prototype.isCompound=function(){
return this._isCompound},o.prototype.setGraph=function(t){
return this._label=t,this},o.prototype.graph=function(){return this._label
},o.prototype.setDefaultNodeLabel=function(t){
return r.isFunction(t)||(t=r.constant(t)),this._defaultNodeLabelFn=t,this
},o.prototype.nodeCount=function(){return this._nodeCount
},o.prototype.nodes=function(){return r.keys(this._nodes)
},o.prototype.sources=function(){var t=this
;return r.filter(this.nodes(),(function(e){return r.isEmpty(t._in[e])}))
},o.prototype.sinks=function(){var t=this
;return r.filter(this.nodes(),(function(e){return r.isEmpty(t._out[e])}))
},o.prototype.setNodes=function(t,e){var n=arguments,i=this
;return r.each(t,(function(t){n.length>1?i.setNode(t,e):i.setNode(t)})),this
},o.prototype.setNode=function(t,e){
return r.has(this._nodes,t)?(arguments.length>1&&(this._nodes[t]=e),
this):(this._nodes[t]=arguments.length>1?e:this._defaultNodeLabelFn(t),
this._isCompound&&(this._parent[t]=i,
this._children[t]={},this._children["\0"][t]=!0),
this._in[t]={},this._preds[t]={},
this._out[t]={},this._sucs[t]={},++this._nodeCount,this)
},o.prototype.node=function(t){return this._nodes[t]
},o.prototype.hasNode=function(t){return r.has(this._nodes,t)
},o.prototype.removeNode=function(t){var e=this;if(r.has(this._nodes,t)){
var n=function(t){e.removeEdge(e._edgeObjs[t])}
;delete this._nodes[t],this._isCompound&&(this._removeFromParentsChildList(t),
delete this._parent[t],r.each(this.children(t),(function(t){e.setParent(t)
})),delete this._children[t]),
r.each(r.keys(this._in[t]),n),delete this._in[t],delete this._preds[t],
r.each(r.keys(this._out[t]),n),
delete this._out[t],delete this._sucs[t],--this._nodeCount}return this
},o.prototype.setParent=function(t,e){
if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph")
;if(r.isUndefined(e))e=i;else{
for(var n=e+="";!r.isUndefined(n);n=this.parent(n))if(n===t)throw new Error("Setting "+e+" as parent of "+t+" would create a cycle")
;this.setNode(e)}
return this.setNode(t),this._removeFromParentsChildList(t),this._parent[t]=e,
this._children[e][t]=!0,this
},o.prototype._removeFromParentsChildList=function(t){
delete this._children[this._parent[t]][t]},o.prototype.parent=function(t){
if(this._isCompound){var e=this._parent[t];if(e!==i)return e}
},o.prototype.children=function(t){if(r.isUndefined(t)&&(t=i),this._isCompound){
var e=this._children[t];if(e)return r.keys(e)}else{if(t===i)return this.nodes()
;if(this.hasNode(t))return[]}},o.prototype.predecessors=function(t){
var e=this._preds[t];if(e)return r.keys(e)},o.prototype.successors=function(t){
var e=this._sucs[t];if(e)return r.keys(e)},o.prototype.neighbors=function(t){
var e=this.predecessors(t);if(e)return r.union(e,this.successors(t))
},o.prototype.isLeaf=function(t){
return 0===(this.isDirected()?this.successors(t):this.neighbors(t)).length
},o.prototype.filterNodes=function(t){var e=new this.constructor({
directed:this._isDirected,multigraph:this._isMultigraph,
compound:this._isCompound});e.setGraph(this.graph());var n=this
;r.each(this._nodes,(function(n,r){t(r)&&e.setNode(r,n)
})),r.each(this._edgeObjs,(function(t){
e.hasNode(t.v)&&e.hasNode(t.w)&&e.setEdge(t,n.edge(t))}));var i={}
;return this._isCompound&&r.each(e.nodes(),(function(t){
e.setParent(t,function t(r){var o=n.parent(r)
;return void 0===o||e.hasNode(o)?(i[r]=o,o):o in i?i[o]:t(o)}(t))})),e
},o.prototype.setDefaultEdgeLabel=function(t){
return r.isFunction(t)||(t=r.constant(t)),this._defaultEdgeLabelFn=t,this
},o.prototype.edgeCount=function(){return this._edgeCount
},o.prototype.edges=function(){return r.values(this._edgeObjs)
},o.prototype.setPath=function(t,e){var n=this,i=arguments
;return r.reduce(t,(function(t,r){
return i.length>1?n.setEdge(t,r,e):n.setEdge(t,r),r})),this
},o.prototype.setEdge=function(){var t,e,n,i,o=!1,u=arguments[0]
;"object"==typeof u&&null!==u&&"v"in u?(t=u.v,
e=u.w,n=u.name,2===arguments.length&&(i=arguments[1],o=!0)):(t=u,e=arguments[1],
n=arguments[3],
arguments.length>2&&(i=arguments[2],o=!0)),t=""+t,e=""+e,r.isUndefined(n)||(n=""+n)
;var s=c(this._isDirected,t,e,n)
;if(r.has(this._edgeLabels,s))return o&&(this._edgeLabels[s]=i),this
;if(!r.isUndefined(n)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false")
;this.setNode(t),
this.setNode(e),this._edgeLabels[s]=o?i:this._defaultEdgeLabelFn(t,e,n)
;var l=f(this._isDirected,t,e,n)
;return t=l.v,e=l.w,Object.freeze(l),this._edgeObjs[s]=l,
a(this._preds[e],t),a(this._sucs[t],e),
this._in[e][s]=l,this._out[t][s]=l,this._edgeCount++,this
},o.prototype.edge=function(t,e,n){
var r=1===arguments.length?s(this._isDirected,arguments[0]):c(this._isDirected,t,e,n)
;return this._edgeLabels[r]},o.prototype.hasEdge=function(t,e,n){
var i=1===arguments.length?s(this._isDirected,arguments[0]):c(this._isDirected,t,e,n)
;return r.has(this._edgeLabels,i)},o.prototype.removeEdge=function(t,e,n){
var r=1===arguments.length?s(this._isDirected,arguments[0]):c(this._isDirected,t,e,n),i=this._edgeObjs[r]
;return i&&(t=i.v,
e=i.w,delete this._edgeLabels[r],delete this._edgeObjs[r],u(this._preds[e],t),
u(this._sucs[t],e),
delete this._in[e][r],delete this._out[t][r],this._edgeCount--),this
},o.prototype.inEdges=function(t,e){var n=this._in[t];if(n){var i=r.values(n)
;return e?r.filter(i,(function(t){return t.v===e})):i}
},o.prototype.outEdges=function(t,e){var n=this._out[t];if(n){var i=r.values(n)
;return e?r.filter(i,(function(t){return t.w===e})):i}
},o.prototype.nodeEdges=function(t,e){var n=this.inEdges(t,e)
;if(n)return n.concat(this.outEdges(t,e))}},{"./lodash":109}],
107:[function(t,e,n){e.exports={Graph:t("./graph"),version:t("./version")}},{
"./graph":106,"./version":110}],108:[function(t,e,n){
var r=t("./lodash"),i=t("./graph");function o(t){
return r.map(t.nodes(),(function(e){var n=t.node(e),i=t.parent(e),o={v:e}
;return r.isUndefined(n)||(o.value=n),r.isUndefined(i)||(o.parent=i),o}))}
function a(t){return r.map(t.edges(),(function(e){var n=t.edge(e),i={v:e.v,w:e.w
};return r.isUndefined(e.name)||(i.name=e.name),r.isUndefined(n)||(i.value=n),i
}))}e.exports={write:function(t){var e={options:{directed:t.isDirected(),
multigraph:t.isMultigraph(),compound:t.isCompound()},nodes:o(t),edges:a(t)}
;r.isUndefined(t.graph())||(e.value=r.clone(t.graph()));return e},
read:function(t){var e=new i(t.options).setGraph(t.value)
;return r.each(t.nodes,(function(t){
e.setNode(t.v,t.value),t.parent&&e.setParent(t.v,t.parent)
})),r.each(t.edges,(function(t){e.setEdge({v:t.v,w:t.w,name:t.name},t.value)})),
e}}},{"./graph":106,"./lodash":109}],109:[function(t,e,n){var r
;if("function"==typeof t)try{r={clone:t("lodash/clone"),
constant:t("lodash/constant"),each:t("lodash/each"),filter:t("lodash/filter"),
has:t("lodash/has"),isArray:t("lodash/isArray"),isEmpty:t("lodash/isEmpty"),
isFunction:t("lodash/isFunction"),isUndefined:t("lodash/isUndefined"),
keys:t("lodash/keys"),map:t("lodash/map"),reduce:t("lodash/reduce"),
size:t("lodash/size"),transform:t("lodash/transform"),union:t("lodash/union"),
values:t("lodash/values")}}catch(i){}r||(r=window._),e.exports=r},{
"lodash/clone":286,"lodash/constant":288,"lodash/each":290,"lodash/filter":292,
"lodash/has":299,"lodash/isArray":303,"lodash/isEmpty":307,
"lodash/isFunction":308,"lodash/isUndefined":318,"lodash/keys":319,
"lodash/map":322,"lodash/reduce":334,"lodash/size":335,"lodash/transform":344,
"lodash/union":345,"lodash/values":347}],110:[function(t,e,n){e.exports="2.1.8"
},{}],111:[function(t,e,n){var r=t("./_getNative")(t("./_root"),"DataView")
;e.exports=r},{"./_getNative":223,"./_root":268}],112:[function(t,e,n){
var r=t("./_hashClear"),i=t("./_hashDelete"),o=t("./_hashGet"),a=t("./_hashHas"),u=t("./_hashSet")
;function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e]
;this.set(r[0],r[1])}}
c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=o,
c.prototype.has=a,c.prototype.set=u,e.exports=c},{"./_hashClear":232,
"./_hashDelete":233,"./_hashGet":234,"./_hashHas":235,"./_hashSet":236}],
113:[function(t,e,n){
var r=t("./_listCacheClear"),i=t("./_listCacheDelete"),o=t("./_listCacheGet"),a=t("./_listCacheHas"),u=t("./_listCacheSet")
;function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e]
;this.set(r[0],r[1])}}
c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=o,
c.prototype.has=a,c.prototype.set=u,e.exports=c},{"./_listCacheClear":248,
"./_listCacheDelete":249,"./_listCacheGet":250,"./_listCacheHas":251,
"./_listCacheSet":252}],114:[function(t,e,n){
var r=t("./_getNative")(t("./_root"),"Map");e.exports=r},{"./_getNative":223,
"./_root":268}],115:[function(t,e,n){
var r=t("./_mapCacheClear"),i=t("./_mapCacheDelete"),o=t("./_mapCacheGet"),a=t("./_mapCacheHas"),u=t("./_mapCacheSet")
;function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e]
;this.set(r[0],r[1])}}
c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=o,
c.prototype.has=a,c.prototype.set=u,e.exports=c},{"./_mapCacheClear":253,
"./_mapCacheDelete":254,"./_mapCacheGet":255,"./_mapCacheHas":256,
"./_mapCacheSet":257}],116:[function(t,e,n){
var r=t("./_getNative")(t("./_root"),"Promise");e.exports=r},{
"./_getNative":223,"./_root":268}],117:[function(t,e,n){
var r=t("./_getNative")(t("./_root"),"Set");e.exports=r},{"./_getNative":223,
"./_root":268}],118:[function(t,e,n){
var r=t("./_MapCache"),i=t("./_setCacheAdd"),o=t("./_setCacheHas")
;function a(t){var e=-1,n=null==t?0:t.length
;for(this.__data__=new r;++e<n;)this.add(t[e])}
a.prototype.add=a.prototype.push=i,a.prototype.has=o,e.exports=a},{
"./_MapCache":115,"./_setCacheAdd":270,"./_setCacheHas":271}],
119:[function(t,e,n){
var r=t("./_ListCache"),i=t("./_stackClear"),o=t("./_stackDelete"),a=t("./_stackGet"),u=t("./_stackHas"),c=t("./_stackSet")
;function f(t){var e=this.__data__=new r(t);this.size=e.size}
f.prototype.clear=i,
f.prototype.delete=o,f.prototype.get=a,f.prototype.has=u,f.prototype.set=c,
e.exports=f},{"./_ListCache":113,"./_stackClear":275,"./_stackDelete":276,
"./_stackGet":277,"./_stackHas":278,"./_stackSet":279}],120:[function(t,e,n){
var r=t("./_root").Symbol;e.exports=r},{"./_root":268}],121:[function(t,e,n){
var r=t("./_root").Uint8Array;e.exports=r},{"./_root":268}],
122:[function(t,e,n){var r=t("./_getNative")(t("./_root"),"WeakMap");e.exports=r
},{"./_getNative":223,"./_root":268}],123:[function(t,e,n){
e.exports=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:
return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:
return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},{}],124:[function(t,e,n){
e.exports=function(t,e){
for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}},{}],
125:[function(t,e,n){e.exports=function(t,e){
for(var n=-1,r=null==t?0:t.length,i=0,o=[];++n<r;){var a=t[n]
;e(a,n,t)&&(o[i++]=a)}return o}},{}],126:[function(t,e,n){
var r=t("./_baseIndexOf");e.exports=function(t,e){
return!!(null==t?0:t.length)&&r(t,e,0)>-1}},{"./_baseIndexOf":155}],
127:[function(t,e,n){e.exports=function(t,e,n){
for(var r=-1,i=null==t?0:t.length;++r<i;)if(n(e,t[r]))return!0;return!1}},{}],
128:[function(t,e,n){
var r=t("./_baseTimes"),i=t("./isArguments"),o=t("./isArray"),a=t("./isBuffer"),u=t("./_isIndex"),c=t("./isTypedArray"),f=Object.prototype.hasOwnProperty
;e.exports=function(t,e){
var n=o(t),s=!n&&i(t),l=!n&&!s&&a(t),h=!n&&!s&&!l&&c(t),d=n||s||l||h,p=d?r(t.length,String):[],v=p.length
;for(var y in t)!e&&!f.call(t,y)||d&&("length"==y||l&&("offset"==y||"parent"==y)||h&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||u(y,v))||p.push(y)
;return p}},{"./_baseTimes":185,"./_isIndex":241,"./isArguments":302,
"./isArray":303,"./isBuffer":306,"./isTypedArray":317}],129:[function(t,e,n){
e.exports=function(t,e){
for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}
},{}],130:[function(t,e,n){e.exports=function(t,e){
for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}},{}],
131:[function(t,e,n){e.exports=function(t,e,n,r){var i=-1,o=null==t?0:t.length
;for(r&&o&&(n=t[++i]);++i<o;)n=e(n,t[i],i,t);return n}},{}],
132:[function(t,e,n){e.exports=function(t,e){
for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}},{}],
133:[function(t,e,n){var r=t("./_baseProperty")("length");e.exports=r},{
"./_baseProperty":177}],134:[function(t,e,n){
var r=t("./_baseAssignValue"),i=t("./eq");e.exports=function(t,e,n){
(void 0!==n&&!i(t[e],n)||void 0===n&&!(e in t))&&r(t,e,n)}},{
"./_baseAssignValue":139,"./eq":291}],135:[function(t,e,n){
var r=t("./_baseAssignValue"),i=t("./eq"),o=Object.prototype.hasOwnProperty
;e.exports=function(t,e,n){var a=t[e]
;o.call(t,e)&&i(a,n)&&(void 0!==n||e in t)||r(t,e,n)}},{
"./_baseAssignValue":139,"./eq":291}],136:[function(t,e,n){var r=t("./eq")
;e.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n
;return-1}},{"./eq":291}],137:[function(t,e,n){
var r=t("./_copyObject"),i=t("./keys");e.exports=function(t,e){
return t&&r(e,i(e),t)}},{"./_copyObject":203,"./keys":319}],
138:[function(t,e,n){var r=t("./_copyObject"),i=t("./keysIn")
;e.exports=function(t,e){return t&&r(e,i(e),t)}},{"./_copyObject":203,
"./keysIn":320}],139:[function(t,e,n){var r=t("./_defineProperty")
;e.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,
enumerable:!0,value:n,writable:!0}):t[e]=n}},{"./_defineProperty":213}],
140:[function(t,e,n){
var r=t("./_Stack"),i=t("./_arrayEach"),o=t("./_assignValue"),a=t("./_baseAssign"),u=t("./_baseAssignIn"),c=t("./_cloneBuffer"),f=t("./_copyArray"),s=t("./_copySymbols"),l=t("./_copySymbolsIn"),h=t("./_getAllKeys"),d=t("./_getAllKeysIn"),p=t("./_getTag"),v=t("./_initCloneArray"),y=t("./_initCloneByTag"),g=t("./_initCloneObject"),b=t("./isArray"),_=t("./isBuffer"),m=t("./isMap"),x=t("./isObject"),w=t("./isSet"),M=t("./keys"),E="[object Arguments]",k="[object Function]",A="[object Object]",S={}
;S[E]=S["[object Array]"]=S["[object ArrayBuffer]"]=S["[object DataView]"]=S["[object Boolean]"]=S["[object Date]"]=S["[object Float32Array]"]=S["[object Float64Array]"]=S["[object Int8Array]"]=S["[object Int16Array]"]=S["[object Int32Array]"]=S["[object Map]"]=S["[object Number]"]=S[A]=S["[object RegExp]"]=S["[object Set]"]=S["[object String]"]=S["[object Symbol]"]=S["[object Uint8Array]"]=S["[object Uint8ClampedArray]"]=S["[object Uint16Array]"]=S["[object Uint32Array]"]=!0,
S["[object Error]"]=S[k]=S["[object WeakMap]"]=!1,
e.exports=function t(e,n,j,N,T,C){var O,P=1&n,I=2&n,L=4&n
;if(j&&(O=T?j(e,N,T,C):j(e)),void 0!==O)return O;if(!x(e))return e;var R=b(e)
;if(R){if(O=v(e),!P)return f(e,O)}else{
var z=p(e),D=z==k||"[object GeneratorFunction]"==z;if(_(e))return c(e,P)
;if(z==A||z==E||D&&!T){if(O=I||D?{}:g(e),!P)return I?l(e,u(O,e)):s(e,a(O,e))
}else{if(!S[z])return T?e:{};O=y(e,z,P)}}C||(C=new r);var F=C.get(e)
;if(F)return F;C.set(e,O),w(e)?e.forEach((function(r){O.add(t(r,n,j,r,e,C))
})):m(e)&&e.forEach((function(r,i){O.set(i,t(r,n,j,i,e,C))}))
;var B=L?I?d:h:I?keysIn:M,q=R?void 0:B(e);return i(q||e,(function(r,i){
q&&(r=e[i=r]),o(O,i,t(r,n,j,i,e,C))})),O}},{"./_Stack":119,"./_arrayEach":124,
"./_assignValue":135,"./_baseAssign":137,"./_baseAssignIn":138,
"./_cloneBuffer":195,"./_copyArray":202,"./_copySymbols":204,
"./_copySymbolsIn":205,"./_getAllKeys":219,"./_getAllKeysIn":220,
"./_getTag":228,"./_initCloneArray":237,"./_initCloneByTag":238,
"./_initCloneObject":239,"./isArray":303,"./isBuffer":306,"./isMap":310,
"./isObject":311,"./isSet":314,"./keys":319}],141:[function(t,e,n){
var r=t("./isObject"),i=Object.create,o=function(){function t(){}
return function(e){if(!r(e))return{};if(i)return i(e);t.prototype=e;var n=new t
;return t.prototype=void 0,n}}();e.exports=o},{"./isObject":311}],
142:[function(t,e,n){var r=t("./_baseForOwn"),i=t("./_createBaseEach")(r)
;e.exports=i},{"./_baseForOwn":148,"./_createBaseEach":208}],
143:[function(t,e,n){var r=t("./isSymbol");e.exports=function(t,e,n){
for(var i=-1,o=t.length;++i<o;){var a=t[i],u=e(a)
;if(null!=u&&(void 0===c?u==u&&!r(u):n(u,c)))var c=u,f=a}return f}},{
"./isSymbol":316}],144:[function(t,e,n){var r=t("./_baseEach")
;e.exports=function(t,e){var n=[];return r(t,(function(t,r,i){
e(t,r,i)&&n.push(t)})),n}},{"./_baseEach":142}],145:[function(t,e,n){
e.exports=function(t,e,n,r){
for(var i=t.length,o=n+(r?1:-1);r?o--:++o<i;)if(e(t[o],o,t))return o;return-1}
},{}],146:[function(t,e,n){var r=t("./_arrayPush"),i=t("./_isFlattenable")
;e.exports=function t(e,n,o,a,u){var c=-1,f=e.length
;for(o||(o=i),u||(u=[]);++c<f;){var s=e[c]
;n>0&&o(s)?n>1?t(s,n-1,o,a,u):r(u,s):a||(u[u.length]=s)}return u}},{
"./_arrayPush":130,"./_isFlattenable":240}],147:[function(t,e,n){
var r=t("./_createBaseFor")();e.exports=r},{"./_createBaseFor":209}],
148:[function(t,e,n){var r=t("./_baseFor"),i=t("./keys")
;e.exports=function(t,e){return t&&r(t,e,i)}},{"./_baseFor":147,"./keys":319}],
149:[function(t,e,n){var r=t("./_castPath"),i=t("./_toKey")
;e.exports=function(t,e){
for(var n=0,o=(e=r(e,t)).length;null!=t&&n<o;)t=t[i(e[n++])]
;return n&&n==o?t:void 0}},{"./_castPath":193,"./_toKey":283}],
150:[function(t,e,n){var r=t("./_arrayPush"),i=t("./isArray")
;e.exports=function(t,e,n){var o=e(t);return i(t)?o:r(o,n(t))}},{
"./_arrayPush":130,"./isArray":303}],151:[function(t,e,n){
var r=t("./_Symbol"),i=t("./_getRawTag"),o=t("./_objectToString"),a=r?r.toStringTag:void 0
;e.exports=function(t){
return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?i(t):o(t)
}},{"./_Symbol":120,"./_getRawTag":225,"./_objectToString":265}],
152:[function(t,e,n){e.exports=function(t,e){return t>e}},{}],
153:[function(t,e,n){var r=Object.prototype.hasOwnProperty
;e.exports=function(t,e){return null!=t&&r.call(t,e)}},{}],154:[function(t,e,n){
e.exports=function(t,e){return null!=t&&e in Object(t)}},{}],
155:[function(t,e,n){
var r=t("./_baseFindIndex"),i=t("./_baseIsNaN"),o=t("./_strictIndexOf")
;e.exports=function(t,e,n){return e==e?o(t,e,n):r(t,i,n)}},{
"./_baseFindIndex":145,"./_baseIsNaN":161,"./_strictIndexOf":280}],
156:[function(t,e,n){var r=t("./_baseGetTag"),i=t("./isObjectLike")
;e.exports=function(t){return i(t)&&"[object Arguments]"==r(t)}},{
"./_baseGetTag":151,"./isObjectLike":312}],157:[function(t,e,n){
var r=t("./_baseIsEqualDeep"),i=t("./isObjectLike")
;e.exports=function t(e,n,o,a,u){
return e===n||(null==e||null==n||!i(e)&&!i(n)?e!=e&&n!=n:r(e,n,o,a,t,u))}},{
"./_baseIsEqualDeep":158,"./isObjectLike":312}],158:[function(t,e,n){
var r=t("./_Stack"),i=t("./_equalArrays"),o=t("./_equalByTag"),a=t("./_equalObjects"),u=t("./_getTag"),c=t("./isArray"),f=t("./isBuffer"),s=t("./isTypedArray"),l="[object Arguments]",h="[object Array]",d="[object Object]",p=Object.prototype.hasOwnProperty
;e.exports=function(t,e,n,v,y,g){
var b=c(t),_=c(e),m=b?h:u(t),x=_?h:u(e),w=(m=m==l?d:m)==d,M=(x=x==l?d:x)==d,E=m==x
;if(E&&f(t)){if(!f(e))return!1;b=!0,w=!1}
if(E&&!w)return g||(g=new r),b||s(t)?i(t,e,n,v,y,g):o(t,e,m,n,v,y,g);if(!(1&n)){
var k=w&&p.call(t,"__wrapped__"),A=M&&p.call(e,"__wrapped__");if(k||A){
var S=k?t.value():t,j=A?e.value():e;return g||(g=new r),y(S,j,n,v,g)}}
return!!E&&(g||(g=new r),a(t,e,n,v,y,g))}},{"./_Stack":119,"./_equalArrays":214,
"./_equalByTag":215,"./_equalObjects":216,"./_getTag":228,"./isArray":303,
"./isBuffer":306,"./isTypedArray":317}],159:[function(t,e,n){
var r=t("./_getTag"),i=t("./isObjectLike");e.exports=function(t){
return i(t)&&"[object Map]"==r(t)}},{"./_getTag":228,"./isObjectLike":312}],
160:[function(t,e,n){var r=t("./_Stack"),i=t("./_baseIsEqual")
;e.exports=function(t,e,n,o){var a=n.length,u=a,c=!o;if(null==t)return!u
;for(t=Object(t);a--;){var f=n[a];if(c&&f[2]?f[1]!==t[f[0]]:!(f[0]in t))return!1
}for(;++a<u;){var s=(f=n[a])[0],l=t[s],h=f[1];if(c&&f[2]){
if(void 0===l&&!(s in t))return!1}else{var d=new r;if(o)var p=o(l,h,s,t,e,d)
;if(!(void 0===p?i(h,l,3,o,d):p))return!1}}return!0}},{"./_Stack":119,
"./_baseIsEqual":157}],161:[function(t,e,n){e.exports=function(t){return t!=t}
},{}],162:[function(t,e,n){
var r=t("./isFunction"),i=t("./_isMasked"),o=t("./isObject"),a=t("./_toSource"),u=/^\[object .+?Constructor\]$/,c=Function.prototype,f=Object.prototype,s=c.toString,l=f.hasOwnProperty,h=RegExp("^"+s.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$")
;e.exports=function(t){return!(!o(t)||i(t))&&(r(t)?h:u).test(a(t))}},{
"./_isMasked":245,"./_toSource":284,"./isFunction":308,"./isObject":311}],
163:[function(t,e,n){var r=t("./_getTag"),i=t("./isObjectLike")
;e.exports=function(t){return i(t)&&"[object Set]"==r(t)}},{"./_getTag":228,
"./isObjectLike":312}],164:[function(t,e,n){
var r=t("./_baseGetTag"),i=t("./isLength"),o=t("./isObjectLike"),a={}
;a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,
a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,
e.exports=function(t){return o(t)&&i(t.length)&&!!a[r(t)]}},{
"./_baseGetTag":151,"./isLength":309,"./isObjectLike":312}],
165:[function(t,e,n){
var r=t("./_baseMatches"),i=t("./_baseMatchesProperty"),o=t("./identity"),a=t("./isArray"),u=t("./property")
;e.exports=function(t){
return"function"==typeof t?t:null==t?o:"object"==typeof t?a(t)?i(t[0],t[1]):r(t):u(t)
}},{"./_baseMatches":170,"./_baseMatchesProperty":171,"./identity":301,
"./isArray":303,"./property":332}],166:[function(t,e,n){
var r=t("./_isPrototype"),i=t("./_nativeKeys"),o=Object.prototype.hasOwnProperty
;e.exports=function(t){if(!r(t))return i(t);var e=[]
;for(var n in Object(t))o.call(t,n)&&"constructor"!=n&&e.push(n);return e}},{
"./_isPrototype":246,"./_nativeKeys":262}],167:[function(t,e,n){
var r=t("./isObject"),i=t("./_isPrototype"),o=t("./_nativeKeysIn"),a=Object.prototype.hasOwnProperty
;e.exports=function(t){if(!r(t))return o(t);var e=i(t),n=[]
;for(var u in t)("constructor"!=u||!e&&a.call(t,u))&&n.push(u);return n}},{
"./_isPrototype":246,"./_nativeKeysIn":263,"./isObject":311}],
168:[function(t,e,n){e.exports=function(t,e){return t<e}},{}],
169:[function(t,e,n){var r=t("./_baseEach"),i=t("./isArrayLike")
;e.exports=function(t,e){var n=-1,o=i(t)?Array(t.length):[]
;return r(t,(function(t,r,i){o[++n]=e(t,r,i)})),o}},{"./_baseEach":142,
"./isArrayLike":304}],170:[function(t,e,n){
var r=t("./_baseIsMatch"),i=t("./_getMatchData"),o=t("./_matchesStrictComparable")
;e.exports=function(t){var e=i(t)
;return 1==e.length&&e[0][2]?o(e[0][0],e[0][1]):function(n){
return n===t||r(n,t,e)}}},{"./_baseIsMatch":160,"./_getMatchData":222,
"./_matchesStrictComparable":259}],171:[function(t,e,n){
var r=t("./_baseIsEqual"),i=t("./get"),o=t("./hasIn"),a=t("./_isKey"),u=t("./_isStrictComparable"),c=t("./_matchesStrictComparable"),f=t("./_toKey")
;e.exports=function(t,e){return a(t)&&u(e)?c(f(t),e):function(n){var a=i(n,t)
;return void 0===a&&a===e?o(n,t):r(e,a,3)}}},{"./_baseIsEqual":157,
"./_isKey":243,"./_isStrictComparable":247,"./_matchesStrictComparable":259,
"./_toKey":283,"./get":298,"./hasIn":300}],172:[function(t,e,n){
var r=t("./_Stack"),i=t("./_assignMergeValue"),o=t("./_baseFor"),a=t("./_baseMergeDeep"),u=t("./isObject"),c=t("./keysIn"),f=t("./_safeGet")
;e.exports=function t(e,n,s,l,h){e!==n&&o(n,(function(o,c){
if(h||(h=new r),u(o))a(e,n,c,s,t,l,h);else{var d=l?l(f(e,c),o,c+"",e,n,h):void 0
;void 0===d&&(d=o),i(e,c,d)}}),c)}},{"./_Stack":119,"./_assignMergeValue":134,
"./_baseFor":147,"./_baseMergeDeep":173,"./_safeGet":269,"./isObject":311,
"./keysIn":320}],173:[function(t,e,n){
var r=t("./_assignMergeValue"),i=t("./_cloneBuffer"),o=t("./_cloneTypedArray"),a=t("./_copyArray"),u=t("./_initCloneObject"),c=t("./isArguments"),f=t("./isArray"),s=t("./isArrayLikeObject"),l=t("./isBuffer"),h=t("./isFunction"),d=t("./isObject"),p=t("./isPlainObject"),v=t("./isTypedArray"),y=t("./_safeGet"),g=t("./toPlainObject")
;e.exports=function(t,e,n,b,_,m,x){var w=y(t,n),M=y(e,n),E=x.get(M)
;if(E)r(t,n,E);else{var k=m?m(w,M,n+"",t,e,x):void 0,A=void 0===k;if(A){
var S=f(M),j=!S&&l(M),N=!S&&!j&&v(M)
;k=M,S||j||N?f(w)?k=w:s(w)?k=a(w):j?(A=!1,k=i(M,!0)):N?(A=!1,
k=o(M,!0)):k=[]:p(M)||c(M)?(k=w,c(w)?k=g(w):d(w)&&!h(w)||(k=u(M))):A=!1}
A&&(x.set(M,k),_(k,M,b,m,x),x.delete(M)),r(t,n,k)}}},{"./_assignMergeValue":134,
"./_cloneBuffer":195,"./_cloneTypedArray":199,"./_copyArray":202,
"./_initCloneObject":239,"./_safeGet":269,"./isArguments":302,"./isArray":303,
"./isArrayLikeObject":305,"./isBuffer":306,"./isFunction":308,"./isObject":311,
"./isPlainObject":313,"./isTypedArray":317,"./toPlainObject":342}],
174:[function(t,e,n){
var r=t("./_arrayMap"),i=t("./_baseIteratee"),o=t("./_baseMap"),a=t("./_baseSortBy"),u=t("./_baseUnary"),c=t("./_compareMultiple"),f=t("./identity")
;e.exports=function(t,e,n){var s=-1;e=r(e.length?e:[f],u(i))
;var l=o(t,(function(t,n,i){return{criteria:r(e,(function(e){return e(t)})),
index:++s,value:t}}));return a(l,(function(t,e){return c(t,e,n)}))}},{
"./_arrayMap":129,"./_baseIteratee":165,"./_baseMap":169,"./_baseSortBy":184,
"./_baseUnary":187,"./_compareMultiple":201,"./identity":301}],
175:[function(t,e,n){var r=t("./_basePickBy"),i=t("./hasIn")
;e.exports=function(t,e){return r(t,e,(function(e,n){return i(t,n)}))}},{
"./_basePickBy":176,"./hasIn":300}],176:[function(t,e,n){
var r=t("./_baseGet"),i=t("./_baseSet"),o=t("./_castPath")
;e.exports=function(t,e,n){for(var a=-1,u=e.length,c={};++a<u;){
var f=e[a],s=r(t,f);n(s,f)&&i(c,o(f,t),s)}return c}},{"./_baseGet":149,
"./_baseSet":182,"./_castPath":193}],177:[function(t,e,n){e.exports=function(t){
return function(e){return null==e?void 0:e[t]}}},{}],178:[function(t,e,n){
var r=t("./_baseGet");e.exports=function(t){return function(e){return r(e,t)}}
},{"./_baseGet":149}],179:[function(t,e,n){var r=Math.ceil,i=Math.max
;e.exports=function(t,e,n,o){
for(var a=-1,u=i(r((e-t)/(n||1)),0),c=Array(u);u--;)c[o?u:++a]=t,t+=n;return c}
},{}],180:[function(t,e,n){e.exports=function(t,e,n,r,i){
return i(t,(function(t,i,o){n=r?(r=!1,t):e(n,t,i,o)})),n}},{}],
181:[function(t,e,n){
var r=t("./identity"),i=t("./_overRest"),o=t("./_setToString")
;e.exports=function(t,e){return o(i(t,e,r),t+"")}},{"./_overRest":267,
"./_setToString":273,"./identity":301}],182:[function(t,e,n){
var r=t("./_assignValue"),i=t("./_castPath"),o=t("./_isIndex"),a=t("./isObject"),u=t("./_toKey")
;e.exports=function(t,e,n,c){if(!a(t))return t
;for(var f=-1,s=(e=i(e,t)).length,l=s-1,h=t;null!=h&&++f<s;){var d=u(e[f]),p=n
;if(f!=l){var v=h[d];void 0===(p=c?c(v,d,h):void 0)&&(p=a(v)?v:o(e[f+1])?[]:{})}
r(h,d,p),h=h[d]}return t}},{"./_assignValue":135,"./_castPath":193,
"./_isIndex":241,"./_toKey":283,"./isObject":311}],183:[function(t,e,n){
var r=t("./constant"),i=t("./_defineProperty"),o=t("./identity"),a=i?function(t,e){
return i(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:o
;e.exports=a},{"./_defineProperty":213,"./constant":288,"./identity":301}],
184:[function(t,e,n){e.exports=function(t,e){var n=t.length
;for(t.sort(e);n--;)t[n]=t[n].value;return t}},{}],185:[function(t,e,n){
e.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},{}],
186:[function(t,e,n){
var r=t("./_Symbol"),i=t("./_arrayMap"),o=t("./isArray"),a=t("./isSymbol"),u=r?r.prototype:void 0,c=u?u.toString:void 0
;e.exports=function t(e){if("string"==typeof e)return e;if(o(e))return i(e,t)+""
;if(a(e))return c?c.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n}
},{"./_Symbol":120,"./_arrayMap":129,"./isArray":303,"./isSymbol":316}],
187:[function(t,e,n){e.exports=function(t){return function(e){return t(e)}}
},{}],188:[function(t,e,n){
var r=t("./_SetCache"),i=t("./_arrayIncludes"),o=t("./_arrayIncludesWith"),a=t("./_cacheHas"),u=t("./_createSet"),c=t("./_setToArray")
;e.exports=function(t,e,n){var f=-1,s=i,l=t.length,h=!0,d=[],p=d
;if(n)h=!1,s=o;else if(l>=200){var v=e?null:u(t);if(v)return c(v)
;h=!1,s=a,p=new r}else p=e?[]:d;t:for(;++f<l;){var y=t[f],g=e?e(y):y
;if(y=n||0!==y?y:0,h&&g==g){for(var b=p.length;b--;)if(p[b]===g)continue t
;e&&p.push(g),d.push(y)}else s(p,g,n)||(p!==d&&p.push(g),d.push(y))}return d}},{
"./_SetCache":118,"./_arrayIncludes":126,"./_arrayIncludesWith":127,
"./_cacheHas":191,"./_createSet":212,"./_setToArray":272}],189:[function(t,e,n){
var r=t("./_arrayMap");e.exports=function(t,e){return r(e,(function(e){
return t[e]}))}},{"./_arrayMap":129}],190:[function(t,e,n){
e.exports=function(t,e,n){for(var r=-1,i=t.length,o=e.length,a={};++r<i;){
var u=r<o?e[r]:void 0;n(a,t[r],u)}return a}},{}],191:[function(t,e,n){
e.exports=function(t,e){return t.has(e)}},{}],192:[function(t,e,n){
var r=t("./identity");e.exports=function(t){return"function"==typeof t?t:r}},{
"./identity":301}],193:[function(t,e,n){
var r=t("./isArray"),i=t("./_isKey"),o=t("./_stringToPath"),a=t("./toString")
;e.exports=function(t,e){return r(t)?t:i(t,e)?[t]:o(a(t))}},{"./_isKey":243,
"./_stringToPath":282,"./isArray":303,"./toString":343}],194:[function(t,e,n){
var r=t("./_Uint8Array");e.exports=function(t){
var e=new t.constructor(t.byteLength);return new r(e).set(new r(t)),e}},{
"./_Uint8Array":121}],195:[function(t,e,n){
var r=t("./_root"),i="object"==typeof n&&n&&!n.nodeType&&n,o=i&&"object"==typeof e&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,u=a?a.allocUnsafe:void 0
;e.exports=function(t,e){if(e)return t.slice()
;var n=t.length,r=u?u(n):new t.constructor(n);return t.copy(r),r}},{
"./_root":268}],196:[function(t,e,n){var r=t("./_cloneArrayBuffer")
;e.exports=function(t,e){var n=e?r(t.buffer):t.buffer
;return new t.constructor(n,t.byteOffset,t.byteLength)}},{
"./_cloneArrayBuffer":194}],197:[function(t,e,n){var r=/\w*$/
;e.exports=function(t){var e=new t.constructor(t.source,r.exec(t))
;return e.lastIndex=t.lastIndex,e}},{}],198:[function(t,e,n){
var r=t("./_Symbol"),i=r?r.prototype:void 0,o=i?i.valueOf:void 0
;e.exports=function(t){return o?Object(o.call(t)):{}}},{"./_Symbol":120}],
199:[function(t,e,n){var r=t("./_cloneArrayBuffer");e.exports=function(t,e){
var n=e?r(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}
},{"./_cloneArrayBuffer":194}],200:[function(t,e,n){var r=t("./isSymbol")
;e.exports=function(t,e){if(t!==e){
var n=void 0!==t,i=null===t,o=t==t,a=r(t),u=void 0!==e,c=null===e,f=e==e,s=r(e)
;if(!c&&!s&&!a&&t>e||a&&u&&f&&!c&&!s||i&&u&&f||!n&&f||!o)return 1
;if(!i&&!a&&!s&&t<e||s&&n&&o&&!i&&!a||c&&n&&o||!u&&o||!f)return-1}return 0}},{
"./isSymbol":316}],201:[function(t,e,n){var r=t("./_compareAscending")
;e.exports=function(t,e,n){
for(var i=-1,o=t.criteria,a=e.criteria,u=o.length,c=n.length;++i<u;){
var f=r(o[i],a[i]);if(f)return i>=c?f:f*("desc"==n[i]?-1:1)}
return t.index-e.index}},{"./_compareAscending":200}],202:[function(t,e,n){
e.exports=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n]
;return e}},{}],203:[function(t,e,n){
var r=t("./_assignValue"),i=t("./_baseAssignValue");e.exports=function(t,e,n,o){
var a=!n;n||(n={});for(var u=-1,c=e.length;++u<c;){
var f=e[u],s=o?o(n[f],t[f],f,n,t):void 0
;void 0===s&&(s=t[f]),a?i(n,f,s):r(n,f,s)}return n}},{"./_assignValue":135,
"./_baseAssignValue":139}],204:[function(t,e,n){
var r=t("./_copyObject"),i=t("./_getSymbols");e.exports=function(t,e){
return r(t,i(t),e)}},{"./_copyObject":203,"./_getSymbols":226}],
205:[function(t,e,n){var r=t("./_copyObject"),i=t("./_getSymbolsIn")
;e.exports=function(t,e){return r(t,i(t),e)}},{"./_copyObject":203,
"./_getSymbolsIn":227}],206:[function(t,e,n){
var r=t("./_root")["__core-js_shared__"];e.exports=r},{"./_root":268}],
207:[function(t,e,n){var r=t("./_baseRest"),i=t("./_isIterateeCall")
;e.exports=function(t){return r((function(e,n){
var r=-1,o=n.length,a=o>1?n[o-1]:void 0,u=o>2?n[2]:void 0
;for(a=t.length>3&&"function"==typeof a?(o--,
a):void 0,u&&i(n[0],n[1],u)&&(a=o<3?void 0:a,o=1),e=Object(e);++r<o;){var c=n[r]
;c&&t(e,c,r,a)}return e}))}},{"./_baseRest":181,"./_isIterateeCall":242}],
208:[function(t,e,n){var r=t("./isArrayLike");e.exports=function(t,e){
return function(n,i){if(null==n)return n;if(!r(n))return t(n,i)
;for(var o=n.length,a=e?o:-1,u=Object(n);(e?a--:++a<o)&&!1!==i(u[a],a,u););
return n}}},{"./isArrayLike":304}],209:[function(t,e,n){e.exports=function(t){
return function(e,n,r){for(var i=-1,o=Object(e),a=r(e),u=a.length;u--;){
var c=a[t?u:++i];if(!1===n(o[c],c,o))break}return e}}},{}],210:[function(t,e,n){
var r=t("./_baseIteratee"),i=t("./isArrayLike"),o=t("./keys")
;e.exports=function(t){return function(e,n,a){var u=Object(e);if(!i(e)){
var c=r(n,3);e=o(e),n=function(t){return c(u[t],t,u)}}var f=t(e,n,a)
;return f>-1?u[c?e[f]:f]:void 0}}},{"./_baseIteratee":165,"./isArrayLike":304,
"./keys":319}],211:[function(t,e,n){
var r=t("./_baseRange"),i=t("./_isIterateeCall"),o=t("./toFinite")
;e.exports=function(t){return function(e,n,a){
return a&&"number"!=typeof a&&i(e,n,a)&&(n=a=void 0),
e=o(e),void 0===n?(n=e,e=0):n=o(n),a=void 0===a?e<n?1:-1:o(a),r(e,n,a,t)}}},{
"./_baseRange":179,"./_isIterateeCall":242,"./toFinite":339}],
212:[function(t,e,n){
var r=t("./_Set"),i=t("./noop"),o=t("./_setToArray"),a=r&&1/o(new r([,-0]))[1]==1/0?function(t){
return new r(t)}:i;e.exports=a},{"./_Set":117,"./_setToArray":272,"./noop":329
}],213:[function(t,e,n){var r=t("./_getNative"),i=function(){try{
var t=r(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();e.exports=i
},{"./_getNative":223}],214:[function(t,e,n){
var r=t("./_SetCache"),i=t("./_arraySome"),o=t("./_cacheHas")
;e.exports=function(t,e,n,a,u,c){var f=1&n,s=t.length,l=e.length
;if(s!=l&&!(f&&l>s))return!1;var h=c.get(t);if(h&&c.get(e))return h==e
;var d=-1,p=!0,v=2&n?new r:void 0;for(c.set(t,e),c.set(e,t);++d<s;){
var y=t[d],g=e[d];if(a)var b=f?a(g,y,d,e,t,c):a(y,g,d,t,e,c);if(void 0!==b){
if(b)continue;p=!1;break}if(v){if(!i(e,(function(t,e){
if(!o(v,e)&&(y===t||u(y,t,n,a,c)))return v.push(e)}))){p=!1;break}
}else if(y!==g&&!u(y,g,n,a,c)){p=!1;break}}return c.delete(t),c.delete(e),p}},{
"./_SetCache":118,"./_arraySome":132,"./_cacheHas":191}],215:[function(t,e,n){
var r=t("./_Symbol"),i=t("./_Uint8Array"),o=t("./eq"),a=t("./_equalArrays"),u=t("./_mapToArray"),c=t("./_setToArray"),f=r?r.prototype:void 0,s=f?f.valueOf:void 0
;e.exports=function(t,e,n,r,f,l,h){switch(n){case"[object DataView]":
if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1
;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":
return!(t.byteLength!=e.byteLength||!l(new i(t),new i(e)))
;case"[object Boolean]":case"[object Date]":case"[object Number]":
return o(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message
;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":
var d=u;case"[object Set]":var p=1&r;if(d||(d=c),t.size!=e.size&&!p)return!1
;var v=h.get(t);if(v)return v==e;r|=2,h.set(t,e);var y=a(d(t),d(e),r,f,l,h)
;return h.delete(t),y;case"[object Symbol]":if(s)return s.call(t)==s.call(e)}
return!1}},{"./_Symbol":120,"./_Uint8Array":121,"./_equalArrays":214,
"./_mapToArray":258,"./_setToArray":272,"./eq":291}],216:[function(t,e,n){
var r=t("./_getAllKeys"),i=Object.prototype.hasOwnProperty
;e.exports=function(t,e,n,o,a,u){var c=1&n,f=r(t),s=f.length
;if(s!=r(e).length&&!c)return!1;for(var l=s;l--;){var h=f[l]
;if(!(c?h in e:i.call(e,h)))return!1}var d=u.get(t);if(d&&u.get(e))return d==e
;var p=!0;u.set(t,e),u.set(e,t);for(var v=c;++l<s;){var y=t[h=f[l]],g=e[h]
;if(o)var b=c?o(g,y,h,e,t,u):o(y,g,h,t,e,u)
;if(!(void 0===b?y===g||a(y,g,n,o,u):b)){p=!1;break}v||(v="constructor"==h)}
if(p&&!v){var _=t.constructor,m=e.constructor
;_==m||!("constructor"in t)||!("constructor"in e)||"function"==typeof _&&_ instanceof _&&"function"==typeof m&&m instanceof m||(p=!1)
}return u.delete(t),u.delete(e),p}},{"./_getAllKeys":219}],217:[function(t,e,n){
var r=t("./flatten"),i=t("./_overRest"),o=t("./_setToString")
;e.exports=function(t){return o(i(t,void 0,r),t+"")}},{"./_overRest":267,
"./_setToString":273,"./flatten":295}],218:[function(t,e,n){(function(t){
var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n
}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})
},{}],219:[function(t,e,n){
var r=t("./_baseGetAllKeys"),i=t("./_getSymbols"),o=t("./keys")
;e.exports=function(t){return r(t,o,i)}},{"./_baseGetAllKeys":150,
"./_getSymbols":226,"./keys":319}],220:[function(t,e,n){
var r=t("./_baseGetAllKeys"),i=t("./_getSymbolsIn"),o=t("./keysIn")
;e.exports=function(t){return r(t,o,i)}},{"./_baseGetAllKeys":150,
"./_getSymbolsIn":227,"./keysIn":320}],221:[function(t,e,n){
var r=t("./_isKeyable");e.exports=function(t,e){var n=t.__data__
;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},{"./_isKeyable":244
}],222:[function(t,e,n){var r=t("./_isStrictComparable"),i=t("./keys")
;e.exports=function(t){for(var e=i(t),n=e.length;n--;){var o=e[n],a=t[o]
;e[n]=[o,a,r(a)]}return e}},{"./_isStrictComparable":247,"./keys":319}],
223:[function(t,e,n){var r=t("./_baseIsNative"),i=t("./_getValue")
;e.exports=function(t,e){var n=i(t,e);return r(n)?n:void 0}},{
"./_baseIsNative":162,"./_getValue":229}],224:[function(t,e,n){
var r=t("./_overArg")(Object.getPrototypeOf,Object);e.exports=r},{
"./_overArg":266}],225:[function(t,e,n){
var r=t("./_Symbol"),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,u=r?r.toStringTag:void 0
;e.exports=function(t){var e=o.call(t,u),n=t[u];try{t[u]=void 0;var r=!0
}catch(c){}var i=a.call(t);return r&&(e?t[u]=n:delete t[u]),i}},{"./_Symbol":120
}],226:[function(t,e,n){
var r=t("./_arrayFilter"),i=t("./stubArray"),o=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols,u=a?function(t){
return null==t?[]:(t=Object(t),r(a(t),(function(e){return o.call(t,e)})))}:i
;e.exports=u},{"./_arrayFilter":125,"./stubArray":337}],227:[function(t,e,n){
var r=t("./_arrayPush"),i=t("./_getPrototype"),o=t("./_getSymbols"),a=t("./stubArray"),u=Object.getOwnPropertySymbols?function(t){
for(var e=[];t;)r(e,o(t)),t=i(t);return e}:a;e.exports=u},{"./_arrayPush":130,
"./_getPrototype":224,"./_getSymbols":226,"./stubArray":337}],
228:[function(t,e,n){
var r=t("./_DataView"),i=t("./_Map"),o=t("./_Promise"),a=t("./_Set"),u=t("./_WeakMap"),c=t("./_baseGetTag"),f=t("./_toSource"),s="[object Map]",l="[object Promise]",h="[object Set]",d="[object WeakMap]",p="[object DataView]",v=f(r),y=f(i),g=f(o),b=f(a),_=f(u),m=c
;(r&&m(new r(new ArrayBuffer(1)))!=p||i&&m(new i)!=s||o&&m(o.resolve())!=l||a&&m(new a)!=h||u&&m(new u)!=d)&&(m=function(t){
var e=c(t),n="[object Object]"==e?t.constructor:void 0,r=n?f(n):""
;if(r)switch(r){case v:return p;case y:return s;case g:return l;case b:return h
;case _:return d}return e}),e.exports=m},{"./_DataView":111,"./_Map":114,
"./_Promise":116,"./_Set":117,"./_WeakMap":122,"./_baseGetTag":151,
"./_toSource":284}],229:[function(t,e,n){e.exports=function(t,e){
return null==t?void 0:t[e]}},{}],230:[function(t,e,n){
var r=t("./_castPath"),i=t("./isArguments"),o=t("./isArray"),a=t("./_isIndex"),u=t("./isLength"),c=t("./_toKey")
;e.exports=function(t,e,n){for(var f=-1,s=(e=r(e,t)).length,l=!1;++f<s;){
var h=c(e[f]);if(!(l=null!=t&&n(t,h)))break;t=t[h]}
return l||++f!=s?l:!!(s=null==t?0:t.length)&&u(s)&&a(h,s)&&(o(t)||i(t))}},{
"./_castPath":193,"./_isIndex":241,"./_toKey":283,"./isArguments":302,
"./isArray":303,"./isLength":309}],231:[function(t,e,n){
var r=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]")
;e.exports=function(t){return r.test(t)}},{}],232:[function(t,e,n){
var r=t("./_nativeCreate");e.exports=function(){
this.__data__=r?r(null):{},this.size=0}},{"./_nativeCreate":261}],
233:[function(t,e,n){e.exports=function(t){
var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},{}],
234:[function(t,e,n){
var r=t("./_nativeCreate"),i=Object.prototype.hasOwnProperty
;e.exports=function(t){var e=this.__data__;if(r){var n=e[t]
;return"__lodash_hash_undefined__"===n?void 0:n}return i.call(e,t)?e[t]:void 0}
},{"./_nativeCreate":261}],235:[function(t,e,n){
var r=t("./_nativeCreate"),i=Object.prototype.hasOwnProperty
;e.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:i.call(e,t)}
},{"./_nativeCreate":261}],236:[function(t,e,n){var r=t("./_nativeCreate")
;e.exports=function(t,e){var n=this.__data__
;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,
this}},{"./_nativeCreate":261}],237:[function(t,e,n){
var r=Object.prototype.hasOwnProperty;e.exports=function(t){
var e=t.length,n=new t.constructor(e)
;return e&&"string"==typeof t[0]&&r.call(t,"index")&&(n.index=t.index,
n.input=t.input),n}},{}],238:[function(t,e,n){
var r=t("./_cloneArrayBuffer"),i=t("./_cloneDataView"),o=t("./_cloneRegExp"),a=t("./_cloneSymbol"),u=t("./_cloneTypedArray")
;e.exports=function(t,e,n){var c=t.constructor;switch(e){
case"[object ArrayBuffer]":return r(t);case"[object Boolean]":
case"[object Date]":return new c(+t);case"[object DataView]":return i(t,n)
;case"[object Float32Array]":case"[object Float64Array]":
case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":
case"[object Uint8Array]":case"[object Uint8ClampedArray]":
case"[object Uint16Array]":case"[object Uint32Array]":return u(t,n)
;case"[object Map]":return new c;case"[object Number]":case"[object String]":
return new c(t);case"[object RegExp]":return o(t);case"[object Set]":
return new c;case"[object Symbol]":return a(t)}}},{"./_cloneArrayBuffer":194,
"./_cloneDataView":196,"./_cloneRegExp":197,"./_cloneSymbol":198,
"./_cloneTypedArray":199}],239:[function(t,e,n){
var r=t("./_baseCreate"),i=t("./_getPrototype"),o=t("./_isPrototype")
;e.exports=function(t){return"function"!=typeof t.constructor||o(t)?{}:r(i(t))}
},{"./_baseCreate":141,"./_getPrototype":224,"./_isPrototype":246}],
240:[function(t,e,n){
var r=t("./_Symbol"),i=t("./isArguments"),o=t("./isArray"),a=r?r.isConcatSpreadable:void 0
;e.exports=function(t){return o(t)||i(t)||!!(a&&t&&t[a])}},{"./_Symbol":120,
"./isArguments":302,"./isArray":303}],241:[function(t,e,n){
var r=/^(?:0|[1-9]\d*)$/;e.exports=function(t,e){var n=typeof t
;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&r.test(t))&&t>-1&&t%1==0&&t<e
}},{}],242:[function(t,e,n){
var r=t("./eq"),i=t("./isArrayLike"),o=t("./_isIndex"),a=t("./isObject")
;e.exports=function(t,e,n){if(!a(n))return!1;var u=typeof e
;return!!("number"==u?i(n)&&o(e,n.length):"string"==u&&e in n)&&r(n[e],t)}},{
"./_isIndex":241,"./eq":291,"./isArrayLike":304,"./isObject":311}],
243:[function(t,e,n){
var r=t("./isArray"),i=t("./isSymbol"),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/
;e.exports=function(t,e){if(r(t))return!1;var n=typeof t
;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!i(t))||(a.test(t)||!o.test(t)||null!=e&&t in Object(e))
}},{"./isArray":303,"./isSymbol":316}],244:[function(t,e,n){
e.exports=function(t){var e=typeof t
;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t
}},{}],245:[function(t,e,n){var r=t("./_coreJsData"),i=function(){
var t=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||"")
;return t?"Symbol(src)_1."+t:""}();e.exports=function(t){return!!i&&i in t}},{
"./_coreJsData":206}],246:[function(t,e,n){var r=Object.prototype
;e.exports=function(t){var e=t&&t.constructor
;return t===("function"==typeof e&&e.prototype||r)}},{}],247:[function(t,e,n){
var r=t("./isObject");e.exports=function(t){return t==t&&!r(t)}},{
"./isObject":311}],248:[function(t,e,n){e.exports=function(){
this.__data__=[],this.size=0}},{}],249:[function(t,e,n){
var r=t("./_assocIndexOf"),i=Array.prototype.splice;e.exports=function(t){
var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():i.call(e,n,1),
--this.size,!0)}},{"./_assocIndexOf":136}],250:[function(t,e,n){
var r=t("./_assocIndexOf");e.exports=function(t){var e=this.__data__,n=r(e,t)
;return n<0?void 0:e[n][1]}},{"./_assocIndexOf":136}],251:[function(t,e,n){
var r=t("./_assocIndexOf");e.exports=function(t){return r(this.__data__,t)>-1}
},{"./_assocIndexOf":136}],252:[function(t,e,n){var r=t("./_assocIndexOf")
;e.exports=function(t,e){var n=this.__data__,i=r(n,t)
;return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this}},{"./_assocIndexOf":136
}],253:[function(t,e,n){var r=t("./_Hash"),i=t("./_ListCache"),o=t("./_Map")
;e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(o||i),
string:new r}}},{"./_Hash":112,"./_ListCache":113,"./_Map":114}],
254:[function(t,e,n){var r=t("./_getMapData");e.exports=function(t){
var e=r(this,t).delete(t);return this.size-=e?1:0,e}},{"./_getMapData":221}],
255:[function(t,e,n){var r=t("./_getMapData");e.exports=function(t){
return r(this,t).get(t)}},{"./_getMapData":221}],256:[function(t,e,n){
var r=t("./_getMapData");e.exports=function(t){return r(this,t).has(t)}},{
"./_getMapData":221}],257:[function(t,e,n){var r=t("./_getMapData")
;e.exports=function(t,e){var n=r(this,t),i=n.size
;return n.set(t,e),this.size+=n.size==i?0:1,this}},{"./_getMapData":221}],
258:[function(t,e,n){e.exports=function(t){var e=-1,n=Array(t.size)
;return t.forEach((function(t,r){n[++e]=[r,t]})),n}},{}],259:[function(t,e,n){
e.exports=function(t,e){return function(n){
return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}},{}],
260:[function(t,e,n){var r=t("./memoize");e.exports=function(t){
var e=r(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}
},{"./memoize":325}],261:[function(t,e,n){
var r=t("./_getNative")(Object,"create");e.exports=r},{"./_getNative":223}],
262:[function(t,e,n){var r=t("./_overArg")(Object.keys,Object);e.exports=r},{
"./_overArg":266}],263:[function(t,e,n){e.exports=function(t){var e=[]
;if(null!=t)for(var n in Object(t))e.push(n);return e}},{}],
264:[function(t,e,n){
var r=t("./_freeGlobal"),i="object"==typeof n&&n&&!n.nodeType&&n,o=i&&"object"==typeof e&&e&&!e.nodeType&&e,a=o&&o.exports===i&&r.process,u=function(){
try{var t=o&&o.require&&o.require("util").types
;return t||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=u},{
"./_freeGlobal":218}],265:[function(t,e,n){var r=Object.prototype.toString
;e.exports=function(t){return r.call(t)}},{}],266:[function(t,e,n){
e.exports=function(t,e){return function(n){return t(e(n))}}},{}],
267:[function(t,e,n){var r=t("./_apply"),i=Math.max;e.exports=function(t,e,n){
return e=i(void 0===e?t.length-1:e,0),function(){
for(var o=arguments,a=-1,u=i(o.length-e,0),c=Array(u);++a<u;)c[a]=o[e+a];a=-1
;for(var f=Array(e+1);++a<e;)f[a]=o[a];return f[e]=n(c),r(t,this,f)}}},{
"./_apply":123}],268:[function(t,e,n){
var r=t("./_freeGlobal"),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")()
;e.exports=o},{"./_freeGlobal":218}],269:[function(t,e,n){
e.exports=function(t,e){
if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}
},{}],270:[function(t,e,n){e.exports=function(t){
return this.__data__.set(t,"__lodash_hash_undefined__"),this}},{}],
271:[function(t,e,n){e.exports=function(t){return this.__data__.has(t)}},{}],
272:[function(t,e,n){e.exports=function(t){var e=-1,n=Array(t.size)
;return t.forEach((function(t){n[++e]=t})),n}},{}],273:[function(t,e,n){
var r=t("./_baseSetToString"),i=t("./_shortOut")(r);e.exports=i},{
"./_baseSetToString":183,"./_shortOut":274}],274:[function(t,e,n){var r=Date.now
;e.exports=function(t){var e=0,n=0;return function(){var i=r(),o=16-(i-n)
;if(n=i,o>0){if(++e>=800)return arguments[0]}else e=0
;return t.apply(void 0,arguments)}}},{}],275:[function(t,e,n){
var r=t("./_ListCache");e.exports=function(){this.__data__=new r,this.size=0}},{
"./_ListCache":113}],276:[function(t,e,n){e.exports=function(t){
var e=this.__data__,n=e.delete(t);return this.size=e.size,n}},{}],
277:[function(t,e,n){e.exports=function(t){return this.__data__.get(t)}},{}],
278:[function(t,e,n){e.exports=function(t){return this.__data__.has(t)}},{}],
279:[function(t,e,n){var r=t("./_ListCache"),i=t("./_Map"),o=t("./_MapCache")
;e.exports=function(t,e){var n=this.__data__;if(n instanceof r){var a=n.__data__
;if(!i||a.length<199)return a.push([t,e]),this.size=++n.size,this
;n=this.__data__=new o(a)}return n.set(t,e),this.size=n.size,this}},{
"./_ListCache":113,"./_Map":114,"./_MapCache":115}],280:[function(t,e,n){
e.exports=function(t,e,n){for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r
;return-1}},{}],281:[function(t,e,n){
var r=t("./_asciiSize"),i=t("./_hasUnicode"),o=t("./_unicodeSize")
;e.exports=function(t){return i(t)?o(t):r(t)}},{"./_asciiSize":133,
"./_hasUnicode":231,"./_unicodeSize":285}],282:[function(t,e,n){
var r=t("./_memoizeCapped"),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,a=r((function(t){
var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(i,(function(t,n,r,i){
e.push(r?i.replace(o,"$1"):n||t)})),e}));e.exports=a},{"./_memoizeCapped":260}],
283:[function(t,e,n){var r=t("./isSymbol");e.exports=function(t){
if("string"==typeof t||r(t))return t;var e=t+""
;return"0"==e&&1/t==-Infinity?"-0":e}},{"./isSymbol":316}],284:[function(t,e,n){
var r=Function.prototype.toString;e.exports=function(t){if(null!=t){try{
return r.call(t)}catch(e){}try{return t+""}catch(e){}}return""}},{}],
285:[function(t,e,n){
var r="[\\ud800-\\udfff]",i="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",o="\\ud83c[\\udffb-\\udfff]",a="[^\\ud800-\\udfff]",u="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",f="(?:"+i+"|"+o+")"+"?",s="[\\ufe0e\\ufe0f]?",l=s+f+("(?:\\u200d(?:"+[a,u,c].join("|")+")"+s+f+")*"),h="(?:"+[a+i+"?",i,u,c,r].join("|")+")",d=RegExp(o+"(?="+o+")|"+h+l,"g")
;e.exports=function(t){for(var e=d.lastIndex=0;d.test(t);)++e;return e}},{}],
286:[function(t,e,n){var r=t("./_baseClone");e.exports=function(t){return r(t,4)
}},{"./_baseClone":140}],287:[function(t,e,n){var r=t("./_baseClone")
;e.exports=function(t){return r(t,5)}},{"./_baseClone":140}],
288:[function(t,e,n){e.exports=function(t){return function(){return t}}},{}],
289:[function(t,e,n){
var r=t("./_baseRest"),i=t("./eq"),o=t("./_isIterateeCall"),a=t("./keysIn"),u=Object.prototype,c=u.hasOwnProperty,f=r((function(t,e){
t=Object(t);var n=-1,r=e.length,f=r>2?e[2]:void 0
;for(f&&o(e[0],e[1],f)&&(r=1);++n<r;)for(var s=e[n],l=a(s),h=-1,d=l.length;++h<d;){
var p=l[h],v=t[p];(void 0===v||i(v,u[p])&&!c.call(t,p))&&(t[p]=s[p])}return t}))
;e.exports=f},{"./_baseRest":181,"./_isIterateeCall":242,"./eq":291,
"./keysIn":320}],290:[function(t,e,n){e.exports=t("./forEach")},{"./forEach":296
}],291:[function(t,e,n){e.exports=function(t,e){return t===e||t!=t&&e!=e}},{}],
292:[function(t,e,n){
var r=t("./_arrayFilter"),i=t("./_baseFilter"),o=t("./_baseIteratee"),a=t("./isArray")
;e.exports=function(t,e){return(a(t)?r:i)(t,o(e,3))}},{"./_arrayFilter":125,
"./_baseFilter":144,"./_baseIteratee":165,"./isArray":303}],
293:[function(t,e,n){var r=t("./_createFind")(t("./findIndex"));e.exports=r},{
"./_createFind":210,"./findIndex":294}],294:[function(t,e,n){
var r=t("./_baseFindIndex"),i=t("./_baseIteratee"),o=t("./toInteger"),a=Math.max
;e.exports=function(t,e,n){var u=null==t?0:t.length;if(!u)return-1
;var c=null==n?0:o(n);return c<0&&(c=a(u+c,0)),r(t,i(e,3),c)}},{
"./_baseFindIndex":145,"./_baseIteratee":165,"./toInteger":340}],
295:[function(t,e,n){var r=t("./_baseFlatten");e.exports=function(t){
return(null==t?0:t.length)?r(t,1):[]}},{"./_baseFlatten":146}],
296:[function(t,e,n){
var r=t("./_arrayEach"),i=t("./_baseEach"),o=t("./_castFunction"),a=t("./isArray")
;e.exports=function(t,e){return(a(t)?r:i)(t,o(e))}},{"./_arrayEach":124,
"./_baseEach":142,"./_castFunction":192,"./isArray":303}],297:[function(t,e,n){
var r=t("./_baseFor"),i=t("./_castFunction"),o=t("./keysIn")
;e.exports=function(t,e){return null==t?t:r(t,i(e),o)}},{"./_baseFor":147,
"./_castFunction":192,"./keysIn":320}],298:[function(t,e,n){
var r=t("./_baseGet");e.exports=function(t,e,n){var i=null==t?void 0:r(t,e)
;return void 0===i?n:i}},{"./_baseGet":149}],299:[function(t,e,n){
var r=t("./_baseHas"),i=t("./_hasPath");e.exports=function(t,e){
return null!=t&&i(t,e,r)}},{"./_baseHas":153,"./_hasPath":230}],
300:[function(t,e,n){var r=t("./_baseHasIn"),i=t("./_hasPath")
;e.exports=function(t,e){return null!=t&&i(t,e,r)}},{"./_baseHasIn":154,
"./_hasPath":230}],301:[function(t,e,n){e.exports=function(t){return t}},{}],
302:[function(t,e,n){
var r=t("./_baseIsArguments"),i=t("./isObjectLike"),o=Object.prototype,a=o.hasOwnProperty,u=o.propertyIsEnumerable,c=r(function(){
return arguments}())?r:function(t){
return i(t)&&a.call(t,"callee")&&!u.call(t,"callee")};e.exports=c},{
"./_baseIsArguments":156,"./isObjectLike":312}],303:[function(t,e,n){
var r=Array.isArray;e.exports=r},{}],304:[function(t,e,n){
var r=t("./isFunction"),i=t("./isLength");e.exports=function(t){
return null!=t&&i(t.length)&&!r(t)}},{"./isFunction":308,"./isLength":309}],
305:[function(t,e,n){var r=t("./isArrayLike"),i=t("./isObjectLike")
;e.exports=function(t){return i(t)&&r(t)}},{"./isArrayLike":304,
"./isObjectLike":312}],306:[function(t,e,n){
var r=t("./_root"),i=t("./stubFalse"),o="object"==typeof n&&n&&!n.nodeType&&n,a=o&&"object"==typeof e&&e&&!e.nodeType&&e,u=a&&a.exports===o?r.Buffer:void 0,c=(u?u.isBuffer:void 0)||i
;e.exports=c},{"./_root":268,"./stubFalse":338}],307:[function(t,e,n){
var r=t("./_baseKeys"),i=t("./_getTag"),o=t("./isArguments"),a=t("./isArray"),u=t("./isArrayLike"),c=t("./isBuffer"),f=t("./_isPrototype"),s=t("./isTypedArray"),l=Object.prototype.hasOwnProperty
;e.exports=function(t){if(null==t)return!0
;if(u(t)&&(a(t)||"string"==typeof t||"function"==typeof t.splice||c(t)||s(t)||o(t)))return!t.length
;var e=i(t);if("[object Map]"==e||"[object Set]"==e)return!t.size
;if(f(t))return!r(t).length;for(var n in t)if(l.call(t,n))return!1;return!0}},{
"./_baseKeys":166,"./_getTag":228,"./_isPrototype":246,"./isArguments":302,
"./isArray":303,"./isArrayLike":304,"./isBuffer":306,"./isTypedArray":317}],
308:[function(t,e,n){var r=t("./_baseGetTag"),i=t("./isObject")
;e.exports=function(t){if(!i(t))return!1;var e=r(t)
;return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e
}},{"./_baseGetTag":151,"./isObject":311}],309:[function(t,e,n){
e.exports=function(t){
return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},{}],
310:[function(t,e,n){
var r=t("./_baseIsMap"),i=t("./_baseUnary"),o=t("./_nodeUtil"),a=o&&o.isMap,u=a?i(a):r
;e.exports=u},{"./_baseIsMap":159,"./_baseUnary":187,"./_nodeUtil":264}],
311:[function(t,e,n){e.exports=function(t){var e=typeof t
;return null!=t&&("object"==e||"function"==e)}},{}],312:[function(t,e,n){
e.exports=function(t){return null!=t&&"object"==typeof t}},{}],
313:[function(t,e,n){
var r=t("./_baseGetTag"),i=t("./_getPrototype"),o=t("./isObjectLike"),a=Function.prototype,u=Object.prototype,c=a.toString,f=u.hasOwnProperty,s=c.call(Object)
;e.exports=function(t){if(!o(t)||"[object Object]"!=r(t))return!1;var e=i(t)
;if(null===e)return!0;var n=f.call(e,"constructor")&&e.constructor
;return"function"==typeof n&&n instanceof n&&c.call(n)==s}},{
"./_baseGetTag":151,"./_getPrototype":224,"./isObjectLike":312}],
314:[function(t,e,n){
var r=t("./_baseIsSet"),i=t("./_baseUnary"),o=t("./_nodeUtil"),a=o&&o.isSet,u=a?i(a):r
;e.exports=u},{"./_baseIsSet":163,"./_baseUnary":187,"./_nodeUtil":264}],
315:[function(t,e,n){
var r=t("./_baseGetTag"),i=t("./isArray"),o=t("./isObjectLike")
;e.exports=function(t){
return"string"==typeof t||!i(t)&&o(t)&&"[object String]"==r(t)}},{
"./_baseGetTag":151,"./isArray":303,"./isObjectLike":312}],316:[function(t,e,n){
var r=t("./_baseGetTag"),i=t("./isObjectLike");e.exports=function(t){
return"symbol"==typeof t||i(t)&&"[object Symbol]"==r(t)}},{"./_baseGetTag":151,
"./isObjectLike":312}],317:[function(t,e,n){
var r=t("./_baseIsTypedArray"),i=t("./_baseUnary"),o=t("./_nodeUtil"),a=o&&o.isTypedArray,u=a?i(a):r
;e.exports=u},{"./_baseIsTypedArray":164,"./_baseUnary":187,"./_nodeUtil":264}],
318:[function(t,e,n){e.exports=function(t){return void 0===t}},{}],
319:[function(t,e,n){
var r=t("./_arrayLikeKeys"),i=t("./_baseKeys"),o=t("./isArrayLike")
;e.exports=function(t){return o(t)?r(t):i(t)}},{"./_arrayLikeKeys":128,
"./_baseKeys":166,"./isArrayLike":304}],320:[function(t,e,n){
var r=t("./_arrayLikeKeys"),i=t("./_baseKeysIn"),o=t("./isArrayLike")
;e.exports=function(t){return o(t)?r(t,!0):i(t)}},{"./_arrayLikeKeys":128,
"./_baseKeysIn":167,"./isArrayLike":304}],321:[function(t,e,n){
e.exports=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}},{}],
322:[function(t,e,n){
var r=t("./_arrayMap"),i=t("./_baseIteratee"),o=t("./_baseMap"),a=t("./isArray")
;e.exports=function(t,e){return(a(t)?r:o)(t,i(e,3))}},{"./_arrayMap":129,
"./_baseIteratee":165,"./_baseMap":169,"./isArray":303}],323:[function(t,e,n){
var r=t("./_baseAssignValue"),i=t("./_baseForOwn"),o=t("./_baseIteratee")
;e.exports=function(t,e){var n={};return e=o(e,3),i(t,(function(t,i,o){
r(n,i,e(t,i,o))})),n}},{"./_baseAssignValue":139,"./_baseForOwn":148,
"./_baseIteratee":165}],324:[function(t,e,n){
var r=t("./_baseExtremum"),i=t("./_baseGt"),o=t("./identity")
;e.exports=function(t){return t&&t.length?r(t,o,i):void 0}},{
"./_baseExtremum":143,"./_baseGt":152,"./identity":301}],325:[function(t,e,n){
var r=t("./_MapCache");function i(t,e){
if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function")
;var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache
;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,
a};return n.cache=new(i.Cache||r),n}i.Cache=r,e.exports=i},{"./_MapCache":115}],
326:[function(t,e,n){
var r=t("./_baseMerge"),i=t("./_createAssigner")((function(t,e,n){r(t,e,n)}))
;e.exports=i},{"./_baseMerge":172,"./_createAssigner":207}],
327:[function(t,e,n){
var r=t("./_baseExtremum"),i=t("./_baseLt"),o=t("./identity")
;e.exports=function(t){return t&&t.length?r(t,o,i):void 0}},{
"./_baseExtremum":143,"./_baseLt":168,"./identity":301}],328:[function(t,e,n){
var r=t("./_baseExtremum"),i=t("./_baseIteratee"),o=t("./_baseLt")
;e.exports=function(t,e){return t&&t.length?r(t,i(e,2),o):void 0}},{
"./_baseExtremum":143,"./_baseIteratee":165,"./_baseLt":168}],
329:[function(t,e,n){e.exports=function(){}},{}],330:[function(t,e,n){
var r=t("./_root");e.exports=function(){return r.Date.now()}},{"./_root":268}],
331:[function(t,e,n){var r=t("./_basePick"),i=t("./_flatRest")((function(t,e){
return null==t?{}:r(t,e)}));e.exports=i},{"./_basePick":175,"./_flatRest":217}],
332:[function(t,e,n){
var r=t("./_baseProperty"),i=t("./_basePropertyDeep"),o=t("./_isKey"),a=t("./_toKey")
;e.exports=function(t){return o(t)?r(a(t)):i(t)}},{"./_baseProperty":177,
"./_basePropertyDeep":178,"./_isKey":243,"./_toKey":283}],333:[function(t,e,n){
var r=t("./_createRange")();e.exports=r},{"./_createRange":211}],
334:[function(t,e,n){
var r=t("./_arrayReduce"),i=t("./_baseEach"),o=t("./_baseIteratee"),a=t("./_baseReduce"),u=t("./isArray")
;e.exports=function(t,e,n){var c=u(t)?r:a,f=arguments.length<3
;return c(t,o(e,4),n,f,i)}},{"./_arrayReduce":131,"./_baseEach":142,
"./_baseIteratee":165,"./_baseReduce":180,"./isArray":303}],
335:[function(t,e,n){
var r=t("./_baseKeys"),i=t("./_getTag"),o=t("./isArrayLike"),a=t("./isString"),u=t("./_stringSize")
;e.exports=function(t){if(null==t)return 0;if(o(t))return a(t)?u(t):t.length
;var e=i(t);return"[object Map]"==e||"[object Set]"==e?t.size:r(t).length}},{
"./_baseKeys":166,"./_getTag":228,"./_stringSize":281,"./isArrayLike":304,
"./isString":315}],336:[function(t,e,n){
var r=t("./_baseFlatten"),i=t("./_baseOrderBy"),o=t("./_baseRest"),a=t("./_isIterateeCall"),u=o((function(t,e){
if(null==t)return[];var n=e.length
;return n>1&&a(t,e[0],e[1])?e=[]:n>2&&a(e[0],e[1],e[2])&&(e=[e[0]]),
i(t,r(e,1),[])}));e.exports=u},{"./_baseFlatten":146,"./_baseOrderBy":174,
"./_baseRest":181,"./_isIterateeCall":242}],337:[function(t,e,n){
e.exports=function(){return[]}},{}],338:[function(t,e,n){e.exports=function(){
return!1}},{}],339:[function(t,e,n){var r=t("./toNumber"),i=1/0
;e.exports=function(t){
return t?(t=r(t))===i||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0
}},{"./toNumber":341}],340:[function(t,e,n){var r=t("./toFinite")
;e.exports=function(t){var e=r(t),n=e%1;return e==e?n?e-n:e:0}},{
"./toFinite":339}],341:[function(t,e,n){
var r=t("./isObject"),i=t("./isSymbol"),o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt
;e.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN
;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}
if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=u.test(t)
;return n||c.test(t)?f(t.slice(2),n?2:8):a.test(t)?NaN:+t}},{"./isObject":311,
"./isSymbol":316}],342:[function(t,e,n){var r=t("./_copyObject"),i=t("./keysIn")
;e.exports=function(t){return r(t,i(t))}},{"./_copyObject":203,"./keysIn":320}],
343:[function(t,e,n){var r=t("./_baseToString");e.exports=function(t){
return null==t?"":r(t)}},{"./_baseToString":186}],344:[function(t,e,n){
var r=t("./_arrayEach"),i=t("./_baseCreate"),o=t("./_baseForOwn"),a=t("./_baseIteratee"),u=t("./_getPrototype"),c=t("./isArray"),f=t("./isBuffer"),s=t("./isFunction"),l=t("./isObject"),h=t("./isTypedArray")
;e.exports=function(t,e,n){var d=c(t),p=d||f(t)||h(t);if(e=a(e,4),null==n){
var v=t&&t.constructor;n=p?d?new v:[]:l(t)&&s(v)?i(u(t)):{}}
return(p?r:o)(t,(function(t,r,i){return e(n,t,r,i)})),n}},{"./_arrayEach":124,
"./_baseCreate":141,"./_baseForOwn":148,"./_baseIteratee":165,
"./_getPrototype":224,"./isArray":303,"./isBuffer":306,"./isFunction":308,
"./isObject":311,"./isTypedArray":317}],345:[function(t,e,n){
var r=t("./_baseFlatten"),i=t("./_baseRest"),o=t("./_baseUniq"),a=t("./isArrayLikeObject"),u=i((function(t){
return o(r(t,1,a,!0))}));e.exports=u},{"./_baseFlatten":146,"./_baseRest":181,
"./_baseUniq":188,"./isArrayLikeObject":305}],346:[function(t,e,n){
var r=t("./toString"),i=0;e.exports=function(t){var e=++i;return r(t)+e}},{
"./toString":343}],347:[function(t,e,n){var r=t("./_baseValues"),i=t("./keys")
;e.exports=function(t){return null==t?[]:r(t,i(t))}},{"./_baseValues":189,
"./keys":319}],348:[function(t,e,n){
var r=t("./_assignValue"),i=t("./_baseZipObject");e.exports=function(t,e){
return i(t||[],e||[],r)}},{"./_assignValue":135,"./_baseZipObject":190}]
},{},[1])(1)}));