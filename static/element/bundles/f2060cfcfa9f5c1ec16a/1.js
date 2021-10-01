(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{379:function(t,i,e){"use strict";e.r(i),e.d(i,"DefaultOptions",(function(){return r})),e.d(i,"default",(function(){return h}));var s=e(80),n=e.n(s);function o(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);i&&(s=s.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,s)}return e}function a(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?o(Object(e),!0).forEach((function(i){n()(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}const r={maxCount:500,gravity:.05};class h{constructor(t){n()(this,"options",void 0),n()(this,"context",null),n()(this,"supportsAnimationFrame",window.requestAnimationFrame),n()(this,"particles",[]),n()(this,"isRunning",void 0),n()(this,"start",async(t,i=3e3)=>{t&&(this.isRunning=!0,this.context=t.getContext("2d"),this.supportsAnimationFrame.call(window,this.updateWorld),i&&window.setTimeout(this.stop,i))}),n()(this,"updateWorld",()=>{(this.isRunning||0!==this.particles.length)&&(this.update(),this.paint(),this.supportsAnimationFrame.call(window,this.updateWorld))}),n()(this,"update",()=>{this.particles.length<this.options.maxCount&&this.isRunning&&this.createFirework();const t=[];for(let i=0;i<this.particles.length;i++)this.move(this.particles[i])&&t.push(this.particles[i]);this.particles=t}),n()(this,"paint",()=>{if(this.context&&this.context.canvas){this.context.globalCompositeOperation="destination-out",this.context.fillStyle="rgba(0,0,0,0.5)",this.context.fillRect(0,0,this.context.canvas.width,this.context.canvas.height),this.context.globalCompositeOperation="lighter";for(let t=0;t<this.particles.length;t++)this.drawParticle(this.particles[t])}}),n()(this,"createFirework",()=>{if(!this.context||!this.context.canvas)return;const t=this.context.canvas.width,i=this.context.canvas.height,e=Math.random()*(t-200)+100,s=Math.random()*(i-200)+100,n=50*Math.random()+100,o="rgb("+~~(200*Math.random()+55)+","+~~(200*Math.random()+55)+","+~~(200*Math.random()+55)+")";for(let t=0;t<n;t++){const t={};t.color=o,t.w=t.h=4*Math.random()+1,t.x=e-t.w/2,t.y=s-t.h/2,t.vx=10*(Math.random()-.5),t.vy=10*(Math.random()-.5),t.alpha=.5*Math.random()+.5;const i=Math.sqrt(25-t.vx*t.vx);Math.abs(t.vy)>i&&(t.vy=t.vy>0?i:-i),this.particles.push(t)}}),n()(this,"stop",async()=>{this.isRunning=!1}),n()(this,"drawParticle",t=>{this.context&&this.context.canvas&&(this.context.save(),this.context.beginPath(),this.context.translate(t.x+t.w/2,t.y+t.h/2),this.context.arc(0,0,t.w,0,2*Math.PI),this.context.fillStyle=t.color,this.context.globalAlpha=t.alpha,this.context.closePath(),this.context.fill(),this.context.restore())}),n()(this,"move",t=>(t.x+=t.vx,t.vy+=this.options.gravity,t.y+=t.vy,t.alpha-=.01,!(t.x<=-t.w||t.x>=screen.width||t.y>=screen.height||t.alpha<=0))),this.options=a(a({},r),t)}}}}]);
//# sourceMappingURL=1.js.map