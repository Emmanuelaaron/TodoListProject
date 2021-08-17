(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"\n.body {\n  display: flex;\n  justify-content: center;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: center;\n  padding-top: 31vh;\n}\n\n.todos {\n  display: flex;\n  align-items: center;\n  border-bottom: solid 1px rgb(49, 46, 46);\n  width: 100%;\n  background-color: white;\n}\n\n#todos {\n  width: 40%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n#input {\n  width: 99%;\n  height: 48px;\n  border-left-style: none;\n  border-right-style: none;\n  border-bottom: solid 1px rgb(49, 46, 46);\n  border-top: solid 1px rgb(49, 46, 46);\n}\n\nh3 {\n  padding-left: 15px;\n}\n\n::placeholder {\n  font-style: italic;\n  padding-left: 15px;\n}\n\n.tododesc {\n  margin-left: 15px;\n}\n\n#checkbox {\n  margin-left: 15px;\n}\n\n.footerText {\n  text-align: center;\n}\n",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],d=0;d<e.length;d++){var c=e[d],s=r.base?c[0]+r.base:c[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(n[u].references++,n[u].updater(f)):n.push({identifier:p,updater:o(f,r),references:1}),a.push(p)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var d=t(i[a]);n[d].references--}for(var c=r(e,o),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),d=t(565),c=t.n(d),s=t(216),l=t.n(s),p=t(589),u=t.n(p),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=[{index:1,description:"Jogging",completed:!1},{index:2,description:"Reading a book",completed:!1},{index:3,description:"Learn coding",completed:!1},{index:4,description:"Preparing food",completed:!1}],v=document.getElementById("todos");(()=>{for(let e=0;e<h.length;e+=1){const n=document.createElement("div");n.classList.add("todos");const t=document.createElement("input");t.type="checkbox",t.id="checkbox";const r=document.createElement("p");r.classList.add("tododesc"),r.innerHTML=h[e].description,n.appendChild(t),n.appendChild(r),v.appendChild(n)}})(),v.appendChild((()=>{const e=document.createElement("div");e.classList.add("footerCard");const n=document.createElement("p");return n.classList.add("footerText"),n.innerText="Clear all completed",e.appendChild(n),e})())})()})();