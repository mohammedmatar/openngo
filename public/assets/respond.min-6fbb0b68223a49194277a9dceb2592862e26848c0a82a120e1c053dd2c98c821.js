/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||function(e){"use strict";var t,r=e.documentElement,n=r.firstElementChild||r.firstChild,i=e.createElement("body"),a=e.createElement("div");return a.id="mq-test-1",a.style.cssText="position:absolute;top:-100em",i.style.background="none",i.appendChild(a),function(e){return a.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',r.insertBefore(i,n),t=42===a.offsetWidth,r.removeChild(i),{matches:t,media:e}}}(document),/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
function(e){"use strict";function t(){b(!0)}var r={};e.respond=r,r.update=function(){},r.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches,r.mediaQueriesSupported;var n,i,a,o=e.document,s=o.documentElement,l=[],u=[],c=[],f={},p=30,d=o.getElementsByTagName("head")[0]||s,m=o.getElementsByTagName("base")[0],h=d.getElementsByTagName("link"),x=[],g=function(){for(var t=0;h.length>t;t++){var r=h[t],n=r.href,i=r.media,a=r.rel&&"stylesheet"===r.rel.toLowerCase();n&&a&&!f[n]&&(r.styleSheet&&r.styleSheet.rawCssText?(v(r.styleSheet.rawCssText,n,i),f[n]=!0):(!/^([a-zA-Z:]*\/\/)/.test(n)&&!m||n.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&x.push({href:n,media:i}))}y()},y=function(){if(x.length){var e=x.shift();S(e.href,function(t){v(t,e.href,e.media),f[e.href]=!0,setTimeout(function(){y()},0)})}},v=function(e,t,r){var n=e.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),i=n&&n.length||0;t=t.substring(0,t.lastIndexOf("/"));var a=function(e){return e.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+t+"$2$3")},o=!i&&r;t.length&&(t+="/"),o&&(i=1);for(var s=0;i>s;s++){var c,f,p,d;o?(c=r,u.push(a(e))):(c=n[s].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,u.push(RegExp.$2&&a(RegExp.$2))),p=c.split(","),d=p.length;for(var m=0;d>m;m++)f=p[m],l.push({media:f.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:u.length-1,hasquery:f.indexOf("(")>-1,minw:f.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:f.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}b()},E=function(){var e,t=o.createElement("div"),r=o.body,n=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",r||(r=n=o.createElement("body"),r.style.background="none"),r.appendChild(t),s.insertBefore(r,s.firstChild),e=t.offsetWidth,n?s.removeChild(r):r.removeChild(t),e=a=parseFloat(e)},b=function(e){var t="clientWidth",r=s[t],f="CSS1Compat"===o.compatMode&&r||o.body[t]||r,m={},x=h[h.length-1],g=(new Date).getTime();if(e&&n&&p>g-n)return clearTimeout(i),void(i=setTimeout(b,p));n=g;for(var y in l)if(l.hasOwnProperty(y)){var v=l[y],S=v.minw,C=v.maxw,w=null===S,$=null===C,F="em";S&&(S=parseFloat(S)*(S.indexOf(F)>-1?a||E():1)),C&&(C=parseFloat(C)*(C.indexOf(F)>-1?a||E():1)),v.hasquery&&(w&&$||!(w||f>=S)||!($||C>=f))||(m[v.media]||(m[v.media]=[]),m[v.media].push(u[v.rules]))}for(var k in c)c.hasOwnProperty(k)&&c[k]&&c[k].parentNode===d&&d.removeChild(c[k]);for(var T in m)if(m.hasOwnProperty(T)){var A=o.createElement("style"),R=m[T].join("\n");A.type="text/css",A.media=T,d.insertBefore(A,x.nextSibling),A.styleSheet?A.styleSheet.cssText=R:A.appendChild(o.createTextNode(R)),c.push(A)}},S=function(e,t){var r=C();r&&(r.open("GET",e,!0),r.onreadystatechange=function(){4!==r.readyState||200!==r.status&&304!==r.status||t(r.responseText)},4!==r.readyState&&r.send(null))},C=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(r){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}();g(),r.update=g,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}(this);