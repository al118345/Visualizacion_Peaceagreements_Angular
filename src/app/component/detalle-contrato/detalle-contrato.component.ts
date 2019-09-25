import { Component, OnInit, OnDestroy } from '@angular/core';
import {Contrato} from '../../model/Contrato';
import {Router, ActivatedRoute} from '@angular/router';
import {DataService} from '../../service/dataservice';
import {CambioCuentaService} from '../../service/cambio-cuenta.service';
import {ContratoService} from '../../service/contrato.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-detalle-contrato',
  templateUrl: './detalle-contrato.component.html',
  styleUrls: ['./detalle-contrato.component.css']
})
export class DetalleContratoComponent implements OnInit, OnDestroy {
  public contrato: Contrato;
  model: any = {};
  public loading: boolean;
  constructor(private router: Router,
    public dataservice: DataService,
              public ibanService: CambioCuentaService, public contratoService: ContratoService) {
  }

  ngOnInit() {
    this.contrato = this.dataservice.contrato;
    this.loading = false;
    if (this.contrato == null){
      this.router.navigate(['./app-listado-contratos']);
    }

  }

  ngOnDestroy() {
    this.contrato = null;
  }

  volverListadoContratos() {
    this.ngOnDestroy();
    this.router.navigate(['./app-listado-contratos']);
  }

  telefonosNotificacion():string{
    let telefonos = '';
    if (this.contrato.notification_address.phone){
      telefonos = this.contrato.notification_address.phone;
      if (this.contrato.notification_address.mobile){
        telefonos += ' - ' + this.contrato.notification_address.mobile;
      }
    }
    else{
      if (this.contrato.notification_address.mobile){
        telefonos = this.contrato.notification_address.mobile;
      }
      else{
        telefonos = '';
      }
    }

    return telefonos;
  }
  modificar_iban()
  {
    this.ngOnDestroy();
    this.router.navigate(['./app-listado-cuenta']);
  }
  imprimir_mandato()
  {
    let contrato: string;
    contrato = localStorage.getItem('contrato');
    this.ibanService.imprimir_mandato(contrato);
  }
  activar_sin_papel() {
    this.loading = true;
    const contrato = localStorage.getItem('contrato');
    const aux = this.contratoService.activar_sin_papel(contrato, this.model.correo )
    if (aux === 'ok') {
        alert('Modificado');
        this.loading = false;
        this.volverListadoContratos();
      } else {
        alert('Error');
        this.loading = false;
      }
  }
}
