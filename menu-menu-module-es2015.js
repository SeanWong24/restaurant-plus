(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Menu</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"goToCategoryView()\">\n        <ion-icon slot=\"icon-only\" name=\"book\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"goToMenuItemDetailView('new')\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-searchbar showCancelButton=\"focus\" animated (ionChange)=\"searchContentChangedHandler($event.detail.value)\"></ion-searchbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <div *ngFor=\"let menu of displayedMenuList\">\n      <ion-list-header>\n        <ion-label>{{menu.category.name}}</ion-label>\n      </ion-list-header>\n      <ion-item button *ngFor=\"let menuItem of menu.itemList\" (click)=\"goToMenuItemDetailView(menuItem.id)\">\n        <ion-row>\n          <ion-col>\n            <ion-label>{{menuItem.name}}</ion-label>\n          </ion-col>\n\n        </ion-row>\n        <ion-badge slot=\"end\" [color]=\"menuItem.status | menuItemStatusColor\">{{menuItem.status}}</ion-badge>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/menu/menu-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/menu/menu-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function() { return MenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.page */ "./src/app/menu/menu.page.ts");




const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"]
    },
    {
        path: 'category',
        loadChildren: () => __webpack_require__.e(/*! import() | menu-category-menu-category-module */ "menu-category-menu-category-module").then(__webpack_require__.bind(null, /*! ./menu-category/menu-category.module */ "./src/app/menu/menu-category/menu-category.module.ts")).then(m => m.MenuCategoryPageModule)
    },
    {
        path: 'item',
        loadChildren: () => __webpack_require__.e(/*! import() | menu-item-detail-menu-item-detail-module */ "menu-item-detail-menu-item-detail-module").then(__webpack_require__.bind(null, /*! ./menu-item-detail/menu-item-detail.module */ "./src/app/menu/menu-item-detail/menu-item-detail.module.ts")).then(m => m.MenuItemDetailPageModule)
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-routing.module */ "./src/app/menu/menu-routing.module.ts");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/menu/menu.page.ts");







let MenuPageModule = class MenuPageModule {
};
MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"]
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"], _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuItemStatusColorPipe"]]
    })
], MenuPageModule);



/***/ }),

/***/ "./src/app/menu/menu.page.scss":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/menu/menu.page.ts":
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/*! exports provided: MenuPage, MenuItemStatusColorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemStatusColorPipe", function() { return MenuItemStatusColorPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let MenuPage = class MenuPage {
    constructor(navControlor) {
        this.navControlor = navControlor;
        this.menuList = [];
        this.displayedMenuList = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.fetchMenuList();
    }
    fetchMenuList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.menuList = [];
            let response = yield fetch(localStorage.getItem('serverApiBaseUrl') + '/menu/category');
            const categoryList = yield response.json();
            response = yield fetch(localStorage.getItem('serverApiBaseUrl') + '/menu/item');
            const itemList = yield response.json();
            categoryList.forEach(category => this.menuList.push({
                category,
                itemList: itemList.filter(item => item.categoryId === category.id)
            }));
            this.displayedMenuList = this.menuList;
        });
    }
    searchContentChangedHandler(value) {
        if (value) {
            this.displayedMenuList = this.menuList.map(menu => ({
                category: menu.category,
                itemList: menu.category.name.match(new RegExp(value, 'i')) ?
                    menu.itemList :
                    menu.itemList.filter(item => item.name.match(new RegExp(value, 'i')))
            })).filter(menu => menu.category.name.match(new RegExp(value, 'i')) || menu.itemList.length > 0);
        }
        else {
            this.displayedMenuList = this.menuList;
        }
    }
    goToCategoryView() {
        this.navControlor.navigateForward('/menu/category');
    }
    goToMenuItemDetailView(itemId) {
        this.navControlor.navigateForward('/menu/item/' + itemId);
    }
};
MenuPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.page.scss */ "./src/app/menu/menu.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], MenuPage);

let MenuItemStatusColorPipe = class MenuItemStatusColorPipe {
    transform(status) {
        switch (status) {
            case 'Available':
                return 'primary';
            case 'Unavailable':
                return 'danger';
        }
    }
};
MenuItemStatusColorPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'menuItemStatusColor' })
], MenuItemStatusColorPipe);



/***/ })

}]);
//# sourceMappingURL=menu-menu-module-es2015.js.map