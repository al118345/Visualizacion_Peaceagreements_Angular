import {Component, Input, OnInit} from '@angular/core';
import {FacturasService} from '../../../service/facturas.service';
import {DataService} from '../../../service/dataservice';
import {FirebaseService} from '../../../service/firebase.service';
import {Item} from '../../../model/Factura';
import {Pais} from '../../../model/Pais';
import {Tratados} from '../../../model/Tratados';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  errorMessage = ''
  paises: Array<Pais>;
  tratados: Array<Tratados>;

  constructor( private graficaListData: FirebaseService) {
    this.paises = []
    this.tratados = []

    this.graficaListData.getTratados().subscribe(
      tratados => {
        for (let i = 0; i < tratados.length; i++) {
          this.tratados.push(<Tratados>tratados[i]);
        }
        this.graficaListData.getEvolutionLife().subscribe(
          paises => {
            for (let i = 0; i < paises.length; i++) {
              this.paises.push(<Pais>paises[i]);
            }


          } , error => this.errorMessage = <any>error);
      }
      , error => this.errorMessage = <any>error);

  }

  ngOnInit() {

  }

}
