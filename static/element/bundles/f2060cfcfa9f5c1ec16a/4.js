(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{309:function(e,t,n){(function(n){var a,r,o;r=[],void 0===(o="function"==typeof(a=function(){"use strict";function t(e,t,n){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){i(a.response,t,n)},a.onerror=function(){console.error("could not download file")},a.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,s=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),i=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(e,n,s){var i=o.URL||o.webkitURL,c=document.createElement("a");n=n||e.name||"download",c.download=n,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?r(c):a(c.href)?t(e,n,s):r(c,c.target="_blank")):(c.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(c.href)}),4e4),setTimeout((function(){r(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,o){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,o),n);else if(a(e))t(e,n,o);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){r(s)}))}}:function(e,n,a,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,a);var i="application/octet-stream"===e.type,c=/constructor/i.test(o.HTMLElement)||o.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||i&&c||s)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},u.readAsDataURL(e)}else{var p=o.URL||o.webkitURL,d=p.createObjectURL(e);r?r.location=d:location.href=d,r=null,setTimeout((function(){p.revokeObjectURL(d)}),4e4)}});o.saveAs=i.saveAs=i,e.exports=i})?a.apply(t,r):a)||(e.exports=o)}).call(this,n(24))},532:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var a=n(81),r=n(90);const o=window.crypto.subtle||window.crypto.webkitSubtle;function s(e,t){const n=new Error(e);return n.friendlyText=t,n}function i(){return Object(a.a)("Your browser does not support the required cryptography extensions")}async function c(e,t){const n=function(e){const t=(new TextDecoder).decode(new Uint8Array(e));let n=0;for(;;){const e=t.indexOf("\n",n);if(e<0)throw new Error("Header line not found");const a=t.slice(n,e).trim();if(n=e+1,a===p)break}const a=n;for(;;){const e=t.indexOf("\n",n);if("-----END MEGOLM SESSION DATA-----"===t.slice(n,e<0?void 0:e).trim())break;if(e<0)throw new Error("Trailer line not found");n=e+1}const r=n;return function(e){const t=window.atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}(t.slice(a,r))}(e),c=r.a.get().brand;if(n.length<1)throw s("Invalid file: too short",Object(a.a)("Not a valid %(brand)s keyfile",{brand:c}));if(1!==n[0])throw s("Unsupported version",Object(a.a)("Not a valid %(brand)s keyfile",{brand:c}));const l=n.length-69;if(l<0)throw s("Invalid file: too short",Object(a.a)("Not a valid %(brand)s keyfile",{brand:c}));const d=n.subarray(1,17),h=n.subarray(17,33),m=n[33]<<24|n[34]<<16|n[35]<<8|n[36],f=n.subarray(37,37+l),y=n.subarray(-32),[w,b]=await u(d,m,t),v=n.subarray(0,-32);let E,g;try{E=await o.verify({name:"HMAC"},b,y,v)}catch(e){throw s("subtleCrypto.verify failed: "+e,i())}if(!E)throw s("hmac mismatch",Object(a.a)("Authentication check failed: incorrect password?"));try{g=await o.decrypt({name:"AES-CTR",counter:h,length:64},w,f)}catch(e){throw s("subtleCrypto.decrypt failed: "+e,i())}return(new TextDecoder).decode(new Uint8Array(g))}async function l(e,t,n){const a=(n=n||{}).kdf_rounds||5e5,r=new Uint8Array(16);window.crypto.getRandomValues(r);const c=new Uint8Array(16);window.crypto.getRandomValues(c),c[8]&=127;const[l,h]=await u(r,a,t),m=(new TextEncoder).encode(e);let f;try{f=await o.encrypt({name:"AES-CTR",counter:c,length:64},l,m)}catch(e){throw s("subtleCrypto.encrypt failed: "+e,i())}const y=new Uint8Array(f),w=1+r.length+c.length+4+y.length+32,b=new Uint8Array(w);let v=0;b[v++]=1,b.set(r,v),v+=r.length,b.set(c,v),v+=c.length,b[v++]=a>>24,b[v++]=a>>16&255,b[v++]=a>>8&255,b[v++]=255&a,b.set(y,v),v+=y.length;const E=b.subarray(0,v);let g;try{g=await o.sign({name:"HMAC"},h,E)}catch(e){throw s("subtleCrypto.sign failed: "+e,i())}const x=new Uint8Array(g);return b.set(x,v),function(e){const t=Math.ceil(e.length/96),n=new Array(t+3);n[0]=p;let a,r=0;for(a=1;a<=t;a++)n[a]=d(e.subarray(r,r+96)),r+=96;return n[a++]="-----END MEGOLM SESSION DATA-----",n[a]="",(new TextEncoder).encode(n.join("\n")).buffer}(b)}async function u(e,t,n){const a=new Date;let r,c;try{r=await o.importKey("raw",(new TextEncoder).encode(n),{name:"PBKDF2"},!1,["deriveBits"])}catch(e){throw s("subtleCrypto.importKey failed: "+e,i())}try{c=await o.deriveBits({name:"PBKDF2",salt:e,iterations:t,hash:"SHA-512"},r,512)}catch(e){throw s("subtleCrypto.deriveBits failed: "+e,i())}const l=new Date;console.log("E2e import/export: deriveKeys took "+(l-a)+"ms");const u=c.slice(0,32),p=c.slice(32),d=o.importKey("raw",u,{name:"AES-CTR"},!1,["encrypt","decrypt"]).catch(e=>{throw s("subtleCrypto.importKey failed for AES key: "+e,i())}),h=o.importKey("raw",p,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign","verify"]).catch(e=>{throw s("subtleCrypto.importKey failed for HMAC key: "+e,i())});return await Promise.all([d,h])}const p="-----BEGIN MEGOLM SESSION DATA-----";function d(e){const t=String.fromCharCode.apply(null,e);return window.btoa(t)}},918:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n(80),r=n.n(a),o=n(309),s=n.n(o),i=n(79),c=n.n(i),l=n(91),u=n.n(l),p=n(81),d=n(177),h=n(532),m=n(89);class f extends c.a.Component{constructor(e){super(e),r()(this,"_onPassphraseFormSubmit",e=>{e.preventDefault();const t=this._passphrase1.current.value;return t!==this._passphrase2.current.value?(this.setState({errStr:Object(p.a)("Passphrases must match")}),!1):t?(this._startExport(t),!1):(this.setState({errStr:Object(p.a)("Passphrase must not be empty")}),!1)}),r()(this,"_onCancelClick",e=>(e.preventDefault(),this.props.onFinished(!1),!1)),this._unmounted=!1,this._passphrase1=Object(i.createRef)(),this._passphrase2=Object(i.createRef)(),this.state={phase:1,errStr:null}}componentWillUnmount(){this._unmounted=!0}_startExport(e){Promise.resolve().then(()=>this.props.matrixClient.exportRoomKeys()).then(t=>h.b(JSON.stringify(t),e)).then(e=>{const t=new Blob([e],{type:"text/plain;charset=us-ascii"});s.a.saveAs(t,"element-keys.txt"),this.props.onFinished(!0)}).catch(e=>{if(console.error("Error exporting e2e keys:",e),this._unmounted)return;const t=e.friendlyText||Object(p.a)("Unknown error");this.setState({errStr:t,phase:1})}),this.setState({errStr:null,phase:2})}render(){const e=m.getComponent("views.dialogs.BaseDialog"),t=2===this.state.phase;return c.a.createElement(e,{className:"mx_exportE2eKeysDialog",onFinished:this.props.onFinished,title:Object(p.a)("Export room keys")},c.a.createElement("form",{onSubmit:this._onPassphraseFormSubmit},c.a.createElement("div",{className:"mx_Dialog_content"},c.a.createElement("p",null,Object(p.a)("This process allows you to export the keys for messages you have received in encrypted rooms to a local file. You will then be able to import the file into another Matrix client in the future, so that client will also be able to decrypt these messages.")),c.a.createElement("p",null,Object(p.a)("The exported file will allow anyone who can read it to decrypt any encrypted messages that you can see, so you should be careful to keep it secure. To help with this, you should enter a passphrase below, which will be used to encrypt the exported data. It will only be possible to import the data by using the same passphrase.")),c.a.createElement("div",{className:"error"},this.state.errStr),c.a.createElement("div",{className:"mx_E2eKeysDialog_inputTable"},c.a.createElement("div",{className:"mx_E2eKeysDialog_inputRow"},c.a.createElement("div",{className:"mx_E2eKeysDialog_inputLabel"},c.a.createElement("label",{htmlFor:"passphrase1"},Object(p.a)("Enter passphrase"))),c.a.createElement("div",{className:"mx_E2eKeysDialog_inputCell"},c.a.createElement("input",{ref:this._passphrase1,id:"passphrase1",autoFocus:!0,size:"64",type:"password",disabled:t}))),c.a.createElement("div",{className:"mx_E2eKeysDialog_inputRow"},c.a.createElement("div",{className:"mx_E2eKeysDialog_inputLabel"},c.a.createElement("label",{htmlFor:"passphrase2"},Object(p.a)("Confirm passphrase"))),c.a.createElement("div",{className:"mx_E2eKeysDialog_inputCell"},c.a.createElement("input",{ref:this._passphrase2,id:"passphrase2",size:"64",type:"password",disabled:t}))))),c.a.createElement("div",{className:"mx_Dialog_buttons"},c.a.createElement("input",{className:"mx_Dialog_primary",type:"submit",value:Object(p.a)("Export"),disabled:t}),c.a.createElement("button",{onClick:this._onCancelClick,disabled:t},Object(p.a)("Cancel")))))}}r()(f,"propTypes",{matrixClient:u.a.instanceOf(d.b).isRequired,onFinished:u.a.func.isRequired})}}]);
//# sourceMappingURL=4.js.map