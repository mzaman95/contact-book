import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {
  contactList = [
    {
      _id: 1,
      imageurl: 'assets/img/Adam Savage.jpeg',
      name: 'Adam Savage',
      company: 'LinkedIn Corporation',
      email: 'adam.savage@gmail.com',
      phone: '(555) 145-7890',
    },
    {
      _id: 2,
      imageurl: 'assets/img/Christina Morillo.jpeg',
      name: 'Christina Morillo',
      company: 'Apple Inc.',
      email: 'christina_morillo134@gmail.com',
      phone: '(555) 678-7894',
    },
    {
      _id: 3,
      imageurl: 'assets/img/Fatima Kiet.jpeg',
      name: 'Fatima Kiet',
      company: 'Amazon.com Inc.',
      email: 'fkiet225@gmail.com',
      phone: '(555) 462-8904',
    },
    {
      _id: 4,
      imageurl: 'assets/img/Justin Shaifer.jpeg',
      name: 'Justin Shaifer',
      company: 'Google LLC',
      email: 'justshaifer@gmail.com',
      phone: '(555) 398-9087',
    },
    {
      _id: 5,
      imageurl: 'assets/img/Nguyen Lam.jpeg',
      name: 'Nguyen Lam',
      company: 'Microsoft Corporation',
      email: 'lam_nguyen@gmail.com',
      phone: '(555) 784-8970',
    },
  ];

  constructor() {}

  listContacts() {
    return this.contactList;
  }
}
