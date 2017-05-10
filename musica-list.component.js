System.register(["@angular/core", "./musica.service"], function (exports_1, context_1) {
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
    var core_1, musica_service_1, MusicaListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (musica_service_1_1) {
                musica_service_1 = musica_service_1_1;
            }
        ],
        execute: function () {
            MusicaListComponent = (function () {
                function MusicaListComponent(musicaService) {
                    this.musicaService = musicaService;
                }
                MusicaListComponent.prototype.ngOnInit = function () {
                    this.musica = this.musicaService.getMusicas();
                };
                return MusicaListComponent;
            }());
            MusicaListComponent = __decorate([
                core_1.Component({
                    template: "\n    <h3 highlight>/Musica List</h3>\n    <div *ngFor='let musica of musicas | async'>\n      <a routerLink=\"{{musica.id}}\">{{musica.id}} - {{musica.tipo_musica}}</a>\n    </div>\n  "
                }),
                __metadata("design:paramtypes", [musica_service_1.MusicaService])
            ], MusicaListComponent);
            exports_1("MusicaListComponent", MusicaListComponent);
            /*
            Copyright 2017 Google Inc. All Rights Reserved.
            Use of this source code is governed by an MIT-style license that
            can be found in the LICENSE file at http://angular.io/license
            */ 
        }
    };
});
//# sourceMappingURL=musica-list.component.js.map