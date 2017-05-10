import { Injectable } from '@angular/core';

export class Musica {
  constructor(public id: number, public tipo_musica: string) { }
}

const MUSICA: Musica[] = [
  new Musica(11, 'Dance'),
  new Musica(12, 'Hip Hop'),
  new Musica(13, 'Trance'),
  new Musica(14, 'R&B'),
  new Musica(15, 'Reggaetton'),
  new Musica(16, 'Salsa')
];

const FETCH_LATENCY = 500;

@Injectable()
export class MusicaService {

  getMusicas() {
    return new Promise<Musica[]>(resolve => {
      setTimeout(() => { resolve(MUSICA); }, FETCH_LATENCY);
    });
  }

  getMusica(id: number | string) {
    return this.getMusicas()
      .then(musicas => musicas.find(musica => musica.id === +id));
  }

}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/