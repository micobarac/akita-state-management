(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./src/app/products/product/product.component.html":
/*!*********************************************************!*\
  !*** ./src/app/products/product/product.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card p-width\">\n  <div class=\"card-image pointer\" [routerLink]=\"['product', product.id]\">\n    <img src=\"http://via.placeholder.com/359x269?text={{product.title}}\">\n  </div>\n  <div class=\"card-content pointer\" [routerLink]=\"['product', product.id]\">\n    <p class=\"mbb\">Price: <b>{{product.price}}$</b></p>\n    <p>{{product.description}}</p>\n  </div>\n  <div class=\"card-action flex flex-end\">\n    <button class=\"btn waves-effect waves-light cyan lighten-2 mr\" (click)=\"add.emit(product)\">\n      <i class=\"material-icons\">exposure_plus_1</i>\n    </button>\n    <button class=\"btn waves-effect waves-light blue-grey lighten-3\" (click)=\"subtract.emit(product)\">\n      <i class=\"material-icons\">exposure_neg_1</i>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/products/product/product.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/products/product/product.component.ts ***!
  \*******************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subtract = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductComponent.prototype, "product", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductComponent.prototype, "add", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductComponent.prototype, "subtract", void 0);
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/products/product/product.component.html")
        })
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h4>\n    Products\n  </h4>\n  <h5>\n    Welcome to products\n  </h5>\n  <div class=\"content\">\n\n    <h6 class=\"grey-text flex align-center\">\n      <i class=\"material-icons\">view_list</i>\n      Products\n    </h6>\n\n    <ng-container *ngIf=\"!(loading$ | async); else loadingTpl\">\n\n      <!--Sorting-->\n      <div class=\"col s12\">\n        <label>Sort by</label>\n        <select class=\"browser-default\" [formControl]=\"sort\">\n          <option value=\"title\">Name</option>\n          <option value=\"price\">Price</option>\n        </select>\n      </div>\n\n      <!--Search Input-->\n      <div class=\"input-field\">\n        <i class=\"material-icons prefix\">search</i>\n        <input placeholder=\"Search Product..\" [formControl]=\"search\">\n      </div>\n\n\n      <!--Products List-->\n      <div class=\"mt flex\">\n        <app-product *ngFor=\"let product of (products$ | async)\" (add)=\"add($event)\" (subtract)=\"subtract($event)\"\n          [product]=\"product\">\n        </app-product>\n      </div>\n\n    </ng-container>\n\n    <!--Spinner-->\n    <ng-template #loadingTpl>\n      <div class=\"progress\">\n        <div class=\"indeterminate\"></div>\n      </div>\n    </ng-template>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/fesm5/ngx-take-until-destroy.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _cart_state_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cart/state/cart.service */ "./src/app/cart/state/cart.service.ts");
/* harmony import */ var _state_products_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state/products.query */ "./src/app/products/state/products.query.ts");
/* harmony import */ var _state_products_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./state/products.service */ "./src/app/products/state/products.service.ts");









var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productsService, cartService, productsQuery) {
        this.productsService = productsService;
        this.cartService = cartService;
        this.productsQuery = productsQuery;
        this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.sort = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('title');
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService
            .get()
            .pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe();
        this.loading$ = this.productsQuery.selectLoading();
        this.products$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.search.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])('')), this.sort.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])('title'))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_a) {
            var term = _a[0], sortBy = _a[1];
            return _this.productsQuery.getProducts(term, sortBy);
        }));
    };
    ProductsComponent.prototype.add = function (_a) {
        var id = _a.id;
        this.cartService.add(id);
    };
    ProductsComponent.prototype.subtract = function (_a) {
        var id = _a.id;
        this.cartService.subtract(id);
    };
    ProductsComponent.prototype.ngOnDestroy = function () { };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_state_products_service__WEBPACK_IMPORTED_MODULE_8__["ProductsService"],
            _cart_state_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"],
            _state_products_query__WEBPACK_IMPORTED_MODULE_7__["ProductsQuery"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/products/products.mocks.ts":
/*!********************************************!*\
  !*** ./src/app/products/products.mocks.ts ***!
  \********************************************/
/*! exports provided: products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function() { return products; });
var products = [
    {
        id: 3,
        title: 'Rx',
        description: 'Is a set of libraries to compose asynchronous and event-based programs using observable collections and Array style composition in JavaScript',
        price: 30
    },
    {
        id: 1,
        title: 'JavaScript',
        description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language.',
        price: 10
    },
    {
        id: 2,
        title: 'Angular',
        description: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target.',
        price: 20
    }
];


/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/product.component */ "./src/app/products/product/product.component.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products.routing.module */ "./src/app/products/products.routing.module.ts");






var publicApi = [_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]];
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductsRoutingModule"]],
            declarations: [publicApi],
            exports: [publicApi]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "./src/app/products/products.routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/products/products.routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/product.component */ "./src/app/products/product/product.component.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products.component */ "./src/app/products/products.component.ts");





var routes = [
    {
        path: '',
        component: _products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"],
        children: [
            {
                path: 'product/:id',
                component: _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]
            }
        ]
    }
];
var ProductsRoutingModule = /** @class */ (function () {
    function ProductsRoutingModule() {
    }
    ProductsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProductsRoutingModule);
    return ProductsRoutingModule;
}());



/***/ }),

/***/ "./src/app/products/state/products.service.ts":
/*!****************************************************!*\
  !*** ./src/app/products/state/products.service.ts ***!
  \****************************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _products_mocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../products.mocks */ "./src/app/products/products.mocks.ts");
/* harmony import */ var _products_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products.query */ "./src/app/products/state/products.query.ts");
/* harmony import */ var _products_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.store */ "./src/app/products/state/products.store.ts");







var ProductsService = /** @class */ (function () {
    function ProductsService(productsStore, productsQuery) {
        this.productsStore = productsStore;
        this.productsQuery = productsQuery;
    }
    ProductsService.prototype.get = function () {
        var _this = this;
        var request = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(_products_mocks__WEBPACK_IMPORTED_MODULE_4__["products"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return _this.productsStore.set(response); }));
        return this.productsQuery.getHasCache() ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])() : request;
    };
    ProductsService.prototype.getProduct = function (id) {
        var _this = this;
        var product = _products_mocks__WEBPACK_IMPORTED_MODULE_4__["products"].find(function (product) { return product.id === +id; });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(product), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this.productsStore.add(product); }));
    };
    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_products_store__WEBPACK_IMPORTED_MODULE_6__["ProductsStore"], _products_query__WEBPACK_IMPORTED_MODULE_5__["ProductsQuery"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ })

}]);
//# sourceMappingURL=products-products-module.js.map