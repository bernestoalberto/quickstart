System.register(["@angular/core", "@angular/common", "@angular/forms", "./awesome.pipe", "./highlight.directive"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, forms_1, awesome_pipe_1, highlight_directive_1, SharedModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (awesome_pipe_1_1) {
                awesome_pipe_1 = awesome_pipe_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            }
        ],
        execute: function () {
            SharedModule = (function () {
                function SharedModule() {
                }
                return SharedModule;
            }());
            SharedModule = __decorate([
                core_1.NgModule({
                    imports: [common_1.CommonModule],
                    declarations: [awesome_pipe_1.AwesomePipe, highlight_directive_1.HighlightDirective],
                    exports: [awesome_pipe_1.AwesomePipe, highlight_directive_1.HighlightDirective,
                        common_1.CommonModule, forms_1.FormsModule]
                })
            ], SharedModule);
            exports_1("SharedModule", SharedModule);
            /*
            Copyright 2017 Google Inc. All Rights Reserved.
            Use of this source code is governed by an MIT-style license that
            can be found in the LICENSE file at http://angular.io/license
            */ 
        }
    };
});
//# sourceMappingURL=shared.module.js.map