(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todos-todos-module"],{

/***/ "./src/app/todos/filter/filter.component.html":
/*!****************************************************!*\
  !*** ./src/app/todos/filter/filter.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-field col s12\">\n  <select [formControl]=\"control\" class=\"browser-default\">\n    <option *ngFor=\"let filter of filters\" [ngValue]=\"filter.value\">{{ filter.label }} </option>\n  </select>\n</div>"

/***/ }),

/***/ "./src/app/todos/filter/filter.component.scss":
/*!****************************************************!*\
  !*** ./src/app/todos/filter/filter.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/todos/filter/filter.component.ts":
/*!**************************************************!*\
  !*** ./src/app/todos/filter/filter.component.ts ***!
  \**************************************************/
/*! exports provided: TodosFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosFilterComponent", function() { return TodosFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/fesm5/ngx-take-until-destroy.js");
/* harmony import */ var _filter_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter.model */ "./src/app/todos/filter/filter.model.ts");





var TodosFilterComponent = /** @class */ (function () {
    function TodosFilterComponent() {
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(TodosFilterComponent.prototype, "active", {
        set: function (filter) {
            this._active = filter;
            if (this.control) {
                this.control.patchValue(filter, { emitEvent: false });
            }
        },
        enumerable: true,
        configurable: true
    });
    TodosFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this._active);
        this.control.valueChanges.pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this)).subscribe(function (value) {
            _this.update.emit(value);
        });
    };
    TodosFilterComponent.prototype.ngOnDestroy = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], TodosFilterComponent.prototype, "active", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TodosFilterComponent.prototype, "filters", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TodosFilterComponent.prototype, "update", void 0);
    TodosFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todos-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/todos/filter/filter.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./filter.component.scss */ "./src/app/todos/filter/filter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TodosFilterComponent);
    return TodosFilterComponent;
}());



/***/ }),

/***/ "./src/app/todos/filter/filter.model.ts":
/*!**********************************************!*\
  !*** ./src/app/todos/filter/filter.model.ts ***!
  \**********************************************/
/*! exports provided: VISIBILITY_FILTER, initialFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VISIBILITY_FILTER", function() { return VISIBILITY_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialFilters", function() { return initialFilters; });
var VISIBILITY_FILTER;
(function (VISIBILITY_FILTER) {
    VISIBILITY_FILTER["SHOW_COMPLETED"] = "SHOW_COMPLETED";
    VISIBILITY_FILTER["SHOW_ACTIVE"] = "SHOW_ACTIVE";
    VISIBILITY_FILTER["SHOW_ALL"] = "SHOW_ALL";
})(VISIBILITY_FILTER || (VISIBILITY_FILTER = {}));
var initialFilters = [
    { label: 'All', value: VISIBILITY_FILTER.SHOW_ALL },
    { label: 'Completed', value: VISIBILITY_FILTER.SHOW_COMPLETED },
    { label: 'Active', value: VISIBILITY_FILTER.SHOW_ACTIVE }
];


/***/ }),

