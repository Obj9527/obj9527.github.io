(function(e){function n(n){for(var t,o,a=n[0],u=n[1],s=n[2],c=0,f=[];c<a.length;c++)o=a[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);l&&l(n);while(f.length)f.shift()();return d.push.apply(d,s||[]),i()}function i(){for(var e,n=0;n<d.length;n++){for(var i=d[n],t=!0,o=1;o<i.length;o++){var a=i[o];0!==r[a]&&(t=!1)}t&&(d.splice(n--,1),e=u(u.s=i[0]))}return e}var t={},o={app:0},r={app:0},d=[];function a(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6ee86f3a","chunk-2d21f841":"7b0f4df1","chunk-eaf3c18e":"6913c195"}[e]+".js"}function u(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,u),i.l=!0,i.exports}u.e=function(e){var n=[],i={"chunk-eaf3c18e":1};o[e]?n.push(o[e]):0!==o[e]&&i[e]&&n.push(o[e]=new Promise((function(n,i){for(var t="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-2d21f841":"31d6cfe0","chunk-eaf3c18e":"8f5478c5"}[e]+".css",r=u.p+t,d=document.getElementsByTagName("link"),a=0;a<d.length;a++){var s=d[a],c=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===t||c===r))return n()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){s=f[a],c=s.getAttribute("data-href");if(c===t||c===r)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var t=n&&n.target&&n.target.src||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");d.code="CSS_CHUNK_LOAD_FAILED",d.request=t,delete o[e],l.parentNode.removeChild(l),i(d)},l.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(l)})).then((function(){o[e]=0})));var t=r[e];if(0!==t)if(t)n.push(t[2]);else{var d=new Promise((function(n,i){t=r[e]=[n,i]}));n.push(t[2]=d);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=a(e);var f=new Error;s=function(n){c.onerror=c.onload=null,clearTimeout(l);var i=r[e];if(0!==i){if(i){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",f.name="ChunkLoadError",f.type=t,f.request=o,i[1](f)}r[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(n)},u.m=e,u.c=t,u.d=function(e,n,i){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(u.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)u.d(i,t,function(n){return e[n]}.bind(null,t));return i},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var l=c;d.push([0,"chunk-vendors"]),i()})({0:function(e,n,i){e.exports=i("56d7")},"56d7":function(e,n,i){"use strict";i.r(n);i("e260"),i("e6cf"),i("cca6"),i("a79d");var t=i("2b0e"),o=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},r=[],d=i("2877"),a={},u=Object(d["a"])(a,o,r,!1,null,null,null),s=u.exports,c=(i("d3b7"),i("3ca3"),i("ddb0"),i("8c4f"));t["default"].use(c["a"]);var f=[{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:function(){return i.e("chunk-2d21f841").then(i.bind(null,"d9c9"))}},{path:"/desktop",name:"Desktop",component:function(){return i.e("chunk-eaf3c18e").then(i.bind(null,"9a57"))}},{path:"/about",name:"About",component:function(){return i.e("about").then(i.bind(null,"f820"))}},{path:"*",redirect:"/login"}],l=new c["a"]({mode:"history",routes:f}),m=l,h=(i("a434"),i("2f62"));t["default"].use(h["a"]);var p=new h["a"].Store({state:{showControlPanel:!1,showDesktopMenu:!1,showAppMenu:!1,windowList:[],focusedWindow:"",minimizedWindowList:[],maximizedWindowList:[],url:"",fullHeight:0,fullWidth:0,hidedSidebar:!1,wallpaper:""},mutations:{changeShowControlPanel:function(e,n){e.showControlPanel=n},openWindow:function(e,n){e.windowList.push(n),e.windowList[e.windowList.indexOf(n)].meta.maximized=!1},closeWindow:function(e,n){for(var i=0;i<e.windowList.length;i++)if(e.windowList[i].id===n){e.windowList.splice(i,1);break}for(var t=0;t<e.maximizedWindowList.length;t++)if(e.maximizedWindowList[t]===n){e.maximizedWindowList.splice(t,1);break}for(var o=0;o<e.minimizedWindowList.length;o++)if(e.minimizedWindowList[o]===n){e.minimizedWindowList.splice(o,1);break}this.commit("hideSidebar",!1),this.commit("refreshFocusInLastWindow")},minimizeWindow:function(e,n){-1!==e.maximizedWindowList.indexOf(n)&&e.maximizedWindowList.splice(e.maximizedWindowList.indexOf(n),1),e.minimizedWindowList.push(n),this.commit("hideSidebar",!1)},maximizeWindow:function(e,n){-1!==e.minimizedWindowList.indexOf(n)&&e.minimizedWindowList.splice(e.minimizedWindowList.indexOf(n),1);for(var i=0;i<e.windowList.length;i++)e.windowList[i].id===n&&(e.windowList[i].meta.maximized=!0);e.maximizedWindowList.push(n),this.commit("hideSidebar",!0)},restoreWindow:function(e,n){var i=e.maximizedWindowList.indexOf(n),t=e.minimizedWindowList.indexOf(n);-1!==i?e.maximizedWindowList.splice(i,1):-1!==t&&e.minimizedWindowList.splice(t,1);for(var o=0;o<e.windowList.length;o++)e.windowList[o].id===n&&(e.windowList[o].meta.maximized=!1);this.commit("hideSidebar",!1)},refreshFullWindowSize:function(e,n){e.fullHeight=n.h,e.fullWidth=n.w},hideSidebar:function(e,n){e.hidedSidebar=n},refreshWindowFocused:function(e,n){e.focusedWindow!==n&&(e.focusedWindow=n)},refreshFocusInLastWindow:function(e){0!==e.windowList.length&&this.commit("refreshWindowFocused",e.windowList[e.windowList.length-1].id)},changeBackground:function(e,n){e.wallpaper=n},changeShowDesktopMenu:function(e,n){e.showDesktopMenu=n},changeShowAppMenu:function(e,n){e.showAppMenu=n}},actions:{},modules:{}});i("ba8c"),i("7d05");t["default"].config.productionTip=!1,new t["default"]({router:m,store:p,render:function(e){return e(s)}}).$mount("#app")},"7d05":function(e,n,i){},ba8c:function(e,n,i){}});
//# sourceMappingURL=app.e84aa6cc.js.map