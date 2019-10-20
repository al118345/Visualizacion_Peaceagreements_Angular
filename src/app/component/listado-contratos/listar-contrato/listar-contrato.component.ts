import { Component, OnInit } from '@angular/core';
import {Contrato} from '../../../model/Contrato';
import {ContratoService} from '../../../service/contrato.service';

@Component({
  selector: 'app-listar-contrato',
  templateUrl: './listar-contrato.component.html',
  styleUrls: ['./listar-contrato.component.css']
})
export class ListarContratoComponent implements OnInit {

  contratoList: Array<Contrato>;
  numberofobject: number;
  p = 1;
  constructor( private contratoListData: ContratoService
  ) {
    this.contratoList = this.contratoListData.getContrato().items;
    this.numberofobject = this.contratoList.length;

  }
  ngOnInit() {
  }

}
