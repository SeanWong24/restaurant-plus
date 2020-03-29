(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["anouncement-modify-anouncement-modify-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/anouncement/anouncement-modify/anouncement-modify.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anouncement/anouncement-modify/anouncement-modify.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/anouncement\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{isCreatingNewAnouncement ? 'Create New Anouncement' : 'Modify Anouncement'}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!isCreatingNewAnouncement\" (click)=\"delete()\">\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"save()\">\n        <ion-icon slot=\"icon-only\" name=\"save\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"upper-div\">\n    <ion-input [(ngModel)]=\"anouncement.title\"></ion-input>\n    <ion-note>{{anouncement.timeCreated}}</ion-note>\n  </div>\n  <div id=\"lower-div\">\n    <textarea [(ngModel)]=\"anouncement.content\"></textarea>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/anouncement/anouncement-modify/anouncement-modify-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/anouncement/anouncement-modify/anouncement-modify-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AnouncementModifyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnouncementModifyPageRoutingModule", function() { return AnouncementModifyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _anouncement_modify_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anouncement-modify.page */ "./src/app/anouncement/anouncement-modify/anouncement-modify.page.ts");




const routes = [
    {
        path: ':id',
        component: _anouncement_modify_page__WEBPACK_IMPORTED_MODULE_3__["AnouncementModifyPage"]
    }
];
let AnouncementModifyPageRoutingModule = class AnouncementModifyPageRoutingModule {
};
AnouncementModifyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AnouncementModifyPageRoutingModule);



/***/ }),

/***/ "./src/app/anouncement/anouncement-modify/anouncement-modify.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/anouncement/anouncement-modify/anouncement-modify.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AnouncementModifyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnouncementModifyPageModule", function() { return AnouncementModifyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _anouncement_modify_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./anouncement-modify-routing.module */ "./src/app/anouncement/anouncement-modify/anouncement-modify-routing.module.ts");
/* harmony import */ var _anouncement_modify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./anouncement-modify.page */ "./src/app/anouncement/anouncement-modify/anouncement-modify.page.ts");







let AnouncementModifyPageModule = class AnouncementModifyPageModule {
};
AnouncementModifyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _anouncement_modify_routing_module__WEBPACK_IMPORTED_MODULE_5__["AnouncementModifyPageRoutingModule"]
        ],
        declarations: [_anouncement_modify_page__WEBPACK_IMPORTED_MODULE_6__["AnouncementModifyPage"]]
    })
], AnouncementModifyPageModule);



/***/ }),

/***/ "./src/app/anouncement/anouncement-modify/anouncement-modify.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/anouncement/anouncement-modify/anouncement-modify.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#upper-div {\n  height: 80px;\n}\n\n#lower-div {\n  height: calc(100% - 90px);\n}\n\ntextarea {\n  width: 100%;\n  height: 100%;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3Jlc3RhdXJhbnQtcGx1cy1tYW5hZ2VtZW50L3Jlc3RhdXJhbnQtcGx1cy1tYW5hZ2VtZW50L3NyYy9hcHAvYW5vdW5jZW1lbnQvYW5vdW5jZW1lbnQtbW9kaWZ5L2Fub3VuY2VtZW50LW1vZGlmeS5wYWdlLnNjc3MiLCJzcmMvYXBwL2Fub3VuY2VtZW50L2Fub3VuY2VtZW50LW1vZGlmeS9hbm91bmNlbWVudC1tb2RpZnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYW5vdW5jZW1lbnQvYW5vdW5jZW1lbnQtbW9kaWZ5L2Fub3VuY2VtZW50LW1vZGlmeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdXBwZXItZGl2IHtcbiAgICBoZWlnaHQ6IDgwcHg7XG59XG5cbiNsb3dlci1kaXYge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gOTBweCk7XG59XG5cbnRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6IGJsYWNrO1xufSIsIiN1cHBlci1kaXYge1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbiNsb3dlci1kaXYge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDkwcHgpO1xufVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/anouncement/anouncement-modify/anouncement-modify.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/anouncement/anouncement-modify/anouncement-modify.page.ts ***!
  \***************************************************************************/
/*! exports provided: AnouncementModifyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnouncementModifyPage", function() { return AnouncementModifyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_models_anouncement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/anouncement */ "./src/app/models/anouncement.ts");





let AnouncementModifyPage = class AnouncementModifyPage {
    constructor(activatedRoute, navController, alertController) {
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.alertController = alertController;
        this.anouncement = new src_app_models_anouncement__WEBPACK_IMPORTED_MODULE_4__["Anouncement"]();
        this.isCreatingNewAnouncement = false;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        const anouncementId = this.activatedRoute.snapshot.paramMap.get('id');
        if (anouncementId === 'new') {
            this.isCreatingNewAnouncement = true;
            this.anouncement.title = 'New Anouncement';
        }
        else {
            this.fetchAnouncement(anouncementId);
        }
    }
    fetchAnouncement(anouncementId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const response = yield fetch(localStorage.getItem('serverApiBaseUrl') + '/anouncement?id=' + anouncementId);
            this.anouncement = yield response.json();
        });
    }
    save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.anouncement.title) {
                if (this.isCreatingNewAnouncement) {
                    this.anouncement.timeCreated = new Date().toISOString();
                    const response = yield fetch(localStorage.getItem('serverApiBaseUrl') + '/anouncement/add', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(this.anouncement)
                    });
                    if (response.ok) {
                        this.navController.navigateBack('/anouncement');
                    }
                    else {
                        delete this.anouncement.timeCreated;
                        const alert = yield this.alertController.create({
                            header: 'Fail to Create Anouncement',
                            message: 'Fail to create the anouncement, please try again.'
                        });
                        yield alert.present();
                    }
                }
                else {
                    const response = yield fetch(localStorage.getItem('serverApiBaseUrl') + '/anouncement/modify', {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(this.anouncement)
                    });
                    if (response.ok) {
                        this.navController.navigateBack('/anouncement');
                    }
                    else {
                        const alert = yield this.alertController.create({
                            header: 'Fail to Save Anouncement',
                            message: 'Fail to save the anouncement, please try again.'
                        });
                        yield alert.present();
                    }
                }
            }
            else {
                const alert = yield this.alertController.create({
                    header: 'Invalid Values',
                    message: 'There are one or more invalid values, please check and try again.'
                });
                yield alert.present();
            }
        });
    }
    delete() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.isCreatingNewAnouncement) {
                const alert = yield this.alertController.create({
                    header: 'Deleting an Anouncement',
                    message: 'Are you sure to delete ' + this.anouncement.title + '?',
                    buttons: [
                        'Cancel',
                        {
                            text: "Delete",
                            handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                const response = yield fetch(localStorage.getItem('serverApiBaseUrl') + '/anouncement?id=' + this.anouncement.id, { method: 'DELETE' });
                                if (response.ok) {
                                    this.navController.navigateBack('/anouncement');
                                }
                            })
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
};
AnouncementModifyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
AnouncementModifyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-anouncement-modify',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./anouncement-modify.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/anouncement/anouncement-modify/anouncement-modify.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./anouncement-modify.page.scss */ "./src/app/anouncement/anouncement-modify/anouncement-modify.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], AnouncementModifyPage);



/***/ })

}]);
//# sourceMappingURL=anouncement-modify-anouncement-modify-module-es2015.js.map