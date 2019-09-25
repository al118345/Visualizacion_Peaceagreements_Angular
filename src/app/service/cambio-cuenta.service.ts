import { Injectable } from '@angular/core';
import {User} from '../model/User';
import {Api} from '../constants/api';
import { saveAs } from 'file-saver/FileSaver';



@Injectable({
  providedIn: 'root'
})
export class CambioCuentaService {
  public user: User;


  constructor(
  ) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }
  getNumeroCuenta( numContrato: string ): Array<string> {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', Api.API_PREFIX + '/iban/' + Number(numContrato) + '/', false);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.setRequestHeader('Authorization', this.user.token);
    const data = {
      FormChangeIban :
        {
        'already_registered': 'no',
        'owner_is_bank_owner': 'True',
        'state' : 'activa',
        'acc_country_id' : '67',
        'iban': ''
      }
    };
    xhr.send(JSON.stringify(data));
    const aux = JSON.parse(xhr.responseText).result//.schema.definitions.bank.enumNames;
    return aux.schema.definitions.FormChangeIban.properties.bank.enumNames
  }

  cambiarIban(  iban: string, numContrato: string  ): Array<string> {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', Api.API_PREFIX + '/iban/' + numContrato + '/', false);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.setRequestHeader('Authorization', this.user.token);
    const data = {
      FormChangeIban :
        {
          'already_registered': 'no',
          'owner_is_bank_owner': 'True',
          'state' : 'activa',
          'acc_country_id' : '67',
          'iban': iban
        }
    };
    xhr.onerror = function () {
      alert('Ha existido un error');
      return null;
    };
    xhr.send(JSON.stringify(data));

    const aux = JSON.parse(xhr.responseText)//.schema.definitions.bank.enumNames;
    return aux
  }



  imprimir_mandato (  numContrato: string  ) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', Api.API_PREFIX + '/mandate/' + numContrato + '/');

    xhr.setRequestHeader('Authorization', this.user.token);
    xhr.responseType = 'arraybuffer';

    xhr.onload = function () {
      if (this.status === 200) {
        var blob = new Blob([xhr.response], {type: 'application/pdf'});
        var objectUrl = URL.createObjectURL(blob);
        saveAs(blob, numContrato + '.pdf');

        //window.open(objectUrl);
      }
    };
    xhr.send();
  }

}
