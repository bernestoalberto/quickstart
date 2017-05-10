import { Injectable } from '@angular/core';

export class Contact {
  constructor(
    public id: number,
   public name: string,
   public age:number
   )
    { }
}

const CONTACTS: Contact[] = [
  new Contact(21, 'Daniel Valdez',28),
  new Contact(22, 'Ernesto Torres',28),
  new Contact(23, 'Alejandro Sauleda',28),
  new Contact(24, 'Marcos Rubio',45)
];

const FETCH_LATENCY = 500;

@Injectable()
export class ContactService {

  getContacts() {
    return new Promise<Contact[]>(resolve => {
      setTimeout(() => { resolve(CONTACTS); }, FETCH_LATENCY);
    });
  }

  getContact(id: number | string) {
    return this.getContacts()
      .then(contacts => contacts.find(contact => contact.id === +id));
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/