/***/ "./src/app/todos/page/page.component.html":
/*!************************************************!*\
  !*** ./src/app/todos/page/page.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h4>\n    Todos\n  </h4>\n  <h5>\n    Welcome to todos\n  </h5>\n  <div class=\"content\">\n    <div>\n\n      <div class=\"input-field\">\n        <i class=\"material-icons prefix\">add_alarm</i>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Add Todo...\" #input (keydown.enter)=\"add(input)\">\n      </div>\n\n      <app-todos-filter (update)=\"changeFilter($event)\" [filters]=\"filters\" [active]=\"activeFilter$ | async\">\n      </app-todos-filter>\n\n      <label>\n        <input type=\"checkbox\" (change)=\"checkAll($event)\" [checked]=\"checkAll$ | async\" />\n        <span>Select All</span>\n      </label>\n\n      <app-todos [todos]=\"todos$ | async\" (delete)=\"delete($event)\" (complete)=\"complete($event)\"></app-todos>\n\n      <div class=\"flex align-center\">\n        <button class=\"btn waves-effect waves-light\" [class.disabled]=\"!stateHistory.hasPast\" (click)=\"undo()\">Undo\n          <i class=\"material-icons right\">undo</i>\n        </button>\n\n        <button class=\"btn waves-effect waves-light\" [class.disabled]=\"!stateHistory.hasFuture\" (click)=\"redo()\">Redo\n          <i class=\"material-icons right\">redo</i>\n        </button>\n\n      </div>\n\n    </div>\n\n    <section>\n      <h4>Todos - Entity History</h4>\n      <table>\n        <thead>\n          <tr>\n            <th>Id</th>\n            <th>Title</th>\n            <th>Completed</th>\n            <th>Undo</th>\n            <th>Redo</th>\n          </tr>\n        </thead>\n\n        <tbody>\n          <tr *ngFor=\"let todo of todos$ | async\">\n            <td>{{todo.id}}</td>\n            <td>{{todo.title}}</td>\n            <td>\n              <label>\n                <input type=\"checkbox\" [checked]=\"todo.completed\" (change)=\"complete2($event, todo)\" />\n                <span></span>\n              </label>\n            </td>\n            <td>\n              <a class=\"btn-floating\" [class.disabled]=\"!stateHistoryEntity.hasPast(todo.id)\"><i class=\"material-icons\"\n                  (click)=\"undo(todo.id)\">undo</i></a>\n            </td>\n            <td>\n              <a class=\"btn-floating\" [class.disabled]=\"!stateHistoryEntity.hasFuture(todo.id)\"><i\n                  class=\"material-icons\" (click)=\"redo(todo.id)\">redo</i></a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n    </section>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/todos/page/page.component.scss":
/*!************************************************!*\
  !*** ./src/app/todos/page/page.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL3BhZ2UvcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/todos/page/page.component.ts":
/*!**********************************************!*\
  !*** ./src/app/todos/page/page.component.ts ***!
  \**********************************************/
/*! exports provided: TodosPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosPageComponent", function() { return TodosPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _filter_filter_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filter/filter.model */ "./src/app/todos/filter/filter.model.ts");
/* harmony import */ var _state_todos_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state/todos.query */ "./src/app/todos/state/todos.query.ts");
/* harmony import */ var _state_todos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/todos.service */ "./src/app/todos/state/todos.service.ts");







var TodosPageComponent = /** @class */ (function () {
    function TodosPageComponent(todosQuery, todosService) {
        this.todosQuery = todosQuery;
        this.todosService = todosService;
        this.filters = _filter_filter_model__WEBPACK_IMPORTED_MODULE_4__["initialFilters"];
    }
    TodosPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todos$ = this.todosQuery.selectVisibleTodos$;
        this.activeFilter$ = this.todosQuery.selectVisibilityFilter$;
        this.checkAll$ = this.todosQuery.checkAll$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (numCompleted) { return numCompleted && numCompleted === _this.todosQuery.getCount(); }));
        this.stateHistory = new _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StateHistoryPlugin"](this.todosQuery);
        this.stateHistoryEntity = new _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStateHistoryPlugin"](this.todosQuery);
    };
    TodosPageComponent.prototype.undo = function (id) {
        if (Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(id)) {
            this.stateHistory.undo();
        }
        else {
            this.stateHistoryEntity.undo(id);
        }
    };
    TodosPageComponent.prototype.redo = function (id) {
        if (Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(id)) {
            this.stateHistory.redo();
        }
        else {
            this.stateHistoryEntity.redo(id);
        }
    };
    TodosPageComponent.prototype.add = function (input) {
        this.todosService.add(input.value);
        input.value = '';
    };
    TodosPageComponent.prototype.complete = function (todo) {
        this.stateHistory.ignoreNext();
        this.todosService.complete(todo);
    };
    TodosPageComponent.prototype.complete2 = function (event, todo) {
        var _todo = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, todo, { completed: event.target.checked });
        this.todosService.complete(_todo);
    };
    TodosPageComponent.prototype.delete = function (id) {
        this.todosService.delete(id);
    };
    TodosPageComponent.prototype.changeFilter = function (filter) {
        this.todosService.updateFilter(filter);
    };
    TodosPageComponent.prototype.checkAll = function (_a) {
        var target = _a.target;
        this.todosService.checkAll(target.checked);
    };
    TodosPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todos-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/todos/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.scss */ "./src/app/todos/page/page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_state_todos_query__WEBPACK_IMPORTED_MODULE_5__["TodosQuery"], _state_todos_service__WEBPACK_IMPORTED_MODULE_6__["TodosService"]])
    ], TodosPageComponent);
    return TodosPageComponent;
}());



/***/ }),

/***/ "./src/app/todos/state/todo.model.ts":
/*!*******************************************!*\
  !*** ./src/app/todos/state/todo.model.ts ***!
  \*******************************************/
