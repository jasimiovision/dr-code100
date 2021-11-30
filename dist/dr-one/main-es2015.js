(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sample_sample_list_sample_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sample/sample-list/sample-list.component */ "./src/app/sample/sample-list/sample-list.component.ts");
/* harmony import */ var _sample_sample_create_sample_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample/sample-create/sample-create.component */ "./src/app/sample/sample-create/sample-create.component.ts");
/* harmony import */ var _pages_edit_edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/edit/edit-page/edit-page.component */ "./src/app/pages/edit/edit-page/edit-page.component.ts");
/* harmony import */ var _pages_home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home-page/home-page.component */ "./src/app/pages/home/home-page/home-page.component.ts");
/* harmony import */ var _pages_landing_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/landing/landing-page/landing-page.component */ "./src/app/pages/landing/landing-page/landing-page.component.ts");
/* harmony import */ var _pages_report_report_page_report_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/report/report-page/report-page.component */ "./src/app/pages/report/report-page/report-page.component.ts");
/* harmony import */ var _pages_report_configuration_page_report_configuration_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/report-configuration-page/report-configuration-page.component */ "./src/app/pages/report-configuration-page/report-configuration-page.component.ts");
/* harmony import */ var _pages_template_template_page_template_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/template/template-page/template-page.component */ "./src/app/pages/template/template-page/template-page.component.ts");
/* harmony import */ var _pages_visualization_visualization_page_visualization_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/visualization/visualization-page/visualization-page.component */ "./src/app/pages/visualization/visualization-page/visualization-page.component.ts");
/* harmony import */ var _sample_sample_image_sample_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sample/sample-image/sample-image.component */ "./src/app/sample/sample-image/sample-image.component.ts");
/* harmony import */ var _pages_upload_upload_page_upload_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/upload/upload-page/upload-page.component */ "./src/app/pages/upload/upload-page/upload-page.component.ts");
/* harmony import */ var _pages_admin_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/admin/admin-page/admin-page.component */ "./src/app/pages/admin/admin-page/admin-page.component.ts");
/* harmony import */ var _pages_loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/loading-page/loading-page.component */ "./src/app/pages/loading-page/loading-page.component.ts");
/* harmony import */ var _general_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./general-services/guards/auth.guard */ "./src/app/general-services/guards/auth.guard.ts");
/* harmony import */ var _general_services_guards_admin_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./general-services/guards/admin.guard */ "./src/app/general-services/guards/admin.guard.ts");
/* harmony import */ var _general_services_guards_no_client_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./general-services/guards/no-client.guard */ "./src/app/general-services/guards/no-client.guard.ts");
/* harmony import */ var _general_services_guards_permission_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./general-services/guards/permission.guard */ "./src/app/general-services/guards/permission.guard.ts");





















// BUG: WHEN RELOADING ON PAGE WITH PERMISSION GUARD, IT WILL AUTO RELOAD BACK TO THE HOME PAGE
const routes = [
    { path: "", component: _pages_landing_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"] },
    { path: "home", component: _pages_home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"], canActivate: [_general_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] },
    { path: "edit/:id", component: _pages_edit_edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_4__["EditPageComponent"], canActivate: [_general_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _general_services_guards_no_client_guard__WEBPACK_IMPORTED_MODULE_17__["NoClientGuard"], _general_services_guards_permission_guard__WEBPACK_IMPORTED_MODULE_18__["PermissionGuard"]] },
    { path: "edit/:id/:keyid", component: _pages_edit_edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_4__["EditPageComponent"], canActivate: [_general_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _general_services_guards_no_client_guard__WEBPACK_IMPORTED_MODULE_17__["NoClientGuard"], _general_services_guards_permission_guard__WEBPACK_IMPORTED_MODULE_18__["PermissionGuard"]] },
    { path: "visualization/:id", component: _pages_visualization_visualization_page_visualization_page_component__WEBPACK_IMPORTED_MODULE_10__["VisualizationPageComponent"], canActivate: [_general_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _general_services_guards_permission_guard__WEBPACK_IMPORTED_MODULE_18__["PermissionGuard"]] },
    { path: "report/:id", component: _pages_report_report_page_report_page_component__WEBPACK_IMPORTED_MODULE_7__["ReportPageComponent"], canActivate: [_general_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _general_services_guards_no_client_guard__WEBPACK_IMPORTED_MODULE_17__["NoClientGuard"], _general_services_guards_permission_guard__WEBPACK_IMPORTED_MODULE_18__["PermissionGuard"]] },
    { path: "report-config/:id", component: _pages_report_configuration_page_report_configuration_page_component__WEBPACK_IMPORTED_MODULE_8__["ReportConfigurationPageComponent"], canActivate: [_general_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _general_services_guards_permission_guard__WEBPACK_IMPORTED_MODULE_18__["PermissionGuard"]] },
    { path: "template/:id", component: _pages_template_template_page_template_page_component__WEBPACK_IMPORTED_MODULE_9__["TemplatePageComponent"], canActivate: [_general_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _general_services_guards_admin_guard__WEBPACK_IMPORTED_MODULE_16__["AdminGuard"]] },
    { path: "sample", component: _sample_sample_list_sample_list_component__WEBPACK_IMPORTED_MODULE_2__["SampleListComponent"], canActivate: [_general_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] },
    { path: "sample/create", component: _sample_sample_create_sample_create_component__WEBPACK_IMPORTED_MODULE_3__["SampleCreateComponent"], canActivate: [_general_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] },
    { path: "sample/edit/:id", component: _sample_sample_create_sample_create_component__WEBPACK_IMPORTED_MODULE_3__["SampleCreateComponent"], canActivate: [_general_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] },
    { path: "sample/image", component: _sample_sample_image_sample_image_component__WEBPACK_IMPORTED_MODULE_11__["SampleImageComponent"], canActivate: [_general_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] },
    { path: "upload", component: _pages_upload_upload_page_upload_page_component__WEBPACK_IMPORTED_MODULE_12__["UploadPageComponent"], canActivate: [_general_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _general_services_guards_no_client_guard__WEBPACK_IMPORTED_MODULE_17__["NoClientGuard"]] },
    // { path: "setting/:id", component: UploadPageComponent, canActivate: [AuthGuard, NoClientGuard, PermissionGuard]},
    { path: "admin", component: _pages_admin_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_13__["AdminPageComponent"], canActivate: [_general_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _general_services_guards_admin_guard__WEBPACK_IMPORTED_MODULE_16__["AdminGuard"]] },
    { path: "loading/:id", component: _pages_loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_14__["LoadingPageComponent"], canActivate: [_general_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _general_services_guards_permission_guard__WEBPACK_IMPORTED_MODULE_18__["PermissionGuard"]] },
    // Redirect unknown routes to "/"
    { path: "**", redirectTo: "home", pathMatch: "full" }
    // // Playground Paths
    // { path: "sample", component: SampleListComponent, canActivate: [AuthGuard] },
    // { path: "sample/create", component: SampleCreateComponent, canActivate: [AuthGuard] },
    // { path: "sample/edit/:id", component: SampleCreateComponent, canActivate: [AuthGuard] },
    // { path: "sample/image", component: SampleImageComponent, canActivate: [AuthGuard] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [_general_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _general_services_guards_admin_guard__WEBPACK_IMPORTED_MODULE_16__["AdminGuard"], _general_services_guards_no_client_guard__WEBPACK_IMPORTED_MODULE_17__["NoClientGuard"], _general_services_guards_permission_guard__WEBPACK_IMPORTED_MODULE_18__["PermissionGuard"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: [_general_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _general_services_guards_admin_guard__WEBPACK_IMPORTED_MODULE_16__["AdminGuard"], _general_services_guards_no_client_guard__WEBPACK_IMPORTED_MODULE_17__["NoClientGuard"], _general_services_guards_permission_guard__WEBPACK_IMPORTED_MODULE_18__["PermissionGuard"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _general_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general-services/auth.service */ "./src/app/general-services/auth.service.ts");
/* harmony import */ var _general_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general-services/global.service */ "./src/app/general-services/global.service.ts");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "./src/app/top-bar/top-bar.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _sidenav_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidenav/sidenav/sidenav.component */ "./src/app/sidenav/sidenav/sidenav.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");










const _c0 = ["topBar"];
function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "samp", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(authService, gs) {
        this.authService = authService;
        this.gs = gs;
    }
    ngOnInit() {
        this.authService.autoAuthUser();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.topBar = _t.first);
    } }, decls: 10, vars: 4, consts: [[1, "site-container"], [1, "sticky-top"], ["topBar", ""], [1, "mat-app-background", "site"], ["mode", "over", 3, "opened", "fixedInViewport", "fixedTopGap"], [1, "d-flex", "flex-column", "h-100", "dark"], [1, "site-content-container"], ["class", "loading-container", 4, "ngIf"], [1, "loading-container"], ["src", "../../assets/loading.gif", 1, "loading"], [1, "mt-1"], [2, "font-size", "0.9em"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-top-bar", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-sidenav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-sidenav-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_7_Template, 5, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.gs.sideOpened)("fixedInViewport", true)("fixedTopGap", ctx.gs.sideNavOffset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gs.loading);
    } }, directives: [_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__["TopBarComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _sidenav_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__["SidenavComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], styles: [".site-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n}\n\n.site[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.site-content-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n  height: 100%;\n  width: 100vw;\n  background: black;\n  opacity: 0.9;\n}\n\n.loading[_ngcontent-%COMP%] {\n  width: 6rem;\n}\n\napp-footer[_ngcontent-%COMP%] {\n  z-index: 1020;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXGRyLW9uZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFFQSxzQkFBQTtBQ0FKOztBREdBO0VBQ0ksT0FBQTtBQ0FKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtBQ0dKOztBRERBO0VBQ0ksYUFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpdGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIC8vIHdpZHRoOiAxMDB2dztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zaXRle1xyXG4gICAgZmxleDogMTtcclxufVxyXG4uc2l0ZS1jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4ubG9hZGluZy1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6MDtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDAuOTtcclxufVxyXG4ubG9hZGluZ3tcclxuICAgIHdpZHRoOiA2cmVtO1xyXG59XHJcbmFwcC1mb290ZXJ7XHJcbiAgICB6LWluZGV4OiAxMDIwO1xyXG59IiwiLnNpdGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zaXRlIHtcbiAgZmxleDogMTtcbn1cblxuLnNpdGUtY29udGVudC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5sb2FkaW5nIHtcbiAgd2lkdGg6IDZyZW07XG59XG5cbmFwcC1mb290ZXIge1xuICB6LWluZGV4OiAxMDIwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _general_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _general_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }]; }, { topBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['topBar', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_resize_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-resize-event */ "./node_modules/angular-resize-event/__ivy_ngcc__/fesm2015/angular-resize-event.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "./src/app/top-bar/top-bar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _sample_sample_create_sample_create_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./sample/sample-create/sample-create.component */ "./src/app/sample/sample-create/sample-create.component.ts");
/* harmony import */ var _sample_sample_list_sample_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./sample/sample-list/sample-list.component */ "./src/app/sample/sample-list/sample-list.component.ts");
/* harmony import */ var _pages_edit_edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/edit/edit-page/edit-page.component */ "./src/app/pages/edit/edit-page/edit-page.component.ts");
/* harmony import */ var _pages_home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/home/home-page/home-page.component */ "./src/app/pages/home/home-page/home-page.component.ts");
/* harmony import */ var _pages_landing_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/landing/landing-page/landing-page.component */ "./src/app/pages/landing/landing-page/landing-page.component.ts");
/* harmony import */ var _pages_landing_login_login_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/landing/login/login.component */ "./src/app/pages/landing/login/login.component.ts");
/* harmony import */ var _pages_report_report_page_report_page_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/report/report-page/report-page.component */ "./src/app/pages/report/report-page/report-page.component.ts");
/* harmony import */ var _pages_visualization_visualization_page_visualization_page_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/visualization/visualization-page/visualization-page.component */ "./src/app/pages/visualization/visualization-page/visualization-page.component.ts");
/* harmony import */ var _pages_visualization_floor_plan_floor_plan_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/visualization/floor-plan/floor-plan.component */ "./src/app/pages/visualization/floor-plan/floor-plan.component.ts");
/* harmony import */ var _sample_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./sample/image-upload/image-upload.component */ "./src/app/sample/image-upload/image-upload.component.ts");
/* harmony import */ var _sample_image_view_image_view_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./sample/image-view/image-view.component */ "./src/app/sample/image-view/image-view.component.ts");
/* harmony import */ var _sample_sample_image_sample_image_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./sample/sample-image/sample-image.component */ "./src/app/sample/sample-image/sample-image.component.ts");
/* harmony import */ var _sidenav_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./sidenav/sidenav/sidenav.component */ "./src/app/sidenav/sidenav/sidenav.component.ts");
/* harmony import */ var _pages_admin_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/admin/admin-page/admin-page.component */ "./src/app/pages/admin/admin-page/admin-page.component.ts");
/* harmony import */ var _pages_loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/loading-page/loading-page.component */ "./src/app/pages/loading-page/loading-page.component.ts");
/* harmony import */ var _general_services_object_pipe__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./general-services/object.pipe */ "./src/app/general-services/object.pipe.ts");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _pages_upload_upload_page_upload_page_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/upload/upload-page/upload-page.component */ "./src/app/pages/upload/upload-page/upload-page.component.ts");
/* harmony import */ var _general_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./general-services/auth-interceptor */ "./src/app/general-services/auth-interceptor.ts");
/* harmony import */ var _pages_report_configuration_page_report_configuration_page_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/report-configuration-page/report-configuration-page.component */ "./src/app/pages/report-configuration-page/report-configuration-page.component.ts");
/* harmony import */ var _pages_template_template_page_template_page_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./pages/template/template-page/template-page.component */ "./src/app/pages/template/template-page/template-page.component.ts");








/** Components from @angular/material */


















/** Custome made components */


















/** Components from External Library */


