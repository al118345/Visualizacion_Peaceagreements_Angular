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
    return null
  }
  //obtener una factura
  //url objetivo https://ov.electraenergia.com/api/v1/invoices/863998/pdf/
  getInvoice( id: string, nombre: string = '') {
  }
}
