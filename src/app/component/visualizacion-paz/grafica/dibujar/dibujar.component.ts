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
  // lineChart
  public factura: Pais;
  public lineChartData: Array<any> = [
    {data: [], label: 'Pais'},
    {data: [], label: 'Esperanza Vida'}
  ];
  public lineChartLabels: Array<String> = [];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartLegend = true;
  public lineChartType:string = 'bar';
  public TipoGrafica: string = 'Ver lineas';

  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.TipoGrafica = this.lineChartType === 'line' ? 'Ver barras' :'Ver lineas'  ;
  }

  public compare(a: Pais, b: Pais) {

    if (a.supp ===  b.supp) {
      return -1;
    } else {
      return 1;
    }
  }



  constructor(private datePipe: DatePipe) { }

  ngOnInit() {

    let lenght = this.paises_local.length;
    let iterator = 0;

    while (iterator < lenght){
      this.factura = this.paises_local[iterator];
      this.lineChartData[0].data.push(this.factura.esperanza_vida);
      this.lineChartLabels.push(this.factura.nombres);
      iterator++;
    }
  }
}
