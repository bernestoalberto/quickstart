System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, Contact, CONTACTS, FETCH_LATENCY, ContactService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            Contact = (function () {
                function Contact(id, name, age) {
                    this.id = id;
                    this.name = name;
                    this.age = age;
                }
                return Contact;
            }());
            exports_1("Contact", Contact);
            CONTACTS = [
                new Contact(21, 'Daniel Valdez', 28),
                new Contact(22, 'Ernesto Torres', 28),
                new Contact(23, 'Alejandro Sauleda', 28),
                new Contact(24, 'Marcos Rubio', 45)
            ];
            FETCH_LATENCY = 500;
            ContactService = (function () {
                function ContactService() {
                }
                ContactService.prototype.getContacts = function () {
                    return new Promise(function (resolve) {
                        setTimeout(function () { resolve(CONTACTS); }, FETCH_LATENCY);
                    });
                };
                ContactService.prototype.getContact = function (id) {
                    return this.getContacts()
                        .then(function (contacts) { return contacts.find(function (contact) { return contact.id === +id; }); });
                };
                return ContactService;
            }());
            ContactService = __decorate([
                core_1.Injectable()
            ], ContactService);
            exports_1("ContactService", ContactService);
            /*
            Copyright 2017 Google Inc. All Rights Reserved.
            Use of this source code is governed by an MIT-style license that
            can be found in the LICENSE file at http://angular.io/license
            */ 
        }
    };
});
//# sourceMappingURL=contact.service.js.map