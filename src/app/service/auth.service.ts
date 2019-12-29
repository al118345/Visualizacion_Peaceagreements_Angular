import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public db: AngularFirestore,
    public afAuth: AngularFireAuth
  ) { }

  get_user(email) {
    return this.db.collection('users', ref => ref.where('email', '==', email)).snapshotChanges();
  }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        }, err => {
          console.log(err);
          reject(err);
        })
    })
  }

  doRegister(nif, direccionfacturacion, razonsocial, telefono, password, email) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
          this.db.collection('users').add({
            nif: nif,
            direccionfacturacion: direccionfacturacion,
            razonsocial: razonsocial,
            telefono: telefono,
            email: email,
            informacion_recopilada: true,
            rol: ''
          });
          this.sendEmail();
        }, err => reject(err))
    })
  }

  doLogin(email, password) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
          this.sendEmail();
        }, err => reject(err))
    })
  }

  doLogout() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        this.afAuth.auth.signOut();
        resolve();
      } else {
        reject();
      }
    });
  }

  sendEmail() {
    return new Promise<any>((resolve, reject) => {
      const user = firebase.auth().currentUser;
      if ( user.emailVerified === true) {
      } else {
        user.sendEmailVerification()
        return false;
      }
    })
  }
  doRegister_User(nif: any, direccionfacturacion: any, razonsocial: any, telefono: any) {
    this.db.collection('users').add({
      nif: nif,
      direccionfacturacion: direccionfacturacion,
      razonsocial: razonsocial,
      telefono: telefono,
      email: localStorage.getItem('currentUser'),
      informacion_recopilada: true,
      rol: 'inicial'
    });
  }
}
