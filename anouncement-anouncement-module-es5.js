(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["anouncement-anouncement-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anouncement/anouncement.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anouncement/anouncement.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnouncementAnouncementPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Anouncements</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"goToModifyView('new')\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf=\"anouncementList\">\n    <ion-item button *ngFor=\"let anouncement of anouncementList\" (click)=\"goToPreviewView(anouncement.id)\">\n      <ion-label>{{anouncement.title}}</ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list *ngIf=\"!anouncementList\">\n    <ion-item button *ngFor=\"let i of [1, 2, 3, 4, 5]\">\n      <ion-skeleton-text animated style=\"width: 100px;\"></ion-skeleton-text>\n    </ion-item>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/anouncement/anouncement-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/anouncement/anouncement-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: AnouncementPageRoutingModule */

  /***/
  function srcAppAnouncementAnouncementRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnouncementPageRoutingModule", function () {
      return AnouncementPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _anouncement_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./anouncement.page */
    "./src/app/anouncement/anouncement.page.ts");

    const routes = [{
      path: '',
      component: _anouncement_page__WEBPACK_IMPORTED_MODULE_3__["AnouncementPage"]
    }, {
      path: 'modify',
      loadChildren: () => Promise.all(
      /*! import() | anouncement-modify-anouncement-modify-module */
      [__webpack_require__.e("common"), __webpack_require__.e("anouncement-modify-anouncement-modify-module")]).then(__webpack_require__.bind(null,
      /*! ./anouncement-modify/anouncement-modify.module */
      "./src/app/anouncement/anouncement-modify/anouncement-modify.module.ts")).then(m => m.AnouncementModifyPageModule)
    }, {
      path: ':id',
      loadChildren: () => Promise.all(
      /*! import() | anouncement-view-anouncement-view-module */
      [__webpack_require__.e("common"), __webpack_require__.e("anouncement-view-anouncement-view-module")]).then(__webpack_require__.bind(null,
      /*! ./anouncement-view/anouncement-view.module */
      "./src/app/anouncement/anouncement-view/anouncement-view.module.ts")).then(m => m.AnouncementViewPageModule)
    }];
    let AnouncementPageRoutingModule = class AnouncementPageRoutingModule {};
    AnouncementPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AnouncementPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/anouncement/anouncement.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/anouncement/anouncement.module.ts ***!
    \***************************************************/

  /*! exports provided: AnouncementPageModule */

  /***/
  function srcAppAnouncementAnouncementModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnouncementPageModule", function () {
      return AnouncementPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _anouncement_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./anouncement-routing.module */
    "./src/app/anouncement/anouncement-routing.module.ts");
    /* harmony import */


    var _anouncement_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./anouncement.page */
    "./src/app/anouncement/anouncement.page.ts");

    let AnouncementPageModule = class AnouncementPageModule {};
    AnouncementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _anouncement_routing_module__WEBPACK_IMPORTED_MODULE_5__["AnouncementPageRoutingModule"]],
      declarations: [_anouncement_page__WEBPACK_IMPORTED_MODULE_6__["AnouncementPage"]]
    })], AnouncementPageModule);
    /***/
  },

  /***/
  "./src/app/anouncement/anouncement.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/anouncement/anouncement.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnouncementAnouncementPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fub3VuY2VtZW50L2Fub3VuY2VtZW50LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/anouncement/anouncement.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/anouncement/anouncement.page.ts ***!
    \*************************************************/

  /*! exports provided: AnouncementPage */

  /***/
  function srcAppAnouncementAnouncementPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnouncementPage", function () {
      return AnouncementPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    let AnouncementPage = class AnouncementPage {
      constructor(navController) {
        this.navController = navController;
      }

      ngOnInit() {}

      ionViewDidEnter() {
        this.anouncementList = undefined;
        this.fetchAnouncementList();
      }

      fetchAnouncementList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const response = yield fetch(localStorage.getItem('serverApiBaseUrl') + '/anouncement');
          this.anouncementList = yield response.json();
        });
      }

      goToModifyView(anouncementId) {
        this.navController.navigateForward('/anouncement/modify/' + anouncementId);
      }

      goToPreviewView(anouncementId) {
        this.navController.navigateForward('/anouncement/' + anouncementId);
      }

    };

    AnouncementPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
    }];

    AnouncementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-anouncement',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./anouncement.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anouncement/anouncement.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./anouncement.page.scss */
      "./src/app/anouncement/anouncement.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], AnouncementPage);
    /***/
  }
}]);
//# sourceMappingURL=anouncement-anouncement-module-es5.js.map