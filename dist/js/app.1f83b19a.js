(function(t){function e(e){for(var r,a,c=e[0],o=e[1],u=e[2],l=0,h=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);d&&d(e);while(h.length)h.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i={app:0},s=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d0e6531":"ab36a41b","chunk-3f2e997c":"e485da8a"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"chunk-3f2e997c":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0e6531":"31d6cfe0","chunk-3f2e997c":"d23a722d"}[t]+".css",i=o.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return e()}var h=document.getElementsByTagName("style");for(c=0;c<h.length;c++){u=h[c],l=u.getAttribute("data-href");if(l===r||l===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[t],d.parentNode.removeChild(d),n(s)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=c(t);var h=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",h.name="ChunkLoadError",h.type=r,h.request=a,n[1](h)}i[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var h=0;h<u.length;h++)e(u[h]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"08ba":function(t,e,n){},2889:function(t,e,n){"use strict";var r=n("08ba"),a=n.n(r);a.a},"314b":function(t,e,n){"use strict";n("96cf");var r=n("89ba"),a=n("bc3a"),i=n.n(a);e["a"]={getEvents:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("http://localhost:8000/events");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),getEventSingle:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("http://localhost:8000/events/"+e,{headers:{Authorization:"Bearer ".concat(n)}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()}},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Nav"),n("router-view")],1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar container",attrs:{role:"navigation","aria-label":"main navigation"}},[t._m(0),n("div",{staticClass:"navbar-menu",attrs:{id:"navbar"}},[n("div",{staticClass:"navbar-start"},[n("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),n("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v("About")])],1),n("div",{staticClass:"navbar-end"},[n("div",{staticClass:"navbar-item"},[n("div",{staticClass:"buttons"},[t.$auth.loading?t._e():n("div",[t.$auth.isAuthenticated?t._e():n("a",{staticClass:"button is-dark",on:{click:t.login}},[n("strong",[t._v("Sign in")])]),t.$auth.isAuthenticated?n("a",{staticClass:"button is-dark",on:{click:t.logout}},[n("strong",[t._v("Log out")])]):t._e()])])])])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-brand"},[n("a",{staticClass:"navbar-item",attrs:{href:"/"}},[n("strong",{staticClass:"is-size-4"},[t._v("ALEX TAXI Welcome")])]),n("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])])}],u={name:"Nav",methods:{login:function(){this.$auth.loginWithRedirect()},logout:function(){this.$auth.logout({returnTo:window.location.origin})}}},l=u,h=(n("e1e5"),n("2877")),d=Object(h["a"])(l,c,o,!1,null,"f6bfb184",null),p=d.exports,f={name:"app",components:{Nav:p}},v=f,b=(n("5c0b"),Object(h["a"])(v,i,s,!1,null,null,null)),m=b.exports,g=(n("d3b7"),n("8c4f")),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("section",{staticClass:"hero is-dark"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("Welcome to ALEX TAXI HOMEPAGE")]),n("h2",{staticClass:"subtitle"},[t._v(" Please choose wich Cab Service you need we take Contact with you in very short Time!!!!!. ")]),n("div",{staticClass:"button-block"},[t.$auth.isAuthenticated?t._e():n("button",{staticClass:"button is-xl is-dark",on:{click:t.login}},[t._v(" Thank`s for using our Alex Taxi Services. ")]),t.$auth.isAuthenticated?n("h3",{staticClass:"is-size-3 has-background-dark welcome"},[t._v(" Welcome, "+t._s(t.$auth.user.name)+"! ")]):t._e()])])])]),n("EventsList")],1)},w=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"events container"},[n("h2",{staticClass:"subtitle is-3"},[t._v("Check out our upcoming Cab Services")]),n("div",{staticClass:"columns is-multiline"},t._l(t.events,(function(t){return n("div",{key:t.id,staticClass:"column is-one-quarter",attrs:{event:t}},[n("router-link",{attrs:{to:"/event/"+t.id}},[n("EventCard",{attrs:{event:t}})],1)],1)})),0)])},_=[],y=(n("96cf"),n("89ba")),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"event-card"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("h2",{staticClass:"is-size-4 has-text-weight-bold"},[t._v(t._s(t.event.name))]),n("small",{staticClass:"event-date"},[t._v(t._s(t.event.date))]),n("span",[t._v(t._s(t.event.location))])])])])},E=[],O={props:["event"]},A=O,R=(n("cc3f"),Object(h["a"])(A,x,E,!1,null,"3f608c6c",null)),j=R.exports,S=n("314b"),T={name:"EventsList",components:{EventCard:j},data:function(){return{event:{},events:[]}},created:function(){this.getEventsData()},methods:{getEventsData:function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:S["a"].getEvents().then(function(t){e.$set(e,"events",t)}.bind(this));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},$=T,P=(n("2889"),Object(h["a"])($,k,_,!1,null,"9b1d516c",null)),W=P.exports,N={name:"home",components:{EventsList:W},methods:{login:function(){this.$auth.loginWithRedirect()}}},L=N,U=(n("7dbc"),Object(h["a"])(L,C,w,!1,null,"c1f3ce1e",null)),I=U.exports,M=(n("caad"),n("ac1f"),n("2532"),n("841c"),n("dfdf")),B=n("5891"),H=n.n(B),J=function(){return window.history.replaceState({},document.title,window.location.pathname)},q=function(){return r},z=function(t){var e=t.onRedirectCallback,n=void 0===e?J:e,i=t.redirectUri,s=void 0===i?window.location.origin:i,c=Object(M["a"])(t,["onRedirectCallback","redirectUri"]);return r||(r=new a["a"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.popupOpen=!0,t.prev=1,t.next=4,this.auth0Client.loginWithPopup(e);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](1),console.error(t.t0);case 9:return t.prev=9,this.popupOpen=!1,t.finish(9);case 12:return t.next=14,this.auth0Client.getUser();case 14:this.user=t.sent,this.isAuthenticated=!0;case 16:case"end":return t.stop()}}),t,this,[[1,6,9,12]])})));function e(e){return t.apply(this,arguments)}return e}(),handleRedirectCallback:function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,this.auth0Client.handleRedirectCallback();case 4:return t.next=6,this.auth0Client.getUser();case 6:this.user=t.sent,this.isAuthenticated=!0,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),this.error=t.t0;case 13:return t.prev=13,this.loading=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,this,[[1,10,13,16]])})));function e(){return t.apply(this,arguments)}return e}(),loginWithRedirect:function(t){return this.auth0Client.loginWithRedirect(t)},getIdTokenClaims:function(t){return this.auth0Client.getIdTokenClaims(t)},getTokenSilently:function(t){return this.auth0Client.getTokenSilently(t)},getTokenWithPopup:function(t){return this.auth0Client.getTokenWithPopup(t)},logout:function(t){return this.auth0Client.logout(t)}},created:function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,H()({domain:c.domain,client_id:c.clientId,audience:c.audience,redirect_uri:s});case 2:if(this.auth0Client=t.sent,t.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){t.next=10;break}return t.next=7,this.auth0Client.handleRedirectCallback();case 7:e=t.sent,r=e.appState,n(r);case 10:t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](3),this.error=t.t0;case 15:return t.prev=15,t.next=18,this.auth0Client.isAuthenticated();case 18:return this.isAuthenticated=t.sent,t.next=21,this.auth0Client.getUser();case 21:return this.user=t.sent,this.loading=!1,t.finish(15);case 24:case"end":return t.stop()}}),t,this,[[3,12,15,24]])})));function e(){return t.apply(this,arguments)}return e}()}),r)},D={install:function(t,e){t.prototype.$auth=z(e)}},X=function(t,e,n){var r=q(),a=function(){if(r.isAuthenticated)return n();r.loginWithRedirect({appState:{targetUrl:t.fullPath}})};if(!r.loading)return a();r.$watch("loading",(function(t){if(!1===t)return a()}))};a["a"].use(g["a"]);var G=new g["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:I},{path:"/about",name:"about",component:function(){return n.e("chunk-3f2e997c").then(n.bind(null,"f820"))}},{path:"/event/:id",name:"eventSingle",component:function(){return n.e("chunk-2d0e6531").then(n.bind(null,"97eb"))},beforeEnter:X}]}),F=(n("92c6"),n("8160"));a["a"].use(D,{domain:F["c"],clientId:F["b"],audience:F["a"],onRedirectCallback:function(t){G.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),a["a"].config.productionTip=!1,new a["a"]({router:G,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"752e":function(t,e,n){},"7dbc":function(t,e,n){"use strict";var r=n("d6b6"),a=n.n(r);a.a},8160:function(t){t.exports=JSON.parse('{"c":"sasa1sasa02.eu.auth0.com","b":"ZNk1x8HGJWRd1QcrrpOHNGN5J48qwi2M","a":"https://vue-express-api.com"}')},"9c0c":function(t,e,n){},ca01:function(t,e,n){},cc3f:function(t,e,n){"use strict";var r=n("752e"),a=n.n(r);a.a},d6b6:function(t,e,n){},e1e5:function(t,e,n){"use strict";var r=n("ca01"),a=n.n(r);a.a}});
//# sourceMappingURL=app.1f83b19a.js.map