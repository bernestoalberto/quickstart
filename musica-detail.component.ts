import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { Musica,
         MusicaService }    from './musica.service';

@Component({
  template: `
    <h3 highlight>Musica Detail</h3>
    <div *ngIf="musica">
      <div>Id: {{musica.id}}</div><br>
            <label>Tipo:
        <input [(ngModel)]="musica.tipo_musica">
      </label>
    </div>
    <br>
    <a routerLink="../">Musica List</a>
  `
})
export class MusicaDetailComponent implements OnInit {
  musica: Musica;

  constructor(
    private route: ActivatedRoute,
    private musicaService: MusicaService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.params['id'], 10);
    this.musicaService.getMusica(id).then(musica => this.musica = musica);
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/