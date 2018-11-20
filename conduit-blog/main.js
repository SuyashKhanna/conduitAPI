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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar [isAuthenticated] = 'isAuthenticated' [user] = 'userproperty' (logoutNotification) = 'onLogoutNotification()'  ></app-navbar>\n<router-outlet (activate)='onLogin()'></router-outlet>\n"

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
/* harmony import */ var _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/services/user.service */ "./src/app/services/user.service.ts");
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
    function AppComponent(auth, user) {
        this.auth = auth;
        this.user = user;
        this.title = 'conduit-blog';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('jWtToken') != null) {
            this.auth.authenticate(localStorage.getItem('jWtToken'))
                .subscribe(function () {
                _this.isAuthenticated = true;
                _this.user.currentUser(localStorage.getItem('jWtToken')).subscribe(function (x) { return _this.userproperty = x; });
            }, function () { return _this.isAuthenticated = false; });
        }
        else {
            this.isAuthenticated = false;
        }
    };
    AppComponent.prototype.onLogoutNotification = function () {
        this.isAuthenticated = false;
    };
    AppComponent.prototype.onLogin = function () {
        var _this = this;
        if (localStorage.getItem('jWtToken') != null) {
            this.auth.authenticate(localStorage.getItem('jWtToken')).subscribe(function (resp) {
                _this.isAuthenticated = true;
                _this.user.currentUser(localStorage.getItem('jWtToken')).subscribe(function (x) { return _this.userproperty = x; });
            });
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _article_card_article_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./article-card/article-card.component */ "./src/app/article-card/article-card.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _newarticle_newarticle_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./newarticle/newarticle.component */ "./src/app/newarticle/newarticle.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _articl_articl_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./articl/articl.component */ "./src/app/articl/articl.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/comment/comment.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _article_card_article_card_component__WEBPACK_IMPORTED_MODULE_8__["ArticleCardComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_9__["SigninComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                _newarticle_newarticle_component__WEBPACK_IMPORTED_MODULE_11__["NewarticleComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _articl_articl_component__WEBPACK_IMPORTED_MODULE_14__["ArticlComponent"],
                _comment_comment_component__WEBPACK_IMPORTED_MODULE_15__["CommentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([{ path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
                    { path: 'SignIn', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_9__["SigninComponent"] },
                    { path: 'SignUp', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"] },
                    { path: 'editor/:slug', component: _newarticle_newarticle_component__WEBPACK_IMPORTED_MODULE_11__["NewarticleComponent"] },
                    { path: 'editor', component: _newarticle_newarticle_component__WEBPACK_IMPORTED_MODULE_11__["NewarticleComponent"] },
                    { path: 'article/:slug', component: _articl_articl_component__WEBPACK_IMPORTED_MODULE_14__["ArticlComponent"] },
                    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"] }
                ]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/articl/articl.component.css":
/*!*********************************************!*\
  !*** ./src/app/articl/articl.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.banner\r\n{\r\n    width: 100%;\r\n    height: 200px;\r\n    background-color:black;\r\n}\r\n\r\nh1.mainheading\r\n{\r\n    padding-top : 30px;\r\n    color: white;\r\n    font-size: 54px;\r\n    margin-left: 30px;\r\n}\r\n\r\np.maindesc\r\n{\r\n    font-size: 24px;\r\n    color : white;\r\n    font-weight: lighter;\r\n    margin-left: 30px;\r\n}\r\n\r\n.article\r\n{\r\n    margin: 30px;\r\n}\r\n\r\n.button\r\n{\r\n    float: right;\r\n    border-radius: 5px;\r\n    border: 1px solid;\r\n    background-color: white;\r\n    margin: 5px;\r\n}\r\n\r\n.button.edit:hover\r\n{\r\n    background-color: rgb(44, 44, 145);\r\n    color : white\r\n}\r\n\r\n.button.delete:hover\r\n{\r\n    background-color: rgb(189, 49, 49);\r\n    color : white\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/articl/articl.component.html":
/*!**********************************************!*\
  !*** ./src/app/articl/articl.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf = '!article'>Loading Article.....</p>\n\n<div *ngIf = 'article' class = 'banner'>\n    <h1 class = 'mainheading' >{{article.article.title}}</h1>\n    <p class = 'maindesc'>{{article.article.description}}</p>\n<button (click) = 'delete()' class = 'button delete' *ngIf = 'authentic && article.article.author.username == authentic.user.username'>Delete Article</button>\n<button class = 'button edit'  *ngIf = 'authentic && article.article.author.username == authentic.user.username' [routerLink] = \"['/editor', slug]\">Edit Article</button>\n</div>\n      \n<div *ngIf = 'article' class = 'article'>\n\n<p>{{article.article.body}}</p>\n</div>\n<div *ngIf = '!authentic'>\n<p><a [routerLink] = \"['/SignIn']\">        Log In</a> or <a [routerLink] = \"['/SignUp']\">Sign Up</a>  to view and add comments</p>\n</div>\n<div *ngIf = 'authentic' align = \"center\">\n<app-comment [authentic] = 'authentic' [slug] = 'slug' (commentPosted) = 'addComment($event)' ></app-comment>\n</div>\n<div *ngIf = 'comments'>\n<div align = \"center\" *ngFor = 'let comment of comments.comments' >\n<app-comment [authentic] = 'authentic' [comment] = 'comment' [slug] = 'slug' (commentDeleted) = 'deleteComment($event)'></app-comment>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/articl/articl.component.ts":
/*!********************************************!*\
  !*** ./src/app/articl/articl.component.ts ***!
  \********************************************/
/*! exports provided: ArticlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlComponent", function() { return ArticlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_fetch_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/fetch-articles.service */ "./src/app/services/fetch-articles.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticlComponent = /** @class */ (function () {
    function ArticlComponent(route, router, fetchArticle, auth, userService) {
        this.route = route;
        this.router = router;
        this.fetchArticle = fetchArticle;
        this.auth = auth;
        this.userService = userService;
    }
    ArticlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slug = this.route.snapshot.params.slug;
        this.fetchArticle.fetchArticle(this.slug)
            .subscribe(function (resp) { return _this.article = resp; }, function () { return _this.article = { article: { title: "unable to find article" } }; });
        this.auth.authenticate(localStorage.getItem('jWtToken')).subscribe(function (x) { return _this.authentic = x; }, function (err) { return _this.authentic = null; });
        if (localStorage.getItem('jWtToken')) {
            this.userService.fetchComments(localStorage.getItem('jWtToken'), this.slug)
                .subscribe(function (x) { return _this.comments = x; });
        }
    };
    ArticlComponent.prototype.delete = function () {
        var _this = this;
        this.userService.deleteArticle(localStorage.getItem('jWtToken'), this.slug)
            .subscribe(function () {
            _this.router.navigateByUrl('/profile');
        });
    };
    ArticlComponent.prototype.addComment = function (comment) {
        if (this.comments == undefined) {
            this.comments =
                {
                    comments: Array()
                };
        }
        this.comments.comments.unshift(comment.comment);
    };
    ArticlComponent.prototype.deleteComment = function (id) {
        this.comments.comments = this.comments.comments.filter(function (value, index, arr) {
            return value.id != id;
        });
    };
    ArticlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-articl',
            template: __webpack_require__(/*! ./articl.component.html */ "./src/app/articl/articl.component.html"),
            styles: [__webpack_require__(/*! ./articl.component.css */ "./src/app/articl/articl.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_fetch_articles_service__WEBPACK_IMPORTED_MODULE_2__["FetchArticlesService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], ArticlComponent);
    return ArticlComponent;
}());



/***/ }),

