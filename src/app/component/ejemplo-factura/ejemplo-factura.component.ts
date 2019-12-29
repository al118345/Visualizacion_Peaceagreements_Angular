import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ejemplo-factura',
  templateUrl: './ejemplo-factura.component.html',
  styleUrls: ['./ejemplo-factura.component.css']
})
export class EjemploFacturaComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  // volvemos atrás en el registro.
  registro() {
    this.router.navigate(['/app-registro']);
  }

}
