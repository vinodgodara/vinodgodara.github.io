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

/***/ "./src/Services/Login/login.service.ts":
/*!*********************************************!*\
  !*** ./src/Services/Login/login.service.ts ***!
  \*********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Admin = { name: 'Admin', password: 'admin' };
var userNameKey = 'userName';
var LoginService = /** @class */ (function () {
    function LoginService() {
    }
    LoginService.prototype.verifyAdminUser = function (user) {
        if (Admin.name === user.name && Admin.password === user.password) {
            localStorage.setItem(userNameKey, Admin.name);
            return true;
        }
        return false;
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/Services/Student/student.service.ts":
/*!*************************************************!*\
  !*** ./src/Services/Student/student.service.ts ***!
  \*************************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var studentListKey = 'students';
var StudentService = /** @class */ (function () {
    /**
     * Initialize the student list in local storage as an empty list if it doesn't a;ready exists.
     */
    function StudentService() {
        var studentList = JSON.parse(localStorage.getItem(studentListKey));
        if (studentList == null || studentList === undefined) {
            studentList = [];
        }
        localStorage.setItem(studentListKey, JSON.stringify(studentList));
    }
    /**
     * Returns the list of students on board.
     */
    StudentService.prototype.getStudents = function () {
        return JSON.parse(localStorage.getItem(studentListKey));
    };
    /**
     * Registers a new student.
     * @param student The new student object to be registered.
     */
    StudentService.prototype.onBoardStudent = function (student) {
        var studentList = JSON.parse(localStorage.getItem('students'));
        // If identifier has a valid value, that means student is already on board.
        // In this case just update the student details.
        if (student.identifier != null && student.identifier !== undefined && student.identifier !== 0) {
            for (var i = 0; i < studentList.length; i++) {
                if (studentList[i].identifier === student.identifier) {
                    studentList[i] = student;
                    localStorage.setItem(studentListKey, JSON.stringify(studentList));
                    break;
                }
            }
        }
        else {
            // Save the new student details.
            // Create a unique identifier for the student.
            student.identifier = Date.now();
            studentList[studentList.length] = student;
            console.log(studentList);
            localStorage.setItem(studentListKey, JSON.stringify(studentList));
        }
    };
    /**
     * Delete the student from the list.
     * @param id Identifier of the student to be deleted.
     */
    StudentService.prototype.deleteStudent = function (id) {
        var studentList;
        if (id !== null && id !== undefined) {
            studentList = JSON.parse(localStorage.getItem(studentListKey));
            for (var i = 0; i < studentList.length; i++) {
                if (studentList[i].identifier === id) {
                    studentList.splice(i, 1);
                    localStorage.setItem(studentListKey, JSON.stringify(studentList));
                    break;
                }
            }
        }
    };
    /**
     * Returns the student for provided identiier.
     * @param id The identifier of the required student.
     */
    StudentService.prototype.getStudent = function (id) {
        var studentList;
        if (id != null || id !== undefined) {
            studentList = JSON.parse(localStorage.getItem('students'));
            for (var i = 0; i < studentList.length; i++) {
                if (studentList[i].identifier === id) {
                    return studentList[i];
                }
            }
        }
    };
    StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudentService);
    return StudentService;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _onboard_form_onboard_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onboard-form/onboard-form.component */ "./src/app/onboard-form/onboard-form.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _view_student_list_view_student_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-student-list/view-student-list.component */ "./src/app/view-student-list/view-student-list.component.ts");
/* harmony import */ var _onboarding_app_onboarding_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./onboarding-app/onboarding-app.component */ "./src/app/onboarding-app/onboarding-app.component.ts");








var routes = [
    {
        path: 'login',
        component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"],
        canActivate: []
    },
    {
        path: 'portal',
        component: _onboarding_app_onboarding_app_component__WEBPACK_IMPORTED_MODULE_7__["OnboardingAppComponent"],
        canActivate: [],
        children: [
            {
                path: 'onBoardForm',
                component: _onboard_form_onboard_form_component__WEBPACK_IMPORTED_MODULE_3__["OnboardFormComponent"],
                canActivate: []
            },
            {
                path: 'view',
                component: _view_student_list_view_student_list_component__WEBPACK_IMPORTED_MODULE_6__["ViewStudentListComponent"],
                canActivate: []
            },
            {
                path: '',
                redirectTo: 'onBoardForm',
                pathMatch: 'full',
                canActivate: []
            },
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'student-onboard-portal';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['./login']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _onboarding_app_onboarding_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./onboarding-app/onboarding-app.component */ "./src/app/onboarding-app/onboarding-app.component.ts");
/* harmony import */ var _onboard_form_onboard_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./onboard-form/onboard-form.component */ "./src/app/onboard-form/onboard-form.component.ts");
/* harmony import */ var _view_student_list_view_student_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-student-list/view-student-list.component */ "./src/app/view-student-list/view-student-list.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _pipes_studentfilter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/studentfilter.pipe */ "./src/app/pipes/studentfilter.pipe.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _onboarding_app_onboarding_app_component__WEBPACK_IMPORTED_MODULE_7__["OnboardingAppComponent"],
                _onboard_form_onboard_form_component__WEBPACK_IMPORTED_MODULE_8__["OnboardFormComponent"],
                _view_student_list_view_student_list_component__WEBPACK_IMPORTED_MODULE_9__["ViewStudentListComponent"],
                _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_10__["LoginPageComponent"],
                _pipes_studentfilter_pipe__WEBPACK_IMPORTED_MODULE_11__["StudentfilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login-page/login-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-page/login-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  color: white;\r\n  padding: 14px 20px;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100px;\r\n  margin: 8px 0 8px 2px;\r\n}\r\n\r\nbutton:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\nbutton:disabled {\r\n  background-color: gray;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n  width: 300px;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.outer-box {\r\n  width: 95vw;\r\n  height: 90vh;\r\n  border: 2px solid black;\r\n  /*padding: 50px;*/\r\n  /*padding-top: 50%;*/\r\n  margin: 20px;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n\r\n.login-page-heading {\r\n  text-align: center;\r\n  font-size: large;\r\n  color: blue;\r\n}\r\n\r\n.main-div {\r\n  margin-top: 12%;\r\n}\r\n\r\n.login-button {\r\n  background-color: #4CAF50;\r\n}\r\n\r\n.reset-button {\r\n  background-color: #A0A0A0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUlBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbjogOHB4IDAgOHB4IDJweDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5cclxuXHJcbi5vdXRlci1ib3gge1xyXG4gIHdpZHRoOiA5NXZ3O1xyXG4gIGhlaWdodDogOTB2aDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAvKnBhZGRpbmc6IDUwcHg7Ki9cclxuICAvKnBhZGRpbmctdG9wOiA1MCU7Ki9cclxuICBtYXJnaW46IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmxvZ2luLXBhZ2UtaGVhZGluZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbi5tYWluLWRpdiB7XHJcbiAgbWFyZ2luLXRvcDogMTIlO1xyXG59XHJcblxyXG4ubG9naW4tYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG59XHJcblxyXG4ucmVzZXQtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTBBMEEwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login-page/login-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-page/login-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"outer-box\" #userForm=\"ngForm\" (ngSubmit)=\"doLogin()\">\n\n  <div class=\"main-div\">\n    <div class=\"login-page-heading\">\n      Login School Admin\n    </div>\n\n    <div class=\"form-element\">\n      <input\n        type=\"text\"\n        [(ngModel)]=\"adminModel.name\"\n        placeholder=\"User Name\"\n        #userName=\"ngModel\"\n        required\n        name=\"name\"\n      />\n    </div>\n    <div>hint: Admin</div>\n    <div class=\"form-element\">\n      <input\n        type=\"password\"\n        [(ngModel)]=\"adminModel.password\"\n        placeholder=\"Password\"\n        #password=\"ngModel\"\n        name=\"password\"\n        required\n      />\n    </div>\n    <div>hint: admin</div>\n    <button class=\"login-button\" type=\"submit\" [disabled]=\"!userForm.valid\" >Login</button>\n    <button class=\"reset-button\" type=\"reset\" [disabled]=\"userName.invalid && password.invalid\">Reset</button>\n  </div>\n</form>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_Login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/Login/login.service */ "./src/Services/Login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.adminModel = {
            name: '',
            password: null
        };
    }
    LoginPageComponent.prototype.ngOnInit = function () { };
    /**
     * Verify the login details provided by the user.
     */
    LoginPageComponent.prototype.doLogin = function () {
        if (this.loginService.verifyAdminUser(this.adminModel)) {
            this.router.navigate(['./portal']);
        }
        else {
        }
    };
    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.css */ "./src/app/login-page/login-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_Login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/onboard-form/onboard-form.component.css":
/*!*********************************************************!*\
  !*** ./src/app/onboard-form/onboard-form.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 20%;\r\n  margin: 8px 0 8px 2px;\r\n  display: inline-block;\r\n}\r\n\r\n.main-table {\r\n  height: 100%;\r\n}\r\n\r\n.label-name {\r\n  text-align: left;\r\n  font-size: larger;\r\n  width: 250px;\r\n}\r\n\r\ninput {\r\n  height: 20px;\r\n  margin-top: 0px;\r\n  width: 100%;\r\n}\r\n\r\nselect {\r\n  height: 26px;\r\n  margin-top: 0px;\r\n  width: 100%;\r\n}\r\n\r\n.form {\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n}\r\n\r\nbutton:disabled {\r\n  background-color: gray;\r\n}\r\n\r\ninput[type=\"checkbox\"]{\r\n  width: 15px;\r\n  height: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n.form {\r\n  height: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25ib2FyZC1mb3JtL29uYm9hcmQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9vbmJvYXJkLWZvcm0vb25ib2FyZC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgbWFyZ2luOiA4cHggMCA4cHggMnB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLm1haW4tdGFibGUge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmxhYmVsLW5hbWUge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYnV0dG9uOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl17XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/onboard-form/onboard-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/onboard-form/onboard-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form\" [formGroup]=\"onBoardForm\" align=\"center\">\r\n\r\n  <table class=\"main-table\">\r\n    <tr>\r\n      <td class=\"label-name\">Student Name</td>\r\n      <td><input style=\"margin-top: 10px\" type=\"text\" placeholder=\"Student Name\" formControlName=\"name\" /></td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"label-name\">Category</td>\r\n      <td>\r\n        <select id=\"categoryDropDown\" name=\"categoryDropDown\" style=\"margin-top: 10px\" formControlName=\"category\">\r\n          <option value=\"\" disabled selected hidden>Category</option>\r\n          <option *ngFor=\"let category of categories\"\r\n                  [ngValue]=\"category.type\">{{ category.type }}</option>\r\n        </select>\r\n      </td>\r\n    </tr>\r\n    <br>\r\n    <tr>\r\n      <td class=\"label-name\">Documents</td>\r\n      <td>\r\n        <table>\r\n          <tr>\r\n            <td>Domicile *</td>\r\n            <td><input class=\"check-box\" type=\"checkbox\" placeholder=\"Domicile\" required=\"true\" formControlName=\"domicile\"/></td>\r\n          </tr>\r\n          <tr>\r\n            <td>Birth Certificate *</td>\r\n            <td><input class=\"check-box\" type=\"checkbox\" placeholder=\"Domicile\" required=\"true\" formControlName=\"birthCertificate\"/></td>\r\n          </tr>\r\n          <tr>\r\n            <td>Mark Sheets *</td>\r\n            <td><input class=\"check-box\" type=\"checkbox\" placeholder=\"Domicile\" required=\"true\" formControlName=\"markSheets\"/></td>\r\n          </tr>\r\n          <tr>\r\n            <td>Police Clearance\r\n              <label *ngIf=\"onBoardForm.get('category').value == categories[1].type\">*</label>\r\n            </td>\r\n            <td><input class=\"check-box\" type=\"checkbox\" placeholder=\"Domicile\" required=\"{{ onBoardForm.get('category').value == categories[1].type}}\" formControlName=\"policeClearance\"/></td>\r\n          </tr>\r\n          <tr>\r\n            <td>Passport\r\n              <label *ngIf=\"onBoardForm.get('category').value == categories[1].type\">*</label>\r\n            </td>\r\n            <td><input class=\"check-box\" type=\"checkbox\" placeholder=\"Domicile\" required=\"{{ onBoardForm.get('category').value == categories[1].type}}\" formControlName=\"passport\"/></td>\r\n          </tr>\r\n          <tr>\r\n            <td>Declaration *</td>\r\n            <td><input class=\"check-box\" type=\"checkbox\" placeholder=\"Domicile\" required=\"true\" formControlName=\"declaration\"/></td>\r\n          </tr>\r\n        </table>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"label-name\">DOB</td>\r\n      <td><input style=\"margin-top: 10px\" type=\"date\" placeholder=\"Date of Birth\" formControlName=\"dob\" /></td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"label-name\">Father's Name</td>\r\n      <td><input style=\"margin-top: 10px\" type=\"text\" placeholder=\"Father Name\" formControlName=\"fatherName\" /></td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"label-name\">Mother's Name</td>\r\n      <td><input style=\"margin-top: 10px\" type=\"text\" placeholder=\"Mother Name\" formControlName=\"motherName\" /></td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"label-name\">Last Class Score</td>\r\n      <td><input style=\"margin-top: 10px\" type=\"number\" [min]=\"0\" [max]=\"100\" placeholder=\"Last Class Score\" formControlName=\"lastClassScore\" /></td>\r\n    </tr>\r\n  </table>\r\n\r\n  <input type=\"number\" placeholder=\"Identifier\" hidden=\"true\" required=\"false\" formControlName=\"identifier\"/>\r\n\r\n\r\n\r\n  <button class=\"w3-btn w3-blue\" type=\"submit\" (click)=\"onBoard()\" [disabled]=\"!onBoardForm.valid\" >Onboard<i class=\"w3-medium fa fa-check\"></i>\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/onboard-form/onboard-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/onboard-form/onboard-form.component.ts ***!
  \********************************************************/
/*! exports provided: OnboardFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardFormComponent", function() { return OnboardFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_Student_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/Student/student.service */ "./src/Services/Student/student.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var idParam = 'id';
var editParam = 'edit';
var OnboardFormComponent = /** @class */ (function () {
    function OnboardFormComponent(fb, studentService, router, route) {
        this.fb = fb;
        this.studentService = studentService;
        this.router = router;
        this.route = route;
        this.categories = [{ id: '1', type: 'Domestic' }, { id: '2', type: 'International' }];
        // Initialize the form.
        this.onBoardForm = this.fb.group({
            identifier: 0,
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            domicile: false,
            birthCertificate: false,
            markSheets: false,
            policeClearance: false,
            passport: false,
            declaration: false,
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fatherName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            motherName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastClassScore: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100)]]
        });
    }
    OnboardFormComponent.prototype.ngOnInit = function () {
        // Capture the query parameter.
        // If query parameter has a valid value, form should be opened in edit and view mode
        // and student properties should be pre populated.
        this.id = +this.route.snapshot.queryParams[idParam];
        // Check if form should be opened in edit mode or view mode.
        var editMode = this.route.snapshot.queryParams[editParam];
        // If form is in edit or view mode, fetch the student details from service.
        if (this.id != null && this.id !== undefined && !isNaN(this.id)) {
            this.student = this.studentService.getStudent(this.id);
            this.onBoardForm.setValue(this.student);
        }
        // If form is in view mode, disable the form.
        if (editMode !== null && editMode !== undefined && editMode === 'false') {
            this.onBoardForm.disable();
        }
    };
    OnboardFormComponent.prototype.ngDoCheck = function () {
    };
    /**
     * On board a new student.
     */
    OnboardFormComponent.prototype.onBoard = function () {
        var studentToSave = this.onBoardForm.getRawValue();
        // If student object is not null, it means form is opened in edit mode and student
        // already exists in the DB.
        if (this.student !== null && this.student !== undefined) {
            studentToSave.identifier = this.student.identifier;
        }
        this.studentService.onBoardStudent(studentToSave);
        // Reset the parameters.
        this.onBoardForm.reset();
        this.id = null;
        this.student = null;
        // Route to view component.
        this.router.navigate(['./portal/view']);
    };
    OnboardFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-onboard-form',
            template: __webpack_require__(/*! ./onboard-form.component.html */ "./src/app/onboard-form/onboard-form.component.html"),
            styles: [__webpack_require__(/*! ./onboard-form.component.css */ "./src/app/onboard-form/onboard-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _Services_Student_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], OnboardFormComponent);
    return OnboardFormComponent;
}());



/***/ }),

/***/ "./src/app/onboarding-app/onboarding-app.component.css":
/*!*************************************************************!*\
  !*** ./src/app/onboarding-app/onboarding-app.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outer-box {\r\n  width: 95vw;\r\n  height: 90vh;\r\n  border: 2px solid black;\r\n  /*padding: 50px;*/\r\n  margin: 20px;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n\r\n.heading {\r\n  width: 50%;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n\r\n.admin-name {\r\n  width: 50%;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n\r\n.header {\r\n  height: 15%;\r\n}\r\n\r\n.content {\r\n  height: 10%;\r\n}\r\n\r\n.routed-component {\r\n  height: 70%;\r\n}\r\n\r\nbutton {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 20%;\r\n  margin: 8px 0 8px 2px;\r\n  display: inline-block;\r\n}\r\n\r\n.navigation-button {\r\n  display: inline-block;\r\n  width: 100%;\r\n  text-align: left;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25ib2FyZGluZy1hcHAvb25ib2FyZGluZy1hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLFVBQVU7RUFDVixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9vbmJvYXJkaW5nLWFwcC9vbmJvYXJkaW5nLWFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyLWJveCB7XHJcbiAgd2lkdGg6IDk1dnc7XHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIC8qcGFkZGluZzogNTBweDsqL1xyXG4gIG1hcmdpbjogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYWRtaW4tbmFtZSB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBoZWlnaHQ6IDE1JTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGhlaWdodDogMTAlO1xyXG59XHJcblxyXG4ucm91dGVkLWNvbXBvbmVudCB7XHJcbiAgaGVpZ2h0OiA3MCU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBtYXJnaW46IDhweCAwIDhweCAycHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbi1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/onboarding-app/onboarding-app.component.html":
/*!**************************************************************!*\
  !*** ./src/app/onboarding-app/onboarding-app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outer-box\">\n  <div class=\"header\">\n    <div class=\"heading\"><h2>On Boarding App</h2></div>\n    <div class=\"admin-name\"><h2>{{userName}}</h2></div>\n  </div>\n\n  <hr>\n\n  <div class=\"content\">\n    <div class=\"navigation-button\">\n      <button [routerLink]=\"['onBoardForm']\" routerLinkActive=\"active\" ngDefaultControl>Onboarding Form</button>\n      <button [routerLink]=\"['/portal/view']\" routerLinkActive=\"active\">List Students</button>\n    </div>\n\n  </div>\n\n  <div class=\"routed-component\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/onboarding-app/onboarding-app.component.ts":
/*!************************************************************!*\
  !*** ./src/app/onboarding-app/onboarding-app.component.ts ***!
  \************************************************************/
/*! exports provided: OnboardingAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingAppComponent", function() { return OnboardingAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OnboardingAppComponent = /** @class */ (function () {
    function OnboardingAppComponent() {
    }
    OnboardingAppComponent.prototype.ngOnInit = function () {
        this.userName = localStorage.getItem('userName');
    };
    OnboardingAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-onboarding-app',
            template: __webpack_require__(/*! ./onboarding-app.component.html */ "./src/app/onboarding-app/onboarding-app.component.html"),
            styles: [__webpack_require__(/*! ./onboarding-app.component.css */ "./src/app/onboarding-app/onboarding-app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OnboardingAppComponent);
    return OnboardingAppComponent;
}());



/***/ }),

/***/ "./src/app/pipes/studentfilter.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/studentfilter.pipe.ts ***!
  \*********************************************/
/*! exports provided: StudentfilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentfilterPipe", function() { return StudentfilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudentfilterPipe = /** @class */ (function () {
    function StudentfilterPipe() {
    }
    StudentfilterPipe.prototype.transform = function (value, searchString, category) {
        var filteredList = value;
        // Filter the data according to value of the search box.
        if (searchString !== undefined && searchString !== null && searchString !== '' && value) {
            filteredList = filteredList.filter(function (data) { return (data.name.toLowerCase()).indexOf(searchString.toLowerCase()) > -1; });
        }
        // Filter the data according to the category selected from drop down.
        if (category !== undefined && category !== null && category !== '' && category !== 'All' && value) {
            filteredList = filteredList.filter(function (data) { return (data.category === category); });
        }
        return filteredList;
    };
    StudentfilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'studentfilter'
        })
    ], StudentfilterPipe);
    return StudentfilterPipe;
}());



