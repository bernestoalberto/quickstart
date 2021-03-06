System.register(["@angular/core", "@angular/router", "./contact.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, contact_component_1, ContactRoutingModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            }
        ],
        execute: function () {
            ContactRoutingModule = (function () {
                function ContactRoutingModule() {
                }
                return ContactRoutingModule;
            }());
            ContactRoutingModule = __decorate([
                core_1.NgModule({
                    imports: [router_1.RouterModule.forChild([
                            { path: 'contact', component: contact_component_1.ContactComponent }
                        ])],
                    exports: [router_1.RouterModule]
                })
            ], ContactRoutingModule);
            exports_1("ContactRoutingModule", ContactRoutingModule);
            /*
            Copyright 2017 Google Inc. All Rights Reserved.
            Use of this source code is governed by an MIT-style license that
            can be found in the LICENSE file at http://angular.io/license
            */ 
        }
    };
});
//# sourceMappingURL=contact-routing.module.js.map