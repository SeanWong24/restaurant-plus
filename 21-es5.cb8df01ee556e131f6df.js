(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{tLe5:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class o{}var e=u("pMnS"),b=u("MKJQ"),i=u("sZkV"),r=u("SVse"),a=u("mrSG");class c{constructor(l){this.navController=l}ngOnInit(){}ionViewDidEnter(){this.categoryList=void 0,this.fetchCategory()}fetchCategory(){return a.a(this,void 0,void 0,(function*(){let l=yield fetch(localStorage.getItem("serverApiBaseUrl")+"/menu/category");this.categoryList=yield l.json()}))}goToCategoryDetail(l){this.navController.navigateForward("menu/category/"+l)}}var s=t.nb({encapsulation:0,styles:[[""]],data:{}});function f(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,4,"ion-item",[["button",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goToCategoryDetail(l.context.$implicit.id)&&t),t}),b.W,b.p)),t.ob(1,49152,null,0,i.G,[t.h,t.k,t.x],{button:[0,"button"]},null),(l()(),t.pb(2,0,null,0,2,"ion-label",[],null,null,null,b.X,b.q)),t.ob(3,49152,null,0,i.M,[t.h,t.k,t.x],null,null),(l()(),t.Hb(4,0,["",""]))],(function(l,n){l(n,1,0,"")}),(function(l,n){l(n,4,0,n.context.$implicit.name)}))}function p(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,3,"ion-list",[],null,null,null,b.Z,b.r)),t.ob(1,49152,null,0,i.N,[t.h,t.k,t.x],null,null),(l()(),t.eb(16777216,null,0,1,null,f)),t.ob(3,278528,null,0,r.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,3,0,n.component.categoryList)}),null)}function g(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,3,"ion-item",[["button",""]],null,null,null,b.W,b.p)),t.ob(1,49152,null,0,i.G,[t.h,t.k,t.x],{button:[0,"button"]},null),(l()(),t.pb(2,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width: 100px;"]],null,null,null,b.ib,b.B)),t.ob(3,49152,null,0,i.lb,[t.h,t.k,t.x],{animated:[0,"animated"]},null)],(function(l,n){l(n,1,0,""),l(n,3,0,"")}),null)}function y(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,4,"ion-list",[],null,null,null,b.Z,b.r)),t.ob(1,49152,null,0,i.N,[t.h,t.k,t.x],null,null),(l()(),t.eb(16777216,null,0,2,null,g)),t.ob(3,278528,null,0,r.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),t.Bb(4,5)],(function(l,n){var u=l(n,4,0,1,2,3,4,5);l(n,3,0,u)}),null)}function h(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,17,"ion-header",[],null,null,null,b.S,b.l)),t.ob(1,49152,null,0,i.A,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,15,"ion-toolbar",[],null,null,null,b.nb,b.G)),t.ob(3,49152,null,0,i.yb,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.L,b.e)),t.ob(5,49152,null,0,i.k,[t.h,t.k,t.x],null,null),(l()(),t.pb(6,0,null,0,2,"ion-back-button",[["defaultHref","/menu"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Ab(l,8).onClick(u)&&o),o}),b.I,b.b)),t.ob(7,49152,null,0,i.f,[t.h,t.k,t.x],{defaultHref:[0,"defaultHref"]},null),t.ob(8,16384,null,0,i.g,[[2,i.eb],i.Db],{defaultHref:[0,"defaultHref"]},null),(l()(),t.pb(9,0,null,0,2,"ion-title",[],null,null,null,b.mb,b.F)),t.ob(10,49152,null,0,i.wb,[t.h,t.k,t.x],null,null),(l()(),t.Hb(-1,0,["Categories"])),(l()(),t.pb(12,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,b.L,b.e)),t.ob(13,49152,null,0,i.k,[t.h,t.k,t.x],null,null),(l()(),t.pb(14,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goToCategoryDetail("new")&&t),t}),b.K,b.d)),t.ob(15,49152,null,0,i.j,[t.h,t.k,t.x],null,null),(l()(),t.pb(16,0,null,0,1,"ion-icon",[["name","add"],["slot","icon-only"]],null,null,null,b.T,b.m)),t.ob(17,49152,null,0,i.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.pb(18,0,null,null,5,"ion-content",[],null,null,null,b.R,b.k)),t.ob(19,49152,null,0,i.t,[t.h,t.k,t.x],null,null),(l()(),t.eb(16777216,null,0,1,null,p)),t.ob(21,16384,null,0,r.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,0,1,null,y)),t.ob(23,16384,null,0,r.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,7,0,"/menu"),l(n,8,0,"/menu"),l(n,17,0,"add"),l(n,21,0,u.categoryList),l(n,23,0,!u.categoryList)}),null)}var d=t.lb("app-menu-category-list",c,(function(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,1,"app-menu-category-list",[],null,null,null,h,s)),t.ob(1,114688,null,0,c,[i.Db],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),k=u("s7LF"),m=u("iInd");const x=()=>u.e(20).then(u.bind(null,"+iSp")).then(l=>l.MenuCategoryDetailPageModuleNgFactory);class v{}u.d(n,"MenuCategoryPageModuleNgFactory",(function(){return C}));var C=t.mb(o,[],(function(l){return t.xb([t.yb(512,t.j,t.X,[[8,[e.a,d]],[3,t.j],t.v]),t.yb(4608,r.k,r.j,[t.s,[2,r.r]]),t.yb(4608,k.i,k.i,[]),t.yb(4608,i.b,i.b,[t.x,t.g]),t.yb(4608,i.Cb,i.Cb,[i.b,t.j,t.p]),t.yb(4608,i.Gb,i.Gb,[i.b,t.j,t.p]),t.yb(1073742336,r.b,r.b,[]),t.yb(1073742336,k.h,k.h,[]),t.yb(1073742336,k.c,k.c,[]),t.yb(1073742336,i.Ab,i.Ab,[]),t.yb(1073742336,m.o,m.o,[[2,m.t],[2,m.m]]),t.yb(1073742336,v,v,[]),t.yb(1073742336,o,o,[]),t.yb(1024,m.k,(function(){return[[{path:"",component:c},{path:":id",loadChildren:x}]]}),[])])}))}}]);