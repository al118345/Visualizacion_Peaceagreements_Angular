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
    return null
  }

  cambiarIban(  iban: string, numContrato: string  ): Array<string> {

    return null
  }



  imprimir_mandato (  numContrato: string  ) {
    return null;
  }

}
