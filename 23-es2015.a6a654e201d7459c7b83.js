(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"W5c+":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var o=u("pMnS"),i=u("MKJQ"),a=u("sZkV"),b=u("SVse"),r=u("mrSG");class s{constructor(l){this.navControlor=l}ngOnInit(){}ionViewDidEnter(){this.menuList=void 0,this.displayedMenuList=this.menuList,this.fetchMenuList()}fetchMenuList(){return r.a(this,void 0,void 0,(function*(){this.menuList=[];let l=yield fetch(localStorage.getItem("serverApiBaseUrl")+"/menu/category");const n=yield l.json();l=yield fetch(localStorage.getItem("serverApiBaseUrl")+"/menu/item");const u=yield l.json();n.forEach(l=>this.menuList.push({category:l,itemList:u.filter(n=>n.categoryId===l.id)}));const t=u.filter(l=>!n.find(n=>n.id===l.categoryId));t.length>0&&this.menuList.push({category:{name:"Not Categorized"},itemList:t}),this.displayedMenuList=this.menuList}))}searchContentChangedHandler(l){this.displayedMenuList=l?this.menuList.map(n=>({category:n.category,itemList:n.category.name.match(new RegExp(l,"i"))?n.itemList:n.itemList.filter(n=>n.name.match(new RegExp(l,"i")))})).filter(n=>n.category.name.match(new RegExp(l,"i"))||n.itemList.length>0):this.menuList}goToCategoryView(){this.navControlor.navigateForward("/menu/category")}goToMenuItemDetailView(l){this.navControlor.navigateForward("/menu/item/"+l)}}class c{transform(l){switch(l){case"Available":return"primary";case"Unavailable":return"danger"}}}var h=u("s7LF"),m=t.nb({encapsulation:0,styles:[["ion-img[_ngcontent-%COMP%]{height:50px;width:50px}"]],data:{}});function p(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,10,"ion-item",[["button",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goToMenuItemDetailView(l.context.$implicit.id)&&t),t}),i.W,i.p)),t.ob(1,49152,null,0,a.G,[t.h,t.k,t.x],{button:[0,"button"]},null),(l()(),t.pb(2,0,null,0,1,"ion-img",[["slot","start"]],null,[[null,"ionError"]],(function(l,n,u){var e=!0;return"ionError"===n&&(e=!1!==(t.Ab(l,3).src="https://unpkg.com/ionicons@5.0.0/dist/svg/restaurant-outline.svg")&&e),e}),i.U,i.n)),t.ob(3,49152,[["menuItemImageElement",4]],0,a.C,[t.h,t.k,t.x],{src:[0,"src"]},null),(l()(),t.pb(4,0,null,0,2,"ion-label",[],null,null,null,i.X,i.q)),t.ob(5,49152,null,0,a.M,[t.h,t.k,t.x],null,null),(l()(),t.Hb(6,0,["",""])),(l()(),t.pb(7,0,null,0,3,"ion-badge",[["slot","end"]],null,null,null,i.J,i.c)),t.ob(8,49152,null,0,a.i,[t.h,t.k,t.x],{color:[0,"color"]},null),t.Db(9,1),(l()(),t.Hb(10,0,["",""]))],(function(l,n){l(n,1,0,""),l(n,3,0,n.context.$implicit.imageUrl);var u=t.Ib(n,8,0,l(n,9,0,t.Ab(n.parent.parent.parent,0),n.context.$implicit.status));l(n,8,0,u)}),(function(l,n){l(n,6,0,n.context.$implicit.name),l(n,10,0,n.context.$implicit.status)}))}function d(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,7,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,4,"ion-list-header",[],null,null,null,i.Y,i.s)),t.ob(2,49152,null,0,a.O,[t.h,t.k,t.x],null,null),(l()(),t.pb(3,0,null,0,2,"ion-label",[],null,null,null,i.X,i.q)),t.ob(4,49152,null,0,a.M,[t.h,t.k,t.x],null,null),(l()(),t.Hb(5,0,["",""])),(l()(),t.eb(16777216,null,null,1,null,p)),t.ob(7,278528,null,0,b.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,7,0,n.context.$implicit.itemList)}),(function(l,n){l(n,5,0,n.context.$implicit.category.name)}))}function g(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,3,"ion-list",[],null,null,null,i.Z,i.r)),t.ob(1,49152,null,0,a.N,[t.h,t.k,t.x],null,null),(l()(),t.eb(16777216,null,0,1,null,d)),t.ob(3,278528,null,0,b.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,3,0,n.component.displayedMenuList)}),null)}function f(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,9,"ion-item",[["button",""]],null,null,null,i.W,i.p)),t.ob(1,49152,null,0,a.G,[t.h,t.k,t.x],{button:[0,"button"]},null),(l()(),t.pb(2,0,null,0,3,"ion-thumbnail",[["slot","start"]],null,null,null,i.lb,i.E)),t.ob(3,49152,null,0,a.vb,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,1,"ion-skeleton-text",[["animated",""]],null,null,null,i.ib,i.B)),t.ob(5,49152,null,0,a.lb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(6,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width: 100px;"]],null,null,null,i.ib,i.B)),t.ob(7,49152,null,0,a.lb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.pb(8,0,null,0,1,"ion-skeleton-text",[["animated",""],["slot","end"],["style","width: 50px;"]],null,null,null,i.ib,i.B)),t.ob(9,49152,null,0,a.lb,[t.h,t.k,t.x],{animated:[0,"animated"]},null)],(function(l,n){l(n,1,0,""),l(n,5,0,""),l(n,7,0,""),l(n,9,0,"")}),null)}function y(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,7,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,3,"ion-list-header",[],null,null,null,i.Y,i.s)),t.ob(2,49152,null,0,a.O,[t.h,t.k,t.x],null,null),(l()(),t.pb(3,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width: 100px;"]],null,null,null,i.ib,i.B)),t.ob(4,49152,null,0,a.lb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.eb(16777216,null,null,2,null,f)),t.ob(6,278528,null,0,b.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),t.Bb(7,3)],(function(l,n){l(n,4,0,"");var u=l(n,7,0,1,2,3);l(n,6,0,u)}),null)}function k(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,4,"ion-list",[],null,null,null,i.Z,i.r)),t.ob(1,49152,null,0,a.N,[t.h,t.k,t.x],null,null),(l()(),t.eb(16777216,null,0,2,null,y)),t.ob(3,278528,null,0,b.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),t.Bb(4,3)],(function(l,n){var u=l(n,4,0,1,2,3);l(n,3,0,u)}),null)}function x(l){return t.Jb(0,[t.Cb(0,c,[]),(l()(),t.pb(1,0,null,null,24,"ion-header",[],null,null,null,i.S,i.l)),t.ob(2,49152,null,0,a.A,[t.h,t.k,t.x],null,null),(l()(),t.pb(3,0,null,0,18,"ion-toolbar",[],null,null,null,i.nb,i.G)),t.ob(4,49152,null,0,a.yb,[t.h,t.k,t.x],null,null),(l()(),t.pb(5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.L,i.e)),t.ob(6,49152,null,0,a.k,[t.h,t.k,t.x],null,null),(l()(),t.pb(7,0,null,0,1,"ion-menu-button",[],null,null,null,i.ab,i.u)),t.ob(8,49152,null,0,a.Q,[t.h,t.k,t.x],null,null),(l()(),t.pb(9,0,null,0,2,"ion-title",[],null,null,null,i.mb,i.F)),t.ob(10,49152,null,0,a.wb,[t.h,t.k,t.x],null,null),(l()(),t.Hb(-1,0,["Menu"])),(l()(),t.pb(12,0,null,0,9,"ion-buttons",[["slot","end"]],null,null,null,i.L,i.e)),t.ob(13,49152,null,0,a.k,[t.h,t.k,t.x],null,null),(l()(),t.pb(14,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goToCategoryView()&&t),t}),i.K,i.d)),t.ob(15,49152,null,0,a.j,[t.h,t.k,t.x],null,null),(l()(),t.pb(16,0,null,0,1,"ion-icon",[["name","book"],["slot","icon-only"]],null,null,null,i.T,i.m)),t.ob(17,49152,null,0,a.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.pb(18,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goToMenuItemDetailView("new")&&t),t}),i.K,i.d)),t.ob(19,49152,null,0,a.j,[t.h,t.k,t.x],null,null),(l()(),t.pb(20,0,null,0,1,"ion-icon",[["name","add"],["slot","icon-only"]],null,null,null,i.T,i.m)),t.ob(21,49152,null,0,a.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.pb(22,0,null,0,3,"ion-searchbar",[["animated",""],["showCancelButton","focus"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var e=!0,o=l.component;return"ionBlur"===n&&(e=!1!==t.Ab(l,25)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Ab(l,25)._handleInputEvent(u.target)&&e),"ionChange"===n&&(e=!1!==o.searchContentChangedHandler(u.detail.value)&&e),e}),i.fb,i.y)),t.Eb(5120,null,h.d,(function(l){return[l]}),[a.Jb]),t.ob(24,49152,null,0,a.gb,[t.h,t.k,t.x],{animated:[0,"animated"],showCancelButton:[1,"showCancelButton"]},null),t.ob(25,16384,null,0,a.Jb,[t.k],null,null),(l()(),t.pb(26,0,null,null,5,"ion-content",[],null,null,null,i.R,i.k)),t.ob(27,49152,null,0,a.t,[t.h,t.k,t.x],null,null),(l()(),t.eb(16777216,null,0,1,null,g)),t.ob(29,16384,null,0,b.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,0,1,null,k)),t.ob(31,16384,null,0,b.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,17,0,"book"),l(n,21,0,"add"),l(n,24,0,"","focus"),l(n,29,0,u.displayedMenuList),l(n,31,0,!u.displayedMenuList)}),null)}function v(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,1,"app-menu",[],null,null,null,x,m)),t.ob(1,114688,null,0,s,[a.Db],null,null)],(function(l,n){l(n,1,0)}),null)}var M=t.lb("app-menu",s,v,{},{},[]),w=u("iInd");const L=()=>u.e(21).then(u.bind(null,"tLe5")).then(l=>l.MenuCategoryPageModuleNgFactory),C=()=>u.e(22).then(u.bind(null,"s0O/")).then(l=>l.MenuItemDetailPageModuleNgFactory);class J{}u.d(n,"MenuPageModuleNgFactory",(function(){return I}));var I=t.mb(e,[],(function(l){return t.xb([t.yb(512,t.j,t.X,[[8,[o.a,M]],[3,t.j],t.v]),t.yb(4608,b.k,b.j,[t.s,[2,b.r]]),t.yb(4608,h.i,h.i,[]),t.yb(4608,a.b,a.b,[t.x,t.g]),t.yb(4608,a.Cb,a.Cb,[a.b,t.j,t.p]),t.yb(4608,a.Gb,a.Gb,[a.b,t.j,t.p]),t.yb(1073742336,b.b,b.b,[]),t.yb(1073742336,h.h,h.h,[]),t.yb(1073742336,h.c,h.c,[]),t.yb(1073742336,a.Ab,a.Ab,[]),t.yb(1073742336,w.o,w.o,[[2,w.t],[2,w.m]]),t.yb(1073742336,J,J,[]),t.yb(1073742336,e,e,[]),t.yb(1024,w.k,(function(){return[[{path:"",component:s},{path:"category",loadChildren:L},{path:"item",loadChildren:C}]]}),[])])}))}}]);