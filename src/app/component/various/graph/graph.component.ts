import { Component, Input,OnInit } from '@angular/core';
import {Item} from '../../../model/Factura';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @Input() facturas: Array<Item>;
    // lineChart
    public factura: Item;
    public lineChartData: Array<any> = [
      {data: [], label: 'Energía (kWh)'},
      {data: [], label: 'Euros (€)'}
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

    public compare(a:Item, b:Item) {
      if (a.date < b.date){
        return -1;
      }
      else {
        return 1;
      }
    }

    public facturas_local: Array<Item>;
  
  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
    this.facturas_local = this.facturas.slice();
    this.facturas_local.sort(this.compare);
    let lenght = this.facturas_local.length;
    let iterator = 0;
    while (iterator < lenght){
      this.factura = this.facturas_local[iterator];
      this.lineChartData[0].data.push(this.factura.energy_consumed);
      this.lineChartData[1].data.push(this.factura.amount_total);
      this.lineChartLabels.push(this.datePipe.transform(this.factura.date,"dd/MM/yyyy"));
      iterator++;
    }
  }

}
