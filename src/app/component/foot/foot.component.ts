import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'



@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {

  anyo = '';
  constructor() { }

  ngOnInit() {
    this.anyo = moment(new Date()).format('YYYY');
  }

}



