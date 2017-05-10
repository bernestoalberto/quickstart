System.register(["@angular/core", "../shared/shared.module", "./contact.component", "./contact.service", "./contact-routing.module"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, shared_module_1, contact_component_1, contact_service_1, contact_routing_module_1, ContactModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (contact_routing_module_1_1) {
                contact_routing_module_1 = contact_routing_module_1_1;
            }
        ],
        execute: function () {
            ContactModule = (function () {
                function ContactModule() {
                }
                return ContactModule;
            }());
            ContactModule = __decorate([
                core_1.NgModule({
                    imports: [shared_module_1.SharedModule, contact_routing_module_1.ContactRoutingModule],
                    declarations: [contact_component_1.ContactComponent],
                    providers: [contact_service_1.ContactService]
                })
            ], ContactModule);
            exports_1("ContactModule", ContactModule);
            /*
            Copyright 2017 Google Inc. All Rights Reserved.
            Use of this source code is governed by an MIT-style license that
            can be found in the LICENSE file at http://angular.io/license
            */ 
        }
    };
});
//# sourceMappingURL=contact.module.js.map