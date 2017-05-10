System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, Musica, MUSICA, FETCH_LATENCY, MusicaService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            Musica = (function () {
                function Musica(id, tipo_musica) {
                    this.id = id;
                    this.tipo_musica = tipo_musica;
                }
                return Musica;
            }());
            exports_1("Musica", Musica);
            MUSICA = [
                new Musica(11, 'Dance'),
                new Musica(12, 'Hip Hop'),
                new Musica(13, 'Trance'),
                new Musica(14, 'R&B'),
                new Musica(15, 'Reggaetton'),
                new Musica(16, 'Salsa')
            ];
            FETCH_LATENCY = 500;
            MusicaService = (function () {
                function MusicaService() {
                }
                MusicaService.prototype.getMusicas = function () {
                    return new Promise(function (resolve) {
                        setTimeout(function () { resolve(MUSICA); }, FETCH_LATENCY);
                    });
                };
                MusicaService.prototype.getMusica = function (id) {
                    return this.getMusicas()
                        .then(function (musicas) { return musicas.find(function (musica) { return musica.id === +id; }); });
                };
                return MusicaService;
            }());
            MusicaService = __decorate([
                core_1.Injectable()
            ], MusicaService);
            exports_1("MusicaService", MusicaService);
            /*
            Copyright 2017 Google Inc. All Rights Reserved.
            Use of this source code is governed by an MIT-style license that
            can be found in the LICENSE file at http://angular.io/license
            */ 
        }
    };
});
//# sourceMappingURL=musica.service.js.map