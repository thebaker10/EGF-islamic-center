parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"iRkG":[function(require,module,exports) {

},{"./..\\webfonts\\fa-brands-400.eot":[["fa-brands-400.e5cf17a2.eot","OeOC"],"OeOC"],"./..\\webfonts\\fa-brands-400.woff2":[["fa-brands-400.fa2b50eb.woff2","pV19"],"pV19"],"./..\\webfonts\\fa-brands-400.woff":[["fa-brands-400.76d38564.woff","Vw87"],"Vw87"],"./..\\webfonts\\fa-brands-400.ttf":[["fa-brands-400.d8d82559.ttf","ZUts"],"ZUts"],"./..\\webfonts\\fa-brands-400.svg":[["fa-brands-400.4d16fbfe.svg","w9R3"],"w9R3"],"./..\\webfonts\\fa-regular-400.eot":[["fa-regular-400.b8524921.eot","aZUn"],"aZUn"],"./..\\webfonts\\fa-regular-400.woff2":[["fa-regular-400.1f18e0a2.woff2","z6Vs"],"z6Vs"],"./..\\webfonts\\fa-regular-400.woff":[["fa-regular-400.d7f209fa.woff","HYrK"],"HYrK"],"./..\\webfonts\\fa-regular-400.ttf":[["fa-regular-400.da848ba3.ttf","qzji"],"qzji"],"./..\\webfonts\\fa-regular-400.svg":[["fa-regular-400.2be1b64f.svg","Oses"],"Oses"],"./..\\webfonts\\fa-solid-900.eot":[["fa-solid-900.4fe5d922.eot","T17m"],"T17m"],"./..\\webfonts\\fa-solid-900.woff2":[["fa-solid-900.effee26e.woff2","y7TU"],"y7TU"],"./..\\webfonts\\fa-solid-900.woff":[["fa-solid-900.187d4d4b.woff","PICE"],"PICE"],"./..\\webfonts\\fa-solid-900.ttf":[["fa-solid-900.a633dba1.ttf","lbz5"],"lbz5"],"./..\\webfonts\\fa-solid-900.svg":[["fa-solid-900.102f442e.svg","WVgM"],"WVgM"]}],"UCsW":[function(require,module,exports) {
"use strict";function e(){n()}function n(){var e=document.getElementById("prayer_section"),n=document.getElementById("services"),t=document.querySelector("nav"),r=function(){return t.classList.add("hidden")},o={root:document.querySelector("scroll-container"),rootMargin:"0px",threshold:1};new IntersectionObserver(function(){return t.classList.remove("hidden")},o).observe(e),new IntersectionObserver(r,o).observe(n),r()}Object.defineProperty(exports,"__esModule",{value:!0}),exports.IndexFunctions=void 0,exports.IndexFunctions=e;
},{}],"bo0m":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("@fortawesome/fontawesome-free/css/all.min.css");var e=require("./index");e.IndexFunctions();
},{"@fortawesome/fontawesome-free/css/all.min.css":"iRkG","./index":"UCsW"}]},{},["bo0m"], null)
//# sourceMappingURL=script.b7b7fde2.js.map