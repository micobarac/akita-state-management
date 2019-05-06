(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/login/login.module": [
		"./src/app/auth/login/login.module.ts",
		"default~auth-login-login-module~cart-cart-module~contacts-contacts-module~dashboard-dashboard-module~db8d1ee2",
		"common",
		"auth-login-login-module"
	],
	"./cart/cart.module": [
		"./src/app/cart/cart.module.ts",
		"default~auth-login-login-module~cart-cart-module~contacts-contacts-module~dashboard-dashboard-module~db8d1ee2",
		"common",
		"cart-cart-module"
	],
	"./contacts/contacts.module": [
		"./src/app/contacts/contacts.module.ts",
		"default~auth-login-login-module~cart-cart-module~contacts-contacts-module~dashboard-dashboard-module~db8d1ee2",
		"common",
		"contacts-contacts-module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"default~auth-login-login-module~cart-cart-module~contacts-contacts-module~dashboard-dashboard-module~db8d1ee2",
		"common",
		"dashboard-dashboard-module"
	],
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"default~auth-login-login-module~cart-cart-module~contacts-contacts-module~dashboard-dashboard-module~db8d1ee2",
		"common",
		"home-home-module"
	],
	"./products/products.module": [
		"./src/app/products/products.module.ts",
		"default~auth-login-login-module~cart-cart-module~contacts-contacts-module~dashboard-dashboard-module~db8d1ee2",
		"common",
		"products-products-module"
	],
	"./todos/todos.module": [
		"./src/app/todos/todos.module.ts",
		"default~auth-login-login-module~cart-cart-module~contacts-contacts-module~dashboard-dashboard-module~db8d1ee2",
		"common",
		"todos-todos-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth-guard */ "./src/app/auth/auth-guard.ts");
/* harmony import */ var _auth_non_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/non-auth-guard */ "./src/app/auth/non-auth-guard.ts");





var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'login',
        canActivate: [_auth_non_auth_guard__WEBPACK_IMPORTED_MODULE_4__["NonAuthGuard"]],
        loadChildren: './auth/login/login.module#LoginModule'
    },
    {
        path: 'dashboard',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'contacts',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: './contacts/contacts.module#ContactsModule'
    },
    {
        path: 'todos',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: './todos/todos.module#TodosModule'
    },
    {
        path: 'products',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: './products/products.module#ProductsModule'
    },
    {
        path: 'cart',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: './cart/cart.module#CartModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-nav></app-main-nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(ngZone) {
        this.ngZone = ngZone;
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["akitaDevtools"])(ngZone);
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_show_if_logged_in_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/show-if-logged-in.directive */ "./src/app/auth/show-if-logged-in.directive.ts");
/* harmony import */ var _auth_show_if_login_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/show-if-login.directive */ "./src/app/auth/show-if-login.directive.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_7__["MainNavComponent"], _auth_show_if_login_directive__WEBPACK_IMPORTED_MODULE_6__["ShowIfLoginDirective"], _auth_show_if_logged_in_directive__WEBPACK_IMPORTED_MODULE_5__["ShowIfLoggedInDirective"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth-guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _state_auth_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state/auth.query */ "./src/app/auth/state/auth.query.ts");






var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authQuery) {
        this.router = router;
        this.authQuery = authQuery;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.authQuery.isLoggedIn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (isLoggedIn) {
            if (!isLoggedIn) {
                _this.router.navigate(['/login']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(isLoggedIn);
        }));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _state_auth_query__WEBPACK_IMPORTED_MODULE_5__["AuthQuery"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/non-auth-guard.ts":
/*!****************************************!*\
  !*** ./src/app/auth/non-auth-guard.ts ***!
  \****************************************/
/*! exports provided: NonAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonAuthGuard", function() { return NonAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _state_auth_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state/auth.query */ "./src/app/auth/state/auth.query.ts");






var NonAuthGuard = /** @class */ (function () {
    function NonAuthGuard(router, authQuery) {
        this.router = router;
        this.authQuery = authQuery;
    }
    NonAuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.authQuery.isLoggedIn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (isLoggedIn) {
            if (isLoggedIn) {
                _this.router.navigate(['']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(!isLoggedIn);
        }));
    };
    NonAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _state_auth_query__WEBPACK_IMPORTED_MODULE_5__["AuthQuery"]])
    ], NonAuthGuard);
    return NonAuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/show-if-logged-in.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/show-if-logged-in.directive.ts ***!
  \*****************************************************/
