(()=>{"use strict";var n,e,t,r,o,i,a,c,s,p,l,d,u,f,h={426:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),s=t.n(c),p=new URL(t(723),t.b),l=a()(o());l.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);var d=s()(p);l.push([n.id,`* {\n    font-family: Roboto, sans-serif;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    padding: 100px 5vw;\n}\n\n#content {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0 auto;\n    gap: 10px;\n}\n\n.dish {\n    flex: 1 0 calc(50% - 10px);\n    max-width: calc(50% - 10px);\n    height: 400px;\n    background-color: rgb(0, 0, 0);\n    border-radius: 30px;\n    filter: opacity(0.9);\n    color: white;\n    overflow: hidden;\n    cursor: pointer;\n}\n\n.dish:nth-child(even) {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n}\n\n.dish:nth-child(odd) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 50%;\n    background-color: rgba(0, 0, 0, 0.4);\n    backdrop-filter: blur(10px);\n    z-index: 0;\n}\n\n.background-image {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    background: url(${d}) center/cover;\n    z-index: 0;\n}\n\n.name {\n    position: absolute;\n    z-index: 1;\n    top: 30px;\n    left: 30px;\n    font-size: 40px;\n    font-weight: 700;\n    margin-bottom: 10px;\n    word-wrap: break-word;\n    padding-right: 20px;\n    line-height: 100%;\n}\n\n.descr {\n    position: absolute;\n    z-index: 1;\n    top: 80px;\n    left: 30px;\n    padding-right: 20px;\n    color: rgb(232, 232, 232);\n}\n\nheader {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-content: flex-start;\n    margin-bottom: 40px;\n    padding-right: 10px;\n}\n\nul {\n    list-style-type: none;\n    display: flex;\n    gap: 20px;\n    justify-content: center;\n    padding: 0;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n\nli {\n    padding: 14px 20px;\n    background-color: black;\n    color: white;\n    border-radius: 90px;\n    cursor: pointer;\n    user-select: none;\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n    font-size: 40px;\n    font-weight: 700;\n}`,""]);const u=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var p=0;p<n.length;p++){var l=[].concat(n[p]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],p=r.base?s[0]+r.base:s[0],l=i[p]||0,d="".concat(p," ").concat(l);i[p]=l+1;var u=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),p=0;p<i.length;p++){var l=t(i[p]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},723:(n,e,t)=>{n.exports=t.p+"e1d7f041d0d33dc63349.jpg"}},g={};function m(n){var e=g[n];if(void 0!==e)return e.exports;var t=g[n]={id:n,exports:{}};return h[n](t,t.exports,m),t.exports}m.m=h,m.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return m.d(e,{a:e}),e},m.d=(n,e)=>{for(var t in e)m.o(e,t)&&!m.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},m.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),m.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;m.g.importScripts&&(n=m.g.location+"");var e=m.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!n;)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),m.p=n})(),m.b=document.baseURI||self.location.href,m.nc=void 0,n=m(379),e=m.n(n),t=m(795),r=m.n(t),o=m(569),i=m.n(o),a=m(565),c=m.n(a),s=m(216),p=m.n(s),l=m(589),d=m.n(l),u=m(426),(f={}).styleTagTransform=d(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=p(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,content=document.querySelector("#content")})();