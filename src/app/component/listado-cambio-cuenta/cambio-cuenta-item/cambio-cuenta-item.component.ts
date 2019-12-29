import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../../service/dataservice';
import {CambioCuentaService} from '../../../service/cambio-cuenta.service';

@Component({
  selector: 'app-cambio-cuenta-item',
  templateUrl: './cambio-cuenta-item.component.html',
  styleUrls: ['./cambio-cuenta-item.component.css']
})
export class CambioCuentaItemComponent implements OnInit {

  @Input() iban: string;
  contrato: string;
  ibanactual: string;
  loading: boolean;
  constructor(
    private router: Router,
    public dataservice: CambioCuentaService

  ) {
    this.ibanactual =  localStorage.getItem('iban');
    this.contrato = localStorage.getItem('contrato');
  }


  ngOnInit() {
  }
  SelecionarIban() {


    this.loading = true;
    try { // instrucciones a probar
      const respuesta = this.dataservice.cambiarIban(this.iban, this.contrato);
      if (respuesta === null) {
        alert('El IBAN seleccionado es el actual');
      } else {
        alert('Cambio realizado con éxito');
        this.dataservice.imprimir_mandato(this.contrato);
        this.volverListadoContratos();
      }
      this.loading = false;
    }
    catch (e) {
      alert('El IBAN seleccionado es el actual.');
      this.loading = false;
    }


  }

  volverListadoContratos(){
    this.router.navigate(['./app-listado-contratos']);
  }

}
