import { NgModule }            from '@angular/core';
import { Routes,
         RouterModule }        from '@angular/router';

import { GustoListComponent }    from './gusto-list.component';
import { GustoDetailComponent }  from './gusto-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list',    component: GustoListComponent },
  { path: ':id', component: GustoDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GustoRoutingModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/