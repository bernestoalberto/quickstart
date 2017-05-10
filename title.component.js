System.register(["@angular/core", "../core/user.service"], function (exports_1, context_1) {
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
    var core_1, user_service_1, TitleComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }
        ],
        execute: function () {
            TitleComponent = (function () {
                function TitleComponent(userService) {
                    this.subtitle = '';
                    this.title = 'My Contacts';
                    this.user = '';
                    this.user = userService.userName;
                }
                return TitleComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], TitleComponent.prototype, "subtitle", void 0);
            TitleComponent = __decorate([
                core_1.Component({
                    moduleId: module.id,
                    selector: 'app-title',
                    templateUrl: './title.component.html',
                }),
                __metadata("design:paramtypes", [user_service_1.UserService])
            ], TitleComponent);
            exports_1("TitleComponent", TitleComponent);
            /*
            Copyright 2017 Google Inc. All Rights Reserved.
            Use of this source code is governed by an MIT-style license that
            can be found in the LICENSE file at http://angular.io/license
            */ 
        }
    };
});
//# sourceMappingURL=title.component.js.map