/*! exports provided: createTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTodo", function() { return createTodo; });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");

function createTodo(title) {
    return {
        id: Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_0__["guid"])(),
        title: title,
        completed: false
    };
}


/***/ }),

/***/ "./src/app/todos/state/todos.query.ts":
/*!********************************************!*\
  !*** ./src/app/todos/state/todos.query.ts ***!
  \********************************************/
/*! exports provided: TodosQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosQuery", function() { return TodosQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _filter_filter_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../filter/filter.model */ "./src/app/todos/filter/filter.model.ts");
/* harmony import */ var _todos_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todos.store */ "./src/app/todos/state/todos.store.ts");







var TodosQuery = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TodosQuery, _super);
    function TodosQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        _this.selectVisibilityFilter$ = _this.select(function (state) { return state.ui.filter; });
        _this.selectVisibleTodos$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(_this.selectVisibilityFilter$, _this.selectAll()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var filter = _a[0], todos = _a[1];
            return _this.getVisibleTodos(filter, todos);
        }));
        _this.checkAll$ = _this.selectCount(function (entity) { return entity.completed; });
        return _this;
    }
    TodosQuery.prototype.getVisibleTodos = function (filter, todos) {
        switch (filter) {
            case _filter_filter_model__WEBPACK_IMPORTED_MODULE_5__["VISIBILITY_FILTER"].SHOW_COMPLETED:
                return todos.filter(function (t) { return t.completed; });
            case _filter_filter_model__WEBPACK_IMPORTED_MODULE_5__["VISIBILITY_FILTER"].SHOW_ACTIVE:
                return todos.filter(function (t) { return !t.completed; });
            default:
                return todos;
        }
    };
    TodosQuery = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_todos_store__WEBPACK_IMPORTED_MODULE_6__["TodosStore"]])
    ], TodosQuery);
    return TodosQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["QueryEntity"]));



/***/ }),

/***/ "./src/app/todos/state/todos.service.ts":
/*!**********************************************!*\
  !*** ./src/app/todos/state/todos.service.ts ***!
  \**********************************************/
/*! exports provided: TodosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosService", function() { return TodosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _filter_filter_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filter/filter.model */ "./src/app/todos/filter/filter.model.ts");
/* harmony import */ var _todo_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo.model */ "./src/app/todos/state/todo.model.ts");
/* harmony import */ var _todos_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todos.store */ "./src/app/todos/state/todos.store.ts");






var TodosService = /** @class */ (function () {
    function TodosService(todosStore) {
        this.todosStore = todosStore;
    }
    TodosService.prototype.updateFilter = function (filter) {
        this.todosStore.update({
            ui: {
                filter: filter
            }
        });
    };
    TodosService.prototype.complete = function (_a) {
        var id = _a.id, completed = _a.completed;
        this.todosStore.update(id, { completed: completed });
    };
    TodosService.prototype.add = function (title) {
        var todo = Object(_todo_model__WEBPACK_IMPORTED_MODULE_4__["createTodo"])(title);
        this.todosStore.add(todo);
    };
    TodosService.prototype.delete = function (id) {
        this.todosStore.remove(id);
    };
    TodosService.prototype.checkAll = function (completed) {
        this.todosStore.update(null, {
            completed: completed
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["action"])('Update filter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TodosService.prototype, "updateFilter", null);
    TodosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_todos_store__WEBPACK_IMPORTED_MODULE_5__["TodosStore"]])
    ], TodosService);
    return TodosService;
}());



/***/ }),

/***/ "./src/app/todos/state/todos.store.ts":
/*!********************************************!*\
  !*** ./src/app/todos/state/todos.store.ts ***!
  \********************************************/
/*! exports provided: TodosStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosStore", function() { return TodosStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _filter_filter_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filter/filter.model */ "./src/app/todos/filter/filter.model.ts");




var initialState = {
    ui: { filter: _filter_filter_model__WEBPACK_IMPORTED_MODULE_3__["VISIBILITY_FILTER"].SHOW_ALL }
};
var TodosStore = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TodosStore, _super);
    function TodosStore() {
        return _super.call(this, initialState) || this;
    }
    TodosStore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({
            name: 'todos'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TodosStore);
    return TodosStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"]));



/***/ }),

