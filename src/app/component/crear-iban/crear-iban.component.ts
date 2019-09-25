import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {CambioCuentaService} from '../../service/cambio-cuenta.service';

@Component({
  selector: 'app-crear-iban',
  templateUrl: './crear-iban.component.html',
  styleUrls: ['./crear-iban.component.css']
})
export class CrearIbanComponent implements OnInit {

  model: any = {};
  loading = false;
  errorIBAN = '';
  ok: boolean;
  contrato: string;
  ibanactual: string;
  constructor(
    private router: Router,
    private cambioCuentaService: CambioCuentaService) {
    this.ok = false;
    this.ibanactual =  localStorage.getItem('iban');
  }

  ngOnInit() {
  }

  // proceso de registro, loading muestra el simbolo de carga encima del boton.
  register() {
    let respuesta;
    this.loading = true;
    this.contrato = localStorage.getItem('contrato');
    try {
      if (this.ibanactual === this.model.iban) {
        alert('La cuenta introducida es la utilizada. ');
      } else {
        respuesta = this.cambioCuentaService.cambiarIban(this.model.iban.trim(), this.contrato)

        if (respuesta.result.render.done) {
          this.ok = true;
          this.cambioCuentaService.imprimir_mandato(this.contrato);
          alert('Cambio realizado correctamente.')
          this.volverListadoContratos();
        } else {
          // register failed
          this.errorIBAN = '';
          alert('El iban introducido no es correcto.')
          for (let errores in respuesta.result.render.errors) {
            switch (errores.toString()) {
              case  "FormChangeIban.iban": {
                this.errorIBAN = respuesta.result.render.errors[errores][0] + respuesta.result.render.errors[errores][1];
                break;
              }
            }
          }
        }
        //this.error = 'Usuario o contraseña incorrecto';
        this.loading = false;
      }
    } catch(e) {
        alert('El IBAN seleccionado es el actual. ');
        this.loading = false;
      }

    }
    volverListadoContratos(){
      this.router.navigate(['./app-listado-contratos']);
    }






  }
