(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1503:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return d}));var n=r(80),a=r.n(n),o=r(79),i=r.n(o),s=r(89),l=r.n(s),c=r(176),h=r(529),u=r(90),p=r(81);class d extends i.a.Component{constructor(e){super(e),a()(this,"_onFormChange",e=>{const t=this._file.current.files||[];this.setState({enableSubmit:""!==this._passphrase.current.value&&t.length>0})}),a()(this,"_onFormSubmit",e=>(e.preventDefault(),this._startImport(this._file.current.files[0],this._passphrase.current.value),!1)),a()(this,"_onCancelClick",e=>(e.preventDefault(),this.props.onFinished(!1),!1)),this._unmounted=!1,this._file=Object(o.createRef)(),this._passphrase=Object(o.createRef)(),this.state={enableSubmit:!1,phase:1,errStr:null}}componentWillUnmount(){this._unmounted=!0}_startImport(e,t){return this.setState({errStr:null,phase:2}),function(e){return new Promise((t,r)=>{const n=new FileReader;n.onload=e=>{t(e.target.result)},n.onerror=r,n.readAsArrayBuffer(e)})}(e).then(e=>h.a(e,t)).then(e=>this.props.matrixClient.importRoomKeys(JSON.parse(e))).then(()=>{this.props.onFinished(!0)}).catch(e=>{if(console.error("Error importing e2e keys:",e),this._unmounted)return;const t=e.friendlyText||Object(p.a)("Unknown error");this.setState({errStr:t,phase:1})})}render(){const e=u.getComponent("views.dialogs.BaseDialog"),t=1!==this.state.phase;return i.a.createElement(e,{className:"mx_importE2eKeysDialog",onFinished:this.props.onFinished,title:Object(p.a)("Import room keys")},i.a.createElement("form",{onSubmit:this._onFormSubmit},i.a.createElement("div",{className:"mx_Dialog_content"},i.a.createElement("p",null,Object(p.a)("This process allows you to import encryption keys that you had previously exported from another Matrix client. You will then be able to decrypt any messages that the other client could decrypt.")),i.a.createElement("p",null,Object(p.a)("The export file will be protected with a passphrase. You should enter the passphrase here, to decrypt the file.")),i.a.createElement("div",{className:"error"},this.state.errStr),i.a.createElement("div",{className:"mx_E2eKeysDialog_inputTable"},i.a.createElement("div",{className:"mx_E2eKeysDialog_inputRow"},i.a.createElement("div",{className:"mx_E2eKeysDialog_inputLabel"},i.a.createElement("label",{htmlFor:"importFile"},Object(p.a)("File to import"))),i.a.createElement("div",{className:"mx_E2eKeysDialog_inputCell"},i.a.createElement("input",{ref:this._file,id:"importFile",type:"file",autoFocus:!0,onChange:this._onFormChange,disabled:t}))),i.a.createElement("div",{className:"mx_E2eKeysDialog_inputRow"},i.a.createElement("div",{className:"mx_E2eKeysDialog_inputLabel"},i.a.createElement("label",{htmlFor:"passphrase"},Object(p.a)("Enter passphrase"))),i.a.createElement("div",{className:"mx_E2eKeysDialog_inputCell"},i.a.createElement("input",{ref:this._passphrase,id:"passphrase",size:"64",type:"password",onChange:this._onFormChange,disabled:t}))))),i.a.createElement("div",{className:"mx_Dialog_buttons"},i.a.createElement("input",{className:"mx_Dialog_primary",type:"submit",value:Object(p.a)("Import"),disabled:!this.state.enableSubmit||t}),i.a.createElement("button",{onClick:this._onCancelClick,disabled:t},Object(p.a)("Cancel")))))}}a()(d,"propTypes",{matrixClient:l.a.instanceOf(c.b).isRequired,onFinished:l.a.func.isRequired})},529:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return c}));var n=r(81),a=r(91);const o=window.crypto.subtle||window.crypto.webkitSubtle;function i(e,t){const r=new Error(e);return r.friendlyText=t,r}function s(){return Object(n.a)("Your browser does not support the required cryptography extensions")}async function l(e,t){const r=function(e){const t=(new TextDecoder).decode(new Uint8Array(e));let r=0;for(;;){const e=t.indexOf("\n",r);if(e<0)throw new Error("Header line not found");const n=t.slice(r,e).trim();if(r=e+1,n===u)break}const n=r;for(;;){const e=t.indexOf("\n",r);if("-----END MEGOLM SESSION DATA-----"===t.slice(r,e<0?void 0:e).trim())break;if(e<0)throw new Error("Trailer line not found");r=e+1}const a=r;return function(e){const t=window.atob(e),r=new Uint8Array(t.length);for(let e=0;e<t.length;e++)r[e]=t.charCodeAt(e);return r}(t.slice(n,a))}(e),l=a.a.get().brand;if(r.length<1)throw i("Invalid file: too short",Object(n.a)("Not a valid %(brand)s keyfile",{brand:l}));if(1!==r[0])throw i("Unsupported version",Object(n.a)("Not a valid %(brand)s keyfile",{brand:l}));const c=r.length-69;if(c<0)throw i("Invalid file: too short",Object(n.a)("Not a valid %(brand)s keyfile",{brand:l}));const p=r.subarray(1,17),d=r.subarray(17,33),m=r[33]<<24|r[34]<<16|r[35]<<8|r[36],y=r.subarray(37,37+c),f=r.subarray(-32),[w,b]=await h(p,m,t),E=r.subarray(0,-32);let g,_;try{g=await o.verify({name:"HMAC"},b,f,E)}catch(e){throw i("subtleCrypto.verify failed: "+e,s())}if(!g)throw i("hmac mismatch",Object(n.a)("Authentication check failed: incorrect password?"));try{_=await o.decrypt({name:"AES-CTR",counter:d,length:64},w,y)}catch(e){throw i("subtleCrypto.decrypt failed: "+e,s())}return(new TextDecoder).decode(new Uint8Array(_))}async function c(e,t,r){const n=(r=r||{}).kdf_rounds||5e5,a=new Uint8Array(16);window.crypto.getRandomValues(a);const l=new Uint8Array(16);window.crypto.getRandomValues(l),l[8]&=127;const[c,d]=await h(a,n,t),m=(new TextEncoder).encode(e);let y;try{y=await o.encrypt({name:"AES-CTR",counter:l,length:64},c,m)}catch(e){throw i("subtleCrypto.encrypt failed: "+e,s())}const f=new Uint8Array(y),w=1+a.length+l.length+4+f.length+32,b=new Uint8Array(w);let E=0;b[E++]=1,b.set(a,E),E+=a.length,b.set(l,E),E+=l.length,b[E++]=n>>24,b[E++]=n>>16&255,b[E++]=n>>8&255,b[E++]=255&n,b.set(f,E),E+=f.length;const g=b.subarray(0,E);let _;try{_=await o.sign({name:"HMAC"},d,g)}catch(e){throw i("subtleCrypto.sign failed: "+e,s())}const C=new Uint8Array(_);return b.set(C,E),function(e){const t=Math.ceil(e.length/96),r=new Array(t+3);r[0]=u;let n,a=0;for(n=1;n<=t;n++)r[n]=p(e.subarray(a,a+96)),a+=96;return r[n++]="-----END MEGOLM SESSION DATA-----",r[n]="",(new TextEncoder).encode(r.join("\n")).buffer}(b)}async function h(e,t,r){const n=new Date;let a,l;try{a=await o.importKey("raw",(new TextEncoder).encode(r),{name:"PBKDF2"},!1,["deriveBits"])}catch(e){throw i("subtleCrypto.importKey failed: "+e,s())}try{l=await o.deriveBits({name:"PBKDF2",salt:e,iterations:t,hash:"SHA-512"},a,512)}catch(e){throw i("subtleCrypto.deriveBits failed: "+e,s())}const c=new Date;console.log("E2e import/export: deriveKeys took "+(c-n)+"ms");const h=l.slice(0,32),u=l.slice(32),p=o.importKey("raw",h,{name:"AES-CTR"},!1,["encrypt","decrypt"]).catch(e=>{throw i("subtleCrypto.importKey failed for AES key: "+e,s())}),d=o.importKey("raw",u,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign","verify"]).catch(e=>{throw i("subtleCrypto.importKey failed for HMAC key: "+e,s())});return await Promise.all([p,d])}const u="-----BEGIN MEGOLM SESSION DATA-----";function p(e){const t=String.fromCharCode.apply(null,e);return window.btoa(t)}}}]);
//# sourceMappingURL=26.js.map