/***/ "./src/app/todos/todo/todo.component.html":
/*!************************************************!*\
  !*** ./src/app/todos/todo/todo.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex align-center sb\">\n  <div class=\"flex\">\n    <label>\n      <input type=\"checkbox\" [formControl]=\"control\" />\n      <span></span>\n    </label>\n    {{todo.title}}\n  </div>\n  <a class=\"btn waves-effect waves-light red btn-small btn-floating\">\n    <i class=\"material-icons\" (click)=\"delete.emit(todo.id)\">delete_forever</i>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/todos/todo/todo.component.scss":
/*!************************************************!*\
  !*** ./src/app/todos/todo/todo.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL3RvZG8vdG9kby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/todos/todo/todo.component.ts":
/*!**********************************************!*\
  !*** ./src/app/todos/todo/todo.component.ts ***!
  \**********************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/fesm5/ngx-take-until-destroy.js");




var TodoComponent = /** @class */ (function () {
    function TodoComponent() {
        this.complete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.todo.completed);
        this.control.valueChanges.pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this)).subscribe(function (completed) {
            _this.complete.emit(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.todo, { completed: completed }));
        });
    };
    TodoComponent.prototype.ngOnDestroy = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TodoComponent.prototype, "todo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TodoComponent.prototype, "complete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TodoComponent.prototype, "delete", void 0);
    TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/todos/todo/todo.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./todo.component.scss */ "./src/app/todos/todo/todo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/todos/todos.module.ts":
/*!***************************************!*\
  !*** ./src/app/todos/todos.module.ts ***!
  \***************************************/
/*! exports provided: TodosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosModule", function() { return TodosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/todos/filter/filter.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/page.component */ "./src/app/todos/page/page.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todos/todo/todo.component.ts");
/* harmony import */ var _todos_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todos.routing.module */ "./src/app/todos/todos.routing.module.ts");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todos/todos.component */ "./src/app/todos/todos/todos.component.ts");








var TodosModule = /** @class */ (function () {
    function TodosModule() {
    }
    TodosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_todos_todos_component__WEBPACK_IMPORTED_MODULE_7__["TodosComponent"], _todo_todo_component__WEBPACK_IMPORTED_MODULE_5__["TodoComponent"], _filter_filter_component__WEBPACK_IMPORTED_MODULE_3__["TodosFilterComponent"], _page_page_component__WEBPACK_IMPORTED_MODULE_4__["TodosPageComponent"]],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _todos_routing_module__WEBPACK_IMPORTED_MODULE_6__["TodosRoutingModule"]]
        })
    ], TodosModule);
    return TodosModule;
}());



/***/ }),

/***/ "./src/app/todos/todos.routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/todos/todos.routing.module.ts ***!
  \***********************************************/
/*! exports provided: TodosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosRoutingModule", function() { return TodosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/page.component */ "./src/app/todos/page/page.component.ts");




var routes = [
    {
        path: '',
        component: _page_page_component__WEBPACK_IMPORTED_MODULE_3__["TodosPageComponent"]
    }
];
var TodosRoutingModule = /** @class */ (function () {
    function TodosRoutingModule() {
    }
    TodosRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TodosRoutingModule);
    return TodosRoutingModule;
}());



/***/ }),

/***/ "./src/app/todos/todos/todos.component.html":
/*!**************************************************!*\
  !*** ./src/app/todos/todos/todos.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"collection with-header\">\n  <h4 class=\"collection-header\">Todos:</h4>\n  <app-todo *ngFor=\"let todo of todos;\" class=\"collection-item\" (delete)=\"delete.emit($event)\"\n    (complete)=\"complete.emit($event)\" [todo]=\"todo\"></app-todo>\n</div>"

/***/ }),

/***/ "./src/app/todos/todos/todos.component.scss":
/*!**************************************************!*\
  !*** ./src/app/todos/todos/todos.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL3RvZG9zL3RvZG9zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/todos/todos/todos.component.ts":
/*!************************************************!*\
  !*** ./src/app/todos/todos/todos.component.ts ***!
  \************************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TodosComponent = /** @class */ (function () {
    function TodosComponent() {
        this.complete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TodosComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TodosComponent.prototype, "todos", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TodosComponent.prototype, "complete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TodosComponent.prototype, "delete", void 0);
    TodosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todos',
            template: __webpack_require__(/*! ./todos.component.html */ "./src/app/todos/todos/todos.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./todos.component.scss */ "./src/app/todos/todos/todos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TodosComponent);
    return TodosComponent;
}());



/***/ })

}]);
//# sourceMappingURL=todos-todos-module.js.map