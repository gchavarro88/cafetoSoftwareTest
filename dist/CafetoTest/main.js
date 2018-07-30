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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Define variables for all app*/\nbody {\n  font: 100% Arial, Helvetica, sans-serif;\n  color: #283149;\n  background-color: #283149;\n}\n/* Functions */\n::-webkit-scrollbar {\n  width: 10px;\n}\n::-webkit-scrollbar-track {\n  background: #dbedf3;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #00818a;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #283149;\n}\n/* Container for flexboxes */\n* {\n  box-sizing: border-box;\n}\nsection {\n  display: flex;\n}\napp-content {\n  width: 70%;\n  height: auto;\n}\napp-menu {\n  width: 30%;\n  height: inheritance;\n  padding: 5px;\n  background-color: #00818a;\n  color: #404b69;\n  border-right: 2px solid #283149;\n  height: auto;\n}\n/* Responsive layout - makes the menu and the content (inside the section) sit on top of each other instead of next to each other */\n@media (max-width: 650px) {\n  section {\n    flex-direction: column;\n  }\n\n  app-content {\n    width: 100%;\n  }\n\n  app-menu {\n    width: 100%;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=app.component.css.map */\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<section>\r\n  <app-menu></app-menu>\r\n  <app-content></app-content>\r\n</section>\r\n\r\n<app-footer></app-footer>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _languages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./languages */ "./src/app/languages.ts");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movie.service */ "./src/app/movie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//Services

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _languages__WEBPACK_IMPORTED_MODULE_8__["Languages"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [_movie_service__WEBPACK_IMPORTED_MODULE_9__["MovieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Define variables for all app*/\nbody {\n  font: 100% Arial, Helvetica, sans-serif;\n  color: #283149;\n  background-color: #283149;\n}\n/* Functions */\narticle > fieldset > legend {\n  font-family: \"Fredericka the Great\", cursive;\n  color: #404b69;\n  text-shadow: 1px 1px #000;\n  font-size: 28px;\n  vertical-align: text-top;\n  text-align: center;\n  font-weight: bold;\n}\n.descriptionTitle {\n  font-family: \"Righteous\", cursive;\n  color: #404b69;\n  text-shadow: 1px 1px white;\n  font-size: 16px;\n  vertical-align: text-top;\n  text-align: left;\n}\n#divDescription {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  color: #283149;\n  font-size: 14px;\n  vertical-align: text-top;\n  text-align: center;\n}\n::-webkit-scrollbar {\n  width: 10px;\n}\n::-webkit-scrollbar-track {\n  background: #dbedf3;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #00818a;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #283149;\n}\n/* Style the content */\narticle {\n  background-color: #00818a;\n  padding: 5px;\n  width: 99%;\n  text-align: center;\n  display: table;\n  justify-content: center;\n  align-items: center;\n}\n#mainDivContent {\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: -webkit-fill-available;\n  border-radius: 5px 10px 3px 7px;\n  display: table-cell;\n  vertical-align: middle;\n}\nfieldset {\n  border-color: #404b69;\n  border-radius: 5px 10px 3px 7px;\n}\n.descriptionContent {\n  width: auto;\n  padding-top: 5px;\n  border: 0px;\n  margin: 0px;\n  background-color: rgba(219, 237, 243, 0.6);\n}\n#divDescription {\n  border-radius: 5px 10px 3px 7px;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 5px;\n}\n.descriptionText {\n  margin-top: 0px;\n  flex: 49%;\n  max-width: 49%;\n  padding: 0 10px;\n  font-weight: bold;\n  text-align: justify;\n}\n.imageDescription {\n  max-height: 360px;\n  max-width: 200px;\n  padding-right: 3px;\n  text-align: center;\n  margin-top: 0px;\n  flex: 45%;\n  max-width: 45%;\n  padding: 0 10px;\n  border-radius: 25px 20px 26px 27px;\n}\n.imageDescription:hover {\n  -webkit-transform: scale(1.5);\n  transform: scale(1.5);\n  -moz-transform: scale(1.5);\n  -o-transform: scale(1.5);\n  box-shadow: 1px 1px 20px #FFF;\n}\n.spacingDescription {\n  width: 30px;\n}\n.imgDescriptonBox {\n  text-align: center;\n  margin-top: 0px;\n  flex: 49%;\n  max-width: 49%;\n  padding: 0 4px;\n}\n#genrerBox {\n  list-style-type: none;\n  margin: 0;\n  padding: 5px;\n  overflow: hidden;\n}\n#genrerBox li {\n  font-family: \"Fredericka the Great\", cursive;\n  font-weight: bold;\n  color: #00818a;\n  float: left;\n  font-size: 16px;\n  padding-right: 10px;\n  text-shadow: 1px 1px #283149;\n}\n#genrerBox li:hover {\n  text-shadow: 1px 1px #283149;\n  -webkit-transform: scale(1.5);\n  transform: scale(1.5);\n  -moz-transform: scale(1.5);\n  -o-transform: scale(1.5);\n}\n#genrerBox li:first-child {\n  color: #283149;\n  font-size: 16px;\n  text-shadow: 0 0 #283149;\n}\n#genrerBox li:first-child:hover {\n  text-shadow: 0px 0px #283149;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -moz-transform: scale(1);\n  -o-transform: scale(1);\n}\n.informationTitle {\n  font-family: \"Fredericka the Great\", cursive;\n  font-weight: bold;\n  font-size: 12px;\n}\n.companyLogo {\n  border-radius: 5px 10px 3px 7px;\n  text-align: center;\n  width: 100%;\n}\n.companyDescription {\n  margin-top: 0px;\n  flex: 100%;\n  max-width: 100%;\n  padding: 0 10px;\n  border-radius: 5px 10px 3px 7px;\n  text-align: justify;\n}\n.companyName {\n  color: #283149;\n  font-size: 14px;\n  font-weight: bold;\n}\n.companyNameDescription {\n  font-family: \"Fredericka the Great\", cursive;\n  font-weight: bold;\n  color: #00818a;\n  font-size: 14px;\n  text-shadow: 1px 1px #283149;\n}\n.companyDescription img {\n  max-width: 120px;\n  max-height: 250px;\n}\n.offer {\n  font-family: \"Righteous\", cursive;\n  color: #283149;\n  text-align: center;\n  font-size: 38px;\n}\n/*# sourceMappingURL=content.component.css.map */\n"

/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article>\r\n   \t<fieldset *ngIf=\"movieSelected\">\r\n   \t\t<legend>{{movieSelected.title}}</legend>\r\n   \t\t<div id=\"mainDivContent\" [style.background]=\"'url('+ movieSelected.poster_path+')'\">\r\n   \t\t\t<fieldset class=\"descriptionContent\">\r\n   \t\t\t\t<div id=\"divDescription\">\r\n\t\t\t\t\t<div class=\"descriptionText\">\r\n\t\t\t\t\t\t<span class=\"descriptionTitle\">{{descriptionTitle}}</span>\r\n\t\t\t\t\t\t<p>{{movieSelected.overview}}</p>\r\n\t\t\t\t\t\t<ul id=\"genrerBox\" >\r\n\t\t\t\t\t\t\t<li>{{genresTitle}}</li>\r\n\t\t\t\t\t\t\t<li *ngFor=\"let genrer of movieSelected.movieDetail.genres\">{{genrer.name}}</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t<span class=\"informationTitle\">Runtime: </span> <span>{{movieSelected.movieDetail.runtime}} minutes</span>\r\n\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\t<span class=\"informationTitle\">Release Date: </span> <span>{{movieSelected.movieDetail.release_date}}</span>\r\n\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\t<span class=\"informationTitle\">Original Language: </span> <span>{{movieSelected.movieDetail.original_language | languages}}</span>\r\n\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\t<span class=\"informationTitle\">Status: </span> <span>{{movieSelected.movieDetail.status}}</span>\r\n\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\t<span class=\"informationTitle\">Popularity: </span> <span>{{movieSelected.movieDetail.popularity}}</span>\r\n\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\t<span class=\"informationTitle\">Votes: </span> <span>{{movieSelected.movieDetail.vote_count}}</span>\r\n\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\t<span class=\"informationTitle\">Score: </span> <span>{{movieSelected.movieDetail.vote_average}}</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--<img class=\"imageDescription\" src={{movieSelected.poster_path}} alt=\"Image {{movieSelected.title}}\">-->\r\n\t\t\t\t\t<img class=\"imageDescription\" src={{movieSelected.backdrop_path}} alt=\"Image {{movieSelected.title}}\">\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<hr/>\r\n\t\t\t\t<div id=\"divDescription\">\r\n\t\t\t\t\t<div *ngFor=\"let company of movieSelected.movieDetail.production_companies\">\r\n\t\t\t\t\t\t<div class=\"companyDescription\">\r\n\t\t\t\t\t\t\t<span class=\"companyName\">Production Company: </span> <span class=\"companyNameDescription\">{{company.name}}</span>\r\n\t\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\t\t<span class=\"companyName\">Original Country: </span> <span class=\"companyNameDescription\">{{company.origin_country}}</span>\r\n\t\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\t\t<img src=\"{{company.logo_path}}\" alt=\"{{company.name}}\" >\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngFor=\"let country of movieSelected.movieDetail.production_countries\">\r\n\t\t\t\t\t\t<div class=\"companyDescription\">\r\n\t\t\t\t\t\t\t<span class=\"companyName\">Production Country: </span> <span class=\"companyNameDescription\">{{country.name}}</span>\r\n\t\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\t\t<span class=\"companyName\">Norma: </span> <span class=\"companyNameDescription\">{{country.iso_3166_1}}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<hr/>\r\n\t\t\t\t<div id=\"divDescription\">\r\n\t\t\t\t\t<div  class=\"companyLogo\">\r\n\t\t\t\t\t\t<p class=\"offer\">{{movieSelected.movieDetail.tagline}}</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n   \t\t\t</fieldset>\r\n   \t\t</div>\r\n   \t</fieldset>\r\n</article>"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parameters */ "./src/app/parameters.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentComponent = /** @class */ (function () {
    function ContentComponent(movieService) {
        this.movieService = movieService;
        this.descriptionTitle = "Description: ";
        this.productionTitle = "Production Details: ";
        this.genresTitle = "Genres: ";
    }
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.contentMessage.subscribe(function (message) {
            _this.movieSelected = message;
            if (_this.movieSelected) {
                if (_this.movieSelected.movieDetail.backdrop_path)
                    _this.movieSelected.movieDetail.backdrop_path = _this.getBaseUrlPath(_this.movieSelected.movieDetail.backdrop_path);
                if (_this.movieSelected.movieDetail.belongs_to_collection) {
                    if (_this.movieSelected.movieDetail.belongs_to_collection.backdrop_path)
                        _this.movieSelected.movieDetail.belongs_to_collection.backdrop_path =
                            _this.getBaseUrlPath(_this.movieSelected.movieDetail.belongs_to_collection.backdrop_path);
                    if (_this.movieSelected.movieDetail.belongs_to_collection.poster_path)
                        _this.movieSelected.movieDetail.belongs_to_collection.poster_path =
                            _this.getBaseUrlPath(_this.movieSelected.movieDetail.belongs_to_collection.poster_path);
                }
                if (_this.movieSelected.movieDetail.poster_path)
                    _this.movieSelected.movieDetail.poster_path = _this.getBaseUrlPath(_this.movieSelected.movieDetail.poster_path);
                for (var _i = 0, _a = _this.movieSelected.movieDetail.production_companies; _i < _a.length; _i++) {
                    var productionCompany = _a[_i];
                    if (null != productionCompany.logo_path)
                        productionCompany.logo_path = _this.getBaseUrlPath(productionCompany.logo_path);
                }
            }
        });
    };
    ContentComponent.prototype.getBaseUrlPath = function (orginalPath) {
        if (orginalPath)
            orginalPath = _parameters__WEBPACK_IMPORTED_MODULE_2__["PARAMETERS"].IMG_URL_BASE + orginalPath;
        return orginalPath;
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Define variables for all app*/\nbody {\n  font: 100% Arial, Helvetica, sans-serif;\n  color: #283149;\n  background-color: #283149;\n}\n/* Functions */\n::-webkit-scrollbar {\n  width: 10px;\n}\n::-webkit-scrollbar-track {\n  background: #dbedf3;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #00818a;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #283149;\n}\n/* Style the footer */\nfooter {\n  background-color: #dbedf3;\n  border-top: 2px solid #283149;\n  padding: 10px;\n  text-align: center;\n  color: #283149;\n  height: 70px;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 4px;\n  font-family: \"Fredericka the Great\", cursive;\n}\n.divFooter {\n  flex: 33%;\n  max-width: 32%;\n  padding: 4px 4px;\n  font-size: 14px;\n}\n.informationFooter {\n  font-family: \"Righteous\", cursive;\n  font-weight: bold;\n  font-size: 16px;\n  color: #404b69;\n}\n.informationFooter a {\n  text-decoration: none;\n}\n.informationFooter a:active {\n  color: #404b69;\n}\n.informationDescription {\n  color: #283149;\n  font-size: 14px;\n  font-weight: bold;\n}\n@media only screen and (max-width: 950px) {\n  footer {\n    padding: 10px;\n    text-align: center;\n    height: 210px;\n  }\n\n  .divFooter {\n    flex: 100%;\n    max-width: 100%;\n    padding: 4px 4px;\n    font-size: 14px;\n    border-bottom: 1px #283149 solid;\n  }\n}\n@media only screen and (max-width: 650px) {\n  footer {\n    padding: 10px;\n    text-align: center;\n    height: 210px;\n  }\n\n  .divFooter {\n    flex: 100%;\n    max-width: 100%;\n    padding: 4px 4px;\n    font-size: 14px;\n    border-bottom: 1px #283149 solid;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"divFooter\">\r\n  \t<div><span class=\"informationDescription\">Created by:  </span><span class=\"informationFooter\">Gustavo Chavarro Ortiz</span></div>\r\n  \t<div><span class=\"informationDescription\">Github profile:  </span><span class=\"informationFooter\"><a href=\"https://github.com/gchavarro88/\">gchavarro88</a></span></div>\r\n  \t<div><span class=\"informationDescription\">email:  </span><span class=\"informationFooter\">gustavo.chavarro.or@gmail.com</span></div>\r\n  </div>\r\n  <div class=\"divFooter\">\r\n  \t<div><span class=\"informationDescription\">Page Information:  </span><span class=\"informationFooter\">Test to Cafeto Software</span></div>\r\n  \t<div><span class=\"informationDescription\">LinkedIn Profile:  </span><span class=\"informationFooter\"><a href=\"https://www.linkedin.com/in/gustavo-adolfo-chavarro-ortiz-6a143328/\">LinkedIn Gustavo</a></span></div>\r\n  \t<div><span class=\"informationDescription\">City:  </span><span class=\"informationFooter\">Medellín - Antioquia</span></div>\r\n  </div>\r\n  <div class=\"divFooter\">\r\n  \t<div><span class=\"informationDescription\">Source of Data:  </span><span class=\"informationFooter\"><a href=\"https://www.themoviedb.org/\">Themeviedb.org</a></span></div>\r\n  \t<div><span class=\"informationDescription\">API Source:  </span><span class=\"informationFooter\"><a href=\"https://developers.themoviedb.org/3\">API Version 3</a></span></div>\r\n  \t<div><span class=\"informationDescription\">Institute:  </span><span class=\"informationFooter\">Universidad Santiago de Cali</span></div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Define variables for all app*/\nbody {\n  font: 100% Arial, Helvetica, sans-serif;\n  color: #283149;\n  background-color: #283149;\n}\n/* Functions */\n::-webkit-scrollbar {\n  width: 10px;\n}\n::-webkit-scrollbar-track {\n  background: #dbedf3;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #00818a;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #283149;\n}\n/* Style the header */\nheader {\n  padding: 30px;\n  text-align: center;\n  font-size: 35px;\n  color: #283149;\n  height: 70px;\n  border-bottom: 2px solid #404b69;\n  background-color: #00818a;\n  animation-name: headerAnimation;\n  animation-duration: 20s;\n  animation-delay: 1s;\n  animation-iteration-count: infinite;\n  -webkit-animation-name: headerAnimation;\n  -webkit-animation-duration: 20s;\n  -webkit-animation-delay: 1s;\n  -webkit-animation-iteration-count: infinite;\n  -moz-animation-name: headerAnimation;\n  -moz-animation-duration: 20s;\n  -moz-animation-delay: 1s;\n  -moz-animation-iteration-count: infinite;\n}\n.divImg {\n  text-align: right;\n  width: 20%;\n  float: left;\n}\n.divH2 {\n  text-align: left;\n  width: 80%;\n  float: right;\n  height: 70px;\n}\nheader div img {\n  width: 120px;\n  margin-top: -5px;\n}\nheader div h2 {\n  font-size: 78px;\n  font-family: \"Fredericka the Great\", cursive;\n  margin-top: -5px;\n}\n@keyframes headerAnimation {\n  0% {\n    background: url('collage.jpg') 0% 0% #dbedf3;\n    color: #283149;\n    text-shadow: 2px 2px 5px white;\n  }\n  25% {\n    background: url('collage.jpg') 0% 25% #dbedf3;\n    color: #404b69;\n    text-shadow: 4px 4px 10px white;\n  }\n  50% {\n    background: url('collage.jpg') 0% 50% #dbedf3;\n    color: #00818a;\n    text-shadow: 6px 6px 15px white;\n  }\n  75% {\n    background: url('collage.jpg') 0% 75% main-color1;\n    color: #dbedf3;\n    text-shadow: 4px 4px 10px #283149;\n  }\n  100% {\n    background: url('collage.jpg') 0% 100% #dbedf3;\n    color: #283149;\n    text-shadow: 2px 2px 5px white;\n  }\n}\n@-webkit-keyframes headerAnimation {\n  0% {\n    background: url('collage.jpg') 0% 0% #dbedf3;\n    color: #283149;\n    text-shadow: 2px 2px 5px white;\n  }\n  25% {\n    background: url('collage.jpg') 0% 25% #dbedf3;\n    color: #404b69;\n    text-shadow: 4px 4px 10px white;\n  }\n  50% {\n    background: url('collage.jpg') 0% 50% #dbedf3;\n    color: #00818a;\n    text-shadow: 6px 6px 15px white;\n  }\n  75% {\n    background: url('collage.jpg') 0% 75% main-color1;\n    color: #dbedf3;\n    text-shadow: 4px 4px 10px white;\n  }\n  100% {\n    background: url('collage.jpg') 0% 100% #dbedf3;\n    color: #283149;\n    text-shadow: 2px 2px 5px white;\n  }\n}\n@media only screen and (max-width: 950px) {\n  .divH2 {\n    text-align: center;\n  }\n\n  header div img {\n    width: 90px;\n  }\n  header div h2 {\n    font-size: 48px;\n    font-family: \"Fredericka the Great\", cursive;\n  }\n}\n@media only screen and (max-width: 650px) {\n  .divH2 {\n    text-align: center;\n  }\n\n  header div img {\n    width: 60px;\n  }\n  header div h2 {\n    font-size: 28px;\n    font-family: \"Fredericka the Great\", cursive;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n\t<div class=\"divImg\"><img src=\"{{headerLogoPath}}\" alt=\"{{headerLogoAlt}}\"></div>\r\n  \t<div class=\"divH2\"><h2>{{headerTitle}}</h2></div>\r\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.headerTitle = "Movies Test to Cafeto";
        this.headerLogoPath = "../assets/img/movieLogo.gif";
        this.headerLogoAlt = "Header Logo";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/languages.ts":
/*!******************************!*\
  !*** ./src/app/languages.ts ***!
  \******************************/
/*! exports provided: Languages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Languages", function() { return Languages; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Languages = /** @class */ (function () {
    function Languages() {
    }
    Languages.prototype.transform = function (value) {
        var result = value;
        switch (value) {
            case "en":
                result = "English";
                break;
            case "es":
                result = "Spanish";
                break;
            case "it":
                result = "Italian";
                break;
            case "fr":
                result = "French";
                break;
            case "gr":
                result = "German";
                break;
            case "ja":
                result = "Japanese";
                break;
            case "hi":
                result = "Hindue";
                break;
            default:
                result = value;
                break;
        }
        return result;
    };
    Languages = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'languages'
        })
    ], Languages);
    return Languages;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Define variables for all app*/\nbody {\n  font: 100% Arial, Helvetica, sans-serif;\n  color: #283149;\n  background-color: #283149;\n}\n/* Functions */\n.titleMenu {\n  font-family: \"Fredericka the Great\", cursive;\n  color: #404b69;\n  text-shadow: 1px 1px #000;\n  font-size: 28px;\n  vertical-align: text-top;\n  text-align: center;\n  font-weight: bold;\n}\n::-webkit-scrollbar {\n  width: 10px;\n}\n::-webkit-scrollbar-track {\n  background: #dbedf3;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #00818a;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #283149;\n}\n/* Style the navigation menu */\n#searchBox {\n  height: 70px;\n  vertical-align: middle;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 90%;\n}\n#moviesBox {\n  height: 48%;\n  text-align: center;\n}\n#search-box {\n  width: 90%;\n  border-radius: 10px 5px;\n  height: 30px;\n  color: #888;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 14px;\n  box-shadow: 1px 1px 4px #404b69;\n  padding-left: 20px;\n  margin-left: 20px;\n}\n#search-box:hover {\n  border-color: #dbedf3;\n  box-shadow: 1px 1px 4px #FFF;\n}\n.titleMenu {\n  margin-top: 5px;\n}\n.divMenu {\n  box-sizing: border-box;\n  margin-top: -5%;\n  height: -webkit-min-content;\n  height: -moz-min-content;\n  height: min-content;\n}\n.tile {\n  height: 100%;\n  width: 100%;\n}\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0px;\n  align-items: center;\n}\n/* Create four equal columns that sits next to each other */\n.column {\n  flex: 25%;\n  max-width: 25%;\n  padding: 0px;\n}\n.column img {\n  margin-top: 0px;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.column img:hover {\n  -webkit-transform: scale(1.5);\n  transform: scale(1.5);\n  -moz-transform: scale(1.5);\n  -o-transform: scale(1.5);\n  border-radius: 5px 10px;\n}\n.column img:active {\n  box-shadow: 1px 1px 20px #FFF;\n}\n.titleRadio {\n  font-family: \"Fredericka the Great\", cursive;\n  color: #404b69;\n  text-shadow: 1px 1px #000;\n  font-size: 13px;\n  vertical-align: text-top;\n  text-align: center;\n  font-weight: bold;\n  padding-left: 10px;\n  /* HeroSearch private styles */\n}\n.search-result li {\n  border-bottom: 1px solid #283149;\n  border-left: 1px solid #283149;\n  border-right: 1px solid #283149;\n  width: 220px;\n  height: 20px;\n  padding: 5px;\n  background-color: #dbedf3;\n  cursor: pointer;\n  list-style-type: none;\n}\n.search-result li:hover {\n  background-color: #00818a;\n  font-weight: bold;\n}\n.search-result li span {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  color: #283149;\n  font-size: 12px;\n}\nul.search-result {\n  display: block;\n  position: absolute;\n  top: 185px;\n  left: 130px;\n}\n@media only screen and (max-width: 950px) {\n  ul.search-result {\n    left: 40px;\n  }\n}\n@media only screen and (max-width: 650px) {\n  ul.search-result {\n    left: 120px;\n  }\n}\n/*# sourceMappingURL=menu.component.css.map */\n"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"searchBox\">\r\n\t<span class=\"titleRadio\">Movie</span>\r\n\t<input  #movieRadio name=\"radioSearch\" type=\"radio\" value=\"Movie\" (click)=\"setSearchParameter(movieRadio.value)\" checked>\r\n\t<span class=\"titleRadio\">Actor</span>\r\n\t<input  #actorRadio name=\"radioSearch\" type=\"radio\" value=\"Actor\" (click)=\"setSearchParameter(actorRadio.value)\">\r\n\t<input #searchBox id=\"search-box\" placeholder=\"{{searchBoxText}}\" [value]=\"searchInputValue\" (keyup)=\"search(searchBox.value)\"/>\r\n\t<ul class=\"search-result\" *ngIf=\"actorListSearch.length > 0\">\r\n\t\t<li *ngFor=\"let actor of actorListSearch\" (click)=\"findActorDetail(actor)\">\r\n\t      <span>{{actor.name}}</span>\r\n\t    </li>\r\n\t</ul>\r\n\t<ul class=\"search-result\" *ngIf=\"movieListSearch.length > 0\">\r\n\t\t<li *ngFor=\"let movie of movieListSearch\" (click)=\"findMovieDetail(movie)\">\r\n\t      <span>{{movie.title}}</span>\r\n\t    </li>\r\n\t</ul>\r\n</div>\r\n<div id=\"moviesBox\">\r\n\t<h4 class=\"titleMenu\">{{moviesTitle}}</h4>\r\n\t<div class=\"divMenu\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"column\" *ngFor=\"let movie of movieListTop\">\r\n\t\t\t\t<img src=\"{{movie.poster_path}}\" alt=\"{{movie.title}}\" class=\"tile\" (click)=\"getMovieDetailTop(movie)\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parameters */ "./src/app/parameters.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MOVIE_WORD = "Movie";
var MenuComponent = /** @class */ (function () {
    function MenuComponent(movieService) {
        this.movieService = movieService;
        this.searchBoxText = "Type movie name or actor name here, to start the search...";
        this.moviesTitle = "Movies Top";
        this.position = 0;
        this.searchParameter = "Movie";
        this.searchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.movieListSearch = [];
        this.actorListSearch = [];
        this.searchInputValue = "";
    }
    MenuComponent.prototype.ngOnInit = function () {
        //this.movieService.currentMessage.subscribe(message => this.response = message);
        this.getMoviesListTop();
        this.searchActorOrMoviesName();
    };
    MenuComponent.prototype.getMoviesListTop = function () {
        var _this = this;
        this.movieService.getMoviesListTop().subscribe(function (result) {
            if (result) {
                _this.movieListTop = result.results.slice(0, 12);
                _this.movieListTop = _this.getImageMovieFullPath(_this.movieListTop);
                _this.getMovieDetailTop(_this.movieListTop[0]);
            }
        });
    };
    MenuComponent.prototype.getImageMovieFullPath = function (movies) {
        for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
            var movie = movies_1[_i];
            movie.poster_path = _parameters__WEBPACK_IMPORTED_MODULE_4__["PARAMETERS"].IMG_URL_BASE + movie.poster_path;
            movie.backdrop_path = _parameters__WEBPACK_IMPORTED_MODULE_4__["PARAMETERS"].IMG_URL_BASE + movie.backdrop_path;
        }
        return movies;
    };
    MenuComponent.prototype.getMovieDetailTop = function (movie) {
        var _this = this;
        if (movie) {
            this.movieSelected = movie;
            this.movieService.getMovieDetail(movie.id).subscribe(function (result) {
                if (result) {
                    _this.movieSelected.movieDetail = result;
                    _this.movieService.sendDetail(_this.movieSelected);
                }
            });
        }
    };
    MenuComponent.prototype.setSearchParameter = function (parameter) {
        this.searchParameter = parameter;
        this.actorListSearch = [];
        this.movieListSearch = [];
    };
    MenuComponent.prototype.search = function (term) {
        var _this = this;
        this.searchTerm.next(term);
        if (this.searchParameter == MOVIE_WORD) {
            this.resultMovieList.subscribe(function (result) {
                if (result) {
                    _this.movieListSearch = result.results;
                    _this.movieListTop = _this.movieListSearch.slice(0, 12);
                    _this.movieListTop = _this.getImageMovieFullPath(_this.movieListTop);
                    _this.getMovieDetailTop(_this.movieListTop[0]);
                }
            });
            this.actorListSearch = [];
        }
        else {
            this.resultActorList.subscribe(function (result) {
                if (result) {
                    _this.actorListSearch = result.results;
                    _this.movieListTop = [];
                    for (var _i = 0, _a = _this.actorListSearch; _i < _a.length; _i++) {
                        var actor = _a[_i];
                        console.log("Cantidad de peliculas " + _this.movieListTop.length);
                        if (_this.movieListTop.length < 12) {
                            if (_this.movieListTop.length == 0) {
                                _this.movieListTop = actor.known_for;
                                console.log(actor.known_for);
                            }
                            else {
                                _this.movieListTop = _this.movieListTop.concat(actor.known_for);
                            }
                        }
                        else {
                            break;
                        }
                    }
                    _this.movieListTop = _this.movieListTop.slice(0, 12);
                    _this.movieListTop = _this.getImageMovieFullPath(_this.movieListTop);
                    _this.getMovieDetailTop(_this.movieListTop[0]);
                }
            });
            this.movieListSearch = [];
        }
    };
    MenuComponent.prototype.searchActorOrMoviesName = function () {
        var _this = this;
        this.resultMovieList = this.searchTerm.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) { return _this.movieService.searchMovies(term); }));
        this.resultActorList = this.searchTerm.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) { return _this.movieService.searchActors(term); }));
    };
    MenuComponent.prototype.findMovieDetail = function (movie) {
        this.actorListSearch = [];
        this.movieListSearch = [];
        this.moviesTitle = "Others interesting movies...";
        this.searchInputValue = movie.title;
        this.getMovieDetailTop(movie);
    };
    MenuComponent.prototype.findActorDetail = function (actor) {
        this.actorListSearch = [];
        this.movieListSearch = [];
        this.moviesTitle = "Others interesting movies...";
        this.searchInputValue = actor.name;
        this.search(this.searchInputValue);
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/movie.service.ts":
/*!**********************************!*\
  !*** ./src/app/movie.service.ts ***!
  \**********************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parameters */ "./src/app/parameters.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ID_MOVIE = "ID_MOVIE";
var VALUE = "VALUE";
var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.movie);
        this.contentMessage = this.messageSource.asObservable();
    }
    MovieService.prototype.getMoviesListTop = function () {
        this.url = _parameters__WEBPACK_IMPORTED_MODULE_2__["URL_LIST"].URL_MOVIES_TOP;
        return this.http.get(this.url);
    };
    MovieService.prototype.getMovieDetail = function (idMovie) {
        this.url = _parameters__WEBPACK_IMPORTED_MODULE_2__["URL_LIST"].URL_MOVIE_DETAIL;
        this.url = this.url.replace(ID_MOVIE, idMovie);
        return this.http.get(this.url);
    };
    MovieService.prototype.searchActors = function (value) {
        if (!value.trim()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }
        this.url = _parameters__WEBPACK_IMPORTED_MODULE_2__["URL_LIST"].URL_SEARCH_ACTOR;
        this.url = this.url.replace(VALUE, value);
        return this.http.get(this.url);
    };
    MovieService.prototype.searchMovies = function (value) {
        if (!value.trim()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }
        this.url = _parameters__WEBPACK_IMPORTED_MODULE_2__["URL_LIST"].URL_SEARCH_MOVIE;
        this.url = this.url.replace(VALUE, value);
        return this.http.get(this.url);
    };
    MovieService.prototype.sendDetail = function (movie) {
        this.messageSource.next(movie);
    };
    MovieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/parameters.ts":
