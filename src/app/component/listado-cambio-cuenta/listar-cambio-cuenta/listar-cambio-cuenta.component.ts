import { Component, OnInit } from '@angular/core';
import {Contrato} from '../../../model/Contrato';
import {ContratoService} from '../../../service/contrato.service';
import {CambioCuentaService} from '../../../service/cambio-cuenta.service';

@Component({
  selector: 'app-listar-cambio-cuenta',
  templateUrl: './listar-cambio-cuenta.component.html',
  styleUrls: ['./listar-cambio-cuenta.component.css']
})
export class ListarCambioCuentaComponent implements OnInit {
  cuentaList: Array<string>;
  numberofobject: number;
  num=0;
  p = 1;
  contrato: string;
  ibanactual: string;
  banco: string;

  constructor( private cambioCuentaListData: CambioCuentaService
  ) {

    this.contrato =  localStorage.getItem('contrato');

    this.cuentaList = this.cambioCuentaListData.getNumeroCuenta(this.contrato);
    this.numberofobject = this.cuentaList.length;

  }
  ngOnInit() {
  }

}
