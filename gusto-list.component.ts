import { Component, OnInit } from '@angular/core';

import { Gusto,
         GustoService }     from './gusto.service';

@Component({
  template: `
    <h3 highlight>Gustos List</h3>
    <div *ngFor='let gusto of gustos | async'>
      <a routerLink="{{'../' + gusto.id}}">{{gusto.id}} -{{gusto.tipo_gusto}}/a>
    </div>
  `
})
export class GustoListComponent implements OnInit {
  gustos: Promise<Gusto[]>;

  constructor(private gustosService: GustoService) { }

  ngOnInit() {
    this.gustos = this.gustosService.getGustos();
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/