/***/ "./src/app/article-card/article-card.component.css":
/*!*********************************************************!*\
  !*** ./src/app/article-card/article-card.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.cardhead\r\n{\r\n    height: 50px;\r\n    width : 800px;\r\n}\r\n\r\nimg.image\r\n{\r\n    float: left;\r\n    height: 30px;\r\n    width: 30px;\r\n    margin : 12px 0px 0px 0px;\r\n}\r\n\r\ndiv.title\r\n{\r\n    float: left;\r\n}\r\n\r\nh6.title\r\n{\r\n    color : rgb(78, 192, 78);    \r\n    margin-left : 20px;\r\n    padding-top: 10px;\r\n    margin-bottom: 0px;\r\n    padding-bottom: 0px;\r\n    float: none;\r\n}\r\n\r\np.date\r\n{\r\n    float: none;\r\n    color : grey;\r\n    font-size: 12px;\r\n    margin-left : 20px;\r\n    margin-top: 0px;\r\n    padding-top: 0px; \r\n    margin-bottom: 0px; \r\n    font-weight: lighter;\r\n}\r\n\r\ndiv.likes\r\n{\r\n    float: right;\r\n    margin: 10px;\r\n    color : rgb(78, 192, 78);  \r\n    border: 1px solid;\r\n    padding: 4px 10px;\r\n    font-size: 14px;\r\n    border-radius: 3px;\r\n}\r\n\r\ndiv.likes:hover\r\n{\r\n    color : white; \r\n    background-color: rgb(78, 192, 78); \r\n}\r\n\r\ndiv.likes.active\r\n{\r\n    color : white; \r\n    background-color: rgb(78, 192, 78);  \r\n}\r\n\r\ndiv.likes.active:hover\r\n{\r\n    background-color : white; \r\n    color: rgb(78, 192, 78); \r\n}\r\n\r\np.readmore\r\n{\r\n    font-weight: lighter;\r\n    font-size: 12px;\r\n    color: grey;\r\n}\r\n"

/***/ }),

/***/ "./src/app/article-card/article-card.component.html":
/*!**********************************************************!*\
  !*** ./src/app/article-card/article-card.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"cardhead\">\n  <img [src] = 'article.author.image' class = 'image'>\n  <div class = 'title'>\n    <h6 class = 'title'>{{article.author.username}}</h6>\n    <p class = 'date'>{{article.createdAt}}</p>\n  </div>  \n  <div (click) = toggleFavorite() class = 'likes' [ngClass] = \"{'active':liked}\"><i class=\"fas fa-heart\"></i>{{article.favoritesCount}}</div>\n</div>\n<div [routerLink] = \"['/article',article.slug]\" style=\"cursor:pointer\">\n  <h3>{{article.title}}</h3>\n  <p>{{article.description}}</p>\n  <p class = 'readmore'>Read more..</p>\n</div>\n<hr>\n"

/***/ }),

