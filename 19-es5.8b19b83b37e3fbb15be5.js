(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{lma4:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class u{}var o=e("pMnS"),i=e("MKJQ"),a=e("sZkV"),r=e("MunA"),c=e("SVse"),s=e("s7LF"),b=e("mrSG"),d=e("wcTb");class h{constructor(n,l,e){this.activatedRoute=n,this.navController=l,this.alertController=e,this.anouncement=new d.a,this.isCreatingNewAnouncement=!1}ngOnInit(){}ionViewDidEnter(){const n=this.activatedRoute.snapshot.paramMap.get("id");"new"===n?(this.isCreatingNewAnouncement=!0,this.anouncement.title="New Anouncement"):this.fetchAnouncement(n)}fetchAnouncement(n){return b.a(this,void 0,void 0,(function*(){const l=yield fetch(localStorage.getItem("serverApiBaseUrl")+"/anouncement?id="+n);this.anouncement=yield l.json()}))}save(){return b.a(this,void 0,void 0,(function*(){if(this.anouncement.title)if(this.isCreatingNewAnouncement)if((yield fetch(localStorage.getItem("serverApiBaseUrl")+"/anouncement/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.anouncement)})).ok)this.navController.navigateBack("/anouncement");else{delete this.anouncement.timeCreated;const n=yield this.alertController.create({header:"Fail to Create Anouncement",message:"Fail to create the anouncement, please try again."});yield n.present()}else if((yield fetch(localStorage.getItem("serverApiBaseUrl")+"/anouncement/modify",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.anouncement)})).ok)this.navController.navigateBack("/anouncement");else{const n=yield this.alertController.create({header:"Fail to Save Anouncement",message:"Fail to save the anouncement, please try again."});yield n.present()}else{const n=yield this.alertController.create({header:"Invalid Values",message:"There are one or more invalid values, please check and try again."});yield n.present()}}))}delete(){return b.a(this,void 0,void 0,(function*(){if(!this.isCreatingNewAnouncement){const n=yield this.alertController.create({header:"Deleting an Anouncement",message:"Are you sure to delete "+this.anouncement.title+"?",buttons:["Cancel",{text:"Delete",handler:()=>b.a(this,void 0,void 0,(function*(){(yield fetch(localStorage.getItem("serverApiBaseUrl")+"/anouncement?id="+this.anouncement.id,{method:"DELETE"})).ok&&this.navController.navigateBack("/anouncement")}))}]});yield n.present()}}))}}var g=e("iInd"),m=t.nb({encapsulation:0,styles:[["#upper-div[_ngcontent-%COMP%]{height:80px}#lower-div[_ngcontent-%COMP%]{height:calc(100% - 90px)}textarea[_ngcontent-%COMP%]{width:100%;height:100%;color:#000}"]],data:{}});function p(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,3,"ion-button",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.delete()&&t),t}),i.K,i.d)),t.ob(1,49152,null,0,a.j,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,0,null,0,1,"ion-icon",[["name","trash"],["slot","icon-only"]],null,null,null,i.T,i.m)),t.ob(3,49152,null,0,a.B,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(n,l){n(l,3,0,"trash")}),null)}function v(n){return t.Jb(0,[t.Cb(0,r.b,[]),(n()(),t.pb(1,0,null,null,19,"ion-header",[],null,null,null,i.S,i.l)),t.ob(2,49152,null,0,a.A,[t.h,t.k,t.x],null,null),(n()(),t.pb(3,0,null,0,17,"ion-toolbar",[],null,null,null,i.nb,i.G)),t.ob(4,49152,null,0,a.yb,[t.h,t.k,t.x],null,null),(n()(),t.pb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.L,i.e)),t.ob(6,49152,null,0,a.k,[t.h,t.k,t.x],null,null),(n()(),t.pb(7,0,null,0,2,"ion-back-button",[["defaultHref","/anouncement"]],null,[[null,"click"]],(function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t.Ab(n,9).onClick(e)&&u),u}),i.I,i.b)),t.ob(8,49152,null,0,a.f,[t.h,t.k,t.x],{defaultHref:[0,"defaultHref"]},null),t.ob(9,16384,null,0,a.g,[[2,a.eb],a.Db],{defaultHref:[0,"defaultHref"]},null),(n()(),t.pb(10,0,null,0,2,"ion-title",[],null,null,null,i.mb,i.F)),t.ob(11,49152,null,0,a.wb,[t.h,t.k,t.x],null,null),(n()(),t.Hb(12,0,["",""])),(n()(),t.pb(13,0,null,0,7,"ion-buttons",[["slot","end"]],null,null,null,i.L,i.e)),t.ob(14,49152,null,0,a.k,[t.h,t.k,t.x],null,null),(n()(),t.eb(16777216,null,0,1,null,p)),t.ob(16,16384,null,0,c.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(17,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.save()&&t),t}),i.K,i.d)),t.ob(18,49152,null,0,a.j,[t.h,t.k,t.x],null,null),(n()(),t.pb(19,0,null,0,1,"ion-icon",[["name","save"],["slot","icon-only"]],null,null,null,i.T,i.m)),t.ob(20,49152,null,0,a.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.pb(21,0,null,null,20,"ion-content",[],null,null,null,i.R,i.k)),t.ob(22,49152,null,0,a.t,[t.h,t.k,t.x],null,null),(n()(),t.pb(23,0,null,0,11,"div",[["id","upper-div"]],null,null,null,null,null)),(n()(),t.pb(24,0,null,null,6,"ion-input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t.Ab(n,25)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Ab(n,25)._handleInputEvent(e.target)&&u),"ngModelChange"===l&&(u=!1!==(o.anouncement.title=e)&&u),u}),i.V,i.o)),t.ob(25,16384,null,0,a.Jb,[t.k],null,null),t.Eb(1024,null,s.d,(function(n){return[n]}),[a.Jb]),t.ob(27,671744,null,0,s.g,[[8,null],[8,null],[8,null],[6,s.d]],{model:[0,"model"]},{update:"ngModelChange"}),t.Eb(2048,null,s.e,null,[s.g]),t.ob(29,16384,null,0,s.f,[[4,s.e]],null,null),t.ob(30,49152,null,0,a.F,[t.h,t.k,t.x],null,null),(n()(),t.pb(31,0,null,null,3,"ion-note",[],null,null,null,i.db,i.w)),t.ob(32,49152,null,0,a.U,[t.h,t.k,t.x],null,null),(n()(),t.Hb(33,0,["",""])),t.Db(34,1),(n()(),t.pb(35,0,null,0,6,"div",[["id","lower-div"]],null,null,null,null,null)),(n()(),t.pb(36,0,null,null,5,"textarea",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,e){var u=!0,o=n.component;return"input"===l&&(u=!1!==t.Ab(n,37)._handleInput(e.target.value)&&u),"blur"===l&&(u=!1!==t.Ab(n,37).onTouched()&&u),"compositionstart"===l&&(u=!1!==t.Ab(n,37)._compositionStart()&&u),"compositionend"===l&&(u=!1!==t.Ab(n,37)._compositionEnd(e.target.value)&&u),"ngModelChange"===l&&(u=!1!==(o.anouncement.content=e)&&u),u}),null,null)),t.ob(37,16384,null,0,s.b,[t.B,t.k,[2,s.a]],null,null),t.Eb(1024,null,s.d,(function(n){return[n]}),[s.b]),t.ob(39,671744,null,0,s.g,[[8,null],[8,null],[8,null],[6,s.d]],{model:[0,"model"]},{update:"ngModelChange"}),t.Eb(2048,null,s.e,null,[s.g]),t.ob(41,16384,null,0,s.f,[[4,s.e]],null,null)],(function(n,l){var e=l.component;n(l,8,0,"/anouncement"),n(l,9,0,"/anouncement"),n(l,16,0,!e.isCreatingNewAnouncement),n(l,20,0,"save"),n(l,27,0,e.anouncement.title),n(l,39,0,e.anouncement.content)}),(function(n,l){var e=l.component;n(l,12,0,e.isCreatingNewAnouncement?"Create New Anouncement":"Modify Anouncement"),n(l,24,0,t.Ab(l,29).ngClassUntouched,t.Ab(l,29).ngClassTouched,t.Ab(l,29).ngClassPristine,t.Ab(l,29).ngClassDirty,t.Ab(l,29).ngClassValid,t.Ab(l,29).ngClassInvalid,t.Ab(l,29).ngClassPending);var u=t.Ib(l,33,0,n(l,34,0,t.Ab(l,0),e.anouncement.timeCreated));n(l,33,0,u),n(l,36,0,t.Ab(l,41).ngClassUntouched,t.Ab(l,41).ngClassTouched,t.Ab(l,41).ngClassPristine,t.Ab(l,41).ngClassDirty,t.Ab(l,41).ngClassValid,t.Ab(l,41).ngClassInvalid,t.Ab(l,41).ngClassPending)}))}var f=t.lb("app-anouncement-modify",h,(function(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-anouncement-modify",[],null,null,null,v,m)),t.ob(1,114688,null,0,h,[g.a,a.Db,a.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]);class y{}e.d(l,"AnouncementModifyPageModuleNgFactory",(function(){return C}));var C=t.mb(u,[],(function(n){return t.xb([t.yb(512,t.j,t.X,[[8,[o.a,f]],[3,t.j],t.v]),t.yb(4608,c.k,c.j,[t.s,[2,c.r]]),t.yb(4608,s.i,s.i,[]),t.yb(4608,a.b,a.b,[t.x,t.g]),t.yb(4608,a.Cb,a.Cb,[a.b,t.j,t.p]),t.yb(4608,a.Gb,a.Gb,[a.b,t.j,t.p]),t.yb(1073742336,c.b,c.b,[]),t.yb(1073742336,s.h,s.h,[]),t.yb(1073742336,s.c,s.c,[]),t.yb(1073742336,a.Ab,a.Ab,[]),t.yb(1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),t.yb(1073742336,y,y,[]),t.yb(1073742336,u,u,[]),t.yb(1024,g.k,(function(){return[[{path:":id",component:h}]]}),[])])}))}}]);