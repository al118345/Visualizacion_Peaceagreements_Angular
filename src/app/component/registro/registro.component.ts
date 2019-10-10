import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RegisterService} from '../../service/register.service';
import {RootObject} from '../../model/Register';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  model: any = {};
  loading = false;
  errorNIF = '';
  errorpassword = '';
  errorName = '';
  errorEmail = '';
  errorEmail2 = '';
  errorConditions = '';
  ok: boolean;

  constructor(
    private router: Router,
    private authenticationService: AuthService) { this.ok = false; }

  ngOnInit() {
  }
  isValidPasswordString(pass) {
    const pwdRegEx = new RegExp('(?:(?:(?=.*?[0-9])(?=.*?[-!@#$%&*ˆ+=_])|(?:(?=.*?[0-9])|(?=.*?[A-Z])|(?=.*?[-!@#$%&*ˆ+=_])))|(?=.*' +
      '?[a-z])(?=.*?[0-9])(?=.*?[-!@#$%&*ˆ+=_]))[A-Za-z0-9-!@#$%&*ˆ+=_]{6,15}');

    return pwdRegEx.test(pass);
  }

  // proceso de registro, loading muestra el simbolo de carga encima del boton.
  register() {
    let respuesta;
    let correcto = true;
    this.loading = true;
    alert(this.model.password)
    if (!this.isValidPasswordString(this.model.password)) {
      alert(777);
      correcto = false;
    }
    if (correcto === true) {
      respuesta = this.authenticationService.doRegister(this.model.nif,
        this.model.name,
        this.model.password,
        this.model.email);
      this.ok = true;
    }
    /*
    if (respuesta.result.render.done) {
      this.ok = true;
    } else {
      // register failed
      this.errorNIF = '';
      this.errorName = '';
      this.errorEmail = '';
      this.errorEmail2 = '';
      this.errorConditions = '';
      if (this.model.nif === null) {
        this.errorName = 'Nif incorrecto'
      }
      if (this.model.name === null) {
        this.errorName = 'Nif incorrecto'
      }
      if (this.model.name === null) {
        this.errorName = 'Nif incorrecto'
      }
      if (this.model.name === null) {
        this.errorName = 'Nif incorrecto'
      }
      if (this.model.name === null) {
        this.errorName = 'Nif incorrecto'
      }

      this.loading = false;
    }*/
    this.loading = false;
  }
  login() {
    this.router.navigate(['/app-login']);
  }
}