/***/ "./src/app/article-card/article-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/article-card/article-card.component.ts ***!
  \********************************************************/
/*! exports provided: ArticleCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleCardComponent", function() { return ArticleCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticleCardComponent = /** @class */ (function () {
    function ArticleCardComponent(userService, auth, router) {
        this.userService = userService;
        this.auth = auth;
        this.router = router;
    }
    ArticleCardComponent.prototype.ngOnInit = function () {
        var date = new Date(this.article.createdAt);
        this.date = date.getDate().toString() + '-' + date.getMonth() + '-' + date.getFullYear();
        this.article.createdAt = this.date;
        this.liked = this.article.favorited;
    };
    ArticleCardComponent.prototype.toggleFavorite = function () {
        var _this = this;
        if (localStorage.getItem('jWtToken') == null) {
            this.router.navigateByUrl('/SignIn');
        }
        else {
            this.auth.authenticate(localStorage.getItem('jWtToken'))
                .subscribe(function (x) {
                _this.user = x;
                if (_this.user == null) {
                    _this.router.navigateByUrl('/SignIn');
                }
                if (_this.liked) {
                    _this.liked = false;
                    _this.userService.unfavoriteArticle(localStorage.getItem('jWtToken'), _this.article.slug);
                    _this.article.favoritesCount--;
                }
                else {
                    _this.liked = true;
                    _this.userService.favoriteArticle(localStorage.getItem('jWtToken'), _this.article.slug);
                    _this.article.favoritesCount++;
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ArticleCardComponent.prototype, "article", void 0);
    ArticleCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-card',
            template: __webpack_require__(/*! ./article-card.component.html */ "./src/app/article-card/article-card.component.html"),
            styles: [__webpack_require__(/*! ./article-card.component.css */ "./src/app/article-card/article-card.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ArticleCardComponent);
    return ArticleCardComponent;
}());



/***/ }),

/***/ "./src/app/comment/comment.component.css":
/*!***********************************************!*\
  !*** ./src/app/comment/comment.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.commentBody\r\n{\r\n    border : 1px solid;\r\n    border-color: gainsboro;\r\n    padding : 20px;\r\n    width : 500px;\r\n    margin: 10px 10px 0px 10px;\r\n    text-align: left;\r\n}\r\n\r\n.commentFoot\r\n{\r\n    background-color: gainsboro;\r\n    width : 500px;\r\n    text-align: left;\r\n    color : white;\r\n    margin-top : 0px;\r\n    font-size : 13px;\r\n    padding : 4px;\r\n    font-weight: lighter;\r\n    overflow: auto;\r\n}\r\n\r\n.postbutton\r\n{\r\n    font-size: 14px;\r\n    background-color: rgb(78, 184, 78);\r\n    color: white;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n    float: right;\r\n    padding: 5px 10px;\r\n    margin: 0px;\r\n}\r\n\r\ni.delete\r\n{\r\n    color: black;\r\n    float :right;\r\n    margin: 3px;\r\n}\r\n\r\ni.delete:hover\r\n{\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/comment/comment.component.html":
/*!************************************************!*\
  !*** ./src/app/comment/comment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf = 'comment' class=\"commentBody\">\n  {{comment.body}}\n</div>\n\n<form  [formGroup] = \"commentForm\" (ngSubmit) = 'postComment()'>\n<fieldset>\n<textarea *ngIf = '!comment' formControlName = \"body\" class = 'commentBody' placeholder=\"Write a comment..\"></textarea>\n</fieldset>\n<div class = 'commentFoot'>\n<input *ngIf = '!comment' class = 'postbutton' type='submit' value=\"Post Comment\">\n<span *ngIf = 'comment'> {{comment.author.username}} </span>\n<span *ngIf = 'comment'>{{comment.createdAt}}</span>\n<span *ngIf = 'authentic && comment && authentic.user.username == comment.author.username' (click) = 'deleteComment()'>\n<i class=\"fa fa-trash delete\" aria-hidden=\"true\"></i>\n</span>\n</div>\n</form>\n"

/***/ }),

/***/ "./src/app/comment/comment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comment/comment.component.ts ***!
  \**********************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommentComponent = /** @class */ (function () {
    function CommentComponent(fb, userService, route) {
        this.fb = fb;
        this.userService = userService;
        this.route = route;
        this.commentPosted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.commentDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.commentForm = this.fb.group({
            'body': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    CommentComponent.prototype.ngOnInit = function () {
    };
    CommentComponent.prototype.postComment = function () {
        var _this = this;
        var comment = {
            comment: {
                body: this.commentForm.value.body
            }
        };
        this.userService.addComment(comment, this.slug, localStorage.getItem('jWtToken'))
            .subscribe(function (x) { return _this.commentPosted.emit(x); });
    };
    CommentComponent.prototype.deleteComment = function () {
        var _this = this;
        this.userService.deleteComment(localStorage.getItem('jWtToken'), this.slug, this.comment.id)
            .subscribe(function (x) { return _this.commentDeleted.emit(_this.comment.id); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "comment", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CommentComponent.prototype, "slug", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "authentic", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CommentComponent.prototype, "commentPosted", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CommentComponent.prototype, "commentDeleted", void 0);
    CommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__(/*! ./comment.component.html */ "./src/app/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.css */ "./src/app/comment/comment.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.banner\r\n{\r\n    text-align: center;\r\n    width: 100%;\r\n    height: 180px;\r\n    background-color: rgb(78, 184, 78);\r\n}\r\n\r\nh1.mainheading\r\n{\r\n    padding-top : 30px;\r\n    color: white;\r\n    font-size: 54px;\r\n}\r\n\r\np.maindesc\r\n{\r\n    font-size: 24px;\r\n    color : white;\r\n    font-weight: lighter;\r\n}\r\n\r\ndiv.container\r\n{\r\n    width: 65%;\r\n    margin: 40px 10px 30px 80px;\r\n    float: left;\r\n}\r\n\r\ndiv.tagcontainer\r\n{\r\n    float : right;\r\n    width: 25%;\r\n    margin : 60px 25px 20px 10px;\r\n    background-color: beige;\r\n   \r\n}\r\n\r\n.taglink\r\n{\r\n    color : black;\r\n    cursor : pointer;\r\n}\r\n\r\n.tags\r\n{\r\n    color : grey;\r\n    margin: 2px;\r\n}\r\n\r\nnav.navbar\r\n{\r\n    height: 50px;\r\n    padding: 0px;\r\n}\r\n\r\nul.navlist\r\n{\r\n    float:left;\r\n    margin:0px;\r\n    padding: 0px;\r\n}\r\n\r\nli.navlistitem\r\n{\r\n    display: inline-block;\r\n    border-bottom: 2px solid;\r\n    padding : 10px;\r\n    color : grey;\r\n    cursor : pointer;\r\n}\r\n\r\nli.navlistitem.active\r\n{\r\n    color : rgb(78, 192, 78);\r\n}\r\n\r\nhr.line\r\n{\r\n    float: none; \r\n    width: 100%; \r\n    padding:0px; \r\n    margin:0px;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'banner'>\n  <h1 class = 'mainheading' >conduit</h1>\n  <p class = 'maindesc'>A place to share your knowledge</p>\n</div>\n\n<div class = 'container'>\n<nav class = 'navbar'>\n  <ul class = 'navlist'>\n    <li class = 'navlistitem' [ngClass] = \"{'active':!tagSelected}\" (click) = 'globalfeed()' >Global Feed</li>\n    <li *ngIf = 'tagSelected' class = 'navlistitem' [ngClass] = \"{'active':tagSelected}\">#{{currentTag}}</li>\n  </ul>\n<hr class=\"line\">\n</nav>\n<p *ngIf = '!globalFeedArticles'> Loading Articles......</p>\n<div *ngIf = '!tagSelected'>\n<div *ngFor = \"let article of globalFeedArticles\" >\n  <app-article-card [article] = 'article'></app-article-card>\n</div>\n</div>\n<div *ngIf = 'tagSelected'>\n    <div *ngFor = \"let article of tagArticles\" >\n      <app-article-card [article] = 'article'></app-article-card>\n    </div>\n    </div>\n</div>\n\n<div class=\"tagcontainer\">\n  <h3 class = \"tags\">Tags</h3>\n    <ul>\n      <li *ngFor = 'let tag of tags'><a class = 'taglink' (click) = 'tagfunc(tag)' >{{tag}}</a></li>\n    </ul>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_fetch_articles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/fetch-articles.service */ "./src/app/services/fetch-articles.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(getArticles, router) {
        this.getArticles = getArticles;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getArticles.fetchGlobalFeed()
            .subscribe(function (x) {
            _this.globalFeedArticles = x.articles;
        });
        this.getArticles.fetchTags()
            .subscribe(function (x) {
            _this.tags = x;
            _this.tags = _this.tags.tags;
        });
    };
    HomeComponent.prototype.globalfeed = function () {
        this.tagSelected = false;
    };
    HomeComponent.prototype.tagfunc = function (tag) {
        var _this = this;
        this.tagSelected = true;
        this.currentTag = tag;
        this.getArticles.fetchtagArticle(tag)
            .subscribe(function (x) {
            _this.tagArticles = x;
            _this.tagArticles = _this.tagArticles.articles;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_fetch_articles_service__WEBPACK_IMPORTED_MODULE_2__["FetchArticlesService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav.navbar\r\n{\r\n    height: 60px;\r\n    overflow: hidden;\r\n    box-shadow: 0px 2px 2px;\r\n}\r\n\r\na.brand\r\n{\r\n    font-size: 22px;\r\n    color: rgb(78, 184, 78);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: bold;\r\n    margin-left: 60px;\r\n    float: left;\r\n}\r\n\r\na.brand:hover\r\n{\r\n    -webkit-text-decoration-line: none;\r\n            text-decoration-line: none;\r\n}\r\n\r\nul.navbarlist\r\n{\r\n    float: right;\r\n}\r\n\r\nli.navbarlistitem\r\n{\r\n    display: inline-block;\r\n    margin: 70px 10px 60px 10px;\r\n}\r\n\r\na.navbarlink.active\r\n{\r\n    color:black;\r\n}\r\n\r\na.navbarlink.active:hover\r\n{\r\n    -webkit-text-decoration-line: none;\r\n            text-decoration-line: none;\r\n    color: black;\r\n}\r\n\r\na.navbarlink\r\n{\r\n    color:rgb(212, 204, 204);\r\n}\r\n\r\na.navbarlink:hover\r\n{\r\n    color:rgb(121, 117, 117);\r\n    -webkit-text-decoration-line: none;\r\n            text-decoration-line: none;\r\n}\r\n\r\na.navbarlink.logout:hover\r\n{\r\n    color : red\r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\" >\n  <div>\n    <a class = \"brand\" [routerLink] = \"['/']\">conduit</a>\n  </div>\n  <ul *ngIf = '!isAuthenticated' class=\"navbarlist\">\n    <li class=\"navbarlistitem\">\n      <a class=\"navbarlink \"  [ngClass] = \"{'active':router.url === '/'}\" [routerLink] = \"['/']\">Home</a>\n    </li>\n    <li class=\"navbarlistitem\">\n      <a class=\"navbarlink\" [ngClass] = \"{'active':router.url === '/SignUp'}\" [routerLink] = \"['/SignUp']\">Sign Up</a>\n    </li>\n    <li class=\"navbarlistitem\">\n      <a class=\"navbarlink\"  [ngClass] = \"{'active':router.url === '/SignIn'}\" [routerLink] = \"['/SignIn']\">Sign in</a>\n    </li> \n  </ul>\n  <ul *ngIf = 'isAuthenticated' class=\"navbarlist\">\n      <li class=\"navbarlistitem\">\n        <a class=\"navbarlink \"  [ngClass] = \"{'active':router.url === '/'}\" [routerLink] = \"['/']\">Home</a>\n      </li>\n      <li class=\"navbarlistitem\">\n        <a class=\"navbarlink\" [ngClass] = \"{'active':router.url === '/editor'}\" [routerLink] = \"['/editor']\">New Article</a>\n      </li>\n      <li class=\"navbarlistitem\">\n          <a *ngIf = 'user' class=\"navbarlink\" [ngClass] = \"{'active':router.url === '/profile'}\" [routerLink] = \"['/profile']\">{{user.user.username}}</a>\n      </li> \n      <li class=\"navbarlistitem\">\n        <a class=\"navbarlink logout\" (click) = 'logout()' [routerLink] = \"['/']\">Log Out</a>\n      </li> \n    </ul>\n\n</nav> "

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
        this.logoutNotification = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        localStorage.clear();
        this.logoutNotification.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], NavbarComponent.prototype, "isAuthenticated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NavbarComponent.prototype, "logoutNotification", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/newarticle/newarticle.component.css":
/*!*****************************************************!*\
  !*** ./src/app/newarticle/newarticle.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.container\r\n{\r\n    text-align: center;\r\n    width: 70%;\r\n}\r\n\r\n.inputbox\r\n{\r\n    width : 800px;\r\n    padding : 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\ninput.inputbox.title\r\n{\r\n    font-size: 20px;\r\n}\r\n\r\ninput.publishbutton\r\n{\r\n    font-size: 20px;\r\n    background-color: rgb(78, 184, 78);\r\n    color: white;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n    float: right;\r\n    padding: 10px 20px;\r\n}\r\n\r\n.error\r\n{\r\n    color : red;\r\n    text-align: left;\r\n}"

/***/ }),

/***/ "./src/app/newarticle/newarticle.component.html":
/*!******************************************************!*\
  !*** ./src/app/newarticle/newarticle.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n    <br>\n    <br>\n    <br>\n    <ul class=\"error\">\n      <div *ngFor = 'let error of errors'>\n        <li >{{error}}</li>\n      </div>  \n    </ul>\n  <form [formGroup] = \"articleForm\" (ngSubmit) = 'createOrUpdateArticle()'>\n  <fieldset>\n  <input class=\"inputbox title\"  formControlName = \"title\" placeholder=\"Article Title\"  type = 'text'>\n  </fieldset>\n  <br>\n  <fieldset>\n      <input class=\"inputbox\"   formControlName = \"description\" placeholder=\"What's this article about?\"  type = 'text'>\n  </fieldset>\n  <br>\n  <fieldset>\n    <textarea class=\"inputbox\" rows = \"6\" formControlName = \"body\" placeholder=\"Write your article\"  type = 'text'></textarea>\n  </fieldset>\n  <br>\n  <fieldset>\n      <input class=\"inputbox\"  formControlName = \"taglist\" placeholder=\"Enter tags\"  type = 'text'>\n    </fieldset>\n    <br>\n  <input type = 'submit' class = \"publishbutton\" value=\"Publish\">\n  </form>\n  </div>"

/***/ }),

/***/ "./src/app/newarticle/newarticle.component.ts":
/*!****************************************************!*\
  !*** ./src/app/newarticle/newarticle.component.ts ***!
  \****************************************************/
/*! exports provided: NewarticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewarticleComponent", function() { return NewarticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewarticleComponent = /** @class */ (function () {
    function NewarticleComponent(articleService, fb, route, router) {
        this.articleService = articleService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.articleForm = this.fb.group({
            'title': [''],
            'description': [''],
            'body': [''],
            'taglist': ['']
        });
    }
    NewarticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (x) { return _this.slug = x.slug; });
    };
    NewarticleComponent.prototype.createOrUpdateArticle = function () {
        var _this = this;
        this.errors = [];
        var taglist = this.articleForm.value.taglist.split(' ');
        var article = {
            article: {
                title: this.articleForm.value.title,
                description: this.articleForm.value.description,
                body: this.articleForm.value.body,
                taglist: taglist
            }
        };
        if (this.slug == undefined) {
            this.articleService.writeArticle(localStorage.getItem('jWtToken'), article)
                .subscribe(function (article) {
                _this.article = article;
                _this.router.navigateByUrl('/article/' + _this.article.article.slug);
            }, function (err) {
                if (err.error.errors.body) {
                    for (var i = 0; i < err.error.errors.body.length; i++) {
                        err.error.errors.body[i] = 'body ' + err.error.errors.body[i];
                    }
                    _this.errors = _this.errors.concat(err.error.errors.body);
                }
                if (err.error.errors.description) {
                    for (var i = 0; i < err.error.errors.description.length; i++) {
                        err.error.errors.description[i] = 'description ' + err.error.errors.description[i];
                    }
                    _this.errors = _this.errors.concat(err.error.errors.description);
                }
                if (err.error.errors.title) {
                    for (var i = 0; i < err.error.errors.title.length; i++) {
                        err.error.errors.title[i] = 'title ' + err.error.errors.title[i];
                    }
                    _this.errors = _this.errors.concat(err.error.errors.title);
                }
            });
        }
        else {
            this.articleService.updateArticle(localStorage.getItem('jWtToken'), article, this.slug)
                .subscribe(function (article) {
                _this.updatedArticle = article;
                console.log(_this.updatedArticle);
                _this.router.navigateByUrl('/article/' + _this.updatedArticle.article.slug);
            });
        }
    };
    NewarticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newarticle',
            template: __webpack_require__(/*! ./newarticle.component.html */ "./src/app/newarticle/newarticle.component.html"),
            styles: [__webpack_require__(/*! ./newarticle.component.css */ "./src/app/newarticle/newarticle.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewarticleComponent);
    return NewarticleComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.banner\r\n{\r\n    text-align: center;\r\n    width: 100%;\r\n    height: 180px;\r\n    background-color: rgb(78, 184, 78);\r\n}\r\n\r\nh1.mainheading\r\n{\r\n    padding-top : 30px;\r\n    color: white;\r\n    font-size: 54px;\r\n}\r\n\r\np.maindesc\r\n{\r\n    font-size: 24px;\r\n    color : white;\r\n    font-weight: lighter;\r\n}\r\n\r\ndiv.container\r\n{\r\n    width: 65%;\r\n    margin: 40px 10px 30px 80px;\r\n\r\n}\r\n\r\nnav.navbar\r\n{\r\n    height: 50px;\r\n    padding: 0px;\r\n}\r\n\r\nul.navlist\r\n{\r\n    float:left;\r\n    margin:0px;\r\n    padding: 0px;\r\n}\r\n\r\nli.navlistitem\r\n{\r\n    display: inline-block;\r\n    border-bottom: 2px solid;\r\n    padding : 10px;\r\n    color : grey;\r\n    cursor : pointer;\r\n}\r\n\r\nli.navlistitem.active\r\n{\r\n    color : rgb(78, 192, 78);\r\n}\r\n\r\nhr.line\r\n{\r\n    float: none; \r\n    width: 100%; \r\n    padding:0px; \r\n    margin:0px;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class = 'container'>\n  <nav class = 'navbar'>\n    <ul class = 'navlist'>\n      <li class = 'navlistitem' [ngClass] = \"{'active':yourarticleSelected}\" (click) = 'loadYourArticles()'>Your articles</li>\n      <li class = 'navlistitem' [ngClass] = \"{'active':!yourarticleSelected}\" (click) = 'loadYourFavoriteArticles()'>Your favorite articles</li>\n    </ul>\n  <hr class=\"line\">\n  </nav>\n  <p *ngIf = '!yourArticles'> Loading Articles......</p>\n<div *ngIf = 'yourarticleSelected'>\n  <div *ngFor = \"let article of yourArticles\" >\n    <app-article-card [article] = 'article'></app-article-card>\n  </div>\n</div>\n<div *ngIf = '!yourarticleSelected'>\n    <div *ngFor = \"let article of favoriteArticles\" >\n      <app-article-card [article] = 'article'></app-article-card>\n    </div>\n  </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fetch_articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/fetch-articles.service */ "./src/app/services/fetch-articles.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(getArticles, user) {
        this.getArticles = getArticles;
        this.user = user;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.currentUser(localStorage.getItem('jWtToken')).subscribe(function (user) {
            _this.getArticles.fetchUserArticle(user.user.username)
                .subscribe(function (x) { return _this.yourArticles = x.articles; });
            _this.getArticles.fetchFavoriteUserArticle(user.user.username)
                .subscribe(function (x) { return _this.favoriteArticles = x.articles; });
        });
        this.yourarticleSelected = true;
    };
    ProfileComponent.prototype.loadYourArticles = function () {
        this.yourarticleSelected = true;
    };
    ProfileComponent.prototype.loadYourFavoriteArticles = function () {
        this.yourarticleSelected = false;
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_fetch_articles_service__WEBPACK_IMPORTED_MODULE_1__["FetchArticlesService"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.authenticationUrl = 'http://localhost:3939/api/user';
    }
    AuthenticationService.prototype.authenticate = function (jWtToken) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Token ' + jWtToken
            })
        };
        return this.http.get(this.authenticationUrl, httpOptions);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/fetch-articles.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/fetch-articles.service.ts ***!
  \****************************************************/
/*! exports provided: FetchArticlesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchArticlesService", function() { return FetchArticlesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FetchArticlesService = /** @class */ (function () {
    function FetchArticlesService(http) {
        this.http = http;
        this.globalFeedUrl = 'http://localhost:3939/api/articles';
        this.tagUrl = 'https://conduit.productionready.io//api/tags';
    }
    FetchArticlesService.prototype.fetchGlobalFeed = function () {
        return this.http.get(this.globalFeedUrl);
    };
    FetchArticlesService.prototype.fetchArticle = function (slug) {
        return this.http.get(this.globalFeedUrl + '/' + slug);
    };
    FetchArticlesService.prototype.fetchUserArticle = function (user) {
        return this.http.get(this.globalFeedUrl + '?author=' + user);
    };
    FetchArticlesService.prototype.fetchFavoriteUserArticle = function (user) {
        return this.http.get(this.globalFeedUrl + '?favorited=' + user);
    };
    FetchArticlesService.prototype.fetchtagArticle = function (tag) {
        return this.http.get(this.globalFeedUrl + '?tag=' + tag);
    };
    FetchArticlesService.prototype.fetchTags = function () {
        return this.http.get(this.tagUrl);
    };
    FetchArticlesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FetchArticlesService);
    return FetchArticlesService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.registerUserUrl = 'http://localhost:3939/api/users';
        this.signInUrl = 'http://localhost:3939/api/users/login';
        this.articleUrl = 'http://localhost:3939/api/articles';
        this.userUrl = 'http://localhost:3939/api/user';
    }
    UserService.prototype.signup = function (user) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.registerUserUrl, JSON.stringify(user), httpOptions);
    };
    UserService.prototype.signin = function (user) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.signInUrl, JSON.stringify(user), httpOptions);
    };
    UserService.prototype.currentUser = function (jWtToken) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Token ' + jWtToken
            })
        };
        return this.http.get(this.userUrl, httpOptions);
    };
    UserService.prototype.writeArticle = function (jWtToken, article) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + jWtToken
            })
        };
        return this.http.post(this.articleUrl, JSON.stringify(article), httpOptions);
    };
    UserService.prototype.updateArticle = function (jWtToken, article, slug) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + jWtToken
            })
        };
        return this.http.put(this.articleUrl + '/' + slug, JSON.stringify(article), httpOptions);
    };
    UserService.prototype.deleteArticle = function (jWtToken, slug) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + jWtToken
            })
        };
        return this.http.delete(this.articleUrl + '/' + slug, httpOptions);
    };
    UserService.prototype.favoriteArticle = function (jWtToken, slug) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + jWtToken
            })
        };
        return this.http.post(this.articleUrl + '/' + slug + '/favorite', {}, httpOptions);
    };
    UserService.prototype.unfavoriteArticle = function (jWtToken, slug) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + jWtToken
            })
        };
        return this.http.delete(this.articleUrl + '/' + slug + '/favorite', httpOptions);
    };
    UserService.prototype.fetchComments = function (jWtToken, slug) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Token ' + jWtToken
            })
        };
        return this.http.get(this.articleUrl + '/' + slug + '/comments', httpOptions);
    };
    UserService.prototype.addComment = function (comment, slug, jWtToken) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + jWtToken
            })
        };
        return this.http.post(this.articleUrl + '/' + slug + '/comments', JSON.stringify(comment), httpOptions);
    };
    UserService.prototype.deleteComment = function (jWtToken, slug, id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + jWtToken
            })
        };
        return this.http.delete(this.articleUrl + '/' + slug + '/comments/' + id, httpOptions);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
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

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.container\r\n{\r\n    text-align: center;\r\n    width: 49%;\r\n}\r\n\r\ninput.inputbox\r\n{\r\n    width : 600px;\r\n    padding : 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\ninput.signinbutton\r\n{\r\n    font-size: 20px;\r\n    background-color: rgb(78, 184, 78);\r\n    color: white;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n    float: right;\r\n    padding: 10px 20px;\r\n}\r\n\r\n.error\r\n{\r\n    color : red;\r\n    text-align: left;\r\n}"

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <br>\n    <br>\n    <br>\n  <h1>Sign In</h1>\n  <a [routerLink] = \"['/SignUp']\">Need an account?</a>\n  <br>\n  <br>\n  <ul class=\"error\">\n    <div *ngFor = 'let error of errors'>\n      <li >{{error}}</li>\n    </div>  \n  </ul>\n  <form [formGroup] = \"authForm\" (ngSubmit) = 'signIn()'>\n  <br>\n  <br>\n  <fieldset>\n      <input class=\"inputbox\"  formControlName = \"email\" placeholder=\"Email\"  type = 'text'>\n  </fieldset>\n  <br>\n  <br>\n  <fieldset>\n    <input class=\"inputbox\"  formControlName = \"password\" placeholder=\"Password\"  type = 'password'>\n  </fieldset><br>\n  <br>\n  <input type = 'submit' class = \"signinbutton\" value=\"Sign In\">\n  </form>\n  </div>"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = /** @class */ (function () {
    function SigninComponent(fb, registerUser, route) {
        this.fb = fb;
        this.registerUser = registerUser;
        this.route = route;
        this.user = {
            "user": { email: '',
                password: '' }
        };
        this.authForm = this.fb.group({
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.signIn = function () {
        var _this = this;
        this.errors = [];
        this.user.user = this.authForm.value;
        this.registerUser.signin(this.user)
            .subscribe(function (x) {
            localStorage.setItem('jWtToken', x.user.token);
            _this.route.navigateByUrl('/');
        }, function (err) {
            for (var i = 0; i < err.error.errors["email or password"].length; i++) {
                err.error.errors["email or password"][i] = 'email or password ' + err.error.errors["email or password"][i];
            }
            _this.errors = _this.errors.concat(err.error.errors["email or password"]);
        });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.container\r\n{\r\n    text-align: center;\r\n    width: 49%;\r\n}\r\n\r\ninput.inputbox\r\n{\r\n    width : 600px;\r\n    padding : 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\ninput.signupbutton\r\n{\r\n    font-size: 20px;\r\n    background-color: rgb(78, 184, 78);\r\n    color: white;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n    float: right;\r\n    padding: 10px 20px;\r\n}\r\n\r\n.error\r\n{\r\n    color : red;\r\n    text-align: left;\r\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <br>\n  <br>\n<h1>Sign Up</h1>\n<a [routerLink] = \"['/SignIn']\">Have an account?</a>\n<br>\n<br>\n<ul class=\"error\">\n  <div *ngFor = 'let error of errors'>\n    <li >{{error}}</li>\n  </div>\n</ul>\n<form [formGroup] = \"authForm\" (ngSubmit) = 'signUp()'>\n<fieldset>\n<input class=\"inputbox\"  formControlName = \"username\" placeholder=\"User Name\"  type = 'text'>\n</fieldset>\n<br>\n<br>\n<fieldset>\n    <input class=\"inputbox\"  formControlName = \"email\" placeholder=\"Email\"  type = 'text'>\n</fieldset>\n<br>\n<br>\n<fieldset>\n  <input class=\"inputbox\"  formControlName = \"password\" placeholder=\"Password\"  type = 'password'>\n</fieldset><br>\n<br>\n<input type = 'submit' class = \"signupbutton\" value=\"Sign Up\">\n</form>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(registerUser, fb, route) {
        this.registerUser = registerUser;
        this.fb = fb;
        this.route = route;
        this.user = {
            "user": { username: '',
                email: '',
                password: '' }
        };
        this.authForm = this.fb.group({
            'username': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.errors = [];
    };
    SignupComponent.prototype.signUp = function () {
        var _this = this;
        this.user.user = this.authForm.value;
        this.errors = [];
        console.log(this.user);
        this.registerUser.signup(this.user).subscribe(function (x) {
            localStorage.setItem('jWtToken', x.user.token);
            _this.route.navigateByUrl('/');
        }, function (err) {
            for (var i = 0; i < err.error.errors.email.length; i++) {
                err.error.errors.email[i] = 'email ' + err.error.errors.email[i];
            }
            for (var i = 0; i < err.error.errors.password.length; i++) {
                err.error.errors.password[i] = 'password ' + err.error.errors.password[i];
            }
            for (var i = 0; i < err.error.errors.username.length; i++) {
                err.error.errors.username[i] = 'username ' + err.error.errors.username[i];
            }
            _this.errors = _this.errors.concat(err.error.errors.email);
            _this.errors = _this.errors.concat(err.error.errors.password);
            _this.errors = _this.errors.concat(err.error.errors.username);
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\suyashkhanna\nodeServer\conduit\conduitBlog_Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map