!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=74)}({74:function(e,t){let n=!1;window.onmessage=function(e){e.origin===window.location.origin&&e.data.blob&&function(e){const t=e.data;n&&document.body.replaceWith(document.createElement("BODY")),n=!0;const o=document.createElement("span");o.id="img";const r=document.createElement("a");r.id="a",r.rel="noreferrer noopener",r.download=t.download,r.style=t.style,r.style.fontFamily="Arial, Helvetica, Sans-Serif",r.href=window.URL.createObjectURL(t.blob),r.appendChild(o),r.appendChild(document.createTextNode(t.textContent)),t.imgStyle?o.style=t.imgStyle:(o.style.width="12px",o.style.height="12px",o.style.webkitMaskSize="12px",o.style.webkitMaskPosition="center",o.style.webkitMaskRepeat="no-repeat",o.style.display="inline-block",o.style.webkitMaskImage=`url('${t.imgSrc}')`,o.style.backgroundColor=""+r.style.color);const l=document.body;l.style.margin="0px",l.style.overflow="hidden",l.appendChild(r),e.data.auto&&r.click()}(e)}}});
//# sourceMappingURL=usercontent.js.map