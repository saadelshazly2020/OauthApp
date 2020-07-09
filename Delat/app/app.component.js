"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        //event.subscribe('showLogout', () => {
        //    this.showLogout();
        this.router = router;
        //});
    }
    AppComponent.prototype.ngOnInit = function () {
        // standing data
        this.supportedLanguages = [
            { display: 'English', value: 'en' },
            { display: 'Arabic', value: 'ar' }
        ];
        // set current langage
        this.selectLang('en');
    };
    AppComponent.prototype.isCurrentLang = function (lang) {
        // check if the selected lang is current lang
        //return lang === this._translate.currentLang;
    };
    AppComponent.prototype.selectLang = function (lang) {
        // set current lang;
        //this._translate.use(lang);
        //this.refreshText();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "user-app",
            template: "\n\n                <div>\n                     <ng2-toasty></ng2-toasty>\n\n\n                        <router-outlet></router-outlet>\n                    \n                 </div>\n\n                "
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map