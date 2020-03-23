(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["table-table-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/table/table.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table/table.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTableTablePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Table</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-label>It Works!</ion-label>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/table/table-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/table/table-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: TablePageRoutingModule */

  /***/
  function srcAppTableTableRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablePageRoutingModule", function () {
      return TablePageRoutingModule;
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


    var _table_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./table.page */
    "./src/app/table/table.page.ts");

    const routes = [{
      path: '',
      component: _table_page__WEBPACK_IMPORTED_MODULE_3__["TablePage"]
    }];
    let TablePageRoutingModule = class TablePageRoutingModule {};
    TablePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TablePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/table/table.module.ts":
  /*!***************************************!*\
    !*** ./src/app/table/table.module.ts ***!
    \***************************************/

  /*! exports provided: TablePageModule */

  /***/
  function srcAppTableTableModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablePageModule", function () {
      return TablePageModule;
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


    var _table_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./table-routing.module */
    "./src/app/table/table-routing.module.ts");
    /* harmony import */


    var _table_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./table.page */
    "./src/app/table/table.page.ts");

    let TablePageModule = class TablePageModule {};
    TablePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _table_routing_module__WEBPACK_IMPORTED_MODULE_5__["TablePageRoutingModule"]],
      declarations: [_table_page__WEBPACK_IMPORTED_MODULE_6__["TablePage"]]
    })], TablePageModule);
    /***/
  },

  /***/
  "./src/app/table/table.page.scss":
  /*!***************************************!*\
    !*** ./src/app/table/table.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppTableTablePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL3RhYmxlLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/table/table.page.ts":
  /*!*************************************!*\
    !*** ./src/app/table/table.page.ts ***!
    \*************************************/

  /*! exports provided: TablePage */

  /***/
  function srcAppTableTablePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablePage", function () {
      return TablePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let TablePage = class TablePage {
      constructor() {}

      ngOnInit() {}

    };
    TablePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./table.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/table/table.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./table.page.scss */
      "./src/app/table/table.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TablePage);
    /***/
  }
}]);
//# sourceMappingURL=table-table-module-es5.js.map