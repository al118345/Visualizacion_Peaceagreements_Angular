import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';

import {Observable} from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  items: Observable<any[]>;


  constructor(public db: AngularFirestore, private db2: AngularFireDatabase) {}

  getEvolutionLife() {
      return this.db2.list('/esperanza_vida').valueChanges()

  }


  getUsers() {
    return this.db.collection('users').snapshotChanges();
  }
  searchRoles() {
    return this.db.collection('roles').snapshotChanges();
  }


  searchUsers(searchValue) {
      return this.db.collection('users', ref => ref.where('razonsocial', '>=', searchValue)
        .where('razonsocial', '<=', searchValue + '\uf8ff'))
        .snapshotChanges()
  }

  searchNif(searchValue) {
    return this.db.collection('users', ref => ref.where('nif', '>=', searchValue)
      .where('nif', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }
  searchRol(searchValue) {
    return this.db.collection('users', ref => ref.where('rol', '>=', searchValue)
      .where('rol', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  almacenarrol(userKey, value) {
    return this.db.collection('users').doc(userKey).update(value);
  }
}
