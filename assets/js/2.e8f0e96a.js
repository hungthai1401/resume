(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{235:function(t,e,n){},236:function(t,e,n){},237:function(t,e,n){},238:function(t,e,n){},239:function(t,e,n){},240:function(t,e,n){},241:function(t,e,n){},242:function(t,e,n){},243:function(t,e,n){var r,s;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(s="function"==typeof(r=function(){var t,e,n={version:"0.2.0"},r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function s(t,e,n){return t<e?e:t>n?n:t}function i(t){return 100*(-1+t)}n.configure=function(t){var e,n;for(e in t)void 0!==(n=t[e])&&t.hasOwnProperty(e)&&(r[e]=n);return this},n.status=null,n.set=function(t){var e=n.isStarted();t=s(t,r.minimum,1),n.status=1===t?null:t;var l=n.render(!e),u=l.querySelector(r.barSelector),c=r.speed,p=r.easing;return l.offsetWidth,o((function(e){""===r.positionUsing&&(r.positionUsing=n.getPositioningCSS()),a(u,function(t,e,n){var s;return(s="translate3d"===r.positionUsing?{transform:"translate3d("+i(t)+"%,0,0)"}:"translate"===r.positionUsing?{transform:"translate("+i(t)+"%,0)"}:{"margin-left":i(t)+"%"}).transition="all "+e+"ms "+n,s}(t,c,p)),1===t?(a(l,{transition:"none",opacity:1}),l.offsetWidth,setTimeout((function(){a(l,{transition:"all "+c+"ms linear",opacity:0}),setTimeout((function(){n.remove(),e()}),c)}),c)):setTimeout(e,c)})),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var t=function(){setTimeout((function(){n.status&&(n.trickle(),t())}),r.trickleSpeed)};return r.trickle&&t(),this},n.done=function(t){return t||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(t){var e=n.status;return e?("number"!=typeof t&&(t=(1-e)*s(Math.random()*e,.1,.95)),e=s(e+t,0,.994),n.set(e)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},t=0,e=0,n.promise=function(r){return r&&"resolved"!==r.state()?(0===e&&n.start(),t++,e++,r.always((function(){0==--e?(t=0,n.done()):n.set((t-e)/t)})),this):this},n.render=function(t){if(n.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var e=document.createElement("div");e.id="nprogress",e.innerHTML=r.template;var s,o=e.querySelector(r.barSelector),l=t?"-100":i(n.status||0),c=document.querySelector(r.parent);return a(o,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),r.showSpinner||(s=e.querySelector(r.spinnerSelector))&&h(s),c!=document.body&&u(c,"nprogress-custom-parent"),c.appendChild(e),e},n.remove=function(){c(document.documentElement,"nprogress-busy"),c(document.querySelector(r.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&h(t)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var o=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),1==t.length&&e()}}(),a=function(){var t=["Webkit","O","Moz","ms"],e={};function n(n){return n=n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(t,e){return e.toUpperCase()})),e[n]||(e[n]=function(e){var n=document.body.style;if(e in n)return e;for(var r,s=t.length,i=e.charAt(0).toUpperCase()+e.slice(1);s--;)if((r=t[s]+i)in n)return r;return e}(n))}function r(t,e,r){e=n(e),t.style[e]=r}return function(t,e){var n,s,i=arguments;if(2==i.length)for(n in e)void 0!==(s=e[n])&&e.hasOwnProperty(n)&&r(t,n,s);else r(t,i[1],i[2])}}();function l(t,e){return("string"==typeof t?t:p(t)).indexOf(" "+e+" ")>=0}function u(t,e){var n=p(t),r=n+e;l(n,e)||(t.className=r.substring(1))}function c(t,e){var n,r=p(t);l(t,e)&&(n=r.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function p(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function h(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return n})?r.call(e,n,e,t):r)||(t.exports=s)},244:function(t,e,n){"use strict";n(235)},245:function(t,e,n){"use strict";n(236)},246:function(t,e,n){"use strict";n(237)},247:function(t,e,n){"use strict";n(238)},248:function(t,e,n){"use strict";n(239)},249:function(t,e,n){"use strict";n(240)},250:function(t,e,n){"use strict";n(241)},251:function(t,e,n){"use strict";n(242)},252:function(t,e,n){"use strict";n.r(e);var r=n(0),s=n(243),i=n.n(s),o={props:["sidebarItems"]},a=(n(244),n(14)),l=Object(a.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"page"},[t("Content",{staticClass:"content",attrs:{custom:!1}})],1)}),[],!1,null,null,null).exports;n(89);const u=/#.*$/,c=/\.(md|html)$/,p=/\/$/,h=/^(https?:|mailto:|tel:)/;function d(t){return t.replace(u,"").replace(c,"")}function f(t){return h.test(t)}function m(t){if(f(t))return t;const e=t.match(u),n=e?e[0]:"",r=d(t);return p.test(r)?t:r+".html"+n}function g(t,e){const n=t.hash,r=function(t){const e=t.match(u);if(e)return e[0]}(e);if(r&&n!==r)return!1;return d(t.path)===d(e)}function b(t,e,n){n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const s=e.split("/");n&&s[s.length-1]||s.pop();const i=t.replace(/^\//,"").split("/");for(let t=0;t<i.length;t++){const e=i[t];".."===e?s.pop():"."!==e&&s.push(e)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));const r=d(e);for(let n=0;n<t.length;n++)if(d(t[n].path)===r)return Object.assign({},t[n],{type:"page",path:m(e)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function v(t,e,n,r){if("auto"===t.frontmatter.sidebar)return function(t){const e=k(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const{pages:s,themeConfig:i}=n,o=(r&&i.locales&&i.locales[r]||i).sidebar||i.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t.path,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(r))return{base:r,config:e[r]};var n;return{}}(e,o);return n?n.map(e=>function t(e,n,r,s){if("string"==typeof e)return b(n,e,r);if(Array.isArray(e))return Object.assign(b(n,e[0],r),{title:e[1]});{s&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");const i=e.children||[];return{type:"group",title:e.title,children:i.map(e=>t(e,n,r,!0)),collapsable:!1!==e.collapsable}}}(e,s,t)):[]}return[]}function k(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function _(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}function y(t,e,n,r){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:r,"sidebar-link":!0}},n)}function S(t,e,n,r,s,i=1){return!e||i>s?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const o=g(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[y(t,"#"+e.slug,e.title,o),S(t,e.children,n,r,s,i+1)])}))}var C={functional:!0,props:["item"],render(t,{parent:{$page:e,$site:n,$route:r},props:{item:s}}){const i=g(r,s.path),o="auto"===s.type?i||s.children.some(t=>g(r,s.basePath+"#"+t.slug)):i,a=y(t,s.path,s.title||s.path,o),l=null!=e.frontmatter.sidebarDepth?e.frontmatter.sidebarDepth:n.themeConfig.sidebarDepth,c=null==l?1:l;if("auto"===s.type)return[a,S(t,s.children,s.basePath,r,c)];if(o&&s.headers&&!u.test(s.path)){return[a,S(t,k(s.headers),s.path,r,c)]}return a}},w=(n(245),Object(a.a)(C,void 0,void 0,!1,null,null,null).exports),x={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},$=(n(246),Object(a.a)(x,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null).exports),L={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:w,DropdownTransition:$}},O=(n(247),Object(a.a)(L,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),e("DropdownTransition",[t.open||!t.collapsable?e("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,(function(t){return e("li",[e("SidebarLink",{attrs:{item:t}})],1)})),0):t._e()])],1)}),[],!1,null,null,null).exports),T={props:{item:{required:!0}},computed:{link(){return m(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:f,isMailto:function(t){return/^mailto:/.test(t)},isTel:function(t){return/^tel:/.test(t)}}},N=Object(a.a)(T,(function(){var t=this,e=t._self._c;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null).exports,j={components:{NavLink:N,DropdownTransition:$},data:()=>({open:!1}),props:{item:{required:!0}},methods:{toggle(){this.open=!this.open}}},I=(n(248),{components:{NavLink:N,DropdownLink:Object(a.a)(j,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(n,r){return e("li",{key:n.link||r,staticClass:"dropdown-item"},["links"===n.type?e("h4",[t._v(t._s(n.text))]):t._e(),t._v(" "),"links"===n.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(n.items,(function(t){return e("li",{key:t.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:t}})],1)})),0):e("NavLink",{attrs:{item:n}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,n=this.$router.options.routes,r=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(t).map(s=>{const i=t[s],o=r[s]&&r[s].label||i.lang;let a;return i.lang===this.$lang?a=e:(a=e.replace(this.$localeConfig.path,s),n.some(t=>t.path===a)||(a=s)),{text:o,link:a}})};return[...this.userNav,s]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(_(t),{items:(t.items||[]).map(_)}))},repoLink(){const{repo:t}=this.$site.themeConfig;if(t)return/^https?:/.test(t)?t:"https://github.com/"+t},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let n=0;n<e.length;n++){const r=e[n];if(new RegExp(r,"i").test(t))return r}return"Source"}}});n(249);var E={components:{SidebarGroup:O,SidebarLink:w,NavLinks:Object(a.a)(I,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports},props:["items"],data:()=>({openGroupIndex:0}),created(){this.refreshIndex()},watch:{$route(){this.refreshIndex()}},methods:{refreshIndex(){const t=function(t,e){for(let n=0;n<e.length;n++){const r=e[n];if("group"===r.type&&r.children.some(e=>g(t,e.path)))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return g(this.$route,t.path)}}},M=(n(250),{components:{Page:l,Sidebar:Object(a.a)(E,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar"},[e("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(n,r){return e("li",{key:r},["group"===n.type?e("SidebarGroup",{attrs:{item:n,first:0===r,open:r===t.openGroupIndex,collapsable:n.collapsable},on:{toggle:function(e){return t.toggleGroup(r)}}}):e("SidebarLink",{attrs:{item:n}})],1)})),0):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports},data:()=>({isSidebarOpen:!1}),computed:{shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.layout&&!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return v(this.$page,this.$route,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){window.addEventListener("scroll",this.onScroll),i.a.configure({showSpinner:!1}),this.$router.beforeEach((t,e,n)=>{t.path===e.path||r.a.component(t.name)||i.a.start(),n()}),this.$router.afterEach(()=>{i.a.done(),this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),G=(n(251),Object(a.a)(M,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.layout?e("div",{staticClass:"custom-layout"},[e(t.$page.frontmatter.layout,{tag:"component"})],1):e("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)}),[],!1,null,null,null));e.default=G.exports}}]);