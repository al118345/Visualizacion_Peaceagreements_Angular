import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../../../model/Factura';
import {DatePipe} from '@angular/common';
import {Pais} from '../../../../model/Pais';
import {Tratados} from '../../../../model/Tratados';

@Component({
  selector: 'app-dibujar',
  templateUrl: './dibujar.component.html',
  styleUrls: ['./dibujar.component.css']
})
export class DibujarComponent implements OnInit {
  @Input() paises: Array<Pais>;
  @Input() tratados: Array<Tratados>;

  pais: Pais;
  // lineChart
  public lineChartData: Array<any>;
  public lineChartLabels: Array<String> = [];
  public chartColors: Array<any> = [];
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
    let iterator = 0;
    let lista_colores = [];

    this.lineChartData = [
    ];

    let contador_array = -1;
    while (iterator < lenght) {
      if (lista_colores.indexOf(this.paises[iterator].supp) === -1) {
        contador_array = contador_array + 1;
        lista_colores.push(this.paises[iterator].supp);
        this.lineChartData.push({data: [], pointRadius: [], pointStyle: [] ,  fill: false, label: this.paises[iterator].supp})
      }
      this.pais = this.paises[iterator];
      let paz = false;
      const tam_tratados = this.tratados.length;
      let trat = 0;
      while (trat < tam_tratados) {
        if (this.pais.nombres === this.tratados[trat].x) {
            if (this.pais.supp === this.tratados[trat].vector_pais) {
              paz = true;
              break;
            }
        }
        trat++;
      }
//https://github.com/valor-software/ng2-charts/tree/master
      if (paz) {
        this.lineChartData[contador_array].data.push(this.pais.esperanza_vida);
        this.lineChartData[contador_array].pointRadius.push(10);
        this.lineChartData[contador_array].pointStyle.push('triangle');

      } else {
        this.lineChartData[contador_array].data.push(this.pais.esperanza_vida);
        this.lineChartData[contador_array].pointRadius.push(3);
        this.lineChartData[contador_array].pointStyle.push('circle');


      }
      if ( contador_array === 0 ) {
        this.lineChartLabels.push(this.pais.nombres);
      }
      iterator++;
    }
  }
}