/*!*******************************!*\
  !*** ./src/app/parameters.ts ***!
  \*******************************/
/*! exports provided: PARAMETERS, URL_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARAMETERS", function() { return PARAMETERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_LIST", function() { return URL_LIST; });
var PARAMETERS = {
    API_KEY: 'api_key=2d3db1a828f2035f7cbb6d1b47b12aab',
    URL_BASE: 'https://api.themoviedb.org/3',
    LANGUAGE: 'language=en-US',
    SLASH: '/',
    QUESTION: '?',
    AMPERSAND: '&',
    IMG_URL_BASE: 'https://image.tmdb.org/t/p/original/'
};
var URL_LIST = {
    URL_MOVIES_TOP: 'https://api.themoviedb.org/3/movie/top_rated?api_key=2d3db1a828f2035f7cbb6d1b47b12aab&language=en-US&page=1',
    URL_TVSHOW_TOP: 'https://api.themoviedb.org/3/tv/popular?api_key=2d3db1a828f2035f7cbb6d1b47b12aab&language=en-US&page=1',
    URL_MOVIE_DETAIL: 'https://api.themoviedb.org/3/movie/ID_MOVIE?api_key=2d3db1a828f2035f7cbb6d1b47b12aab&language=en-US',
    URL_SEARCH_ACTOR: 'https://api.themoviedb.org/3/search/person?api_key=2d3db1a828f2035f7cbb6d1b47b12aab&language=en-US&query=VALUE&page=1&include_adult=false',
    URL_SEARCH_MOVIE: 'https://api.themoviedb.org/3/search/movie?api_key=2d3db1a828f2035f7cbb6d1b47b12aab&language=en-US&query=VALUE&page=1&include_adult=false'
};


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

module.exports = __webpack_require__(/*! C:\Gustavo Chavarro\Mis Documentos\Personales\Angular Clic\CafetoTest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map