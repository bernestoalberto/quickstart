System.register(["@angular/core", "./gusto.service"], function (exports_1, context_1) {
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
    var core_1, gusto_service_1, GustoListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (gusto_service_1_1) {
                gusto_service_1 = gusto_service_1_1;
            }
        ],
        execute: function () {
            GustoListComponent = (function () {
                function GustoListComponent(gustosService) {
                    this.gustosService = gustosService;
                }
                GustoListComponent.prototype.ngOnInit = function () {
                    this.gustos = this.gustosService.getGustos();
                };
                return GustoListComponent;
            }());
            GustoListComponent = __decorate([
                core_1.Component({
                    template: "\n    <h3 highlight>Gustos List</h3>\n    <div *ngFor='let gusto of gustos | async'>\n      <a routerLink=\"{{'../' + gusto.id}}\">{{gusto.id}} -{{gusto.tipo_gusto}}/a>\n    </div>\n  "
                }),
                __metadata("design:paramtypes", [gusto_service_1.GustoService])
            ], GustoListComponent);
            exports_1("GustoListComponent", GustoListComponent);
            /*
            Copyright 2017 Google Inc. All Rights Reserved.
            Use of this source code is governed by an MIT-style license that
            can be found in the LICENSE file at http://angular.io/license
            */ 
        }
    };
});
//# sourceMappingURL=gusto-list.component.js.map