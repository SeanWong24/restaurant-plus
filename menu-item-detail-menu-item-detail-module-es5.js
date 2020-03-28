(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-item-detail-menu-item-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu-item-detail/menu-item-detail.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu-item-detail/menu-item-detail.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMenuItemDetailMenuItemDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/menu\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{isCreatingNewItem ? 'Create New Item' : menuItem.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item disabled>\n    <ion-label position=\"floating\">Id</ion-label>\n    <ion-input [(ngModel)]=\"menuItem.id\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Name</ion-label>\n    <ion-input [(ngModel)]=\"menuItem.name\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Short Name</ion-label>\n    <ion-input [(ngModel)]=\"menuItem.shortName\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Category</ion-label>\n    <ion-select [(ngModel)]=\"menuItem.categoryId\">\n      <ion-select-option *ngFor=\"let category of menuCategoryList\" [value]=\"category.id\">{{category.name}}\n      </ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Status</ion-label>\n    <ion-select [(ngModel)]=\"menuItem.status\">\n      <ion-select-option value=\"Available\">Available</ion-select-option>\n      <ion-select-option value=\"Unavailable\">Unavailable</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Unit Price</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"menuItem.unitPrice\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">GST Rate</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"menuItem.gstRate\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">PST Rate</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"menuItem.pstRate\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">LCT Rate</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"menuItem.lctRate\"></ion-input>\n  </ion-item>\n\n  <ion-button expand=\"block\" (click)=\"save()\">Save</ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/menu/menu-item-detail/menu-item-detail-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/menu/menu-item-detail/menu-item-detail-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: MenuItemDetailPageRoutingModule */

  /***/
  function srcAppMenuMenuItemDetailMenuItemDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuItemDetailPageRoutingModule", function () {
      return MenuItemDetailPageRoutingModule;
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


    var _menu_item_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu-item-detail.page */
    "./src/app/menu/menu-item-detail/menu-item-detail.page.ts");

    const routes = [{
      path: ':id',
      component: _menu_item_detail_page__WEBPACK_IMPORTED_MODULE_3__["MenuItemDetailPage"]
    }];
    let MenuItemDetailPageRoutingModule = class MenuItemDetailPageRoutingModule {};
    MenuItemDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MenuItemDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/menu/menu-item-detail/menu-item-detail.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/menu/menu-item-detail/menu-item-detail.module.ts ***!
    \******************************************************************/

  /*! exports provided: MenuItemDetailPageModule */

  /***/
  function srcAppMenuMenuItemDetailMenuItemDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuItemDetailPageModule", function () {
      return MenuItemDetailPageModule;
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


    var _menu_item_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./menu-item-detail-routing.module */
    "./src/app/menu/menu-item-detail/menu-item-detail-routing.module.ts");
    /* harmony import */


    var _menu_item_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./menu-item-detail.page */
    "./src/app/menu/menu-item-detail/menu-item-detail.page.ts");

    let MenuItemDetailPageModule = class MenuItemDetailPageModule {};
    MenuItemDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _menu_item_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuItemDetailPageRoutingModule"]],
      declarations: [_menu_item_detail_page__WEBPACK_IMPORTED_MODULE_6__["MenuItemDetailPage"]]
    })], MenuItemDetailPageModule);
    /***/
  },

  /***/
  "./src/app/menu/menu-item-detail/menu-item-detail.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/menu/menu-item-detail/menu-item-detail.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMenuItemDetailMenuItemDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS1pdGVtLWRldGFpbC9tZW51LWl0ZW0tZGV0YWlsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/menu/menu-item-detail/menu-item-detail.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/menu/menu-item-detail/menu-item-detail.page.ts ***!
    \****************************************************************/

  /*! exports provided: MenuItemDetailPage */

  /***/
  function srcAppMenuMenuItemDetailMenuItemDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuItemDetailPage", function () {
      return MenuItemDetailPage;
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


    var src_app_models_menu_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/menu-item */
    "./src/app/models/menu-item.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    let MenuItemDetailPage = class MenuItemDetailPage {
      constructor(activatedRoute, navController) {
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.menuItem = new src_app_models_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"]();
        this.menuCategoryList = [];
        this.isCreatingNewItem = false;
      }

      ngOnInit() {}

      ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.fetchCategory();
          const itemId = this.activatedRoute.snapshot.paramMap.get("id");

          if (itemId === 'new') {
            this.isCreatingNewItem = true;
            this.menuItem.name = 'New Menu Item';
            this.menuItem.categoryId = this.menuCategoryList[0].id;
            this.menuItem.unitPrice = 0;
          } else {
            this.fetchMenuItem(itemId);
          }
        });
      }

      fetchCategory() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const response = yield fetch(localStorage.getItem('serverApiBaseUrl') + '/menu/category');
          this.menuCategoryList = yield response.json();
        });
      }

      fetchMenuItem(itemId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const response = yield fetch(localStorage.getItem('serverApiBaseUrl') + '/menu/item?id=' + itemId);
          this.menuItem = yield response.json();
        });
      }

      save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.isCreatingNewItem && this.menuItem.name && this.menuItem.name !== 'new') {
            const response = yield fetch(localStorage.getItem('serverApiBaseUrl') + '/menu/item/add?' + 'name=' + this.menuItem.name + '&shortName=' + this.menuItem.shortName + '&unitPrice=' + this.menuItem.unitPrice + '&status=' + this.menuItem.status + '&categoryId=' + this.menuItem.categoryId + '&gstRate=' + this.menuItem.gstRate + '&pstRate=' + this.menuItem.pstRate + '&lctRate=' + this.menuItem.lctRate, {
              method: 'POST'
            });

            if (response.ok) {
              this.navController.navigateBack('/menu');
            }
          } else {
            const response = yield fetch(localStorage.getItem('serverApiBaseUrl') + '/menu/item/modify?' + 'id=' + this.menuItem.id + '&name=' + this.menuItem.name + '&shortName=' + this.menuItem.shortName + '&unitPrice=' + this.menuItem.unitPrice + '&status=' + this.menuItem.status + '&categoryId=' + this.menuItem.categoryId + '&gstRate=' + this.menuItem.gstRate + '&pstRate=' + this.menuItem.pstRate + '&lctRate=' + this.menuItem.lctRate, {
              method: 'PUT'
            });

            if (response.ok) {
              this.navController.navigateBack('/menu');
            }
          }
        });
      }

    };

    MenuItemDetailPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
    }];

    MenuItemDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu-item-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu-item-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu-item-detail/menu-item-detail.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu-item-detail.page.scss */
      "./src/app/menu/menu-item-detail/menu-item-detail.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], MenuItemDetailPage);
    /***/
  },

  /***/
  "./src/app/models/menu-item.ts":
  /*!*************************************!*\
    !*** ./src/app/models/menu-item.ts ***!
    \*************************************/

  /*! exports provided: MenuItem */

  /***/
  function srcAppModelsMenuItemTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuItem", function () {
      return MenuItem;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class MenuItem {
      constructor() {
        this.status = MenuItem.Status.Unavailable;
        this.gstRate = 0;
        this.pstRate = 0;
        this.lctRate = 0;
      }

    }

    MenuItem.Status = {
      Available: "Available",
      Unavailable: "Unavailable"
    };
    /***/
  }
}]);
//# sourceMappingURL=menu-item-detail-menu-item-detail-module-es5.js.map