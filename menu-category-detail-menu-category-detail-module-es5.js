(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-category-detail-menu-category-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu-category/menu-category-detail/menu-category-detail.page.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu-category/menu-category-detail/menu-category-detail.page.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMenuCategoryMenuCategoryDetailMenuCategoryDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/menu/item/category\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{isCreatingNewCategory ? 'Create New Category' : category.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label position=\"floating\">Name</ion-label>\n    <ion-input [(ngModel)]=\"category.name\"></ion-input>\n  </ion-item>\n  <ion-button expand=\"block\" (click)=\"save()\">Save</ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/menu/menu-category/menu-category-detail/menu-category-detail-routing.module.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/menu/menu-category/menu-category-detail/menu-category-detail-routing.module.ts ***!
    \************************************************************************************************/

  /*! exports provided: MenuCategoryDetailPageRoutingModule */

  /***/
  function srcAppMenuMenuCategoryMenuCategoryDetailMenuCategoryDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuCategoryDetailPageRoutingModule", function () {
      return MenuCategoryDetailPageRoutingModule;
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


    var _menu_category_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu-category-detail.page */
    "./src/app/menu/menu-category/menu-category-detail/menu-category-detail.page.ts");

    const routes = [{
      path: '',
      component: _menu_category_detail_page__WEBPACK_IMPORTED_MODULE_3__["MenuCategoryDetailPage"]
    }];
    let MenuCategoryDetailPageRoutingModule = class MenuCategoryDetailPageRoutingModule {};
    MenuCategoryDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MenuCategoryDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/menu/menu-category/menu-category-detail/menu-category-detail.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/menu/menu-category/menu-category-detail/menu-category-detail.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: MenuCategoryDetailPageModule */

  /***/
  function srcAppMenuMenuCategoryMenuCategoryDetailMenuCategoryDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuCategoryDetailPageModule", function () {
      return MenuCategoryDetailPageModule;
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


    var _menu_category_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./menu-category-detail-routing.module */
    "./src/app/menu/menu-category/menu-category-detail/menu-category-detail-routing.module.ts");
    /* harmony import */


    var _menu_category_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./menu-category-detail.page */
    "./src/app/menu/menu-category/menu-category-detail/menu-category-detail.page.ts");

    let MenuCategoryDetailPageModule = class MenuCategoryDetailPageModule {};
    MenuCategoryDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _menu_category_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuCategoryDetailPageRoutingModule"]],
      declarations: [_menu_category_detail_page__WEBPACK_IMPORTED_MODULE_6__["MenuCategoryDetailPage"]]
    })], MenuCategoryDetailPageModule);
    /***/
  },

  /***/
  "./src/app/menu/menu-category/menu-category-detail/menu-category-detail.page.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/menu/menu-category/menu-category-detail/menu-category-detail.page.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMenuCategoryMenuCategoryDetailMenuCategoryDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS1jYXRlZ29yeS9tZW51LWNhdGVnb3J5LWRldGFpbC9tZW51LWNhdGVnb3J5LWRldGFpbC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/menu/menu-category/menu-category-detail/menu-category-detail.page.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/menu/menu-category/menu-category-detail/menu-category-detail.page.ts ***!
    \**************************************************************************************/

  /*! exports provided: MenuCategoryDetailPage */

  /***/
  function srcAppMenuMenuCategoryMenuCategoryDetailMenuCategoryDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuCategoryDetailPage", function () {
      return MenuCategoryDetailPage;
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


    var src_app_models_menu_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/menu-category */
    "./src/app/models/menu-category.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    let MenuCategoryDetailPage = class MenuCategoryDetailPage {
      constructor(activatedRoute, navController) {
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.category = new src_app_models_menu_category__WEBPACK_IMPORTED_MODULE_2__["MenuCategory"]();
        this.isCreatingNewCategory = false;
      }

      ngOnInit() {}

      ionViewDidEnter() {
        const categoryName = this.activatedRoute.snapshot.paramMap.get('id');

        if (categoryName === 'new') {
          this.isCreatingNewCategory = true;
          this.category.name = 'New Category';
        } else {
          this.fetchCategory(categoryName);
        }
      }

      fetchCategory(categoryId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const response = yield fetch(localStorage.getItem('serverApiBaseUrl') + '/menu/category?id=' + categoryId);
          this.category = yield response.json();
        });
      }

      save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.isCreatingNewCategory && this.category.name) {
            const response = yield fetch(localStorage.getItem('serverApiBaseUrl') + '/menu/category/add?' + 'name=' + this.category.name, {
              method: 'POST'
            });

            if (response.ok) {
              this.navController.navigateBack('/menu/category');
            }
          } else {
            const response = yield fetch(localStorage.getItem('serverApiBaseUrl') + '/menu/category/modify?' + 'id=' + this.category.id + '&name=' + this.category.name, {
              method: 'PUT'
            });

            if (response.ok) {
              this.navController.navigateBack('/menu/category');
            }
          }
        });
      }

    };

    MenuCategoryDetailPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
    }];

    MenuCategoryDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu-category-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu-category-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu-category/menu-category-detail/menu-category-detail.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu-category-detail.page.scss */
      "./src/app/menu/menu-category/menu-category-detail/menu-category-detail.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], MenuCategoryDetailPage);
    /***/
  },

  /***/
  "./src/app/models/menu-category.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/menu-category.ts ***!
    \*****************************************/

  /*! exports provided: MenuCategory */

  /***/
  function srcAppModelsMenuCategoryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuCategory", function () {
      return MenuCategory;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class MenuCategory {}
    /***/

  }
}]);
//# sourceMappingURL=menu-category-detail-menu-category-detail-module-es5.js.map