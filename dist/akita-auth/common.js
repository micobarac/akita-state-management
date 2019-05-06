(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/cart/state/cart.model.ts":
/*!******************************************!*\
  !*** ./src/app/cart/state/cart.model.ts ***!
  \******************************************/
/*! exports provided: createCartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCartItem", function() { return createCartItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function createCartItem(params) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ total: 0, quantity: 1 }, params);
}


/***/ }),

/***/ "./src/app/cart/state/cart.service.ts":
/*!********************************************!*\
  !*** ./src/app/cart/state/cart.service.ts ***!
  \********************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.store */ "./src/app/cart/state/cart.store.ts");
/* harmony import */ var _cart_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.query */ "./src/app/cart/state/cart.query.ts");
/* harmony import */ var _cart_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart.model */ "./src/app/cart/state/cart.model.ts");





var CartService = /** @class */ (function () {
    function CartService(cartStore, cartQuery) {
        this.cartStore = cartStore;
        this.cartQuery = cartQuery;
    }
    CartService.prototype.add = function (productId) {
        var findItem = this.cartQuery.getEntity(productId);
        if (!!findItem) {
            return this.cartStore.updateQuantity(productId);
        }
        var item = Object(_cart_model__WEBPACK_IMPORTED_MODULE_4__["createCartItem"])({
            productId: productId
        });
        return this.cartStore.add(item);
    };
    CartService.prototype.subtract = function (productId) {
        var findItem = this.cartQuery.getEntity(productId);
        if (!!findItem) {
            if (findItem.quantity === 1) {
                return this.cartStore.remove(productId);
            }
            return this.cartStore.updateQuantity(findItem.productId, -1);
        }
    };
    CartService.prototype.remove = function (productId) {
        this.cartStore.remove(productId);
    };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_store__WEBPACK_IMPORTED_MODULE_2__["CartStore"], _cart_query__WEBPACK_IMPORTED_MODULE_3__["CartQuery"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map