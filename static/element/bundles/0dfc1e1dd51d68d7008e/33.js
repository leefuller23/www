(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1378:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var a=n(17),i=n.n(a),o=n(87),s=n.n(o),c=n(89),r=n(90),l=n(88),u=n(94),d=n(312),p=n(95),h=n(109),m=n(100);class y extends s.a.PureComponent{constructor(){super(...arguments),i()(this,"onOkClick",()=>{this.props.onFinished()}),i()(this,"onGoToSettingsClick",()=>{this.props.onFinished(),r.a.fire(p.a.ViewUserSettings)}),i()(this,"onSetupClick",async()=>{u.a.createTrackedDialog("Restore Backup","",d.a,{onFinished:this.props.onFinished},null,!1,!0)})}render(){const e=s.a.createElement("span",{className:"mx_KeyBackupFailedDialog_title"},Object(l.a)("New Recovery Method")),t=s.a.createElement("p",null,Object(l.a)("A new Security Phrase and key for Secure Messages have been detected.")),n=s.a.createElement("p",{className:"warning"},Object(l.a)("If you didn't set the new recovery method, an attacker may be trying to access your account. Change your account password and set a new recovery method immediately in Settings."));let a;return a=c.a.get().getKeyBackupEnabled()?s.a.createElement("div",null,t,s.a.createElement("p",null,Object(l.a)("This session is encrypting history using the new recovery method.")),n,s.a.createElement(h.a,{primaryButton:Object(l.a)("OK"),onPrimaryButtonClick:this.onOkClick,cancelButton:Object(l.a)("Go to Settings"),onCancel:this.onGoToSettingsClick})):s.a.createElement("div",null,t,n,s.a.createElement(h.a,{primaryButton:Object(l.a)("Set up Secure Messages"),onPrimaryButtonClick:this.onSetupClick,cancelButton:Object(l.a)("Go to Settings"),onCancel:this.onGoToSettingsClick})),s.a.createElement(m.a,{className:"mx_KeyBackupFailedDialog",onFinished:this.props.onFinished,title:e},a)}}}}]);
//# sourceMappingURL=33.js.map