/*! exports provided: ShowIfLoggedInDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowIfLoggedInDirective", function() { return ShowIfLoggedInDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/fesm5/ngx-take-until-destroy.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ "./src/app/auth/state/index.ts");




var ShowIfLoggedInDirective = /** @class */ (function () {
    function ShowIfLoggedInDirective(templateRef, viewContainer, authQuery) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.authQuery = authQuery;
    }
    ShowIfLoggedInDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.authQuery.isLoggedIn$.pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this)).subscribe(function (isLoggedIn) {
            _this.viewContainer.clear();
            if (isLoggedIn) {
                if (_this.showIfLoggedIn) {
                    _this.viewContainer.createEmbeddedView(_this.templateRef);
                }
                else {
                    _this.viewContainer.clear();
                }
            }
            else {
                if (_this.showIfLoggedIn) {
                    _this.viewContainer.clear();
                }
                else {
                    _this.viewContainer.createEmbeddedView(_this.templateRef);
                }
            }
        });
    };
    ShowIfLoggedInDirective.prototype.ngOnDestroy = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ShowIfLoggedInDirective.prototype, "showIfLoggedIn", void 0);
    ShowIfLoggedInDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[showIfLoggedIn]' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _state__WEBPACK_IMPORTED_MODULE_3__["AuthQuery"]])
    ], ShowIfLoggedInDirective);
    return ShowIfLoggedInDirective;
}());



/***/ }),

/***/ "./src/app/auth/show-if-login.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/show-if-login.directive.ts ***!
  \*************************************************/
/*! exports provided: ShowIfLoginDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowIfLoginDirective", function() { return ShowIfLoginDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/fesm5/ngx-take-until-destroy.js");




var ShowIfLoginDirective = /** @class */ (function () {
    function ShowIfLoginDirective(templateRef, viewContainer, router) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.router = router;
    }
    ShowIfLoginDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this)).subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.viewContainer.clear();
                if (event.url === '/login') {
                    if (_this.showIfLogin) {
                        _this.viewContainer.createEmbeddedView(_this.templateRef);
                    }
                    else {
                        _this.viewContainer.clear();
                    }
                }
                else {
                    if (_this.showIfLogin) {
                        _this.viewContainer.clear();
                    }
                    else {
                        _this.viewContainer.createEmbeddedView(_this.templateRef);
                    }
                }
            }
        });
    };
    ShowIfLoginDirective.prototype.ngOnDestroy = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ShowIfLoginDirective.prototype, "showIfLogin", void 0);
    ShowIfLoginDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[showIfLogin]' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ShowIfLoginDirective);
    return ShowIfLoginDirective;
}());



/***/ }),

/***/ "./src/app/auth/state/auth-data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/state/auth-data.service.ts ***!
  \*************************************************/
/*! exports provided: AuthDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthDataService", function() { return AuthDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthDataService = /** @class */ (function () {
    function AuthDataService() {
    }
    AuthDataService.prototype.login = function (_creds) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(300).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])({ name: 'Captain America', token: 'token' }));
    };
    AuthDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthDataService);
    return AuthDataService;
}());



/***/ }),

/***/ "./src/app/auth/state/auth.query.ts":
/*!******************************************!*\
  !*** ./src/app/auth/state/auth.query.ts ***!
  \******************************************/
/*! exports provided: AuthQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthQuery", function() { return AuthQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _auth_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.store */ "./src/app/auth/state/auth.store.ts");




var AuthQuery = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AuthQuery, _super);
    function AuthQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        _this.isLoggedIn$ = _this.select(function (state) { return Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["toBoolean"])(state.token); });
        _this.name$ = _this.select(function (state) { return state.name; });
        return _this;
    }
    AuthQuery = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_store__WEBPACK_IMPORTED_MODULE_3__["AuthStore"]])
    ], AuthQuery);
    return AuthQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["Query"]));



/***/ }),

/***/ "./src/app/auth/state/auth.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/state/auth.service.ts ***!
  \********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-data.service */ "./src/app/auth/state/auth-data.service.ts");
/* harmony import */ var _auth_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.store */ "./src/app/auth/state/auth.store.ts");





