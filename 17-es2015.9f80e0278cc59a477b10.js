(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{L6id:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var o=u("pMnS"),r=u("MKJQ"),i=u("sZkV"),c=u("s7LF"),a=u("SVse"),b=u("mrSG"),p=u("p46w");class s{constructor(){}ngOnInit(){}login(l){return b.a(this,void 0,void 0,(function*(){let n=yield fetch(localStorage.getItem("serverApiBaseUrl")+"/user/login",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"accessCode",message:l.toString()})});200===n.status&&p.get("token")&&(n=yield fetch(localStorage.getItem("serverApiBaseUrl")+"/user/self"),this.user=yield n.json())}))}logout(){return b.a(this,void 0,void 0,(function*(){yield fetch(localStorage.getItem("serverApiBaseUrl")+"/user/logout",{method:"POST",credentials:"include"})}))}}var d=e.nb({encapsulation:0,styles:[[""]],data:{}});function f(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,13,"div",[],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,9,"ion-card",[],null,null,null,r.P,r.f)),e.ob(2,49152,null,0,i.l,[e.h,e.k,e.x],null,null),(l()(),e.pb(3,0,null,0,7,"ion-card-header",[],null,null,null,r.M,r.g)),e.ob(4,49152,null,0,i.n,[e.h,e.k,e.x],null,null),(l()(),e.pb(5,0,null,0,2,"ion-card-title",[],null,null,null,r.O,r.i)),e.ob(6,49152,null,0,i.p,[e.h,e.k,e.x],null,null),(l()(),e.Hb(7,0,["Welcome, ",""])),(l()(),e.pb(8,0,null,0,2,"ion-card-subtitle",[],null,null,null,r.N,r.h)),e.ob(9,49152,null,0,i.o,[e.h,e.k,e.x],null,null),(l()(),e.Hb(10,0,["",""])),(l()(),e.pb(11,0,null,null,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.logout()&&e),e}),r.K,r.d)),e.ob(12,49152,null,0,i.j,[e.h,e.k,e.x],{expand:[0,"expand"]},null),(l()(),e.Hb(-1,0,["Log Out"]))],(function(l,n){l(n,12,0,"block")}),(function(l,n){var u=n.component;l(n,7,0,u.user.name),l(n,10,0,u.user.roleId)}))}function g(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,15,"div",[],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,2,"ion-text",[["color","primary"]],null,null,null,r.kb,r.D)),e.ob(2,49152,null,0,i.tb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Hb(-1,0,["You are not yet logged in, please enter your access code to log in."])),(l()(),e.pb(4,0,null,null,8,"ion-item",[],null,null,null,r.W,r.p)),e.ob(5,49152,null,0,i.G,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,r.X,r.q)),e.ob(7,49152,null,0,i.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Hb(-1,0,["Access Code"])),(l()(),e.pb(9,0,null,0,3,"ion-input",[["clearInput","true"],["inputmode","numeric"],["maxlength","6"],["pattern","[0-9]*"],["type","password"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Ab(l,12)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ab(l,12)._handleInputEvent(u.target)&&t),t}),r.V,r.o)),e.Eb(5120,null,c.d,(function(l){return[l]}),[i.Jb]),e.ob(11,49152,[["accessCodeInput",4]],0,i.F,[e.h,e.k,e.x],{clearInput:[0,"clearInput"],inputmode:[1,"inputmode"],maxlength:[2,"maxlength"],pattern:[3,"pattern"],type:[4,"type"]},null),e.ob(12,16384,null,0,i.Jb,[e.k],null,null),(l()(),e.pb(13,0,null,null,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.login(e.Ab(l,11).value)&&t),t}),r.K,r.d)),e.ob(14,49152,null,0,i.j,[e.h,e.k,e.x],{expand:[0,"expand"]},null),(l()(),e.Hb(-1,0,["Log In"]))],(function(l,n){l(n,2,0,"primary"),l(n,7,0,"floating"),l(n,11,0,"true","numeric","6","[0-9]*","password"),l(n,14,0,"block")}),null)}function h(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,10,"ion-header",[],null,null,null,r.S,r.l)),e.ob(1,49152,null,0,i.A,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,r.nb,r.G)),e.ob(3,49152,null,0,i.yb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.L,r.e)),e.ob(5,49152,null,0,i.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,r.ab,r.u)),e.ob(7,49152,null,0,i.Q,[e.h,e.k,e.x],null,null),(l()(),e.pb(8,0,null,0,2,"ion-title",[],null,null,null,r.mb,r.F)),e.ob(9,49152,null,0,i.wb,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,["Home"])),(l()(),e.pb(11,0,null,null,5,"ion-content",[],null,null,null,r.R,r.k)),e.ob(12,49152,null,0,i.t,[e.h,e.k,e.x],null,null),(l()(),e.eb(16777216,null,0,1,null,f)),e.ob(14,16384,null,0,a.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,0,1,null,g)),e.ob(16,16384,null,0,a.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,14,0,u.user),l(n,16,0,!u.user)}),null)}function m(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,1,"app-home",[],null,null,null,h,d)),e.ob(1,114688,null,0,s,[],null,null)],(function(l,n){l(n,1,0)}),null)}var y=e.lb("app-home",s,m,{},{},[]),k=u("iInd");class x{}u.d(n,"HomePageModuleNgFactory",(function(){return v}));var v=e.mb(t,[],(function(l){return e.xb([e.yb(512,e.j,e.X,[[8,[o.a,y]],[3,e.j],e.v]),e.yb(4608,a.k,a.j,[e.s,[2,a.r]]),e.yb(4608,c.i,c.i,[]),e.yb(4608,i.b,i.b,[e.x,e.g]),e.yb(4608,i.Cb,i.Cb,[i.b,e.j,e.p]),e.yb(4608,i.Gb,i.Gb,[i.b,e.j,e.p]),e.yb(1073742336,a.b,a.b,[]),e.yb(1073742336,c.h,c.h,[]),e.yb(1073742336,c.c,c.c,[]),e.yb(1073742336,i.Ab,i.Ab,[]),e.yb(1073742336,k.o,k.o,[[2,k.t],[2,k.m]]),e.yb(1073742336,x,x,[]),e.yb(1073742336,t,t,[]),e.yb(1024,k.k,(function(){return[[{path:"",component:s}]]}),[])])}))},p46w:function(l,n,u){var e,t,o;void 0===(t="function"==typeof(e=o=function(){function l(){for(var l=0,n={};l<arguments.length;l++){var u=arguments[l];for(var e in u)n[e]=u[e]}return n}function n(l){return l.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function u(e){function t(){}function o(n,u,o){if("undefined"!=typeof document){"number"==typeof(o=l({path:"/"},t.defaults,o)).expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():"";try{var r=JSON.stringify(u);/^[\{\[]/.test(r)&&(u=r)}catch(a){}u=e.write?e.write(u,n):encodeURIComponent(String(u)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var i="";for(var c in o)o[c]&&(i+="; "+c,!0!==o[c]&&(i+="="+o[c].split(";")[0]));return document.cookie=n+"="+u+i}}function r(l,u){if("undefined"!=typeof document){for(var t={},o=document.cookie?document.cookie.split("; "):[],r=0;r<o.length;r++){var i=o[r].split("="),c=i.slice(1).join("=");u||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var a=n(i[0]);if(c=(e.read||e)(c,a)||n(c),u)try{c=JSON.parse(c)}catch(b){}if(t[a]=c,l===a)break}catch(b){}}return l?t[l]:t}}return t.set=o,t.get=function(l){return r(l,!1)},t.getJSON=function(l){return r(l,!0)},t.remove=function(n,u){o(n,"",l(u,{expires:-1}))},t.defaults={},t.withConverter=u,t}((function(){}))})?e.call(n,u,n,l):e)||(l.exports=t),l.exports=o()}}]);