import { Component, OnInit } from '@angular/core';

import { Musica,
         MusicaService } from './musica.service';

@Component({
  template: `
    <h3 highlight>/Musica List</h3>
    <div *ngFor='let musica of musicas | async'>
      <a routerLink="{{musica.id}}">{{musica.id}} - {{musica.tipo_musica}}</a>
    </div>
  `
})
export class MusicaListComponent implements OnInit {
  musica: Promise<Musica[]>;
  constructor(private musicaService: MusicaService) { }

  ngOnInit() {
    this.musica = this.musicaService.getMusicas();
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/