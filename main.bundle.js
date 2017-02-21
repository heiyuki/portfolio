webpackJsonp([0,3],{

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavigationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationModule = (function () {
    function NavigationModule() {
    }
    NavigationModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__navigation_component__["a" /* NavigationComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__navigation_component__["a" /* NavigationComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationModule);
    return NavigationModule;
}());
//# sourceMappingURL=/home/heiyuki/Documents/OnGoing/portfolio/src/navigation.module.js.map

/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (immutable) */ exports["a"] = routerTransition;

function routerTransition() {
    return FadeInOut();
}
function FadeInOut() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* trigger */])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* style */])({})),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* style */])({})),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* style */])({ opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* style */])({ opacity: 1 }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* style */])({ opacity: 1 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* style */])({ opacity: 0 }))
        ])
    ]);
}
//# sourceMappingURL=/home/heiyuki/Documents/OnGoing/portfolio/src/router.animations.js.map

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_navigation_module__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quote_quote_module__ = __webpack_require__(334);
/* harmony export (binding) */ __webpack_require__.d(exports, "AboutRoutes", function() { return AboutRoutes; });
/* harmony export (binding) */ __webpack_require__.d(exports, "AboutModule", function() { return AboutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var moduleRoutes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_2__about_component__["a" /* AboutComponent */] }];
var AboutRoutes = __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(moduleRoutes);
var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                AboutRoutes,
                __WEBPACK_IMPORTED_MODULE_5__quote_quote_module__["a" /* QuoteModule */],
                __WEBPACK_IMPORTED_MODULE_4__navigation_navigation_module__["a" /* NavigationModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__about_component__["a" /* AboutComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__about_component__["a" /* AboutComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutModule);
    return AboutModule;
}());
//# sourceMappingURL=/home/heiyuki/Documents/OnGoing/portfolio/src/about.module.js.map

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_navigation_module__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__title_title_module__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(exports, "IndexRoutes", function() { return IndexRoutes; });
/* harmony export (binding) */ __webpack_require__.d(exports, "IndexModule", function() { return IndexModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var moduleRoutes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_2__index_component__["a" /* IndexComponent */] }];
var IndexRoutes = __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forChild(moduleRoutes);
var IndexModule = (function () {
    function IndexModule() {
    }
    IndexModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__navigation_navigation_module__["a" /* NavigationModule */],
                __WEBPACK_IMPORTED_MODULE_4__title_title_module__["a" /* TitleModule */],
                IndexRoutes
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__index_component__["a" /* IndexComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__index_component__["a" /* IndexComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], IndexModule);
    return IndexModule;
}());
//# sourceMappingURL=/home/heiyuki/Documents/OnGoing/portfolio/src/index.module.js.map

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quote_component__ = __webpack_require__(513);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QuoteModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuoteModule = (function () {
    function QuoteModule() {
    }
    QuoteModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__quote_component__["a" /* QuoteComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__quote_component__["a" /* QuoteComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], QuoteModule);
    return QuoteModule;
}());
//# sourceMappingURL=/home/heiyuki/Documents/OnGoing/portfolio/src/quote.module.js.map

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quote_quote_module__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_module__ = __webpack_require__(216);
/* harmony export (binding) */ __webpack_require__.d(exports, "ResumeRoutes", function() { return ResumeRoutes; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ResumeModule", function() { return ResumeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var moduleRoutes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_2__resume_component__["a" /* ResumeComponent */] }];
var ResumeRoutes = __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(moduleRoutes);
var ResumeModule = (function () {
    function ResumeModule() {
    }
    ResumeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                ResumeRoutes,
                __WEBPACK_IMPORTED_MODULE_4__quote_quote_module__["a" /* QuoteModule */],
                __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_module__["a" /* NavigationModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__resume_component__["a" /* ResumeComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__resume_component__["a" /* ResumeComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ResumeModule);
    return ResumeModule;
}());
//# sourceMappingURL=/home/heiyuki/Documents/OnGoing/portfolio/src/resume.module.js.map

/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

var map = {
	"./about/about.module": [
		332
	],
	"./index/index.module": [
		333
	],
	"./resume/resume.module": [
		335
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 389;


/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(509);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/heiyuki/Documents/OnGoing/portfolio/src/main.js.map

/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__(217);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'about',
            template: __webpack_require__(678),
            styles: [__webpack_require__(671)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=/home/heiyuki/Documents/OnGoing/portfolio/src/about.component.js.map

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(679),
            styles: [__webpack_require__(672)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/heiyuki/Documents/OnGoing/portfolio/src/app.component.js.map

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_index_module__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resume_resume_module__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_module__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__(510);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__index_index_module__["IndexModule"],
                __WEBPACK_IMPORTED_MODULE_7__resume_resume_module__["ResumeModule"],
                __WEBPACK_IMPORTED_MODULE_8__about_about_module__["AboutModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* ModuleRoutes */]),
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/heiyuki/Documents/OnGoing/portfolio/src/app.module.js.map

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ModuleRoutes; });
var ModuleRoutes = [
    {
        path: '',
        loadChildren: './index/index.module#IndexModule'
    },
    {
        path: 'about',
        loadChildren: './about/about.module#AboutModule'
    },
    {
        path: 'resume',
        loadChildren: './resume/resume.module#ResumeModule'
    },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=/home/heiyuki/Documents/OnGoing/portfolio/src/app.routing.js.map

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__(217);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexComponent = (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__(680),
            styles: [__webpack_require__(673)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }), 
        __metadata('design:paramtypes', [])
    ], IndexComponent);
    return IndexComponent;
}());
//# sourceMappingURL=/home/heiyuki/Documents/OnGoing/portfolio/src/index.component.js.map

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'navigation',
            template: __webpack_require__(681),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationComponent);
    return NavigationComponent;
}());
//# sourceMappingURL=/home/heiyuki/Documents/OnGoing/portfolio/src/navigation.component.js.map

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QuoteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuoteComponent = (function () {
    function QuoteComponent() {
        this.quotes = [
            "Me?! Smart?!... Nah i'm just an idiot who works hard...",
            "Just shut up and work...",
            "No one did it before?! Great I'll do it first!"
        ];
    }
    QuoteComponent.prototype.ngOnInit = function () {
        this.quote = this.quotes[Math.floor((Math.random() * this.quotes.length))];
    };
    QuoteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-quote',
            template: __webpack_require__(682),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [])
    ], QuoteComponent);
    return QuoteComponent;
}());
//# sourceMappingURL=/home/heiyuki/Documents/OnGoing/portfolio/src/quote.component.js.map

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__(217);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ResumeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResumeComponent = (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'resume',
            template: __webpack_require__(683),
            styles: [__webpack_require__(676)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }), 
        __metadata('design:paramtypes', [])
    ], ResumeComponent);
    return ResumeComponent;
}());
//# sourceMappingURL=/home/heiyuki/Documents/OnGoing/portfolio/src/resume.component.js.map

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TitleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TitleComponent = (function () {
    function TitleComponent() {
    }
    TitleComponent.prototype.ngOnInit = function () {
    };
    TitleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-title',
            template: __webpack_require__(684),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [])
    ], TitleComponent);
    return TitleComponent;
}());
//# sourceMappingURL=/home/heiyuki/Documents/OnGoing/portfolio/src/title.component.js.map

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__title_component__ = __webpack_require__(515);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TitleModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TitleModule = (function () {
    function TitleModule() {
    }
    TitleModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__title_component__["a" /* TitleComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__title_component__["a" /* TitleComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], TitleModule);
    return TitleModule;
}());
//# sourceMappingURL=/home/heiyuki/Documents/OnGoing/portfolio/src/title.module.js.map

/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/heiyuki/Documents/OnGoing/portfolio/src/environment.js.map

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/heiyuki/Documents/OnGoing/portfolio/src/polyfills.js.map

/***/ },

/***/ 671:
/***/ function(module, exports) {

module.exports = ".aboutme {\n  margin-top: 20px;\n}\n"

/***/ },

/***/ 672:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 673:
/***/ function(module, exports) {

module.exports = ".slider {\n  height:75vh;\n  margin-top: 25vh;\n}\n"

/***/ },

/***/ 674:
/***/ function(module, exports) {

module.exports = ".myButton {\n\tbox-shadow:inset 0px 1px 0px 0px #54a3f7;\n\tbackground:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #007dc1), color-stop(1, #0061a7));\n\tbackground:-webkit-linear-gradient(top, #007dc1 5%, #0061a7 100%);\n\tbackground:linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#007dc1', endColorstr='#0061a7',GradientType=0);\n\tbackground-color:#007dc1;\n\tborder-radius:3px;\n\tborder:1px solid #124d77;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#ffffff;\n\tfont-family:Arial;\n\tfont-size:20px;\n\tpadding:6px 24px;\n\ttext-decoration:none;\n\ttext-shadow:0px 1px 0px #154682;\n}\n.myButton:hover {\n\tbackground:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #0061a7), color-stop(1, #007dc1));\n\tbackground:-webkit-linear-gradient(top, #0061a7 5%, #007dc1 100%);\n\tbackground:linear-gradient(to bottom, #0061a7 5%, #007dc1 100%);\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#0061a7', endColorstr='#007dc1',GradientType=0);\n\tbackground-color:#0061a7;\n}\n.myButton:active {\n\tposition:relative;\n\ttop:1px;\n}\nnav {\n\tmargin-top: 20px;\n}\n"

/***/ },

/***/ 675:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 676:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 677:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 678:
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"col-md-12 centered\">\n    <app-quote></app-quote>\n  </div>\n  <div class=\"col-md-12 centered\">\n    <navigation></navigation>\n  </div>\n  <div class=\"col-md-12 centered aboutme\">\n    <div class=\"col-md-12\">\n      <div class=\"col-md-4 col-sm-12 col-xs-12 \">\n        <img class=\"img-responsive\" src=\"https://fb-s-d-a.akamaihd.net/h-ak-xta1/v/t1.0-9/12072711_10205938433954145_2510480122071916171_n.jpg?oh=7220157e0b15331beafd3f50f0e52292&oe=593C927B&__gda__=1497764824_86d49079ec07f18f5697545afe57a9f4\"> This is\n        me Trying to be cool\n      </div>\n      <div class=\"col-md-8 col-sm-12 col-xs-12 \">\n        <h2> About Me </h2>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </p>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n\n      <div class=\"col-md-4 col-sm-12 col-xs-12 \">\n        <img class=\"img-responsive\" src=\"https://scontent-fra3-1.xx.fbcdn.net/v/t1.0-9/10922823_10204222738262825_3634894102587764405_n.jpg?oh=2a03ec2c127602e22cccaa05b3ff2671&oe=5933C550\"> This is me at a local Hearthstone Tournament\n      </div>\n      <div class=\"col-md-8 col-sm-12 col-xs-12 \">\n        <h2> Passions </h2>\n        <ul>\n          <li><b>E-Sport :</b> Formerly an amateur league of legends player, and a hearthstone semi-pro player, i grew up with gaming as a huge part of my life. I always attended local tournaments and won a couple online tournaments. needless to say I'm a\n            very competitive person. These days I just watch games when I have some time to spare, or watch live events and tell myself: Maybe I should try to be there too. </li>\n          <li><b>Guitar :</b> One of the things I almost never miss is going out on Saturday (usually my day off at school) and go play guitar at a local coffee. It opens at 6am, so I make sure I'm there as early as possible so I can spend my time alone with\n            my guitar. it ends up being something like 7am to 8-9am because after that it's way too crowded.\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 679:
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!--<app-index></app-index>-->\n"

/***/ },

/***/ 680:
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-12 slider\">\n  <app-title></app-title>\n  <div class=\"col-md-12 centered\">\n    <navigation></navigation>\n  </div>\n</div>\n"

/***/ },

