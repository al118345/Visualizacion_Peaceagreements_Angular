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
  errorRegistro = '';
  errorConditions = '';
  ok: boolean;

  constructor(
    private router: Router,
    private authenticationService: AuthService) { this.ok = false; }

  ngOnInit() {
  }
  esEmailValido(email: string): boolean {
    const pwdRegEx = new RegExp('/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/');
    return pwdRegEx.test(email);
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
    this.correcto = true;
    this.errorNIF = '';
    this.errorpassword = '';
    this.errorpassword2 = '';
    this.errorName = '';
    this.errorEmail = '';
    this.errorEmail2 = '';
    this.errorConditions = '';
    this.errorRegistro = '';

    if (!this.isValidPasswordString(this.model.password)) {
      this.errorpassword = 'El password no cumple con las condiciones de seguridad. Necesita 6 dígitos como mínimo y por lo menos una ' +
        'mayúscula y una minúscula'
      this.correcto = false;

    }
    alert(this.model.password2  === this.model.password)
    if (!this.model.password === this.model.password2) {
      this.errorpassword2 = 'No coinciden los passwords.'
      this.correcto = false;
    }
    if (!this.model.rep_email === this.model.email) {
      this.errorEmail2 = 'No coincide el email'
      this.correcto = false;
    }
    if (this.esEmailValido(this.model.email)) {
      this.errorEmail = 'El email no es válido'
      this.correcto = false;
    }
    if (this.model.accept_conditions === undefined) {
      this.errorConditions = 'No has aceptado las condiciones'
      this.correcto = false;
    }
    if (this.correcto === true) {
      respuesta = this.authenticationService.doRegister(this.model.nif,
        this.model.direccionfacturacion,
        this.model.razonsocial,
        this.model.telefono,
        this.model.password,
        this.model.email).then(res => {
        this.ok = true;
      }, err => {
        console.log(err);
        this.errorRegistro = 'Usuario ya registrado';
        this.loading = false;
      })
    }
    this.loading = false;
  }
  login() {
    this.router.navigate(['/app-login']);
  }
}
