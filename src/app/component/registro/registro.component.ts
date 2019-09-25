import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RegisterService} from '../../service/register.service';
import {RootObject} from '../../model/Register';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  model: any = {};
  loading = false;
  errorNIF = '';
  errorCUPS = '';
  errorContract = '';
  errorEmail = '';
  errorEmail2 = '';
  errorConditions = '';
  ok: boolean;

  constructor(
    private router: Router,
    private authenticationService: RegisterService) { this.ok = false; }

  ngOnInit() {
  }

  // proceso de registro, loading muestra el simbolo de carga encima del boton.
  register() {
    var respuesta;
    this.loading = true;
    respuesta = this.authenticationService.register(this.model.nif, 
      this.model.contract, 
      this.model.cups, 
      this.model.email, 
      this.model.rep_email,
      this.model.accept_conditions) 
    if (respuesta.result.render.done){
      this.ok = true;
      //this.router.navigate(['/app-confirm-registro',this.model.email]);
    } else {
      // register failed
      this.errorNIF = '';
      this.errorCUPS = '';
      this.errorContract = '';
      this.errorEmail = '';
      this.errorEmail2 = '';
      this.errorConditions = '';
      for (let errores in respuesta.result.render.errors){
        switch (errores.toString()){
          case  "FormConfirm.accept_conditions":{
            this.errorConditions = "Se deben aceptar las condiciones de uso." + "\n";          break;
          }
          case  "FormConfirm.contract":{
            this.errorContract = respuesta.result.render.errors[errores][0];
            break;
          }
          case  "FormConfirm.cups":{
            this.errorCUPS = respuesta.result.render.errors[errores][0];
            break;
          }
          case  "FormConfirm.email":{
            this.errorEmail = respuesta.result.render.errors[errores][0];
            break;
          }
          case  "FormConfirm.email2":{
            this.errorEmail2 = respuesta.result.render.errors[errores][0];
            break;
          }
          case  "FormConfirm.nif": {
            this.errorNIF = respuesta.result.render.errors[errores][0];
            break;
          }
        }
          
        
      }
      //this.error = 'Usuario o contraseña incorrecto';
      this.loading = false;
    }
  }
  ejemplo_factura() {
    this.router.navigate(['/app-ejemplo-factura']);
  }

  login() {
    this.router.navigate(['/app-login']);
  }
}
