import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../../../model/Factura';
import {DatePipe} from '@angular/common';
import {Pais} from '../../../../model/Pais';

@Component({
  selector: 'app-dibujar',
  templateUrl: './dibujar.component.html',
  styleUrls: ['./dibujar.component.css']
})
export class DibujarComponent implements OnInit {
  @Input() paises: Array<Pais>;
  pais: Pais;
  // lineChart
  public lineChartData: Array<any>;
  public lineChartLabels: Array<String> = [];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartLegend = true;
  public lineChartType:string = 'line';
  public TipoGrafica: string = 'Ver lineas';

  public randomizeType(): void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.TipoGrafica = this.lineChartType === 'line' ? 'Ver barras' : 'Ver lineas'  ;
  }



  ngOnInit() {

    const lenght = this.paises.length;
    alert(lenght);
    let iterator = 0;
    let lista_colores = [];

    this.lineChartData = [
    ];

    let contador_array = -1;
    while (iterator < lenght) {
      if ( lista_colores.indexOf(this.paises[iterator].supp) === -1) {
        contador_array = contador_array + 1;
        lista_colores.push(this.paises[iterator].supp);
        this.lineChartData.push( {data: [],  fill: false, label: this.paises[iterator].supp })
      }
      this.pais = this.paises[iterator];
      this.lineChartData[contador_array].data.push(this.pais.esperanza_vida);
      if ( contador_array === 0 ) {
       this.lineChartLabels.push(this.pais.nombres);
      }
      iterator++;
    }


  }
}
