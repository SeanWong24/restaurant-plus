(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{RStp:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class o{}var e=u("pMnS"),i=u("MKJQ"),b=u("sZkV"),a=u("SVse"),r=u("mrSG"),c=u("Rhac");class s{constructor(l){this.navController=l}ngOnInit(){}ionViewDidEnter(){this.tableList=void 0,this.fetchTableList()}fetchTableList(){return r.a(this,void 0,void 0,(function*(){const l=yield fetch(localStorage.getItem("serverApiBaseUrl")+"/table");this.tableList=yield l.json()}))}goToDetailView(l){this.navController.navigateForward("/table/"+l)}}class p{transform(l){switch(l){case c.a.Status.Free:return"secondary";case c.a.Status.Using:return"success";case c.a.Status.Reserved:return"tertiary";case c.a.Status.Dirty:return"warning";case c.a.Status.Unavailable:return"danger"}}}var h=t.nb({encapsulation:0,styles:[[""]],data:{}});function d(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,17,"ion-item",[["button",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goToDetailView(l.context.$implicit.id)&&t),t}),i.N,i.l)),t.ob(1,49152,null,0,b.G,[t.h,t.k,t.x],{button:[0,"button"]},null),(l()(),t.pb(2,0,null,0,11,"ion-row",[],null,null,null,i.V,i.t)),t.ob(3,49152,null,0,b.fb,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,4,"ion-col",[],null,null,null,i.H,i.f)),t.ob(5,49152,null,0,b.s,[t.h,t.k,t.x],null,null),(l()(),t.pb(6,0,null,0,2,"ion-label",[],null,null,null,i.O,i.m)),t.ob(7,49152,null,0,b.M,[t.h,t.k,t.x],null,null),(l()(),t.Hb(8,0,["",""])),(l()(),t.pb(9,0,null,0,4,"ion-col",[],null,null,null,i.H,i.f)),t.ob(10,49152,null,0,b.s,[t.h,t.k,t.x],null,null),(l()(),t.pb(11,0,null,0,2,"ion-label",[],null,null,null,i.O,i.m)),t.ob(12,49152,null,0,b.M,[t.h,t.k,t.x],null,null),(l()(),t.Hb(13,0,["(","/",")"])),(l()(),t.pb(14,0,null,0,3,"ion-badge",[["slot","end"]],null,null,null,i.E,i.c)),t.ob(15,49152,null,0,b.i,[t.h,t.k,t.x],{color:[0,"color"]},null),t.Db(16,1),(l()(),t.Hb(17,0,["",""]))],(function(l,n){l(n,1,0,"");var u=t.Ib(n,15,0,l(n,16,0,t.Ab(n.parent.parent,0),n.context.$implicit.status));l(n,15,0,u)}),(function(l,n){l(n,8,0,n.context.$implicit.name),l(n,13,0,n.context.$implicit.occupied,n.context.$implicit.capacity),l(n,17,0,n.context.$implicit.status)}))}function x(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,3,"ion-list",[],null,null,null,i.Q,i.n)),t.ob(1,49152,null,0,b.N,[t.h,t.k,t.x],null,null),(l()(),t.eb(16777216,null,0,1,null,d)),t.ob(3,278528,null,0,a.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,3,0,n.component.tableList)}),null)}function f(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,13,"ion-item",[["button",""]],null,null,null,i.N,i.l)),t.ob(1,49152,null,0,b.G,[t.h,t.k,t.x],{button:[0,"button"]},null),(l()(),t.pb(2,0,null,0,9,"ion-row",[],null,null,null,i.V,i.t)),t.ob(3,49152,null,0,b.fb,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,3,"ion-col",[],null,null,null,i.H,i.f)),t.ob(5,49152,null,0,b.s,[t.h,t.k,t.x],null,null),(l()(),t.pb(6,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width: 100px;"]],null,null,null,i.Z,i.x)),t.ob(7,49152,null,0,b.lb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(8,0,null,0,3,"ion-col",[],null,null,null,i.H,i.f)),t.ob(9,49152,null,0,b.s,[t.h,t.k,t.x],null,null),(l()(),t.pb(10,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width: 50px;"]],null,null,null,i.Z,i.x)),t.ob(11,49152,null,0,b.lb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(12,0,null,0,1,"ion-skeleton-text",[["animated",""],["slot","end"],["style","width: 50px;"]],null,null,null,i.Z,i.x)),t.ob(13,49152,null,0,b.lb,[t.h,t.k,t.x],{animated:[0,"animated"]},null)],(function(l,n){l(n,1,0,""),l(n,7,0,""),l(n,11,0,""),l(n,13,0,"")}),null)}function k(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,4,"ion-list",[],null,null,null,i.Q,i.n)),t.ob(1,49152,null,0,b.N,[t.h,t.k,t.x],null,null),(l()(),t.eb(16777216,null,0,2,null,f)),t.ob(3,278528,null,0,a.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),t.Bb(4,5)],(function(l,n){var u=l(n,4,0,1,2,3,4,5);l(n,3,0,u)}),null)}function m(l){return t.Jb(0,[t.Cb(0,p,[]),(l()(),t.pb(1,0,null,null,16,"ion-header",[],null,null,null,i.J,i.h)),t.ob(2,49152,null,0,b.A,[t.h,t.k,t.x],null,null),(l()(),t.pb(3,0,null,0,14,"ion-toolbar",[],null,null,null,i.db,i.B)),t.ob(4,49152,null,0,b.yb,[t.h,t.k,t.x],null,null),(l()(),t.pb(5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.G,i.e)),t.ob(6,49152,null,0,b.k,[t.h,t.k,t.x],null,null),(l()(),t.pb(7,0,null,0,1,"ion-menu-button",[],null,null,null,i.R,i.q)),t.ob(8,49152,null,0,b.Q,[t.h,t.k,t.x],null,null),(l()(),t.pb(9,0,null,0,2,"ion-title",[],null,null,null,i.cb,i.A)),t.ob(10,49152,null,0,b.wb,[t.h,t.k,t.x],null,null),(l()(),t.Hb(-1,0,["Table"])),(l()(),t.pb(12,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,i.G,i.e)),t.ob(13,49152,null,0,b.k,[t.h,t.k,t.x],null,null),(l()(),t.pb(14,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goToDetailView("new")&&t),t}),i.F,i.d)),t.ob(15,49152,null,0,b.j,[t.h,t.k,t.x],null,null),(l()(),t.pb(16,0,null,0,1,"ion-icon",[["name","add"],["slot","icon-only"]],null,null,null,i.K,i.i)),t.ob(17,49152,null,0,b.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.pb(18,0,null,null,5,"ion-content",[],null,null,null,i.I,i.g)),t.ob(19,49152,null,0,b.t,[t.h,t.k,t.x],null,null),(l()(),t.eb(16777216,null,0,1,null,x)),t.ob(21,16384,null,0,a.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,0,1,null,k)),t.ob(23,16384,null,0,a.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,17,0,"add"),l(n,21,0,u.tableList),l(n,23,0,!u.tableList)}),null)}var y=t.lb("app-table",s,(function(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,1,"app-table",[],null,null,null,m,h)),t.ob(1,114688,null,0,s,[b.Db],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),g=u("s7LF"),v=u("iInd");const w=()=>u.e(24).then(u.bind(null,"kQIX")).then(l=>l.TableDetailPageModuleNgFactory);class J{}u.d(n,"TablePageModuleNgFactory",(function(){return F}));var F=t.mb(o,[],(function(l){return t.xb([t.yb(512,t.j,t.X,[[8,[e.a,y]],[3,t.j],t.v]),t.yb(4608,a.k,a.j,[t.s,[2,a.r]]),t.yb(4608,g.i,g.i,[]),t.yb(4608,b.b,b.b,[t.x,t.g]),t.yb(4608,b.Cb,b.Cb,[b.b,t.j,t.p]),t.yb(4608,b.Gb,b.Gb,[b.b,t.j,t.p]),t.yb(1073742336,a.b,a.b,[]),t.yb(1073742336,g.h,g.h,[]),t.yb(1073742336,g.c,g.c,[]),t.yb(1073742336,b.Ab,b.Ab,[]),t.yb(1073742336,v.o,v.o,[[2,v.t],[2,v.m]]),t.yb(1073742336,J,J,[]),t.yb(1073742336,o,o,[]),t.yb(1024,v.k,(function(){return[[{path:"",component:s},{path:":id",loadChildren:w}]]}),[])])}))},Rhac:function(l,n,u){"use strict";u.d(n,"a",(function(){return t}));let t=(()=>{class l{constructor(){this.occupied=0,this.status=l.Status.Unavailable}}return l.Status={Free:"Free",Using:"Using",Reserved:"Reserved",Dirty:"Dirty",Unavailable:"Unavailable"},l})()}}]);