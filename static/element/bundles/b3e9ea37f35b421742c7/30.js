(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1621:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var a=n(83),o=n.n(a),s=n(82),r=n.n(s),l=n(84),c=n(94),i=n(89),u=n(90),m=n(156),d=n(255),h=n(100),g=n(101),b=n(97),p=n(106);class C extends r.a.Component{constructor(e){super(e),o()(this,"updateCurrentRoom",async e=>{const t=d.a.get();let n;try{n=await t.getStats()}catch{return}let a=null;e&&(a=e.name);const o=t.crawlingRooms(),s=o.crawlingRooms.size,r=o.totalRooms.size;this.setState({eventIndexSize:n.size,eventCount:n.eventCount,crawlingRoomsCount:s,roomCount:r,currentRoom:a})}),o()(this,"onDisable",async()=>{const e=(await n.e(29).then(n.bind(null,1622))).default;u.a.createTrackedDialog("Disable message search","Disable message search",e,null,null,!1,!0)}),o()(this,"onCrawlerSleepTimeChange",e=>{this.setState({crawlerSleepTime:e.target.value}),i.b.setValue("crawlerSleepTime",null,h.a.DEVICE,e.target.value)}),this.state={eventIndexSize:0,eventCount:0,crawlingRoomsCount:0,roomCount:0,currentRoom:null,crawlerSleepTime:i.b.getValueAt(h.a.DEVICE,"crawlerSleepTime")}}componentWillUnmount(){const e=d.a.get();null!==e&&e.removeListener("changedCheckpoint",this.updateCurrentRoom)}async componentDidMount(){let e=0,t=0,n=0,a=0,o=null;const s=d.a.get();if(null!==s){s.on("changedCheckpoint",this.updateCurrentRoom);try{const t=await s.getStats();e=t.size,a=t.eventCount}catch{}const r=s.crawlingRooms();t=r.crawlingRooms.size,n=r.totalRooms.size;const l=s.currentRoom();l&&(o=l.name)}this.setState({eventIndexSize:e,eventCount:a,crawlingRoomsCount:t,roomCount:n,currentRoom:o})}render(){const e=c.a.get().brand;let t;t=null===this.state.currentRoom?Object(l.a)("Not currently indexing messages for any room."):Object(l.a)("Currently indexing: %(currentRoom)s",{currentRoom:this.state.currentRoom});const n=Math.max(0,this.state.roomCount-this.state.crawlingRoomsCount),a=r.a.createElement("div",null,Object(l.a)("%(brand)s is securely caching encrypted messages locally for them to appear in search results:",{brand:e}),r.a.createElement("div",{className:"mx_SettingsTab_subsectionText"},t,r.a.createElement("br",null),Object(l.a)("Space used:")," ",Object(m.a)(this.state.eventIndexSize,0),r.a.createElement("br",null),Object(l.a)("Indexed messages:")," ",Object(m.d)(this.state.eventCount),r.a.createElement("br",null),Object(l.a)("Indexed rooms:")," ",Object(l.a)("%(doneRooms)s out of %(totalRooms)s",{doneRooms:Object(m.d)(n),totalRooms:Object(m.d)(this.state.roomCount)})," ",r.a.createElement("br",null),r.a.createElement(g.a,{label:Object(l.a)("Message downloading sleep time(ms)"),type:"number",value:this.state.crawlerSleepTime.toString(),onChange:this.onCrawlerSleepTimeChange})));return r.a.createElement(b.a,{className:"mx_ManageEventIndexDialog",onFinished:this.props.onFinished,title:Object(l.a)("Message search")},a,r.a.createElement(p.a,{primaryButton:Object(l.a)("Done"),onPrimaryButtonClick:this.props.onFinished,primaryButtonClass:"primary",cancelButton:Object(l.a)("Disable"),onCancel:this.onDisable,cancelButtonClass:"danger"}))}}}}]);
//# sourceMappingURL=30.js.map