/***/ }),

/***/ "./src/app/view-student-list/view-student-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/view-student-list/view-student-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filters {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  height: 10%;\r\n  margin-left: 2%;\r\n  margin-right: 2%;\r\n}\r\n\r\n.search-box {\r\n  height: 30px;\r\n  width: 30%;\r\n}\r\n\r\n.drop-down {\r\n  height: 36px;\r\n  width: 30%;\r\n}\r\n\r\ninput{\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nselect{\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n.student-block {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: antiquewhite;\r\n  width: 30%;\r\n  margin-top: 7px;\r\n  margin-left: 10%;\r\n  margin-right: 10%;\r\n  border-radius: 20px;\r\n  height: 120px;\r\n  padding-top: 2%;\r\n}\r\n\r\n.student-list {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: end;\r\n  overflow-y: scroll;\r\n  height: 85%;\r\n}\r\n\r\n.student-display-component {\r\n  height: 100%;\r\n}\r\n\r\nbutton {\r\n  color: white;\r\n  padding: 14px 20px;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 20%;\r\n  margin: 8px 0 8px 2px;\r\n  height: 2px;\r\n  text-align: center;\r\n  line-height: 2px;\r\n}\r\n\r\nbutton:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.student-name, .student-category {\r\n  text-align: center;\r\n}\r\n\r\n.student-name {\r\n  text-align: center;\r\n  font-weight: bold;\r\n}\r\n\r\n.student-category {\r\n  text-align: center;\r\n  font-style: bold;\r\n}\r\n\r\n.edit-button {\r\n  background-color: #4CAF50;\r\n}\r\n\r\n.view-button {\r\n  background-color: #A0A0A0;\r\n}\r\n\r\n.delete-button {\r\n  background-color: #FF0000;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1zdHVkZW50LWxpc3Qvdmlldy1zdHVkZW50LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctc3R1ZGVudC1saXN0L3ZpZXctc3R1ZGVudC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBoZWlnaHQ6IDEwJTtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcclxufVxyXG5cclxuLnNlYXJjaC1ib3gge1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4uZHJvcC1kb3duIHtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5zZWxlY3R7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnN0dWRlbnQtYmxvY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgcGFkZGluZy10b3A6IDIlO1xyXG59XHJcblxyXG4uc3R1ZGVudC1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBoZWlnaHQ6IDg1JTtcclxufVxyXG5cclxuLnN0dWRlbnQtZGlzcGxheS1jb21wb25lbnQge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBtYXJnaW46IDhweCAwIDhweCAycHg7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAycHg7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uc3R1ZGVudC1uYW1lLCAuc3R1ZGVudC1jYXRlZ29yeSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3R1ZGVudC1uYW1lIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zdHVkZW50LWNhdGVnb3J5IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zdHlsZTogYm9sZDtcclxufVxyXG5cclxuLmVkaXQtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG59XHJcblxyXG4udmlldy1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBMEEwQTA7XHJcbn1cclxuXHJcbi5kZWxldGUtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/view-student-list/view-student-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/view-student-list/view-student-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"student-display-component\" *ngIf=\"students\">\n  <div class=\"filters\">\n    <div class=\"drop-down\">\n      <select id=\"categoryDropDown\" name=\"categoryDropDown\" style=\"margin-top: 10px\" [(ngModel)]='category'>\n        <option value=\"All\">All</option>\n        <option *ngFor=\"let cat of categories\"\n                [ngValue]=\"cat.type\">{{ cat.type }}</option>\n      </select>\n\n    </div>\n    <div class=\"search-box\">\n      <input style=\"margin-top: 10px\" type=\"text\" placeholder=\"Search Student\" [(ngModel)]='searchString'>\n    </div>\n  </div>\n\n  <br>\n\n  <div *ngIf=\"(students | studentfilter: searchString).length == 0\">\n    <h3>No students found.</h3>\n  </div>\n\n\n  <div class=\"student-list\" *ngIf=\"(students | studentfilter: searchString : category).length != 0\">\n    <div class=\"student-block\" *ngFor=\"let student of students | studentfilter: searchString : category\">\n      <div class=\"student-name\">{{student.name}}</div>\n      <div class=\"student-category\">{{student.category}}</div>\n      <div>\n        <button class=\"edit-button\" [routerLink]=\"['/portal/onBoardForm']\" [queryParams]=\"{id: student.identifier, edit: true}\">Edit</button>\n        <button class=\"view-button\" [routerLink]=\"['/portal/onBoardForm']\" [queryParams]=\"{id: student.identifier, edit: false}\">View</button>\n        <button class=\"delete-button\" (click)=\"deleteStudent(student.identifier)\">Delete</button>\n      </div>\n\n    </div>\n    <br>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/view-student-list/view-student-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/view-student-list/view-student-list.component.ts ***!
  \******************************************************************/
