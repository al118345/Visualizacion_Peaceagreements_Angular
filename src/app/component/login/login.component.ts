import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../service/user.service';
import {AuthService} from '../../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  errorMessage = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private authenticationService: UserService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  // proceso de login, loading muestra el simbolo de carga encima del boton.
  login() {
    this.loading = true;
    this.authService.doLogin(this.model.username, this.model.password)
      .then(res => {
        // alert( JSON.stringify( res))
        // console.log(JSON.stringify( res));
        alert(res.user.emailVerified === true)
        }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.error = 'Usuario o contraseña incorrecto';
        this.loading = false;
      })
  }
  tryGoogleLogin(){
    this.authService.doGoogleLogin()
      .then(res => {
        alert('Correcto');
      })
  }
  // en caso de no tener cuenta, activamos el registro
  registro() {
    this.router.navigate(['/app-registro']);
  }
}
