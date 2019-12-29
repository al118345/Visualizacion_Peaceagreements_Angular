import {Component, Input, OnInit} from '@angular/core';
import {Contrato} from '../../../model/Contrato';
import {Router} from '@angular/router';
import {ContratoService} from '../../../service/contrato.service';
import {DataService} from '../../../service/dataservice';
@Component({
  selector: 'app-contrato-item',
  templateUrl: './contrato-item.component.html',
  styleUrls: ['./contrato-item.component.css']
})
export class ContratoItemComponent implements OnInit {

  @Input() contrato: Contrato;
  constructor(
    private router: Router,
    public dataservice: DataService
  ) { }

  ngOnInit() {


  }

  goDetalleContrato(){
    //console.log (this.contrato);
    this.dataservice.contrato = this.contrato;
    localStorage.setItem('contrato',  this.contrato.name + '' );
    localStorage.setItem('banco',  this.contrato.bank_account.bank.name + '' );
    localStorage.setItem('iban',  this.contrato.bank_account.printable_iban + '' );

    this.router.navigate(['./app-detalle-contrato']);

  }

  goFacturasContrato(){
    this.dataservice.contrato = this.contrato;
    this.router.navigate(['./app-facturas-contrato']);
  }
}
