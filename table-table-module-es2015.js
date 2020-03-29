(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["table-table-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/table/table.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table/table.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Table</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"goToDetailView('new')\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf=\"tableList\">\n    <ion-item button *ngFor=\"let table of tableList\" (click)=\"goToDetailView(table.id)\">\n      <ion-row>\n        <ion-col>\n          <ion-label>{{table.name}}</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>({{table.occupied}}/{{table.capacity}})</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-badge slot=\"end\" [color]=\"table.status | tableStatusColor\">{{table.status}}</ion-badge>\n    </ion-item>\n  </ion-list>\n  <ion-list *ngIf=\"!tableList\">\n    <ion-item button *ngFor=\"let i of [1, 2, 3, 4, 5]\">\n      <ion-row>\n        <ion-col>\n          <ion-skeleton-text animated style=\"width: 100px;\"></ion-skeleton-text>\n        </ion-col>\n        <ion-col>\n          <ion-skeleton-text animated style=\"width: 50px;\"></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n      <ion-skeleton-text slot=\"end\" animated style=\"width: 50px;\"></ion-skeleton-text>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/models/table.ts":
/*!*********************************!*\
  !*** ./src/app/models/table.ts ***!
  \*********************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Table {
    constructor() {
        this.occupied = 0;
        this.status = Table.Status.Unavailable;
    }
}
Table.Status = {
    Free: 'Free',
    Using: 'Using',
    Reserved: 'Reserved',
    Dirty: 'Dirty',
    Unavailable: 'Unavailable',
};


/***/ }),

/***/ "./src/app/table/table-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/table/table-routing.module.ts ***!
  \***********************************************/
/*! exports provided: TablePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePageRoutingModule", function() { return TablePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _table_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table.page */ "./src/app/table/table.page.ts");




const routes = [
    {
        path: '',
        component: _table_page__WEBPACK_IMPORTED_MODULE_3__["TablePage"]
    },
    {
        path: ':id',
        loadChildren: () => __webpack_require__.e(/*! import() | table-detail-table-detail-module */ "table-detail-table-detail-module").then(__webpack_require__.bind(null, /*! ./table-detail/table-detail.module */ "./src/app/table/table-detail/table-detail.module.ts")).then(m => m.TableDetailPageModule)
    }
];
let TablePageRoutingModule = class TablePageRoutingModule {
};
TablePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TablePageRoutingModule);



/***/ }),

/***/ "./src/app/table/table.module.ts":
/*!***************************************!*\
  !*** ./src/app/table/table.module.ts ***!
  \***************************************/
/*! exports provided: TablePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePageModule", function() { return TablePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _table_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table-routing.module */ "./src/app/table/table-routing.module.ts");
/* harmony import */ var _table_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table.page */ "./src/app/table/table.page.ts");







let TablePageModule = class TablePageModule {
};
TablePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _table_routing_module__WEBPACK_IMPORTED_MODULE_5__["TablePageRoutingModule"]
        ],
        declarations: [_table_page__WEBPACK_IMPORTED_MODULE_6__["TablePage"], _table_page__WEBPACK_IMPORTED_MODULE_6__["TableStatusColorPipe"]]
    })
], TablePageModule);



/***/ }),

/***/ "./src/app/table/table.page.scss":
/*!***************************************!*\
  !*** ./src/app/table/table.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL3RhYmxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/table/table.page.ts":
/*!*************************************!*\
  !*** ./src/app/table/table.page.ts ***!
  \*************************************/
/*! exports provided: TablePage, TableStatusColorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePage", function() { return TablePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableStatusColorPipe", function() { return TableStatusColorPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/table */ "./src/app/models/table.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let TablePage = class TablePage {
    constructor(navController) {
        this.navController = navController;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.tableList = undefined;
        this.fetchTableList();
    }
    fetchTableList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const response = yield fetch(localStorage.getItem('serverApiBaseUrl') + '/table');
            this.tableList = yield response.json();
        });
    }
    goToDetailView(tableId) {
        this.navController.navigateForward('/table/' + tableId);
    }
};
TablePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
TablePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/table/table.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table.page.scss */ "./src/app/table/table.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], TablePage);

let TableStatusColorPipe = class TableStatusColorPipe {
    transform(status) {
        switch (status) {
            case _models_table__WEBPACK_IMPORTED_MODULE_2__["Table"].Status.Free:
                return 'secondary';
            case _models_table__WEBPACK_IMPORTED_MODULE_2__["Table"].Status.Using:
                return 'success';
            case _models_table__WEBPACK_IMPORTED_MODULE_2__["Table"].Status.Reserved:
                return 'tertiary';
            case _models_table__WEBPACK_IMPORTED_MODULE_2__["Table"].Status.Dirty:
                return 'warning';
            case _models_table__WEBPACK_IMPORTED_MODULE_2__["Table"].Status.Unavailable:
                return 'danger';
        }
    }
};
TableStatusColorPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'tableStatusColor' })
], TableStatusColorPipe);



/***/ })

}]);
//# sourceMappingURL=table-table-module-es2015.js.map