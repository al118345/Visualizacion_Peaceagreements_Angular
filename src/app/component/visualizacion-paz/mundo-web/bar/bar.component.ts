import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {

  constructor() { }
  sliderControl: FormControl = new FormControl(2000);
  name: string = '2000';

  options: Options = {
    floor: 1960,
    ceil: 2015
  };

  valueChange(value): void {
    this. name = value.value;
  }



}
