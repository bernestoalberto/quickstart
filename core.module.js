System.register(["@angular/core", "@angular/common", "./title.component", "./user.service"], function (exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, title_component_1, user_service_1, user_service_2, CoreModule, CoreModule_1;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (title_component_1_1) {
                title_component_1 = title_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
                user_service_2 = user_service_1_1;
            }
        ],
        execute: function () {
            CoreModule = CoreModule_1 = (function () {
                function CoreModule(parentModule) {
                    if (parentModule) {
                        throw new Error('CoreModule is already loaded. Import it in the AppModule only');
                    }
                }
                CoreModule.forRoot = function (config) {
                    return {
                        ngModule: CoreModule_1,
                        providers: [
                            { provide: user_service_2.UserServiceConfig, useValue: config }
                        ]
                    };
                };
                return CoreModule;
            }());
            CoreModule = CoreModule_1 = __decorate([
                core_1.NgModule({
                    imports: [common_1.CommonModule],
                    declarations: [title_component_1.TitleComponent],
                    exports: [title_component_1.TitleComponent],
                    providers: [user_service_1.UserService]
                }),
                __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
                __metadata("design:paramtypes", [CoreModule])
            ], CoreModule);
            exports_1("CoreModule", CoreModule);
            /*
            Copyright 2017 Google Inc. All Rights Reserved.
            Use of this source code is governed by an MIT-style license that
            can be found in the LICENSE file at http://angular.io/license
            */ 
        }
    };
});
//# sourceMappingURL=core.module.js.map