(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f841"],{d9c9:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"relative duration-500 select-none flex flex-col justify-around items-center top-0 right-0 overflow-hidden m-0 p-0 h-screen w-screen bg-ub-violet"},[s("img",{staticClass:"md:w-1/4 w-1/2",attrs:{src:this.icons.cofOrangeHex,alt:"Ubuntu Logo"}}),s("div",{staticClass:"w-10 h-10 flex justify-center items-center rounded-full outline-none cursor-pointer",on:{click:e.turnOn}},[s("div",{staticClass:"rounded-full flex justify-center items-center w-10 h-10 hover:bg-gray-300",class:this.isBoot?"hover:bg-ub-violet":"bg-white"},[e.isBoot?e._e():s("img",{staticClass:"w-8",attrs:{src:this.icons.powerButton,alt:"Power Button"}}),e.isBoot?s("img",{staticClass:"w-10",class:this.isBoot?"animate-spin":"",attrs:{src:this.icons.processSymbol,alt:"Ubuntu Process Symbol"}}):e._e()])]),s("img",{staticClass:"md:w-1/5 w-1/2",attrs:{src:this.icons.ubuntuWhiteHex,alt:"Ubuntu Name"}}),e._m(0)])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text-white mb-4"},[s("a",{staticClass:"underline",attrs:{href:"https://zzjbhack.com",rel:"noreferrer noopener",target:"_blank"}},[e._v("Blog")]),s("span",{staticClass:"font-bold mx-1"},[e._v("|")]),s("a",{staticClass:"underline",attrs:{href:"https://github.com/obj9527/obj9527.github.io",rel:"noreferrer noopener",target:"_blank"}},[e._v("github")])])}],o={name:"Login",data:function(){return{icons:{cofOrangeHex:"./themes/Yaru/status/cof_orange_hex.svg",ubuntuWhiteHex:"./themes/Yaru/status/ubuntu_white_hex.svg",powerButton:"./themes/Yaru/status/power-button.svg",processSymbol:"./themes/Yaru/status/process-working-symbolic.svg"},isBoot:!1}},methods:{turnOn:function(){var e=this;this.isBoot=!0,setTimeout((function(){e.fullScreen(),e.$router.push("/desktop")}),2e3)},fullScreen:function(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()}}},u=o,i=s("2877"),l=Object(i["a"])(u,n,r,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d21f841.ea13bd60.js.map