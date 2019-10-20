import { Component, OnInit } from '@angular/core';
import {ContratoService} from '../../../service/contrato.service';
import {Contrato} from '../../../model/Contrato';
import {Subasta} from '../../../model/Subasta';
import {SubastaService} from '../../../service/subasta.service';

@Component({
  selector: 'app-listar-subasta',
  templateUrl: './listar-subasta.component.html',
  styleUrls: ['./listar-subasta.component.css']
})
export class ListarSubastaComponent implements OnInit {

  subastaList: Array<any>;
  numberofobject: number;
  p = 1;
  constructor( private subastaListData: SubastaService
  ) {
    this.subastaListData.getSubastas().subscribe(result => {
      this.subastaList = result;
      this.numberofobject = this.subastaList.length;
    })
  }
  ngOnInit() {
  }


}
