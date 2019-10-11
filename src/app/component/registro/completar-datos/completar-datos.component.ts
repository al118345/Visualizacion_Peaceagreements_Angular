import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../service/auth.service';

@Component({
  selector: 'app-completar-datos',
  templateUrl: './completar-datos.component.html',
  styleUrls: ['./completar-datos.component.css']
})
export class CompletarDatosComponent implements OnInit {
  model: any = {};
  loading = false;
  errorNIF = '';
  errorConditions = '';
  ok: boolean;

  constructor(
    private router: Router,
    private authenticationService: AuthService) { this.ok = false; }

  ngOnInit() {
  }

  // proceso de registro, loading muestra el simbolo de carga encima del boton.
  register() {
    let respuesta;
    let correcto = true;
    this.loading = true;
    if (this.model.accept_conditions) {
      this.errorConditions = 'No has aceptado las condiciones'
      correcto = false;
    }
    if (correcto === true) {
      respuesta = this.authenticationService.doRegister_User(
        this.model.nif,
        this.model.direccionfacturacion,
        this.model.razonsocial,
        this.model.telefono );
      this.ok = true;
    }
    this.loading = false;
  }
  login() {
    this.router.navigate(['/app-login']);
  }
}
