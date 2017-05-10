System.register(["@angular/core", "@angular/router"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, GustoDetailComponent, _a;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            GustoDetailComponent = (function () {
                function GustoDetailComponent(route) {
                    this.route = route;
                }
                GustoDetailComponent.prototype.ngOnInit = function () {
                    this.id = parseInt(this.route.snapshot.params['id'], 10);
                };
                return GustoDetailComponent;
            }());
            GustoDetailComponent = __decorate([
                core_1.Component({
                    template: "\n    <h3 highlight>Gusto Detail</h3>\n    <div>Gusto id: {{id}}</div>\n    <br>\n    <a routerLink=\"../list\">Gusto List</a>\n  "
                }),
                __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object])
            ], GustoDetailComponent);
            exports_1("GustoDetailComponent", GustoDetailComponent);
            /*
            Copyright 2017 Google Inc. All Rights Reserved.
            Use of this source code is governed by an MIT-style license that
            can be found in the LICENSE file at http://angular.io/license
            */ 
        }
    };
});
//# sourceMappingURL=gusto-detail.component.js.map