(function(t){function e(e){for(var a,n,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,n=1;n<r.length;n++){var s=r[n];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=r[0]))}return t}var a={},n={app:0},o={app:0},i=[];function s(t){return l.p+"js/"+({about:"about",faq:"faq","list~profile":"list~profile",list:"list",profile:"profile"}[t]||t)+"."+{about:"bb7c5dc8","chunk-007b6cc9":"d4845041","chunk-3cf57584":"c04c5560",faq:"aa5932c6","list~profile":"62a29d26",list:"38a16fdf",profile:"984677bf"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(t){var e=[],r={about:1,"chunk-007b6cc9":1,"chunk-3cf57584":1,"list~profile":1,list:1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=new Promise((function(e,r){for(var a="css/"+({about:"about",faq:"faq","list~profile":"list~profile",list:"list",profile:"profile"}[t]||t)+"."+{about:"f7d7e49a","chunk-007b6cc9":"a3d30923","chunk-3cf57584":"78b7db41",faq:"31d6cfe0","list~profile":"8a4d4cf7",list:"44c6b1df",profile:"31d6cfe0"}[t]+".css",o=l.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===a||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete n[t],f.parentNode.removeChild(f),r(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){n[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,r){a=o[t]=[e,r]}));e.push(a[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(f);var r=o[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,r[1](d)}o[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(r,a,function(e){return t[e]}.bind(null,a));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("core-header"),r("v-card",{staticClass:"d-lg-none d-xl-flex d-xl-none indigo darken-4"},[r("v-btn",{attrs:{text:""}},[r("router-link",{staticClass:"white--text",attrs:{to:"/"}},[t._v("Home")])],1),r("v-btn",{attrs:{text:""}},[r("router-link",{staticClass:"white--text",attrs:{to:"/about"}},[t._v("About")])],1),r("v-btn",{attrs:{text:""}},[r("router-link",{staticClass:"white--text",attrs:{to:"/profile"}},[t._v("profile")])],1),r("v-btn",{attrs:{text:""}},[r("router-link",{staticClass:"white--text",attrs:{to:"/faq"}},[t._v("faq")])],1),r("v-btn",{attrs:{text:""}},[r("router-link",{staticClass:"white--text",attrs:{to:"/list"}},[t._v("Listof PR")])],1),r("v-btn",{attrs:{text:""}},[r("router-link",{staticClass:"white--text",attrs:{to:"/tutorial"}},[t._v("Tutorial")])],1)],1),r("router-view"),r("core-footer")],1)},o=[],i=(r("d3b7"),{name:"app",components:{CoreHeader:function(){return r.e("chunk-007b6cc9").then(r.bind(null,"8b55"))},CoreFooter:function(){return r.e("chunk-3cf57584").then(r.bind(null,"0588"))}},data:function(){return{}}}),s=i,l=(r("5c0b"),r("2877")),c=r("6544"),u=r.n(c),d=r("7496"),f=r("8336"),p=r("b0af"),v=Object(l["a"])(s,n,o,!1,null,null,null),h=v.exports;u()(v,{VApp:d["a"],VBtn:f["a"],VCard:p["a"]});r("5363");var b=r("f309");a["a"].use(b["a"]);var m=new b["a"]({icons:{iconfont:"mdi"}}),g=r("8c4f"),C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("HelloWorld")],1)},x=[],w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",[[a("v-container",[a("v-row",[a("v-col",{attrs:{lg:"4"}},[a("div",{staticClass:"display-2 font-weight-bold white--text"},[t._v("Welcome to Home "),a("span",{staticClass:"yellow--text"},[t._v("Pullrequest ")])])]),a("v-col",{attrs:{lg:"8"}},[a("v-img",{attrs:{src:r("caf4"),gradient:"to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",lg:"4",sm:"12"}},[a("v-card",{staticClass:"indigo darken-4"},[a("br"),a("v-icon",{staticClass:"group",attrs:{"x-large":"",dark:""}},[t._v(" emoji_people")]),a("v-card-title",{staticClass:"white--text"},[t._v("Importance")]),a("v-card-text",{staticClass:"white--text"},[t._v("You’ve been benefiting from the use of open source projects all year. Now is the time to say thanks to the maintainers of those projects, and a little birdy tells me that they love receiving contributions!")])],1)],1),a("v-col",{attrs:{cols:"12",lg:"4",sm:"12"}},[a("v-card",{staticClass:"indigo darken-4"},[a("br"),a("v-icon",{staticClass:"group",attrs:{"x-large":"",dark:""}},[t._v(" account_tree")]),a("v-card-title",{staticClass:"white--text"},[t._v("GET INVOLVED")]),a("v-card-text",{staticClass:"white--text"},[t._v("There are lots of ways to get involved in an open source project: improving docs, designs or existing code, supporting other users, fixing, replicating or triaging issues and bugs, or adding missing features.")])],1)],1),a("v-col",{attrs:{cols:"12",lg:"4",sm:"12"}},[a("v-card",{staticClass:"indigo darken-4"},[a("br"),a("v-icon",{staticClass:"group",attrs:{"x-large":"",dark:""}},[t._v(" assignment")]),a("v-card-title",{staticClass:"white--text"},[t._v("BUILD YOUR PROFILE")]),a("v-card-text",{staticClass:"white--text"},[t._v("Contributing to open source projects is also a great way to build your profile in the community and improve your CV.It’s really easy to get started. Even small contributions can be really valuable to a project.")])],1)],1)],1)],1),a("v-container",[a("div",{staticClass:"display-2 font-weight-medium  white--text "},[t._v(" Global stats")]),a("v-divider",{staticClass:"mx-4 white",attrs:{dark:""}}),a("br"),a("v-row",{attrs:{justify:"space-around"}},[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-sheet",{staticClass:"pa-12",attrs:{color:"primary"}},[a("div",{staticClass:"display-3 font-weight-bold white--text"},[t._v("122")]),a("div",{staticClass:"title  white--text"},[t._v("PARTICIPATING REPOSITORI"),a("br"),a("br")])])],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-sheet",{staticClass:"pa-12",attrs:{color:"primary"}},[a("div",{staticClass:"display-3 font-weight-bold white--text"},[t._v("1729")]),a("div",{staticClass:"title  white--text"},[t._v("PULL REQUESTS OPENED"),a("br"),a("br")])])],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-sheet",{staticClass:"pa-12",attrs:{color:"primary"}},[a("div",{staticClass:"display-3 font-weight-bold white--text"},[t._v("122")]),a("div",{staticClass:"title  white--text"},[t._v("CHALLENGE COMPLETIONS"),a("br"),a("br")])])],1)],1)],1)],a("br"),a("br"),a("v-card",{staticClass:"mx-auto text-center",attrs:{color:"indigo darken-1",dark:""}},[a("v-card-text",[a("v-sheet",{attrs:{color:"rgba(0, 0, 0, .12)"}},[t._v("PULL REQUESTS OPENED "),a("v-sparkline",{attrs:{value:t.value,color:"rgba(255, 255, 255, .7)",height:"100",padding:"24","stroke-linecap":"round",smooth:""},scopedSlots:t._u([{key:"label",fn:function(e){return[t._v(" $"+t._s(e.value)+" ")]}}])})],1)],1),a("v-card-text",[a("div",{staticClass:"display-1 font-weight-thin"},[t._v("Sales Last 24h")])]),a("v-divider"),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{attrs:{block:"",text:""}},[t._v("Go to Report")])],1)],1)],2)],1)},y=[],_={data:function(){return{value:[423,446,675,510,590,610,760],elevations:[6,12,18]}}},k=_,E=(r("a1d4"),r("99d9")),O=r("62ad"),P=r("a523"),j=r("ce7e"),V=r("132d"),S=r("adda"),T=r("0fd9"),L=r("8dd9"),q=r("7f2e"),I=Object(l["a"])(k,w,y,!1,null,"2b52ef2e",null),A=I.exports;u()(I,{VApp:d["a"],VBtn:f["a"],VCard:p["a"],VCardActions:E["a"],VCardText:E["b"],VCardTitle:E["c"],VCol:O["a"],VContainer:P["a"],VDivider:j["a"],VIcon:V["a"],VImg:S["a"],VRow:T["a"],VSheet:L["a"],VSparkline:q["a"]});var N={name:"home",components:{HelloWorld:A}},R=N,D=Object(l["a"])(R,C,x,!1,null,null,null),H=D.exports;a["a"].use(g["a"]);var U=[{path:"/",name:"home",component:H},{path:"/profile",name:"profile",component:function(){return Promise.all([r.e("list~profile"),r.e("profile")]).then(r.bind(null,"b3b1"))}},{path:"/faq",name:"faq",component:function(){return r.e("faq").then(r.bind(null,"0bcd"))}},{path:"/list",name:"list",component:function(){return Promise.all([r.e("list~profile"),r.e("list")]).then(r.bind(null,"6be2"))}},{path:"/tutorial",name:"tutorial",component:function(){return Promise.all([r.e("list~profile"),r.e("list")]).then(r.bind(null,"471e"))}},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],B=new g["a"]({routes:U}),G=B;a["a"].config.productionTip=!1,new a["a"]({vuetify:m,router:G,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var a=r("91cd"),n=r.n(a);n.a},"91cd":function(t,e,r){},a1d4:function(t,e,r){"use strict";var a=r("bf82"),n=r.n(a);n.a},bf82:function(t,e,r){},caf4:function(t,e,r){t.exports=r.p+"img/git.55614f8d.jpg"}});
//# sourceMappingURL=app.e24cb160.js.map