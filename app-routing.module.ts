import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: 'contact', redirectTo: 'contact', pathMatch: 'full'},
  { path: 'gusto', loadChildren: 'app/gusto/gusto.module#GustoModule' },
  { path: 'musica', loadChildren: 'app/musica/musica.module#MusicaModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
