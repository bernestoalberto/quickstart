import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <app-title [subtitle]="subtitle"></app-title>
    <nav>
      <a routerLink="contact" routerLinkActive="active">Contact</a>
      <a routerLink="gusto"  routerLinkActive="active">Gusto</a>
      <a routerLink="musica"  routerLinkActive="active">Musica</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  subtitle = '(IPVCVIL)';
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/