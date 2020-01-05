import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Pais} from '../../../../model/Pais';
import {Tratados} from '../../../../model/Tratados';
import { BaseChartDirective } from 'ng2-charts';





@Component({
  selector: 'app-dibujar',
  templateUrl: './dibujar.component.html',
  styleUrls: ['./dibujar.component.css']
})
export class DibujarComponent implements OnInit, OnChanges{

  @Input() paises: Array<Pais>;
  @Input() tratados: Array<Tratados>;
  @Input() todo: boolean;
  @Input() nada: boolean;
  almacenar_cambio: boolean;
  mostrarinformacion: number;
  texto_tratado = '';

  pais: Pais;
  // lineChart
  public lineChartData: Array<any>;
  public lineChartLabels: Array<String> = [];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartLegend = true;
  public lineChartType:string = 'line';




  ngOnInit() {
      alert(this.todo);
      this.lineChartData = [];
      this.almacenar_cambio = this.nada;
      this.mostrarinformacion = 0;
      const lenght = this.paises.length;
      let iterator = 0;
      const lista_colores = [];
      this.lineChartData = [];
      let contador_array = -1;
      while (iterator < lenght) {
        if (lista_colores.indexOf(this.paises[iterator].supp) === -1) {
          contador_array = contador_array + 1;
          lista_colores.push(this.paises[iterator].supp);
          this.lineChartData.push({data: [], pointRadius: [], pointStyle: [] , hidden: this.todo, fill: false, label: this.paises[iterator].supp})
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
        if (paz) {
          this.lineChartData[contador_array].data.push(this.pais.esperanza_vida);
          this.lineChartData[contador_array].pointRadius.push(10);
          this.lineChartData[contador_array].pointStyle.push('triangle');
        } else {
          this.lineChartData[contador_array].data.push(this.pais.esperanza_vida);
          this.lineChartData[contador_array].pointRadius.push(3);
          this.lineChartData[contador_array].pointStyle.push('circle');
        }
        if ( contador_array === 0  && this.lineChartLabels.length < 58) {
          this.lineChartLabels.push(this.pais.nombres);
        }
        iterator++;
       }
  }




  public chartClicked(e: any): void {
    if (e.active.length > 0) {
      this.mostrarinformacion = 0;
      this.texto_tratado = '';
      const chart = e.active[0]._chart;
      const activePoints = chart.getElementAtEvent(e.event);
      if ( activePoints.length > 0) {
        // get the internal index of slice in pie chart
        const clickedElementIndex = activePoints[0]._index;
        const ano = chart.data.labels[clickedElementIndex];
        const esperanza = chart.data.datasets[activePoints[0]._datasetIndex].data[clickedElementIndex];
        const pais = chart.data.datasets[activePoints[0]._datasetIndex].label;
        if (chart.data.datasets[activePoints[0]._datasetIndex].pointStyle[clickedElementIndex] === 'triangle') {
          const tam_tratados = this.tratados.length;
          let trat = 0;
          while (trat < tam_tratados) {
            if (ano === this.tratados[trat].x) {
              if (pais === this.tratados[trat].vector_pais) {
                this.texto_tratado = this.tratados[trat].vector_tratado + '\n' + this.tratados[trat].vector_tratado_contenido
              }
            }
            trat++;
          }
          this.mostrarinformacion = 1;
        } else {
          this.mostrarinformacion = 0;
        }
      }
    }
  }



  ngOnChanges(changes: SimpleChanges) {
    if (this.nada !== this.almacenar_cambio) {
      this.ngOnInit()
    }
  }




}
