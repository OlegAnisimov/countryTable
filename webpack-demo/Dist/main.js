(()=>{var e={426:(e,a,n)=>{"use strict";n.d(a,{Z:()=>m});var t=n(645),r=n.n(t),i=n(667),o=n.n(i),s=n(232),l=n.n(s),c=n(111),u=n.n(c),g=n(157),p=r()((function(e){return e[1]})),f=o()(l()),d=o()(u()),h=o()(g);p.push([e.id,"@font-face {\r\n    font-family: 'MyFont';\r\n    src: url("+f+") format('woff2'),\r\n    url("+d+") format('woff');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n}\r\n\r\n.hello {\r\n    color: red;\r\n    font-family: 'MyFont';\r\n    background: url("+h+");\r\n}\r\nth>span{\r\n    cursor: pointer;\r\n}\r\n.flag-cell {\r\n    width: 200px;\r\n    text-align: center;\r\n    border: chartreuse 1px solid;\r\n}\r\n",""]);const m=p},645:e=>{"use strict";e.exports=function(e){var a=[];return a.toString=function(){return this.map((function(a){var n=e(a);return a[2]?"@media ".concat(a[2]," {").concat(n,"}"):n})).join("")},a.i=function(e,n,t){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(t)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);t&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),a.push(l))}},a}},667:e=>{"use strict";e.exports=function(e,a){return a||(a={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),a.hash&&(e+=a.hash),/["'() \t\n]/.test(e)||a.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},379:(e,a,n)=>{"use strict";var t,r=function(){var e={};return function(a){if(void 0===e[a]){var n=document.querySelector(a);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[a]=n}return e[a]}}(),i=[];function o(e){for(var a=-1,n=0;n<i.length;n++)if(i[n].identifier===e){a=n;break}return a}function s(e,a){for(var n={},t=[],r=0;r<e.length;r++){var s=e[r],l=a.base?s[0]+a.base:s[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var g=o(u),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==g?(i[g].references++,i[g].updater(p)):i.push({identifier:u,updater:h(p,a),references:1}),t.push(u)}return t}function l(e){var a=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var i=n.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(e){a.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(a);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(a)}return a}var c,u=(c=[],function(e,a){return c[e]=a,c.filter(Boolean).join("\n")});function g(e,a,n,t){var r=n?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=u(a,r);else{var i=document.createTextNode(r),o=e.childNodes;o[a]&&e.removeChild(o[a]),o.length?e.insertBefore(i,o[a]):e.appendChild(i)}}function p(e,a,n){var t=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var f=null,d=0;function h(e,a){var n,t,r;if(a.singleton){var i=d++;n=f||(f=l(a)),t=g.bind(null,n,i,!1),r=g.bind(null,n,i,!0)}else n=l(a),t=p.bind(null,n,a),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else r()}}e.exports=function(e,a){(a=a||{}).singleton||"boolean"==typeof a.singleton||(a.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var n=s(e=e||[],a);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<n.length;t++){var r=o(n[t]);i[r].references--}for(var l=s(e,a),c=0;c<n.length;c++){var u=o(n[c]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=l}}}},157:(e,a,n)=>{"use strict";e.exports=n.p+"b78d3f604a3060fbade4.png"},111:()=>{},232:()=>{}},a={};function n(t){var r=a[t];if(void 0!==r)return r.exports;var i=a[t]={id:t,exports:{}};return e[t](i,i.exports,n),i.exports}n.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return n.d(a,{a}),a},n.d=(e,a)=>{for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var a=n.g.document;if(!e&&a&&(a.currentScript&&(e=a.currentScript.src),!e)){var t=a.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{"use strict";var e=n(379),a=n.n(e),t=n(426);a()(t.Z,{insert:"head",singleton:!1}),t.Z.locals;const r={};function i(e,a){a=a.getCountryListByRegion(e).sort(((e,a)=>e.name>a.name?-1:1));for(let e=0;e<a.length;e++)document.getElementById("tbody").insertAdjacentHTML("afterbegin",`<tr id=country-${e} >\n <td>${a[e].name}</td>\n <td>${a[e].capital}</td>\n <td>${a[e].area}</td>\n <td class="flag-cell"><img src="${a[e].flagURL}" alt="Flag ${a[e].name}"></td>\n <td>${a[e].region}</td>\n </tr>`)}function o(e,a){let n=Array.from(a.rows).slice(1).sort(((a,n)=>a.cells[e].innerText>n.cells[e].innerText?1:-1));a.tBodies[0].append(...n)}function s(e,a){let n=Array.from(a.rows).slice(1).sort(((a,n)=>a.cells[e].innerText>n.cells[e].innerText?-1:1));a.tBodies[0].append(...n)}!function(e){const a={eu:"Europe",na:"North America",sa:"South America",af:"Africa",as:"Asia",oc:"Oceania"},n=[{name:"Ukraine",flagURL:"https://www.countryflags.io/ua/flat/64.png",region:a.eu,area:603500,capital:"Kyiv",languages:{ukr:"Ukrainian"}},{name:"Hungary",flagURL:"https://www.countryflags.io/hu/flat/64.png",region:a.eu,area:93028,capital:"Budapest",languages:{hun:"Hungarian"}},{name:"Switzerland",flagURL:"https://www.countryflags.io/ch/flat/64.png",region:a.eu,area:41284,capital:"Bern",languages:{deu:"German",fra:"French",ita:"Italian",roh:"Romansh"}},{name:"Belarus",flagURL:"https://www.countryflags.io/by/flat/64.png",region:a.eu,area:207600,capital:"Minsk",languages:{bel:"Belarusian",rus:"Russian"}},{name:"France",flagURL:"https://www.countryflags.io/fr/flat/64.png",region:a.eu,area:551695,capital:"Paris",languages:{fra:"French"}},{name:"United Kingdom",flagURL:"https://www.countryflags.io/gb/flat/64.png",region:a.eu,area:242900,capital:"London",languages:{eng:"English"}},{name:"Croatia",flagURL:"https://www.countryflags.io/hr/flat/64.png",region:a.eu,area:56594,capital:"Zagreb",languages:{hrv:"Croatian"}},{name:"Mexico",flagURL:"https://www.countryflags.io/mx/flat/64.png",region:a.na,area:1964375,capital:"Mexico City",languages:{spa:"Spanish"}},{name:"Canada",flagURL:"https://www.countryflags.io/ca/flat/64.png",region:a.na,area:9984670,capital:"Ottawa",languages:{eng:"English",fra:"French"}},{name:"United States",flagURL:"https://www.countryflags.io/um/flat/64.png",region:a.na,area:9372610,capital:"Washington D.C.",languages:{eng:"English"}},{name:"Argentina",flagURL:"https://www.countryflags.io/ar/flat/64.png",region:a.sa,area:2780400,capital:"Buenos Aires",languages:{grn:"Guaraní",spa:"Spanish"}},{name:"Brazil",flagURL:"https://www.countryflags.io/br/flat/64.png",region:a.sa,area:8515767,capital:"Brasília",languages:{por:"Portuguese"}},{name:"Bolivia",flagURL:"https://www.countryflags.io/bo/flat/64.png",region:a.sa,area:1098581,capital:"Sucre",languages:{aym:"Aymara",grn:"Guaraní",que:"Quechua",spa:"Spanish"}},{name:"Paraguay",flagURL:"https://www.countryflags.io/py/flat/64.png",region:a.sa,area:406752,capital:"Asunción",languages:{grn:"Guaraní",spa:"Spanish"}},{name:"Egypt",flagURL:"https://www.countryflags.io/eg/flat/64.png",region:a.af,area:1002450,capital:"Cairo",languages:{ara:"Arabic"}},{name:"Tunisia",flagURL:"https://www.countryflags.io/tn/flat/64.png",region:a.af,area:163610,capital:"Tunis",languages:{ara:"Arabic"}},{name:"South Sudan",flagURL:"https://www.countryflags.io/ss/flat/64.png",region:a.af,area:619745,capital:"Juba",languages:{eng:"English"}},{name:"Saudi Arabia",flagURL:"https://www.countryflags.io/ss/flat/64.png",region:a.as,area:2149690,capital:"Riyadh",languages:{ara:"Arabic"}},{name:"Turkey",flagURL:"https://www.countryflags.io/tr/flat/64.png",region:a.as,area:783562,capital:"Ankara",languages:{tur:"Turkish"}},{name:"Algeria",flagURL:"https://www.countryflags.io/dz/flat/64.png",region:a.af,area:2381741,capital:"Algiers",languages:{ara:"Arabic"}},{name:"China",flagURL:"https://www.countryflags.io/cn/flat/64.png",region:a.as,area:9706961,capital:"Beijing",languages:{cmn:"Mandarin"}},{name:"Japan",flagURL:"https://www.countryflags.io/jp/flat/64.png",region:a.as,area:377930,capital:"Tokyo",languages:{jpn:"Japanese"}},{name:"North Korea",flagURL:"https://www.countryflags.io/kp/flat/64.png",region:a.as,area:120538,capital:"Pyongyang",languages:{kor:"Korean"}},{name:"South Korea",flagURL:"https://www.countryflags.io/kr/flat/64.png",region:a.as,area:100210,capital:"Seoul",languages:{kor:"Korean"}},{name:"Australia",flagURL:"https://www.countryflags.io/au/flat/64.png",region:a.oc,area:7692024,capital:"Canberra",languages:{eng:"English"}},{name:"New Zealand",flagURL:"https://www.countryflags.io/nz/flat/64.png",region:a.oc,area:270467,capital:"Wellington",languages:{eng:"English",mri:"Māori",nzs:"New Zealand Sign Language"}}];e.getCountryListByRegion=e=>n.filter((a=>a.region===e)),e.getCountryListByLanguage=e=>n.filter((a=>Object.values(a.languages).includes(e))),e.getRegionsList=()=>Object.values(a),e.getLanguagesList=()=>[...n.reduce(((e,a)=>{const n=Object.values(a.languages);return e.add(...n)}),new Set)]}(r);document.getElementById("app").insertAdjacentHTML("afterbegin",'<header id="header" class="header"><div class="header__content wrapper">Header</div></header>'),document.getElementById("header").insertAdjacentHTML("afterend",'<main id="main" class="main"></main>');const l=document.getElementById("main");l.insertAdjacentHTML("afterbegin",'<select id="select_region" class="select_region select">\n        <option id="Europe" value="Europe">Europe</option>\n        <option id="North America" value="North America">North America</option>\n        <option id="South America" value="South America">South America</option>\n        <option id="Asia" value="Asia">Asia</option>\n        <option id="Oceania" value="Oceania">Oceania</option>\n</select>');let c=document.querySelector("select option").textContent;!function(e){e.insertAdjacentHTML("beforeend",'<table id="regionList"><thead id="thead"><th id="th_name" class="th_clickSort">name<span id="sortUpName">&uarr;</span> <span id="sortDownName">&darr;</span> </th> <th id="th_capital" class="th_clickSort">capital<span id="sortUpCapital">&uarr;</span> <span id="sortDownCapital">&darr;</span></th> <th id="th_area" class="th_clickSort">area<span id="sortUpArea">&uarr;</span><span id="sortDownArea">&darr;</span></th> <th id="th_flagURL">flagURL</th> <th id="th_region">region</th></thead><tbody id="tbody"></tbody></table>')}(l);const u=document.querySelector("#regionList");i(c,r),window.onload=()=>{let e=document.querySelector("#select_region");const a=document.querySelector("#sortUpName"),n=document.querySelector("#sortDownName"),t=document.querySelector("#sortUpCapital"),l=document.querySelector("#sortDownCapital"),c=document.querySelector("#sortDownArea"),g=document.querySelector("#sortUpArea");n.addEventListener("click",(()=>o(0,u))),a.addEventListener("click",(()=>s(0,u))),l.addEventListener("click",(()=>o(1,u))),t.addEventListener("click",(()=>s(1,u))),c.addEventListener("click",(()=>function(e,a){let n=Array.from(a.rows).slice(1).sort(((e,a)=>Number(e.cells[2].innerHTML)>Number(a.cells[2].innerHTML)?-1:1));a.tBodies[0].append(...n)}(0,u))),g.addEventListener("click",(()=>function(e,a){let n=Array.from(a.rows).slice(1).sort(((e,a)=>Number(e.cells[2].innerHTML)>Number(a.cells[2].innerHTML)?1:-1));a.tBodies[0].append(...n)}(0,u))),e.addEventListener("change",(()=>{document.querySelector("#tbody").innerHTML="",i(e.value,r)}))}})()})();