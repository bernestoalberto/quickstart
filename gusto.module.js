System.register(["@angular/core", "@angular/common", "./gusto-list.component", "./gusto-detail.component", "./gusto.service", "./gusto-routing.module"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, gusto_list_component_1, gusto_detail_component_1, gusto_service_1, gusto_routing_module_1, GustoModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (gusto_list_component_1_1) {
                gusto_list_component_1 = gusto_list_component_1_1;
            },
            function (gusto_detail_component_1_1) {
                gusto_detail_component_1 = gusto_detail_component_1_1;
            },
            function (gusto_service_1_1) {
                gusto_service_1 = gusto_service_1_1;
            },
            function (gusto_routing_module_1_1) {
                gusto_routing_module_1 = gusto_routing_module_1_1;
            }
        ],
        execute: function () {
            GustoModule = (function () {
                function GustoModule() {
                }
                return GustoModule;
            }());
            GustoModule = __decorate([
                core_1.NgModule({
                    imports: [common_1.CommonModule, gusto_routing_module_1.GustoRoutingModule],
                    declarations: [gusto_detail_component_1.GustoDetailComponent, gusto_list_component_1.GustoListComponent],
                    providers: [gusto_service_1.GustoService]
                })
            ], GustoModule);
            exports_1("GustoModule", GustoModule);
            /*
            Copyright 2017 Google Inc. All Rights Reserved.
            Use of this source code is governed by an MIT-style license that
            can be found in the LICENSE file at http://angular.io/license
            */ 
        }
    };
});
//# sourceMappingURL=gusto.module.js.map