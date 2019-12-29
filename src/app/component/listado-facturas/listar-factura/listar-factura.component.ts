import { Component, OnInit } from '@angular/core';
import {Item} from '../../../model/Factura';
import { FacturasService } from 'app/service/facturas.service';
import { Contrato } from 'app/model/Contrato';
import {Router, ActivatedRoute} from '@angular/router';
import {DataService} from '../../../service/dataservice';

@Component({
  selector: 'app-listar-factura',
  templateUrl: './listar-factura.component.html',
  styleUrls: ['./listar-factura.component.css']
})
export class ListarFacturaComponent implements OnInit {
  facturaList: Array<Item>;
  numberofobject: number;
  p = 1;
  contrato: Contrato;
  constructor(private facturaListData: FacturasService,
    private router: Router,
    public dataservice: DataService) { 
      this.contrato = this.dataservice.contrato;
      if (this.contrato == null){
        this.router.navigate(['./app-listado-contratos']);
      }
      this.facturaList = this.facturaListData.getFactura(this.contrato.name).items;
      this.numberofobject = this.facturaList.length;
}
  ngOnInit() {
  }
  volverListadoContratos(){
    this.router.navigate(['./app-listado-contratos']);
    
  }
}