/** HTTP Interceptors **/




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _general_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_46__["AuthInterceptor"], multi: true }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            angular_resize_event__WEBPACK_IMPORTED_MODULE_7__["AngularResizedEventModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__["DragDropModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_44__["CKEditorModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_26__["TopBarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"],
        _sample_sample_create_sample_create_component__WEBPACK_IMPORTED_MODULE_28__["SampleCreateComponent"],
        _sample_sample_list_sample_list_component__WEBPACK_IMPORTED_MODULE_29__["SampleListComponent"],
        _pages_edit_edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_30__["EditPageComponent"],
        _pages_home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_31__["HomePageComponent"],
        _pages_landing_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_32__["LandingPageComponent"],
        _pages_landing_login_login_component__WEBPACK_IMPORTED_MODULE_33__["LoginComponent"],
        _pages_report_report_page_report_page_component__WEBPACK_IMPORTED_MODULE_34__["ReportPageComponent"],
        _pages_visualization_visualization_page_visualization_page_component__WEBPACK_IMPORTED_MODULE_35__["VisualizationPageComponent"],
        _pages_visualization_floor_plan_floor_plan_component__WEBPACK_IMPORTED_MODULE_36__["FloorPlanComponent"],
        _sidenav_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_40__["SidenavComponent"],
        _sample_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_37__["ImageUploadComponent"],
        _sample_image_view_image_view_component__WEBPACK_IMPORTED_MODULE_38__["ImageViewComponent"],
        _sample_sample_image_sample_image_component__WEBPACK_IMPORTED_MODULE_39__["SampleImageComponent"],
        _pages_upload_upload_page_upload_page_component__WEBPACK_IMPORTED_MODULE_45__["UploadPageComponent"],
        _pages_admin_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_41__["AdminPageComponent"],
        _general_services_object_pipe__WEBPACK_IMPORTED_MODULE_43__["ObjectPipe"],
        _pages_loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_42__["LoadingPageComponent"],
        _pages_report_configuration_page_report_configuration_page_component__WEBPACK_IMPORTED_MODULE_47__["ReportConfigurationPageComponent"],
        _pages_template_template_page_template_page_component__WEBPACK_IMPORTED_MODULE_48__["TemplatePageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        angular_resize_event__WEBPACK_IMPORTED_MODULE_7__["AngularResizedEventModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__["DragDropModule"],
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_44__["CKEditorModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_26__["TopBarComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"],
                    _sample_sample_create_sample_create_component__WEBPACK_IMPORTED_MODULE_28__["SampleCreateComponent"],
                    _sample_sample_list_sample_list_component__WEBPACK_IMPORTED_MODULE_29__["SampleListComponent"],
                    _pages_edit_edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_30__["EditPageComponent"],
                    _pages_home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_31__["HomePageComponent"],
                    _pages_landing_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_32__["LandingPageComponent"],
                    _pages_landing_login_login_component__WEBPACK_IMPORTED_MODULE_33__["LoginComponent"],
                    _pages_report_report_page_report_page_component__WEBPACK_IMPORTED_MODULE_34__["ReportPageComponent"],
                    _pages_visualization_visualization_page_visualization_page_component__WEBPACK_IMPORTED_MODULE_35__["VisualizationPageComponent"],
                    _pages_visualization_floor_plan_floor_plan_component__WEBPACK_IMPORTED_MODULE_36__["FloorPlanComponent"],
                    _sidenav_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_40__["SidenavComponent"],
                    _sample_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_37__["ImageUploadComponent"],
                    _sample_image_view_image_view_component__WEBPACK_IMPORTED_MODULE_38__["ImageViewComponent"],
                    _sample_sample_image_sample_image_component__WEBPACK_IMPORTED_MODULE_39__["SampleImageComponent"],
                    _pages_upload_upload_page_upload_page_component__WEBPACK_IMPORTED_MODULE_45__["UploadPageComponent"],
                    _pages_admin_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_41__["AdminPageComponent"],
                    _general_services_object_pipe__WEBPACK_IMPORTED_MODULE_43__["ObjectPipe"],
                    _pages_loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_42__["LoadingPageComponent"],
                    _pages_report_configuration_page_report_configuration_page_component__WEBPACK_IMPORTED_MODULE_47__["ReportConfigurationPageComponent"],
                    _pages_template_template_page_template_page_component__WEBPACK_IMPORTED_MODULE_48__["TemplatePageComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    angular_resize_event__WEBPACK_IMPORTED_MODULE_7__["AngularResizedEventModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__["DragDropModule"],
                    _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_44__["CKEditorModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"]
                ],
                // to leverage Angular Elements API to render into a static element
                // read more at: https://egghead.io/lessons/angular-transform-an-angular-component-into-a-native-custom-element
                // entryComponents: [FloorPlanComponent], 
                // schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
                providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _general_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_46__["AuthInterceptor"], multi: true }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 0, consts: [[2, "background-color", "#212121"], [1, "text-center", "text-white", "py-3"], ["href", "https://performance-rotors.com/", 1, "text-white"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 2020 Copyright: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Performance Rotors Pte. Ltd.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/general-services/auth-interceptor.ts":
/*!******************************************************!*\
  !*** ./src/app/general-services/auth-interceptor.ts ***!
  \******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/general-services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthInterceptor {
    constructor(authService, _router) {
        this.authService = authService;
        this._router = _router;
    }
    // modify all request leaving our angular app
    intercept(req, next) {
        const authToken = this.authService.getAuthData()["token"];
        //TODO: Dynamically Fetch ProjectID Based On Current Project
        const extractedURL = this._router.url.split("/");
        const urlLast = extractedURL[extractedURL.length - 1];
        const currentProject = (urlLast.length === 24) ? urlLast : "";
        const authRequest = req.clone({
            headers: req.headers
                .set("Authorization", "Bearer " + authToken)
                .set("ProjectID", currentProject)
        });
        return next.handle(authRequest);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/general-services/auth.service.ts":
/*!**************************************************!*\
  !*** ./src/app/general-services/auth.service.ts ***!
  \**************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class AuthService {
    constructor(_router, http) {
        this._router = _router;
        this.http = http;
        this.authData = {
            username: "",
            token: "",
            role: "",
            permission: []
        };
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    getAuthData() {
        return this.authData;
    }
    setAuthData(data) {
        this.authData = data;
    }
    getIsAuth() {
        if (this.authData["token"] === "") {
            return false;
        }
        else {
            return true;
        }
    }
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    login(username, password) {
        const loginData = { username: username, password: password };
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + "/auth/login", loginData)
            .subscribe(response => {
            const token = response.token;
            if (token) {
                this.parseToken(token, response.expiresIn);
                this._router.navigate(["/home"]);
            }
        }, error => {
            window.alert("Invalid Credentials");
        });
    }
    parseToken(token, expiry) {
        const expiresInDuration = expiry;
        this.parseJWT(token);
        this.setAuthTimer(expiresInDuration);
        this.authStatusListener.next(true);
        // stores token and date in localStorage
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
        this.saveAuthDataStorage(token, expirationDate);
    }
    autoAuthUser() {
        const authInformation = this.getAuthDataStorage();
        if (authInformation) {
            const now = new Date();
            const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
            if (expiresIn > 0) {
                this.parseJWT(authInformation.token);
                this.setAuthTimer(expiresIn / 1000);
                this.authStatusListener.next(true);
            }
        }
    }
    logout() {
        this.authData = {
            username: "",
            token: "",
            role: "",
            permission: []
        };
        this.authStatusListener.next(false);
        // clear timeout and localStorage
        clearTimeout(this.tokenTimer);
        this.clearAuthDataStorage();
        this._router.navigate(["/"]);
    }
    parseJWT(token) {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        let tokenPayload = JSON.parse(jsonPayload);
        this.authData = {
            username: tokenPayload["username"],
            token: token,
            role: tokenPayload["role"],
            permission: tokenPayload["permission"]
        };
    }
    setAuthTimer(duration) {
        this.tokenTimer = setTimeout(() => {
            if (confirm('Do you want to stay logged in?')) {
                // Save it!
                this.autoAuthUser();
            }
            else {
                // Do nothing!
                this.logout();
            }
        }, duration * 3000); //duration*
    }
    saveAuthDataStorage(token, expirationDate) {
        localStorage.setItem("token", token);
        localStorage.setItem("expiration", expirationDate.toISOString());
    }
    clearAuthDataStorage() {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
    }
    getAuthDataStorage() {
        const token = localStorage.getItem("token");
        const expirationDate = localStorage.getItem("expiration");
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate)
        };
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: "root" }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/general-services/global.service.ts":
/*!****************************************************!*\
  !*** ./src/app/general-services/global.service.ts ***!
  \****************************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class GlobalService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.sideOpened = false;
        this.sideNavOffset = 0;
        this.loading = false;
        this.title = "home";
        this.titleToRouteMap = {
            "report": "Report Editor",
            "report-config": "Report Configuration",
            "template": "Template Editor",
            "edit": "Defect Annotation",
            "visualization": "Defect Visualisation Overview",
            "upload": "Upload Project Information",
            "home": "Projects",
            "setting": "Project Settings",
            "admin": "Admin Dashboard"
        };
        this.getProjectType = () => this.projectType;
        this.setProjectType = (type) => { this.projectType = type; };
    }
    sideToggle() {
        this.sideOpened = !this.sideOpened;
    }
    load() { this.loading = true; }
    loaded() { this.loading = false; }
    isSideToggleInactive() {
        return (this.title === "home" || this.title === "admin");
    }
    getPageTitle() {
        const extractedPage = this.router.url.split("/")[1];
        const pageTitle = this.titleToRouteMap[extractedPage];
        this.title = extractedPage;
        return pageTitle;
    }
}
GlobalService.ɵfac = function GlobalService_Factory(t) { return new (t || GlobalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
GlobalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalService, factory: GlobalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/general-services/guards/admin.guard.ts":
/*!********************************************************!*\
  !*** ./src/app/general-services/guards/admin.guard.ts ***!
  \********************************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/general-services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AdminGuard {
    constructor(authService, _router) {
        this.authService = authService;
        this._router = _router;
    }
    canActivate(route, state) {
        const authData = this.authService.getAuthData();
        const isAdmin = authData.role === "admin";
        if (!isAdmin) {
            this._router.navigate(['/home']);
        }
        return isAdmin;
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/general-services/guards/auth.guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/general-services/guards/auth.guard.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/general-services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(authService, _router) {
        this.authService = authService;
        this._router = _router;
    }
    canActivate(route, state) {
        const authData = this.authService.getAuthData();
        const isAuth = this.authService.getIsAuth();
        if (!isAuth) {
            this._router.navigate(['/']);
        }
        return isAuth;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/general-services/guards/no-client.guard.ts":
/*!************************************************************!*\
  !*** ./src/app/general-services/guards/no-client.guard.ts ***!
  \************************************************************/
/*! exports provided: NoClientGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoClientGuard", function() { return NoClientGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/general-services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class NoClientGuard {
    constructor(authService, _router) {
        this.authService = authService;
        this._router = _router;
    }
    canActivate(route, state) {
        const authData = this.authService.getAuthData();
        const isClient = authData.role === "client";
        if (isClient) {
            this._router.navigate(['/home']);
        }
        return !isClient;
    }
}
NoClientGuard.ɵfac = function NoClientGuard_Factory(t) { return new (t || NoClientGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NoClientGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NoClientGuard, factory: NoClientGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoClientGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/general-services/guards/permission.guard.ts":
/*!*************************************************************!*\
  !*** ./src/app/general-services/guards/permission.guard.ts ***!
  \*************************************************************/
/*! exports provided: PermissionGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionGuard", function() { return PermissionGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/general-services/auth.service.ts");
/* harmony import */ var _pages_services_allProject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/services/allProject.service */ "./src/app/pages/services/allProject.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class PermissionGuard {
    constructor(authService, allProjectService, _router) {
        this.authService = authService;
        this.allProjectService = allProjectService;
        this._router = _router;
    }
    canActivate(route, state) {
        const authData = this.authService.getAuthData();
        var hasPermission;
        if (authData.role === "admin") {
            hasPermission = true;
        }
        else {
            hasPermission = authData.permission.includes(route.params["id"]);
        }
        if (!hasPermission) {
            this._router.navigate(['/home']);
        }
        return hasPermission;
    }
}
PermissionGuard.ɵfac = function PermissionGuard_Factory(t) { return new (t || PermissionGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_pages_services_allProject_service__WEBPACK_IMPORTED_MODULE_2__["AllProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
PermissionGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PermissionGuard, factory: PermissionGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissionGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _pages_services_allProject_service__WEBPACK_IMPORTED_MODULE_2__["AllProjectService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/general-services/object.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/general-services/object.pipe.ts ***!
  \*************************************************/
/*! exports provided: ObjectPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectPipe", function() { return ObjectPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ObjectPipe {
    transform(data, type) {
        let newData = type == "values" ? Object.values(data) : type == "keys" ? Object.keys(data) : data;
        return newData;
    }
}
ObjectPipe.ɵfac = function ObjectPipe_Factory(t) { return new (t || ObjectPipe)(); };
ObjectPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "object", type: ObjectPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObjectPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'object',
                pure: false
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/admin/admin-page/admin-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/admin/admin-page/admin-page.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageComponent", function() { return AdminPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_userSetting_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/userSetting.service */ "./src/app/pages/services/userSetting.service.ts");
/* harmony import */ var _services_allProject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/allProject.service */ "./src/app/pages/services/allProject.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");














function AdminPageComponent_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No existing user! Please create a new user below!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminPageComponent_mat_expansion_panel_4_mat_list_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", project_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r8.name, " ");
} }
function AdminPageComponent_mat_expansion_panel_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Username:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Role:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Permission Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-selection-list", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminPageComponent_mat_expansion_panel_4_Template_mat_selection_list_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const user_r6 = ctx.$implicit; return user_r6.permission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AdminPageComponent_mat_expansion_panel_4_mat_list_option_17_Template, 2, 2, "mat-list-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-action-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPageComponent_mat_expansion_panel_4_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const user_r6 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.deleteUser(user_r6.username); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Delete User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPageComponent_mat_expansion_panel_4_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const user_r6 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.updateUserPermission(user_r6.username); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Update Permission");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r6.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r6.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", user_r6.permission);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.allProjects);
} }
class AdminPageComponent {
    constructor(userSettingService, allProjectService) {
        this.userSettingService = userSettingService;
        this.allProjectService = allProjectService;
        this.allUsers = [];
    }
    ngOnInit() {
        // Get List of All Projects
        this._allProjectSub = this.allProjectService.getAllProjectUpdateListener()
            .subscribe((data) => {
            this.allProjects = data;
        });
        this.allProjectService.getAllProjectData("admin", []);
        // Get List of All Users
        this._userSettingSub = this.userSettingService.getUserSettingUpdateListener()
            .subscribe((data) => {
            this.allUsers = data;
            console.log(this.allUsers);
        });
        this.userSettingService.getAllUserSettingData();
    }
    updateUserPermission(username) {
        const selectedUser = this.allUsers.filter(user => user.username === username);
        this.userSettingService.updateUserSetting(username, selectedUser[0]["permission"]);
    }
    createNewUser(form) {
        this.userSettingService.addUserSetting(form.value.newUsername, form.value.newPassword, form.value.newRole);
        form.resetForm();
    }
    deleteUser(username) {
        this.userSettingService.deleteUserSetting(username);
    }
}
AdminPageComponent.ɵfac = function AdminPageComponent_Factory(t) { return new (t || AdminPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_userSetting_service__WEBPACK_IMPORTED_MODULE_1__["UserSettingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_allProject_service__WEBPACK_IMPORTED_MODULE_2__["AllProjectService"])); };
AdminPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminPageComponent, selectors: [["app-admin-page"]], decls: 31, vars: 5, consts: [[1, "h3", "py-3", "text-center"], ["class", "text-center", "style", "width: 50vw;", 4, "ngIf"], ["style", "width: 50vw;", "hideToggle", "false", 4, "ngFor", "ngForOf"], [1, "my-4"], [1, "h3", "text-center"], [1, "py-2", "my-4", "mx-auto", 2, "width", "60%"], [1, "text-center"], [3, "submit"], ["userForm", "ngForm"], ["matInput", "", "placeholder", "username", "type", "text", "name", "newUsername", "required", "", 3, "ngModel"], ["newUsername", "ngModel"], ["matInput", "", "placeholder", "password", "type", "text", "name", "newPassword", "required", "", 3, "ngModel"], ["newPassword", "ngModel"], ["name", "newRole", "required", "", 3, "ngModel"], ["newRole", "ngModel"], ["value", "user"], ["value", "client"], ["mat-raised-button", "", "color", "accent", "type", "submit"], [1, "text-center", 2, "width", "50vw"], ["hideToggle", "false", 2, "width", "50vw"], [1, "row", 2, "width", "100%"], [1, "col"], [1, "ml-2"], [1, "pb-0", 2, "color", "#00B0F0"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "color", "accent", 3, "click"], [3, "value"]], template: function AdminPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Existing User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminPageComponent_mat_card_2_Template, 3, 0, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminPageComponent_mat_expansion_panel_4_Template, 23, 4, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AdminPageComponent_Template_form_submit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx.createNewUser(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Create User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allUsers.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.something == null ? null : ctx.something.newUsername);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.something == null ? null : ctx.something.newPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.something == null ? null : ctx.something.newRole);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatSelectionList"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelActionRow"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListOption"]], styles: ["hr[_ngcontent-%COMP%] {\n  height: 1px;\n  background-color: #ffffff;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tcGFnZS9FOlxcZHItb25lL3NyY1xcYXBwXFxwYWdlc1xcYWRtaW5cXGFkbWluLXBhZ2VcXGFkbWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLXBhZ2UvYWRtaW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tcGFnZS9hZG1pbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogODAlXHJcbn1cclxuIiwiaHIge1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogODAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-page',
                templateUrl: './admin-page.component.html',
                styleUrls: ['./admin-page.component.scss']
            }]
    }], function () { return [{ type: _services_userSetting_service__WEBPACK_IMPORTED_MODULE_1__["UserSettingService"] }, { type: _services_allProject_service__WEBPACK_IMPORTED_MODULE_2__["AllProjectService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/edit/edit-page/edit-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/edit/edit-page/edit-page.component.ts ***!
  \*************************************************************/
/*! exports provided: EditPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageComponent", function() { return EditPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_edit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/edit.service */ "./src/app/pages/services/edit.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _general_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../general-services/global.service */ "./src/app/general-services/global.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");














const _c0 = ["canvas"];
function EditPageComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "update\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const history_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](history_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](history_r3.created);
} }
const _c1 = function (a0, a1) { return { thumbnailSelected: a0, verified: a1 }; };
function EditPageComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPageComponent_div_49_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const keyframe_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.selectThumbnail(keyframe_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const keyframe_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", keyframe_r4.filename, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, keyframe_r4.id === ctx_r2.selectedKeyframeId, keyframe_r4.verified_status && keyframe_r4.id !== ctx_r2.selectedKeyframeId));
} }
const _c2 = function (a0) { return { verified: a0 }; };
const _c3 = function (a0) { return { draw: a0 }; };
const _c4 = function (a0) { return { buttonSelected: a0 }; };
class Polygon {
    constructor(x, y) {
        this.x = []; // normalized values
        this.y = []; // normalized values
        this.defect_type = "";
        this.comment = "";
        this.done = false; // still creating polygon
        this.x.push(x);
        this.y.push(y);
    }
    addPoint(x, y) {
        // detect last point
        if (Polygon.isSamePoint(x, y, this.x[0], this.y[0])) {
            this.done = true;
            return this.done;
        }
        else { // else, append point
            this.x.push(x);
            this.y.push(y);
            return this.done;
        }
    }
    static isSamePoint(click_x, click_y, x, y) {
        return ((Polygon.WIDTH * Math.abs(click_x - x)) < Polygon.threshold &&
            (Polygon.HEIGHT * Math.abs(click_y - y)) < Polygon.threshold);
    }
}
Polygon.threshold = 8; // threshold (in pixels) to detect last point to close mask
class EditPageComponent {
    constructor(es, router, route, gs) {
        this.es = es;
        this.router = router;
        this.route = route;
        this.gs = gs;
        this.selectedImage = new Image();
        this.tool = 'mouse'; // mouse:select point/polygon | draw:select newpoint/edge
        this.keyframes = [];
        this.selectedKeyframeId = "";
        this.dataItem = {};
        this.polygons = []; // list of defects from selected keyframe --> TODO: fetch from service
        this.selectedPoint = {
            x: 0,
            y: 0,
            point_idx: 0,
            polygon_idx: 0
        };
        ////// draw mode //////
        this.finishedDrawing = true;
        ////// mouse mode //////
        this.selected = ""; // "", "point" or "polygon"  
        this.editDefect = false;
        this.mean = (arr) => arr.reduce((prev, curr) => prev + curr) / arr.length;
    }
    ngOnInit() {
        this.gs.load();
        // this.canvas.nativeElement.width = 706; // fix size of canvas
        // this.canvas.nativeElement.height = 480; // fix size of canvas
        // Replot canvas whenever we load new src/resize the image
        this.selectedImage.onload = (e) => { this.plotAll(); };
        this.selectedImage.onresize = (e) => { this.plotAll(); };
        // Observables to get data
        this._floorplanDataSub = this.es.getFloorplanDataUpdateListener()
            .subscribe((data) => {
            this.floorplanId = data[0].id;
        });
        this._keyframeDataSub = this.es.getKeyframeDataUpdateListener()
            .subscribe((data) => {
            this.keyframes = data;
            // for the first time:
            const extractedURL = this.router.url.split("/");
            if (extractedURL.length == 4) {
                this.selectedKeyframeId = extractedURL[extractedURL.length - 1];
            }
            if (this.selectedKeyframeId === "" && this.keyframes.length > 0) {
                this.selectedKeyframeId = this.keyframes[0].id;
            }
            this.es.getDefects(this.selectedKeyframeId);
        });
        this._defectDataSub = this.es.getDefectDataUpdateListener()
            .subscribe((data) => {
            let defects = data;
            this.polygons = defects ? this.defects2polygons(defects) : [];
            // assign image and plot
            this.selectedImage.src = this.keyframes.find((kf) => {
                return kf.id == this.selectedKeyframeId;
            }).filename;
            this.es.checkedithistory(this.selectedKeyframeId).subscribe(transformedOutput => {
                this.dataItem = transformedOutput;
                console.log(this.dataItem);
            });
            this.gs.loaded();
        });
        // Retrieve projectID and fetch data
        this.route.paramMap.subscribe((paramMap) => {
            this.projectId = paramMap.get("id");
            this.es.getFloorplans(this.projectId);
            this.es.getKeyframes(this.projectId);
        });
    }
    /////////////////////// Click Methods ///////////////////////
    onMouseButton() {
        this.tool = 'mouse';
        this.selected = "";
        this.selectedPolygon = null;
        this.editDefect = false;
        if (this.polygons.length >= 1) {
            if (!(this.polygons[this.polygons.length - 1].done)) {
                this.polygons.splice(this.polygons.length - 1, 1); // remove unfinished polygon
                this.finishedDrawing = true;
            }
        }
        this.plotAll();
    }
    onAddButton() {
        this.tool = 'draw';
        this.selectedPoint = {
            x: 0,
            y: 0,
            point_idx: 0,
            polygon_idx: 0
        };
        this.selectedPolygon = null;
        // remove unfinished polygon
        if (this.polygons.length > 1) {
            if (!this.polygons[this.polygons.length - 1].done) {
                this.polygons.splice(this.polygons.length - 1, 1);
                this.finishedDrawing = true;
            }
        }
        this.plotAll();
    }
    clearPolygons() {
        this.polygons = [];
        this.onMouseButton();
    }
    clear() {
        if (this.selected == "polygon") {
            // delete polygon
            this.polygons.splice(this.selectedPoint.polygon_idx, 1); //note: to select a polygon, a point would have been selected first
            this.selectedPolygon = null;
        }
        else if (this.selected == "point") {
            // delete point
            this.polygons[this.selectedPoint.polygon_idx].x.splice(this.selectedPoint.point_idx, 1);
            this.polygons[this.selectedPoint.polygon_idx].y.splice(this.selectedPoint.point_idx, 1);
        }
        this.onMouseButton();
    }
    selectThumbnail(kf) {
        // Get defects and assign defects
        this.selectedKeyframeId = kf.id;
        this.es.getDefects(this.selectedKeyframeId);
        // assign image and plot
        this.selectedImage.src = kf.filename;
        this.onMouseButton();
    }
    verifyKeyframe() {
        const selectedKeyframe = this.keyframes.find((kf) => kf.id == this.selectedKeyframeId);
        let defects = this.polygons2defects(this.polygons, selectedKeyframe);
        console.log("defects,this.selectedKeyframeId: ", defects, this.selectedKeyframeId);
        this.es.verifyDefects(defects, this.selectedKeyframeId);
        this.es.checkedithistory(this.selectedKeyframeId);
        // update verified status on front end
        this.keyframes.map(kf => {
            if (kf.id == this.selectedKeyframeId) {
                kf.verified_status = true;
            }
        });
    }
    /////////////////////// Top-level methods ///////////////////////
    canvasOnClick(e) {
        // console.log("this.selected: "+this.selected)
        if (this.tool == 'mouse') {
            this.mouseClick(e);
        }
        else if (this.tool == 'draw') {
            this.drawClick(e);
        }
    }
    plotAll() {
        // Create canvas context
        this.ctx = this.canvas.nativeElement.getContext('2d');
        // reassign normalising constants
        this.rect = this.canvas.nativeElement.getBoundingClientRect(); // to get canvas offset 
        this.canvas.nativeElement.width = this.rect.width; // to get normalising factor
        this.canvas.nativeElement.height = this.rect.height; // to get normalising factor
        Polygon.WIDTH = this.rect.width;
        Polygon.HEIGHT = this.rect.height;
        // draw images and plot polygons
        this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
        this.ctx.drawImage(this.selectedImage, 0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
        for (let i = 0; i < this.polygons.length; i++) {
            this.plotPolygon(this.polygons[i]);
        }
    }
    defects2polygons(defects) {
        let polygons = [];
        for (let defect of defects) {
            let polygon = new Polygon(0, 0); // will override the coordinates
            polygon.x = defect.x;
            polygon.y = defect.y;
            polygon.defect_type = defect.defect_type;
            polygon.comment = defect.defect_comment;
            polygon.done = true;
            polygons.push(polygon);
        }
        return polygons;
    }
    polygons2defects(polygons, selectedKeyframe) {
        let defects = [];
        for (let polygon of polygons) {
            // calculate defect position based on FOV of keyframe
            const position_coordinates_x = selectedKeyframe.position_coordinates[0] + ((this.mean(polygon.x) - 0.5) * selectedKeyframe.fov_coordinates[0]);
            const position_coordinates_y = selectedKeyframe.position_coordinates[1] + ((this.mean(polygon.y) - 0.5) * selectedKeyframe.fov_coordinates[1]);
            let defect = {
                project_id: this.projectId,
                keyframe_id: selectedKeyframe.id,
                floorplan_id: this.floorplanId,
                position_coordinates: [position_coordinates_x, position_coordinates_y],
                x: polygon.x,
                y: polygon.y,
                defect_type: polygon.defect_type,
                defect_comment: polygon.comment,
                verified_status: true
            };
            defects.push(defect);
        }
        return defects;
    }
    /////////////////////// Helper methods ///////////////////////
    mouseClick(e) {
        let norm_x = (e.x - this.rect.x) / this.canvas.nativeElement.width;
        let norm_y = (e.y - this.rect.y) / this.canvas.nativeElement.height;
        // if point is already selected, select polygon same point if clicked again
        if (this.selected == "point") {
            let selected_x = this.polygons[this.selectedPoint.polygon_idx].x[this.selectedPoint.point_idx];
            let selected_y = this.polygons[this.selectedPoint.polygon_idx].y[this.selectedPoint.point_idx];
            if (Polygon.isSamePoint(norm_x, norm_y, selected_x, selected_y)) { // check if already selected
                // unselect point, selected point will be reassigned if selected.
                this.selected = "polygon";
                // select polygon
                this.selectedPolygon = this.polygons[this.selectedPoint.polygon_idx];
            }
            // if not same point, check if it's another point or a random location
            else {
                if (!this.isPolygonPoint(e)) { ////// check if its another point is selected
                    // or else change location to mouse click location              
                    this.polygons[this.selectedPoint.polygon_idx].x[this.selectedPoint.point_idx] = norm_x;
                    this.polygons[this.selectedPoint.polygon_idx].y[this.selectedPoint.point_idx] = norm_y;
                    this.selected = "";
                }
            }
        }
        //// if no points are currently selected
        else if (this.selected == "" || this.selected == "polygon") {
            if (!this.isPolygonPoint(e)) {
                this.selectedPolygon = null;
                this.selected = ""; // if just clicking empty space:
            }
        }
        this.plotAll();
    }
    drawClick(e) {
        let norm_x = (e.x - this.rect.x) / this.canvas.nativeElement.width;
        let norm_y = (e.y - this.rect.y) / this.canvas.nativeElement.height;
        if (this.finishedDrawing) { // creating a new point/polygon
            ////////////// This block is to append point to existing polygon ////////////////
            // // check if it lies on any line
            // for (let p=0;p<this.polygons.length;p++){ // for every polygon
            //   let polygon = this.polygons[p];
            //   for(let i=0;i<polygon.x.length;i++){ // for every point
            //     let dist1_sq = Math.pow((norm_y-polygon.y[i]),2) + Math.pow((norm_x-polygon.x[i]),2);
            //     let dist2_sq = Math.pow((norm_y-polygon.y[i-1]),2) + Math.pow((norm_x-polygon.x[i-1]),2);
            //     let dist3_sq = Math.pow((polygon.y[i]-polygon.y[i-1]),2) + Math.pow((polygon.x[i]-polygon.x[i-1]),2);
            //     // console.log(Math.abs(dist3_sq-dist2_sq-dist1_sq))
            //     if(Math.abs(dist3_sq-dist2_sq-dist1_sq)<0.01){ // add point if it lies on line
            //       polygon.x.splice(i,0,norm_x)
            //       polygon.y.splice(i,0,norm_y)
            //       this.plotAll()
            //       this.tool='mouse';
            //       return // if it lies on line, we dont make a new polygon
            //     }
            //   }
            // }
            var polygon = new Polygon(norm_x, norm_y);
            this.polygons.push(polygon);
            this.finishedDrawing = false;
            this.plotAll();
        }
        else { // still drawing previous polygon
            polygon = this.polygons[this.polygons.length - 1];
            this.finishedDrawing = polygon.addPoint(norm_x, norm_y);
            if (this.finishedDrawing) {
                this.tool = 'mouse';
            }
            this.plotAll();
        }
    }
    isPolygonPoint(e) {
        let norm_x = (e.x - this.rect.x) / this.canvas.nativeElement.width;
        let norm_y = (e.y - this.rect.y) / this.canvas.nativeElement.height;
        ////// check if its another point is selected
        for (let p = 0; p < this.polygons.length; p++) { // for every polygon
            let polygon = this.polygons[p];
            for (let i = 0; i < polygon.x.length; i++) { // for every point
                if (Polygon.isSamePoint(norm_x, norm_y, polygon.x[i], polygon.y[i])) { // if point is near your click
                    // select point
                    this.selected = "point";
                    this.selectedPolygon = null;
                    this.selectedPoint.x = polygon.x[i];
                    this.selectedPoint.y = polygon.y[i];
                    this.selectedPoint.point_idx = i;
                    this.selectedPoint.polygon_idx = p;
                    console.log(this.selectedPoint);
                    return true;
                }
            }
        }
        return false;
    }
    plotPolygon(polygon) {
        // connect the dots and fill polygon
        this.ctx.beginPath();
        for (var i = 0; i < polygon.x.length; i++) {
            if (i == 0) {
                let pixel_x = this.canvas.nativeElement.width * polygon.x[i];
                let pixel_y = this.canvas.nativeElement.height * polygon.y[i];
                this.ctx.moveTo(pixel_x, pixel_y);
            }
            else {
                let pixel_x = this.canvas.nativeElement.width * polygon.x[i];
                let pixel_y = this.canvas.nativeElement.height * polygon.y[i];
                this.ctx.lineTo(pixel_x, pixel_y);
                this.ctx.strokeStyle = '#22a8c9';
                this.ctx.stroke();
            }
        }
        if (polygon.done) { // finish the last connection
            this.ctx.closePath();
            this.ctx.strokeStyle = '#22a8c9';
            this.ctx.stroke();
            this.ctx.fillStyle = (this.selected == "polygon" && polygon == this.selectedPolygon) ?
                'rgba(34, 168, 201, 0.5)' :
                'rgba(34, 168, 201, 0.1)';
            this.ctx.fill();
        }
        // overlay dots
        for (let i = 0; i < polygon.x.length; i++) {
            let pixel_x = this.canvas.nativeElement.width * polygon.x[i];
            let pixel_y = this.canvas.nativeElement.height * polygon.y[i];
            this.ctx.beginPath();
            this.ctx.arc(pixel_x, pixel_y, 2, 0, Math.PI * 2, false);
            // fill selected point as red
            if (this.selected == "point" && this.selectedPoint.x == polygon.x[i] && this.selectedPoint.y == polygon.y[i]) {
                this.ctx.arc(pixel_x, pixel_y, 5, 0, Math.PI * 2, false);
                this.ctx.fillStyle = '#ffcc00';
            }
            else {
                this.ctx.arc(pixel_x, pixel_y, 3, 0, Math.PI * 2, false);
                this.ctx.fillStyle = '#22a8c9';
            }
            this.ctx.fill();
            this.ctx.closePath();
        }
    }
    ///to bind to [disabled] property in HTML
    // getEditMode(){
    //   return this.editDefect
    // }
    getSelectedPolygon() {
        return this.selectedPolygon;
    }
    // for html to call
    isVerified() {
        const selectedKeyframe = this.keyframes.find((kf) => kf.id == this.selectedKeyframeId);
        if (!selectedKeyframe) {
            return false;
        }
        return selectedKeyframe.verified_status;
    }
}
EditPageComponent.ɵfac = function EditPageComponent_Factory(t) { return new (t || EditPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_edit_service__WEBPACK_IMPORTED_MODULE_1__["EditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"])); };
EditPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditPageComponent, selectors: [["app-edit-page"]], viewQuery: function EditPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, decls: 50, vars: 18, consts: [[1, "visualisation-container", "row", "no-gutters"], [1, "col-8", "col-lg-7", "p-3", "h-100"], [1, "h-100"], [1, "row", "no-gutters", "flex-nowrap", "defect-info", "p-2", "mb-2", "pr-0", 3, "ngClass"], [1, "col", 3, "ngClass", "mousedown"], ["canvas", ""], [1, "col-auto"], [1, "d-flex", "flex-column"], ["mat-icon-button", "", "matTooltip", "Click point to select point, and click somewhere else to move point. Double-click point to select defect.", 1, "m-1", 3, "ngClass", "click"], [1, "mb-1"], ["mat-icon-button", "", "matTooltip", "Polygon tool to annotate new defect.", 1, "m-1", 3, "ngClass", "click"], ["mat-icon-button", "", "matTooltip", "Click to delete selected point / selected defect.", 1, "m-1", 3, "click"], ["mat-icon-button", "", "matTooltip", "Click to delete all defects.", 1, "m-1", 3, "click"], [1, "row", "no-gutters", "defect-info"], [1, "col-auto", "m-1", 3, "ngModel", "disabled", "ngModelChange"], [1, "classes-container"], ["value", "corrosion", 1, "ml-2"], ["value", "crack", 1, "ml-2"], ["value", "pitting", 1, "ml-2"], ["value", "stain", 1, "ml-2"], [1, "col", "w-100", "m-1", "mx-3"], ["matInput", "", "rows", "3", "placeholder", "Defect Comment", 3, "ngModel", "disabled", "ngModelChange"], [1, "d-flex", "flex-column", "justify-content-end"], ["mat-raised-button", "", "matTooltip", "Click to verify keyframe and all its defects.", 1, "mt-1", 3, "click"], [2, "height", "200px", "overflow-y", "auto", "overflow-x", "hidden"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "col-4", "col-lg-5", "p-3", "h-100"], [1, "container-fluid"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col-6"], [1, "col-6", "row"], [1, "col-12", "text-right", 2, "padding", "10px"], [1, "notranslate", "material-icons", "mat-icon-no-color"], [1, "thumbnail", "h-100", "w-100", "my-2", "px-2", 3, "src", "ngClass", "click"]], template: function EditPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "canvas", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function EditPageComponent_Template_canvas_mousedown_6_listener($event) { return ctx.canvasOnClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPageComponent_Template_button_click_10_listener() { return ctx.onMouseButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "north_west");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPageComponent_Template_button_click_13_listener() { return ctx.onAddButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPageComponent_Template_button_click_16_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPageComponent_Template_button_click_19_listener() { return ctx.clearPolygons(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-radio-group", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPageComponent_Template_mat_radio_group_ngModelChange_23_listener($event) { return ctx.selectedPolygon ? ctx.selectedPolygon.defect_type = $event : ctx.selectedPolygon.defect_type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-radio-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "samp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Corrosion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-radio-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "samp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Crack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-radio-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "samp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Pitting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-radio-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "samp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Stain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPageComponent_Template_textarea_ngModelChange_38_listener($event) { return ctx.selectedPolygon ? ctx.selectedPolygon.comment = $event : ctx.selectedPolygon.comment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPageComponent_Template_button_click_40_listener() { return ctx.verifyKeyframe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "samp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Save / Verify Keyframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, EditPageComponent_div_44_Template, 13, 2, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, EditPageComponent_div_49_Template, 2, 5, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, ctx.isVerified()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c3, ctx.tool === "draw"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c4, ctx.tool === "mouse"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c4, ctx.tool === "draw"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedPolygon == null ? null : ctx.selectedPolygon.defect_type)("disabled", !ctx.getSelectedPolygon());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedPolygon == null ? null : ctx.selectedPolygon.comment)("disabled", !ctx.getSelectedPolygon());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.keyframes);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".buttonSelected[_ngcontent-%COMP%] {\n  border: 2px solid #205d6c;\n  border-radius: 4px;\n  \n}\n\n.visualisation-container[_ngcontent-%COMP%] {\n  min-width: 90vw;\n  align-items: center;\n}\n\n#canvas[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  margin: 5px;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));\n  max-height: 75vh;\n  overflow-y: scroll;\n}\n\n.classes-container[_ngcontent-%COMP%] {\n  height: 100%;\n  align-items: center;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.thumbnail[_ngcontent-%COMP%] {\n  position: static;\n  border: 2px solid rgba(255, 255, 255, 0);\n  \n  border-radius: 4px;\n  \n  padding: 5px;\n  \n  height: 80px;\n  \n}\n\n.thumbnail[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);\n}\n\nmat-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\nmat-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.defect-info[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 5px;\n}\n\n.thumbnailSelected[_ngcontent-%COMP%] {\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  \n}\n\n.verified[_ngcontent-%COMP%] {\n  border: 2px solid #47e6c3;\n}\n\n.draw[_ngcontent-%COMP%] {\n  cursor: crosshair;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC9lZGl0LXBhZ2UvRTpcXGRyLW9uZS9zcmNcXGFwcFxccGFnZXNcXGVkaXRcXGVkaXQtcGFnZVxcZWRpdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9lZGl0L2VkaXQtcGFnZS9lZGl0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQXFCLG1CQUFBO0FDWnpCOztBRGNBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDWEo7O0FEY0E7RUFDSSx1QkFBQTtFQUNBLFdBQUE7QUNYSjs7QURhQTtFQUNJLFlBQUE7RUFFQSxhQUFBO0VBQ0EsNERBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDWEo7O0FEYUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7QUNWSjs7QURZQTtFQUNJLGdCQUFBO0VBQ0Esd0NBQUE7RUFBdUMsZ0JBQUE7RUFDdkMsa0JBQUE7RUFBcUIsbUJBQUE7RUFDckIsWUFBQTtFQUFjLGlCQUFBO0VBQ2QsWUFBQTtFQUFjLHNCQUFBO0FDTGxCOztBRFNBO0VBQ0ksOENBQUE7QUNOSjs7QURRQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNMSjs7QURRQTtFQUNJLFdBQUE7QUNMSjs7QURPQTtFQUNJLDBDQUFBO0VBQ0Esa0JBQUE7QUNKSjs7QURNQTtFQUNJLDBDQUFBO0VBQXlDLGdCQUFBO0FDRjdDOztBRElBO0VBQ0kseUJBQUE7QUNESjs7QURHQTtFQUNJLGlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZGl0L2VkaXQtcGFnZS9lZGl0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAubGVmdC1jb2x7XHJcbi8vICAgICAvLyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbi8vICAgICBtYXJnaW46NXB4O1xyXG4vLyAgICAgcGFkZGluZzo1cHg7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuLy8gfVxyXG4vLyAucmlnaHQtY29se1xyXG4vLyAgICAgZGlzcGxheTogZ3JpZDtcclxuLy8gICAgIG1hcmdpbjo1cHg7XHJcbi8vICAgICBwYWRkaW5nOjVweDtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gfVxyXG5cclxuLmJ1dHRvblNlbGVjdGVke1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzIwNWQ2YzsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7ICAvKiBSb3VuZGVkIGJvcmRlciAqL1xyXG59XHJcbi52aXN1YWxpc2F0aW9uLWNvbnRhaW5lcntcclxuICAgIG1pbi13aWR0aDogOTB2dztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMWZyIDMwcHg7XHJcbn1cclxuI2NhbnZhc3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyBcclxuICAgIG1hcmdpbjo1cHg7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8vIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxMnJlbSwgMWZyKSk7XHJcbiAgICBtYXgtaGVpZ2h0OiA3NXZoO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbi5jbGFzc2VzLWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxufVxyXG4udGh1bWJuYWlse1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMCk7IC8qIEdyYXkgYm9yZGVyICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7ICAvKiBSb3VuZGVkIGJvcmRlciAqL1xyXG4gICAgcGFkZGluZzogNXB4OyAvKiBTb21lIHBhZGRpbmcgKi9cclxuICAgIGhlaWdodDogODBweDsgLyogU2V0IGEgc21hbGwgd2lkdGggKi9cclxuXHJcbiAgICAvLyBtYXJnaW46IDEwcHg7XHJcbn1cclxuLnRodW1ibmFpbDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IDFweCByZ2JhKDAsIDE0MCwgMTg2LCAwLjUpO1xyXG59XHJcbm1hdC1yYWRpby1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG59XHJcbiAgXHJcbm1hdC1yYWRpby1idXR0b24ge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLmRlZmVjdC1pbmZve1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLnRodW1ibmFpbFNlbGVjdGVkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC41KTsgLyogR3JheSBib3JkZXIgKi9cclxufVxyXG4udmVyaWZpZWQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzQ3ZTZjM1xyXG59XHJcbi5kcmF3e1xyXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XHJcbn0iLCIuYnV0dG9uU2VsZWN0ZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjA1ZDZjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC8qIFJvdW5kZWQgYm9yZGVyICovXG59XG5cbi52aXN1YWxpc2F0aW9uLWNvbnRhaW5lciB7XG4gIG1pbi13aWR0aDogOTB2dztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2NhbnZhcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBtYXJnaW46IDVweDtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTJyZW0sIDFmcikpO1xuICBtYXgtaGVpZ2h0OiA3NXZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5jbGFzc2VzLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbn1cblxuLnRodW1ibmFpbCB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIC8qIEdyYXkgYm9yZGVyICovXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLyogUm91bmRlZCBib3JkZXIgKi9cbiAgcGFkZGluZzogNXB4O1xuICAvKiBTb21lIHBhZGRpbmcgKi9cbiAgaGVpZ2h0OiA4MHB4O1xuICAvKiBTZXQgYSBzbWFsbCB3aWR0aCAqL1xufVxuXG4udGh1bWJuYWlsOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDJweCAxcHggcmdiYSgwLCAxNDAsIDE4NiwgMC41KTtcbn1cblxubWF0LXJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW46IDVweDtcbn1cblxuLmRlZmVjdC1pbmZvIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi50aHVtYm5haWxTZWxlY3RlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgLyogR3JheSBib3JkZXIgKi9cbn1cblxuLnZlcmlmaWVkIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzQ3ZTZjMztcbn1cblxuLmRyYXcge1xuICBjdXJzb3I6IGNyb3NzaGFpcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-page',
                templateUrl: './edit-page.component.html',
                styleUrls: ['./edit-page.component.scss']
            }]
    }], function () { return [{ type: _services_edit_service__WEBPACK_IMPORTED_MODULE_1__["EditService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _general_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }]; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['canvas', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/home/home-page/home-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/home/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _general_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../general-services/global.service */ "./src/app/general-services/global.service.ts");
/* harmony import */ var _general_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../general-services/auth.service */ "./src/app/general-services/auth.service.ts");
/* harmony import */ var _services_allProject_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/allProject.service */ "./src/app/pages/services/allProject.service.ts");
/* harmony import */ var _services_templateData_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/templateData.service */ "./src/app/pages/services/templateData.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _general_services_object_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../general-services/object.pipe */ "./src/app/general-services/object.pipe.ts");
















function HomePageComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.triggerRetraining(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "track_changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Prepare Retraining Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomePageComponent_mat_tab_3_ng_container_3_mat_card_1_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_mat_tab_3_ng_container_3_mat_card_1_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const project_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.deleteProject(project_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomePageComponent_mat_tab_3_ng_container_3_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_mat_tab_3_ng_container_3_mat_card_1_Template_mat_card_content_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const project_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.clickProject(project_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-actions", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomePageComponent_mat_tab_3_ng_container_3_mat_card_1_button_8_Template, 3, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Created On: ", project_r8.created.toDateString(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.adminMode);
} }
function HomePageComponent_mat_tab_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomePageComponent_mat_tab_3_ng_container_3_mat_card_1_Template, 9, 3, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const project_r8 = ctx.$implicit;
    const projectType_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r8.type == projectType_r5);
} }
function HomePageComponent_mat_tab_3_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_mat_tab_3_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const projectType_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.newProject(projectType_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const projectType_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("New ", ctx_r7.projectTypes[projectType_r5], " Project");
} }
function HomePageComponent_mat_tab_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomePageComponent_mat_tab_3_ng_container_3_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomePageComponent_mat_tab_3_div_4_Template, 3, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const projectType_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r1.projectTypes[projectType_r5] + " Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.allProject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.clientMode);
} }
function HomePageComponent_mat_tab_5_ng_container_3_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 30);
} if (rf & 2) {
    const template_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", template_r25.thumbnail_key, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomePageComponent_mat_tab_5_ng_container_3_img_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 31);
} if (rf & 2) {
    const template_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", template_r25.thumbnail_key, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomePageComponent_mat_tab_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_mat_tab_5_ng_container_3_Template_mat_card_content_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const template_r25 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.clickTemplate(template_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-actions", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_mat_tab_5_ng_container_3_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const template_r25 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.deleteTemplate(template_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomePageComponent_mat_tab_5_ng_container_3_img_13_Template, 1, 1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomePageComponent_mat_tab_5_ng_container_3_img_14_Template, 1, 1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const template_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](template_r25.template_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", template_r25.template_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](template_r25.template_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", template_r25.thumbnail_key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", template_r25.thumbnail_key);
} }
function HomePageComponent_mat_tab_5_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_mat_tab_5_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.newTemplate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomePageComponent_mat_tab_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomePageComponent_mat_tab_5_ng_container_3_Template, 15, 5, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomePageComponent_mat_tab_5_div_4_Template, 3, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.allTemplates);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.adminMode);
} }
class HomePageComponent {
    constructor(http, _router, gs, _as, _aps, _ts) {
        this.http = http;
        this._router = _router;
        this.gs = gs;
        this._as = _as;
        this._aps = _aps;
        this._ts = _ts;
        this._placeholderUrl = "../../../../assets/white-sq.png";
        this.allTemplates = [];
        this.projectTypes = {
            "dr-one": "Dr.One",
            "report": "Report-only"
        };
    }
    ngOnInit() {
        this.gs.load();
        this.gs.role = this._as.getAuthData()["role"];
        this.gs.permission = this._as.getAuthData()["permission"];
        this.adminMode = (this.gs.role === "admin") ? true : false;
        this.clientMode = (this.gs.role === "client") ? true : false;
        this._allProjectSub = this._aps.getAllProjectUpdateListener()
            .subscribe((data) => {
            this.allProject = data;
            this.gs.loaded();
        });
        this._allTemplatesSub = this._ts.getAllTemplateDataUpdateListener()
            .subscribe((data) => {
            this.allTemplates = data;
            this.allTemplates.forEach(template => {
                if (!template.thumbnail_key) {
                    template.thumbnail_key = this._placeholderUrl;
                }
            });
            this.gs.loaded();
        });
        this._aps.getAllProjectData(this.gs.role, this.gs.permission);
        this._ts.getAllTemplateData(this.gs.role);
    }
    ngOnDestroy() {
        this._allProjectSub.unsubscribe();
        this._allTemplatesSub.unsubscribe();
    }
    clickProject(project) {
        this.gs.setProjectType(project.type);
        this._router.navigate(['/loading', project.id]);
    }
    clickTemplate(template) {
        this._router.navigate(['/template', template.id]);
    }
    newProject(projectType) {
        if (projectType == "dr-one") {
            this._router.navigate(['/upload']);
        }
        else if (projectType == "report") {
            const projName = prompt("Report-only Project Name: \n *Please provide a unique name. Once created, you will not be able to change the project name.", "Untitled");
            if (projName != null) {
                this.gs.load();
                // create new report-only project
                this._aps.addReportProjectEntry(projName);
                // allProject service will stop loading and redirect to reportconfig page
            }
        }
    }
    newTemplate() {
        this.gs.load();
        const templateName = prompt("Template Name: \n", "Untitled");
        if (templateName) {
            this._ts.createNewTemplate(templateName);
        }
        else {
            this.gs.loaded();
        }
        // template service will stop loading and redirect to template page
    }
    deleteProject(project) {
        const deleteConfirmed = confirm("Are you sure you want to delete project: " + project.name + " ?");
        if (deleteConfirmed) {
            this._aps.deleteProjectEntry(project.name, project.id);
        }
    }
    deleteTemplate(template) {
        const deleteConfirmed = confirm("Are you sure you want to delete template: " + template.template_name + " ?");
        if (deleteConfirmed) {
            this._ts.deleteTemplate(template.template_name, template.id);
        }
    }
    triggerRetraining() {
        alert("Preparing new data to S3...");
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + "/keyframe/retrain", {})
            .subscribe(res => {
            console.log(res);
        });
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_allProject_service__WEBPACK_IMPORTED_MODULE_6__["AllProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_templateData_service__WEBPACK_IMPORTED_MODULE_7__["TemplateDataService"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 6, vars: 6, consts: [[1, "mt-3", "mb-2", "mx-5", "row", "flex-row-reverse"], ["mat-raised-button", "", "color", "basic", "class", "col-auto", 3, "click", 4, "ngIf"], ["color", "accent", "animationDuration", "500ms", 1, "mt-3", "px-5", 2, "min-width", "100vw"], [3, "label", 4, "ngFor", "ngForOf"], ["label", "Templates", 4, "ngIf"], ["mat-raised-button", "", "color", "basic", 1, "col-auto", 3, "click"], [3, "label"], [1, "mt-2", "d-flex", "justify-content-center"], [1, "row", "flex-wrap", 2, "max-width", "100%"], [4, "ngFor", "ngForOf"], ["class", "m-2 p-4 col flex-item newProject", 3, "click", 4, "ngIf"], [1, "m-2", "col", "flex-item"], ["class", "m-2 p-4 col flex-item", 4, "ngIf"], [1, "m-2", "p-4", "col", "flex-item"], [3, "click"], [1, "mb-2", "text-bold"], ["align", "end"], ["mat-mini-fab", "", "color", "accent", 3, "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "accent", 3, "click"], [1, "m-2", "p-4", "col", "flex-item", "newProject", 3, "click"], [1, "text-bold"], ["label", "Templates"], ["class", "m-2 p-4 col flex-item-template newProject", 3, "click", 4, "ngIf"], [1, "m-2", "col", "flex-item-template"], [1, "m-2", "col", "no-gutters", "flex-item-template"], [1, "d-flex", "flex-column", "p-4", "thumbnail-content", "thumbnail-card"], [1, "flex-grow-1", 3, "click"], [3, "matTooltip"], ["class", "thumbnail-placeholder", 3, "src", 4, "ngIf"], ["class", "thumbnail-image thumbnail-content", 3, "src", 4, "ngIf"], [1, "thumbnail-placeholder", 3, "src"], [1, "thumbnail-image", "thumbnail-content", 3, "src"], [1, "m-2", "p-4", "col", "flex-item-template", "newProject", 3, "click"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomePageComponent_button_1_Template, 4, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomePageComponent_mat_tab_3_Template, 7, 3, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomePageComponent_mat_tab_5_Template, 8, 2, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adminMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 3, ctx.projectTypes, "keys"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adminMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardActions"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"]], pipes: [_general_services_object_pipe__WEBPACK_IMPORTED_MODULE_14__["ObjectPipe"]], styles: [".flex-item[_ngcontent-%COMP%] {\n  border-radius: 7px;\n  overflow: hidden;\n  min-width: 30vw;\n}\n\n.flex-item-template[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden;\n  min-width: 24vw;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.newProject[_ngcontent-%COMP%] {\n  border: 3px dotted rgba(255, 255, 255, 0.5);\n  opacity: 0.5;\n  cursor: pointer;\n  padding: 16px;\n}\n\n.thumbnail-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.thumbnail-card[_ngcontent-%COMP%]:hover {\n  background: none;\n}\n\n.thumbnail-image[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  z-index: -5;\n}\n\n.thumbnail-placeholder[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 100%;\n}\n\nmat-card-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\nmat-card-content[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLXBhZ2UvRTpcXGRyLW9uZS9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUtcGFnZVxcaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNoQkY7O0FEa0JBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNmRjs7QURrQkE7RUFDRSxjQUFBO0FDZkY7O0FEa0JBO0VBQ0UsMkNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNmRjs7QURrQkE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNmRjs7QURpQkE7RUFDRSxnQkFBQTtBQ2RGOztBRGdCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDYkY7O0FEZUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNaRjs7QURjQTtFQUNFLGdCQUFBO0FDWEY7O0FEYUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ1ZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmZsZXgtY29udGFpbmVyIHtcclxuLy8gICAvKiBXZSBmaXJzdCBjcmVhdGUgYSBmbGV4IGxheW91dCBjb250ZXh0ICovXHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICAvKiBUaGVuIHdlIGRlZmluZSB0aGUgZmxvdyBkaXJlY3Rpb25cclxuLy8gICAgICBhbmQgaWYgd2UgYWxsb3cgdGhlIGl0ZW1zIHRvIHdyYXBcclxuLy8gICAgKiBSZW1lbWJlciB0aGlzIGlzIHRoZSBzYW1lIGFzOlxyXG4vLyAgICAqIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbi8vICAgICogZmxleC13cmFwOiB3cmFwO1xyXG4vLyAgICAqL1xyXG4vLyAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbi8vICAgLyogVGhlbiB3ZSBkZWZpbmUgaG93IGlzIGRpc3RyaWJ1dGVkIHRoZSByZW1haW5pbmcgc3BhY2UgKi9cclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbi8vICAgLy8gcGFkZGluZzogMDtcclxuLy8gICBtYXJnaW46IDA7XHJcbi8vIH1cclxuXHJcblxyXG4uZmxleC1pdGVtIHtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtaW4td2lkdGg6IDMwdnc7XHJcbn1cclxuLmZsZXgtaXRlbS10ZW1wbGF0ZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1pbi13aWR0aDogMjR2dztcclxufVxyXG5cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLm5ld1Byb2plY3R7XHJcbiAgYm9yZGVyOiAzcHggZG90dGVkIHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgLy8gYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi50aHVtYm5haWwtY29udGVudHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDowO1xyXG4gIHdpZHRoIDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnRodW1ibmFpbC1jYXJkOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuLnRodW1ibmFpbC1pbWFnZXtcclxuICBvcGFjaXR5OiAwLjM7XHJcbiAgei1pbmRleDogLTU7XHJcbn1cclxuLnRodW1ibmFpbC1wbGFjZWhvbGRlcntcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgd2lkdGggOiAxMDAlO1xyXG59XHJcbm1hdC1jYXJkLWNvbnRlbnR7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5tYXQtY2FyZC1jb250ZW50OmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbiIsIi5mbGV4LWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1pbi13aWR0aDogMzB2dztcbn1cblxuLmZsZXgtaXRlbS10ZW1wbGF0ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1pbi13aWR0aDogMjR2dztcbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5uZXdQcm9qZWN0IHtcbiAgYm9yZGVyOiAzcHggZG90dGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi50aHVtYm5haWwtY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGh1bWJuYWlsLWNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4udGh1bWJuYWlsLWltYWdlIHtcbiAgb3BhY2l0eTogMC4zO1xuICB6LWluZGV4OiAtNTtcbn1cblxuLnRodW1ibmFpbC1wbGFjZWhvbGRlciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5tYXQtY2FyZC1jb250ZW50OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _general_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }, { type: _general_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _services_allProject_service__WEBPACK_IMPORTED_MODULE_6__["AllProjectService"] }, { type: _services_templateData_service__WEBPACK_IMPORTED_MODULE_7__["TemplateDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/landing/landing-page/landing-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/landing/landing-page/landing-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.component */ "./src/app/pages/landing/login/login.component.ts");



class LandingPageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 1, vars: 0, template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-login");
    } }, directives: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-page',
                templateUrl: './landing-page.component.html',
                styleUrls: ['./landing-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/landing/login/login.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/landing/login/login.component.ts ***!
  \********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_general_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/general-services/auth.service */ "./src/app/general-services/auth.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









function LoginComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter your name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter your password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    onLogin(form) {
        if (form.invalid) {
            return;
        }
        this.authService.login(form.value.username, form.value.password);
        form.resetForm();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_general_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 22, vars: 4, consts: [[1, "background-wrapper"], ["src", "../../../../assets/wallpaper.jpg", 1, "bg-image"], [1, "login-card"], [2, "font-size", "4rem"], [3, "submit"], ["sliderForm", "ngForm"], ["matInput", "", "placeholder", "Username", "type", "text", "name", "username", "required", "", 3, "ngModel"], ["username", "ngModel"], [4, "ngIf"], ["matInput", "", "placeholder", "Password", "type", "password", "name", "password", "required", "", 3, "ngModel"], ["password", "ngModel"], [1, "my-3"], ["mat-raised-button", "", "color", "accent", "type", "submit"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "dr. one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "An all-in-one solution for drone-based inspection.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.onLogin(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_mat_error_13_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_mat_error_18_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.something == null ? null : ctx.something.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.something == null ? null : ctx.something.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]], styles: [".mat-focused .mat-form-field-label {\n  \n  color: white !important;\n}\n\n .mat-form-field-ripple {\n  \n  background-color: #205d6c !important;\n}\n\n  .mat-input-element {\n  caret-color: white;\n}\n\n.bg-image[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.background-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.login-card[_ngcontent-%COMP%] {\n  margin-top: 14vh;\n  opacity: 0.9;\n  padding: 10%;\n  width: 35vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9sb2dpbi9FOlxcZHItb25lL3NyY1xcYXBwXFxwYWdlc1xcbGFuZGluZ1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSx1QkFBQTtBQ0NKOztBRENBO0VBQ0kseUNBQUE7RUFDQSxvQ0FBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNLSjs7QURIQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDVkNmMgIWltcG9ydGFudDs7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudCB7IFxyXG4gICAgY2FyZXQtY29sb3I6IHdoaXRlOyBcclxufVxyXG4uYmctaW1hZ2V7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6MDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5iYWNrZ3JvdW5kLXdyYXBwZXJ7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmxvZ2luLWNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOjE0dmg7IFxyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG4gICAgd2lkdGg6IDM1dnc7XHJcbn0iLCI6Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwNWQ2YyAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY2FyZXQtY29sb3I6IHdoaXRlO1xufVxuXG4uYmctaW1hZ2Uge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5iYWNrZ3JvdW5kLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9naW4tY2FyZCB7XG4gIG1hcmdpbi10b3A6IDE0dmg7XG4gIG9wYWNpdHk6IDAuOTtcbiAgcGFkZGluZzogMTAlO1xuICB3aWR0aDogMzV2dztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: src_app_general_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/loading-page/loading-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/loading-page/loading-page.component.ts ***!
  \**************************************************************/
/*! exports provided: LoadingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPageComponent", function() { return LoadingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_allProject_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/allProject.service */ "./src/app/pages/services/allProject.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _general_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../general-services/global.service */ "./src/app/general-services/global.service.ts");





class LoadingPageComponent {
    constructor(allProjectService, _router, gs) {
        this.allProjectService = allProjectService;
        this._router = _router;
        this.gs = gs;
    }
    ngOnInit() {
        const extractedURL = this._router.url.split("/");
        const projectId = extractedURL[extractedURL.length - 1];
        this.allProjectService.checkProjectOutputLoadedStatus(projectId);
    }
}
LoadingPageComponent.ɵfac = function LoadingPageComponent_Factory(t) { return new (t || LoadingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_allProject_service__WEBPACK_IMPORTED_MODULE_1__["AllProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"])); };
LoadingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingPageComponent, selectors: [["app-loading-page"]], decls: 5, vars: 0, consts: [[1, "loading-container"], ["src", "../../../assets/loading.gif", 1, "loading"], [1, "mt-1"], [2, "font-size", "0.9em"]], template: function LoadingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "samp", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".loading-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n  height: 100%;\n  width: 100vw;\n  background: black;\n  opacity: 0.9;\n}\n\n.loading[_ngcontent-%COMP%] {\n  width: 6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9hZGluZy1wYWdlL0U6XFxkci1vbmUvc3JjXFxhcHBcXHBhZ2VzXFxsb2FkaW5nLXBhZ2VcXGxvYWRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9hZGluZy1wYWdlL2xvYWRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvYWRpbmctcGFnZS9sb2FkaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZy1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6MDtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDAuOTtcclxufVxyXG4ubG9hZGluZ3tcclxuICAgIHdpZHRoOiA2cmVtO1xyXG59IiwiLmxvYWRpbmctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5sb2FkaW5nIHtcbiAgd2lkdGg6IDZyZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-page',
                templateUrl: './loading-page.component.html',
                styleUrls: ['./loading-page.component.scss']
            }]
    }], function () { return [{ type: _services_allProject_service__WEBPACK_IMPORTED_MODULE_1__["AllProjectService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _general_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/report-configuration-page/report-configuration-page.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/report-configuration-page/report-configuration-page.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ReportConfigurationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportConfigurationPageComponent", function() { return ReportConfigurationPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_ckeditor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/ckeditor.js */ "./src/app/pages/services/ckeditor.js");
/* harmony import */ var _services_ckeditor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_services_ckeditor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_uploadAdapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/uploadAdapter */ "./src/app/pages/services/uploadAdapter.ts");
/* harmony import */ var _services_ckconfig_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ckconfig.js */ "./src/app/pages/services/ckconfig.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _general_services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../general-services/global.service */ "./src/app/general-services/global.service.ts");
/* harmony import */ var _services_reportData_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/reportData.service */ "./src/app/pages/services/reportData.service.ts");
/* harmony import */ var _services_allProject_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/allProject.service */ "./src/app/pages/services/allProject.service.ts");
/* harmony import */ var _services_templateData_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/templateData.service */ "./src/app/pages/services/templateData.service.ts");
/* harmony import */ var _general_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../general-services/auth.service */ "./src/app/general-services/auth.service.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");



// https://ckeditor.com/ckeditor-5/online-builder/
// https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/angular.html
// https://stackoverflow.com/questions/46765197/how-to-enable-image-upload-support-in-ckeditor-5
// import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'

















function ReportConfigurationPageComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportConfigurationPageComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.saveHeader(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Save Header ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ReportConfigurationPageComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportConfigurationPageComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.saveFooter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Save Footer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/report", a1]; };
function ReportConfigurationPageComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r2.currentProjId));
} }
function ReportConfigurationPageComponent_div_30_ng_container_5_img_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 37);
} if (rf & 2) {
    const template_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", template_r9.thumbnail_key, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ReportConfigurationPageComponent_div_30_ng_container_5_img_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 38);
} if (rf & 2) {
    const template_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", template_r9.thumbnail_key, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ReportConfigurationPageComponent_div_30_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-content", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-actions", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportConfigurationPageComponent_div_30_ng_container_5_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const template_r9 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.appendToReport(template_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportConfigurationPageComponent_div_30_ng_container_5_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const template_r9 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.previewTemplate(template_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ReportConfigurationPageComponent_div_30_ng_container_5_img_16_Template, 1, 1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ReportConfigurationPageComponent_div_30_ng_container_5_img_17_Template, 1, 1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const template_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](template_r9.template_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", template_r9.template_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](template_r9.template_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", template_r9.thumbnail_key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", template_r9.thumbnail_key);
} }
function ReportConfigurationPageComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Report Templates ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ReportConfigurationPageComponent_div_30_ng_container_5_Template, 18, 5, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.allTemplates);
} }
class ReportConfigurationPageComponent {
    ////////////////////////////////////////////
    constructor(_route, _gs, _rds, _aps, _ts, _as, _vcr) {
        this._route = _route;
        this._gs = _gs;
        this._rds = _rds;
        this._aps = _aps;
        this._ts = _ts;
        this._as = _as;
        this._vcr = _vcr;
        // @HostListener('document:keypress', ['$event'])
        // handleKeyboardEvent(event: KeyboardEvent) { 
        //   const ctrlKey = navigator.platform.match('Mac') ? event.metaKey : event.ctrlKey
        //   if (event.which == 115 && ctrlKey){
        //     event.preventDefault();
        //     this.saveHeader()
        //   }
        // }
        this._placeholderUrl = "../../../assets/white-sq.png";
        this.reportData = { header_data: "", footer_data: "", content: [] };
        this.allTemplates = [];
        ////////// Editor Configuration  //////////
        this.Editor = _services_ckeditor_js__WEBPACK_IMPORTED_MODULE_3__;
        this.isEdit = true;
        this.editorConfig = _services_ckconfig_js__WEBPACK_IMPORTED_MODULE_5__["default"];
    }
    onReady(editor) {
        // called once when editor loads
        // console.log(this.projectName)
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            // called everytime I add an image onto ckeditor
            // console.log(this.projectName)
            return new _services_uploadAdapter__WEBPACK_IMPORTED_MODULE_4__["UploadAdapter"](loader, this.projectName);
        };
        editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
    ngOnInit() {
        this._gs.load();
        const role = this._as.getAuthData()["role"];
        this.isClient = (role === "client") ? true : false;
        this._route.paramMap.subscribe((paramMap) => {
            const projId = paramMap.get("id");
            this.currentProjId = projId;
            // get project name and header data
            this._aps.getProjectData(projId);
            this._rds.getReportDataByProjId(projId);
            this._ts.getAllTemplateData(role);
        });
        this._projectDataSub = this._aps.getProjectUpdateListener()
            .subscribe((project) => {
            this.projectName = project.name;
            // console.log(`Fetched projectName: ${this.projectName}`)
        });
        this._reportDataSub = this._rds.getReportDataUpdateListener()
            .subscribe((resData) => {
            this.reportData = resData;
            console.log(resData);
        });
        this._reportThumbnailSub = this._rds.getReportThumbnailUpdateListener()
            .subscribe((url) => {
            let thumbnailElement = document.querySelector("#report-thumbnail");
            const srcUrl = url ? url : this._placeholderUrl;
            // refresh thumbnail upon save
            thumbnailElement.src = srcUrl;
            this._gs.loaded();
        });
        this._allTemplatesSub = this._ts.getAllTemplateDataUpdateListener()
            .subscribe((data) => {
            this.allTemplates = data;
            this.allTemplates.forEach(template => {
                if (!template.thumbnail_key) {
                    template.thumbnail_key = this._placeholderUrl;
                }
            });
            this._gs.loaded();
        });
    }
    ngOnDestroy() {
        this._reportDataSub.unsubscribe();
        this._projectDataSub.unsubscribe();
        this._reportThumbnailSub.unsubscribe();
        this._allTemplatesSub.unsubscribe();
    }
    // https://stackblitz.com/edit/angular-html2canvas-example?file=src%2Fapp%2Fapp.component.html
    getPreviewThumbnail(display = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let previewInfoElement = document.querySelector("#previewInfo");
            let reportContent = "";
            reportContent += this.reportData.header_data;
            this.reportData.content.forEach(el => {
                if (el.type == "editor") {
                    reportContent += el.relevantInfo;
                }
            });
            previewInfoElement.innerHTML = reportContent;
            let canvas = yield html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(document.querySelector("#previewInfo"));
            // this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.capturedImage);
            const dataURItoBlob = (dataURI) => {
                var binary = atob(dataURI.split(',')[1]);
                var array = [];
                for (var i = 0; i < binary.length; i++) {
                    array.push(binary.charCodeAt(i));
                }
                return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
            };
            let capturedImageURI;
            capturedImageURI = canvas.toDataURL();
            let capturedImageBlob = dataURItoBlob(capturedImageURI);
            previewInfoElement.innerHTML = "";
            console.log(capturedImageBlob);
            return capturedImageBlob;
        });
    }
    saveHeader() {
        this._gs.load();
        this.scrollToTop(); // if not the screenshot into thumbnail will be cut off
        this.getPreviewThumbnail(false).then((thumbnailBlob) => {
            this._rds.saveHeader();
            this._rds.updateThumbnail(thumbnailBlob, this.projectName);
        });
        // _rds method will stop the loading
    }
    saveFooter() {
        this._gs.load();
        this.scrollToTop(); // if not the screenshot into thumbnail will be cut off
        this.getPreviewThumbnail(false).then((thumbnailBlob) => {
            this._rds.saveFooter();
            this._rds.updateThumbnail(thumbnailBlob, this.projectName);
        });
        // _rds method will stop the loading
    }
    scrollToTop() {
        document.documentElement.scrollTop = 0;
    }
    previewReport() {
        this._rds.generateReportPreview(this._vcr);
    }
    previewTemplate(template) {
        this._ts.generateTemplatePreview(template);
    }
    appendToReport(template) {
        const appendConfirmed = confirm(`Are you sure you want to append template '${template.template_name}' to report?`);
        if (appendConfirmed) {
            this._gs.load();
            this._rds.appendToReport(template);
            this.scrollToTop(); // if not the screenshot into thumbnail will be cut off
            this.getPreviewThumbnail(false).then((thumbnailBlob) => {
                this._rds.saveFullReport();
                this._rds.updateThumbnail(thumbnailBlob, this.projectName);
            });
        }
    }
}
ReportConfigurationPageComponent.ɵfac = function ReportConfigurationPageComponent_Factory(t) { return new (t || ReportConfigurationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_general_services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_reportData_service__WEBPACK_IMPORTED_MODULE_8__["ReportDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_allProject_service__WEBPACK_IMPORTED_MODULE_9__["AllProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_templateData_service__WEBPACK_IMPORTED_MODULE_10__["TemplateDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_general_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])); };
ReportConfigurationPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReportConfigurationPageComponent, selectors: [["app-report-configuration-page"]], decls: 31, vars: 13, consts: [["id", "previewInfo"], [1, "row", "no", "gutters", "config-container", "align-items-center"], [1, "col-8", "pt-0", "p-4", "align-items-center"], [1, "title"], [1, "report-container"], ["matTooltip", "Header will be repeated on the start of all pages in print layout.", 1, "row", "no-gutters", "py-2", "px-4", "justify-content-between", "headings-container"], [1, "pt-2"], ["mat-button", "", "color", "accent", 3, "click", 4, "ngIf"], [1, "editor-container"], [3, "editor", "config", "ngModel", "disabled", "ngModelChange", "ready"], [1, "col-4", "p-2"], [1, "d-flex", "flex-column", "report-container"], [1, "row", "no-gutters", "py-2", "px-3", "headings-container"], [1, "col"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Edit report content", 3, "routerLink", 4, "ngIf"], ["mat-icon-button", "", "color", "accent", "matTooltip", "View full report print preview", 3, "click"], [2, "margin", "2px"], ["id", "report-thumbnail", "matTooltip", "View full report print preview", 3, "click"], ["class", "mt-2 mb-4 d-flex flex-column report-templates-container", 4, "ngIf"], ["mat-button", "", "color", "accent", 3, "click"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Edit report content", 3, "routerLink"], [1, "mt-2", "mb-4", "d-flex", "flex-column", "report-templates-container"], [1, "py-2", "px-3", "headings-container"], [1, "row", "no-gutters", "p-3", "flex-wrap", 2, "max-width", "100%"], [4, "ngFor", "ngForOf"], [1, "m-2", "col", "flex-item-template"], [1, "m-2", "col", "no-gutters", "flex-item-template"], [1, "d-flex", "flex-column", "p-4", "thumbnail-content", "thumbnail-card"], [1, "flex-grow-1"], [1, "mb-2", "text-bold"], [3, "matTooltip"], ["align", "end"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Append template to existing report", 1, "mx-2", 3, "click"], [2, "color", "whitesmoke"], ["mat-icon-button", "", "color", "accent", "matTooltip", "View template preview", 1, "mx-2", 3, "click"], ["class", "thumbnail-placeholder", 3, "src", 4, "ngIf"], ["class", "thumbnail-image thumbnail-content", 3, "src", 4, "ngIf"], [1, "thumbnail-placeholder", 3, "src"], [1, "thumbnail-image", "thumbnail-content", 3, "src"]], template: function ReportConfigurationPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Header ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ReportConfigurationPageComponent_button_9_Template, 4, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ckeditor", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ReportConfigurationPageComponent_Template_ckeditor_ngModelChange_11_listener($event) { return ctx.reportData.header_data = $event; })("ready", function ReportConfigurationPageComponent_Template_ckeditor_ready_11_listener($event) { return ctx.onReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Footer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ReportConfigurationPageComponent_button_16_Template, 4, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ckeditor", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ReportConfigurationPageComponent_Template_ckeditor_ngModelChange_18_listener($event) { return ctx.reportData.footer_data = $event; })("ready", function ReportConfigurationPageComponent_Template_ckeditor_ready_18_listener($event) { return ctx.onReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Report Preview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ReportConfigurationPageComponent_button_25_Template, 3, 3, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportConfigurationPageComponent_Template_button_click_26_listener() { return ctx.previewReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportConfigurationPageComponent_Template_img_click_29_listener() { return ctx.previewReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ReportConfigurationPageComponent_div_30_Template, 9, 1, "div", 18);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Project: ", ctx.projectName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isClient);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("editor", ctx.Editor)("config", ctx.editorConfig)("ngModel", ctx.reportData.header_data)("disabled", ctx.isClient);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isClient);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("editor", ctx.Editor)("config", ctx.editorConfig)("ngModel", ctx.reportData.footer_data)("disabled", ctx.isClient);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isClient);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isClient);
    } }, directives: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardActions"]], styles: [".config-container[_ngcontent-%COMP%] {\n  min-width: 90vw;\n  max-width: 95vw;\n  min-height: 70vh;\n}\n\n.title[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  font-size: 3rem;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-weight: bold;\n  letter-spacing: -1px;\n  line-height: 1;\n}\n\n.headings-container[_ngcontent-%COMP%] {\n  background-color: #3f3f3f;\n}\n\n.editor-container[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n}\n\n.report-container[_ngcontent-%COMP%] {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n#report-thumbnail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  align-self: center;\n}\n\n#report-thumbnail[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n  cursor: pointer;\n}\n\n#previewInfo[_ngcontent-%COMP%] {\n  top: 100vh;\n  position: fixed;\n  width: 26cm;\n  padding: 20mm 20mm 20mm 20mm;\n  height: 120vh;\n  overflow: hidden;\n  color: black;\n}\n\n#previewInfo[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-spacing: 0;\n  border-collapse: collapse;\n  width: 100%;\n}\n\nckeditor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.report-templates-container[_ngcontent-%COMP%] {\n  min-width: 90vw;\n  max-width: 95vw;\n  margin: auto;\n  border: 2px solid #3f3f3f;\n}\n\n.flex-item-template[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden;\n  min-width: 24vw;\n}\n\n.thumbnail-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.thumbnail-card[_ngcontent-%COMP%]:hover {\n  background: none;\n}\n\n.thumbnail-image[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  z-index: -5;\n}\n\n.thumbnail-placeholder[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 100%;\n}\n\nmat-card-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwb3J0LWNvbmZpZ3VyYXRpb24tcGFnZS9FOlxcZHItb25lL3NyY1xcYXBwXFxwYWdlc1xccmVwb3J0LWNvbmZpZ3VyYXRpb24tcGFnZVxccmVwb3J0LWNvbmZpZ3VyYXRpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVwb3J0LWNvbmZpZ3VyYXRpb24tcGFnZS9yZXBvcnQtY29uZmlndXJhdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNFSjs7QURBQTtFQUNJLHlCQUFBO0FDR0o7O0FEREE7RUFFSSw0QkFBQTtBQ0dKOztBRERBO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtBQ0lKOztBRElBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0RKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQU1JLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBRUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ05KOztBRE5JO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNRUjs7QURLQTtFQUNJLFlBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDRko7O0FEb0JBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNqQko7O0FEbUJBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaEJKOztBRGtCQTtFQUNJLGdCQUFBO0FDZko7O0FEaUJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNkSjs7QURnQkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNiSjs7QURlQTtFQUNJLGdCQUFBO0FDWkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXBvcnQtY29uZmlndXJhdGlvbi1wYWdlL3JlcG9ydC1jb25maWd1cmF0aW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmlnLWNvbnRhaW5lcntcclxuICAgIG1pbi13aWR0aDogOTB2dztcclxuICAgIG1heC13aWR0aDogOTV2dztcclxuICAgIG1pbi1oZWlnaHQ6IDcwdmg7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmOyBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4OyBcclxuICAgIGxpbmUtaGVpZ2h0OiAxOyBcclxufVxyXG4uaGVhZGluZ3MtY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmM2YzZjtcclxufVxyXG4uZWRpdG9yLWNvbnRhaW5lcntcclxuICAgIC8vIG1heC13aWR0aDogMjNjbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuLnJlcG9ydC1jb250YWluZXJ7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG59XHJcbi8vIC5jYW52YXMtaW1hZ2V7XHJcbi8vICAgICBtYXgtd2lkdGg6IDMwdnc7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIC8vIHBhZGRpbmctdG9wOiAxMDAlOyAvKiAxOjEgQXNwZWN0IFJhdGlvICovXHJcbi8vICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbi8vIH1cclxuI3JlcG9ydC10aHVtYm5haWx7XHJcbiAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICBoZWlnaHQgOiAxMDAlO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbiNyZXBvcnQtdGh1bWJuYWlsOmhvdmVye1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi8vLy8vLy8vLy8vLy8vLy8gZm9yIHByZXZpZXcgZ2VuZXJhdGlvbiAvLy8vLy8vLy8vLy8vLy8vXHJcbiNwcmV2aWV3SW5mb3tcclxuICAgIHRhYmxle1xyXG4gICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIHRvcDoxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAyNmNtO1xyXG4gICAgcGFkZGluZzogMjBtbSAyMG1tIDIwbW0gMjBtbTsgXHJcbiAgICAvLyBzaG93IHN0YXJ0IG9mIHJlcG9ydCBvbmx5XHJcbiAgICBoZWlnaHQ6IDEyMHZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNrZWRpdG9ye1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ucmVwb3J0LXRlbXBsYXRlcy1jb250YWluZXIge1xyXG4gICAgbWluLXdpZHRoOiA5MHZ3O1xyXG4gICAgbWF4LXdpZHRoOiA5NXZ3O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM2YzZjNmO1xyXG59XHJcbi8vIC5mbGV4LWNvbnRhaW5lciB7XHJcbi8vICAgLyogV2UgZmlyc3QgY3JlYXRlIGEgZmxleCBsYXlvdXQgY29udGV4dCAqL1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgLyogVGhlbiB3ZSBkZWZpbmUgdGhlIGZsb3cgZGlyZWN0aW9uXHJcbi8vICAgICAgYW5kIGlmIHdlIGFsbG93IHRoZSBpdGVtcyB0byB3cmFwXHJcbi8vICAgICogUmVtZW1iZXIgdGhpcyBpcyB0aGUgc2FtZSBhczpcclxuLy8gICAgKiBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4vLyAgICAqIGZsZXgtd3JhcDogd3JhcDtcclxuLy8gICAgKi9cclxuLy8gICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4vLyAgIC8qIFRoZW4gd2UgZGVmaW5lIGhvdyBpcyBkaXN0cmlidXRlZCB0aGUgcmVtYWluaW5nIHNwYWNlICovXHJcbi8vICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4vLyAgIC8vIHBhZGRpbmc6IDA7XHJcbi8vICAgbWFyZ2luOiAwO1xyXG4vLyB9XHJcblxyXG4uZmxleC1pdGVtLXRlbXBsYXRlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWluLXdpZHRoOiAyNHZ3O1xyXG59XHJcbi50aHVtYm5haWwtY29udGVudHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgd2lkdGggOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi50aHVtYm5haWwtY2FyZDpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuLnRodW1ibmFpbC1pbWFnZXtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICAgIHotaW5kZXg6IC01O1xyXG59XHJcbi50aHVtYm5haWwtcGxhY2Vob2xkZXJ7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aCA6IDEwMCU7XHJcbn1cclxubWF0LWNhcmQtY29udGVudHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuIiwiLmNvbmZpZy1jb250YWluZXIge1xuICBtaW4td2lkdGg6IDkwdnc7XG4gIG1heC13aWR0aDogOTV2dztcbiAgbWluLWhlaWdodDogNzB2aDtcbn1cblxuLnRpdGxlIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5oZWFkaW5ncy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2YzZjNmO1xufVxuXG4uZWRpdG9yLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5yZXBvcnQtY29udGFpbmVyIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuXG4jcmVwb3J0LXRodW1ibmFpbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuI3JlcG9ydC10aHVtYm5haWw6aG92ZXIge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3ByZXZpZXdJbmZvIHtcbiAgdG9wOiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMjZjbTtcbiAgcGFkZGluZzogMjBtbSAyMG1tIDIwbW0gMjBtbTtcbiAgaGVpZ2h0OiAxMjB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6IGJsYWNrO1xufVxuI3ByZXZpZXdJbmZvIHRhYmxlIHtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5ja2VkaXRvciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnJlcG9ydC10ZW1wbGF0ZXMtY29udGFpbmVyIHtcbiAgbWluLXdpZHRoOiA5MHZ3O1xuICBtYXgtd2lkdGg6IDk1dnc7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyOiAycHggc29saWQgIzNmM2YzZjtcbn1cblxuLmZsZXgtaXRlbS10ZW1wbGF0ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1pbi13aWR0aDogMjR2dztcbn1cblxuLnRodW1ibmFpbC1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50aHVtYm5haWwtY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi50aHVtYm5haWwtaW1hZ2Uge1xuICBvcGFjaXR5OiAwLjM7XG4gIHotaW5kZXg6IC01O1xufVxuXG4udGh1bWJuYWlsLXBsYWNlaG9sZGVyIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWNhcmQtY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReportConfigurationPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-report-configuration-page',
                templateUrl: './report-configuration-page.component.html',
                styleUrls: ['./report-configuration-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _general_services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] }, { type: _services_reportData_service__WEBPACK_IMPORTED_MODULE_8__["ReportDataService"] }, { type: _services_allProject_service__WEBPACK_IMPORTED_MODULE_9__["AllProjectService"] }, { type: _services_templateData_service__WEBPACK_IMPORTED_MODULE_10__["TemplateDataService"] }, { type: _general_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/report/report-page/report-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/report/report-page/report-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: ReportPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageComponent", function() { return ReportPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_ckeditor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ckeditor.js */ "./src/app/pages/services/ckeditor.js");
/* harmony import */ var _services_ckeditor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_services_ckeditor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_uploadAdapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/uploadAdapter */ "./src/app/pages/services/uploadAdapter.ts");
/* harmony import */ var _services_ckconfig_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/ckconfig.js */ "./src/app/pages/services/ckconfig.js");
/* harmony import */ var _services_draggable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/draggable.js */ "./src/app/pages/services/draggable.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _general_services_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../general-services/global.service */ "./src/app/general-services/global.service.ts");
/* harmony import */ var _services_reportData_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/reportData.service */ "./src/app/pages/services/reportData.service.ts");
/* harmony import */ var _general_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../general-services/auth.service */ "./src/app/general-services/auth.service.ts");
/* harmony import */ var _services_allProject_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/allProject.service */ "./src/app/pages/services/allProject.service.ts");
/* harmony import */ var _services_floorplan_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/floorplan.service */ "./src/app/pages/services/floorplan.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _visualization_floor_plan_floor_plan_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../visualization/floor-plan/floor-plan.component */ "./src/app/pages/visualization/floor-plan/floor-plan.component.ts");



// https://ckeditor.com/ckeditor-5/online-builder/
// https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/angular.html
// https://stackoverflow.com/questions/46765197/how-to-enable-image-upload-support-in-ckeditor-5
// import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'



















function ReportPageComponent_div_3_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportPageComponent_div_3_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.saveAsTemplate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "bookmark_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ReportPageComponent_div_3_button_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Floorplan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r5);
} }
function ReportPageComponent_div_3_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportPageComponent_div_3_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const floorplanId_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.addEntry("floorplan", floorplanId_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const floorplanId_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Floorplan ID: ", floorplanId_r9, " ");
} }
const _c0 = function (a1) { return ["/report-config", a1]; };
function ReportPageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "drag_indicator");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportPageComponent_div_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.scrollToTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "vertical_align_top");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ReportPageComponent_div_3_button_10_Template, 3, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportPageComponent_div_3_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.saveReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportPageComponent_div_3_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.previewReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-menu", null, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportPageComponent_div_3_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.addEntry("editor", null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Text Editor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ReportPageComponent_div_3_button_24_Template, 2, 1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-menu", null, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ReportPageComponent_div_3_button_27_Template, 2, 1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r3)("disabled", ctx_r0.isClient);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.isClient);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx_r0.currentProjId));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.gs.getProjectType() == "dr-one");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.floorplanIds);
} }
function ReportPageComponent_div_4_div_1_div_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportPageComponent_div_4_div_1_div_1_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.shiftUp(i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "arrow_drop_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ReportPageComponent_div_4_div_1_div_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportPageComponent_div_4_div_1_div_1_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).index; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.shiftDown(i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ReportPageComponent_div_4_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReportPageComponent_div_4_div_1_div_1_button_1_Template, 3, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ReportPageComponent_div_4_div_1_div_1_button_2_Template, 3, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportPageComponent_div_4_div_1_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const entry_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.deleteEntry(entry_r17.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r18 !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r18 !== ctx_r21.reportData.content.length - 1);
} }
function ReportPageComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReportPageComponent_div_4_div_1_div_1_Template, 6, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ckeditor", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ReportPageComponent_div_4_div_1_Template_ckeditor_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const entry_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; return entry_r17.relevantInfo = $event; })("ready", function ReportPageComponent_div_4_div_1_Template_ckeditor_ready_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r37.onReady($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r19.isClient);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("editor", ctx_r19.Editor)("config", ctx_r19.editorConfig)("ngModel", entry_r17.relevantInfo)("disabled", ctx_r19.isClient);
} }
function ReportPageComponent_div_4_div_2_div_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportPageComponent_div_4_div_2_div_1_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).index; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r42.shiftUp(i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "arrow_drop_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ReportPageComponent_div_4_div_2_div_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportPageComponent_div_4_div_2_div_1_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).index; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r45.shiftDown(i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ReportPageComponent_div_4_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReportPageComponent_div_4_div_2_div_1_button_1_Template, 3, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ReportPageComponent_div_4_div_2_div_1_button_2_Template, 3, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportPageComponent_div_4_div_2_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); const entry_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r48.deleteEntry(entry_r17.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r18 !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r18 !== ctx_r39.reportData.content.length - 1);
} }
const _c1 = function (a1) { return ["/visualization", a1]; };
function ReportPageComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReportPageComponent_div_4_div_2_div_1_Template, 6, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-floor-plan", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r20.isClient);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lockDefects", true)("selectedFloorplanId", entry_r17.relevantInfo)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, ctx_r20.currentProjId));
} }
function ReportPageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReportPageComponent_div_4_div_1_Template, 3, 5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ReportPageComponent_div_4_div_2_Template, 3, 6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", entry_r17.type === "editor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", entry_r17.type === "floorplan");
} }
class ReportPageComponent {
    constructor(_route, gs, _rds, _as, _aps, _fs, _vcr) {
        this._route = _route;
        this.gs = gs;
        this._rds = _rds;
        this._as = _as;
        this._aps = _aps;
        this._fs = _fs;
        this._vcr = _vcr;
        ////////// Editor Configuration  //////////
        this.Editor = _services_ckeditor_js__WEBPACK_IMPORTED_MODULE_3__;
        this.isEdit = true;
        this.editorConfig = _services_ckconfig_js__WEBPACK_IMPORTED_MODULE_5__["default"];
        this.reportData = { header_data: "", content: [] };
        this.floorplanIds = []; // for drop-down menu to add new component
        this.isClient = true;
        this.isAdmin = false;
    }
    handleKeyboardEvent(event) {
        const ctrlKey = navigator.platform.match('Mac') ? event.metaKey : event.ctrlKey;
        // console.log(ctrlKey, event.which)
        if (event.which == 115 && ctrlKey) {
            event.preventDefault();
            this.saveReport();
        }
    }
    onReady(editor) {
        // called once when editor loads
        // console.log(this.projectName)
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            // called everytime I add an image onto ckeditor
            // console.log(this.projectName)
            return new _services_uploadAdapter__WEBPACK_IMPORTED_MODULE_4__["UploadAdapter"](loader, this.projectName);
        };
        editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
    ngOnInit() {
        this.gs.load();
        const role = this._as.getAuthData()["role"];
        this.isClient = (role === "client") ? true : false;
        this.isAdmin = (role === "admin") ? true : false;
        this._route.paramMap.subscribe((paramMap) => {
            const projId = paramMap.get("id");
            this.currentProjId = projId;
            this._aps.getProjectData(projId);
            this._rds.getReportDataByProjId(projId);
        });
        this._projectDataSub = this._aps.getProjectUpdateListener()
            .subscribe((project) => {
            this.projectName = project.name;
            this._fs.getFloorplans(this.currentProjId);
        });
        this._reportDataSub = this._rds.getReportDataUpdateListener()
            .subscribe((resData) => {
            // console.log(resData)
            this.reportData = resData;
        });
        this._floorplanSub = this._fs.getAllFloorplanDataUpdateListener()
            .subscribe((data) => {
            this.floorplanIds = data;
        });
    }
    ngAfterViewInit() {
        this.toolbar = document.getElementById("toolbar");
        Object(_services_draggable_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this.toolbar);
        // wait till app-floor-plan is added to DOM by ngIf
        setTimeout(() => {
            this._fs.loadFloorplanComponent();
            this.gs.loaded();
        }, 2000);
    }
    ngOnDestroy() {
        this._projectDataSub.unsubscribe();
        this._reportDataSub.unsubscribe();
        this._floorplanSub.unsubscribe();
    }
    saveReport() {
        this.gs.load();
        this.scrollToTop();
        this.getPreviewThumbnail().then((thumbnailBlob) => {
            this._rds.saveReport();
            this._rds.updateThumbnail(thumbnailBlob, this.projectName);
        });
        // _rds method will stop the loading
    }
    saveAsTemplate() {
        this.gs.load();
        this._rds.saveReportAsTemplate(this.projectName);
        // TemplateDataService method will stop the loading and naviage to template page
    }
    addEntry(type, floorplanId) {
        this._rds.addReportEntry(type, floorplanId);
    }
    deleteEntry(id) {
        this._rds.deleteReportEntry(id);
    }
    shiftUp(index) {
        this._rds.shiftUpReportEntry(index);
    }
    shiftDown(index) {
        this._rds.shiftDownReportEntry(index);
    }
    scrollToTop() {
        document.documentElement.scrollTop = 0;
    }
    previewReport() {
        this._rds.saveReport(false);
        this._rds.generateReportPreview(this._vcr);
    }
    // https://stackblitz.com/edit/angular-html2canvas-example?file=src%2Fapp%2Fapp.component.html
    getPreviewThumbnail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let previewInfoElement = document.querySelector("#previewInfo");
            let reportContent = "";
            reportContent += this.reportData.header_data;
            this.reportData.content.forEach(el => {
                if (el.type == "editor") {
                    reportContent += el.relevantInfo;
                }
            });
            previewInfoElement.innerHTML = reportContent;
            let canvas = yield html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(document.querySelector("#previewInfo"));
            // this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.capturedImage);
            const dataURItoBlob = (dataURI) => {
                var binary = atob(dataURI.split(',')[1]);
                var array = [];
                for (var i = 0; i < binary.length; i++) {
                    array.push(binary.charCodeAt(i));
                }
                return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
            };
            let capturedImageURI;
            capturedImageURI = canvas.toDataURL();
            let capturedImageBlob = dataURItoBlob(capturedImageURI);
            previewInfoElement.innerHTML = "";
            return capturedImageBlob;
        });
    }
}
ReportPageComponent.ɵfac = function ReportPageComponent_Factory(t) { return new (t || ReportPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_general_services_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_reportData_service__WEBPACK_IMPORTED_MODULE_9__["ReportDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_general_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_allProject_service__WEBPACK_IMPORTED_MODULE_11__["AllProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_floorplan_service__WEBPACK_IMPORTED_MODULE_12__["FloorplanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])); };
ReportPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReportPageComponent, selectors: [["app-report-page"]], hostBindings: function ReportPageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function ReportPageComponent_keypress_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, decls: 6, vars: 3, consts: [["id", "previewInfo"], [1, "title", "mt-4"], ["class", "d-flex flex-column", "id", "toolbar", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["id", "toolbar", 1, "d-flex", "flex-column"], ["mat-icon-button", "", "color", "accent", "disabled", "", "matTooltip", "Drag toolbar", 1, "m-1", "move-toolbar"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Scroll to top", 1, "m-1", 3, "click"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Add new cell", 1, "m-1", 3, "matMenuTriggerFor", "disabled"], ["class", "m-1", "mat-icon-button", "", "color", "accent", "matTooltip", "Save report as a template", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Save report", 1, "m-1", 3, "disabled", "click"], ["mat-icon-button", "", "color", "accent", "matTooltip", "View full report print preview", 1, "m-1", 3, "click"], ["mat-icon-button", "", "color", "accent", "matTooltip", "View report header/configuration", 1, "m-1", 3, "routerLink"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["floorplans", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Save report as a template", 1, "m-1", 3, "click"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["class", "editor-container my-4", 4, "ngIf"], ["class", "floorplan my-4", 4, "ngIf"], [1, "editor-container", "my-4"], ["class", "row no-gutters justify-content-end px-3 headings-container", 4, "ngIf"], [3, "editor", "config", "ngModel", "disabled", "ngModelChange", "ready"], [1, "row", "no-gutters", "justify-content-end", "px-3", "headings-container"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Shift cell upwards", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Shift cell downwards", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Delete cell", 3, "click"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Shift cell upwards", 3, "click"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Shift cell downwards", 3, "click"], [1, "floorplan", "my-4"], [3, "lockDefects", "selectedFloorplanId", "routerLink"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Delete floorplan figure", 3, "click"]], template: function ReportPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ReportPageComponent_div_3_Template, 28, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ReportPageComponent_div_4_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Project : ", ctx.projectName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isClient);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.reportData.content);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuTrigger"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuItem"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_18__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"], _visualization_floor_plan_floor_plan_component__WEBPACK_IMPORTED_MODULE_20__["FloorPlanComponent"]], styles: ["#toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 5;\n  background: #4f4f4f;\n  border-radius: 4px;\n  top: 30vh;\n  left: 5vw;\n}\n\n#toolbar[_ngcontent-%COMP%]:hover {\n  border: 1px solid #218d9ef7;\n}\n\n.move-toolbar[_ngcontent-%COMP%] {\n  opacity: 0.2;\n}\n\n.move-toolbar[_ngcontent-%COMP%]:hover {\n  cursor: move;\n}\n\n.title[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  font-size: 3rem;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-weight: bold;\n  letter-spacing: -1px;\n  line-height: 1;\n}\n\n.editor-container[_ngcontent-%COMP%] {\n  max-width: 23cm;\n  background-color: whitesmoke;\n  border-radius: 4px;\n}\n\n.headings-container[_ngcontent-%COMP%] {\n  background-color: #3f3f3f;\n  width: 100%;\n}\n\n.floorplan[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 23cm;\n  margin: auto;\n}\n\nckeditor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#previewInfo[_ngcontent-%COMP%] {\n  top: 100vh;\n  position: fixed;\n  width: 26cm;\n  padding: 20mm 20mm 20mm 20mm;\n  height: 120vh;\n  overflow: hidden;\n  color: black;\n}\n\n#previewInfo[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-spacing: 0;\n  border-collapse: collapse;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwb3J0L3JlcG9ydC1wYWdlL0U6XFxkci1vbmUvc3JjXFxhcHBcXHBhZ2VzXFxyZXBvcnRcXHJlcG9ydC1wYWdlXFxyZXBvcnQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVwb3J0L3JlcG9ydC1wYWdlL3JlcG9ydC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUNGRjs7QURJQTtFQUNFLDJCQUFBO0FDREY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QUREQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ0lKOztBREZBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDS0Y7O0FESEE7RUFDRSxZQUFBO0FDTUY7O0FESEE7RUFNRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUVBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURaRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDY0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXBvcnQvcmVwb3J0LXBhZ2UvcmVwb3J0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA6aG9zdCA6Om5nLWRlZXAgLmNrLWVkaXRvcl9fZWRpdGFibGVfaW5saW5lIHtcclxuLy8gICB3aWR0aDogODB2dztcclxuLy8gfVxyXG4jdG9vbGJhcntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogNTtcclxuICBiYWNrZ3JvdW5kOiAjNGY0ZjRmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB0b3A6IDMwdmg7XHJcbiAgbGVmdDogNXZ3O1xyXG59XHJcbiN0b29sYmFyOmhvdmVye1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMThkOWVmNztcclxufVxyXG4ubW92ZS10b29sYmFye1xyXG4gIG9wYWNpdHk6IDAuMjtcclxufVxyXG4ubW92ZS10b29sYmFyOmhvdmVye1xyXG4gIGN1cnNvcjogbW92ZTtcclxufVxyXG4udGl0bGV7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmOyBcclxuICBmb250LXdlaWdodDogYm9sZDsgXHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7IFxyXG4gIGxpbmUtaGVpZ2h0OiAxOyBcclxufVxyXG4uZWRpdG9yLWNvbnRhaW5lcntcclxuICBtYXgtd2lkdGg6IDIzY207XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmhlYWRpbmdzLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjNmM2Y7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZmxvb3JwbGFuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDpmaXQtY29udGVudDtcclxuICBtYXgtd2lkdGg6IDIzY207XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbmNrZWRpdG9ye1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4vLy8vLy8vLy8vLy8vLy8vIGZvciBwcmV2aWV3IGdlbmVyYXRpb24gLy8vLy8vLy8vLy8vLy8vL1xyXG4jcHJldmlld0luZm97XHJcbiAgdGFibGV7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgdG9wOjEwMHZoO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMjZjbTtcclxuICBwYWRkaW5nOiAyMG1tIDIwbW0gMjBtbSAyMG1tOyBcclxuICAvLyBzaG93IHN0YXJ0IG9mIHJlcG9ydCBvbmx5XHJcbiAgaGVpZ2h0OiAxMjB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuIiwiI3Rvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDU7XG4gIGJhY2tncm91bmQ6ICM0ZjRmNGY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdG9wOiAzMHZoO1xuICBsZWZ0OiA1dnc7XG59XG5cbiN0b29sYmFyOmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzIxOGQ5ZWY3O1xufVxuXG4ubW92ZS10b29sYmFyIHtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG4ubW92ZS10b29sYmFyOmhvdmVyIHtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuXG4udGl0bGUge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLmVkaXRvci1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDIzY207XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmhlYWRpbmdzLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjNmM2Y7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmxvb3JwbGFuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWF4LXdpZHRoOiAyM2NtO1xuICBtYXJnaW46IGF1dG87XG59XG5cbmNrZWRpdG9yIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4jcHJldmlld0luZm8ge1xuICB0b3A6IDEwMHZoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyNmNtO1xuICBwYWRkaW5nOiAyMG1tIDIwbW0gMjBtbSAyMG1tO1xuICBoZWlnaHQ6IDEyMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogYmxhY2s7XG59XG4jcHJldmlld0luZm8gdGFibGUge1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReportPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-report-page',
                templateUrl: './report-page.component.html',
                styleUrls: ['./report-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _general_services_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"] }, { type: _services_reportData_service__WEBPACK_IMPORTED_MODULE_9__["ReportDataService"] }, { type: _general_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] }, { type: _services_allProject_service__WEBPACK_IMPORTED_MODULE_11__["AllProjectService"] }, { type: _services_floorplan_service__WEBPACK_IMPORTED_MODULE_12__["FloorplanService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }]; }, { handleKeyboardEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['document:keypress', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/services/allProject.service.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/services/allProject.service.ts ***!
  \******************************************************/
/*! exports provided: AllProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllProjectService", function() { return AllProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _general_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../general-services/auth.service */ "./src/app/general-services/auth.service.ts");
/* harmony import */ var _userSetting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userSetting.service */ "./src/app/pages/services/userSetting.service.ts");
/* harmony import */ var _general_services_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../general-services/global.service */ "./src/app/general-services/global.service.ts");










class AllProjectService {
    constructor(http, _router, _as, _uss, gs) {
        this.http = http;
        this._router = _router;
        this._as = _as;
        this._uss = _uss;
        this.gs = gs;
        this._allProject = [];
        this._allProjectUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._projectUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getAllProjectUpdateListener = () => this._allProjectUpdated.asObservable();
        this.getProjectUpdateListener = () => this._projectUpdated.asObservable();
        this.getAllProjectIds = () => this._allProject.map(el => { return el.id; });
    }
    getProjectData(projId) {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/project/" + projId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return {
                id: res.data._id,
                name: res.data.project_name,
                created: new Date(res.data.date_created),
                type: res.data.project_type
            };
        }))
            .subscribe((processedProject) => {
            this._projectUpdated.next(processedProject);
        });
    }
    // This is the entry function for the service
    getAllProjectData(role, permission) {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/project/all")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((resData) => {
            let transformedOutput = resData.data.map(projectMetadata => {
                return {
                    id: projectMetadata._id,
                    name: projectMetadata.project_name,
                    created: new Date(projectMetadata.date_created),
                    type: projectMetadata.project_type
                };
            });
            if (role !== "admin") {
                transformedOutput = transformedOutput.filter(project => permission.includes(project.id));
            }
            return transformedOutput;
        }))
            .subscribe((transformedAllProject) => {
            this._allProject = transformedAllProject;
            console.log("getAllProjectData: ", transformedAllProject);
            this._allProjectUpdated.next([...this._allProject]);
        }, (error) => {
            this._router.navigate(["/home"]);
        });
    }
    addProjectEntry(configForm) {
        const userAuthData = this._as.getAuthData();
        for (let key in userAuthData) {
            configForm.append(key, userAuthData[key]);
        }
        const createConfirmed = confirm("Are you sure about the project config?");
        if (createConfirmed) {
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/project", configForm)
                .subscribe((resData) => {
                this.gs.loaded();
                alert("Project Created Successfully");
                this._as.parseToken(resData.token, resData.expiresIn);
                /// navigate to report-config page
                const projId = resData.project._id;
                this._router.navigate(['/home']);
            }, (error) => {
                alert("Fail to create project, Please review your settings!\nCannot create project with the same name");
            });
        }
    }
    addReportProjectEntry(projName) {
        // embed proj name in body and http post
        const userAuthData = this._as.getAuthData();
        const body = Object.assign({ project_name: projName }, userAuthData);
        console.log(body);
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/project/report", body)
            .subscribe((resData) => {
            console.log(resData);
            this.gs.loaded();
            window.alert(`${projName} Created Successfully`);
            this._as.parseToken(resData.token, resData.expiresIn);
            /// navigate to report-config page
            const projId = resData.project._id;
            this._router.navigate(['/report-config', projId]);
        }, (error) => {
            alert(`Project name ${projName} already exists!`);
        });
    }
    deleteProjectEntry(projectName, id) {
        this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/project/" + id)
            .subscribe((resData) => {
            this._allProject = this._allProject.filter(projectEntry => projectEntry.id !== id);
            this._allProjectUpdated.next([...this._allProject]);
            alert(projectName + " deleted successfully");
        }, (errData) => {
            alert("Fail to delete project " + projectName);
        });
    }
    checkProjectOutputLoadedStatus(id) {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/project/check-loaded/" + id)
            .subscribe((resData) => {
            this._router.navigate(["/report-config", id]);
        });
    }
}
AllProjectService.ɵfac = function AllProjectService_Factory(t) { return new (t || AllProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_general_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_userSetting_service__WEBPACK_IMPORTED_MODULE_7__["UserSettingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_general_services_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"])); };
AllProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AllProjectService, factory: AllProjectService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllProjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _general_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _userSetting_service__WEBPACK_IMPORTED_MODULE_7__["UserSettingService"] }, { type: _general_services_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/services/ckconfig.js":
/*!********************************************!*\
  !*** ./src/app/pages/services/ckconfig.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import { environment } from '../../../environments/environment';
const ckconfig = {
    toolbar: [
      'heading','undo','redo','|',
      'bold','italic','underline',"strikethrough","subscript","superscript","specialCharacters","insertTable",'|',
      'fontFamily', 'fontSize', 'fontColor', 'fontBackgroundColor', 'highlight', 'removeFormat', '|', 
      'alignment', 'outdent', 'indent', 'bulletedList', 'numberedList', 'horizontalLine', '|', 
      'imageInsert', 'link', '|'
    ],
    image: {
      toolbar: [
         'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight','|',
        'imageResize', '|',
        'imageTextAlternative'
      ],
      // styles: [
      //   'alignLeft', 'alignCenter', 'alignRight'
      // ], // doesn't work outside of CKeditor
      resizeOptions: [{
            name: 'imageResize:original',
            label: 'Original',
            value: null
        },{
            name: 'imageResize:50',
            label: '50%',
            value: '50'
        },{
            name: 'imageResize:75',
            label: '75%',
            value: '75'
        }],
    },
    // simpleUpload: {
    //   // The URL that the images are uploaded to.
    //   uploadUrl: environment.apiURL + "/report/report-image",
    //   // Enable the XMLHttpRequest.withCredentials property.
    //   withCredentials: true,
    //   // Headers sent along with the XMLHttpRequest to the upload server.
    //   headers: {
    //       'X-CSRF-TOKEN': 'CSRF-Token',
    //       Authorization: 'Bearer <JSON Web Token>',
    //       "Project-name": "test"
    //   }
    // },
    table: {
      contentToolbar: [
        'tableColumn', 'tableRow', 'mergeTableCells',
        'tableProperties', 'tableCellProperties'
      ]
    },
    placeholder: 'Type the content here!'
}

/* harmony default export */ __webpack_exports__["default"] = (ckconfig);

/***/ }),

