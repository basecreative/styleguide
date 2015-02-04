/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-printshiv-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes
 */
;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function J(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return I("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!I("indexedDB",a)},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.backgroundColor,"rgba")},s.hsla=function(){return C("background-color:hsla(120,40%,100%,.5)"),F(j.backgroundColor,"rgba")||F(j.backgroundColor,"hsla")},s.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return I("backgroundSize")},s.borderimage=function(){return I("borderImage")},s.borderradius=function(){return I("borderRadius")},s.boxshadow=function(){return I("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return D("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return I("animationName")},s.csscolumns=function(){return I("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.cssreflections=function(){return I("boxReflect")},s.csstransforms=function(){return!!I("transform")},s.csstransforms3d=function(){var a=!!I("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return I("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var K in s)B(s,K)&&(x=K.toLowerCase(),e[x]=s[K](),v.push((e[x]?"":"no-")+x));return e.input||J(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,e.prefixed=function(a,b,c){return b?I(a,b,c):I(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}function w(a){var b,c=a.getElementsByTagName("*"),d=c.length,e=RegExp("^(?:"+m().join("|")+")$","i"),f=[];while(d--)b=c[d],e.test(b.nodeName)&&f.push(b.applyElement(x(b)));return f}function x(a){var b,c=a.attributes,d=c.length,e=a.ownerDocument.createElement(u+":"+a.nodeName);while(d--)b=c[d],b.specified&&e.setAttribute(b.nodeName,b.nodeValue);return e.style.cssText=a.style.cssText,e}function y(a){var b,c=a.split("{"),d=c.length,e=RegExp("(^|[\\s,>+~])("+m().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),f="$1"+u+"\\:$2";while(d--)b=c[d]=c[d].split("}"),b[b.length-1]=b[b.length-1].replace(e,f),c[d]=b.join("}");return c.join("{")}function z(a){var b=a.length;while(b--)a[b].removeNode()}function A(a){function g(){clearTimeout(d._removeSheetTimer),b&&b.removeNode(!0),b=null}var b,c,d=n(a),e=a.namespaces,f=a.parentWindow;return!v||a.printShived?a:(typeof e[u]=="undefined"&&e.add(u),f.attachEvent("onbeforeprint",function(){g();var d,e,f,h=a.styleSheets,i=[],j=h.length,k=Array(j);while(j--)k[j]=h[j];while(f=k.pop())if(!f.disabled&&t.test(f.media)){try{d=f.imports,e=d.length}catch(m){e=0}for(j=0;j<e;j++)k.push(d[j]);try{i.push(f.cssText)}catch(m){}}i=y(i.reverse().join("")),c=w(a),b=l(a,i)}),f.attachEvent("onafterprint",function(){z(c),clearTimeout(d._removeSheetTimer),d._removeSheetTimer=setTimeout(g,500)}),a.printShived=!0,a)}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b);var t=/^$|\b(?:all|print)\b/,u="html5shiv",v=!k&&function(){var c=b.documentElement;return typeof b.namespaces!="undefined"&&typeof b.parentWindow!="undefined"&&typeof c.applyElement!="undefined"&&typeof c.removeNode!="undefined"&&typeof a.attachEvent!="undefined"}();s.type+=" print",s.shivPrint=A,A(b)}(this,document);

!function(a){var b=function(){window.asyncWebshims||(window.asyncWebshims={cfg:[],ready:[]})},c=function(){window.jQuery&&(a(jQuery),a=function(){return window.webshims})};window.webshims={setOptions:function(){b(),window.asyncWebshims.cfg.push(arguments)},ready:function(){b(),window.asyncWebshims.ready.push(arguments)},activeLang:function(a){b(),window.asyncWebshims.lang=a},polyfill:function(a){b(),window.asyncWebshims.polyfill=a},_curScript:function(){var a,b,c,d,e,f=document.currentScript;if(!f){try{throw new Error("")}catch(g){for(c=(g.sourceURL||g.stack||"").split("\n"),e=/(?:fil|htt|wid|abo|app|res)(.)+/i,b=0;b<c.length;b++)if(d=c[b].match(e)){c=d[0].replace(/[\:\s\(]+[\d\:\)\(\s]+$/,"");break}}for(a=document.scripts||document.getElementsByTagName("script"),b=0;b<a.length&&(!a[b].getAttribute("src")||(f=a[b],"interactive"!=a[b].readyState&&c!=a[b].src));b++);}return f}()},window.webshim=window.webshims,window.webshims.timer=setInterval(c,0),c(),"function"==typeof define&&define.amd&&define("polyfiller",["jquery"],a)}(function(a){"use strict";function b(a){return document.createElement(a)}var c,d,e=window.navigator,f=window.webshims,g="dom-support",h=a.event.special,i=a([]),j=window.asyncWebshims,k={},l=window.Object,m=function(a){return a+"\n//# sourceURL="+this.url},n=function(a){return p.enhanceAuto||"auto"!=a?a:!1},o={matchmedia:"matchMedia",xhr2:"filereader",promise:"es6",URL:"url"};clearInterval(f.timer),k.advancedObjectProperties=k.objectAccessor=k.ES5=!!("create"in l&&"seal"in l),!k.ES5||"toJSON"in Date.prototype||(k.ES5=!1),d=a.support.hrefNormalized===!1?f._curScript.getAttribute("src",4):f._curScript.src,d=d.split("?")[0].slice(0,d.lastIndexOf("/")+1)+"shims/",a.extend(f,{version:"1.15.3",cfg:{enhanceAuto:window.Audio&&(!window.matchMedia||matchMedia("(min-device-width: 721px)").matches),waitReady:!0,loadStyles:!0,wsdoc:document,wspopover:{appendTo:"auto",hideOnBlur:!0},ajax:{},loadScript:function(b,c){a.ajax(a.extend({},p.ajax,{url:b,success:c,dataType:"script",cache:!0,global:!1,dataFilter:m}))},basePath:d},support:k,bugs:{},modules:{},features:{},featureList:[],setOptions:function(b,c){"string"==typeof b&&arguments.length>1?p[b]=a.isPlainObject(c)?a.extend(!0,p[b]||{},c):c:"object"==typeof b&&a.extend(!0,p,b)},_getAutoEnhance:n,addPolyfill:function(b,c){c=c||{};var d=c.f||b;q[d]||(q[d]=[],f.featureList.push(d),p[d]={}),q[d].push(b),c.options=a.extend(p[d],c.options),x(b,c),c.methodNames&&a.each(c.methodNames,function(a,b){f.addMethodName(b)})},polyfill:function(){return function(a){a||(a=f.featureList),"string"==typeof a&&(a=a.split(" "));return f._polyfill(a)}}(),_polyfill:function(b){var d,e=[];c.run||(d=-1!==a.inArray("forms-ext",b),c(),d&&-1==a.inArray("forms",b)&&b.push("forms"),p.loadStyles&&v.loadCSS("styles/shim"+(d&&!u["form-number-date-ui"].test()?"-ext":"")+".css")),p.waitReady&&(a.readyWait++,s(b,function(){a.ready(!0)})),a.each(b,function(a,b){return b=o[b]||b,q[b]?(b!==q[b][0]&&s(q[b],function(){r(b,!0)}),void(e=e.concat(q[b]))):void r(b,!0)}),w(e),a.each(b,function(a,b){var c=p[b];c&&("mediaelement"==b&&(c.replaceUI=n(c.replaceUI))&&c.plugins.unshift("mediacontrols"),c.plugins&&c.plugins.length&&w(p[b].plugins))})},reTest:function(){var b,c=function(c,d){var e=u[d],f=d+"Ready";!e||e.loaded||(e.test&&a.isFunction(e.test)?e.test([]):e.test)||(h[f]&&delete h[f],q[e.f],b.push(d))};return function(d){"string"==typeof d&&(d=d.split(" ")),b=[],a.each(d,c),w(b)}}(),isReady:function(b,c){if(b+="Ready",c){if(h[b]&&h[b].add)return!0;h[b]=a.extend(h[b]||{},{add:function(a){a.handler.call(this,b)}}),a(document).triggerHandler(b)}return!(!h[b]||!h[b].add)||!1},ready:function(b,c){var d=arguments[2];if("string"==typeof b&&(b=b.split(" ")),d||(b=a.map(a.grep(b,function(a){return!r(a)}),function(a){return a+"Ready"})),!b.length)return void c(a,f,window,document);var e=b.shift(),g=function(){s(b,c,!0)};a(document).one(e,g)},capturingEvents:function(b,c){document.addEventListener&&("string"==typeof b&&(b=[b]),a.each(b,function(b,d){var e=function(b){return b=a.event.fix(b),c&&f.capturingEventPrevented&&f.capturingEventPrevented(b),a.event.dispatch.call(this,b)};h[d]=h[d]||{},h[d].setup||h[d].teardown||a.extend(h[d],{setup:function(){this.addEventListener(d,e,!0)},teardown:function(){this.removeEventListener(d,e,!0)}})}))},register:function(b,c){var d=u[b];if(!d)return void f.error("can't find module: "+b);d.loaded=!0;var e=function(){c(a,f,window,document,void 0,d.options),r(b,!0)};d.d&&d.d.length?s(d.d,e):e()},c:{},loader:{addModule:function(b,c){u[b]=c,c.name=c.name||b,c.c||(c.c=[]),a.each(c.c,function(a,c){f.c[c]||(f.c[c]=[]),f.c[c].push(b)})},loadList:function(){var b=[],c=function(c,d){"string"==typeof d&&(d=[d]),a.merge(b,d),v.loadScript(c,!1,d)},d=function(c,d){if(r(c)||-1!=a.inArray(c,b))return!0;var e,f=u[c];return f?(e=f.test&&a.isFunction(f.test)?f.test(d):f.test,e?(r(c,!0),!0):!1):!0},e=function(b,c){if(b.d&&b.d.length){var e=function(b,e){d(e,c)||-1!=a.inArray(e,c)||c.push(e)};a.each(b.d,function(b,c){u[c]?u[c].loaded||e(b,c):q[c]&&(a.each(q[c],e),s(q[c],function(){r(c,!0)}))}),b.noAutoCallback||(b.noAutoCallback=!0)}};return function(g){var h,i,j,k,l=[],m=function(d,e){return k=e,a.each(f.c[e],function(c,d){return-1==a.inArray(d,l)||-1!=a.inArray(d,b)?(k=!1,!1):void 0}),k?(c("combos/"+k,f.c[k]),!1):void 0};for(i=0;i<g.length;i++)h=u[g[i]],h&&!d(h.name,g)&&(h.css&&p.loadStyles&&v.loadCSS(h.css),h.loadInit&&h.loadInit(),e(h,g),h.loaded||l.push(h.name),h.loaded=!0);for(i=0,j=l.length;j>i;i++)k=!1,h=l[i],-1==a.inArray(h,b)&&("noCombo"!=p.debug&&a.each(u[h].c,m),k||c(u[h].src||h,h))}}(),makePath:function(a){return-1!=a.indexOf("//")||0===a.indexOf("/")?a:(-1==a.indexOf(".")&&(a+=".js"),p.addCacheBuster&&(a+=p.addCacheBuster),p.basePath+a)},loadCSS:function(){var b,c={};return function(d){d=this.makePath(d),c[d]||(b=b||a("link, style")[0]||a("script")[0],c[d]=1,a('<link rel="stylesheet" />').insertBefore(b).attr({href:d}))}}(),loadScript:function(){var b={};return function(c,d,e,f){if(f||(c=v.makePath(c)),!b[c]){var g=function(){d&&d(),e&&("string"==typeof e&&(e=e.split(" ")),a.each(e,function(a,b){u[b]&&(u[b].afterLoad&&u[b].afterLoad(),r(u[b].noAutoCallback?b+"FileLoaded":b,!0))}))};b[c]=1,p.loadScript(c,g,a.noop)}}}()}});var p=f.cfg,q=f.features,r=f.isReady,s=f.ready,t=f.addPolyfill,u=f.modules,v=f.loader,w=v.loadList,x=v.addModule,y=f.bugs,z=[],A={warn:1,error:1},B=a.fn,C=b("video");f.addMethodName=function(a){a=a.split(":");var b=a[1];1==a.length?(b=a[0],a=a[0]):a=a[0],B[a]=function(){return this.callProp(b,arguments)}},B.callProp=function(b,c){var d;return c||(c=[]),this.each(function(){var e=a.prop(this,b);if(e&&e.apply){if(d=e.apply(this,c),void 0!==d)return!1}else f.warn(b+" is not a method of "+this)}),void 0!==d?d:this},f.activeLang=function(){"language"in e||(e.language=e.browserLanguage||"");var b=a.attr(document.documentElement,"lang")||e.language;return s("webshimLocalization",function(){f.activeLang(b)}),function(a){if(a)if("string"==typeof a)b=a;else if("object"==typeof a){var c=arguments,d=this;s("webshimLocalization",function(){f.activeLang.apply(d,c)})}return b}}(),f.errorLog=[],a.each(["log","error","warn","info"],function(a,b){f[b]=function(a){(A[b]&&p.debug!==!1||p.debug)&&(f.errorLog.push(a),window.console&&console.log&&console[console[b]?b:"log"](a))}}),function(){a.isDOMReady=a.isReady;var b=function(){a.isDOMReady=!0,r("DOM",!0),setTimeout(function(){r("WINDOWLOAD",!0)},9999)};c=function(){if(!c.run){if((p.debug||!("crossDomain"in p.ajax)&&location.protocol.indexOf("http"))&&(p.ajax.crossDomain=!0),!a.isDOMReady&&p.waitReady){var d=a.ready;a.ready=function(a){return a!==!0&&document.body&&b(),d.apply(this,arguments)},a.ready.promise=d.promise}p.readyEvt?a(document).one(p.readyEvt,b):a(b)}c.run=!0},a(window).on("load",function(){b(),setTimeout(function(){r("WINDOWLOAD",!0)},9)});var d=[],e=function(){1==this.nodeType&&f.triggerDomUpdate(this)};a.extend(f,{addReady:function(a){var b=function(b,c){f.ready("DOM",function(){a(b,c)})};d.push(b),p.wsdoc&&b(p.wsdoc,i)},triggerDomUpdate:function(b){if(!b||!b.nodeType)return void(b&&b.jquery&&b.each(function(){f.triggerDomUpdate(this)}));var c=b.nodeType;if(1==c||9==c){var e=b!==document?a(b):i;a.each(d,function(a,c){c(b,e)})}}}),B.clonePolyfill=B.clone,B.htmlPolyfill=function(b){if(!arguments.length)return a(this.clonePolyfill()).html();var c=B.html.call(this,b);return c===this&&a.isDOMReady&&this.each(e),c},B.jProp=function(){return this.pushStack(a(B.prop.apply(this,arguments)||[]))},a.each(["after","before","append","prepend","replaceWith"],function(b,c){B[c+"Polyfill"]=function(b){return b=a(b),B[c].call(this,b),a.isDOMReady&&b.each(e),this}}),a.each(["insertAfter","insertBefore","appendTo","prependTo","replaceAll"],function(b,c){B[c.replace(/[A-Z]/,function(a){return"Polyfill"+a})]=function(){return B[c].apply(this,arguments),a.isDOMReady&&f.triggerDomUpdate(this),this}}),B.updatePolyfill=function(){return a.isDOMReady&&f.triggerDomUpdate(this),this},a.each(["getNativeElement","getShadowElement","getShadowFocusElement"],function(a,b){B[b]=function(){return this.pushStack(this)}})}(),l.create&&(f.objectCreate=function(b,c,d){var e=l.create(b);return d&&(e.options=a.extend(!0,{},e.options||{},d),d=e.options),e._create&&a.isFunction(e._create)&&e._create(d),e}),x("swfmini",{test:function(){return window.swfobject&&!window.swfmini&&(window.swfmini=window.swfobject),"swfmini"in window},c:[16,7,2,8,1,12,23]}),u.swfmini.test(),x("sizzle",{test:a.expr.filters}),t("es5",{test:!(!k.ES5||!Function.prototype.bind),d:["sizzle"]}),t("dom-extend",{f:g,noAutoCallback:!0,d:["es5"],c:[16,7,2,15,30,3,8,4,9,10,25,31,34]}),b("picture"),t("picture",{test:"picturefill"in window||!!window.HTMLPictureElement,d:["matchMedia"],c:[18],loadInit:function(){r("picture",!0)}}),t("matchMedia",{test:!(!window.matchMedia||!matchMedia("all").addListener),c:[18]}),t("sticky",{test:-1!=(a(b("b")).attr("style","position: -webkit-sticky; position: sticky").css("position")||"").indexOf("sticky"),d:["es5","matchMedia"]}),t("es6",{test:!!(Math.imul&&Number.MIN_SAFE_INTEGER&&l.is&&window.Promise&&Promise.all),d:["es5"]}),t("geolocation",{test:"geolocation"in e,options:{destroyWrite:!0},c:[21]});var D="getUserMedia"in e;t("usermedia-core",{f:"usermedia",test:D&&window.URL,d:["url",g]}),t("usermedia-shim",{f:"usermedia",test:!!(D||e.webkitGetUserMedia||e.mozGetUserMedia||e.msGetUserMedia),d:["url","mediaelement",g]}),function(){t("canvas",{src:"excanvas",test:"getContext"in b("canvas"),options:{type:"flash"},noAutoCallback:!0,loadInit:function(){var a=this.options.type;!a||-1===a.indexOf("flash")||u.swfmini.test()&&!swfmini.hasFlashPlayerVersion("9.0.0")||(this.src="flash"==a?"FlashCanvas/flashcanvas":"FlashCanvasPro/flashcanvas")},methodNames:["getContext"],d:[g]})}(),function(){var c,d,h="form-shim-extend",i="formvalidation",j="form-number-date-api",l=!1,m=!1,o=!1,q={},r=b("progress"),s=b("output"),v=function(){var d,f,g="1(",j=b("input");if(f=a('<fieldset><textarea required="" /></fieldset>')[0],k.inputtypes=q,a.each(["range","date","datetime-local","month","color","number"],function(a,b){j.setAttribute("type",b),q[b]=j.type==b&&(j.value=g)&&j.value!=g}),k.datalist=!!("options"in b("datalist")&&window.HTMLDataListElement),k[i]="checkValidity"in j,k.fieldsetelements="elements"in f,k.fieldsetdisabled="disabled"in f){try{f.querySelector(":invalid")&&(f.disabled=!0,d=!f.querySelector(":invalid")&&f.querySelector(":disabled"))}catch(n){}k.fieldsetdisabled=!!d}if(k[i]&&(m=!(k.fieldsetdisabled&&k.fieldsetelements&&"value"in r&&"value"in s),o=m&&/Android/i.test(e.userAgent),l=window.opera||y.bustedValidity||m||!k.datalist,!l&&q.number)){l=!0;try{j.type="number",j.value="",j.stepUp(),l="1"!=j.value}catch(p){}}return y.bustedValidity=l,c=k[i]&&!l?"form-native-extend":h,v=a.noop,!1},w=function(b){var c=!0;return b._types||(b._types=b.types.split(" ")),a.each(b._types,function(a,b){return b in q&&!q[b]?(c=!1,!1):void 0}),c};f.validationMessages=f.validityMessages={langSrc:"i18n/formcfg-",availableLangs:"ar cs el es fa fr he hi hu it ja lt nl pl pt pt-BR pt-PT ru sv zh-CN zh-TW".split(" ")},f.formcfg=a.extend({},f.validationMessages),f.inputTypes={},t("form-core",{f:"forms",test:v,d:["es5"],options:{placeholderType:"value",messagePopover:{},list:{popover:{constrainWidth:!0}},iVal:{sel:".ws-validate",handleBubble:"hide",recheckDelay:400}},methodNames:["setCustomValidity","checkValidity","setSelectionRange"],c:[16,7,2,8,1,15,30,3,31]}),d=p.forms,t("form-native-extend",{f:"forms",test:function(b){return v(),!k[i]||l||-1==a.inArray(j,b||[])||u[j].test()},d:["form-core",g,"form-message"],c:[6,5,14,29]}),t(h,{f:"forms",test:function(){return v(),k[i]&&!l},d:["form-core",g,"sizzle"],c:[16,15,28]}),t(h+"2",{f:"forms",test:function(){return v(),k[i]&&!m},d:[h],c:[27]}),t("form-message",{f:"forms",test:function(a){return v(),!(d.customMessages||!k[i]||l||!u[c].test(a))},d:[g],c:[16,7,15,30,3,8,4,14,28]}),t(j,{f:"forms-ext",options:{types:"date time range number"},test:function(){v();var a=!l;return a&&(a=w(this.options)),a},methodNames:["stepUp","stepDown"],d:["forms",g],c:[6,5,17,14,28,29,33]}),x("range-ui",{options:{},noAutoCallback:!0,test:function(){return!!B.rangeUI},d:["es5"],c:[6,5,9,10,17,11]}),t("form-number-date-ui",{f:"forms-ext",test:function(){var a=this.options;return a.replaceUI=n(a.replaceUI),v(),!a.replaceUI&&o&&(a.replaceUI=!0),!a.replaceUI&&w(a)},d:["forms",g,j,"range-ui"],options:{widgets:{calculateWidth:!0,animate:!0}},c:[6,5,9,10,17,11]}),t("form-datalist",{f:"forms",test:function(){return v(),o&&(d.customDatalist=!0),k.datalist&&!d.fD},d:["form-core",g],c:[16,7,6,2,9,15,30,31,28,33]})}();var E="FileReader"in window&&"FormData"in window;return t("filereader-xhr",{f:"filereader",test:E,d:[g,"swfmini"],c:[25,27]}),t("canvas-blob",{f:"filereader",methodNames:["toBlob"],test:!(E&&!b("canvas").toBlob)}),t("details",{test:"open"in b("details"),d:[g],options:{text:"Details"},c:[21,22]}),t("url",{test:function(){var a=!1;try{a=new URL("b","http://a"),a=!(!a.searchParams||"http://a/b"!=a.href)}catch(b){}return a},d:["es5"]}),function(){f.mediaelement={};var c=b("track");if(k.mediaelement="canPlayType"in C,k.texttrackapi="addTextTrack"in C,k.track="kind"in c,b("audio"),!(y.track=!k.texttrackapi))try{y.track=!("oncuechange"in C.addTextTrack("metadata"))}catch(d){}t("mediaelement-core",{f:"mediaelement",noAutoCallback:!0,options:{jme:{},plugins:[],vars:{},params:{},attrs:{},changeSWF:a.noop},methodNames:["play","pause","canPlayType","mediaLoad:load"],d:["swfmini"],c:[16,7,2,8,1,12,13,23]}),t("mediaelement-jaris",{f:"mediaelement",d:["mediaelement-core",g],test:function(){var a=this.options;return!k.mediaelement||f.mediaelement.loadSwf?!1:(a.preferFlash&&!u.swfmini.test()&&(a.preferFlash=!1),!(a.preferFlash&&swfmini.hasFlashPlayerVersion("11.3")))},c:[21,25]}),t("track",{options:{positionDisplay:!0,override:y.track},test:function(){var a=this.options;return a.override=n(a.override),!a.override&&!y.track},d:["mediaelement",g],methodNames:["addTextTrack"],c:[21,12,13,22,34]}),x("jmebase",{src:"jme/base",c:[98,99,97]}),a.each([["mediacontrols",{c:[98,99],css:"jme/controls.css"}],["playlist",{c:[98,97]}],["alternate-media"]],function(b,c){x(c[0],a.extend({src:"jme/"+c[0],d:["jmebase"]},c[1]))}),x("track-ui",{d:["track",g]})}(),t("feature-dummy",{test:!0,loaded:!0,c:z}),f.$=a,a.webshims=f,a.webshim=webshim,f.callAsync=function(){f.callAsync=a.noop,j&&(j.cfg&&(j.cfg.length||(j.cfg=[[j.cfg]]),a.each(j.cfg,function(a,b){f.setOptions.apply(f,b)})),j.ready&&a.each(j.ready,function(a,b){f.ready.apply(f,b)}),j.lang&&f.activeLang(j.lang),"polyfill"in j&&f.polyfill(j.polyfill)),f.isReady("jquery",!0)},f.callAsync(),f});

/*! Picturefill - v2.2.0-beta - 2014-11-19
* http://scottjehl.github.io/picturefill
* Copyright (c) 2014 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(a,b,c){"use strict";function d(a){var b,c,d,e,g,h=a||{};b=h.elements||f.getAllElements();for(var i=0,j=b.length;j>i;i++)if(c=b[i],d=c.parentNode,e=void 0,g=void 0,"IMG"===c.nodeName.toUpperCase()&&(c[f.ns]||(c[f.ns]={}),h.reevaluate||!c[f.ns].evaluated)){if("PICTURE"===d.nodeName.toUpperCase()){if(f.removeVideoShim(d),e=f.getMatch(c,d),e===!1)continue}else e=void 0;("PICTURE"===d.nodeName.toUpperCase()||c.srcset&&!f.srcsetSupported||!f.sizesSupported&&c.srcset&&c.srcset.indexOf("w")>-1)&&f.dodgeSrcset(c),e?(g=f.processSourceSet(e),f.applyBestCandidate(g,c)):(g=f.processSourceSet(c),(void 0===c.srcset||c[f.ns].srcset)&&f.applyBestCandidate(g,c)),c[f.ns].evaluated=!0}}function e(){function c(){var b;a._picturefillWorking||(a._picturefillWorking=!0,a.clearTimeout(b),b=a.setTimeout(function(){d({reevaluate:!0}),a._picturefillWorking=!1},60))}d();var e=setInterval(function(){return d(),/^loaded|^i|^c/.test(b.readyState)?void clearInterval(e):void 0},250);a.addEventListener?a.addEventListener("resize",c,!1):a.attachEvent&&a.attachEvent("onresize",c)}if(a.HTMLPictureElement)return void(a.picturefill=function(){});b.createElement("picture");var f={};f.ns="picturefill",function(){f.srcsetSupported="srcset"in c,f.sizesSupported="sizes"in c}(),f.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},f.endsWith=function(a,b){return a.endsWith?a.endsWith(b):-1!==a.indexOf(b,a.length-b.length)},f.restrictsMixedContent=function(){return"https:"===a.location.protocol},f.matchesMedia=function(b){return a.matchMedia&&a.matchMedia(b).matches},f.getDpr=function(){return a.devicePixelRatio||1},f.getWidthFromLength=function(a){a=a&&a.indexOf("%")>-1==!1&&(parseFloat(a)>0||a.indexOf("calc(")>-1)?a:"100vw",a=a.replace("vw","%"),f.lengthEl||(f.lengthEl=b.createElement("div"),f.lengthEl.style.cssText="border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden"),f.lengthEl.style.width=a,b.body.appendChild(f.lengthEl),f.lengthEl.className="helper-from-picturefill-js",f.lengthEl.offsetWidth<=0&&(f.lengthEl.style.width=b.documentElement.offsetWidth+"px");var c=f.lengthEl.offsetWidth;return b.body.removeChild(f.lengthEl),c},f.types={},f.types["image/jpeg"]=!0,f.types["image/gif"]=!0,f.types["image/png"]=!0,f.types["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),f.types["image/webp"]=function(){var a="image/webp";c.onerror=function(){f.types[a]=!1,d()},c.onload=function(){f.types[a]=1===c.width,d()},c.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="},f.verifyTypeSupport=function(a){var b=a.getAttribute("type");return null===b||""===b?!0:"function"==typeof f.types[b]?(f.types[b](),"pending"):f.types[b]},f.parseSize=function(a){var b=/(\([^)]+\))?\s*(.+)/g.exec(a);return{media:b&&b[1],length:b&&b[2]}},f.findWidthFromSourceSize=function(a){for(var b,c=f.trim(a).split(/\s*,\s*/),d=0,e=c.length;e>d;d++){var g=c[d],h=f.parseSize(g),i=h.length,j=h.media;if(i&&(!j||f.matchesMedia(j))){b=i;break}}return f.getWidthFromLength(b)},f.parseSrcset=function(a){for(var b=[];""!==a;){a=a.replace(/^\s+/g,"");var c,d=a.search(/\s/g),e=null;if(-1!==d){c=a.slice(0,d);var f=c.slice(-1);if((","===f||""===c)&&(c=c.replace(/,+$/,""),e=""),a=a.slice(d+1),null===e){var g=a.indexOf(",");-1!==g?(e=a.slice(0,g),a=a.slice(g+1)):(e=a,a="")}}else c=a,a="";(c||e)&&b.push({url:c,descriptor:e})}return b},f.parseDescriptor=function(a,b){var c,d=b||"100vw",e=a&&a.replace(/(^\s+|\s+$)/g,""),g=f.findWidthFromSourceSize(d);if(e)for(var h=e.split(" "),i=h.length-1;i>=0;i--){var j=h[i],k=j&&j.slice(j.length-1);if("h"!==k&&"w"!==k||f.sizesSupported){if("x"===k){var l=j&&parseFloat(j,10);c=l&&!isNaN(l)?l:1}}else c=parseFloat(parseInt(j,10)/g)}return c||1},f.getCandidatesFromSourceSet=function(a,b){for(var c=f.parseSrcset(a),d=[],e=0,g=c.length;g>e;e++){var h=c[e];d.push({url:h.url,resolution:f.parseDescriptor(h.descriptor,b)})}return d},f.dodgeSrcset=function(a){a.srcset&&(a[f.ns].srcset=a.srcset,a.removeAttribute("srcset"))},f.processSourceSet=function(a){var b=a.getAttribute("srcset"),c=a.getAttribute("sizes"),d=[];return"IMG"===a.nodeName.toUpperCase()&&a[f.ns]&&a[f.ns].srcset&&(b=a[f.ns].srcset),b&&(d=f.getCandidatesFromSourceSet(b,c)),d},f.applyBestCandidate=function(a,b){var c,d,e;a.sort(f.ascendingSort),d=a.length,e=a[d-1];for(var g=0;d>g;g++)if(c=a[g],c.resolution>=f.getDpr()){e=c;break}if(e&&!f.endsWith(b.src,e.url))if(f.restrictsMixedContent()&&"http:"===e.url.substr(0,"http:".length).toLowerCase())void 0!==typeof console&&console.warn("Blocked mixed content image "+e.url);else{b.src=e.url,b.currentSrc=b.src;var h=b.style||{},i="webkitBackfaceVisibility"in h,j=h.zoom;i&&(h.zoom=".999",i=b.offsetWidth,h.zoom=j)}},f.ascendingSort=function(a,b){return a.resolution-b.resolution},f.removeVideoShim=function(a){var b=a.getElementsByTagName("video");if(b.length){for(var c=b[0],d=c.getElementsByTagName("source");d.length;)a.insertBefore(d[0],c);c.parentNode.removeChild(c)}},f.getAllElements=function(){for(var a=[],c=b.getElementsByTagName("img"),d=0,e=c.length;e>d;d++){var g=c[d];("PICTURE"===g.parentNode.nodeName.toUpperCase()||null!==g.getAttribute("srcset")||g[f.ns]&&null!==g[f.ns].srcset)&&a.push(g)}return a},f.getMatch=function(a,b){for(var c,d=b.childNodes,e=0,g=d.length;g>e;e++){var h=d[e];if(1===h.nodeType){if(h===a)return c;if("SOURCE"===h.nodeName.toUpperCase()){null!==h.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var i=h.getAttribute("media");if(h.getAttribute("srcset")&&(!i||f.matchesMedia(i))){var j=f.verifyTypeSupport(h);if(j===!0){c=h;break}if("pending"===j)return!1}}}}return c},e(),d._=f,"object"==typeof module&&"object"==typeof module.exports?module.exports=d:"function"==typeof define&&define.amd?define(function(){return d}):"object"==typeof a&&(a.picturefill=d)}(this,this.document,new this.Image);

/* Respond.js: min/max-width media query polyfill. (c) Scott Jehl. MIT Lic. j.mp/respondjs  */
(function( w ){

	"use strict";

	//exposed namespace
	var respond = {};
	w.respond = respond;

	//define update even in native-mq-supporting browsers, to avoid errors
	respond.update = function(){};

	//define ajax obj
	var requestQueue = [],
		xmlHttp = (function() {
			var xmlhttpmethod = false;
			try {
				xmlhttpmethod = new w.XMLHttpRequest();
			}
			catch( e ){
				xmlhttpmethod = new w.ActiveXObject( "Microsoft.XMLHTTP" );
			}
			return function(){
				return xmlhttpmethod;
			};
		})(),

		//tweaked Ajax functions from Quirksmode
		ajax = function( url, callback ) {
			var req = xmlHttp();
			if (!req){
				return;
			}
			req.open( "GET", url, true );
			req.onreadystatechange = function () {
				if ( req.readyState !== 4 || req.status !== 200 && req.status !== 304 ){
					return;
				}
				callback( req.responseText );
			};
			if ( req.readyState === 4 ){
				return;
			}
			req.send( null );
		},
		isUnsupportedMediaQuery = function( query ) {
			return query.replace( respond.regex.minmaxwh, '' ).match( respond.regex.other );
		};

	//expose for testing
	respond.ajax = ajax;
	respond.queue = requestQueue;
	respond.unsupportedmq = isUnsupportedMediaQuery;
	respond.regex = {
		media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
		keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
		comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,
		urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
		findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
		only: /(only\s+)?([a-zA-Z]+)\s?/,
		minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
		maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
		minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
		other: /\([^\)]*\)/g
	};

	//expose media query support flag for external use
	respond.mediaQueriesSupported = w.matchMedia && w.matchMedia( "only all" ) !== null && w.matchMedia( "only all" ).matches;

	//if media queries are supported, exit here
	if( respond.mediaQueriesSupported ){
		return;
	}

	//define vars
	var doc = w.document,
		docElem = doc.documentElement,
		mediastyles = [],
		rules = [],
		appendedEls = [],
		parsedSheets = {},
		resizeThrottle = 30,
		head = doc.getElementsByTagName( "head" )[0] || docElem,
		base = doc.getElementsByTagName( "base" )[0],
		links = head.getElementsByTagName( "link" ),

		lastCall,
		resizeDefer,

		//cached container for 1em value, populated the first time it's needed
		eminpx,

		// returns the value of 1em in pixels
		getEmValue = function() {
			var ret,
				div = doc.createElement('div'),
				body = doc.body,
				originalHTMLFontSize = docElem.style.fontSize,
				originalBodyFontSize = body && body.style.fontSize,
				fakeUsed = false;

			div.style.cssText = "position:absolute;font-size:1em;width:1em";

			if( !body ){
				body = fakeUsed = doc.createElement( "body" );
				body.style.background = "none";
			}

			// 1em in a media query is the value of the default font size of the browser
			// reset docElem and body to ensure the correct value is returned
			docElem.style.fontSize = "100%";
			body.style.fontSize = "100%";

			body.appendChild( div );

			if( fakeUsed ){
				docElem.insertBefore( body, docElem.firstChild );
			}

			ret = div.offsetWidth;

			if( fakeUsed ){
				docElem.removeChild( body );
			}
			else {
				body.removeChild( div );
			}

			// restore the original values
			docElem.style.fontSize = originalHTMLFontSize;
			if( originalBodyFontSize ) {
				body.style.fontSize = originalBodyFontSize;
			}


			//also update eminpx before returning
			ret = eminpx = parseFloat(ret);

			return ret;
		},

		//enable/disable styles
		applyMedia = function( fromResize ){
			var name = "clientWidth",
				docElemProp = docElem[ name ],
				currWidth = doc.compatMode === "CSS1Compat" && docElemProp || doc.body[ name ] || docElemProp,
				styleBlocks	= {},
				lastLink = links[ links.length-1 ],
				now = (new Date()).getTime();

			//throttle resize calls
			if( fromResize && lastCall && now - lastCall < resizeThrottle ){
				w.clearTimeout( resizeDefer );
				resizeDefer = w.setTimeout( applyMedia, resizeThrottle );
				return;
			}
			else {
				lastCall = now;
			}

			for( var i in mediastyles ){
				if( mediastyles.hasOwnProperty( i ) ){
					var thisstyle = mediastyles[ i ],
						min = thisstyle.minw,
						max = thisstyle.maxw,
						minnull = min === null,
						maxnull = max === null,
						em = "em";

					if( !!min ){
						min = parseFloat( min ) * ( min.indexOf( em ) > -1 ? ( eminpx || getEmValue() ) : 1 );
					}
					if( !!max ){
						max = parseFloat( max ) * ( max.indexOf( em ) > -1 ? ( eminpx || getEmValue() ) : 1 );
					}

					// if there's no media query at all (the () part), or min or max is not null, and if either is present, they're true
					if( !thisstyle.hasquery || ( !minnull || !maxnull ) && ( minnull || currWidth >= min ) && ( maxnull || currWidth <= max ) ){
						if( !styleBlocks[ thisstyle.media ] ){
							styleBlocks[ thisstyle.media ] = [];
						}
						styleBlocks[ thisstyle.media ].push( rules[ thisstyle.rules ] );
					}
				}
			}

			//remove any existing respond style element(s)
			for( var j in appendedEls ){
				if( appendedEls.hasOwnProperty( j ) ){
					if( appendedEls[ j ] && appendedEls[ j ].parentNode === head ){
						head.removeChild( appendedEls[ j ] );
					}
				}
			}
			appendedEls.length = 0;

			//inject active styles, grouped by media type
			for( var k in styleBlocks ){
				if( styleBlocks.hasOwnProperty( k ) ){
					var ss = doc.createElement( "style" ),
						css = styleBlocks[ k ].join( "\n" );

					ss.type = "text/css";
					ss.media = k;

					//originally, ss was appended to a documentFragment and sheets were appended in bulk.
					//this caused crashes in IE in a number of circumstances, such as when the HTML element had a bg image set, so appending beforehand seems best. Thanks to @dvelyk for the initial research on this one!
					head.insertBefore( ss, lastLink.nextSibling );

					if ( ss.styleSheet ){
						ss.styleSheet.cssText = css;
					}
					else {
						ss.appendChild( doc.createTextNode( css ) );
					}

					//push to appendedEls to track for later removal
					appendedEls.push( ss );
				}
			}
		},
		//find media blocks in css text, convert to style blocks
		translate = function( styles, href, media ){
			var qs = styles.replace( respond.regex.comments, '' )
					.replace( respond.regex.keyframes, '' )
					.match( respond.regex.media ),
				ql = qs && qs.length || 0;

			//try to get CSS path
			href = href.substring( 0, href.lastIndexOf( "/" ) );

			var repUrls = function( css ){
					return css.replace( respond.regex.urls, "$1" + href + "$2$3" );
				},
				useMedia = !ql && media;

			//if path exists, tack on trailing slash
			if( href.length ){ href += "/"; }

			//if no internal queries exist, but media attr does, use that
			//note: this currently lacks support for situations where a media attr is specified on a link AND
				//its associated stylesheet has internal CSS media queries.
				//In those cases, the media attribute will currently be ignored.
			if( useMedia ){
				ql = 1;
			}

			for( var i = 0; i < ql; i++ ){
				var fullq, thisq, eachq, eql;

				//media attr
				if( useMedia ){
					fullq = media;
					rules.push( repUrls( styles ) );
				}
				//parse for styles
				else{
					fullq = qs[ i ].match( respond.regex.findStyles ) && RegExp.$1;
					rules.push( RegExp.$2 && repUrls( RegExp.$2 ) );
				}

				eachq = fullq.split( "," );
				eql = eachq.length;

				for( var j = 0; j < eql; j++ ){
					thisq = eachq[ j ];

					if( isUnsupportedMediaQuery( thisq ) ) {
						continue;
					}

					mediastyles.push( {
						media : thisq.split( "(" )[ 0 ].match( respond.regex.only ) && RegExp.$2 || "all",
						rules : rules.length - 1,
						hasquery : thisq.indexOf("(") > -1,
						minw : thisq.match( respond.regex.minw ) && parseFloat( RegExp.$1 ) + ( RegExp.$2 || "" ),
						maxw : thisq.match( respond.regex.maxw ) && parseFloat( RegExp.$1 ) + ( RegExp.$2 || "" )
					} );
				}
			}

			applyMedia();
		},

		//recurse through request queue, get css text
		makeRequests = function(){
			if( requestQueue.length ){
				var thisRequest = requestQueue.shift();

				ajax( thisRequest.href, function( styles ){
					translate( styles, thisRequest.href, thisRequest.media );
					parsedSheets[ thisRequest.href ] = true;

					// by wrapping recursive function call in setTimeout
					// we prevent "Stack overflow" error in IE7
					w.setTimeout(function(){ makeRequests(); },0);
				} );
			}
		},

		//loop stylesheets, send text content to translate
		ripCSS = function(){

			for( var i = 0; i < links.length; i++ ){
				var sheet = links[ i ],
				href = sheet.href,
				media = sheet.media,
				isCSS = sheet.rel && sheet.rel.toLowerCase() === "stylesheet";

				//only links plz and prevent re-parsing
				if( !!href && isCSS && !parsedSheets[ href ] ){
					// selectivizr exposes css through the rawCssText expando
					if (sheet.styleSheet && sheet.styleSheet.rawCssText) {
						translate( sheet.styleSheet.rawCssText, href, media );
						parsedSheets[ href ] = true;
					} else {
						if( (!/^([a-zA-Z:]*\/\/)/.test( href ) && !base) ||
							href.replace( RegExp.$1, "" ).split( "/" )[0] === w.location.host ){
							// IE7 doesn't handle urls that start with '//' for ajax request
							// manually add in the protocol
							if ( href.substring(0,2) === "//" ) { href = w.location.protocol + href; }
							requestQueue.push( {
								href: href,
								media: media
							} );
						}
					}
				}
			}
			makeRequests();
		};

	//translate CSS
	ripCSS();

	//expose update for re-running respond later on
	respond.update = ripCSS;

	//expose getEmValue
	respond.getEmValue = getEmValue;

	//adjust on resize
	function callMedia(){
		applyMedia( true );
	}

	if( w.addEventListener ){
		w.addEventListener( "resize", callMedia, false );
	}
	else if( w.attachEvent ){
		w.attachEvent( "onresize", callMedia );
	}
})(this);



// @codekit-prepend "vendor/modernizr.js";
// @codekit-prepend "vendor/polyfiller.js";
// @codekit-prepend "vendor/picturefill.min.js";
// @codekit-prepend "vendor/respond.js";

$(function(){


 	// Makes the tabs work
    //$( ".tabs" ).tabs();
  
  	$(".nav select").change(function() {
	  window.location = $(this).find("option:selected").val();
	});
  
});

