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
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    const xhr = new XMLHttpRequest();
    const data = {
      'current': contraseñavieja,
      'password': contraseñanueva
    };

    xhr.open('PUT', Api.API_PREFIX + '/user/password', false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', this.user.token);

    xhr.onload  = function() {
      return xhr.response;
      // do something with jsonResponse
    };
    xhr.send(JSON.stringify(data));
    if ( JSON.parse(xhr.responseText).status  === 'OK') {
      return true;
    } else {
      return ;
    }
  }

  login(username: string, password: string): boolean {
    const xhr = new XMLHttpRequest();
    const data = {
      'user': username.toUpperCase( ),
      'password': password
    };
    localStorage.clear();
    xhr.open('POST', Api.API_PREFIX + '/get_token', false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload  = function() {
      return xhr.response;
      // do something with jsonResponse
    };
    xhr.send(JSON.stringify(data));
    if ( JSON.parse(xhr.responseText).token  === null) {
      return false;
    } else {
      this.user = new User(username, password, JSON.parse(xhr.responseText).token )
      localStorage.setItem('currentUser', this.user.to_json() );
      return true;
    }
  }
  get_user(email) {
    return this.db.collection('users', ref => ref.where('email', '==', email))
  }

  logout(): void {
      localStorage.removeItem('currentUser');
  }
  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      const user = firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          resolve(user);
        } else {
          reject('No user logged in');
        }
      })
    })
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
