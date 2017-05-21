"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./auth/welcome.component");
var app_routing_module_2 = require("./app-routing.module");
var app_configuration_1 = require("./shared/app.configuration");
var shared_module_1 = require("./shared/shared.module");
var core_module_1 = require("./core/core.module");
var bucketlist_service_1 = require("./core/dataServices/bucketlist.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.FormsModule,
            shared_module_1.SharedModule,
            core_module_1.CoreModule
        ],
        declarations: [
            app_component_1.AppComponent, welcome_component_1.WelcomeComponent, app_routing_module_2.routingComponents
        ],
        providers: [
            app_configuration_1.Configuration,
            bucketlist_service_1.BucketListService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map