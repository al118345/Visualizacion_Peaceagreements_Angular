import { Injectable } from '@angular/core';
import {Api} from '../constants/api';

import {RootObject} from '../model/Register';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  register(nif: string, contract: string, cups: string, email: string, rep_email: string, accept_conditions: boolean): RootObject {
    datos : RootObject;
    const xhr = new XMLHttpRequest();
    const data = {
      FormConfirm :{
        'accept_conditions': accept_conditions,
        'nif': nif ,
        'contract': contract,
        'cups': cups,
        'email': email,
        'email2': rep_email
      }
    };
    localStorage.clear();
    xhr.open('POST', Api.API_PREFIX + '/signup/confirm', false);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload  = function() {
      return xhr.response;
      // do something with jsonResponse
    };
    xhr.send(JSON.stringify(data));
    const aux = JSON.parse(xhr.responseText);
    return aux;
    }
  }