/***/ "./src/app/pages/services/ckeditor.js":
/*!********************************************!*\
  !*** ./src/app/pages/services/ckeditor.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
//# sourceMappingURL=ckeditor.js.map

/***/ }),

/***/ "./src/app/pages/services/draggable.js":
/*!*********************************************!*\
  !*** ./src/app/pages/services/draggable.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// https://www.w3schools.com/howto/howto_js_draggable.asp
const dragElement = (elmnt) =>{
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (dragElement);

/***/ }),

/***/ "./src/app/pages/services/edit.service.ts":
/*!************************************************!*\
  !*** ./src/app/pages/services/edit.service.ts ***!
  \************************************************/
/*! exports provided: EditService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditService", function() { return EditService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _general_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../general-services/auth.service */ "./src/app/general-services/auth.service.ts");







class EditService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        // Subjects and observable getter methods
        this._floorplanDataUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._keyframeDataUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._defectDataUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._defectDatahistory = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    getFloorplanDataUpdateListener() { return this._floorplanDataUpdated.asObservable(); }
    getKeyframeDataUpdateListener() { return this._keyframeDataUpdated.asObservable(); }
    getDefectDataUpdateListener() { return this._defectDataUpdated.asObservable(); }
    getDefectDataUpdatehistory() { return this._defectDatahistory.asObservable(); }
    getDefects(keyframeId) {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/defect/keyframe/" + keyframeId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res.data.map(df => {
                return Object.assign(Object.assign({}, df), { id: df._id });
            });
        }))
            .subscribe((processedDefects) => {
            console.log("getDefects: ", processedDefects);
            this._defectDataUpdated.next(processedDefects);
        });
    }
    verifyDefects(defects, keyframeId) {
        this.username = this.authService.getAuthData()["username"];
        const body = { defects: defects, username: this.username };
        this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/keyframe/verify/" + keyframeId, body)
            .subscribe(res => {
            console.log("verifyDefects: ", res);
        });
    }
    //test edit history
    checkedithistory(keyframeId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/keyframe/verify/eidthistory/" + keyframeId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((resData) => {
            let transformedOutput = resData.data.map(projectMetadata => {
                return {
                    id: projectMetadata._id,
                    created: new Date(projectMetadata.edit_at).toLocaleString("en-US", { timeZone: "Asia/Singapore" }),
                    name: projectMetadata.username,
                };
            });
            return transformedOutput;
        }));
    }
    //end test history
    getKeyframes(projectId) {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/keyframe/all/project/" + projectId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res.data.map(kf => {
                return Object.assign(Object.assign({}, kf), { id: kf._id });
            });
        }))
            .subscribe((processedKeyframes) => {
            console.log("getKeyframes: ", processedKeyframes);
            this._keyframeDataUpdated.next(processedKeyframes);
        });
    }
    getFloorplans(projectId) {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/floorplan/project/" + projectId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res.data.map(fp => {
                return Object.assign(Object.assign({}, fp), { id: fp._id });
            });
        }))
            .subscribe((processedFloorplans) => {
            console.log("getFloorplans: ", processedFloorplans);
            this._floorplanDataUpdated.next(processedFloorplans);
        });
    }
}
EditService.ɵfac = function EditService_Factory(t) { return new (t || EditService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_general_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
EditService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EditService, factory: EditService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _general_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/services/floorplan.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/services/floorplan.service.ts ***!
  \*****************************************************/
/*! exports provided: FloorplanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorplanService", function() { return FloorplanService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class FloorplanService {
    constructor(http) {
        this.http = http;
        this.loadFloorplanComponentListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._allFloorplansDataUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._floorplanDataUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._keyframeDataUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._defectDataUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    getAllFloorplanDataUpdateListener() { return this._allFloorplansDataUpdated.asObservable(); }
    getFloorplanDataUpdateListener() { return this._floorplanDataUpdated.asObservable(); }
    getKeyframeDataUpdateListener() { return this._keyframeDataUpdated.asObservable(); }
    getDefectDataUpdateListener() { return this._defectDataUpdated.asObservable(); }
    getLoadFloorplanComponentListener() { return this.loadFloorplanComponentListener.asObservable(); }
    loadFloorplanComponent() {
        this.loadFloorplanComponentListener.next({});
    }
    getFloorplan(floorplanId) {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/floorplan/" + floorplanId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return Object.assign(Object.assign({}, res.data), { id: res.data._id });
        }))
            .subscribe((processedFloorplan) => {
            console.log("getFloorplan: ", processedFloorplan);
            this._floorplanDataUpdated.next(processedFloorplan);
        });
    }
    getFloorplans(projectId) {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/floorplan/project/" + projectId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res.data.map(fp => {
                return Object.assign(Object.assign({}, fp), { id: fp._id });
            });
        }))
            .subscribe((processedFloorplans) => {
            console.log("getFloorplans: ", processedFloorplans);
            this._allFloorplansDataUpdated.next(processedFloorplans);
        });
    }
    getKeyframe(keyframeId) {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/keyframe/" + keyframeId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return Object.assign(Object.assign({}, res.data), { id: res.data._id });
        }))
            .subscribe((processedKeyframe) => {
            console.log("getKeyframes: ", processedKeyframe);
            this._keyframeDataUpdated.next(processedKeyframe);
        });
    }
    getDefects(floorplanId) {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/defect/floorplan/" + floorplanId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res.data.map(df => {
                return Object.assign(Object.assign({}, df), { id: df._id });
            });
        }))
            .subscribe((processedDefects) => {
            console.log("getDefects: ", processedDefects);
            this._defectDataUpdated.next(processedDefects);
        });
    }
    saveDefects(defects, floorplan_id) {
        const body = { defects: defects };
        this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/defect/all/" + floorplan_id, body)
            .subscribe(res => {
            console.log("saveDefects: ", res);
        });
    }
    saveDefect(defect) {
        const body = Object.assign({}, defect);
        this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/defect/" + defect.id, body)
            .subscribe(res => {
            console.log("saveDefect: ", res);
        });
    }
    deleteDefect(defect) {
        this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/defect/" + defect.id)
            .subscribe(res => {
            console.log("deleteDefect: ", res);
        });
    }
}
FloorplanService.ɵfac = function FloorplanService_Factory(t) { return new (t || FloorplanService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
FloorplanService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FloorplanService, factory: FloorplanService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FloorplanService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/services/previewCss.js":
/*!**********************************************!*\
  !*** ./src/app/pages/services/previewCss.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// https://stackoverflow.com/questions/1763639/how-to-deal-with-page-breaks-when-printing-a-large-html-table
// thead {display:none;}
// table:first-child thead {display:table-header-group;}
const previewCss = `
<style>
@page {
  
        margin-top: 0mm;
  @bottom-right {
    content: counter(page) " of " counter(pages);
    --main-bg-color: counter(page);
  }
}

.table{
  margin-block-end: 0;
    margin-block-start: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
    width: 100%;
}
.table table{
  width:100%;
  height:auto;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
      }
.report-container {
  border-collapse: collapse;
  border-spacing: 0;
  width:100%;
  height:100%;
}
td { 
  border-collapse: collapse; 
  padding:5px;
  vertical-align: top;
}
img{ 
  width: 100%;
}
body{
  width: 21cm;
  border: 1px solid black;
  padding: 0mm 30mm 30mm 30mm; 
  -webkit-print-color-adjust: exact; 
}
@media print { 
  thead, body{
    border: 0px;
    margin: 0;
  } 
  .report-footer {
    display:table-footer-group;
    page-break-before:always;
    margin:5px;
    bottom: 0;
  } 
  .report-header {
    display:table-header-group;
    margin:5px;
  }
  .report-container { 
    page-break-inside:auto;
    page-break-after:always;
  }
  tr { page-break-inside:avoid; page-break-after:auto }
}
div#footer {
  display:none;
position:fixed;
bottom:0px;
left:10%;
width:80%;
color:#000;
background:#fff;
border-top:1px solid #000;
padding:0;
margin-top: 35px; 
}
.header, .header-space,
.footer, .footer-space {
  height: 50px;
}
@media print {
  div#footer{
    display:block;
  }
    #page-number:after {
    content: "Page " counter(page);
    counter-increment: page;
  }
}


</style>
`

// const previewCss = `
// <style>
//     @page {
//       margin: 0mm
//     }
//     thead {display:none;}
//     table:first-child thead {display:table-header-group;}
//     body{
//       width: 21cm;
//       border: 1px solid black;
//       padding: 0mm 20mm 20mm 20mm;  
//       -webkit-print-color-adjust: exact; 
//     }
//     table {
//       border-collapse: collapse;
//       border-spacing: 0;
//     }
//     @media print { 
//       thead, body{
//         border: 0px;
//         margin: 0;
//       } 
//       table { page-break-inside:auto }
//       tr    { page-break-inside:avoid; page-break-after:auto }
//       thead { display:table-header-group }
//       hr    { display:none }
//     }
// </style>
// `
/* harmony default export */ __webpack_exports__["default"] = (previewCss);

/***/ }),

/***/ "./src/app/pages/services/reportData.service.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/services/reportData.service.ts ***!
  \******************************************************/
/*! exports provided: ReportDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportDataService", function() { return ReportDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _previewCss_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./previewCss.js */ "./src/app/pages/services/previewCss.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _floorplan_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./floorplan.service */ "./src/app/pages/services/floorplan.service.ts");
/* harmony import */ var _templateData_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templateData.service */ "./src/app/pages/services/templateData.service.ts");
/* harmony import */ var _general_services_global_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../general-services/global.service */ "./src/app/general-services/global.service.ts");












class ReportDataService {
    constructor(_http, _router, _fs, _cfr, _ts, gs) {
        this._http = _http;
        this._router = _router;
        this._fs = _fs;
        this._cfr = _cfr;
        this._ts = _ts;
        this.gs = gs;
        this._reportData = {
            id: "",
            header_data: "",
            footer_data: "",
            content: [],
            project_id: "",
            thumbnail_key: ""
        };
        this._reportDataUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._reportThumbnailUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._floorplansUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.getReportDataUpdateListener = () => this._reportDataUpdated.asObservable();
        this.getReportThumbnailUpdateListener = () => this._reportThumbnailUpdated.asObservable();
    }
    // HTTP methods //
    // This is the entry function for the service
    getReportDataByProjId(projId) {
        this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + "/report/" + projId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            res.data.id = res.data._id.toString();
            res.data.content = res.data.content.map(reportData => {
                return {
                    id: reportData._id.toString(),
                    type: reportData.type,
                    relevantInfo: (reportData.type === "editor") ? reportData.reportData : reportData.floorplanId
                };
            });
            return res.data;
        }))
            .subscribe((resData) => {
            this._reportData = resData;
            console.log("getReportDataByProjId: ", resData);
            this._reportDataUpdated.next(resData);
            this._reportThumbnailUpdated.next(resData.thumbnail_key);
        }, (error) => {
            console.error("getReportDataByProjId: ", error);
            // this._router.navigate(["/home"])
        });
    }
    addReportEntry(type, floorplanId) {
        if (type === "editor") {
            this._reportData.content.push({
                'id': Date.now().toString(),
                'type': 'editor',
                'relevantInfo': null
            });
        }
        else if (type === "floorplan") {
            this._reportData.content.push({
                'id': Date.now().toString(),
                'type': 'floorplan',
                'relevantInfo': floorplanId
            });
        }
        //console.log("addReportEntry")
        this._reportDataUpdated.next(this._reportData);
    }
    saveReportAsTemplate(projName) {
        const templateData = Object.assign(Object.assign({}, this._reportData), { template_description: `Template created with reference to ${projName}.` });
        // only retain editor content from report, remove img tags (templates should not have images)
        templateData.header_data = this._reportData.header_data.replace(/<figure class="image(.*?)><\/figure>/g, "");
        templateData.content = this._reportData.content.map(el => {
            if (el.type === "editor") {
                let content = el.relevantInfo.replace(/<figure class="image(.*?)><\/figure>/g, "");
                return {
                    type: el.type,
                    reportData: content
                };
            }
        });
        this._ts.createReportTemplate(templateData);
    }
    deleteReportEntry(id) {
        this._reportData.content = this._reportData.content.filter(reportDataEntry => reportDataEntry.id !== id);
        // console.log("deleteReportEntry")
        this._reportDataUpdated.next(this._reportData);
    }
    updateThumbnail(thumbnailBlob, projectName) {
        var form = new FormData();
        form.append("id", this._reportData.id);
        form.append("projectName", projectName);
        form.append("thumbnailImage", thumbnailBlob, projectName);
        // for (var pair of form.entries()) {
        //   console.log(pair[0]+ ', ' + pair[1]); 
        // }
        this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + "/report/thumbnail", form)
            .subscribe((resData) => {
            console.log(resData);
            this._reportThumbnailUpdated.next(resData.url);
        });
    }
    saveHeader() {
        this._http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + "/report/header/" + this._reportData.id, { headerData: this._reportData.header_data })
            .subscribe((resData) => {
            this.gs.loaded();
            window.alert(resData.message);
        }, (_) => {
            this.gs.loaded();
            window.alert("Failed to save header.");
        });
    }
    saveFooter() {
        this._http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + "/report/footer/" + this._reportData.id, { footerData: this._reportData.footer_data })
            .subscribe((resData) => {
            this.gs.loaded();
            window.alert(resData.message);
        }, (_) => {
            this.gs.loaded();
            window.alert("Failed to save footer.");
        });
    }
    saveReport(showResult = true) {
        // console.log(this._reportData)
        const newReportData = this._reportData.content.map(el => {
            if (el.type === "editor") {
                return {
                    "type": el.type,
                    "reportData": el.relevantInfo
                };
            }
            if (el.type === "floorplan") {
                return {
                    "type": el.type,
                    "floorplanId": el.relevantInfo
                };
            }
        });
        this._http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + "/report/" + this._reportData.id, { reportContent: newReportData })
            .subscribe((resData) => {
            if (showResult) {
                this.gs.loaded();
                window.alert(resData.message);
            }
        }, (_) => {
            this.gs.loaded();
            window.alert("Fail to Save Report");
        });
    }
    saveFullReport() {
        const newReportData = this._reportData.content.map(el => {
            if (el.type === "editor") {
                return {
                    "type": el.type,
                    "reportData": el.relevantInfo
                };
            }
            if (el.type === "floorplan") {
                return {
                    "type": el.type,
                    "floorplanId": el.relevantInfo
                };
            }
        });
        const body = {
            reportContent: newReportData,
            headerData: this._reportData.header_data
        };
        this._http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + "/report/full/" + this._reportData.id, body)
            .subscribe((resData) => {
            this.gs.loaded();
            window.alert(resData.message);
        }, (_) => {
            this.gs.loaded();
            window.alert("Fail to Save Report");
        });
    }
    appendToReport(template) {
        console.log(template);
        console.log(this._reportData);
        // update header
        this._reportData.header_data += template.header_data;
        // update content
        template.content.forEach(el => {
            el.relevantInfo = el.reportData;
            this._reportData.content.push(el);
        });
        console.log(this._reportData);
    }
    generateReportPreview(vcr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //////////// for generating preview window ////////////
            console.log(this._reportData);
            let newWindow = window.open();
            // clear existing window
            newWindow.document.body.innerHTML = "";
            // specify A4 dimensions padding: 25.4mm 31.7mm 25.4mm 31.7mm; 
            newWindow.document.write(_previewCss_js__WEBPACK_IMPORTED_MODULE_5__["default"]); // append style tag
            newWindow.document.write("<body></body>"); /// append body tag
            // Note: document.write applies to point of execution. appendChild() happens afterwards
            // https://stackoverflow.com/questions/1360869/how-to-use-html-to-print-header-and-footer-on-every-printed-page-of-a-document
            // specify html skeleton with repeated header and footer
            newWindow.document.write(`<table class="report-container">
                        <thead class="report-header"><tr><td>
                            ${this._reportData.header_data}
                        </td></tr></thead>
                        
                        <tbody><tr><td id="content">
                        </td></tr></tbody> <tfoot><tr> <td><div class="footer-space">&nbsp;</div></td></tr></tfoot></table><div id="footer">${this._reportData.footer_data}</div> `);
            // populate report  
            let content = newWindow.document.getElementById("content");
            // https://advancedweb.hu/how-to-use-async-functions-with-array-foreach-in-javascript/
            this._reportData.content.reduce((memo, el) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield memo; // to put it in javascript event loop for sequential iteration
                if (el.type == "editor") {
                    // let div = newWindow.document.createElement('div');
                    content.innerHTML += el.relevantInfo;
                    // content.appendChild(div); 
                }
                if (el.type == "floorplan") {
                    yield this.appendFloorplanToPreview(el.relevantInfo, content, vcr);
                }
            }), undefined);
        });
    }
    // vcr is a an argument passed from the component 
    // because vcr has to be injected into a component,
    // since services are view agnostic.
    // if not, error will be thrown.
    // https://stackoverflow.com/questions/40636840/how-can-i-inject-viewcontainerref-into-a-service
    appendFloorplanToPreview(floorplanId, content, vcr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //// Refer: https://stackoverflow.com/questions/53646015/angular-component-in-a-browsers-child-window
            // create floorplan component instance
            const { FloorPlanComponent } = yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../visualization/floor-plan/floor-plan.component */ "./src/app/pages/visualization/floor-plan/floor-plan.component.ts"));
            vcr.clear();
            const factory = this._cfr.resolveComponentFactory(FloorPlanComponent);
            const component = vcr.createComponent(factory);
            component.instance.lockDefects = true;
            component.instance.selectedFloorplanId = floorplanId;
            // add floorplan component into html
            content.appendChild(component.location.nativeElement);
            // load floorplan
            setTimeout(() => {
                this._fs.loadFloorplanComponent();
            }, 10);
        });
    }
    // Data Manipulation Methods //
    shiftUpReportEntry(index) {
        [this._reportData.content[index], this._reportData.content[index - 1]] = [this._reportData.content[index - 1], this._reportData.content[index]];
        // console.log("shiftUpReportEntry")
        this._reportDataUpdated.next(this._reportData);
    }
    shiftDownReportEntry(index) {
        [this._reportData.content[index], this._reportData.content[index + 1]] = [this._reportData.content[index + 1], this._reportData.content[index]];
        // console.log("shiftDownReportEntry")
        this._reportDataUpdated.next(this._reportData);
    }
}
ReportDataService.ɵfac = function ReportDataService_Factory(t) { return new (t || ReportDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_floorplan_service__WEBPACK_IMPORTED_MODULE_8__["FloorplanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_templateData_service__WEBPACK_IMPORTED_MODULE_9__["TemplateDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_general_services_global_service__WEBPACK_IMPORTED_MODULE_10__["GlobalService"])); };
ReportDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ReportDataService, factory: ReportDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReportDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _floorplan_service__WEBPACK_IMPORTED_MODULE_8__["FloorplanService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }, { type: _templateData_service__WEBPACK_IMPORTED_MODULE_9__["TemplateDataService"] }, { type: _general_services_global_service__WEBPACK_IMPORTED_MODULE_10__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/services/templateData.service.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/services/templateData.service.ts ***!
  \********************************************************/
/*! exports provided: TemplateDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateDataService", function() { return TemplateDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _previewCss_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./previewCss.js */ "./src/app/pages/services/previewCss.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _general_services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../general-services/global.service */ "./src/app/general-services/global.service.ts");









class TemplateDataService {
    constructor(_http, _router, gs) {
        this._http = _http;
        this._router = _router;
        this.gs = gs;
        this._allTemplates = [];
        this._templateData = {
            id: "",
            header_data: "",
            content: [],
            template_name: "",
            template_description: "",
            thumbnail_key: ""
        };
        this._allTemplateDataUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._templateDataUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getAllTemplateDataUpdateListener = () => this._allTemplateDataUpdated.asObservable();
        this.getTemplateDataUpdateListener = () => this._templateDataUpdated.asObservable();
    }
    //////////////////////////
    ///// REST Functions /////
    //////////////////////////
    // creates new template record from reportData, clones report thumbnail on S3
    createReportTemplate(reportData) {
        let templateName = prompt("Creating New Template... \nName: ", "Untitled");
        templateName = this.titleCase(templateName);
        const body = {
            header_data: reportData ? reportData.header_data : "",
            content: reportData ? reportData.content : [],
            template_name: templateName,
            template_description: reportData ? reportData.template_description : ""
        };
        this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/template/cloneReport/" + reportData.id, body)
            .subscribe((resData) => {
            this.gs.loaded();
            window.alert(resData.message);
            /// navigate to template page
            const templateId = resData.newTemplate._id;
            this._router.navigate(['/template', templateId]);
        });
    }
    createNewTemplate(templateName) {
        templateName = this.titleCase(templateName);
        const body = { template_name: templateName };
        this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/template", body)
            .subscribe((res) => {
            this.gs.loaded();
            window.alert(res.message);
            /// navigate to template page
            const templateId = res.newTemplate._id;
            this._router.navigate(['/template', templateId]);
        });
    }
    getAllTemplateData(role) {
        if (role == "client") {
            return;
        }
        this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/template/all")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((resData) => {
            return resData.map(tp => {
                return Object.assign(Object.assign({}, tp), { id: tp._id });
            });
        }))
            .subscribe((res) => {
            this._allTemplates = res;
            console.log("getAllTemplateData: ", res);
            this._allTemplateDataUpdated.next([...this._allTemplates]);
        }, (error) => {
            console.error("getAllTemplateData: ", error);
            // this._router.navigate(["/home"])
        });
    }
    getTemplateData(templateId) {
        this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/template/" + templateId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((resData) => {
            resData.id = resData._id.toString();
            resData.content = resData.content.map(el => {
                return Object.assign({ id: el._id.toString() }, el);
            });
            return resData;
        }))
            .subscribe((resData) => {
            this._templateData = resData;
            console.log("getTemplateData: ", resData);
            // Shallow copy/assignment: Javascript reference types. 
            // Component and Service share same copy of data (resData)
            this._templateDataUpdated.next(resData);
        }, (error) => {
            console.error("getTemplateData: ", error);
            // this._router.navigate(["/home"])
        });
    }
    saveTemplate(showResult = true) {
        // console.log(this._templateData)
        const body = {
            header_data: this._templateData.header_data,
            content: this._templateData.content,
            template_name: this._templateData.template_name,
            template_description: this._templateData.template_description
        };
        this._http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/template/" + this._templateData.id, body)
            .subscribe((resData) => {
            if (showResult) {
                this.gs.loaded();
                window.alert(resData.message);
            }
        }, (_) => {
            this.gs.loaded();
            window.alert("Fail to Save Template");
        });
    }
    updateThumbnail(thumbnailBlob) {
        var form = new FormData();
        form.append("templateId", this._templateData.id);
        form.append("thumbnailImage", thumbnailBlob);
        // for (var pair of form.entries()) {
        //   console.log(pair[0]+ ', ' + pair[1]); 
        // }
        this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/template/thumbnail", form)
            .subscribe((resData) => { console.log(resData); });
    }
    deleteTemplate(templateName, templateId) {
        this._http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/template/" + templateId)
            .subscribe((res) => {
            this._allTemplates = this._allTemplates.filter(template => template.id !== templateId);
            this._allTemplateDataUpdated.next([...this._allTemplates]);
            alert(templateName + " deleted successfully");
        }, (errData) => {
            alert("Fail to delete template: " + templateName);
        });
    }
    ////////////////////////////
    ///// Editor Utilities /////
    ////////////////////////////
    addTemplateEntry() {
        this._templateData.content.push({
            id: Date.now().toString(),
            type: "editor",
            reportData: ""
        });
        console.log("addTemplateEntry: ", this._templateData);
        this._templateDataUpdated.next(this._templateData);
    }
    deleteReportEntry(id) {
        this._templateData.content = this._templateData.content.filter(templateDataEntry => templateDataEntry.id !== id);
        this._templateDataUpdated.next(this._templateData);
    }
    shiftUpTemplateEntry(index) {
        [this._templateData.content[index], this._templateData.content[index - 1]] = [this._templateData.content[index - 1], this._templateData.content[index]];
        this._templateDataUpdated.next(this._templateData);
    }
    shiftDownTemplateEntry(index) {
        [this._templateData.content[index], this._templateData.content[index + 1]] = [this._templateData.content[index + 1], this._templateData.content[index]];
        this._templateDataUpdated.next(this._templateData);
    }
    ;
    generateTemplatePreview(template) {
        //////////// for generating preview window ////////////
        const templatePreviewData = template ? template : this._templateData;
        // console.log(templatePreviewData)
        let newWindow = window.open();
        // clear existing window
        newWindow.document.body.innerHTML = "";
        // specify A4 dimensions padding: 25.4mm 31.7mm 25.4mm 31.7mm; 
        newWindow.document.write(_previewCss_js__WEBPACK_IMPORTED_MODULE_4__["default"]); // append style tag
        newWindow.document.write("<body></body>"); /// append body tag
        // Note: document.write applies to point of execution. appendChild() happens afterwards
        // https://stackoverflow.com/questions/1360869/how-to-use-html-to-print-header-and-footer-on-every-printed-page-of-a-document
        // specify repeated header
        newWindow.document.write(`<table class="report-container">
                                    <thead class="report-header"><tr><td>
                                        ${templatePreviewData.header_data}
                                    </td></tr></thead>
                                    <tbody><tr><td id="content">
                                    </td></tr></tbody>`);
        let content = newWindow.document.getElementById("content");
        // populate template
        templatePreviewData.content.forEach(el => {
            if (el.type == "editor") {
                let div = newWindow.document.createElement('div');
                div.innerHTML = el.reportData;
                content.appendChild(div);
            }
        });
    }
    ////////////////////////////
    ///// Helper Functions /////
    ////////////////////////////
    titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you. Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }
}
TemplateDataService.ɵfac = function TemplateDataService_Factory(t) { return new (t || TemplateDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_general_services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"])); };
TemplateDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TemplateDataService, factory: TemplateDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _general_services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/services/uploadAdapter.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/services/uploadAdapter.ts ***!
  \*************************************************/
/*! exports provided: UploadAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadAdapter", function() { return UploadAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
// Refer to: 
// https://stackoverflow.com/questions/46765197/how-to-enable-image-upload-support-in-ckeditor-5
// https://ckeditor.com/docs/ckeditor5/latest/features/image-upload/simple-upload-adapter.html


class UploadAdapter {
    constructor(loader, folderName, report = true) {
        this.folderName = "test";
        this.loader = loader;
        this.folderName = folderName;
        // change "environment.BASE_URL" key and API path
        if (report) {
            this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + "/report/report-image";
        }
        else {
            this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + "/template/template-image";
        }
        // change "token" value with your token
        // this.token = localStorage.getItem("token");
    }
    upload() {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loader.file.then((file) => {
                this._initRequest();
                this._initListeners(resolve, reject, file);
                this._sendRequest(file);
            });
        }));
    }
    abort() {
        if (this.xhr) {
            this.xhr.abort();
        }
    }
    _initRequest() {
        const xhr = (this.xhr = new XMLHttpRequest());
        xhr.open("POST", this.url, true);
        // change "Authorization" header with your header
        // xhr.setRequestHeader("Authorization", this.token);
        xhr.setRequestHeader("FolderName", this.folderName);
        xhr.responseType = "json";
    }
    _initListeners(resolve, reject, file) {
        const xhr = this.xhr;
        const loader = this.loader;
        const genericErrorText = "Couldn't upload file:" + ` ${file.name}.`;
        xhr.addEventListener("error", () => reject(genericErrorText));
        xhr.addEventListener("abort", () => reject());
        xhr.addEventListener("load", () => {
            const response = xhr.response;
            if (!response || response.error) {
                return reject(response && response.error ? response.error.message : genericErrorText);
            }
            // change "response.data.fullPaths[0]" with image URL
            resolve({
                default: response.url,
            });
        });
        if (xhr.upload) {
            xhr.upload.addEventListener("progress", (evt) => {
                if (evt.lengthComputable) {
                    loader.uploadTotal = evt.total;
                    loader.uploaded = evt.loaded;
                }
            });
        }
    }
    _sendRequest(file) {
        const data = new FormData();
        // change "attachments" key
        data.append("image_file", file);
        this.xhr.send(data);
    }
}


/***/ }),