/*! exports provided: ViewStudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewStudentListComponent", function() { return ViewStudentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_Student_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/Student/student.service */ "./src/Services/Student/student.service.ts");



var ViewStudentListComponent = /** @class */ (function () {
    function ViewStudentListComponent(studentService) {
        this.studentService = studentService;
        this.categories = [{ id: '1', type: 'Domestic' }, { id: '2', type: 'International' }];
        this.students = [];
        this.category = 'All';
    }
    /**
     * Initialize the student list.
     */
    ViewStudentListComponent.prototype.ngOnInit = function () {
        this.students = this.studentService.getStudents();
    };
    /**
     * Delete the student with provided identifier.
     * @param id Identifier of the student to be deleted.
     */
    ViewStudentListComponent.prototype.deleteStudent = function (id) {
        var isDelete = confirm('Are you sure you want to delete?');
        if (isDelete) {
            this.studentService.deleteStudent(id);
            this.students = this.studentService.getStudents();
        }
    };
    ViewStudentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-student-list',
            template: __webpack_require__(/*! ./view-student-list.component.html */ "./src/app/view-student-list/view-student-list.component.html"),
            styles: [__webpack_require__(/*! ./view-student-list.component.css */ "./src/app/view-student-list/view-student-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_Student_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]])
    ], ViewStudentListComponent);
    return ViewStudentListComponent;
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

module.exports = __webpack_require__(/*! D:\Workshop\2. Angular\student-onboard-portal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map