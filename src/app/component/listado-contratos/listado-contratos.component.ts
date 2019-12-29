import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ContratoService} from '../../service/contrato.service';
import {Contrato, ListaContratos} from '../../model/Contrato';

@Component({
  selector: 'app-listado-contratos',
  templateUrl: './listado-contratos.component.html',
  styleUrls: ['./listado-contratos.component.css']
})
export class ListadoContratosComponent implements OnInit {

  // variables para obtener el número de contratos.
  numcontratos: number;
  // variable para mostrar el total de deuda
  precio: number;
  constructor(private router: Router,
              private contrato_lista: ContratoService) {
    // numero total de contratos a mostrar
    this.numcontratos = this.contrato_lista.getContrato().items.length;
    this.obtenerDeuda();
  }

  /*
    función que sirve para obtener el precio de la suma de todo el pedido
   */
  obtenerDeuda() {
    let arrayContrato: Array<Contrato>;
    arrayContrato = this.contrato_lista.getContrato().items;
    let i;
    let precioLinia: number;
    this.precio = 0;

    // para cada pedido sumo el precio
    for (i = 0; i < this.numcontratos; i++) {
      let aux: Contrato;
      aux = arrayContrato[i];
      // limpio el valor del precio
      precioLinia  = arrayContrato[i].amount_debt;
      this.precio = this.precio + Number(precioLinia);
    }
  }
  ngOnInit() {
  }
}
