import { Injectable } from '@angular/core';
import {User} from '../model/User';
import { ListaContratos} from '../model/Contrato';
import {Api} from '../constants/api';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ContratoService {
  public user: User;


  constructor(
  ) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  getContrato (): ListaContratos {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', Api.API_PREFIX + '/contracts/', false);
    xhr.setRequestHeader('Authorization', this.user.token);
    xhr.send();
    const aux = JSON.parse(xhr.responseText);
    return  JSON.parse(xhr.responseText);
  }

  activar_sin_papel( contrato: string, email: string): string {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', Api.API_PREFIX + '/sinpapel/' + contrato + '/', false);
    xhr.setRequestHeader('Authorization', this.user.token);
    xhr.setRequestHeader('Content-Type', 'application/json');
    const data = {
      'email' : email
    };
    xhr.send(JSON.stringify(data));
    const aux = JSON.parse(xhr.responseText);
    return aux.status;
  }
}
