import { Injectable } from '@angular/core';
import {User} from '../model/User';
import {Api} from '../constants/api';
import { RootObject} from '../model/Factura';
import { saveAs } from 'file-saver/FileSaver';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {
  public user: User;

  constructor() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  getFactura (contrato: string) : RootObject{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', Api.API_PREFIX + '/contracts/' + contrato + '/invoices/', false);
    xhr.setRequestHeader('Authorization', this.user.token);
    xhr.send();
    const aux = JSON.parse(xhr.responseText);
    return  JSON.parse(xhr.responseText);
  }
  //obtener una factura
  //url objetivo https://ov.electraenergia.com/api/v1/invoices/863998/pdf/
  getInvoice( id: string, nombre: string = ''){
    if (nombre == '')
      nombre = id;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', Api.API_PREFIX + '/invoices/' + id + '/pdf/');
    xhr.responseType = 'arraybuffer';
    xhr.setRequestHeader('Authorization', this.user.token);

    xhr.onload = function () {
      if (this.status === 200) {
        var blob = new Blob([xhr.response], {type: 'application/pdf'});
        var objectUrl = URL.createObjectURL(blob);
        saveAs(blob, nombre + '.pdf');

        //window.open(objectUrl);
      }
    };
    xhr.send();

  }
}
