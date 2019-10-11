import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Register} from '../../model/Register';
import {AuthService} from '../../service/auth.service';
import {Alert} from 'selenium-webdriver';

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
  errorpassword2 = '';
  errorName = '';
  errorEmail = '';
  errorEmail2 = '';
  correcto = true;
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
    this.loading = true;
    if (!this.isValidPasswordString(this.model.password)) {
      this.errorpassword = 'El password no cumple con las condiciones de seguridad. Necesita 6 dígitos como mínimo y por lo menos una ' +
        'mayúscula y una minúscula'
      this.correcto = false;

    }
    if (this.model.password === this.model.password2) {
      this.errorpassword2 = 'No coínciden los passwords.'
      this.correcto = false;
    }
    if (this.model.email.equals(this.model.rep_email)) {
      this.errorEmail2 = 'No coincide el email'
      this.correcto = false;
    }
    if (this.model.accept_conditions === null) {
      this.errorConditions = 'No has aceptado las condiciones'
      this.correcto = false;
    }
    alert(this.model.accept_conditions)

    if (this.correcto === true) {
      respuesta = this.authenticationService.doRegister(this.model.nif,
        this.model.direccionfacturacion,
        this.model.razonsocial,
        this.model.telefono,
        this.model.password,
        this.model.email);
      this.ok = true;
    }
    this.loading = false;
  }
  login() {
    this.router.navigate(['/app-login']);
  }
}
