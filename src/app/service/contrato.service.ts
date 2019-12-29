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
   return null
  }

  activar_sin_papel( contrato: string, email: string): string {
    return null
  }
}
