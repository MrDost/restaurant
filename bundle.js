(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]),i.push([e.id,"* {\n    font-family: Roboto, sans-serif;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    padding: 100px 5vw;\n}\n\n#content {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0 auto;\n    gap: 10px;\n}\n\n.dish {\n    flex: 1 0 calc(50% - 10px);\n    max-width: calc(50% - 10px);\n    height: 400px;\n    background-color: rgb(0, 0, 0);\n    border-radius: 30px;\n    filter: opacity(0.9);\n    color: white;\n    overflow: hidden;\n    cursor: pointer;\n}\n\n.dish:nth-child(even) {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n}\n\n.dish:nth-child(odd) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 50%;\n    background-color: rgba(0, 0, 0, 0.2);\n    backdrop-filter: blur(10px);\n    z-index: 0;\n}\n\n.background-image {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    z-index: 0;\n}\n\n.name {\n    position: absolute;\n    z-index: 1;\n    top: 30px;\n    left: 30px;\n    font-size: 40px;\n    font-weight: 700;\n    margin-bottom: 10px;\n    word-wrap: break-word;\n    padding-right: 20px;\n    line-height: 100%;\n}\n\n.descr {\n    position: absolute;\n    z-index: 1;\n    top: 80px;\n    left: 30px;\n    padding-right: 20px;\n    color: rgb(232, 232, 232);\n}\n\nheader {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-content: flex-start;\n    margin-bottom: 40px;\n    padding-right: 10px;\n}\n\nul {\n    list-style-type: none;\n    display: flex;\n    gap: 20px;\n    justify-content: center;\n    padding: 0;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n\nli {\n    padding: 14px 20px;\n    background-color: black;\n    color: white;\n    border-radius: 90px;\n    cursor: pointer;\n    user-select: none;\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n    font-size: 40px;\n    font-weight: 700;\n}",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var p=0;p<e.length;p++){var d=[].concat(e[p]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],p=r.base?c[0]+r.base:c[0],d=o[p]||0,l="".concat(p," ").concat(d);o[p]=d+1;var u=t(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var f=a(h,r);r.byIndex=s,n.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=t(o[i]);n[s].references--}for(var c=r(e,a),p=0;p<o.length;p++){var d=t(o[p]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),s=t(565),c=t.n(s),p=t(216),d=t.n(p),l=t(589),u=t.n(l),h=t(426),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),n()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const m=[];function g(e,n,t){return{name:e,description:n,image:t}}m.push(g("pizza1","Tasty Pizza really tasty and cheap come try it","./images/1.jpg")),m.push(g("pizza2","Tasty Pizza really tasty and cheap come try it","./images/2.jpg")),m.push(g("pizza3","Tasty Pizza really tasty and cheap come try it","./images/3.jpg")),m.push(g("pizza4","Tasty Pizza really tasty and cheap come try it","./images/4.jpg")),m.push(g("pizza5","Tasty Pizza really tasty and cheap come try it","./images/5.jpg")),m.push(g("pizza6","Tasty Pizza really tasty and cheap come try it","./images/6.jpg")),m.push(g("burger1","Tasty Burger really tasty and cheap come try it","./images/7.jpeg")),m.push(g("burger2","Tasty Burger really tasty and cheap come try it","./images/8.jpg")),m.push(g("burger3","Tasty Burger really tasty and cheap come try it","./images/9.png")),m.push(g("burger4","Tasty Burger really tasty and cheap come try it","./images/10.jpg")),m.push(g("sushi1","Tasty Sushi really tasty and cheap come try it","./images/11.jpg")),m.push(g("sushi2","Tasty Sushi really tasty and cheap come try it","./images/12.jpg")),m.push(g("sushi3","Tasty Sushi really tasty and cheap come try it","./images/13.jpg"));const y=function(e){m.forEach((n=>{if(n.name.includes(e)){const e=document.querySelector("#content"),t=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div");t.classList.add("dish"),r.classList.add("background-image"),a.classList.add("overlay"),o.classList.add("name"),i.classList.add("descr"),o.innerText=n.name,i.innerText=n.description,r.style.background=`url(${n.image}) center/cover`,t.appendChild(r),t.appendChild(a),t.appendChild(o),t.appendChild(i),e.appendChild(t)}}))},v=document.querySelectorAll("li");console.log(v),v.forEach(((e,n)=>{e.addEventListener("click",(()=>{(function(){let e=document.querySelector("#content");for(;e.firstChild;)e.removeChild(e.firstChild)})(),0===n?y("pizza"):1===n?y("burger"):2===n&&(console.log(n),y("sushi"))}))})),y("sushi")})()})();