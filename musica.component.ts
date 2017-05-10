// Exact copy except import UserService from core
import { Component }   from '@angular/core';

import { MusicaService } from './musica.service';
import { UserService } from '../core/user.service';

@Component({
  template: `
    <h2>Musica of {{userName}}</h2>
    <router-outlet></router-outlet>
  `,
  providers: [ MusicaService ]
})
export class MusicaComponent {
  userName = '';
  constructor(userService: UserService) {
    this.userName = userService.userName;
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/