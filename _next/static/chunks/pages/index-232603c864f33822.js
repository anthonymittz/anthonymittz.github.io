(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3678)}])},8045:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(c){u=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw i}}return o}}(t,e)||u(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||u(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}var c=v(n(7294)),s=v(n(5443)),l=n(6978),f=n(5809),d=n(7190);function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t){return t&&t.__esModule?t:{default:t}}function y(t){for(var e=arguments,n=function(n){var r=null!=e[n]?e[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),i.forEach((function(e){m(t,e,r[e])}))},r=1;r<arguments.length;r++)n(r);return t}var p=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var h=new Map([["default",function(t){var e=t.root,n=t.src,r=t.width,i=t.quality;0;return"".concat(e,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(t){var e=t.root,n=t.src,r=t.width,i=t.quality,o=new URL("".concat(e).concat(k(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(t){var e=t.root,n=t.src,r=t.width,i=t.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(e).concat(o).concat(k(n))}],["akamai",function(t){var e=t.root,n=t.src,r=t.width;return"".concat(e).concat(k(n),"?imwidth=").concat(r)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function w(t){return void 0!==t.default}var g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||f.imageConfigDefault,A=g.deviceSizes,_=g.imageSizes,S=g.loader,j=g.path,I=(g.domains,a(A).concat(a(_)));function O(t){var e=t.src,n=t.unoptimized,r=t.layout,i=t.width,o=t.quality,u=t.sizes,c=t.loader;if(n)return{src:e,srcSet:void 0,sizes:void 0};var s=function(t,e,n){if(n&&("fill"===e||"responsive"===e)){for(var r,i=/(^|\s)(1?\d?\d)vw/g,o=[];r=i.exec(n);r)o.push(parseInt(r[2]));if(o.length){var u,c=.01*(u=Math).min.apply(u,a(o));return{widths:I.filter((function(t){return t>=A[0]*c})),kind:"w"}}return{widths:I,kind:"w"}}return"number"!==typeof t||"fill"===e||"responsive"===e?{widths:A,kind:"w"}:{widths:a(new Set([t,2*t].map((function(t){return I.find((function(e){return e>=t}))||I[I.length-1]})))),kind:"x"}}(i,r,u),l=s.widths,f=s.kind,d=l.length-1;return{sizes:u||"w"!==f?u:"100vw",srcSet:l.map((function(t,n){return"".concat(c({src:e,quality:o,width:t})," ").concat("w"===f?t:n+1).concat(f)})).join(", "),src:c({src:e,quality:o,width:l[d]})}}function x(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function E(t){var e=h.get(S);if(e)return e(y({root:j},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(S))}function k(t){return"/"===t[0]?t.slice(1):t}A.sort((function(t,e){return t-e})),I.sort((function(t,e){return t-e}))},7190:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(c){u=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw i}}return o}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootMargin,n=t.disabled||!u,r=o.useRef(),s=i(o.useState(!1),2),l=s[0],f=s[1],d=o.useCallback((function(t){r.current&&(r.current(),r.current=void 0),n||l||t&&t.tagName&&(r.current=function(t,e,n){var r=function(t){var e=t.rootMargin||"",n=c.get(e);if(n)return n;var r=new Map,i=new IntersectionObserver((function(t){t.forEach((function(t){var e=r.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return c.set(e,n={id:e,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(t,e),o.observe(t),function(){a.delete(t),o.unobserve(t),0===a.size&&(o.disconnect(),c.delete(i))}}(t,(function(t){return t&&f(t)}),{rootMargin:e}))}),[n,e,l]);return o.useEffect((function(){if(!u&&!l){var t=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(t)}}}),[l]),[d,l]};var o=n(7294),a=n(9311),u="undefined"!==typeof IntersectionObserver;var c=new Map},6978:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.toBase64=function(t){return window.btoa(t)}},3678:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return a}});var r=n(5893),i=(n(5675),n(214)),o=n.n(i);function a(){return(0,r.jsxs)("main",{className:o().main,children:[(0,r.jsxs)("h1",{className:"title",children:["Under",(0,r.jsx)("br",{}),"construction"]}),(0,r.jsx)("p",{children:"This resource is in active development and will be available in the future."}),(0,r.jsx)("div",{className:o().note,children:(0,r.jsxs)("small",{children:["Development began in January 2022.",(0,r.jsx)("br",{}),"Initial release in production is expected no earlier than February 2022."]})})]})}},214:function(t){t.exports={main:"Home_main__nLjiQ",note:"Home_note__kvrLu"}},5809:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},5675:function(t,e,n){n(8045)}},function(t){t.O(0,[774,888,179],(function(){return e=8581,t(t.s=e);var e}));var e=t.O();_N_E=e}]);