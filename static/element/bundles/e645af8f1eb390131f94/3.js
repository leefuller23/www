(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{386:function(t,e,i){"use strict";i.r(e),i.d(e,"DefaultOptions",(function(){return c})),i.d(e,"default",(function(){return h}));var n=i(80),s=i.n(n),o=i(114);function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){s()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}const c={maxCount:50,gravity:.005};class h{constructor(t){s()(this,"options",void 0),s()(this,"context",null),s()(this,"particles",[]),s()(this,"lastAnimationTime",void 0),s()(this,"isRunning",void 0),s()(this,"start",async(t,e=3e3)=>{if(!t)return;this.context=t.getContext("2d"),this.particles=[];const i=this.options.maxCount;for(;this.particles.length<i;)this.particles.push(this.resetParticle({},t.width,t.height));this.isRunning=!0,requestAnimationFrame(this.renderLoop),e&&window.setTimeout(this.stop,e)}),s()(this,"stop",async()=>{this.isRunning=!1}),s()(this,"resetParticle",(t,e,i)=>(t.x=Math.random()*e,t.y=Math.random()*-i,t.xCol=t.x,t.gravity=this.options.gravity+6*Math.random()+4,t)),s()(this,"renderLoop",()=>{if(this.context&&this.context.canvas)if(0===this.particles.length)this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height);else{(Date.now()-this.lastAnimationTime>=15||!this.lastAnimationTime)&&(this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height),this.lastAnimationTime=Date.now(),this.animateAndRenderInvaders()),requestAnimationFrame(this.renderLoop)}}),this.options=a(a({},c),t)}animateAndRenderInvaders(){if(this.context&&this.context.canvas){this.context.font="50px Twemoji";for(const t of Object(o.b)(this.particles))t.y+=t.gravity,this.context.save(),this.context.fillText("👾",t.x,t.y),this.context.restore()}}}}}]);
//# sourceMappingURL=3.js.map