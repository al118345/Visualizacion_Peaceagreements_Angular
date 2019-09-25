import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

    ngOnInit() {

  }
  contratos() {
    this.router.navigate(['/app-listado-contratos']);
  }
  usuario() {
    this.router.navigate(['/app-usuario']);
  }
  login() {
    this.router.navigate(['/app-login']);
  }
}
