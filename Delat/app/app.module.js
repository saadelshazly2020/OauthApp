"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var app_component_1 = require("./app.component");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
//import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
//import { FroalaEditorModule } from 'ng2-froala-editor/ng2-froala-editor'; 
var ng2_toasty_1 = require("ng2-toasty");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var angular2_datatable_1 = require("angular2-datatable");
var mydatepicker_1 = require("mydatepicker");
var ng2_table_1 = require("ng2-table/ng2-table");
var angular2_tinymce_1 = require("angular2-tinymce");
//import { logInService } from "./service/logIn.service";
//import { HomeService } from "./service/home.service";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [angular2_tinymce_1.TinymceModule.withConfig({}), ng2_table_1.Ng2TableModule, platform_browser_1.BrowserModule, forms_2.ReactiveFormsModule, http_1.HttpModule, app_routing_1.routing, ng2_bs3_modal_1.Ng2Bs3ModalModule,
                forms_1.FormsModule, angular2_datatable_1.DataTableModule, mydatepicker_1.MyDatePickerModule, ng2_toasty_1.ToastyModule.forRoot()],
            declarations: [app_component_1.AppComponent],
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map