import { Injectable } from '@angular/core';

export class Gusto {
  constructor(public id: number, public tipo_gusto: string) { }
}

const GUSTO: Gusto[] = [
  new Gusto(1, 'Deportivos'),
  new Gusto(2, 'Tecnologicos'),
  new Gusto(3, 'Culinarios'),
  new Gusto(4, 'Culturales')
];

const FETCH_LATENCY = 500;

@Injectable()
export class GustoService {

  getGustos() {
    return new Promise<Gusto[]>(resolve => {
      setTimeout(() => { resolve(GUSTO); }, FETCH_LATENCY);
    });
  }

  getGusto(id: number | string) {
    return this.getGustos()
      .then(gustos => gustos.find(gusto => gusto.id === +id));
  }

}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/