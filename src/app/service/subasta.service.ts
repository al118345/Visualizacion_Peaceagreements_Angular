import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubastaService {

  constructor(public db: AngularFirestore, public afAuth: AngularFireAuth) { }

  getSubastas() {
     return this.db.collection('subastas').snapshotChanges();;
  }
  almacenarSubasta(value) {
    const param = JSON.parse(JSON.stringify(value));

    return this.db.collection('subastas').add(param);
  }
  modificarpuja(userKey, value) {
    return this.db.collection('subastas').doc(userKey).update(value);
  }
}
