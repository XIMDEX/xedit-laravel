(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.ts":
/*!************************!*\
  !*** ./src/app/api.ts ***!
  \************************/
/*! exports provided: Api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/api */ "./src/app/core/api.ts");


var Api = /** @class */ (function () {
    function Api() {
    }
    /****************** API ENDPOINTS ******************/
    Api.getMapperUrl = function () {
        return 'documents.mapper';
    };
    Api.getDocumentUrl = function () {
        return 'documents.get';
    };
    Api.getSaveUrl = function () {
        return 'documents.save';
    };
    Api.getResourceUrl = function () {
        return 'resources.image';
    };
    Api.getTreeUrl = function () {
        return 'resources.tree';
    };
    Api.getInfoNodeUrl = function () {
        return 'resources.get';
    };
    /****************** API METHODS ******************/
    Api.getMapper = function (http, url, params, successCallback, errorCallback) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return _core_api__WEBPACK_IMPORTED_MODULE_1__["default"].request(http, url, params, {}, headers, successCallback, errorCallback);
    };
    Api.getDocument = function (http, id, successCallback, errorCallback) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return _core_api__WEBPACK_IMPORTED_MODULE_1__["default"].request(http, this.getDocumentUrl(), { id: id }, {}, headers, successCallback, errorCallback);
    };
    Api.saveDocument = function (http, document, successCallback, errorCallback) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return _core_api__WEBPACK_IMPORTED_MODULE_1__["default"].request(http, this.getSaveUrl(), {}, document, headers, successCallback, errorCallback, {}, 'post');
    };
    Api.getTreeChildren = function (http, nodeId, type, successCallback, errorCallback, extra) {
        if (extra === void 0) { extra = {}; }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return _core_api__WEBPACK_IMPORTED_MODULE_1__["default"].request(http, this.getTreeUrl(), { id: nodeId, type: type }, null, headers, successCallback, errorCallback, extra);
    };
    Api.getInfoNode = function (http, nodeId, type, successCallback, errorCallback, extra) {
        if (extra === void 0) { extra = {}; }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var endpoint = nodeId;
        if (!nodeId.startsWith('http')) {
            endpoint = this.getInfoNodeUrl();
        }
        return _core_api__WEBPACK_IMPORTED_MODULE_1__["default"].request(http, endpoint, { id: nodeId, type: type }, null, headers, successCallback, errorCallback, extra);
    };
    return Api;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    enableTracing: true,
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "<ngx-loading [show]=\"loading\" [config]=\"{}\"></ngx-loading>\n<simple-notifications [options]=\"{}\"></simple-notifications>\n<app-taskbar [ngClass]=\"{ embebed: true }\"></app-taskbar>\n<app-editor [ngClass]=\"{ embebed: false }\"></app-editor>\n<!-- <app-dam *ngIf=\"hasDam()\" [popup]=\"true\" (onSelect)=\"handleSelect($event)\"></app-dam> -->\n<app-xdam></app-xdam>\n<app-tree-modal></app-tree-modal>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  display: flex;\n  overflow: hidden;\n  flex-direction: column; }\n:host > main {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: row; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdG92YXIvZGV2ZWxvcC93ZWIveGVkaXQvc3JjL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvc2Fzcy9mb250cy9fbGF0by5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsc0VBQVk7QUFGWiw4RUFBQTtBQ0FBLGNBQUE7QUFDQTtFQUNJLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDhJQUE4STtFQUM5SSxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0SUFBNEk7RUFDNUkseUtBQXlLLEVBQUE7QUFFM0ssY0FBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0hBQStIO0VBQy9ILG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDZIQUE2SDtFQUM3SCx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0SUFBNEk7RUFDNUksbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMElBQTBJO0VBQzFJLHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLCtIQUErSDtFQUMvSCxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0SEFBNEg7RUFDNUgseUtBQXlLLEVBQUE7QUFFM0ssY0FBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0hBQStIO0VBQy9ILG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRIQUE0SDtFQUM1SCx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw2SEFBNkg7RUFDN0gsbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMEhBQTBIO0VBQzFILHlLQUF5SyxFQUFBO0FDM0Y3SztFQUNJLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsc0JBQXNCLEVBQUE7QUFIMUI7SUFNUSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCAnfnNhc3MvZm9udHMvbGF0byc7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjAuNi9jc3MvYWxsLmNzcycpO1xuQGltcG9ydCAnfnNhc3MvbWl4aW5zJztcblxuJGJsYWNrLWRhcmtlcjogIzIwMjYyNDtcbiRibGFjay1kYXJrOiAjM2Y0OTQ2O1xuJGJsYWNrLXdhcm06ICM0NzRkNGI7XG4kYmxhY2stbGlnaHQ6ICM1ZjYzNjI7XG5cbiRncmVlbi1kYXJrZXI6ICMxZTU3NGU7XG4kZ3JlZW4tZGFyazogIzNhOWU4ZjtcbiRncmVlbi13YXJtOiAjM2VhMDkxO1xuJGdyZWVuLWxpZ2h0OiAjNDRjNGIxO1xuXG4kYmx1ZS1kYXJrOiAjMjE0ZTYxO1xuJGJsdWUtbGlnaHQ6ICMyOTVlNzU7XG4kYmx1ZS1saWdodGVyOiAjMzE3MThkO1xuXG4kd2hpdGUtZGFya2VyOiAjOTU5NTk1O1xuJHdoaXRlLWRhcms6ICNjNGMyYzI7XG4kd2hpdGUtd2FybTogI2UxZTRlNjtcbiR3aGl0ZS1saWdodDogI2VkZWZmMjtcbiR3aGl0ZS1saWdodGVyOiAjZmNmY2ZjO1xuJHdoaXRlLXhpbWRleDogI2Y5ZjlmOTtcblxuJHJlZC13YXJtOiAjZDEzNzM3O1xuJHJlZC1saWdodDogI2RiNDk0OTtcblxuJHRhc2tiYXItaGVpZ2h0OiA0NnB4O1xuJHRhc2tiYXItbGluZS1oZWlnaHQ6IDQwcHg7XG4kdGFicy1oZWlnaHQ6IDM1cHg7XG4kdGFicy1oZWlnaHQtc21hbGw6IDMwcHg7XG5cbiRmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuXG4kZm9udC1zaXplLXNtYWxsOiAxMnB4O1xuJGZvbnQtc2l6ZS1kZWZhdWx0OiAxNHB4O1xuJGZvbnQtc2l6ZS1iaWc6IDE2cHg7XG5cbiRpY29uLXNpemUtZGVmYXVsdDogMThweDtcblxuJGZvbnQtZGVmYXVsdDogbm9ybWFsICRmb250LXNpemUtZGVmYXVsdCAkZm9udC1mYW1pbHk7XG5cbkBpbXBvcnQgJy4vdmFyaWFibGVzL2NvbG9ycyc7XG4iLCIvKiBsYXRpbi1leHQgKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBMaWdodCBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tTGlnaHRJdGFsaWMnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnVfdzRCTVVUUEhqeHNJOXcyX0ZRZnR4OTg5N3N4Wi53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBMaWdodCBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tTGlnaHRJdGFsaWMnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnVfdzRCTVVUUEhqeHNJOXcyX0d3ZnR4OTg5N2cud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEl0YWxpYycpLCBsb2NhbCgnTGF0by1JdGFsaWMnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU4dzRCTVVUUEhqeHNBVWktcU5pWGc3ZVUwLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEl0YWxpYycpLCBsb2NhbCgnTGF0by1JdGFsaWMnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU4dzRCTVVUUEhqeHNBWEMtcU5pWGc3US53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gQm9sZCBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tQm9sZEl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dV93NEJNVVRQSGp4c0k1d3FfRlFmdHg5ODk3c3haLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEJvbGQgSXRhbGljJyksIGxvY2FsKCdMYXRvLUJvbGRJdGFsaWMnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnVfdzRCTVVUUEhqeHNJNXdxX0d3ZnR4OTg5N2cud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIExpZ2h0JyksIGxvY2FsKCdMYXRvLUxpZ2h0JyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OXc0Qk1VVFBIaDdVU1N3YVBHUTNxNWQwTjd3LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIExpZ2h0JyksIGxvY2FsKCdMYXRvLUxpZ2h0JyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OXc0Qk1VVFBIaDdVU1N3aVBHUTNxNWQwLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBSZWd1bGFyJyksIGxvY2FsKCdMYXRvLVJlZ3VsYXInKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnV5dzRCTVVUUEhqeEF3WGlXdEZDZlE3QS53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBSZWd1bGFyJyksIGxvY2FsKCdMYXRvLVJlZ3VsYXInKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnV5dzRCTVVUUEhqeDR3WGlXdEZDYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gQm9sZCcpLCBsb2NhbCgnTGF0by1Cb2xkJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OXc0Qk1VVFBIaDZVVlN3YVBHUTNxNWQwTjd3LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEJvbGQnKSwgbG9jYWwoJ0xhdG8tQm9sZCcpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTl3NEJNVVRQSGg2VVZTd2lQR1EzcTVkMC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9IiwiQGltcG9ydCAnfnNhc3MvdmFyaWFibGVzJztcblxuXG46aG9zdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgID4gbWFpbiB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG59XG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/api */ "./src/app/api.ts");
/* harmony import */ var _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_state_service_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/state-service/state.service */ "./src/app/services/state-service/state.service.ts");
/* harmony import */ var _core_mappers_xedit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/mappers/xedit */ "./src/app/core/mappers/xedit.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppComponent = /** @class */ (function () {
    function AppComponent(_editorService, _stateService, http, route, cdRef) {
        this._editorService = _editorService;
        this._stateService = _stateService;
        this.http = http;
        this.route = route;
        this.cdRef = cdRef;
        this.title = 'app';
    }
    /************************************** Life Cycle **************************************/
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingSuscribe = this._editorService.isLoading().subscribe(function (loading) {
            _this.loading = loading;
        });
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])(_core_mappers_xedit__WEBPACK_IMPORTED_MODULE_7__["Xedit"].BASE, window)) {
            // TODO Validate $xedit object
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(_core_mappers_xedit__WEBPACK_IMPORTED_MODULE_7__["Xedit"].getData()) && _core_mappers_xedit__WEBPACK_IMPORTED_MODULE_7__["Xedit"].getData() !== '') {
                this.setDocument(_core_mappers_xedit__WEBPACK_IMPORTED_MODULE_7__["Xedit"].getData());
            }
            else {
                this.getDocument(_core_mappers_xedit__WEBPACK_IMPORTED_MODULE_7__["Xedit"].getDocument().id, Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('view', _core_mappers_xedit__WEBPACK_IMPORTED_MODULE_7__["Xedit"].getDocument()) ? _core_mappers_xedit__WEBPACK_IMPORTED_MODULE_7__["Xedit"].getDocument().view : null);
            }
        }
        else {
            this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["skip"])(1)).subscribe(function (_params) {
                var params = Object.assign({}, _params);
                if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(params['token[field]']) || Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(params['token[value]'])) {
                    console.log('Not authentication');
                }
                if (params.url === undefined || Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(params.url)) {
                    console.error('API NO DISPONIBLE');
                }
                else {
                    _this._editorService.setLoading(true);
                    var url = params.url;
                    delete params.url;
                    var type = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('type', params) ? params.type : null;
                    delete params.type;
                    if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(params['token[field]']) && !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(params['token[value]'])) {
                        params[params['token[field]']] = params['token[value]'];
                    }
                    delete params['token[field]'];
                    delete params['token[value]'];
                    _this.getMapper(url, params, type);
                }
            });
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.loadingSuscribe.unsubscribe();
        this.handleSelectSuscribe.unsubscribe();
    };
    AppComponent.prototype.hasDam = function () {
        return _core_mappers_xedit__WEBPACK_IMPORTED_MODULE_7__["Xedit"].getDam() === 'dam';
    };
    /************************************** Private Methods **************************************/
    AppComponent.prototype.getMapper = function (url, params, view) {
        var _this = this;
        var error = function () {
            console.log('error');
            _this._editorService.setLoading(false);
        };
        var success = function (result) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('status', result) && result.status === 0) {
                window['$xedit'] = result.response;
                _this.getDocument(params.id, view);
            }
            else {
                error();
                _this._editorService.setLoading(false);
            }
        };
        return _app_api__WEBPACK_IMPORTED_MODULE_3__["Api"].getMapper(this.http, url, params, success, error);
    };
    AppComponent.prototype.getDocument = function (id, view) {
        var _this = this;
        var error = function () {
            console.log('error');
            _this._editorService.setLoading(false);
        };
        var success = function (result) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('status', result) && result.status === 0) {
                _this.setDocument(result.response, view != null ? view : null);
            }
            else {
                error();
            }
        };
        this._editorService.setLoading(true);
        return _app_api__WEBPACK_IMPORTED_MODULE_3__["Api"].getDocument(this.http, id, success, error);
    };
    AppComponent.prototype.setDocument = function (nodes, view) {
        if (view === void 0) { view = null; }
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(view) || !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["contains"])(view, ['wysiwyg', 'text'])) {
            view = 'wysiwyg';
        }
        this._editorService.createFile(nodes);
        this._stateService.setAvailableViews(['metadata', 'wysiwyg', 'text']);
        this._stateService.setCurrentView(view);
        this._editorService.setLoading(false);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_4__["EditorService"],
            _services_state_service_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
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
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/fesm5/ngx-loading.js");
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-ace-editor */ "./node_modules/ng2-ace-editor/index.js");
/* harmony import */ var _elements_blocks_acordion_acordion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/blocks/acordion/acordion.component */ "./src/app/elements/blocks/acordion/acordion.component.ts");
/* harmony import */ var angular2_draggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-draggable */ "./node_modules/angular2-draggable/fesm5/angular2-draggable.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_autoload_modules_service_autoload_modules_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/autoload-modules-service/autoload-modules.service */ "./src/app/services/autoload-modules-service/autoload-modules.service.ts");
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/breadcrumb/breadcrumb.component */ "./src/app/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _elements_forms_button_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./elements/forms/button/button.component */ "./src/app/elements/forms/button/button.component.ts");
/* harmony import */ var _elements_forms_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./elements/forms/checkbox/checkbox.component */ "./src/app/elements/forms/checkbox/checkbox.component.ts");
/* harmony import */ var ng4_click_outside__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng4-click-outside */ "./node_modules/ng4-click-outside/lib/index.js");
/* harmony import */ var ng4_click_outside__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng4_click_outside__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var angular2_collapsible__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular2-collapsible */ "./node_modules/angular2-collapsible/fesm5/angular2-collapsible.js");
/* harmony import */ var _components_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/context-menu/context-menu.component */ "./src/app/components/context-menu/context-menu.component.ts");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var _pipes_debug_debug_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @pipes/debug/debug.pipe */ "./src/app/pipes/debug/debug.pipe.ts");
/* harmony import */ var app_elements_forms_dynform_dyn_form_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/elements/forms/dynform/dyn-form.module */ "./src/app/elements/forms/dynform/dyn-form.module.ts");
/* harmony import */ var _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @components/editor/editor.component */ "./src/app/components/editor/editor.component.ts");
/* harmony import */ var _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
/* harmony import */ var _components_editor_views_editor_view_editor_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/editor/views/editor-view/editor-view.component */ "./src/app/components/editor/views/editor-view/editor-view.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _elements_xedit_image_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./elements/xedit/image/image-modal/image-modal.component */ "./src/app/elements/xedit/image/image-modal/image-modal.component.ts");
/* harmony import */ var lib_images__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! lib/images */ "./src/lib/images/index.ts");
/* harmony import */ var _elements_forms_input_acordion_input_acordion_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./elements/forms/input-acordion/input-acordion.component */ "./src/app/elements/forms/input-acordion/input-acordion.component.ts");
/* harmony import */ var _pipes_keys_keys_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @pipes/keys/keys.pipe */ "./src/app/pipes/keys/keys.pipe.ts");
/* harmony import */ var _elements_forms_listbox_listbox_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./elements/forms/listbox/listbox.component */ "./src/app/elements/forms/listbox/listbox.component.ts");
/* harmony import */ var _components_editor_views_metadata_view_metadata_view_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/editor/views/metadata-view/metadata-view.component */ "./src/app/components/editor/views/metadata-view/metadata-view.component.ts");
/* harmony import */ var _elements_forms_multi_input_acordion_multi_input_acordion_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./elements/forms/multi-input-acordion/multi-input-acordion.component */ "./src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.ts");
/* harmony import */ var _elements_forms_multi_input_multi_input_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @elements/forms/multi-input/multi-input.component */ "./src/app/elements/forms/multi-input/multi-input.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var _factories_node_factory_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./factories/node-factory.service */ "./src/app/factories/node-factory.service.ts");
/* harmony import */ var _services_node_service_node_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/node-service/node.service */ "./src/app/services/node-service/node.service.ts");
/* harmony import */ var _components_editor_properties_area_properties_area_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @components/editor/properties-area/properties-area.component */ "./src/app/components/editor/properties-area/properties-area.component.ts");
/* harmony import */ var _components_taskbar_properties_global_view_properties_global_view_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @components/taskbar/properties-global-view/properties-global-view.component */ "./src/app/components/taskbar/properties-global-view/properties-global-view.component.ts");
/* harmony import */ var _components_editor_properties_area_properties_local_view_properties_local_view_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @components/editor/properties-area/properties-local-view/properties-local-view.component */ "./src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.ts");
/* harmony import */ var _components_editor_properties_area_properties_toolbar_properties_toolbar_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/editor/properties-area/properties-toolbar/properties-toolbar.component */ "./src/app/components/editor/properties-area/properties-toolbar/properties-toolbar.component.ts");
/* harmony import */ var _services_resource_resource_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/resource/resource.service */ "./src/app/services/resource/resource.service.ts");
/* harmony import */ var _core_runtime_html_compiler_runtime_html_compiler_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./core/runtime-html-compiler/runtime-html-compiler.component */ "./src/app/core/runtime-html-compiler/runtime-html-compiler.component.ts");
/* harmony import */ var _pipes_inner_html_safe_html_pipe__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pipes/inner-html/safe-html.pipe */ "./src/app/pipes/inner-html/safe-html.pipe.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _components_taskbar_state_controller_state_controller_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/taskbar/state-controller/state-controller.component */ "./src/app/components/taskbar/state-controller/state-controller.component.ts");
/* harmony import */ var _services_state_service_state_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @services/state-service/state.service */ "./src/app/services/state-service/state.service.ts");
/* harmony import */ var _components_taskbar_taskbar_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @components/taskbar/taskbar.component */ "./src/app/components/taskbar/taskbar.component.ts");
/* harmony import */ var _components_editor_views_text_view_text_view_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @components/editor/views/text-view/text-view.component */ "./src/app/components/editor/views/text-view/text-view.component.ts");
/* harmony import */ var _elements_blocks_tree_tree_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./elements/blocks/tree/tree.component */ "./src/app/elements/blocks/tree/tree.component.ts");
/* harmony import */ var _elements_blocks_tree_modal_tree_modal_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./elements/blocks/tree-modal/tree-modal.component */ "./src/app/elements/blocks/tree-modal/tree-modal.component.ts");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! angular-tree-component */ "./node_modules/angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var _pipes_url_url_pipe__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @pipes/url/url.pipe */ "./src/app/pipes/url/url.pipe.ts");
/* harmony import */ var _ximdex_xdam__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @ximdex/xdam */ "./node_modules/@ximdex/xdam/fesm5/ximdex-xdam.js");
/* harmony import */ var _elements_xdam_xdam_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./elements/xdam/xdam.component */ "./src/app/elements/xdam/xdam.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_32__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_taskbar_taskbar_component__WEBPACK_IMPORTED_MODULE_46__["TaskbarComponent"],
                _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_18__["EditorComponent"],
                _components_editor_properties_area_properties_local_view_properties_local_view_component__WEBPACK_IMPORTED_MODULE_38__["PropertiesLocalViewComponent"],
                _components_taskbar_properties_global_view_properties_global_view_component__WEBPACK_IMPORTED_MODULE_37__["PropertiesGlobalViewComponent"],
                _components_editor_views_text_view_text_view_component__WEBPACK_IMPORTED_MODULE_47__["TextViewComponent"],
                _pipes_url_url_pipe__WEBPACK_IMPORTED_MODULE_51__["UrlPipe"],
                _pipes_debug_debug_pipe__WEBPACK_IMPORTED_MODULE_16__["DebugPipe"],
                _pipes_keys_keys_pipe__WEBPACK_IMPORTED_MODULE_27__["KeysPipe"],
                _components_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_14__["ContextMenuComponent"],
                _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbComponent"],
                _components_editor_properties_area_properties_area_component__WEBPACK_IMPORTED_MODULE_36__["PropertiesAreaComponent"],
                _elements_forms_multi_input_multi_input_component__WEBPACK_IMPORTED_MODULE_31__["MultiInputComponent"],
                _elements_forms_multi_input_acordion_multi_input_acordion_component__WEBPACK_IMPORTED_MODULE_30__["MultiInputAcordionComponent"],
                _elements_forms_input_acordion_input_acordion_component__WEBPACK_IMPORTED_MODULE_26__["InputAcordionComponent"],
                _elements_blocks_acordion_acordion_component__WEBPACK_IMPORTED_MODULE_2__["AcordionComponent"],
                _elements_forms_button_button_component__WEBPACK_IMPORTED_MODULE_10__["ButtonComponent"],
                _elements_forms_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_11__["CheckboxComponent"],
                _elements_forms_listbox_listbox_component__WEBPACK_IMPORTED_MODULE_28__["ListboxComponent"],
                _components_taskbar_state_controller_state_controller_component__WEBPACK_IMPORTED_MODULE_44__["StateControllerComponent"],
                _elements_blocks_tree_modal_tree_modal_component__WEBPACK_IMPORTED_MODULE_49__["TreeModalComponent"],
                _elements_blocks_tree_tree_component__WEBPACK_IMPORTED_MODULE_48__["TreeComponent"],
                _components_editor_views_metadata_view_metadata_view_component__WEBPACK_IMPORTED_MODULE_29__["MetadataViewComponent"],
                _components_editor_views_editor_view_editor_view_component__WEBPACK_IMPORTED_MODULE_20__["EditorViewComponent"],
                _core_runtime_html_compiler_runtime_html_compiler_component__WEBPACK_IMPORTED_MODULE_41__["RuntimeHtmlCompilerComponent"],
                _components_editor_properties_area_properties_toolbar_properties_toolbar_component__WEBPACK_IMPORTED_MODULE_39__["PropertiesToolbarComponent"],
                _elements_xedit_image_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_24__["ImageModalComponent"],
                _pipes_inner_html_safe_html_pipe__WEBPACK_IMPORTED_MODULE_42__["SafeHtmlPipe"],
                _elements_xdam_xdam_component__WEBPACK_IMPORTED_MODULE_53__["XdamComponent"]
            ],
            imports: [
                /* 3rd party components */
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                ng2_ace_editor__WEBPACK_IMPORTED_MODULE_1__["AceEditorModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_0__["NgxLoadingModule"].forRoot({
                    animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_0__["ngxLoadingAnimationTypes"].circleSwish,
                    backdropBackgroundColour: 'rgba(0, 0, 0, 0.5)',
                    primaryColour: '#00a397',
                    secondaryColour: '#00a397',
                    tertiaryColour: '#00a397'
                }),
                ngx_contextmenu__WEBPACK_IMPORTED_MODULE_15__["ContextMenuModule"].forRoot(),
                ng4_click_outside__WEBPACK_IMPORTED_MODULE_12__["ClickOutsideModule"],
                angular2_draggable__WEBPACK_IMPORTED_MODULE_3__["AngularDraggableModule"],
                angular2_collapsible__WEBPACK_IMPORTED_MODULE_13__["CollapsibleModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"],
                angular2_notifications__WEBPACK_IMPORTED_MODULE_43__["SimpleNotificationsModule"].forRoot(),
                angular_tree_component__WEBPACK_IMPORTED_MODULE_50__["TreeModule"].forRoot(),
                ngx_smart_modal__WEBPACK_IMPORTED_MODULE_33__["NgxSmartModalModule"].forRoot(),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeModule"],
                app_elements_forms_dynform_dyn_form_module__WEBPACK_IMPORTED_MODULE_17__["DynFormModule"],
                lib_images__WEBPACK_IMPORTED_MODULE_25__["ImagesModule"],
                _ximdex_xdam__WEBPACK_IMPORTED_MODULE_52__["XDamModule"]
            ],
            providers: [_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_19__["EditorService"], _services_state_service_state_service__WEBPACK_IMPORTED_MODULE_45__["StateService"], _services_resource_resource_service__WEBPACK_IMPORTED_MODULE_40__["ResourceService"], _services_autoload_modules_service_autoload_modules_service__WEBPACK_IMPORTED_MODULE_6__["AutoloadModulesService"], _services_node_service_node_service__WEBPACK_IMPORTED_MODULE_35__["NodeService"], _factories_node_factory_service__WEBPACK_IMPORTED_MODULE_34__["NodeFactoryService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/breadcrumb/breadcrumb.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumb.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n    <ng-container *ngFor=\"let section of breadcrumb; let i = index\">\n        <ng-template [ngIf]=\"i + 1 < breadcrumb.length\" [ngIfElse]=\"last\">\n            <li (click)=\"changeSelection(section.key)\" (contextmenu)=\"onContextMenu($event, section.target)\">\n                {{ section.name }}\n                <i class=\"fas fa-chevron-right\"></i>\n            </li>\n        </ng-template>\n        <ng-template #last>\n            <li class=\"selected\" (contextmenu)=\"onContextMenu($event, section.target)\">\n                {{ section.name }}\n            </li>\n        </ng-template>\n    </ng-container>\n</ul>\n<context-menu #myContextMenu>\n    <ng-template\n        *ngFor=\"let action of contextMenuActions\"\n        contextMenuItem\n        let-item\n        [visible]=\"action.visible\"\n        [enabled]=\"action.enabled\"\n        [divider]=\"action.divider\"\n        (execute)=\"action.click()\"\n    >\n        {{ action.html() }}\n    </ng-template>\n</context-menu>\n<img class=\"logo\" src=\"./assets/img/logo_xim.png\" alt=\"Ximdex logo\" />\n"

/***/ }),

/***/ "./src/app/components/breadcrumb/breadcrumb.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumb.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  position: relative;\n  z-index: 5;\n  display: flex;\n  flex-direction: row;\n  box-shadow: 0px 3px 11px 0px rgba(0, 0, 0, 0.57);\n  min-height: 30px;\n  max-height: 30px;\n  background-color: #edeff2;\n  font: normal 14px \"Lato\", sans-serif; }\n:host > ul {\n    display: flex;\n    flex-direction: row;\n    align-content: center;\n    list-style: none;\n    padding: 5px 0;\n    margin: 0; }\n:host > ul > li {\n      margin: auto 5px;\n      text-transform: capitalize;\n      color: #3f4946;\n      transition: color 0.3s ease-in-out; }\n:host > ul > li > i.fas {\n        color: #3f4946;\n        margin: 0 0 0 5px; }\n:host > ul > li:not(.selected):hover {\n        cursor: pointer;\n        color: #3a9e8f; }\n:host > ul > li.selected {\n        color: #3a9e8f; }\n:host > img.logo {\n    margin: auto 0 auto auto;\n    height: 30px;\n    width: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdG92YXIvZGV2ZWxvcC93ZWIveGVkaXQvc3JjL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvc2Fzcy9mb250cy9fbGF0by5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvYXBwL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvc2Fzcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLHNFQUFZO0FBRlosOEVBQUE7QUNBQSxjQUFBO0FBQ0E7RUFDSSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw4SUFBOEk7RUFDOUksbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNElBQTRJO0VBQzVJLHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLCtIQUErSDtFQUMvSCxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw2SEFBNkg7RUFDN0gseUtBQXlLLEVBQUE7QUFFM0ssY0FBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNElBQTRJO0VBQzVJLG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDBJQUEwSTtFQUMxSSx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrSEFBK0g7RUFDL0gsbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNEhBQTRIO0VBQzVILHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLCtIQUErSDtFQUMvSCxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0SEFBNEg7RUFDNUgseUtBQXlLLEVBQUE7QUFFM0ssY0FBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNkhBQTZIO0VBQzdILG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDBIQUEwSDtFQUMxSCx5S0FBeUssRUFBQTtBQzVGN0s7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUNPbkIsZ0RBTDBCO0VEQTFCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIseUJGWWlCO0VFWGpCLG9DRnVCNEIsRUFBQTtBRWhDaEM7SUFZUSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFNBQVMsRUFBQTtBQWpCakI7TUFvQlksZ0JBQWdCO01BQ2hCLDBCQUEwQjtNQUMxQixjRmxCUTtNRW1CUixrQ0FBa0MsRUFBQTtBQXZCOUM7UUEwQmdCLGNGdEJJO1FFdUJKLGlCQUFpQixFQUFBO0FBM0JqQztRQStCZ0IsZUFBZTtRQUNmLGNGdkJJLEVBQUE7QUVUcEI7UUFvQ2dCLGNGM0JJLEVBQUE7QUVUcEI7SUEwQ1Esd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgJ35zYXNzL2ZvbnRzL2xhdG8nO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4wLjYvY3NzL2FsbC5jc3MnKTtcbkBpbXBvcnQgJ35zYXNzL21peGlucyc7XG5cbiRibGFjay1kYXJrZXI6ICMyMDI2MjQ7XG4kYmxhY2stZGFyazogIzNmNDk0NjtcbiRibGFjay13YXJtOiAjNDc0ZDRiO1xuJGJsYWNrLWxpZ2h0OiAjNWY2MzYyO1xuXG4kZ3JlZW4tZGFya2VyOiAjMWU1NzRlO1xuJGdyZWVuLWRhcms6ICMzYTllOGY7XG4kZ3JlZW4td2FybTogIzNlYTA5MTtcbiRncmVlbi1saWdodDogIzQ0YzRiMTtcblxuJGJsdWUtZGFyazogIzIxNGU2MTtcbiRibHVlLWxpZ2h0OiAjMjk1ZTc1O1xuJGJsdWUtbGlnaHRlcjogIzMxNzE4ZDtcblxuJHdoaXRlLWRhcmtlcjogIzk1OTU5NTtcbiR3aGl0ZS1kYXJrOiAjYzRjMmMyO1xuJHdoaXRlLXdhcm06ICNlMWU0ZTY7XG4kd2hpdGUtbGlnaHQ6ICNlZGVmZjI7XG4kd2hpdGUtbGlnaHRlcjogI2ZjZmNmYztcbiR3aGl0ZS14aW1kZXg6ICNmOWY5Zjk7XG5cbiRyZWQtd2FybTogI2QxMzczNztcbiRyZWQtbGlnaHQ6ICNkYjQ5NDk7XG5cbiR0YXNrYmFyLWhlaWdodDogNDZweDtcbiR0YXNrYmFyLWxpbmUtaGVpZ2h0OiA0MHB4O1xuJHRhYnMtaGVpZ2h0OiAzNXB4O1xuJHRhYnMtaGVpZ2h0LXNtYWxsOiAzMHB4O1xuXG4kZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcblxuJGZvbnQtc2l6ZS1zbWFsbDogMTJweDtcbiRmb250LXNpemUtZGVmYXVsdDogMTRweDtcbiRmb250LXNpemUtYmlnOiAxNnB4O1xuXG4kaWNvbi1zaXplLWRlZmF1bHQ6IDE4cHg7XG5cbiRmb250LWRlZmF1bHQ6IG5vcm1hbCAkZm9udC1zaXplLWRlZmF1bHQgJGZvbnQtZmFtaWx5O1xuXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy9jb2xvcnMnO1xuIiwiLyogbGF0aW4tZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gTGlnaHQgSXRhbGljJyksIGxvY2FsKCdMYXRvLUxpZ2h0SXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTl3Ml9GUWZ0eDk4OTdzeFoud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gTGlnaHQgSXRhbGljJyksIGxvY2FsKCdMYXRvLUxpZ2h0SXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTl3Ml9Hd2Z0eDk4OTdnLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OHc0Qk1VVFBIanhzQVVpLXFOaVhnN2VVMC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OHc0Qk1VVFBIanhzQVhDLXFOaVhnN1Eud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEJvbGQgSXRhbGljJyksIGxvY2FsKCdMYXRvLUJvbGRJdGFsaWMnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnVfdzRCTVVUUEhqeHNJNXdxX0ZRZnR4OTg5N3N4Wi53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkIEl0YWxpYycpLCBsb2NhbCgnTGF0by1Cb2xkSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTV3cV9Hd2Z0eDk4OTdnLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBMaWdodCcpLCBsb2NhbCgnTGF0by1MaWdodCcpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTl3NEJNVVRQSGg3VVNTd2FQR1EzcTVkME43dy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBMaWdodCcpLCBsb2NhbCgnTGF0by1MaWdodCcpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTl3NEJNVVRQSGg3VVNTd2lQR1EzcTVkMC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gUmVndWxhcicpLCBsb2NhbCgnTGF0by1SZWd1bGFyJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1eXc0Qk1VVFBIanhBd1hpV3RGQ2ZRN0Eud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gUmVndWxhcicpLCBsb2NhbCgnTGF0by1SZWd1bGFyJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1eXc0Qk1VVFBIang0d1hpV3RGQ2Mud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEJvbGQnKSwgbG9jYWwoJ0xhdG8tQm9sZCcpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTl3NEJNVVRQSGg2VVZTd2FQR1EzcTVkME43dy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkJyksIGxvY2FsKCdMYXRvLUJvbGQnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU5dzRCTVVUUEhoNlVWU3dpUEdRM3E1ZDAud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfSIsIkBpbXBvcnQgJ35zYXNzL3ZhcmlhYmxlcyc7XG5cbjpob3N0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogNTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdyh0b3AsIDAuNTcpO1xuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgbWF4LWhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtbGlnaHQ7XG4gICAgZm9udDogJGZvbnQtZGVmYXVsdDtcblxuICAgID4gdWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgPiBsaSB7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gNXB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBjb2xvcjogJGJsYWNrLWRhcms7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICAgICA+IGkuZmFzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrLWRhcms7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCA1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bm90KC5zZWxlY3RlZCk6aG92ZXIge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdyZWVuLWRhcms7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JlZW4tZGFyaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgID4gaW1nLmxvZ28ge1xuICAgICAgICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxufVxuIiwiQG1peGluIGJveC1zaGFkb3cgKCRwb3MsICRvcGFjaXR5LCAkaW1wb3J0YW50OiBmYWxzZSkge1xuICAgICRfcG9zOiAwcHggMHB4IDNweCAwcHggO1xuICAgIEBpZigkcG9zID09IHRvcCl7XG4gICAgICAgICRfcG9zOiAwcHggM3B4IDExcHggMHB4IDtcbiAgICB9QGVsc2UgaWYoJHBvcyA9PSBsZWZ0KSB7XG4gICAgICAgICRfcG9zOiAtMnB4IDBweCAxMXB4IC00cHg7XG4gICAgfVxuXG4gICAgJHJnYjogcmdiYSgwLDAsMCwkb3BhY2l0eSk7XG4gICAgQGlmKCRpbXBvcnRhbnQgPT0gdHJ1ZSl7ICAgICAgICBcbiAgICAgICAgJHJnYjogcmdiYSgwLDAsMCwkb3BhY2l0eSkgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBib3gtc2hhZG93OiAkX3BvcyAkcmdiO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/breadcrumb/breadcrumb.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumb.component.ts ***!
  \***************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var _utils_converters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/converters */ "./src/utils/converters.ts");
/* harmony import */ var _models_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/dom */ "./src/app/models/dom.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @models/schema/xedit-mapper */ "./src/app/models/schema/xedit-mapper.ts");
/* harmony import */ var _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
/* harmony import */ var _app_models_node__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/models/node */ "./src/app/models/node.ts");
/* harmony import */ var _app_xedit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/xedit */ "./src/app/xedit.ts");
/* harmony import */ var _app_services_node_service_node_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/services/node-service/node.service */ "./src/app/services/node-service/node.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(_editorService, _elementRef, contextMenuService, _notification, nodeService) {
        this._editorService = _editorService;
        this._elementRef = _elementRef;
        this.contextMenuService = contextMenuService;
        this._notification = _notification;
        this.nodeService = nodeService;
        this.selectNode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contextMenuActions = [];
        this.breadcrumb = [];
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nodeService.get().subscribe(function (currentNode) {
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(currentNode)) {
                _this.breadcrumb = _this.getBreadCrumb(currentNode.getSection());
            }
        });
    };
    BreadcrumbComponent.prototype.getBreadCrumb = function (currentNode, rootTag, path) {
        if (rootTag === void 0) { rootTag = 'xedit'; }
        if (path === void 0) { path = []; }
        var section = null;
        var key = null;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(currentNode) &&
            !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(currentNode.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_6__["XeditMapper"].TAG_SECTION_TYPE)) &&
            !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])((key = currentNode.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_6__["XeditMapper"].TAG_UUID)))) {
            var node = new _app_models_node__WEBPACK_IMPORTED_MODULE_8__["Node"](currentNode.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_6__["XeditMapper"].TAG_UUID), currentNode);
            path.unshift({
                key: key,
                name: _app_models_node__WEBPACK_IMPORTED_MODULE_8__["Node"].getSectionLang(node.getSchema(), _app_xedit__WEBPACK_IMPORTED_MODULE_9__["Xedit"].getLang()),
                target: node.getTarget()
            });
        }
        return Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(currentNode) ||
            Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(currentNode.parentNode) ||
            Object(ramda__WEBPACK_IMPORTED_MODULE_1__["equals"])(currentNode.nodeName.toLowerCase(), rootTag)
            ? path
            : this.getBreadCrumb(currentNode.parentNode, rootTag, path);
    };
    BreadcrumbComponent.prototype.changeSelection = function (elementKey) {
        this.selectNode.emit(elementKey);
    };
    /************************************** MENU *****************************************/
    BreadcrumbComponent.prototype.onContextMenu = function ($event, item) {
        var _this = this;
        var node = this._editorService.parseToNode(item);
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(node) && !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(node.getSchema())) {
            this.updateContextMenuActions(node);
            setTimeout(function () {
                _this.contextMenuService.show.next({
                    contextMenu: _this.basicMenu,
                    event: $event,
                    item: item
                });
            }, 50);
        }
        $event.preventDefault();
        $event.stopPropagation();
    };
    BreadcrumbComponent.prototype.updateContextMenuActions = function (node) {
        var _this = this;
        var actions = this.getAvailableActions(node);
        var contextMenuActions = [];
        var contextMenuActionsChild = [];
        var contextMenuActionsSiblings = [];
        // TAG
        contextMenuActions.push(this.createAction(function (i) { return actions.name; }, null, true, false, function (i) { return false; }));
        contextMenuActions.push(this.createAction(null, null, true, true));
        var clickFunc = function (currentNode, afterNode, strTemplate, child) {
            if (child === void 0) { child = false; }
            var nodeTemplate = _utils_converters__WEBPACK_IMPORTED_MODULE_3__["Converters"].html2json(strTemplate, false);
            _models_dom__WEBPACK_IMPORTED_MODULE_4__["DOM"].element(currentNode).insertNode(_utils_converters__WEBPACK_IMPORTED_MODULE_3__["Converters"].json2html(_utils_converters__WEBPACK_IMPORTED_MODULE_3__["Converters"].addWrapJson(nodeTemplate)), afterNode, true);
            _this._editorService.addNodeToArea(node, nodeTemplate, child);
        };
        // Childs
        actions.children.forEach(function (action) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('template' in action) && !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(action.template)) {
                contextMenuActionsChild.push(_this.createAction(function (i) { return 'Añadir hijo ' + action.name; }, function (evt) {
                    return clickFunc(node.getSection(), node.getSection().childNodes[node.getSection().childNodes.length], action.template, true);
                }, true));
            }
        });
        // Siblings
        actions.siblings.forEach(function (action) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('template' in action) && !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(action.template)) {
                contextMenuActionsSiblings.push(_this.createAction(function (i) { return 'Añadir hermano ' + action.name; }, function (evt) { return clickFunc(node.getSection().parentNode, node.getSection().nextSibling, action.template); }, true));
            }
        });
        contextMenuActions = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["union"])(contextMenuActions, contextMenuActionsChild);
        // Divider
        if (contextMenuActionsChild.length > 0 && contextMenuActionsSiblings.length > 0) {
            contextMenuActions.push(this.createAction(null, null, true, true));
        }
        contextMenuActions = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["union"])(contextMenuActions, contextMenuActionsSiblings);
        contextMenuActions.push(this.createAction(null, null, true, true));
        contextMenuActions = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["union"])(contextMenuActions, this.defaultActions(node));
        this.contextMenuActions = contextMenuActions;
    };
    BreadcrumbComponent.prototype.defaultActions = function (node) {
        var _this = this;
        var actions = [];
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(this.copyAction) && !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(node)) {
            // Coger node del json --> Cambiar todos los uid del padre e hijos
            actions.push(this.createAction(function (i) { return 'Paste'; }, function (evt) {
                var sectionNode = new _app_models_node__WEBPACK_IMPORTED_MODULE_8__["Node"](_this.copyAction.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_6__["XeditMapper"].TAG_UUID), _this.copyAction);
                if (_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_7__["EditorService"].isInsertedNodeValid(node, sectionNode)) {
                    var template = _this._editorService.getJsonNodesByPath(sectionNode);
                    template = _utils_converters__WEBPACK_IMPORTED_MODULE_3__["Converters"].json2html(template, true, true, true);
                    _models_dom__WEBPACK_IMPORTED_MODULE_4__["DOM"].element(node.getSection()).insertNode(template, sectionNode.getTarget().childNodes[sectionNode.getTarget().childNodes.length], true);
                    _this._editorService.addNodeToArea(node, _utils_converters__WEBPACK_IMPORTED_MODULE_3__["Converters"].html2json(template, false), true);
                    _this._notification.info('Componente insertado', 'El componente ha sido pegado con éxito.', _app_xedit__WEBPACK_IMPORTED_MODULE_9__["Xedit"].NOTIFICATION_DEFAULT_SETTINGS);
                }
                else {
                    _this._notification.error('Estructura inválida', 'El componente pegado no es soportado.', _app_xedit__WEBPACK_IMPORTED_MODULE_9__["Xedit"].NOTIFICATION_DEFAULT_SETTINGS);
                }
            }, true));
        }
        actions.push(this.createAction(function (i) { return 'Copy'; }, function (evt) {
            _this.copyAction = null;
            _this.copyAction = node.getSection();
        }, true));
        actions.push(this.createAction(function (i) { return 'Delete'; }, function (evt) {
            _this._editorService.removeNode(node);
            _models_dom__WEBPACK_IMPORTED_MODULE_4__["DOM"].element(node.getSection()).deleteNode();
        }, true));
        return actions;
    };
    // Todo create Action Model
    BreadcrumbComponent.prototype.createAction = function (html, click, visible, divider, enabled) {
        if (divider === void 0) { divider = false; }
        if (enabled === void 0) { enabled = function (item) { return true; }; }
        return {
            html: html,
            click: click,
            enabled: enabled,
            divider: divider,
            visible: visible
        };
    };
    BreadcrumbComponent.prototype.getAvailableActions = function (node) {
        var actions = {
            name: null,
            children: [],
            siblings: [],
            others: []
        };
        actions.name = _app_models_node__WEBPACK_IMPORTED_MODULE_8__["Node"].getSectionLang(node.getSchema(), _app_xedit__WEBPACK_IMPORTED_MODULE_9__["Xedit"].getLang());
        // Get childs
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('actions', node.getSchema()) && !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(node.getSchema().actions)) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('children', node.getSchema().actions)) {
                var children = node.getSchema().actions.children;
                children.map(function (child) {
                    var schema = node.getSchemaNode()[child];
                    if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(schema)) {
                        actions.children.push({
                            name: _app_models_node__WEBPACK_IMPORTED_MODULE_8__["Node"].getSectionLang(schema, _app_xedit__WEBPACK_IMPORTED_MODULE_9__["Xedit"].getLang()),
                            template: _app_models_node__WEBPACK_IMPORTED_MODULE_8__["Node"].getSectionTemplate(schema)
                        });
                    }
                });
            }
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('siblings', node.getSchema().actions)) {
                var siblings = node.getSchema().actions.siblings;
                siblings.map(function (sibling) {
                    var schema = node.getSchemaNode()[sibling];
                    if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(schema)) {
                        actions.siblings.push({
                            name: _app_models_node__WEBPACK_IMPORTED_MODULE_8__["Node"].getSectionLang(schema, _app_xedit__WEBPACK_IMPORTED_MODULE_9__["Xedit"].getLang()),
                            template: _app_models_node__WEBPACK_IMPORTED_MODULE_8__["Node"].getSectionTemplate(schema)
                        });
                    }
                });
            }
        }
        actions.others.push({
            name: 'Borrar',
            template: null
        });
        return actions;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BreadcrumbComponent.prototype, "selectNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myContextMenu'),
        __metadata("design:type", ngx_contextmenu__WEBPACK_IMPORTED_MODULE_2__["ContextMenuComponent"])
    ], BreadcrumbComponent.prototype, "basicMenu", void 0);
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/components/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/components/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_7__["EditorService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            ngx_contextmenu__WEBPACK_IMPORTED_MODULE_2__["ContextMenuService"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"],
            _app_services_node_service_node_service__WEBPACK_IMPORTED_MODULE_10__["NodeService"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/components/context-menu/context-menu.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/context-menu/context-menu.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  context-menu works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/context-menu/context-menu.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/context-menu/context-menu.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGV4dC1tZW51L2NvbnRleHQtbWVudS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/context-menu/context-menu.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/context-menu/context-menu.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContextMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuComponent", function() { return ContextMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContextMenuComponent = /** @class */ (function () {
    function ContextMenuComponent() {
    }
    ContextMenuComponent.prototype.ngOnInit = function () {
    };
    ContextMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-context-menu',
            template: __webpack_require__(/*! ./context-menu.component.html */ "./src/app/components/context-menu/context-menu.component.html"),
            styles: [__webpack_require__(/*! ./context-menu.component.scss */ "./src/app/components/context-menu/context-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContextMenuComponent);
    return ContextMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/editor/editor.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/editor/editor.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n    <section>\n        <!-- METADATA VIEW -->\n        <app-metadata-view *ngIf=\"showComponent('metadata')\"> </app-metadata-view>\n        <!-- END METADATA VIEW-->\n\n        <!-- WYSIWYG VIEW -->\n        <app-editor-view\n            (selectNode)=\"setCurrentNode($event)\"\n            (toolbar)=\"setCurrentToolbar($event)\"\n            *ngIf=\"showComponent('wysiwyg')\"\n        >\n        </app-editor-view>\n        <!-- END WYSIWYG VIEW -->\n\n        <!-- TEXT VIEW -->\n        <app-text-view *ngIf=\"showComponent('text')\"> </app-text-view>\n        <!-- END TEXT VIEW -->\n    </section>\n    <!-- BREADCRUMBS -->\n    <app-breadcrumb (selectNode)=\"setCurrentNode($event)\"></app-breadcrumb>\n    <!-- END BREADCRUMBS -->\n</main>\n<app-properties-area\n    ngDraggable\n    *ngIf=\"cConfigs && (showComponent('wysiwyg') || showComponent('ckeditor'))\"\n    [(configs)]=\"cConfigs\"\n    (updated)=\"saveClipboardConfigs($event)\"\n>\n</app-properties-area>\n<app-image-modal></app-image-modal>\n"

/***/ }),

/***/ "./src/app/components/editor/editor.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/editor/editor.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n  height: 0; }\n:host > main {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    position: relative;\n    z-index: 5;\n    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25); }\n:host > main > section {\n      display: flex;\n      flex-direction: column;\n      flex-grow: 2;\n      position: relative;\n      z-index: 1;\n      height: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdG92YXIvZGV2ZWxvcC93ZWIveGVkaXQvc3JjL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvc2Fzcy9mb250cy9fbGF0by5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvYXBwL2NvbXBvbmVudHMvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hdG92YXIvZGV2ZWxvcC93ZWIveGVkaXQvc3JjL3Nhc3MvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxzRUFBWTtBQUZaLDhFQUFBO0FDQUEsY0FBQTtBQUNBO0VBQ0ksbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsOElBQThJO0VBQzlJLG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRJQUE0STtFQUM1SSx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrSEFBK0g7RUFDL0gsbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNkhBQTZIO0VBQzdILHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRJQUE0STtFQUM1SSxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwwSUFBMEk7RUFDMUkseUtBQXlLLEVBQUE7QUFFM0ssY0FBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0hBQStIO0VBQy9ILG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRIQUE0SDtFQUM1SCx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrSEFBK0g7RUFDL0gsbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNEhBQTRIO0VBQzVILHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDZIQUE2SDtFQUM3SCxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwwSEFBMEg7RUFDMUgseUtBQXlLLEVBQUE7QUM1RjdLO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUyxFQUFBO0FBSmI7SUFPUSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUNEZCwrQ0FMMEIsRUFBQTtBRE45QjtNQWdCWSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgJ35zYXNzL2ZvbnRzL2xhdG8nO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4wLjYvY3NzL2FsbC5jc3MnKTtcbkBpbXBvcnQgJ35zYXNzL21peGlucyc7XG5cbiRibGFjay1kYXJrZXI6ICMyMDI2MjQ7XG4kYmxhY2stZGFyazogIzNmNDk0NjtcbiRibGFjay13YXJtOiAjNDc0ZDRiO1xuJGJsYWNrLWxpZ2h0OiAjNWY2MzYyO1xuXG4kZ3JlZW4tZGFya2VyOiAjMWU1NzRlO1xuJGdyZWVuLWRhcms6ICMzYTllOGY7XG4kZ3JlZW4td2FybTogIzNlYTA5MTtcbiRncmVlbi1saWdodDogIzQ0YzRiMTtcblxuJGJsdWUtZGFyazogIzIxNGU2MTtcbiRibHVlLWxpZ2h0OiAjMjk1ZTc1O1xuJGJsdWUtbGlnaHRlcjogIzMxNzE4ZDtcblxuJHdoaXRlLWRhcmtlcjogIzk1OTU5NTtcbiR3aGl0ZS1kYXJrOiAjYzRjMmMyO1xuJHdoaXRlLXdhcm06ICNlMWU0ZTY7XG4kd2hpdGUtbGlnaHQ6ICNlZGVmZjI7XG4kd2hpdGUtbGlnaHRlcjogI2ZjZmNmYztcbiR3aGl0ZS14aW1kZXg6ICNmOWY5Zjk7XG5cbiRyZWQtd2FybTogI2QxMzczNztcbiRyZWQtbGlnaHQ6ICNkYjQ5NDk7XG5cbiR0YXNrYmFyLWhlaWdodDogNDZweDtcbiR0YXNrYmFyLWxpbmUtaGVpZ2h0OiA0MHB4O1xuJHRhYnMtaGVpZ2h0OiAzNXB4O1xuJHRhYnMtaGVpZ2h0LXNtYWxsOiAzMHB4O1xuXG4kZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcblxuJGZvbnQtc2l6ZS1zbWFsbDogMTJweDtcbiRmb250LXNpemUtZGVmYXVsdDogMTRweDtcbiRmb250LXNpemUtYmlnOiAxNnB4O1xuXG4kaWNvbi1zaXplLWRlZmF1bHQ6IDE4cHg7XG5cbiRmb250LWRlZmF1bHQ6IG5vcm1hbCAkZm9udC1zaXplLWRlZmF1bHQgJGZvbnQtZmFtaWx5O1xuXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy9jb2xvcnMnO1xuIiwiLyogbGF0aW4tZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gTGlnaHQgSXRhbGljJyksIGxvY2FsKCdMYXRvLUxpZ2h0SXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTl3Ml9GUWZ0eDk4OTdzeFoud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gTGlnaHQgSXRhbGljJyksIGxvY2FsKCdMYXRvLUxpZ2h0SXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTl3Ml9Hd2Z0eDk4OTdnLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OHc0Qk1VVFBIanhzQVVpLXFOaVhnN2VVMC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OHc0Qk1VVFBIanhzQVhDLXFOaVhnN1Eud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEJvbGQgSXRhbGljJyksIGxvY2FsKCdMYXRvLUJvbGRJdGFsaWMnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnVfdzRCTVVUUEhqeHNJNXdxX0ZRZnR4OTg5N3N4Wi53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkIEl0YWxpYycpLCBsb2NhbCgnTGF0by1Cb2xkSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTV3cV9Hd2Z0eDk4OTdnLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBMaWdodCcpLCBsb2NhbCgnTGF0by1MaWdodCcpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTl3NEJNVVRQSGg3VVNTd2FQR1EzcTVkME43dy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBMaWdodCcpLCBsb2NhbCgnTGF0by1MaWdodCcpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTl3NEJNVVRQSGg3VVNTd2lQR1EzcTVkMC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gUmVndWxhcicpLCBsb2NhbCgnTGF0by1SZWd1bGFyJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1eXc0Qk1VVFBIanhBd1hpV3RGQ2ZRN0Eud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gUmVndWxhcicpLCBsb2NhbCgnTGF0by1SZWd1bGFyJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1eXc0Qk1VVFBIang0d1hpV3RGQ2Mud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEJvbGQnKSwgbG9jYWwoJ0xhdG8tQm9sZCcpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTl3NEJNVVRQSGg2VVZTd2FQR1EzcTVkME43dy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkJyksIGxvY2FsKCdMYXRvLUJvbGQnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU5dzRCTVVUUEhoNlVWU3dpUEdRM3E1ZDAud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfSIsIkBpbXBvcnQgJ35zYXNzL3ZhcmlhYmxlcyc7XG5cbjpob3N0e1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgaGVpZ2h0OiAwO1xuXG4gICAgPiBtYWluIHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3cocmlnaHQsIDAuMjUpO1xuXG4gICAgICAgID4gc2VjdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG59IiwiQG1peGluIGJveC1zaGFkb3cgKCRwb3MsICRvcGFjaXR5LCAkaW1wb3J0YW50OiBmYWxzZSkge1xuICAgICRfcG9zOiAwcHggMHB4IDNweCAwcHggO1xuICAgIEBpZigkcG9zID09IHRvcCl7XG4gICAgICAgICRfcG9zOiAwcHggM3B4IDExcHggMHB4IDtcbiAgICB9QGVsc2UgaWYoJHBvcyA9PSBsZWZ0KSB7XG4gICAgICAgICRfcG9zOiAtMnB4IDBweCAxMXB4IC00cHg7XG4gICAgfVxuXG4gICAgJHJnYjogcmdiYSgwLDAsMCwkb3BhY2l0eSk7XG4gICAgQGlmKCRpbXBvcnRhbnQgPT0gdHJ1ZSl7ICAgICAgICBcbiAgICAgICAgJHJnYjogcmdiYSgwLDAsMCwkb3BhY2l0eSkgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBib3gtc2hhZG93OiAkX3BvcyAkcmdiO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/editor/editor.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/editor/editor.component.ts ***!
  \*******************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _models_configs_clipboardConfigs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/configs/clipboardConfigs */ "./src/app/models/configs/clipboardConfigs.ts");
/* harmony import */ var _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
/* harmony import */ var _app_factories_node_factory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/factories/node-factory.service */ "./src/app/factories/node-factory.service.ts");
/* harmony import */ var _app_services_node_service_node_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/services/node-service/node.service */ "./src/app/services/node-service/node.service.ts");
/* harmony import */ var _services_state_service_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/state-service/state.service */ "./src/app/services/state-service/state.service.ts");
/* harmony import */ var _models_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/toolbar */ "./src/app/models/toolbar.ts");
/* harmony import */ var _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @models/schema/xedit-mapper */ "./src/app/models/schema/xedit-mapper.ts");
/* harmony import */ var html_tag_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! html-tag-validator */ "./node_modules/html-tag-validator/index.js");
/* harmony import */ var html_tag_validator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(html_tag_validator__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditorComponent = /** @class */ (function () {
    function EditorComponent(_stateService, _editorService, nodeService, nodeFactoryService, _elementRef, _cdf) {
        this._stateService = _stateService;
        this._editorService = _editorService;
        this.nodeService = nodeService;
        this.nodeFactoryService = nodeFactoryService;
        this._elementRef = _elementRef;
        this._cdf = _cdf;
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Suscribe view state
        this._stateService.getCurrentView().subscribe(function (currentView) {
            _this.currentView = currentView;
        });
        this.clipboardConfigs = new _models_configs_clipboardConfigs__WEBPACK_IMPORTED_MODULE_2__["ClipboardConfigs"]();
    };
    EditorComponent.prototype.ngAfterViewChecked = function () {
        this.cConfigs = this.clipboardConfigs.getConfigs();
        this._cdf.detectChanges();
    };
    EditorComponent.prototype.setCurrentNode = function (uuid) {
        var node = null;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(uuid)) {
            var element = this._elementRef.nativeElement.querySelector("[" + _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_8__["XeditMapper"].TAG_UUID + "='" + uuid + "']");
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(element)) {
                node = this.nodeFactoryService.createFromElement(element);
            }
        }
        this.nodeService.set(node);
    };
    EditorComponent.prototype.setCurrentToolbar = function (toolbar) {
        var options = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(toolbar)
            ? null
            : toolbar.map(function (_a) {
                var icon = _a.icon, callback = _a.callback, active = _a.active;
                return new _models_toolbar__WEBPACK_IMPORTED_MODULE_7__["Toolbar"](icon, callback, active);
            });
        this._editorService.setToolbarOptions(options);
    };
    /**
     *
     * @param view
     */
    EditorComponent.prototype.showComponent = function (view) {
        return Object(ramda__WEBPACK_IMPORTED_MODULE_1__["equals"])(view, this.currentView);
    };
    EditorComponent.prototype.saveClipboardConfigs = function (evt) {
        this.cConfigs = evt;
        this.clipboardConfigs.setConfigs(evt);
    };
    /**
     *
     */
    EditorComponent.executeIfvalidateHtmlTags = function (content, callback, errorCallback, options) {
        if (options === void 0) { options = {}; }
        options = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["merge"])({
            settings: {
                format: 'html' // 'plain', 'html', or 'markdown'
            },
            attributes: {
                _: {
                    mixed: /.*/
                }
            }
        }, options);
        html_tag_validator__WEBPACK_IMPORTED_MODULE_9___default()(content, options, function (err, ast) {
            if (err) {
                errorCallback();
            }
            else {
                callback();
            }
        });
    };
    /**
     * @todo Check if validate html with w3c
     */
    EditorComponent.validateHtml = function () {
        /* const options = {
            data: content,
            format: 'html5',
            fragment: true,
            validator: 'https://validator.w3.org/nu/',
            ignore: [
              'Error: Start tag seen without seeing a doctype first. Expected “<!DOCTYPE html>”.',
              'Error: Element “head” is missing a required instance of child element “title”.',
              'Error: Attribute “xe_uuid” not allowed on element “section” at this point',
              'Error: Attribute “xe_uuid” not allowed on element “section” at this point.',
              'Error: Attribute “xe_section” not allowed on element “section” at this point.',
              'Error: Attribute “xe_uuid” not allowed on element “h1” at this point.',
            ]
          }
          validator(options)
            .then((data) => {
              var newState = clone(this.content);
              var json = File.html2json(content, false);
              newState['s4sdf89'].content.child = json;
              this._editorService.newState(newState);
            })
            .catch((error) => {
              console.error(error)
            })*/
    };
    /**
     *
     */
    EditorComponent.checkIfContentChange = function (currentFile, file) {
        return Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(currentFile) || (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(file) && currentFile.getState().getHash() !== file.getState().getHash());
    };
    EditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/components/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.scss */ "./src/app/components/editor/editor.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_state_service_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"],
            _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"],
            _app_services_node_service_node_service__WEBPACK_IMPORTED_MODULE_5__["NodeService"],
            _app_factories_node_factory_service__WEBPACK_IMPORTED_MODULE_4__["NodeFactoryService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/components/editor/properties-area/properties-area.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/editor/properties-area/properties-area.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"xe_editor\">\n    <div>\n        <span>{{ nodeName }}</span>\n    </div>\n    <aside (click)=\"toggleMenu()\">\n        <i [ngClass]=\"{ fa: true, 'fa-minus-square': isOpen, 'fa-window-maximize': !isOpen }\"></i>\n    </aside>\n</header>\n<div id=\"toolbar\" class=\"xe_editor\">\n    <app-properties-toolbar *ngIf=\"hasToolbarOptions()\" [options]=\"toolbarOptions\"></app-properties-toolbar>\n</div>\n<div class=\"xe_editor\">\n    <ng-container *ngFor=\"let value of configs; let i = index\">\n        <app-listbox\n            [placeholder]=\"value.name\"\n            [selected]=\"value.selected\"\n            [options]=\"value.options\"\n            (changeValue)=\"updateClipboard($event, value)\"\n        ></app-listbox>\n    </ng-container>\n</div>\n<collapsible-list-item class=\"xe_editor\">\n    <collapsible-header class=\"waves-effect\" #toggleCollapsible> </collapsible-header>\n    <collapsible-body [expanded]=\"isOpen\">\n        <app-properties-local *ngIf=\"'local' === selectedView\"></app-properties-local>\n    </collapsible-body>\n</collapsible-list-item>\n"

/***/ }),

/***/ "./src/app/components/editor/properties-area/properties-area.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/editor/properties-area/properties-area.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  z-index: 999;\n  position: absolute;\n  width: 200px;\n  background-color: #e1e4e6;\n  right: 15px;\n  top: 60px;\n  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25); }\n:host header {\n    border-top-left-radius: 2px;\n    border-top-right-radius: 2px;\n    position: relative;\n    display: flex;\n    height: 22px;\n    background-color: #3a9e8f;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n:host header > div {\n      padding: 2px 5px;\n      flex-grow: 2;\n      color: #edeff2; }\n:host header > aside {\n      padding: 2px 5px; }\n:host header > aside > i.fa {\n        color: #edeff2; }\n:host > #tabs {\n    display: flex;\n    flex-direction: row;\n    background-color: #e1e4e6;\n    font: 14px;\n    text-transform: uppercase;\n    font-size: 12px;\n    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25); }\n:host > #tabs > div {\n      box-sizing: border-box;\n      height: 30px;\n      padding: 0 10px;\n      line-height: 30px;\n      border-bottom: 2px solid transparent;\n      color: #959595;\n      transition: color 0.3s ease-in-out, border-bottom-color 0.3s ease-in-out;\n      cursor: pointer; }\n:host > #tabs > div:hover {\n        border-bottom-color: #44c4b1; }\n:host > #tabs > div.selected {\n        border-bottom-color: #3a9e8f;\n        color: #1e574e; }\n:host > collapsible-list-item > collapsible-header {\n    display: none; }\n:host > collapsible-list-item > collapsible-body {\n    padding: 0;\n    margin: 0;\n    border-bottom: 0;\n    padding-bottom: 0px;\n    background-color: #edeff2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdG92YXIvZGV2ZWxvcC93ZWIveGVkaXQvc3JjL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvc2Fzcy9mb250cy9fbGF0by5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvYXBwL2NvbXBvbmVudHMvZWRpdG9yL3Byb3BlcnRpZXMtYXJlYS9wcm9wZXJ0aWVzLWFyZWEuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXRvdmFyL2RldmVsb3Avd2ViL3hlZGl0L3NyYy9zYXNzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsc0VBQVk7QUFGWiw4RUFBQTtBQ0FBLGNBQUE7QUFDQTtFQUNJLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDhJQUE4STtFQUM5SSxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0SUFBNEk7RUFDNUkseUtBQXlLLEVBQUE7QUFFM0ssY0FBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0hBQStIO0VBQy9ILG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDZIQUE2SDtFQUM3SCx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0SUFBNEk7RUFDNUksbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMElBQTBJO0VBQzFJLHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLCtIQUErSDtFQUMvSCxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0SEFBNEg7RUFDNUgseUtBQXlLLEVBQUE7QUFFM0ssY0FBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0hBQStIO0VBQy9ILG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRIQUE0SDtFQUM1SCx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw2SEFBNkg7RUFDN0gsbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMEhBQTBIO0VBQzFILHlLQUF5SyxFQUFBO0FDNUY3SztFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCRmVnQjtFRWRoQixXQUFXO0VBQ1gsU0FBUztFQ0tULCtDQUwwQixFQUFBO0FETjlCO0lBVVEsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWix5QkZOWTtJRU9aLHlCQUFpQjtPQUFqQixzQkFBaUI7UUFBakIscUJBQWlCO1lBQWpCLGlCQUFpQixFQUFBO0FBaEJ6QjtNQW1CWSxnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLGNGRFMsRUFBQTtBRXBCckI7TUF5QlksZ0JBQWdCLEVBQUE7QUF6QjVCO1FBNEJnQixjRlJLLEVBQUE7QUVwQnJCO0lBa0NRLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJGakJZO0lFa0JaLFVGRmdCO0lFR2hCLHlCQUF5QjtJQUN6QixlRkxjO0lHdkJsQiwrQ0FMMEIsRUFBQTtBRE45QjtNQTJDWSxzQkFBc0I7TUFDdEIsWUZkWTtNRWVaLGVBQWU7TUFDZixpQkZoQlk7TUVpQlosb0NBQW9DO01BQ3BDLGNGL0JVO01FZ0NWLHdFQUF3RTtNQUN4RSxlQUFlLEVBQUE7QUFsRDNCO1FBcURnQiw0QkYxQ0ssRUFBQTtBRVhyQjtRQXlEZ0IsNEJGaERJO1FFaURKLGNGbERNLEVBQUE7QUVSdEI7SUFpRVksYUFBYSxFQUFBO0FBakV6QjtJQXNFWSxVQUFVO0lBQ1YsU0FBUztJQUNULGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIseUJGdERTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkaXRvci9wcm9wZXJ0aWVzLWFyZWEvcHJvcGVydGllcy1hcmVhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCAnfnNhc3MvZm9udHMvbGF0byc7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjAuNi9jc3MvYWxsLmNzcycpO1xuQGltcG9ydCAnfnNhc3MvbWl4aW5zJztcblxuJGJsYWNrLWRhcmtlcjogIzIwMjYyNDtcbiRibGFjay1kYXJrOiAjM2Y0OTQ2O1xuJGJsYWNrLXdhcm06ICM0NzRkNGI7XG4kYmxhY2stbGlnaHQ6ICM1ZjYzNjI7XG5cbiRncmVlbi1kYXJrZXI6ICMxZTU3NGU7XG4kZ3JlZW4tZGFyazogIzNhOWU4ZjtcbiRncmVlbi13YXJtOiAjM2VhMDkxO1xuJGdyZWVuLWxpZ2h0OiAjNDRjNGIxO1xuXG4kYmx1ZS1kYXJrOiAjMjE0ZTYxO1xuJGJsdWUtbGlnaHQ6ICMyOTVlNzU7XG4kYmx1ZS1saWdodGVyOiAjMzE3MThkO1xuXG4kd2hpdGUtZGFya2VyOiAjOTU5NTk1O1xuJHdoaXRlLWRhcms6ICNjNGMyYzI7XG4kd2hpdGUtd2FybTogI2UxZTRlNjtcbiR3aGl0ZS1saWdodDogI2VkZWZmMjtcbiR3aGl0ZS1saWdodGVyOiAjZmNmY2ZjO1xuJHdoaXRlLXhpbWRleDogI2Y5ZjlmOTtcblxuJHJlZC13YXJtOiAjZDEzNzM3O1xuJHJlZC1saWdodDogI2RiNDk0OTtcblxuJHRhc2tiYXItaGVpZ2h0OiA0NnB4O1xuJHRhc2tiYXItbGluZS1oZWlnaHQ6IDQwcHg7XG4kdGFicy1oZWlnaHQ6IDM1cHg7XG4kdGFicy1oZWlnaHQtc21hbGw6IDMwcHg7XG5cbiRmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuXG4kZm9udC1zaXplLXNtYWxsOiAxMnB4O1xuJGZvbnQtc2l6ZS1kZWZhdWx0OiAxNHB4O1xuJGZvbnQtc2l6ZS1iaWc6IDE2cHg7XG5cbiRpY29uLXNpemUtZGVmYXVsdDogMThweDtcblxuJGZvbnQtZGVmYXVsdDogbm9ybWFsICRmb250LXNpemUtZGVmYXVsdCAkZm9udC1mYW1pbHk7XG5cbkBpbXBvcnQgJy4vdmFyaWFibGVzL2NvbG9ycyc7XG4iLCIvKiBsYXRpbi1leHQgKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBMaWdodCBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tTGlnaHRJdGFsaWMnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnVfdzRCTVVUUEhqeHNJOXcyX0ZRZnR4OTg5N3N4Wi53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBMaWdodCBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tTGlnaHRJdGFsaWMnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnVfdzRCTVVUUEhqeHNJOXcyX0d3ZnR4OTg5N2cud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEl0YWxpYycpLCBsb2NhbCgnTGF0by1JdGFsaWMnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU4dzRCTVVUUEhqeHNBVWktcU5pWGc3ZVUwLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEl0YWxpYycpLCBsb2NhbCgnTGF0by1JdGFsaWMnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU4dzRCTVVUUEhqeHNBWEMtcU5pWGc3US53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gQm9sZCBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tQm9sZEl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dV93NEJNVVRQSGp4c0k1d3FfRlFmdHg5ODk3c3haLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEJvbGQgSXRhbGljJyksIGxvY2FsKCdMYXRvLUJvbGRJdGFsaWMnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnVfdzRCTVVUUEhqeHNJNXdxX0d3ZnR4OTg5N2cud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIExpZ2h0JyksIGxvY2FsKCdMYXRvLUxpZ2h0JyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OXc0Qk1VVFBIaDdVU1N3YVBHUTNxNWQwTjd3LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIExpZ2h0JyksIGxvY2FsKCdMYXRvLUxpZ2h0JyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OXc0Qk1VVFBIaDdVU1N3aVBHUTNxNWQwLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBSZWd1bGFyJyksIGxvY2FsKCdMYXRvLVJlZ3VsYXInKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnV5dzRCTVVUUEhqeEF3WGlXdEZDZlE3QS53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBSZWd1bGFyJyksIGxvY2FsKCdMYXRvLVJlZ3VsYXInKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnV5dzRCTVVUUEhqeDR3WGlXdEZDYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gQm9sZCcpLCBsb2NhbCgnTGF0by1Cb2xkJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OXc0Qk1VVFBIaDZVVlN3YVBHUTNxNWQwTjd3LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEJvbGQnKSwgbG9jYWwoJ0xhdG8tQm9sZCcpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTl3NEJNVVRQSGg2VVZTd2lQR1EzcTVkMC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9IiwiQGltcG9ydCAnfnNhc3MvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS13YXJtO1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIHRvcDogNjBweDtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KGJvdHRvbSwgMC4yNSk7XG5cbiAgICBoZWFkZXIge1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tZGFyaztcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICAgICAgPiBkaXYge1xuICAgICAgICAgICAgcGFkZGluZzogMnB4IDVweDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUtbGlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICA+IGFzaWRlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XG5cbiAgICAgICAgICAgID4gaS5mYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZS1saWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgID4gI3RhYnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtd2FybTtcbiAgICAgICAgZm9udDogJGZvbnQtc2l6ZS1kZWZhdWx0O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc21hbGw7XG4gICAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3coYm90dG9tLCAwLjI1KTtcblxuICAgICAgICA+IGRpdiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgaGVpZ2h0OiAkdGFicy1oZWlnaHQtc21hbGw7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJHRhYnMtaGVpZ2h0LXNtYWxsO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZS1kYXJrZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW4tb3V0LCBib3JkZXItYm90dG9tLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRncmVlbi1saWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGdyZWVuLWRhcms7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmVlbi1kYXJrZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICA+IGNvbGxhcHNpYmxlLWxpc3QtaXRlbSB7XG4gICAgICAgID4gY29sbGFwc2libGUtaGVhZGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICA+IGNvbGxhcHNpYmxlLWJvZHkge1xuICAgICAgICAgICAgLy9AaW5jbHVkZSBib3gtc2hhZG93KGJvdHRvbSwgMC4yNSwgdHJ1ZSk7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtbGlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAbWl4aW4gYm94LXNoYWRvdyAoJHBvcywgJG9wYWNpdHksICRpbXBvcnRhbnQ6IGZhbHNlKSB7XG4gICAgJF9wb3M6IDBweCAwcHggM3B4IDBweCA7XG4gICAgQGlmKCRwb3MgPT0gdG9wKXtcbiAgICAgICAgJF9wb3M6IDBweCAzcHggMTFweCAwcHggO1xuICAgIH1AZWxzZSBpZigkcG9zID09IGxlZnQpIHtcbiAgICAgICAgJF9wb3M6IC0ycHggMHB4IDExcHggLTRweDtcbiAgICB9XG5cbiAgICAkcmdiOiByZ2JhKDAsMCwwLCRvcGFjaXR5KTtcbiAgICBAaWYoJGltcG9ydGFudCA9PSB0cnVlKXsgICAgICAgIFxuICAgICAgICAkcmdiOiByZ2JhKDAsMCwwLCRvcGFjaXR5KSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGJveC1zaGFkb3c6ICRfcG9zICRyZ2I7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/editor/properties-area/properties-area.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/editor/properties-area/properties-area.component.ts ***!
  \********************************************************************************/
/*! exports provided: PropertiesAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesAreaComponent", function() { return PropertiesAreaComponent; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
/* harmony import */ var angular2_collapsible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-collapsible */ "./node_modules/angular2-collapsible/fesm5/angular2-collapsible.js");
/* harmony import */ var _app_services_node_service_node_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/node-service/node.service */ "./src/app/services/node-service/node.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PropertiesAreaComponent = /** @class */ (function () {
    function PropertiesAreaComponent(_editorService, nodeService, cdr) {
        this._editorService = _editorService;
        this.nodeService = nodeService;
        this.cdr = cdr;
        this.availablesViews = ['local'];
        this.updated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nodeName = '';
        this.isOpen = false;
        this.selectedView = 'local';
        this.start = true;
    }
    PropertiesAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nodeService.get().subscribe(function (currentNode) {
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(currentNode)) {
                _this.currentNode = currentNode;
                _this.nodeName = currentNode.getName();
            }
        });
        this._editorService.getToolbarOptions().subscribe(function (currentOptions) {
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(currentOptions)) {
                _this.toolbarOptions = currentOptions;
            }
            else {
                _this.toolbarOptions = [];
            }
        });
    };
    PropertiesAreaComponent.prototype.ngAfterViewChecked = function () {
        if (this.start) {
            this.openMenu();
            this.start = false;
            this.cdr.detectChanges();
        }
    };
    PropertiesAreaComponent.prototype.hasToolbarOptions = function () {
        return Array.isArray(this.toolbarOptions) && this.toolbarOptions.length > 0;
    };
    PropertiesAreaComponent.prototype.changeView = function (viewName) {
        this.selectedView = viewName;
        this.openMenu();
    };
    PropertiesAreaComponent.prototype.toggleMenu = function () {
        this.isOpen = !this.isOpen;
        this.collapsible.click();
    };
    PropertiesAreaComponent.prototype.openMenu = function () {
        if (!this.isOpen) {
            this.collapsible.click();
            this.isOpen = true;
        }
    };
    PropertiesAreaComponent.prototype.updateClipboard = function (evt, object) {
        object.selected = evt;
        this.updateClipboardConfigs();
    };
    PropertiesAreaComponent.prototype.updateClipboardConfigs = function () {
        this.updated.emit(this.configs);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toggleCollapsible'),
        __metadata("design:type", angular2_collapsible__WEBPACK_IMPORTED_MODULE_3__["CollapsibleHeaderComponent"])
    ], PropertiesAreaComponent.prototype, "collapsible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], PropertiesAreaComponent.prototype, "configs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PropertiesAreaComponent.prototype, "updated", void 0);
    PropertiesAreaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-properties-area',
            template: __webpack_require__(/*! ./properties-area.component.html */ "./src/app/components/editor/properties-area/properties-area.component.html"),
            styles: [__webpack_require__(/*! ./properties-area.component.scss */ "./src/app/components/editor/properties-area/properties-area.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"],
            _app_services_node_service_node_service__WEBPACK_IMPORTED_MODULE_4__["NodeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], PropertiesAreaComponent);
    return PropertiesAreaComponent;
}());



/***/ }),

/***/ "./src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"currentNode != null\">\n    <ng-container *ngFor=\"let group of currentProperties | keys\">\n        <app-acordion [title]='group' [className]=\"'form'\">\n            <ng-container [ngSwitch]=\"group\">\n                <ng-container *ngSwitchCase=\"'style'\">\n                    <app-multi-input-acordion [values]=\"currentProperties[group]\" actionText=\"Add new style\" (changeValue)=\"changeStyle($event)\"></app-multi-input-acordion>\n                </ng-container>\n                <ng-container *ngSwitchCase=\"'class'\">\n                    <app-input-acordion [values]=\"currentProperties[group]\" actionText=\"Add new class\" (changeValue)=\"changeClass($event)\"></app-input-acordion>\n                </ng-container>\n                <ng-container *ngSwitchDefault>\n                    <div id=\"xe-center-acordion\">\n                        <app-multi-input *ngFor=\"let value of currentProperties[group]\" [data]=\"value\" (changeValue)=\"cnageProperty($event)\"></app-multi-input>\n                    </div>\n                </ng-container>\n            </ng-container>\n        </app-acordion>\n    </ng-container>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  background-color: #edeff2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdG92YXIvZGV2ZWxvcC93ZWIveGVkaXQvc3JjL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvc2Fzcy9mb250cy9fbGF0by5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvYXBwL2NvbXBvbmVudHMvZWRpdG9yL3Byb3BlcnRpZXMtYXJlYS9wcm9wZXJ0aWVzLWxvY2FsLXZpZXcvcHJvcGVydGllcy1sb2NhbC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxzRUFBWTtBQUZaLDhFQUFBO0FDQUEsY0FBQTtBQUNBO0VBQ0ksbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsOElBQThJO0VBQzlJLG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRJQUE0STtFQUM1SSx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrSEFBK0g7RUFDL0gsbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNkhBQTZIO0VBQzdILHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRJQUE0STtFQUM1SSxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwwSUFBMEk7RUFDMUkseUtBQXlLLEVBQUE7QUFFM0ssY0FBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0hBQStIO0VBQy9ILG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRIQUE0SDtFQUM1SCx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrSEFBK0g7RUFDL0gsbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNEhBQTRIO0VBQzVILHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDZIQUE2SDtFQUM3SCxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwwSEFBMEg7RUFDMUgseUtBQXlLLEVBQUE7QUM1RjdLO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIseUJGZ0JpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZGl0b3IvcHJvcGVydGllcy1hcmVhL3Byb3BlcnRpZXMtbG9jYWwtdmlldy9wcm9wZXJ0aWVzLWxvY2FsLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0ICd+c2Fzcy9mb250cy9sYXRvJztcbkBpbXBvcnQgdXJsKCdodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMC42L2Nzcy9hbGwuY3NzJyk7XG5AaW1wb3J0ICd+c2Fzcy9taXhpbnMnO1xuXG4kYmxhY2stZGFya2VyOiAjMjAyNjI0O1xuJGJsYWNrLWRhcms6ICMzZjQ5NDY7XG4kYmxhY2std2FybTogIzQ3NGQ0YjtcbiRibGFjay1saWdodDogIzVmNjM2MjtcblxuJGdyZWVuLWRhcmtlcjogIzFlNTc0ZTtcbiRncmVlbi1kYXJrOiAjM2E5ZThmO1xuJGdyZWVuLXdhcm06ICMzZWEwOTE7XG4kZ3JlZW4tbGlnaHQ6ICM0NGM0YjE7XG5cbiRibHVlLWRhcms6ICMyMTRlNjE7XG4kYmx1ZS1saWdodDogIzI5NWU3NTtcbiRibHVlLWxpZ2h0ZXI6ICMzMTcxOGQ7XG5cbiR3aGl0ZS1kYXJrZXI6ICM5NTk1OTU7XG4kd2hpdGUtZGFyazogI2M0YzJjMjtcbiR3aGl0ZS13YXJtOiAjZTFlNGU2O1xuJHdoaXRlLWxpZ2h0OiAjZWRlZmYyO1xuJHdoaXRlLWxpZ2h0ZXI6ICNmY2ZjZmM7XG4kd2hpdGUteGltZGV4OiAjZjlmOWY5O1xuXG4kcmVkLXdhcm06ICNkMTM3Mzc7XG4kcmVkLWxpZ2h0OiAjZGI0OTQ5O1xuXG4kdGFza2Jhci1oZWlnaHQ6IDQ2cHg7XG4kdGFza2Jhci1saW5lLWhlaWdodDogNDBweDtcbiR0YWJzLWhlaWdodDogMzVweDtcbiR0YWJzLWhlaWdodC1zbWFsbDogMzBweDtcblxuJGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG5cbiRmb250LXNpemUtc21hbGw6IDEycHg7XG4kZm9udC1zaXplLWRlZmF1bHQ6IDE0cHg7XG4kZm9udC1zaXplLWJpZzogMTZweDtcblxuJGljb24tc2l6ZS1kZWZhdWx0OiAxOHB4O1xuXG4kZm9udC1kZWZhdWx0OiBub3JtYWwgJGZvbnQtc2l6ZS1kZWZhdWx0ICRmb250LWZhbWlseTtcblxuQGltcG9ydCAnLi92YXJpYWJsZXMvY29sb3JzJztcbiIsIi8qIGxhdGluLWV4dCAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIExpZ2h0IEl0YWxpYycpLCBsb2NhbCgnTGF0by1MaWdodEl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dV93NEJNVVRQSGp4c0k5dzJfRlFmdHg5ODk3c3haLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIExpZ2h0IEl0YWxpYycpLCBsb2NhbCgnTGF0by1MaWdodEl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dV93NEJNVVRQSGp4c0k5dzJfR3dmdHg5ODk3Zy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gSXRhbGljJyksIGxvY2FsKCdMYXRvLUl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTh3NEJNVVRQSGp4c0FVaS1xTmlYZzdlVTAud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gSXRhbGljJyksIGxvY2FsKCdMYXRvLUl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTh3NEJNVVRQSGp4c0FYQy1xTmlYZzdRLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkIEl0YWxpYycpLCBsb2NhbCgnTGF0by1Cb2xkSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTV3cV9GUWZ0eDk4OTdzeFoud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gQm9sZCBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tQm9sZEl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dV93NEJNVVRQSGp4c0k1d3FfR3dmdHg5ODk3Zy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gTGlnaHQnKSwgbG9jYWwoJ0xhdG8tTGlnaHQnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU5dzRCTVVUUEhoN1VTU3dhUEdRM3E1ZDBON3cud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gTGlnaHQnKSwgbG9jYWwoJ0xhdG8tTGlnaHQnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU5dzRCTVVUUEhoN1VTU3dpUEdRM3E1ZDAud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIFJlZ3VsYXInKSwgbG9jYWwoJ0xhdG8tUmVndWxhcicpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dXl3NEJNVVRQSGp4QXdYaVd0RkNmUTdBLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIFJlZ3VsYXInKSwgbG9jYWwoJ0xhdG8tUmVndWxhcicpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dXl3NEJNVVRQSGp4NHdYaVd0RkNjLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkJyksIGxvY2FsKCdMYXRvLUJvbGQnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU5dzRCTVVUUEhoNlVWU3dhUEdRM3E1ZDBON3cud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gQm9sZCcpLCBsb2NhbCgnTGF0by1Cb2xkJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OXc0Qk1VVFBIaDZVVlN3aVBHUTNxNWQwLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH0iLCJAaW1wb3J0ICd+c2Fzcy92YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtbGlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: PropertiesLocalViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesLocalViewComponent", function() { return PropertiesLocalViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
/* harmony import */ var _app_services_node_service_node_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/node-service/node.service */ "./src/app/services/node-service/node.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PropertiesLocalViewComponent = /** @class */ (function () {
    function PropertiesLocalViewComponent(_editorService, nodeService) {
        this._editorService = _editorService;
        this.nodeService = nodeService;
        this.propertiesGroupsActions = {
            class: function (value) {
                if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(value) || Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(value)) {
                    return [];
                }
                return value.split(' ');
            },
            style: function (value) {
                if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(value) || Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(value)) {
                    return [];
                }
                var _value = value.split(';');
                var result = [];
                return _value.reduce(function (acum, val) {
                    var pairs = val.split(':');
                    if (pairs[0] !== '') {
                        var json = {};
                        json[pairs[0].trim()] = pairs[1];
                        result.push(json);
                    }
                    return result;
                }, result);
            }
        };
        this.defaultProperty = 'attributes';
        this.propertiesGroups = ['style', 'class', this.defaultProperty];
    }
    PropertiesLocalViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._editorService.getFileState().subscribe(function (file) {
            _this.file = file;
        });
        this.nodeService.get().subscribe(function (currentNode) {
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(currentNode)) {
                _this.currentNode = currentNode;
                _this.availableAttributes = currentNode.getAvailableAttributes();
                _this.currentProperties = _this.getProperties();
            }
        });
    };
    PropertiesLocalViewComponent.prototype.getProperties = function () {
        var _this = this;
        var props = {};
        this.availableAttributes.map(function (property) {
            var propertyValue = _this.currentNode.getAttribute(property);
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])(property, _this.propertiesGroupsActions)) {
                propertyValue = _this.propertiesGroupsActions[property](propertyValue);
            }
            if (_this.propertiesGroups.indexOf(property) >= 0) {
                props[property] = propertyValue;
                return;
            }
            var json = {};
            json[property] = propertyValue;
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])(_this.defaultProperty, props)) {
                props[_this.defaultProperty].push(json);
                return;
            }
            props[_this.defaultProperty] = [json];
        });
        return props;
    };
    PropertiesLocalViewComponent.prototype.changeStyle = function (value) {
        var result = value.map(function (data) {
            var key = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["keys"])(data)[0];
            return key + ":" + data[key] + ";";
        });
        this.changePropertyValue('style', result.join(' '));
    };
    PropertiesLocalViewComponent.prototype.changeClass = function (value) {
        this.changePropertyValue('class', value.join(' '));
    };
    PropertiesLocalViewComponent.prototype.cnageProperty = function (_a) {
        var newValue = _a.new;
        var property = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["keys"])(newValue)[0];
        this.changePropertyValue(property, newValue[property]);
        /*const property = keys(value)[0];
        this.changePropertyValue(property, value[property]);*/
    };
    PropertiesLocalViewComponent.prototype.changePropertyValue = function (property, value) {
        // Modify file with new changes
        var elementContent = this.file.getState().getContent();
        var editContent = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["reduce"])(function (acc, _value) {
            return acc.child[_value];
        }, elementContent[this.currentNode.getAreaId()].content, this.currentNode.getPath());
        var hasAttr = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["has"])('attr');
        if (!hasAttr(editContent) || editContent['attr'] == null) {
            editContent['attr'] = [];
        }
        editContent['attr'][property] = value;
        // Save new state
        var newFile = this._editorService.newStateFile(elementContent, 'Message2');
        this._editorService.setFileState(newFile);
        // Update current node
        this.currentNode.setAttribute(property, value);
        // this._editorService.setCurrentNode(this.currentNode);
        this._editorService.setCurrentNodeModify(this.currentNode);
    };
    PropertiesLocalViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-properties-local',
            template: __webpack_require__(/*! ./properties-local-view.component.html */ "./src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.html"),
            styles: [__webpack_require__(/*! ./properties-local-view.component.scss */ "./src/app/components/editor/properties-area/properties-local-view/properties-local-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"], _app_services_node_service_node_service__WEBPACK_IMPORTED_MODULE_3__["NodeService"]])
    ], PropertiesLocalViewComponent);
    return PropertiesLocalViewComponent;
}());



/***/ }),

/***/ "./src/app/components/editor/properties-area/properties-toolbar/properties-toolbar.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/editor/properties-area/properties-toolbar/properties-toolbar.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-image-toolbar *ngIf=\"nodeName === 'app-image'\"></app-image-toolbar> -->\n<div\n    class=\"xe_toolbar_content\"\n>\n    <div\n        *ngFor=\"let action of options\"\n        (click)=\"action.callback($event)\"\n        [ngClass]=\"{'xe_toolbar_button': true, 'active': action.active }\"\n    >\n        <fa-icon [icon]=\"action.icon\"></fa-icon>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/editor/properties-area/properties-toolbar/properties-toolbar.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/editor/properties-area/properties-toolbar/properties-toolbar.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host > .xe_toolbar_content {\n  background: #f9f9f9;\n  padding: 5px; }\n:host > .xe_toolbar_content .xe_toolbar_button {\n    box-sizing: border-box;\n    font-size: 18px;\n    display: inline-block;\n    padding: 3px;\n    width: 29px;\n    height: 29px;\n    text-align: center;\n    border-radius: 4px; }\n:host > .xe_toolbar_content .xe_toolbar_button.active, :host > .xe_toolbar_content .xe_toolbar_button:hover {\n      background-color: #e1e4e6;\n      cursor: pointer; }\n:host > .xe_toolbar_content .xe_toolbar_button fa-icon {\n      font-size: inherit; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdG92YXIvZGV2ZWxvcC93ZWIveGVkaXQvc3JjL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvc2Fzcy9mb250cy9fbGF0by5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvYXBwL2NvbXBvbmVudHMvZWRpdG9yL3Byb3BlcnRpZXMtYXJlYS9wcm9wZXJ0aWVzLXRvb2xiYXIvcHJvcGVydGllcy10b29sYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxzRUFBWTtBQUZaLDhFQUFBO0FDQUEsY0FBQTtBQUNBO0VBQ0ksbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsOElBQThJO0VBQzlJLG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRJQUE0STtFQUM1SSx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrSEFBK0g7RUFDL0gsbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNkhBQTZIO0VBQzdILHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRJQUE0STtFQUM1SSxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwwSUFBMEk7RUFDMUkseUtBQXlLLEVBQUE7QUFFM0ssY0FBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0hBQStIO0VBQy9ILG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRIQUE0SDtFQUM1SCx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrSEFBK0g7RUFDL0gsbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNEhBQTRIO0VBQzVILHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDZIQUE2SDtFQUM3SCxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwwSEFBMEg7RUFDMUgseUtBQXlLLEVBQUE7QUM1RjdLO0VBRVEsbUJGb0JjO0VFbkJkLFlBQVksRUFBQTtBQUhwQjtJQU1ZLHNCQUFzQjtJQUN0QixlRitCWTtJRTlCWixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQixFQUFBO0FBYjlCO01BaUJnQix5QkZFSTtNRURKLGVBQWUsRUFBQTtBQWxCL0I7TUFzQmdCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZGl0b3IvcHJvcGVydGllcy1hcmVhL3Byb3BlcnRpZXMtdG9vbGJhci9wcm9wZXJ0aWVzLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0ICd+c2Fzcy9mb250cy9sYXRvJztcbkBpbXBvcnQgdXJsKCdodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMC42L2Nzcy9hbGwuY3NzJyk7XG5AaW1wb3J0ICd+c2Fzcy9taXhpbnMnO1xuXG4kYmxhY2stZGFya2VyOiAjMjAyNjI0O1xuJGJsYWNrLWRhcms6ICMzZjQ5NDY7XG4kYmxhY2std2FybTogIzQ3NGQ0YjtcbiRibGFjay1saWdodDogIzVmNjM2MjtcblxuJGdyZWVuLWRhcmtlcjogIzFlNTc0ZTtcbiRncmVlbi1kYXJrOiAjM2E5ZThmO1xuJGdyZWVuLXdhcm06ICMzZWEwOTE7XG4kZ3JlZW4tbGlnaHQ6ICM0NGM0YjE7XG5cbiRibHVlLWRhcms6ICMyMTRlNjE7XG4kYmx1ZS1saWdodDogIzI5NWU3NTtcbiRibHVlLWxpZ2h0ZXI6ICMzMTcxOGQ7XG5cbiR3aGl0ZS1kYXJrZXI6ICM5NTk1OTU7XG4kd2hpdGUtZGFyazogI2M0YzJjMjtcbiR3aGl0ZS13YXJtOiAjZTFlNGU2O1xuJHdoaXRlLWxpZ2h0OiAjZWRlZmYyO1xuJHdoaXRlLWxpZ2h0ZXI6ICNmY2ZjZmM7XG4kd2hpdGUteGltZGV4OiAjZjlmOWY5O1xuXG4kcmVkLXdhcm06ICNkMTM3Mzc7XG4kcmVkLWxpZ2h0OiAjZGI0OTQ5O1xuXG4kdGFza2Jhci1oZWlnaHQ6IDQ2cHg7XG4kdGFza2Jhci1saW5lLWhlaWdodDogNDBweDtcbiR0YWJzLWhlaWdodDogMzVweDtcbiR0YWJzLWhlaWdodC1zbWFsbDogMzBweDtcblxuJGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG5cbiRmb250LXNpemUtc21hbGw6IDEycHg7XG4kZm9udC1zaXplLWRlZmF1bHQ6IDE0cHg7XG4kZm9udC1zaXplLWJpZzogMTZweDtcblxuJGljb24tc2l6ZS1kZWZhdWx0OiAxOHB4O1xuXG4kZm9udC1kZWZhdWx0OiBub3JtYWwgJGZvbnQtc2l6ZS1kZWZhdWx0ICRmb250LWZhbWlseTtcblxuQGltcG9ydCAnLi92YXJpYWJsZXMvY29sb3JzJztcbiIsIi8qIGxhdGluLWV4dCAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIExpZ2h0IEl0YWxpYycpLCBsb2NhbCgnTGF0by1MaWdodEl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dV93NEJNVVRQSGp4c0k5dzJfRlFmdHg5ODk3c3haLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIExpZ2h0IEl0YWxpYycpLCBsb2NhbCgnTGF0by1MaWdodEl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dV93NEJNVVRQSGp4c0k5dzJfR3dmdHg5ODk3Zy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gSXRhbGljJyksIGxvY2FsKCdMYXRvLUl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTh3NEJNVVRQSGp4c0FVaS1xTmlYZzdlVTAud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gSXRhbGljJyksIGxvY2FsKCdMYXRvLUl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTh3NEJNVVRQSGp4c0FYQy1xTmlYZzdRLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkIEl0YWxpYycpLCBsb2NhbCgnTGF0by1Cb2xkSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTV3cV9GUWZ0eDk4OTdzeFoud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gQm9sZCBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tQm9sZEl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dV93NEJNVVRQSGp4c0k1d3FfR3dmdHg5ODk3Zy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gTGlnaHQnKSwgbG9jYWwoJ0xhdG8tTGlnaHQnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU5dzRCTVVUUEhoN1VTU3dhUEdRM3E1ZDBON3cud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gTGlnaHQnKSwgbG9jYWwoJ0xhdG8tTGlnaHQnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU5dzRCTVVUUEhoN1VTU3dpUEdRM3E1ZDAud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIFJlZ3VsYXInKSwgbG9jYWwoJ0xhdG8tUmVndWxhcicpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dXl3NEJNVVRQSGp4QXdYaVd0RkNmUTdBLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIFJlZ3VsYXInKSwgbG9jYWwoJ0xhdG8tUmVndWxhcicpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dXl3NEJNVVRQSGp4NHdYaVd0RkNjLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkJyksIGxvY2FsKCdMYXRvLUJvbGQnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU5dzRCTVVUUEhoNlVWU3dhUEdRM3E1ZDBON3cud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gQm9sZCcpLCBsb2NhbCgnTGF0by1Cb2xkJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OXc0Qk1VVFBIaDZVVlN3aVBHUTNxNWQwLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH0iLCJAaW1wb3J0ICd+c2Fzcy92YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gICAgPiAueGVfdG9vbGJhcl9jb250ZW50IHtcbiAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlLXhpbWRleDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuXG4gICAgICAgIC54ZV90b29sYmFyX2J1dHRvbiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgZm9udC1zaXplOiAkaWNvbi1zaXplLWRlZmF1bHQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgICAgICB3aWR0aDogMjlweDtcbiAgICAgICAgICAgIGhlaWdodDogMjlweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgICAgICAgICAgJi5hY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtd2FybTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZhLWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/editor/properties-area/properties-toolbar/properties-toolbar.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/editor/properties-area/properties-toolbar/properties-toolbar.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: PropertiesToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesToolbarComponent", function() { return PropertiesToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PropertiesToolbarComponent = /** @class */ (function () {
    function PropertiesToolbarComponent() {
        this.options = [];
    }
    PropertiesToolbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PropertiesToolbarComponent.prototype, "options", void 0);
    PropertiesToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-properties-toolbar',
            template: __webpack_require__(/*! ./properties-toolbar.component.html */ "./src/app/components/editor/properties-area/properties-toolbar/properties-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./properties-toolbar.component.scss */ "./src/app/components/editor/properties-area/properties-toolbar/properties-toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PropertiesToolbarComponent);
    return PropertiesToolbarComponent;
}());



/***/ }),

/***/ "./src/app/components/editor/views/editor-view/editor-view.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/editor/views/editor-view/editor-view.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"css\">\n    <ng-container *ngFor=\"let css of cssLinks\"> <link rel=\"stylesheet\" [href]=\"addHttp(css) | url\" /> </ng-container>\n</div>\n<div>\n    <ng-container *ngFor=\"let node of content\">\n        <div *ngIf=\"node.editable; else no_editable\">\n            <app-runtime-html-compiler\n                [xe_uuid]=\"node.node\"\n                [html]=\"node.html\"\n                [data]=\"node.data\"\n                (selectNode)=\"changeSelection($event)\"\n                (change)=\"changeContent($event)\"\n                (toolbar)=\"changeToolbar($event)\"\n            ></app-runtime-html-compiler>\n        </div>\n        <ng-template #no_editable> <div class=\"no-editable\" [innerHTML]=\"node.html | safeHtml\"></div> </ng-template>\n    </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/components/editor/views/editor-view/editor-view.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/editor/views/editor-view/editor-view.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdG9yL3ZpZXdzL2VkaXRvci12aWV3L2VkaXRvci12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/editor/views/editor-view/editor-view.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/editor/views/editor-view/editor-view.component.ts ***!
  \******************************************************************************/
/*! exports provided: EditorViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorViewComponent", function() { return EditorViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/api */ "./src/app/api.ts");
/* harmony import */ var _app_services_autoload_modules_service_autoload_modules_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/autoload-modules-service/autoload-modules.service */ "./src/app/services/autoload-modules-service/autoload-modules.service.ts");
/* harmony import */ var _app_models_configs_clipboardConfigs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/models/configs/clipboardConfigs */ "./src/app/models/configs/clipboardConfigs.ts");
/* harmony import */ var _utils_converters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/converters */ "./src/utils/converters.ts");
/* harmony import */ var _app_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
/* harmony import */ var _app_core_handler_editor_handler_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core/handler-editor/handler-editor */ "./src/app/core/handler-editor/handler-editor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_elements_xedit_image_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/elements/xedit/image/image.component */ "./src/app/elements/xedit/image/image.component.ts");
/* harmony import */ var _app_services_node_service_node_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/services/node-service/node.service */ "./src/app/services/node-service/node.service.ts");
/* harmony import */ var _app_core_mappers_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/core/mappers/router */ "./src/app/core/mappers/router.ts");
/* harmony import */ var _app_elements_xedit_section_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/elements/xedit/section/section.component */ "./src/app/elements/xedit/section/section.component.ts");
/* harmony import */ var _app_elements_xedit_tiny_mce_tiny_mce_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/elements/xedit/tiny-mce/tiny-mce.component */ "./src/app/elements/xedit/tiny-mce/tiny-mce.component.ts");
/* harmony import */ var _app_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/models/schema/xedit-mapper */ "./src/app/models/schema/xedit-mapper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var EditorViewComponent = /** @class */ (function () {
    function EditorViewComponent(_editorService, _moduleService, nodeService, http) {
        this._editorService = _editorService;
        this._moduleService = _moduleService;
        this.nodeService = nodeService;
        this.http = http;
        this.selectNode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toolbar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EditorViewComponent.prototype.ngOnInit = function () {
        this._moduleService.addModule('container', _app_elements_xedit_section_section_component__WEBPACK_IMPORTED_MODULE_12__["SectionComponent"]);
        this._moduleService.addModule('image', _app_elements_xedit_image_image_component__WEBPACK_IMPORTED_MODULE_9__["ImageComponent"]);
        this._moduleService.addModule('text', _app_elements_xedit_tiny_mce_tiny_mce_component__WEBPACK_IMPORTED_MODULE_13__["TinyMCEComponent"]);
        this.config();
    };
    EditorViewComponent.prototype.ngOnDestroy = function () {
        this.subscribeFile.unsubscribe();
        this.subscribeCN.unsubscribe();
        this.nodeService.set(null);
        this._editorService.setCurrentNodeModify(null);
    };
    /**
     * Config component
     */
    EditorViewComponent.prototype.config = function () {
        var _this = this;
        // Suscribe to file changes
        this.subscribeFile = this._editorService.getFile().subscribe(function (file) {
            _this.cssLinks = file.getCss();
            _this.jsLinks = file.getJs();
            _this.content = _this.parseContentToWysiwygEditor(file.getState().getContent());
        });
        this.subscribeCN = this.nodeService.get().subscribe(function (currentNode) {
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(currentNode) &&
                (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(_this.currentNode) ||
                    !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["equals"])(currentNode.getAttribute(_app_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_14__["XeditMapper"].TAG_UUID), _this.currentNode.getUuid()))) {
                _this.currentNode = currentNode;
            }
        });
    };
    EditorViewComponent.prototype.changeToolbar = function (toolbarOptions) {
        this.toolbar.emit(toolbarOptions);
    };
    EditorViewComponent.prototype.changeSelection = function (uuid) {
        this.selectNode.emit(uuid);
    };
    EditorViewComponent.prototype.changeContent = function (_a) {
        var _this = this;
        var element = _a.element, content = _a.content;
        var args = {
            node: this.currentNode,
            service: this._editorService,
            clipboardConfigs: new _app_models_configs_clipboardConfigs__WEBPACK_IMPORTED_MODULE_4__["ClipboardConfigs"](),
            htpp: this.http,
            getInfo: function (selectedId, type, setData, errorCallback, extra) {
                _app_api__WEBPACK_IMPORTED_MODULE_2__["Api"].getInfoNode(_this.http, selectedId, type, setData, errorCallback, extra);
            },
            callback: function (_a) {
                var type = _a.type, setData = _a.setData;
                // this._damService.setOpen({
                //     type: type
                // });
                // this._damService.setOnSelect(item => {
                //     if (!isNil(item)) {
                //         Api.getInfoNode(this.http, item.hash, type, setData, null, null);
                //         this._damService.close();
                //     }
                // });
            }
        };
        _app_core_handler_editor_handler_editor__WEBPACK_IMPORTED_MODULE_7__["HandlerEditor"].saveDoc(element, content, args);
    };
    /**
     * Transform json content to html with xedit root tag
     *
     * @param content
     */
    EditorViewComponent.prototype.parseContentToWysiwygEditor = function (content) {
        var _this = this;
        var renderContent = [];
        Object.keys(content).forEach(function (property) {
            var data = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["is"])(String, content[property].content)
                ? _utils_converters__WEBPACK_IMPORTED_MODULE_5__["Converters"].html2json(content[property].content)
                : content[property].content;
            var result = {
                node: property,
                editable: content[property].editable,
                html: '',
                data: null
            };
            var componentData = {};
            var contentHtml = !result.editable
                ? _utils_converters__WEBPACK_IMPORTED_MODULE_5__["Converters"].json2html(data, true, true, false, false)
                : _utils_converters__WEBPACK_IMPORTED_MODULE_5__["Converters"].json2xedit(property, data, _this._moduleService, componentData, true, true, false, false);
            if (result.editable) {
                result.data = componentData;
            }
            result.html = contentHtml;
            renderContent.push(result);
        });
        return renderContent;
    };
    EditorViewComponent.prototype.noEditableArea = function (json) {
        var html = _utils_converters__WEBPACK_IMPORTED_MODULE_5__["Converters"].json2html(json, true, true, false, false);
        return "<div class=\"no-editable\">" + html + "</div>";
    };
    EditorViewComponent.prototype.parseContentToWysiwygEditorWrapper = function (property, editable, content) {
        var START_TAG = editable ? "<" + _app_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_14__["XeditMapper"].TAG_EDITOR + " " + _app_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_14__["XeditMapper"].TAG_UUID + "=\"" + property + "\">" : '';
        var END_TAG = editable ? "</" + _app_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_14__["XeditMapper"].TAG_EDITOR + ">" : '';
        return "" + START_TAG + content + END_TAG;
    };
    EditorViewComponent.prototype.addHttp = function (resource) {
        if (!/^(f|ht)tps?:\/\//i.test(resource)) {
            resource = _app_core_mappers_router__WEBPACK_IMPORTED_MODULE_11__["default"].configUrl(_app_api__WEBPACK_IMPORTED_MODULE_2__["Api"].getResourceUrl(), { id: resource });
        }
        return resource;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EditorViewComponent.prototype, "selectNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EditorViewComponent.prototype, "toolbar", void 0);
    EditorViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editor-view',
            template: __webpack_require__(/*! ./editor-view.component.html */ "./src/app/components/editor/views/editor-view/editor-view.component.html"),
            styles: [__webpack_require__(/*! ./editor-view.component.scss */ "./src/app/components/editor/views/editor-view/editor-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_6__["EditorService"],
            _app_services_autoload_modules_service_autoload_modules_service__WEBPACK_IMPORTED_MODULE_3__["AutoloadModulesService"],
            _app_services_node_service_node_service__WEBPACK_IMPORTED_MODULE_10__["NodeService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], EditorViewComponent);
    return EditorViewComponent;
}());



/***/ }),

/***/ "./src/app/components/editor/views/metadata-view/metadata-view.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/editor/views/metadata-view/metadata-view.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"metadata-form\">\n  <app-dyn-tabform\n  [schema]=\"schema\"\n  [fetchUrl]=\"'http://ximdex.lab14/'\"\n  [questionClass]=\"'metadata-question'\"\n  [forceTabs]=\"true\"\n  (sendForm)=\"formResult($event)\"\n  ></app-dyn-tabform>\n</form>"

/***/ }),

/***/ "./src/app/components/editor/views/metadata-view/metadata-view.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/editor/views/metadata-view/metadata-view.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#metadata-form {\n  margin-top: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdG92YXIvZGV2ZWxvcC93ZWIveGVkaXQvc3JjL2FwcC9jb21wb25lbnRzL2VkaXRvci92aWV3cy9tZXRhZGF0YS12aWV3L21ldGFkYXRhLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdG9yL3ZpZXdzL21ldGFkYXRhLXZpZXcvbWV0YWRhdGEtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtZXRhZGF0YS1mb3JtIHtcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/editor/views/metadata-view/metadata-view.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/editor/views/metadata-view/metadata-view.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MetadataViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataViewComponent", function() { return MetadataViewComponent; });
/* harmony import */ var app_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MetadataViewComponent = /** @class */ (function () {
    function MetadataViewComponent(_edService) {
        this._edService = _edService;
        this.tabs = [];
        this.payload = {};
        this.schema = {
            name: 'lomes',
            title: 'LOMES',
            api: false,
            tabs: [
                {
                    title: 'Pestaña 1',
                    sections: [
                        {
                            title: 'section 1',
                            fields: [
                                {
                                    object: {
                                        realName: 'one',
                                        key: 'one',
                                        label: 'First Field'
                                    },
                                    type: 'text'
                                },
                                {
                                    object: {
                                        realName: 'onehalf',
                                        key: 'onehalf',
                                        label: 'First and a half Field'
                                    },
                                    type: 'text'
                                },
                                {
                                    object: {
                                        realName: 'two',
                                        key: 'two',
                                        label: 'Second Field',
                                        multi: true,
                                        searchable: true,
                                        options: [
                                            { key: 'option1', value: 'Option 1' },
                                            { key: 'option2', value: 'Option 2' },
                                            { key: 'option3', value: 'Option 3' }
                                        ]
                                    },
                                    type: 'dropdown',
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'Pestaña 1',
                    sections: [
                        {
                            title: 'section 2',
                            fields: [
                                {
                                    object: {
                                        realName: 'one',
                                        key: 'one',
                                        label: 'First Field'
                                    },
                                    type: 'text'
                                },
                                {
                                    object: {
                                        realName: 'onehalf',
                                        key: 'onehalf',
                                        label: 'First and a half Field'
                                    },
                                    type: 'text'
                                },
                                {
                                    object: {
                                        realName: 'two',
                                        key: 'two',
                                        label: 'Second Field',
                                        multi: true,
                                        searchable: true,
                                        options: [
                                            { key: 'option1', value: 'Option 1' },
                                            { key: 'option2', value: 'Option 2' },
                                            { key: 'option3', value: 'Option 3' }
                                        ]
                                    },
                                    type: 'dropdown',
                                }
                            ]
                        }
                    ]
                }
            ]
        };
        this.meta = {};
        this.meta = _edService.getUpdatedDocument();
    }
    MetadataViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.metaMap(this.meta);
        this._edService.getFile().subscribe(function (file) {
            _this.file = file;
            if (file != null) {
                file['metadata'] = _this.payload;
            }
        });
    };
    MetadataViewComponent.prototype.formResult = function (event) {
        this.payload = this.adaptResponse(event);
        this.file['metadata'] = this.payload;
        this._edService.setFile(this.file);
    };
    MetadataViewComponent.prototype.adaptResponse = function (response) {
        var result = {};
        Object.keys(response).forEach(function (key) {
            var ids = key.split('-');
            var group_id = ids[0];
            var meta_id = ids[1];
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["hasIn"])(group_id, result)) {
                result[group_id] = {};
            }
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(response[key])) {
                result[group_id][meta_id] = response[key];
            }
        });
        return result;
    };
    MetadataViewComponent.prototype.mapTab = function (meta) {
        var sections = this.mapSections(meta.groups);
        return ({
            title: meta.name,
            sections: sections
        });
    };
    MetadataViewComponent.prototype.mapTabs = function (metas) {
        for (var _i = 0, _a = Object.keys(metas); _i < _a.length; _i++) {
            var key = _a[_i];
            this.tabs.push(this.mapTab(metas[key]));
        }
    };
    MetadataViewComponent.prototype.mapSections = function (groups) {
        var _this = this;
        var sections = groups.map(function (group) {
            var fields = _this.mapFields(group.metadata, group.id);
            return ({
                title: group.name,
                fields: fields
            });
        });
        return sections;
    };
    MetadataViewComponent.prototype.mapFields = function (metadata, group_id) {
        var fields = metadata.map(function (metafield) {
            return ({
                object: {
                    realName: group_id + "-" + metafield.id,
                    key: group_id + "-" + metafield.id,
                    label: metafield.name,
                    order: metafield.id,
                    val: metafield.value
                },
                type: metafield.type,
            });
        });
        return fields;
    };
    MetadataViewComponent.prototype.metaMap = function (meta) {
        this.mapTabs(meta.metas);
        this.schema = {
            name: 'xedit_meta',
            title: 'Metadata',
            api: false,
            tabs: this.tabs
        };
    };
    MetadataViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-metadata-view',
            template: __webpack_require__(/*! ./metadata-view.component.html */ "./src/app/components/editor/views/metadata-view/metadata-view.component.html"),
            styles: [__webpack_require__(/*! ./metadata-view.component.scss */ "./src/app/components/editor/views/metadata-view/metadata-view.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_0__["EditorService"]])
    ], MetadataViewComponent);
    return MetadataViewComponent;
}());



/***/ }),

/***/ "./src/app/components/editor/views/text-view/text-view.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/editor/views/text-view/text-view.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <p *ngIf=\"!isHtmlValid\" style=\"color:rgb(233, 113, 113)\">HTML INVÁLIDO</p>\n</div>\n\n<div id=\"tabs\">\n    <ng-container *ngFor=\"let editorNode of editorNodes; let i = index\">\n        <div [ngClass]=\"{selected: (openEditor.id === editorNode.id)}\" *ngIf=\"openEditor.id === editorNode.id; else actionTab\">\n            {{ editorNode.title }}\n        </div>\n        <ng-template #actionTab>\n            <div [ngClass]=\"{selected: (openEditor.id === editorNode.id)}\" (click)=\"changeView(editorNode, i)\">\n                {{ editorNode.title }}\n            </div>\n        </ng-template>\n    </ng-container>\n</div>\n\n<ace-editor #aceEditor [text]=\"getRenderContent()\" id=\"getId()\" [durationBeforeCallback]=500 [autoUpdateContent]=\"reloadAceEditor\"\n    [readOnly]=\"isReadOnly()\" [theme]=\"'dreamweaver'\" [mode]=\"'html'\" [ngStyle]=\"styleMode\"></ace-editor>"

/***/ }),

/***/ "./src/app/components/editor/views/text-view/text-view.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/editor/views/text-view/text-view.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  flex-grow: 1;\n  background-color: #fcfcfc;\n  height: 100%;\n  display: block; }\n:host > #tabs {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    display: flex;\n    flex-direction: row;\n    background-color: #e1e4e6;\n    font: 14px;\n    text-transform: uppercase;\n    font-size: 12px;\n    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);\n    position: relative;\n    z-index: 5; }\n:host > #tabs > div {\n      box-sizing: border-box;\n      height: 30px;\n      padding: 0 10px;\n      line-height: 30px;\n      border-bottom: 2px solid transparent;\n      color: #959595;\n      transition: color 0.3s ease-in-out, border-bottom-color 0.3s ease-in-out;\n      cursor: pointer; }\n:host > #tabs > div:hover {\n        border-bottom-color: #44c4b1; }\n:host > #tabs > div.selected {\n        border-bottom-color: #3a9e8f;\n        color: #1e574e; }\n:host > ace-editor {\n    position: relative;\n    z-index: 3; }\n.ace_static_highlight {\n  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', 'Droid Sans Mono', monospace;\n  font-size: 12px;\n  white-space: pre-wrap; }\n.ace_static_highlight .ace_gutter {\n  width: 2em;\n  text-align: right;\n  padding: 0 3px 0 0;\n  margin-right: 3px; }\n.ace_static_highlight.ace_show_gutter .ace_line {\n  padding-left: 2.6em; }\n.ace_static_highlight .ace_line {\n  position: relative; }\n.ace_static_highlight .ace_gutter-cell {\n  -moz-user-select: -moz-none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  position: absolute; }\n.ace_static_highlight .ace_gutter-cell:before {\n  content: counter(ace_line, decimal);\n  counter-increment: ace_line; }\n.ace_static_highlight {\n  counter-reset: ace_line; }\n.ace-chrome .ace_gutter {\n  background: #ebebeb;\n  color: #333;\n  overflow: hidden; }\n.ace-chrome .ace_print-margin {\n  width: 1px;\n  background: #e8e8e8; }\n.ace-chrome {\n  background-color: #FFFFFF;\n  color: black; }\n.ace-chrome .ace_cursor {\n  color: black; }\n.ace-chrome .ace_invisible {\n  color: #bfbfbf; }\n.ace-chrome .ace_constant.ace_buildin {\n  color: #5848f6; }\n.ace-chrome .ace_constant.ace_language {\n  color: #585cf6; }\n.ace-chrome .ace_constant.ace_library {\n  color: #06960e; }\n.ace-chrome .ace_invalid {\n  background-color: #990000;\n  color: white; }\n.ace-chrome .ace_support.ace_function {\n  color: #3c4c72; }\n.ace-chrome .ace_support.ace_constant {\n  color: #06960e; }\n.ace-chrome .ace_support.ace_type,\n.ace-chrome .ace_support.ace_class.ace-chrome .ace_support.ace_other {\n  color: #6d79de; }\n.ace-chrome .ace_variable.ace_parameter {\n  font-style: italic;\n  color: #FD971F; }\n.ace-chrome .ace_keyword.ace_operator {\n  color: #687687; }\n.ace-chrome .ace_comment {\n  color: #236e24; }\n.ace-chrome .ace_comment.ace_doc {\n  color: #236e24; }\n.ace-chrome .ace_comment.ace_doc.ace_tag {\n  color: #236e24; }\n.ace-chrome .ace_constant.ace_numeric {\n  color: mediumblue; }\n.ace-chrome .ace_variable {\n  color: #318495; }\n.ace-chrome .ace_xml-pe {\n  color: #68685b; }\n.ace-chrome .ace_entity.ace_name.ace_function {\n  color: #0000A2; }\n.ace-chrome .ace_heading {\n  color: #0c07ff; }\n.ace-chrome .ace_list {\n  color: #b90690; }\n.ace-chrome .ace_marker-layer .ace_selection {\n  background: #b5d5ff; }\n.ace-chrome .ace_marker-layer .ace_step {\n  background: #fcff00; }\n.ace-chrome .ace_marker-layer .ace_stack {\n  background: #a4e565; }\n.ace-chrome .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid silver; }\n.ace-chrome .ace_marker-layer .ace_active-line {\n  background: rgba(0, 0, 0, 0.07); }\n.ace-chrome .ace_gutter-active-line {\n  background-color: #dcdcdc; }\n.ace-chrome .ace_marker-layer .ace_selected-word {\n  background: #fafaff;\n  border: 1px solid #c8c8fa; }\n.ace-chrome .ace_storage,\n.ace-chrome .ace_keyword,\n.ace-chrome .ace_meta.ace_tag {\n  color: #930f80; }\n.ace-chrome .ace_string.ace_regex {\n  color: red; }\n.ace-chrome .ace_string {\n  color: #1A1AA6; }\n.ace-chrome .ace_entity.ace_other.ace_attribute-name {\n  color: #994409; }\n.ace-chrome .ace_indent-guide {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdG92YXIvZGV2ZWxvcC93ZWIveGVkaXQvc3JjL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvc2Fzcy9mb250cy9fbGF0by5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvYXBwL2NvbXBvbmVudHMvZWRpdG9yL3ZpZXdzL3RleHQtdmlldy90ZXh0LXZpZXcuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXRvdmFyL2RldmVsb3Avd2ViL3hlZGl0L3NyYy9zYXNzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsc0VBQVk7QUFGWiw4RUFBQTtBQ0FBLGNBQUE7QUFDQTtFQUNJLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDhJQUE4STtFQUM5SSxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0SUFBNEk7RUFDNUkseUtBQXlLLEVBQUE7QUFFM0ssY0FBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0hBQStIO0VBQy9ILG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDZIQUE2SDtFQUM3SCx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0SUFBNEk7RUFDNUksbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMElBQTBJO0VBQzFJLHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLCtIQUErSDtFQUMvSCxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0SEFBNEg7RUFDNUgseUtBQXlLLEVBQUE7QUFFM0ssY0FBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0hBQStIO0VBQy9ILG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRIQUE0SDtFQUM1SCx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw2SEFBNkg7RUFDN0gsbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMEhBQTBIO0VBQzFILHlLQUF5SyxFQUFBO0FDNUY3SztFQUNJLFlBQVk7RUFDWix5QkZtQm1CO0VFbEJuQixZQUFZO0VBQ1osY0FBYyxFQUFBO0FBSmxCO0lBT1EseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJGU1k7SUVSWixVRndCZ0I7SUV2QmhCLHlCQUF5QjtJQUN6QixlRnFCYztJR3ZCbEIsOENBTDBCO0lEU3RCLGtCQUFrQjtJQUNsQixVQUFVLEVBQUE7QUFoQmxCO01BbUJZLHNCQUFzQjtNQUN0QixZRlVZO01FVFosZUFBZTtNQUNmLGlCRlFZO01FUFosb0NBQW9DO01BQ3BDLGNGUFU7TUVRVix3RUFBd0U7TUFDeEUsZUFBZSxFQUFBO0FBMUIzQjtRQTZCZ0IsNEJGbEJLLEVBQUE7QUVYckI7UUFpQ2dCLDRCRnhCSTtRRXlCSixjRjFCTSxFQUFBO0FFUnRCO0lBd0NRLGtCQUFrQjtJQUNsQixVQUFVLEVBQUE7QUFLbEI7RUFDSSwwR0FBMEc7RUFDMUcsZUFBZTtFQUNmLHFCQUNKLEVBQUE7QUFFQTtFQUNJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBO0FBR3JCO0VBQ0ksbUJBQW1CLEVBQUE7QUFHdkI7RUFDSSxrQkFBa0IsRUFBQTtBQUd0QjtFQUNJLDJCQUEyQjtFQUUzQix5QkFBeUI7RUFDekIscUJBQWlCO01BQWpCLGlCQUFpQjtFQUNqQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxrQkFBa0IsRUFBQTtBQUd0QjtFQUNJLG1DQUFtQztFQUNuQywyQkFBMkIsRUFBQTtBQUcvQjtFQUNJLHVCQUF1QixFQUFBO0FBRzNCO0VBQ0ksbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTtBQUdwQjtFQUNJLFVBQVU7RUFDVixtQkFBbUIsRUFBQTtBQUd2QjtFQUNJLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7QUFHaEI7RUFDSSxZQUFZLEVBQUE7QUFHaEI7RUFDSSxjQUF5QixFQUFBO0FBRzdCO0VBQ0ksY0FBdUIsRUFBQTtBQUczQjtFQUNJLGNBQXVCLEVBQUE7QUFHM0I7RUFDSSxjQUFzQixFQUFBO0FBRzFCO0VBQ0kseUJBQWdDO0VBQ2hDLFlBQVksRUFBQTtBQUtoQjtFQUNJLGNBQXVCLEVBQUE7QUFHM0I7RUFDSSxjQUFzQixFQUFBO0FBRzFCOztFQUVJLGNBQXlCLEVBQUE7QUFHN0I7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBO0FBR2xCO0VBQ0ksY0FBeUIsRUFBQTtBQUc3QjtFQUNJLGNBQWMsRUFBQTtBQUdsQjtFQUNJLGNBQWMsRUFBQTtBQUdsQjtFQUNJLGNBQWMsRUFBQTtBQUdsQjtFQUNJLGlCQUFxQixFQUFBO0FBR3pCO0VBQ0ksY0FBd0IsRUFBQTtBQUc1QjtFQUNJLGNBQXdCLEVBQUE7QUFHNUI7RUFDSSxjQUFjLEVBQUE7QUFHbEI7RUFDSSxjQUFzQixFQUFBO0FBRzFCO0VBQ0ksY0FBdUIsRUFBQTtBQUczQjtFQUNJLG1CQUE4QixFQUFBO0FBR2xDO0VBQ0ksbUJBQTRCLEVBQUE7QUFHaEM7RUFDSSxtQkFBOEIsRUFBQTtBQUdsQztFQUNJLHFCQUFxQjtFQUNyQix3QkFBb0MsRUFBQTtBQUd4QztFQUNJLCtCQUErQixFQUFBO0FBR25DO0VBQ0kseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSxtQkFBOEI7RUFDOUIseUJBQW9DLEVBQUE7QUFHeEM7OztFQUdJLGNBQXdCLEVBQUE7QUFHNUI7RUFDSSxVQUFxQixFQUFBO0FBR3pCO0VBQ0ksY0FBYyxFQUFBO0FBR2xCO0VBQ0ksY0FBYyxFQUFBO0FBR2xCO0VBQ0ksZ0tBQWdLLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkaXRvci92aWV3cy90ZXh0LXZpZXcvdGV4dC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCAnfnNhc3MvZm9udHMvbGF0byc7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjAuNi9jc3MvYWxsLmNzcycpO1xuQGltcG9ydCAnfnNhc3MvbWl4aW5zJztcblxuJGJsYWNrLWRhcmtlcjogIzIwMjYyNDtcbiRibGFjay1kYXJrOiAjM2Y0OTQ2O1xuJGJsYWNrLXdhcm06ICM0NzRkNGI7XG4kYmxhY2stbGlnaHQ6ICM1ZjYzNjI7XG5cbiRncmVlbi1kYXJrZXI6ICMxZTU3NGU7XG4kZ3JlZW4tZGFyazogIzNhOWU4ZjtcbiRncmVlbi13YXJtOiAjM2VhMDkxO1xuJGdyZWVuLWxpZ2h0OiAjNDRjNGIxO1xuXG4kYmx1ZS1kYXJrOiAjMjE0ZTYxO1xuJGJsdWUtbGlnaHQ6ICMyOTVlNzU7XG4kYmx1ZS1saWdodGVyOiAjMzE3MThkO1xuXG4kd2hpdGUtZGFya2VyOiAjOTU5NTk1O1xuJHdoaXRlLWRhcms6ICNjNGMyYzI7XG4kd2hpdGUtd2FybTogI2UxZTRlNjtcbiR3aGl0ZS1saWdodDogI2VkZWZmMjtcbiR3aGl0ZS1saWdodGVyOiAjZmNmY2ZjO1xuJHdoaXRlLXhpbWRleDogI2Y5ZjlmOTtcblxuJHJlZC13YXJtOiAjZDEzNzM3O1xuJHJlZC1saWdodDogI2RiNDk0OTtcblxuJHRhc2tiYXItaGVpZ2h0OiA0NnB4O1xuJHRhc2tiYXItbGluZS1oZWlnaHQ6IDQwcHg7XG4kdGFicy1oZWlnaHQ6IDM1cHg7XG4kdGFicy1oZWlnaHQtc21hbGw6IDMwcHg7XG5cbiRmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuXG4kZm9udC1zaXplLXNtYWxsOiAxMnB4O1xuJGZvbnQtc2l6ZS1kZWZhdWx0OiAxNHB4O1xuJGZvbnQtc2l6ZS1iaWc6IDE2cHg7XG5cbiRpY29uLXNpemUtZGVmYXVsdDogMThweDtcblxuJGZvbnQtZGVmYXVsdDogbm9ybWFsICRmb250LXNpemUtZGVmYXVsdCAkZm9udC1mYW1pbHk7XG5cbkBpbXBvcnQgJy4vdmFyaWFibGVzL2NvbG9ycyc7XG4iLCIvKiBsYXRpbi1leHQgKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBMaWdodCBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tTGlnaHRJdGFsaWMnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnVfdzRCTVVUUEhqeHNJOXcyX0ZRZnR4OTg5N3N4Wi53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBMaWdodCBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tTGlnaHRJdGFsaWMnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnVfdzRCTVVUUEhqeHNJOXcyX0d3ZnR4OTg5N2cud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEl0YWxpYycpLCBsb2NhbCgnTGF0by1JdGFsaWMnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU4dzRCTVVUUEhqeHNBVWktcU5pWGc3ZVUwLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEl0YWxpYycpLCBsb2NhbCgnTGF0by1JdGFsaWMnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU4dzRCTVVUUEhqeHNBWEMtcU5pWGc3US53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gQm9sZCBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tQm9sZEl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dV93NEJNVVRQSGp4c0k1d3FfRlFmdHg5ODk3c3haLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEJvbGQgSXRhbGljJyksIGxvY2FsKCdMYXRvLUJvbGRJdGFsaWMnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnVfdzRCTVVUUEhqeHNJNXdxX0d3ZnR4OTg5N2cud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIExpZ2h0JyksIGxvY2FsKCdMYXRvLUxpZ2h0JyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OXc0Qk1VVFBIaDdVU1N3YVBHUTNxNWQwTjd3LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIExpZ2h0JyksIGxvY2FsKCdMYXRvLUxpZ2h0JyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OXc0Qk1VVFBIaDdVU1N3aVBHUTNxNWQwLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBSZWd1bGFyJyksIGxvY2FsKCdMYXRvLVJlZ3VsYXInKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnV5dzRCTVVUUEhqeEF3WGlXdEZDZlE3QS53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBSZWd1bGFyJyksIGxvY2FsKCdMYXRvLVJlZ3VsYXInKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnV5dzRCTVVUUEhqeDR3WGlXdEZDYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gQm9sZCcpLCBsb2NhbCgnTGF0by1Cb2xkJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OXc0Qk1VVFBIaDZVVlN3YVBHUTNxNWQwTjd3LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEJvbGQnKSwgbG9jYWwoJ0xhdG8tQm9sZCcpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTl3NEJNVVRQSGg2VVZTd2lQR1EzcTVkMC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9IiwiQGltcG9ydCAnfnNhc3MvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtbGlnaHRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICA+ICN0YWJzIHtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS13YXJtO1xuICAgICAgICBmb250OiAkZm9udC1zaXplLWRlZmF1bHQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbWFsbDtcbiAgICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdyhib3R0b20sIDAuNSk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogNTtcblxuICAgICAgICA+IGRpdiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgaGVpZ2h0OiAkdGFicy1oZWlnaHQtc21hbGw7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJHRhYnMtaGVpZ2h0LXNtYWxsO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZS1kYXJrZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW4tb3V0LCBib3JkZXItYm90dG9tLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRncmVlbi1saWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGdyZWVuLWRhcms7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmVlbi1kYXJrZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICA+IGFjZS1lZGl0b3Ige1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDM7XG4gICAgfVxufVxuXG5cbi5hY2Vfc3RhdGljX2hpZ2hsaWdodCB7XG4gICAgZm9udC1mYW1pbHk6ICdNb25hY28nLCAnTWVubG8nLCAnVWJ1bnR1IE1vbm8nLCAnQ29uc29sYXMnLCAnc291cmNlLWNvZGUtcHJvJywgJ0Ryb2lkIFNhbnMgTW9ubycsIG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwXG59XG5cbi5hY2Vfc3RhdGljX2hpZ2hsaWdodCAuYWNlX2d1dHRlciB7XG4gICAgd2lkdGg6IDJlbTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nOiAwIDNweCAwIDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5cbi5hY2Vfc3RhdGljX2hpZ2hsaWdodC5hY2Vfc2hvd19ndXR0ZXIgLmFjZV9saW5lIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNmVtO1xufVxuXG4uYWNlX3N0YXRpY19oaWdobGlnaHQgLmFjZV9saW5lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hY2Vfc3RhdGljX2hpZ2hsaWdodCAuYWNlX2d1dHRlci1jZWxsIHtcbiAgICAtbW96LXVzZXItc2VsZWN0OiAtbW96LW5vbmU7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmFjZV9zdGF0aWNfaGlnaGxpZ2h0IC5hY2VfZ3V0dGVyLWNlbGw6YmVmb3JlIHtcbiAgICBjb250ZW50OiBjb3VudGVyKGFjZV9saW5lLCBkZWNpbWFsKTtcbiAgICBjb3VudGVyLWluY3JlbWVudDogYWNlX2xpbmU7XG59XG5cbi5hY2Vfc3RhdGljX2hpZ2hsaWdodCB7XG4gICAgY291bnRlci1yZXNldDogYWNlX2xpbmU7XG59XG5cbi5hY2UtY2hyb21lIC5hY2VfZ3V0dGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hY2UtY2hyb21lIC5hY2VfcHJpbnQtbWFyZ2luIHtcbiAgICB3aWR0aDogMXB4O1xuICAgIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG59XG5cbi5hY2UtY2hyb21lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9jdXJzb3Ige1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9pbnZpc2libGUge1xuICAgIGNvbG9yOiByZ2IoMTkxLCAxOTEsIDE5MSk7XG59XG5cbi5hY2UtY2hyb21lIC5hY2VfY29uc3RhbnQuYWNlX2J1aWxkaW4ge1xuICAgIGNvbG9yOiByZ2IoODgsIDcyLCAyNDYpO1xufVxuXG4uYWNlLWNocm9tZSAuYWNlX2NvbnN0YW50LmFjZV9sYW5ndWFnZSB7XG4gICAgY29sb3I6IHJnYig4OCwgOTIsIDI0Nik7XG59XG5cbi5hY2UtY2hyb21lIC5hY2VfY29uc3RhbnQuYWNlX2xpYnJhcnkge1xuICAgIGNvbG9yOiByZ2IoNiwgMTUwLCAxNCk7XG59XG5cbi5hY2UtY2hyb21lIC5hY2VfaW52YWxpZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MywgMCwgMCk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWNlLWNocm9tZSAuYWNlX2ZvbGQge31cblxuLmFjZS1jaHJvbWUgLmFjZV9zdXBwb3J0LmFjZV9mdW5jdGlvbiB7XG4gICAgY29sb3I6IHJnYig2MCwgNzYsIDExNCk7XG59XG5cbi5hY2UtY2hyb21lIC5hY2Vfc3VwcG9ydC5hY2VfY29uc3RhbnQge1xuICAgIGNvbG9yOiByZ2IoNiwgMTUwLCAxNCk7XG59XG5cbi5hY2UtY2hyb21lIC5hY2Vfc3VwcG9ydC5hY2VfdHlwZSxcbi5hY2UtY2hyb21lIC5hY2Vfc3VwcG9ydC5hY2VfY2xhc3MuYWNlLWNocm9tZSAuYWNlX3N1cHBvcnQuYWNlX290aGVyIHtcbiAgICBjb2xvcjogcmdiKDEwOSwgMTIxLCAyMjIpO1xufVxuXG4uYWNlLWNocm9tZSAuYWNlX3ZhcmlhYmxlLmFjZV9wYXJhbWV0ZXIge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjb2xvcjogI0ZEOTcxRjtcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9rZXl3b3JkLmFjZV9vcGVyYXRvciB7XG4gICAgY29sb3I6IHJnYigxMDQsIDExOCwgMTM1KTtcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9jb21tZW50IHtcbiAgICBjb2xvcjogIzIzNmUyNDtcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9jb21tZW50LmFjZV9kb2Mge1xuICAgIGNvbG9yOiAjMjM2ZTI0O1xufVxuXG4uYWNlLWNocm9tZSAuYWNlX2NvbW1lbnQuYWNlX2RvYy5hY2VfdGFnIHtcbiAgICBjb2xvcjogIzIzNmUyNDtcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9jb25zdGFudC5hY2VfbnVtZXJpYyB7XG4gICAgY29sb3I6IHJnYigwLCAwLCAyMDUpO1xufVxuXG4uYWNlLWNocm9tZSAuYWNlX3ZhcmlhYmxlIHtcbiAgICBjb2xvcjogcmdiKDQ5LCAxMzIsIDE0OSk7XG59XG5cbi5hY2UtY2hyb21lIC5hY2VfeG1sLXBlIHtcbiAgICBjb2xvcjogcmdiKDEwNCwgMTA0LCA5MSk7XG59XG5cbi5hY2UtY2hyb21lIC5hY2VfZW50aXR5LmFjZV9uYW1lLmFjZV9mdW5jdGlvbiB7XG4gICAgY29sb3I6ICMwMDAwQTI7XG59XG5cbi5hY2UtY2hyb21lIC5hY2VfaGVhZGluZyB7XG4gICAgY29sb3I6IHJnYigxMiwgNywgMjU1KTtcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9saXN0IHtcbiAgICBjb2xvcjogcmdiKDE4NSwgNiwgMTQ0KTtcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9tYXJrZXItbGF5ZXIgLmFjZV9zZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6IHJnYigxODEsIDIxMywgMjU1KTtcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9tYXJrZXItbGF5ZXIgLmFjZV9zdGVwIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjUyLCAyNTUsIDApO1xufVxuXG4uYWNlLWNocm9tZSAuYWNlX21hcmtlci1sYXllciAuYWNlX3N0YWNrIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTY0LCAyMjksIDEwMSk7XG59XG5cbi5hY2UtY2hyb21lIC5hY2VfbWFya2VyLWxheWVyIC5hY2VfYnJhY2tldCB7XG4gICAgbWFyZ2luOiAtMXB4IDAgMCAtMXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTIsIDE5MiwgMTkyKTtcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9tYXJrZXItbGF5ZXIgLmFjZV9hY3RpdmUtbGluZSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA3KTtcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9ndXR0ZXItYWN0aXZlLWxpbmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2RjZGM7XG59XG5cbi5hY2UtY2hyb21lIC5hY2VfbWFya2VyLWxheWVyIC5hY2Vfc2VsZWN0ZWQtd29yZCB7XG4gICAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTUpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDAsIDIwMCwgMjUwKTtcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9zdG9yYWdlLFxuLmFjZS1jaHJvbWUgLmFjZV9rZXl3b3JkLFxuLmFjZS1jaHJvbWUgLmFjZV9tZXRhLmFjZV90YWcge1xuICAgIGNvbG9yOiByZ2IoMTQ3LCAxNSwgMTI4KTtcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9zdHJpbmcuYWNlX3JlZ2V4IHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMClcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9zdHJpbmcge1xuICAgIGNvbG9yOiAjMUExQUE2O1xufVxuXG4uYWNlLWNocm9tZSAuYWNlX2VudGl0eS5hY2Vfb3RoZXIuYWNlX2F0dHJpYnV0ZS1uYW1lIHtcbiAgICBjb2xvcjogIzk5NDQwOTtcbn1cblxuLmFjZS1jaHJvbWUgLmFjZV9pbmRlbnQtZ3VpZGUge1xuICAgIGJhY2tncm91bmQ6IHVybChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQ0NBWUFBQUNaZ2JZbkFBQUFFMGxFUVZRSW1XUDQvLy8vZjRiTGx5Ly9Cd0FtVmdkMS93MTEvZ0FBQUFCSlJVNUVya0pnZ2c9PVwiKSByaWdodCByZXBlYXQteTtcbn0iLCJAbWl4aW4gYm94LXNoYWRvdyAoJHBvcywgJG9wYWNpdHksICRpbXBvcnRhbnQ6IGZhbHNlKSB7XG4gICAgJF9wb3M6IDBweCAwcHggM3B4IDBweCA7XG4gICAgQGlmKCRwb3MgPT0gdG9wKXtcbiAgICAgICAgJF9wb3M6IDBweCAzcHggMTFweCAwcHggO1xuICAgIH1AZWxzZSBpZigkcG9zID09IGxlZnQpIHtcbiAgICAgICAgJF9wb3M6IC0ycHggMHB4IDExcHggLTRweDtcbiAgICB9XG5cbiAgICAkcmdiOiByZ2JhKDAsMCwwLCRvcGFjaXR5KTtcbiAgICBAaWYoJGltcG9ydGFudCA9PSB0cnVlKXsgICAgICAgIFxuICAgICAgICAkcmdiOiByZ2JhKDAsMCwwLCRvcGFjaXR5KSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGJveC1zaGFkb3c6ICRfcG9zICRyZ2I7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/editor/views/text-view/text-view.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/editor/views/text-view/text-view.component.ts ***!
  \**************************************************************************/
/*! exports provided: TextViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextViewComponent", function() { return TextViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var pretty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pretty */ "./node_modules/pretty/index.js");
/* harmony import */ var pretty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pretty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var ng2_ace_editor_src_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-ace-editor/src/component */ "./node_modules/ng2-ace-editor/src/component.js");
/* harmony import */ var _services_state_service_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/state-service/state.service */ "./src/app/services/state-service/state.service.ts");
/* harmony import */ var _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
/* harmony import */ var _utils_converters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @utils/converters */ "./src/utils/converters.ts");
/* harmony import */ var brace_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! brace/index */ "./node_modules/brace/index.js");
/* harmony import */ var brace_index__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(brace_index__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var brace_theme_dreamweaver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! brace/theme/dreamweaver */ "./node_modules/brace/theme/dreamweaver.js");
/* harmony import */ var brace_theme_dreamweaver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(brace_theme_dreamweaver__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var brace_mode_html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! brace/mode/html */ "./node_modules/brace/mode/html.js");
/* harmony import */ var brace_mode_html__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(brace_mode_html__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var brace_snippets_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! brace/snippets/html */ "./node_modules/brace/snippets/html.js");
/* harmony import */ var brace_snippets_html__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(brace_snippets_html__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var brace_ext_language_tools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! brace/ext/language_tools */ "./node_modules/brace/ext/language_tools.js");
/* harmony import */ var brace_ext_language_tools__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(brace_ext_language_tools__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var brace_ext_searchbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! brace/ext/searchbox */ "./node_modules/brace/ext/searchbox.js");
/* harmony import */ var brace_ext_searchbox__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(brace_ext_searchbox__WEBPACK_IMPORTED_MODULE_12__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var TextViewComponent = /** @class */ (function () {
    function TextViewComponent(_editorService, _stateService) {
        this._editorService = _editorService;
        this._stateService = _stateService;
        this.editorNodes = null;
        this.openEditor = {};
        this.reloadAceEditor = false;
        this.reload = false;
        this.isHtmlValid = true;
        this.styleMode = {
            height: '100%',
            width: '100%',
            overflow: 'auto'
        };
    }
    /************* LIFE CYCLE *************/
    TextViewComponent.prototype.ngOnInit = function () {
        this._editorService.setLoading(true);
        this.config();
        this._editorService.setLoading(false);
    };
    TextViewComponent.prototype.ngAfterViewInit = function () {
        this.initEditor();
    };
    TextViewComponent.prototype.ngOnDestroy = function () {
        this.subscribeFile.unsubscribe();
    };
    /************* END LIFE CYCLE *************/
    TextViewComponent.prototype.changeView = function (openEditor, index) {
        this.openEditor = openEditor;
        this.openEditor['index'] = index;
        this.reloadAceEditor = true;
        if (!this.openEditor['editable']) {
            this.styleMode['backgroundColor'] = '#e8e8e8';
        }
        else {
            delete this.styleMode['backgroundColor'];
        }
    };
    TextViewComponent.prototype.getId = function () {
        return this.openEditor.hasOwnProperty('id') ? this.openEditor['id'] : null;
    };
    TextViewComponent.prototype.isReadOnly = function () {
        return this.openEditor.hasOwnProperty('editable') && !this.openEditor['editable'];
    };
    TextViewComponent.prototype.getRenderContent = function () {
        return this.openEditor.hasOwnProperty('renderContent') ? this.openEditor['renderContent'] : '';
    };
    TextViewComponent.prototype.config = function () {
        var _this = this;
        this.subscribeFile = this._editorService.getFile().subscribe(function (file) {
            _this.editorNodes = _this.parseToHtmlToEditors(file.getState().content);
            for (var key in _this.editorNodes) {
                if (_this.editorNodes[key].editable) {
                    _this.changeView(_this.editorNodes[key], key);
                    return;
                }
            }
        });
    };
    /**
     *
     * @param content
     */
    TextViewComponent.prototype.parseToHtmlToEditors = function (content) {
        var editorNodes = [];
        Object.keys(content).forEach(function (property) {
            var node = content[property];
            editorNodes.push({
                id: property,
                title: node.title,
                editable: node.editable,
                renderContent: Object(ramda__WEBPACK_IMPORTED_MODULE_2__["is"])(String, node.content)
                    ? node.content
                    : pretty__WEBPACK_IMPORTED_MODULE_1___default()(_utils_converters__WEBPACK_IMPORTED_MODULE_6__["Converters"].json2html(node.content, false, false)),
                editor: null
            });
        });
        return editorNodes;
    };
    TextViewComponent.prototype.initEditor = function () {
        var _this = this;
        var _editor = this.editor.getEditor();
        var session = _editor.getSession();
        _editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: false
        });
        _editor.on('focus', function (e) {
            _this.reloadAceEditor = false;
        });
        _editor.on('blur', function (e) {
            _this.reloadAceEditor = true;
            setTimeout(function () {
                _this._editorService.getFileStateValue().snapshot();
            }, 1000);
        });
        session.on('change', function (e) {
            if (_editor.curOp && _editor.curOp.command.name) {
                // Only if is user trigger event
                _this.editorNodes[_this.openEditor['index']].renderContent = _editor.getValue();
                if (_this.editor.timeoutSaving != null) {
                    clearTimeout(_this.editor.timeoutSaving);
                }
                _this.editor.timeoutSaving = setTimeout(function () {
                    _this._editorService.save(_this.openEditor['id'], _editor.getValue(), 'Edit mode text');
                    _this.editor.timeoutSaving = null;
                }, _this.editor._durationBeforeCallback);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('aceEditor'),
        __metadata("design:type", ng2_ace_editor_src_component__WEBPACK_IMPORTED_MODULE_3__["AceEditorComponent"])
    ], TextViewComponent.prototype, "editor", void 0);
    TextViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-text-view',
            template: __webpack_require__(/*! ./text-view.component.html */ "./src/app/components/editor/views/text-view/text-view.component.html"),
            styles: [__webpack_require__(/*! ./text-view.component.scss */ "./src/app/components/editor/views/text-view/text-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_5__["EditorService"], _services_state_service_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]])
    ], TextViewComponent);
    return TextViewComponent;
}());



/***/ }),

/***/ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/api/Commands.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/api/Commands.ts ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Dialog */ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/ui/Dialog.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");


var register = function (editor, getInfo, callback) {
    editor.addCommand('mceDam', function () {
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('dam_callback', editor.settings)) {
            editor.settings.dam_callback('image');
        }
        // Dialog.open(editor, 'image', getInfo, callback);
    });
    editor.addCommand('mceDamLink', function () {
        _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__["default"].open(editor, 'link', getInfo, callback);
    });
    editor.addCommand('mceDamVideo', function () {
        _ui_Dialog__WEBPACK_IMPORTED_MODULE_0__["default"].open(editor, 'video', getInfo, callback);
    });
};
/* harmony default export */ __webpack_exports__["default"] = ({
    register: register
});


/***/ }),

/***/ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/core/Dam.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/core/Dam.ts ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/schema/xedit-mapper */ "./src/app/models/schema/xedit-mapper.ts");


/**
 * Dam.js
 */
var TAG_BY_TYPE = { 'image': 'img', 'link': 'a', 'video': 'video' };
var ATTR_BY_TAG = { 'img': 'src', 'a': 'href', 'video': 'src' };
var ATTRS_BY_TAG = { 'img': ['alt', 'longdesc'], 'a': ['target', 'title'], 'video': ['longdesc', 'height', 'width'] };
var VALID_TAGS = Object.keys(ATTR_BY_TAG);
var isValidNodeId = function (nodeId) {
    return true;
};
function hasValidResource(tag, val, type) {
    return VALID_TAGS.includes(tag) && !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(val) && tag === TAG_BY_TYPE[type];
}
var getId = function (editor, type) {
    var selectedNode = editor.selection.getNode();
    var tag = selectedNode.tagName.toLowerCase();
    var val = editor.dom.getAttrib(selectedNode, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_LINK);
    if (type === 'video') {
        tag = 'video';
        val = editor.dom.getAttrib(selectedNode, 'data-mce-p-xe_link');
    }
    /*const hasResource = this.hasValidResource(tag, val, type);
    const isDam = VALID_TAGS.includes(tag) && TAG_BY_TYPE[type] == tag && editor.dom.getAttrib(selectedNode, XeditMapper.TAG_LINK) !== '';
    const hasSource = VALID_TAGS.includes(tag) && editor.dom.getAttrib(selectedNode, ATTR_BY_TAG[tag]) !== '';*/
    return hasValidResource(tag, val, type) ? val : '';
};
var getAttribute = function (editor, attribute) {
    var defaultValues = {
        'alt': 'Texto alternativo'
    };
    var selectedNode = editor.selection.getNode();
    var attr = editor.dom.getAttrib(selectedNode, attribute);
    return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(attr) ? (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(attribute, defaultValues) ? defaultValues[attribute] : '') : attr;
};
var getUrl = function (editor, nodeId) {
    var resourceUrl = editor.getParam('dam_url', editor.documentBaseUrl);
    var url = resourceUrl + nodeId;
    if (resourceUrl instanceof Function) {
        url = resourceUrl(nodeId);
    }
    if (((/^(f|ht)tps?:\/\//i).test(nodeId))) {
        url = nodeId;
    }
    return url;
};
var createHtmlVideo = function (text, resource) {
    var height = 'height' in resource && !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(resource['height']) ? resource['height'] : '100%';
    var width = 'width' in resource && !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(resource['width']) ? resource['width'] : '100%';
    // text = `<video xe_link="${resource['xe_link']}" lingkwidth="${width}" height="${height}" controls>`;
    text = "<source src=\"" + resource['xe_link'] + "\" type=\"video/mp4\"/>Your browser does not support the video tag.";
    // text += `</video>`;
    resource['width'] = "" + width;
    resource['height'] = "" + height;
    resource['controls'] = '';
    return [text, resource];
};
var insert = function (editor, nodeId, type, attributes) {
    var _a;
    var selectedNode = editor.selection.getNode();
    var tag = selectedNode.tagName.toLowerCase();
    var val = editor.dom.getAttrib(selectedNode, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_LINK);
    var hasResource = hasValidResource(tag, val, type);
    var url = getUrl(editor, nodeId);
    if (hasResource) {
        selectedNode.setAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_LINK, nodeId);
        selectedNode.setAttribute(ATTR_BY_TAG[tag], url);
        ATTRS_BY_TAG[tag].forEach(function (key) {
            selectedNode.setAttribute(key, attributes[key]);
        });
    }
    else {
        // editor.focus();
        // editor.selection.collapse(true);
        tag = TAG_BY_TYPE[type];
        var resource_1 = {
            xe_link: nodeId
        };
        ATTRS_BY_TAG[tag].forEach(function (key) {
            resource_1[key] = attributes[key];
        });
        resource_1[ATTR_BY_TAG[tag]] = url;
        var text = '';
        if (type === 'link') {
            if (!hasResource) {
                text = editor.selection.getContent();
            }
            else {
                text = resource_1['title'];
            }
        }
        else if (type === 'video') {
            _a = createHtmlVideo(text, resource_1), text = _a[0], resource_1 = _a[1];
            tag = 'video';
        }
        editor.execCommand('mceInsertContent', false, editor.dom.createHTML(tag, resource_1, text));
    }
};
/* harmony default export */ __webpack_exports__["default"] = ({
    isValidNodeId: isValidNodeId,
    getId: getId,
    getAttribute: getAttribute,
    insert: insert
});


/***/ }),

/***/ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/core/FilterContent.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/core/FilterContent.ts ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * FilterContent.js
 *
 */
var isDamNode = function (node) {
    return node.name.toLowerCase() !== 'img';
};
var setContentEditable = function (state) {
    return function (nodes) {
        for (var i = 0; i < nodes.length; i++) {
            if (isDamNode(nodes[i])) {
                nodes[i].attr('contenteditable', state);
            }
        }
    };
};
var setup = function (editor) {
    editor.on('PreInit', function () {
        editor.parser.addNodeFilter('a', setContentEditable('false'));
        editor.serializer.addNodeFilter('a', setContentEditable(null));
    });
};
/* harmony default export */ __webpack_exports__["default"] = ({
    setup: setup
});


/***/ }),

/***/ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/ui/Buttons.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/ui/Buttons.ts ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Buttons.js
 */
var register = function (editor) {
    editor.addButton('dam', {
        icon: 'image',
        tooltip: 'DAM image',
        cmd: 'mceDam',
        stateSelector: 'img[xe_link]'
    });
    editor.addButton('dam_link', {
        icon: 'link',
        tooltip: 'DAM link',
        cmd: 'mceDamLink',
        stateSelector: 'a[xe_link]'
    });
    editor.addButton('dam_video', {
        icon: 'media',
        tooltip: 'DAM video',
        cmd: 'mceDamVideo',
        stateSelector: 'img[data-mce-object="video"]'
    });
    editor.addMenuItem('dam', {
        icon: 'image',
        text: 'DAM',
        context: 'insert',
        cmd: 'mceDam'
    });
    editor.addMenuItem('dam_link', {
        icon: 'link',
        text: 'DAM link',
        context: 'insert',
        cmd: 'mceDamLink'
    });
    editor.addMenuItem('dam_video', {
        icon: 'video',
        text: 'DAM video',
        context: 'insert',
        cmd: 'mceDamVideo'
    });
};
/* harmony default export */ __webpack_exports__["default"] = ({
    register: register
});


/***/ }),

/***/ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/ui/Dialog.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/ui/Dialog.ts ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Dam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Dam */ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/core/Dam.ts");
/**
 * Dialog.js
 */

var ATTRS_BY_TYPE = {
    video: {
        longdesc: {
            type: 'textbox',
            name: 'longdesc',
            size: 20,
            label: 'Descripción'
        },
        width: {
            type: 'textbox',
            name: 'width',
            size: 40,
            label: 'Anchura'
        },
        height: {
            type: 'textbox',
            name: 'height',
            size: 40,
            label: 'Altura'
        }
    },
    image: {
        alt: { type: 'textbox', name: 'alt', size: 40, label: 'Alternativo' },
        longdesc: {
            type: 'textbox',
            name: 'longdesc',
            size: 40,
            label: 'Descripción'
        }
    },
    link: {
        title: { type: 'textbox', name: 'title', size: 40, label: 'Título' },
        target: {
            type: 'listbox',
            name: 'target',
            label: 'Target',
            values: [{ text: 'Nueva ventana', value: '_blank' }, { text: 'Misma ventana', value: '_self' }]
        }
    }
};
var insertDam = function (editor, newId, type, extra) {
    if (!_core_Dam__WEBPACK_IMPORTED_MODULE_0__["default"].isValidNodeId(newId)) {
        editor.windowManager.alert('El enlace elegido no es válido');
        return true;
    }
    else {
        _core_Dam__WEBPACK_IMPORTED_MODULE_0__["default"].insert(editor, newId, type, extra);
        return false;
    }
};
var open = function (editor, type, getInfo, callback) {
    var currentId = _core_Dam__WEBPACK_IMPORTED_MODULE_0__["default"].getId(editor, type);
    var attributes = {};
    for (var _i = 0, _a = Object.keys(ATTRS_BY_TYPE[type]); _i < _a.length; _i++) {
        var attr = _a[_i];
        attributes[attr] = _core_Dam__WEBPACK_IMPORTED_MODULE_0__["default"].getAttribute(editor, attr);
    }
    var save = function (e) {
        var newNodeId = e.data.nodeId;
        var extra = {};
        for (var _i = 0, _a = Object.keys(ATTRS_BY_TYPE[type]); _i < _a.length; _i++) {
            var key = _a[_i];
            extra[key] = e.data[key];
        }
        if (insertDam(editor, newNodeId, type, extra)) {
            e.preventDefault();
        }
    };
    function setData(result, extra) {
        var id = result && result.nodeid ? result.nodeid : '';
        var name = result && result.name ? result.name : '';
        var path = '<i>Elemento no seleccionado...</i>';
        if (result && result.path) {
            path = Object.values(result.path).join('/');
            path = "<span title=\"" + path + "\">" + path + "<span/>";
        }
        document.getElementById('dam-nodeId')['value'] = id;
        document.getElementById('dam-name')['innerHTML'] = name;
        document.getElementById('dam-path')['innerHTML'] = path;
    }
    function showWManager(result, _a) {
        var ed = _a.editor;
        var name = result && result.name ? result.name : '<i>Elemento no seleccionado...</i>';
        var path = '<i>Elemento no seleccionado...</i>';
        if (result && result.path) {
            path = Object.values(result.path).join('/');
            path = "<span title=\"" + path + "\">" + path + "<span/>";
        }
        var pathIds = result && result.path ? Object.keys(result.path) : [];
        var form = {
            title: 'Dam',
            body: [],
            onsubmit: function (e) {
                save(e);
            }
        };
        form.body.push({
            type: 'container',
            label: 'Enlace',
            layout: 'flow',
            direction: 'row',
            align: 'center',
            maxHeight: 50,
            height: 30,
            items: [
                {
                    id: 'dam-nodeId',
                    type: 'textbox',
                    name: 'nodeId',
                    label: 'textbox',
                    value: currentId,
                    required: true
                },
                {
                    type: 'button',
                    icon: 'browse',
                    onclick: function (e) { return callback(e, ed.windowManager, type, pathIds, setData); }
                }
            ]
        });
        form.body.push({
            type: 'container',
            label: 'Nombre',
            id: 'dam-name',
            html: name
        });
        form.body.push({
            type: 'container',
            label: 'Path',
            id: 'dam-path',
            html: path
        });
        // Attributes
        for (var _i = 0, _b = Object.keys(ATTRS_BY_TYPE[type]); _i < _b.length; _i++) {
            var key = _b[_i];
            var obj = ATTRS_BY_TYPE[type][key];
            obj['value'] = attributes[key];
            form.body.push(obj);
        }
        ed.windowManager.open(form);
    }
    showWManager(null, { editor: editor });
    if (currentId && !/^(f|ht)tps?:\/\//i.test(currentId)) {
        getInfo(currentId, type, setData, showWManager, showWManager, {
            editor: editor
        });
    }
};
/* harmony default export */ __webpack_exports__["default"] = ({
    open: open
});


/***/ }),

/***/ "./src/app/components/taskbar/properties-global-view/properties-global-view.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/taskbar/properties-global-view/properties-global-view.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <header>Estados</header>\n    <main>\n        <ng-container *ngFor=\"let value of states\">\n            <p (click)=\"restoreSnaptshot(value.key)\">{{ value.message }}</p>\n        </ng-container>\n    </main>\n</div>"

/***/ }),

/***/ "./src/app/components/taskbar/properties-global-view/properties-global-view.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/taskbar/properties-global-view/properties-global-view.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  background-color: #edeff2; }\n:host > div {\n    padding: 0; }\n:host > div > header {\n      position: relative;\n      z-index: 5;\n      margin: 0;\n      font: normal 14px \"Lato\", sans-serif;\n      font-size: 12px;\n      text-transform: uppercase;\n      text-align: left;\n      padding: 3px 10px 1px 10px;\n      color: #959595;\n      background-color: #e1e4e6;\n      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25) !important; }\n:host > div > main {\n      font: normal 14px \"Lato\", sans-serif;\n      background-color: #edeff2;\n      position: relative;\n      padding: 5px 10px;\n      z-index: 2;\n      box-shadow: unset !important;\n      border: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdG92YXIvZGV2ZWxvcC93ZWIveGVkaXQvc3JjL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvc2Fzcy9mb250cy9fbGF0by5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvYXBwL2NvbXBvbmVudHMvdGFza2Jhci9wcm9wZXJ0aWVzLWdsb2JhbC12aWV3L3Byb3BlcnRpZXMtZ2xvYmFsLXZpZXcuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXRvdmFyL2RldmVsb3Avd2ViL3hlZGl0L3NyYy9zYXNzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsc0VBQVk7QUFGWiw4RUFBQTtBQ0FBLGNBQUE7QUFDQTtFQUNJLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDhJQUE4STtFQUM5SSxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0SUFBNEk7RUFDNUkseUtBQXlLLEVBQUE7QUFFM0ssY0FBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0hBQStIO0VBQy9ILG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDZIQUE2SDtFQUM3SCx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0SUFBNEk7RUFDNUksbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMElBQTBJO0VBQzFJLHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLCtIQUErSDtFQUMvSCxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0SEFBNEg7RUFDNUgseUtBQXlLLEVBQUE7QUFFM0ssY0FBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0hBQStIO0VBQy9ILG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRIQUE0SDtFQUM1SCx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw2SEFBNkg7RUFDN0gsbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMEhBQTBIO0VBQzFILHlLQUF5SyxFQUFBO0FDNUY3SztFQUNJLGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHlCRmdCaUIsRUFBQTtBRXBCckI7SUFPUSxVQUFVLEVBQUE7QUFQbEI7TUFVWSxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFNBQVM7TUFDVCxvQ0ZtQm9CO01FbEJwQixlRm9CVTtNRW5CVix5QkFBeUI7TUFDekIsZ0JBQWdCO01BQ2hCLDBCQUEwQjtNQUMxQixjRkRVO01FRVYseUJGQVE7TUdSaEIsMERBSHlDLEVBQUE7QURSN0M7TUEwQlksb0NGTW9CO01FTHBCLHlCRlBTO01FUVQsa0JBQWtCO01BQ2xCLGlCQUxtQjtNQU1uQixVQUFVO01BQ1YsNEJBQTRCO01BQzVCLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YXNrYmFyL3Byb3BlcnRpZXMtZ2xvYmFsLXZpZXcvcHJvcGVydGllcy1nbG9iYWwtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgJ35zYXNzL2ZvbnRzL2xhdG8nO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4wLjYvY3NzL2FsbC5jc3MnKTtcbkBpbXBvcnQgJ35zYXNzL21peGlucyc7XG5cbiRibGFjay1kYXJrZXI6ICMyMDI2MjQ7XG4kYmxhY2stZGFyazogIzNmNDk0NjtcbiRibGFjay13YXJtOiAjNDc0ZDRiO1xuJGJsYWNrLWxpZ2h0OiAjNWY2MzYyO1xuXG4kZ3JlZW4tZGFya2VyOiAjMWU1NzRlO1xuJGdyZWVuLWRhcms6ICMzYTllOGY7XG4kZ3JlZW4td2FybTogIzNlYTA5MTtcbiRncmVlbi1saWdodDogIzQ0YzRiMTtcblxuJGJsdWUtZGFyazogIzIxNGU2MTtcbiRibHVlLWxpZ2h0OiAjMjk1ZTc1O1xuJGJsdWUtbGlnaHRlcjogIzMxNzE4ZDtcblxuJHdoaXRlLWRhcmtlcjogIzk1OTU5NTtcbiR3aGl0ZS1kYXJrOiAjYzRjMmMyO1xuJHdoaXRlLXdhcm06ICNlMWU0ZTY7XG4kd2hpdGUtbGlnaHQ6ICNlZGVmZjI7XG4kd2hpdGUtbGlnaHRlcjogI2ZjZmNmYztcbiR3aGl0ZS14aW1kZXg6ICNmOWY5Zjk7XG5cbiRyZWQtd2FybTogI2QxMzczNztcbiRyZWQtbGlnaHQ6ICNkYjQ5NDk7XG5cbiR0YXNrYmFyLWhlaWdodDogNDZweDtcbiR0YXNrYmFyLWxpbmUtaGVpZ2h0OiA0MHB4O1xuJHRhYnMtaGVpZ2h0OiAzNXB4O1xuJHRhYnMtaGVpZ2h0LXNtYWxsOiAzMHB4O1xuXG4kZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcblxuJGZvbnQtc2l6ZS1zbWFsbDogMTJweDtcbiRmb250LXNpemUtZGVmYXVsdDogMTRweDtcbiRmb250LXNpemUtYmlnOiAxNnB4O1xuXG4kaWNvbi1zaXplLWRlZmF1bHQ6IDE4cHg7XG5cbiRmb250LWRlZmF1bHQ6IG5vcm1hbCAkZm9udC1zaXplLWRlZmF1bHQgJGZvbnQtZmFtaWx5O1xuXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy9jb2xvcnMnO1xuIiwiLyogbGF0aW4tZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gTGlnaHQgSXRhbGljJyksIGxvY2FsKCdMYXRvLUxpZ2h0SXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTl3Ml9GUWZ0eDk4OTdzeFoud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gTGlnaHQgSXRhbGljJyksIGxvY2FsKCdMYXRvLUxpZ2h0SXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTl3Ml9Hd2Z0eDk4OTdnLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OHc0Qk1VVFBIanhzQVVpLXFOaVhnN2VVMC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OHc0Qk1VVFBIanhzQVhDLXFOaVhnN1Eud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEJvbGQgSXRhbGljJyksIGxvY2FsKCdMYXRvLUJvbGRJdGFsaWMnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnVfdzRCTVVUUEhqeHNJNXdxX0ZRZnR4OTg5N3N4Wi53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkIEl0YWxpYycpLCBsb2NhbCgnTGF0by1Cb2xkSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTV3cV9Hd2Z0eDk4OTdnLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBMaWdodCcpLCBsb2NhbCgnTGF0by1MaWdodCcpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTl3NEJNVVRQSGg3VVNTd2FQR1EzcTVkME43dy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBMaWdodCcpLCBsb2NhbCgnTGF0by1MaWdodCcpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTl3NEJNVVRQSGg3VVNTd2lQR1EzcTVkMC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gUmVndWxhcicpLCBsb2NhbCgnTGF0by1SZWd1bGFyJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1eXc0Qk1VVFBIanhBd1hpV3RGQ2ZRN0Eud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gUmVndWxhcicpLCBsb2NhbCgnTGF0by1SZWd1bGFyJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1eXc0Qk1VVFBIang0d1hpV3RGQ2Mud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEJvbGQnKSwgbG9jYWwoJ0xhdG8tQm9sZCcpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTl3NEJNVVRQSGg2VVZTd2FQR1EzcTVkME43dy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkJyksIGxvY2FsKCdMYXRvLUJvbGQnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU5dzRCTVVUUEhoNlVWU3dpUEdRM3E1ZDAud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfSIsIkBpbXBvcnQgJ35zYXNzL3ZhcmlhYmxlcyc7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1saWdodDtcblxuICAgID4gZGl2IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgXG4gICAgICAgID4gaGVhZGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250OiAkZm9udC1kZWZhdWx0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtYWxsO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggMTBweCAxcHggMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUtZGFya2VyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLXdhcm07XG4gICAgICAgICAgICBAaW5jbHVkZSBib3gtc2hhZG93KGJvdHRvbSwgMC4yNSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICA+IG1haW4ge1xuICAgICAgICAgICAgJG1hcmdpbi1zaWRlczogMTBweDtcblxuICAgICAgICAgICAgZm9udDogJGZvbnQtZGVmYXVsdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1saWdodDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAkbWFyZ2luLXNpZGVzO1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJAbWl4aW4gYm94LXNoYWRvdyAoJHBvcywgJG9wYWNpdHksICRpbXBvcnRhbnQ6IGZhbHNlKSB7XG4gICAgJF9wb3M6IDBweCAwcHggM3B4IDBweCA7XG4gICAgQGlmKCRwb3MgPT0gdG9wKXtcbiAgICAgICAgJF9wb3M6IDBweCAzcHggMTFweCAwcHggO1xuICAgIH1AZWxzZSBpZigkcG9zID09IGxlZnQpIHtcbiAgICAgICAgJF9wb3M6IC0ycHggMHB4IDExcHggLTRweDtcbiAgICB9XG5cbiAgICAkcmdiOiByZ2JhKDAsMCwwLCRvcGFjaXR5KTtcbiAgICBAaWYoJGltcG9ydGFudCA9PSB0cnVlKXsgICAgICAgIFxuICAgICAgICAkcmdiOiByZ2JhKDAsMCwwLCRvcGFjaXR5KSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGJveC1zaGFkb3c6ICRfcG9zICRyZ2I7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/taskbar/properties-global-view/properties-global-view.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/taskbar/properties-global-view/properties-global-view.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PropertiesGlobalViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesGlobalViewComponent", function() { return PropertiesGlobalViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/api */ "./src/app/api.ts");
/* harmony import */ var _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_mappers_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/mappers/router */ "./src/app/core/mappers/router.ts");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { WysiwygHandler } from '@app/components/editor/views/wysiwyg-view/wysiwyg-handler';

var PropertiesGlobalViewComponent = /** @class */ (function () {
    function PropertiesGlobalViewComponent(_editorService, http) {
        this._editorService = _editorService;
        this.http = http;
    }
    PropertiesGlobalViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.metas = [];
        this.states = [];
        this.baseUrl = _core_mappers_router__WEBPACK_IMPORTED_MODULE_4__["default"].BASE_URL;
        this.suscribeFile = this._editorService.getFile().subscribe(function (file) {
            _this.metas = [];
            _this.file = file;
        });
        this.suscribeFile = this._editorService.getFileState().subscribe(function (file) {
            _this.states = [];
            if (file != null) {
                _this.states = file.getSnapshots();
            }
        });
    };
    PropertiesGlobalViewComponent.prototype.createMetaObject = function (meta) {
        var json = {};
        json[meta['name']] = meta['value'];
        return json;
    };
    PropertiesGlobalViewComponent.prototype.restoreSnaptshot = function (key) {
        this._editorService.recoverySnapshot(key);
    };
    PropertiesGlobalViewComponent.prototype.ngOnDestroy = function () {
        this.suscribeFile.unsubscribe();
    };
    PropertiesGlobalViewComponent.prototype.dateNow = function () {
        var now = new Date();
        return dateformat__WEBPACK_IMPORTED_MODULE_5___default()(now, 'dd-mm-yyyy');
    };
    PropertiesGlobalViewComponent.prototype.openTree = function (evt, type, callback) {
        var _this = this;
        window['treeModal']
            .openModal('modal-1', type)
            .then(function (selectedId) {
            _app_api__WEBPACK_IMPORTED_MODULE_1__["Api"].getInfoNode(_this.http, selectedId, type, callback, null, null);
        })
            .catch(function (err) { return console.log(err); });
    };
    PropertiesGlobalViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-properties-global',
            template: __webpack_require__(/*! ./properties-global-view.component.html */ "./src/app/components/taskbar/properties-global-view/properties-global-view.component.html"),
            styles: [__webpack_require__(/*! ./properties-global-view.component.scss */ "./src/app/components/taskbar/properties-global-view/properties-global-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PropertiesGlobalViewComponent);
    return PropertiesGlobalViewComponent;
}());



/***/ }),

/***/ "./src/app/components/taskbar/state-controller/state-controller.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/taskbar/state-controller/state-controller.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <header>Estado de elementos</header>\n    <main>\n        <ng-container *ngFor=\"let value of configs; let i = index;\">\n            <app-checkbox [placeholder]=\"value.name\" [checked]=\"value.enable\" (changeValue)=\"updateStates($event, value)\"></app-checkbox>\n        </ng-container>\n    </main>\n</div>"

/***/ }),

/***/ "./src/app/components/taskbar/state-controller/state-controller.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/taskbar/state-controller/state-controller.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  background-color: #edeff2; }\n:host > div {\n    padding: 0; }\n:host > div > header {\n      position: relative;\n      z-index: 5;\n      margin: 0;\n      font: normal 14px \"Lato\", sans-serif;\n      font-size: 12px;\n      text-transform: uppercase;\n      text-align: left;\n      padding: 3px 10px 1px 10px;\n      color: #959595;\n      background-color: #e1e4e6;\n      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25) !important; }\n:host > div > main {\n      font: normal 14px \"Lato\", sans-serif;\n      background-color: #edeff2;\n      position: relative;\n      padding: 5px 10px;\n      z-index: 2;\n      box-shadow: unset !important;\n      border: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdG92YXIvZGV2ZWxvcC93ZWIveGVkaXQvc3JjL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvc2Fzcy9mb250cy9fbGF0by5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvYXBwL2NvbXBvbmVudHMvdGFza2Jhci9zdGF0ZS1jb250cm9sbGVyL3N0YXRlLWNvbnRyb2xsZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXRvdmFyL2RldmVsb3Avd2ViL3hlZGl0L3NyYy9zYXNzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsc0VBQVk7QUFGWiw4RUFBQTtBQ0FBLGNBQUE7QUFDQTtFQUNJLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDhJQUE4STtFQUM5SSxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0SUFBNEk7RUFDNUkseUtBQXlLLEVBQUE7QUFFM0ssY0FBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0hBQStIO0VBQy9ILG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDZIQUE2SDtFQUM3SCx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0SUFBNEk7RUFDNUksbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMElBQTBJO0VBQzFJLHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLCtIQUErSDtFQUMvSCxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0SEFBNEg7RUFDNUgseUtBQXlLLEVBQUE7QUFFM0ssY0FBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0hBQStIO0VBQy9ILG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRIQUE0SDtFQUM1SCx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw2SEFBNkg7RUFDN0gsbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMEhBQTBIO0VBQzFILHlLQUF5SyxFQUFBO0FDNUY3SztFQUNJLGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHlCRmdCaUIsRUFBQTtBRXBCckI7SUFNUSxVQUFVLEVBQUE7QUFObEI7TUFTWSxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFNBQVM7TUFDVCxvQ0ZvQm9CO01FbkJwQixlRnFCVTtNRXBCVix5QkFBeUI7TUFDekIsZ0JBQWdCO01BQ2hCLDBCQUEwQjtNQUMxQixjRkFVO01FQ1YseUJGQ1E7TUdSaEIsMERBSHlDLEVBQUE7QURSN0M7TUF5Qlksb0NGT29CO01FTnBCLHlCRk5TO01FT1Qsa0JBQWtCO01BQ2xCLGlCQUxtQjtNQU1uQixVQUFVO01BQ1YsNEJBQTRCO01BQzVCLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YXNrYmFyL3N0YXRlLWNvbnRyb2xsZXIvc3RhdGUtY29udHJvbGxlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgJ35zYXNzL2ZvbnRzL2xhdG8nO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4wLjYvY3NzL2FsbC5jc3MnKTtcbkBpbXBvcnQgJ35zYXNzL21peGlucyc7XG5cbiRibGFjay1kYXJrZXI6ICMyMDI2MjQ7XG4kYmxhY2stZGFyazogIzNmNDk0NjtcbiRibGFjay13YXJtOiAjNDc0ZDRiO1xuJGJsYWNrLWxpZ2h0OiAjNWY2MzYyO1xuXG4kZ3JlZW4tZGFya2VyOiAjMWU1NzRlO1xuJGdyZWVuLWRhcms6ICMzYTllOGY7XG4kZ3JlZW4td2FybTogIzNlYTA5MTtcbiRncmVlbi1saWdodDogIzQ0YzRiMTtcblxuJGJsdWUtZGFyazogIzIxNGU2MTtcbiRibHVlLWxpZ2h0OiAjMjk1ZTc1O1xuJGJsdWUtbGlnaHRlcjogIzMxNzE4ZDtcblxuJHdoaXRlLWRhcmtlcjogIzk1OTU5NTtcbiR3aGl0ZS1kYXJrOiAjYzRjMmMyO1xuJHdoaXRlLXdhcm06ICNlMWU0ZTY7XG4kd2hpdGUtbGlnaHQ6ICNlZGVmZjI7XG4kd2hpdGUtbGlnaHRlcjogI2ZjZmNmYztcbiR3aGl0ZS14aW1kZXg6ICNmOWY5Zjk7XG5cbiRyZWQtd2FybTogI2QxMzczNztcbiRyZWQtbGlnaHQ6ICNkYjQ5NDk7XG5cbiR0YXNrYmFyLWhlaWdodDogNDZweDtcbiR0YXNrYmFyLWxpbmUtaGVpZ2h0OiA0MHB4O1xuJHRhYnMtaGVpZ2h0OiAzNXB4O1xuJHRhYnMtaGVpZ2h0LXNtYWxsOiAzMHB4O1xuXG4kZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcblxuJGZvbnQtc2l6ZS1zbWFsbDogMTJweDtcbiRmb250LXNpemUtZGVmYXVsdDogMTRweDtcbiRmb250LXNpemUtYmlnOiAxNnB4O1xuXG4kaWNvbi1zaXplLWRlZmF1bHQ6IDE4cHg7XG5cbiRmb250LWRlZmF1bHQ6IG5vcm1hbCAkZm9udC1zaXplLWRlZmF1bHQgJGZvbnQtZmFtaWx5O1xuXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy9jb2xvcnMnO1xuIiwiLyogbGF0aW4tZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gTGlnaHQgSXRhbGljJyksIGxvY2FsKCdMYXRvLUxpZ2h0SXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTl3Ml9GUWZ0eDk4OTdzeFoud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gTGlnaHQgSXRhbGljJyksIGxvY2FsKCdMYXRvLUxpZ2h0SXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTl3Ml9Hd2Z0eDk4OTdnLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OHc0Qk1VVFBIanhzQVVpLXFOaVhnN2VVMC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OHc0Qk1VVFBIanhzQVhDLXFOaVhnN1Eud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEJvbGQgSXRhbGljJyksIGxvY2FsKCdMYXRvLUJvbGRJdGFsaWMnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnVfdzRCTVVUUEhqeHNJNXdxX0ZRZnR4OTg5N3N4Wi53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkIEl0YWxpYycpLCBsb2NhbCgnTGF0by1Cb2xkSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTV3cV9Hd2Z0eDk4OTdnLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBMaWdodCcpLCBsb2NhbCgnTGF0by1MaWdodCcpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTl3NEJNVVRQSGg3VVNTd2FQR1EzcTVkME43dy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBMaWdodCcpLCBsb2NhbCgnTGF0by1MaWdodCcpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTl3NEJNVVRQSGg3VVNTd2lQR1EzcTVkMC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gUmVndWxhcicpLCBsb2NhbCgnTGF0by1SZWd1bGFyJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1eXc0Qk1VVFBIanhBd1hpV3RGQ2ZRN0Eud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gUmVndWxhcicpLCBsb2NhbCgnTGF0by1SZWd1bGFyJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1eXc0Qk1VVFBIang0d1hpV3RGQ2Mud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEJvbGQnKSwgbG9jYWwoJ0xhdG8tQm9sZCcpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTl3NEJNVVRQSGg2VVZTd2FQR1EzcTVkME43dy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkJyksIGxvY2FsKCdMYXRvLUJvbGQnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU5dzRCTVVUUEhoNlVWU3dpUEdRM3E1ZDAud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfSIsIkBpbXBvcnQgJ35zYXNzL3ZhcmlhYmxlcyc7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1saWdodDtcbiAgICA+IGRpdiB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIFxuICAgICAgICA+IGhlYWRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udDogJGZvbnQtZGVmYXVsdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbWFsbDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgcGFkZGluZzogM3B4IDEwcHggMXB4IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlLWRhcmtlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS13YXJtO1xuICAgICAgICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdyhib3R0b20sIDAuMjUsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgPiBtYWluIHtcbiAgICAgICAgICAgICRtYXJnaW4tc2lkZXM6IDEwcHg7XG5cbiAgICAgICAgICAgIGZvbnQ6ICRmb250LWRlZmF1bHQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtbGlnaHQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggJG1hcmdpbi1zaWRlcztcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICBib3gtc2hhZG93OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59IiwiQG1peGluIGJveC1zaGFkb3cgKCRwb3MsICRvcGFjaXR5LCAkaW1wb3J0YW50OiBmYWxzZSkge1xuICAgICRfcG9zOiAwcHggMHB4IDNweCAwcHggO1xuICAgIEBpZigkcG9zID09IHRvcCl7XG4gICAgICAgICRfcG9zOiAwcHggM3B4IDExcHggMHB4IDtcbiAgICB9QGVsc2UgaWYoJHBvcyA9PSBsZWZ0KSB7XG4gICAgICAgICRfcG9zOiAtMnB4IDBweCAxMXB4IC00cHg7XG4gICAgfVxuXG4gICAgJHJnYjogcmdiYSgwLDAsMCwkb3BhY2l0eSk7XG4gICAgQGlmKCRpbXBvcnRhbnQgPT0gdHJ1ZSl7ICAgICAgICBcbiAgICAgICAgJHJnYjogcmdiYSgwLDAsMCwkb3BhY2l0eSkgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBib3gtc2hhZG93OiAkX3BvcyAkcmdiO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/taskbar/state-controller/state-controller.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/taskbar/state-controller/state-controller.component.ts ***!
  \***********************************************************************************/
/*! exports provided: StateControllerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateControllerComponent", function() { return StateControllerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StateControllerComponent = /** @class */ (function () {
    function StateControllerComponent() {
        this.updated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    StateControllerComponent.prototype.ngOnInit = function () {
    };
    StateControllerComponent.prototype.updateStates = function (evt, object) {
        object.enable = evt;
        this.updateStateConfigs();
    };
    StateControllerComponent.prototype.updateStateConfigs = function () {
        this.updated.emit(this.configs);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], StateControllerComponent.prototype, "configs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StateControllerComponent.prototype, "updated", void 0);
    StateControllerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-state-controller',
            template: __webpack_require__(/*! ./state-controller.component.html */ "./src/app/components/taskbar/state-controller/state-controller.component.html"),
            styles: [__webpack_require__(/*! ./state-controller.component.scss */ "./src/app/components/taskbar/state-controller/state-controller.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StateControllerComponent);
    return StateControllerComponent;
}());



/***/ }),

/***/ "./src/app/components/taskbar/taskbar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/taskbar/taskbar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header (clickOutside)=\"closeAttributes($event)\">\n    <div>\n        <nav id=\"xedit-taskbar\" class=\"taskbar\">\n            <ul>\n                <li (click)=\"save()\">\n                    <i class=\"fas fa-save\"></i>\n                </li>\n                <li class=\"separator\"></li>\n                <li (click)=\"undo()\" [ngClass]=\"{disabled: !previousAvailable()}\">\n                    <i class=\"fas fa-undo\"></i>\n                </li>\n                <li (click)=\"redo()\" [ngClass]=\"{disabled: !nextAvailable()}\">\n                    <i class=\"fas fa-redo\"></i>\n                </li>\n            </ul>\n        </nav>\n        <aside class=\"title\">\n            <h2 (click)=\"toggleAttributes($event)\" id=\"xe-task-title\">\n                {{ title }}\n                <i class=\"fas fa-caret-down\"></i>\n            </h2>\n        </aside>\n        <nav class=\"views\">\n            <ul class=\"actions\">\n                <li class=\"option-button\">\n                    <fa-icon [icon]=\"faEye\" (click)=\"toggleElementState()\"></fa-icon>\n                    <aside (click)=\"openStates($event)\">\n                        <i class=\"fas fa-caret-down\"></i>\n                    </aside>\n                    <div class=\"action-panel\" *ngIf=\"toogleStateConfigs\" (click)=\"$event.stopPropagation()\" (clickOutside)=\"closeStates()\">\n                        <app-state-controller [(configs)]=\"configs\" (updated)=\"saveStateConfigs($event)\"></app-state-controller>\n                    </div>\n                </li>\n                <li class=\"separator\"></li>\n            </ul>\n            <ul *ngIf=\"hasMultiViews()\">\n                <li (click)=\"showComponent(view)\" *ngFor=\"let view of availableViews\" [ngClass]=\"{selected: currentView === view, tabs: true}\">\n                    <span title=\"Editar metadatos\" *ngIf=\"view === 'metadata'; else text_content\">\n                        <fa-icon [icon]=\"faBars\"></fa-icon>\n                    </span>\n                    <ng-template #text_content>{{ view === 'wysiwyg' ? 'Visual' : 'Texto' }}</ng-template>\n                </li>\n            </ul>\n        </nav>\n    </div>\n    <div id=\"attributes\" *ngIf=\"displayToggle\" [@toggleAtributes]>\n        <app-properties-global></app-properties-global>\n    </div>\n</header>"

/***/ }),

/***/ "./src/app/components/taskbar/taskbar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/taskbar/taskbar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  display: block;\n  position: relative;\n  z-index: 1000; }\n:host > header {\n    position: relative;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n:host > header > div {\n      background-color: #3a9e8f;\n      position: relative;\n      font: normal 14px \"Lato\", sans-serif;\n      display: flex;\n      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.57);\n      z-index: 6; }\n:host > header > div > .title {\n        flex-grow: 2;\n        display: flex; }\n:host > header > div > .title > h2 {\n          text-align: center;\n          font: normal 14px \"Lato\", sans-serif;\n          font-size: 16px;\n          color: #e1e4e6;\n          margin: auto;\n          padding: 0;\n          cursor: pointer;\n          transition: color 0.3s ease-in-out; }\n:host > header > div > .title > h2 > i {\n            transform: rotate(0);\n            color: inherit;\n            padding: 0 5px; }\n:host > header > div > .title > h2:hover {\n            color: #edeff2; }\n:host > header > div > .title > h2.disabled {\n            cursor: not-allowed;\n            color: #44c4b1; }\n:host > header > div > .title > h2.selected {\n            color: #edeff2; }\n:host > header > div > .title > h2.selected > i {\n              transform: rotate(180deg); }\n:host > header > div > nav {\n        flex-grow: 1;\n        padding: 0;\n        margin: 0;\n        max-width: 30%;\n        min-width: 30%;\n        min-height: 46px;\n        max-height: 46px; }\n:host > header > div > nav.views {\n          display: flex; }\n:host > header > div > nav.views > ul {\n            justify-content: flex-end;\n            flex-grow: 0; }\n:host > header > div > nav.views > ul.actions {\n              flex-grow: 2; }\n:host > header > div > nav > ul {\n          flex-grow: 1;\n          padding: 0;\n          margin: 0;\n          list-style: none;\n          height: 46px;\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n          padding: 0 5px; }\n:host > header > div > nav > ul > li {\n            margin: auto 5px auto 0;\n            padding: 5px 10px;\n            color: #e1e4e6;\n            transition: color 0.3s ease-in-out;\n            cursor: pointer; }\n:host > header > div > nav > ul > li.tabs {\n              height: 46px;\n              line-height: 40px;\n              text-transform: uppercase;\n              border-bottom: 2px solid transparent;\n              transition: color 0.3s ease-in-out, border-bottom-color 0.3s ease-in-out; }\n:host > header > div > nav > ul > li > fa-icon {\n              font-size: 18px; }\n:host > header > div > nav > ul > li.option-button {\n              display: flex;\n              flex-direction: row;\n              position: relative; }\n:host > header > div > nav > ul > li.option-button > aside {\n                margin-left: 5px;\n                padding: 0 2px;\n                flex-grow: 1;\n                background-color: transparent;\n                transition: background-color 0.3s ease-in-out; }\n:host > header > div > nav > ul > li.option-button > aside:hover {\n                  background-color: #e1e4e6; }\n:host > header > div > nav > ul > li.option-button > .action-panel {\n                position: absolute;\n                top: 41px;\n                right: 0;\n                width: 240px;\n                min-width: 220px;\n                width: 100%;\n                background-color: #e1e4e6;\n                box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5); }\n:host > header > div > nav > ul > li.separator {\n              padding: 0;\n              height: 30px;\n              width: 1px;\n              margin: auto 0;\n              background-color: #44c4b1; }\n:host > header > div > nav > ul > li:hover {\n              color: #edeff2; }\n:host > header > div > nav > ul > li.disabled {\n              cursor: not-allowed;\n              color: #44c4b1; }\n:host > header > div > nav > ul > li.selected {\n              border-bottom-color: #edeff2;\n              color: #edeff2; }\n:host > header > #attributes {\n      margin: 15px 50% auto;\n      position: absolute;\n      top: 100%;\n      left: auto;\n      bottom: auto;\n      right: auto;\n      transform: translateX(-50%);\n      max-width: 600px;\n      min-width: 220px;\n      width: 100%;\n      z-index: -1;\n      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5); }\n:host.embebed > header > div {\n    background-color: #f9f9f9; }\n:host.embebed > header > div > .title > h2 {\n      color: #959595; }\n:host.embebed > header > div > .title > h2:hover {\n        color: #5f6362; }\n:host.embebed > header > div > .title > h2.disabled {\n        color: #c4c2c2; }\n:host.embebed > header > div > .title > h2.selected {\n        color: #5f6362; }\n:host.embebed > header > div > nav > ul > li {\n      color: #959595; }\n:host.embebed > header > div > nav > ul > li.separator {\n        background-color: #c4c2c2; }\n:host.embebed > header > div > nav > ul > li:hover {\n        color: #5f6362; }\n:host.embebed > header > div > nav > ul > li.disabled {\n        color: #c4c2c2; }\n:host.embebed > header > div > nav > ul > li.selected {\n        border-bottom-color: #5f6362;\n        color: #5f6362; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdG92YXIvZGV2ZWxvcC93ZWIveGVkaXQvc3JjL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvc2Fzcy9mb250cy9fbGF0by5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvYXBwL2NvbXBvbmVudHMvdGFza2Jhci90YXNrYmFyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvc2Fzcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLHNFQUFZO0FBRlosOEVBQUE7QUNBQSxjQUFBO0FBQ0E7RUFDSSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw4SUFBOEk7RUFDOUksbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNElBQTRJO0VBQzVJLHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLCtIQUErSDtFQUMvSCxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw2SEFBNkg7RUFDN0gseUtBQXlLLEVBQUE7QUFFM0ssY0FBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNElBQTRJO0VBQzVJLG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDBJQUEwSTtFQUMxSSx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrSEFBK0g7RUFDL0gsbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNEhBQTRIO0VBQzVILHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLCtIQUErSDtFQUMvSCxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0SEFBNEg7RUFDNUgseUtBQXlLLEVBQUE7QUFFM0ssY0FBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNkhBQTZIO0VBQzdILG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDBIQUEwSDtFQUMxSCx5S0FBeUssRUFBQTtBQzVGN0s7RUFDSSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTtBQUhqQjtJQU1RLGtCQUFrQjtJQUNsQix5QkFBaUI7T0FBakIsc0JBQWlCO1FBQWpCLHFCQUFpQjtZQUFqQixpQkFBaUIsRUFBQTtBQVB6QjtNQVVZLHlCRkRRO01FRVIsa0JBQWtCO01BQ2xCLG9DRm9Cb0I7TUVuQnBCLGFBQWE7TUNGckIsK0NBTDBCO01EU2xCLFVBQVUsRUFBQTtBQWZ0QjtRQWtCZ0IsWUFBWTtRQUNaLGFBQWEsRUFBQTtBQW5CN0I7VUFxQm9CLGtCQUFrQjtVQUNsQixvQ0ZVWTtVRVRaLGVGYUE7VUVaQSxjRkxBO1VFTUEsWUFBWTtVQUNaLFVBQVU7VUFDVixlQUFlO1VBQ2Ysa0NBQWtDLEVBQUE7QUE1QnREO1lBK0J3QixvQkFBb0I7WUFDcEIsY0FBYztZQUNkLGNBQWMsRUFBQTtBQWpDdEM7WUFxQ3dCLGNGakJILEVBQUE7QUVwQnJCO1lBeUN3QixtQkFBbUI7WUFDbkIsY0YvQkgsRUFBQTtBRVhyQjtZQThDd0IsY0YxQkgsRUFBQTtBRXBCckI7Y0FpRDRCLHlCQUF5QixFQUFBO0FBakRyRDtRQXdEZ0IsWUFBWTtRQUNaLFVBQVU7UUFDVixTQUFTO1FBQ1QsY0FBYztRQUNkLGNBQWM7UUFDZCxnQkZsQ0s7UUVtQ0wsZ0JGbkNLLEVBQUE7QUUzQnJCO1VBaUVvQixhQUFhLEVBQUE7QUFqRWpDO1lBb0V3Qix5QkFBeUI7WUFDekIsWUFBWSxFQUFBO0FBckVwQztjQXdFNEIsWUFBWSxFQUFBO0FBeEV4QztVQThFb0IsWUFBWTtVQUNaLFVBQVU7VUFDVixTQUFTO1VBQ1QsZ0JBQWdCO1VBQ2hCLFlGdkRDO1VFd0RELGFBQWE7VUFDYixtQkFBbUI7VUFDbkIsbUJBQW1CO1VBQ25CLGNBQWMsRUFBQTtBQXRGbEM7WUF5RndCLHVCQUF1QjtZQUN2QixpQkFBaUI7WUFDakIsY0Z4RUo7WUV5RUksa0NBQWtDO1lBQ2xDLGVBQWUsRUFBQTtBQTdGdkM7Y0FnRzRCLFlGckVQO2NFc0VPLGlCRnJFRjtjRXNFRSx5QkFBeUI7Y0FDekIsb0NBQW9DO2NBQ3BDLHdFQUF3RSxFQUFBO0FBcEdwRztjQXdHNEIsZUZsRUosRUFBQTtBRXRDeEI7Y0E0RzRCLGFBQWE7Y0FDYixtQkFBbUI7Y0FDbkIsa0JBQWtCLEVBQUE7QUE5RzlDO2dCQWlIZ0MsZ0JBQWdCO2dCQUNoQixjQUFjO2dCQUNkLFlBQVk7Z0JBQ1osNkJBQTZCO2dCQUM3Qiw2Q0FBNkMsRUFBQTtBQXJIN0U7a0JBd0hvQyx5QkZyR2hCLEVBQUE7QUVuQnBCO2dCQTZIZ0Msa0JBQWtCO2dCQUNsQixTQUEwQjtnQkFDMUIsUUFBUTtnQkFDUixZQUFZO2dCQUNaLGdCQUFnQjtnQkFDaEIsV0FBVztnQkFDWCx5QkZoSFo7Z0JHUmhCLDhDQUwwQixFQUFBO0FETjlCO2NBMEk0QixVQUFVO2NBQ1YsWUFBOEI7Y0FDOUIsVUFBVTtjQUNWLGNBQWM7Y0FDZCx5QkZuSVAsRUFBQTtBRVhyQjtjQWtKNEIsY0Y5SFAsRUFBQTtBRXBCckI7Y0FzSjRCLG1CQUFtQjtjQUNuQixjRjVJUCxFQUFBO0FFWHJCO2NBMko0Qiw0QkZ2SVA7Y0V3SU8sY0Z4SVAsRUFBQTtBRXBCckI7TUFvS1kscUJBQXFCO01BQ3JCLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsVUFBVTtNQUNWLFlBQVk7TUFDWixXQUFXO01BQ1gsMkJBQTJCO01BQzNCLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLFdBQVc7TUNuS25CLDhDQUwwQixFQUFBO0FETjlCO0lBc0xnQix5QkZoS00sRUFBQTtBRXRCdEI7TUEwTHdCLGNGektGLEVBQUE7QUVqQnRCO1FBNkw0QixjRnZMUCxFQUFBO0FFTnJCO1FBaU00QixjRi9LUixFQUFBO0FFbEJwQjtRQXFNNEIsY0YvTFAsRUFBQTtBRU5yQjtNQTZNNEIsY0Y1TE4sRUFBQTtBRWpCdEI7UUFnTmdDLHlCRjlMWixFQUFBO0FFbEJwQjtRQW9OZ0MsY0Y5TVgsRUFBQTtBRU5yQjtRQXdOZ0MsY0Z0TVosRUFBQTtBRWxCcEI7UUE0TmdDLDRCRnROWDtRRXVOVyxjRnZOWCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YXNrYmFyL3Rhc2tiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0ICd+c2Fzcy9mb250cy9sYXRvJztcbkBpbXBvcnQgdXJsKCdodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMC42L2Nzcy9hbGwuY3NzJyk7XG5AaW1wb3J0ICd+c2Fzcy9taXhpbnMnO1xuXG4kYmxhY2stZGFya2VyOiAjMjAyNjI0O1xuJGJsYWNrLWRhcms6ICMzZjQ5NDY7XG4kYmxhY2std2FybTogIzQ3NGQ0YjtcbiRibGFjay1saWdodDogIzVmNjM2MjtcblxuJGdyZWVuLWRhcmtlcjogIzFlNTc0ZTtcbiRncmVlbi1kYXJrOiAjM2E5ZThmO1xuJGdyZWVuLXdhcm06ICMzZWEwOTE7XG4kZ3JlZW4tbGlnaHQ6ICM0NGM0YjE7XG5cbiRibHVlLWRhcms6ICMyMTRlNjE7XG4kYmx1ZS1saWdodDogIzI5NWU3NTtcbiRibHVlLWxpZ2h0ZXI6ICMzMTcxOGQ7XG5cbiR3aGl0ZS1kYXJrZXI6ICM5NTk1OTU7XG4kd2hpdGUtZGFyazogI2M0YzJjMjtcbiR3aGl0ZS13YXJtOiAjZTFlNGU2O1xuJHdoaXRlLWxpZ2h0OiAjZWRlZmYyO1xuJHdoaXRlLWxpZ2h0ZXI6ICNmY2ZjZmM7XG4kd2hpdGUteGltZGV4OiAjZjlmOWY5O1xuXG4kcmVkLXdhcm06ICNkMTM3Mzc7XG4kcmVkLWxpZ2h0OiAjZGI0OTQ5O1xuXG4kdGFza2Jhci1oZWlnaHQ6IDQ2cHg7XG4kdGFza2Jhci1saW5lLWhlaWdodDogNDBweDtcbiR0YWJzLWhlaWdodDogMzVweDtcbiR0YWJzLWhlaWdodC1zbWFsbDogMzBweDtcblxuJGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG5cbiRmb250LXNpemUtc21hbGw6IDEycHg7XG4kZm9udC1zaXplLWRlZmF1bHQ6IDE0cHg7XG4kZm9udC1zaXplLWJpZzogMTZweDtcblxuJGljb24tc2l6ZS1kZWZhdWx0OiAxOHB4O1xuXG4kZm9udC1kZWZhdWx0OiBub3JtYWwgJGZvbnQtc2l6ZS1kZWZhdWx0ICRmb250LWZhbWlseTtcblxuQGltcG9ydCAnLi92YXJpYWJsZXMvY29sb3JzJztcbiIsIi8qIGxhdGluLWV4dCAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIExpZ2h0IEl0YWxpYycpLCBsb2NhbCgnTGF0by1MaWdodEl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dV93NEJNVVRQSGp4c0k5dzJfRlFmdHg5ODk3c3haLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIExpZ2h0IEl0YWxpYycpLCBsb2NhbCgnTGF0by1MaWdodEl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dV93NEJNVVRQSGp4c0k5dzJfR3dmdHg5ODk3Zy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gSXRhbGljJyksIGxvY2FsKCdMYXRvLUl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTh3NEJNVVRQSGp4c0FVaS1xTmlYZzdlVTAud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gSXRhbGljJyksIGxvY2FsKCdMYXRvLUl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTh3NEJNVVRQSGp4c0FYQy1xTmlYZzdRLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkIEl0YWxpYycpLCBsb2NhbCgnTGF0by1Cb2xkSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTV3cV9GUWZ0eDk4OTdzeFoud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gQm9sZCBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tQm9sZEl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dV93NEJNVVRQSGp4c0k1d3FfR3dmdHg5ODk3Zy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gTGlnaHQnKSwgbG9jYWwoJ0xhdG8tTGlnaHQnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU5dzRCTVVUUEhoN1VTU3dhUEdRM3E1ZDBON3cud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gTGlnaHQnKSwgbG9jYWwoJ0xhdG8tTGlnaHQnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU5dzRCTVVUUEhoN1VTU3dpUEdRM3E1ZDAud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIFJlZ3VsYXInKSwgbG9jYWwoJ0xhdG8tUmVndWxhcicpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dXl3NEJNVVRQSGp4QXdYaVd0RkNmUTdBLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIFJlZ3VsYXInKSwgbG9jYWwoJ0xhdG8tUmVndWxhcicpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dXl3NEJNVVRQSGp4NHdYaVd0RkNjLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkJyksIGxvY2FsKCdMYXRvLUJvbGQnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU5dzRCTVVUUEhoNlVWU3dhUEdRM3E1ZDBON3cud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gQm9sZCcpLCBsb2NhbCgnTGF0by1Cb2xkJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OXc0Qk1VVFBIaDZVVlN3aVBHUTNxNWQwLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH0iLCJAaW1wb3J0ICd+c2Fzcy92YXJpYWJsZXMnO1xuXG46aG9zdHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTAwMDtcblxuICAgID4gaGVhZGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAgICAgICA+IGRpdntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1kYXJrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZm9udDogJGZvbnQtZGVmYXVsdDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBAaW5jbHVkZSBib3gtc2hhZG93KGJvdHRvbSwgMC41Nyk7XG4gICAgICAgICAgICB6LWluZGV4OiA2O1xuXG4gICAgICAgICAgICA+IC50aXRsZSB7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgPiBoMiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udDogJGZvbnQtZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLWJpZztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZS13YXJtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcblxuICAgICAgICAgICAgICAgICAgICA+IGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlLWxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJi5kaXNhYmxlZHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyZWVuLWxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlLWxpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICA+IGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgID4gbmF2e1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAkdGFza2Jhci1oZWlnaHQ7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogJHRhc2tiYXItaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgJi52aWV3cyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICAgICAgICAgICAgPiB1bCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmFjdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgID4gdWx7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR0YXNrYmFyLWhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgPiBsaXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byA1cHggYXV0byAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlLXdhcm07XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAmLnRhYnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHRhc2tiYXItaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkdGFza2Jhci1saW5lLWhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW4tb3V0LCBib3JkZXItYm90dG9tLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgID4gZmEtaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAkaWNvbi1zaXplLWRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICYub3B0aW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5hc2lkZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtd2FybTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID4gLmFjdGlvbi1wYW5lbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAkdGFza2Jhci1oZWlnaHQgLSA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtd2FybTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3coYm90dG9tLCAwLjUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgJi5zZXBhcmF0b3Ige1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkdGFza2Jhci1oZWlnaHQgLSAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUtbGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICYuZGlzYWJsZWR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyZWVuLWxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkd2hpdGUtbGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZS1saWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICA+ICNhdHRyaWJ1dGVzIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCA1MCUgYXV0bztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDIyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3coYm90dG9tLCAwLjUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5lbWJlYmVkIHtcbiAgICAgICAgPiBoZWFkZXIge1xuICAgICAgICAgICAgPiBkaXZ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLXhpbWRleDtcblxuICAgICAgICAgICAgICAgID4gLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgPiBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlLWRhcmtlcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrLWxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmRpc2FibGVke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUtZGFyaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibGFjay1saWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgID4gbmF2IHtcbiAgICAgICAgICAgICAgICAgICAgPnVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgID4gbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUtZGFya2VyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5zZXBhcmF0b3Ige1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtZGFyaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrLWxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuZGlzYWJsZWR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUtZGFyaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkYmxhY2stbGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2stbGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIkBtaXhpbiBib3gtc2hhZG93ICgkcG9zLCAkb3BhY2l0eSwgJGltcG9ydGFudDogZmFsc2UpIHtcbiAgICAkX3BvczogMHB4IDBweCAzcHggMHB4IDtcbiAgICBAaWYoJHBvcyA9PSB0b3Ape1xuICAgICAgICAkX3BvczogMHB4IDNweCAxMXB4IDBweCA7XG4gICAgfUBlbHNlIGlmKCRwb3MgPT0gbGVmdCkge1xuICAgICAgICAkX3BvczogLTJweCAwcHggMTFweCAtNHB4O1xuICAgIH1cblxuICAgICRyZ2I6IHJnYmEoMCwwLDAsJG9wYWNpdHkpO1xuICAgIEBpZigkaW1wb3J0YW50ID09IHRydWUpeyAgICAgICAgXG4gICAgICAgICRyZ2I6IHJnYmEoMCwwLDAsJG9wYWNpdHkpICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgYm94LXNoYWRvdzogJF9wb3MgJHJnYjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/taskbar/taskbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/taskbar/taskbar.component.ts ***!
  \*********************************************************/
/*! exports provided: TaskbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskbarComponent", function() { return TaskbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/dom */ "./src/app/models/dom.ts");
/* harmony import */ var _services_state_service_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/state-service/state.service */ "./src/app/services/state-service/state.service.ts");
/* harmony import */ var _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _models_configs_statesConfigs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @models/configs/statesConfigs */ "./src/app/models/configs/statesConfigs.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/api */ "./src/app/api.ts");
/* harmony import */ var _app_xedit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/xedit */ "./src/app/xedit.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var TaskbarComponent = /** @class */ (function () {
    function TaskbarComponent(_editorService, _stateService, http, _notification, cdr) {
        this._editorService = _editorService;
        this._stateService = _stateService;
        this.http = http;
        this._notification = _notification;
        this.cdr = cdr;
        this.availableViews = [];
        // ICONS
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBars"];
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEyeSlash"];
        this.currentView = '';
        this.title = 'Document';
        this.displayToggle = false;
        this.toogleStateConfigs = false;
        this.configs = [];
        this.locked = false;
    }
    /************************************ LIFE CYCLE *******************************************/
    TaskbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stateConfigs = new _models_configs_statesConfigs__WEBPACK_IMPORTED_MODULE_8__["StateConfigs"]();
        this._editorService.getFile().subscribe(function (obsFile) {
            _this.file = obsFile;
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(obsFile)) {
                _this.title = obsFile.getName();
            }
        });
        this._stateService.getCurrentView().subscribe(function (currentView) { return (_this.currentView = currentView); });
        this._stateService.getAvailabelViews().subscribe(function (availableViews) { return (_this.availableViews = availableViews); });
    };
    TaskbarComponent.prototype.ngAfterViewChecked = function () {
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(this.stateActive) && !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(this.stateConfigs.isActive())) {
            this.stateActive = this.stateConfigs.isActive();
            this.toggleElementStateIcon();
            this.cdr.detectChanges();
        }
    };
    /********************************** END LIFE CYCLE *****************************************/
    TaskbarComponent.prototype.undo = function () {
        var _this = this;
        if (!this.locked && this.previousAvailable()) {
            this.locked = true;
            this._editorService.setLoading(true);
            this._editorService.lastStateFile().then(function () {
                _this._editorService.setLoading(false);
                _this.locked = false;
            });
        }
    };
    TaskbarComponent.prototype.redo = function () {
        var _this = this;
        if (!this.locked && this.nextAvailable()) {
            this.locked = true;
            this._editorService.setLoading(true);
            this._editorService.nextStateFile().then(function () {
                _this._editorService.setLoading(false);
                _this.locked = false;
            });
        }
    };
    TaskbarComponent.prototype.showComponent = function (component) {
        this._stateService.setCurrentView(component);
    };
    TaskbarComponent.prototype.hasMultiViews = function () {
        return this.availableViews.length > 1;
    };
    TaskbarComponent.prototype.nextAvailable = function () {
        return this.file != null && this.file.hasNextState();
    };
    TaskbarComponent.prototype.previousAvailable = function () {
        return this.file != null && this.file.hasPreviousState();
    };
    TaskbarComponent.prototype.closeMenu = function () {
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(this.viewMenu)) {
            _models_dom__WEBPACK_IMPORTED_MODULE_3__["DOM"].element(this.viewMenu).removeClass('opened');
        }
    };
    TaskbarComponent.prototype.save = function () {
        var _this = this;
        this._editorService.setLoading(true);
        var error = function () {
            console.error('ERROR SAVE DOCUMENT');
            _this._editorService.setLoading(false);
            _this._notification.error('Error', 'Se ha producido un error al guardar el documento.', _app_xedit__WEBPACK_IMPORTED_MODULE_11__["Xedit"].NOTIFICATION_DEFAULT_SETTINGS);
        };
        var success = function (result) {
            if (result.status === 0) {
                _this._editorService.setLoading(false);
                _this._notification.success('Guardado', 'El documento ha sido guardado.', _app_xedit__WEBPACK_IMPORTED_MODULE_11__["Xedit"].NOTIFICATION_DEFAULT_SETTINGS);
            }
            else {
                error();
            }
        };
        _app_api__WEBPACK_IMPORTED_MODULE_10__["Api"].saveDocument(this.http, this._editorService.getUpdatedDocument(), success, error);
    };
    TaskbarComponent.prototype.load = function () {
        document.getElementById('open_html').value = '';
        document.getElementById('open_html').click();
    };
    TaskbarComponent.prototype.toggleAttributes = function (event) {
        _models_dom__WEBPACK_IMPORTED_MODULE_3__["DOM"].element(event.target).toggleClass('selected');
        this.displayToggle = !this.displayToggle;
    };
    TaskbarComponent.prototype.closeAttributes = function (evt) {
        var title = document.getElementById('xe-task-title');
        _models_dom__WEBPACK_IMPORTED_MODULE_3__["DOM"].element(title).removeClass('selected');
        var element = evt.target;
        // if ($(element).parents('app-tree-modal').length === 0) {
        //     this.displayToggle = false;
        // }
    };
    TaskbarComponent.prototype.toggleStates = function (event) {
        this.stateConfigs.getConfigs();
        alert('toggle');
    };
    TaskbarComponent.prototype.openStates = function (event) {
        event.stopPropagation();
        this.toogleStateConfigs = true;
        this.configs = this.stateConfigs.getConfigs();
    };
    TaskbarComponent.prototype.closeStates = function () {
        this.toogleStateConfigs = false;
    };
    TaskbarComponent.prototype.saveStateConfigs = function (evt) {
        this.configs = evt;
        this.stateConfigs.setConfigs(evt);
    };
    TaskbarComponent.prototype.toggleElementState = function () {
        this.stateActive = this.stateConfigs.toggleActive();
        this.toggleElementStateIcon();
        this._editorService.setElementsState(!this.stateActive);
    };
    TaskbarComponent.prototype.toggleElementStateIcon = function () {
        this.faEye = !this.stateActive ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEye"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEyeSlash"];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('viewMenu'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TaskbarComponent.prototype, "viewMenu", void 0);
    TaskbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-taskbar',
            template: __webpack_require__(/*! ./taskbar.component.html */ "./src/app/components/taskbar/taskbar.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('toggleAtributes', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'translate(-50%, -100%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('250ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'translate(-50%, 0)', opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'translate(-50%, 0)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('250ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'translate(-50%, -100%)', opacity: 0 }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./taskbar.component.scss */ "./src/app/components/taskbar/taskbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_5__["EditorService"],
            _services_state_service_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], TaskbarComponent);
    return TaskbarComponent;
}());



/***/ }),

/***/ "./src/app/core/api.ts":
/*!*****************************!*\
  !*** ./src/app/core/api.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mappers_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mappers/router */ "./src/app/core/mappers/router.ts");

var Api = /** @class */ (function () {
    function Api() {
    }
    /****************** API METHODS ******************/
    Api.request = function (http, endpoint, query_params, post_data, _headers, successCallback, errorCallback, extra, http_method) {
        if (extra === void 0) { extra = {}; }
        if (http_method === void 0) { http_method = 'get'; }
        var _a = _mappers_router__WEBPACK_IMPORTED_MODULE_0__["default"].setToken(query_params, _headers), params = _a.params, headers = _a.headers;
        var url = _mappers_router__WEBPACK_IMPORTED_MODULE_0__["default"].configUrl(endpoint, params);
        var func = http.get(url, { headers: headers });
        if (http_method === 'post') {
            func = http.post(url, JSON.stringify(post_data), { headers: headers });
        }
        // TODO PUT, DELETE....
        return func.subscribe(function (result) {
            successCallback(result, extra);
        }, function (error) {
            errorCallback(extra);
        });
    };
    return Api;
}());
/* harmony default export */ __webpack_exports__["default"] = (Api);


/***/ }),

/***/ "./src/app/core/generators/toolbar-generator.ts":
/*!******************************************************!*\
  !*** ./src/app/core/generators/toolbar-generator.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _mappers_xedit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mappers/xedit */ "./src/app/core/mappers/xedit.ts");


var ToolbarGenerator = /** @class */ (function () {
    function ToolbarGenerator() {
    }
    ToolbarGenerator.generate = function (mapper, schema) {
        var toolbar = '';
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('options', schema)) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('styles', schema.options)) {
                toolbar += this.toolbarStyles(mapper, schema.options.styles);
            }
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('tags', schema.options)) {
                toolbar += this.toolbarTags(schema.options.tags);
            }
        }
        toolbar = toolbar.trim();
        return !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(toolbar) ? toolbar : false;
    };
    ToolbarGenerator.toolbarStyles = function (mapper, styles) {
        var stylesValue = {};
        var groupsFiltered = this.getGroupsFiltered(mapper);
        if (typeof styles === 'string') {
            styles = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["equals"])(styles, ToolbarGenerator.STYLES_ALL) ? Object.keys(groupsFiltered) : [];
        }
        styles.forEach(function (style) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(style, groupsFiltered)) {
                ToolbarGenerator.addValue(stylesValue, style, Object.values(groupsFiltered[style]));
            }
            else {
                for (var group in groupsFiltered) {
                    if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(style, groupsFiltered[group])) {
                        ToolbarGenerator.addValue(stylesValue, group, [groupsFiltered[group][style]]);
                    }
                }
            }
        });
        var result = '';
        for (var styleValue in stylesValue) {
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(stylesValue[styleValue])) {
                result += Object(ramda__WEBPACK_IMPORTED_MODULE_0__["uniq"])(stylesValue[styleValue]).join(' ') + ' | ';
            }
        }
        return result.replace(/(\s\|\s)$/g, '');
    };
    ToolbarGenerator.getGroupsFiltered = function (mapper) {
        var filterGroups = {};
        for (var _i = 0, _a = Object.keys(ToolbarGenerator.groups); _i < _a.length; _i++) {
            var group = _a[_i];
            for (var _b = 0, _c = ToolbarGenerator.groups[group]; _b < _c.length; _b++) {
                var key = _c[_b];
                if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(key, mapper)) {
                    if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(group, filterGroups)) {
                        filterGroups[group] = {};
                    }
                    filterGroups[group][key] = mapper[key];
                }
            }
        }
        return filterGroups;
    };
    ToolbarGenerator.getToolBarBtns = function () {
        var type = _mappers_xedit__WEBPACK_IMPORTED_MODULE_1__["Xedit"].getDam();
        return {
            a: type + "_link",
            img: type,
            video: type + "_video",
            audio: type + "_audio"
        };
    };
    ToolbarGenerator.toolbarTags = function (tags) {
        var tagsValue = {};
        var groups = {
            buttons: this.getToolBarBtns(),
            formats: {}
        };
        if (typeof tags === 'string') {
            tags = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["equals"])(tags, ToolbarGenerator.TAGS_ALL) ? Object.keys(groups) : [];
        }
        else {
            tags = Object.keys(tags);
        }
        tags.forEach(function (style) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(style, groups)) {
                ToolbarGenerator.addValue(tagsValue, style, Object.values(groups[style]));
            }
            else {
                for (var group in groups) {
                    if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(style, groups[group])) {
                        ToolbarGenerator.addValue(tagsValue, group, [groups[group][style]]);
                    }
                }
            }
        });
        var result = ' ';
        for (var tagValue in tagsValue) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["equals"])(tagValue, 'buttons')) {
                result += Object(ramda__WEBPACK_IMPORTED_MODULE_0__["uniq"])(tagsValue[tagValue]).join(' ');
            }
        }
        return result;
    };
    ToolbarGenerator.addValue = function (object, property, value) {
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(property, object)) {
            object[property] = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["union"])(object[property], value);
        }
        else {
            object[property] = value;
        }
    };
    ToolbarGenerator.STYLES_ALL = 'all';
    ToolbarGenerator.TAGS_ALL = 'all';
    ToolbarGenerator.groups = {
        group1: ['bold', 'italic', 'underline', 'strikethrough', 'color', 'background', 'math'],
        others: ['ol', 'ul', 'table'],
        align: ['alignleft', 'aligncenter', 'alignright', 'alignjustify'],
        indent: ['outdent', 'indent'],
        format: ['formatselect'],
        font: ['fontselect', 'fontsize']
    };
    return ToolbarGenerator;
}());
/* harmony default export */ __webpack_exports__["default"] = (ToolbarGenerator);


/***/ }),

/***/ "./src/app/core/handler-editor/handler-editor.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/handler-editor/handler-editor.ts ***!
  \*******************************************************/
/*! exports provided: HandlerEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandlerEditor", function() { return HandlerEditor; });
var HandlerEditor = /** @class */ (function () {
    function HandlerEditor() {
    }
    HandlerEditor.saveDoc = function (contentTag, content, args) {
        args.service.save(contentTag, content, 'Change section ' + args.node.getSection().getAttribute('xe_section'));
    };
    return HandlerEditor;
}());



/***/ }),

/***/ "./src/app/core/helpers/string.ts":
/*!****************************************!*\
  !*** ./src/app/core/helpers/string.ts ***!
  \****************************************/
/*! exports provided: StringHelpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringHelpers", function() { return StringHelpers; });
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_converters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/converters */ "./src/utils/converters.ts");


var StringHelpers = /** @class */ (function () {
    function StringHelpers() {
    }
    /**
     * Get all uuid and reset it form a string
     * @param text
     */
    StringHelpers.resetIdsFromString = function (text) {
        function replaceIndex(string, at, repl) {
            var pos = -1;
            return string.replace(/ xe_uuid=\"[^"]*\" */g, function (match) {
                pos++;
                if (pos === at) {
                    return repl;
                }
                return match;
            });
        }
        var occurrences = text.match(/ xe_uuid=\"[^"]*\" */g);
        occurrences = occurrences != null ? occurrences.length : 0;
        for (var i = 0; i < occurrences; i++) {
            text = replaceIndex(text, i, ' xe_uuid="' + angular2_uuid__WEBPACK_IMPORTED_MODULE_0__["UUID"].UUID() + '" ');
        }
        return _utils_converters__WEBPACK_IMPORTED_MODULE_1__["Converters"].json2html(_utils_converters__WEBPACK_IMPORTED_MODULE_1__["Converters"].html2json(text));
    };
    return StringHelpers;
}());



/***/ }),

/***/ "./src/app/core/mappers/router.ts":
/*!****************************************!*\
  !*** ./src/app/core/mappers/router.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _xedit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xedit */ "./src/app/core/mappers/xedit.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);



var Router = /** @class */ (function () {
    function Router() {
    }
    Router.getRouter = function () {
        return !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(window[_xedit__WEBPACK_IMPORTED_MODULE_0__["Xedit"].BASE]) && Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('router', window[_xedit__WEBPACK_IMPORTED_MODULE_0__["Xedit"].BASE]) ? window[_xedit__WEBPACK_IMPORTED_MODULE_0__["Xedit"].BASE].router : null;
    };
    Router.getRouterProperty = function (prop, def) {
        if (def === void 0) { def = null; }
        var router = Router.getRouter();
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(router)) {
            def = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])(prop, router) ? router[prop] : null;
        }
        return def;
    };
    Router.setToken = function (params, headers) {
        var token = Router.getRouterProperty(Router.TOKEN);
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(token)) {
            if (token.type === 'url') {
                params[token.field] = token.value;
            }
            else if (token.type === 'bearer') {
                headers = headers.set('Authorization', "Bearer " + token.value);
            }
            else if (token.type === 'basic') {
                headers = headers.set('Authorization', "Basic " + token.value);
            }
        }
        return { params: params, headers: headers };
    };
    Router.configUrl = function (endpoint, _params) {
        if (_params === void 0) { _params = {}; }
        var params = Object.assign({}, _params);
        var info = {};
        if (!/^(f|ht)tps?:\/\//i.test(endpoint)) {
            info = this.get(endpoint);
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(info)) {
                return null;
            }
            endpoint = Router.getRouterProperty(Router.BASE_URL, '') + "/" + info['path'];
        }
        // Added query params
        var match;
        var path = endpoint;
        while ((match = /\{([^{}]*)}/g.exec(path)) !== null) {
            var val = null;
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])(match[1], params)) {
                val = params[match[1]];
                delete params[match[1]];
            }
            else {
                val = Router.getExtraParam(match[1]);
            }
            if (val != null) {
                endpoint = endpoint.replace(match[0], val);
            }
            path = path.replace(match[0], '');
        }
        // Extra params
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('params', info)) {
            for (var _i = 0, _a = Object.keys(info['params']); _i < _a.length; _i++) {
                var property = _a[_i];
                var val = info['params'][property];
                match = /^\{(.*)}$/g.exec(val);
                if (match != null) {
                    var param = Router.getExtraParam(match[1]);
                    if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(param)) {
                        val = param;
                    }
                }
                if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])(property, params)) {
                    params[property] = val;
                }
                // filters.push(`${property}=${val}`);
            }
        }
        var query = Object.keys(params).length > 0 ? "?" + query_string__WEBPACK_IMPORTED_MODULE_2__["stringify"](params) : '';
        return "" + endpoint + query;
    };
    Router.get = function (name) {
        var endpoint = null;
        var path = name.split('.');
        for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
            var key = path_1[_i];
            endpoint = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(endpoint) ? Router.getRouterProperty(Router.ENDPOINTS) : endpoint;
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(endpoint)) {
                break;
            }
            endpoint = endpoint[key];
        }
        return endpoint;
    };
    Router.getExtraParam = function (param, def) {
        if (def === void 0) { def = null; }
        var params = Router.getRouterProperty(Router.EXTRA_PARAMS);
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(params) && Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])(param, params)) {
            def = params[param];
        }
        return def;
    };
    Router.ROUTER = 'router';
    Router.TOKEN = 'token';
    Router.BASE_URL = 'baseUrl';
    Router.ENDPOINTS = 'endpoints';
    Router.EXTRA_PARAMS = 'attrs';
    return Router;
}());
/* harmony default export */ __webpack_exports__["default"] = (Router);


/***/ }),

/***/ "./src/app/core/mappers/xedit.ts":
/*!***************************************!*\
  !*** ./src/app/core/mappers/xedit.ts ***!
  \***************************************/
/*! exports provided: Xedit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Xedit", function() { return Xedit; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");

var Xedit = /** @class */ (function () {
    function Xedit() {
    }
    // ************************************** Getters and setters **************************************/
    Xedit.getXedit = function () {
        return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(Xedit.BASE, window) ? window[Xedit.BASE] : null;
    };
    Xedit.getDocument = function () {
        var xedit = Xedit.getXedit();
        var res = null;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(xedit)) {
            res = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('document', xedit) ? xedit.document : null;
        }
        return res;
    };
    Xedit.getDam = function () {
        var xedit = Xedit.getXedit();
        var res = null;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(xedit)) {
            res = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('dam', xedit) ? xedit.dam : 'tree';
        }
        return res;
    };
    Xedit.getData = function (property) {
        if (property === void 0) { property = null; }
        var xedit = Xedit.getXedit();
        var res = null;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(xedit)) {
            res = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('data', xedit) ? xedit['data'][property] : xedit['data'];
        }
        return res;
    };
    Xedit.BASE = '$xedit';
    Xedit.TOKEN = 'token';
    Xedit.API_URL = 'apiUrl';
    Xedit.NOTIFICATION_DEFAULT_SETTINGS = {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true
    };
    return Xedit;
}());



/***/ }),

/***/ "./src/app/core/plugins.ts":
/*!*********************************!*\
  !*** ./src/app/core/plugins.ts ***!
  \*********************************/
/*! exports provided: Plugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugins", function() { return Plugins; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/api */ "./src/app/api.ts");
/* harmony import */ var _mappers_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mappers/router */ "./src/app/core/mappers/router.ts");



var Plugins = /** @class */ (function () {
    function Plugins() {
    }
    Plugins.MediaManagerUrl = function (id) {
        return _mappers_router__WEBPACK_IMPORTED_MODULE_2__["default"].configUrl(_app_api__WEBPACK_IMPORTED_MODULE_1__["Api"].getResourceUrl(), { id: id });
    };
    Plugins.MediaMAnagerSelect = function (_a, http, callback) {
        var hash = _a.hash, type = _a.type;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(hash)) {
            _app_api__WEBPACK_IMPORTED_MODULE_1__["Api"].getInfoNode(http, hash, type, callback, null, null);
        }
    };
    return Plugins;
}());



/***/ }),

/***/ "./src/app/core/runtime-html-compiler/runtime-html-compiler.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/core/runtime-html-compiler/runtime-html-compiler.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RuntimeHtmlCompilerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeHtmlCompilerComponent", function() { return RuntimeHtmlCompilerComponent; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _runtime_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./runtime-module */ "./src/app/core/runtime-html-compiler/runtime-module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RuntimeHtmlCompilerComponent = /** @class */ (function () {
    function RuntimeHtmlCompilerComponent(compiler) {
        this.compiler = compiler;
        this.selectNode = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.toolbar = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.compileRetry = 0;
        this.selector = 'runtime-html';
    }
    RuntimeHtmlCompilerComponent.prototype.ngOnInit = function () {
        var factory = this.compile();
        this.viewRef(factory);
    };
    RuntimeHtmlCompilerComponent.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    RuntimeHtmlCompilerComponent.prototype.changeSelection = function (uuid) {
        this.selectNode.emit(uuid);
    };
    RuntimeHtmlCompilerComponent.prototype.changeContent = function (data) {
        this.change.emit(data);
    };
    RuntimeHtmlCompilerComponent.prototype.changeToolbar = function (toolbar) {
        this.toolbar.emit(toolbar);
    };
    RuntimeHtmlCompilerComponent.prototype.compile = function () {
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.html)) {
            this.html = 'undefined';
        }
        this.html = "\n        <xedit\n            xe_uuid=\"" + this.xe_uuid + "\"\n        >\n            " + this.html + "\n        </xedit>";
        var metadata = {
            selector: this.selector,
            template: this.html,
            outputs: ['selectNode', 'change', 'toolbar'],
            inputs: ['xeUuid']
        };
        this.destroy();
        return this.load(metadata);
    };
    RuntimeHtmlCompilerComponent.prototype.viewRef = function (compFactory) {
        var _this = this;
        this.compRef = this.container.createComponent(compFactory);
        this.compRef.instance['selectNode'].subscribe(function ($event) { return _this.changeSelection($event); });
        this.compRef.instance['change'].subscribe(function ($event) { return _this.changeContent($event); });
        this.compRef.instance['toolbar'].subscribe(function ($event) { return _this.changeToolbar($event); });
        this.setComponentProps({ data: this.data });
        return this;
    };
    RuntimeHtmlCompilerComponent.prototype.setComponentProps = function (props) {
        for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
            var prop = _a[_i];
            this.compRef.instance[prop] = props[prop];
        }
    };
    RuntimeHtmlCompilerComponent.prototype.destroy = function () {
        if (this.compRef) {
            this.compRef.destroy();
            this.compRef = null;
        }
    };
    RuntimeHtmlCompilerComponent.prototype.load = function (metadata) {
        var decoratorComp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])(metadata)(/** @class */ (function () {
            function RuntimeComponent() {
                this.selectNode = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                this.toolbar = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
            }
            RuntimeComponent.prototype.changeSelection = function (uuid) {
                this.selected = uuid;
                this.selectNode.emit(uuid);
            };
            RuntimeComponent.prototype.changeContent = function (data) {
                this.change.emit(data);
            };
            RuntimeComponent.prototype.changeToolbar = function (toolbarOptions) {
                this.toolbar.emit(toolbarOptions);
            };
            return RuntimeComponent;
        }()));
        var RuntimeComponentModule = /** @class */ (function () {
            function RuntimeComponentModule() {
            }
            RuntimeComponentModule = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [_runtime_module__WEBPACK_IMPORTED_MODULE_1__["RuntimeModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                    declarations: [decoratorComp],
                    schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
                })
            ], RuntimeComponentModule);
            return RuntimeComponentModule;
        }());
        try {
            this.module = this.compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
            return this.module.componentFactories.find(function (f) { return f.componentType === decoratorComp; });
        }
        catch (ex) {
            this.compileRetry++;
            var message = 'Failed to compile the template please use the "text view"';
            console.error(message, ex, this.html);
            this.html = "<div style=\"padding:50px; color:red;\">" + message + "</div>";
            if (this.compileRetry < 3) {
                return this.compile();
            }
            throw new Error('Failed to compile the template please use the "text view"');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], RuntimeHtmlCompilerComponent.prototype, "selectNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], RuntimeHtmlCompilerComponent.prototype, "change", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], RuntimeHtmlCompilerComponent.prototype, "toolbar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String)
    ], RuntimeHtmlCompilerComponent.prototype, "xe_uuid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String)
    ], RuntimeHtmlCompilerComponent.prototype, "html", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], RuntimeHtmlCompilerComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"])
    ], RuntimeHtmlCompilerComponent.prototype, "container", void 0);
    RuntimeHtmlCompilerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-runtime-html-compiler',
            template: "\n        <div #container></div>\n    "
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Compiler"]])
    ], RuntimeHtmlCompilerComponent);
    return RuntimeHtmlCompilerComponent;
}());



/***/ }),

/***/ "./src/app/core/runtime-html-compiler/runtime-module.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/runtime-html-compiler/runtime-module.ts ***!
  \**************************************************************/
/*! exports provided: RuntimeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeModule", function() { return RuntimeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_elements_xedit_image_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/elements/xedit/image/image.component */ "./src/app/elements/xedit/image/image.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_elements_xedit_section_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/elements/xedit/section/section.component */ "./src/app/elements/xedit/section/section.component.ts");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/fesm5/tinymce-tinymce-angular.js");
/* harmony import */ var _app_elements_xedit_tiny_mce_tiny_mce_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/elements/xedit/tiny-mce/tiny-mce.component */ "./src/app/elements/xedit/tiny-mce/tiny-mce.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RuntimeModule = /** @class */ (function () {
    function RuntimeModule() {
    }
    RuntimeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_4__["EditorModule"]],
            declarations: [_app_elements_xedit_section_section_component__WEBPACK_IMPORTED_MODULE_3__["SectionComponent"], _app_elements_xedit_image_image_component__WEBPACK_IMPORTED_MODULE_1__["ImageComponent"], _app_elements_xedit_tiny_mce_tiny_mce_component__WEBPACK_IMPORTED_MODULE_5__["TinyMCEComponent"]],
            exports: [_app_elements_xedit_image_image_component__WEBPACK_IMPORTED_MODULE_1__["ImageComponent"], _app_elements_xedit_section_section_component__WEBPACK_IMPORTED_MODULE_3__["SectionComponent"], _app_elements_xedit_tiny_mce_tiny_mce_component__WEBPACK_IMPORTED_MODULE_5__["TinyMCEComponent"]]
        })
    ], RuntimeModule);
    return RuntimeModule;
}());



/***/ }),

/***/ "./src/app/elements/blocks/acordion/acordion.component.html":
/*!******************************************************************!*\
  !*** ./src/app/elements/blocks/acordion/acordion.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<collapsible-list-item>\n    <collapsible-header class=\"waves-effect\" [ngClass]=\"{'open': isOpen}\" (click)=\"toggle()\">\n        {{ title }}\n    </collapsible-header>\n    <collapsible-body [class]=\"className\" [expanded]=\"false\">\n        <ng-content></ng-content>\n    </collapsible-body>\n</collapsible-list-item>"

/***/ }),

/***/ "./src/app/elements/blocks/acordion/acordion.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/elements/blocks/acordion/acordion.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  flex-grow: 1; }\n:host > collapsible-list-item {\n    display: flex;\n    flex-grow: 1;\n    flex-direction: column;\n    margin: 0 auto 2px 0; }\n:host > collapsible-list-item > collapsible-header {\n      margin: 0;\n      font: normal 14px \"Lato\", sans-serif;\n      font-size: 12px;\n      text-transform: uppercase;\n      text-align: left;\n      padding: 3px 10px 1px 10px;\n      color: #959595;\n      background-color: #e1e4e6;\n      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25) !important;\n      position: relative;\n      z-index: 3;\n      min-height: unset;\n      border-bottom: 2px solid transparent;\n      transition: border-bottom-color 0.3s ease-in-out; }\n:host > collapsible-list-item > collapsible-header:hover {\n        border-bottom-color: #44c4b1; }\n:host > collapsible-list-item > collapsible-header.open {\n        color: #474d4b;\n        border-bottom-color: #3a9e8f; }\n:host > collapsible-list-item > collapsible-body {\n      font: normal 14px \"Lato\", sans-serif;\n      background-color: #edeff2;\n      position: relative;\n      padding: 5px 10px;\n      z-index: 2;\n      box-shadow: unset !important;\n      border: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdG92YXIvZGV2ZWxvcC93ZWIveGVkaXQvc3JjL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvc2Fzcy9mb250cy9fbGF0by5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvYXBwL2VsZW1lbnRzL2Jsb2Nrcy9hY29yZGlvbi9hY29yZGlvbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hdG92YXIvZGV2ZWxvcC93ZWIveGVkaXQvc3JjL3Nhc3MvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxzRUFBWTtBQUZaLDhFQUFBO0FDQUEsY0FBQTtBQUNBO0VBQ0ksbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsOElBQThJO0VBQzlJLG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRJQUE0STtFQUM1SSx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrSEFBK0g7RUFDL0gsbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNkhBQTZIO0VBQzdILHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRJQUE0STtFQUM1SSxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwwSUFBMEk7RUFDMUkseUtBQXlLLEVBQUE7QUFFM0ssY0FBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0hBQStIO0VBQy9ILG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRIQUE0SDtFQUM1SCx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrSEFBK0g7RUFDL0gsbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNEhBQTRIO0VBQzVILHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDZIQUE2SDtFQUM3SCxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwwSEFBMEg7RUFDMUgseUtBQXlLLEVBQUE7QUM1RjdLO0VBQ0ksWUFBWSxFQUFBO0FBRGhCO0lBSVEsYUFBYTtJQUNiLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsb0JBQW9CLEVBQUE7QUFQNUI7TUFVWSxTQUFTO01BQ1Qsb0NGcUJvQjtNRXBCcEIsZUZzQlU7TUVyQlYseUJBQXlCO01BQ3pCLGdCQUFnQjtNQUNoQiwwQkFBMEI7TUFDMUIsY0ZDVTtNRUFWLHlCRkVRO01HUmhCLDBEQUh5QztNRFdqQyxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLGlCQUFpQjtNQUNqQixvQ0FBb0M7TUFDcEMsZ0RBQWdELEVBQUE7QUF2QjVEO1FBMEJnQiw0QkZmSyxFQUFBO0FFWHJCO1FBOEJnQixjRnpCSTtRRTBCSiw0QkZ0QkksRUFBQTtBRVRwQjtNQXNDWSxvQ0ZOb0I7TUVPcEIseUJGbkJTO01Fb0JULGtCQUFrQjtNQUNsQixpQkFMbUI7TUFNbkIsVUFBVTtNQUNWLDRCQUE0QjtNQUM1QixvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL2Jsb2Nrcy9hY29yZGlvbi9hY29yZGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgJ35zYXNzL2ZvbnRzL2xhdG8nO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4wLjYvY3NzL2FsbC5jc3MnKTtcbkBpbXBvcnQgJ35zYXNzL21peGlucyc7XG5cbiRibGFjay1kYXJrZXI6ICMyMDI2MjQ7XG4kYmxhY2stZGFyazogIzNmNDk0NjtcbiRibGFjay13YXJtOiAjNDc0ZDRiO1xuJGJsYWNrLWxpZ2h0OiAjNWY2MzYyO1xuXG4kZ3JlZW4tZGFya2VyOiAjMWU1NzRlO1xuJGdyZWVuLWRhcms6ICMzYTllOGY7XG4kZ3JlZW4td2FybTogIzNlYTA5MTtcbiRncmVlbi1saWdodDogIzQ0YzRiMTtcblxuJGJsdWUtZGFyazogIzIxNGU2MTtcbiRibHVlLWxpZ2h0OiAjMjk1ZTc1O1xuJGJsdWUtbGlnaHRlcjogIzMxNzE4ZDtcblxuJHdoaXRlLWRhcmtlcjogIzk1OTU5NTtcbiR3aGl0ZS1kYXJrOiAjYzRjMmMyO1xuJHdoaXRlLXdhcm06ICNlMWU0ZTY7XG4kd2hpdGUtbGlnaHQ6ICNlZGVmZjI7XG4kd2hpdGUtbGlnaHRlcjogI2ZjZmNmYztcbiR3aGl0ZS14aW1kZXg6ICNmOWY5Zjk7XG5cbiRyZWQtd2FybTogI2QxMzczNztcbiRyZWQtbGlnaHQ6ICNkYjQ5NDk7XG5cbiR0YXNrYmFyLWhlaWdodDogNDZweDtcbiR0YXNrYmFyLWxpbmUtaGVpZ2h0OiA0MHB4O1xuJHRhYnMtaGVpZ2h0OiAzNXB4O1xuJHRhYnMtaGVpZ2h0LXNtYWxsOiAzMHB4O1xuXG4kZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcblxuJGZvbnQtc2l6ZS1zbWFsbDogMTJweDtcbiRmb250LXNpemUtZGVmYXVsdDogMTRweDtcbiRmb250LXNpemUtYmlnOiAxNnB4O1xuXG4kaWNvbi1zaXplLWRlZmF1bHQ6IDE4cHg7XG5cbiRmb250LWRlZmF1bHQ6IG5vcm1hbCAkZm9udC1zaXplLWRlZmF1bHQgJGZvbnQtZmFtaWx5O1xuXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy9jb2xvcnMnO1xuIiwiLyogbGF0aW4tZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gTGlnaHQgSXRhbGljJyksIGxvY2FsKCdMYXRvLUxpZ2h0SXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTl3Ml9GUWZ0eDk4OTdzeFoud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gTGlnaHQgSXRhbGljJyksIGxvY2FsKCdMYXRvLUxpZ2h0SXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTl3Ml9Hd2Z0eDk4OTdnLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OHc0Qk1VVFBIanhzQVVpLXFOaVhnN2VVMC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OHc0Qk1VVFBIanhzQVhDLXFOaVhnN1Eud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEJvbGQgSXRhbGljJyksIGxvY2FsKCdMYXRvLUJvbGRJdGFsaWMnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnVfdzRCTVVUUEhqeHNJNXdxX0ZRZnR4OTg5N3N4Wi53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkIEl0YWxpYycpLCBsb2NhbCgnTGF0by1Cb2xkSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTV3cV9Hd2Z0eDk4OTdnLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBMaWdodCcpLCBsb2NhbCgnTGF0by1MaWdodCcpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTl3NEJNVVRQSGg3VVNTd2FQR1EzcTVkME43dy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBMaWdodCcpLCBsb2NhbCgnTGF0by1MaWdodCcpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTl3NEJNVVRQSGg3VVNTd2lQR1EzcTVkMC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gUmVndWxhcicpLCBsb2NhbCgnTGF0by1SZWd1bGFyJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1eXc0Qk1VVFBIanhBd1hpV3RGQ2ZRN0Eud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gUmVndWxhcicpLCBsb2NhbCgnTGF0by1SZWd1bGFyJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1eXc0Qk1VVFBIang0d1hpV3RGQ2Mud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEJvbGQnKSwgbG9jYWwoJ0xhdG8tQm9sZCcpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTl3NEJNVVRQSGg2VVZTd2FQR1EzcTVkME43dy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkJyksIGxvY2FsKCdMYXRvLUJvbGQnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU5dzRCTVVUUEhoNlVWU3dpUEdRM3E1ZDAud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfSIsIkBpbXBvcnQgJ35zYXNzL3ZhcmlhYmxlcyc7XG5cbjpob3N0IHtcbiAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICA+IGNvbGxhcHNpYmxlLWxpc3QtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMnB4IDA7XG5cbiAgICAgICAgPiBjb2xsYXBzaWJsZS1oZWFkZXIgIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQ6ICRmb250LWRlZmF1bHQ7XG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtc21hbGw7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCAxMHB4IDFweCAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZS1kYXJrZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtd2FybTtcbiAgICAgICAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3coYm90dG9tLCAwLjI1LCB0cnVlKTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiB1bnNldDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4zcyBlYXNlLWluLW91dDtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGdyZWVuLWxpZ2h0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLm9wZW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2std2FybTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkZ3JlZW4tZGFyaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgID4gY29sbGFwc2libGUtYm9keSB7XG4gICAgICAgICAgICAkbWFyZ2luLXNpZGVzOiAxMHB4O1xuXG4gICAgICAgICAgICBmb250OiAkZm9udC1kZWZhdWx0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLWxpZ2h0O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4ICRtYXJnaW4tc2lkZXM7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufSIsIkBtaXhpbiBib3gtc2hhZG93ICgkcG9zLCAkb3BhY2l0eSwgJGltcG9ydGFudDogZmFsc2UpIHtcbiAgICAkX3BvczogMHB4IDBweCAzcHggMHB4IDtcbiAgICBAaWYoJHBvcyA9PSB0b3Ape1xuICAgICAgICAkX3BvczogMHB4IDNweCAxMXB4IDBweCA7XG4gICAgfUBlbHNlIGlmKCRwb3MgPT0gbGVmdCkge1xuICAgICAgICAkX3BvczogLTJweCAwcHggMTFweCAtNHB4O1xuICAgIH1cblxuICAgICRyZ2I6IHJnYmEoMCwwLDAsJG9wYWNpdHkpO1xuICAgIEBpZigkaW1wb3J0YW50ID09IHRydWUpeyAgICAgICAgXG4gICAgICAgICRyZ2I6IHJnYmEoMCwwLDAsJG9wYWNpdHkpICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgYm94LXNoYWRvdzogJF9wb3MgJHJnYjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/elements/blocks/acordion/acordion.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/elements/blocks/acordion/acordion.component.ts ***!
  \****************************************************************/
/*! exports provided: AcordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcordionComponent", function() { return AcordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AcordionComponent = /** @class */ (function () {
    function AcordionComponent() {
        this.isOpen = false;
    }
    AcordionComponent.prototype.ngOnInit = function () {
    };
    AcordionComponent.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AcordionComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AcordionComponent.prototype, "className", void 0);
    AcordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-acordion',
            template: __webpack_require__(/*! ./acordion.component.html */ "./src/app/elements/blocks/acordion/acordion.component.html"),
            styles: [__webpack_require__(/*! ./acordion.component.scss */ "./src/app/elements/blocks/acordion/acordion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AcordionComponent);
    return AcordionComponent;
}());



/***/ }),

/***/ "./src/app/elements/blocks/tree-modal/tree-modal.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/elements/blocks/tree-modal/tree-modal.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-smart-modal id=\"modal-1\" identifier=\"modal-1\" class=\"tree-modal\" #modal>\n  <app-tree #tree (selected)=\"closeModal('modal-1', $event)\" [type]=\"type\" [path]=\"path\"></app-tree>\n</ngx-smart-modal>"

/***/ }),

/***/ "./src/app/elements/blocks/tree-modal/tree-modal.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/elements/blocks/tree-modal/tree-modal.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL2Jsb2Nrcy90cmVlLW1vZGFsL3RyZWUtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/elements/blocks/tree-modal/tree-modal.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/elements/blocks/tree-modal/tree-modal.component.ts ***!
  \********************************************************************/
/*! exports provided: TreeModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeModalComponent", function() { return TreeModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _elements_blocks_tree_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elements/blocks/tree/tree.component */ "./src/app/elements/blocks/tree/tree.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TreeModalComponent = /** @class */ (function () {
    function TreeModalComponent(ngxModal) {
        this.ngxModal = ngxModal;
        this.close = false;
    }
    TreeModalComponent.prototype.openModal = function (id, type, p) {
        var _this = this;
        if (p === void 0) { p = []; }
        this.close = false;
        this.selectedId = null;
        this.path = p;
        this.type = type;
        this.ngxModal.open(id);
        this.tree.resetTreeModel();
        var promise = new Promise(function (resolve, reject) {
            var loop = window.setInterval(function () {
                try {
                    var treeModal = window['treeModal'];
                    if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(treeModal.selectedId)) {
                        window.clearInterval(loop);
                        _this.ngxModal.close(id);
                        resolve(treeModal.selectedId);
                    }
                    else if (treeModal.close && Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(treeModal.selectedId)) {
                        window.clearInterval(loop);
                        _this.ngxModal.close(id);
                        reject('Closed without selection');
                    }
                }
                catch (e) {
                    window.clearInterval(loop);
                    _this.ngxModal.close(id);
                    reject(e);
                }
            }, 300);
        });
        return promise;
    };
    TreeModalComponent.prototype.closeModal = function (id, selectedId) {
        if (selectedId === void 0) { selectedId = null; }
        this.selectedId = selectedId;
        this.close = true;
    };
    TreeModalComponent.prototype.ngOnInit = function () {
        window['treeModal'] = this;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tree'),
        __metadata("design:type", _elements_blocks_tree_tree_component__WEBPACK_IMPORTED_MODULE_3__["TreeComponent"])
    ], TreeModalComponent.prototype, "tree", void 0);
    TreeModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tree-modal',
            template: __webpack_require__(/*! ./tree-modal.component.html */ "./src/app/elements/blocks/tree-modal/tree-modal.component.html"),
            styles: [__webpack_require__(/*! ./tree-modal.component.scss */ "./src/app/elements/blocks/tree-modal/tree-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__["NgxSmartModalService"]])
    ], TreeModalComponent);
    return TreeModalComponent;
}());



/***/ }),

/***/ "./src/app/elements/blocks/tree/tree.component.html":
/*!**********************************************************!*\
  !*** ./src/app/elements/blocks/tree/tree.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tree-wrapper\">\n  <div class=\"media-show\">\n    <figure *ngIf=\"imgSrc !== null\">\n      <img [src]=\"imgSrc\" alt=\"Image preview\">\n      <figcaption>{{ imgName }}</figcaption>\n    </figure>\n  </div>\n  <div class=\"tree\">\n    <h4>Select Resource <span *ngIf=\"resourceCount !== -1\">({{ resourceCount }} availables)</span></h4>\n    <tree-root\n      #Tree\n      [nodes]=\"treeModel\"\n      [options]=\"treeOptions\"\n      (toggleExpanded)=\"onToggle($event)\"\n    >\n    <ng-template #treeNodeTemplate let-node let-index=\"index\">\n      <div class=\"node\">\n        <fa-icon class=\"icon\" [ngClass]=\"node.data.icon\" [icon]=\"setIcon(node.data)\"></fa-icon>\n        <span class=\"node-name\">{{ node.data.name }}</span>\n      </div>\n    </ng-template>\n    </tree-root>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/elements/blocks/tree/tree.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/elements/blocks/tree/tree.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tree-wrapper {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  height: 48rem; }\n\n.tree {\n  padding-left: 0;\n  margin-left: 1rem;\n  height: 44rem;\n  flex: 1 1; }\n\n.tree h4 {\n    font-size: 1.5rem; }\n\n.tree .node {\n    border-bottom: 1px dashed #cccccc;\n    min-width: 20rem; }\n\n.tree .node .node-name {\n      margin-left: 1rem; }\n\n.tree .node .icon {\n      padding-left: 1rem; }\n\n.tree .node .folder_images {\n      color: #75cd9d; }\n\n.tree .node .projects {\n      color: #43a1a2; }\n\n.tree .node .nodetype {\n      color: #c8c039; }\n\n.tree .node .image {\n      color: #43a1a2; }\n\n.tree .node .server {\n      color: #e45b5b; }\n\n.tree .node .root {\n      color: #43a1a2; }\n\n.tree .node .video {\n      color: #43a1a2; }\n\n.media-show {\n  width: 25%;\n  align-content: center;\n  display: flex;\n  margin: 0 1rem 0 1rem;\n  border-right: 1px solid #cccc;\n  padding: 1rem 1rem 0 0; }\n\n.media-show figure {\n    width: 100%;\n    max-height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    text-align: center; }\n\n.media-show figure img {\n      width: 100%;\n      max-height: 30rem;\n      -o-object-fit: contain;\n         object-fit: contain; }\n\n.media-show figure figcaption {\n      margin-top: 1rem;\n      color: #777777; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdG92YXIvZGV2ZWxvcC93ZWIveGVkaXQvc3JjL2FwcC9lbGVtZW50cy9ibG9ja3MvdHJlZS90cmVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsYUFBYSxFQUFBOztBQUdqQjtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFNBQVMsRUFBQTs7QUFKYjtJQU9RLGlCQUFpQixFQUFBOztBQVB6QjtJQVlRLGlDQUFpQztJQUNqQyxnQkFBZ0IsRUFBQTs7QUFieEI7TUFnQlksaUJBTmEsRUFBQTs7QUFWekI7TUFvQlksa0JBVmEsRUFBQTs7QUFWekI7TUE2QmdCLGNBTFcsRUFBQTs7QUF4QjNCO01BNENnQixjQVZhLEVBQUE7O0FBbEM3QjtNQTRDZ0IsY0FUYSxFQUFBOztBQW5DN0I7TUE0Q2dCLGNBUlUsRUFBQTs7QUFwQzFCO01BNENnQixjQVBXLEVBQUE7O0FBckMzQjtNQTRDZ0IsY0FOUyxFQUFBOztBQXRDekI7TUE0Q2dCLGNBTFUsRUFBQTs7QUFXMUI7RUFDSSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLHNCQUFzQixFQUFBOztBQU4xQjtJQVFRLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isa0JBQWtCLEVBQUE7O0FBYjFCO01BZVksV0FBVztNQUNYLGlCQUFpQjtNQUNqQixzQkFBbUI7U0FBbkIsbUJBQW1CLEVBQUE7O0FBakIvQjtNQW9CWSxnQkFBZ0I7TUFDaEIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWxlbWVudHMvYmxvY2tzL3RyZWUvdHJlZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmVlLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgaGVpZ2h0OiA0OHJlbTtcbn1cblxuLnRyZWUge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBoZWlnaHQ6IDQ0cmVtO1xuICAgIGZsZXg6IDEgMTtcblxuICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxuICAgIC5ub2RlIHtcbiAgICAgICAgJHNwYWNlX3NpemU6IDFyZW07XG5cbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjY2NjO1xuICAgICAgICBtaW4td2lkdGg6IDIwcmVtO1xuXG4gICAgICAgIC5ub2RlLW5hbWUge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6ICRzcGFjZV9zaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAkc3BhY2Vfc2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgICRmb2xkZXJfdHlwZXM6IChcbiAgICAgICAgICAgIGltYWdlczogIzc1Y2Q5ZCxcbiAgICAgICAgKTtcblxuICAgICAgICBAZWFjaCAka2V5LCAkY29sb3IgaW4gJGZvbGRlcl90eXBlcyB7XG4gICAgICAgICAgICAuZm9sZGVyXyN7JGtleX0ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkbm9kZV90eXBlczogKFxuICAgICAgICAgICAgcHJvamVjdHM6ICM0M2ExYTIsXG4gICAgICAgICAgICBub2RldHlwZTogI2M4YzAzOSxcbiAgICAgICAgICAgIGltYWdlOiAjNDNhMWEyLFxuICAgICAgICAgICAgc2VydmVyOiAjZTQ1YjViLFxuICAgICAgICAgICAgcm9vdDogIzQzYTFhMixcbiAgICAgICAgICAgIHZpZGVvOiAjNDNhMWEyXG4gICAgICAgICk7XG5cbiAgICAgICAgQGVhY2ggJGtleSwgJGNvbG9yIGluICRub2RlX3R5cGVzIHtcbiAgICAgICAgICAgIC4jeyRrZXl9IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubWVkaWEtc2hvdyB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAgMXJlbSAwIDFyZW07XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjY2M7XG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDAgMDtcbiAgICBmaWd1cmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMwcmVtO1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgfVxuICAgICAgICBmaWdjYXB0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICBjb2xvcjogIzc3Nzc3NztcbiAgICAgICAgfVxuICAgIH0gICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/elements/blocks/tree/tree.component.ts":
/*!********************************************************!*\
  !*** ./src/app/elements/blocks/tree/tree.component.ts ***!
  \********************************************************/
/*! exports provided: TreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return TreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/api */ "./src/app/api.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-tree-component */ "./node_modules/angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _app_core_mappers_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core/mappers/router */ "./src/app/core/mappers/router.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TreeComponent = /** @class */ (function () {
    function TreeComponent(http, _editorService) {
        var _this = this;
        this.http = http;
        this._editorService = _editorService;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resourceCount = -1;
        this.imgSrc = null;
        this.imgName = null;
        this.treeOptions = {
            actionMapping: {
                mouse: {
                    click: function (tree, node, $event) {
                        var _a = node.data, type = _a.type, id = _a.id, icon = _a.icon, name = _a.name;
                        if (type === TreeComponent_1.TYPE_FOLDER) {
                            angular_tree_component__WEBPACK_IMPORTED_MODULE_5__["TREE_ACTIONS"].TOGGLE_EXPANDED(tree, node, $event);
                            _this.imgSrc = null;
                        }
                        else if (type === 'item' && icon === TreeComponent_1.TYPE_IMAGE) {
                            _this.imgSrc = _app_core_mappers_router__WEBPACK_IMPORTED_MODULE_7__["default"].configUrl(_app_api__WEBPACK_IMPORTED_MODULE_3__["Api"].getResourceUrl(), { id: id });
                            _this.imgName = name;
                        }
                    },
                    dblClick: function (tree, node, $event) {
                        var type = node.data.type;
                        if (type !== TreeComponent_1.TYPE_EMPTY && type !== TreeComponent_1.TYPE_FOLDER) {
                            _this.selectNode(node);
                        }
                    },
                    contextMenu: function (tree, node, $event) {
                        $event.preventDefault();
                    }
                }
            }
        };
    }
    TreeComponent_1 = TreeComponent;
    TreeComponent.prototype.ngOnInit = function () {
        this.resetTreeModel();
    };
    TreeComponent.prototype.resetTreeModel = function () {
        this.treeModel = [
            {
                id: 1,
                name: 'Root',
                hasChildren: true,
                isRoot: true,
                icon: 'root',
                type: TreeComponent_1.TYPE_FOLDER,
                children: []
            }
        ];
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(this.tree.treeModel.roots)) {
            this.tree.treeModel.collapseAll();
        }
        // TODO LOAD PATH TREE
    };
    TreeComponent.prototype.processChildren = function (nodes) {
        var children = [];
        for (var nodeId in nodes) {
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(nodeId)) {
                var obj = {
                    id: nodeId,
                    name: nodes[nodeId]['name'],
                    type: nodes[nodeId]['type'],
                    icon: nodes[nodeId]['icon']
                };
                if (nodes[nodeId]['type'] === 'folder') {
                    obj['hasChildren'] = true;
                    obj['children'] = [];
                    obj['resources'] = this.resourceCount;
                }
                children.push(obj);
            }
        }
        if (children.length === 0) {
            children.push({
                name: 'No hay elementos disponibles...',
                type: 'empty'
            });
        }
        return children;
    };
    TreeComponent.prototype.onMenuItemSelected = function (e) {
        var id = e.node.data.id;
        this.selected.emit(id);
    };
    TreeComponent.prototype.requestChildren = function (nodeId, callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        var error = function () {
            console.error('ERROR DE API');
            _this._editorService.setLoading(false);
        };
        var success = function (result) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('status', result) && result.status === 0) {
                var nodes = result.response;
                nodes = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('l1', nodes) ? nodes['l1'] : [];
                _this.resourceCount = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('resources_count', nodes) ? nodes['resources_count'] : -1;
                nodes = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('nodes', nodes) ? nodes['nodes'] : [];
                callback(_this.processChildren(nodes));
            }
            else {
                error();
            }
            _this._editorService.setLoading(false);
        };
        return _app_api__WEBPACK_IMPORTED_MODULE_3__["Api"].getTreeChildren(this.http, nodeId, this.type, success, error);
    };
    TreeComponent.prototype.selectNode = function (node) {
        this.selected.emit(node.data.id);
    };
    /**************************************/
    TreeComponent.prototype.onToggle = function (_a) {
        var _this = this;
        var node = _a.node, isExpanded = _a.isExpanded;
        var data = node.data;
        var name = data.name, id = data.id, resources = data.resources;
        var children = data.children;
        if (isExpanded && children.length === 0) {
            node.data.children = [
                {
                    name: 'Loading...'
                }
            ];
            this.tree.treeModel.update();
            this.requestChildren(id, function (nodes) {
                node.data.children = nodes;
                _this.tree.treeModel.update();
            });
        }
        else if (children.length > 0) {
            this.resourceCount = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(resources) ? 0 : resources;
        }
    };
    TreeComponent.prototype.setIcon = function (_a) {
        var icon = _a.icon;
        var icons = {
            root: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSitemap"],
            projects: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faBoxes"],
            nodetype: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faBox"],
            server: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faServer"],
            folder_images: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFolder"],
            image: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFileImage"]
        };
        return Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])(icon, icons) ? icons[icon] : null;
    };
    var TreeComponent_1;
    TreeComponent.TYPE_FOLDER = 'folder';
    TreeComponent.TYPE_EMPTY = 'empty';
    TreeComponent.TYPE_IMAGE = 'image';
    TreeComponent.TYPE_VIDEO = 'video';
    TreeComponent.TYPE_LINK = 'link';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('Tree'),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "tree", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TreeComponent.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "path", void 0);
    TreeComponent = TreeComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tree',
            template: __webpack_require__(/*! ./tree.component.html */ "./src/app/elements/blocks/tree/tree.component.html"),
            styles: [__webpack_require__(/*! ./tree.component.scss */ "./src/app/elements/blocks/tree/tree.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"]])
    ], TreeComponent);
    return TreeComponent;
}());



/***/ }),

/***/ "./src/app/elements/forms/button/button.component.html":
/*!*************************************************************!*\
  !*** ./src/app/elements/forms/button/button.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"onClick($event)\">\n    {{ text }}\n    <i [ngClass]=\"['icon', icon]\" *ngIf=\"icon !== ''\"></i>\n</button>"

/***/ }),

/***/ "./src/app/elements/forms/button/button.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/elements/forms/button/button.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host > button {\n  width: 100%;\n  font: normal 14px \"Lato\", sans-serif;\n  border: none;\n  border-radius: 0px;\n  padding: 5px 10px;\n  text-align: center;\n  color: #edeff2;\n  background-color: #3ea091;\n  transition: background-color 0.3s ease-in-out; }\n:host > button > .icon {\n    padding-left: 5px; }\n:host > button:hover {\n    background-color: #3a9e8f; }\n:host > button:active {\n    background-color: #1e574e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdG92YXIvZGV2ZWxvcC93ZWIveGVkaXQvc3JjL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvc2Fzcy9mb250cy9fbGF0by5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvYXBwL2VsZW1lbnRzL2Zvcm1zL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLHNFQUFZO0FBRlosOEVBQUE7QUNBQSxjQUFBO0FBQ0E7RUFDSSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw4SUFBOEk7RUFDOUksbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNElBQTRJO0VBQzVJLHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLCtIQUErSDtFQUMvSCxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw2SEFBNkg7RUFDN0gseUtBQXlLLEVBQUE7QUFFM0ssY0FBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNElBQTRJO0VBQzVJLG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDBJQUEwSTtFQUMxSSx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrSEFBK0g7RUFDL0gsbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNEhBQTRIO0VBQzVILHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLCtIQUErSDtFQUMvSCxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0SEFBNEg7RUFDNUgseUtBQXlLLEVBQUE7QUFFM0ssY0FBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNkhBQTZIO0VBQzdILG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDBIQUEwSDtFQUMxSCx5S0FBeUssRUFBQTtBQzVGN0s7RUFFUSxXQUFXO0VBQ1gsb0NGNkJ3QjtFRTVCeEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNGWWE7RUVYYix5QkZDWTtFRUFaLDZDQUE2QyxFQUFBO0FBVnJEO0lBYVksaUJBQWlCLEVBQUE7QUFiN0I7SUFpQlkseUJGUlEsRUFBQTtBRVRwQjtJQXFCWSx5QkZiVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWxlbWVudHMvZm9ybXMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgJ35zYXNzL2ZvbnRzL2xhdG8nO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4wLjYvY3NzL2FsbC5jc3MnKTtcbkBpbXBvcnQgJ35zYXNzL21peGlucyc7XG5cbiRibGFjay1kYXJrZXI6ICMyMDI2MjQ7XG4kYmxhY2stZGFyazogIzNmNDk0NjtcbiRibGFjay13YXJtOiAjNDc0ZDRiO1xuJGJsYWNrLWxpZ2h0OiAjNWY2MzYyO1xuXG4kZ3JlZW4tZGFya2VyOiAjMWU1NzRlO1xuJGdyZWVuLWRhcms6ICMzYTllOGY7XG4kZ3JlZW4td2FybTogIzNlYTA5MTtcbiRncmVlbi1saWdodDogIzQ0YzRiMTtcblxuJGJsdWUtZGFyazogIzIxNGU2MTtcbiRibHVlLWxpZ2h0OiAjMjk1ZTc1O1xuJGJsdWUtbGlnaHRlcjogIzMxNzE4ZDtcblxuJHdoaXRlLWRhcmtlcjogIzk1OTU5NTtcbiR3aGl0ZS1kYXJrOiAjYzRjMmMyO1xuJHdoaXRlLXdhcm06ICNlMWU0ZTY7XG4kd2hpdGUtbGlnaHQ6ICNlZGVmZjI7XG4kd2hpdGUtbGlnaHRlcjogI2ZjZmNmYztcbiR3aGl0ZS14aW1kZXg6ICNmOWY5Zjk7XG5cbiRyZWQtd2FybTogI2QxMzczNztcbiRyZWQtbGlnaHQ6ICNkYjQ5NDk7XG5cbiR0YXNrYmFyLWhlaWdodDogNDZweDtcbiR0YXNrYmFyLWxpbmUtaGVpZ2h0OiA0MHB4O1xuJHRhYnMtaGVpZ2h0OiAzNXB4O1xuJHRhYnMtaGVpZ2h0LXNtYWxsOiAzMHB4O1xuXG4kZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcblxuJGZvbnQtc2l6ZS1zbWFsbDogMTJweDtcbiRmb250LXNpemUtZGVmYXVsdDogMTRweDtcbiRmb250LXNpemUtYmlnOiAxNnB4O1xuXG4kaWNvbi1zaXplLWRlZmF1bHQ6IDE4cHg7XG5cbiRmb250LWRlZmF1bHQ6IG5vcm1hbCAkZm9udC1zaXplLWRlZmF1bHQgJGZvbnQtZmFtaWx5O1xuXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy9jb2xvcnMnO1xuIiwiLyogbGF0aW4tZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gTGlnaHQgSXRhbGljJyksIGxvY2FsKCdMYXRvLUxpZ2h0SXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTl3Ml9GUWZ0eDk4OTdzeFoud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gTGlnaHQgSXRhbGljJyksIGxvY2FsKCdMYXRvLUxpZ2h0SXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTl3Ml9Hd2Z0eDk4OTdnLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OHc0Qk1VVFBIanhzQVVpLXFOaVhnN2VVMC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OHc0Qk1VVFBIanhzQVhDLXFOaVhnN1Eud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEJvbGQgSXRhbGljJyksIGxvY2FsKCdMYXRvLUJvbGRJdGFsaWMnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnVfdzRCTVVUUEhqeHNJNXdxX0ZRZnR4OTg5N3N4Wi53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkIEl0YWxpYycpLCBsb2NhbCgnTGF0by1Cb2xkSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTV3cV9Hd2Z0eDk4OTdnLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBMaWdodCcpLCBsb2NhbCgnTGF0by1MaWdodCcpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTl3NEJNVVRQSGg3VVNTd2FQR1EzcTVkME43dy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBMaWdodCcpLCBsb2NhbCgnTGF0by1MaWdodCcpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTl3NEJNVVRQSGg3VVNTd2lQR1EzcTVkMC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gUmVndWxhcicpLCBsb2NhbCgnTGF0by1SZWd1bGFyJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1eXc0Qk1VVFBIanhBd1hpV3RGQ2ZRN0Eud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gUmVndWxhcicpLCBsb2NhbCgnTGF0by1SZWd1bGFyJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1eXc0Qk1VVFBIang0d1hpV3RGQ2Mud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEJvbGQnKSwgbG9jYWwoJ0xhdG8tQm9sZCcpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTl3NEJNVVRQSGg2VVZTd2FQR1EzcTVkME43dy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkJyksIGxvY2FsKCdMYXRvLUJvbGQnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU5dzRCTVVUUEhoNlVWU3dpUEdRM3E1ZDAud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfSIsIkBpbXBvcnQgJ35zYXNzL3ZhcmlhYmxlcyc7XG5cbjpob3N0IHtcbiAgICA+IGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250OiAkZm9udC1kZWZhdWx0O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICR3aGl0ZS1saWdodDsgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi13YXJtO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgPiAuaWNvbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWRhcms7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tZGFya2VyO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/elements/forms/button/button.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/elements/forms/button/button.component.ts ***!
  \***********************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent.prototype.onClick = function ($evt) {
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.click)) {
            this.click($evt);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Function)
    ], ButtonComponent.prototype, "click", void 0);
    ButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/elements/forms/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/elements/forms/button/button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/elements/forms/checkbox/checkbox.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/elements/forms/checkbox/checkbox.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>\n    <input type=\"checkbox\" [name]=\"name\" [checked]=checked (change)=\"changeValues($event)\"> {{ placeholder }}\n</label>"

/***/ }),

/***/ "./src/app/elements/forms/checkbox/checkbox.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/elements/forms/checkbox/checkbox.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex; }\n  :host > label {\n    margin: auto 0;\n    flex-grow: 1; }\n  :host > label > input {\n      margin-right: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdG92YXIvZGV2ZWxvcC93ZWIveGVkaXQvc3JjL2FwcC9lbGVtZW50cy9mb3Jtcy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWEsRUFBQTtFQURqQjtJQUlRLGNBQWM7SUFDZCxZQUFZLEVBQUE7RUFMcEI7TUFRWSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL2Zvcm1zL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICA+ICBsYWJlbHtcbiAgICAgICAgbWFyZ2luOiBhdXRvIDA7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgXG4gICAgICAgID4gaW5wdXQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7IFxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/elements/forms/checkbox/checkbox.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/elements/forms/checkbox/checkbox.component.ts ***!
  \***************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.changeValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.checked = false;
        this.name = '';
        this.placeholder = 'Checkbox';
    }
    CheckboxComponent.prototype.ngOnInit = function () {
    };
    CheckboxComponent.prototype.changeValues = function (evt) {
        this.checked = !this.checked;
        this.emitValue();
    };
    CheckboxComponent.prototype.emitValue = function () {
        this.changeValue.emit(this.checked);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CheckboxComponent.prototype, "checked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CheckboxComponent.prototype, "changeValue", void 0);
    CheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "./src/app/elements/forms/checkbox/checkbox.component.html"),
            styles: [__webpack_require__(/*! ./checkbox.component.scss */ "./src/app/elements/forms/checkbox/checkbox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "./src/app/elements/forms/dynform/TabsFormMapper.ts":
/*!**********************************************************!*\
  !*** ./src/app/elements/forms/dynform/TabsFormMapper.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _questions_question_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions/question-dropdown */ "./src/app/elements/forms/dynform/questions/question-dropdown.ts");
/* harmony import */ var _questions_question_textbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questions/question-textbox */ "./src/app/elements/forms/dynform/questions/question-textbox.ts");
/* harmony import */ var _questions_question_depdrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questions/question-depdrop */ "./src/app/elements/forms/dynform/questions/question-depdrop.ts");
/* harmony import */ var _questions_question_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./questions/question-textarea */ "./src/app/elements/forms/dynform/questions/question-textarea.ts");
/* harmony import */ var _questions_question_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./questions/question-date */ "./src/app/elements/forms/dynform/questions/question-date.ts");
/* harmony import */ var _questions_question_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questions/question-image */ "./src/app/elements/forms/dynform/questions/question-image.ts");







/**
 * This class extracts and maps data about the additional form
 * for uploading or editing resources.
 */
var TabsFormMapper = /** @class */ (function () {
    /**@ignore */
    function TabsFormMapper(formSchema) {
        this.hasSections = false;
        /**
         * The extracted forms as a dict
         */
        this.forms = null;
        /**
         * The extracted Questions instances for every field of the form
         */
        this.fields = null;
        /**
         * @ignore
         */
        this.tabs = null;
        this.init(formSchema);
    }
    /**@ignore */
    TabsFormMapper.prototype.setForms = function (forms) {
        this.forms = forms;
        return this;
    };
    /**@ignore */
    TabsFormMapper.prototype.getForms = function () {
        return this.forms;
    };
    /**@ignore */
    TabsFormMapper.prototype.getFields = function () {
        return this.fields;
    };
    /**@ignore */
    TabsFormMapper.prototype.setFields = function (fields) {
        this.fields = fields;
    };
    TabsFormMapper.prototype.getTabs = function () {
        return this.tabs;
    };
    TabsFormMapper.prototype.setTabs = function (tabs) {
        this.tabs = tabs;
    };
    TabsFormMapper.prototype.setTitle = function (title) {
        this.title = title;
    };
    TabsFormMapper.prototype.getTitle = function () {
        return this.title;
    };
    /**
     * Initializes and process the form to obtain que question fields
     */
    TabsFormMapper.prototype.initForm = function () {
        var localForm = this.getForms();
        this.title = localForm.title;
        this.tabs = this.handleTabs(localForm.tabs);
    };
    /**@ignore */
    TabsFormMapper.prototype.getValue = function (field, key, _default) {
        if (_default === void 0) { _default = ''; }
        var value = Object.assign({}, field);
        var keys = key.split('.');
        if (Array.isArray(keys)) {
            for (var i = 0; i < keys.length; i++) {
                if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["is"])(Object, value) && Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(keys[i], value)) {
                    value = value[keys[i]];
                }
                else {
                    break;
                }
            }
        }
        if (typeof value === 'object') {
            value = _default;
        }
        return value;
    };
    /**
     * Process the tabs from the schema.
     * @param rawTabs The raw schema
     */
    TabsFormMapper.prototype.handleTabs = function (rawTabs, asset) {
        var _this = this;
        if (asset === void 0) { asset = null; }
        var tabs = [];
        var fields = null;
        this.hasSections = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('sections', rawTabs[0]);
        if (!this.hasSections) {
            tabs = rawTabs.map(function (tab) {
                fields = _this.handleForm(tab.fields, asset);
                return { title: tab.title, questions: fields };
            });
        }
        else {
            var sections_1;
            tabs = rawTabs.map(function (tab) {
                sections_1 = _this.handleSections(tab.sections, asset);
                return { title: tab.title, sections: sections_1 };
            });
        }
        return tabs;
    };
    TabsFormMapper.prototype.handleSections = function (rawSections, asset) {
        var _this = this;
        var fields = null;
        var sections = rawSections.map(function (section) {
            fields = _this.handleForm(section.fields, asset);
            return { title: section.title, questions: fields };
        });
        return sections;
    };
    /**
     * Evaluates every field in the form and creates the questions
     * @param raw The raw data from the form
     * @param asset Some asset to use its data
     */
    TabsFormMapper.prototype.handleForm = function (raw, asset) {
        var _this = this;
        if (asset === void 0) { asset = null; }
        var newFields = raw.map(function (field) {
            var object = null;
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(asset)) {
                var key = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('realName', field.object) ? field.object.realName : field.object.key;
                field.object.val = _this.getValue(asset, key);
            }
            field.object.type = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('type', field) ? field.type : 'text';
            if (field.object.type === 'dropdown') {
                object = new _questions_question_dropdown__WEBPACK_IMPORTED_MODULE_1__["DropdownQuestion"](field.object);
            }
            else if (field.object.type === 'text') {
                object = new _questions_question_textbox__WEBPACK_IMPORTED_MODULE_2__["TextboxQuestion"](field.object);
            }
            else if (field.object.type === 'date') {
                object = new _questions_question_date__WEBPACK_IMPORTED_MODULE_5__["DateQuestion"](field.object);
            }
            else if (field.object.type === 'depdrop') {
                object = new _questions_question_depdrop__WEBPACK_IMPORTED_MODULE_3__["DepDropQuestion"](field.object);
            }
            else if (field.object.type === 'text-area') {
                object = new _questions_question_textarea__WEBPACK_IMPORTED_MODULE_4__["TextAreaQuestion"](field.object);
            }
            else if (field.object.type === 'image') {
                object = new _questions_question_image__WEBPACK_IMPORTED_MODULE_6__["ImageQuestion"](field.object);
            }
            return object;
        });
        return newFields.sort(function (a, b) { return a.order - b.order; });
    };
    /**
     * Gets a property from the selected object
     * @param obj The object to be inspected (The haystack)
     * @param prop The property to be found (The needle)
     * @param _default The default value if the needle is not found
     */
    TabsFormMapper.prototype.getProp = function (obj, prop, _default) {
        if (_default === void 0) { _default = null; }
        var result = _default;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(prop, obj)) {
            result = obj[prop];
        }
        return result;
    };
    /**
     * Initializes the mapper extracting values from the environment and the active window,
     * prioritising the window object.
     */
    TabsFormMapper.prototype.init = function (formSchema) {
        this.setForms(formSchema).initForm();
    };
    return TabsFormMapper;
}());
/* harmony default export */ __webpack_exports__["default"] = (TabsFormMapper);


/***/ }),

/***/ "./src/app/elements/forms/dynform/dyn-form.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/elements/forms/dynform/dyn-form.module.ts ***!
  \***********************************************************/
/*! exports provided: DynFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynFormModule", function() { return DynFormModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dyn_tabform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dyn-tabform.component */ "./src/app/elements/forms/dynform/dyn-tabform.component.ts");
/* harmony import */ var _questions_dyn_question_dyn_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./questions/dyn-question/dyn-question.component */ "./src/app/elements/forms/dynform/questions/dyn-question/dyn-question.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _tabs_tab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs/tab.component */ "./src/app/elements/forms/dynform/tabs/tab.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/elements/forms/dynform/tabs/tabs.component.ts");
/* harmony import */ var _section_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./section/section.component */ "./src/app/elements/forms/dynform/section/section.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DynFormModule = /** @class */ (function () {
    function DynFormModule() {
    }
    DynFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"]],
            declarations: [_dyn_tabform_component__WEBPACK_IMPORTED_MODULE_3__["DynTabformComponent"], _questions_dyn_question_dyn_question_component__WEBPACK_IMPORTED_MODULE_4__["DynQuestionComponent"], _tabs_tab_component__WEBPACK_IMPORTED_MODULE_6__["TabComponent"], _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_7__["TabsComponent"], _section_section_component__WEBPACK_IMPORTED_MODULE_8__["SectionComponent"]],
            bootstrap: [],
            exports: [_dyn_tabform_component__WEBPACK_IMPORTED_MODULE_3__["DynTabformComponent"], _questions_dyn_question_dyn_question_component__WEBPACK_IMPORTED_MODULE_4__["DynQuestionComponent"], _tabs_tab_component__WEBPACK_IMPORTED_MODULE_6__["TabComponent"], _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_7__["TabsComponent"]]
        }),
        __metadata("design:paramtypes", [])
    ], DynFormModule);
    return DynFormModule;
}());



/***/ }),

/***/ "./src/app/elements/forms/dynform/dyn-tabform.component.css":
/*!******************************************************************!*\
  !*** ./src/app/elements/forms/dynform/dyn-tabform.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-cont {\n    width: 100%;\n}\n\n.tab-cont form {\n    margin-top: -1em;\n}\n\n.form-tabs {\n    display: flex;\n    justify-content: center;\n}\n\n.tabs-q {\n    flex: 0 50%;\n    text-align: center;\n}\n\n.tabs-q div {\n    align-items: baseline;\n}\n\n.tabs-title {\n    width: 100%;\n    text-align: center;\n}\n\n.tabs-title h2 {\n    margin: 0 0 15px;\n    padding: 0;\n    font-size: 18px;\n    font-weight: 700;\n    color: #00a397;\n}\n\n.tabs-title:hover {\n    cursor: pointer;\n}\n\n.tab-container {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n}\n\n.single-cont {\n    width: 100%;\n    padding-top: 1em;\n    display: grid;\n    flex-wrap: wrap;\n    justify-content: center;\n    /* grid-template-columns: repeat(auto-fill, 40rem); */\n    height: 100%;\n    grid-template-rows: 10rem;\n    align-items: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlbWVudHMvZm9ybXMvZHluZm9ybS9keW4tdGFiZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLHFEQUFxRDtJQUNyRCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL2Zvcm1zL2R5bmZvcm0vZHluLXRhYmZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWItY29udCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi50YWItY29udCBmb3JtIHtcbiAgICBtYXJnaW4tdG9wOiAtMWVtO1xufVxuXG4uZm9ybS10YWJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGFicy1xIHtcbiAgICBmbGV4OiAwIDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YWJzLXEgZGl2IHtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbi50YWJzLXRpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGFicy10aXRsZSBoMiB7XG4gICAgbWFyZ2luOiAwIDAgMTVweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMDBhMzk3O1xufVxuLnRhYnMtdGl0bGU6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50YWItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uc2luZ2xlLWNvbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAxZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCA0MHJlbSk7ICovXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTByZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/elements/forms/dynform/dyn-tabform.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/elements/forms/dynform/dyn-tabform.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-cont\">\n    <form #dynTabForm (ngSubmit)=\"onSubmit()\" [formGroup]=\"tabform\">\n        <app-dam-tabs *ngIf=\"tabs.length > 1 || forceTabs; else singleForm\">\n            <app-dam-tab *ngFor=\"let tab of tabs\" [title]=\"tab.title\" class=\"tab-container\">\n                <ng-container *ngIf=\"formMapper.hasSections; else noSection\">\n                    <app-section\n                        *ngFor=\"let section of tab.sections; let i = index\"\n                        [title]=\"section.title\"\n                        [isHidden]=\"i === 0 ? false : true\"\n                    >\n                        <app-question\n                            *ngFor=\"let question of section.questions\"\n                            class=\"tabs-q\"\n                            [question]=\"question\"\n                            [form]=\"tabform\"\n                            [token]=\"token\"\n                            [questionClass]=\"questionClass\"\n                            [fetchUrl]=\"fetchUrl\"\n                        >\n                        </app-question>\n                    </app-section>\n                </ng-container>\n                <ng-template #noSection>\n                    <div class=\"single-cont\">\n                        <app-question\n                            *ngFor=\"let question of tab.questions\"\n                            class=\"tabs-q\"\n                            [question]=\"question\"\n                            [form]=\"tabform\"\n                            [token]=\"token\"\n                            [questionClass]=\"questionClass\"\n                            [fetchUrl]=\"fetchUrl\"\n                        >\n                        </app-question>\n                    </div>\n                </ng-template>\n            </app-dam-tab>\n        </app-dam-tabs>\n        <ng-template #singleForm>\n            <ng-container *ngFor=\"let tab of tabs\">\n                <div class=\"single-cont\">\n                    <div *ngFor=\"let question of questions\" class=\"form-row\">\n                        <app-question\n                            [question]=\"question\"\n                            [form]=\"tabform\"\n                            [token]=\"token\"\n                            [questionClass]=\"questionClass\"\n                            [fetchUrl]=\"fetchUrl\"\n                        >\n                        </app-question>\n                    </div>\n                </div>\n            </ng-container>\n        </ng-template>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/elements/forms/dynform/dyn-tabform.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/elements/forms/dynform/dyn-tabform.component.ts ***!
  \*****************************************************************/
/*! exports provided: DynTabformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynTabformComponent", function() { return DynTabformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _questions_question_control_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions/question-control.service */ "./src/app/elements/forms/dynform/questions/question-control.service.ts");
/* harmony import */ var _TabsFormMapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabsFormMapper */ "./src/app/elements/forms/dynform/TabsFormMapper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DynTabformComponent = /** @class */ (function () {
    function DynTabformComponent(qcs) {
        this.qcs = qcs;
        this.schema = {};
        this.tabs = [];
        /**
        * The array of questions
        */
        this.questions = [];
        /**
         * The payload input with all the data
         */
        this.payLoad = {};
        /**
         * An emitter to emit the data form after finished
         */
        this.sendForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         *The authorization token for api calls.
         *
         * @type {string}
         * @memberof DynQuestionComponent
         */
        this.token = null;
        /**
         *The URL to use for fetching depdrop and dopdrown options.
         *
         * @type {string}
         * @memberof DynQuestionComponent
         */
        this.fetchUrl = null;
        this.questionClass = 'dam-form-item dam-edit-item';
        this.forceTabs = false;
        this.show = false;
        this.formMapper = null;
    }
    DynTabformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formMapper = new _TabsFormMapper__WEBPACK_IMPORTED_MODULE_2__["default"](this.schema);
        this.tabs = this.formMapper.getTabs();
        this.extractQuestions(this.formMapper.hasSections);
        this.tabform.valueChanges.subscribe(function (data) {
            _this.sendForm.emit(data);
        });
    };
    DynTabformComponent.prototype.ngOnChanges = function () { };
    DynTabformComponent.prototype.extractQuestions = function (hasSections) {
        var _this = this;
        this.questions = [];
        if (hasSections) {
            this.tabs.map(function (tab) {
                tab.sections.map(function (section) {
                    _this.questions = _this.questions.concat(section.questions);
                });
            });
        }
        else {
            this.tabs.map(function (tab) {
                _this.questions = _this.questions.concat(tab.questions);
            });
        }
        this.tabform = this.qcs.toFormGroup(this.questions);
    };
    /**
     * Sends the data as a json string when submitted
     */
    DynTabformComponent.prototype.onSubmit = function () {
        this.payLoad = JSON.stringify(this.tabform.value);
    };
    DynTabformComponent.prototype.toggleVisible = function () {
        this.show = !this.show;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynTabformComponent.prototype, "schema", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynTabformComponent.prototype, "payLoad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DynTabformComponent.prototype, "sendForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DynTabformComponent.prototype, "token", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DynTabformComponent.prototype, "fetchUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynTabformComponent.prototype, "questionClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynTabformComponent.prototype, "forceTabs", void 0);
    DynTabformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dyn-tabform',
            template: __webpack_require__(/*! ./dyn-tabform.component.html */ "./src/app/elements/forms/dynform/dyn-tabform.component.html"),
            providers: [_questions_question_control_service__WEBPACK_IMPORTED_MODULE_1__["QuestionControlService"]],
            styles: [__webpack_require__(/*! ./dyn-tabform.component.css */ "./src/app/elements/forms/dynform/dyn-tabform.component.css")]
        }),
        __metadata("design:paramtypes", [_questions_question_control_service__WEBPACK_IMPORTED_MODULE_1__["QuestionControlService"]])
    ], DynTabformComponent);
    return DynTabformComponent;
}());



/***/ }),

/***/ "./src/app/elements/forms/dynform/questions/dyn-question/dyn-question.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/elements/forms/dynform/questions/dyn-question/dyn-question.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"questionClass\" [formGroup]=\"form\">\n    <label [attr.for]=\"question.key\">{{ question.label }}</label>\n\n    <div [ngSwitch]=\"question.controlType\">\n        <input\n            *ngSwitchCase=\"'text'\"\n            [formControlName]=\"question.key\"\n            [id]=\"question.key\"\n            [ngModel]=\"question.val\"\n            [type]=\"question.type\"\n        />\n        <input\n            *ngSwitchCase=\"'date'\"\n            [formControlName]=\"question.key\"\n            [id]=\"question.key\"\n            [ngModel]=\"question.val | date: 'yyyy-MM-dd'\"\n            [type]=\"question.type\"\n        />\n\n        <div *ngSwitchCase=\"'image'\" class=\"question-img\">\n            <input [formControlName]=\"question.key\" [id]=\"question.key\" [ngModel]=\"question.val\" [type]=\"text\" />\n            <button (click)=\"clicked($event)\"><i class=\"far fa-images\"></i></button>\n        </div>\n\n        <textarea *ngSwitchCase=\"'text-area'\" class=\"dam-textarea\" [formControlName]=\"question.key\" [id]=\"question.key\"\n            >{{ question.val }}\n    </textarea\n        >\n\n        <ng-select\n            class=\"dam-select\"\n            [id]=\"question.key\"\n            [(ngModel)]=\"question.val\"\n            *ngSwitchCase=\"'dropdown'\"\n            [formControlName]=\"question.key\"\n            [items]=\"question.options\"\n            bindValue=\"key\"\n            bindLabel=\"value\"\n            [multiple]=\"question.multi\"\n            º\n        >\n        </ng-select>\n        <ng-select\n            class=\"dam-select\"\n            [id]=\"question.key\"\n            [ngModel]=\"question.val\"\n            *ngSwitchCase=\"'depdrop'\"\n            [formControlName]=\"question.key\"\n            [items]=\"question.options\"\n        >\n        </ng-select>\n    </div>\n\n    <div class=\"errorMessage\" *ngIf=\"!isValid\">{{ question.label }} is required</div>\n</div>\n"

/***/ }),

/***/ "./src/app/elements/forms/dynform/questions/dyn-question/dyn-question.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/elements/forms/dynform/questions/dyn-question/dyn-question.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DynQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynQuestionComponent", function() { return DynQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../question-base */ "./src/app/elements/forms/dynform/questions/question-base.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Component extracted from the Angular docs for creating dynamic questions
 * for dynamic forms.
 */
var DynQuestionComponent = /** @class */ (function () {
    function DynQuestionComponent(http, ngxModal) {
        this.http = http;
        this.ngxModal = ngxModal;
        /**
         *The authorization token for api calls.
         *
         * @type {string}
         * @memberof DynQuestionComponent
         */
        this.token = null;
        /**
         *The URL to use for fetching depdrop and dopdrown options.
         *
         * @type {string}
         * @memberof DynQuestionComponent
         */
        this.fetchUrl = null;
        this.questionClass = 'dam-form-item dam-edit-item';
    }
    /**@ignore */
    DynQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_3__["hasIn"])('ref', this.question)) {
            this.form.get(this.question['ref']).valueChanges.subscribe(function (val) {
                _this.searchOptions();
            });
        }
        if (this.question.controlType === 'dropdown' && this.question['fetchable']) {
            this.getOptions();
        }
    };
    Object.defineProperty(DynQuestionComponent.prototype, "isValid", {
        /**
         * Returns the validity of the form control for the question
         * @returns {Boolean} True if valid, False otherwise
         */
        get: function () {
            return this.form.controls[this.question.key].valid;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the options for the depdrop component
     */
    DynQuestionComponent.prototype.searchOptions = function () {
        var _this = this;
        var value = this.form.get(this.question['ref']).value;
        if (value !== '') {
            this.fetchOptions(this.question['endpoint'], this.question['param'], value).subscribe(function (resp) {
                _this.question['options'] = [];
                _this.question['options'] = resp['result'].data.map(function (item) { return ({
                    key: item[_this.question['map'].key], value: item[_this.question['map'].value]
                }); });
            });
        }
    };
    /**
     * Gets the options for the dropdown component
     */
    DynQuestionComponent.prototype.getOptions = function () {
        var _this = this;
        this.fetchOptions(this.question['endpoint'], '', '').subscribe(function (resp) {
            _this.question['options'] = [];
            _this.question['options'] = resp['result'].data.map(function (item) { return ({
                key: item[_this.question['map'].key], value: item[_this.question['map'].value]
            }); });
        });
    };
    DynQuestionComponent.prototype.fetchOptions = function (end, key, param) {
        var url = this.fetchUrl + end;
        var params = {};
        params[key] = param;
        var heads = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json'
        });
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_3__["isNil"])(this.token)) {
            heads = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + this.token,
                'Accept': 'application/json'
            });
        }
        return this.http.get(url, { headers: heads, params: params });
    };
    DynQuestionComponent.prototype.clicked = function (e) {
        var _this = this;
        window['treeModal']
            .openModal('modal-1', this.question.controlType)
            .then(function (selectedId) {
            _this.question.val = selectedId;
        })
            .catch(function (err) { return console.log(err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _question_base__WEBPACK_IMPORTED_MODULE_2__["QuestionBase"])
    ], DynQuestionComponent.prototype, "question", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], DynQuestionComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DynQuestionComponent.prototype, "token", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DynQuestionComponent.prototype, "fetchUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynQuestionComponent.prototype, "questionClass", void 0);
    DynQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./dyn-question.component.html */ "./src/app/elements/forms/dynform/questions/dyn-question/dyn-question.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_4__["NgxSmartModalService"]])
    ], DynQuestionComponent);
    return DynQuestionComponent;
}());



/***/ }),

/***/ "./src/app/elements/forms/dynform/questions/question-base.ts":
/*!*******************************************************************!*\
  !*** ./src/app/elements/forms/dynform/questions/question-base.ts ***!
  \*******************************************************************/
/*! exports provided: QuestionBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionBase", function() { return QuestionBase; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");

/**
 * Represents a simple question with the needed values to work in a form
 */
var QuestionBase = /** @class */ (function () {
    /**@ignore */
    function QuestionBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        var val = options.val || null;
        this.set(options, 'map', {})
            .setVal(val);
    }
    /**
     * Securely sets the value from the selected object
     * @param object The object to be used
     * @param field The field to set the value
     * @param _default The default value if any
     */
    QuestionBase.prototype.set = function (object, field, _default) {
        if (_default === void 0) { _default = null; }
        var value = _default;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(field, object)) {
            value = object[field];
        }
        this[field] = value;
        return this;
    };
    /**
     * Sets the val property and returns this
     * @param val The new val value
     */
    QuestionBase.prototype.setVal = function (val) {
        if (val === void 0) { val = null; }
        this.val = val;
        return this;
    };
    return QuestionBase;
}());



/***/ }),

/***/ "./src/app/elements/forms/dynform/questions/question-control.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/elements/forms/dynform/questions/question-control.service.ts ***!
  \******************************************************************************/
/*! exports provided: QuestionControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionControlService", function() { return QuestionControlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Service that manages the questions and creates the form groups.
 */
var QuestionControlService = /** @class */ (function () {
    /**@ignore */
    function QuestionControlService() {
    }
    /**
     * Create a new form group given a questions array.
     * @param {QuestionBase<any>} questions The questions array
     * @returns {FormGroup} The created form group
     */
    QuestionControlService.prototype.toFormGroup = function (questions) {
        var group = {};
        questions.forEach(function (question) {
            group[question.key] = question.required ? new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](question.value || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
                : new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](question.value || '');
        });
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    QuestionControlService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], QuestionControlService);
    return QuestionControlService;
}());



/***/ }),

/***/ "./src/app/elements/forms/dynform/questions/question-date.ts":
/*!*******************************************************************!*\
  !*** ./src/app/elements/forms/dynform/questions/question-date.ts ***!
  \*******************************************************************/
/*! exports provided: DateQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateQuestion", function() { return DateQuestion; });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ "./src/app/elements/forms/dynform/questions/question-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/** This components extends a date input field question from a question base */
var DateQuestion = /** @class */ (function (_super) {
    __extends(DateQuestion, _super);
    /**@ignore */
    function DateQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        /**The field type */
        _this.controlType = 'date';
        _this.type = options['type'] || '';
        return _this;
    }
    return DateQuestion;
}(_question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"]));



/***/ }),

/***/ "./src/app/elements/forms/dynform/questions/question-depdrop.ts":
/*!**********************************************************************!*\
  !*** ./src/app/elements/forms/dynform/questions/question-depdrop.ts ***!
  \**********************************************************************/
/*! exports provided: DepDropQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepDropQuestion", function() { return DepDropQuestion; });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ "./src/app/elements/forms/dynform/questions/question-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/** This components extends a dropdown field question from a question base
 *  where their options depend on another dropdown or depdrop selection
*/
var DepDropQuestion = /** @class */ (function (_super) {
    __extends(DepDropQuestion, _super);
    /**@ignore */
    function DepDropQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        /**The field type */
        _this.controlType = 'depdrop';
        /** The available options for the dropdown */
        _this.options = [];
        _this.options = options['options'] || [];
        _this.ref = options['ref'] || 0;
        _this.endpoint = options['endpoint'] || '';
        _this.param = options['param'] || '';
        return _this;
    }
    return DepDropQuestion;
}(_question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"]));



/***/ }),

/***/ "./src/app/elements/forms/dynform/questions/question-dropdown.ts":
/*!***********************************************************************!*\
  !*** ./src/app/elements/forms/dynform/questions/question-dropdown.ts ***!
  \***********************************************************************/
/*! exports provided: DropdownQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownQuestion", function() { return DropdownQuestion; });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ "./src/app/elements/forms/dynform/questions/question-base.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/** This components extends a dropdown field question from a question base */
var DropdownQuestion = /** @class */ (function (_super) {
    __extends(DropdownQuestion, _super);
    /**@ignore */
    function DropdownQuestion(options, multi, searchable, fetchable, endpoint) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        /**The field type */
        _this.controlType = 'dropdown';
        _this.set(options, 'options', [])
            .set(options, 'multi', false)
            .set(options, 'searchable', false)
            .set(options, 'fetchable', false)
            .set(options, 'endpoint', '');
        return _this;
    }
    /** Sets the value(s) checking whether the value is an array or not */
    DropdownQuestion.prototype.setVal = function (val) {
        var _this = this;
        if (val === void 0) { val = null; }
        var result;
        if (Array.isArray(val)) {
            result = val.map(function (index) {
                return _this.valFixer(index);
            });
        }
        else {
            result = this.valFixer(val);
        }
        this.val = result;
        return this;
    };
    /**@ignore */
    DropdownQuestion.prototype.valFixer = function (val) {
        var result = { key: null, value: null };
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["is"])(Object, val)) {
            var key = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])(this.map['key'], val) ? val[this.map['key']] : null;
            var value = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])(this.map['value'], val) ? val[this.map['value']] : null;
            result = key;
        }
        else {
            result = val;
        }
        return result;
    };
    return DropdownQuestion;
}(_question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"]));



/***/ }),

/***/ "./src/app/elements/forms/dynform/questions/question-image.ts":
/*!********************************************************************!*\
  !*** ./src/app/elements/forms/dynform/questions/question-image.ts ***!
  \********************************************************************/
/*! exports provided: ImageQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageQuestion", function() { return ImageQuestion; });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ "./src/app/elements/forms/dynform/questions/question-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ImageQuestion = /** @class */ (function (_super) {
    __extends(ImageQuestion, _super);
    /**@ignore */
    function ImageQuestion(options, callback) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        /**The field type */
        _this.controlType = 'image';
        _this.set(options, 'callback', 'modal-1');
        return _this;
    }
    return ImageQuestion;
}(_question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"]));



/***/ }),

/***/ "./src/app/elements/forms/dynform/questions/question-textarea.ts":
/*!***********************************************************************!*\
  !*** ./src/app/elements/forms/dynform/questions/question-textarea.ts ***!
  \***********************************************************************/
/*! exports provided: TextAreaQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAreaQuestion", function() { return TextAreaQuestion; });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ "./src/app/elements/forms/dynform/questions/question-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/** This components extends a text area field question from a question base */
var TextAreaQuestion = /** @class */ (function (_super) {
    __extends(TextAreaQuestion, _super);
    /**@ignore */
    function TextAreaQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        /**The field type */
        _this.controlType = 'text-area';
        _this.type = options['type'] || '';
        if (_this.val instanceof Object) {
            _this.value = '';
        }
        else {
            _this.value = _this.val;
        }
        return _this;
    }
    return TextAreaQuestion;
}(_question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"]));



/***/ }),

/***/ "./src/app/elements/forms/dynform/questions/question-textbox.ts":
/*!**********************************************************************!*\
  !*** ./src/app/elements/forms/dynform/questions/question-textbox.ts ***!
  \**********************************************************************/
/*! exports provided: TextboxQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextboxQuestion", function() { return TextboxQuestion; });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ "./src/app/elements/forms/dynform/questions/question-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/** This components extends a text input field question from a question base */
var TextboxQuestion = /** @class */ (function (_super) {
    __extends(TextboxQuestion, _super);
    /**@ignore */
    function TextboxQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        /**The field type */
        _this.controlType = 'text';
        _this.type = options['type'] || '';
        return _this;
    }
    return TextboxQuestion;
}(_question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"]));



/***/ }),

/***/ "./src/app/elements/forms/dynform/section/section.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/elements/forms/dynform/section/section.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dynform-section\">\n  <div \n    [ngClass]=\"isHidden ? 'dynform-header form-hidden' : 'dynform-header'\" \n    (click)=\"toggle()\"\n  >\n    {{ title }}\n    <span style=\"float:right;\">{{ isHidden ? ' (+)' : ' (-)' }}</span>\n  </div>\n  \n  <div class=\"dynform-body\" *ngIf=\"!isHidden\">\n    <ng-content></ng-content>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/elements/forms/dynform/section/section.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/elements/forms/dynform/section/section.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dynform-section {\n  margin: 0 1rem 0 1rem; }\n  .dynform-section .dynform-header {\n    text-align: center;\n    border: 1px solid #cccccc;\n    margin-top: 2rem;\n    padding: 1rem;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer; }\n  .dynform-section .dynform-body {\n    width: 100%;\n    display: grid;\n    flex-wrap: wrap;\n    justify-content: center;\n    height: 100%;\n    grid-template-rows: 10rem;\n    align-items: center;\n    border: 1px solid #cccccc;\n    border-top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdG92YXIvZGV2ZWxvcC93ZWIveGVkaXQvc3JjL2FwcC9lbGVtZW50cy9mb3Jtcy9keW5mb3JtL3NlY3Rpb24vc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQixFQUFBO0VBRHpCO0lBSVEsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHlCQUFpQjtPQUFqQixzQkFBaUI7UUFBakIscUJBQWlCO1lBQWpCLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7RUFUdkI7SUFhUSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFFdkIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL2Zvcm1zL2R5bmZvcm0vc2VjdGlvbi9zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmR5bmZvcm0tc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAwIDFyZW0gMCAxcmVtO1xuXG4gICAgLmR5bmZvcm0taGVhZGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5keW5mb3JtLWJvZHkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCA0MHJlbSk7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHJlbTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/elements/forms/dynform/section/section.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/elements/forms/dynform/section/section.component.ts ***!
  \*********************************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionComponent = /** @class */ (function () {
    function SectionComponent() {
        this.title = '';
        this.isHidden = false;
    }
    SectionComponent.prototype.ngOnInit = function () {
    };
    SectionComponent.prototype.toggle = function () {
        this.isHidden = !this.isHidden;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SectionComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SectionComponent.prototype, "isHidden", void 0);
    SectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section',
            template: __webpack_require__(/*! ./section.component.html */ "./src/app/elements/forms/dynform/section/section.component.html"),
            styles: [__webpack_require__(/*! ./section.component.scss */ "./src/app/elements/forms/dynform/section/section.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SectionComponent);
    return SectionComponent;
}());



/***/ }),

/***/ "./src/app/elements/forms/dynform/tabs/tab.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/elements/forms/dynform/tabs/tab.component.ts ***!
  \**************************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * A single tab page. It renders the passed template
 * via the @Input properties by using the ngTemplateOutlet
 * and ngTemplateOutletContext directives.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabComponent = /** @class */ (function () {
    function TabComponent() {
        this.active = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TabComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "active", void 0);
    TabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dam-tab',
            template: "\n        <div *ngIf=\"active\" class=\"pane\"><ng-content></ng-content></div>\n    ",
            styles: ["\n            div.pane {\n                width: 100%;\n            }\n        "]
        })
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./src/app/elements/forms/dynform/tabs/tabs.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/elements/forms/dynform/tabs/tabs.component.ts ***!
  \***************************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.component */ "./src/app/elements/forms/dynform/tabs/tab.component.ts");
/**
 * The main component that renders single TabComponent
 * instances.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    // contentChildren are set
    TabsComponent.prototype.ngAfterContentInit = function () {
        // get all active tabs
        var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    };
    TabsComponent.prototype.selectTab = function (tab) {
        // deactivate all tabs
        this.tabs.toArray().forEach(function (value) { return (value.active = false); });
        // activate the tab the user has clicked on.
        tab.active = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_tab_component__WEBPACK_IMPORTED_MODULE_1__["TabComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TabsComponent.prototype, "tabs", void 0);
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dam-tabs',
            template: "\n        <ul class=\"nav nav-tabs\">\n            <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\" [class.active]=\"tab.active\">\n                <span>{{ tab.title }}</span>\n            </li>\n        </ul>\n        <ng-content></ng-content>\n    ",
            styles: ["\n            :host {\n                width: 100%;\n            }\n            .tab-close {\n                color: gray;\n                text-align: right;\n                cursor: pointer;\n            }\n            .nav-tabs {\n                border-bottom: 1px solid #ddd;\n                display: flex;\n                flex-direction: row;\n                flex-wrap: wrap;\n                justify-content: left;\n            }\n            .nav {\n                padding-left: 0;\n                margin-bottom: 0;\n                list-style: none;\n            }\n            .nav-tabs > li {\n                margin-bottom: -1px;\n            }\n            .nav > li {\n                display: block;\n            }\n            .nav-tabs > li.active > span {\n                color: #fff;\n                cursor: default;\n                background-color: #00a397;\n                border: 1px solid #ddd;\n                border-bottom-color: rgb(221, 221, 221);\n                border-bottom-color: transparent;\n            }\n            .nav-tabs > li > span {\n                margin-right: 2px;\n                line-height: 1.42857143;\n                border: 1px solid transparent;\n                border-radius: 4px 4px 0 0;\n                cursor: ponter;\n                user-select: none;\n                color: #666;\n            }\n            .nav > li > span {\n                position: relative;\n                display: block;\n                padding: 10px 15px;\n                text-decoration: none;\n                cursor: ponter;\n                user-select: none;\n            }\n\n            .nav-tabs > li:hover {\n                cursor: pointer;\n            }\n        "]
        })
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/elements/forms/input-acordion/input-acordion.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/elements/forms/input-acordion/input-acordion.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"xe-acordion-title\">\n    <span *ngIf=\"title !== ''\">{{ title }}</span>\n    <app-button [text]=\"actionText\" [icon]=\"'fas fa-plus'\" [click]=\"addElement.bind(this)\"></app-button>\n</section>\n<ng-container *ngFor=\"let value of values; let i = index\">\n    <div>\n        <input type=\"text\" [value]=\"value\" (change)=\"updateElement($event, i)\">\n        <button (click)=\"removeElement(i)\">\n            <i class=\"fas fa-minus\"></i>\n        </button>\n    </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/elements/forms/input-acordion/input-acordion.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/elements/forms/input-acordion/input-acordion.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  flex-grow: 1;\n  background-color: #edeff2; }\n:host > .xe-acordion-title {\n    margin: 5px 0;\n    display: flex; }\n:host > .xe-acordion-title > app-button {\n      flex-grow: 2; }\n:host > div {\n    display: flex;\n    flex-direction: row;\n    margin: 5px 0; }\n:host > div > input {\n      flex-grow: 2;\n      text-indent: 5px;\n      width: 0; }\n:host > div > button {\n      width: 16px;\n      height: 16px;\n      padding: 0;\n      line-height: 16px;\n      font-size: 12px;\n      text-align: center;\n      border-radius: 100%;\n      background-color: #db4949;\n      color: #edeff2;\n      border: 0;\n      margin: auto 0 auto 5px;\n      transition: background-color 0.3s ease-in-out; }\n:host > div > button:hover {\n        background-color: #d13737; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdG92YXIvZGV2ZWxvcC93ZWIveGVkaXQvc3JjL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvc2Fzcy9mb250cy9fbGF0by5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvYXBwL2VsZW1lbnRzL2Zvcm1zL2lucHV0LWFjb3JkaW9uL2lucHV0LWFjb3JkaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxzRUFBWTtBQUZaLDhFQUFBO0FDQUEsY0FBQTtBQUNBO0VBQ0ksbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsOElBQThJO0VBQzlJLG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRJQUE0STtFQUM1SSx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrSEFBK0g7RUFDL0gsbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNkhBQTZIO0VBQzdILHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRJQUE0STtFQUM1SSxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwwSUFBMEk7RUFDMUkseUtBQXlLLEVBQUE7QUFFM0ssY0FBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0hBQStIO0VBQy9ILG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRIQUE0SDtFQUM1SCx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrSEFBK0g7RUFDL0gsbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNEhBQTRIO0VBQzVILHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDZIQUE2SDtFQUM3SCxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwwSEFBMEg7RUFDMUgseUtBQXlLLEVBQUE7QUM1RjdLO0VBQ0ksWUFBWTtFQUNaLHlCRmtCaUIsRUFBQTtBRXBCckI7SUFLUSxhQUFhO0lBQ2IsYUFBYSxFQUFBO0FBTnJCO01BU1ksWUFBWSxFQUFBO0FBVHhCO0lBY1EsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhLEVBQUE7QUFoQnJCO01BbUJZLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsUUFBUSxFQUFBO0FBckJwQjtNQXlCWSxXQUFXO01BQ1gsWUFBWTtNQUNaLFVBQVU7TUFDVixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIseUJGUE87TUVRUCxjRmJTO01FY1QsU0FBUTtNQUNSLHVCQUF1QjtNQUN2Qiw2Q0FBNkMsRUFBQTtBQXBDekQ7UUF1Q2dCLHlCRmZFLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lbGVtZW50cy9mb3Jtcy9pbnB1dC1hY29yZGlvbi9pbnB1dC1hY29yZGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgJ35zYXNzL2ZvbnRzL2xhdG8nO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4wLjYvY3NzL2FsbC5jc3MnKTtcbkBpbXBvcnQgJ35zYXNzL21peGlucyc7XG5cbiRibGFjay1kYXJrZXI6ICMyMDI2MjQ7XG4kYmxhY2stZGFyazogIzNmNDk0NjtcbiRibGFjay13YXJtOiAjNDc0ZDRiO1xuJGJsYWNrLWxpZ2h0OiAjNWY2MzYyO1xuXG4kZ3JlZW4tZGFya2VyOiAjMWU1NzRlO1xuJGdyZWVuLWRhcms6ICMzYTllOGY7XG4kZ3JlZW4td2FybTogIzNlYTA5MTtcbiRncmVlbi1saWdodDogIzQ0YzRiMTtcblxuJGJsdWUtZGFyazogIzIxNGU2MTtcbiRibHVlLWxpZ2h0OiAjMjk1ZTc1O1xuJGJsdWUtbGlnaHRlcjogIzMxNzE4ZDtcblxuJHdoaXRlLWRhcmtlcjogIzk1OTU5NTtcbiR3aGl0ZS1kYXJrOiAjYzRjMmMyO1xuJHdoaXRlLXdhcm06ICNlMWU0ZTY7XG4kd2hpdGUtbGlnaHQ6ICNlZGVmZjI7XG4kd2hpdGUtbGlnaHRlcjogI2ZjZmNmYztcbiR3aGl0ZS14aW1kZXg6ICNmOWY5Zjk7XG5cbiRyZWQtd2FybTogI2QxMzczNztcbiRyZWQtbGlnaHQ6ICNkYjQ5NDk7XG5cbiR0YXNrYmFyLWhlaWdodDogNDZweDtcbiR0YXNrYmFyLWxpbmUtaGVpZ2h0OiA0MHB4O1xuJHRhYnMtaGVpZ2h0OiAzNXB4O1xuJHRhYnMtaGVpZ2h0LXNtYWxsOiAzMHB4O1xuXG4kZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcblxuJGZvbnQtc2l6ZS1zbWFsbDogMTJweDtcbiRmb250LXNpemUtZGVmYXVsdDogMTRweDtcbiRmb250LXNpemUtYmlnOiAxNnB4O1xuXG4kaWNvbi1zaXplLWRlZmF1bHQ6IDE4cHg7XG5cbiRmb250LWRlZmF1bHQ6IG5vcm1hbCAkZm9udC1zaXplLWRlZmF1bHQgJGZvbnQtZmFtaWx5O1xuXG5AaW1wb3J0ICcuL3ZhcmlhYmxlcy9jb2xvcnMnO1xuIiwiLyogbGF0aW4tZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gTGlnaHQgSXRhbGljJyksIGxvY2FsKCdMYXRvLUxpZ2h0SXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTl3Ml9GUWZ0eDk4OTdzeFoud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gTGlnaHQgSXRhbGljJyksIGxvY2FsKCdMYXRvLUxpZ2h0SXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTl3Ml9Hd2Z0eDk4OTdnLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OHc0Qk1VVFBIanhzQVVpLXFOaVhnN2VVMC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OHc0Qk1VVFBIanhzQVhDLXFOaVhnN1Eud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEJvbGQgSXRhbGljJyksIGxvY2FsKCdMYXRvLUJvbGRJdGFsaWMnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnVfdzRCTVVUUEhqeHNJNXdxX0ZRZnR4OTg5N3N4Wi53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkIEl0YWxpYycpLCBsb2NhbCgnTGF0by1Cb2xkSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTV3cV9Hd2Z0eDk4OTdnLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBMaWdodCcpLCBsb2NhbCgnTGF0by1MaWdodCcpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTl3NEJNVVRQSGg3VVNTd2FQR1EzcTVkME43dy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBMaWdodCcpLCBsb2NhbCgnTGF0by1MaWdodCcpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTl3NEJNVVRQSGg3VVNTd2lQR1EzcTVkMC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gUmVndWxhcicpLCBsb2NhbCgnTGF0by1SZWd1bGFyJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1eXc0Qk1VVFBIanhBd1hpV3RGQ2ZRN0Eud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gUmVndWxhcicpLCBsb2NhbCgnTGF0by1SZWd1bGFyJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1eXc0Qk1VVFBIang0d1hpV3RGQ2Mud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIEJvbGQnKSwgbG9jYWwoJ0xhdG8tQm9sZCcpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTl3NEJNVVRQSGg2VVZTd2FQR1EzcTVkME43dy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xuICB9XG4gIC8qIGxhdGluICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkJyksIGxvY2FsKCdMYXRvLUJvbGQnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU5dzRCTVVUUEhoNlVWU3dpUEdRM3E1ZDAud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfSIsIkBpbXBvcnQgJ35zYXNzL3ZhcmlhYmxlcyc7XG5cbjpob3N0IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLWxpZ2h0O1xuXG4gICAgPiAueGUtYWNvcmRpb24tdGl0bGUge1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBcbiAgICAgICAgPiBhcHAtYnV0dG9uIHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcblxuICAgICAgICA+IGlucHV0IHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgID4gYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQ7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlLWxpZ2h0O1xuICAgICAgICAgICAgYm9yZGVyOjA7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gMCBhdXRvIDVweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC13YXJtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSAgICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/elements/forms/input-acordion/input-acordion.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/elements/forms/input-acordion/input-acordion.component.ts ***!
  \***************************************************************************/
/*! exports provided: InputAcordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputAcordionComponent", function() { return InputAcordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputAcordionComponent = /** @class */ (function () {
    function InputAcordionComponent() {
        this.title = '';
        this.changeValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    InputAcordionComponent.prototype.ngOnInit = function () {
        // console.log(this.values, typeof this.values);
    };
    InputAcordionComponent.prototype.removeElement = function (index) {
        this.values.splice(index, 1);
        this.storeData(this.values);
    };
    InputAcordionComponent.prototype.addElement = function () {
        this.values.push('');
    };
    InputAcordionComponent.prototype.updateElement = function (evt, index) {
        this.values[index] = evt.target.value;
        this.storeData(this.values);
    };
    InputAcordionComponent.prototype.storeData = function (data) {
        this.changeValue.emit(data);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InputAcordionComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputAcordionComponent.prototype, "actionText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], InputAcordionComponent.prototype, "values", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], InputAcordionComponent.prototype, "changeValue", void 0);
    InputAcordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-acordion',
            template: __webpack_require__(/*! ./input-acordion.component.html */ "./src/app/elements/forms/input-acordion/input-acordion.component.html"),
            styles: [__webpack_require__(/*! ./input-acordion.component.scss */ "./src/app/elements/forms/input-acordion/input-acordion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InputAcordionComponent);
    return InputAcordionComponent;
}());



/***/ }),

/***/ "./src/app/elements/forms/listbox/listbox.component.html":
/*!***************************************************************!*\
  !*** ./src/app/elements/forms/listbox/listbox.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select name=\"\" (change)=\"changeValues($event)\">\n    <ng-container *ngFor=\"let key of options | keys\">\n        <option [value]=\"key\" [selected]=\"key == selected\">{{ options[key] }}</option>\n    </ng-container>\n</select>"

/***/ }),

/***/ "./src/app/elements/forms/listbox/listbox.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/elements/forms/listbox/listbox.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background: #edeff2;\n  display: inline; }\n  :host > select {\n    border: none;\n    margin: 5px;\n    background: transparent;\n    outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdG92YXIvZGV2ZWxvcC93ZWIveGVkaXQvc3JjL2FwcC9lbGVtZW50cy9mb3Jtcy9saXN0Ym94L2xpc3Rib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIsZUFBZSxFQUFBO0VBRm5CO0lBSVEsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWxlbWVudHMvZm9ybXMvbGlzdGJveC9saXN0Ym94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGJhY2tncm91bmQ6ICNlZGVmZjI7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgID4gIHNlbGVjdHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/elements/forms/listbox/listbox.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/elements/forms/listbox/listbox.component.ts ***!
  \*************************************************************/
/*! exports provided: ListboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListboxComponent", function() { return ListboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListboxComponent = /** @class */ (function () {
    function ListboxComponent() {
        this.changeValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ListboxComponent.prototype.ngOnInit = function () {
    };
    ListboxComponent.prototype.changeValues = function (evt) {
        var ele = evt.target;
        this.selected = ele.options[ele.selectedIndex].value;
        this.emitValue();
    };
    ListboxComponent.prototype.emitValue = function () {
        this.changeValue.emit(this.selected);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ListboxComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ListboxComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ListboxComponent.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ListboxComponent.prototype, "changeValue", void 0);
    ListboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listbox',
            template: __webpack_require__(/*! ./listbox.component.html */ "./src/app/elements/forms/listbox/listbox.component.html"),
            styles: [__webpack_require__(/*! ./listbox.component.scss */ "./src/app/elements/forms/listbox/listbox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListboxComponent);
    return ListboxComponent;
}());



/***/ }),

/***/ "./src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"xe-acordion-title\">\n    <span *ngIf=\"title !== ''\">{{ title }}</span>\n    <app-button [text]=\"actionText\" [icon]=\"'fas fa-plus'\" [click]=\"addElement.bind(this)\"></app-button>\n</section>\n<ng-container *ngFor=\"let value of values; let i = index\">\n    <div>\n        <app-multi-input [data]=\"value\" (changeValue)=\"updateElement($event)\" [editable]=\"true\"></app-multi-input>\n        <button (click)=\" removeElement(i) \">\n            <i class=\"fas fa-minus \"></i>\n        </button>\n    </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  flex-grow: 1;\n  background-color: #edeff2;\n  display: block; }\n:host > .xe-acordion-title {\n    display: flex;\n    margin: 5px 0; }\n:host > .xe-acordion-title > app-button {\n      flex-grow: 2; }\n:host > div {\n    display: flex;\n    flex-direction: row;\n    margin: 5px 0; }\n:host > div > app-multi-input {\n      flex-grow: 1;\n      width: 0; }\n:host > div > button {\n      width: 16px;\n      height: 16px;\n      padding: 0;\n      line-height: 16px;\n      font-size: 12px;\n      text-align: center;\n      border-radius: 100%;\n      background-color: #db4949;\n      color: #edeff2;\n      border: 0;\n      margin: auto 0 auto 5px;\n      transition: background-color 0.3s ease-in-out; }\n:host > div > button:hover {\n        background-color: #d13737; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdG92YXIvZGV2ZWxvcC93ZWIveGVkaXQvc3JjL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvc2Fzcy9mb250cy9fbGF0by5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvYXBwL2VsZW1lbnRzL2Zvcm1zL211bHRpLWlucHV0LWFjb3JkaW9uL211bHRpLWlucHV0LWFjb3JkaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxzRUFBWTtBQUZaLDhFQUFBO0FDQUEsY0FBQTtBQUNBO0VBQ0ksbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsOElBQThJO0VBQzlJLG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRJQUE0STtFQUM1SSx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrSEFBK0g7RUFDL0gsbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNkhBQTZIO0VBQzdILHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRJQUE0STtFQUM1SSxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwwSUFBMEk7RUFDMUkseUtBQXlLLEVBQUE7QUFFM0ssY0FBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0hBQStIO0VBQy9ILG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRIQUE0SDtFQUM1SCx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrSEFBK0g7RUFDL0gsbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNEhBQTRIO0VBQzVILHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDZIQUE2SDtFQUM3SCxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwwSEFBMEg7RUFDMUgseUtBQXlLLEVBQUE7QUM1RjdLO0VBQ0ksWUFBWTtFQUNaLHlCRmtCaUI7RUVqQmpCLGNBQWMsRUFBQTtBQUhsQjtJQU1RLGFBQWE7SUFDYixhQUFhLEVBQUE7QUFQckI7TUFVWSxZQUFZLEVBQUE7QUFWeEI7SUFlUSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWEsRUFBQTtBQWpCckI7TUFvQlksWUFBWTtNQUNaLFFBQVEsRUFBQTtBQXJCcEI7TUF5QlksV0FBVztNQUNYLFlBQVk7TUFDWixVQUFVO01BQ1YsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLHlCRlBPO01FUVAsY0ZiUztNRWNULFNBQVE7TUFDUix1QkFBdUI7TUFDdkIsNkNBQTZDLEVBQUE7QUFwQ3pEO1FBdUNnQix5QkZmRSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWxlbWVudHMvZm9ybXMvbXVsdGktaW5wdXQtYWNvcmRpb24vbXVsdGktaW5wdXQtYWNvcmRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0ICd+c2Fzcy9mb250cy9sYXRvJztcbkBpbXBvcnQgdXJsKCdodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMC42L2Nzcy9hbGwuY3NzJyk7XG5AaW1wb3J0ICd+c2Fzcy9taXhpbnMnO1xuXG4kYmxhY2stZGFya2VyOiAjMjAyNjI0O1xuJGJsYWNrLWRhcms6ICMzZjQ5NDY7XG4kYmxhY2std2FybTogIzQ3NGQ0YjtcbiRibGFjay1saWdodDogIzVmNjM2MjtcblxuJGdyZWVuLWRhcmtlcjogIzFlNTc0ZTtcbiRncmVlbi1kYXJrOiAjM2E5ZThmO1xuJGdyZWVuLXdhcm06ICMzZWEwOTE7XG4kZ3JlZW4tbGlnaHQ6ICM0NGM0YjE7XG5cbiRibHVlLWRhcms6ICMyMTRlNjE7XG4kYmx1ZS1saWdodDogIzI5NWU3NTtcbiRibHVlLWxpZ2h0ZXI6ICMzMTcxOGQ7XG5cbiR3aGl0ZS1kYXJrZXI6ICM5NTk1OTU7XG4kd2hpdGUtZGFyazogI2M0YzJjMjtcbiR3aGl0ZS13YXJtOiAjZTFlNGU2O1xuJHdoaXRlLWxpZ2h0OiAjZWRlZmYyO1xuJHdoaXRlLWxpZ2h0ZXI6ICNmY2ZjZmM7XG4kd2hpdGUteGltZGV4OiAjZjlmOWY5O1xuXG4kcmVkLXdhcm06ICNkMTM3Mzc7XG4kcmVkLWxpZ2h0OiAjZGI0OTQ5O1xuXG4kdGFza2Jhci1oZWlnaHQ6IDQ2cHg7XG4kdGFza2Jhci1saW5lLWhlaWdodDogNDBweDtcbiR0YWJzLWhlaWdodDogMzVweDtcbiR0YWJzLWhlaWdodC1zbWFsbDogMzBweDtcblxuJGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG5cbiRmb250LXNpemUtc21hbGw6IDEycHg7XG4kZm9udC1zaXplLWRlZmF1bHQ6IDE0cHg7XG4kZm9udC1zaXplLWJpZzogMTZweDtcblxuJGljb24tc2l6ZS1kZWZhdWx0OiAxOHB4O1xuXG4kZm9udC1kZWZhdWx0OiBub3JtYWwgJGZvbnQtc2l6ZS1kZWZhdWx0ICRmb250LWZhbWlseTtcblxuQGltcG9ydCAnLi92YXJpYWJsZXMvY29sb3JzJztcbiIsIi8qIGxhdGluLWV4dCAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIExpZ2h0IEl0YWxpYycpLCBsb2NhbCgnTGF0by1MaWdodEl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dV93NEJNVVRQSGp4c0k5dzJfRlFmdHg5ODk3c3haLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIExpZ2h0IEl0YWxpYycpLCBsb2NhbCgnTGF0by1MaWdodEl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dV93NEJNVVRQSGp4c0k5dzJfR3dmdHg5ODk3Zy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gSXRhbGljJyksIGxvY2FsKCdMYXRvLUl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTh3NEJNVVRQSGp4c0FVaS1xTmlYZzdlVTAud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gSXRhbGljJyksIGxvY2FsKCdMYXRvLUl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTh3NEJNVVRQSGp4c0FYQy1xTmlYZzdRLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkIEl0YWxpYycpLCBsb2NhbCgnTGF0by1Cb2xkSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTV3cV9GUWZ0eDk4OTdzeFoud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gQm9sZCBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tQm9sZEl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dV93NEJNVVRQSGp4c0k1d3FfR3dmdHg5ODk3Zy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gTGlnaHQnKSwgbG9jYWwoJ0xhdG8tTGlnaHQnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU5dzRCTVVUUEhoN1VTU3dhUEdRM3E1ZDBON3cud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gTGlnaHQnKSwgbG9jYWwoJ0xhdG8tTGlnaHQnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU5dzRCTVVUUEhoN1VTU3dpUEdRM3E1ZDAud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIFJlZ3VsYXInKSwgbG9jYWwoJ0xhdG8tUmVndWxhcicpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dXl3NEJNVVRQSGp4QXdYaVd0RkNmUTdBLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIFJlZ3VsYXInKSwgbG9jYWwoJ0xhdG8tUmVndWxhcicpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dXl3NEJNVVRQSGp4NHdYaVd0RkNjLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkJyksIGxvY2FsKCdMYXRvLUJvbGQnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU5dzRCTVVUUEhoNlVWU3dhUEdRM3E1ZDBON3cud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gQm9sZCcpLCBsb2NhbCgnTGF0by1Cb2xkJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OXc0Qk1VVFBIaDZVVlN3aVBHUTNxNWQwLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH0iLCJAaW1wb3J0ICd+c2Fzcy92YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1saWdodDtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgID4gLnhlLWFjb3JkaW9uLXRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgXG4gICAgICAgID4gYXBwLWJ1dHRvbiB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG5cbiAgICAgICAgPiBhcHAtbXVsdGktaW5wdXQge1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIH1cblxuICAgICAgICA+IGJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0O1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZS1saWdodDtcbiAgICAgICAgICAgIGJvcmRlcjowO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDAgYXV0byA1cHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtd2FybTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MultiInputAcordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiInputAcordionComponent", function() { return MultiInputAcordionComponent; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MultiInputAcordionComponent = /** @class */ (function () {
    function MultiInputAcordionComponent() {
        this.changeValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._values = {};
        this.title = '';
    }
    MultiInputAcordionComponent.prototype.ngOnInit = function () {
        this._values = this.values.reduce(function (acc, value) {
            var key = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["keys"])(value)[0];
            acc[key] = value[key];
            return acc;
        }, this._values);
    };
    MultiInputAcordionComponent.prototype.removeElement = function (index) {
        var key = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["keys"])(this.values[index])[0];
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(key, this._values)) {
            delete this._values[key];
        }
        this.storeData(this._values);
    };
    MultiInputAcordionComponent.prototype.addElement = function () {
        this.values.push({});
    };
    MultiInputAcordionComponent.prototype.updateElement = function (_a) {
        var oldValue = _a.old, newValue = _a.new;
        var value = newValue;
        var oldKey = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(oldValue) ? '' : Object(ramda__WEBPACK_IMPORTED_MODULE_0__["keys"])(oldValue)[0];
        var style = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["keys"])(value)[0];
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(oldKey)) {
            this._values[style] = value[style];
        }
        else {
            var valuesClone = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["clone"])(this._values);
            this._values = {};
            for (var key in valuesClone) {
                if (oldKey !== key) {
                    this._values[key] = valuesClone[key].replace(/;$/, '');
                }
                else {
                    this._values[style] = value[style];
                }
            }
        }
        this.storeData(this._values);
    };
    MultiInputAcordionComponent.prototype.storeData = function (data) {
        if (data instanceof Object && !(data instanceof Array)) {
            var result_1 = [];
            Object(ramda__WEBPACK_IMPORTED_MODULE_0__["forEachObjIndexed"])(function (_value, key) {
                var json = {};
                json[key] = _value.replace(/;$/, '');
                result_1.push(json);
            }, data);
            data = result_1;
        }
        this.changeValue.emit(data);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], MultiInputAcordionComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], MultiInputAcordionComponent.prototype, "actionText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], MultiInputAcordionComponent.prototype, "values", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MultiInputAcordionComponent.prototype, "changeValue", void 0);
    MultiInputAcordionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multi-input-acordion',
            template: __webpack_require__(/*! ./multi-input-acordion.component.html */ "./src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.html"),
            styles: [__webpack_require__(/*! ./multi-input-acordion.component.scss */ "./src/app/elements/forms/multi-input-acordion/multi-input-acordion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MultiInputAcordionComponent);
    return MultiInputAcordionComponent;
}());



/***/ }),

/***/ "./src/app/elements/forms/multi-input/multi-input.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/elements/forms/multi-input/multi-input.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"hasAttrNameValue\" [ngIfElse]=\"name\">\n    <ng-template [ngIf]=\"editable\" [ngIfElse]=\"static\">\n        <label (click)=\"updateLabel()\">\n            {{ attrName }}\n        </label>\n    </ng-template>\n    <ng-template #static>\n        <label>\n            {{ attrName }}\n        </label>\n    </ng-template>\n    <span>:</span>\n</ng-template>\n<ng-template #name>\n    <input type=\"text\" [value]=\"isEmptyValue(attrName)\" (change)=\"setAttrName($event)\" (blur)=\"setAttrName($event)\">\n    <span>:</span>\n</ng-template>\n<input type=\"text\" [name]=\"attrName\" [value]=\"isEmptyValue(attrValue)\" (change)=\"changeValues($event)\">"

/***/ }),

/***/ "./src/app/elements/forms/multi-input/multi-input.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/elements/forms/multi-input/multi-input.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://use.fontawesome.com/releases/v5.0.6/css/all.css\");\n/* You can add global styles to this file, and also import other style files */\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI9w2_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local(\"Lato Italic\"), local(\"Lato-Italic\"), url(\"/src/sass/fonts/lato/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local(\"Lato Bold Italic\"), local(\"Lato-BoldItalic\"), url(\"/src/sass/fonts/lato/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Lato Light\"), local(\"Lato-Light\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Lato Regular\"), local(\"Lato-Regular\"), url(\"/src/sass/fonts/lato/S6uyw4BMUTPHjx4wXiWtFCc.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2\") format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Lato Bold\"), local(\"Lato-Bold\"), url(\"/src/sass/fonts/lato/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2\") format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n:host {\n  margin: 5px 0;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px; }\n:host > label {\n    max-width: 100px; }\n:host > input {\n    flex-grow: 1;\n    text-indent: 5px;\n    width: 0; }\n:host > * {\n    margin: auto 5px auto 0; }\n:host:last-child() {\n    margin: auto 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdG92YXIvZGV2ZWxvcC93ZWIveGVkaXQvc3JjL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvc2Fzcy9mb250cy9fbGF0by5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvYXBwL2VsZW1lbnRzL2Zvcm1zL211bHRpLWlucHV0L211bHRpLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxzRUFBWTtBQUZaLDhFQUFBO0FDQUEsY0FBQTtBQUNBO0VBQ0ksbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsOElBQThJO0VBQzlJLG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRJQUE0STtFQUM1SSx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrSEFBK0g7RUFDL0gsbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNkhBQTZIO0VBQzdILHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRJQUE0STtFQUM1SSxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwwSUFBMEk7RUFDMUkseUtBQXlLLEVBQUE7QUFFM0ssY0FBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0hBQStIO0VBQy9ILG1IQUFtSCxFQUFBO0FBRXJILFVBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDRIQUE0SDtFQUM1SCx5S0FBeUssRUFBQTtBQUUzSyxjQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrSEFBK0g7RUFDL0gsbUhBQW1ILEVBQUE7QUFFckgsVUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNEhBQTRIO0VBQzVILHlLQUF5SyxFQUFBO0FBRTNLLGNBQUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDZIQUE2SDtFQUM3SCxtSEFBbUgsRUFBQTtBQUVySCxVQUFBO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwwSEFBMEg7RUFDMUgseUtBQXlLLEVBQUE7QUM1RjdLO0VBQ0ksYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBO0FBSm5CO0lBT1EsZ0JBQWdCLEVBQUE7QUFQeEI7SUFXUSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFFBQVEsRUFBQTtBQWJoQjtJQWlCUSx1QkFBdUIsRUFBQTtBQWpCL0I7SUFxQlEsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWxlbWVudHMvZm9ybXMvbXVsdGktaW5wdXQvbXVsdGktaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0ICd+c2Fzcy9mb250cy9sYXRvJztcbkBpbXBvcnQgdXJsKCdodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMC42L2Nzcy9hbGwuY3NzJyk7XG5AaW1wb3J0ICd+c2Fzcy9taXhpbnMnO1xuXG4kYmxhY2stZGFya2VyOiAjMjAyNjI0O1xuJGJsYWNrLWRhcms6ICMzZjQ5NDY7XG4kYmxhY2std2FybTogIzQ3NGQ0YjtcbiRibGFjay1saWdodDogIzVmNjM2MjtcblxuJGdyZWVuLWRhcmtlcjogIzFlNTc0ZTtcbiRncmVlbi1kYXJrOiAjM2E5ZThmO1xuJGdyZWVuLXdhcm06ICMzZWEwOTE7XG4kZ3JlZW4tbGlnaHQ6ICM0NGM0YjE7XG5cbiRibHVlLWRhcms6ICMyMTRlNjE7XG4kYmx1ZS1saWdodDogIzI5NWU3NTtcbiRibHVlLWxpZ2h0ZXI6ICMzMTcxOGQ7XG5cbiR3aGl0ZS1kYXJrZXI6ICM5NTk1OTU7XG4kd2hpdGUtZGFyazogI2M0YzJjMjtcbiR3aGl0ZS13YXJtOiAjZTFlNGU2O1xuJHdoaXRlLWxpZ2h0OiAjZWRlZmYyO1xuJHdoaXRlLWxpZ2h0ZXI6ICNmY2ZjZmM7XG4kd2hpdGUteGltZGV4OiAjZjlmOWY5O1xuXG4kcmVkLXdhcm06ICNkMTM3Mzc7XG4kcmVkLWxpZ2h0OiAjZGI0OTQ5O1xuXG4kdGFza2Jhci1oZWlnaHQ6IDQ2cHg7XG4kdGFza2Jhci1saW5lLWhlaWdodDogNDBweDtcbiR0YWJzLWhlaWdodDogMzVweDtcbiR0YWJzLWhlaWdodC1zbWFsbDogMzBweDtcblxuJGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG5cbiRmb250LXNpemUtc21hbGw6IDEycHg7XG4kZm9udC1zaXplLWRlZmF1bHQ6IDE0cHg7XG4kZm9udC1zaXplLWJpZzogMTZweDtcblxuJGljb24tc2l6ZS1kZWZhdWx0OiAxOHB4O1xuXG4kZm9udC1kZWZhdWx0OiBub3JtYWwgJGZvbnQtc2l6ZS1kZWZhdWx0ICRmb250LWZhbWlseTtcblxuQGltcG9ydCAnLi92YXJpYWJsZXMvY29sb3JzJztcbiIsIi8qIGxhdGluLWV4dCAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIExpZ2h0IEl0YWxpYycpLCBsb2NhbCgnTGF0by1MaWdodEl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dV93NEJNVVRQSGp4c0k5dzJfRlFmdHg5ODk3c3haLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIExpZ2h0IEl0YWxpYycpLCBsb2NhbCgnTGF0by1MaWdodEl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dV93NEJNVVRQSGp4c0k5dzJfR3dmdHg5ODk3Zy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gSXRhbGljJyksIGxvY2FsKCdMYXRvLUl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTh3NEJNVVRQSGp4c0FVaS1xTmlYZzdlVTAud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gSXRhbGljJyksIGxvY2FsKCdMYXRvLUl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dTh3NEJNVVRQSGp4c0FYQy1xTmlYZzdRLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkIEl0YWxpYycpLCBsb2NhbCgnTGF0by1Cb2xkSXRhbGljJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1X3c0Qk1VVFBIanhzSTV3cV9GUWZ0eDk4OTdzeFoud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gQm9sZCBJdGFsaWMnKSwgbG9jYWwoJ0xhdG8tQm9sZEl0YWxpYycpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dV93NEJNVVRQSGp4c0k1d3FfR3dmdHg5ODk3Zy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xuICB9XG4gIC8qIGxhdGluLWV4dCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gTGlnaHQnKSwgbG9jYWwoJ0xhdG8tTGlnaHQnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU5dzRCTVVUUEhoN1VTU3dhUEdRM3E1ZDBON3cud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gTGlnaHQnKSwgbG9jYWwoJ0xhdG8tTGlnaHQnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU5dzRCTVVUUEhoN1VTU3dpUEdRM3E1ZDAud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbiAgfVxuICAvKiBsYXRpbi1leHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIFJlZ3VsYXInKSwgbG9jYWwoJ0xhdG8tUmVndWxhcicpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dXl3NEJNVVRQSGp4QXdYaVd0RkNmUTdBLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cbiAgLyogbGF0aW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdMYXRvIFJlZ3VsYXInKSwgbG9jYWwoJ0xhdG8tUmVndWxhcicpLCB1cmwoJy9zcmMvc2Fzcy9mb250cy9sYXRvL1M2dXl3NEJNVVRQSGp4NHdYaVd0RkNjLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH1cbiAgLyogbGF0aW4tZXh0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnTGF0byBCb2xkJyksIGxvY2FsKCdMYXRvLUJvbGQnKSwgdXJsKCcvc3JjL3Nhc3MvZm9udHMvbGF0by9TNnU5dzRCTVVUUEhoNlVWU3dhUEdRM3E1ZDBON3cud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbiAgfVxuICAvKiBsYXRpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogbG9jYWwoJ0xhdG8gQm9sZCcpLCBsb2NhbCgnTGF0by1Cb2xkJyksIHVybCgnL3NyYy9zYXNzL2ZvbnRzL2xhdG8vUzZ1OXc0Qk1VVFBIaDZVVlN3aVBHUTNxNWQwLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG4gIH0iLCJAaW1wb3J0ICd+c2Fzcy92YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgPiBsYWJlbCB7XG4gICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgfVxuXG4gICAgPiBpbnB1dCB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDVweDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgfVxuXG4gICAgPiAqIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvIDVweCBhdXRvIDA7XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkKCl7XG4gICAgICAgIG1hcmdpbjogYXV0byAwO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/elements/forms/multi-input/multi-input.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/elements/forms/multi-input/multi-input.component.ts ***!
  \*********************************************************************/
/*! exports provided: MultiInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiInputComponent", function() { return MultiInputComponent; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MultiInputComponent = /** @class */ (function () {
    function MultiInputComponent() {
        this.changeValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editable = false;
    }
    Object.defineProperty(MultiInputComponent.prototype, "data", {
        set: function (data) {
            this.attrName = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["keys"])(data)[0];
            this.attrValue = data[this.attrName];
        },
        enumerable: true,
        configurable: true
    });
    MultiInputComponent.prototype.ngOnInit = function () {
        this.hasAttrNameValue = this.hasAttrName();
        this.oldValue = {};
    };
    MultiInputComponent.prototype.isEmptyValue = function (data) {
        return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(data) || Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(data) ? '' : data;
    };
    MultiInputComponent.prototype.updateLabel = function () {
        this.hasAttrNameValue = !this.hasAttrNameValue;
        var json = {};
        json[this.attrName] = this.attrValue;
        this.oldValue = json;
    };
    MultiInputComponent.prototype.hasAttrName = function () {
        return !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.attrName) && !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(this.attrName);
    };
    MultiInputComponent.prototype.setAttrName = function (evt) {
        this.attrName = evt.target.value;
        this.hasAttrNameValue = this.hasAttrName();
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.attrValue) && !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(this.attrValue)) {
            this.emitValue();
        }
    };
    MultiInputComponent.prototype.changeValues = function (evt) {
        this.attrValue = evt.target.value;
        this.emitValue();
    };
    MultiInputComponent.prototype.emitValue = function () {
        var json = { old: this.oldValue, new: {} };
        json.new[this.attrName] = this.attrValue;
        this.changeValue.emit(json);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MultiInputComponent.prototype, "data", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], MultiInputComponent.prototype, "editable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MultiInputComponent.prototype, "changeValue", void 0);
    MultiInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multi-input',
            template: __webpack_require__(/*! ./multi-input.component.html */ "./src/app/elements/forms/multi-input/multi-input.component.html"),
            styles: [__webpack_require__(/*! ./multi-input.component.scss */ "./src/app/elements/forms/multi-input/multi-input.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MultiInputComponent);
    return MultiInputComponent;
}());



/***/ }),

/***/ "./src/app/elements/xdam/XdamApi.ts":
/*!******************************************!*\
  !*** ./src/app/elements/xdam/XdamApi.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ximdex_xdam__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ximdex/xdam */ "./node_modules/@ximdex/xdam/fesm5/ximdex-xdam.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var XdamApi = /** @class */ (function () {
    function XdamApi(http) {
        this.http = http;
        this.settings = this.loadSettings();
        this.loadXdam();
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.token
        });
    }
    Object.defineProperty(XdamApi.prototype, "baseUrl", {
        get: function () {
            return this._baseUrl;
        },
        set: function (url) {
            this._baseUrl = url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XdamApi.prototype, "routes", {
        get: function () {
            return this._routes;
        },
        set: function (routes) {
            this._routes = routes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XdamApi.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (token) {
            this._token = token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XdamApi.prototype, "baseParams", {
        set: function (baseParams) {
            this._baseParams = baseParams;
        },
        enumerable: true,
        configurable: true
    });
    XdamApi.prototype.getSettings = function () {
        return this.settings;
    };
    /**
     * List available resources
     */
    XdamApi.prototype.list = function (params) {
        var _a = this.routes.resources.list, list = _a === void 0 ? null : _a;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(list)) {
            throw new Error('List endpoint does not exists');
        }
        return this.sendRequest(list, params, 'get');
    };
    XdamApi.prototype.sendRequest = function (section, params, method) {
        if (method === void 0) { method = 'get'; }
        var route = "" + this.baseUrl + section;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(params)) {
            params = this.baseParams;
        }
        return this.http[method](route, { params: params, headers: this.headers });
    };
    /**
     * Load dam settings from window.$xdam object
     *
     * @return XDamSettings
     */
    XdamApi.prototype.loadSettings = function () {
        var xdamSettings = {};
        var _a = window.$xdam, xdam = _a === void 0 ? null : _a;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(xdam)) {
            var _b = xdam, _c = _b.settings, settings = _c === void 0 ? {} : _c, _d = _b.form, form = _d === void 0 ? {} : _d;
            xdamSettings = __assign({}, settings, { form: form });
        }
        return new _ximdex_xdam__WEBPACK_IMPORTED_MODULE_1__["XDamSettings"](xdamSettings);
    };
    /**
     * Initialize base Xdam settings
     */
    XdamApi.prototype.loadXdam = function () {
        var _a = window.$xdam, xdam = _a === void 0 ? null : _a;
        var _b = xdam, _c = _b.base_url, base_url = _c === void 0 ? '' : _c, _d = _b.token, token = _d === void 0 ? '' : _d, _e = _b.endpoints, endpoints = _e === void 0 ? null : _e, _f = _b.base_params, base_params = _f === void 0 ? {} : _f;
        this.baseUrl = base_url;
        this.token = token;
        this.routes = endpoints;
        this.baseParams = base_params;
    };
    return XdamApi;
}());
/* harmony default export */ __webpack_exports__["default"] = (XdamApi);


/***/ }),

/***/ "./src/app/elements/xdam/xdam.component.html":
/*!***************************************************!*\
  !*** ./src/app/elements/xdam/xdam.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-smart-modal\n    class=\"xe_modal xe_editor\"\n    #resourceModal\n    identifier=\"resourceModal\"\n    [closable]=\"false\"\n    (onAnyCloseEventFinished)=\"resetModal()\"\n>\n    <xdam-main\n        [settings]=\"settings\"\n        [items]=\"items\"\n        [action]=\"action\"\n        (onSearch)=\"sendSearch($event)\"\n        (onAction)=\"prepareAction($event)\"\n    ></xdam-main>\n</ngx-smart-modal>\n"

/***/ }),

/***/ "./src/app/elements/xdam/xdam.component.scss":
/*!***************************************************!*\
  !*** ./src/app/elements/xdam/xdam.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL3hkYW0veGRhbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/elements/xdam/xdam.component.ts":
/*!*************************************************!*\
  !*** ./src/app/elements/xdam/xdam.component.ts ***!
  \*************************************************/
/*! exports provided: XdamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XdamComponent", function() { return XdamComponent; });
/* harmony import */ var _ximdex_xdam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ximdex/xdam */ "./node_modules/@ximdex/xdam/fesm5/ximdex-xdam.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var _app_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/resource/resource.service */ "./src/app/services/resource/resource.service.ts");
/* harmony import */ var _XdamApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./XdamApi */ "./src/app/elements/xdam/XdamApi.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};








var XdamComponent = /** @class */ (function () {
    function XdamComponent(http, resourceService, modalService) {
        this.http = http;
        this.resourceService = resourceService;
        this.modalService = modalService;
        this.action = null;
        this.close = false;
        this.isFirstRequest = true;
        this.resourceType = null;
        this.pagerSchema = {
            total: 'total',
            currentPage: 'current_page',
            lastPage: 'last_page',
            nextPage: 'next_page',
            prevPage: 'prev_page',
            perPage: {
                value: 'per_page'
            }
        };
    }
    XdamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resourceSubscription = {
            status: this.resourceService
                .getStatus()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["skip"])(1))
                .subscribe(this.onStatusChange.bind(this)),
            type: this.resourceService
                .getType()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["skip"])(1))
                .subscribe(this.onTypeChange.bind(this)),
            onSelect: this.resourceService
                .getOnSelect()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["skip"])(1))
                .subscribe(function (callback) { return (_this.onSelectCallback = callback); })
        };
        this.XdamApi = new _XdamApi__WEBPACK_IMPORTED_MODULE_5__["default"](this.http);
        this.settings = this.XdamApi.getSettings();
        this.search = new _ximdex_xdam__WEBPACK_IMPORTED_MODULE_0__["SearchModel"]();
    };
    XdamComponent.prototype.ngAfterViewInit = function () {
        this.modal = this.modalService.getModal('resourceModal');
    };
    XdamComponent.prototype.onTypeChange = function (type) {
        this.resourceType = type;
    };
    XdamComponent.prototype.onStatusChange = function (status) {
        this.modal.toggle(status);
        if (status) {
            this.close = false;
            this.sendSearch();
        }
    };
    XdamComponent.prototype.resetModal = function () {
        this.search = new _ximdex_xdam__WEBPACK_IMPORTED_MODULE_0__["SearchModel"]();
        this.action = null;
        this.isFirstRequest = true;
        this.items = {
            data: [],
            facets: [],
            pager: null
        };
        this.close = true;
    };
    XdamComponent.prototype.sendSearch = function (data) {
        var _this = this;
        if (data === void 0) { data = null; }
        if (this.close) {
            return;
        }
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_6__["isNil"])(data)) {
            this.search.update(data);
        }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('page', String(this.search.page));
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_6__["isNil"])(this.search.content)) {
            params = params.append('search', this.search.content);
        }
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_6__["isNil"])(this.search.facets)) {
            Object.keys(this.search.facets).forEach(function (index) {
                var value = _this.search.facets[index];
                params = params.append("factes[" + index + "]", value.join(','));
            });
        }
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_6__["isNil"])(this.resourceType)) {
            params = params.append('facets[type]', this.resourceType);
        }
        params = params.append('default', this.isFirstRequest ? '1' : '0');
        params = params.append('limit', String(this.search.limit));
        this.XdamApi.list(params).subscribe(function (_a) {
            var response = _a.data;
            var data = response.data, facets = response.facets, extra = __rest(response, ["data", "facets"]);
            _this.items = {
                data: data,
                facets: facets,
                pager: new _ximdex_xdam__WEBPACK_IMPORTED_MODULE_0__["Pager"](extra, _this.pagerSchema)
            };
            if (_this.isFirstRequest) {
                _this.setDefaultFacet(facets);
            }
        });
    };
    XdamComponent.prototype.prepareAction = function (data) {
        var action = new _ximdex_xdam__WEBPACK_IMPORTED_MODULE_0__["ActionModel"](data);
        var item = action.item;
        if (action.method === 'select') {
            action.status = 'success';
            this.action = action;
            this.onSelectCallback(item);
            this.resourceService.hide();
        }
    };
    XdamComponent.prototype.setDefaultFacet = function (data) {
        var facets = {};
        data.map(function (_a) {
            var key = _a.key, _b = _a.default, defFacet = _b === void 0 ? null : _b;
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_6__["isNil"])(defFacet)) {
                facets[key] = [defFacet];
            }
        });
        this.isFirstRequest = false;
        this.search.update({ facets: facets });
    };
    XdamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-xdam',
            template: __webpack_require__(/*! ./xdam.component.html */ "./src/app/elements/xdam/xdam.component.html"),
            styles: [__webpack_require__(/*! ./xdam.component.scss */ "./src/app/elements/xdam/xdam.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _app_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__["NgxSmartModalService"]])
    ], XdamComponent);
    return XdamComponent;
}());



/***/ }),

/***/ "./src/app/elements/xedit/image/image-modal/image-modal.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/elements/xedit/image/image-modal/image-modal.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-smart-modal\n    class=\"xe_modal xe_editor\"\n    #imageModal\n    identifier=\"imageModal\"\n    [closable]=\"false\"\n    (onDataAdded)=\"setFormData($event)\"\n    (onDataRemoved)=\"cleanFormData()\"\n>\n    <div class=\"header xe_modal_content\">Media Manager</div>\n    <div class=\"body xe_modal_content\">\n        <edit-image\n            *ngIf=\"hasImagePath()\"\n            [style]=\"size\"\n            [src]=\"imagePath()\"\n            [cropData]=\"cropData\"\n            (change)=\"imageData($event)\"\n        ></edit-image>\n        <div class=\"xe_form_input\">\n            <label class=\"xe_label\"> Enlace </label>\n            <div class=\"xe_file\">\n                <input type=\"text\" [(ngModel)]=\"file\" />\n                <button class=\"xe_btn\" (click)=\"openMediaManager()\"><fa-icon [icon]=\"searchIcon\"></fa-icon></button>\n            </div>\n        </div>\n        <div class=\"xe_form_input\">\n            <label class=\"xe_label\"> Nombre </label>\n            <label class=\"xe_input\"> {{ fileName() }} </label>\n        </div>\n        <div class=\"xe_form_input\">\n            <label class=\"xe_label\"> Ruta </label>\n            <label class=\"xe_input\"> {{ fileRoute() }} </label>\n        </div>\n        <div class=\"xe_form_input\">\n            <label class=\"xe_label\"> Alternativo </label> <input class=\"xe_input\" type=\"text\" />\n        </div>\n        <div class=\"xe_form_input\">\n            <label class=\"xe_label\"> Descripcion </label> <textarea class=\"xe_input\"></textarea>\n        </div>\n    </div>\n    <div class=\"footer xe_modal_content\">\n        <button class=\"xe_btn big\" (click)=\"setImage(imageModal)\">Aceptar</button>\n        <button class=\"xe_btn big\" (click)=\"closeModal(imageModal)\">Cerrar</button>\n    </div>\n</ngx-smart-modal>\n"

/***/ }),

/***/ "./src/app/elements/xedit/image/image-modal/image-modal.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/elements/xedit/image/image-modal/image-modal.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL3hlZGl0L2ltYWdlL2ltYWdlLW1vZGFsL2ltYWdlLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/elements/xedit/image/image-modal/image-modal.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/elements/xedit/image/image-modal/image-modal.component.ts ***!
  \***************************************************************************/
/*! exports provided: ImageModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModalComponent", function() { return ImageModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_core_plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/plugins */ "./src/app/core/plugins.ts");
/* harmony import */ var _services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/resource/resource.service */ "./src/app/services/resource/resource.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var is_valid_http_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! is-valid-http-url */ "./node_modules/is-valid-http-url/index.js");
/* harmony import */ var is_valid_http_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(is_valid_http_url__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ImageModalComponent = /** @class */ (function () {
    function ImageModalComponent(resourceService, http) {
        this.resourceService = resourceService;
        this.http = http;
        this.searchIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSearch"];
        this.file = '';
        this.src = null;
        this.name = null;
        this.size = {
            width: 300,
            height: 300
        };
        this.cropData = null;
    }
    ImageModalComponent.prototype.ngOnInit = function () { };
    ImageModalComponent.prototype.imagePath = function () {
        var path = null;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(this.file)) {
            if (is_valid_http_url__WEBPACK_IMPORTED_MODULE_6___default()(this.file)) {
                path = this.file;
            }
            else {
                path = _app_core_plugins__WEBPACK_IMPORTED_MODULE_3__["Plugins"].MediaManagerUrl(this.file);
            }
        }
        return path;
    };
    ImageModalComponent.prototype.hasImagePath = function () {
        return !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(this.imagePath());
    };
    ImageModalComponent.prototype.fileName = function () {
        var name = 'Elemento no seleccionado...';
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(this.name)) {
            name = this.name;
        }
        else if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(this.name) && !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(this.file)) {
            name = this.file;
        }
        return name;
    };
    ImageModalComponent.prototype.fileRoute = function () {
        var route = 'Elemento no seleccionado...';
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(this.src)) {
            route = this.src;
        }
        else if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(this.src) && !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(this.file)) {
            route = this.file;
        }
        return route;
    };
    ImageModalComponent.prototype.setFormData = function (data) {
        var fields = data.fields, settings = data.settings;
        for (var _i = 0, _a = Object.keys(fields); _i < _a.length; _i++) {
            var field = _a[_i];
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])(field, this)) {
                this[field] = fields[field];
            }
        }
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('image_size', settings)) {
            this.size.width = settings.image_size.width;
            this.size.height = settings.image_size.height;
        }
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('crop_data', settings)) {
            this.cropData = settings.crop_data;
        }
    };
    ImageModalComponent.prototype.cleanFormData = function () { };
    ImageModalComponent.prototype.setImage = function (modal) {
        if (modal.hasData()) {
            var save = modal.getData().save;
            if (typeof save === 'function') {
                var data = {
                    src: this.imagePath(),
                    xe_link: this.file,
                    style: this.imageStyle
                };
                save(data);
            }
        }
        this.closeModal(modal);
    };
    ImageModalComponent.prototype.imageData = function (cropData) {
        var left = cropData.left, top = cropData.top, width = cropData.width, height = cropData.height;
        this.imageStyle = "position: absolute; left: " + left + "px; top: " + top + "px; width: " + width + "px; height: " + height + "px";
    };
    ImageModalComponent.prototype.closeModal = function (modal) {
        modal.close();
    };
    ImageModalComponent.prototype.openMediaManager = function () {
        var _this = this;
        this.resourceService.setType('image');
        this.resourceService.setOnSelect(function (data) {
            _app_core_plugins__WEBPACK_IMPORTED_MODULE_3__["Plugins"].MediaMAnagerSelect(data, _this.http, _this.setImageData.bind(_this));
        });
        this.resourceService.show();
    };
    ImageModalComponent.prototype.setImageData = function (_a) {
        var name = _a.name, nodeid = _a.nodeid, path = _a.path;
        this.file = nodeid;
        this.name = name;
        this.src = Object.values(path).join('/');
    };
    ImageModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-modal',
            template: __webpack_require__(/*! ./image-modal.component.html */ "./src/app/elements/xedit/image/image-modal/image-modal.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./image-modal.component.scss */ "./src/app/elements/xedit/image/image-modal/image-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_resource_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ImageModalComponent);
    return ImageModalComponent;
}());



/***/ }),

/***/ "./src/app/elements/xedit/image/image.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/elements/xedit/image/image.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL3hlZGl0L2ltYWdlL2ltYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/elements/xedit/image/image.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/elements/xedit/image/image.component.ts ***!
  \*********************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var _xedit_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../xedit.base.component */ "./src/app/elements/xedit/xedit.base.component.ts");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_models_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/models/dom */ "./src/app/models/dom.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ImageComponent = /** @class */ (function (_super) {
    __extends(ImageComponent, _super);
    function ImageComponent(ngxModal, host) {
        var _this = _super.call(this) || this;
        _this.ngxModal = ngxModal;
        _this.host = host;
        _this.toolbarOptions = [
            {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faImage"],
                callback: _this.openImageModal.bind(_this),
                active: true
            }
        ];
        return _this;
    }
    ImageComponent.prototype.ngOnInit = function () { };
    ImageComponent.prototype.ngOnChanges = function (_a) {
        var selected = _a.selected;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(selected) && selected.currentValue !== selected.previousValue) {
            var element = new _app_models_dom__WEBPACK_IMPORTED_MODULE_5__["DOM"](this.contentHtml);
            if (this.isSelected()) {
                element.addClass('xe_selected');
            }
            else {
                element.removeClass('xe_selected');
            }
        }
    };
    ImageComponent.prototype.ngAfterViewInit = function () {
        this.contentHtml = this.host.nativeElement.querySelector('[xe_section]');
    };
    ImageComponent.prototype.openImageModal = function () {
        var modal = this.ngxModal.getModal('imageModal');
        modal.removeData();
        modal.setData({
            fields: this.getImageAttrs(),
            settings: {
                image_size: this.containerSize(),
                crop_data: this.cropData()
            },
            save: this.changeImage.bind(this)
        });
        modal.open();
    };
    ImageComponent.prototype.onClick = function (evt) {
        var target = evt.target;
        evt.stopPropagation();
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(target)) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["hasIn"])('tagName', target) && target['tagName'].toLowerCase() === 'img') {
                this.selectedImage = target;
            }
            else {
                var image = this.contentHtml.querySelector('img');
                if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(image)) {
                    this.selectedImage = image;
                }
            }
        }
        var uuid = this.content.uuid;
        this.selectNode.emit(uuid);
        this.toolbar.emit(this.toolbarOptions);
    };
    ImageComponent.prototype.changeImage = function (data) {
        var uuid = this.content.uuid;
        for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
            var attr = _a[_i];
            this.selectedImage.setAttribute(attr, data[attr]);
        }
        var element = this.contentHtml.firstChild;
        this.change.emit({
            uuid: uuid,
            element: element,
            content: element.innerHTML
        });
    };
    ImageComponent.prototype.containerSize = function () {
        var container = this.contentHtml;
        var size = {
            width: container.offsetWidth,
            height: container.offsetHeight
        };
        return size;
    };
    ImageComponent.prototype.cropData = function () {
        var container = this.selectedImage;
        var result = {};
        var styles = window.getComputedStyle(container);
        for (var _i = 0, _a = ['width', 'height', 'left', 'top']; _i < _a.length; _i++) {
            var style = _a[_i];
            var value = styles[style];
            result[style] = typeof value === 'string' ? Number.parseFloat(value) : value;
        }
        return result;
    };
    ImageComponent.prototype.getImageAttrs = function () {
        var attrs = {
            file: 'xe_link',
            alt: 'alt',
            description: 'longDesc'
        };
        var values = {};
        for (var _i = 0, _a = Object.keys(attrs); _i < _a.length; _i++) {
            var attr = _a[_i];
            values[attr] = this.selectedImage.getAttribute(attrs[attr]);
        }
        return values;
    };
    ImageComponent.hasSlot = true;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], ImageComponent.prototype, "onClick", null);
    ImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-image',
            template: '<ng-content></ng-content>',
            styles: [__webpack_require__(/*! ./image.component.scss */ "./src/app/elements/xedit/image/image.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__["NgxSmartModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]])
    ], ImageComponent);
    return ImageComponent;
}(_xedit_base_component__WEBPACK_IMPORTED_MODULE_0__["XeditBaseComponent"]));



/***/ }),

/***/ "./src/app/elements/xedit/section/section.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/elements/xedit/section/section.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL3hlZGl0L3NlY3Rpb24vc2VjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/elements/xedit/section/section.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/elements/xedit/section/section.component.ts ***!
  \*************************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _xedit_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../xedit.base.component */ "./src/app/elements/xedit/xedit.base.component.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _models_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/dom */ "./src/app/models/dom.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SectionComponent = /** @class */ (function (_super) {
    __extends(SectionComponent, _super);
    function SectionComponent(host) {
        var _this = _super.call(this) || this;
        _this.host = host;
        return _this;
    }
    SectionComponent.prototype.ngOnInit = function () { };
    SectionComponent.prototype.ngOnChanges = function (_a) {
        var selected = _a.selected;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(selected) && selected.currentValue !== selected.previousValue) {
            var element = new _models_dom__WEBPACK_IMPORTED_MODULE_3__["DOM"](this.host.nativeElement.querySelector('[xe_section]'));
            if (this.isSelected()) {
                element.addClass('xe_selected');
            }
            else {
                element.removeClass('xe_selected');
            }
        }
    };
    SectionComponent.prototype.onClick = function (evt) {
        evt.stopPropagation();
        var uuid = this.content.uuid;
        this.selectNode.emit(uuid);
        this.toolbar.emit(null);
    };
    SectionComponent.hasSlot = true;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], SectionComponent.prototype, "onClick", null);
    SectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section',
            template: '<ng-content></ng-content>',
            styles: [__webpack_require__(/*! ./section.component.scss */ "./src/app/elements/xedit/section/section.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SectionComponent);
    return SectionComponent;
}(_xedit_base_component__WEBPACK_IMPORTED_MODULE_1__["XeditBaseComponent"]));



/***/ }),

/***/ "./src/app/elements/xedit/tiny-mce/tiny-mce.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/elements/xedit/tiny-mce/tiny-mce.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<editor\n    [ngClass]=\"{ xe_selected: isSelected() }\"\n    [id]=\"content.uuid\"\n    [init]=\"configs\"\n    [initialValue]=\"content.html\"\n    (onPaste)=\"pasteContent($event)\"\n    (onNodeChange)=\"selectedNode($event)\"\n    (onClick)=\"onClick($event)\"\n    (onFocus)=\"onFocus($event)\"\n    (onBlur)=\"onBlur($event)\"\n    (click)=\"onClick($event)\"\n    (onChange)=\"onChanges($event)\"\n></editor>\n"

/***/ }),

/***/ "./src/app/elements/xedit/tiny-mce/tiny-mce.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/elements/xedit/tiny-mce/tiny-mce.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL3hlZGl0L3RpbnktbWNlL3RpbnktbWNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/elements/xedit/tiny-mce/tiny-mce.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/elements/xedit/tiny-mce/tiny-mce.component.ts ***!
  \***************************************************************/
/*! exports provided: TinyMCEComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinyMCEComponent", function() { return TinyMCEComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _xedit_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../xedit.base.component */ "./src/app/elements/xedit/xedit.base.component.ts");
/* harmony import */ var _app_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/editor-service/editor.service */ "./src/app/services/editor-service/editor.service.ts");
/* harmony import */ var _app_models_configs_clipboardConfigs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/models/configs/clipboardConfigs */ "./src/app/models/configs/clipboardConfigs.ts");
/* harmony import */ var _app_core_helpers_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/helpers/string */ "./src/app/core/helpers/string.ts");
/* harmony import */ var _app_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/models/schema/xedit-mapper */ "./src/app/models/schema/xedit-mapper.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _app_core_generators_toolbar_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core/generators/toolbar-generator */ "./src/app/core/generators/toolbar-generator.ts");
/* harmony import */ var _toolbar_mapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toolbar-mapper */ "./src/app/elements/xedit/tiny-mce/toolbar-mapper.ts");
/* harmony import */ var tinymce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tinymce */ "./node_modules/tinymce/tinymce.js");
/* harmony import */ var tinymce__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tinymce__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm5/ngx-smart-modal.js");
/* harmony import */ var _app_services_node_service_node_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/services/node-service/node.service */ "./src/app/services/node-service/node.service.ts");
/* harmony import */ var _app_core_mappers_xedit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/core/mappers/xedit */ "./src/app/core/mappers/xedit.ts");
/* harmony import */ var _app_components_editor_views_wysiwyg_view_tiny_plugins_dam_core_FilterContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/components/editor/views/wysiwyg-view/tiny_plugins/dam/core/FilterContent */ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/core/FilterContent.ts");
/* harmony import */ var _app_components_editor_views_wysiwyg_view_tiny_plugins_dam_api_Commands__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/components/editor/views/wysiwyg-view/tiny_plugins/dam/api/Commands */ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/api/Commands.ts");
/* harmony import */ var _app_components_editor_views_wysiwyg_view_tiny_plugins_dam_ui_Buttons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/components/editor/views/wysiwyg-view/tiny_plugins/dam/ui/Buttons */ "./src/app/components/editor/views/wysiwyg-view/tiny_plugins/dam/ui/Buttons.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// TinyMCE Settings







var TinyMCEComponent = /** @class */ (function (_super) {
    __extends(TinyMCEComponent, _super);
    function TinyMCEComponent(editorService, nodeService, ngxModal) {
        var _this = _super.call(this) || this;
        _this.editorService = editorService;
        _this.nodeService = nodeService;
        _this.ngxModal = ngxModal;
        _this.hideToolbar = true;
        _this.clipboardConfigs = new _app_models_configs_clipboardConfigs__WEBPACK_IMPORTED_MODULE_3__["ClipboardConfigs"]();
        return _this;
    }
    TinyMCEComponent_1 = TinyMCEComponent;
    TinyMCEComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configs = this.getConfigs();
        // Suscribe to node change
        this.subscribeCNM = this.editorService.getCurrentNodeModify().subscribe(function (currentNode) {
            if (currentNode.getAttribute(_app_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].TAG_UUID) ===
                _this.currentElement.getAttribute(_app_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].TAG_UUID)) {
                Object.keys(currentNode.getAttributes()).forEach(function (attribute) {
                    _this.currentElement.setAttribute(attribute, currentNode.getAttribute(attribute));
                });
            }
        });
    };
    TinyMCEComponent.prototype.ngAfterViewChecked = function () {
        this.editor = tinymce__WEBPACK_IMPORTED_MODULE_9___default.a.get(this.content.uuid);
    };
    TinyMCEComponent.prototype.ngOnChanges = function (_a) {
        var selected = _a.selected;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_6__["isNil"])(selected) && selected.currentValue !== selected.previousValue && !Object(ramda__WEBPACK_IMPORTED_MODULE_6__["isNil"])(this.editor)) {
            this.hideToolbar = !this.isSelected();
            if (this.hideToolbar) {
                this.editor.fire('blur');
                this.editor.fire('focusout');
            }
        }
    };
    TinyMCEComponent.prototype.ngOnDestroy = function () {
        this.subscribeCNM.unsubscribe();
        this.nodeService.set(null);
    };
    TinyMCEComponent.prototype.selectedNode = function (_a) {
        var event = _a.event;
        // Clear selected attribute
        this.clearSelecteds();
        // Added selected attribute
        var ele = event.element;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_6__["isNil"])(ele)) {
            ele.setAttribute(_app_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].ATTR_WYSIWYG_SELECTED, 'selected');
            var uuid = ele.getAttribute(_app_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].TAG_UUID);
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_6__["isNil"])(uuid)) {
                uuid = ele.closest("[" + _app_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].TAG_UUID + "]").getAttribute(_app_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].TAG_UUID);
            }
            else {
                this.currentElement = ele;
            }
            this.selectNode.emit(uuid);
        }
    };
    TinyMCEComponent.prototype.onChanges = function (_a) {
        var event = _a.event, editor = _a.editor;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_6__["isNil"])(this.currentElement)) {
            return;
        }
        var uuid = this.currentElement.getAttribute(_app_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].TAG_UUID);
        var tag = this.getCurrentTag(editor.bodyElement, uuid);
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_6__["isNil"])(tag) && this.hasChanges(event.level.bookmark, event.lastLevel.beforeBookmark)) {
            this.editorService.save(tag, tag.outerHTML, 'Change section ""');
        }
    };
    TinyMCEComponent.prototype.hasChanges = function (bookmark, beforeBookmark) {
        var hasChange = false;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_6__["isNil"])(bookmark) &&
            Object(ramda__WEBPACK_IMPORTED_MODULE_6__["hasIn"])('start', bookmark) &&
            !Object(ramda__WEBPACK_IMPORTED_MODULE_6__["isNil"])(bookmark['start']) &&
            !Object(ramda__WEBPACK_IMPORTED_MODULE_6__["isNil"])(beforeBookmark) &&
            Object(ramda__WEBPACK_IMPORTED_MODULE_6__["hasIn"])('start', beforeBookmark) &&
            !Object(ramda__WEBPACK_IMPORTED_MODULE_6__["isNil"])(beforeBookmark['start'])) {
            hasChange = bookmark['start'].length !== beforeBookmark['start'].length;
            if (!hasChange) {
                for (var i = 0; i < bookmark['start'].length; i++) {
                    if (bookmark['start'][i] !== beforeBookmark['start'][i]) {
                        hasChange = true;
                        break;
                    }
                }
            }
        }
        return hasChange;
    };
    TinyMCEComponent.prototype.getCurrentTag = function (content, uuid) {
        var value = null;
        for (var i = 0; i < content.children.length; i++) {
            var children = content.children[i];
            if (children.getAttribute(_app_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].TAG_UUID) === uuid) {
                value = children;
            }
            else {
                value = this.getCurrentTag(children, uuid);
            }
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_6__["isNil"])(value)) {
                break;
            }
        }
        return value;
    };
    TinyMCEComponent.prototype.pasteContent = function (_a) {
        var event = _a.event;
        event.preventDefault();
        var copyHtml = this.clipboardConfigs.getConfigs('copy');
        var data = _app_models_configs_clipboardConfigs__WEBPACK_IMPORTED_MODULE_3__["ClipboardConfigs"].copy(event, copyHtml.enable);
        data = _app_core_helpers_string__WEBPACK_IMPORTED_MODULE_4__["StringHelpers"].resetIdsFromString(data);
        document.execCommand('insertHTML', false, data);
        var tag = event.path[0];
        this.editorService.save(tag, tag.innerHTML, 'Change section ""');
    };
    TinyMCEComponent.prototype.onBlur = function (_a) {
        var event = _a.event;
        this.clearSelecteds();
    };
    TinyMCEComponent.prototype.onFocus = function (event) {
        var uuid = this.content.uuid;
        this.selectNode.emit(uuid);
    };
    TinyMCEComponent.prototype.onClick = function (_a) {
        var event = _a.event;
        event.stopPropagation();
        this.toolbar.emit(null);
    };
    TinyMCEComponent.prototype.clearSelecteds = function () {
        var elements = document.querySelector("[" + _app_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].ATTR_WYSIWYG_SELECTED + "]");
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_6__["isNil"])(elements)) {
            elements.removeAttribute(_app_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].ATTR_WYSIWYG_SELECTED);
        }
    };
    TinyMCEComponent.prototype.getConfigs = function () {
        this.content.settings.options.tags = { img: {} };
        // this.loadPlugins();
        var toolbar = _app_core_generators_toolbar_generator__WEBPACK_IMPORTED_MODULE_7__["default"].generate(TinyMCEComponent_1.toolbarOptions, this.content.settings);
        var plugins = TinyMCEComponent_1.getAvailableEditorPlugins();
        var that = this;
        var configs = {
            base_url: './tinymce/',
            suffix: '.min',
            fixed_toolbar_container: '#toolbar',
            skin: 'oxide',
            plugins: plugins,
            toolbar: toolbar,
            inline: true,
            menubar: false,
            valid_elements: '*[*]',
            custom_ui_selector: '.xe_modal',
            setup: function (editor) {
                // Custom Blur Event to stop hiding the toolbar
                editor.on('blur', function (e) {
                    if (!that.hideToolbar) {
                        e.stopImmediatePropagation();
                        e.preventDefault();
                    }
                });
                editor.on('focusout', function (e) {
                    if (!that.hideToolbar) {
                        e.stopImmediatePropagation();
                        e.preventDefault();
                    }
                });
            }
        };
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_6__["hasIn"])('options', this.content.settings)) {
            var _a = this.content.settings.options, _b = _a.colors, colors = _b === void 0 ? {} : _b, _c = _a.fonts, fonts = _c === void 0 ? [] : _c, _d = _a.fontsize, fontsize = _d === void 0 ? [] : _d;
            // TODO Load from this.content.settings object
            // configs['formats'] = {
            //     bold: { inline: 'strong', styles: { 'font-weight': 'bold' } }
            // };
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(colors) && Object(ramda__WEBPACK_IMPORTED_MODULE_6__["is"])(Object, colors) && !Array.isArray(colors)) {
                for (var _i = 0, _e = Object.keys(colors); _i < _e.length; _i++) {
                    var color = _e[_i];
                    configs['color_map'].push(color);
                    configs['color_map'].push(colors[color]);
                }
            }
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(fonts) && Array.isArray(fonts)) {
                var contentCss = [];
                var fontFormat = [];
                for (var _f = 0, fonts_1 = fonts; _f < fonts_1.length; _f++) {
                    var font = fonts_1[_f];
                    contentCss.push(font.url);
                    fontFormat.push(font.label + "=" + font.name);
                }
                configs['content_css'] = contentCss;
                configs['font_formats'] = fontFormat.join(';');
            }
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(fontsize) && Array.isArray(fontsize)) {
                configs['fontsize_formats'] = fontsize.join(' ');
            }
        }
        return configs;
    };
    TinyMCEComponent.prototype.loadPlugins = function (getInfo, callback) {
        if (_app_core_mappers_xedit__WEBPACK_IMPORTED_MODULE_12__["Xedit"].getDam() === 'dam') {
            tinymce__WEBPACK_IMPORTED_MODULE_9___default.a.PluginManager.add('dam', function (editor) {
                _app_components_editor_views_wysiwyg_view_tiny_plugins_dam_core_FilterContent__WEBPACK_IMPORTED_MODULE_13__["default"].setup(editor);
                _app_components_editor_views_wysiwyg_view_tiny_plugins_dam_api_Commands__WEBPACK_IMPORTED_MODULE_14__["default"].register(editor, getInfo, callback);
                _app_components_editor_views_wysiwyg_view_tiny_plugins_dam_ui_Buttons__WEBPACK_IMPORTED_MODULE_15__["default"].register(editor);
            });
        }
    };
    TinyMCEComponent.getAvailableEditorPlugins = function (schema) {
        if (schema === void 0) { schema = null; }
        return _app_core_mappers_xedit__WEBPACK_IMPORTED_MODULE_12__["Xedit"].getDam() + " searchreplace autolink link media hr anchor advlist lists table";
    };
    var TinyMCEComponent_1;
    TinyMCEComponent.toolbarOptions = _toolbar_mapper__WEBPACK_IMPORTED_MODULE_8__["toolbarOptions"];
    TinyMCEComponent = TinyMCEComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tiny-mce',
            template: __webpack_require__(/*! ./tiny-mce.component.html */ "./src/app/elements/xedit/tiny-mce/tiny-mce.component.html"),
            styles: [__webpack_require__(/*! ./tiny-mce.component.scss */ "./src/app/elements/xedit/tiny-mce/tiny-mce.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_services_editor_service_editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"],
            _app_services_node_service_node_service__WEBPACK_IMPORTED_MODULE_11__["NodeService"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_10__["NgxSmartModalService"]])
    ], TinyMCEComponent);
    return TinyMCEComponent;
}(_xedit_base_component__WEBPACK_IMPORTED_MODULE_1__["XeditBaseComponent"]));



/***/ }),

/***/ "./src/app/elements/xedit/tiny-mce/toolbar-mapper.ts":
/*!***********************************************************!*\
  !*** ./src/app/elements/xedit/tiny-mce/toolbar-mapper.ts ***!
  \***********************************************************/
/*! exports provided: toolbarOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toolbarOptions", function() { return toolbarOptions; });
var toolbarOptions = {
    bold: 'bold',
    italic: 'italic',
    underline: 'underline',
    strikethrough: 'strikethrough',
    color: 'forecolor',
    background: 'backcolor',
    // math: 'eqneditor',
    ol: 'numlist',
    ul: 'bullist',
    table: 'table',
    alignleft: 'alignleft',
    aligncenter: 'aligncenter',
    alignright: 'alignright',
    alignjustify: 'alignjustify',
    outdent: 'outdent',
    indent: 'indent',
    formatselect: 'formatselect',
    fontselect: 'fontselect',
    fontsize: 'fontsizeselect'
};


/***/ }),

/***/ "./src/app/elements/xedit/xedit.base.component.ts":
/*!********************************************************!*\
  !*** ./src/app/elements/xedit/xedit.base.component.ts ***!
  \********************************************************/
/*! exports provided: XeditBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XeditBaseComponent", function() { return XeditBaseComponent; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/models/schema/xedit-mapper */ "./src/app/models/schema/xedit-mapper.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var XeditBaseComponent = /** @class */ (function () {
    function XeditBaseComponent() {
        this.selectNode = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.toolbar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    XeditBaseComponent.prototype.ngOnInit = function () { };
    XeditBaseComponent.prototype.isSelected = function () {
        var result = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('uuid', this.content) && this.selected === this.content.uuid;
        if (!result && !this.constructor['hasSlot']) {
            var element = document.querySelector("[" + _app_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].TAG_UUID + "=\"" + this.content.uuid + "\"]");
            result = !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(element) && !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(element.querySelector("[" + _app_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].TAG_UUID + "=\"" + this.selected + "\"]"));
        }
        return result;
    };
    XeditBaseComponent.prototype.beforeSelect = function () {
        if (environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].debug) {
            console.log('Call to beforeSelected method');
        }
    };
    XeditBaseComponent.prototype.beforeUnselect = function () {
        if (environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].debug) {
            console.log('Call to beforeUnselect method');
        }
    };
    XeditBaseComponent.prototype.afterSelect = function () {
        if (environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].debug) {
            console.log('Call to afterSelect method');
        }
    };
    XeditBaseComponent.prototype.afterUnselect = function () {
        if (environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].debug) {
            console.log('Call to afterUnselect method');
        }
    };
    XeditBaseComponent.hasSlot = false;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], XeditBaseComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], XeditBaseComponent.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], XeditBaseComponent.prototype, "selectNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], XeditBaseComponent.prototype, "change", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], XeditBaseComponent.prototype, "toolbar", void 0);
    return XeditBaseComponent;
}());



/***/ }),

/***/ "./src/app/factories/node-factory.service.ts":
/*!***************************************************!*\
  !*** ./src/app/factories/node-factory.service.ts ***!
  \***************************************************/
/*! exports provided: NodeFactoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeFactoryService", function() { return NodeFactoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _app_services_autoload_modules_service_autoload_modules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/autoload-modules-service/autoload-modules.service */ "./src/app/services/autoload-modules-service/autoload-modules.service.ts");
/* harmony import */ var _app_models_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/models/node */ "./src/app/models/node.ts");
/* harmony import */ var _app_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/models/schema/xedit-mapper */ "./src/app/models/schema/xedit-mapper.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NodeFactoryService = /** @class */ (function () {
    function NodeFactoryService(modulesService) {
        this.modulesService = modulesService;
    }
    NodeFactoryService.prototype.create = function (uuid, traget, attributes) {
        var node = new _app_models_node__WEBPACK_IMPORTED_MODULE_3__["Node"](uuid, traget, attributes);
        var module = node.getSchema()['type'];
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(module)) {
            node.setModule(this.modulesService.getModule(module));
        }
        return node;
    };
    /**
     * Parse DomNode to EditorNode
     *
     * @param element DomNode
     */
    NodeFactoryService.prototype.createFromElement = function (element) {
        var attributes = {};
        var node = null;
        var uuid = element.getAttribute(_app_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_4__["XeditMapper"].TAG_UUID);
        Object.keys(element.attributes).forEach(function (key) {
            attributes[element.attributes[key].name] = element.attributes[key].value;
        });
        try {
            node = this.create(uuid, element, attributes);
        }
        catch (e) {
            if (environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].debug) {
                console.error('This element is not a valid node');
            }
        }
        return node;
    };
    NodeFactoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_app_services_autoload_modules_service_autoload_modules_service__WEBPACK_IMPORTED_MODULE_2__["AutoloadModulesService"]])
    ], NodeFactoryService);
    return NodeFactoryService;
}());



/***/ }),

/***/ "./src/app/models/configs/clipboardConfigs.ts":
/*!****************************************************!*\
  !*** ./src/app/models/configs/clipboardConfigs.ts ***!
  \****************************************************/
/*! exports provided: ClipboardConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardConfigs", function() { return ClipboardConfigs; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configs */ "./src/app/models/configs/configs.ts");
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sanitize-html */ "./node_modules/sanitize-html/dist/index.js");
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sanitize_html__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ClipboardConfigs = /** @class */ (function (_super) {
    __extends(ClipboardConfigs, _super);
    function ClipboardConfigs() {
        var _this = _super.call(this) || this;
        _this.self = _this.constructor;
        _this.configs = {};
        _this.init();
        return _this;
    }
    ClipboardConfigs.prototype.setConfigs = function (configs) {
        this.configs.configs = configs;
        ClipboardConfigs.save(this.configs);
        return this;
    };
    ClipboardConfigs.prototype.getConfigs = function (config) {
        if (config === void 0) { config = null; }
        var configs = this.configs.configs;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(config)) {
            return configs;
        }
        for (var i = 0; i < configs.length; i++) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('id', configs[i])) {
                return configs[i];
            }
        }
    };
    ClipboardConfigs.prototype.toggleActive = function () {
        this.configs.active = !this.configs.active;
        ClipboardConfigs.save(this.configs);
        return this.isActive();
    };
    ClipboardConfigs.prototype.isActive = function () {
        var active = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('active', this.configs) ? this.configs.active : null;
        return active;
    };
    ClipboardConfigs.prototype.addConfig = function (config) {
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.configs)) {
            this.configs = ClipboardConfigs.DEFAULT;
        }
        this.configs.configs.push(config);
        return this.setConfigs(this.configs);
    };
    ClipboardConfigs.prototype.updateConfigs = function () {
        this.init();
    };
    ClipboardConfigs.prototype.init = function () {
        var _this = this;
        this.self.get().then(function (data) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(data)) {
                data = _this.self.DEFAULT;
            }
            _this.configs = data;
        });
    };
    ClipboardConfigs.save = function (data, group) {
        if (group === void 0) { group = ClipboardConfigs.GROUP; }
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(group)) {
            group = ClipboardConfigs.GROUP;
        }
        return _super.save.call(this, data, group);
    };
    ClipboardConfigs.get = function (group) {
        if (group === void 0) { group = ClipboardConfigs.GROUP; }
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(group)) {
            group = ClipboardConfigs.GROUP;
        }
        return _super.get.call(this, group);
    };
    ClipboardConfigs.callback = function (error, value) {
        if (error) {
            console.error(error);
        }
        else {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value)) {
                value = ClipboardConfigs.DEFAULT;
            }
        }
        return value;
    };
    /**
     * This method get data in plain format from clipboard
     */
    ClipboardConfigs.copyPlain = function (evt) {
        return evt.clipboardData.getData('text/plain');
    };
    /*
     * This method get the data in html format from the clipboard but if it is empty it try to get in plain format
     */
    ClipboardConfigs.copyHtml = function (evt) {
        var data = evt.clipboardData.getData('text/plain');
        var html = evt.clipboardData.getData('text/html');
        if (html) {
            data = sanitize_html__WEBPACK_IMPORTED_MODULE_2___default()(html);
        }
        return data;
    };
    ClipboardConfigs.copy = function (evt, asHtml) {
        if (asHtml === void 0) { asHtml = true; }
        var data = '';
        if (asHtml) {
            data = ClipboardConfigs.copyHtml(evt);
        }
        else {
            data = ClipboardConfigs.copyPlain(evt);
        }
        return data;
    };
    ClipboardConfigs.GROUP = 'clipboardConfigs';
    ClipboardConfigs.DEFAULT = {
        active: false,
        configs: [
            {
                id: 'copy',
                name: 'Format copy',
                selected: 'copyPlain',
                options: {
                    copyHtml: 'Copy as HTML',
                    copyPlain: 'Copy as Plain Text'
                }
            }
        ]
    };
    return ClipboardConfigs;
}(_configs__WEBPACK_IMPORTED_MODULE_1__["Configs"]));



/***/ }),

/***/ "./src/app/models/configs/configs.ts":
/*!*******************************************!*\
  !*** ./src/app/models/configs/configs.ts ***!
  \*******************************************/
/*! exports provided: Configs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configs", function() { return Configs; });
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_0__);

var Configs = /** @class */ (function () {
    function Configs() {
    }
    Configs.init = function () {
        localforage__WEBPACK_IMPORTED_MODULE_0__["config"]({
            driver: localforage__WEBPACK_IMPORTED_MODULE_0__["LOCALSTORAGE"],
            name: Configs.NAME,
            version: 1.0,
            storeName: Configs.NAME,
            description: 'xedit configs storage'
        });
        return localforage__WEBPACK_IMPORTED_MODULE_0__;
    };
    Configs.save = function (data, gr) {
        if (gr === void 0) { gr = 'configs'; }
        return this.init().setItem(gr, data, this.callback);
    };
    Configs.get = function (gr) {
        if (gr === void 0) { gr = 'configs'; }
        return this.init().getItem(gr, this.callback);
    };
    Configs.callback = function (error, value) {
        if (error) {
            console.error(error);
            return error;
        }
        else {
            return value;
        }
    };
    Configs.NAME = 'xedit-configs';
    return Configs;
}());



/***/ }),

/***/ "./src/app/models/configs/statesConfigs.ts":
/*!*************************************************!*\
  !*** ./src/app/models/configs/statesConfigs.ts ***!
  \*************************************************/
/*! exports provided: StateConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateConfigs", function() { return StateConfigs; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configs */ "./src/app/models/configs/configs.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var StateConfigs = /** @class */ (function (_super) {
    __extends(StateConfigs, _super);
    function StateConfigs() {
        var _this = _super.call(this) || this;
        _this.self = _this.constructor;
        _this.configs = {};
        _this.init();
        return _this;
    }
    StateConfigs.prototype.setConfigs = function (configs) {
        this.configs.configs = configs;
        StateConfigs.save(this.configs);
        return this;
    };
    StateConfigs.prototype.getConfigs = function (config) {
        if (config === void 0) { config = null; }
        var configs = this.configs.configs;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(config)) {
            return configs;
        }
        for (var i = 0; i < configs.length; i++) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('id', configs[i])) {
                return configs[i];
            }
        }
    };
    StateConfigs.prototype.toggleActive = function () {
        this.configs.active = !this.configs.active;
        StateConfigs.save(this.configs);
        return this.isActive();
    };
    StateConfigs.prototype.isActive = function () {
        var active = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('active', this.configs) ? this.configs.active : null;
        return active;
    };
    StateConfigs.prototype.addConfig = function (config) {
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.configs)) {
            this.configs = StateConfigs.DEFAULT;
        }
        this.configs.configs.push(config);
        return this.setConfigs(this.configs);
    };
    StateConfigs.prototype.updateConfigs = function () {
        this.init();
    };
    StateConfigs.prototype.init = function () {
        var _this = this;
        this.self.get().then(function (data) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(data)) {
                data = _this.self.DEFAULT;
            }
            _this.configs = data;
        });
    };
    StateConfigs.save = function (data, group) {
        if (group === void 0) { group = StateConfigs.GROUP; }
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(group)) {
            group = StateConfigs.GROUP;
        }
        return _super.save.call(this, data, group);
    };
    StateConfigs.get = function (group) {
        if (group === void 0) { group = StateConfigs.GROUP; }
        return _super.get.call(this, group);
    };
    StateConfigs.callback = function (error, value) {
        if (error) {
            console.error(error);
        }
        else {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value)) {
                value = StateConfigs.DEFAULT;
            }
        }
        return value;
    };
    StateConfigs.GROUP = 'statesController';
    StateConfigs.DEFAULT = {
        active: false,
        configs: [
            {
                id: 'hover',
                name: 'Controlar hover',
                enable: true
            }
        ]
    };
    return StateConfigs;
}(_configs__WEBPACK_IMPORTED_MODULE_1__["Configs"]));



/***/ }),

/***/ "./src/app/models/dom.ts":
/*!*******************************!*\
  !*** ./src/app/models/dom.ts ***!
  \*******************************/
/*! exports provided: DOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return DOM; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DOM = /** @class */ (function () {
    function DOM(target) {
        this.target = target;
        this.classes = target.className.split(' ');
    }
    /********************* SETER AND GETERS *********************/
    DOM.prototype.setTarget = function (target) {
        this.target = target;
    };
    DOM.prototype.getTarget = function () {
        return this.target;
    };
    /********************** PUBLIC METHODS **********************/
    DOM.prototype.tagName = function (upper) {
        if (upper === void 0) { upper = false; }
        var tag = this.getTarget().tagName.toLowerCase();
        if (upper) {
            tag = tag.toUpperCase();
        }
        return tag;
    };
    DOM.prototype.addClass = function (className) {
        var _a = this.classExists(className), index = _a.index, exists = _a.exists;
        if (!exists) {
            this.insertClass(className);
        }
        this.storeAttr('class', this.classes);
    };
    DOM.prototype.removeClass = function (className) {
        var _a = this.classExists(className), index = _a.index, exists = _a.exists;
        if (exists) {
            this.deleteClass(index, className);
        }
        this.storeAttr('class', this.classes);
    };
    DOM.prototype.toggleClass = function (className) {
        var _a = this.classExists(className), index = _a.index, exists = _a.exists;
        if (exists) {
            this.removeClass(className);
        }
        else {
            this.addClass(className);
        }
        this.storeAttr('class', this.classes);
    };
    DOM.prototype.setAttr = function (attr, value) {
        this.storeAttr(attr, value);
    };
    DOM.prototype.insertNode = function (htmlString, siblingNode, before) {
        if (before === void 0) { before = false; }
        var elements = DOM.creteElement(htmlString);
        // if (!before) {
        //     this.target.insertBefore(element, siblingNode);
        // }
        while (elements.length > 0) {
            this.target.insertBefore(elements.item(0), siblingNode);
        }
    };
    DOM.prototype.deleteNode = function () {
        this.target.remove();
    };
    /********************* PRIVATE METHODS *********************/
    DOM.prototype.storeAttr = function (attr, value) {
        if (Array.isArray(value)) {
            value = value.join(this.joinAttrTypes(attr));
        }
        this.target.setAttribute(attr, String(value));
    };
    DOM.prototype.joinAttrTypes = function (attr) {
        var attributtes = {
            class: ' ',
            style: '; ',
            default: ' ',
        };
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(attr, attributtes)) {
            return attributtes[attr];
        }
        return attributtes.default;
    };
    DOM.prototype.classExists = function (className) {
        var index = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["indexOf"])(className, this.classes);
        var exists = index >= 0;
        return { index: index, exists: exists };
    };
    DOM.prototype.insertClass = function (className) {
        this.classes.push(className);
    };
    DOM.prototype.deleteClass = function (index, className) {
        if (index >= 0) {
            this.classes.splice(index, 1);
        }
    };
    /***************** STATIC METHODS **************************/
    DOM.element = function (selector) {
        var element;
        if (selector instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]) {
            element = selector.nativeElement;
        }
        else if (selector instanceof HTMLElement) {
            element = selector;
        }
        else {
            element = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"](document.body).nativeElement.querySelector(selector);
        }
        return new DOM(element);
    };
    DOM.creteElement = function (htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.childNodes;
    };
    // TODO Clean
    DOM.setClass = function (classes, className) {
        classes.push(className);
    };
    DOM.deleteClass = function (classes, className) {
        var index = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["indexOf"])(className, classes);
        if (index >= 0) {
            classes.splice(index, 1);
        }
    };
    DOM.tag = function (selector, upper) {
        if (upper === void 0) { upper = false; }
        var element = DOM.element(selector);
        return element.tagName(upper);
    };
    DOM.getClass = function (element) {
        return element.nativeElement.className.split(' ');
    };
    DOM.existClass = function (element, className) {
        var classes = DOM.getClass(element);
        var index = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["indexOf"])(className, classes);
        var exist = index >= 0;
        return { classes: classes, index: index, exist: exist };
    };
    DOM.addClass = function (element, className) {
        var _a = DOM.existClass(element, className), classes = _a.classes, index = _a.index, exist = _a.exist;
        if (!exist) {
            DOM.setClass(classes, className);
            element.nativeElement.setAttribute('class', classes.join(' '));
        }
        return element;
    };
    DOM.removeClass = function (element, className) {
        var _a = DOM.existClass(element, className), classes = _a.classes, index = _a.index, exist = _a.exist;
        if (exist) {
            DOM.deleteClass(classes, className);
            element.nativeElement.setAttribute('class', classes.join(' '));
        }
        return element;
    };
    DOM.toggleClass = function (element, className) {
        var _a = DOM.existClass(element, className), classes = _a.classes, index = _a.index, exist = _a.exist;
        if (exist) {
            DOM.deleteClass(classes, className);
        }
        else {
            DOM.setClass(classes, className);
        }
        element.nativeElement.setAttribute('class', classes.join(' '));
        return element;
    };
    return DOM;
}());



/***/ }),

/***/ "./src/app/models/file.ts":
/*!********************************!*\
  !*** ./src/app/models/file.ts ***!
  \********************************/
/*! exports provided: FileHistory, File */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileHistory", function() { return FileHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history */ "./src/app/models/history.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _utils_converters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/converters */ "./src/utils/converters.ts");
/* harmony import */ var _xedit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../xedit */ "./src/app/xedit.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var FileHistory = /** @class */ (function () {
    // Constructor
    function FileHistory(content, message) {
        if (content === void 0) { content = null; }
        if (message === void 0) { message = null; }
        if (content != null) {
            this.content = content;
            this.message = message;
            this.type = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["is"])(String, content) ? FileHistory.TYPE_TEXT : FileHistory.TYPE_JSON;
        }
    }
    /***************** Getters and setters **************************/
    FileHistory.prototype.getContent = function () {
        return this.content;
    };
    FileHistory.prototype.setContent = function (content) {
        this.content = content;
    };
    FileHistory.prototype.getMessage = function () {
        return this.message;
    };
    FileHistory.prototype.setMessage = function (message) {
        this.message = message;
    };
    FileHistory.TYPE_JSON = 'json';
    FileHistory.TYPE_TEXT = 'text';
    return FileHistory;
}());

var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File(json) {
        if (json === void 0) { json = null; }
        var _this = this;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(json)) {
            throw TypeError('Invalid arguments');
        }
        _this = _super.call(this, File.createContent(json.nodes)) || this;
        _this.metas = json.metas;
        _this.css = [];
        _this.js = [];
        _this.name = json.name;
        var schemas = {};
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(json.nodes)) {
            Object.keys(json.nodes).forEach(function (nodeKey) {
                var node = json.nodes[nodeKey];
                schemas[nodeKey] = node.schema;
                _this.css = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["union"])(_this.css, Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('css', node) ? node.css : []);
                _this.js = Object(ramda__WEBPACK_IMPORTED_MODULE_1__["union"])(_this.js, Object(ramda__WEBPACK_IMPORTED_MODULE_1__["hasIn"])('js', node) ? node.js : []);
            });
        }
        _xedit__WEBPACK_IMPORTED_MODULE_3__["Xedit"].setConf('schemas', schemas);
        _xedit__WEBPACK_IMPORTED_MODULE_3__["Xedit"].setConf('baseUrl', json.baseUrl);
        _xedit__WEBPACK_IMPORTED_MODULE_3__["Xedit"].setConf('routerMapper', json.routerMapper);
        return _this;
    }
    /**************** Getters and setter ************************/
    File.prototype.getCss = function () {
        return this.css;
    };
    File.prototype.getJs = function () {
        return this.js;
    };
    File.prototype.getMetadata = function () {
        return this.metadata;
    };
    File.prototype.setMetadata = function (meta) {
        return this.metadata = meta;
    };
    File.prototype.getName = function () {
        return this.name;
    };
    /***************** PUBLIC METHODS **************************/
    /**
     * Added new state
     */
    File.prototype.newStateWithMessage = function (content, message) {
        _super.prototype.newState.call(this, new FileHistory(content, message));
        return this;
    };
    /**
     * Recovery specific state
     *
     * @param stateId
     */
    File.prototype.recovery = function (stateId) {
        var _this = this;
        return _super.prototype.recovery.call(this, stateId).then(function (value) {
            _this.setState(Object.assign(new FileHistory, value));
            return _this;
        });
    };
    /***************** STATIC METHODS **************************/
    File.createContent = function (nodes) {
        Object.keys(nodes).forEach(function (property) {
            nodes[property].content = _utils_converters__WEBPACK_IMPORTED_MODULE_2__["Converters"].html2json(nodes[property].content);
        });
        return new FileHistory(nodes, 'Init state');
    };
    return File;
}(_history__WEBPACK_IMPORTED_MODULE_0__["History"]));



/***/ }),

/***/ "./src/app/models/history.ts":
/*!***********************************!*\
  !*** ./src/app/models/history.ts ***!
  \***********************************/
/*! exports provided: History */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "History", function() { return History; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_2__);



var History = /** @class */ (function () {
    // Contructor
    function History(initState, maxStates, maxSnapshots) {
        if (maxStates === void 0) { maxStates = 50; }
        if (maxSnapshots === void 0) { maxSnapshots = 10; }
        this.pos = 0;
        this.states = new Array;
        this.setMaxStates(maxStates);
        this.setMaxSnapshots(maxSnapshots);
        this.state = initState;
        this.states = [];
        this.snapshots = [];
        // Init database
        this.prepareDatabase();
        // Save init state
        this.save(initState);
        this.snapshot();
    }
    // ************************************** Getters and setters **************************************/
    History.prototype.getState = function () {
        return this.state;
    };
    History.prototype.setState = function (state) {
        this.state = state;
    };
    History.prototype.getMaxStates = function () {
        return this.maxStates;
    };
    History.prototype.setMaxStates = function (maxStates) {
        if (maxStates <= 0 && !Number.isInteger(maxStates)) {
            throw new TypeError('Invalid maxStates');
        }
        this.maxStates = maxStates;
    };
    History.prototype.getSnapshots = function () {
        return this.snapshots;
    };
    History.prototype.getSnapshot = function (key) {
        return this.snapshots[key];
    };
    History.prototype.getMaxSnapshots = function () {
        return this.maxSnapshots;
    };
    History.prototype.setMaxSnapshots = function (maxSnapshots) {
        if (maxSnapshots <= 0 && !Number.isInteger(maxSnapshots)) {
            throw new TypeError('Invalid maxSnapshots');
        }
        this.maxSnapshots = maxSnapshots;
    };
    /************************************** Private Methods **************************************/
    /**
     * Get the number of states
     */
    History.prototype.countStates = function () {
        return this.states.length;
    };
    /**
     * Check if there are the maximun number of states (By default 100)
     */
    History.prototype.checkMaxStates = function () {
        return this.countStates() >= this.maxStates;
    };
    /**
     * Added a new state
     */
    History.prototype.addState = function (state) {
        if (this.countStates() > this.pos) {
            this.remove(Object(ramda__WEBPACK_IMPORTED_MODULE_0__["remove"])(0, this.pos + 1, this.states), this.db);
            this.states.splice(this.pos + 1, this.countStates());
        }
        if (this.checkMaxStates()) {
            this.remove(this.states.shift(), this.db);
            this.pos--;
        }
        this.save(state);
        this.state = state;
    };
    /**
     * Save state in web storage
     */
    History.prototype.save = function (state) {
        if (this.db) {
            var stateId = angular2_uuid__WEBPACK_IMPORTED_MODULE_1__["UUID"].UUID();
            try {
                this.db.setItem(stateId, state, function (err, value) {
                    if (err) {
                        console.error(err);
                    }
                });
                this.states.push(stateId);
            }
            catch (ex) {
                console.error('History save error');
            }
        }
        else {
            console.error('Storage not available');
        }
    };
    /**
     * Snapshot last state in web storage
     */
    History.prototype.snapshot = function () {
        if (this.sc) {
            var stateId = this.states[this.pos];
            try {
                if (this.snapshots.length > this.getMaxSnapshots()) {
                    this.remove(stateId, this.sc);
                    this.snapshots.shift();
                }
                this.sc.setItem(stateId, this.state, function (err, value) {
                    if (err) {
                        console.error(err);
                    }
                });
                this.snapshots.push({ 'key': stateId, 'message': this.state.message });
            }
            catch (ex) {
                console.error('Snapshot save error');
            }
        }
        else {
            console.error('Storage not available');
        }
    };
    /**
     * Recovery state by key from web storage
     *
     * @param stateId
     */
    History.prototype.recovery = function (stateId) {
        return this.db.getItem(stateId, function (err, value) {
            if (err) {
                console.error(err);
            }
            else {
                return value;
            }
        });
    };
    /**
     * Remove state from storage
     */
    History.prototype.remove = function (keys, database) {
        keys = (keys instanceof Array) ? keys : [keys];
        keys.forEach(function (key) {
            if (database) {
                database.removeItem(key, function (err) {
                    if (err) {
                        console.error(err);
                    }
                });
            }
        });
    };
    /************************************** Public Methods **************************************/
    /**
     * Return to the previous state if it exists, otherwise it does not do anything
     */
    History.prototype.lastState = function () {
        if (this.hasPreviousState()) {
            this.pos--;
        }
        return this.recovery(this.states[this.pos]);
    };
    /**
     * Go to the next state if it exists, otherwise it does not do anything
     */
    History.prototype.nextState = function () {
        if (this.hasNextState()) {
            this.pos++;
        }
        return this.recovery(this.states[this.pos]);
    };
    /**
     * Go to the initial state
     */
    History.prototype.resetState = function () {
        this.pos = 0;
        if (this.state.length > 0) {
            this.recovery(this.states[this.pos]);
        }
        return this;
    };
    /**
     * Added new state
     */
    History.prototype.newState = function (state) {
        this.addState(state);
        this.pos++;
        return this;
    };
    /**
     * Check if there is a next state
     */
    History.prototype.hasNextState = function () {
        return this.pos < this.countStates() - 1;
    };
    /**
     * Check if there is a previous state
     */
    History.prototype.hasPreviousState = function () {
        return this.pos > 0;
    };
    /**
     * Init database
     */
    History.prototype.prepareDatabase = function () {
        this.db = localforage__WEBPACK_IMPORTED_MODULE_2__["createInstance"]({
            driver: localforage__WEBPACK_IMPORTED_MODULE_2__["INDEXEDDB"],
            name: 'xedit',
            version: 1.0,
            size: 4980736,
            storeName: 'history',
            description: 'Document history'
        });
        this.sc = localforage__WEBPACK_IMPORTED_MODULE_2__["createInstance"]({
            driver: localforage__WEBPACK_IMPORTED_MODULE_2__["INDEXEDDB"],
            name: 'xedit',
            version: 1.0,
            size: 4980736,
            storeName: 'snapshot',
            description: 'Document snapshots'
        });
        this.db.clear();
        this.sc.clear();
    };
    return History;
}());



/***/ }),

/***/ "./src/app/models/node.ts":
/*!********************************!*\
  !*** ./src/app/models/node.ts ***!
  \********************************/
/*! exports provided: Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/schema/xedit-mapper */ "./src/app/models/schema/xedit-mapper.ts");
/* harmony import */ var _utils_converters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/converters */ "./src/utils/converters.ts");
/* harmony import */ var _xedit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../xedit */ "./src/app/xedit.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api */ "./src/app/api.ts");
/* harmony import */ var _app_core_mappers_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/mappers/router */ "./src/app/core/mappers/router.ts");






var Node = /** @class */ (function () {
    // Constructor
    function Node(uuid, target, attributes) {
        if (attributes === void 0) { attributes = {}; }
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(uuid) || Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(name)) {
            throw new TypeError('Invalid arguments');
        }
        this.uuid = uuid;
        this.name = target.tagName.toLowerCase();
        this.target = target;
        this.section = Node.getContainer(this.target);
        this.uuidSectionsPath = Node.getContextPath(this.target, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_EDITOR, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_UUID, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_UUID, [], false, true);
        this.sectionsPath = Node.getContextPath(this.target, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_EDITOR, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_SECTION_TYPE, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_SECTION_TYPE, [], true);
        this.areaId = this.uuidSectionsPath.shift();
        this.attributes = attributes;
        this.schemaNode = _xedit__WEBPACK_IMPORTED_MODULE_3__["Xedit"].getConf('schemas')[this.areaId];
        this.schema = this.schemaNode[this.getSection().getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_SECTION_TYPE)];
    }
    // ************************************** Getters and setters **************************************/
    Node.prototype.getUuid = function () {
        return this.uuid;
    };
    Node.prototype.getTarget = function () {
        return this.target;
    };
    Node.prototype.getHtmlTag = function () {
        return this.target.tagName;
    };
    Node.prototype.setTarget = function (target) {
        this.target = target;
    };
    Node.prototype.getName = function () {
        return this.name;
    };
    Node.prototype.getAreaId = function () {
        return this.areaId;
    };
    Node.prototype.getSchema = function () {
        return this.schema;
    };
    Node.prototype.getSchemaNode = function () {
        return this.schemaNode;
    };
    Node.prototype.getSection = function () {
        return this.section;
    };
    Node.prototype.getPath = function () {
        return this.uuidSectionsPath;
    };
    Node.prototype.getSectionsPath = function () {
        return this.sectionsPath;
    };
    Node.prototype.getAttributes = function () {
        return this.attributes;
    };
    Node.prototype.getAttribute = function (name, value) {
        if (value === void 0) { value = null; }
        return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.attributes[name]) ? null : this.attributes[name];
    };
    Node.prototype.setAttributes = function (attributes) {
        this.attributes = attributes;
    };
    Node.prototype.setAttribute = function (name, value) {
        if (name === _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_LINK && this.getHtmlTag() === 'IMG ') {
            this.attributes[name] = value;
            this.attributes['src'] = _app_core_mappers_router__WEBPACK_IMPORTED_MODULE_5__["default"].configUrl(_api__WEBPACK_IMPORTED_MODULE_4__["Api"].getResourceUrl(), { id: value });
        }
        else if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["contains"])(name, this.getAvailableAttributes())) {
            this.attributes[name] = value;
        }
    };
    Node.prototype.getModule = function () {
        return this.module;
    };
    Node.prototype.setModule = function (module) {
        this.module = module;
    };
    /********************** EVENTS *********************/
    Node.prototype.beforeSelect = function () {
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.module) && typeof (this.module.prototype['beforeSelect'] === 'function')) {
            this.module.prototype.beforeSelect();
        }
    };
    Node.prototype.beforeUnselect = function () {
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.module) && typeof this.module.prototype['beforeUnselect'] === 'function') {
            this.module.prototype.beforeUnselect();
        }
    };
    Node.prototype.afterSelect = function () {
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.module) && typeof (this.module.prototype['afterSelect'] === 'function')) {
            this.module.prototype.afterSelect();
        }
    };
    Node.prototype.afterUnselect = function () {
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.module) && typeof (this.module.prototype['afterUnselect'] === 'function')) {
            this.module.prototype.afterUnselect();
        }
    };
    /********************** PUBLIC METHODS *********************/
    Node.prototype.getType = function () {
        var type = Node.TYPE_OTHER;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["equals"])('img', this.name)) {
            type = Node.TYPE_IMAGE;
        }
        else if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["equals"])('video', this.name)) {
            type = Node.TYPE_VIDEO;
        }
        return type;
    };
    /**
     *
     */
    Node.prototype.getAvailableAttributes = function () {
        var attrName = this.name;
        var auxTag = null;
        if (this.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_LINK, null) != null) {
            attrName = _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_LINK;
            auxTag = this.name;
        }
        else if (this.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_SECTION_TYPE, null) != null) {
            attrName = this.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_SECTION_TYPE);
        }
        return _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].getAvailableAttribute(attrName, auxTag);
    };
    /*********************** STATIC METHODS ***************************************/
    Node.getContainer = function (element, attribute) {
        if (attribute === void 0) { attribute = _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_SECTION_TYPE; }
        var container = null;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(element) && element.hasAttribute(attribute)) {
            container = element;
        }
        return !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(container) || Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(element) || Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(element.parentNode)
            ? container
            : Node.getContainer(element.parentNode, attribute);
    };
    /**
     * Calculate uuid path to xedit node
     */
    Node.getContextPath = function (element, rootTag, hasAttribute, attribute, path, onlyAttribute, rootTagIncluded) {
        if (rootTag === void 0) { rootTag = _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_EDITOR; }
        if (hasAttribute === void 0) { hasAttribute = _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_UUID; }
        if (attribute === void 0) { attribute = _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_1__["XeditMapper"].TAG_UUID; }
        if (path === void 0) { path = []; }
        if (onlyAttribute === void 0) { onlyAttribute = false; }
        if (rootTagIncluded === void 0) { rootTagIncluded = false; }
        var parent = element.parentNode;
        if ((!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(element) &&
            (!onlyAttribute || element.hasAttribute(hasAttribute)) &&
            element.nodeName.toLowerCase() !== rootTag) ||
            rootTagIncluded) {
            var uuid = element.getAttribute(attribute);
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(uuid)) {
                path.unshift(uuid);
            }
        }
        return element.nodeName.toLowerCase() === rootTag || Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(parent)
            ? path
            : this.getContextPath(parent, rootTag, hasAttribute, attribute, path, onlyAttribute, rootTagIncluded);
    };
    /**
     * Get section name according to the language
     *
     * @param section
     * @param lang
     */
    Node.getSectionLang = function (section, lang) {
        var name = null;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(section)) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('lang', section) && Object(ramda__WEBPACK_IMPORTED_MODULE_0__["is"])(Object, section.lang) && Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(lang, section.lang)) {
                name = section.lang[lang];
            }
            else if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('name', section)) {
                name = section.name;
            }
        }
        return name;
    };
    /**
     * Get section template
     *
     * @param section
     */
    Node.getSectionTemplate = function (section) {
        var template = null;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('view', section) && Object(ramda__WEBPACK_IMPORTED_MODULE_0__["is"])(String, section.view)) {
            template = _utils_converters__WEBPACK_IMPORTED_MODULE_2__["Converters"].json2html(_utils_converters__WEBPACK_IMPORTED_MODULE_2__["Converters"].html2json(section.view));
        }
        return template;
    };
    Node.TYPE_IMAGE = 'image';
    Node.TYPE_VIDEO = 'video';
    Node.TYPE_OTHER = 'other';
    return Node;
}());



/***/ }),

/***/ "./src/app/models/schema/xedit-mapper.ts":
/*!***********************************************!*\
  !*** ./src/app/models/schema/xedit-mapper.ts ***!
  \***********************************************/
/*! exports provided: XeditMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XeditMapper", function() { return XeditMapper; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");

var XeditMapper = /** @class */ (function () {
    function XeditMapper() {
    }
    /************************* PUBLIC METHODS *************************/
    XeditMapper.getAvailableAttribute = function (name, tagName) {
        if (tagName === void 0) { tagName = null; }
        var attributes = XeditMapper.ATTRIBUTES['*'].attributes.accept;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(name, XeditMapper.ATTRIBUTES) &&
            Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('attributes', XeditMapper.ATTRIBUTES[name])) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('accept', XeditMapper.ATTRIBUTES[name].attributes)) {
                attributes = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["union"])(attributes, XeditMapper.ATTRIBUTES[name].attributes.accept);
            }
            if (tagName && Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(tagName, XeditMapper.ATTRIBUTES)) {
                if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('accept', XeditMapper.ATTRIBUTES[tagName].attributes)) {
                    attributes = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["union"])(attributes, XeditMapper.ATTRIBUTES[tagName].attributes.accept);
                }
            }
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('reject', XeditMapper.ATTRIBUTES[name].attributes)) {
                attributes = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["difference"])(attributes, XeditMapper.ATTRIBUTES[name].attributes.reject);
            }
            if (tagName && Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(tagName, XeditMapper.ATTRIBUTES)) {
                if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('reject', XeditMapper.ATTRIBUTES[tagName].attributes)) {
                    attributes = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["difference"])(attributes, XeditMapper.ATTRIBUTES[tagName].attributes.reject);
                }
            }
        }
        return attributes;
    };
    // EDITOR TYPES
    XeditMapper.TYPE_HTML = 'html';
    XeditMapper.TYPE_TEXT = 'text';
    XeditMapper.TYPE_DATE = 'date';
    // TAGS
    XeditMapper.TAG_EDITOR = 'xedit';
    XeditMapper.TAG_SECTION_TYPE = 'xe_section';
    XeditMapper.TAG_UUID = 'xe_uuid';
    XeditMapper.TAG_LINK = 'xe_link';
    // ATTRIBUTES
    XeditMapper.ATTR_HOVER = 'xe_hover';
    // UTILS
    XeditMapper.ATTR_SELECTED = 'xe_selected';
    XeditMapper.ATTR_WYSIWYG_SELECTED = 'xe_w_selected';
    XeditMapper.requiredXeditAttributes = [
        XeditMapper.TAG_SECTION_TYPE,
        XeditMapper.TAG_LINK,
    ];
    XeditMapper.ATTR_TYPES = {
        width: 'number',
        heigth: 'number',
    };
    // LINKS_TYPE
    XeditMapper.LINK_TYPES = {
        a: 'href',
        applet: 'codebase',
        area: 'href',
        base: 'href',
        blockquote: 'cite',
        del: 'cite',
        form: 'action',
        frame: 'src',
        head: 'profile',
        iframe: 'src',
        img: 'src',
        input: 'src',
        ins: 'cite',
        link: 'href',
        object: 'data',
        q: 'cite',
        script: 'src',
        audio: 'src',
        button: 'formaction',
        command: 'icon',
        embed: 'src',
        html: 'manifest',
        source: 'src',
        track: 'src',
        video: 'src',
    };
    // ATTRIBUTES
    XeditMapper.ATTRIBUTES = {
        xe_section: {
            filter_attributes: [],
            attributes: {
                reject: [],
                accept: [],
            },
        },
        xe_link: {
            filter_attributes: ['href', 'src'],
            attributes: {
                accept: ['xe_link'],
                reject: ['src', 'href'],
            },
        },
        img: {
            filter_attributes: [],
            attributes: {
                accept: ['src', 'height', 'width'],
                reject: [],
            },
        },
        video: {
            filter_attributes: [],
            attributes: {
                accept: ['src', 'height', 'width'],
                reject: [],
            },
        },
        '*': {
            attributes: {
                accept: ['id', 'class', 'style', 'title'],
            },
        },
    };
    return XeditMapper;
}());



/***/ }),

/***/ "./src/app/models/toolbar.ts":
/*!***********************************!*\
  !*** ./src/app/models/toolbar.ts ***!
  \***********************************/
/*! exports provided: Toolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return Toolbar; });
var Toolbar = /** @class */ (function () {
    function Toolbar(icon, callback, active) {
        this.setIcon(icon);
        this.setCallback(callback);
        this.setActive(active);
    }
    Toolbar.prototype.setIcon = function (icon) {
        this.icon = icon;
    };
    Toolbar.prototype.getIcon = function () {
        return this.icon;
    };
    Toolbar.prototype.setCallback = function (callback) {
        this.callback = callback;
    };
    Toolbar.prototype.getCallback = function () {
        return this.callback;
    };
    Toolbar.prototype.setActive = function (active) {
        this.active = active;
    };
    Toolbar.prototype.getActive = function () {
        return this.active;
    };
    return Toolbar;
}());



/***/ }),

/***/ "./src/app/pipes/debug/debug.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/debug/debug.pipe.ts ***!
  \*******************************************/
/*! exports provided: DebugPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugPipe", function() { return DebugPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DebugPipe = /** @class */ (function () {
    function DebugPipe() {
    }
    DebugPipe.prototype.transform = function (value, args) {
        console.log('VALUE', value, 'TYPEOF', typeof value, 'ARGS', args);
    };
    DebugPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'debug'
        })
    ], DebugPipe);
    return DebugPipe;
}());



/***/ }),

/***/ "./src/app/pipes/inner-html/safe-html.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/pipes/inner-html/safe-html.pipe.ts ***!
  \****************************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safeHtml'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/pipes/keys/keys.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/keys/keys.pipe.ts ***!
  \*****************************************/
/*! exports provided: KeysPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        /*const attributes = [];
        node.getAvailableAttributes().forEach(element => {
          attributes.push({ name: element, value: node.getAttribute(element, '') });
        });
        return attributes;*/
        return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["keys"])(value);
    };
    KeysPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'keys'
        })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "./src/app/pipes/url/url.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/url/url.pipe.ts ***!
  \***************************************/
/*! exports provided: UrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlPipe", function() { return UrlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UrlPipe = /** @class */ (function () {
    function UrlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    UrlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustResourceUrl(value);
    };
    UrlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'url'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], UrlPipe);
    return UrlPipe;
}());



/***/ }),

/***/ "./src/app/services/autoload-modules-service/autoload-modules.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/services/autoload-modules-service/autoload-modules.service.ts ***!
  \*******************************************************************************/
/*! exports provided: AutoloadModulesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoloadModulesService", function() { return AutoloadModulesService; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AutoloadModulesService = /** @class */ (function () {
    function AutoloadModulesService() {
        this.modules = {};
    }
    AutoloadModulesService.prototype.addModule = function (name, component) {
        this.modules[name] = component;
    };
    AutoloadModulesService.prototype.getModule = function (module) {
        var moduleItem = null;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(module, this.modules) && !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.modules[module])) {
            moduleItem = this.modules[module];
        }
        return moduleItem;
    };
    AutoloadModulesService.prototype.getModuleTag = function (module) {
        var moduleItem = null;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(module, this.modules) && !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.modules[module])) {
            moduleItem = this.modules[module];
            var selector = moduleItem.__annotations__[0].selector;
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(selector)) {
                moduleItem = selector;
            }
        }
        return moduleItem;
    };
    AutoloadModulesService.prototype.getModules = function () {
        return this.modules;
    };
    AutoloadModulesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AutoloadModulesService);
    return AutoloadModulesService;
}());



/***/ }),

/***/ "./src/app/services/editor-service/editor.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/editor-service/editor.service.ts ***!
  \***********************************************************/
/*! exports provided: EditorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorService", function() { return EditorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _models_file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/file */ "./src/app/models/file.ts");
/* harmony import */ var _models_node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models/node */ "./src/app/models/node.ts");
/* harmony import */ var _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models/schema/xedit-mapper */ "./src/app/models/schema/xedit-mapper.ts");
/* harmony import */ var _utils_converters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @utils/converters */ "./src/utils/converters.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditorService = /** @class */ (function () {
    // Constructor
    function EditorService() {
        this.file = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.fileState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.currentNode = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.currentNodeModify = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.elementsState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.toolbarOptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    EditorService_1 = EditorService;
    // ************************************** Getters and setters **************************************/
    EditorService.prototype.setFile = function (file) {
        this.file.next(file);
        this.fileState.next(file);
    };
    EditorService.prototype.getFile = function () {
        this.file.next(this.fileState.getValue());
        return this.file.asObservable();
    };
    EditorService.prototype.getFileValue = function () {
        this.file.next(this.fileState.getValue());
        return this.file.getValue();
    };
    EditorService.prototype.setFileState = function (file) {
        this.fileState.next(file);
    };
    EditorService.prototype.getFileState = function () {
        return this.fileState.asObservable();
    };
    EditorService.prototype.getFileStateValue = function () {
        return this.fileState.getValue();
    };
    EditorService.prototype.setCurrentNode = function (node) {
        this.currentNode.next(node);
    };
    EditorService.prototype.getCurrentNode = function () {
        return this.currentNode.asObservable();
    };
    EditorService.prototype.setCurrentNodeModify = function (node) {
        this.currentNodeModify.next(node);
    };
    EditorService.prototype.getCurrentNodeModify = function () {
        return this.currentNodeModify.asObservable();
    };
    EditorService.prototype.setToolbarOptions = function (options) {
        this.toolbarOptions.next(options);
    };
    EditorService.prototype.getToolbarOptions = function () {
        return this.toolbarOptions.asObservable();
    };
    EditorService.prototype.isLoading = function () {
        return this.loading.asObservable();
    };
    EditorService.prototype.setLoading = function (loading) {
        this.loading.next(loading);
    };
    EditorService.prototype.setElementsState = function (elementState) {
        this.elementsState.next(elementState);
    };
    EditorService.prototype.getElementsState = function () {
        return this.elementsState.asObservable();
    };
    /************************************** Public Methods **************************************/
    /**
     * Create file from data nodes
     */
    EditorService.prototype.createFile = function (data) {
        this.setFile(new _models_file__WEBPACK_IMPORTED_MODULE_3__["File"](data));
    };
    /**
     * Added new state
     */
    EditorService.prototype.newStateFile = function (state, message) {
        return this.file.getValue().newStateWithMessage(state, message);
    };
    /**
     * Return to the previous state if it exists, otherwise it does not do anything
     */
    EditorService.prototype.lastStateFile = function () {
        var _this = this;
        return this.file
            .getValue()
            .lastState()
            .then(function (value) {
            _this.setFile(value);
        });
    };
    /**
     * Go to the next state if it exists, otherwise it does not do anything
     */
    EditorService.prototype.nextStateFile = function () {
        var _this = this;
        return this.file
            .getValue()
            .nextState()
            .then(function (value) {
            _this.setFile(value);
        });
    };
    /**
     *
     */
    EditorService.prototype.recoverySnapshot = function (key) {
        var _this = this;
        this.getFileStateValue()
            .recovery(key)
            .then(function () {
            _this.setFile(_this.getFileStateValue());
        });
    };
    /**
     * Save content into document
     *
     * @param node DomNode
     * @param content Html content
     * @param message string message
     */
    EditorService.prototype.save = function (node, content, message) {
        var fileContent = this.fileState.getValue().getState().content;
        /** @todo Improve performance clone */
        // let fileContent = clone(this.file.getValue().getState().content)
        var uuidPath = null;
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["is"])(String, node)) {
            fileContent[node].content = _utils_converters__WEBPACK_IMPORTED_MODULE_6__["Converters"].html2json(content);
        }
        else {
            uuidPath = EditorService_1.getUuidPath(node);
            var root = fileContent[uuidPath.shift()];
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["is"])(String, root.content)) {
                root.content = _utils_converters__WEBPACK_IMPORTED_MODULE_6__["Converters"].html2json(root.content);
            }
            // Modify file with new changes
            var editContent = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["reduce"])(function (acc, value) {
                return acc.child[value];
            }, root.content, uuidPath);
            var newContent = _utils_converters__WEBPACK_IMPORTED_MODULE_6__["Converters"].html2json(content, false);
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["hasIn"])(editContent.uuid, newContent) &&
                Object(ramda__WEBPACK_IMPORTED_MODULE_2__["hasIn"])('uuid', newContent[editContent.uuid]) &&
                editContent.uuid === newContent[editContent.uuid].uuid) {
                newContent = newContent[editContent.uuid].child;
            }
            editContent.child = newContent;
        }
        // Save new state
        var newFile = this.newStateFile(fileContent, message);
        this.setFileState(newFile);
    };
    /**
     * Get json node by path
     */
    EditorService.prototype.getJsonNodesByPath = function (node) {
        var fileContent = this.fileState.getValue().getState().content;
        var root = fileContent[node.getAreaId()];
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["is"])(String, root.content)) {
            root.content = _utils_converters__WEBPACK_IMPORTED_MODULE_6__["Converters"].html2json(root.content);
        }
        // Modify file with new changes
        var editContent = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["reduce"])(function (acc, value) {
            return acc.child[value];
        }, root.content, node.getPath());
        return editContent;
    };
    /**
     * Remove node section
     */
    EditorService.prototype.removeNode = function (node) {
        var file = this.newStateFile(this.fileState.getValue().getState().content, 'Remove node');
        var section = node.getSection();
        var sectionPath = _models_node__WEBPACK_IMPORTED_MODULE_4__["Node"].getContextPath(section);
        var parentNode = null;
        var fileNode = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["reduce"])(function (n, value) {
            parentNode = n;
            return n.child[value];
        }, file.getState().getContent()[node.getAreaId()].content, sectionPath);
        var nodeKey = section.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].TAG_UUID);
        delete parentNode.child[nodeKey];
        this.setFileState(file);
    };
    /**
     * Add child or sibling node to area
     *
     * @param node
     * @param target
     * @param child
     */
    EditorService.prototype.addNodeToArea = function (node, newNode, child) {
        if (child === void 0) { child = false; }
        var message = (child ? 'Adding child' : 'Adding sibling') + ' to ' + node.getSection().getAttribute('xe_section');
        var file = this.newStateFile(this.fileState.getValue().getState().content, message);
        var section = node.getSection();
        var sectionPath = child ? _models_node__WEBPACK_IMPORTED_MODULE_4__["Node"].getContextPath(section) : _models_node__WEBPACK_IMPORTED_MODULE_4__["Node"].getContextPath(section.parentNode);
        var fileNode = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["reduce"])(function (n, value) {
            return n.child[value];
        }, file.getState().getContent()[node.getAreaId()].content, sectionPath);
        if (!child) {
            var idChild_1 = section.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].TAG_UUID);
            var nodeKey_1 = Object.keys(newNode)[0];
            fileNode.child = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["reduce"])(function (object, nodeId) {
                var nodeValue = fileNode.child[nodeId];
                object[nodeId] = nodeValue;
                if (nodeId === idChild_1) {
                    object[nodeKey_1] = newNode[nodeKey_1];
                }
                return object;
            }, {}, Object.keys(fileNode.child));
        }
        else {
            var nodeKey = Object.keys(newNode)[0];
            fileNode.child[nodeKey] = newNode[nodeKey];
        }
        this.setFileState(file);
    };
    EditorService.prototype.getUpdatedDocument = function () {
        var file = this.getFileStateValue();
        var state = file.getState();
        var document = { nodes: {} };
        for (var nodeId in state.content) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["hasIn"])('content', state.content[nodeId])) {
                document['nodes'][nodeId] = {
                    content: _utils_converters__WEBPACK_IMPORTED_MODULE_6__["Converters"].json2html(state.content[nodeId].content, false, false),
                    editable: state.content[nodeId].editable
                };
            }
        }
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["hasIn"])('metas', file)) {
            document['metas'] = file['metas'];
        }
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["hasIn"])('metadata', file)) {
            document['metadata'] = file['metadata'];
        }
        return document;
    };
    /************************************** Static Methods **************************************/
    /**
     * Parse DomNode to EditorNode
     *
     * @param element DomNode
     * @param path Uuid path
     */
    EditorService.prototype.parseToNode = function (element) {
        var styles = [];
        var attributes = {};
        var node = null;
        var uuid = element.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].TAG_UUID);
        Object.keys(element.attributes).forEach(function (key) {
            attributes[element.attributes[key].name] = element.attributes[key].value;
        });
        try {
            node = new _models_node__WEBPACK_IMPORTED_MODULE_4__["Node"](uuid, element, attributes);
        }
        catch (e) {
            console.error('This element is not a valid node');
        }
        return node;
    };
    /*
     * Calculate uuid path to xedit node
     */
    EditorService.getUuidPath = function (element, rootTag, path, onlySections) {
        if (rootTag === void 0) { rootTag = _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].TAG_EDITOR; }
        if (path === void 0) { path = []; }
        if (onlySections === void 0) { onlySections = false; }
        var parent = element.parentNode;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(element) &&
            element.hasAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].TAG_UUID) &&
            (!onlySections || element.hasAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].TAG_SECTION_TYPE))) {
            path.unshift(element.getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].TAG_UUID));
        }
        return element.nodeName.toLowerCase() === rootTag || Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(parent)
            ? path
            : this.getUuidPath(parent, rootTag, path);
    };
    /**
     * Check if node has a child section
     */
    /**
     * Check if allow add new child
     */
    EditorService.isAllowAddChild = function (currentNode, section) {
        var valid = false;
        var schema = currentNode.getSchema();
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_2__["contains"])(section, Object.keys(schema.sections))) {
            valid = true;
        }
        return valid;
    };
    /**
     * Check if current node support a inserted node
     *
     * @param currentNode Node
     * @param insertedNode Node
     *
     * @returns boolean
     */
    EditorService.isInsertedNodeValid = function (currentNode, insertedNode) {
        var section = insertedNode.getTarget().getAttribute(_models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_5__["XeditMapper"].TAG_SECTION_TYPE);
        return this.isAllowAddChild(currentNode, section);
    };
    var EditorService_1;
    EditorService = EditorService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EditorService);
    return EditorService;
}());



/***/ }),

/***/ "./src/app/services/node-service/node.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/node-service/node.service.ts ***!
  \*******************************************************/
/*! exports provided: NodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeService", function() { return NodeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NodeService = /** @class */ (function () {
    function NodeService() {
        this.next = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.current = null;
    }
    /******************************** Getters and setters  ********************************/
    NodeService.prototype.set = function (node) {
        if (!this.equals(node, this.current)) {
            this.beforChange(node);
            this.next.next(node);
            this.afterChange(node);
            this.current = node;
        }
    };
    NodeService.prototype.get = function () {
        return this.next.asObservable();
    };
    /******************************** Aux methods  ********************************/
    NodeService.prototype.beforChange = function (node) {
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(this.current)) {
            this.current.beforeUnselect();
        }
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(node)) {
            node.beforeSelect();
        }
    };
    NodeService.prototype.afterChange = function (node) {
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(this.current)) {
            this.current.afterUnselect();
        }
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(node)) {
            node.afterSelect();
        }
    };
    /**
     *
     * @param node
     * @param node2
     *
     * @return boolean
     */
    NodeService.prototype.equals = function (node, node2) {
        var cond1 = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(node) && Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(node2);
        var cond2 = !Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(node) && !Object(ramda__WEBPACK_IMPORTED_MODULE_2__["isNil"])(node2) && node.getUuid() === node2.getUuid();
        return cond1 || cond2;
    };
    NodeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NodeService);
    return NodeService;
}());



/***/ }),

/***/ "./src/app/services/resource/resource.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/resource/resource.service.ts ***!
  \*******************************************************/
/*! exports provided: ResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceService", function() { return ResourceService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResourceService = /** @class */ (function () {
    function ResourceService() {
        this.isOpen = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.type = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.selectAction = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](function (evt) { });
    }
    /**
     * Display the resource modal
     */
    ResourceService.prototype.show = function () {
        this.isOpen.next(true);
    };
    /**
     * Hide the resource modal
     */
    ResourceService.prototype.hide = function () {
        this.isOpen.next(false);
    };
    /**
     * Change the status of modal betwen show or hide
     *
     * @param open
     */
    ResourceService.prototype.setStatus = function (open) {
        this.isOpen.next(open);
    };
    /**
     * Get the current status of modal
     *
     */
    ResourceService.prototype.getStatus = function () {
        return this.isOpen.asObservable();
    };
    /**
     * Set current type to filter resources
     *
     * @param type
     */
    ResourceService.prototype.setType = function (type) {
        this.type.next(type);
    };
    /**
     * Get current type to filter resources
     *
     * @return Observable<string|null>
     */
    ResourceService.prototype.getType = function () {
        return this.type.asObservable();
    };
    /**
     * Set current type to filter resources
     *
     * @param type
     */
    ResourceService.prototype.setOnSelect = function (selectAction) {
        this.selectAction.next(selectAction);
    };
    /**
     * Get current type to filter resources
     *
     * @return Observable<string|null>
     */
    ResourceService.prototype.getOnSelect = function () {
        return this.selectAction.asObservable();
    };
    ResourceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ResourceService);
    return ResourceService;
}());



/***/ }),

/***/ "./src/app/services/state-service/state.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/state-service/state.service.ts ***!
  \*********************************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StateService = /** @class */ (function () {
    // Constructor
    function StateService() {
        this.currentView = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.availableViews = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    // ************************************** Getters and setters **************************************/
    StateService.prototype.getCurrentView = function () {
        return this.currentView.asObservable();
    };
    StateService.prototype.setCurrentView = function (view) {
        this.currentView.next(view);
    };
    StateService.prototype.getAvailabelViews = function () {
        return this.availableViews.asObservable();
    };
    StateService.prototype.setAvailableViews = function (availableViews) {
        this.availableViews.next(availableViews);
    };
    StateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/xedit.ts":
/*!**************************!*\
  !*** ./src/app/xedit.ts ***!
  \**************************/
/*! exports provided: Xedit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Xedit", function() { return Xedit; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _core_mappers_xedit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/mappers/xedit */ "./src/app/core/mappers/xedit.ts");


var Xedit = /** @class */ (function () {
    function Xedit() {
    }
    // ************************************** Getters and setters **************************************/
    Xedit.getConf = function (conf, value) {
        return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(conf, _core_mappers_xedit__WEBPACK_IMPORTED_MODULE_1__["Xedit"].getXedit()) ? _core_mappers_xedit__WEBPACK_IMPORTED_MODULE_1__["Xedit"].getXedit()[conf] : (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value) ? value : undefined);
    };
    Xedit.setConf = function (conf, value) {
        return _core_mappers_xedit__WEBPACK_IMPORTED_MODULE_1__["Xedit"].getXedit()[conf] = value;
    };
    Xedit.setLang = function (lang) {
        return Xedit.setConf(Xedit.LANG, lang);
    };
    Xedit.getLang = function () {
        return Xedit.getConf(Xedit.LANG, 'es');
    };
    Xedit.getSchemas = function () {
        return Xedit.getConf(Xedit.SCHEMAS);
    };
    Xedit.BASE = '$xedit';
    Xedit.TOKEN = 'token';
    Xedit.API_URL = 'apiUrl';
    Xedit.ROUTER_MAPPER = 'routerMapper';
    Xedit.RESOURCE_URL = 'resourceUrl';
    Xedit.SCHEMAS = 'schemas';
    Xedit.LANG = 'lang';
    Xedit.NOTIFICATION_DEFAULT_SETTINGS = {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true
    };
    return Xedit;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    debug: true
};
function log(type, message) {
    if (environment.debug) {
        if (typeof console[type] === 'function') {
            type = 'log';
        }
        console[type](message);
    }
}


/***/ }),

/***/ "./src/lib/images/components/cropperjs/cropperjs.component.html":
/*!**********************************************************************!*\
  !*** ./src/lib/images/components/cropperjs/cropperjs.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cropper\" [ngStyle]=\"containerSize\">\n    <!-- prevent-collapsed -->\n    <img #image id=\"image\" [src]=\"src\" (load)=\"loadCropper()\" />\n</div>\n<div class=\"toolbar\">\n    <button class=\"actions\" (click)=\"zoomImage(true)\" title=\"Zoom in image\">\n        <fa-icon [icon]=\"icon.zoomin\"></fa-icon>\n    </button>\n    <button class=\"actions\" (click)=\"zoomImage(false)\" title=\"Zoom out image\">\n        <fa-icon [icon]=\"icon.zoomout\"></fa-icon>\n    </button>\n    <span class=\"separator\"></span>\n    <button class=\"actions\" (click)=\"reset()\" title=\"Reset image\"><fa-icon [icon]=\"icon.reset\"></fa-icon></button>\n    <button class=\"actions\" (click)=\"cover()\" title=\"Cover image\"><fa-icon [icon]=\"icon.cover\"></fa-icon></button>\n    <button class=\"actions\" (click)=\"contain()\" title=\"Contain image\"><fa-icon [icon]=\"icon.contain\"></fa-icon></button>\n    <span class=\"separator\"></span>\n    <button class=\"actions\" (click)=\"align(ALIGN_LEFT)\" title=\"Left image\">\n        <fa-icon [icon]=\"icon.left\"></fa-icon>\n    </button>\n    <button class=\"actions\" (click)=\"align(ALIGN_CENTER)\" title=\"Center image\">\n        <fa-icon [icon]=\"icon.center\"></fa-icon>\n    </button>\n    <button class=\"actions\" (click)=\"align(ALIGN_RIGHT)\" title=\"Right image\">\n        <fa-icon [icon]=\"icon.right\"></fa-icon>\n    </button>\n</div>\n"

/***/ }),

/***/ "./src/lib/images/components/cropperjs/cropperjs.component.scss":
/*!**********************************************************************!*\
  !*** ./src/lib/images/components/cropperjs/cropperjs.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  min-height: 80px;\n  align-items: center; }\n  :host .cropper img {\n    max-width: 100%;\n    max-height: 100%; }\n  :host .toolbar {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    margin: 5px 5px; }\n  :host .toolbar > .separator {\n      min-height: 27px;\n      height: 27px;\n      max-height: 27px;\n      width: 1px;\n      background-color: #dddddd;\n      margin: 0 5px; }\n  :host .toolbar > .actions {\n      min-height: 27px;\n      height: 27px;\n      max-height: 27px;\n      margin: 0 2px;\n      padding: 5px 10px;\n      border: none;\n      border-radius: 2px;\n      background-color: #dddddd;\n      color: #5c5c5c;\n      transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out; }\n  :host .toolbar > .actions:hover {\n        background-color: #9e9e9e;\n        color: #ffffff; }\n  :host .toolbar > .actions:focus {\n        outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdG92YXIvZGV2ZWxvcC93ZWIveGVkaXQvc3JjL2xpYi9pbWFnZXMvY29tcG9uZW50cy9jcm9wcGVyanMvY3JvcHBlcmpzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2F0b3Zhci9kZXZlbG9wL3dlYi94ZWRpdC9zcmMvbGliL2ltYWdlcy9zY3NzL3ZhcmlhYmxlcy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7RUFQdkI7SUFXWSxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7RUFaNUI7SUFpQlEsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZSxFQUFBO0VBcEJ2QjtNQXVCWSxnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixVQUFVO01BQ1YseUJDcEJrQjtNRHFCbEIsYUFBYSxFQUFBO0VBNUJ6QjtNQWdDWSxnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixhQUFhO01BQ2IsaUJBQWlCO01BQ2pCLFlBQVk7TUFDWixrQkFBa0I7TUFFbEIseUJDdENZO01EdUNaLGNDckNpQjtNRHVDakIscUVBQXFFLEVBQUE7RUEzQ2pGO1FBOENnQix5QkMzQ087UUQ0Q1AsY0MxQ1ksRUFBQTtFREw1QjtRQW1EZ0IsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9saWIvaW1hZ2VzL2NvbXBvbmVudHMvY3JvcHBlcmpzL2Nyb3BwZXJqcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBAaW1wb3J0ICcuLi8uLi9zY3NzL3ZhcmlhYmxlcy9jb2xvcnMnO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuY3JvcHBlciB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRvb2xiYXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIG1hcmdpbjogNXB4IDVweDtcblxuICAgICAgICA+IC5zZXBhcmF0b3Ige1xuICAgICAgICAgICAgbWluLWhlaWdodDogMjdweDtcbiAgICAgICAgICAgIGhlaWdodDogMjdweDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI3cHg7XG4gICAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlcGFyYXRvcl9tYWluX2NvbG9yO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgID4gLmFjdGlvbnMge1xuICAgICAgICAgICAgbWluLWhlaWdodDogMjdweDtcbiAgICAgICAgICAgIGhlaWdodDogMjdweDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI3cHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgMnB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG5cbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRidG5fbWFpbl9jb2xvcjtcbiAgICAgICAgICAgIGNvbG9yOiAkYnRuX21haW5fZm9udF9jb2xvcjtcblxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0LCBjb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnRuX2FsdF9jb2xvcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJ0bl9hbHRfZm9udF9jb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIiRtYWluX2NvbG9yOiAjMDAwICFkZWZhdWx0O1xuXG4kYnRuX21haW5fY29sb3I6ICNkZGRkZGQgIWRlZmF1bHQ7XG4kYnRuX2FsdF9jb2xvcjogIzllOWU5ZSAhZGVmYXVsdDtcbiRidG5fbWFpbl9mb250X2NvbG9yOiAjNWM1YzVjICFkZWZhdWx0O1xuJGJ0bl9hbHRfZm9udF9jb2xvcjogI2ZmZmZmZiAhZGVmYXVsdDtcblxuJHNlcGFyYXRvcl9tYWluX2NvbG9yOiAjZGRkZGRkICFkZWZhdWx0O1xuIl19 */"

/***/ }),

/***/ "./src/lib/images/components/cropperjs/cropperjs.component.ts":
/*!********************************************************************!*\
  !*** ./src/lib/images/components/cropperjs/cropperjs.component.ts ***!
  \********************************************************************/
/*! exports provided: CropperjsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropperjsComponent", function() { return CropperjsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cropperjs */ "./node_modules/cropperjs/dist/cropper.js");
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cropperjs__WEBPACK_IMPORTED_MODULE_3__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CropperjsComponent = /** @class */ (function () {
    function CropperjsComponent() {
        this.options = {};
        this.canvasData = null;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.icon = {
            contain: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCompress"],
            cover: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faExpand"],
            reset: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSync"],
            left: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faAlignLeft"],
            center: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faAlignCenter"],
            right: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faAlignRight"],
            zoomin: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSearchPlus"],
            zoomout: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSearchMinus"]
        };
        this.canvasZoom = 0;
        this.reload = false;
        this.zoom = {
            marker: true,
            counter: 0,
            counter1: 0
        };
        this.ALIGN_CENTER = 1;
        this.ALIGN_LEFT = 0;
        this.ALIGN_RIGHT = 2;
    }
    CropperjsComponent.prototype.ngOnChanges = function (_a) {
        var src = _a.src;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(src) && !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["empty"])(src.currentValue) && src.currentValue !== src.previousValue) {
            this.reload = true;
        }
    };
    CropperjsComponent.prototype.loadCropper = function () {
        var _this = this;
        if (!this.reload) {
            return;
        }
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(this.src)) {
            throw new Error('Image must be a string and "null" recive');
        }
        var image = this.getImage();
        if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(this.cropperjs)) {
            this.cropperjs = new cropperjs__WEBPACK_IMPORTED_MODULE_3___default.a(image, this.cropperOptions());
            image.addEventListener('cropend', function () {
                _this.change.emit(_this.cropperjs.getCanvasData());
            });
            image.addEventListener('zoom', function (evt) {
                _this.zoom.counter += 1;
                if (_this.zoom.marker) {
                    _this.zoom.marker = false;
                    _this.zoomAct();
                }
            });
            image.addEventListener('ready', function (evt) {
                if (_this.canvasData) {
                    _this.cropperjs.setCanvasData(_this.canvasData);
                }
            });
        }
        else {
            this.cropperjs.replace(this.src);
        }
        if (this.cropbox) {
            this.cropperjs.setCropBoxData(this.cropbox);
        }
        this.reload = false;
    };
    CropperjsComponent.prototype.hasImage = function () {
        return !Object(ramda__WEBPACK_IMPORTED_MODULE_1__["isNil"])(this.src);
    };
    CropperjsComponent.prototype.getImage = function () {
        return this.image.nativeElement;
    };
    CropperjsComponent.prototype.reset = function () {
        var width = this.image.nativeElement.width;
        var height = this.image.nativeElement.height;
        var canvas = __assign({}, this.canvasData, { width: width, height: height, left: 0, top: 0 });
        this.cropperjs.setCanvasData(canvas);
        this.change.emit(this.cropperjs.getCanvasData());
    };
    CropperjsComponent.prototype.cover = function () {
        this.calculateImageWith(true);
    };
    CropperjsComponent.prototype.contain = function () {
        this.calculateImageWith();
    };
    CropperjsComponent.prototype.align = function (type) {
        var canvas = this.cropperjs.getCanvasData();
        var _a = this.containerSize, coWidth = _a.width, coHeight = _a.height;
        coWidth = typeof coWidth === 'string' ? Number(coWidth.replace('px', '')) : coWidth;
        coHeight = typeof coHeight === 'string' ? Number(coHeight.replace('px', '')) : coHeight;
        var width = canvas.width, height = canvas.height;
        var left = 0;
        var top = coHeight / 2 - height / 2;
        if (type === this.ALIGN_CENTER) {
            left = coWidth / 2 - width / 2;
        }
        else if (type === this.ALIGN_RIGHT) {
            left = coWidth - width;
        }
        this.cropperjs.setCanvasData({ width: width, height: height, left: left, top: top });
        this.change.emit(this.cropperjs.getCanvasData());
    };
    CropperjsComponent.prototype.zoomImage = function (zoomin) {
        if (zoomin === void 0) { zoomin = true; }
        var amount = 0.1;
        if (!zoomin) {
            amount *= -1;
        }
        this.cropperjs.zoom(amount);
    };
    CropperjsComponent.prototype.calculateImageWith = function (isCover) {
        if (isCover === void 0) { isCover = false; }
        var width = this.image.nativeElement.width;
        var height = this.image.nativeElement.height;
        var _a = this.containerSize, coWidth = _a.width, coHeight = _a.height;
        coWidth = typeof coWidth === 'string' ? Number(coWidth.replace('px', '')) : coWidth;
        coHeight = typeof coHeight === 'string' ? Number(coHeight.replace('px', '')) : coHeight;
        var ap = width / coWidth / (height / coHeight);
        var newWidth = coWidth;
        if (isCover ? ap > 1 : ap < 1) {
            var coe = height / coHeight;
            newWidth = width / coe;
        }
        var canvas = __assign({}, this.canvasData, { width: newWidth, left: 0, top: 0 });
        this.cropperjs.setCanvasData(canvas);
        this.change.emit(this.cropperjs.getCanvasData());
    };
    CropperjsComponent.prototype.cropperOptions = function () {
        var aspectRatio = NaN;
        var defaults = {
            aspectRatio: aspectRatio,
            movable: false,
            scalable: false,
            zoomable: false,
            viewMode: 1,
            checkCrossOrigin: true,
            background: true
        };
        return __assign({}, defaults, this.options);
    };
    CropperjsComponent.prototype.zoomAct = function () {
        var _this = this;
        this.zoom.counter1 = this.zoom.counter;
        setTimeout(function () {
            if (_this.zoom.counter === _this.zoom.counter1) {
                _this.zoom.counter = 0;
                _this.zoom.counter = 1;
                _this.zoom.marker = true;
                _this.change.emit(_this.cropperjs.getCanvasData());
            }
            else {
                _this.zoomAct();
            }
        }, 150);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('image'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CropperjsComponent.prototype, "image", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CropperjsComponent.prototype, "src", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CropperjsComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CropperjsComponent.prototype, "cropbox", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CropperjsComponent.prototype, "containerSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CropperjsComponent.prototype, "canvasData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CropperjsComponent.prototype, "change", void 0);
    CropperjsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cropperjs',
            template: __webpack_require__(/*! ./cropperjs.component.html */ "./src/lib/images/components/cropperjs/cropperjs.component.html"),
            styles: [__webpack_require__(/*! ./cropperjs.component.scss */ "./src/lib/images/components/cropperjs/cropperjs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CropperjsComponent);
    return CropperjsComponent;
}());



/***/ }),

/***/ "./src/lib/images/components/edit-image/edit-image.component.html":
/*!************************************************************************!*\
  !*** ./src/lib/images/components/edit-image/edit-image.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside [ngStyle]=\"style\">\n    <cropperjs\n        #image\n        [src]=\"src\"\n        [options]=\"cropperOptions()\"\n        [containerSize]=\"container\"\n        [cropbox]=\"cropbox\"\n        [canvasData]=\"cropData\"\n        (change)=\"imageSettings($event)\"\n    ></cropperjs>\n</aside>\n"

/***/ }),

/***/ "./src/lib/images/components/edit-image/edit-image.component.scss":
/*!************************************************************************!*\
  !*** ./src/lib/images/components/edit-image/edit-image.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbGliL2ltYWdlcy9jb21wb25lbnRzL2VkaXQtaW1hZ2UvZWRpdC1pbWFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/lib/images/components/edit-image/edit-image.component.ts":
/*!**********************************************************************!*\
  !*** ./src/lib/images/components/edit-image/edit-image.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditImageComponent", function() { return EditImageComponent; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cropperjs_cropperjs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cropperjs/cropperjs.component */ "./src/lib/images/components/cropperjs/cropperjs.component.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditImageComponent = /** @class */ (function () {
    function EditImageComponent() {
        this.style = null;
        this.cropData = null;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.reload = false;
        this.cropbox = null;
        this.config = {
            viewMode: 1,
            dragMode: 'move',
            checkCrossOrigin: false,
            checkOrientation: false,
            guides: false,
            center: true,
            movable: true,
            rotatable: true,
            zoomable: true,
            highlight: false,
            autoCrop: false,
            cropBoxMovable: false,
            cropBoxResizable: false,
            toggleDragModeOnDblclick: false
        };
    }
    Object.defineProperty(EditImageComponent.prototype, "container", {
        get: function () {
            return this.cropperSettings().size;
        },
        enumerable: true,
        configurable: true
    });
    EditImageComponent.prototype.ngOnChanges = function (_a) {
        var src = _a.src;
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(src) && src.previousValue !== src.currentValue) {
            this.cropbox = this.cropperSettings().cropbox;
        }
    };
    EditImageComponent.prototype.cropperOptions = function () {
        var cropper = this.cropperSettings();
        return __assign({}, this.config, { minCropBoxWidth: cropper.size.width, minCropBoxHeight: cropper.size.height });
    };
    EditImageComponent.prototype.cropperSettings = function () {
        var size = {
            width: '400px',
            height: '400px'
        };
        if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(this.style)) {
            var _a = this.style, width = _a.width, height = _a.height;
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(width)) {
                size.width = width + ((typeof width === 'string' && !width.indexOf('px') || typeof width === 'number') ? 'px' : '');
            }
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(height)) {
                size.height = height + ((typeof height === 'string' && !height.indexOf('px') || typeof height === 'number') ? 'px' : '');
            }
        }
        var cropbox = {
            left: 0,
            top: 0,
            width: parseInt(size.width),
            height: parseInt(size.height)
        };
        return {
            size: size,
            cropbox: cropbox
        };
    };
    EditImageComponent.prototype.imageSettings = function (evt) {
        this.change.emit(evt);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], EditImageComponent.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], EditImageComponent.prototype, "src", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], EditImageComponent.prototype, "cropData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('image'),
        __metadata("design:type", _cropperjs_cropperjs_component__WEBPACK_IMPORTED_MODULE_2__["CropperjsComponent"])
    ], EditImageComponent.prototype, "image", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], EditImageComponent.prototype, "change", void 0);
    EditImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'edit-image',
            template: __webpack_require__(/*! ./edit-image.component.html */ "./src/lib/images/components/edit-image/edit-image.component.html"),
            styles: [__webpack_require__(/*! ./edit-image.component.scss */ "./src/lib/images/components/edit-image/edit-image.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EditImageComponent);
    return EditImageComponent;
}());



/***/ }),

/***/ "./src/lib/images/images.module.ts":
/*!*****************************************!*\
  !*** ./src/lib/images/images.module.ts ***!
  \*****************************************/
/*! exports provided: ImagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesModule", function() { return ImagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_edit_image_edit_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/edit-image/edit-image.component */ "./src/lib/images/components/edit-image/edit-image.component.ts");
/* harmony import */ var angular_cropperjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-cropperjs */ "./node_modules/angular-cropperjs/fesm5/angular-cropperjs.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _components_cropperjs_cropperjs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cropperjs/cropperjs.component */ "./src/lib/images/components/cropperjs/cropperjs.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ImagesModule = /** @class */ (function () {
    function ImagesModule() {
    }
    ImagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], angular_cropperjs__WEBPACK_IMPORTED_MODULE_3__["AngularCropperjsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]],
            declarations: [_components_edit_image_edit_image_component__WEBPACK_IMPORTED_MODULE_2__["EditImageComponent"], _components_cropperjs_cropperjs_component__WEBPACK_IMPORTED_MODULE_5__["CropperjsComponent"]],
            exports: [_components_edit_image_edit_image_component__WEBPACK_IMPORTED_MODULE_2__["EditImageComponent"], _components_cropperjs_cropperjs_component__WEBPACK_IMPORTED_MODULE_5__["CropperjsComponent"]]
        })
    ], ImagesModule);
    return ImagesModule;
}());



/***/ }),

/***/ "./src/lib/images/index.ts":
/*!*********************************!*\
  !*** ./src/lib/images/index.ts ***!
  \*********************************/
/*! exports provided: ImagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images.module */ "./src/lib/images/images.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImagesModule", function() { return _images_module__WEBPACK_IMPORTED_MODULE_0__["ImagesModule"]; });





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

/***/ "./src/utils/converters.ts":
/*!*********************************!*\
  !*** ./src/utils/converters.ts ***!
  \*********************************/
/*! exports provided: Converters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Converters", function() { return Converters; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/schema/xedit-mapper */ "./src/app/models/schema/xedit-mapper.ts");
/* harmony import */ var _utils_htmlparser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/htmlparser */ "./src/utils/htmlparser.js");
/* harmony import */ var _utils_htmlparser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_htmlparser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/api */ "./src/app/api.ts");
/* harmony import */ var _app_core_mappers_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/core/mappers/router */ "./src/app/core/mappers/router.ts");
/* harmony import */ var _app_xedit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/xedit */ "./src/app/xedit.ts");








var Converters = /** @class */ (function () {
    function Converters() {
    }
    Converters.removeDOCTYPE = function (html) {
        return html
            .replace(/<\?xml.*\?>\n/, '')
            .replace(/<!doctype.*\>\n/, '')
            .replace(/<!DOCTYPE.*\>\n/, '');
    };
    /**
     * Added root wrap to json
     */
    Converters.addWrapJson = function (json) {
        return {
            node: 'root',
            child: json
        };
    };
    /**
     * Parse html to json
     *
     * @param html String with html
     * @param hasRootTag If true then root tag will be added
     */
    Converters.html2json = function (html, hasRootTag) {
        if (hasRootTag === void 0) { hasRootTag = true; }
        html = Converters.removeDOCTYPE(html);
        var bufArray = [];
        var results = {
            node: 'root',
            child: {}
        };
        Object(_utils_htmlparser__WEBPACK_IMPORTED_MODULE_3__["HTMLParser"])(html, {
            start: function (tag, uuid, attrs, unary) {
                // node for this element
                var node = {
                    node: 'element',
                    tag: tag,
                    uuid: Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(uuid) ? angular2_uuid__WEBPACK_IMPORTED_MODULE_1__["UUID"].UUID() : uuid,
                    attr: null
                };
                if (attrs.length !== 0) {
                    node.attr = attrs
                        // filter xe_* attributes except if its are required
                        .filter(function (attr) { return Converters.filter(attr.name, attrs); })
                        .reduce(function (pre, attr) {
                        var name = attr.name;
                        var value = attr.value;
                        // has multi attibutes
                        // make it array of attribute
                        if (value.match(/ /)) {
                            value = value.split(' ');
                        }
                        // if attr already exists
                        // merge it
                        if (pre[name]) {
                            if (Array.isArray(pre[name])) {
                                // already array, push to last
                                pre[name].push(value);
                            }
                            else {
                                // single value, make it array
                                pre[name] = [pre[name], value];
                            }
                        }
                        else {
                            // not exist, put it
                            pre[name] = value;
                        }
                        return pre;
                    }, {});
                }
                if (unary) {
                    // if this tag dosen't have end tag
                    // like <img src="hoge.png"/>
                    // add to parents
                    var parent_1 = bufArray[0] || results;
                    if (parent_1.child === undefined) {
                        parent_1.child = {};
                    }
                    parent_1.child[node.uuid] = node;
                }
                else {
                    bufArray.unshift(node);
                }
            },
            end: function (tag) {
                // merge into parent tag
                var node = bufArray.shift();
                if (node.tag !== tag) {
                    console.error('invalid state: mismatch end tag');
                }
                if (bufArray.length === 0) {
                    results.child[node.uuid] = node;
                }
                else {
                    var parent_2 = bufArray[0];
                    if (parent_2.child === undefined) {
                        parent_2.child = {};
                    }
                    parent_2.child[node.uuid] = node;
                }
            },
            chars: function (text) {
                var node = {
                    node: 'text',
                    text: text
                };
                if (bufArray.length === 0) {
                    results.child['text-0'] = node;
                }
                else {
                    var parent_3 = bufArray[0];
                    if (parent_3.child === undefined) {
                        parent_3.child = {};
                    }
                    parent_3.child['text-' + Object.keys(parent_3.child).length] = node;
                }
            },
            comment: function (text) {
                var node = {
                    node: 'comment',
                    text: text
                };
                var parent = bufArray[0];
                if (parent.child === undefined) {
                    parent.child = [];
                }
                parent.child['comment-' + Object.keys(parent.child).length] = node;
            }
        });
        return hasRootTag ? results : results.child;
    };
    /**
     * Filter attribute
     *
     * @param attr
     * @param attrs
     * @return true if the attribute is valid, otherwise the attribute should be filter
     */
    Converters.filter = function (attr, attrs) {
        return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["contains"])(attr, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].requiredXeditAttributes) ||
            (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(attr.match('xe_')) && Converters.filterAttribute(attr, attrs))
            ? true
            : false;
    };
    /**
     * Filter attribute if attrs has a `xe_` attribute and attr exist in a filter_attribute
     * @param attr
     * @param attrs [{name:value},{name2:value2}]  || [name, name2]
     *
     * @return true if the attribute is valid, otherwise the attribute should be filter
     */
    Converters.filterAttribute = function (attr, attrs) {
        attrs = Object(util__WEBPACK_IMPORTED_MODULE_4__["isArray"])(attrs) ? attrs : Object.keys(attrs);
        var xeditAttribute = attrs.reduce(function (acc, value) {
            var val = typeof value === 'string' ? value : value.name;
            return Object(ramda__WEBPACK_IMPORTED_MODULE_0__["contains"])(val, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].requiredXeditAttributes) ? val : acc;
        }, null);
        var settings = !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(xeditAttribute) &&
            Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(xeditAttribute, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].ATTRIBUTES) &&
            Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('filter_attributes', _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].ATTRIBUTES[xeditAttribute])
            ? _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].ATTRIBUTES[xeditAttribute]['filter_attributes']
            : [];
        return !Object(ramda__WEBPACK_IMPORTED_MODULE_0__["contains"])(attr, settings);
    };
    /**
     * Convert json to html
     *
     * @param json Json object with content
     * @param showIds If true added attribute id in tags
     */
    Converters.json2html = function (json, showIds, processXedit, resetIds, enableHover) {
        if (showIds === void 0) { showIds = true; }
        if (processXedit === void 0) { processXedit = true; }
        if (resetIds === void 0) { resetIds = false; }
        if (enableHover === void 0) { enableHover = true; }
        // Empty Elements - HTML 4.01
        var empty = [
            'area',
            'base',
            'basefont',
            'br',
            'col',
            'frame',
            'hr',
            'img',
            'input',
            'isindex',
            'link',
            'meta',
            'param',
            'embed'
        ];
        var child = '';
        if (json.child) {
            child = Object.keys(json.child)
                .map(function (uuid) {
                return Converters.json2html(json.child[uuid], showIds, processXedit, resetIds, enableHover);
            })
                .join('');
        }
        var attr = '';
        if (json.attr) {
            var tag_1 = json.tag;
            attr = Object.keys(json.attr)
                .filter(function (val) {
                return Converters.filter(val, json.attr);
            })
                .map(function (key) {
                var value = json.attr[key];
                if (Array.isArray(value)) {
                    value = value.join(' ');
                }
                return Converters.parseAttributes(key, value, processXedit, tag_1);
            })
                .join(' ');
            if (attr !== '') {
                attr = " " + attr;
            }
            if (!enableHover) {
                attr += _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].ATTR_HOVER + "=\"false\"";
            }
        }
        if (json.node === 'element') {
            var tag = json.tag;
            var uuid = resetIds ? angular2_uuid__WEBPACK_IMPORTED_MODULE_1__["UUID"].UUID() : json.uuid;
            uuid = showIds ? " " + _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].TAG_UUID + " = \"" + uuid + "\"" : '';
            if (empty.indexOf(tag) > -1) {
                // empty element
                return "<" + json.tag + " " + uuid + " " + attr + "/>";
            }
            // non empty element
            var open_1 = "<" + json.tag + " " + uuid + " " + attr + ">";
            var close_1 = "</" + json.tag + ">";
            return open_1 + child + close_1;
        }
        else if (json.node === 'text') {
            return json.text;
        }
        else if (json.node === 'comment') {
            return "<!-- " + json.text + " -->";
        }
        else if (json.node === 'root') {
            return child;
        }
    };
    Converters.json2xedit = function (nodeName, json, modulesService, compData, showIds, processXedit, resetIds, enableHover) {
        if (showIds === void 0) { showIds = true; }
        if (processXedit === void 0) { processXedit = true; }
        if (resetIds === void 0) { resetIds = false; }
        if (enableHover === void 0) { enableHover = true; }
        // Empty Elements - HTML 4.01
        var empty = [
            'area',
            'base',
            'basefont',
            'br',
            'col',
            'frame',
            'hr',
            'img',
            'input',
            'isindex',
            'link',
            'meta',
            'param',
            'embed'
        ];
        var child = '';
        if (json.child) {
            child = Object.keys(json.child)
                .map(function (uuid) {
                return Converters.json2xedit(nodeName, json.child[uuid], modulesService, compData, showIds, processXedit, resetIds, enableHover);
            })
                .join('');
        }
        if (json.node === 'element') {
            var attr_1 = json.attr, tag_2 = json.tag;
            var uuid = json.uuid;
            var attrString = '';
            var section = null;
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(attr_1)) {
                if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])('xe_section', attr_1)) {
                    section = attr_1['xe_section'];
                }
                attrString = Object.keys(attr_1)
                    .filter(function (val) {
                    return Converters.filter(val, attr_1);
                })
                    .map(function (key) {
                    var value = attr_1[key];
                    if (Array.isArray(value)) {
                        value = value.join(' ');
                    }
                    return Converters.parseAttributes(key, value, processXedit, tag_2);
                })
                    .join(' ');
            }
            uuid = resetIds ? angular2_uuid__WEBPACK_IMPORTED_MODULE_1__["UUID"].UUID() : uuid;
            var uuidStr = showIds ? " " + _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].TAG_UUID + "=\"" + uuid + "\"" : '';
            var moduleTag = null;
            var module_1 = null;
            var schema = null;
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(section)) {
                schema = _app_xedit__WEBPACK_IMPORTED_MODULE_7__["Xedit"].getConf('schemas')[nodeName];
                module_1 = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(section, schema) ? schema[section].type : null;
                if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(module_1)) {
                    moduleTag = modulesService.getModuleTag(module_1);
                    module_1 = modulesService.getModule(module_1);
                }
            }
            if (empty.indexOf(tag_2) > -1) {
                // empty element
                return "<" + tag_2 + " " + uuidStr + " " + attrString + ">";
            }
            var result = "<" + tag_2 + " " + uuidStr + " " + attrString + ">" + child + "</" + tag_2 + ">";
            if (!Object(ramda__WEBPACK_IMPORTED_MODULE_0__["isNil"])(moduleTag)) {
                var settings = {
                    options: schema[section].options,
                    actions: schema[section].actions
                };
                var data = {
                    html: result,
                    uuid: uuid,
                    settings: settings
                };
                compData[uuid] = data;
                var openTag = "\n                        <" + moduleTag + "\n                            " + (!module_1.hasSlot ? attrString : '') + "\n                            [content]=\"data['" + uuid + "']\"\n                            [selected]=\"selected\"\n                            (selectNode)=\"changeSelection($event)\"\n                            (change)=\"changeContent($event)\"\n                            (toolbar)=\"changeToolbar($event)\"\n                        >";
                var closeTag = "</" + moduleTag + ">";
                if (!module_1.hasSlot) {
                    result = openTag + closeTag;
                }
                else {
                    delete data.html;
                    result = openTag + result + closeTag;
                }
            }
            return result;
        }
        else if (json.node === 'root') {
            return child;
        }
        else {
            return json.text;
        }
    };
    Converters.parseAttributes = function (key, value, processXedit, tag) {
        if (tag === void 0) { tag = 'a'; }
        var extraData = '';
        var linkType = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["hasIn"])(tag, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].LINK_TYPES) ? _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].LINK_TYPES[tag] : 'href';
        if (processXedit && Object(ramda__WEBPACK_IMPORTED_MODULE_0__["contains"])(key, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].requiredXeditAttributes)) {
            if (Object(ramda__WEBPACK_IMPORTED_MODULE_0__["equals"])(key, _models_schema_xedit_mapper__WEBPACK_IMPORTED_MODULE_2__["XeditMapper"].TAG_LINK)) {
                extraData = value;
                if (!/^(f|ht)tps?:\/\//i.test(extraData)) {
                    extraData = _app_core_mappers_router__WEBPACK_IMPORTED_MODULE_6__["default"].configUrl(_app_api__WEBPACK_IMPORTED_MODULE_5__["Api"].getResourceUrl(), { id: value });
                }
                extraData = linkType + "=\"" + extraData + "\"";
            }
        }
        return key + "=\"" + value + "\" " + extraData;
    };
    return Converters;
}());



/***/ }),

/***/ "./src/utils/htmlparser.js":
/*!*********************************!*\
  !*** ./src/utils/htmlparser.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * HTML5 Parser By Sam Blowes
 *
 * Designed for HTML5 documents
 *
 * Original code by John Resig (ejohn.org)
 * http://ejohn.org/blog/pure-javascript-html-parser/
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 *
 * ----------------------------------------------------------------------------
 * License
 * ----------------------------------------------------------------------------
 *
 * This code is triple licensed using Apache Software License 2.0,
 * Mozilla Public License or GNU Public License
 * 
 * ////////////////////////////////////////////////////////////////////////////
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License.  You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 * 
 * ////////////////////////////////////////////////////////////////////////////
 * 
 * The contents of this file are subject to the Mozilla Public License
 * Version 1.1 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 * 
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific language governing rights and limitations
 * under the License.
 * 
 * The Original Code is Simple HTML Parser.
 * 
 * The Initial Developer of the Original Code is Erik Arvidsson.
 * Portions created by Erik Arvidssson are Copyright (C) 2004. All Rights
 * Reserved.
 * 
 * ////////////////////////////////////////////////////////////////////////////
 * 
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 *
 * ----------------------------------------------------------------------------
 * Usage
 * ----------------------------------------------------------------------------
 *
 * // Use like so:
 * HTMLParser(htmlString, {
 *     start: function(tag, attrs, unary) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * });
 *
 * // or to get an XML string:
 * HTMLtoXML(htmlString);
 *
 * // or to get an XML DOM Document
 * HTMLtoDOM(htmlString);
 *
 * // or to inject into an existing document/DOM node
 * HTMLtoDOM(htmlString, document);
 * HTMLtoDOM(htmlString, document.body);
 *
 */

(function (global) {

    // Regular Expressions for parsing tags and attributes
    var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
        endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
        attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;

    // Empty Elements - HTML 5
    var empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr");

    // Block Elements - HTML 5
    var block = makeMap("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video");

    // Inline Elements - HTML 5
    var inline = makeMap("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");

    // Elements that you can, intentionally, leave open
    // (and which close themselves)
    var closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

    // Attributes that have their values filled in disabled="disabled"
    var fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");

    // Special Elements (can contain anything)
    var special = makeMap("script,style");

    global.HTMLParser = this.HTMLParser = function (html, handler) {
        var index, chars, match, stack = [], last = html;
        stack.last = function () {
            return this[this.length - 1];
        };

        while (html) {
            chars = true;

            // Make sure we're not in a script or style element
            if (!stack.last() || !special[stack.last()]) {

                // Comment
                if (html.indexOf("<!--") == 0) {
                    index = html.indexOf("-->");

                    if (index >= 0) {
                        if (handler.comment)
                            handler.comment(html.substring(4, index));
                        html = html.substring(index + 3);
                        chars = false;
                    }

                    // end tag
                } else if (html.indexOf("</") == 0) {
                    match = html.match(endTag);

                    if (match) {
                        html = html.substring(match[0].length);
                        match[0].replace(endTag, parseEndTag);
                        chars = false;
                    }

                    // start tag
                } else if (html.indexOf("<") == 0) {
                    match = html.match(startTag);

                    if (match) {
                        html = html.substring(match[0].length);
                        match[0].replace(startTag, parseStartTag);
                        chars = false;
                    }
                }

                if (chars) {
                    index = html.indexOf("<");

                    var text = index < 0 ? html : html.substring(0, index);
                    html = index < 0 ? "" : html.substring(index);

                    if (handler.chars)
                        handler.chars(text);
                }

            } else {
                html = html.replace(new RegExp("([\\s\\S]*?)<\/" + stack.last() + "[^>]*>"), function (all, text) {
                    text = text.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, "$1$2");
                    if (handler.chars)
                        handler.chars(text);

                    return "";
                });

                parseEndTag("", stack.last());
            }

            if (html == last)
                throw "Parse Error: " + html;
            last = html;
        }

        // Clean up any remaining tags
        parseEndTag();

        function parseStartTag(tag, tagName, rest, unary) {
            tagName = tagName.toLowerCase();

            if (block[tagName]) {
                while (stack.last() && inline[stack.last()]) {
                    parseEndTag("", stack.last());
                }
            }

            if (closeSelf[tagName] && stack.last() == tagName) {
                parseEndTag("", tagName);
            }

            unary = empty[tagName] || !!unary;

            if (!unary)
                stack.push(tagName);

            if (handler.start) {
                var uuid = null;
                var attrs = [];

                rest.replace(attr, function (match, name) {
                    var value = arguments[2] ? arguments[2] :
                        arguments[3] ? arguments[3] :
                            arguments[4] ? arguments[4] :
                                fillAttrs[name] ? name : "";
                    if (name != 'xe_uuid')
                        attrs.push({
                            name: name,
                            value: value,
                            escaped: value.replace(/(^|[^\\])"/g, '$1\\\"') //"
                        });
                    else
                        uuid = value
                });

                if (handler.start)
                    handler.start(tagName, uuid, attrs, unary);
            }
        }

        function parseEndTag(tag, tagName) {
            // If no tag name is provided, clean shop
            if (!tagName)
                var pos = 0;

            // Find the closest opened tag of the same type
            else
                for (var pos = stack.length - 1; pos >= 0; pos--)
                    if (stack[pos] == tagName)
                        break;

            if (pos >= 0) {
                // Close all the open elements, up the stack
                for (var i = stack.length - 1; i >= pos; i--)
                    if (handler.end)
                        handler.end(stack[i]);

                // Remove the open elements from the stack
                stack.length = pos;
            }
        }
    };

    this.HTMLtoXML = function (html) {
        var results = "";

        HTMLParser(html, {
            start: function (tag, attrs, unary) {
                results += "<" + tag;

                for (var i = 0; i < attrs.length; i++)
                    results += " " + attrs[i].name + '="' + attrs[i].escaped + '"';
                results += ">";
            },
            end: function (tag) {
                results += "</" + tag + ">";
            },
            chars: function (text) {
                results += text;
            },
            comment: function (text) {
                results += "<!--" + text + "-->";
            }
        });

        return results;
    };

    this.HTMLtoDOM = function (html, doc) {
        // There can be only one of these elements
        var one = makeMap("html,head,body,title");

        // Enforce a structure for the document
        var structure = {
            link: "head",
            base: "head"
        };

        if (!doc) {
            if (typeof DOMDocument != "undefined")
                doc = new DOMDocument();
            else if (typeof document != "undefined" && document.implementation && document.implementation.createDocument)
                doc = document.implementation.createDocument("", "", null);
            else if (typeof ActiveX != "undefined")
                doc = new ActiveXObject("Msxml.DOMDocument");

        } else
            doc = doc.ownerDocument ||
                doc.getOwnerDocument && doc.getOwnerDocument() ||
                doc;

        var elems = [],
            documentElement = doc.documentElement ||
                doc.getDocumentElement && doc.getDocumentElement();

        // If we're dealing with an empty document then we
        // need to pre-populate it with the HTML document structure
        if (!documentElement && doc.createElement) (function () {
            var html = doc.createElement("html");
            var head = doc.createElement("head");
            head.appendChild(doc.createElement("title"));
            html.appendChild(head);
            html.appendChild(doc.createElement("body"));
            doc.appendChild(html);
        })();

        // Find all the unique elements
        if (doc.getElementsByTagName)
            for (var i in one)
                one[i] = doc.getElementsByTagName(i)[0];

        // If we're working with a document, inject contents into
        // the body element
        var curParentNode = one.body;

        HTMLParser(html, {
            start: function (tagName, attrs, unary) {
                // If it's a pre-built element, then we can ignore
                // its construction
                if (one[tagName]) {
                    curParentNode = one[tagName];
                    if (!unary) {
                        elems.push(curParentNode);
                    }
                    return;
                }

                var elem = doc.createElement(tagName);

                for (var attr in attrs)
                    elem.setAttribute(attrs[attr].name, attrs[attr].value);

                if (structure[tagName] && typeof one[structure[tagName]] != "boolean")
                    one[structure[tagName]].appendChild(elem);

                else if (curParentNode && curParentNode.appendChild)
                    curParentNode.appendChild(elem);

                if (!unary) {
                    elems.push(elem);
                    curParentNode = elem;
                }
            },
            end: function (tag) {
                elems.length -= 1;

                // Init the new parentNode
                curParentNode = elems[elems.length - 1];
            },
            chars: function (text) {
                curParentNode.appendChild(doc.createTextNode(text));
            },
            comment: function (text) {
                // create comment node
            }
        });

        return doc;
    };

    function makeMap(str) {
        var obj = {}, items = str.split(",");
        for (var i = 0; i < items.length; i++)
            obj[items[i]] = true;
        return obj;
    }

})(this);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/atovar/develop/web/xedit/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************************!*\
  !*** supports-color (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!***********************!*\
  !*** chalk (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**************************************!*\
  !*** ./terminal-highlight (ignored) ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map