/***/ 681:
/***/ function(module, exports) {

module.exports = "<nav>\n  <button class=\"myButton\" routerLink=\"/about\" routerLinkActive=\"active\">About Me</button>\n  <button class=\"myButton\"  routerLink=\"/resume\" routerLinkActive=\"active\">My Resume</button>\n  <button class=\"myButton\">My Portfolio</button>\n</nav>\n"

/***/ },

/***/ 682:
/***/ function(module, exports) {

module.exports = "  <q>{{quote}}</q>\n"

/***/ },

/***/ 683:
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"col-md-12 centered\">\n    <app-quote></app-quote>\n  </div>\n  <div class=\"col-md-12 centered\">\n    <navigation></navigation>\n  </div>\n  <div class=\"col-md-12 centered aboutme\">\n    <h1> My Resume </h1>\n    <div class=\"col-md-12\">\n      <h2> Core Competencies </h2><hr>\n      <ul>\n        <li>Server Side Javascript (Node.Js, Express,Lusca, MongoDB)</li>\n        <li>Javascript Front End Frameworks (Angularjs, Angular 2, Ionic, Ionic -v2)</li>\n        <li>PHP and PHP Framework (Symfony, Laravel)</li>\n        <li>Java (JavaEE, JSF)</li>\n      </ul>\n    </div>\n    <div class=\"col-md-12\">\n      <h2> Professional Experience </h2><hr>\n      <div class=\"col-md-6\">\n        <div class=\"col-md-12\">\n          <h4>Web Developer at STUSID Bank Intern</h4><hr> JSP, Web Sockets, Starting January 2015\n        </div>\n        <div class=\"col-md-12\">\n          <ul>\n            <li>I Worked withing the IT department.</li>\n            <li>Build a platform for different departments to exchange files.</li>\n            <li>Limiting the access to files according to different departments .</li>\n            <li>Black listing specific users withing a department.</li>\n            <li>Treating different file types differently.</li>\n            <li>Separating Web Server, Application Server, Database Server and File Storage Server.</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"col-md-12\">\n          <h4>Freelance for a conferences Website</h4>\n          <hr> PHP – Symfony 2.5, Starting December 2016\n        </div>\n        <div class=\"col-md-12\">\n          <ul>\n            <li>Build a Website to present the conference, it’s committees and speakers.</li>\n            <li>Dynamically Generated content according to the administrator’s choices.</li>\n            <li>Email validation and Password resetting.</li>\n            <li>Abstract (File) submissions.</li>\n            <li>Excel Files generation (list of attendees and their abstract).</li>\n            <li>Counsel clients or patients, individually or in-group sessions, to assist in overcoming dependencies, adjusting to life, or making changes.</li>\n            <li>Abstract review section.</li>\n            <li>Dynamically allow specific users (reviewers) to review and rate abstract.</li>\n            <li>Geolocalization of visitors for statistics</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <h2> Education </h2><hr>\n      <div class=\"col-md-12\">\n        <div class=\"col-md-3 col-sm-12\">\n          <h3>Bachelor Degree</h3>\n          <span class=\"alternate\">2012</span>\n        </div>\n        <div class=\"col-md-9 col-sm-12\">\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"col-md-12\">\n        <div class=\"col-md-3 col-sm-12\">\n          <h3>Licence in Computer Science</h3>\n          <span class=\"alternate\">2012-2015</span>\n        </div>\n        <div class=\"col-md-9 col-sm-12\">\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"col-md-12\">\n        <div class=\"col-md-3 col-sm-12\">\n          <h3>Computer Engeneering Degree</h3>\n          <span class=\"alternate\">2015-2018</span>\n        </div>\n        <div class=\"col-md-9 col-sm-12\">\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 684:
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-12 centered\">\n  <h1>Hi I'm<b class=\"alternate\"> Hei</b> Yuki </h1></div>\n<hr>\n<div class=\"col-md-12 centered\">\n  <h3>My Real Name is Actually <i><b class=\"alternate\">Khaled </b>Romdhane</i> </h3>\n</div>\n"

/***/ },

/***/ 701:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(390);


/***/ }

},[701]);
//# sourceMappingURL=main.bundle.map