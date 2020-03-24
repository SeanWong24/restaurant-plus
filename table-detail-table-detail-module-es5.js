(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["table-detail-table-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/table/table-detail/table-detail.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table/table-detail/table-detail.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTableTableDetailTableDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/table\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{(isCreatingNewTable ? 'Create New Table' : table.name) || 'Table Detail'}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label position=\"floating\">Name</ion-label>\n    <ion-input [(ngModel)]=\"table.name\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Capacity</ion-label>\n    <ion-input [(ngModel)]=\"table.capacity\"></ion-input>\n  </ion-item>\n  <ion-button expand=\"block\" (click)=\"save()\">Save</ion-button>\n  <ion-button *ngIf=\"!isCreatingNewTable\" color=\"warning\" expand=\"block\" (click)=\"toggleAvailability()\">Toggle Availability</ion-button>\n  <ion-button *ngIf=\"!isCreatingNewTable\" color=\"danger\" expand=\"block\" (click)=\"delete()\">Delete</ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/table/table-detail/table-detail-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/table/table-detail/table-detail-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: TableDetailPageRoutingModule */

  /***/
  function srcAppTableTableDetailTableDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableDetailPageRoutingModule", function () {
      return TableDetailPageRoutingModule;
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


    var _table_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./table-detail.page */
    "./src/app/table/table-detail/table-detail.page.ts");

    const routes = [{
      path: '',
      component: _table_detail_page__WEBPACK_IMPORTED_MODULE_3__["TableDetailPage"]
    }];
    let TableDetailPageRoutingModule = class TableDetailPageRoutingModule {};
    TableDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TableDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/table/table-detail/table-detail.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/table/table-detail/table-detail.module.ts ***!
    \***********************************************************/

  /*! exports provided: TableDetailPageModule */

  /***/
  function srcAppTableTableDetailTableDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableDetailPageModule", function () {
      return TableDetailPageModule;
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


    var _table_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./table-detail-routing.module */
    "./src/app/table/table-detail/table-detail-routing.module.ts");
    /* harmony import */


    var _table_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./table-detail.page */
    "./src/app/table/table-detail/table-detail.page.ts");

    let TableDetailPageModule = class TableDetailPageModule {};
    TableDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _table_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["TableDetailPageRoutingModule"]],
      declarations: [_table_detail_page__WEBPACK_IMPORTED_MODULE_6__["TableDetailPage"]]
    })], TableDetailPageModule);
    /***/
  },

  /***/
  "./src/app/table/table-detail/table-detail.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/table/table-detail/table-detail.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTableTableDetailTableDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL3RhYmxlLWRldGFpbC90YWJsZS1kZXRhaWwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/table/table-detail/table-detail.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/table/table-detail/table-detail.page.ts ***!
    \*********************************************************/

  /*! exports provided: TableDetailPage */

  /***/
  function srcAppTableTableDetailTableDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableDetailPage", function () {
      return TableDetailPage;
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


    var src_app_models_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/table */
    "./src/app/models/table.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    let TableDetailPage = class TableDetailPage {
      constructor(activatedRoute, navController, alertController) {
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.alertController = alertController;
        this.table = new src_app_models_table__WEBPACK_IMPORTED_MODULE_2__["Table"]();
        this.isCreatingNewTable = false;
      }

      ngOnInit() {}

      ionViewDidEnter() {
        const tableId = this.activatedRoute.snapshot.paramMap.get('id');

        if (tableId === 'new') {
          this.isCreatingNewTable = true;
          this.table.name = 'New Table';
          this.table.capacity = 0;
        } else {
          this.fetchTable(tableId);
        }
      }

      fetchTable(tableId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const response = yield fetch(localStorage.getItem('serverApiBaseUrl') + '/table?id=' + tableId);
          this.table = yield response.json();
        });
      }

      save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.table.name && this.table.name !== 'null' && this.table.capacity >= 0) {
            if (this.isCreatingNewTable) {
              const response = yield fetch(localStorage.getItem('serverApiBaseUrl') + '/table/add?name=' + this.table.name + '&capacity=' + this.table.capacity, {
                method: 'POST'
              });

              if (response.ok) {
                this.navController.navigateBack('/table');
              } else {
                const alert = yield this.alertController.create({
                  header: 'Fail to Create Table',
                  message: 'Fail to create the table, please try again.'
                });
                yield alert.present();
              }
            } else {
              const response = yield fetch(localStorage.getItem('serverApiBaseUrl') + '/table/modify?id=' + this.table.id + '&name=' + this.table.name + '&capacity=' + this.table.capacity, {
                method: 'PUT'
              });

              if (response.ok) {
                this.navController.navigateBack('/table');
              } else {
                const alert = yield this.alertController.create({
                  header: 'Fail to Save Table',
                  message: 'Fail to save the table, please try again.'
                });
                yield alert.present();
              }
            }
          } else {
            const alert = yield this.alertController.create({
              header: 'Invalid Values',
              message: 'There are one or more invalid values, please check and try again.'
            });
            yield alert.present();
          }
        });
      }

      toggleAvailability() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const response = yield fetch(localStorage.getItem('serverApiBaseUrl') + '/table/toggle-availability?id=' + this.table.id, {
            method: 'PUT'
          });

          if (response.ok) {
            this.navController.navigateBack('/table');
          } else {
            const alert = yield this.alertController.create({
              header: 'Fail to Toggle Availability',
              message: 'Fail to toggle availability of the table, please try again.'
            });
            yield alert.present();
          }
        });
      }

      delete() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (!this.isCreatingNewTable) {
            const alert = yield this.alertController.create({
              header: 'Deleting a Table',
              message: 'Are you sure to delete ' + this.table.name + '?',
              buttons: ['Cancel', {
                text: "Delete",
                handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                  const response = yield fetch(localStorage.getItem('serverApiBaseUrl') + '/table/delete?id=' + this.table.id, {
                    method: 'DELETE'
                  });

                  if (response.ok) {
                    this.navController.navigateBack('/table');
                  }
                })
              }]
            });
            yield alert.present();
          }
        });
      }

    };

    TableDetailPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
    }];

    TableDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-table-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./table-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/table/table-detail/table-detail.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./table-detail.page.scss */
      "./src/app/table/table-detail/table-detail.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], TableDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=table-detail-table-detail-module-es5.js.map