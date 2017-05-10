import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { GustoListComponent }    from './gusto-list.component';
import { GustoDetailComponent }  from './gusto-detail.component';
import { GustoService }          from './gusto.service';
import { GustoRoutingModule }    from './gusto-routing.module';

@NgModule({
  imports:      [ CommonModule, GustoRoutingModule ],
  declarations: [ GustoDetailComponent, GustoListComponent ],
  providers:    [ GustoService ]
})
export class GustoModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/