import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../model/User';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {
  usuario: User;
  model: any = {};
  loading = false;
  error = '';
  ok: boolean;


  constructor(private authenticationService: UserService) {
    this.ok = false;
  }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('currentUser'));
  }
  cambiocontrasena() {
    this.loading = true;
    if (this.model.password == null){
      this.error = 'Debe indicar la contraseña actual';
      this.loading = false;
    }
    else {
      if(this.model.passwordNuevo == null){
        this.error = 'Debe indicar la nueva contraseña';
      this.loading = false;
      }
      if (this.model.passwordNuevo !== this.model.passwordsegundo) {
      this.error = 'Las contraseñas no son iguales';
      this.loading = false;
      } else {
        if (this.model.passwordNuevo.length < 5) {
          this.error = 'La nueva contraseña es demasiado corta';
          this.loading = false;
        }
        else {
          if (this.model.passwordNuevo == this.model.password){
            this.error = 'La nueva contraseña no puede coincidir con la actual';
            this.loading = false;
          } 
          else{
            if (this.authenticationService.cambiocontraseña(this.model.password, this.model.passwordNuevo)) {
              this.ok = true;//alert("Cambio realizado");
              this.error = '';
              this.loading = false;

            } else {
              // login failed
              this.error = 'Usuario o contraseña incorrecto';
              this.loading = false;
            }
          }
        }
      }
    }
  }
}
