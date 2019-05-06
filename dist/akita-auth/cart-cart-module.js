(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h4>\n    Cart\n  </h4>\n  <h5>\n    Welcome to cart\n  </h5>\n  <div class=\"content\">\n    <ng-container *ngIf=\"items$ | async as items\">\n      <table class=\"striped\" *ngIf=\"items.length\">\n        <thead>\n          <tr>\n            <th>Title</th>\n            <th>Description</th>\n            <th>Quantity</th>\n            <th>Total</th>\n            <th>Remove</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of items\">\n            <td>{{item.title}}</td>\n            <td>{{item.description}}</td>\n            <td>{{item.quantity}}</td>\n            <th>{{item.total}}$</th>\n            <th>\n              <button (click)=\"remove(item)\" class=\"btn waves-effect waves-light red\">\n                <i class=\"material-icons\">delete_forever</i>\n              </button>\n            </th>\n          </tr>\n        </tbody>\n      </table>\n\n      <h6 *ngIf=\"!items.length\">Your cart is empty</h6>\n\n      <h6 *ngIf=\"items.length\" class=\"flex align-center\">\n        <i class=\"material-icons mr5\">credit_card</i>\n        Total: {{total$ | async}}$\n      </h6>\n\n    </ng-container>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/cart.service */ "./src/app/cart/state/cart.service.ts");
/* harmony import */ var _state_cart_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/cart.query */ "./src/app/cart/state/cart.query.ts");




var CartComponent = /** @class */ (function () {
    function CartComponent(cartQuery, cartService) {
        this.cartQuery = cartQuery;
        this.cartService = cartService;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.items$ = this.cartQuery.selectItems$;
        this.total$ = this.cartQuery.selectTotal$;
    };
    CartComponent.prototype.remove = function (_a) {
        var productId = _a.productId;
        this.cartService.remove(productId);
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_state_cart_query__WEBPACK_IMPORTED_MODULE_3__["CartQuery"], _state_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart.routing.module */ "./src/app/cart/cart.routing.module.ts");





var publicApi = [_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"]];
var CartModule = /** @class */ (function () {
    function CartModule() {
    }
    CartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _cart_routing_module__WEBPACK_IMPORTED_MODULE_4__["CartRoutingModule"]],
            declarations: [publicApi],
            exports: [publicApi]
        })
    ], CartModule);
    return CartModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/cart/cart.routing.module.ts ***!
  \*********************************************/
/*! exports provided: CartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartRoutingModule", function() { return CartRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.component */ "./src/app/cart/cart.component.ts");




var routes = [
    {
        path: '',
        component: _cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"]
    }
];
var CartRoutingModule = /** @class */ (function () {
    function CartRoutingModule() {
    }
    CartRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CartRoutingModule);
    return CartRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=cart-cart-module.js.map