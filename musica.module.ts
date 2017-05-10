import { NgModule }            from '@angular/core';

import { SharedModule }        from '../shared/shared.module';

import { MusicaComponent }       from './musica.component';
import { MusicaDetailComponent } from './musica-detail.component';
import { MusicaListComponent }   from './musica-list.component';
import { MusicaRoutingModule }   from './musica-routing.module';

@NgModule({
  imports: [ SharedModule, MusicaRoutingModule ],
  declarations: [
    MusicaComponent, MusicaDetailComponent, MusicaListComponent,
  ]
})
export class MusicaModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/