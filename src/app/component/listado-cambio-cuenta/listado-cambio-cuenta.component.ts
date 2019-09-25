import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CambioCuentaService} from '../../service/cambio-cuenta.service';

@Component({
  selector: 'app-listado-cambio-cuenta',
  templateUrl: './listado-cambio-cuenta.component.html',
  styleUrls: ['./listado-cambio-cuenta.component.css']
})
export class ListadoCambioCuentaComponent implements OnInit {

  // variables para obtener el número de contratos.
  numcuentas: number;
  contrato: string;
  // variable para mostrar el total de deuda
  precio: number;
  ibanactual: string;
  banco: string;

  constructor(private router: Router,
              private contrato_lista: CambioCuentaService) {
    this.ibanactual =  localStorage.getItem('iban');
    this.banco =  localStorage.getItem('banco');
    // numero total de contratos a mostrar
    this.contrato =  String(localStorage.getItem('contrato'));
    this.numcuentas = this.contrato_lista.getNumeroCuenta(this.contrato).length;

  }


  ngOnInit() {
  }
  ngOnDestroy() {
    this.contrato = null;
  }
  volverListadoContratos(){
    this.ngOnDestroy();
    this.router.navigate(['./app-listado-contratos']);
  }

}
