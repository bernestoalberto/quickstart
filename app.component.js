System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent() {
                    this.subtitle = '(IPVCVIL)';
                }
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: "\n    <app-title [subtitle]=\"subtitle\"></app-title>\n    <nav>\n      <a routerLink=\"contact\" routerLinkActive=\"active\">Contact</a>\n      <a routerLink=\"gusto\"  routerLinkActive=\"active\">Gusto</a>\n      <a routerLink=\"musica\"  routerLinkActive=\"active\">Musica</a>\n    </nav>\n    <router-outlet></router-outlet>\n  "
                })
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
            /*
            Copyright 2017 Google Inc. All Rights Reserved.
            Use of this source code is governed by an MIT-style license that
            can be found in the LICENSE file at http://angular.io/license
            */ 
        }
    };
});
//# sourceMappingURL=app.component.js.map