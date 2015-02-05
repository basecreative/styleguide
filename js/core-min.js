window.Modernizr=function(e,t,n){function r(e){v.cssText=e}function i(e,t){return r(x.join(e+";")+(t||""))}function a(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var r in e){var i=e[r];if(!o(i,"-")&&v[i]!==n)return"pfx"==t?i:!0}return!1}function c(e,t,r){for(var i in e){var o=t[e[i]];if(o!==n)return r===!1?e[i]:a(o,"function")?o.bind(r||t):o}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+E.join(r+" ")+r).split(" ");return a(t,"string")||a(t,"undefined")?s(i,t):(i=(e+" "+T.join(r+" ")+r).split(" "),c(i,t,n))}function u(){f.input=function(n){for(var r=0,i=n.length;i>r;r++)M[n[r]]=n[r]in y;return M.list&&(M.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),M}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),f.inputtypes=function(e){for(var r=0,i,a,o,s=e.length;s>r;r++)y.setAttribute("type",a=e[r]),i="text"!==y.type,i&&(y.value=w,y.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(a)&&y.style.WebkitAppearance!==n?(p.appendChild(y),o=t.defaultView,i=o.getComputedStyle&&"textfield"!==o.getComputedStyle(y,null).WebkitAppearance&&0!==y.offsetHeight,p.removeChild(y)):/^(search|tel)$/.test(a)||(i=/^(url|email)$/.test(a)?y.checkValidity&&y.checkValidity()===!1:y.value!=w)),A[e[r]]=!!i;return A}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",f={},m=!0,p=t.documentElement,h="modernizr",g=t.createElement(h),v=g.style,y=t.createElement("input"),w=":)",b={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),S="Webkit Moz O ms",E=S.split(" "),T=S.toLowerCase().split(" "),C={svg:"http://www.w3.org/2000/svg"},k={},A={},M={},N=[],j=N.slice,P,L=function(e,n,r,i){var a,o,s,c,l=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(r,10))for(;r--;)s=t.createElement("div"),s.id=i?i[r]:h+(r+1),l.appendChild(s);return a=["&#173;",'<style id="s',h,'">',e,"</style>"].join(""),l.id=h,(u?l:d).innerHTML+=a,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",c=p.style.overflow,p.style.overflow="hidden",p.appendChild(d)),o=n(l,e),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),p.style.overflow=c),!!o},R=function(){function e(e,i){i=i||t.createElement(r[e]||"div"),e="on"+e;var o=e in i;return o||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(e,""),o=a(i[e],"function"),a(i[e],"undefined")||(i[e]=n),i.removeAttribute(e))),i=null,o}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),D={}.hasOwnProperty,O;O=a(D,"undefined")||a(D.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return D.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=j.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var a=new i,o=t.apply(a,n.concat(j.call(arguments)));return Object(o)===o?o:a}return t.apply(e,n.concat(j.call(arguments)))};return r}),k.flexbox=function(){return l("flexWrap")},k.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},k.canvastext=function(){return!!f.canvas&&!!a(t.createElement("canvas").getContext("2d").fillText,"function")},k.webgl=function(){return!!e.WebGLRenderingContext},k.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:L(["@media (",x.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},k.geolocation=function(){return"geolocation"in navigator},k.postmessage=function(){return!!e.postMessage},k.websqldatabase=function(){return!!e.openDatabase},k.indexedDB=function(){return!!l("indexedDB",e)},k.hashchange=function(){return R("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},k.history=function(){return!!e.history&&!!history.pushState},k.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},k.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},k.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),o(v.backgroundColor,"rgba")},k.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),o(v.backgroundColor,"rgba")||o(v.backgroundColor,"hsla")},k.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(v.background)},k.backgroundsize=function(){return l("backgroundSize")},k.borderimage=function(){return l("borderImage")},k.borderradius=function(){return l("borderRadius")},k.boxshadow=function(){return l("boxShadow")},k.textshadow=function(){return""===t.createElement("div").style.textShadow},k.opacity=function(){return i("opacity:.55"),/^0.55$/.test(v.opacity)},k.cssanimations=function(){return l("animationName")},k.csscolumns=function(){return l("columnCount")},k.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+x.join(n+e)).slice(0,-e.length)),o(v.backgroundImage,"gradient")},k.cssreflections=function(){return l("boxReflect")},k.csstransforms=function(){return!!l("transform")},k.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in p.style&&L("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},k.csstransitions=function(){return l("transition")},k.fontface=function(){var e;return L('@font-face {font-family:"font";src:url("https://")}',function(n,r){var i=t.getElementById("smodernizr"),a=i.sheet||i.styleSheet,o=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";e=/src/i.test(o)&&0===o.indexOf(r.split(" ")[0])}),e},k.generatedcontent=function(){var e;return L(["#",h,"{font:0/0 a}#",h,':after{content:"',w,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},k.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},k.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},k.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(e){return!1}},k.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(e){return!1}},k.webworkers=function(){return!!e.Worker},k.applicationcache=function(){return!!e.applicationCache},k.svg=function(){return!!t.createElementNS&&!!t.createElementNS(C.svg,"svg").createSVGRect},k.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==C.svg},k.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(b.call(t.createElementNS(C.svg,"animate")))},k.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(b.call(t.createElementNS(C.svg,"clipPath")))};for(var z in k)O(k,z)&&(P=z.toLowerCase(),f[P]=k[z](),N.push((f[P]?"":"no-")+P));return f.input||u(),f.addTest=function(e,t){if("object"==typeof e)for(var r in e)O(e,r)&&f.addTest(r,e[r]);else{if(e=e.toLowerCase(),f[e]!==n)return f;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(p.className+=" "+(t?"":"no-")+e),f[e]=t}return f},r(""),g=y=null,f._version=d,f._prefixes=x,f._domPrefixes=T,f._cssomPrefixes=E,f.hasEvent=R,f.testProp=function(e){return s([e])},f.testAllProps=l,f.testStyles=L,f.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},p.className=p.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+N.join(" "):""),f}(this,this.document),function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=E.elements;return"string"==typeof e?e.split(" "):e}function i(e){var t=x[e[w]];return t||(t={},b++,e[w]=b,x[b]=t),t}function a(e,n,r){if(n||(n=t),S)return n.createElement(e);r||(r=i(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():v.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||g.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function o(e,n){if(e||(e=t),S)return e.createDocumentFragment();n=n||i(e);for(var a=n.frag.cloneNode(),o=0,s=r(),c=s.length;c>o;o++)a.createElement(s[o]);return a}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return E.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(E,t.frag)}function c(e){e||(e=t);var r=i(e);return E.shivCSS&&!y&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),S||s(e,r),e}function l(e){for(var t,n=e.getElementsByTagName("*"),i=n.length,a=RegExp("^(?:"+r().join("|")+")$","i"),o=[];i--;)t=n[i],a.test(t.nodeName)&&o.push(t.applyElement(u(t)));return o}function u(e){for(var t,n=e.attributes,r=n.length,i=e.ownerDocument.createElement(C+":"+e.nodeName);r--;)t=n[r],t.specified&&i.setAttribute(t.nodeName,t.nodeValue);return i.style.cssText=e.style.cssText,i}function d(e){for(var t,n=e.split("{"),i=n.length,a=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),o="$1"+C+"\\:$2";i--;)t=n[i]=n[i].split("}"),t[t.length-1]=t[t.length-1].replace(a,o),n[i]=t.join("}");return n.join("{")}function f(e){for(var t=e.length;t--;)e[t].removeNode()}function m(e){function t(){clearTimeout(o._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,a,o=i(e),s=e.namespaces,c=e.parentWindow;return!k||e.printShived?e:("undefined"==typeof s[C]&&s.add(C),c.attachEvent("onbeforeprint",function(){t();for(var i,o,s,c=e.styleSheets,u=[],f=c.length,m=Array(f);f--;)m[f]=c[f];for(;s=m.pop();)if(!s.disabled&&T.test(s.media)){try{i=s.imports,o=i.length}catch(p){o=0}for(f=0;o>f;f++)m.push(i[f]);try{u.push(s.cssText)}catch(p){}}u=d(u.reverse().join("")),a=l(e),r=n(e,u)}),c.attachEvent("onafterprint",function(){f(a),clearTimeout(o._removeSheetTimer),o._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var p="3.7.0",h=e.html5||{},g=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,v=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,y,w="_html5shiv",b=0,x={},S;!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",y="hidden"in e,S=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){y=!0,S=!0}}();var E={elements:h.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:p,shivCSS:h.shivCSS!==!1,supportsUnknownElements:S,shivMethods:h.shivMethods!==!1,type:"default",shivDocument:c,createElement:a,createDocumentFragment:o};e.html5=E,c(t);var T=/^$|\b(?:all|print)\b/,C="html5shiv",k=!S&&function(){var n=t.documentElement;return"undefined"!=typeof t.namespaces&&"undefined"!=typeof t.parentWindow&&"undefined"!=typeof n.applyElement&&"undefined"!=typeof n.removeNode&&"undefined"!=typeof e.attachEvent}();E.type+=" print",E.shivPrint=m,m(t)}(this,document),!function(e){var t=function(){window.asyncWebshims||(window.asyncWebshims={cfg:[],ready:[]})},n=function(){window.jQuery&&(e(jQuery),e=function(){return window.webshims})};window.webshims={setOptions:function(){t(),window.asyncWebshims.cfg.push(arguments)},ready:function(){t(),window.asyncWebshims.ready.push(arguments)},activeLang:function(e){t(),window.asyncWebshims.lang=e},polyfill:function(e){t(),window.asyncWebshims.polyfill=e},_curScript:function(){var e,t,n,r,i,a=document.currentScript;if(!a){try{throw new Error("")}catch(o){for(n=(o.sourceURL||o.stack||"").split("\n"),i=/(?:fil|htt|wid|abo|app|res)(.)+/i,t=0;t<n.length;t++)if(r=n[t].match(i)){n=r[0].replace(/[\:\s\(]+[\d\:\)\(\s]+$/,"");break}}for(e=document.scripts||document.getElementsByTagName("script"),t=0;t<e.length&&(!e[t].getAttribute("src")||(a=e[t],"interactive"!=e[t].readyState&&n!=e[t].src));t++);}return a}()},window.webshim=window.webshims,window.webshims.timer=setInterval(n,0),n(),"function"==typeof define&&define.amd&&define("polyfiller",["jquery"],e)}(function(e){"use strict";function t(e){return document.createElement(e)}var n,r,i=window.navigator,a=window.webshims,o="dom-support",s=e.event.special,c=e([]),l=window.asyncWebshims,u={},d=window.Object,f=function(e){return e+"\n//# sourceURL="+this.url},m=function(e){return h.enhanceAuto||"auto"!=e?e:!1},p={matchmedia:"matchMedia",xhr2:"filereader",promise:"es6",URL:"url"};clearInterval(a.timer),u.advancedObjectProperties=u.objectAccessor=u.ES5=!!("create"in d&&"seal"in d),!u.ES5||"toJSON"in Date.prototype||(u.ES5=!1),r=e.support.hrefNormalized===!1?a._curScript.getAttribute("src",4):a._curScript.src,r=r.split("?")[0].slice(0,r.lastIndexOf("/")+1)+"shims/",e.extend(a,{version:"1.15.3",cfg:{enhanceAuto:window.Audio&&(!window.matchMedia||matchMedia("(min-device-width: 721px)").matches),waitReady:!0,loadStyles:!0,wsdoc:document,wspopover:{appendTo:"auto",hideOnBlur:!0},ajax:{},loadScript:function(t,n){e.ajax(e.extend({},h.ajax,{url:t,success:n,dataType:"script",cache:!0,global:!1,dataFilter:f}))},basePath:r},support:u,bugs:{},modules:{},features:{},featureList:[],setOptions:function(t,n){"string"==typeof t&&arguments.length>1?h[t]=e.isPlainObject(n)?e.extend(!0,h[t]||{},n):n:"object"==typeof t&&e.extend(!0,h,t)},_getAutoEnhance:m,addPolyfill:function(t,n){n=n||{};var r=n.f||t;g[r]||(g[r]=[],a.featureList.push(r),h[r]={}),g[r].push(t),n.options=e.extend(h[r],n.options),E(t,n),n.methodNames&&e.each(n.methodNames,function(e,t){a.addMethodName(t)})},polyfill:function(){return function(e){return e||(e=a.featureList),"string"==typeof e&&(e=e.split(" ")),a._polyfill(e)}}(),_polyfill:function(t){var r,i=[];n.run||(r=-1!==e.inArray("forms-ext",t),n(),r&&-1==e.inArray("forms",t)&&t.push("forms"),h.loadStyles&&x.loadCSS("styles/shim"+(r&&!b["form-number-date-ui"].test()?"-ext":"")+".css")),h.waitReady&&(e.readyWait++,y(t,function(){e.ready(!0)})),e.each(t,function(e,t){return t=p[t]||t,g[t]?(t!==g[t][0]&&y(g[t],function(){v(t,!0)}),void(i=i.concat(g[t]))):void v(t,!0)}),S(i),e.each(t,function(e,t){var n=h[t];n&&("mediaelement"==t&&(n.replaceUI=m(n.replaceUI))&&n.plugins.unshift("mediacontrols"),n.plugins&&n.plugins.length&&S(h[t].plugins))})},reTest:function(){var t,n=function(n,r){var i=b[r],a=r+"Ready";!i||i.loaded||(i.test&&e.isFunction(i.test)?i.test([]):i.test)||(s[a]&&delete s[a],g[i.f],t.push(r))};return function(r){"string"==typeof r&&(r=r.split(" ")),t=[],e.each(r,n),S(t)}}(),isReady:function(t,n){if(t+="Ready",n){if(s[t]&&s[t].add)return!0;s[t]=e.extend(s[t]||{},{add:function(e){e.handler.call(this,t)}}),e(document).triggerHandler(t)}return!(!s[t]||!s[t].add)||!1},ready:function(t,n){var r=arguments[2];if("string"==typeof t&&(t=t.split(" ")),r||(t=e.map(e.grep(t,function(e){return!v(e)}),function(e){return e+"Ready"})),!t.length)return void n(e,a,window,document);var i=t.shift(),o=function(){y(t,n,!0)};e(document).one(i,o)},capturingEvents:function(t,n){document.addEventListener&&("string"==typeof t&&(t=[t]),e.each(t,function(t,r){var i=function(t){return t=e.event.fix(t),n&&a.capturingEventPrevented&&a.capturingEventPrevented(t),e.event.dispatch.call(this,t)};s[r]=s[r]||{},s[r].setup||s[r].teardown||e.extend(s[r],{setup:function(){this.addEventListener(r,i,!0)},teardown:function(){this.removeEventListener(r,i,!0)}})}))},register:function(t,n){var r=b[t];if(!r)return void a.error("can't find module: "+t);r.loaded=!0;var i=function(){n(e,a,window,document,void 0,r.options),v(t,!0)};r.d&&r.d.length?y(r.d,i):i()},c:{},loader:{addModule:function(t,n){b[t]=n,n.name=n.name||t,n.c||(n.c=[]),e.each(n.c,function(e,n){a.c[n]||(a.c[n]=[]),a.c[n].push(t)})},loadList:function(){var t=[],n=function(n,r){"string"==typeof r&&(r=[r]),e.merge(t,r),x.loadScript(n,!1,r)},r=function(n,r){if(v(n)||-1!=e.inArray(n,t))return!0;var i,a=b[n];return a?(i=a.test&&e.isFunction(a.test)?a.test(r):a.test,i?(v(n,!0),!0):!1):!0},i=function(t,n){if(t.d&&t.d.length){var i=function(t,i){r(i,n)||-1!=e.inArray(i,n)||n.push(i)};e.each(t.d,function(t,n){b[n]?b[n].loaded||i(t,n):g[n]&&(e.each(g[n],i),y(g[n],function(){v(n,!0)}))}),t.noAutoCallback||(t.noAutoCallback=!0)}};return function(o){var s,c,l,u,d=[],f=function(r,i){return u=i,e.each(a.c[i],function(n,r){return-1==e.inArray(r,d)||-1!=e.inArray(r,t)?(u=!1,!1):void 0}),u?(n("combos/"+u,a.c[u]),!1):void 0};for(c=0;c<o.length;c++)s=b[o[c]],s&&!r(s.name,o)&&(s.css&&h.loadStyles&&x.loadCSS(s.css),s.loadInit&&s.loadInit(),i(s,o),s.loaded||d.push(s.name),s.loaded=!0);for(c=0,l=d.length;l>c;c++)u=!1,s=d[c],-1==e.inArray(s,t)&&("noCombo"!=h.debug&&e.each(b[s].c,f),u||n(b[s].src||s,s))}}(),makePath:function(e){return-1!=e.indexOf("//")||0===e.indexOf("/")?e:(-1==e.indexOf(".")&&(e+=".js"),h.addCacheBuster&&(e+=h.addCacheBuster),h.basePath+e)},loadCSS:function(){var t,n={};return function(r){r=this.makePath(r),n[r]||(t=t||e("link, style")[0]||e("script")[0],n[r]=1,e('<link rel="stylesheet" />').insertBefore(t).attr({href:r}))}}(),loadScript:function(){var t={};return function(n,r,i,a){if(a||(n=x.makePath(n)),!t[n]){var o=function(){r&&r(),i&&("string"==typeof i&&(i=i.split(" ")),e.each(i,function(e,t){b[t]&&(b[t].afterLoad&&b[t].afterLoad(),v(b[t].noAutoCallback?t+"FileLoaded":t,!0))}))};t[n]=1,h.loadScript(n,o,e.noop)}}}()}});var h=a.cfg,g=a.features,v=a.isReady,y=a.ready,w=a.addPolyfill,b=a.modules,x=a.loader,S=x.loadList,E=x.addModule,T=a.bugs,C=[],k={warn:1,error:1},A=e.fn,M=t("video");a.addMethodName=function(e){e=e.split(":");var t=e[1];1==e.length?(t=e[0],e=e[0]):e=e[0],A[e]=function(){return this.callProp(t,arguments)}},A.callProp=function(t,n){var r;return n||(n=[]),this.each(function(){var i=e.prop(this,t);if(i&&i.apply){if(r=i.apply(this,n),void 0!==r)return!1}else a.warn(t+" is not a method of "+this)}),void 0!==r?r:this},a.activeLang=function(){"language"in i||(i.language=i.browserLanguage||"");var t=e.attr(document.documentElement,"lang")||i.language;return y("webshimLocalization",function(){a.activeLang(t)}),function(e){if(e)if("string"==typeof e)t=e;else if("object"==typeof e){var n=arguments,r=this;y("webshimLocalization",function(){a.activeLang.apply(r,n)})}return t}}(),a.errorLog=[],e.each(["log","error","warn","info"],function(e,t){a[t]=function(e){(k[t]&&h.debug!==!1||h.debug)&&(a.errorLog.push(e),window.console&&console.log&&console[console[t]?t:"log"](e))}}),function(){e.isDOMReady=e.isReady;var t=function(){e.isDOMReady=!0,v("DOM",!0),setTimeout(function(){v("WINDOWLOAD",!0)},9999)};n=function(){if(!n.run){if((h.debug||!("crossDomain"in h.ajax)&&location.protocol.indexOf("http"))&&(h.ajax.crossDomain=!0),!e.isDOMReady&&h.waitReady){var r=e.ready;e.ready=function(e){return e!==!0&&document.body&&t(),r.apply(this,arguments)},e.ready.promise=r.promise}h.readyEvt?e(document).one(h.readyEvt,t):e(t)}n.run=!0},e(window).on("load",function(){t(),setTimeout(function(){v("WINDOWLOAD",!0)},9)});var r=[],i=function(){1==this.nodeType&&a.triggerDomUpdate(this)};e.extend(a,{addReady:function(e){var t=function(t,n){a.ready("DOM",function(){e(t,n)})};r.push(t),h.wsdoc&&t(h.wsdoc,c)},triggerDomUpdate:function(t){if(!t||!t.nodeType)return void(t&&t.jquery&&t.each(function(){a.triggerDomUpdate(this)}));var n=t.nodeType;if(1==n||9==n){var i=t!==document?e(t):c;e.each(r,function(e,n){n(t,i)})}}}),A.clonePolyfill=A.clone,A.htmlPolyfill=function(t){if(!arguments.length)return e(this.clonePolyfill()).html();var n=A.html.call(this,t);return n===this&&e.isDOMReady&&this.each(i),n},A.jProp=function(){return this.pushStack(e(A.prop.apply(this,arguments)||[]))},e.each(["after","before","append","prepend","replaceWith"],function(t,n){A[n+"Polyfill"]=function(t){return t=e(t),A[n].call(this,t),e.isDOMReady&&t.each(i),this}}),e.each(["insertAfter","insertBefore","appendTo","prependTo","replaceAll"],function(t,n){A[n.replace(/[A-Z]/,function(e){return"Polyfill"+e})]=function(){return A[n].apply(this,arguments),e.isDOMReady&&a.triggerDomUpdate(this),this}}),A.updatePolyfill=function(){return e.isDOMReady&&a.triggerDomUpdate(this),this},e.each(["getNativeElement","getShadowElement","getShadowFocusElement"],function(e,t){A[t]=function(){return this.pushStack(this)}})}(),d.create&&(a.objectCreate=function(t,n,r){var i=d.create(t);return r&&(i.options=e.extend(!0,{},i.options||{},r),r=i.options),i._create&&e.isFunction(i._create)&&i._create(r),i}),E("swfmini",{test:function(){return window.swfobject&&!window.swfmini&&(window.swfmini=window.swfobject),"swfmini"in window},c:[16,7,2,8,1,12,23]}),b.swfmini.test(),E("sizzle",{test:e.expr.filters}),w("es5",{test:!(!u.ES5||!Function.prototype.bind),d:["sizzle"]}),w("dom-extend",{f:o,noAutoCallback:!0,d:["es5"],c:[16,7,2,15,30,3,8,4,9,10,25,31,34]}),t("picture"),w("picture",{test:"picturefill"in window||!!window.HTMLPictureElement,d:["matchMedia"],c:[18],loadInit:function(){v("picture",!0)}}),w("matchMedia",{test:!(!window.matchMedia||!matchMedia("all").addListener),c:[18]}),w("sticky",{test:-1!=(e(t("b")).attr("style","position: -webkit-sticky; position: sticky").css("position")||"").indexOf("sticky"),d:["es5","matchMedia"]}),w("es6",{test:!!(Math.imul&&Number.MIN_SAFE_INTEGER&&d.is&&window.Promise&&Promise.all),d:["es5"]}),w("geolocation",{test:"geolocation"in i,options:{destroyWrite:!0},c:[21]});var N="getUserMedia"in i;w("usermedia-core",{f:"usermedia",test:N&&window.URL,d:["url",o]}),w("usermedia-shim",{f:"usermedia",test:!!(N||i.webkitGetUserMedia||i.mozGetUserMedia||i.msGetUserMedia),d:["url","mediaelement",o]}),function(){w("canvas",{src:"excanvas",test:"getContext"in t("canvas"),options:{type:"flash"},noAutoCallback:!0,loadInit:function(){var e=this.options.type;!e||-1===e.indexOf("flash")||b.swfmini.test()&&!swfmini.hasFlashPlayerVersion("9.0.0")||(this.src="flash"==e?"FlashCanvas/flashcanvas":"FlashCanvasPro/flashcanvas")},methodNames:["getContext"],d:[o]})}(),function(){var n,r,s="form-shim-extend",c="formvalidation",l="form-number-date-api",d=!1,f=!1,p=!1,g={},v=t("progress"),y=t("output"),x=function(){var r,a,o="1(",l=t("input");if(a=e('<fieldset><textarea required="" /></fieldset>')[0],u.inputtypes=g,e.each(["range","date","datetime-local","month","color","number"],function(e,t){l.setAttribute("type",t),g[t]=l.type==t&&(l.value=o)&&l.value!=o}),u.datalist=!!("options"in t("datalist")&&window.HTMLDataListElement),u[c]="checkValidity"in l,u.fieldsetelements="elements"in a,u.fieldsetdisabled="disabled"in a){try{a.querySelector(":invalid")&&(a.disabled=!0,r=!a.querySelector(":invalid")&&a.querySelector(":disabled"))}catch(m){}u.fieldsetdisabled=!!r}if(u[c]&&(f=!(u.fieldsetdisabled&&u.fieldsetelements&&"value"in v&&"value"in y),p=f&&/Android/i.test(i.userAgent),d=window.opera||T.bustedValidity||f||!u.datalist,!d&&g.number)){d=!0;try{l.type="number",l.value="",l.stepUp(),d="1"!=l.value}catch(h){}}return T.bustedValidity=d,n=u[c]&&!d?"form-native-extend":s,x=e.noop,!1},S=function(t){var n=!0;return t._types||(t._types=t.types.split(" ")),e.each(t._types,function(e,t){return t in g&&!g[t]?(n=!1,!1):void 0}),n};a.validationMessages=a.validityMessages={langSrc:"i18n/formcfg-",availableLangs:"ar cs el es fa fr he hi hu it ja lt nl pl pt pt-BR pt-PT ru sv zh-CN zh-TW".split(" ")},a.formcfg=e.extend({},a.validationMessages),a.inputTypes={},w("form-core",{f:"forms",test:x,d:["es5"],options:{placeholderType:"value",messagePopover:{},list:{popover:{constrainWidth:!0}},iVal:{sel:".ws-validate",handleBubble:"hide",recheckDelay:400}},methodNames:["setCustomValidity","checkValidity","setSelectionRange"],c:[16,7,2,8,1,15,30,3,31]}),r=h.forms,w("form-native-extend",{f:"forms",test:function(t){return x(),!u[c]||d||-1==e.inArray(l,t||[])||b[l].test()},d:["form-core",o,"form-message"],c:[6,5,14,29]}),w(s,{f:"forms",test:function(){return x(),u[c]&&!d},d:["form-core",o,"sizzle"],c:[16,15,28]}),w(s+"2",{f:"forms",test:function(){return x(),u[c]&&!f},d:[s],c:[27]}),w("form-message",{f:"forms",test:function(e){return x(),!(r.customMessages||!u[c]||d||!b[n].test(e))},d:[o],c:[16,7,15,30,3,8,4,14,28]}),w(l,{f:"forms-ext",options:{types:"date time range number"},test:function(){x();var e=!d;return e&&(e=S(this.options)),e},methodNames:["stepUp","stepDown"],d:["forms",o],c:[6,5,17,14,28,29,33]}),E("range-ui",{options:{},noAutoCallback:!0,test:function(){return!!A.rangeUI},d:["es5"],c:[6,5,9,10,17,11]}),w("form-number-date-ui",{f:"forms-ext",test:function(){var e=this.options;return e.replaceUI=m(e.replaceUI),x(),!e.replaceUI&&p&&(e.replaceUI=!0),!e.replaceUI&&S(e)},d:["forms",o,l,"range-ui"],options:{widgets:{calculateWidth:!0,animate:!0}},c:[6,5,9,10,17,11]}),w("form-datalist",{f:"forms",test:function(){return x(),p&&(r.customDatalist=!0),u.datalist&&!r.fD},d:["form-core",o],c:[16,7,6,2,9,15,30,31,28,33]})}();var j="FileReader"in window&&"FormData"in window;return w("filereader-xhr",{f:"filereader",test:j,d:[o,"swfmini"],c:[25,27]}),w("canvas-blob",{f:"filereader",methodNames:["toBlob"],test:!(j&&!t("canvas").toBlob)}),w("details",{test:"open"in t("details"),d:[o],options:{text:"Details"},c:[21,22]}),w("url",{test:function(){var e=!1;try{e=new URL("b","http://a"),e=!(!e.searchParams||"http://a/b"!=e.href)}catch(t){}return e},d:["es5"]}),function(){a.mediaelement={};var n=t("track");if(u.mediaelement="canPlayType"in M,u.texttrackapi="addTextTrack"in M,u.track="kind"in n,t("audio"),!(T.track=!u.texttrackapi))try{T.track=!("oncuechange"in M.addTextTrack("metadata"))}catch(r){}w("mediaelement-core",{f:"mediaelement",noAutoCallback:!0,options:{jme:{},plugins:[],vars:{},params:{},attrs:{},changeSWF:e.noop},methodNames:["play","pause","canPlayType","mediaLoad:load"],d:["swfmini"],c:[16,7,2,8,1,12,13,23]}),w("mediaelement-jaris",{f:"mediaelement",d:["mediaelement-core",o],test:function(){var e=this.options;return!u.mediaelement||a.mediaelement.loadSwf?!1:(e.preferFlash&&!b.swfmini.test()&&(e.preferFlash=!1),!(e.preferFlash&&swfmini.hasFlashPlayerVersion("11.3")))},c:[21,25]}),w("track",{options:{positionDisplay:!0,override:T.track},test:function(){var e=this.options;return e.override=m(e.override),!e.override&&!T.track},d:["mediaelement",o],methodNames:["addTextTrack"],c:[21,12,13,22,34]}),E("jmebase",{src:"jme/base",c:[98,99,97]}),e.each([["mediacontrols",{c:[98,99],css:"jme/controls.css"}],["playlist",{c:[98,97]}],["alternate-media"]],function(t,n){E(n[0],e.extend({src:"jme/"+n[0],d:["jmebase"]},n[1]))}),E("track-ui",{d:["track",o]})}(),w("feature-dummy",{test:!0,loaded:!0,c:C}),a.$=e,e.webshims=a,e.webshim=webshim,a.callAsync=function(){a.callAsync=e.noop,l&&(l.cfg&&(l.cfg.length||(l.cfg=[[l.cfg]]),e.each(l.cfg,function(e,t){a.setOptions.apply(a,t)})),l.ready&&e.each(l.ready,function(e,t){a.ready.apply(a,t)}),l.lang&&a.activeLang(l.lang),"polyfill"in l&&a.polyfill(l.polyfill)),a.isReady("jquery",!0)},a.callAsync(),a}),window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),n=document.getElementsByTagName("script")[0],r=null;t.type="text/css",t.id="matchmediajs-test",n.parentNode.insertBefore(t,n),r="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle,e={matchMedium:function(e){var n="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=n:t.textContent=n,"1px"===r.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),function(e,t){"use strict";function n(e){var t,n,r,a,o,s=e||{};t=s.elements||i.getAllElements();for(var c=0,l=t.length;l>c;c++)if(n=t[c],r=n.parentNode,a=void 0,o=void 0,n[i.ns]||(n[i.ns]={}),s.reevaluate||!n[i.ns].evaluated){if("PICTURE"===r.nodeName.toUpperCase()){if(i.removeVideoShim(r),a=i.getMatch(n,r),a===!1)continue}else a=void 0;("PICTURE"===r.nodeName.toUpperCase()||n.srcset&&!i.srcsetSupported||!i.sizesSupported&&n.srcset&&n.srcset.indexOf("w")>-1)&&i.dodgeSrcset(n),a?(o=i.processSourceSet(a),i.applyBestCandidate(o,n)):(o=i.processSourceSet(n),(void 0===n.srcset||n[i.ns].srcset)&&i.applyBestCandidate(o,n)),n[i.ns].evaluated=!0}}function r(){n();var r=setInterval(function(){return n(),/^loaded|^i|^c/.test(t.readyState)?void clearInterval(r):void 0},250);if(e.addEventListener){var i;e.addEventListener("resize",function(){e._picturefillWorking||(e._picturefillWorking=!0,e.clearTimeout(i),i=e.setTimeout(function(){n({reevaluate:!0}),e._picturefillWorking=!1},60))},!1)}}if(e.HTMLPictureElement)return void(e.picturefill=function(){});t.createElement("picture");var i={};i.ns="picturefill",i.srcsetSupported="srcset"in t.createElement("img"),i.sizesSupported=e.HTMLImageElement.sizes,i.trim=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},i.endsWith=function(e,t){return e.endsWith?e.endsWith(t):-1!==e.indexOf(t,e.length-t.length)},i.matchesMedia=function(t){return e.matchMedia&&e.matchMedia(t).matches},i.getDpr=function(){return e.devicePixelRatio||1},i.getWidthFromLength=function(e){return e=e&&(parseFloat(e)>0||e.indexOf("calc(")>-1)?e:"100vw",e=e.replace("vw","%"),i.lengthEl||(i.lengthEl=t.createElement("div"),t.documentElement.insertBefore(i.lengthEl,t.documentElement.firstChild)),i.lengthEl.style.cssText="position: absolute; left: 0; width: "+e+";",i.lengthEl.offsetWidth<=0&&(i.lengthEl.style.cssText="width: 100%;"),i.lengthEl.offsetWidth},i.types={},i.types["image/jpeg"]=!0,i.types["image/gif"]=!0,i.types["image/png"]=!0,i.types["image/svg+xml"]=t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),i.types["image/webp"]=function(){var t=new e.Image,r="image/webp";t.onerror=function(){i.types[r]=!1,n()},t.onload=function(){i.types[r]=1===t.width,n()},t.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="},i.verifyTypeSupport=function(e){var t=e.getAttribute("type");return null===t||""===t?!0:"function"==typeof i.types[t]?(i.types[t](),"pending"):i.types[t]},i.parseSize=function(e){var t=/(\([^)]+\))?\s*(.+)/g.exec(e);return{media:t&&t[1],length:t&&t[2]}},i.findWidthFromSourceSize=function(e){for(var t,n=i.trim(e).split(/\s*,\s*/),r=0,a=n.length;a>r;r++){var o=n[r],s=i.parseSize(o),c=s.length,l=s.media;if(c&&(!l||i.matchesMedia(l))){t=c;break}}return i.getWidthFromLength(t)},i.parseSrcset=function(e){for(var t=[];""!==e;){e=e.replace(/^\s+/g,"");var n,r=e.search(/\s/g),i=null;if(-1!==r){n=e.slice(0,r);var a=n[n.length-1];if((","===a||""===n)&&(n=n.replace(/,+$/,""),i=""),e=e.slice(r+1),null===i){var o=e.indexOf(",");-1!==o?(i=e.slice(0,o),e=e.slice(o+1)):(i=e,e="")}}else n=e,e="";(n||i)&&t.push({url:n,descriptor:i})}return t},i.parseDescriptor=function(e,t){var n,r=t||"100vw",a=e&&e.replace(/(^\s+|\s+$)/g,""),o=i.findWidthFromSourceSize(r);
if(a)for(var s=a.split(" "),c=s.length+1;c>=0;c--)if(void 0!==s[c]){var l=s[c],u=l&&l.slice(l.length-1);if("h"!==u&&"w"!==u||i.sizesSupported){if("x"===u){var d=l&&parseFloat(l,10);n=d&&!isNaN(d)?d:1}}else n=parseFloat(parseInt(l,10)/o)}return n||1},i.getCandidatesFromSourceSet=function(e,t){for(var n=i.parseSrcset(e),r=[],a=0,o=n.length;o>a;a++){var s=n[a];r.push({url:s.url,resolution:i.parseDescriptor(s.descriptor,t)})}return r},i.dodgeSrcset=function(e){e.srcset&&(e[i.ns].srcset=e.srcset,e.removeAttribute("srcset"))},i.processSourceSet=function(e){var t=e.getAttribute("srcset"),n=e.getAttribute("sizes"),r=[];return"IMG"===e.nodeName.toUpperCase()&&e[i.ns]&&e[i.ns].srcset&&(t=e[i.ns].srcset),t&&(r=i.getCandidatesFromSourceSet(t,n)),r},i.applyBestCandidate=function(e,t){var n,r,a;e.sort(i.ascendingSort),r=e.length,a=e[r-1];for(var o=0;r>o;o++)if(n=e[o],n.resolution>=i.getDpr()){a=n;break}a&&!i.endsWith(t.src,a.url)&&(t.src=a.url,t.currentSrc=t.src)},i.ascendingSort=function(e,t){return e.resolution-t.resolution},i.removeVideoShim=function(e){var t=e.getElementsByTagName("video");if(t.length){for(var n=t[0],r=n.getElementsByTagName("source");r.length;)e.insertBefore(r[0],n);n.parentNode.removeChild(n)}},i.getAllElements=function(){for(var e=[],n=t.getElementsByTagName("img"),r=0,a=n.length;a>r;r++){var o=n[r];("PICTURE"===o.parentNode.nodeName.toUpperCase()||null!==o.getAttribute("srcset")||o[i.ns]&&null!==o[i.ns].srcset)&&e.push(o)}return e},i.getMatch=function(e,t){for(var n,r=t.childNodes,a=0,o=r.length;o>a;a++){var s=r[a];if(1===s.nodeType){if(s===e)return n;if("SOURCE"===s.nodeName.toUpperCase()){null!==s.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var c=s.getAttribute("media");if(s.getAttribute("srcset")&&(!c||i.matchesMedia(c))){var l=i.verifyTypeSupport(s);if(l===!0){n=s;break}if("pending"===l)return!1}}}}return n},r(),n._=i,"object"==typeof module&&"object"==typeof module.exports?module.exports=n:"function"==typeof define&&define.amd?define(function(){return n}):"object"==typeof e&&(e.picturefill=n)}(this,this.document),function(e){"use strict";function t(){x(!0)}var n={};e.respond=n,n.update=function(){};var r=[],i=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),a=function(e,t){var n=i();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))},o=function(e){return e.replace(n.regex.minmaxwh,"").match(n.regex.other)};if(n.ajax=a,n.queue=r,n.unsupportedmq=o,n.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},n.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!n.mediaQueriesSupported){var s=e.document,c=s.documentElement,l=[],u=[],d=[],f={},m=30,p=s.getElementsByTagName("head")[0]||c,h=s.getElementsByTagName("base")[0],g=p.getElementsByTagName("link"),v,y,w,b=function(){var e,t=s.createElement("div"),n=s.body,r=c.style.fontSize,i=n&&n.style.fontSize,a=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=a=s.createElement("body"),n.style.background="none"),c.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(t),a&&c.insertBefore(n,c.firstChild),e=t.offsetWidth,a?c.removeChild(n):n.removeChild(t),c.style.fontSize=r,i&&(n.style.fontSize=i),e=w=parseFloat(e)},x=function(t){var n="clientWidth",r=c[n],i="CSS1Compat"===s.compatMode&&r||s.body[n]||r,a={},o=g[g.length-1],f=(new Date).getTime();if(t&&v&&m>f-v)return e.clearTimeout(y),void(y=e.setTimeout(x,m));v=f;for(var h in l)if(l.hasOwnProperty(h)){var S=l[h],E=S.minw,T=S.maxw,C=null===E,k=null===T,A="em";E&&(E=parseFloat(E)*(E.indexOf(A)>-1?w||b():1)),T&&(T=parseFloat(T)*(T.indexOf(A)>-1?w||b():1)),S.hasquery&&(C&&k||!(C||i>=E)||!(k||T>=i))||(a[S.media]||(a[S.media]=[]),a[S.media].push(u[S.rules]))}for(var M in d)d.hasOwnProperty(M)&&d[M]&&d[M].parentNode===p&&p.removeChild(d[M]);d.length=0;for(var N in a)if(a.hasOwnProperty(N)){var j=s.createElement("style"),P=a[N].join("\n");j.type="text/css",j.media=N,p.insertBefore(j,o.nextSibling),j.styleSheet?j.styleSheet.cssText=P:j.appendChild(s.createTextNode(P)),d.push(j)}},S=function(e,t,r){var i=e.replace(n.regex.comments,"").replace(n.regex.keyframes,"").match(n.regex.media),a=i&&i.length||0;t=t.substring(0,t.lastIndexOf("/"));var s=function(e){return e.replace(n.regex.urls,"$1"+t+"$2$3")},c=!a&&r;t.length&&(t+="/"),c&&(a=1);for(var d=0;a>d;d++){var f,m,p,h;c?(f=r,u.push(s(e))):(f=i[d].match(n.regex.findStyles)&&RegExp.$1,u.push(RegExp.$2&&s(RegExp.$2))),p=f.split(","),h=p.length;for(var g=0;h>g;g++)m=p[g],o(m)||l.push({media:m.split("(")[0].match(n.regex.only)&&RegExp.$2||"all",rules:u.length-1,hasquery:m.indexOf("(")>-1,minw:m.match(n.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:m.match(n.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}x()},E=function(){if(r.length){var t=r.shift();a(t.href,function(n){S(n,t.href,t.media),f[t.href]=!0,e.setTimeout(function(){E()},0)})}},T=function(){for(var t=0;t<g.length;t++){var n=g[t],i=n.href,a=n.media,o=n.rel&&"stylesheet"===n.rel.toLowerCase();i&&o&&!f[i]&&(n.styleSheet&&n.styleSheet.rawCssText?(S(n.styleSheet.rawCssText,i,a),f[i]=!0):(!/^([a-zA-Z:]*\/\/)/.test(i)&&!h||i.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&("//"===i.substring(0,2)&&(i=e.location.protocol+i),r.push({href:i,media:a})))}E()};T(),n.update=T,n.getEmValue=b,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this),$(function(){$(".nav-toggle-menu").click(function(e){e.preventDefault(),$(this).toggleClass("active"),$(".off-canvas").toggleClass("active")}),$(".nav-toggle-search").click(function(e){e.preventDefault(),$(this).toggleClass("active"),$(".header .search-form").toggleClass("active")}),$(".nav select").change(function(){window.location=$(this).find("option:selected").val()})});