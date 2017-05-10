System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, Gusto, GUSTO, FETCH_LATENCY, GustoService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            Gusto = (function () {
                function Gusto(id, tipo_gusto) {
                    this.id = id;
                    this.tipo_gusto = tipo_gusto;
                }
                return Gusto;
            }());
            exports_1("Gusto", Gusto);
            GUSTO = [
                new Gusto(1, 'Deportivos'),
                new Gusto(2, 'Tecnologicos'),
                new Gusto(3, 'Culinarios'),
                new Gusto(4, 'Culturales')
            ];
            FETCH_LATENCY = 500;
            GustoService = (function () {
                function GustoService() {
                }
                GustoService.prototype.getGustos = function () {
                    return new Promise(function (resolve) {
                        setTimeout(function () { resolve(GUSTO); }, FETCH_LATENCY);
                    });
                };
                GustoService.prototype.getGusto = function (id) {
                    return this.getGustos()
                        .then(function (gustos) { return gustos.find(function (gusto) { return gusto.id === +id; }); });
                };
                return GustoService;
            }());
            GustoService = __decorate([
                core_1.Injectable()
            ], GustoService);
            exports_1("GustoService", GustoService);
            /*
            Copyright 2017 Google Inc. All Rights Reserved.
            Use of this source code is governed by an MIT-style license that
            can be found in the LICENSE file at http://angular.io/license
            */ 
        }
    };
});
//# sourceMappingURL=gusto.service.js.map