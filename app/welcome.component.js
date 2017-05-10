"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    core_1.Component({
        selector: 'welcome-page',
        template: "<nav class=\"navbar navbar-default\">\n                  <div class=\"container-fluid\">\n                    <div class=\"navbar-header\">\n                      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                      </button>\n                      <a class=\"navbar-brand\" href=\"#\">Bucket-y!</a>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n                      <ul class=\"nav navbar-nav\">\n                        <li class=\"active\"><a href=\"#\">Home</a></li>\n                        <li class=\"dropdown\">\n                          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">View<span class=\"caret\"></span></a>\n                          <ul class=\"dropdown-menu\">\n                            <li><a href=\"#\">Bucketlists</a></li>\n                            <li><a href=\"#\">Items</a></li>\n                          </ul>\n                        </li>\n                        <li><a href=\"#\">Update</a></li>\n                        <li><a href=\"#\">Delete</a></li>\n                      </ul>\n                      <ul class=\"nav navbar-nav navbar-right\">\n                        <li><a routerLink=\"/register\" routerLinkActive=\"active\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n                        <li><a routerLink=\"/login\" routerLinkActive=\"active\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n                      </ul>\n                    </div>\n                  </div>\n                </nav>\n                <router-outlet></router-outlet>\n              <div id='logo' align='center'>\n                <img src='images/buckety_icon.png' style='width:230px;height:230px;'>\n              </div>\n              <div id='welcome'>\n                <img src='images/buckety4_logo.jpg' id='image'>\n              </div>"
    })
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map