/***/ "./src/app/pages/services/userSetting.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/services/userSetting.service.ts ***!
  \*******************************************************/
/*! exports provided: UserSettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingService", function() { return UserSettingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class UserSettingService {
    constructor(http, _router) {
        this.http = http;
        this._router = _router;
        this._userSetting = [];
        this._userSettingUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    getUserSettingUpdateListener() {
        return this._userSettingUpdated.asObservable();
    }
    // This is the entry function for the service
    getAllUserSettingData() {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/auth/user-info")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((resData) => {
            return resData.data.map(userData => {
                return {
                    username: userData.username,
                    role: userData.role,
                    permission: userData.permission
                };
            });
        }))
            .subscribe((transformedUserData) => {
            this._userSetting = transformedUserData;
            this._userSettingUpdated.next([...this._userSetting]);
        });
    }
    addUserSetting(username, password, role) {
        const newUser = {
            username: username,
            password: password,
            role: role,
            permission: []
        };
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/auth/register-user", newUser)
            .subscribe((resData) => {
            this._userSetting.push(newUser);
            this._userSettingUpdated.next([...this._userSetting]);
        }, (err) => {
            window.alert("Can't add user! New user shouldn't have the same username as old users!");
        });
    }
    deleteUserSetting(username) {
        const oneUser = this._userSetting.find(user => user.username === username).username;
        const deleteConfirmed = confirm("Are you sure you want to delete " + oneUser + " ?");
        if (deleteConfirmed) {
            this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/auth/delete-user/" + username)
                .subscribe((resData) => {
                this._userSetting = this._userSetting.filter(user => user.username !== username);
                this._userSettingUpdated.next([...this._userSetting]);
                window.alert("User deleted successfully");
            }, (_) => {
                window.alert("Fail to Delete User");
            });
        }
    }
    updateUserSetting(username, newPermission) {
        this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + "/auth/set-permission/" + username, { permission: newPermission })
            .subscribe((resData) => {
            window.alert(resData.message);
        }, (_) => {
            window.alert("Fail to Update Permission");
        });
    }
}
UserSettingService.ɵfac = function UserSettingService_Factory(t) { return new (t || UserSettingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
UserSettingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserSettingService, factory: UserSettingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSettingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/services/visualisation.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/services/visualisation.service.ts ***!
  \*********************************************************/
/*! exports provided: VisualisationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualisationService", function() { return VisualisationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class VisualisationService {
    // handles the selected defect
    // data transfer is handled by floorplan service instead
    // selected floorplan is handled by visualisation (parent) component
    constructor() {
    }
}
VisualisationService.ɵfac = function VisualisationService_Factory(t) { return new (t || VisualisationService)(); };
VisualisationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VisualisationService, factory: VisualisationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisualisationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/template/template-page/template-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/template/template-page/template-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: TemplatePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePageComponent", function() { return TemplatePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_ckeditor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ckeditor.js */ "./src/app/pages/services/ckeditor.js");
/* harmony import */ var _services_ckeditor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_services_ckeditor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_uploadAdapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/uploadAdapter */ "./src/app/pages/services/uploadAdapter.ts");
/* harmony import */ var _services_ckconfig_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/ckconfig.js */ "./src/app/pages/services/ckconfig.js");
/* harmony import */ var _services_draggable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/draggable.js */ "./src/app/pages/services/draggable.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _general_services_global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../general-services/global.service */ "./src/app/general-services/global.service.ts");
/* harmony import */ var _services_templateData_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/templateData.service */ "./src/app/pages/services/templateData.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



// https://ckeditor.com/ckeditor-5/online-builder/
// https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/angular.html
// https://stackoverflow.com/questions/46765197/how-to-enable-image-upload-support-in-ckeditor-5
// import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'

















