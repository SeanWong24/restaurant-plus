(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-category-menu-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu-category/menu-category.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu-category/menu-category.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/menu\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Categories</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"goToCategoryDetail('new')\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf=\"categoryList\">\n    <ion-item button *ngFor=\"let category of categoryList\" (click)=\"goToCategoryDetail(category.id)\">\n      <ion-label>{{category.name}}</ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list *ngIf=\"!categoryList\">\n    <ion-item button *ngFor=\"let i of [1, 2, 3, 4, 5]\">\n      <ion-skeleton-text animated style=\"width: 100px;\"></ion-skeleton-text>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/menu/menu-category/menu-category-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/menu/menu-category/menu-category-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: MenuCategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuCategoryPageRoutingModule", function() { return MenuCategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menu_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-category.page */ "./src/app/menu/menu-category/menu-category.page.ts");




const routes = [
    {
        path: '',
        component: _menu_category_page__WEBPACK_IMPORTED_MODULE_3__["MenuCategoryPage"]
    },
    {
        path: ':id',
        loadChildren: () => __webpack_require__.e(/*! import() | menu-category-detail-menu-category-detail-module */ "menu-category-detail-menu-category-detail-module").then(__webpack_require__.bind(null, /*! ./menu-category-detail/menu-category-detail.module */ "./src/app/menu/menu-category/menu-category-detail/menu-category-detail.module.ts")).then(m => m.MenuCategoryDetailPageModule)
    }
];
let MenuCategoryPageRoutingModule = class MenuCategoryPageRoutingModule {
};
MenuCategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuCategoryPageRoutingModule);



/***/ }),

/***/ "./src/app/menu/menu-category/menu-category.module.ts":
/*!************************************************************!*\
  !*** ./src/app/menu/menu-category/menu-category.module.ts ***!
  \************************************************************/
/*! exports provided: MenuCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuCategoryPageModule", function() { return MenuCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _menu_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-category-routing.module */ "./src/app/menu/menu-category/menu-category-routing.module.ts");
/* harmony import */ var _menu_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-category.page */ "./src/app/menu/menu-category/menu-category.page.ts");







let MenuCategoryPageModule = class MenuCategoryPageModule {
};
MenuCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuCategoryPageRoutingModule"]
        ],
        declarations: [_menu_category_page__WEBPACK_IMPORTED_MODULE_6__["MenuCategoryPage"]]
    })
], MenuCategoryPageModule);



/***/ }),

/***/ "./src/app/menu/menu-category/menu-category.page.scss":
/*!************************************************************!*\
  !*** ./src/app/menu/menu-category/menu-category.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS1jYXRlZ29yeS9tZW51LWNhdGVnb3J5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/menu/menu-category/menu-category.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/menu/menu-category/menu-category.page.ts ***!
  \**********************************************************/
/*! exports provided: MenuCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuCategoryPage", function() { return MenuCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let MenuCategoryPage = class MenuCategoryPage {
    constructor(navController) {
        this.navController = navController;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.categoryList = undefined;
        this.fetchCategory();
    }
    fetchCategory() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let response = yield fetch(localStorage.getItem('serverApiBaseUrl') + '/menu/category');
            this.categoryList = yield response.json();
        });
    }
    goToCategoryDetail(categoryId) {
        this.navController.navigateForward('menu/category/' + categoryId);
    }
};
MenuCategoryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
MenuCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-category-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-category.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu-category/menu-category.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu-category.page.scss */ "./src/app/menu/menu-category/menu-category.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], MenuCategoryPage);



/***/ })

}]);
//# sourceMappingURL=menu-category-menu-category-module-es2015.js.map