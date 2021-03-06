import {Component, Input, OnInit} from '@angular/core';
import {FirebaseService} from '../../../service/firebase.service';
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
  model: any = {};
  loading = false;
  mostrartodo = false;
  cambio = false;

  constructor( private graficaListData: FirebaseService) {
    this.paises = [];
    this.tratados = [];
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

  mostarTodo() {
    this.mostrartodo = false;
    if (this.cambio === true) {
      this.cambio = false;
    } else {
      this.cambio = true;
    }
  }

  noMostrarNada() {
    this.mostrartodo = true;
    if (this.cambio === true) {
      this.cambio = false;
    } else {
      this.cambio = true;
    }
  }
}
