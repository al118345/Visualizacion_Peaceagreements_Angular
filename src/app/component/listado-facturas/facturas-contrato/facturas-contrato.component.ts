import { Component, OnInit, OnDestroy } from '@angular/core';
import {Item} from '../../../model/Factura';
import {Contrato} from '../../../model/Contrato';
import {Router, ActivatedRoute} from '@angular/router';
import {DataService} from '../../../service/dataservice';
import { FacturasService } from 'app/service/facturas.service';

@Component({
  selector: 'app-facturas-contrato',
  templateUrl: './facturas-contrato.component.html',
  styleUrls: ['./facturas-contrato.component.css']
})
export class FacturasContratoComponent implements OnInit, OnDestroy {
  facturaList: Array<Item>;
  numberofobject: number;
  contrato: Contrato;
  constructor(private facturaListData: FacturasService,
    private router: Router,
    public dataservice: DataService) { 
      this.contrato = this.dataservice.contrato;
      if (this.contrato == null){
        this.router.navigate(['./app-listado-contratos']);
      }
  /*this.facturaList = this.facturaListData.getFactura(this.contrato.name).items;
  this.numberofobject = this.facturaList.length;*/
}
  ngOnInit() {
    
  }

  ngOnDestroy() {
    
    this.contrato = null;
    

  }

}
