import { Component, OnInit } from '@angular/core';
import {ChartOptions, ChartType, ChartDataSets, ChartPoint} from 'chart.js';
import { Color } from 'ng2-charts';


export interface Prueba {
  x: number;
  y: number;
  r: number;
};

@Component({
  selector: 'app-buble-chart',
  templateUrl: './buble-chart.component.html',
  styleUrls: ['./buble-chart.component.css']
})
export class BubleChartComponent implements OnInit {
  public bubbleChartOptions: ChartOptions;
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;
  public bubbleChartData: ChartDataSets[];
  public labels = [];

  public bubbleChartColors: Color[] = [
    {
      backgroundColor:
        [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
    }
  ];

  constructor() {
    const info = [
      { x: 1, y: 10, r: 529 / 12 },
      { x: 1, y: 9, r: 407 / 12 },
      { x: 1, y: 8, r: 376 / 12 },
      { x: 1, y: 7, r: 248 / 12 },
      { x: 1, y: 6, r: 195 / 12 },
      { x: 1, y: 5, r: 133 / 12 },
      { x: 1, y: 4, r: 128  / 12},
      { x: 1, y: 3, r: 126  / 12},
      { x: 1, y: 2, r: 82 / 12 },
      { x: 1, y: 1, r: 51 / 12 },
    ];
    const  data = [
      { x: 'Africa (excl MENA) ' },
      { x: 'Europe and Eurasia '},
      { x: 'Asia and Pacific ' },
      { x: 'Middle East and North Africa' },
      { x: 'Americas'},
      { x: 'Bosnia and Herzegovina/Yugoslavia (former)'},
      { x: 'Colombia'},
      { x: 'Philippines/Mindanao'},
      { x: 'Syria '  },
      { x: 'Nepal' },
    ];
    for (const entry of data) {
      this.labels.push(entry.x);
    }
    this.labels = this.labels.reverse();
    this.bubbleChartData = [];

    this.bubbleChartData = [
      {
        data: [
          { x: 1, y: 10, r: 529 / 12 },
          { x: 1, y: 9, r: 407 / 12 },
          { x: 1, y: 8, r: 376 / 12 },
          { x: 1, y: 7, r: 248 / 12 },
          { x: 1, y: 6, r: 195 / 12 },
          { x: 1, y: 5, r: 133 / 12 },
          { x: 1, y: 4, r: 128  / 12},
          { x: 1, y: 3, r: 126  / 12},
          { x: 1, y: 2, r: 82 / 12 },
          { x: 1, y: 1, r: 51 / 12 },
        ],
        backgroundColor: 'green',
        borderColor: 'blue',
        hoverBackgroundColor: 'purple',
        hoverBorderColor: 'red',
      },
    ];

    this.bubbleChartOptions =  {
      responsive: true,
      layout: {
        padding: 0
      },
      scales: {
        xAxes: [{
          display: false,
          ticks: {
            min: 0,
            max: 2,
          }
        }],
        yAxes: [{
          ticks: {
            stepSize: 1,
            min: 0,
            max: this.labels.length + 1,
            callback: value => this.labels[value - 1]
          }
        }]
      }, legend: {
        display: false
      }, tooltips: {
        callbacks: {
          label: function(tooltipItem, data ) {
            let aux: Prueba;
            aux = data.datasets[ 0].data[tooltipItem.index] as Prueba;
            return "Cantidad de tratados:" +  aux.r * 12;
          }

        }}

    };

  }
 chartHovered($event) {
 }


  ngOnInit() {
  }




}
