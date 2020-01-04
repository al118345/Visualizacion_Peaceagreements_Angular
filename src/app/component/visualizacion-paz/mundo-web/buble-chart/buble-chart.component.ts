import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';


@Component({
  selector: 'app-buble-chart',
  templateUrl: './buble-chart.component.html',
  styleUrls: ['./buble-chart.component.css']
})
export class BubleChartComponent implements OnInit {
  public bubbleChartOptions: ChartOptions;
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;
  //public bubbleChartData: ChartDataSets[];
  public bubbleChartData: Array<any>;
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

    const lenght = this.labels.length;
    let iterator = 0;
    while (iterator < lenght) {
      this.bubbleChartData.push({
        data: info[iterator],
        label: this.labels[iterator]
      })
      iterator ++;
    }
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
          label: function(tooltipItem, data) {
            //alert(JSON.stringify(data.datasets[0].data));
           // alert(JSON.stringify(tooltipItem))
            var aux: number;
            aux= data.datasets[0].data[tooltipItem.index].r;
            return "Cantidad de tratados:" +  data.datasets[0].data[tooltipItem.index].r * 12;
          }

        }}

    };

  }
 chartHovered($event) {
 }


  ngOnInit() {
  }




}
