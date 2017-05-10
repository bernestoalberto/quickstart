import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

@Component({
  template: `
    <h3 highlight>Gusto Detail</h3>
    <div>Gusto id: {{id}}</div>
    <br>
    <a routerLink="../list">Gusto List</a>
  `
})
export class GustoDetailComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) {  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.params['id'], 10);
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/