function TemplatePageComponent_div_36_div_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TemplatePageComponent_div_36_div_1_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.shiftUp(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "arrow_upward");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TemplatePageComponent_div_36_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TemplatePageComponent_div_36_div_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.shiftDown(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TemplatePageComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TemplatePageComponent_div_36_div_1_button_2_Template, 3, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TemplatePageComponent_div_36_div_1_button_3_Template, 3, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TemplatePageComponent_div_36_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const entry_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.deleteEntry(entry_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ckeditor", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TemplatePageComponent_div_36_div_1_Template_ckeditor_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const entry_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; return entry_r1.reportData = $event; })("ready", function TemplatePageComponent_div_36_div_1_Template_ckeditor_ready_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.onReady($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r2 = ctx_r18.index;
    const entry_r1 = ctx_r18.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 !== ctx_r3.templateData.content.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("editor", ctx_r3.Editor)("config", ctx_r3.editorConfig)("ngModel", entry_r1.reportData);
} }
function TemplatePageComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TemplatePageComponent_div_36_div_1_Template, 8, 5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", entry_r1.type === "editor");
} }
// Only accessible by admin
class TemplatePageComponent {
    constructor(_route, _gs, _tds) {
        this._route = _route;
        this._gs = _gs;
        this._tds = _tds;
        ////////// Editor Configuration  //////////
        this.Editor = _services_ckeditor_js__WEBPACK_IMPORTED_MODULE_3__;
        this.isEdit = true;
        this.editorConfig = _services_ckconfig_js__WEBPACK_IMPORTED_MODULE_5__["default"];
        this.templateData = {
            id: "",
            header_data: "",
            content: [],
            template_name: "",
            template_description: "",
            thumbnail_key: ""
        };
    }
    onReady(editor) {
        // called once when editor loads
        // console.log(this.projectName)
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            // called everytime I add an image onto ckeditor
            // console.log(this.projectName)
            return new _services_uploadAdapter__WEBPACK_IMPORTED_MODULE_4__["UploadAdapter"](loader, this._templateId, false);
        };
        editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
    ngOnInit() {
        this._gs.load();
        this._route.paramMap.subscribe((paramMap) => {
            const templateId = paramMap.get("id");
            this._templateId = templateId;
            this._tds.getTemplateData(templateId);
        });
        this._templateDataSub = this._tds.getTemplateDataUpdateListener()
            .subscribe((resData) => {
            this.templateData = resData;
            this._gs.loaded();
        });
    }
    ngAfterViewInit() {
        this.toolbar = document.getElementById("toolbar");
        Object(_services_draggable_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this.toolbar);
    }
    ngOnDestroy() {
        this._templateDataSub.unsubscribe();
    }
    saveTemplate() {
        this._gs.load();
        this.scrollToTop();
        this.getPreviewThumbnail().then((thumbnailBlob) => {
            this._tds.saveTemplate();
            this._tds.updateThumbnail(thumbnailBlob);
        });
        // _tds method will stop the loading
    }
    previewTemplate() {
        console.log(this.templateData);
        this._tds.saveTemplate(false);
        this._tds.generateTemplatePreview();
    }
    addEntry() {
        this._tds.addTemplateEntry();
    }
    deleteEntry(id) {
        this._tds.deleteReportEntry(id);
    }
    shiftUp(index) {
        this._tds.shiftUpTemplateEntry(index);
    }
    shiftDown(index) {
        this._tds.shiftDownTemplateEntry(index);
    }
    scrollToTop() {
        document.documentElement.scrollTop = 0;
    }
    // https://stackblitz.com/edit/angular-html2canvas-example?file=src%2Fapp%2Fapp.component.html
    getPreviewThumbnail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let previewInfoElement = document.querySelector("#previewInfo");
            let templateContent = "";
            templateContent += this.templateData.header_data;
            this.templateData.content.forEach(el => {
                if (el.type == "editor") {
                    templateContent += el.reportData;
                }
            });
            previewInfoElement.innerHTML = templateContent;
            let canvas = yield html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(document.querySelector("#previewInfo"));
            // this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.capturedImage);
            const dataURItoBlob = (dataURI) => {
                var binary = atob(dataURI.split(',')[1]);
                var array = [];
                for (var i = 0; i < binary.length; i++) {
                    array.push(binary.charCodeAt(i));
                }
                return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
            };
            let capturedImageURI;
            capturedImageURI = canvas.toDataURL();
            let capturedImageBlob = dataURItoBlob(capturedImageURI);
            previewInfoElement.innerHTML = "";
            return capturedImageBlob;
        });
    }
}
TemplatePageComponent.ɵfac = function TemplatePageComponent_Factory(t) { return new (t || TemplatePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_general_services_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_templateData_service__WEBPACK_IMPORTED_MODULE_9__["TemplateDataService"])); };
TemplatePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TemplatePageComponent, selectors: [["app-template-page"]], decls: 38, vars: 6, consts: [["id", "previewInfo"], [1, "template-info", "mt-5"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "2", 1, "title", 3, "ngModel", "ngModelChange"], [1, "template-info", "mt-2"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "2", 3, "ngModel", "ngModelChange"], ["id", "toolbar", 1, "d-flex", "flex-column"], ["mat-icon-button", "", "color", "accent", "disabled", "", "matTooltip", "Drag toolbar", 1, "m-1", "move-toolbar"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Scroll to top", 1, "m-1", 3, "click"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Add new text cell.", 1, "m-1", 3, "click"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Save template", 1, "m-1", 3, "click"], ["mat-icon-button", "", "color", "accent", "matTooltip", "View template print preview", 1, "m-1", 3, "click"], [1, "mt-3"], [1, "editor-container", "my-4"], [3, "editor", "config", "ngModel", "ngModelChange", "ready"], [4, "ngFor", "ngForOf"], ["class", "editor-container my-4", 4, "ngIf"], [1, "row", "no-gutters", "justify-content-end", "px-3", "headings-container"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Shift cell upwards", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Shift cell downwards", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Delete cell", 3, "click"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Shift cell upwards", 3, "click"], ["mat-icon-button", "", "color", "accent", "matTooltip", "Shift cell downwards", 3, "click"]], template: function TemplatePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Template Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TemplatePageComponent_Template_textarea_ngModelChange_4_listener($event) { return ctx.templateData.template_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TemplatePageComponent_Template_textarea_ngModelChange_9_listener($event) { return ctx.templateData.template_description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "drag_indicator");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TemplatePageComponent_Template_button_click_15_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "vertical_align_top");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TemplatePageComponent_Template_button_click_18_listener() { return ctx.addEntry(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TemplatePageComponent_Template_button_click_21_listener() { return ctx.saveTemplate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TemplatePageComponent_Template_button_click_24_listener() { return ctx.previewTemplate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "drag_indicator");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Template Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ckeditor", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TemplatePageComponent_Template_ckeditor_ngModelChange_33_listener($event) { return ctx.templateData.header_data = $event; })("ready", function TemplatePageComponent_Template_ckeditor_ready_33_listener($event) { return ctx.onReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Template Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, TemplatePageComponent_div_36_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "hr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.templateData.template_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.templateData.template_description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("editor", ctx.Editor)("config", ctx.editorConfig)("ngModel", ctx.templateData.header_data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.templateData.content);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_12__["CdkTextareaAutosize"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_17__["CKEditorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"]], styles: [".mat-focused .mat-form-field-label {\n  \n  color: white !important;\n}\n\n .mat-form-field-ripple {\n  \n  background-color: #205d6c !important;\n}\n\n  .mat-input-element {\n  caret-color: white;\n}\n\ntextarea.mat-input-element[_ngcontent-%COMP%] {\n  padding: 2px 0;\n  margin: -2px 0;\n  overflow: hidden;\n}\n\n.template-info[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 5;\n  background: #4f4f4f;\n  border-radius: 4px;\n  top: 30vh;\n  left: 5vw;\n}\n\n#toolbar[_ngcontent-%COMP%]:hover {\n  border: 1px solid #218d9ef7;\n}\n\n.move-toolbar[_ngcontent-%COMP%] {\n  opacity: 0.2;\n}\n\n.move-toolbar[_ngcontent-%COMP%]:hover {\n  cursor: move;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 3rem;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-weight: bold;\n  letter-spacing: -1px;\n  line-height: 1;\n}\n\n.editor-container[_ngcontent-%COMP%] {\n  max-width: 23cm;\n  background-color: whitesmoke;\n  border-radius: 4px;\n}\n\n.headings-container[_ngcontent-%COMP%] {\n  background-color: #3f3f3f;\n  width: 100%;\n}\n\nckeditor[_ngcontent-%COMP%] {\n  color: black;\n}\n\n#previewInfo[_ngcontent-%COMP%] {\n  top: 100vh;\n  position: fixed;\n  width: 26cm;\n  padding: 20mm 20mm 20mm 20mm;\n  height: 120vh;\n  overflow: hidden;\n  color: black;\n}\n\n#previewInfo[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-spacing: 0;\n  border-collapse: collapse;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVtcGxhdGUvdGVtcGxhdGUtcGFnZS9FOlxcZHItb25lL3NyY1xcYXBwXFxwYWdlc1xcdGVtcGxhdGVcXHRlbXBsYXRlLXBhZ2VcXHRlbXBsYXRlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RlbXBsYXRlL3RlbXBsYXRlLXBhZ2UvdGVtcGxhdGUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHdCQUFBO0VBQ0EsdUJBQUE7QUNGSjs7QURJQTtFQUNJLHlDQUFBO0VBQ0Esb0NBQUE7QUNESjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FERUE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQ0dKOztBRERBO0VBQ0ksMkJBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7QUNLSjs7QURIQTtFQUNJLFlBQUE7QUNNSjs7QURKQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNPSjs7QURMQTtFQUNJLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDUUo7O0FETkE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUNTSjs7QURQQTtFQUNJLFlBQUE7QUNVSjs7QURQQTtFQU1JLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBRUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0lKOztBRGhCSTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDa0JSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVtcGxhdGUvdGVtcGxhdGUtcGFnZS90ZW1wbGF0ZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gOmhvc3QgOjpuZy1kZWVwIC5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XHJcbi8vICAgd2lkdGg6IDgwdnc7XHJcbi8vIH1cclxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDVkNmMgIWltcG9ydGFudDs7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudCB7IFxyXG4gICAgY2FyZXQtY29sb3I6IHdoaXRlOyBcclxufVxyXG50ZXh0YXJlYS5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgICBwYWRkaW5nOiAycHggMDtcclxuICAgIG1hcmdpbjogLTJweCAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4udGVtcGxhdGUtaW5mb3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiN0b29sYmFye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGJhY2tncm91bmQ6ICM0ZjRmNGY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0b3A6IDMwdmg7XHJcbiAgICBsZWZ0OiA1dnc7XHJcbn1cclxuI3Rvb2xiYXI6aG92ZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjE4ZDllZjc7XHJcbn1cclxuLm1vdmUtdG9vbGJhcntcclxuICAgIG9wYWNpdHk6IDAuMjtcclxufVxyXG4ubW92ZS10b29sYmFyOmhvdmVye1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG59XHJcbi50aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmOyBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4OyBcclxuICAgIGxpbmUtaGVpZ2h0OiAxOyBcclxufVxyXG4uZWRpdG9yLWNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogMjNjbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmhlYWRpbmdzLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjNmM2Y7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5ja2VkaXRvcntcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4vLy8vLy8vLy8vLy8vLy8vIGZvciBwcmV2aWV3IGdlbmVyYXRpb24gLy8vLy8vLy8vLy8vLy8vL1xyXG4jcHJldmlld0luZm97XHJcbiAgICB0YWJsZXtcclxuICAgICAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgdG9wOjEwMHZoO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDI2Y207XHJcbiAgICBwYWRkaW5nOiAyMG1tIDIwbW0gMjBtbSAyMG1tOyBcclxuICAgIC8vIHNob3cgc3RhcnQgb2YgcmVwb3J0IG9ubHlcclxuICAgIGhlaWdodDogMTIwdmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICIsIjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA1ZDZjICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQge1xuICBjYXJldC1jb2xvcjogd2hpdGU7XG59XG5cbnRleHRhcmVhLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgcGFkZGluZzogMnB4IDA7XG4gIG1hcmdpbjogLTJweCAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGVtcGxhdGUtaW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogNTtcbiAgYmFja2dyb3VuZDogIzRmNGY0ZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0b3A6IDMwdmg7XG4gIGxlZnQ6IDV2dztcbn1cblxuI3Rvb2xiYXI6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjE4ZDllZjc7XG59XG5cbi5tb3ZlLXRvb2xiYXIge1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5tb3ZlLXRvb2xiYXI6aG92ZXIge1xuICBjdXJzb3I6IG1vdmU7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uZWRpdG9yLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMjNjbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uaGVhZGluZ3MtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmM2YzZjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmNrZWRpdG9yIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4jcHJldmlld0luZm8ge1xuICB0b3A6IDEwMHZoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyNmNtO1xuICBwYWRkaW5nOiAyMG1tIDIwbW0gMjBtbSAyMG1tO1xuICBoZWlnaHQ6IDEyMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogYmxhY2s7XG59XG4jcHJldmlld0luZm8gdGFibGUge1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TemplatePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-template-page',
                templateUrl: './template-page.component.html',
                styleUrls: ['./template-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _general_services_global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"] }, { type: _services_templateData_service__WEBPACK_IMPORTED_MODULE_9__["TemplateDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/upload/upload-page/upload-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/upload/upload-page/upload-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: UploadPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPageComponent", function() { return UploadPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_allProject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/allProject.service */ "./src/app/pages/services/allProject.service.ts");
/* harmony import */ var _general_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../general-services/global.service */ "./src/app/general-services/global.service.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var angular_resize_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-resize-event */ "./node_modules/angular-resize-event/__ivy_ngcc__/fesm2015/angular-resize-event.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");














const _c0 = ["uploadedFloorplan"];
function UploadPageComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Project Setting");
} }
function UploadPageComponent_li_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pairing_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pairing_r15);
} }
function UploadPageComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UploadPageComponent_p_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please only upload image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UploadPageComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Localization Algorithm Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UploadPageComponent__svg_circle_80_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "circle", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragEnded", function UploadPageComponent__svg_circle_80_Template__svg_circle_cdkDragEnded_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const start_coord_r16 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.positionChanged(start_coord_r16, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const start_coord_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r8.pairingDisplay[i_r17]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragDisabled", false)("cdkDragFreeDragPosition", start_coord_r16);
} }
function UploadPageComponent_li_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "samp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r21 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r9.pairingDisplay[i_r21], ": (", ctx_r9.localizationConfig.x_start_coord[i_r21].toFixed(3), ", ", ctx_r9.localizationConfig.y_start_coord[i_r21].toFixed(3), ") ");
} }
function UploadPageComponent_ng_template_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Confirm your information");
} }
function UploadPageComponent_p_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", video_r22, " ");
} }
function UploadPageComponent_p_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flightlog_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", flightlog_r23, " ");
} }
function UploadPageComponent_div_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r13.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UploadPageComponent_p_166_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "samp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r25 = ctx.index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("(", ctx_r14.localizationConfig.x_start_coord[i_r25].toFixed(3), ", ", ctx_r14.localizationConfig.y_start_coord[i_r25].toFixed(3), ")");
} }
class UploadPageComponent {
    constructor(_formBuilder, allProjectService, _gs) {
        this._formBuilder = _formBuilder;
        this.allProjectService = allProjectService;
        this._gs = _gs;
        this.isLinear = true;
        this.isNotImage = false;
        this.secondPageTriggered = false;
        this.localizationConfig = {
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            x_start_coord: [],
            y_start_coord: []
        };
        this.floorplanValue = {
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            start_coord: []
        };
    }
    ngOnInit() {
        this.projectSettingForm = this._formBuilder.group({
            projectName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            videoFilenames: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            flightlogFilenames: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            floorplanImage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tankHeight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tankCircumference: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    updatePairingDisplay() {
        const videoDisplay = this.projectSettingForm.value.videoFilenames.split(",");
        const flightlogDisplay = this.projectSettingForm.value.flightlogFilenames.split(",");
        const length = Math.max(videoDisplay.length, flightlogDisplay.length);
        this.pairingDisplay = [];
        for (let i = 0; i < length; i++) {
            let newPairing = ((i < videoDisplay.length) ? videoDisplay[i] : "") + " & " + ((i < flightlogDisplay.length) ? flightlogDisplay[i] : "");
            this.pairingDisplay.push(newPairing);
        }
    }
    onImagePicked(imageInput) {
        const file = imageInput.files[0];
        if (!file) {
            this.imagePreview = '';
            return;
        }
        var fileType = file.type.split("/")[0];
        if (fileType !== "image") {
            this.isNotImage = true;
            return;
        }
        else {
            this.isNotImage = false;
        }
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
        this.projectSettingForm.patchValue({ floorplanImage: file });
        this.projectSettingForm.get('floorplanImage').updateValueAndValidity();
        console.log(this.projectSettingForm.value);
    }
    onProjectSettingDone() {
        if (!this.secondPageTriggered) {
            this.secondPageTriggered = true;
            // dynamically expand array based on inputs
            for (let i = 0; i < this.pairingDisplay.length; i++) {
                this.floorplanValue.start_coord.push({ id: i, x: 0, y: 0 });
            }
            this.loadFloorplanImageData();
        }
    }
    ////////////////////////////////////////////
    /////////      SVG Functions      /////////
    loadFloorplanImageData() {
        // get image size
        this.uploadedFloorplan.nativeElement.onload = () => {
            this.uploadedFloorplanHeight = this.uploadedFloorplan.nativeElement.height;
            this.uploadedFloorplanWidth = this.uploadedFloorplan.nativeElement.width;
            // initialize points
            for (let i = 0; i < this.pairingDisplay.length; i++) {
                const interval = 1.0 / (this.pairingDisplay.length + 1);
                this.localizationConfig.x_start_coord.push(interval * (i + 1));
                this.localizationConfig.y_start_coord.push(0.500);
            }
            // initialize sliders
            this.localizationConfig.bottom = 0.95;
            this.localizationConfig.top = 0.05;
            this.localizationConfig.left = 0.05;
            this.localizationConfig.right = 0.95;
        };
        // fetch floorplan image url and load
        this.uploadedFloorplan.nativeElement.src = this.imagePreview;
    }
    onResized(event) {
        this.uploadedFloorplanWidth = event.newWidth;
        this.uploadedFloorplanHeight = event.newHeight;
        // redisplay starting coordinates
        for (let i = 0; i < this.floorplanValue.start_coord.length; i++) {
            const unormalised = this.unnormaliseDefectPosition(this.localizationConfig.x_start_coord[i], this.localizationConfig.y_start_coord[i]);
            this.floorplanValue.start_coord[i] = { id: i, x: unormalised.x, y: unormalised.y };
        }
        // redisplay slider coordinates
        const bottom_unorm = this.unnormaliseDefectPosition(0, this.localizationConfig.bottom);
        this.floorplanValue.bottom = { x: 0, y: bottom_unorm.y };
        const left_unorm = this.unnormaliseDefectPosition(this.localizationConfig.left, 0);
        this.floorplanValue.left = { x: left_unorm.x, y: 0 };
        const top_unorm = this.unnormaliseDefectPosition(0, this.localizationConfig.top);
        this.floorplanValue.top = { x: 0, y: top_unorm.y };
        const right_unorm = this.unnormaliseDefectPosition(this.localizationConfig.right, 0);
        this.floorplanValue.right = { x: right_unorm.x, y: 0 };
    }
    positionChanged(start_coord, event) {
        const coordIdx = this.floorplanValue.start_coord.findIndex((obj => obj.id == start_coord.id));
        // update floorplan value
        this.floorplanValue.start_coord[coordIdx] = { id: start_coord.id,
            x: event.source.getFreeDragPosition().x,
            y: event.source.getFreeDragPosition().y };
        // update normalised value
        const normalised = this.normaliseDefectPosition(event.source.getFreeDragPosition().x, event.source.getFreeDragPosition().y);
        this.localizationConfig.x_start_coord[coordIdx] = normalised.x;
        this.localizationConfig.y_start_coord[coordIdx] = normalised.y;
    }
    sliderChanged(slider, event) {
        const normalised = this.normaliseDefectPosition(event.source.getFreeDragPosition().x, event.source.getFreeDragPosition().y);
        if (slider === 'bottom') {
            this.floorplanValue.bottom = { x: event.source.getFreeDragPosition().x,
                y: event.source.getFreeDragPosition().y };
            this.localizationConfig.bottom = Math.min(normalised.y, 1);
        }
        else if (slider === 'left') {
            this.floorplanValue.left = { x: event.source.getFreeDragPosition().x,
                y: event.source.getFreeDragPosition().y };
            this.localizationConfig.left = Math.max(normalised.x, 0);
        }
        else if (slider === 'top') {
            this.floorplanValue.top = { x: event.source.getFreeDragPosition().x,
                y: event.source.getFreeDragPosition().y };
            this.localizationConfig.top = Math.max(normalised.y, 0);
        }
        else if (slider === 'right') {
            this.floorplanValue.right = { x: event.source.getFreeDragPosition().x,
                y: event.source.getFreeDragPosition().y };
            this.localizationConfig.right = Math.min(normalised.x, 1);
        }
    }
    unnormaliseDefectPosition(x, y) {
        return {
            x: x * this.uploadedFloorplanWidth,
            y: y * this.uploadedFloorplanHeight
        };
    }
    normaliseDefectPosition(x, y) {
        return {
            x: x / this.uploadedFloorplanWidth,
            y: y / this.uploadedFloorplanHeight
        };
    }
    ///////////////////////////////////////////
    submitProjectSetting() {
        this._gs.load();
        const projectConfigForm = new FormData();
        projectConfigForm.append("project_name", this.projectSettingForm.value.projectName);
        projectConfigForm.append("video_filenames", this.projectSettingForm.value.videoFilenames);
        projectConfigForm.append("flightlog_filenames", this.projectSettingForm.value.flightlogFilenames);
        projectConfigForm.append("image_file", this.projectSettingForm.value.floorplanImage);
        projectConfigForm.append("height", this.projectSettingForm.value.tankHeight);
        projectConfigForm.append("circumference", this.projectSettingForm.value.tankCircumference);
        projectConfigForm.append("left", this.localizationConfig.left);
        projectConfigForm.append("right", this.localizationConfig.right);
        projectConfigForm.append("bottom", this.localizationConfig.bottom);
        projectConfigForm.append("top", this.localizationConfig.top);
        projectConfigForm.append("x_start_coordinates", JSON.stringify(this.localizationConfig.x_start_coord));
        projectConfigForm.append("y_start_coordinates", JSON.stringify(this.localizationConfig.y_start_coord));
        this.allProjectService.addProjectEntry(projectConfigForm);
    }
}
UploadPageComponent.ɵfac = function UploadPageComponent_Factory(t) { return new (t || UploadPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_allProject_service__WEBPACK_IMPORTED_MODULE_2__["AllProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"])); };
UploadPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadPageComponent, selectors: [["app-upload-page"]], viewQuery: function UploadPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.uploadedFloorplan = _t.first);
    } }, decls: 174, vars: 35, consts: [[3, "formGroup"], [3, "linear"], ["linearHorizontalStepper", "matHorizontalStepper"], [3, "stepControl"], ["matStepLabel", ""], [2, "color", "#00B0F0"], ["matInput", "", "formControlName", "projectName", "required", ""], [1, "row", "no-gutters"], [1, "col"], ["hintLabel", "Separate each file by a comma", 1, "pr-1", 2, "width", "80%"], ["matInput", "", "rows", "4", "formControlName", "videoFilenames", "required", "", 3, "change"], ["hintLabel", "Separate each file by a comma", 1, "pl-1", 2, "width", "80%"], ["matInput", "", "rows", "4", "cols", "30", "formControlName", "flightlogFilenames", "required", "", 3, "change"], [1, "mb-0", "small"], ["class", "small", 4, "ngFor", "ngForOf"], ["hintLabel", "in metres (m)", 2, "width", "80%"], ["type", "number", "step", "0.01", "matInput", "", "formControlName", "tankHeight", "required", ""], ["type", "number", "step", "0.01", "matInput", "", "formControlName", "tankCircumference", "required", ""], [4, "ngIf"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["type", "file", "required", "", 2, "display", "none", 3, "change"], ["imageInput", ""], ["class", "text-danger", 4, "ngIf"], ["mat-button", "", "matStepperNext", "", 3, "click"], [1, "bg-white", "floorplan-overlay", 3, "resized"], ["id", "uploadedFloorplan"], ["uploadedFloorplan", ""], ["id", "dragBoundary"], ["x1", "0", "cdkDrag", "", "cdkDragLockAxis", "y", "matTooltip", "bottom", "cdkDragBoundary", "#dragBoundary", 2, "stroke", "red", "stroke-width", "3", 3, "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragEnded"], ["y1", "0", "cdkDrag", "", "cdkDragLockAxis", "x", "matTooltip", "left", "cdkDragBoundary", "#dragBoundary", 2, "stroke", "red", "stroke-width", "3", 3, "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragEnded"], ["x1", "0", "cdkDrag", "", "cdkDragLockAxis", "y", "matTooltip", "top", "cdkDragBoundary", "#dragBoundary", 2, "stroke", "red", "stroke-width", "3", 3, "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragEnded"], ["y1", "0", "cdkDrag", "", "cdkDragLockAxis", "x", "matTooltip", "right", "cdkDragBoundary", "#dragBoundary", 2, "stroke", "red", "stroke-width", "3", 3, "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragEnded"], ["class", "item", "r", "5", "stroke", "black", "stroke-width", "1", "fill", "#00B0F0", "cdkDrag", "", "cdkDragBoundary", "#dragBoundary", 3, "cdkDragDisabled", "matTooltip", "cdkDragFreeDragPosition", "cdkDragEnded", 4, "ngFor", "ngForOf"], [1, "mb-0", 2, "color", "#00B0F0"], [4, "ngFor", "ngForOf"], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", "matStepperNext", ""], [1, "small"], [1, "mb-0"], ["class", "mb-0", 4, "ngFor", "ngForOf"], [1, ""], ["mat-button", "", 3, "click"], [1, "image-preview", 3, "src"], [1, "text-danger"], ["r", "5", "stroke", "black", "stroke-width", "1", "fill", "#00B0F0", "cdkDrag", "", "cdkDragBoundary", "#dragBoundary", 1, "item", 3, "cdkDragDisabled", "matTooltip", "cdkDragFreeDragPosition", "cdkDragEnded"]], template: function UploadPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-horizontal-stepper", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UploadPageComponent_ng_template_5_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Global Project Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "This field is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Video Filenames (S3 Object Keys)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadPageComponent_Template_textarea_change_20_listener() { return ctx.updatePairingDisplay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "This field is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Flightlog Filenames (S3 Object Keys)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadPageComponent_Template_textarea_change_27_listener() { return ctx.updatePairingDisplay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "This field is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "samp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Video x Flightlog Pairs (verify here)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, UploadPageComponent_li_36_Template, 2, 1, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Floorplan Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Actual Tank Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "This field is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Actual Tank Circumference");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "This field is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Upload Floorplan Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, UploadPageComponent_div_60_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadPageComponent_Template_button_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](64); return _r4.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Pick Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadPageComponent_Template_input_change_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](64); return ctx.onImagePicked(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, UploadPageComponent_p_65_Template, 2, 0, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadPageComponent_Template_button_click_68_listener() { return ctx.onProjectSettingDone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, UploadPageComponent_ng_template_71_Template, 2, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resized", function UploadPageComponent_Template_div_resized_72_listener($event) { return ctx.onResized($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "svg", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "line", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragEnded", function UploadPageComponent_Template__svg_line_cdkDragEnded_76_listener($event) { return ctx.sliderChanged("bottom", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "line", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragEnded", function UploadPageComponent_Template__svg_line_cdkDragEnded_77_listener($event) { return ctx.sliderChanged("left", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "line", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragEnded", function UploadPageComponent_Template__svg_line_cdkDragEnded_78_listener($event) { return ctx.sliderChanged("top", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "line", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragEnded", function UploadPageComponent_Template__svg_line_cdkDragEnded_79_listener($event) { return ctx.sliderChanged("right", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, UploadPageComponent__svg_circle_80_Template, 1, 3, "circle", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Floorplan Boundaries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "samp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "samp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "samp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "samp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Video & Flightlog Starting Positions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, UploadPageComponent_li_102_Template, 3, 3, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, UploadPageComponent_ng_template_109_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Review Project Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "samp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Changes are not possible once a project has been created");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Project Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Video Filenames:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, UploadPageComponent_p_126_Template, 2, 1, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Flightlog Filenames:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, UploadPageComponent_p_131_Template, 2, 1, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Floorplan Image:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](137, UploadPageComponent_div_137_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Tank Height:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Tank Circumference:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Floorplan Boundaries:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "samp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "samp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "samp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "samp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Starting Position(s):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](166, UploadPageComponent_p_166_Template, 3, 2, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadPageComponent_Template_button_click_171_listener() { return ctx.submitProjectSetting(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "p");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.projectSettingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linear", ctx.isLinear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.projectSettingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pairingDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isNotImage && ctx.imagePreview !== "" && ctx.imagePreview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNotImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.floorplanValue.bottom)("cdkDragDisabled", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x2", ctx.uploadedFloorplanWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.floorplanValue.left)("cdkDragDisabled", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("y2", ctx.uploadedFloorplanHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.floorplanValue.top)("cdkDragDisabled", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x2", ctx.uploadedFloorplanWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragFreeDragPosition", ctx.floorplanValue.right)("cdkDragDisabled", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("y2", ctx.uploadedFloorplanHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.floorplanValue.start_coord);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("left: ", ctx.localizationConfig.left.toFixed(3), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("right: ", ctx.localizationConfig.right.toFixed(3), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("bottom: ", ctx.localizationConfig.bottom.toFixed(3), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("top: ", ctx.localizationConfig.top.toFixed(3), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.floorplanValue.start_coord);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.projectSettingForm.value.projectName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectSettingForm.value.videoFilenames.split(","));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectSettingForm.value.flightlogFilenames.split(","));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isNotImage && ctx.imagePreview !== "" && ctx.imagePreview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.projectSettingForm.value.tankHeight, " m ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.projectSettingForm.value.tankCircumference, " m ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Left: ", ctx.localizationConfig.left.toFixed(3), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Right: ", ctx.localizationConfig.right.toFixed(3), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bottom: ", ctx.localizationConfig.bottom.toFixed(3), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Top: ", ctx.localizationConfig.top.toFixed(3), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.localizationConfig.x_start_coord);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperNext"], angular_resize_event__WEBPACK_IMPORTED_MODULE_9__["ResizedDirective"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["CdkDrag"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperPrevious"]], styles: [".image-preview[_ngcontent-%COMP%] {\n  height: 10rem;\n  margin-bottom: 1rem;\n}\n\n.floorplan-overlay[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n}\n\nsvg[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.floorplan-overlay[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n#uploadedFloorplan[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 50vw;\n}\n\nline[_ngcontent-%COMP%]:hover, circle[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXBsb2FkL3VwbG9hZC1wYWdlL0U6XFxkci1vbmUvc3JjXFxhcHBcXHBhZ2VzXFx1cGxvYWRcXHVwbG9hZC1wYWdlXFx1cGxvYWQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdXBsb2FkL3VwbG9hZC1wYWdlL3VwbG9hZC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VwbG9hZC91cGxvYWQtcGFnZS91cGxvYWQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1wcmV2aWV3IHtcclxuICBoZWlnaHQ6IDEwcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5mbG9vcnBsYW4tb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyAvLyB0byB3cmFwIGltYWdlIGFuZCBzdmcgc2l6ZVxyXG59XHJcblxyXG5zdmcge1xyXG4gIGhlaWdodDoxMDAlOyAvLyBmb2xsb3cgZmxvb3JwbGFuLW92ZXJsYXkgd2hpY2ggZm9sbG93cyBpbWFnZVxyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5mbG9vcnBsYW4tb3ZlcmxheSBzdmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuI3VwbG9hZGVkRmxvb3JwbGFuIHtcclxuICB3aWR0aDoxMDAlO1xyXG4gIG1heC13aWR0aDogNTB2dztcclxufVxyXG5cclxubGluZTpob3ZlciwgY2lyY2xlOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiLmltYWdlLXByZXZpZXcge1xuICBoZWlnaHQ6IDEwcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZmxvb3JwbGFuLW92ZXJsYXkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG5zdmcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmxvb3JwbGFuLW92ZXJsYXkgc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbiN1cGxvYWRlZEZsb29ycGxhbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDUwdnc7XG59XG5cbmxpbmU6aG92ZXIsIGNpcmNsZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upload-page',
                templateUrl: './upload-page.component.html',
                styleUrls: ['./upload-page.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_allProject_service__WEBPACK_IMPORTED_MODULE_2__["AllProjectService"] }, { type: _general_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }]; }, { uploadedFloorplan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['uploadedFloorplan', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/visualization/floor-plan/floor-plan.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/visualization/floor-plan/floor-plan.component.ts ***!
  \************************************************************************/
/*! exports provided: FloorPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorPlanComponent", function() { return FloorPlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_floorplan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/floorplan.service */ "./src/app/pages/services/floorplan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_visualisation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/visualisation.service */ "./src/app/pages/services/visualisation.service.ts");
/* harmony import */ var angular_resize_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-resize-event */ "./node_modules/angular-resize-event/__ivy_ngcc__/fesm2015/angular-resize-event.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");









const _c0 = ["selectedFloorplan"];
const _c1 = function (a0) { return { defectSelected: a0 }; };
function FloorPlanComponent__svg_circle_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "circle", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragEnded", function FloorPlanComponent__svg_circle_5_Template__svg_circle_cdkDragEnded_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const defect_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.positionChanged(defect_r2, $event); })("click", function FloorPlanComponent__svg_circle_5_Template__svg_circle_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const defect_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onSelect(defect_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const defect_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, defect_r2.id === ctx_r1.selectedDefect.id))("cdkDragDisabled", ctx_r1.lockDefects)("cdkDragFreeDragPosition", defect_r2);
} }
const defectPlaceholder = {
    id: "",
    project_id: "",
    keyframe_id: "",
    floorplan_id: "",
    position_coordinates: [],
    x: [],
    y: [],
    defect_type: "",
    defect_comment: "",
    verified_status: false
};
class FloorPlanComponent {
    //////////////////////////////////////////////
    ////////////  Life cycle methods  ////////////
    //////////////////////////////////////////////
    constructor(fs, router, vs, route) {
        this.fs = fs;
        this.router = router;
        this.vs = vs;
        this.route = route;
        this.selectDefect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // to display defect information
        this.selectedDefect = defectPlaceholder; // to change look of selected defect icon
        this.loaded = false; // to prevent resize event from calling at the start
        this.loadFloorplanComponent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"];
    }
    ngOnInit() {
        /////////////////////////////////////////////////////////
        ////////////////  Callbacks to get data  ////////////////
        // called outside component: load data from end to end
        // i.e defects(DB) => defects(service) => normalisedDefects => unnormalised defects => SVG icon
        // when new defect data/ selected floorplan in viz component
        this.loadFloorplanComponent = this.fs.getLoadFloorplanComponentListener()
            .subscribe(() => {
            setTimeout(() => {
                this.selectedDefect = defectPlaceholder;
                // fetch floorplan image url and trigger (1), (2), (3)
                this.fs.getFloorplan(this.selectedFloorplanId);
            }, 10);
        });
        //////// (1) Get floorplan and load to floorplan src
        this._floorplanDataSub = this.fs.getFloorplanDataUpdateListener()
            .subscribe((floorplan) => {
            this.selectedFloorplan.nativeElement.src = floorplan.filename;
        });
        //////// (2) Get image size (normalising constant) from floorplan src, 
        ////////    get defects
        this.selectedFloorplan.nativeElement.onload = () => {
            this.selectedFloorplanHeight = this.selectedFloorplan.nativeElement.height;
            this.selectedFloorplanWidth = this.selectedFloorplan.nativeElement.width;
            this.fs.getDefects(this.selectedFloorplanId);
        };
        //////// (3) Keep a copy of normalised defects
        ////////    unnormalise and load defects
        this._defectDataSub = this.fs.getDefectDataUpdateListener()
            .subscribe((data) => {
            this.normalisedDefects = data;
            this.unnormaliseAndLoadDefects(this.normalisedDefects);
            this.loaded = true;
        });
    }
    ngOnDestroy() {
        this.loadFloorplanComponent.unsubscribe();
        this._floorplanDataSub.unsubscribe();
        this._defectDataSub.unsubscribe();
    }
    ///////////////////////////////////////////////
    //////////// Event-driven methods ////////////
    ///////////////////////////////////////////////
    positionChanged(defect, event) {
        this.onSelect(defect);
        let normalised = this.normaliseDefectPosition(event.source.getFreeDragPosition().x, event.source.getFreeDragPosition().y);
        // update normalised data (need for rescaling/ saving to DB)
        this.normalisedDefects = this.normalisedDefects.map(nd => {
            if (nd.id === defect.id) {
                nd.position_coordinates[0] = normalised.x;
                nd.position_coordinates[1] = normalised.y;
            }
            return nd;
        });
        // reflect data in service 
        this.unnormaliseAndLoadDefects(this.normalisedDefects);
    }
    onResized(event) {
        if (this.loaded) { // if page havent load, resize event doesnt matter
            // get the new width and height for new normalising constants
            this.selectedFloorplanWidth = event.newWidth;
            this.selectedFloorplanHeight = event.newHeight;
            // using the new normalising constants, unnormalise and load
            this.unnormaliseAndLoadDefects(this.normalisedDefects);
        }
    }
    onSelect(defect) {
        this.selectedDefect = defect;
        // tell visualisation component which defect you selected
        const extractedURL = this.router.url.split("/");
        const projectId = extractedURL[extractedURL.length - 1];
        console.log(defect);
        this.router.navigate(['/edit', projectId, defect.keyframe_id]);
        //this.selectDefect.emit(defect) 
    }
    /// update database with normalisedDefects
    // ie normalisedDefects => defects(service)
    onSave() {
        console.log(this.normalisedDefects);
        this.fs.saveDefects(this.normalisedDefects, this.selectedFloorplanId);
    }
    onUndo() {
        this.fs.getDefects(this.selectedFloorplanId);
    }
    onDelete() {
        this.fs.deleteDefect(this.selectedDefect);
        this.fs.getDefects(this.selectedFloorplanId);
        this.onSelect(defectPlaceholder);
    }
    // onAdd(){
    //   // add defect
    //   let newDefect = {
    //     id: Date.now().toString(),
    //     project_id: this.projectId,
    //     keyframe_id: "", // to update after adding keyframe
    //     floorplan_id: this.selectedFloorplanId,
    //     position_coordinates: [Math.random(), Math.random()],
    //     x: [],
    //     y: [],
    //     defect_type: "",
    //     defect_comment: "",
    //     verified_status: false
    //   }
    //   this.fs.addDefect(newDefect)
    //   this.onSelect(newDefect)
    //   this.fs.getDefects(this.selectedFloorplanId)
    // }
    ////////////////////////////////////////
    //////////// Helper methods ////////////
    ////////////////////////////////////////
    // Method that takes in normalisedDefects(fetched from service), 
    // creates updates SVG-bounded array (this.unnormalisedDefects) with un-normalisedDefects
    unnormaliseAndLoadDefects(normalisedDefects) {
        this.unnormalisedDefects = normalisedDefects.map((defect) => {
            let unnormalised = this.unnormaliseDefectPosition(defect.position_coordinates[0], defect.position_coordinates[1]);
            return Object.assign(Object.assign({}, defect), { x: unnormalised.x, y: unnormalised.y });
        });
    }
    unnormaliseDefectPosition(x, y) {
        return {
            x: x * this.selectedFloorplanWidth,
            y: y * this.selectedFloorplanHeight
        };
    }
    normaliseDefectPosition(x, y) {
        return {
            x: x / this.selectedFloorplanWidth,
            y: y / this.selectedFloorplanHeight
        };
    }
}
FloorPlanComponent.ɵfac = function FloorPlanComponent_Factory(t) { return new (t || FloorPlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_floorplan_service__WEBPACK_IMPORTED_MODULE_2__["FloorplanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_visualisation_service__WEBPACK_IMPORTED_MODULE_4__["VisualisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
FloorPlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FloorPlanComponent, selectors: [["app-floor-plan"]], viewQuery: function FloorPlanComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selectedFloorplan = _t.first);
    } }, inputs: { lockDefects: "lockDefects", selectedFloorplanId: "selectedFloorplanId" }, outputs: { selectDefect: "selectDefect" }, decls: 9, vars: 2, consts: [[2, "position", "relative", "display", "inline-flex", 3, "resized"], [2, "width", "100%"], ["selectedFloorplan", ""], [2, "height", "100%", "width", "100%", "position", "absolute", "top", "0", "left", "0"], ["class", "item", "r", "5", "stroke", "black", "stroke-width", "1", "fill", "#fff3c2", "cdkDrag", "", "cdkDragBoundary", "#dragBoundary", 3, "ngClass", "cdkDragDisabled", "cdkDragFreeDragPosition", "cdkDragEnded", "click", 4, "ngFor", "ngForOf"], [1, "text-center"], ["r", "5", "stroke", "black", "stroke-width", "1", "fill", "#fff3c2", "cdkDrag", "", "cdkDragBoundary", "#dragBoundary", 1, "item", 3, "ngClass", "cdkDragDisabled", "cdkDragFreeDragPosition", "cdkDragEnded", "click"]], template: function FloorPlanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resized", function FloorPlanComponent_Template_div_resized_1_listener($event) { return ctx.onResized($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FloorPlanComponent__svg_circle_5_Template, 1, 5, "circle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "samp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.unnormalisedDefects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Floorplan ID: ", ctx.selectedFloorplanId, "");
    } }, directives: [angular_resize_event__WEBPACK_IMPORTED_MODULE_5__["ResizedDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: [".item[_ngcontent-%COMP%] {\n  cursor: move;\n}\n\n.defectSelected[_ngcontent-%COMP%] {\n  fill: #ffcc00;\n  stroke-width: \"3\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlzdWFsaXphdGlvbi9mbG9vci1wbGFuL0U6XFxkci1vbmUvc3JjXFxhcHBcXHBhZ2VzXFx2aXN1YWxpemF0aW9uXFxmbG9vci1wbGFuXFxmbG9vci1wbGFuLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy92aXN1YWxpemF0aW9uL2Zsb29yLXBsYW4vZmxvb3ItcGxhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7QUNBSjs7QUR5QkE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUN0QkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92aXN1YWxpemF0aW9uL2Zsb29yLXBsYW4vZmxvb3ItcGxhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHN0eWxlIHNoZWV0IG5vdCByZWFkIGluIG5ldyB3aW5kb3dcclxuLml0ZW0ge1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG59XHJcbi8vIC5ib3VuZGFyeSB7XHJcbi8vICAgICBib3JkZXI6IGRvdHRlZCAjY2NjIDJweDtcclxuLy8gfVxyXG4vLyAuZmxvb3JwbGFuLW92ZXJsYXkge1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgLyogdG8gd3JhcCBpbWFnZSBzaXplICovXHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgXHJcbi8vICAgICAvKiBkaXNwbGF5OiBmbGV4ICAqL1xyXG4vLyAgICAgbWF4LXdpZHRoOiA1MHZ3O1xyXG4vLyB9XHJcbi8vIC5kcmFnQm91bmRhcnkge1xyXG4vLyAgICAgLyogZm9sbG93IGZsb29ycGxhbi1vdmVybGF5IHdoaWNoIGZvbGxvd3MgaW1hZ2UgKi9cclxuLy8gICAgIGhlaWdodDoxMDAlOyBcclxuLy8gICAgIHdpZHRoOjEwMCU7XHJcbi8vIH1cclxuLy8gLmZsb29ycGxhbi1vdmVybGF5IC5kcmFnQm91bmRhcnkge1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgdG9wOiAwO1xyXG4vLyAgICAgbGVmdDogMDtcclxuLy8gfVxyXG4vLyAuZmxvb3JwbGFuSW1nIHtcclxuLy8gICAgIHdpZHRoOjEwMCU7XHJcbi8vIH1cclxuLmRlZmVjdFNlbGVjdGVke1xyXG4gICAgZmlsbDogI2ZmY2MwMDtcclxuICAgIHN0cm9rZS13aWR0aDpcIjNcIjtcclxufSIsIi5pdGVtIHtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuXG4uZGVmZWN0U2VsZWN0ZWQge1xuICBmaWxsOiAjZmZjYzAwO1xuICBzdHJva2Utd2lkdGg6IFwiM1wiO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FloorPlanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // to leverage Angular Elements API to render into a static element
                // read more at: https://egghead.io/lessons/angular-transform-an-angular-component-into-a-native-custom-element
                // selector: 'app-floor-plan',
                selector: 'app-floor-plan',
                templateUrl: './floor-plan.component.html',
                styleUrls: ['./floor-plan.component.scss']
            }]
    }], function () { return [{ type: _services_floorplan_service__WEBPACK_IMPORTED_MODULE_2__["FloorplanService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_visualisation_service__WEBPACK_IMPORTED_MODULE_4__["VisualisationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { selectedFloorplan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['selectedFloorplan', { static: true }]
        }], lockDefects: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedFloorplanId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectDefect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/visualization/visualization-page/visualization-page.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/visualization/visualization-page/visualization-page.component.ts ***!
  \****************************************************************************************/
/*! exports provided: VisualizationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationPageComponent", function() { return VisualizationPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_floorplan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/floorplan.service */ "./src/app/pages/services/floorplan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_general_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/general-services/auth.service */ "./src/app/general-services/auth.service.ts");
/* harmony import */ var src_app_general_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/general-services/global.service */ "./src/app/general-services/global.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _floor_plan_floor_plan_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../floor-plan/floor-plan.component */ "./src/app/pages/visualization/floor-plan/floor-plan.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _general_services_object_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../general-services/object.pipe */ "./src/app/general-services/object.pipe.ts");















const _c0 = ["defectKeyframe"];
function VisualizationPageComponent_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VisualizationPageComponent_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "lock_open");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VisualizationPageComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "samp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Positions Locked.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VisualizationPageComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "samp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Positions Unlocked.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VisualizationPageComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisualizationPageComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return _r6.onUndo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "undo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VisualizationPageComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisualizationPageComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); _r6.onSave(); return ctx_r13.toggleLock(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { selectedFloorplan: a0 }; };
function VisualizationPageComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisualizationPageComponent_div_15_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const fp_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.selectFloorplan(fp_r16.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fp_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", fp_r16.filename, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, fp_r16.id === ctx_r15.selectedFloorplanId));
} }
function VisualizationPageComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisualizationPageComponent_div_15_div_1_Template, 2, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "object");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r7.floorplans, "values"));
} }
function VisualizationPageComponent_samp_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "samp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("(", ctx_r9.selectedDefect.position_coordinates[0] == null ? null : ctx_r9.selectedDefect.position_coordinates[0].toFixed(3), ",", ctx_r9.selectedDefect.position_coordinates[1] == null ? null : ctx_r9.selectedDefect.position_coordinates[1].toFixed(3), ")");
} }
function VisualizationPageComponent_button_37_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisualizationPageComponent_button_37_mat_icon_1_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.onEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VisualizationPageComponent_button_37_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisualizationPageComponent_button_37_mat_icon_2_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VisualizationPageComponent_button_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisualizationPageComponent_button_37_mat_icon_1_Template, 2, 0, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VisualizationPageComponent_button_37_mat_icon_2_Template, 2, 0, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.editing);
} }
const _c2 = function (a0, a1) { return { defectsUnlocked: a0, defectsLocked: a1 }; };
const imagePlaceholderUrl = "../../../../../assets/placeholder.png";
class VisualizationPageComponent {
    constructor(fs, route, router, authService, gs) {
        this.fs = fs;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.gs = gs;
        this.lockDefects = true;
        this.editing = true;
        this.selectedFloorplanId = "";
        this.defectPlaceholder = {
            id: "",
            floorplan_id: "",
            keyframe_id: "",
            position_coordinates: [],
            defect_type: "",
            defect_comment: ""
        };
    }
    ngOnInit() {
        this.gs.load();
        const role = this.authService.getAuthData()["role"];
        this.clientMode = (role === "client") ? true : false;
        this.selectDefect(this.defectPlaceholder);
        ////////////////////////////////
        this.route.paramMap.subscribe((paramMap) => {
            this.projectId = paramMap.get("id");
            // fetch floorplans
            this.fs.getFloorplans(this.projectId);
        });
        ////////////////////////////////
        // Observables to get data
        // only triggered once at the start
        this._floorplanDataSub = this.fs.getAllFloorplanDataUpdateListener()
            .subscribe((data) => {
            if (this.selectedFloorplanId == "") {
                this.floorplans = data; // for floorplan thumbnail display - Observable for async pipe
                this.selectedFloorplanId = data[0].id; // select first floorplan by default
                this.fs.loadFloorplanComponent();
                this.gs.loaded();
            }
        });
        this._keyframeDataSub = this.fs.getKeyframeDataUpdateListener()
            .subscribe((data) => {
            const url = this.selectedDefect.keyframe_id == "" ? imagePlaceholderUrl : data.filename;
            this.defectKeyframe.nativeElement.src = url;
        });
    }
    toggleLock() {
        this.lockDefects = !this.lockDefects;
    }
    selectDefect(defect) {
        this.selectedDefect = defect;
        if (defect.id == "") {
            this.defectKeyframe.nativeElement.src = imagePlaceholderUrl;
        }
        else {
            this.fs.getKeyframe(defect.keyframe_id);
        }
    }
    selectFloorplan(id) {
        this.selectedFloorplanId = id;
        this.lockDefects = true;
        setTimeout(() => {
            this.fs.loadFloorplanComponent();
        });
    }
    onEdit() {
        this.editing = true;
    }
    onSave() {
        this.editing = false;
        this.fs.saveDefect(this.selectedDefect);
    }
}
VisualizationPageComponent.ɵfac = function VisualizationPageComponent_Factory(t) { return new (t || VisualizationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_floorplan_service__WEBPACK_IMPORTED_MODULE_1__["FloorplanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_general_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_general_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"])); };
VisualizationPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VisualizationPageComponent, selectors: [["app-visualization-page"]], viewQuery: function VisualizationPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.defectKeyframe = _t.first);
    } }, decls: 41, vars: 22, consts: [[1, "visualisation-container", "row", "no-gutters"], [1, "col-7", "p-3", "h-100"], [1, "row", "no-gutters", "m-1"], ["mat-button", "", 3, "disabled", "click"], ["class", "m-1", 4, "ngIf"], ["class", "d-inline m-1", 4, "ngIf"], [1, "flex-fill"], ["mat-button", "", "class", "m-1", 3, "click", 4, "ngIf"], [3, "ngClass"], [3, "lockDefects", "selectedFloorplanId", "selectDefect"], ["afp", ""], ["class", "row no-gutters justify-content-center", 4, "ngIf"], [1, "col-5", "h-100"], [1, "m-3", "h-100"], [1, "img-wrapper"], ["defectKeyframe", ""], [4, "ngIf"], [1, "w-100"], ["rows", "1", "matInput", "", "placeholder", "Defect Class", 3, "ngModel", "disabled", "ngModelChange"], [1, "w-100", "pb-0"], ["rows", "1", "matInput", "", "placeholder", "Defect Comment", 3, "ngModel", "disabled", "ngModelChange"], [1, "row", "no-gutters"], ["mat-icon-button", "", "class", "m-1", 4, "ngIf"], ["mat-icon-button", "", 1, "m-1", 3, "disabled", "click"], [1, "m-1"], [1, "d-inline", "m-1"], ["mat-button", "", 1, "m-1", 3, "click"], [1, "row", "no-gutters", "justify-content-center"], [4, "ngFor", "ngForOf"], [1, "col", "thumbnail", 3, "src", "ngClass", "click"], ["mat-icon-button", "", 1, "m-1"], [3, "click", 4, "ngIf"], [3, "click"]], template: function VisualizationPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisualizationPageComponent_Template_button_click_4_listener() { return ctx.toggleLock(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VisualizationPageComponent_mat_icon_5_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VisualizationPageComponent_mat_icon_6_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VisualizationPageComponent_div_7_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VisualizationPageComponent_div_8_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, VisualizationPageComponent_button_10_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, VisualizationPageComponent_button_11_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-floor-plan", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectDefect", function VisualizationPageComponent_Template_app_floor_plan_selectDefect_13_listener($event) { return ctx.selectDefect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, VisualizationPageComponent_div_15_Template, 3, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "samp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Localisation Coordinates: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, VisualizationPageComponent_samp_25_Template, 2, 2, "samp", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "samp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Defect ID: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "samp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VisualizationPageComponent_Template_textarea_ngModelChange_32_listener($event) { return ctx.selectedDefect.defect_type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VisualizationPageComponent_Template_textarea_ngModelChange_34_listener($event) { return ctx.selectedDefect.defect_comment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, VisualizationPageComponent_button_37_Template, 3, 2, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisualizationPageComponent_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return _r6.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.lockDefects || ctx.clientMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lockDefects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.lockDefects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lockDefects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.lockDefects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.lockDefects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.lockDefects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c2, !ctx.lockDefects, ctx.lockDefects));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lockDefects", ctx.lockDefects)("selectedFloorplanId", ctx.selectedFloorplanId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.floorplans);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedDefect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedDefect == null ? null : ctx.selectedDefect.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedDefect.defect_type)("disabled", !ctx.editing || ctx.clientMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedDefect.defect_comment)("disabled", !ctx.editing || ctx.clientMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedDefect.id !== "" && !ctx.clientMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selectedDefect.id == "" || ctx.clientMode);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _floor_plan_floor_plan_component__WEBPACK_IMPORTED_MODULE_8__["FloorPlanComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], pipes: [_general_services_object_pipe__WEBPACK_IMPORTED_MODULE_13__["ObjectPipe"]], styles: [".visualisation-container[_ngcontent-%COMP%] {\n  min-width: 90vw;\n  align-items: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: auto;\n  height: auto;\n}\n\n.img-wrapper[_ngcontent-%COMP%] {\n  padding-top: 60%;\n  position: relative;\n}\n\n.thumbnail[_ngcontent-%COMP%] {\n  position: static;\n  border: 1px solid #ddd;\n  \n  border-radius: 4px;\n  \n  padding: 5px;\n  \n  height: 80px;\n  \n  margin: 10px;\n}\n\n.thumbnail[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);\n}\n\n.selectedFloorplan[_ngcontent-%COMP%] {\n  border: 3px solid #205d6c;\n  border-radius: 4px;\n  \n  padding: 5px;\n  \n}\n\n.defectsUnlocked[_ngcontent-%COMP%] {\n  border: 3px solid #205d6c;\n  border-radius: 4px;\n  \n  padding: 5px;\n  \n  background-color: #205d6c;\n}\n\n.defectsLocked[_ngcontent-%COMP%] {\n  border: 3px;\n  border-radius: 4px;\n  \n  padding: 5px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlzdWFsaXphdGlvbi92aXN1YWxpemF0aW9uLXBhZ2UvRTpcXGRyLW9uZS9zcmNcXGFwcFxccGFnZXNcXHZpc3VhbGl6YXRpb25cXHZpc3VhbGl6YXRpb24tcGFnZVxcdmlzdWFsaXphdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy92aXN1YWxpemF0aW9uL3Zpc3VhbGl6YXRpb24tcGFnZS92aXN1YWxpemF0aW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBSjs7QURFQTtFQUVJLGdCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7RUFBd0IsZ0JBQUE7RUFDeEIsa0JBQUE7RUFBcUIsbUJBQUE7RUFDckIsWUFBQTtFQUFjLGlCQUFBO0VBQ2QsWUFBQTtFQUFjLHNCQUFBO0VBQ2QsWUFBQTtBQ0tKOztBREhBO0VBQ0ksOENBQUE7QUNNSjs7QURKQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFBcUIsbUJBQUE7RUFDckIsWUFBQTtFQUFjLGlCQUFBO0FDU2xCOztBRFBBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUFxQixtQkFBQTtFQUNyQixZQUFBO0VBQWMsaUJBQUE7RUFDZCx5QkFBQTtBQ1lKOztBRFZBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQXFCLG1CQUFBO0VBQ3JCLFlBQUE7RUFBYyxpQkFBQTtBQ2VsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Zpc3VhbGl6YXRpb24vdmlzdWFsaXphdGlvbi1wYWdlL3Zpc3VhbGl6YXRpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aXN1YWxpc2F0aW9uLWNvbnRhaW5lcntcclxuICAgIG1pbi13aWR0aDogOTB2dztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMWZyIDMwcHg7XHJcbn1cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgLy8gdG8gY291bnRlciB0aGUgcGFkZGluZy10b3A6IDY2LjYlXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5pbWctd3JhcHBlciB7XHJcbiAgICAvLyBzbyBwbGFjZWhvbGRlciBpcyB0aGVyZSBiZWZvcmUgaW1hZ2UgbG9hZHNcclxuICAgIHBhZGRpbmctdG9wOjYwJTsgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnRodW1ibmFpbHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyAvKiBHcmF5IGJvcmRlciAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyAgLyogUm91bmRlZCBib3JkZXIgKi9cclxuICAgIHBhZGRpbmc6IDVweDsgLyogU29tZSBwYWRkaW5nICovXHJcbiAgICBoZWlnaHQ6IDgwcHg7IC8qIFNldCBhIHNtYWxsIHdpZHRoICovXHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLnRodW1ibmFpbDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IDFweCByZ2JhKDAsIDE0MCwgMTg2LCAwLjUpO1xyXG59XHJcbi5zZWxlY3RlZEZsb29ycGxhbiB7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMjA1ZDZjOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgIC8qIFJvdW5kZWQgYm9yZGVyICovXHJcbiAgICBwYWRkaW5nOiA1cHg7IC8qIFNvbWUgcGFkZGluZyAqL1xyXG59XHJcbi5kZWZlY3RzVW5sb2NrZWQge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzIwNWQ2YzsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7ICAvKiBSb3VuZGVkIGJvcmRlciAqL1xyXG4gICAgcGFkZGluZzogNXB4OyAvKiBTb21lIHBhZGRpbmcgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDVkNmM7XHJcbn1cclxuLmRlZmVjdHNMb2NrZWQge1xyXG4gICAgYm9yZGVyOiAzcHg7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyAgLyogUm91bmRlZCBib3JkZXIgKi9cclxuICAgIHBhZGRpbmc6IDVweDsgLyogU29tZSBwYWRkaW5nICovXHJcbn0iLCIudmlzdWFsaXNhdGlvbi1jb250YWluZXIge1xuICBtaW4td2lkdGg6IDkwdnc7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaW1nLXdyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogNjAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50aHVtYm5haWwge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAvKiBHcmF5IGJvcmRlciAqL1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC8qIFJvdW5kZWQgYm9yZGVyICovXG4gIHBhZGRpbmc6IDVweDtcbiAgLyogU29tZSBwYWRkaW5nICovXG4gIGhlaWdodDogODBweDtcbiAgLyogU2V0IGEgc21hbGwgd2lkdGggKi9cbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4udGh1bWJuYWlsOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDJweCAxcHggcmdiYSgwLCAxNDAsIDE4NiwgMC41KTtcbn1cblxuLnNlbGVjdGVkRmxvb3JwbGFuIHtcbiAgYm9yZGVyOiAzcHggc29saWQgIzIwNWQ2YztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAvKiBSb3VuZGVkIGJvcmRlciAqL1xuICBwYWRkaW5nOiA1cHg7XG4gIC8qIFNvbWUgcGFkZGluZyAqL1xufVxuXG4uZGVmZWN0c1VubG9ja2VkIHtcbiAgYm9yZGVyOiAzcHggc29saWQgIzIwNWQ2YztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAvKiBSb3VuZGVkIGJvcmRlciAqL1xuICBwYWRkaW5nOiA1cHg7XG4gIC8qIFNvbWUgcGFkZGluZyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA1ZDZjO1xufVxuXG4uZGVmZWN0c0xvY2tlZCB7XG4gIGJvcmRlcjogM3B4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC8qIFJvdW5kZWQgYm9yZGVyICovXG4gIHBhZGRpbmc6IDVweDtcbiAgLyogU29tZSBwYWRkaW5nICovXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisualizationPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-visualization-page',
                templateUrl: './visualization-page.component.html',
                styleUrls: ['./visualization-page.component.scss']
            }]
    }], function () { return [{ type: _services_floorplan_service__WEBPACK_IMPORTED_MODULE_1__["FloorplanService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_general_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: src_app_general_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }]; }, { defectKeyframe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['defectKeyframe', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/sample/image-upload/image-upload.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/sample/image-upload/image-upload.component.ts ***!
  \***************************************************************/
/*! exports provided: ImageUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadComponent", function() { return ImageUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image.service */ "./src/app/sample/image.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ImageUploadComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please only upload image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ImageUploadComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ImageUploadComponent {
    constructor(imageService) {
        this.imageService = imageService;
        this.isNotImage = false;
    }
    ngOnInit() {
    }
    onUploadImage(imageInput) {
        if (this.imagePreview === '' || !this.imagePreview || this.isNotImage) {
            return;
        }
        console.log("SUBMITTED");
        console.log(this.imagePreview);
        const file = imageInput.files[0];
        this.imageService.uploadImageSrc(file);
        // To reset form
        this.imagePreview = '';
    }
    onImagePicked(imageInput) {
        const file = imageInput.files[0];
        if (!file) {
            this.imagePreview = '';
            return;
        }
        var fileType = file.type.split("/")[0];
        if (fileType !== "image") {
            this.isNotImage = true;
            return;
        }
        else {
            this.isNotImage = false;
        }
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    }
}
ImageUploadComponent.ɵfac = function ImageUploadComponent_Factory(t) { return new (t || ImageUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_image_service__WEBPACK_IMPORTED_MODULE_1__["imageService"])); };
ImageUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageUploadComponent, selectors: [["app-image-upload"]], decls: 12, vars: 2, consts: [[3, "submit"], ["uploadForm", "ngForm"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["type", "file", "required", "", 3, "change"], ["imageInput", ""], ["class", "text-danger", 4, "ngIf"], ["class", "image-preview", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit"], [1, "text-danger"], [1, "image-preview"], [3, "src"]], template: function ImageUploadComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ImageUploadComponent_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.onUploadImage(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageUploadComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r1.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pick Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImageUploadComponent_Template_input_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.onImagePicked(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ImageUploadComponent_p_7_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ImageUploadComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNotImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isNotImage && ctx.imagePreview !== "" && ctx.imagePreview);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["input[type=file][_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.image-preview[_ngcontent-%COMP%] {\n  height: 10rem;\n  margin-bottom: 1rem;\n}\n\n.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FtcGxlL2ltYWdlLXVwbG9hZC9FOlxcZHItb25lL3NyY1xcYXBwXFxzYW1wbGVcXGltYWdlLXVwbG9hZFxcaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zYW1wbGUvaW1hZ2UtdXBsb2FkL2ltYWdlLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NhbXBsZS9pbWFnZS11cGxvYWQvaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cImZpbGVcIl17XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uaW1hZ2UtcHJldmlldyB7XHJcbiAgaGVpZ2h0OiAxMHJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uaW1hZ2UtcHJldmlldyBpbWcge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iLCJpbnB1dFt0eXBlPWZpbGVdIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uaW1hZ2UtcHJldmlldyB7XG4gIGhlaWdodDogMTByZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5pbWFnZS1wcmV2aWV3IGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image-upload',
                templateUrl: './image-upload.component.html',
                styleUrls: ['./image-upload.component.scss']
            }]
    }], function () { return [{ type: _image_service__WEBPACK_IMPORTED_MODULE_1__["imageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sample/image-view/image-view.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/sample/image-view/image-view.component.ts ***!
  \***********************************************************/
/*! exports provided: ImageViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageViewComponent", function() { return ImageViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image.service */ "./src/app/sample/image.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");








function ImageViewComponent_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a file id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ImageViewComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.imgURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ImageViewComponent {
    constructor(imageService) {
        this.imageService = imageService;
    }
    ngOnInit() {
    }
    onRetrieveImage(form) {
        if (form.invalid) {
            return;
        }
        console.log(form.value.fileId);
        this.imageService.getImageSrc(form.value.fileId)
            .subscribe((resData) => {
            console.log(resData.imageURL);
            this.imgURL = resData.imageURL;
        }, (err) => {
            console.log(err);
            alert("your input file does not exist in S3");
        });
    }
}
ImageViewComponent.ɵfac = function ImageViewComponent_Factory(t) { return new (t || ImageViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_image_service__WEBPACK_IMPORTED_MODULE_1__["imageService"])); };
ImageViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageViewComponent, selectors: [["app-image-view"]], decls: 9, vars: 2, consts: [[3, "submit"], ["imageForm", "ngForm"], ["matInput", "", "placeholder", "File ID", "type", "text", "name", "fileId", "ngModel", "", "required", ""], ["fileId", ""], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit"], [3, "src"]], template: function ImageViewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ImageViewComponent_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.onRetrieveImage(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ImageViewComponent_mat_error_5_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Get Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ImageViewComponent_div_8_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgURL !== "" && ctx.imgURL);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbXBsZS9pbWFnZS12aWV3L2ltYWdlLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image-view',
                templateUrl: './image-view.component.html',
                styleUrls: ['./image-view.component.scss']
            }]
    }], function () { return [{ type: _image_service__WEBPACK_IMPORTED_MODULE_1__["imageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sample/image.service.ts":
/*!*****************************************!*\
  !*** ./src/app/sample/image.service.ts ***!
  \*****************************************/
/*! exports provided: imageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageService", function() { return imageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



// an alternative to this is to go to app.module.ts, import the necessary service
// and add it under 'providers'
class imageService {
    constructor(http) {
        this.http = http;
    }
    getImageSrc(imageId) {
        return this.http.post("http://localhost:3000/api/image/get-image", { "imageId": imageId });
    }
    uploadImageSrc(image) {
        const imageData = new FormData();
        imageData.append("imageFile", image, "testproject/floorplan/floorplan1.jpg");
        console.log(imageData);
        this.http.post("http://localhost:3000/api/image/upload-image", imageData)
            .subscribe(responseData => {
            console.log(responseData.message);
        });
    }
    deleteImageSrc() {
    }
}
imageService.ɵfac = function imageService_Factory(t) { return new (t || imageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
imageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: imageService, factory: imageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](imageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sample/sample-create/sample-create.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/sample/sample-create/sample-create.component.ts ***!
  \*****************************************************************/
/*! exports provided: SampleCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleCreateComponent", function() { return SampleCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _slideVal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slideVal.service */ "./src/app/sample/slideVal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











function SampleCreateComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter your name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SampleCreateComponent {
    constructor(sliderValueService, route) {
        this.sliderValueService = sliderValueService;
        this.route = route;
        this.mode = "create";
    }
    ngOnInit() {
        // Dynamic rendering of the same component of different data ID (avoids re-rendering of the whole component)
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has("id")) {
                this.mode = "edit";
                this.urlID = paramMap.get("id");
                this.sliderValueService.getSingleSliderValue(this.urlID).subscribe(slideVal => {
                    this.slideVal = { id: slideVal._id, player: slideVal.player, value: slideVal.slider_value };
                });
            }
            else {
                this.mode = "create";
                this.urlID = null;
            }
        });
        console.log(this.mode);
    }
    onBtnClick(form) {
        if (form.invalid) {
            return;
        }
        const val = {
            "id": null,
            "player": form.value.player,
            "value": (form.value.sliderValue | 0)
        };
        if (this.mode === "create") {
            this.sliderValueService.addSliderValue(val);
        }
        else {
            val.id = this.urlID;
            this.sliderValueService.updateSliderValue(val);
        }
        form.resetForm();
    }
}
SampleCreateComponent.ɵfac = function SampleCreateComponent_Factory(t) { return new (t || SampleCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_slideVal_service__WEBPACK_IMPORTED_MODULE_1__["sliderValueService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
SampleCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SampleCreateComponent, selectors: [["app-sample-create"]], decls: 14, vars: 3, consts: [[1, "my-3"], [3, "submit"], ["sliderForm", "ngForm"], ["matInput", "", "placeholder", "Name", "type", "text", "name", "player", "required", "", 3, "ngModel"], ["player", "ngModel"], [4, "ngIf"], ["min", "1", "max", "100", "step", "1", "thumbLabel", "thumbLabel", "name", "sliderValue", 3, "ngModel"], ["mat-raised-button", "", "color", "primary", "type", "submit"]], template: function SampleCreateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Component Sample");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SampleCreateComponent_Template_form_submit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.onBtnClick(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SampleCreateComponent_mat_error_9_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-slider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.slideVal == null ? null : ctx.slideVal.player);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.slideVal == null ? null : ctx.slideVal.value);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSlider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbXBsZS9zYW1wbGUtY3JlYXRlL3NhbXBsZS1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SampleCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sample-create',
                templateUrl: './sample-create.component.html',
                styleUrls: ['./sample-create.component.scss']
            }]
    }], function () { return [{ type: _slideVal_service__WEBPACK_IMPORTED_MODULE_1__["sliderValueService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sample/sample-image/sample-image.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/sample/sample-image/sample-image.component.ts ***!
  \***************************************************************/
/*! exports provided: SampleImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleImageComponent", function() { return SampleImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image-upload/image-upload.component */ "./src/app/sample/image-upload/image-upload.component.ts");
/* harmony import */ var _image_view_image_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image-view/image-view.component */ "./src/app/sample/image-view/image-view.component.ts");




class SampleImageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SampleImageComponent.ɵfac = function SampleImageComponent_Factory(t) { return new (t || SampleImageComponent)(); };
SampleImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SampleImageComponent, selectors: [["app-sample-image"]], decls: 2, vars: 0, template: function SampleImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-image-upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-image-view");
    } }, directives: [_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_1__["ImageUploadComponent"], _image_view_image_view_component__WEBPACK_IMPORTED_MODULE_2__["ImageViewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbXBsZS9zYW1wbGUtaW1hZ2Uvc2FtcGxlLWltYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SampleImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sample-image',
                templateUrl: './sample-image.component.html',
                styleUrls: ['./sample-image.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sample/sample-list/sample-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/sample/sample-list/sample-list.component.ts ***!
  \*************************************************************/
/*! exports provided: SampleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleListComponent", function() { return SampleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _slideVal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slideVal.service */ "./src/app/sample/slideVal.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








function SampleListComponent_mat_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
const _c0 = function (a1) { return ["/sample/edit", a1]; };
function SampleListComponent_div_1_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-actions", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "EDIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SampleListComponent_div_1_mat_card_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const value_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.onDelete(value_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", value_r4.player, " has chosen the slider value of ", value_r4.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, value_r4.id));
} }
function SampleListComponent_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No results yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SampleListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SampleListComponent_div_1_mat_card_1_Template, 9, 5, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SampleListComponent_div_1_p_2_Template, 2, 0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.values);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.values.length <= 0);
} }
class SampleListComponent {
    constructor(sliderValueService) {
        this.sliderValueService = sliderValueService;
        this.values = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.sliderValueService.getSliderValues();
        // can return 3 types of fund: next, error, complete
        this.slideValSub = this.sliderValueService.getslideValUpdateListener()
            .subscribe((values) => {
            this.values = values;
            this.isLoading = false;
        });
    }
    onDelete(id) {
        this.sliderValueService.deleteSliderValue(id);
    }
    ngOnDestroy() {
        this.slideValSub.unsubscribe();
    }
}
SampleListComponent.ɵfac = function SampleListComponent_Factory(t) { return new (t || SampleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_slideVal_service__WEBPACK_IMPORTED_MODULE_1__["sliderValueService"])); };
SampleListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SampleListComponent, selectors: [["app-sample-list"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "my-1", 4, "ngFor", "ngForOf"], ["class", "text-monospace text-center", 4, "ngIf"], [1, "my-1"], ["align", "end"], ["mat-button", "", "color", "primary", 3, "routerLink"], ["mat-button", "", "color", "warn", 3, "click"], [1, "text-monospace", "text-center"]], template: function SampleListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SampleListComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SampleListComponent_div_1_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbXBsZS9zYW1wbGUtbGlzdC9zYW1wbGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SampleListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sample-list',
                templateUrl: './sample-list.component.html',
                styleUrls: ['./sample-list.component.scss']
            }]
    }], function () { return [{ type: _slideVal_service__WEBPACK_IMPORTED_MODULE_1__["sliderValueService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sample/slideVal.service.ts":
/*!********************************************!*\
  !*** ./src/app/sample/slideVal.service.ts ***!
  \********************************************/
/*! exports provided: sliderValueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderValueService", function() { return sliderValueService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






// an alternative to this is to go to app.module.ts, import the necessary service
// and add it under 'providers'
class sliderValueService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.sliderValues = [];
        this.slideValUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // a required func to return Subject as it is defined as private
    getslideValUpdateListener() {
        return this.slideValUpdated.asObservable();
    }
    getSliderValues() {
        this.http.get('http://localhost:3000/api/slider-data')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((resData) => {
            return resData.data.map(sliderData => {
                return {
                    player: sliderData.player,
                    value: sliderData.slider_value,
                    id: sliderData._id
                };
            });
        }))
            .subscribe((transformedSliderData) => {
            this.sliderValues = transformedSliderData;
            this.slideValUpdated.next([...this.sliderValues]);
        });
    }
    getSingleSliderValue(id) {
        // Not able to return a single post due to ascrynhronous http client call (cannot return inside subscription)
        // Return the full subscription object instead to the component
        return this.http.get("http://localhost:3000/api/slider-data/" + id);
    }
    addSliderValue(sliderValue) {
        this.http.post("http://localhost:3000/api/slider-data", sliderValue)
            .subscribe((resData) => {
            console.log(resData.message);
            // To update sliderValues in the front-end
            const newSliderValue = { id: resData.id, player: sliderValue.player, value: sliderValue.value };
            this.sliderValues.push(newSliderValue);
            // convention in typescript to create copy quickly
            this.slideValUpdated.next([...this.sliderValues]);
            this.router.navigate(["/sample"]);
        });
    }
    updateSliderValue(sliderValue) {
        this.http.put("http://localhost:3000/api/slider-data/" + sliderValue.id, sliderValue)
            .subscribe((resData) => {
            console.log(resData.message);
            //To update sliderValues in the front-end
            const updatedSliderValue = [...this.sliderValues];
            const oldIndex = updatedSliderValue.findIndex((data) => data.id === sliderValue.id);
            updatedSliderValue[oldIndex] = sliderValue;
            this.sliderValues = updatedSliderValue;
            this.slideValUpdated.next([...this.sliderValues]);
            this.router.navigate(["/sample"]);
        });
    }
    deleteSliderValue(id) {
        this.http.delete("http://localhost:3000/api/slider-data/" + id)
            .subscribe((resData) => {
            console.log(resData.message);
            this.sliderValues = this.sliderValues.filter(sliderValue => sliderValue.id !== id);
            this.slideValUpdated.next([...this.sliderValues]);
        });
    }
}
sliderValueService.ɵfac = function sliderValueService_Factory(t) { return new (t || sliderValueService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
sliderValueService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: sliderValueService, factory: sliderValueService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](sliderValueService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sidenav/sidenav/sidenav.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sidenav/sidenav/sidenav.component.ts ***!
  \******************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _general_services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../general-services/global.service */ "./src/app/general-services/global.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _general_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../general-services/auth.service */ "./src/app/general-services/auth.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");









function SidenavComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_div_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const route_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.navigate(route_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const route_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", route_r1.icon, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", route_r1.title, " ");
} }
class SidenavComponent {
    constructor(_gs, _router, authService) {
        this._gs = _gs;
        this._router = _router;
        this.authService = authService;
        // ALL 0 SHOULD BE REPLACED BY ProjectID
        this.myRoutes = [
            {
                id: "home",
                title: "",
                route: "/home",
                icon: "home",
                showClient: true,
                project_types: ["dr-one", "report"]
            },
            {
                id: "edit",
                title: "",
                route: "/edit",
                icon: "rule_folder",
                showClient: false,
                project_types: ["dr-one"]
            },
            {
                id: "visualization",
                title: "",
                route: "/visualization",
                icon: "preview",
                showClient: true,
                project_types: ["dr-one"]
            },
            {
                id: "report",
                title: "",
                route: "/report",
                icon: "chrome_reader_mode",
                showClient: true,
                project_types: ["dr-one", "report"]
            },
            {
                id: "report-config",
                title: "",
                route: "/report-config",
                icon: "settings",
                showClient: false,
                project_types: ["dr-one", "report"]
            },
        ];
    }
    ngOnInit() {
        // Initialize the value if exist
        this.clientMode = this.authService.getAuthData()["role"] === "client";
        this.myRoutes.map(page => {
            page.title = this._gs.titleToRouteMap[page.id];
        });
        // Update new value on Listener
        this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
            this.clientMode = this.authService.getAuthData()["role"] === "client";
        });
    }
    ngOnDestroy() {
        this.authListenerSubs.unsubscribe();
    }
    navigate(page) {
        const extractedURL = this._router.url.split("/");
        this._gs.sideToggle();
        if (page.title === "Home") {
            this._router.navigate([page.route]);
        }
        else {
            if (extractedURL.length == 4) {
                const projectId = extractedURL[extractedURL.length - 2];
                this._router.navigate([page.route, projectId]);
            }
            else {
                const projectId = extractedURL[extractedURL.length - 1];
                this._router.navigate([page.route, projectId]);
            }
        }
    }
    availableRoutes() {
        let routes = this.myRoutes.filter(route => {
            return route.project_types.includes(this._gs.getProjectType());
        });
        routes = routes.filter(route => {
            return (!this.clientMode || this.clientMode === route.showClient);
        });
        // console.log(routes)
        return routes;
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], decls: 6, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["mat-list-item", "", "routerLinkActive", "list-item-active", 3, "click"], ["matListIcon", "", 2, "margin", "2px"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Pages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidenavComponent_div_5_Template, 5, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.availableRoutes());
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarRow"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListIconCssMatStyler"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGVuYXYvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.scss']
            }]
    }], function () { return [{ type: _general_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _general_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/top-bar/top-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.ts ***!
  \**********************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _general_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general-services/global.service */ "./src/app/general-services/global.service.ts");
/* harmony import */ var _general_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../general-services/auth.service */ "./src/app/general-services/auth.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










const _c0 = ["toolBar"];
function TopBarComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.gs.sideToggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopBarComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
} }
function TopBarComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "admin_panel_settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.gs.titleToRouteMap["admin"], " ");
} }
class TopBarComponent {
    constructor(router, gs, authService) {
        this.router = router;
        this.gs = gs;
        this.authService = authService;
        // for clock display
        this.date = new Date();
        this.userIsAuthenticated = false;
        this.isAdmin = false;
    }
    // Need to modify to acquire page title by routes
    ngOnInit() {
        // get current time for clock
        this._interval = window.setInterval(() => {
            this.date = new Date();
        }, 1000);
        // Initialize the value if exist
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.username = this.authService.getAuthData()["username"];
        this.isAdmin = this.authService.getAuthData()["role"] === "admin";
        // Update new value on Listener
        this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            this.username = this.authService.getAuthData()["username"];
            this.isAdmin = this.authService.getAuthData()["role"] === "admin";
        });
        // this.pageTitle = this.gs.getPageTitle();
    }
    ngAfterViewInit() {
        // This makes sense to me but somehow it is conflicting with Angular's lifecycle hook
        this.gs.sideNavOffset = this.toolBar.nativeElement.offsetHeight;
    }
    ngOnDestroy() {
        if (this._interval)
            window.clearInterval(this._interval);
        this.authListenerSubs.unsubscribe();
    }
    onLogout() {
        this.authService.logout();
    }
}
TopBarComponent.ɵfac = function TopBarComponent_Factory(t) { return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
TopBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopBarComponent, selectors: [["app-top-bar"]], viewQuery: function TopBarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toolBar = _t.first);
    } }, decls: 30, vars: 13, consts: [["toolBar", ""], ["mat-button", "", 3, "click", 4, "ngIf"], ["id", "app-name-logo", "routerLink", "/home"], ["src", "assets/full-logo.png", 2, "max-height", "50px"], [1, "text-monospace"], [1, "text-center", "font-weight-bold", "example-spacer"], [1, "small"], [1, "text-right"], ["class", "ml-3", "mat-icon-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], [1, "pb-0"], ["account", "matMenu"], ["mat-menu-item", "", "routerLink", "/home", 1, "text-center", "font-weight-bold"], ["mat-menu-item", "", "routerLink", "/admin", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], ["mat-button", "", 3, "click"], ["mat-icon-button", "", 1, "ml-3", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "routerLink", "/admin"]], template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopBarComponent_button_3_Template, 3, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "x dr.one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "samp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "samp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "samp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TopBarComponent_button_20_Template, 3, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-menu", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TopBarComponent_button_25_Template, 4, 1, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_Template_button_click_26_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated && !ctx.gs.isSideToggleInactive());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gs.getPageTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 7, ctx.date, "fullDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 10, ctx.date, "mediumTime"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome, ", ctx.username, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarRow"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["#app-name-logo[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  opacity: 0.5;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLWJhci9FOlxcZHItb25lL3NyY1xcYXBwXFx0b3AtYmFyXFx0b3AtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90b3AtYmFyL3RvcC1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FwcC1uYW1lLWxvZ286aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuIiwiI2FwcC1uYW1lLWxvZ286aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top-bar',
                templateUrl: './top-bar.component.html',
                styleUrls: ['./top-bar.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _general_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }, { type: _general_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, { toolBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['toolBar', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


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
const environment = {
    production: false,
    apiURL: "http://127.0.0.1:3000/api"
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\dr-one\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map