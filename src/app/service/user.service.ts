import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/User';
import {Api} from '../constants/api';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import {FirebaseAuth} from '@angular/fire';

@Injectable()
export class UserService {

  public user: User;

  constructor( public db: AngularFirestore, public afAuth: AngularFireAuth) {
    const currentUser = localStorage.getItem('currentUser');
  }

  cambiocontraseña(contraseñavieja: string, contraseñanueva: string): boolean {
    return true
  }

  login(username: string, password: string): boolean {
    return true

  }
  get_user(email) {
    return this.db.collection('users', ref => ref.where('email', '==', email))
  }

  logout(): void {
      localStorage.removeItem('currentUser');
  }
  getCurrentUser() {
    return true
  }
  updateCurrentUser(value) {
    return new Promise<any>((resolve, reject) => {
      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: value.name,
        photoURL: user.photoURL
      }).then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }


}
