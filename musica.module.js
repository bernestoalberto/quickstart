System.register(["@angular/core", "../shared/shared.module", "./musica.component", "./musica-detail.component", "./musica-list.component", "./musica-routing.module"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, shared_module_1, musica_component_1, musica_detail_component_1, musica_list_component_1, musica_routing_module_1, MusicaModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            },
            function (musica_component_1_1) {
                musica_component_1 = musica_component_1_1;
            },
            function (musica_detail_component_1_1) {
                musica_detail_component_1 = musica_detail_component_1_1;
            },
            function (musica_list_component_1_1) {
                musica_list_component_1 = musica_list_component_1_1;
            },
            function (musica_routing_module_1_1) {
                musica_routing_module_1 = musica_routing_module_1_1;
            }
        ],
        execute: function () {
            MusicaModule = (function () {
                function MusicaModule() {
                }
                return MusicaModule;
            }());
            MusicaModule = __decorate([
                core_1.NgModule({
                    imports: [shared_module_1.SharedModule, musica_routing_module_1.MusicaRoutingModule],
                    declarations: [
                        musica_component_1.MusicaComponent, musica_detail_component_1.MusicaDetailComponent, musica_list_component_1.MusicaListComponent,
                    ]
                })
            ], MusicaModule);
            exports_1("MusicaModule", MusicaModule);
            /*
            Copyright 2017 Google Inc. All Rights Reserved.
            Use of this source code is governed by an MIT-style license that
            can be found in the LICENSE file at http://angular.io/license
            */ 
        }
    };
});
//# sourceMappingURL=musica.module.js.map