var AuthService = /** @class */ (function () {
    function AuthService(authStore, authDataService) {
        this.authStore = authStore;
        this.authDataService = authDataService;
    }
    AuthService.prototype.login = function (creds) {
        var _this = this;
        return this.authDataService.login(creds).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (auth) { return _this.authStore.login(auth); }));
    };
    AuthService.prototype.logout = function () {
        this.authStore.logout();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_store__WEBPACK_IMPORTED_MODULE_4__["AuthStore"], _auth_data_service__WEBPACK_IMPORTED_MODULE_3__["AuthDataService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/state/auth.store.ts":
/*!******************************************!*\
  !*** ./src/app/auth/state/auth.store.ts ***!
  \******************************************/
/*! exports provided: createInitialAuthState, AuthStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInitialAuthState", function() { return createInitialAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthStore", function() { return AuthStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage */ "./src/app/auth/storage.ts");




function createInitialAuthState() {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ name: null, token: null }, _storage__WEBPACK_IMPORTED_MODULE_3__["getAuth"]());
}
var AuthStore = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AuthStore, _super);
    function AuthStore() {
        return _super.call(this, createInitialAuthState()) || this;
    }
    AuthStore.prototype.login = function (auth) {
        this.update(auth);
        _storage__WEBPACK_IMPORTED_MODULE_3__["saveAuth"](auth);
    };
    AuthStore.prototype.logout = function () {
        _storage__WEBPACK_IMPORTED_MODULE_3__["clearAuth"]();
        this.update(createInitialAuthState());
    };
    AuthStore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({ name: 'auth' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthStore);
    return AuthStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["Store"]));



/***/ }),

/***/ "./src/app/auth/state/index.ts":
/*!*************************************!*\
  !*** ./src/app/auth/state/index.ts ***!
  \*************************************/
/*! exports provided: AuthQuery, createInitialAuthState, AuthStore, AuthDataService, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-data.service */ "./src/app/auth/state/auth-data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthDataService", function() { return _auth_data_service__WEBPACK_IMPORTED_MODULE_0__["AuthDataService"]; });

/* harmony import */ var _auth_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.query */ "./src/app/auth/state/auth.query.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthQuery", function() { return _auth_query__WEBPACK_IMPORTED_MODULE_1__["AuthQuery"]; });

/* harmony import */ var _auth_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.store */ "./src/app/auth/state/auth.store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInitialAuthState", function() { return _auth_store__WEBPACK_IMPORTED_MODULE_2__["createInitialAuthState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthStore", function() { return _auth_store__WEBPACK_IMPORTED_MODULE_2__["AuthStore"]; });

/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/state/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]; });







/***/ }),

/***/ "./src/app/auth/storage.ts":
/*!*********************************!*\
  !*** ./src/app/auth/storage.ts ***!
  \*********************************/
/*! exports provided: getAuth, saveAuth, clearAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuth", function() { return getAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveAuth", function() { return saveAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearAuth", function() { return clearAuth; });
var AUTH_KEY = 'auth';
function getAuth() {
    var auth = localStorage.getItem(AUTH_KEY);
    return auth ? JSON.parse(auth) : {};
}
function saveAuth(auth) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
}
function clearAuth() {
    localStorage.removeItem(AUTH_KEY);
}


/***/ }),

/***/ "./src/app/cart/state/cart.query.ts":
/*!******************************************!*\
  !*** ./src/app/cart/state/cart.query.ts ***!
  \******************************************/
/*! exports provided: CartQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartQuery", function() { return CartQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.store */ "./src/app/cart/state/cart.store.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _products_state_products_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../products/state/products.query */ "./src/app/products/state/products.query.ts");







var CartQuery = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CartQuery, _super);
    function CartQuery(store, productsQuery) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        _this.productsQuery = productsQuery;
        _this.selectItems$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(_this.selectAll(), _this.productsQuery.selectAll({ asObject: true })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(joinItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])({ bufferSize: 1, refCount: true }));
        _this.selectTotal$ = _this.selectItems$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (items) { return items.reduce(function (acc, item) { return acc + item.total; }, 0); }));
        return _this;
    }
    CartQuery = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_store__WEBPACK_IMPORTED_MODULE_2__["CartStore"], _products_state_products_query__WEBPACK_IMPORTED_MODULE_6__["ProductsQuery"]])
    ], CartQuery);
    return CartQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_5__["QueryEntity"]));

function joinItems(_a) {
    var cartItems = _a[0], products = _a[1];
    return cartItems.map(function (cartItem) {
        var product = products[cartItem.productId];
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, cartItem, product, { total: cartItem.quantity * product.price });
    });
}


/***/ }),

/***/ "./src/app/cart/state/cart.store.ts":
/*!******************************************!*\
  !*** ./src/app/cart/state/cart.store.ts ***!
  \******************************************/
/*! exports provided: CartStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartStore", function() { return CartStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");



var CartStore = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CartStore, _super);
    function CartStore() {
        return _super.call(this) || this;
    }
    CartStore.prototype.updateQuantity = function (productId, operand) {
        if (operand === void 0) { operand = 1; }
        this.update(productId, function (entity) {
            var newQuantity = entity.quantity + operand;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, entity, { quantity: newQuantity });
        });
    };
    CartStore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({
            name: 'cart',
            idKey: 'productId'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CartStore);
    return CartStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"]));



/***/ }),

