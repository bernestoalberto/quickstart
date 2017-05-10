import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { MusicaComponent }       from './musica.component';
import { MusicaListComponent }   from './musica-list.component';
import { MusicaDetailComponent } from './musica-detail.component';

const routes: Routes = [
  { path: '',
    component: MusicaComponent,
    children: [
      { path: '',    component: MusicaListComponent },
      { path: ':id', component: MusicaDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicaRoutingModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/