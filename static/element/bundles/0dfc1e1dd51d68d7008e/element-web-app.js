(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1299:function(e,t){},1362:function(e,t,n){var o={"./":[227,9],"./ICanvasEffect":[786,7,8],"./ICanvasEffect.ts":[786,7,8],"./confetti":[405,9,0],"./confetti/":[405,9,0],"./confetti/index":[405,9,0],"./confetti/index.ts":[405,9,0],"./effect":[787,9,9],"./effect.ts":[787,9,9],"./fireworks":[406,9,1],"./fireworks/":[406,9,1],"./fireworks/index":[406,9,1],"./fireworks/index.ts":[406,9,1],"./hearts":[407,9,2],"./hearts/":[407,9,2],"./hearts/index":[407,9,2],"./hearts/index.ts":[407,9,2],"./index":[227,9],"./index.ts":[227,9],"./rainfall":[408,9,3],"./rainfall/":[408,9,3],"./rainfall/index":[408,9,3],"./rainfall/index.ts":[408,9,3],"./snowfall":[409,9,4],"./snowfall/":[409,9,4],"./snowfall/index":[409,9,4],"./snowfall/index.ts":[409,9,4],"./spaceinvaders":[410,9,5],"./spaceinvaders/":[410,9,5],"./spaceinvaders/index":[410,9,5],"./spaceinvaders/index.ts":[410,9,5],"./utils":[334,9],"./utils.ts":[334,9]};function a(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return Promise.all(t.slice(2).map(n.e)).then((function(){return n.t(a,t[1])}))}a.keys=function(){return Object.keys(o)},a.id=1362,e.exports=a},1369:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(87),a=n.n(o),r=n(97);class i extends a.a.PureComponent{render(){var e;const t=r.b.getObject("branding"),n=null!==(e=null==t?void 0:t.get("auth_header_logo_url"))&&void 0!==e?e:"themes/element/img/logos/element-logo.svg";return a.a.createElement("div",{className:"mx_AuthHeaderLogo"},a.a.createElement("img",{src:n,alt:"Element"}))}}},1409:function(e,t,n){"use strict";n.r(t),n.d(t,"loadApp",(function(){return k}));n(1288);var o=n(87),a=n.n(o),r=n(124),i=n(88),l=n(296),s=n(273),c=n(399),d=n(97),u=n(0),g=n(119),f=n(9),w=n(1311),m=n(26);let h=null;function v(e){const t=Object(m.b)(e);return{screen:t.location.substring(1),params:t.params}}function p(e){decodeURIComponent(window.location.hash)!==h&&function(e){if(!window.matrixChat)return;u.a.log("Routing URL ",e.href);const t=v(e);window.matrixChat.showScreen(t.screen,t.params)}(window.location)}function _(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u.a.log("newscreen "+e);const n="#/"+e;h=n,e.startsWith("room/")&&window.location.hash.includes("/$")===n.includes("/$")&&window.location.hash.startsWith(n)&&(t=!0),t?window.location.replace(n):window.location.assign(n)}function b(e){let t;t="vector:"===window.location.protocol?"https://app.element.io/#/register":window.location.protocol+"//"+window.location.host+window.location.pathname+"#/register";const n=Object.keys(e);for(let o=0;o<n.length;++o){t+=0===o?"?":"&";const a=n[o];t+=a+"="+encodeURIComponent(e[a])}return t}function x(){const e=new URL(window.location.href);e.searchParams.delete("loginToken"),u.a.log(`Redirecting to ${e.href} to drop loginToken from queryparams`),window.history.replaceState(null,"",e.href)}async function k(e){var t;window.addEventListener("hashchange",p);const n=r.a.get(),o=Object(m.a)(window.location),h=window.location.protocol+"//"+window.location.host+window.location.pathname;u.a.log("Vector starting at "+h),n.startUpdater();const k=await async function(){let e;try{u.a.log("Verifying homeserver configuration");const t=d.b.get();let n=t.default_server_config;const o=t.default_server_name,a=t.default_hs_url,r=t.default_is_url,c=[n,o,a].filter(e=>!!e);if(c.length>1)throw Object(i.i)(Object(i.c)("Invalid configuration: can only specify one of default_server_config, default_server_name, or default_hs_url."));if(c.length<1)throw Object(i.i)(Object(i.c)("Invalid configuration: no default server specified."));a&&(u.a.log("Config uses a default_hs_url - constructing a default_server_config using this information"),u.a.warn("DEPRECATED CONFIG OPTION: In the future, default_hs_url will not be accepted. Please use default_server_config instead."),n={"m.homeserver":{base_url:a}},r&&(n["m.identity_server"]={base_url:r}));let g=null;n&&(u.a.log("Config uses a default_server_config - validating object"),g=await s.a.fromDiscoveryConfig(n)),o&&(u.a.log("Config uses a default_server_name - doing .well-known lookup"),u.a.warn("DEPRECATED CONFIG OPTION: In the future, default_server_name will not be accepted. Please use default_server_config instead."),g=await s.a.findClientConfig(o)),e=l.a.buildValidatedConfigFromDiscovery(o,g,!0)}catch(t){const{hsUrl:n,isUrl:o,userId:a}=await c.c();if(!n||!a)throw t;u.a.error(t),u.a.warn("A session was found - suppressing config error and using the session's homeserver"),u.a.log("Using pre-existing hsUrl and isUrl: ",{hsUrl:n,isUrl:o}),e=await l.a.validateServerConfigWithStaticUrls(n,o,!0)}return e.isDefault=!0,u.a.log("Using homeserver config:",e),u.a.log("Updating SdkConfig with validated discovery information"),d.b.add({validated_server_config:e}),d.b.get()}(),U=new f.a(k),[y]=await c.b(),C=!!y,O=!!o.loginToken,E=Object(d.c)(k);let P=!0===E.immediate;const j="#/welcome"===window.location.hash||"#"===window.location.hash;if(!P&&E.on_welcome_page&&j&&(P=!0),!C&&!O&&P){u.a.log("Bypassing app load to redirect to SSO");const e=Object(g.createClient)({baseUrl:k.validated_server_config.hsUrl,idBaseUrl:k.validated_server_config.isUrl});return void r.a.get().startSingleSignOn(e,"sso","/"+v(window.location).screen)}const N=null!==(t=U.get("default_device_display_name"))&&void 0!==t?t:n.getDefaultDeviceDisplayName();return a.a.createElement(w.a,{onNewScreen:_,makeRegistrationUrl:b,config:k,realQueryParams:o,startingFragmentQueryParams:e,enableGuest:!k.disable_guests,onTokenLoginCompleted:x,initialScreenAfterLogin:v(window.location),defaultDeviceDisplayName:N})}window.React=a.a,u.a.log("Application is running in production mode"),window.matrixLogger=u.a},265:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n(17),a=n.n(o),r=n(87),i=n.n(r),l=n(97),s=n(88);var c=()=>{var e;const t=l.b.getObject("branding"),n=null!==(e=null==t?void 0:t.get("auth_footer_links"))&&void 0!==e?e:[{text:"Blog",url:"https://element.io/blog"},{text:"Twitter",url:"https://twitter.com/element_hq"},{text:"GitHub",url:"https://github.com/vector-im/element-web"}],o=[];for(const e of n)o.push(i.a.createElement("a",{href:e.url,key:e.text,target:"_blank",rel:"noreferrer noopener"},e.text));return i.a.createElement("div",{className:"mx_AuthFooter"},o,i.a.createElement("a",{href:"https://matrix.org",target:"_blank",rel:"noreferrer noopener"},Object(s.a)("Powered by Matrix")))};class d extends i.a.PureComponent{static getWelcomeBackgroundUrl(){if(d.welcomeBackgroundUrl)return d.welcomeBackgroundUrl;const e=l.b.getObject("branding");d.welcomeBackgroundUrl="themes/element/img/backgrounds/lake.jpg";const t=null==e?void 0:e.get("welcome_background_url");if(t)if(Array.isArray(t)){const e=Math.floor(Math.random()*t.length);d.welcomeBackgroundUrl=t[e]}else d.welcomeBackgroundUrl=t;return d.welcomeBackgroundUrl}render(){const e={background:`center/cover fixed url(${d.getWelcomeBackgroundUrl()})`},t={position:"absolute",top:0,right:0,bottom:0,left:0,filter:"blur(40px)",background:e.background};return i.a.createElement("div",{className:"mx_AuthPage",style:e},i.a.createElement("div",{className:"mx_AuthPage_modal",style:{position:"relative",background:"initial"}},i.a.createElement("div",{className:"mx_AuthPage_modalBlur",style:t}),i.a.createElement("div",{className:"mx_AuthPage_modalContent",style:{display:"flex",zIndex:1,background:"rgba(255, 255, 255, 0.59)",borderRadius:"8px"}},this.props.children)),i.a.createElement(c,null))}}a()(d,"welcomeBackgroundUrl",void 0)}}]);
//# sourceMappingURL=element-web-app.js.map