/***/ "./src/app/main-nav/main-nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul id=\"dropdown\" class=\"dropdown-content\" *showIfLoggedIn=\"true\">\n    <li><a (click)=\"logout()\">Logout</a></li>\n  </ul>\n  <nav>\n    <div class=\"nav-wrapper\">\n      <a href=\"#\" class=\"brand-logo\" routerLink=\"home\" routerLinkActive=\"active\">Akita</a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li *ngFor=\"let module of modules\" routerLinkActive=\"active\">\n          <a [routerLink]=\"module.link\" *showIfLoggedIn=\"true\">{{ module.title }}</a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"dashboard\">Dashboard</a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"contacts\">Contacts</a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"todos\">Todos</a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"products\">Products</a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"cart\">Cart <span class=\"new badge\">{{ count$ | async }}</span></a>\n        </li>\n        <li *showIfLogin=\"false\"><a *showIfLoggedIn=\"false\" routerLink=\"login\"\n            class=\"waves-effect waves-light btn\">Login</a></li>\n        <li *showIfLoggedIn=\"true\"><a #dropdown class=\"dropdown-trigger\" data-target=\"dropdown\">Welcome,\n            {{ name$ | async}}!<i class=\"material-icons right\">arrow_drop_down</i></a></li>\n      </ul>\n    </div>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.scss":
/*!**************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav .brand-logo {\n  transition: background-color 0.3s;\n  font-size: 1.6rem;\n  color: #fff;\n  display: block;\n  padding: 0 15px;\n  cursor: pointer; }\n  nav .brand-logo.active {\n    background-color: rgba(0, 0, 0, 0.1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWxhbi9TaXRlcy9ha2l0YS1hdXRoL3NyYy9hcHAvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBaUM7RUFDakMsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWUsRUFBQTtFQU5qQjtJQVNJLG9DQUFvQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYgLmJyYW5kLWxvZ28ge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICYuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_cart_state_cart_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/cart/state/cart.query */ "./src/app/cart/state/cart.query.ts");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/fesm5/ngx-take-until-destroy.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/state */ "./src/app/auth/state/index.ts");








var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(router, cartQuery, authService, authQuery) {
        this.router = router;
        this.cartQuery = cartQuery;
        this.authService = authService;
        this.authQuery = authQuery;
    }
    MainNavComponent.prototype.ngOnInit = function () {
        this.name$ = this.authQuery.name$;
        this.count$ = this.cartQuery.selectCount();
    };
    MainNavComponent.prototype.ngAfterViewInit = function () {
        this.dropdown.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (dropdown) { return !!dropdown.length; }), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_5__["untilDestroyed"])(this))
            .subscribe(function (dropdown) {
            new materialize_css__WEBPACK_IMPORTED_MODULE_4__["Dropdown"](dropdown.first.nativeElement, { coverTrigger: false });
        });
    };
    MainNavComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigateByUrl('login');
    };
    MainNavComponent.prototype.ngOnDestroy = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('dropdown'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], MainNavComponent.prototype, "dropdown", void 0);
    MainNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/main-nav/main-nav.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./main-nav.component.scss */ "./src/app/main-nav/main-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _app_cart_state_cart_query__WEBPACK_IMPORTED_MODULE_3__["CartQuery"],
            _auth_state__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _auth_state__WEBPACK_IMPORTED_MODULE_7__["AuthQuery"]])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/products/state/products.query.ts":
/*!**************************************************!*\
  !*** ./src/app/products/state/products.query.ts ***!
  \**************************************************/
/*! exports provided: ProductsQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsQuery", function() { return ProductsQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _products_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.store */ "./src/app/products/state/products.store.ts");




var ProductsQuery = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProductsQuery, _super);
    function ProductsQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        return _this;
    }
    ProductsQuery.prototype.getProducts = function (term, sortBy) {
        return this.selectAll({
            sortBy: sortBy,
            filterBy: function (entity) { return entity.title.toLowerCase().includes(term); }
        });
    };
    ProductsQuery = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["QueryConfig"])({ sortBy: 'price' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_products_store__WEBPACK_IMPORTED_MODULE_3__["ProductsStore"]])
    ], ProductsQuery);
    return ProductsQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["QueryEntity"]));



/***/ }),

/***/ "./src/app/products/state/products.store.ts":
/*!**************************************************!*\
  !*** ./src/app/products/state/products.store.ts ***!
  \**************************************************/
/*! exports provided: ProductsStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsStore", function() { return ProductsStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");



var ProductsStore = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProductsStore, _super);
    function ProductsStore() {
        return _super.call(this, { active: [] }) || this;
    }
    ProductsStore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({ name: 'products' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductsStore);
    return ProductsStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/milan/Sites/akita-auth/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map